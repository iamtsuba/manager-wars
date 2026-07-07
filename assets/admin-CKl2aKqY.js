import{s as h,r as De,g as Ne,K as Ee,D as S,S as et,a as M,H as tt,R as nt,e as ue,b as Pe,c as it,d as ot,E as at,f as rt,N as lt,M as st,B as dt,h as ct,F as me,i as we,j as pt,k as ut}from"./formation-links-b4FC4Kug.js";async function mt(e){const[{count:t},{count:n},{count:i},{count:c},{count:l}]=await Promise.all([h.from("players").select("*",{count:"exact",head:!0}),h.from("clubs").select("*",{count:"exact",head:!0}),h.from("users").select("*",{count:"exact",head:!0}),h.from("cards").select("*",{count:"exact",head:!0}),h.from("matches").select("*",{count:"exact",head:!0})]);e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px">
      ${te("🃏","Joueurs (cartes)",t??"–","#1A6B3C")}
      ${te("🏟️","Clubs",n??"–","#D4A017")}
      ${te("👥","Managers",i??"–","#7a28b8")}
      ${te("📦","Cartes possédées",c??"–","#2a8f52")}
      ${te("⚽","Matchs joués",l??"–","#bb2020")}
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
  `,window.adminNav=s=>{var r;(r=document.querySelector(`[data-page="${s}"]`))==null||r.click()}}function te(e,t,n,i){return`<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${e}</div>
    <div style="font-size:28px;font-weight:700;color:${i}">${n}</div>
    <div style="font-size:11px;color:var(--gray-600)">${t}</div>
  </div>`}const qe="/",Oe={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},gt={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};let ne=null;async function ft(){if(ne)return ne;try{ne=await(await fetch(qe+"faces-manifest.json")).json()}catch{ne={}}return ne}async function bt(e,t){await de(e,t)}async function de(e,t){const{toast:n}=t,[{data:i,error:c},{data:l}]=await Promise.all([h.from("players").select("*, clubs(id,encoded_name,logo_url)").order("surname_encoded"),h.from("clubs").select("id,encoded_name").order("encoded_name")]);if(c){e.innerHTML=`<p style="color:red">${c.message}</p>`;return}xt(e,i||[],l||[],t)}function xt(e,t,n,i){var a,g;const{toast:c}=i;e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:10px">
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <input id="search-players" placeholder="🔍 Nom, prénom…" style="flex:1;min-width:140px">
        <select id="filter-job" style="width:100px">
          <option value="">Tout</option>
          <option value="GK">GK</option><option value="DEF">DEF</option>
          <option value="MIL">MIL</option><option value="ATT">ATT</option>
        </select>
        <select id="filter-rarity" style="width:110px">
          <option value="">Toutes</option>
          ${Object.entries(Oe).map(([o,d])=>`<option value="${o}">${d}</option>`).join("")}
        </select>
        <button class="btn btn-primary" id="add-player-btn" style="white-space:nowrap">+ Joueur</button>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <select id="filter-club" style="flex:1;min-width:140px">
          <option value="">Tous les clubs</option>
          ${n.map(o=>`<option value="${o.id}">${o.encoded_name}</option>`).join("")}
        </select>
        <select id="filter-country" style="flex:1;min-width:120px">
          <option value="">Tous les pays</option>
          ${[...new Set(t.map(o=>o.country_code).filter(Boolean))].sort().map(o=>`<option value="${o}">${o}</option>`).join("")}
        </select>
      </div>
      <div id="count-label" style="font-size:12px;color:var(--gray-600)">${t.length} joueur(s)</div>
      <div id="bulk-bar" style="display:none;align-items:center;gap:8px;padding:8px 10px;background:rgba(187,32,32,0.08);border:1px solid #bb2020;border-radius:10px">
        <span id="bulk-count" style="font-size:13px;font-weight:700;color:#bb2020;flex:1"></span>
        <button class="btn btn-danger btn-sm" id="bulk-delete-btn">🗑️ Supprimer la sélection</button>
        <button class="btn btn-ghost btn-sm" id="bulk-cancel-btn">Annuler</button>
      </div>
      <!-- Grille de cartes -->
      <div id="players-list" style="display:flex;flex-wrap:wrap;gap:12px"></div>
    </div>`;function l(){const o=document.getElementById("search-players").value.toLowerCase(),d=document.getElementById("filter-job").value,p=document.getElementById("filter-rarity").value,f=document.getElementById("filter-club").value,E=document.getElementById("filter-country").value;return t.filter(w=>(!o||`${w.firstname} ${w.surname_encoded}`.toLowerCase().includes(o))&&(!d||w.job===d)&&(!p||w.rarity===p)&&(!f||w.club_id===f)&&(!E||w.country_code===E))}const s=new Set;function r(){const o=document.getElementById("bulk-bar"),d=document.getElementById("bulk-count");o&&(o.style.display=s.size>0?"flex":"none",d&&(d.textContent=`${s.size} joueur(s) sélectionné(s)`))}function m(){const o=l();document.getElementById("count-label").textContent=`${o.length} joueur(s)`;const d=document.getElementById("players-list");if(!o.length){d.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}d.innerHTML=o.map(p=>{const f={...p,clubs:p.clubs,face:p.face||null},E=De(f,{width:120});return`<div style="position:relative;cursor:pointer" data-edit="${p.id}">
        ${E}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${p.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),d.querySelectorAll("[data-edit]").forEach(p=>{p.addEventListener("click",()=>{const f=t.find(E=>E.id===p.dataset.edit);f&&_e(f,n,e,i)})}),d.querySelectorAll(".btn-del-player").forEach(p=>{p.addEventListener("click",async f=>{if(f.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:E}=await h.from("players").delete().eq("id",p.dataset.del);E?c(E.message,"error"):(c("Joueur supprimé ✅","success"),de(e,i))})})}m(),document.getElementById("search-players").addEventListener("input",m),document.getElementById("filter-job").addEventListener("change",m),document.getElementById("filter-rarity").addEventListener("change",m),document.getElementById("filter-club").addEventListener("change",m),document.getElementById("filter-country").addEventListener("change",m),(a=document.getElementById("bulk-cancel-btn"))==null||a.addEventListener("click",()=>{s.clear(),r(),m()}),(g=document.getElementById("bulk-delete-btn"))==null||g.addEventListener("click",async()=>{if(!s.size||!confirm(`Supprimer ${s.size} joueur(s) ?`))return;const o=[...s],{error:d}=await h.from("players").delete().in("id",o);if(d){c(d.message,"error");return}c(`${o.length} joueur(s) supprimé(s) ✅`,"success"),s.clear(),de(e,i)}),document.getElementById("add-player-btn").addEventListener("click",()=>_e(null,n,e,i))}async function _e(e,t,n,i){const{toast:c,openModal:l,closeModal:s}=i,r=!!e,m=await ft(),{data:a}=await h.from("players").select("face").not("face","is",null),g=new Set((a||[]).map(p=>p.face).filter(Boolean));e!=null&&e.face&&g.delete(e.face);const o='<option value="">— Club —</option>'+t.map(p=>`<option value="${p.id}" ${(e==null?void 0:e.club_id)===p.id?"selected":""}>${p.encoded_name}</option>`).join(""),d=Object.keys(m).map(p=>{var f;return`<option value="${p}" ${(f=e==null?void 0:e.face)!=null&&f.startsWith(p)?"selected":""}>${p}</option>`}).join("");l(r?`✏️ ${e.firstname} ${e.surname_encoded}`:"➕ Nouveau joueur",`<div style="display:flex;gap:20px;align-items:flex-start">

      <!-- Colonne gauche : aperçu carte -->
      <div style="flex-shrink:0;position:sticky;top:0">
        <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;text-align:center">Aperçu</div>
        <div id="card-preview" style="min-width:160px"></div>
      </div>

      <!-- Colonne droite : formulaire -->
      <div style="flex:1;min-width:300px;display:flex;flex-direction:column;gap:12px">

        <!-- Identité -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <div class="form-group">
            <label>Prénom *</label>
            <input id="pm-fn" value="${(e==null?void 0:e.firstname)||""}" placeholder="Lucas">
          </div>
          <div class="form-group">
            <label>Nom *</label>
            <input id="pm-real" value="${(e==null?void 0:e.surname_real)||(e==null?void 0:e.surname_encoded)||""}" placeholder="Silva">
          </div>
        </div>

        <!-- Poste + Rareté + Pays -->
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px">
          <div class="form-group">
            <label>Poste 1</label>
            <select id="pm-job">
              ${["GK","DEF","MIL","ATT"].map(p=>`<option value="${p}" ${(e==null?void 0:e.job)===p?"selected":""}>${p}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Poste 2</label>
            <select id="pm-job2">
              <option value="">Aucun</option>
              ${["GK","DEF","MIL","ATT"].map(p=>`<option value="${p}" ${(e==null?void 0:e.job2)===p?"selected":""}>${p}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Rareté</label>
            <select id="pm-rarity">
              ${["normal","pepite","papyte","legende"].map(p=>`<option value="${p}" ${(e==null?void 0:e.rarity)===p?"selected":""}>${Oe[p]}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Pays</label>
            <select id="pm-country">
              ${["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"].map(p=>`<option value="${p}" ${((e==null?void 0:e.country_code)||"FR")===p?"selected":""}>${p}</option>`).join("")}
            </select>
          </div>
        </div>

        <!-- Club + Prix -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <div class="form-group">
            <label>Club</label>
            <select id="pm-club">${o}</select>
          </div>
          <div class="form-group">
            <label>Prix vente (cr.)</label>
            <input id="pm-price" type="number" min="0" value="${(e==null?void 0:e.sell_price)||0}">
          </div>
        </div>

        <!-- Notes -->
        <div style="border-top:1px solid var(--gray-200);padding-top:10px">
          <div style="font-weight:700;font-size:13px;margin-bottom:8px">📊 Notes (0–20)</div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px">
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([p,f,E])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${gt[p]};font-weight:700">${p}</label>
                <input id="${f}" type="number" min="0" max="20" value="${(e==null?void 0:e[E])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
              </div>`).join("")}
          </div>
          <div id="pm-minmax" style="display:${["pepite","papyte"].includes(e==null?void 0:e.rarity)?"grid":"none"};grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
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

        <!-- Physique : choix du dossier puis de la face -->
        <div style="border-top:1px solid var(--gray-200);padding-top:10px">
          <div style="font-weight:700;font-size:13px;margin-bottom:8px">🧑 Physique</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
            <div class="form-group">
              <label>Ethnie</label>
              <select id="pm-folder">
                <option value="">— Choisir —</option>
                ${d}
              </select>
            </div>
            <div class="form-group">
              <label>Visage</label>
              <select id="pm-face">
                <option value="">— Choisir un visage —</option>
              </select>
            </div>
          </div>
          <!-- Aperçu grille de visages -->
          <div id="faces-grid" style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;max-height:200px;overflow-y:auto"></div>
        </div>

        <div id="pm-error" style="color:#bb2020;font-size:13px;min-height:16px"></div>
        <button class="btn btn-primary" id="pm-save" style="width:100%;padding:14px;font-size:15px">
          ${r?"💾 Enregistrer":"✅ Créer le joueur"}
        </button>
      </div>
    </div>`),setTimeout(()=>{var k,$,v;let p=(e==null?void 0:e.face)||null;function f(){var z,K,D,W,Z,X,Q,ee,ve,ye,he;const u=document.getElementById("card-preview");if(!u)return;const x=((z=document.getElementById("pm-fn"))==null?void 0:z.value)||"",y=(((K=document.getElementById("pm-real"))==null?void 0:K.value)||"").toUpperCase(),_=((D=document.getElementById("pm-job"))==null?void 0:D.value)||"ATT",L=((W=document.getElementById("pm-job2"))==null?void 0:W.value)||null,I=((Z=document.getElementById("pm-rarity"))==null?void 0:Z.value)||"normal",B=((X=document.getElementById("pm-country"))==null?void 0:X.value)||"FR",A=((Q=document.getElementById("pm-club"))==null?void 0:Q.value)||null,C=document.getElementById("pm-club"),T=C==null?void 0:C.options[C.selectedIndex];(T==null?void 0:T.text)!=="— Club —"&&(T==null||T.text);const P=parseInt((ee=document.getElementById("pm-g"))==null?void 0:ee.value)||0,q=parseInt((ve=document.getElementById("pm-d"))==null?void 0:ve.value)||0,O=parseInt((ye=document.getElementById("pm-m"))==null?void 0:ye.value)||0,F=parseInt((he=document.getElementById("pm-a"))==null?void 0:he.value)||0,R=t.find(Qe=>Qe.id===A),H={firstname:x||"Prénom",surname_encoded:y||"NOM",job:_,job2:L||null,rarity:I,country_code:B,club_id:A,note_g:P,note_d:q,note_m:O,note_a:F,face:p,clubs:R?{encoded_name:R.encoded_name,logo_url:R.logo_url}:null};u.innerHTML=De(H,{width:160});const j=document.getElementById("pm-minmax");j&&(j.style.display=["pepite","papyte"].includes(I)?"grid":"none")}function E(u){const x=document.getElementById("faces-grid"),y=document.getElementById("pm-face");if(!x||!y)return;const L=(m[u]||[]).filter(I=>{const B=u+"/"+I;return B===p||!g.has(B)});y.innerHTML='<option value="">— Choisir un visage —</option>'+L.map(I=>{const B=u+"/"+I;return`<option value="${B}" ${p===B?"selected":""}>${I}</option>`}).join(""),x.innerHTML=L.map(I=>{const B=u+"/"+I;return`<div data-face="${B}" style="cursor:pointer;border:2px solid ${p===B?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${qe}faces/${B}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),x.querySelectorAll("[data-face]").forEach(I=>{I.addEventListener("click",()=>{p=I.dataset.face;const B=document.getElementById("pm-face");B&&(B.value=p),x.querySelectorAll("[data-face]").forEach(A=>{A.style.border=`2px solid ${A.dataset.face===p?"#4fc3f7":"transparent"}`}),f()})})}const w=e!=null&&e.face?e.face.split("/")[0]:"";w&&m[w]&&(document.getElementById("pm-folder").value=w,E(w)),(k=document.getElementById("pm-folder"))==null||k.addEventListener("change",u=>{E(u.target.value)}),($=document.getElementById("pm-face"))==null||$.addEventListener("change",u=>{p=u.target.value||null,f()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach(u=>{var x,y;(x=document.getElementById(u))==null||x.addEventListener("input",f),(y=document.getElementById(u))==null||y.addEventListener("change",f)}),(v=document.getElementById("pm-save"))==null||v.addEventListener("click",()=>yt(e,r,p,n,i)),f()},50)}function vt(e){const t=n=>{var i;return(i=document.getElementById(n))==null?void 0:i.value};return{firstname:(t("pm-fn")||"").trim(),surname_real:(t("pm-real")||"").trim(),surname_encoded:(t("pm-real")||"").trim().toUpperCase(),country_code:t("pm-country")||"FR",club_id:t("pm-club")||null,job:t("pm-job")||"ATT",job2:t("pm-job2")||null,rarity:t("pm-rarity")||"normal",note_g:parseInt(t("pm-g"))||0,note_d:parseInt(t("pm-d"))||0,note_m:parseInt(t("pm-m"))||0,note_a:parseInt(t("pm-a"))||0,note_min:parseInt(t("pm-nmin"))||null,note_max:parseInt(t("pm-nmax"))||null,sell_price:parseInt(t("pm-price"))||0,face:e||null,is_active:!0}}async function yt(e,t,n,i,c){const{toast:l,closeModal:s}=c,r=document.getElementById("pm-error"),m=document.getElementById("pm-save"),a=vt(n);if(!a.firstname){r.textContent="Le prénom est requis.";return}if(!a.surname_real){r.textContent="Le nom est requis.";return}m.disabled=!0,m.textContent="Enregistrement…";const{surname_real:g,...o}=a,{error:d}=t?await h.from("players").update({...o,updated_at:new Date().toISOString()}).eq("id",e.id):await h.from("players").insert(o);if(d){r.textContent=d.message,m.disabled=!1,m.textContent=t?"💾 Enregistrer":"✅ Créer le joueur";return}l(t?"Joueur modifié ✅":"Joueur créé ✅","success"),s(),de(i,c)}const ht={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},Et=["rase","court","milong","long"];function wt(e){const t=He(e);if(t==="noir")return"noir";if(t==="typ")return Math.random()<.9?"noir":"marron";if(t==="metisse")return Math.random()<.6?"noir":"marron";const n=Math.random();return n<.35?"blond":n<.75?"marron":"noir"}function _t(e){return Math.random()<.05?"chauve":wt(e)}const Fe=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function He(e){return ht[e]||"blanc"}function $t(e){return _t(e)}function kt(e,t){return Math.floor(Math.random()*(t-e+1))+e}function ae(e){return e[Math.floor(Math.random()*e.length)]}function It(e){const t=Fe.filter(n=>n!==e);return ae(t)}function Lt(e,t){const n=["Lucas","Mateo","Rafael","Carlos","Luis","Diego","Andre","Paulo","Marco","Stefan","Ahmed","Omar","Yusuf","Mamadou","Ibrahima","Cheikh","Moussa","Kofi","Emeka","Tunde","Ryota","Kenji","Hiroshi","Jae","Sung","Wei","Ming","Van","Duc","Sorn","James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Hugo","Alexis","Théo","Antoine","Kylian","Rayan","Axel","Tom","Paul","Enzo","Léo","João","Gabriel","Felipe","Roberto","César","Miguel","Ivan","Luca","Federico","Sergio"],i=["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Diallo","Traore","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Nakamura","Tanaka","Suzuki","Kim","Park","Lee","Chen","Wang","Liu","Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Dubois","Martin","Bernard","Thomas","Petit","Dupont","Moreau","Laurent","Garcia","Fernandez","Rodriguez","Gonzalez","Hernandez","López","Sánchez"],c=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],l=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],s=new Set(l.sort(()=>Math.random()-.5).slice(0,4)),r=[...l].sort(()=>Math.random()-.5),m=new Set(r.slice(0,2)),a=new Set(r.slice(2,4)),g=10,o=c.map((d,p)=>p<g);for(let d=o.length-1;d>0;d--){const p=Math.floor(Math.random()*(d+1));[o[d],o[p]]=[o[p],o[d]]}return c.map((d,p)=>{const f=o[p]?t:It(t),E=He(f),w=$t(f),b=ae(Et),k=kt(1,20),$=s.has(p),v=$?Math.max(0,k-2):0;let u=0,x=0,y=0,_=0,L=null;d==="GK"?u=k:d==="DEF"?(x=k,$&&(y=v,L="MIL")):d==="ATT"?(_=k,$&&(y=v,L="MIL")):(y=k,$&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(x=v,L="DEF"):(_=v,L="ATT")));const I=m.has(p)?"pepite":a.has(p)?"papyte":"normal",B=ae(i),A=B.toUpperCase();return{job:d,job2:L,firstname:ae(n),surname_real:B,surname_encoded:A,country_code:f,club_id:e,note_g:u,note_d:x,note_m:y,note_a:_,skin:E,hair:w,hair_length:b,rarity:I,sell_price:0}})}async function Ge(e,t,n){const i=Lt(e,t),{data:c,error:l}=await h.from("players").insert(i).select("id");if(l){console.error("[GenSquad] Erreur batch insert:",l.message,l.details),n("Erreur: "+l.message,"error");return}const s=(c||[]).map(m=>({card_type:"player",player_id:m.id}));if(s.length){const{error:m}=await h.from("cards").insert(s);m&&console.warn("[GenSquad] Erreur cartes:",m.message)}const r=(c==null?void 0:c.length)||0;console.log("[GenSquad] Créés:",r,"/",i.length),r>0?n(`${r} joueurs générés ✅`,"success"):n("Erreur génération joueurs","error")}function Ue(e){return{style:e.kit_style||S.style,color1:e.kit_color1||S.color1,color2:e.kit_color2||S.color2,color3:e.kit_color3||S.color3,shorts:e.kit_shorts||S.shorts,socks:e.kit_socks||S.socks}}let re=[];async function Bt(e,t){await ce(e,t)}async function ce(e,t){const[{data:n,error:i},{data:c}]=await Promise.all([h.from("clubs").select("*").order("real_name"),h.from("players").select("club_id")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}re=n||[];const l={};(c||[]).forEach(s=>{l[s.club_id]=(l[s.club_id]||0)+1}),zt(e,t,l)}function zt(e,t,n={}){const{toast:i,openModal:c,closeModal:l}=t;e.innerHTML=`
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:14px">
      <input id="search-clubs" placeholder="🔍 Rechercher…" style="flex:1">
      <button class="btn btn-primary" id="add-club-btn" style="white-space:nowrap">+ Club</button>
    </div>
    <div id="clubs-list" style="display:flex;flex-direction:column;gap:8px"></div>`,s(re),document.getElementById("search-clubs").addEventListener("input",r=>{const m=r.target.value.toLowerCase();s(re.filter(a=>a.real_name.toLowerCase().includes(m)||a.encoded_name.toLowerCase().includes(m)))}),document.getElementById("add-club-btn").addEventListener("click",()=>$e(null,e,t));function s(r){const m=document.getElementById("clubs-list");if(!r.length){m.innerHTML='<p style="color:var(--gray-600);padding:20px">Aucun club.</p>';return}m.innerHTML=r.map(a=>{const g=Ue(a),o=Ne(g,a.id).replace("<svg ",'<svg style="width:40px;height:48px" '),d=a.logo_url?`<img src="${a.logo_url}" style="width:40px;height:40px;object-fit:contain;border-radius:8px">`:`<div style="width:40px;height:40px;background:linear-gradient(135deg,${g.color1},${g.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:900">${a.encoded_name.slice(0,3)}</div>`,p=n[a.id]||0;return`
        <div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px">
          ${d}
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.real_name}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
              <img src="https://flagsapi.com/${a.country_code}/flat/24.png" style="height:12px" onerror="this.style.display='none'">
              <span style="font-size:11px;color:var(--gray-600);font-family:monospace">${a.encoded_name} · ${a.country_code}</span>
            </div>
            <div style="font-size:11px;margin-top:2px;color:${p===0?"#e67e22":"var(--gray-600)"}">
              ${p===0?"⚠️ Aucun joueur":`👥 ${p} joueur${p>1?"s":""}`}
            </div>
          </div>
          ${o}
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            ${p===0?`<button class="btn btn-primary btn-sm" data-gen="${a.id}" data-cc="${a.country_code}" data-name="${a.real_name}" title="Générer joueurs">⚽</button>`:""}
            <button class="btn btn-ghost btn-sm" data-edit="${a.id}">✏️</button>
            <button class="btn btn-danger btn-sm" data-del="${a.id}">🗑️</button>
          </div>
        </div>`}).join(""),m.querySelectorAll("[data-gen]").forEach(a=>{a.addEventListener("click",async()=>{confirm(`Générer 20 joueurs pour ${a.dataset.name} ?`)&&(a.disabled=!0,a.textContent="⏳",await Ge(a.dataset.gen,a.dataset.cc,i),ce(e,t))})}),m.querySelectorAll("[data-edit]").forEach(a=>{const g=re.find(o=>o.id===a.dataset.edit);a.addEventListener("click",()=>$e(g,e,t))}),m.querySelectorAll("[data-del]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:g}=await h.from("clubs").delete().eq("id",a.dataset.del);g?i(g.message,"error"):(i("Club supprimé","success"),ce(e,t))})})}}function $e(e,t,n){const{toast:i,openModal:c,closeModal:l}=n,s=!!e,r=e?Ue(e):{...S},m=Object.entries(Ee).map(([g,o])=>`<option value="${g}" ${r.style===g?"selected":""}>${o.label}</option>`).join(""),a=Fe.map(g=>`<option value="${g}" ${((e==null?void 0:e.country_code)||"FR")===g?"selected":""}>${g}</option>`).join("");c(s?`✏️ ${e.real_name}`:"➕ Nouveau club",`<div style="display:flex;flex-direction:column;gap:14px">

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
            ${a}
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
            ${[["Couleur 1","m-kit-color1",r.color1,!1],["Couleur 2","m-kit-color2",r.color2,!1],["Couleur 3","m-kit-color3",r.color3,!0],["Short","m-kit-shorts",r.shorts,!1],["Chaussettes","m-kit-socks",r.socks,!1]].map(([g,o,d,p])=>`
              <div class="form-group" id="wrap-${o}" ${p?'style="display:none"':""}>
                <label>${g}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${o}" value="${d||"#000000"}" style="width:38px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${o}-txt" value="${d||"#000000"}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
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
    </div>`),setTimeout(()=>{var f,E,w;ie();function g(){var v,u;const b=((v=document.getElementById("m-kit-style"))==null?void 0:v.value)||"uni",k=((u=Ee[b])==null?void 0:u.colors)===3,$=document.getElementById("wrap-m-kit-color3");$&&($.style.display=k?"":"none")}g(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(b=>{const k=document.getElementById(b),$=document.getElementById(b+"-txt");!k||!$||(k.addEventListener("input",()=>{$.value=k.value,ie()}),$.addEventListener("input",()=>{const v=$.value.trim();/^#[0-9a-fA-F]{6}$/.test(v)&&(k.value=v,ie())}),$.addEventListener("change",()=>{let v=$.value.trim();v.startsWith("#")||(v="#"+v),/^#[0-9a-fA-F]{6}$/.test(v)&&(k.value=v,$.value=v,ie())}))}),(f=document.getElementById("m-kit-style"))==null||f.addEventListener("change",()=>{g(),ie()});const o=document.getElementById("m-real"),d=document.getElementById("m-encoded");function p(){if(!o||!d||d.value)return;const b=o.value.trim().split(/\s+/),k=b.length===1?b[0].toUpperCase().slice(0,6):b.filter($=>$.length>2).map($=>$[0].toUpperCase()).join("")||b[0].toUpperCase().slice(0,4);d.value=k}o==null||o.addEventListener("input",p),(E=document.getElementById("auto-encode-btn"))==null||E.addEventListener("click",()=>{d&&(d.value=""),p()}),(w=document.getElementById("m-save"))==null||w.addEventListener("click",()=>At(e,s,t,n))},50)}function Ve(){var e,t,n,i,c,l;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((t=document.getElementById("m-kit-color1"))==null?void 0:t.value)||"#1A6B3C",color2:((n=document.getElementById("m-kit-color2"))==null?void 0:n.value)||"#ffffff",color3:((i=document.getElementById("m-kit-color3"))==null?void 0:i.value)||"#000000",shorts:((c=document.getElementById("m-kit-shorts"))==null?void 0:c.value)||"#111111",socks:((l=document.getElementById("m-kit-socks"))==null?void 0:l.value)||"#ffffff"}}function ie(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=Ne(Ve(),"modal"))}async function At(e,t,n,i){var b,k,$,v,u,x;const{toast:c,closeModal:l}=i,s=document.getElementById("m-error"),r=document.getElementById("m-save"),m=(b=document.getElementById("m-real"))==null?void 0:b.value.trim(),a=(k=document.getElementById("m-encoded"))==null?void 0:k.value.trim().toUpperCase(),g=($=document.getElementById("m-country"))==null?void 0:$.value.trim().toUpperCase(),o=((v=document.getElementById("m-logo"))==null?void 0:v.value.trim())||null,d=((u=document.getElementById("m-gen-stadium"))==null?void 0:u.checked)??!1,p=((x=document.getElementById("m-gen-squad"))==null?void 0:x.checked)??!1,f=Ve();if(!m){s.textContent="Le nom du club est requis.";return}if(!a){s.textContent="Le nom encodé est requis.";return}if(!g){s.textContent="Le pays est requis.";return}r.disabled=!0,r.textContent="Enregistrement…";const E={real_name:m,encoded_name:a,country_code:g,logo_url:o,kit_style:f.style,kit_color1:f.color1,kit_color2:f.color2,kit_color3:f.color3,kit_shorts:f.shorts,kit_socks:f.socks};let w=e==null?void 0:e.id;if(t){const{error:y}=await h.from("clubs").update(E).eq("id",w);if(y){s.textContent=y.message,r.disabled=!1,r.textContent="💾 Enregistrer";return}}else{const{data:y,error:_}=await h.from("clubs").insert(E).select().single();if(_){s.textContent=_.message,r.disabled=!1,r.textContent="✅ Créer le club";return}if(w=y.id,d){r.textContent="🏟️ Création du stade…";const{data:L,error:I}=await h.from("stadium_definitions").insert({name:`Stade de ${m}`,club_id:w,country_code:g}).select().single();I?console.warn("[Stadium] Erreur def stade:",I.message):L&&await h.from("cards").insert({card_type:"stadium",stadium_id:L.id})}p&&(r.textContent="⚽ Génération des joueurs…",await Ge(w,g,c))}c(t?"Club modifié ✅":"Club créé ✅","success"),l(),ce(n,i)}const Ct=["normal","pepite","papyte","legende"],ke=["GK","DEF","MIL","ATT"],St=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let V={...M},le=[];async function Tt(e,{toast:t}){const{data:n}=await h.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");le=n||[],V={...M},e.innerHTML=Dt(le),jt(e,le,t),N()}function Ie(){var n;const e=((n=document.getElementById("cb-surname-real"))==null?void 0:n.value)||"",t=document.getElementById("cb-surname-enc");t&&(t.value=ue(e))}function Mt(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=le.find(i=>String(i.id)===String(e));return t?{style:t.kit_style||S.style,color1:t.kit_color1||S.color1,color2:t.kit_color2||S.color2,shorts:t.kit_shorts||S.shorts,socks:t.kit_socks||S.socks}:{...S}}function N(){var d,p,f,E;const e=w=>{var b;return((b=document.getElementById(w))==null?void 0:b.value)||""},t={firstname:e("cb-firstname"),surname_encoded:e("cb-surname-enc")||ue(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((p=(d=document.getElementById("cb-club"))==null?void 0:d.selectedOptions[0])==null?void 0:p.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=Mt(),i=document.getElementById("cb-club"),c=((E=(f=i==null?void 0:i.selectedOptions[0])==null?void 0:f.dataset)==null?void 0:E.logo)||null,l=Pe(V,n,120),s=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(l)}`,r=it(t,{portraitUrl:s,clubLogoUrl:c,showNotes:!0}),m=document.getElementById("card-preview");m&&(m.innerHTML=r);const a=document.getElementById("avatar-preview-wrap");a&&(a.innerHTML=l);const g=e("cb-surname-real"),o=document.getElementById("encode-summary");o&&g&&(o.textContent=`${e("cb-firstname")} ${g} → ${e("cb-firstname")} ${t.surname_encoded}`)}function Ke(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};V={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function jt(e,t,n){var c,l,s,r,m;e.querySelectorAll("input,select").forEach(a=>{a.addEventListener("input",N),a.addEventListener("change",N)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(a=>{var g;(g=document.getElementById(a))==null||g.addEventListener("change",()=>{Ke(),N()})}),(c=document.getElementById("cb-surname-real"))==null||c.addEventListener("input",()=>{Ie(),N()}),(l=document.getElementById("btn-encode"))==null||l.addEventListener("click",()=>{Ie(),N()}),(s=document.getElementById("cb-club"))==null||s.addEventListener("change",N),(r=document.getElementById("btn-save-player"))==null||r.addEventListener("click",()=>Rt(n)),(m=document.getElementById("btn-reset"))==null||m.addEventListener("click",()=>{e.querySelectorAll("input").forEach(a=>a.value=""),e.querySelectorAll("select").forEach(a=>a.selectedIndex=0),V={...M},i.forEach(a=>{const g=a.replace("av-",""),o=document.getElementById(a);o&&(o.value=M[g]||"")}),N()})}async function Rt(e){const t=s=>{var r;return((r=document.getElementById(s))==null?void 0:r.value)||""},n=t("cb-surname-real").trim(),i=t("cb-surname-enc").trim()||ue(n);if(!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}Ke();const c={firstname:t("cb-firstname").trim(),surname_real:n,surname_encoded:i,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:V,skin:V.skin||"blanc",hair:V.hairColor||"marron",hair_length:"court"},{error:l}=await h.from("players").insert(c);if(l){e("Erreur: "+l.message,"error");return}e(`✅ Joueur "${c.firstname} ${c.surname_encoded}" enregistré !`,"success")}function Dt(e){const t=St.map(([a,g])=>`<option value="${a}">${g} (${a})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(a=>`<option value="${a.id}" data-logo="${a.logo_url||""}">${a.encoded_name}</option>`).join(""),i=ke.map(a=>`<option value="${a}">${a}</option>`).join(""),c='<option value="">Aucun</option>'+ke.map(a=>`<option value="${a}">${a}</option>`).join(""),l=Ct.map(a=>`<option value="${a}">${a.charAt(0).toUpperCase()+a.slice(1)}</option>`).join(""),s=(a,g,o)=>Object.entries(g).map(([d,p])=>`<option value="${d}" ${d===(o||"")?"selected":""}>${p.label}</option>`).join(""),r=Object.keys(et).map(a=>`<option value="${a}" ${a===M.skin?"selected":""}>${a.charAt(0).toUpperCase()+a.slice(1)}</option>`).join(""),m=Object.keys(tt).map(a=>`<option value="${a}" ${a===M.hairColor?"selected":""}>${a.charAt(0).toUpperCase()+a.slice(1)}</option>`).join("");return`
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
          <div><label>Rareté</label><select id="cb-rarity">${l}</select></div>
          <div><label>Note min</label><input id="cb-note-min" type="number" min="0" max="10" placeholder="—"></div>
          <div><label>Note max</label><input id="cb-note-max" type="number" min="0" max="10" placeholder="—"></div>
        </div>
        <div style="margin-top:8px;display:flex;gap:8px">
          ${["normal","pepite","papyte","legende"].map(a=>`
            <div style="background:${nt[a]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
              ${a.toUpperCase()}
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
              <select id="av-hair">${s("av-hair",ot,M.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${m}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${s("av-eyebrows",at,M.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${s("av-eyes",rt,M.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${s("av-nose",lt,M.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${s("av-mouth",st,M.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${s("av-beard",dt,M.beard)}</select>
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
  `}async function Je(e,{toast:t}){const{data:n,error:i}=await h.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").order("created_at",{ascending:!1});if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const c=n||[];e.innerHTML=`
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
  `,l(c),document.getElementById("search-users").addEventListener("input",s=>{const r=s.target.value.toLowerCase();l(c.filter(m=>{var a;return m.pseudo.toLowerCase().includes(r)||((a=m.club_name)==null?void 0:a.toLowerCase().includes(r))}))});function l(s){document.getElementById("users-tbody").innerHTML=s.map(r=>{const m=r.mmr??1e3,a=r.mmr_deviation??350,g=r.placement_matches??0,o=ct(m),d=r.ranked_wins??0,p=r.ranked_losses??0,f=r.ranked_draws??0,E=d+p+f,w=E>0?Math.round(d/E*100):null,b=g<10,k=a<80?"#1A6B3C":a<150?"#e67e22":"#bb2020";return`
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
            ${b?`<div style="font-size:10px;color:#e67e22">${g}/10 placement${g<10?` (${10-g} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${d}V ${f}N ${p}D${w!==null?` · ${w}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${m}</div>
            <div style="font-size:10px;color:${k}">RD ±${Math.round(a)}</div>
          </td>
          <td>
            ${r.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td>
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${r.id}" data-is-admin="${r.is_admin}">
              ${r.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(r=>{r.addEventListener("click",async()=>{const m=r.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${m?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:a}=await h.from("users").update({is_admin:m}).eq("id",r.dataset.toggleAdmin);a?t(a.message,"error"):(t("Rôle mis à jour ✅","success"),Je(e,{toast:t}))})})}}async function Ye(e,{toast:t}){const{data:n,error:i}=await h.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_encoded, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const c=n||[],l=c.filter(r=>r.status==="active").length,s=c.filter(r=>r.status==="sold").length;e.innerHTML=`
    <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap">
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#1A6B3C">${l}</div>
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
            ${c.map(r=>{var o,d,p,f;const m=(o=r.card)==null?void 0:o.player,a=m?`${m.firstname} ${m.surname_encoded}`:((d=r.card)==null?void 0:d.card_type)||"—",g={active:"#1A6B3C",sold:"#D4A017",cancelled:"#aaa"};return`<tr>
                <td><b>${a}</b>${m?`<div style="font-size:10px;color:#999">${m.rarity} · ${m.job}</div>`:""}</td>
                <td style="font-size:12px">${((p=r.seller)==null?void 0:p.pseudo)||"—"}</td>
                <td style="font-size:12px">${((f=r.buyer)==null?void 0:f.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(r.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${g[r.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
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
  `,document.querySelectorAll("[data-cancel]").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:m}=await h.from("market_listings").update({status:"cancelled"}).eq("id",r.dataset.cancel);m?t(m.message,"error"):(t("Annonce annulée","success"),Ye(e,{toast:t}))})})}async function Nt(e,{toast:t}){e.innerHTML=`
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
  `,document.getElementById("export-clubs-template").addEventListener("click",()=>{oe("clubs_template.csv",`real_name,encoded_name,country_code,logo_url
Paris Saint-Germain,PARIS FC,FR,
Real Madrid,MADRID FC,ES,
`)}),document.getElementById("export-players-template").addEventListener("click",()=>{oe("players_template.csv",`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
Kylian,Mbappe,,FR,PARIS FC,ATT,,0,0,2,9,legende,,,blanc,noir,court,50000
Achraf,Hakimi,,MA,PARIS FC,DEF,MIL,0,7,5,3,pepite,5,9,metisse,noir,court,20000
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:n,error:i}=await h.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun club à exporter","info");return}let c=`real_name,encoded_name,country_code,logo_url
`;n.forEach(l=>{c+=[l.real_name,l.encoded_name,l.country_code,l.logo_url||""].map(Le).join(",")+`
`}),oe("clubs_export.csv",c),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:i}=await h.from("players").select("firstname,surname_real,surname_encoded,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_encoded");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let c=`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(l=>{var s;c+=[l.firstname,l.surname_real,l.surname_encoded,l.country_code,((s=l.clubs)==null?void 0:s.encoded_name)||"",l.job,l.job2||"",l.note_g,l.note_d,l.note_m,l.note_a,l.rarity,l.note_min??"",l.note_max??"",l.skin,l.hair,l.hair_length,l.sell_price].map(Le).join(",")+`
`}),oe("players_export.csv",c),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const c=document.getElementById("clubs-import-result");c.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const l=await i.text(),s=Be(l);if(s.length===0){c.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let r=0,m=0;const a=[];for(const g of s){if(!g.real_name||!g.encoded_name||!g.country_code){m++,a.push(`Ligne ignorée (champs manquants): ${g.real_name||"?"}`);continue}const o={real_name:g.real_name,encoded_name:g.encoded_name.toUpperCase(),country_code:g.country_code.toUpperCase().slice(0,2),logo_url:g.logo_url||null},{error:d}=await h.from("clubs").upsert(o,{onConflict:"encoded_name"});d?(m++,a.push(`${g.encoded_name}: ${d.message}`)):r++}c.innerHTML=`<div style="color:var(--green)">✅ ${r} clubs importés</div>
        ${m>0?`<div style="color:#c0392b">❌ ${m} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${a.slice(0,10).join("<br>")}</div>`:""}`,t(`${r} clubs importés`,"success")}catch(l){c.innerHTML=`<span style="color:#c0392b">Erreur : ${l.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const c=document.getElementById("players-import-result");c.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const l=await i.text(),s=Be(l);if(s.length===0){c.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:r}=await h.from("clubs").select("id,encoded_name"),m={};(r||[]).forEach(b=>{m[b.encoded_name.toUpperCase()]=b.id});let a=0,g=0;const o=[],d=["GK","DEF","MIL","ATT"],p=["normal","pepite","papyte","legende"],f=["blanc","metisse","typ","noir"],E=["blond","marron","noir","chauve"],w=["rase","court","milong","long"];for(const b of s){if(!b.firstname||!b.surname_real||!b.country_code||!b.job){g++,o.push(`Ligne ignorée (champs requis manquants): ${b.firstname||"?"}`);continue}if(!d.includes(b.job)){g++,o.push(`${b.firstname}: job invalide "${b.job}"`);continue}const k=b.club_encoded_name&&m[b.club_encoded_name.toUpperCase()]||null,$={firstname:b.firstname,surname_real:b.surname_real,surname_encoded:b.surname_encoded||ue(b.surname_real),country_code:b.country_code.toUpperCase().slice(0,2),club_id:k,job:b.job,job2:d.includes(b.job2)?b.job2:null,note_g:parseInt(b.note_g)||0,note_d:parseInt(b.note_d)||0,note_m:parseInt(b.note_m)||0,note_a:parseInt(b.note_a)||0,rarity:p.includes(b.rarity)?b.rarity:"normal",note_min:b.note_min!==""&&b.note_min!=null?parseInt(b.note_min):null,note_max:b.note_max!==""&&b.note_max!=null?parseInt(b.note_max):null,skin:f.includes(b.skin)?b.skin:"blanc",hair:E.includes(b.hair)?b.hair:"noir",hair_length:w.includes(b.hair_length)?b.hair_length:"court",sell_price:parseInt(b.sell_price)||0},{error:v}=await h.from("players").insert($);v?(g++,o.push(`${b.firstname} ${b.surname_real}: ${v.message}`)):a++}c.innerHTML=`<div style="color:var(--green)">✅ ${a} joueurs importés</div>
        ${g>0?`<div style="color:#c0392b">❌ ${g} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${o.slice(0,10).join("<br>")}</div>`:""}`,t(`${a} joueurs importés`,"success")}catch(l){c.innerHTML=`<span style="color:#c0392b">Erreur : ${l.message}</span>`}n.target.value=""})}function Le(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function oe(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(n),c=document.createElement("a");c.href=i,c.download=e,c.click(),URL.revokeObjectURL(i)}function Be(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(s=>s.trim());if(t.length<2)return[];const n=t[0],i=n.split(";").length>n.split(",").length?";":",",c=ze(n,i).map(s=>s.trim().replace(/^\uFEFF/,"").toLowerCase()),l=[];for(let s=1;s<t.length;s++){if(!t[s].trim())continue;const r=ze(t[s],i),m={};c.forEach((a,g)=>{m[a]=(r[g]||"").trim()}),!Object.values(m).every(a=>!a)&&l.push(m)}return l}function ze(e,t=","){const n=[];let i="",c=!1;for(let l=0;l<e.length;l++){const s=e[l];c?s==='"'?e[l+1]==='"'?(i+='"',l++):c=!1:i+=s:s==='"'?c=!0:s===t?(n.push(i),i=""):i+=s}return n.push(i),n}const Pt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function qt(e,{toast:t}){const n=Object.keys(me);let i=n[0];const{data:c}=await h.from("formation_links_overrides").select("formation, links"),l={};(c||[]).forEach(g=>{l[g.formation]=g.links});let s=new Set;function r(g,o){return[g,o].sort().join("-")}function m(g){const o=l[g]||me[g]||[];s=new Set(o.map(([d,p])=>r(d,p)))}m(i),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${n.map(g=>`<option value="${g}" ${g===i?"selected":""}>${g}</option>`).join("")}
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
  `;function a(){const g=pt[i]||{},o=we(i),d=320,p=400,f=22;function E(v){const u=g[v];return u?{x:u.x*d,y:u.y*p}:null}let w=`<svg width="${d}" height="${p}" viewBox="0 0 ${d} ${p}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;o.forEach(([v,u],x)=>{const y=E(v),_=E(u);if(!y||!_)return;const L=r(v,u),I=s.has(L),B=I?"#3b82f6":"#999",A=I?.95:.35,C=I?4:3;w+=`<line x1="${y.x}" y1="${y.y}" x2="${_.x}" y2="${_.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${L}" style="cursor:pointer"/>`,w+=`<line x1="${y.x}" y1="${y.y}" x2="${_.x}" y2="${_.y}"
        stroke="${B}" stroke-width="${C}" stroke-dasharray="${I?"none":"4,3"}"
        opacity="${A}" pointer-events="none" data-line-key="${L}"/>`});for(const v of Object.keys(g)){const u=E(v);if(!u)continue;const x=v.replace(/\d+/,""),y=Pt[x]||"#555";w+=`<circle cx="${u.x}" cy="${u.y}" r="${f}" fill="${y}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,w+=`<text x="${u.x}" y="${u.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${v}</text>`}w+="</svg>",document.getElementById("field-wrap").innerHTML=w;const b=document.getElementById("links-list");b.innerHTML=o.map(([v,u])=>{const x=r(v,u),y=s.has(x);return`
        <button class="link-toggle" data-key="${x}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${y?"#3b82f6":"#ddd"};
          background:${y?"#eaf2ff":"#fafafa"};
          color:${y?"#1d4ed8":"#888"}">
          <span>${v} ↔ ${u}</span>
          <span>${y?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const k=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');k&&(k.textContent=`Liens (${s.size}/${o.length} actifs)`);function $(v){s.has(v)?s.delete(v):s.add(v),a()}e.querySelectorAll(".link-hit").forEach(v=>{v.addEventListener("click",()=>$(v.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(v=>{v.addEventListener("click",()=>$(v.dataset.key))})}a(),document.getElementById("formation-select").addEventListener("change",g=>{i=g.target.value,m(i),a()}),document.getElementById("reset-btn").addEventListener("click",()=>{const g=me[i]||[];s=new Set(g.map(([o,d])=>r(o,d))),a(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const o=we(i).filter(([p,f])=>s.has(r(p,f))),{error:d}=await h.from("formation_links_overrides").upsert({formation:i,links:o,updated_at:new Date().toISOString()});if(d){t(d.message,"error");return}l[i]=o,t(`Liens enregistrés pour ${i} (${o.length} actifs)`,"success")})}const Ot=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],Ft=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],Ht=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function Gt(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await h.from("booster_configs").select("*").order("sort_order");let n=null,i=[],c=null;const l=()=>window.innerWidth<700;async function s(){if(!n){i=[];return}if(n!==c){const{data:o}=await h.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");i=o||[],c=n}}function r(){return`
    <div id="booster-list" style="background:#fff;${l()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(t||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(o=>`
      <div class="booster-row" data-id="${o.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${o.id===n?"#f0f7f0":"#fff"}">
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
      ${(t||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>'}
    </div>`}function m(){const o=n?(t||[]).find(f=>f.id===n):null;if(!o)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const d=i.reduce((f,E)=>f+Number(E.percentage||0),0),p=Math.abs(d-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${l()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

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
              ${Ht.map(f=>`<option value="${f.value}" ${o.price_type===f.value?"selected":""}>${f.label}</option>`).join("")}
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
            <span style="margin-left:10px;font-size:12px;color:${p?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${d.toFixed(1)}% ${p?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((f,E)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${E}">
            <select class="rate-type" data-idx="${E}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Ot.map(w=>`<option value="${w.value}" ${f.card_type===w.value?"selected":""}>${w.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${E}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Ft.map(w=>`<option value="${w.value}" ${(f.rarity||"")===w.value?"selected":""}>${w.label}</option>`).join("")}
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
    </div>`}async function a(o=!1){o||await s();const d=!n&&l(),p=n&&l();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!l()||d||!n?r():""}
      ${!l()||p?m():""}
    </div>`,g()}function g(){var p,f,E,w,b,k,$;const o=v=>e.querySelector(v);e.querySelectorAll(".booster-row").forEach(v=>{v.addEventListener("click",u=>{u.target.closest(".btn-delete")||(n=v.dataset.id,c=null,a())})}),(p=o("#btn-back"))==null||p.addEventListener("click",()=>{n=null,a()}),(f=o("#btn-new"))==null||f.addEventListener("click",async()=>{const v=prompt("Nom du nouveau booster :");if(!(v!=null&&v.trim()))return;const{data:u,error:x}=await h.from("booster_configs").insert({name:v.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(x){alert(x.message);return}t.push(u),n=u.id,c=null,a()}),e.querySelectorAll(".btn-delete").forEach(v=>{v.addEventListener("click",async u=>{if(u.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await h.from("booster_configs").delete().eq("id",v.dataset.id);const x=t.findIndex(y=>y.id===v.dataset.id);x>-1&&t.splice(x,1),n===v.dataset.id&&(n=null,c=null),a()})}),(E=o("#btn-cancel"))==null||E.addEventListener("click",()=>{n=null,a()}),(w=o("#f-price-type"))==null||w.addEventListener("change",v=>{const u=o("#credits-field");u&&(u.style.opacity=v.target.value!=="credits"?"0.4":"1")}),(b=o("#btn-pick-icon"))==null||b.addEventListener("click",async()=>{var u;const v=o("#icon-picker-grid");if(v){if(v.style.display!=="none"){v.style.display="none";return}v.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',v.style.display="block";try{const y=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),_=Array.isArray(y)?y.filter(I=>I.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(I.name)):[];if(!_.length){v.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const L=((u=o("#f-image-url"))==null?void 0:u.value)||"";v.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${_.map(I=>`
          <div class="icon-pick-item" data-name="${I.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${I.name===L?"#1A6B3C":"#ddd"};background:${I.name===L?"#f0f7f0":"#fff"}">
            <img src="/icons/${I.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,v.querySelectorAll(".icon-pick-item").forEach(I=>{I.addEventListener("click",()=>{const B=o("#f-image-url");B&&(B.value=I.dataset.name),v.style.display="none"})})}catch(x){v.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${x.message}</div>`}}});function d(){e.querySelectorAll("[data-rate-idx]").forEach(v=>{var x,y,_,L,I;const u=Number(v.dataset.rateIdx);u>=0&&u<i.length&&(i[u].card_type=((x=v.querySelector(".rate-type"))==null?void 0:x.value)||"player",i[u].rarity=((y=v.querySelector(".rate-rarity"))==null?void 0:y.value)||null,i[u].note_min=Number((_=v.querySelector(".rate-note-min"))==null?void 0:_.value)||null,i[u].note_max=Number((L=v.querySelector(".rate-note-max"))==null?void 0:L.value)||null,i[u].percentage=Number((I=v.querySelector(".rate-pct"))==null?void 0:I.value)||0)})}(k=o("#btn-add-rate"))==null||k.addEventListener("click",()=>{d(),i.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),a(!0)}),e.querySelectorAll(".btn-del-rate").forEach(v=>{v.addEventListener("click",()=>{d(),i.splice(Number(v.dataset.idx),1),a(!0)})}),($=o("#btn-save"))==null||$.addEventListener("click",async()=>{var L,I,B,A,C,T,P,q,O,F,R,H,j;const v=(t||[]).find(z=>z.id===n);if(!v)return;const u=[];e.querySelectorAll("[data-rate-idx]").forEach(z=>{var W,Z,X,Q,ee;const K=Number(z.dataset.rateIdx);u.push({booster_id:n,card_type:((W=z.querySelector(".rate-type"))==null?void 0:W.value)||"player",rarity:((Z=z.querySelector(".rate-rarity"))==null?void 0:Z.value)||null,note_min:Number((X=z.querySelector(".rate-note-min"))==null?void 0:X.value)||null,note_max:Number((Q=z.querySelector(".rate-note-max"))==null?void 0:Q.value)||null,percentage:Number((ee=z.querySelector(".rate-pct"))==null?void 0:ee.value)||0,sort_order:K});const D=u[u.length-1];D.rarity||(D.rarity=null),D.note_min||(D.note_min=null),D.note_max||(D.note_max=null)});const x=u.reduce((z,K)=>z+K.percentage,0);if(u.length&&Math.abs(x-100)>.5){alert(`La somme doit faire 100% (actuellement ${x.toFixed(1)}%)`);return}const y={name:((I=(L=o("#f-name"))==null?void 0:L.value)==null?void 0:I.trim())||v.name,image_url:((A=(B=o("#f-image-url"))==null?void 0:B.value)==null?void 0:A.trim())||null,price_type:(C=o("#f-price-type"))==null?void 0:C.value,price_credits:Number((T=o("#f-price-credits"))==null?void 0:T.value)||0,card_count:Number((P=o("#f-card-count"))==null?void 0:P.value)||5,is_active:((q=o("#f-active"))==null?void 0:q.checked)??v.is_active,allow_duplicates:((O=o("#f-allow-dup"))==null?void 0:O.checked)??!0,sort_order:Number((F=o("#f-sort"))==null?void 0:F.value)||0,max_per_user:(R=o("#f-max-per-user"))!=null&&R.value?Number(o("#f-max-per-user").value):null,available_from:((H=o("#f-available-from"))==null?void 0:H.value)||null,available_until:((j=o("#f-available-until"))==null?void 0:j.value)||null},{error:_}=await h.from("booster_configs").update(y).eq("id",n);if(_){alert(_.message);return}if(Object.assign(v,y),await h.from("booster_drop_rates").delete().eq("booster_id",n),u.length){const{error:z}=await h.from("booster_drop_rates").insert(u);if(z){alert(z.message);return}}i=u,c=n,alert("✅ Booster enregistré !"),a(!0)})}a()}const We=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function Ut(e){await fe(e)}async function fe(e){const{data:t,error:n}=await h.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
          ${(t||[]).map(i=>Vt(i)).join("")}
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
              ${We.map(i=>`<option value="${i.value}">${i.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>Ae(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Kt(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const c=(t||[]).find(l=>l.id===i.dataset.edit);c&&i.addEventListener("click",()=>Ae(c))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await h.from("sell_price_configs").delete().eq("id",i.dataset.delete),await fe(e))})})}function Vt(e){const t=We.find(n=>n.value===e.rarity);return`
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
    </tr>`}function Ae(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function Kt(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,c=parseInt(document.getElementById("form-note-min").value)||1,l=parseInt(document.getElementById("form-note-max").value)||10;if(c>l){alert("Note min doit être ≤ note max");return}const s={rarity:n,price:i,note_min:c,note_max:l,updated_at:new Date().toISOString()};let r;if(t?{error:r}=await h.from("sell_price_configs").update(s).eq("id",t):{error:r}=await h.from("sell_price_configs").insert(s),r){alert("Erreur : "+r.message);return}document.getElementById("config-form").style.display="none",await fe(e)}async function Jt(e){await be(e)}async function be(e){const{data:t}=await h.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Journal des mises à jour</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(t||[]).map(n=>Yt(n)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>Ce(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Wt(e)),e.querySelectorAll("[data-edit]").forEach(n=>{const i=(t||[]).find(c=>c.id===n.dataset.edit);i&&n.addEventListener("click",()=>Ce(i))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await h.from("patch_notes").delete().eq("id",n.dataset.delete),await be(e))})})}function Yt(e){const t=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function Ce(e){const t=document.getElementById("article-form");t.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-pub").checked=e?e.is_published:!0;const n=new Date((e==null?void 0:e.published_at)||Date.now()),i=new Date(n.getTime()-n.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=i,t.scrollIntoView({behavior:"smooth"})}async function Wt(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),c=document.getElementById("form-art-img").value.trim()||null,l=document.getElementById("form-art-pub").checked,s=document.getElementById("form-art-date").value;if(!n){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}const r=s?new Date(s).toISOString():new Date().toISOString(),m={title:n,description:i,image_url:c,is_published:l,published_at:r};let a;if(t?{error:a}=await h.from("patch_notes").update(m).eq("id",t):{error:a}=await h.from("patch_notes").insert(m),a){alert("Erreur : "+a.message);return}document.getElementById("article-form").style.display="none",await be(e)}async function Zt(e){await Y(e)}async function Y(e){var g,o,d,p,f,E,w,b,k,$,v,u;const{data:t}=await h.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
        ${(t||[]).length===0?`
          <div style="text-align:center;padding:40px;color:#aaa;background:#fff;border-radius:12px">
            Aucune étape. Clique sur "+ Ajouter" pour commencer.
          </div>`:(t||[]).map(x=>Xt(x)).join("")}
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([x,y,_])=>`<button type="button" data-cmd="${y}" title="${_}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${x}</button>`).join("")}
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
    </div>`,(g=document.getElementById("ts-add"))==null||g.addEventListener("click",()=>Se(null,(t==null?void 0:t.length)||0)),(o=document.getElementById("ts-reset"))==null||o.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:x}=await h.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(x?"Erreur : "+x.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(d=document.getElementById("ts-cancel"))==null||d.addEventListener("click",Ze),(p=document.getElementById("ts-save"))==null||p.addEventListener("click",()=>en(e)),(f=document.getElementById("ts-preview-btn"))==null||f.addEventListener("click",Qt);const n=document.getElementById("ts-editor"),i=()=>{const x=document.getElementById("ts-content");x&&n&&(x.value=n.innerHTML)};n==null||n.addEventListener("input",i),n==null||n.addEventListener("blur",i);const c=()=>{document.activeElement!==n&&(n==null||n.focus())};(E=document.getElementById("ts-toolbar"))==null||E.querySelectorAll("[data-cmd]").forEach(x=>{x.addEventListener("mousedown",y=>{y.preventDefault(),c();const _=x.dataset.cmd;_.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,_.split(":")[1]):document.execCommand(_,!1,null),i()})}),(w=document.getElementById("ts-insert-color"))==null||w.addEventListener("mousedown",x=>{x.preventDefault(),c();const y=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");y&&(document.execCommand("foreColor",!1,y),i())}),(b=document.getElementById("ts-clear-format"))==null||b.addEventListener("mousedown",x=>{x.preventDefault(),c(),document.execCommand("removeFormat",!1,null),i()}),n==null||n.addEventListener("focus",()=>{n&&(n.style.borderColor="#1A6B3C")}),n==null||n.addEventListener("blur",()=>{n&&(n.style.borderColor="#ddd")});const l=document.getElementById("ts-image"),s=document.getElementById("ts-img-preview"),r=document.getElementById("ts-img-preview-el"),m=document.getElementById("ts-img-picker-grid"),a=()=>{var y;const x=(y=l==null?void 0:l.value)==null?void 0:y.trim();if(x){const _="/";r.src=`${_}icons/${x}`,s.style.display="block"}else s.style.display="none"};l==null||l.addEventListener("input",a),(k=document.getElementById("ts-img-clear"))==null||k.addEventListener("click",()=>{l&&(l.value=""),s.style.display="none",m.style.display="none"}),($=document.getElementById("ts-img-pick"))==null||$.addEventListener("click",async()=>{if(m.style.display!=="none"){m.style.display="none";return}m.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',m.style.display="block";try{const y=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),_=Array.isArray(y)?y.filter(I=>I.name.startsWith("tuto_")):[];if(!_.length){m.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const L="/";m.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+_.map(I=>`
          <div data-pick="${I.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${L}icons/${I.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",m.querySelectorAll("[data-pick]").forEach(I=>{I.addEventListener("click",()=>{l&&(l.value=I.dataset.pick),a(),m.style.display="none"})})}catch(x){m.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+x.message+"</div>"}}),(v=document.getElementById("ts-color"))==null||v.addEventListener("input",x=>{const y=document.getElementById("ts-color-hex");y&&(y.value=x.target.value)}),(u=document.getElementById("ts-color-hex"))==null||u.addEventListener("input",x=>{const y=x.target.value;if(/^#[0-9a-fA-F]{6}$/.test(y)){const _=document.getElementById("ts-color");_&&(_.value=y)}}),e.querySelectorAll("[data-edit]").forEach(x=>{const y=(t||[]).find(_=>_.id===x.dataset.edit);y&&x.addEventListener("click",()=>Se(y))}),e.querySelectorAll("[data-delete]").forEach(x=>{x.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await h.from("tutorial_steps").delete().eq("id",x.dataset.delete),Y(e))})}),e.querySelectorAll("[data-toggle]").forEach(x=>{x.addEventListener("click",async()=>{const y=(t||[]).find(_=>_.id===x.dataset.toggle);y&&(await h.from("tutorial_steps").update({is_active:!y.is_active}).eq("id",y.id),Y(e))})}),e.querySelectorAll("[data-up]").forEach(x=>{x.addEventListener("click",async()=>{const y=t||[],_=y.findIndex(L=>L.id===x.dataset.up);_<=0||(await Promise.all([h.from("tutorial_steps").update({step_order:y[_-1].step_order}).eq("id",y[_].id),h.from("tutorial_steps").update({step_order:y[_].step_order}).eq("id",y[_-1].id)]),Y(e))})}),e.querySelectorAll("[data-down]").forEach(x=>{x.addEventListener("click",async()=>{const y=t||[],_=y.findIndex(L=>L.id===x.dataset.down);_<0||_>=y.length-1||(await Promise.all([h.from("tutorial_steps").update({step_order:y[_+1].step_order}).eq("id",y[_].id),h.from("tutorial_steps").update({step_order:y[_].step_order}).eq("id",y[_+1].id)]),Y(e))})})}function Xt(e){return`
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
  </div>`}function Se(e,t=0){document.getElementById("ts-form").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const n=document.getElementById("ts-editor");n&&(n.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??t,document.getElementById("ts-active").checked=e?e.is_active:!0;const i=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=i,document.getElementById("ts-color-hex").value=i;const c=(e==null?void 0:e.image_url)||"",l=document.getElementById("ts-image");l&&(l.value=c);const s=document.getElementById("ts-img-preview"),r=document.getElementById("ts-img-preview-el");if(c&&s&&r){const m="/";r.src=`${m}icons/${c}`,s.style.display="block"}else s&&(s.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function Ze(){document.getElementById("ts-form").style.display="none",document.getElementById("ts-preview-area").innerHTML=""}function Qt(){var a,g;const e=document.getElementById("ts-emoji").value||"⚽",t=document.getElementById("ts-title").value||"Titre",n=document.getElementById("ts-editor"),i=n?n.innerHTML:document.getElementById("ts-content").value||"",c=document.getElementById("ts-color-hex").value||"#1A6B3C",l=(g=(a=document.getElementById("ts-image"))==null?void 0:a.value)==null?void 0:g.trim(),r=l?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${l}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",m=document.getElementById("ts-preview-area");m.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${c}"></div></div>
        <div style="padding:20px 20px 0;text-align:center">
          <div style="font-size:48px;margin-bottom:8px;line-height:1">${e}</div>
          <div style="font-size:17px;font-weight:900;color:#111;margin-bottom:4px">${t}</div>
          <div style="font-size:11px;color:#aaa">6 / 10</div>
        </div>
        ${r}
        <div style="padding:${l?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${i}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${c};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,m.querySelectorAll("ul,ol").forEach(o=>{o.style.paddingLeft="20px",o.style.margin="6px 0"}),m.querySelectorAll("li").forEach(o=>{o.style.marginBottom="4px"}),m.querySelectorAll("p").forEach(o=>{o.style.marginBottom="8px"})}async function en(e){var o,d;const t=document.getElementById("ts-id").value,n=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),c=document.getElementById("ts-editor"),l=(c?c.innerHTML:document.getElementById("ts-content").value).trim(),s=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",r=parseInt(document.getElementById("ts-order").value)||0,m=document.getElementById("ts-active").checked;if(!i||!l){alert("Titre et contenu sont obligatoires.");return}const a={emoji:n,title:i,content:l,color:s,step_order:r,is_active:m,image_url:((d=(o=document.getElementById("ts-image"))==null?void 0:o.value)==null?void 0:d.trim())||null};let g;if(t?{error:g}=await h.from("tutorial_steps").update(a).eq("id",t):{error:g}=await h.from("tutorial_steps").insert(a),g){alert("Erreur : "+g.message);return}Ze(),Y(e)}const tn="/",Xe="#E87722",nn=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function on(e){await xe(e)}async function xe(e){var i,c,l,s;const[{data:t},{data:n}]=await Promise.all([h.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),h.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:820px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">🏟️ Stades</h2>
        <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:10px" id="st-list">
        ${(t||[]).map(r=>an(r)).join("")||'<div style="color:#aaa;padding:24px;text-align:center">Aucun stade créé.</div>'}
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
                ${(n||[]).map(r=>`<option value="${r.id}" data-logo="${r.logo_url||""}">${r.encoded_name}</option>`).join("")}
              </select>
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">PAYS (si pas de club)</label>
              <select id="st-country" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:13px;background:#fff">
                <option value="">— Aucun pays —</option>
                ${nn.map(([r,m])=>`<option value="${r}">${m} (${r})</option>`).join("")}
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
    </div>`,(i=document.getElementById("st-add-btn"))==null||i.addEventListener("click",()=>Te(null)),(c=document.getElementById("st-cancel"))==null||c.addEventListener("click",()=>{document.getElementById("st-form").style.display="none"}),(l=document.getElementById("st-save"))==null||l.addEventListener("click",()=>ln(e)),(s=document.getElementById("st-preview-btn"))==null||s.addEventListener("click",()=>se()),["st-name","st-club","st-country","st-image"].forEach(r=>{var m,a;(m=document.getElementById(r))==null||m.addEventListener("input",se),(a=document.getElementById(r))==null||a.addEventListener("change",se)}),e.querySelectorAll("[data-edit]").forEach(r=>{const m=(t||[]).find(a=>a.id===r.dataset.edit);m&&r.addEventListener("click",()=>Te(m))}),e.querySelectorAll("[data-delete]").forEach(r=>{r.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await h.from("stadium_definitions").delete().eq("id",r.dataset.delete),xe(e))})})}function an(e){var n,i;const t=(n=e.club)!=null&&n.logo_url?`<img src="${e.club.logo_url}" style="width:32px;height:32px;object-fit:contain">`:'<span style="font-size:20px">🌍</span>';return`
    <div style="background:#fff;border-radius:10px;padding:12px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;align-items:center;gap:12px">
      <div style="width:40px;height:40px;border-radius:8px;background:${Xe};display:flex;align-items:center;justify-content:center;flex-shrink:0">
        ${t}
      </div>
      <div style="flex:1">
        <div style="font-size:14px;font-weight:900">${e.name}</div>
        <div style="font-size:11px;color:#aaa">${((i=e.club)==null?void 0:i.encoded_name)||e.country_code||"—"}</div>
      </div>
      <button data-edit="${e.id}" class="btn btn-ghost btn-sm">✏️</button>
      <button data-delete="${e.id}" class="btn btn-ghost btn-sm" style="color:#cc2222">🗑️</button>
    </div>`}function Te(e,t){var i,c;document.getElementById("st-form").style.display="block",document.getElementById("st-form-title").textContent=e?"Modifier le stade":"Nouveau stade",document.getElementById("st-id").value=(e==null?void 0:e.id)||"",document.getElementById("st-name").value=(e==null?void 0:e.name)||"",document.getElementById("st-club").value=(e==null?void 0:e.club_id)||"";const n=document.getElementById("st-country");n&&(n.value=(e==null?void 0:e.country_code)||""),document.getElementById("st-image").value=(e==null?void 0:e.image_url)||"",document.getElementById("st-preview-card").innerHTML="",se((i=e==null?void 0:e.club)==null?void 0:i.logo_url,(c=e==null?void 0:e.club)==null?void 0:c.encoded_name),document.getElementById("st-form").scrollIntoView({behavior:"smooth"})}function se(){var a,g,o,d,p,f,E;const e=((a=document.getElementById("st-name"))==null?void 0:a.value)||"NOM DU STADE",t=(o=(g=document.getElementById("st-image"))==null?void 0:g.value)==null?void 0:o.trim(),n=(p=(d=document.getElementById("st-country"))==null?void 0:d.value)==null?void 0:p.trim(),i=document.getElementById("st-club"),c=(i==null?void 0:i.selectedIndex)||0,l=i&&c>0?i.options[c].text:"",s=((E=(f=i==null?void 0:i.options[c])==null?void 0:f.getAttribute)==null?void 0:E.call(f,"data-logo"))||"";let r;t?r=`<img src="${tn}icons/${t}" style="width:64px;height:64px;object-fit:contain;display:block;margin:0 auto">`:s?r=`<img src="${s}" style="width:64px;height:64px;object-fit:contain;display:block;margin:0 auto" onerror="this.style.display='none'">`:n?r=`<img src="${`https://flagsapi.com/${$country.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`}" style="width:80px;height:60px;object-fit:contain;display:block;margin:0 auto;border-radius:4px">`:r='<div style="font-size:36px;text-align:center">🏟️</div>';const m=l||n||"—";document.getElementById("st-preview-card").innerHTML=rn(e,r,m,!0)}function rn(e,t,n,i=!1){return`<div style="width:140px;background:linear-gradient(160deg,${Xe},#c45a00);border-radius:12px;padding:6px;display:flex;flex-direction:column;gap:0;box-shadow:0 4px 12px rgba(232,119,34,0.4);font-family:Arial,sans-serif">
    <div style="text-align:center;font-size:8px;font-weight:900;color:rgba(255,255,255,0.7);letter-spacing:1px;text-transform:uppercase;margin-bottom:2px">🏟️ STADE</div>
    <div style="background:rgba(0,0,0,0.25);border-radius:6px;padding:4px 6px;text-align:center;margin-bottom:4px">
      <div style="font-size:9px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e}</div>
    </div>
    <div style="flex:1;display:flex;align-items:center;justify-content:center;min-height:80px;padding:4px 0">${t}</div>
    <div style="background:rgba(0,0,0,0.3);border-radius:6px;padding:4px 6px;text-align:center;margin-top:4px">
      <div style="font-size:8px;color:rgba(255,255,255,0.8);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${n}</div>
      <div style="font-size:10px;font-weight:900;color:#FFD700;margin-top:1px">+10 ⭐</div>
    </div>
  </div>`}async function ln(e){const t=document.getElementById("st-id").value,n=document.getElementById("st-name").value.trim(),i=document.getElementById("st-club").value||null,c=document.getElementById("st-country").value.trim().toUpperCase()||null,l=document.getElementById("st-image").value.trim()||null;if(!n){alert("Le nom est obligatoire");return}const s={name:n,club_id:i,country_code:c,image_url:l},{error:r}=t?await h.from("stadium_definitions").update(s).eq("id",t):await h.from("stadium_definitions").insert(s);if(r){alert("Erreur : "+r.message);return}document.getElementById("st-form").style.display="none",xe(e)}const G=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],U=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}];async function sn(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await h.from("gc_definitions").select("*").order("sort_order").order("created_at");let n=null;const i=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],c=["GK","DEF","MIL","ATT"],l=()=>window.innerWidth<700,s=d=>e.querySelector(d);function r(d,p=130){if(!d)return"";const f=G.find($=>$.value===d.gc_type)||G[0],E=U.find($=>$.value===d.color)||U[0],w=Math.round(p*.55),b=Math.round(p*.15),k=Math.round(p*.3);return`<div style="width:${p}px;height:${Math.round(p*1.4)}px;border-radius:10px;border:3px solid ${E.hex};background:${f.bg};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 16px ${E.hex}55;flex-shrink:0">
      <div style="height:${b}px;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;padding:0 4px">
        <span style="font-size:${Math.max(8,Math.round(p/11))}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%">${d.name||"?"}</span>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:4px">
        ${d.image_url?`<img src="/icons/${d.image_url}" style="max-height:${w}px;max-width:90%;object-fit:contain">`:`<div style="font-size:${Math.round(p*.3)}px">${f.label.split(" ")[0]}</div>`}
      </div>
      <div style="height:${k}px;background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;padding:4px 6px">
        <span style="font-size:${Math.max(7,Math.round(p/13))}px;color:rgba(255,255,255,0.85);text-align:center;line-height:1.3">${(d.effect||"").slice(0,60)}${(d.effect||"").length>60?"…":""}</span>
      </div>
    </div>`}function m(){return`
    <div id="gc-list" style="background:#fff;${l()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Game Changers (${(t||[]).length})</b>
        <button id="btn-new-gc" style="background:#7a28b8;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(d=>{const p=G.find(E=>E.value===d.gc_type)||G[0],f=U.find(E=>E.value===d.color)||U[0];return`
        <div class="gc-row" data-id="${d.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${d.id===n?"#f5f0ff":"#fff"}">
          <div style="width:36px;height:50px;border-radius:5px;border:2px solid ${f.hex};background:${p.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">
            ${d.image_url?`<img src="/icons/${d.image_url}" style="width:28px;height:28px;object-fit:contain">`:p.label.split(" ")[0]}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${d.name}</div>
            <div style="font-size:11px;color:#888">${p.label} · ${d.is_active?"✅ Actif":"⛔ Inactif"}</div>
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
      ${(t||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucune carte. Cliquez + Nouveau.</div>'}
    </div>`}function a(){const d=n?(t||[]).find(f=>f.id===n):null;if(!d)return`<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez une carte ou créez-en une nouvelle
    </div>`;const p=G.find(f=>f.value===d.gc_type)||G[0];return U.find(f=>f.value===d.color)||U[0],`
    <div style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${l()?'<button id="btn-gc-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <!-- Preview -->
      <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:${p.bg};border-radius:12px">
        ${r(d,l()?120:150)}
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
              ${G.map(f=>`<option value="${f.value}" ${d.gc_type===f.value?"selected":""}>${f.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">COULEUR</label>
            <select id="gc-color" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${U.map(f=>`<option value="${f.value}" ${d.color===f.value?"selected":""}>${f.label}</option>`).join("")}
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
              ${i.map(f=>`<option value="${f.value}" ${(d.effect_type||"BOOST_STAT")===f.value?"selected":""}>${f.label}</option>`).join("")}
            </select>
          </div>
          ${(()=>{const f=d.effect_params||{},E=i.find(w=>w.value===(d.effect_type||"BOOST_STAT"))||i[0];return`
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
    </div>`}function g(){e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!l()||!n?m():""}
      ${!l()||n?a():""}
    </div>`,o()}function o(){var d,p,f,E,w;e.querySelectorAll(".gc-row").forEach(b=>{b.addEventListener("click",k=>{k.target.closest(".btn-toggle-gc,.btn-delete-gc")||(n=b.dataset.id,g())})}),(d=s("#btn-gc-back"))==null||d.addEventListener("click",()=>{n=null,g()}),(p=s("#btn-cancel-gc"))==null||p.addEventListener("click",()=>{n=null,g()}),(f=s("#btn-new-gc"))==null||f.addEventListener("click",async()=>{const b=prompt("Nom de la carte Game Changer :");if(!(b!=null&&b.trim()))return;const{data:k,error:$}=await h.from("gc_definitions").insert({name:b.trim(),gc_type:"game_changer",color:"purple"}).select().single();if($){alert($.message);return}t.push(k),n=k.id,g()}),e.querySelectorAll(".btn-toggle-gc").forEach(b=>{b.addEventListener("click",async k=>{k.stopPropagation();const $=b.dataset.active!=="true";await h.from("gc_definitions").update({is_active:$}).eq("id",b.dataset.id);const v=t.find(u=>u.id===b.dataset.id);v&&(v.is_active=$),g()})}),e.querySelectorAll(".btn-delete-gc").forEach(b=>{b.addEventListener("click",async k=>{if(k.stopPropagation(),!confirm("Supprimer cette carte Game Changer ?"))return;await h.from("gc_definitions").delete().eq("id",b.dataset.id);const $=t.findIndex(v=>v.id===b.dataset.id);$>-1&&t.splice($,1),n===b.dataset.id&&(n=null),g()})}),(E=s("#btn-pick-gc-icon"))==null||E.addEventListener("click",async()=>{var k;const b=s("#gc-icon-picker");if(b){if(b.style.display!=="none"){b.style.display="none";return}b.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',b.style.display="block";try{const v=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),u=Array.isArray(v)?v.filter(y=>y.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(y.name)):[];if(!u.length){b.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const x=((k=s("#gc-image-url"))==null?void 0:k.value)||"";b.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${u.map(y=>`
          <div class="gc-icon-item" data-name="${y.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${y.name===x?"#7a28b8":"#ddd"};background:${y.name===x?"#f5f0ff":"#fff"}">
            <img src="/icons/${y.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${y.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
          </div>`).join("")}
        </div>`,b.querySelectorAll(".gc-icon-item").forEach(y=>{y.addEventListener("click",()=>{const _=s("#gc-image-url");_&&(_.value=y.dataset.name),b.style.display="none"})})}catch($){b.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${$.message}</div>`}}}),(w=s("#btn-save-gc"))==null||w.addEventListener("click",async()=>{var y,_,L,I,B,A,C,T,P,q,O,F,R,H;const b=t.find(j=>j.id===n);if(!b)return;const k=i.find(j=>{var z;return j.value===(((z=s("#gc-effect-type"))==null?void 0:z.value)||"BOOST_STAT")})||i[0],$=k.hasRoles?[...e.querySelectorAll(".gc-p-role:checked")].map(j=>j.value):null,v={...k.hasValue?{value:Number((y=s("#gc-p-value"))==null?void 0:y.value)||2}:{},...k.hasCount?{count:Number((_=s("#gc-p-count"))==null?void 0:_.value)||1}:{},...k.hasTarget?{target:((L=s("#gc-p-target"))==null?void 0:L.value)||"home"}:{},...k.hasRoles?{roles:$!=null&&$.length?$:null}:{}},u={name:((B=(I=s("#gc-name"))==null?void 0:I.value)==null?void 0:B.trim())||b.name,effect:((C=(A=s("#gc-effect"))==null?void 0:A.value)==null?void 0:C.trim())||null,image_url:((P=(T=s("#gc-image-url"))==null?void 0:T.value)==null?void 0:P.trim())||null,gc_type:((q=s("#gc-type"))==null?void 0:q.value)||"game_changer",color:((O=s("#gc-color"))==null?void 0:O.value)||"purple",sort_order:Number((F=s("#gc-sort"))==null?void 0:F.value)||0,is_active:((R=s("#gc-active"))==null?void 0:R.checked)??b.is_active,effect_type:((H=s("#gc-effect-type"))==null?void 0:H.value)||"BOOST_STAT",effect_params:v},{error:x}=await h.from("gc_definitions").update(u).eq("id",n);if(x){alert(x.message);return}Object.assign(b,u),alert("✅ Carte enregistrée !"),g()})}g()}async function dn(e,{toast:t,openModal:n,closeModal:i}){await J(e,{toast:t,openModal:n,closeModal:i})}async function J(e,t){var v;const{toast:n,openModal:i,closeModal:c}=t,[{data:l,error:s},{data:r}]=await Promise.all([h.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),h.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1)]);if(s){e.innerHTML=`<p style="color:red">${s.message}</p>`;return}const m=l||[],a=m.find(u=>u.is_active),g=(r||[]).filter(u=>(u.placement_matches||0)>=1),o=g.filter(u=>(u.placement_matches||0)>=10),d=["bronze","silver","gold","platinum","diamond","master"],p={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},f={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},E={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},w={};d.forEach(u=>{w[u]=0}),o.forEach(u=>{const x=u.rank_tier||"bronze";w[x]!==void 0&&w[x]++});const b=o.length?Math.round(o.reduce((u,x)=>u+(x.mmr||1e3),0)/o.length):0;function k(u){return u?new Date(u).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function $(u){const x=new Date;return u.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(u.end_at)<x?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${a?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${a.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${g.length}</div>
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
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(a.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${o.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${d.map(u=>{const x=w[u],y=o.length>0?Math.round(x/o.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${E[u]} ${p[u]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${y}%;background:${f[u]};border-radius:4px;transition:width 0.5s"></div>
                </div>
                <span style="width:40px;text-align:right;color:var(--gray-600)">${x} (${y}%)</span>
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
              ${m.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':m.map(u=>{const x=Math.round((new Date(u.end_at)-new Date(u.start_at))/864e5),y=new Date(u.end_at)<new Date&&!u.is_active;return`
                    <tr>
                      <td><b>${u.name}</b></td>
                      <td style="font-size:12px">${k(u.start_at)}</td>
                      <td style="font-size:12px">${k(u.end_at)}</td>
                      <td style="font-size:12px">${x} jours</td>
                      <td>${$(u)}</td>
                      <td style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn btn-ghost btn-sm" data-edit="${u.id}">✏️ Modifier</button>
                        ${u.is_active?`<button class="btn btn-ghost btn-sm" data-deactivate="${u.id}" style="color:#e67e22">⏹ Désactiver</button>`:`<button class="btn btn-primary btn-sm" data-activate="${u.id}">▶ Activer</button>`}
                        ${y?`<button class="btn btn-danger btn-sm" data-delete="${u.id}">🗑</button>`:""}
                      </td>
                    </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>`,(v=document.getElementById("create-season-btn"))==null||v.addEventListener("click",()=>{Me(null,{toast:n,openModal:i,closeModal:c,reload:()=>J(e,t)})}),e.querySelectorAll("[data-edit]").forEach(u=>{const x=m.find(y=>y.id==u.dataset.edit);u.addEventListener("click",()=>{Me(x,{toast:n,openModal:i,closeModal:c,reload:()=>J(e,t)})})}),e.querySelectorAll("[data-activate]").forEach(u=>{u.addEventListener("click",async()=>{const x=parseInt(u.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:y}=await h.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(y){n(y.message,"error");return}const{error:_}=await h.from("ranked_seasons").update({is_active:!0}).eq("id",x);if(_){n(_.message,"error");return}await h.from("users").update({current_season_id:x}).gt("placement_matches",0),n("Saison activée ✅","success"),J(e,t)})}),e.querySelectorAll("[data-deactivate]").forEach(u=>{u.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:x}=await h.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(u.dataset.deactivate));if(x){n(x.message,"error");return}n("Saison désactivée","success"),J(e,t)})}),e.querySelectorAll("[data-delete]").forEach(u=>{u.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:x}=await h.from("ranked_seasons").delete().eq("id",parseInt(u.dataset.delete));if(x){n(x.message,"error");return}n("Saison supprimée","success"),J(e,t)})})}function Me(e,{toast:t,openModal:n,closeModal:i,reload:c}){const l=!!e,s=new Date().toISOString().slice(0,16),r=new Date(Date.now()+90*864e5).toISOString().slice(0,16),m=e?new Date(e.start_at).toISOString().slice(0,16):s,a=e?new Date(e.end_at).toISOString().slice(0,16):r,g=(e==null?void 0:e.name)||"";n(l?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group">
        <label>Nom de la saison *</label>
        <input id="season-name" type="text" value="${g}" placeholder="ex: Saison 2 — Été 2026" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de début *</label>
        <input id="season-start" type="datetime-local" value="${m}" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de fin *</label>
        <input id="season-end" type="datetime-local" value="${a}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${l?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function o(){var w,b;const d=(w=document.getElementById("season-start"))==null?void 0:w.value,p=(b=document.getElementById("season-end"))==null?void 0:b.value,f=document.getElementById("season-duration");if(!d||!p||!f)return;const E=Math.round((new Date(p)-new Date(d))/864e5);f.textContent=E>0?`Durée : ${E} jour${E>1?"s":""}`:"⚠️ La fin doit être après le début",f.style.color=E>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var d,p,f;(d=document.getElementById("season-start"))==null||d.addEventListener("input",o),(p=document.getElementById("season-end"))==null||p.addEventListener("input",o),o(),(f=document.getElementById("season-save-btn"))==null||f.addEventListener("click",async()=>{var x,y,_;const E=(x=document.getElementById("season-name"))==null?void 0:x.value.trim(),w=(y=document.getElementById("season-start"))==null?void 0:y.value,b=(_=document.getElementById("season-end"))==null?void 0:_.value,k=document.getElementById("season-error");if(!E){k.textContent="Le nom est requis.";return}if(!w){k.textContent="La date de début est requise.";return}if(!b){k.textContent="La date de fin est requise.";return}if(new Date(b)<=new Date(w)){k.textContent="La date de fin doit être après le début.";return}const $=document.getElementById("season-save-btn");$.disabled=!0,$.textContent="Enregistrement…";const v={name:E,start_at:new Date(w).toISOString(),end_at:new Date(b).toISOString()};let u;if(l?{error:u}=await h.from("ranked_seasons").update(v).eq("id",e.id):{error:u}=await h.from("ranked_seasons").insert({...v,is_active:!1}),u){k.textContent=u.message,$.disabled=!1,$.textContent=l?"💾 Enregistrer":"✅ Créer la saison";return}t(l?"Saison modifiée ✅":"Saison créée ✅","success"),i(),c()})},50)}ut(Pe);function cn(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function pn(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function ge(){document.getElementById("modal-overlay").classList.add("hidden")}const je={dashboard:{title:"Dashboard",fn:mt},players:{title:"Joueurs & Cartes",fn:bt},clubs:{title:"Clubs",fn:Bt},"card-builder":{title:"Card Builder",fn:Tt},users:{title:"Managers",fn:Je},market:{title:"Marché des transferts",fn:Ye},"import-export":{title:"Import / Export CSV",fn:Nt},formations:{title:"Formations & Liens",fn:qt},"boosters-config":{title:"Boosters",fn:Gt},"sell-price":{title:"Prix vente directe",fn:Ut},journal:{title:"Journal",fn:Jt},tutorial:{title:"Tutoriel",fn:Zt},stadiums:{title:"Stades",fn:on},"gc-cards":{title:"Game Changers",fn:sn},"ranked-seasons":{title:"Saisons Ranked",fn:dn}};async function pe(e){document.querySelectorAll(".admin-sidebar nav a").forEach(c=>{c.classList.toggle("active",c.dataset.page===e)});const t=document.getElementById("mobile-page-select");t&&(t.value=e);const n=je[e]||je.dashboard;document.getElementById("page-title").textContent=n.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(i,{toast:cn,openModal:pn,closeModal:ge,navigate:pe})}catch(c){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${c.message}</div>`,console.error(c)}}async function un(){var t;const{data:{session:e}}=await h.auth.getSession();e&&await Re(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,c=document.getElementById("auth-error");if(c.textContent="",!n||!i){c.textContent="Remplissez tous les champs.";return}const{data:l,error:s}=await h.auth.signInWithPassword({email:n,password:i});if(s){c.textContent=s.message;return}await Re(l.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await h.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",ge),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&ge()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",i=>{i.preventDefault(),pe(n.dataset.page)})}),(t=document.getElementById("mobile-page-select"))==null||t.addEventListener("change",n=>{pe(n.target.value)})}async function Re(e){const{data:t,error:n}=await h.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(n||!t){i.textContent="Profil introuvable.";return}if(!t.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await h.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,pe("dashboard")}un();
