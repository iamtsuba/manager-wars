import{s as E,r as Pe,a as Ue,A as nt,l as it,g as ot,b as Oe,K as we,D as R,S as at,c as D,H as rt,R as lt,e as ue,d as Ge,f as st,h as dt,E as ct,i as pt,N as ut,M as mt,B as gt,j as ft,F as me,k as ke,m as bt,n as yt,o as xt,p as vt}from"./special-cards-BY0MTcrl.js";async function ht(e){var y;const[{count:t},{count:n},{count:i},{count:u},{count:d},{data:p}]=await Promise.all([E.from("players").select("*",{count:"exact",head:!0}),E.from("clubs").select("*",{count:"exact",head:!0}),E.from("users").select("*",{count:"exact",head:!0}),E.from("cards").select("*",{count:"exact",head:!0}),E.from("matches").select("*",{count:"exact",head:!0}),E.rpc("get_signup_password")]),l=p||"";e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px">
      ${ee("🃏","Joueurs (cartes)",t??"–","#1A6B3C")}
      ${ee("🏟️","Clubs",n??"–","#D4A017")}
      ${ee("👥","Managers",i??"–","#7a28b8")}
      ${ee("📦","Cartes possédées",u??"–","#2a8f52")}
      ${ee("⚽","Matchs joués",d??"–","#bb2020")}
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px">
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

    <div class="card-panel">
      <h3 style="font-size:14px;margin-bottom:4px;font-weight:600">🔐 Code d'accès à l'inscription</h3>
      <div style="font-size:12px;color:var(--gray-600);margin-bottom:12px">Requis pour que le bouton "Créer mon compte" soit actif sur la page de connexion.</div>
      <div style="display:flex;gap:8px;max-width:420px">
        <input id="signup-pwd-input" type="text" value="${l.replace(/"/g,"&quot;")}" style="flex:1;padding:10px 12px;border-radius:8px;border:1.5px solid var(--gray-200);font-size:14px;color:#1a1a1a">
        <button id="signup-pwd-save" class="btn btn-primary">💾 Enregistrer</button>
      </div>
      <div id="signup-pwd-status" style="font-size:12px;margin-top:8px;min-height:16px"></div>
    </div>
  `,window.adminNav=o=>{var c;(c=document.querySelector(`[data-page="${o}"]`))==null||c.click()},(y=document.getElementById("signup-pwd-save"))==null||y.addEventListener("click",async()=>{const o=document.getElementById("signup-pwd-input").value.trim(),c=document.getElementById("signup-pwd-status");if(!o){c.textContent="Le code ne peut pas être vide.",c.style.color="#cc2222";return}const r=document.getElementById("signup-pwd-save");r.disabled=!0,r.textContent="⏳...";const{error:a}=await E.rpc("set_signup_password",{new_password:o});if(r.disabled=!1,r.textContent="💾 Enregistrer",a){c.textContent=a.message,c.style.color="#cc2222";return}c.textContent="✅ Code mis à jour.",c.style.color="#1A6B3C"})}function ee(e,t,n,i){return`<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${e}</div>
    <div style="font-size:28px;font-weight:700;color:${i}">${n}</div>
    <div style="font-size:11px;color:var(--gray-600)">${t}</div>
  </div>`}const He={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},Et={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function _t(){const e={};for(const t of nt)e[t]=await it(t);return e}async function wt(e,t){const{toast:n}=t;if(!confirm(`Réattribuer une nouvelle photo à tous les joueurs ayant encore l'ancien format de chemin (public/faces/...) ?

Cette action est irréversible.`))return;const i=document.getElementById("fix-old-faces-btn");i&&(i.disabled=!0,i.textContent="⏳ En cours...");try{const{data:u,error:d}=await E.from("players").select("id, country_code, face").like("face","public/faces/%");if(d){n(d.message,"error");return}if(!(u!=null&&u.length)){n("Aucun joueur avec l'ancien format — rien à faire ✅","success");return}const{data:p}=await E.from("players").select("face").not("face","is",null),l=new Set((p||[]).map(c=>c.face).filter(c=>c&&!c.startsWith("public/faces/")));let y=0,o=0;for(const c of u){const r=await Ue(c.country_code,l);if(!r){o++;continue}const{error:a}=await E.from("players").update({face:r}).eq("id",c.id);if(a){o++;continue}l.add(r),y++}n(`${y} photo(s) réattribuée(s)${o?`, ${o} échec(s)`:""} ✅`,o?"error":"success")}finally{i&&(i.disabled=!1,i.textContent="🖼️ Réattribuer anciennes photos")}}async function kt(e,t){await de(e,t)}async function de(e,t,n=null){var o,c,r,a,m;const{toast:i}=t;n||(n={search:((o=document.getElementById("search-players"))==null?void 0:o.value)||"",job:((c=document.getElementById("filter-job"))==null?void 0:c.value)||"",rarity:((r=document.getElementById("filter-rarity"))==null?void 0:r.value)||"",club:((a=document.getElementById("filter-club"))==null?void 0:a.value)||"",country:((m=document.getElementById("filter-country"))==null?void 0:m.value)||""});const[{data:u,error:d},{data:p}]=await Promise.all([E.from("players").select("*, clubs(id,encoded_name,logo_url)"),E.from("clubs").select("id,encoded_name").order("encoded_name")]);if(d){e.innerHTML=`<p style="color:red">${d.message}</p>`;return}const l={GK:0,DEF:1,MIL:2,ATT:3},y=(u||[]).sort((s,h)=>{const _=(l[s.job]??4)-(l[h.job]??4);return _!==0?_:(s.surname_real||"").localeCompare(h.surname_real||"")});It(e,y,p||[],t,n)}function It(e,t,n,i,u=null){var c,r;const{toast:d}=i;if(e.innerHTML=`
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
          ${Object.entries(He).map(([a,m])=>`<option value="${a}">${m}</option>`).join("")}
        </select>
        <button class="btn btn-primary" id="add-player-btn" style="white-space:nowrap">+ Joueur</button>
        <button class="btn btn-ghost" id="fix-old-faces-btn" style="white-space:nowrap">🖼️ Réattribuer anciennes photos</button>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <select id="filter-club" style="flex:1;min-width:140px">
          <option value="">Tous les clubs</option>
          ${n.map(a=>`<option value="${a.id}">${a.encoded_name}</option>`).join("")}
        </select>
        <select id="filter-country" style="flex:1;min-width:120px">
          <option value="">Tous les pays</option>
          ${[...new Set(t.map(a=>a.country_code).filter(Boolean))].sort().map(a=>`<option value="${a}">${a}</option>`).join("")}
        </select>
      </div>
      <div id="filters-restore-hook" style="display:none"></div>
      <div id="count-label" style="font-size:12px;color:var(--gray-600)">${t.length} joueur(s)</div>
      <div id="bulk-bar" style="display:none;align-items:center;gap:8px;padding:8px 10px;background:rgba(187,32,32,0.08);border:1px solid #bb2020;border-radius:10px">
        <span id="bulk-count" style="font-size:13px;font-weight:700;color:#bb2020;flex:1"></span>
        <button class="btn btn-danger btn-sm" id="bulk-delete-btn">🗑️ Supprimer la sélection</button>
        <button class="btn btn-ghost btn-sm" id="bulk-cancel-btn">Annuler</button>
      </div>
      <!-- Grille de cartes -->
      <div id="players-list" style="display:flex;flex-wrap:wrap;gap:12px"></div>
    </div>`,u){const a=u,m=s=>document.getElementById(s);a.search&&m("search-players")&&(m("search-players").value=a.search),a.job&&m("filter-job")&&(m("filter-job").value=a.job),a.rarity&&m("filter-rarity")&&(m("filter-rarity").value=a.rarity),a.club&&m("filter-club")&&(m("filter-club").value=a.club),a.country&&m("filter-country")&&(m("filter-country").value=a.country)}if(u){const a=u,m=s=>document.getElementById(s);a.search&&m("search-players")&&(m("search-players").value=a.search),a.job&&m("filter-job")&&(m("filter-job").value=a.job),a.rarity&&m("filter-rarity")&&(m("filter-rarity").value=a.rarity),a.club&&m("filter-club")&&(m("filter-club").value=a.club),a.country&&m("filter-country")&&(m("filter-country").value=a.country)}function p(){const a=document.getElementById("search-players").value.toLowerCase(),m=document.getElementById("filter-job").value,s=document.getElementById("filter-rarity").value,h=document.getElementById("filter-club").value,_=document.getElementById("filter-country").value;return t.filter(b=>(!a||`${b.firstname} ${b.surname_real}`.toLowerCase().includes(a))&&(!m||b.job===m)&&(!s||b.rarity===s)&&(!h||b.club_id===h)&&(!_||b.country_code===_))}const l=new Set;function y(){const a=document.getElementById("bulk-bar"),m=document.getElementById("bulk-count");a&&(a.style.display=l.size>0?"flex":"none",m&&(m.textContent=`${l.size} joueur(s) sélectionné(s)`))}function o(){const a=p();document.getElementById("count-label").textContent=`${a.length} joueur(s)`;const m=document.getElementById("players-list");if(!a.length){m.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}m.innerHTML=a.map(s=>{const h={...s,clubs:s.clubs,face:s.face||null},_=Pe(h,{width:120});return`<div style="position:relative;cursor:pointer" data-edit="${s.id}">
        ${_}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${s.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),m.querySelectorAll("[data-edit]").forEach(s=>{s.addEventListener("click",()=>{const h=t.find(_=>_.id===s.dataset.edit);h&&Ie(h,n,e,i)})}),m.querySelectorAll(".btn-del-player").forEach(s=>{s.addEventListener("click",async h=>{if(h.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:_}=await E.from("players").delete().eq("id",s.dataset.del);_?d(_.message,"error"):(d("Joueur supprimé ✅","success"),de(e,i))})})}o(),document.getElementById("search-players").addEventListener("input",o),document.getElementById("filter-job").addEventListener("change",o),document.getElementById("filter-rarity").addEventListener("change",o),document.getElementById("filter-club").addEventListener("change",o),document.getElementById("filter-country").addEventListener("change",o),(c=document.getElementById("bulk-cancel-btn"))==null||c.addEventListener("click",()=>{l.clear(),y(),o()}),(r=document.getElementById("bulk-delete-btn"))==null||r.addEventListener("click",async()=>{var h,_,b,I,k;if(!l.size||!confirm(`Supprimer ${l.size} joueur(s) ?`))return;const a=[...l],{error:m}=await E.from("players").delete().in("id",a);if(m){d(m.message,"error");return}d(`${a.length} joueur(s) supprimé(s) ✅`,"success"),l.clear();const s={search:((h=document.getElementById("search-players"))==null?void 0:h.value)||"",job:((_=document.getElementById("filter-job"))==null?void 0:_.value)||"",rarity:((b=document.getElementById("filter-rarity"))==null?void 0:b.value)||"",club:((I=document.getElementById("filter-club"))==null?void 0:I.value)||"",country:((k=document.getElementById("filter-country"))==null?void 0:k.value)||""};de(e,i,s)}),document.getElementById("add-player-btn").addEventListener("click",()=>Ie(null,n,e,i)),document.getElementById("fix-old-faces-btn").addEventListener("click",()=>wt(e,i))}async function Ie(e,t,n,i){const{toast:u,openModal:d,closeModal:p}=i,l=!!e,y=await _t(),{data:o}=await E.from("players").select("face").not("face","is",null),c=new Set((o||[]).map(s=>s.face).filter(Boolean));e!=null&&e.face&&c.delete(e.face);const r='<option value="">— Club —</option>'+t.map(s=>`<option value="${s.id}" ${(e==null?void 0:e.club_id)===s.id?"selected":""}>${s.encoded_name}</option>`).join(""),a=e!=null&&e.face?e.face.split("/")[0]:"",m=Object.keys(y).map(s=>`<option value="${s}" ${a===s?"selected":""}>${s}</option>`).join("");d(l?`✏️ ${e.firstname} ${e.surname_real}`:"➕ Nouveau joueur",`<div style="display:flex;gap:20px;align-items:flex-start">

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
            <label>Nom</label>
            <input id="pm-real" value="${(e==null?void 0:e.surname_real)||""}" placeholder="Silva">
          </div>
        </div>

        <!-- Poste + Rareté + Pays -->
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px">
          <div class="form-group">
            <label>Poste 1</label>
            <select id="pm-job">
              ${["GK","DEF","MIL","ATT"].map(s=>`<option value="${s}" ${(e==null?void 0:e.job)===s?"selected":""}>${s}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Poste 2</label>
            <select id="pm-job2">
              <option value="">Aucun</option>
              ${["GK","DEF","MIL","ATT"].map(s=>`<option value="${s}" ${(e==null?void 0:e.job2)===s?"selected":""}>${s}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Rareté</label>
            <select id="pm-rarity">
              ${["normal","pepite","papyte","legende"].map(s=>`<option value="${s}" ${(e==null?void 0:e.rarity)===s?"selected":""}>${He[s]}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Pays</label>
            <select id="pm-country">
              ${["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"].map(s=>`<option value="${s}" ${((e==null?void 0:e.country_code)||"FR")===s?"selected":""}>${s}</option>`).join("")}
            </select>
          </div>
        </div>

        <!-- Club + Prix -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <div class="form-group">
            <label>Club</label>
            <select id="pm-club">${r}</select>
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
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([s,h,_])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${Et[s]};font-weight:700">${s}</label>
                <input id="${h}" type="number" min="0" max="20" value="${(e==null?void 0:e[_])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
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
              <label>Continent</label>
              <select id="pm-folder">
                <option value="">— Choisir —</option>
                ${m}
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
        <div style="position:sticky;bottom:0;background:#fff;padding:8px 0 4px;margin-top:4px">
        <button class="btn btn-primary" id="pm-save" style="width:100%;padding:14px;font-size:15px">
          ${l?"💾 Enregistrer":"✅ Créer le joueur"}
        </button>
        </div>
      </div>
    </div>`),setTimeout(()=>{var k,x,g;let s=(e==null?void 0:e.face)||null;function h(){var K,U,Y,W,Z,Q,X,ve,he,Ee,_e;const f=document.getElementById("card-preview");if(!f)return;const v=((K=document.getElementById("pm-fn"))==null?void 0:K.value)||"",w=(((U=document.getElementById("pm-real"))==null?void 0:U.value)||"").toUpperCase(),A=((Y=document.getElementById("pm-job"))==null?void 0:Y.value)||"ATT",$=((W=document.getElementById("pm-job2"))==null?void 0:W.value)||null,L=((Z=document.getElementById("pm-rarity"))==null?void 0:Z.value)||"normal",B=((Q=document.getElementById("pm-country"))==null?void 0:Q.value)||"FR",S=((X=document.getElementById("pm-club"))==null?void 0:X.value)||null,T=document.getElementById("pm-club"),z=T==null?void 0:T.options[T.selectedIndex];(z==null?void 0:z.text)!=="— Club —"&&(z==null||z.text);const M=parseInt((ve=document.getElementById("pm-g"))==null?void 0:ve.value)||0,N=parseInt((he=document.getElementById("pm-d"))==null?void 0:he.value)||0,F=parseInt((Ee=document.getElementById("pm-m"))==null?void 0:Ee.value)||0,O=parseInt((_e=document.getElementById("pm-a"))==null?void 0:_e.value)||0,P=t.find(tt=>tt.id===S),j={firstname:v||"Prénom",surname_real:w||"NOM",job:A,job2:$||null,rarity:L,country_code:B,club_id:S,note_g:M,note_d:N,note_m:F,note_a:O,face:s||null,clubs:P?{encoded_name:P.encoded_name,logo_url:P.logo_url}:null};f.innerHTML=Pe(j,{width:160});const C=document.getElementById("pm-minmax");C&&(C.style.display=["pepite","papyte"].includes(L)?"grid":"none")}function _(f){const v=document.getElementById("faces-grid"),w=document.getElementById("pm-face");if(!v||!w)return;const A=y[f]||[];if(console.log("[players] loadFacesGrid folder=",f,"files=",A.length,A.slice(0,5)),!A.length){w.innerHTML='<option value="">— Aucun visage disponible —</option>',v.innerHTML=`<p style="font-size:11px;color:#888;font-style:italic">Aucune image dans le dossier "${f}" du bucket Supabase.</p>`;return}const $=A.filter(L=>{const B=f+"/"+L;return B===s||!c.has(B)});w.innerHTML='<option value="">— Choisir un visage —</option>'+$.map(L=>{const B=f+"/"+L;return`<option value="${B}" ${s===B?"selected":""}>${L}</option>`}).join(""),v.innerHTML=$.map(L=>{const B=f+"/"+L,S=s===B,T=ot({face:B});return`<div data-face="${B}" style="cursor:pointer;border:2px solid ${S?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${T}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),v.querySelectorAll("[data-face]").forEach(L=>{L.addEventListener("click",()=>{s=L.dataset.face;const B=document.getElementById("pm-face");B&&(B.value=s),v.querySelectorAll("[data-face]").forEach(S=>{S.style.border=`2px solid ${S.dataset.face===s?"#4fc3f7":"transparent"}`}),h()})})}const b=e!=null&&e.face?e.face.split("/")[0]:"";b&&y[b]&&(document.getElementById("pm-folder").value=b,_(b)),(k=document.getElementById("pm-folder"))==null||k.addEventListener("change",f=>{_(f.target.value)}),(x=document.getElementById("pm-face"))==null||x.addEventListener("change",f=>{s=f.target.value||null,h()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach(f=>{var v,w;(v=document.getElementById(f))==null||v.addEventListener("input",h),(w=document.getElementById(f))==null||w.addEventListener("change",h)}),(g=document.getElementById("pm-save"))==null||g.addEventListener("click",()=>At(e,l,s,n,i)),h()},50)}function $t(e){const t=n=>{var i;return(i=document.getElementById(n))==null?void 0:i.value};return{firstname:(t("pm-fn")||"").trim(),surname_real:(t("pm-real")||"").trim()||"JOUEUR",country_code:t("pm-country")||"FR",club_id:t("pm-club")||null,job:t("pm-job")||"ATT",job2:t("pm-job2")||null,rarity:t("pm-rarity")||"normal",note_g:parseInt(t("pm-g"))||0,note_d:parseInt(t("pm-d"))||0,note_m:parseInt(t("pm-m"))||0,note_a:parseInt(t("pm-a"))||0,note_min:parseInt(t("pm-nmin"))||null,note_max:parseInt(t("pm-nmax"))||null,sell_price:parseInt(t("pm-price"))||0,face:e||null,ethnie:t("pm-folder")||null,is_active:!0}}async function At(e,t,n,i,u){var m,s,h,_,b;const{toast:d,closeModal:p}=u,l=document.getElementById("pm-error"),y=document.getElementById("pm-save"),o=$t(n);if(!o.firstname){l.textContent="Le prénom est requis.";return}if(!o.surname_real){l.textContent="Le nom est requis.";return}y.disabled=!0,y.textContent="Enregistrement…";const c=o,{error:r}=t?await E.from("players").update({...c,updated_at:new Date().toISOString()}).eq("id",e.id):await E.from("players").insert(c);if(r){l.textContent=r.message,y.disabled=!1,y.textContent=t?"💾 Enregistrer":"✅ Créer le joueur";return}d(t?"Joueur modifié ✅":"Joueur créé ✅","success"),p();const a={search:((m=document.getElementById("search-players"))==null?void 0:m.value)||"",job:((s=document.getElementById("filter-job"))==null?void 0:s.value)||"",rarity:((h=document.getElementById("filter-rarity"))==null?void 0:h.value)||"",club:((_=document.getElementById("filter-club"))==null?void 0:_.value)||"",country:((b=document.getElementById("filter-country"))==null?void 0:b.value)||""};de(i,u,a)}const Lt={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},Bt=["rase","court","milong","long"];function St(e){const t=Ke(e);if(t==="noir")return"noir";if(t==="typ")return Math.random()<.9?"noir":"marron";if(t==="metisse")return Math.random()<.6?"noir":"marron";const n=Math.random();return n<.35?"blond":n<.75?"marron":"noir"}function Ct(e){return Math.random()<.05?"chauve":St(e)}const qe=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function Ke(e){return Lt[e]||"blanc"}function Tt(e){return Ct(e)}function ge(e,t){return Math.floor(Math.random()*(t-e+1))+e}function oe(e){return e[Math.floor(Math.random()*e.length)]}function zt(e){const t=qe.filter(n=>n!==e);return oe(t)}function $e(e){const t=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","GR","RO","BG","UA","RU"],n=["MA","DZ","TN","EG","LY"],i=["NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","TZ","UG","ET"],u=["JP","KR","CN","VN","TH","ID","PH","IN","PK","BD","SA","AE","IR"];return t.includes(e)||["AR","UY","CL","PE","EC","CO","MX","BR"].includes(e)?"Europeans":n.includes(e)?"North Africans":i.includes(e)?"Africans":u.includes(e)?"Asians":"Europeans"}const Mt=[{min:1,max:4,pct:55},{min:5,max:10,pct:20},{min:11,max:14,pct:10},{min:15,max:17,pct:10},{min:18,max:20,pct:5}];function Rt(){const e=Math.random()*100;let t=0;for(const n of Mt)if(t+=n.pct,e<t)return ge(n.min,n.max);return ge(1,4)}function Dt(){const e=Array.from({length:20},(t,n)=>n);return e.sort(()=>Math.random()-.5),new Set(e.slice(0,10))}let ae=null;function jt(e,t){return e&&(ae||(ae=Dt()),ae.has(t))?ge(15,20):Rt()}function Nt(e,t,n=new Set,i=!1){const u={FR:{first:["Lucas","Tom","Hugo","Théo","Antoine","Kylian","Rayan","Axel","Paul","Enzo","Léo","Mathis","Nathan","Alexis","Ethan","Maxime","Julien","Baptiste","Nicolas","Pierre","Clément","Adrien","Valentin","Dylan","Loïc","Quentin","Florian","Kevin","Corentin","Raphaël"],last:["Martin","Bernard","Petit","Dupont","Moreau","Laurent","Robert","Michel","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard","Bonnet","Rousseau","Fontaine","Chevalier","Blanc","Garnier","Boyer","Gauthier","Garcia","Perrin","Robin","Clément","Morin","Nicolas","Henry","Lemaire","Noël","Dufour","Meunier","Brun","Blanchard","Giraud","Joly","Rivière","Brunet"]},ES:{first:["Carlos","Miguel","Javier","Alejandro","Sergio","David","Diego","Pablo","Álvaro","Marcos","Adrián","Rubén","Iker","Raúl","Fernando","Roberto","Víctor","Iván","Gonzalo","Antonio","Manuel","Jesús","Josué","Rodrigo","Cristian","Héctor","Óscar","Mario","Daniel","Jorge"],last:["García","Rodríguez","Martínez","López","Sánchez","González","Pérez","Hernández","Jiménez","Díaz","Torres","Ramírez","Flores","Rivera","Gómez","Morales","Álvarez","Romero","Herrera","Medina","Aguilar","Vargas","Guzmán","Muñoz","Salazar","Soto","Contreras","Rojas","Ramos","Ortiz"]},PT:{first:["João","Pedro","Diogo","Rúben","Bruno","Tiago","André","Ricardo","Luís","Gonçalo","Nuno","Mário","Fábio","Rui","Miguel","Sérgio","Hugo","Filipe","Paulo","Vítor"],last:["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Carvalho","Gomes","Ribeiro","Araújo","Barbosa","Cardoso","Correia","Teixeira","Machado","Vieira","Monteiro","Cunha","Pinto","Melo","Barros","Freitas","Fonseca","Andrade","Castro","Neves","Figueiredo","Duarte"]},BR:{first:["Gabriel","Lucas","Mateus","Gustavo","Felipe","Rodrigo","Thiago","Rafael","Bruno","Diego","Leonardo","Eduardo","Victor","Pedro","Carlos","Alexandre","André","Paulo","Danilo","Marcelo"],last:["Silva","Santos","Oliveira","Souza","Lima","Ferreira","Costa","Nascimento","Alves","Pereira","Rodrigues","Almeida","Nunes","Melo","Barbosa","Rocha","Brito","Castro","Carvalho","Gomes","Lopes","Ramos","Mendes","Cavalcanti","Batista","Azevedo","Campos","Freitas","Reis","Andrade"]},AR:{first:["Lionel","Sergio","Rodrigo","Nicolás","Ezequiel","Gonzalo","Federico","Mauro","Pablo","Diego","Lucas","Matías","Alejandro","Maximiliano","Emiliano","Marcos","Lautaro","Ángel","Leandro","Julián"],last:["González","Rodríguez","Martínez","García","López","Pérez","Sánchez","Romero","Torres","Flores","Díaz","Gómez","Alvarez","Ruiz","Castro","Herrera","Cabrera","Medina","Ferreyra","Suárez"]},IT:{first:["Marco","Luca","Alessandro","Matteo","Davide","Andrea","Francesco","Federico","Lorenzo","Riccardo","Stefano","Simone","Roberto","Nicola","Giovanni","Antonio","Emanuele","Daniele","Alberto","Giorgio"],last:["Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Ricci","Marino","Greco","Bruno","Gallo","Conti","De Luca","Mancini","Giordano","Rizzo","Lombardi","Moretti","Fontana","Rinaldi"]},DE:{first:["Lukas","Max","Jonas","Florian","Tobias","Stefan","Markus","Sebastian","Niklas","Leon","Tim","Felix","Alexander","Philipp","Christian","Thomas","Michael","Jan","Moritz","Fabian"],last:["Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Wolf","Schröder","Neumann","Schwarz","Zimmermann","Braun","Krüger","Hofmann","Wagner","Becker","Koch","Lehmann","Kaiser"]},GB:{first:["James","Harry","Oliver","Jack","George","Charlie","William","Thomas","Alfie","Edward","Ryan","Liam","Noah","Ethan","Kyle","Jordan","Callum","Aaron","Declan","Connor"],last:["Smith","Jones","Williams","Brown","Taylor","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Walker","Wright","Robinson","White","Thompson","Hughes","Edwards","Green","Hall"]},MA:{first:["Yassine","Karim","Mehdi","Amine","Hamza","Bilal","Soufiane","Rachid","Omar","Mohammed","Zakaria","Ilyas","Ayoub","Saad","Khalid","Adil","Tarik","Hicham","Reda","Nabil"],last:["Benali","Amrani","Bouazza","Cherif","Haddad","Meziane","Belkacem","Rahmani","Saidi","Zidane","Belhadj","Tazi","Idrissi","Alaoui","Bennani","Fassi","Lahlou","Naciri","Tahiri","Zniber"]},DZ:{first:["Yacine","Riyad","Sofiane","Haris","Adem","Islam","Bilal","Omar","Nassim","Mehdi","Ryad","Zinedine","Youssef","Farid","Karim","Mourad","Walid","Anes","Ferhat","Djamel"],last:["Amrouche","Boudiaf","Cherki","Guessab","Hamdi","Jaber","Lakhal","Mahjoub","Rezki","Sahnoun","Talbi","Zerrouki","Achour","Bakri","Chaouch","Djaballah","Ferhat","Gacem","Khaldi","Larbi"]},SN:{first:["Sadio","Ismaïla","Cheikhou","Gana","Famara","Mbaye","Pape","Aliou","Moussa","Sidy","Idrissa","Lamine","Bamba","Fallou","Abdou","Diallo","Mamadou","Souleymane","Oumar","Cheikh"],last:["Diallo","Traoré","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Ndiaye","Sow","Cissé","Fofana","Keita","Sylla","Kane","Diarra","Sanogo","Baldé","Kouyaté"]},CI:{first:["Didier","Wilfried","Serge","Jonathan","Franck","Maxwel","Salomon","Gervinho","Nicolas","Maxime","Ismael","Romaric","Abdul","Cheick","Arouna","Kolo","Yaya","Geoffroy","Siaka","Adama"],last:["Drogba","Zaha","Gnagnon","Koné","Touré","Bamba","Diomandé","Konaté","Coulibaly","Fofana","Traoré","Doumbia","Sanogo","Diabaté","Kalou","Bakayoko","Gradel","Seri","Aurier","Haller"]},CM:{first:["Samuel","Alex","Karl","Fabrice","Cédric","Nicolas","Georges","André","Joël","Roger","François","Jean","Patrick","Thierry","Eric","Benjamin","Aristide","Clinton","Clinton","Stéphane"],last:["Eto'o","Song","Choupo-Moting","Aboubakar","Bassogog","Kunde","Toko","Nkoudou","Ngadeu","Oyongo","Fai","Zambo","Mokoena","Ekambi","Tchamba","Mbida","Biya","Kameni","Meyong","Webo"]},NG:{first:["Kelechi","Ahmed","Victor","John","Emmanuel","Samuel","Moses","Ola","Chukwuemeka","Odion","Sunday","Chidi","Nnamdi","Chisom","Tunde","Emeka","Obinna","Uchenna","Ifeanyi","Segun"],last:["Osimhen","Iheanacho","Musa","Onyekuru","Iwobi","Ndidi","Nwankwo","Obi","Mikel","Martins","Okocha","Yekini","Amunike","Babangida","Fash","Lawal","Onuoha","Taiwo","Ayodele","Ameobi"]},JP:{first:["Ryota","Kenji","Hiroshi","Takumi","Yuto","Daichi","Shinji","Makoto","Koji","Naoki","Yuya","Shoya","Ryo","Shu","Atsuto","Masato","Hotaru","Genki","Ko","Ritsu"],last:["Nakamura","Tanaka","Suzuki","Sato","Yamamoto","Watanabe","Ito","Yamada","Saito","Matsumoto","Inoue","Kimura","Hayashi","Shimizu","Yamazaki","Mori","Abe","Ikeda","Kato","Honda"]},KR:{first:["Heung","Son","Ji","Sung","Jae","Young","Kang","Hyun","Woo","Tae","Seung","Min","Jun","Dong","Chang","Sang","Yo","Hee","Jin","Bum"],last:["Kim","Park","Lee","Choi","Jung","Kang","Cho","Yoon","Lim","Oh","Han","Seo","Kwon","Hwang","Ahn","Yang","Shin","Yoo","Jang","Song"]},MX:{first:["Carlos","Hirving","Andrés","Javier","Miguel","Raúl","Héctor","Diego","Jorge","Luis","Rodolfo","Erick","Jonathan","Néstor","Tecatito","Chicharito","Oswaldo","Oribe","Uriel","Giovanni"],last:["Hernández","Lozano","Guardado","Vela","Morales","Jiménez","Reyes","Corona","Herrera","Rodríguez","Ochoa","Chicharito","Flores","Domínguez","Araujo","Álvarez","Pineda","Sánchez","Antuna","Meza"]},_DEFAULT_EUROPE:{first:["Stefan","Ivan","Luca","Marco","Andrei","Cristian","Bogdan","Mircea","Adrian","Florin","Dušan","Aleksandar","Nikola","Nemanja","Marko","Filip","Milan","Branislav","Radomir","Dejan"],last:["Popescu","Ionescu","Stan","Marin","Stoica","Popa","Radu","Constantin","Barbu","Dobre","Petrović","Marković","Nikolić","Jovanović","Popović","Stanković","Đorđević","Lukić","Simić","Ilić"]},_DEFAULT_AFRIQUE:{first:["Mamadou","Ibrahima","Moussa","Seydou","Boubacar","Oumar","Modibo","Adama","Bakary","Abdoulaye","Lamine","Ousmane","Sekou","Demba","Tidiane","Amadou","Issiaka","Siaka","Fode","Samba"],last:["Diallo","Traoré","Coulibaly","Koné","Doumbia","Kouyaté","Bah","Konaté","Touré","Camara","Sylla","Keita","Diakité","Sangaré","Sanou","Sidibé","Bathily","Niakaté","Dioumassi","Sissoko"]},_DEFAULT_ASIE:{first:["Wei","Ming","Jae","Van","Duc","Sorn","Ali","Hassan","Reza","Arman","Yusuf","Tariq","Faris","Khalid","Saad","Rashid","Nasser","Walid","Ziad","Adel"],last:["Zhang","Wang","Liu","Chen","Yang","Huang","Zhou","Wu","Xu","Sun","Al-Rashidi","Al-Dosari","Al-Harthi","Al-Balushi","Al-Farsi","Al-Shamsi","Al-Neyadi","Al-Breiki","Al-Hammadi","Al-Mansouri"]},_DEFAULT_AMERIQUE:{first:["James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Marcus","Jordan","Andre","Devonte","Malik","Tyrone","Jamal","Darius","DeShawn","Brandon","Cody"],last:["Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Taylor","Anderson","Jackson","White","Harris","Clark","Lewis","Walker","Hall","Allen","Young","King"]}},d={FR:"FR",BE:"FR",CH:"FR",MC:"FR",LU:"FR",ES:"ES",MX:"MX",CO:"ES",VE:"ES",PE:"ES",CL:"ES",EC:"ES",UY:"ES",PY:"ES",BO:"ES",CR:"ES",PA:"ES",HN:"ES",GT:"ES",SV:"ES",NI:"ES",DO:"ES",CU:"ES",PT:"PT",AO:"PT",MZ:"PT",CV:"PT",BR:"BR",AR:"AR",IT:"IT",SM:"IT",DE:"DE",AT:"DE",GB:"GB",IE:"GB",AU:"GB",NZ:"GB",CA:"GB",MA:"MA",TN:"DZ",LY:"DZ",DZ:"DZ",SN:"SN",ML:"SN",GN:"SN",GW:"SN",GM:"SN",MR:"SN",CI:"CI",BF:"CI",TG:"CI",BJ:"CI",GH:"CI",CM:"CM",GA:"CM",CG:"CM",CD:"CM",NG:"NG",JP:"JP",KR:"KR",MX:"MX",PL:"_DEFAULT_EUROPE",CZ:"_DEFAULT_EUROPE",SK:"_DEFAULT_EUROPE",HU:"_DEFAULT_EUROPE",HR:"_DEFAULT_EUROPE",RS:"_DEFAULT_EUROPE",SI:"_DEFAULT_EUROPE",RO:"_DEFAULT_EUROPE",BG:"_DEFAULT_EUROPE",GR:"_DEFAULT_EUROPE",TR:"_DEFAULT_EUROPE",RU:"_DEFAULT_EUROPE",UA:"_DEFAULT_EUROPE",NL:"_DEFAULT_EUROPE",DK:"_DEFAULT_EUROPE",SE:"_DEFAULT_EUROPE",NO:"_DEFAULT_EUROPE",FI:"_DEFAULT_EUROPE",AL:"_DEFAULT_EUROPE",EG:"_DEFAULT_AFRIQUE",ZA:"_DEFAULT_AFRIQUE",KE:"_DEFAULT_AFRIQUE",ET:"_DEFAULT_AFRIQUE",TZ:"_DEFAULT_AFRIQUE",UG:"_DEFAULT_AFRIQUE",CN:"_DEFAULT_ASIE",VN:"_DEFAULT_ASIE",TH:"_DEFAULT_ASIE",ID:"_DEFAULT_ASIE",PH:"_DEFAULT_ASIE",IN:"_DEFAULT_ASIE",PK:"_DEFAULT_ASIE",BD:"_DEFAULT_ASIE",IR:"_DEFAULT_ASIE",SA:"_DEFAULT_ASIE",AE:"_DEFAULT_ASIE",QA:"_DEFAULT_ASIE",KW:"_DEFAULT_ASIE",IQ:"_DEFAULT_ASIE",SY:"_DEFAULT_ASIE",JO:"_DEFAULT_ASIE",US:"_DEFAULT_AMERIQUE"};function p(k){return d[k]||"_DEFAULT_EUROPE"}function l(k){const x=p(k),g=(u[x]||u._DEFAULT_EUROPE).first;return oe(g)}function y(k){const x=p(k);return(u[x]||u._DEFAULT_EUROPE).last}const o=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],c=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],r=new Set(c.sort(()=>Math.random()-.5).slice(0,4)),a=[...c].sort(()=>Math.random()-.5),m=new Set(a.slice(0,2)),s=new Set(a.slice(2,4)),h=10,_=o.map((k,x)=>x<h);for(let k=_.length-1;k>0;k--){const x=Math.floor(Math.random()*(k+1));[_[k],_[x]]=[_[x],_[k]]}const b=new Set;function I(k){const x=y(k),g=x.filter(A=>!b.has(A)&&!n.has(A)),f=g.length?g:x.filter(A=>!b.has(A)),v=f.length?f:x,w=oe(v);return b.add(w),w}return o.map((k,x)=>{const g=_[x]?t:zt(t),f=Ke(g),v=Tt(g),w=oe(Bt),A=jt(i,x),$=r.has(x),L=$?Math.max(0,A-2):0;let B=0,S=0,T=0,z=0,M=null;k==="GK"?B=A:k==="DEF"?(S=A,$&&(T=L,M="MIL")):k==="ATT"?(z=A,$&&(T=L,M="MIL")):(T=A,$&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(S=L,M="DEF"):(z=L,M="ATT")));const N=m.has(x)?"pepite":s.has(x)?"papyte":"normal",F=I(g);return{job:k,job2:M,firstname:l(g),surname_real:F,country_code:g,club_id:e,note_g:B,note_d:S,note_m:T,note_a:z,skin:f,hair:v,hair_length:w,rarity:N,sell_price:0,ethnie:$e(g),_ethnie:$e(g)}})}async function Je(e,t,n,i=!1){ae=null;const{data:u}=await E.from("players").select("surname_real").not("surname_real","is",null),d=new Set((u||[]).map(s=>s.surname_real).filter(Boolean)),p=Nt(e,t,d,i),{data:l}=await E.from("players").select("face").not("face","is",null),y=new Set((l||[]).map(s=>s.face).filter(Boolean)),o=new Set;for(const s of p){const h=await Ue(s.country_code,new Set([...y,...o]));h&&(s.face=h,o.add(h)),delete s._ethnie}const{data:c,error:r}=await E.from("players").insert(p).select("id");if(r){console.error("[GenSquad] Erreur batch insert:",r.message,r.details),n("Erreur: "+r.message,"error");return}const a=(c||[]).map(s=>({card_type:"player",player_id:s.id}));if(a.length){const{error:s}=await E.from("cards").insert(a);s&&console.warn("[GenSquad] Erreur cartes:",s.message)}const m=(c==null?void 0:c.length)||0;console.log("[GenSquad] Créés:",m,"/",p.length),m>0?n(`${m} joueurs générés ✅`,"success"):n("Erreur génération joueurs","error")}function Ve(e){return{style:e.kit_style||R.style,color1:e.kit_color1||R.color1,color2:e.kit_color2||R.color2,color3:e.kit_color3||R.color3,shorts:e.kit_shorts||R.shorts,socks:e.kit_socks||R.socks}}let re=[];async function Ft(e,t){await ce(e,t)}async function ce(e,t){const[{data:n,error:i},{data:u}]=await Promise.all([E.from("clubs").select("*").order("real_name"),E.from("players").select("club_id")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}re=n||[];const d={};(u||[]).forEach(p=>{d[p.club_id]=(d[p.club_id]||0)+1}),Pt(e,t,d)}function Pt(e,t,n={}){const{toast:i,openModal:u,closeModal:d}=t;e.innerHTML=`
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:14px">
      <input id="search-clubs" placeholder="🔍 Rechercher…" style="flex:1">
      <button class="btn btn-primary" id="add-club-btn" style="white-space:nowrap">+ Club</button>
    </div>
    <div id="clubs-list" style="display:flex;flex-direction:column;gap:8px"></div>`,p(re),document.getElementById("search-clubs").addEventListener("input",l=>{const y=l.target.value.toLowerCase();p(re.filter(o=>o.real_name.toLowerCase().includes(y)||o.encoded_name.toLowerCase().includes(y)))}),document.getElementById("add-club-btn").addEventListener("click",()=>Ae(null,e,t));function p(l){const y=document.getElementById("clubs-list");if(!l.length){y.innerHTML='<p style="color:var(--gray-600);padding:20px">Aucun club.</p>';return}y.innerHTML=l.map(o=>{const c=Ve(o),r=Oe(c,o.id).replace("<svg ",'<svg style="width:40px;height:48px" '),a=o.logo_url?`<img src="${o.logo_url}" style="width:40px;height:40px;object-fit:contain;border-radius:8px">`:`<div style="width:40px;height:40px;background:linear-gradient(135deg,${c.color1},${c.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:900">${o.encoded_name.slice(0,3)}</div>`,m=n[o.id]||0;return`
        <div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,0.08)">
          ${a}
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:14px;color:#1a1a1a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o.real_name}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
              <img src="https://flagsapi.com/${o.country_code}/flat/24.png" style="height:12px" onerror="this.style.display='none'">
              <span style="font-size:11px;color:var(--gray-600);font-family:monospace">${o.encoded_name} · ${o.country_code}</span>
            </div>
            <div style="font-size:11px;margin-top:2px;color:${m===0?"#e67e22":"var(--gray-600)"}">
              ${m===0?"⚠️ Aucun joueur":`👥 ${m} joueur${m>1?"s":""}`}
            </div>
          </div>
          ${r}
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            ${m===0?`<button class="btn btn-primary btn-sm" data-gen="${o.id}" data-cc="${o.country_code}" data-name="${o.real_name}" title="Générer joueurs">⚽</button>`:""}
            <button class="btn btn-ghost btn-sm" data-edit="${o.id}">✏️</button>
            <button class="btn btn-danger btn-sm" data-del="${o.id}">🗑️</button>
          </div>
        </div>`}).join(""),y.querySelectorAll("[data-gen]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.gen,r=o.dataset.name,a=o.dataset.cc;u(`⚽ Générer — ${r}`,`<div style="display:flex;flex-direction:column;gap:14px">
            <div style="font-size:12px;color:#888;background:#f8f8f8;border-radius:8px;padding:10px;line-height:1.6">
              Distribution : 55% note 1–4 · 20% note 5–10 · 10% note 11–14 · 10% note 15–17 · 5% note 18–20<br>
              2 pépites + 2 papytes · 50% nationalité du club
            </div>
            <label style="display:flex;align-items:center;gap:10px;font-size:14px;cursor:pointer;padding:12px;background:rgba(212,160,23,0.08);border-radius:10px;border:1.5px solid rgba(212,160,23,0.35)">
              <input type="checkbox" id="qg-strong" style="width:18px;height:18px;accent-color:#D4A017;flex-shrink:0">
              <div>
                <div style="font-weight:700">💪 Équipe Forte</div>
                <div style="font-size:11px;color:#888;margin-top:2px">10 joueurs avec une note entre 15 et 20 garantis</div>
              </div>
            </label>
          </div>`,`<div style="display:flex;gap:10px;width:100%">
            <button id="qg-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
            <button id="qg-ok" class="btn btn-primary" style="flex:1">⚽ Générer</button>
          </div>`),setTimeout(()=>{var m,s;(m=document.getElementById("qg-cancel"))==null||m.addEventListener("click",()=>d()),(s=document.getElementById("qg-ok"))==null||s.addEventListener("click",async()=>{var _;const h=((_=document.getElementById("qg-strong"))==null?void 0:_.checked)??!1;d(),o.disabled=!0,o.textContent="⏳",await Je(c,a,i,h),ce(e,t)})},50)})}),y.querySelectorAll("[data-edit]").forEach(o=>{const c=re.find(r=>r.id===o.dataset.edit);o.addEventListener("click",()=>Ae(c,e,t))}),y.querySelectorAll("[data-del]").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:c}=await E.from("clubs").delete().eq("id",o.dataset.del);c?i(c.message,"error"):(i("Club supprimé","success"),ce(e,t))})})}}function Ae(e,t,n){const{toast:i,openModal:u,closeModal:d}=n,p=!!e,l=e?Ve(e):{...R},y=Object.entries(we).map(([c,r])=>`<option value="${c}" ${l.style===c?"selected":""}>${r.label}</option>`).join(""),o=qe.map(c=>`<option value="${c}" ${((e==null?void 0:e.country_code)||"FR")===c?"selected":""}>${c}</option>`).join("");u(p?`✏️ ${e.real_name}`:"➕ Nouveau club",`<div style="display:flex;flex-direction:column;gap:14px">

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
              <select id="m-kit-style" style="width:100%">${y}</select>
            </div>
            ${[["Couleur 1","m-kit-color1",l.color1,!1],["Couleur 2","m-kit-color2",l.color2,!1],["Couleur 3","m-kit-color3",l.color3,!0],["Short","m-kit-shorts",l.shorts,!1],["Chaussettes","m-kit-socks",l.socks,!1]].map(([c,r,a,m])=>`
              <div class="form-group" id="wrap-${r}" ${m?'style="display:none"':""}>
                <label>${c}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${r}" value="${a||"#000000"}" style="width:38px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${r}-txt" value="${a||"#000000"}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
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
      ${p?"":`
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
        <label id="m-gen-strong-label" style="display:none;align-items:center;gap:8px;font-size:13px;cursor:pointer;padding:8px;background:rgba(212,160,23,0.08);border-radius:8px;border:1px solid rgba(212,160,23,0.35);margin-left:12px">
          <input type="checkbox" id="m-gen-strong" style="width:16px;height:16px;accent-color:#D4A017">
          💪 Équipe Forte <span style="font-size:11px;color:#888;font-weight:400">(10 joueurs note 15–20 garantis)</span>
        </label>
        <div style="font-size:11px;color:var(--gray-600);padding-left:4px">Distribution : 55% note 1–4 · 20% note 5–10 · 10% note 11–14 · 10% note 15–17 · 5% note 18–20 · 2 pépites + 2 papytes</div>
      </div>`}

      <div id="m-error" style="color:#bb2020;font-size:13px;min-height:16px"></div>
      <button class="btn btn-primary" id="m-save" style="width:100%;padding:14px;font-size:15px">
        ${p?"💾 Enregistrer":"✅ Créer le club"}
      </button>
    </div>`),setTimeout(()=>{var b,I,k;te();function c(){var v,w;const x=((v=document.getElementById("m-kit-style"))==null?void 0:v.value)||"uni",g=((w=we[x])==null?void 0:w.colors)===3,f=document.getElementById("wrap-m-kit-color3");f&&(f.style.display=g?"":"none")}c(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(x=>{const g=document.getElementById(x),f=document.getElementById(x+"-txt");!g||!f||(g.addEventListener("input",()=>{f.value=g.value,te()}),f.addEventListener("input",()=>{const v=f.value.trim();/^#[0-9a-fA-F]{6}$/.test(v)&&(g.value=v,te())}),f.addEventListener("change",()=>{let v=f.value.trim();v.startsWith("#")||(v="#"+v),/^#[0-9a-fA-F]{6}$/.test(v)&&(g.value=v,f.value=v,te())}))}),(b=document.getElementById("m-kit-style"))==null||b.addEventListener("change",()=>{c(),te()});const r=document.getElementById("m-real"),a=document.getElementById("m-encoded");function m(){if(!r||!a||a.value)return;const x=r.value.trim().split(/\s+/),g=x.length===1?x[0].toUpperCase().slice(0,6):x.filter(f=>f.length>2).map(f=>f[0].toUpperCase()).join("")||x[0].toUpperCase().slice(0,4);a.value=g}r==null||r.addEventListener("input",m),(I=document.getElementById("auto-encode-btn"))==null||I.addEventListener("click",()=>{a&&(a.value=""),m()}),(k=document.getElementById("m-save"))==null||k.addEventListener("click",()=>Ut(e,p,t,n));const s=document.getElementById("m-gen-squad"),h=document.getElementById("m-gen-strong-label");function _(){if(h&&(h.style.display=s!=null&&s.checked?"flex":"none",!(s!=null&&s.checked))){const x=document.getElementById("m-gen-strong");x&&(x.checked=!1)}}s==null||s.addEventListener("change",_),_()},50)}function Ye(){var e,t,n,i,u,d;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((t=document.getElementById("m-kit-color1"))==null?void 0:t.value)||"#1A6B3C",color2:((n=document.getElementById("m-kit-color2"))==null?void 0:n.value)||"#ffffff",color3:((i=document.getElementById("m-kit-color3"))==null?void 0:i.value)||"#000000",shorts:((u=document.getElementById("m-kit-shorts"))==null?void 0:u.value)||"#111111",socks:((d=document.getElementById("m-kit-socks"))==null?void 0:d.value)||"#ffffff"}}function te(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=Oe(Ye(),"modal"))}async function Ut(e,t,n,i){var I,k,x,g,f,v,w;const{toast:u,closeModal:d}=i,p=document.getElementById("m-error"),l=document.getElementById("m-save"),y=(I=document.getElementById("m-real"))==null?void 0:I.value.trim(),o=(k=document.getElementById("m-encoded"))==null?void 0:k.value.trim().toUpperCase(),c=(x=document.getElementById("m-country"))==null?void 0:x.value.trim().toUpperCase(),r=((g=document.getElementById("m-logo"))==null?void 0:g.value.trim())||null,a=((f=document.getElementById("m-gen-stadium"))==null?void 0:f.checked)??!1,m=((v=document.getElementById("m-gen-squad"))==null?void 0:v.checked)??!1,s=((w=document.getElementById("m-gen-strong"))==null?void 0:w.checked)??!1,h=Ye();if(!y){p.textContent="Le nom du club est requis.";return}if(!o){p.textContent="Le nom encodé est requis.";return}if(!c){p.textContent="Le pays est requis.";return}l.disabled=!0,l.textContent="Enregistrement…";const _={real_name:y,encoded_name:o,country_code:c,logo_url:r,kit_style:h.style,kit_color1:h.color1,kit_color2:h.color2,kit_color3:h.color3,kit_shorts:h.shorts,kit_socks:h.socks};let b=e==null?void 0:e.id;if(t){const{error:A}=await E.from("clubs").update(_).eq("id",b);if(A){p.textContent=A.message,l.disabled=!1,l.textContent="💾 Enregistrer";return}}else{const{data:A,error:$}=await E.from("clubs").insert(_).select().single();if($){p.textContent=$.message,l.disabled=!1,l.textContent="✅ Créer le club";return}if(b=A.id,a){l.textContent="🏟️ Création du stade…";const{data:L,error:B}=await E.from("stadium_definitions").insert({name:`Stade de ${y}`,club_id:b,country_code:c}).select().single();B?console.warn("[Stadium] Erreur def stade:",B.message):L&&await E.from("cards").insert({card_type:"stadium",stadium_id:L.id})}m&&(l.textContent="⚽ Génération des joueurs…",await Je(b,c,u,s))}u(t?"Club modifié ✅":"Club créé ✅","success"),d(),ce(n,i)}const Ot=["normal","pepite","papyte","legende"],Le=["GK","DEF","MIL","ATT"],Gt=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let q={...D},le=[];async function Ht(e,{toast:t}){const{data:n}=await E.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");le=n||[],q={...D},e.innerHTML=Vt(le),Kt(e,le,t),G()}function Be(){var n;const e=((n=document.getElementById("cb-surname-real"))==null?void 0:n.value)||"",t=document.getElementById("cb-surname-enc");t&&(t.value=ue(e))}function qt(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=le.find(i=>String(i.id)===String(e));return t?{style:t.kit_style||R.style,color1:t.kit_color1||R.color1,color2:t.kit_color2||R.color2,shorts:t.kit_shorts||R.shorts,socks:t.kit_socks||R.socks}:{...R}}function G(){var a,m,s,h;const e=_=>{var b;return((b=document.getElementById(_))==null?void 0:b.value)||""},t={firstname:e("cb-firstname"),surname_real:e("cb-surname-enc")||ue(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((m=(a=document.getElementById("cb-club"))==null?void 0:a.selectedOptions[0])==null?void 0:m.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=qt(),i=document.getElementById("cb-club"),u=((h=(s=i==null?void 0:i.selectedOptions[0])==null?void 0:s.dataset)==null?void 0:h.logo)||null,d=Ge(q,n,120),p=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(d)}`,l=st(t,{portraitUrl:p,clubLogoUrl:u,showNotes:!0}),y=document.getElementById("card-preview");y&&(y.innerHTML=l);const o=document.getElementById("avatar-preview-wrap");o&&(o.innerHTML=d);const c=e("cb-surname-real"),r=document.getElementById("encode-summary");r&&c&&(r.textContent=`${e("cb-firstname")} ${c} → ${e("cb-firstname")} ${t.surname_real}`)}function We(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};q={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function Kt(e,t,n){var u,d,p,l,y;e.querySelectorAll("input,select").forEach(o=>{o.addEventListener("input",G),o.addEventListener("change",G)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(o=>{var c;(c=document.getElementById(o))==null||c.addEventListener("change",()=>{We(),G()})}),(u=document.getElementById("cb-surname-real"))==null||u.addEventListener("input",()=>{Be(),G()}),(d=document.getElementById("btn-encode"))==null||d.addEventListener("click",()=>{Be(),G()}),(p=document.getElementById("cb-club"))==null||p.addEventListener("change",G),(l=document.getElementById("btn-save-player"))==null||l.addEventListener("click",()=>Jt(n)),(y=document.getElementById("btn-reset"))==null||y.addEventListener("click",()=>{e.querySelectorAll("input").forEach(o=>o.value=""),e.querySelectorAll("select").forEach(o=>o.selectedIndex=0),q={...D},i.forEach(o=>{const c=o.replace("av-",""),r=document.getElementById(o);r&&(r.value=D[c]||"")}),G()})}async function Jt(e){const t=p=>{var l;return((l=document.getElementById(p))==null?void 0:l.value)||""},n=t("cb-surname-real").trim(),i=t("cb-surname-enc").trim()||ue(n);if(!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}We();const u={firstname:t("cb-firstname").trim(),surname_real:n,surname_real:i,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:q,skin:q.skin||"blanc",hair:q.hairColor||"marron",hair_length:"court"},{error:d}=await E.from("players").insert(u);if(d){e("Erreur: "+d.message,"error");return}e(`✅ Joueur "${u.firstname} ${u.surname_real}" enregistré !`,"success")}function Vt(e){const t=Gt.map(([o,c])=>`<option value="${o}">${c} (${o})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(o=>`<option value="${o.id}" data-logo="${o.logo_url||""}">${o.encoded_name}</option>`).join(""),i=Le.map(o=>`<option value="${o}">${o}</option>`).join(""),u='<option value="">Aucun</option>'+Le.map(o=>`<option value="${o}">${o}</option>`).join(""),d=Ot.map(o=>`<option value="${o}">${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join(""),p=(o,c,r)=>Object.entries(c).map(([a,m])=>`<option value="${a}" ${a===(r||"")?"selected":""}>${m.label}</option>`).join(""),l=Object.keys(at).map(o=>`<option value="${o}" ${o===D.skin?"selected":""}>${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join(""),y=Object.keys(rt).map(o=>`<option value="${o}" ${o===D.hairColor?"selected":""}>${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join("");return`
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
          ${["normal","pepite","papyte","legende"].map(o=>`
            <div style="background:${lt[o]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
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
              <select id="av-skin">${l}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${p("av-hair",dt,D.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${y}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${p("av-eyebrows",ct,D.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${p("av-eyes",pt,D.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${p("av-nose",ut,D.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${p("av-mouth",mt,D.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${p("av-beard",gt,D.beard)}</select>
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
  `}async function Ze(e,{toast:t}){const{data:n,error:i}=await E.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").order("created_at",{ascending:!1});if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const u=n||[];e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <input id="search-users" placeholder="🔍 Rechercher un manager…" style="width:260px">
      <span style="font-size:13px;color:var(--gray-600)">${u.length} manager(s)</span>
    </div>
    <div class="card-panel" style="background:#fff;box-shadow:0 1px 4px rgba(0,0,0,0.08)">
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
  `,d(u),document.getElementById("search-users").addEventListener("input",p=>{const l=p.target.value.toLowerCase();d(u.filter(y=>{var o;return y.pseudo.toLowerCase().includes(l)||((o=y.club_name)==null?void 0:o.toLowerCase().includes(l))}))});function d(p){document.getElementById("users-tbody").innerHTML=p.map(l=>{const y=l.mmr??1e3,o=l.mmr_deviation??350,c=l.placement_matches??0,r=ft(y),a=l.ranked_wins??0,m=l.ranked_losses??0,s=l.ranked_draws??0,h=a+m+s,_=h>0?Math.round(a/h*100):null,b=c<10,I=o<80?"#1A6B3C":o<150?"#e67e22":"#bb2020";return`
        <tr>
          <td>
            <div style="font-weight:700">${l.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${l.club_name||"—"}</div>
          </td>
          <td style="font-size:12px">
            <div>${(l.credits||0).toLocaleString("fr")} cr.</div>
            <div style="color:var(--gray-600)">Niv. ${l.level}</div>
          </td>
          <td style="font-size:12px">${l.wins}V / ${l.draws}N / ${l.losses}D</td>
          <td style="font-size:12px">🥇${l.trophies_top1} 🥈${l.trophies_top2} 🥉${l.trophies_top3}</td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:5px">
              <span style="font-size:16px">${r.emoji}</span>
              <span style="font-weight:700;color:${r.color}">${r.label}</span>
            </div>
            ${b?`<div style="font-size:10px;color:#e67e22">${c}/10 placement${c<10?` (${10-c} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${a}V ${s}N ${m}D${_!==null?` · ${_}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${y}</div>
            <div style="font-size:10px;color:${I}">RD ±${Math.round(o)}</div>
          </td>
          <td>
            ${l.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td>
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${l.id}" data-is-admin="${l.is_admin}">
              ${l.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(l=>{l.addEventListener("click",async()=>{const y=l.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${y?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:o}=await E.from("users").update({is_admin:y}).eq("id",l.dataset.toggleAdmin);o?t(o.message,"error"):(t("Rôle mis à jour ✅","success"),Ze(e,{toast:t}))})})}}async function Qe(e,{toast:t}){const{data:n,error:i}=await E.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_real, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const u=n||[],d=u.filter(l=>l.status==="active").length,p=u.filter(l=>l.status==="sold").length;e.innerHTML=`
    <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap">
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#1A6B3C">${d}</div>
        <div style="font-size:11px;color:#666">Annonces actives</div>
      </div>
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#D4A017">${p}</div>
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
            ${u.map(l=>{var r,a,m,s;const y=(r=l.card)==null?void 0:r.player,o=y?`${y.firstname} ${y.surname_real}`:((a=l.card)==null?void 0:a.card_type)||"—",c={active:"#1A6B3C",sold:"#D4A017",cancelled:"#aaa"};return`<tr>
                <td><b>${o}</b>${y?`<div style="font-size:10px;color:#999">${y.rarity} · ${y.job}</div>`:""}</td>
                <td style="font-size:12px">${((m=l.seller)==null?void 0:m.pseudo)||"—"}</td>
                <td style="font-size:12px">${((s=l.buyer)==null?void 0:s.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(l.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${c[l.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
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
  `,document.querySelectorAll("[data-cancel]").forEach(l=>{l.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:y}=await E.from("market_listings").update({status:"cancelled"}).eq("id",l.dataset.cancel);y?t(y.message,"error"):(t("Annonce annulée","success"),Qe(e,{toast:t}))})})}async function Yt(e,{toast:t}){e.innerHTML=`
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
      <p style="font-size:12px;color:var(--gray-600);margin-bottom:16px">Exporter/importer les joueurs en masse via CSV. L'encodage des noms est automatique si la colonne surname_real est vide.</p>
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
        <b>Joueurs :</b> firstname, surname_real, surname_real, country_code, club_encoded_name, job, job2, note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price<br><br>
        <b>Valeurs autorisées :</b><br>
        • job/job2 : GK, DEF, MIL, ATT<br>
        • rarity : normal, pepite, papyte, legende<br>
        • skin : blanc, metisse, typ, noir<br>
        • hair : blond, marron, noir, chauve<br>
        • hair_length : rase, court, milong, long<br><br>
        💡 Le séparateur est la virgule. Première ligne = en-têtes. Si surname_real est vide, il est calculé automatiquement.
      </div>
    </div>
  </div>
  `,document.getElementById("export-clubs-template").addEventListener("click",()=>{ie("clubs_template.csv",`real_name,encoded_name,country_code,logo_url
Paris Saint-Germain,PARIS FC,FR,
Real Madrid,MADRID FC,ES,
`)}),document.getElementById("export-players-template").addEventListener("click",()=>{ie("players_template.csv",`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
Kylian,Mbappe,,FR,PARIS FC,ATT,,0,0,2,9,legende,,,blanc,noir,court,50000
Achraf,Hakimi,,MA,PARIS FC,DEF,MIL,0,7,5,3,pepite,5,9,metisse,noir,court,20000
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:n,error:i}=await E.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun club à exporter","info");return}let u=`real_name,encoded_name,country_code,logo_url
`;n.forEach(d=>{u+=[d.real_name,d.encoded_name,d.country_code,d.logo_url||""].map(Se).join(",")+`
`}),ie("clubs_export.csv",u),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:i}=await E.from("players").select("firstname,surname_real,surname_real,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_real");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let u=`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(d=>{var p;u+=[d.firstname,d.surname_real,d.surname_real,d.country_code,((p=d.clubs)==null?void 0:p.encoded_name)||"",d.job,d.job2||"",d.note_g,d.note_d,d.note_m,d.note_a,d.rarity,d.note_min??"",d.note_max??"",d.skin,d.hair,d.hair_length,d.sell_price].map(Se).join(",")+`
`}),ie("players_export.csv",u),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const u=document.getElementById("clubs-import-result");u.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const d=await i.text(),p=Ce(d);if(p.length===0){u.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let l=0,y=0;const o=[];for(const c of p){if(!c.real_name||!c.encoded_name||!c.country_code){y++,o.push(`Ligne ignorée (champs manquants): ${c.real_name||"?"}`);continue}const r={real_name:c.real_name,encoded_name:c.encoded_name.toUpperCase(),country_code:c.country_code.toUpperCase().slice(0,2),logo_url:c.logo_url||null},{error:a}=await E.from("clubs").upsert(r,{onConflict:"encoded_name"});a?(y++,o.push(`${c.encoded_name}: ${a.message}`)):l++}u.innerHTML=`<div style="color:var(--green)">✅ ${l} clubs importés</div>
        ${y>0?`<div style="color:#c0392b">❌ ${y} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${o.slice(0,10).join("<br>")}</div>`:""}`,t(`${l} clubs importés`,"success")}catch(d){u.innerHTML=`<span style="color:#c0392b">Erreur : ${d.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const u=document.getElementById("players-import-result");u.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const d=await i.text(),p=Ce(d);if(p.length===0){u.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:l}=await E.from("clubs").select("id,encoded_name"),y={};(l||[]).forEach(b=>{y[b.encoded_name.toUpperCase()]=b.id});let o=0,c=0;const r=[],a=["GK","DEF","MIL","ATT"],m=["normal","pepite","papyte","legende"],s=["blanc","metisse","typ","noir"],h=["blond","marron","noir","chauve"],_=["rase","court","milong","long"];for(const b of p){if(!b.firstname||!b.surname_real||!b.country_code||!b.job){c++,r.push(`Ligne ignorée (champs requis manquants): ${b.firstname||"?"}`);continue}if(!a.includes(b.job)){c++,r.push(`${b.firstname}: job invalide "${b.job}"`);continue}const I=b.club_encoded_name&&y[b.club_encoded_name.toUpperCase()]||null,k={firstname:b.firstname,surname_real:b.surname_real,surname_real:b.surname_real||ue(b.surname_real),country_code:b.country_code.toUpperCase().slice(0,2),club_id:I,job:b.job,job2:a.includes(b.job2)?b.job2:null,note_g:parseInt(b.note_g)||0,note_d:parseInt(b.note_d)||0,note_m:parseInt(b.note_m)||0,note_a:parseInt(b.note_a)||0,rarity:m.includes(b.rarity)?b.rarity:"normal",note_min:b.note_min!==""&&b.note_min!=null?parseInt(b.note_min):null,note_max:b.note_max!==""&&b.note_max!=null?parseInt(b.note_max):null,skin:s.includes(b.skin)?b.skin:"blanc",hair:h.includes(b.hair)?b.hair:"noir",hair_length:_.includes(b.hair_length)?b.hair_length:"court",sell_price:parseInt(b.sell_price)||0},{error:x}=await E.from("players").insert(k);x?(c++,r.push(`${b.firstname} ${b.surname_real}: ${x.message}`)):o++}u.innerHTML=`<div style="color:var(--green)">✅ ${o} joueurs importés</div>
        ${c>0?`<div style="color:#c0392b">❌ ${c} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${r.slice(0,10).join("<br>")}</div>`:""}`,t(`${o} joueurs importés`,"success")}catch(d){u.innerHTML=`<span style="color:#c0392b">Erreur : ${d.message}</span>`}n.target.value=""})}function Se(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function ie(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(n),u=document.createElement("a");u.href=i,u.download=e,u.click(),URL.revokeObjectURL(i)}function Ce(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(p=>p.trim());if(t.length<2)return[];const n=t[0],i=n.split(";").length>n.split(",").length?";":",",u=Te(n,i).map(p=>p.trim().replace(/^\uFEFF/,"").toLowerCase()),d=[];for(let p=1;p<t.length;p++){if(!t[p].trim())continue;const l=Te(t[p],i),y={};u.forEach((o,c)=>{y[o]=(l[c]||"").trim()}),!Object.values(y).every(o=>!o)&&d.push(y)}return d}function Te(e,t=","){const n=[];let i="",u=!1;for(let d=0;d<e.length;d++){const p=e[d];u?p==='"'?e[d+1]==='"'?(i+='"',d++):u=!1:i+=p:p==='"'?u=!0:p===t?(n.push(i),i=""):i+=p}return n.push(i),n}const Wt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Zt(e,{toast:t}){const n=Object.keys(me);let i=n[0];const{data:u}=await E.from("formation_links_overrides").select("formation, links"),d={};(u||[]).forEach(c=>{d[c.formation]=c.links});let p=new Set;function l(c,r){return[c,r].sort().join("-")}function y(c){const r=d[c]||me[c]||[];p=new Set(r.map(([a,m])=>l(a,m)))}y(i),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${n.map(c=>`<option value="${c}" ${c===i?"selected":""}>${c}</option>`).join("")}
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
        <div style="font-weight:700;font-size:13px;margin-bottom:8px">Liens (${p.size}/? actifs)</div>
        <div id="links-list" style="display:flex;flex-direction:column;gap:4px;max-height:520px;overflow-y:auto"></div>
      </div>
    </div>
  `;function o(){const c=bt[i]||{},r=ke(i),a=320,m=400,s=22;function h(x){const g=c[x];return g?{x:g.x*a,y:g.y*m}:null}let _=`<svg width="${a}" height="${m}" viewBox="0 0 ${a} ${m}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;r.forEach(([x,g],f)=>{const v=h(x),w=h(g);if(!v||!w)return;const A=l(x,g),$=p.has(A),L=$?"#3b82f6":"#999",B=$?.95:.35,S=$?4:3;_+=`<line x1="${v.x}" y1="${v.y}" x2="${w.x}" y2="${w.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${A}" style="cursor:pointer"/>`,_+=`<line x1="${v.x}" y1="${v.y}" x2="${w.x}" y2="${w.y}"
        stroke="${L}" stroke-width="${S}" stroke-dasharray="${$?"none":"4,3"}"
        opacity="${B}" pointer-events="none" data-line-key="${A}"/>`});for(const x of Object.keys(c)){const g=h(x);if(!g)continue;const f=x.replace(/\d+/,""),v=Wt[f]||"#555";_+=`<circle cx="${g.x}" cy="${g.y}" r="${s}" fill="${v}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,_+=`<text x="${g.x}" y="${g.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${x}</text>`}_+="</svg>",document.getElementById("field-wrap").innerHTML=_;const b=document.getElementById("links-list");b.innerHTML=r.map(([x,g])=>{const f=l(x,g),v=p.has(f);return`
        <button class="link-toggle" data-key="${f}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${v?"#3b82f6":"#ddd"};
          background:${v?"#eaf2ff":"#fafafa"};
          color:${v?"#1d4ed8":"#888"}">
          <span>${x} ↔ ${g}</span>
          <span>${v?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const I=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');I&&(I.textContent=`Liens (${p.size}/${r.length} actifs)`);function k(x){p.has(x)?p.delete(x):p.add(x),o()}e.querySelectorAll(".link-hit").forEach(x=>{x.addEventListener("click",()=>k(x.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(x=>{x.addEventListener("click",()=>k(x.dataset.key))})}o(),document.getElementById("formation-select").addEventListener("change",c=>{i=c.target.value,y(i),o()}),document.getElementById("reset-btn").addEventListener("click",()=>{const c=me[i]||[];p=new Set(c.map(([r,a])=>l(r,a))),o(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const r=ke(i).filter(([m,s])=>p.has(l(m,s))),{error:a}=await E.from("formation_links_overrides").upsert({formation:i,links:r,updated_at:new Date().toISOString()});if(a){t(a.message,"error");return}d[i]=r,t(`Liens enregistrés pour ${i} (${r.length} actifs)`,"success")})}const Qt=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],Xt=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],en=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function tn(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await E.from("booster_configs").select("*").order("sort_order");let n=null,i=[],u=null;const d=()=>window.innerWidth<700;async function p(){if(!n){i=[];return}if(n!==u){const{data:r}=await E.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");i=r||[],u=n}}function l(){return`
    <div id="booster-list" style="background:#fff;${d()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(t||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(r=>`
      <div class="booster-row" data-id="${r.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${r.id===n?"#f0f7f0":"#fff"}">
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
      ${(t||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>'}
    </div>`}function y(){const r=n?(t||[]).find(s=>s.id===n):null;if(!r)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const a=i.reduce((s,h)=>s+Number(h.percentage||0),0),m=Math.abs(a-100)<.1;return`
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
              ${en.map(s=>`<option value="${s.value}" ${r.price_type===s.value?"selected":""}>${s.label}</option>`).join("")}
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
            <span style="margin-left:10px;font-size:12px;color:${m?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${a.toFixed(1)}% ${m?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((s,h)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${h}">
            <select class="rate-type" data-idx="${h}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Qt.map(_=>`<option value="${_.value}" ${s.card_type===_.value?"selected":""}>${_.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${h}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Xt.map(_=>`<option value="${_.value}" ${(s.rarity||"")===_.value?"selected":""}>${_.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${h}" type="number" min="0" max="20" value="${s.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${h}" type="number" min="0" max="20" value="${s.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${h}" type="number" min="0.1" max="100" step="0.1" value="${s.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${h}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function o(r=!1){r||await p();const a=!n&&d(),m=n&&d();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!d()||a||!n?l():""}
      ${!d()||m?y():""}
    </div>`,c()}function c(){var m,s,h,_,b,I,k;const r=x=>e.querySelector(x);e.querySelectorAll(".booster-row").forEach(x=>{x.addEventListener("click",g=>{g.target.closest(".btn-delete")||(n=x.dataset.id,u=null,o())})}),(m=r("#btn-back"))==null||m.addEventListener("click",()=>{n=null,o()}),(s=r("#btn-new"))==null||s.addEventListener("click",async()=>{const x=prompt("Nom du nouveau booster :");if(!(x!=null&&x.trim()))return;const{data:g,error:f}=await E.from("booster_configs").insert({name:x.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(f){alert(f.message);return}t.push(g),n=g.id,u=null,o()}),e.querySelectorAll(".btn-delete").forEach(x=>{x.addEventListener("click",async g=>{if(g.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await E.from("booster_configs").delete().eq("id",x.dataset.id);const f=t.findIndex(v=>v.id===x.dataset.id);f>-1&&t.splice(f,1),n===x.dataset.id&&(n=null,u=null),o()})}),(h=r("#btn-cancel"))==null||h.addEventListener("click",()=>{n=null,o()}),(_=r("#f-price-type"))==null||_.addEventListener("change",x=>{const g=r("#credits-field");g&&(g.style.opacity=x.target.value!=="credits"?"0.4":"1")}),(b=r("#btn-pick-icon"))==null||b.addEventListener("click",async()=>{var g;const x=r("#icon-picker-grid");if(x){if(x.style.display!=="none"){x.style.display="none";return}x.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',x.style.display="block";try{const v=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),w=Array.isArray(v)?v.filter($=>$.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test($.name)):[];if(!w.length){x.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const A=((g=r("#f-image-url"))==null?void 0:g.value)||"";x.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${w.map($=>`
          <div class="icon-pick-item" data-name="${$.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${$.name===A?"#1A6B3C":"#ddd"};background:${$.name===A?"#f0f7f0":"#fff"}">
            <img src="/icons/${$.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${$.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,x.querySelectorAll(".icon-pick-item").forEach($=>{$.addEventListener("click",()=>{const L=r("#f-image-url");L&&(L.value=$.dataset.name),x.style.display="none"})})}catch(f){x.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${f.message}</div>`}}});function a(){e.querySelectorAll("[data-rate-idx]").forEach(x=>{var f,v,w,A,$;const g=Number(x.dataset.rateIdx);g>=0&&g<i.length&&(i[g].card_type=((f=x.querySelector(".rate-type"))==null?void 0:f.value)||"player",i[g].rarity=((v=x.querySelector(".rate-rarity"))==null?void 0:v.value)||null,i[g].note_min=Number((w=x.querySelector(".rate-note-min"))==null?void 0:w.value)||null,i[g].note_max=Number((A=x.querySelector(".rate-note-max"))==null?void 0:A.value)||null,i[g].percentage=Number(($=x.querySelector(".rate-pct"))==null?void 0:$.value)||0)})}(I=r("#btn-add-rate"))==null||I.addEventListener("click",()=>{a(),i.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),o(!0)}),e.querySelectorAll(".btn-del-rate").forEach(x=>{x.addEventListener("click",()=>{a(),i.splice(Number(x.dataset.idx),1),o(!0)})}),(k=r("#btn-save"))==null||k.addEventListener("click",async()=>{var A,$,L,B,S,T,z,M,N,F,O,P,j;const x=(t||[]).find(C=>C.id===n);if(!x)return;const g=[];e.querySelectorAll("[data-rate-idx]").forEach(C=>{var Y,W,Z,Q,X;const K=Number(C.dataset.rateIdx);g.push({booster_id:n,card_type:((Y=C.querySelector(".rate-type"))==null?void 0:Y.value)||"player",rarity:((W=C.querySelector(".rate-rarity"))==null?void 0:W.value)||null,note_min:Number((Z=C.querySelector(".rate-note-min"))==null?void 0:Z.value)||null,note_max:Number((Q=C.querySelector(".rate-note-max"))==null?void 0:Q.value)||null,percentage:Number((X=C.querySelector(".rate-pct"))==null?void 0:X.value)||0,sort_order:K});const U=g[g.length-1];U.rarity||(U.rarity=null),U.note_min||(U.note_min=null),U.note_max||(U.note_max=null)});const f=g.reduce((C,K)=>C+K.percentage,0);if(g.length&&Math.abs(f-100)>.5){alert(`La somme doit faire 100% (actuellement ${f.toFixed(1)}%)`);return}const v={name:(($=(A=r("#f-name"))==null?void 0:A.value)==null?void 0:$.trim())||x.name,image_url:((B=(L=r("#f-image-url"))==null?void 0:L.value)==null?void 0:B.trim())||null,price_type:(S=r("#f-price-type"))==null?void 0:S.value,price_credits:Number((T=r("#f-price-credits"))==null?void 0:T.value)||0,card_count:Number((z=r("#f-card-count"))==null?void 0:z.value)||5,is_active:((M=r("#f-active"))==null?void 0:M.checked)??x.is_active,allow_duplicates:((N=r("#f-allow-dup"))==null?void 0:N.checked)??!0,sort_order:Number((F=r("#f-sort"))==null?void 0:F.value)||0,max_per_user:(O=r("#f-max-per-user"))!=null&&O.value?Number(r("#f-max-per-user").value):null,available_from:((P=r("#f-available-from"))==null?void 0:P.value)||null,available_until:((j=r("#f-available-until"))==null?void 0:j.value)||null},{error:w}=await E.from("booster_configs").update(v).eq("id",n);if(w){alert(w.message);return}if(Object.assign(x,v),await E.from("booster_drop_rates").delete().eq("booster_id",n),g.length){const{error:C}=await E.from("booster_drop_rates").insert(g);if(C){alert(C.message);return}}i=g,u=n,alert("✅ Booster enregistré !"),o(!0)})}o()}const Xe=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function nn(e){await be(e)}async function be(e){const{data:t,error:n}=await E.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
          ${(t||[]).map(i=>on(i)).join("")}
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
              ${Xe.map(i=>`<option value="${i.value}">${i.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>ze(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>an(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const u=(t||[]).find(d=>d.id===i.dataset.edit);u&&i.addEventListener("click",()=>ze(u))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await E.from("sell_price_configs").delete().eq("id",i.dataset.delete),await be(e))})})}function on(e){const t=Xe.find(n=>n.value===e.rarity);return`
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
    </tr>`}function ze(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function an(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,u=parseInt(document.getElementById("form-note-min").value)||1,d=parseInt(document.getElementById("form-note-max").value)||10;if(u>d){alert("Note min doit être ≤ note max");return}const p={rarity:n,price:i,note_min:u,note_max:d,updated_at:new Date().toISOString()};let l;if(t?{error:l}=await E.from("sell_price_configs").update(p).eq("id",t):{error:l}=await E.from("sell_price_configs").insert(p),l){alert("Erreur : "+l.message);return}document.getElementById("config-form").style.display="none",await be(e)}async function rn(e){await ye(e)}async function ye(e){const{data:t}=await E.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Journal des mises à jour</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(t||[]).map(n=>ln(n)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>Me(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>sn(e)),e.querySelectorAll("[data-edit]").forEach(n=>{const i=(t||[]).find(u=>u.id===n.dataset.edit);i&&n.addEventListener("click",()=>Me(i))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await E.from("patch_notes").delete().eq("id",n.dataset.delete),await ye(e))})})}function ln(e){const t=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function Me(e){const t=document.getElementById("article-form");t.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-pub").checked=e?e.is_published:!0;const n=new Date((e==null?void 0:e.published_at)||Date.now()),i=new Date(n.getTime()-n.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=i,t.scrollIntoView({behavior:"smooth"})}async function sn(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),u=document.getElementById("form-art-img").value.trim()||null,d=document.getElementById("form-art-pub").checked,p=document.getElementById("form-art-date").value;if(!n){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}const l=p?new Date(p).toISOString():new Date().toISOString(),y={title:n,description:i,image_url:u,is_published:d,published_at:l};let o;if(t?{error:o}=await E.from("patch_notes").update(y).eq("id",t):{error:o}=await E.from("patch_notes").insert(y),o){alert("Erreur : "+o.message);return}document.getElementById("article-form").style.display="none",await ye(e)}async function dn(e){await V(e)}async function V(e){var c,r,a,m,s,h,_,b,I,k,x,g;const{data:t}=await E.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
          </div>`:(t||[]).map(f=>cn(f)).join("")}
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([f,v,w])=>`<button type="button" data-cmd="${v}" title="${w}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${f}</button>`).join("")}
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
    </div>`,(c=document.getElementById("ts-add"))==null||c.addEventListener("click",()=>Re(null,(t==null?void 0:t.length)||0)),(r=document.getElementById("ts-reset"))==null||r.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:f}=await E.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(f?"Erreur : "+f.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(a=document.getElementById("ts-cancel"))==null||a.addEventListener("click",et),(m=document.getElementById("ts-save"))==null||m.addEventListener("click",()=>un(e)),(s=document.getElementById("ts-preview-btn"))==null||s.addEventListener("click",pn);const n=document.getElementById("ts-editor"),i=()=>{const f=document.getElementById("ts-content");f&&n&&(f.value=n.innerHTML)};n==null||n.addEventListener("input",i),n==null||n.addEventListener("blur",i);const u=()=>{document.activeElement!==n&&(n==null||n.focus())};(h=document.getElementById("ts-toolbar"))==null||h.querySelectorAll("[data-cmd]").forEach(f=>{f.addEventListener("mousedown",v=>{v.preventDefault(),u();const w=f.dataset.cmd;w.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,w.split(":")[1]):document.execCommand(w,!1,null),i()})}),(_=document.getElementById("ts-insert-color"))==null||_.addEventListener("mousedown",f=>{f.preventDefault(),u();const v=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");v&&(document.execCommand("foreColor",!1,v),i())}),(b=document.getElementById("ts-clear-format"))==null||b.addEventListener("mousedown",f=>{f.preventDefault(),u(),document.execCommand("removeFormat",!1,null),i()}),n==null||n.addEventListener("focus",()=>{n&&(n.style.borderColor="#1A6B3C")}),n==null||n.addEventListener("blur",()=>{n&&(n.style.borderColor="#ddd")});const d=document.getElementById("ts-image"),p=document.getElementById("ts-img-preview"),l=document.getElementById("ts-img-preview-el"),y=document.getElementById("ts-img-picker-grid"),o=()=>{var v;const f=(v=d==null?void 0:d.value)==null?void 0:v.trim();if(f){const w="/";l.src=`${w}icons/${f}`,p.style.display="block"}else p.style.display="none"};d==null||d.addEventListener("input",o),(I=document.getElementById("ts-img-clear"))==null||I.addEventListener("click",()=>{d&&(d.value=""),p.style.display="none",y.style.display="none"}),(k=document.getElementById("ts-img-pick"))==null||k.addEventListener("click",async()=>{if(y.style.display!=="none"){y.style.display="none";return}y.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',y.style.display="block";try{const v=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),w=Array.isArray(v)?v.filter($=>$.name.startsWith("tuto_")):[];if(!w.length){y.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const A="/";y.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+w.map($=>`
          <div data-pick="${$.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${A}icons/${$.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${$.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",y.querySelectorAll("[data-pick]").forEach($=>{$.addEventListener("click",()=>{d&&(d.value=$.dataset.pick),o(),y.style.display="none"})})}catch(f){y.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+f.message+"</div>"}}),(x=document.getElementById("ts-color"))==null||x.addEventListener("input",f=>{const v=document.getElementById("ts-color-hex");v&&(v.value=f.target.value)}),(g=document.getElementById("ts-color-hex"))==null||g.addEventListener("input",f=>{const v=f.target.value;if(/^#[0-9a-fA-F]{6}$/.test(v)){const w=document.getElementById("ts-color");w&&(w.value=v)}}),e.querySelectorAll("[data-edit]").forEach(f=>{const v=(t||[]).find(w=>w.id===f.dataset.edit);v&&f.addEventListener("click",()=>Re(v))}),e.querySelectorAll("[data-delete]").forEach(f=>{f.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await E.from("tutorial_steps").delete().eq("id",f.dataset.delete),V(e))})}),e.querySelectorAll("[data-toggle]").forEach(f=>{f.addEventListener("click",async()=>{const v=(t||[]).find(w=>w.id===f.dataset.toggle);v&&(await E.from("tutorial_steps").update({is_active:!v.is_active}).eq("id",v.id),V(e))})}),e.querySelectorAll("[data-up]").forEach(f=>{f.addEventListener("click",async()=>{const v=t||[],w=v.findIndex(A=>A.id===f.dataset.up);w<=0||(await Promise.all([E.from("tutorial_steps").update({step_order:v[w-1].step_order}).eq("id",v[w].id),E.from("tutorial_steps").update({step_order:v[w].step_order}).eq("id",v[w-1].id)]),V(e))})}),e.querySelectorAll("[data-down]").forEach(f=>{f.addEventListener("click",async()=>{const v=t||[],w=v.findIndex(A=>A.id===f.dataset.down);w<0||w>=v.length-1||(await Promise.all([E.from("tutorial_steps").update({step_order:v[w+1].step_order}).eq("id",v[w].id),E.from("tutorial_steps").update({step_order:v[w].step_order}).eq("id",v[w+1].id)]),V(e))})})}function cn(e){return`
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
  </div>`}function Re(e,t=0){document.getElementById("ts-form").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const n=document.getElementById("ts-editor");n&&(n.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??t,document.getElementById("ts-active").checked=e?e.is_active:!0;const i=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=i,document.getElementById("ts-color-hex").value=i;const u=(e==null?void 0:e.image_url)||"",d=document.getElementById("ts-image");d&&(d.value=u);const p=document.getElementById("ts-img-preview"),l=document.getElementById("ts-img-preview-el");if(u&&p&&l){const y="/";l.src=`${y}icons/${u}`,p.style.display="block"}else p&&(p.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function et(){document.getElementById("ts-form").style.display="none",document.getElementById("ts-preview-area").innerHTML=""}function pn(){var o,c;const e=document.getElementById("ts-emoji").value||"⚽",t=document.getElementById("ts-title").value||"Titre",n=document.getElementById("ts-editor"),i=n?n.innerHTML:document.getElementById("ts-content").value||"",u=document.getElementById("ts-color-hex").value||"#1A6B3C",d=(c=(o=document.getElementById("ts-image"))==null?void 0:o.value)==null?void 0:c.trim(),l=d?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${d}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",y=document.getElementById("ts-preview-area");y.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${u}"></div></div>
        <div style="padding:20px 20px 0;text-align:center">
          <div style="font-size:48px;margin-bottom:8px;line-height:1">${e}</div>
          <div style="font-size:17px;font-weight:900;color:#111;margin-bottom:4px">${t}</div>
          <div style="font-size:11px;color:#aaa">6 / 10</div>
        </div>
        ${l}
        <div style="padding:${d?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${i}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${u};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,y.querySelectorAll("ul,ol").forEach(r=>{r.style.paddingLeft="20px",r.style.margin="6px 0"}),y.querySelectorAll("li").forEach(r=>{r.style.marginBottom="4px"}),y.querySelectorAll("p").forEach(r=>{r.style.marginBottom="8px"})}async function un(e){var r,a;const t=document.getElementById("ts-id").value,n=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),u=document.getElementById("ts-editor"),d=(u?u.innerHTML:document.getElementById("ts-content").value).trim(),p=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",l=parseInt(document.getElementById("ts-order").value)||0,y=document.getElementById("ts-active").checked;if(!i||!d){alert("Titre et contenu sont obligatoires.");return}const o={emoji:n,title:i,content:d,color:p,step_order:l,is_active:y,image_url:((a=(r=document.getElementById("ts-image"))==null?void 0:r.value)==null?void 0:a.trim())||null};let c;if(t?{error:c}=await E.from("tutorial_steps").update(o).eq("id",t):{error:c}=await E.from("tutorial_steps").insert(o),c){alert("Erreur : "+c.message);return}et(),V(e)}const mn="/",gn=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function fn(e){await xe(e)}async function xe(e){var i,u,d,p;const[{data:t},{data:n}]=await Promise.all([E.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),E.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:820px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:#1a1a1a">🏟️ Stades</h2>
        <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:10px" id="st-list">
        ${(t||[]).map(l=>bn(l)).join("")||'<div style="color:#aaa;padding:24px;text-align:center">Aucun stade créé.</div>'}
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
                ${(n||[]).map(l=>`<option value="${l.id}" data-logo="${l.logo_url||""}">${l.encoded_name}</option>`).join("")}
              </select>
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">PAYS (si pas de club)</label>
              <select id="st-country" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:13px;background:#fff">
                <option value="">— Aucun pays —</option>
                ${gn.map(([l,y])=>`<option value="${l}">${y} (${l})</option>`).join("")}
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
    </div>`,(i=document.getElementById("st-add-btn"))==null||i.addEventListener("click",()=>De(null)),(u=document.getElementById("st-cancel"))==null||u.addEventListener("click",()=>{document.getElementById("st-form").style.display="none"}),(d=document.getElementById("st-save"))==null||d.addEventListener("click",()=>yn(e)),(p=document.getElementById("st-preview-btn"))==null||p.addEventListener("click",()=>se()),["st-name","st-club","st-country","st-image"].forEach(l=>{var y,o;(y=document.getElementById(l))==null||y.addEventListener("input",se),(o=document.getElementById(l))==null||o.addEventListener("change",se)}),e.querySelectorAll("[data-edit]").forEach(l=>{const y=(t||[]).find(o=>o.id===l.dataset.edit);y&&l.addEventListener("click",()=>De(y))}),e.querySelectorAll("[data-delete]").forEach(l=>{l.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await E.from("stadium_definitions").delete().eq("id",l.dataset.delete),xe(e))})})}function bn(e){var n,i;let t;return(n=e.club)!=null&&n.logo_url?t=`<img src="${e.club.logo_url}" style="width:32px;height:32px;object-fit:contain">`:e.country_code?t=`<img src="https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/32.png" style="width:32px;height:24px;object-fit:contain;border-radius:3px" onerror="this.style.display='none'">`:t='<span style="font-size:20px">🌍</span>',`
    <div style="background:#fff;border-radius:10px;padding:12px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;align-items:center;gap:12px">
      <div style="width:40px;height:40px;border-radius:8px;background:#4FC3F7;display:flex;align-items:center;justify-content:center;flex-shrink:0">
        ${t}
      </div>
      <div style="flex:1">
        <div style="font-size:14px;font-weight:900;color:#1a1a1a">${e.name}</div>
        <div style="font-size:11px;color:#888">${((i=e.club)==null?void 0:i.encoded_name)||e.country_code||"—"}</div>
      </div>
      <button data-edit="${e.id}" class="btn btn-ghost btn-sm">✏️</button>
      <button data-delete="${e.id}" class="btn btn-ghost btn-sm" style="color:#cc2222">🗑️</button>
    </div>`}function De(e,t){var i,u;document.getElementById("st-form").style.display="block",document.getElementById("st-form-title").textContent=e?"Modifier le stade":"Nouveau stade",document.getElementById("st-id").value=(e==null?void 0:e.id)||"",document.getElementById("st-name").value=(e==null?void 0:e.name)||"",document.getElementById("st-club").value=(e==null?void 0:e.club_id)||"";const n=document.getElementById("st-country");n&&(n.value=(e==null?void 0:e.country_code)||""),document.getElementById("st-image").value=(e==null?void 0:e.image_url)||"",document.getElementById("st-preview-card").innerHTML="",se((i=e==null?void 0:e.club)==null?void 0:i.logo_url,(u=e==null?void 0:e.club)==null?void 0:u.encoded_name),document.getElementById("st-form").scrollIntoView({behavior:"smooth"})}function se(){var o,c,r,a,m,s,h;const e=((o=document.getElementById("st-name"))==null?void 0:o.value)||"NOM DU STADE",t=(r=(c=document.getElementById("st-image"))==null?void 0:c.value)==null?void 0:r.trim(),n=(m=(a=document.getElementById("st-country"))==null?void 0:a.value)==null?void 0:m.trim(),i=document.getElementById("st-club"),u=(i==null?void 0:i.selectedIndex)||0,d=i&&u>0?i.options[u].text:"",p=((h=(s=i==null?void 0:i.options[u])==null?void 0:s.getAttribute)==null?void 0:h.call(s,"data-logo"))||"";let l=null;t?l=`${mn}icons/${t}`:p?l=p:n&&(l=`https://flagsapi.com/${n.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`);const y=d||n||"—";document.getElementById("st-preview-card").innerHTML=yt(e,l,`${y}<br>+10 ⭐`,{width:140})}async function yn(e){const t=document.getElementById("st-id").value,n=document.getElementById("st-name").value.trim(),i=document.getElementById("st-club").value||null,u=document.getElementById("st-country").value.trim().toUpperCase()||null,d=document.getElementById("st-image").value.trim()||null;if(!n){alert("Le nom est obligatoire");return}const p={name:n,club_id:i,country_code:u,image_url:d},{error:l}=t?await E.from("stadium_definitions").update(p).eq("id",t):await E.from("stadium_definitions").insert(p);if(l){alert("Erreur : "+l.message);return}document.getElementById("st-form").style.display="none",xe(e)}const H=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],ne=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}];async function xn(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await E.from("gc_definitions").select("*").order("sort_order").order("created_at");let n=null;const i=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],u=["GK","DEF","MIL","ATT"],d=()=>window.innerWidth<700,p=a=>e.querySelector(a);function l(a,m=130){if(!a)return"";const s=H.find(_=>_.value===a.gc_type)||H[0],h=a.image_url?`/icons/${a.image_url}`:null;return xt(a.name||"?",h,s.label.split(" ")[0],a.effect||"",{width:m})}function y(){return`
    <div id="gc-list" style="background:#fff;${d()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Game Changers (${(t||[]).length})</b>
        <button id="btn-new-gc" style="background:#7a28b8;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(a=>{const m=H.find(h=>h.value===a.gc_type)||H[0],s=ne.find(h=>h.value===a.color)||ne[0];return`
        <div class="gc-row" data-id="${a.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${a.id===n?"#f5f0ff":"#fff"}">
          <div style="width:36px;height:50px;border-radius:5px;border:2px solid ${s.hex};background:${m.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">
            ${a.image_url?`<img src="/icons/${a.image_url}" style="width:28px;height:28px;object-fit:contain">`:m.label.split(" ")[0]}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.name}</div>
            <div style="font-size:11px;color:#888">${m.label} · ${a.is_active?"✅ Actif":"⛔ Inactif"}</div>
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
      ${(t||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucune carte. Cliquez + Nouveau.</div>'}
    </div>`}function o(){const a=n?(t||[]).find(m=>m.id===n):null;return a?(H.find(m=>m.value===a.gc_type)||H[0],ne.find(m=>m.value===a.color)||ne[0],`
    <div style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${d()?'<button id="btn-gc-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <!-- Preview -->
      <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:#1a1a2e;border-radius:12px">
        ${l(a,d()?120:150)}
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
              ${H.map(m=>`<option value="${m.value}" ${a.gc_type===m.value?"selected":""}>${m.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">COULEUR</label>
            <select id="gc-color" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${ne.map(m=>`<option value="${m.value}" ${a.color===m.value?"selected":""}>${m.label}</option>`).join("")}
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
              ${i.map(m=>`<option value="${m.value}" ${(a.effect_type||"BOOST_STAT")===m.value?"selected":""}>${m.label}</option>`).join("")}
            </select>
          </div>
          ${(()=>{const m=a.effect_params||{},s=i.find(h=>h.value===(a.effect_type||"BOOST_STAT"))||i[0];return`
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              ${s.hasValue?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">VALEUR (+N)</label>
                <input id="gc-p-value" type="number" min="1" max="5" value="${m.value||2}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${s.hasCount?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">NB JOUEURS</label>
                <input id="gc-p-count" type="number" min="1" max="11" value="${m.count||1}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${s.hasTarget?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">CIBLE</label>
                <select id="gc-p-target" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px">
                  <option value="home" ${(m.target||"home")==="home"?"selected":""}>Mon équipe</option>
                  <option value="opponent" ${m.target==="opponent"?"selected":""}>Équipe adverse</option>
                </select>
              </div>`:""}
              ${s.hasRoles?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">POSTES CIBLÉS</label>
                <div style="display:flex;gap:4px;flex-wrap:wrap">
                  ${u.map(h=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer">
                    <input type="checkbox" class="gc-p-role" value="${h}" ${!m.roles||m.roles.includes(h)?"checked":""}> ${h}
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
    </div>`):`<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez une carte ou créez-en une nouvelle
    </div>`}function c(){e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!d()||!n?y():""}
      ${!d()||n?o():""}
    </div>`,r()}function r(){var a,m,s,h,_;e.querySelectorAll(".gc-row").forEach(b=>{b.addEventListener("click",I=>{I.target.closest(".btn-toggle-gc,.btn-delete-gc")||(n=b.dataset.id,c())})}),(a=p("#btn-gc-back"))==null||a.addEventListener("click",()=>{n=null,c()}),(m=p("#btn-cancel-gc"))==null||m.addEventListener("click",()=>{n=null,c()}),(s=p("#btn-new-gc"))==null||s.addEventListener("click",async()=>{const b=prompt("Nom de la carte Game Changer :");if(!(b!=null&&b.trim()))return;const{data:I,error:k}=await E.from("gc_definitions").insert({name:b.trim(),gc_type:"game_changer",color:"purple"}).select().single();if(k){alert(k.message);return}t.push(I),n=I.id,c()}),e.querySelectorAll(".btn-toggle-gc").forEach(b=>{b.addEventListener("click",async I=>{I.stopPropagation();const k=b.dataset.active!=="true";await E.from("gc_definitions").update({is_active:k}).eq("id",b.dataset.id);const x=t.find(g=>g.id===b.dataset.id);x&&(x.is_active=k),c()})}),e.querySelectorAll(".btn-delete-gc").forEach(b=>{b.addEventListener("click",async I=>{if(I.stopPropagation(),!confirm("Supprimer cette carte Game Changer ?"))return;await E.from("gc_definitions").delete().eq("id",b.dataset.id);const k=t.findIndex(x=>x.id===b.dataset.id);k>-1&&t.splice(k,1),n===b.dataset.id&&(n=null),c()})}),(h=p("#btn-pick-gc-icon"))==null||h.addEventListener("click",async()=>{var I;const b=p("#gc-icon-picker");if(b){if(b.style.display!=="none"){b.style.display="none";return}b.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',b.style.display="block";try{const x=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),g=Array.isArray(x)?x.filter(v=>v.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(v.name)):[];if(!g.length){b.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const f=((I=p("#gc-image-url"))==null?void 0:I.value)||"";b.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${g.map(v=>`
          <div class="gc-icon-item" data-name="${v.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${v.name===f?"#7a28b8":"#ddd"};background:${v.name===f?"#f5f0ff":"#fff"}">
            <img src="/icons/${v.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
          </div>`).join("")}
        </div>`,b.querySelectorAll(".gc-icon-item").forEach(v=>{v.addEventListener("click",()=>{const w=p("#gc-image-url");w&&(w.value=v.dataset.name),b.style.display="none"})})}catch(k){b.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${k.message}</div>`}}}),(_=p("#btn-save-gc"))==null||_.addEventListener("click",async()=>{var v,w,A,$,L,B,S,T,z,M,N,F,O,P;const b=t.find(j=>j.id===n);if(!b)return;const I=i.find(j=>{var C;return j.value===(((C=p("#gc-effect-type"))==null?void 0:C.value)||"BOOST_STAT")})||i[0],k=I.hasRoles?[...e.querySelectorAll(".gc-p-role:checked")].map(j=>j.value):null,x={...I.hasValue?{value:Number((v=p("#gc-p-value"))==null?void 0:v.value)||2}:{},...I.hasCount?{count:Number((w=p("#gc-p-count"))==null?void 0:w.value)||1}:{},...I.hasTarget?{target:((A=p("#gc-p-target"))==null?void 0:A.value)||"home"}:{},...I.hasRoles?{roles:k!=null&&k.length?k:null}:{}},g={name:((L=($=p("#gc-name"))==null?void 0:$.value)==null?void 0:L.trim())||b.name,effect:((S=(B=p("#gc-effect"))==null?void 0:B.value)==null?void 0:S.trim())||null,image_url:((z=(T=p("#gc-image-url"))==null?void 0:T.value)==null?void 0:z.trim())||null,gc_type:((M=p("#gc-type"))==null?void 0:M.value)||"game_changer",color:((N=p("#gc-color"))==null?void 0:N.value)||"purple",sort_order:Number((F=p("#gc-sort"))==null?void 0:F.value)||0,is_active:((O=p("#gc-active"))==null?void 0:O.checked)??b.is_active,effect_type:((P=p("#gc-effect-type"))==null?void 0:P.value)||"BOOST_STAT",effect_params:x},{error:f}=await E.from("gc_definitions").update(g).eq("id",n);if(f){alert(f.message);return}Object.assign(b,g),alert("✅ Carte enregistrée !"),c()})}c()}async function vn(e,{toast:t,openModal:n,closeModal:i}){await J(e,{toast:t,openModal:n,closeModal:i})}async function J(e,t){var x;const{toast:n,openModal:i,closeModal:u}=t,[{data:d,error:p},{data:l}]=await Promise.all([E.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),E.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1)]);if(p){e.innerHTML=`<p style="color:red">${p.message}</p>`;return}const y=d||[],o=y.find(g=>g.is_active),c=(l||[]).filter(g=>(g.placement_matches||0)>=1),r=c.filter(g=>(g.placement_matches||0)>=10),a=["bronze","silver","gold","platinum","diamond","master"],m={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},s={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},h={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},_={};a.forEach(g=>{_[g]=0}),r.forEach(g=>{const f=g.rank_tier||"bronze";_[f]!==void 0&&_[f]++});const b=r.length?Math.round(r.reduce((g,f)=>g+(f.mmr||1e3),0)/r.length):0;function I(g){return g?new Date(g).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function k(g){const f=new Date;return g.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(g.end_at)<f?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${o?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${o.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${c.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Joueurs ranked</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${r.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Classés (10+ matchs)</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${b}</div>
            <div style="font-size:11px;color:var(--gray-600)">MMR moyen</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(o.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${r.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${a.map(g=>{const f=_[g],v=r.length>0?Math.round(f/r.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${h[g]} ${m[g]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${v}%;background:${s[g]};border-radius:4px;transition:width 0.5s"></div>
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
        <div style="font-weight:700;font-size:14px">Toutes les saisons (${y.length})</div>
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
              ${y.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':y.map(g=>{const f=Math.round((new Date(g.end_at)-new Date(g.start_at))/864e5),v=new Date(g.end_at)<new Date&&!g.is_active;return`
                    <tr>
                      <td><b>${g.name}</b></td>
                      <td style="font-size:12px">${I(g.start_at)}</td>
                      <td style="font-size:12px">${I(g.end_at)}</td>
                      <td style="font-size:12px">${f} jours</td>
                      <td>${k(g)}</td>
                      <td style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn btn-ghost btn-sm" data-edit="${g.id}">✏️ Modifier</button>
                        ${g.is_active?`<button class="btn btn-ghost btn-sm" data-deactivate="${g.id}" style="color:#e67e22">⏹ Désactiver</button>`:`<button class="btn btn-primary btn-sm" data-activate="${g.id}">▶ Activer</button>`}
                        ${v?`<button class="btn btn-danger btn-sm" data-delete="${g.id}">🗑</button>`:""}
                      </td>
                    </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>`,(x=document.getElementById("create-season-btn"))==null||x.addEventListener("click",()=>{je(null,{toast:n,openModal:i,closeModal:u,reload:()=>J(e,t)})}),e.querySelectorAll("[data-edit]").forEach(g=>{const f=y.find(v=>v.id==g.dataset.edit);g.addEventListener("click",()=>{je(f,{toast:n,openModal:i,closeModal:u,reload:()=>J(e,t)})})}),e.querySelectorAll("[data-activate]").forEach(g=>{g.addEventListener("click",async()=>{const f=parseInt(g.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:v}=await E.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(v){n(v.message,"error");return}const{error:w}=await E.from("ranked_seasons").update({is_active:!0}).eq("id",f);if(w){n(w.message,"error");return}await E.from("users").update({current_season_id:f}).gt("placement_matches",0),n("Saison activée ✅","success"),J(e,t)})}),e.querySelectorAll("[data-deactivate]").forEach(g=>{g.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:f}=await E.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(g.dataset.deactivate));if(f){n(f.message,"error");return}n("Saison désactivée","success"),J(e,t)})}),e.querySelectorAll("[data-delete]").forEach(g=>{g.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:f}=await E.from("ranked_seasons").delete().eq("id",parseInt(g.dataset.delete));if(f){n(f.message,"error");return}n("Saison supprimée","success"),J(e,t)})})}function je(e,{toast:t,openModal:n,closeModal:i,reload:u}){const d=!!e,p=new Date().toISOString().slice(0,16),l=new Date(Date.now()+90*864e5).toISOString().slice(0,16),y=e?new Date(e.start_at).toISOString().slice(0,16):p,o=e?new Date(e.end_at).toISOString().slice(0,16):l,c=(e==null?void 0:e.name)||"";n(d?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group">
        <label>Nom de la saison *</label>
        <input id="season-name" type="text" value="${c}" placeholder="ex: Saison 2 — Été 2026" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de début *</label>
        <input id="season-start" type="datetime-local" value="${y}" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de fin *</label>
        <input id="season-end" type="datetime-local" value="${o}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${d?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function r(){var _,b;const a=(_=document.getElementById("season-start"))==null?void 0:_.value,m=(b=document.getElementById("season-end"))==null?void 0:b.value,s=document.getElementById("season-duration");if(!a||!m||!s)return;const h=Math.round((new Date(m)-new Date(a))/864e5);s.textContent=h>0?`Durée : ${h} jour${h>1?"s":""}`:"⚠️ La fin doit être après le début",s.style.color=h>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var a,m,s;(a=document.getElementById("season-start"))==null||a.addEventListener("input",r),(m=document.getElementById("season-end"))==null||m.addEventListener("input",r),r(),(s=document.getElementById("season-save-btn"))==null||s.addEventListener("click",async()=>{var f,v,w;const h=(f=document.getElementById("season-name"))==null?void 0:f.value.trim(),_=(v=document.getElementById("season-start"))==null?void 0:v.value,b=(w=document.getElementById("season-end"))==null?void 0:w.value,I=document.getElementById("season-error");if(!h){I.textContent="Le nom est requis.";return}if(!_){I.textContent="La date de début est requise.";return}if(!b){I.textContent="La date de fin est requise.";return}if(new Date(b)<=new Date(_)){I.textContent="La date de fin doit être après le début.";return}const k=document.getElementById("season-save-btn");k.disabled=!0,k.textContent="Enregistrement…";const x={name:h,start_at:new Date(_).toISOString(),end_at:new Date(b).toISOString()};let g;if(d?{error:g}=await E.from("ranked_seasons").update(x).eq("id",e.id):{error:g}=await E.from("ranked_seasons").insert({...x,is_active:!1}),g){I.textContent=g.message,k.disabled=!1,k.textContent=d?"💾 Enregistrer":"✅ Créer la saison";return}t(d?"Saison modifiée ✅":"Saison créée ✅","success"),i(),u()})},50)}vt(Ge);function hn(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function En(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function fe(){document.getElementById("modal-overlay").classList.add("hidden")}const Ne={dashboard:{title:"Dashboard",fn:ht},players:{title:"Joueurs & Cartes",fn:kt},clubs:{title:"Clubs",fn:Ft},"card-builder":{title:"Card Builder",fn:Ht},users:{title:"Managers",fn:Ze},market:{title:"Marché des transferts",fn:Qe},"import-export":{title:"Import / Export CSV",fn:Yt},formations:{title:"Formations & Liens",fn:Zt},"boosters-config":{title:"Boosters",fn:tn},"sell-price":{title:"Prix vente directe",fn:nn},journal:{title:"Journal",fn:rn},tutorial:{title:"Tutoriel",fn:dn},stadiums:{title:"Stades",fn},"gc-cards":{title:"Game Changers",fn:xn},"ranked-seasons":{title:"Saisons Ranked",fn:vn}};async function pe(e){document.querySelectorAll(".admin-sidebar nav a").forEach(u=>{u.classList.toggle("active",u.dataset.page===e)});const t=document.getElementById("mobile-page-select");t&&(t.value=e);const n=Ne[e]||Ne.dashboard;document.getElementById("page-title").textContent=n.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(i,{toast:hn,openModal:En,closeModal:fe,navigate:pe})}catch(u){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${u.message}</div>`,console.error(u)}}async function _n(){var t;const{data:{session:e}}=await E.auth.getSession();e&&await Fe(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,u=document.getElementById("auth-error");if(u.textContent="",!n||!i){u.textContent="Remplissez tous les champs.";return}const{data:d,error:p}=await E.auth.signInWithPassword({email:n,password:i});if(p){u.textContent=p.message;return}await Fe(d.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await E.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",fe),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&fe()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",i=>{i.preventDefault(),pe(n.dataset.page)})}),(t=document.getElementById("mobile-page-select"))==null||t.addEventListener("change",n=>{pe(n.target.value)})}async function Fe(e){const{data:t,error:n}=await E.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(n||!t){i.textContent="Profil introuvable.";return}if(!t.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await E.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,pe("dashboard")}_n();
