import{s as I,i as Bt,r as oe,a as Ae,A as St,l as Ct,g as Tt,K as Fe,D as F,b as zt,S as Mt,c as q,H as Rt,R as jt,e as ve,d as lt,f as Dt,h as Nt,E as Pt,j as Ft,N as Ot,M as qt,B as Ut,k as Ht,m as Gt,F as de,n as Be,o as me,p as Kt,q as Vt,t as he,u as Oe,v as Jt}from"./match-shared-DxhZaXlw.js";async function st(e){var o;const[{count:t},{count:n},{count:i},{count:l},{count:s},{data:g},{data:x}]=await Promise.all([I.from("players").select("*",{count:"exact",head:!0}),I.from("clubs").select("*",{count:"exact",head:!0}),I.from("users").select("*",{count:"exact",head:!0}),I.from("stadium_definitions").select("*",{count:"exact",head:!0}),I.from("users").select("*",{count:"exact",head:!0}).gt("last_seen_at",new Date(Date.now()-18e4).toISOString()),I.rpc("get_signup_password"),I.from("app_feature_flags").select("*").order("key")]),_=g||"";e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:24px">

      <!-- Managers -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">👥 Managers</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${i??"–"}</div>
        <div style="display:flex;align-items:center;gap:6px;margin-top:10px;font-size:12px;color:var(--tile-fg-dim)">
          <span style="width:8px;height:8px;border-radius:50%;background:#2ecc71;display:inline-block;box-shadow:0 0 6px #2ecc71"></span>
          ${s??0} joueurs connectés
        </div>
      </div>

      <!-- Stadiums -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">🏟️ Stadiums</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${l??"–"}</div>
        <button class="btn btn-primary btn-sm" style="width:100%;margin-top:10px" onclick="window.adminNav('stadiums')">+ Add new stadium</button>
      </div>

      <!-- Teams -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">🛡️ Teams</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${n??"–"}</div>
        <button class="btn btn-yellow btn-sm" style="width:100%;margin-top:10px" onclick="window.adminNav('clubs')">+ Add new teams</button>
      </div>

      <!-- Players -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">🃏 Players</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${t??"–"}</div>
        <button class="btn btn-ghost btn-sm" style="width:100%;margin-top:10px" onclick="window.adminNav('players')">+ Add new players</button>
      </div>

    </div>

    <div class="card-panel">
      <h3 style="font-size:14px;margin-bottom:4px;font-weight:600;color:var(--tile-fg-on-page)">🔐 Code d'accès à l'inscription</h3>
      <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:12px">Requis pour que le bouton "Créer mon compte" soit actif sur la page de connexion.</div>
      <div style="display:flex;gap:8px;max-width:420px">
        <input id="signup-pwd-input" type="text" value="${_.replace(/"/g,"&quot;")}" style="flex:1">
        <button id="signup-pwd-save" class="btn btn-primary">💾 Enregistrer</button>
      </div>
      <div id="signup-pwd-status" style="font-size:12px;margin-top:8px;min-height:16px"></div>
    </div>
    <div class="card-panel" style="margin-top:20px">
      <h3 style="font-size:14px;margin-bottom:4px;font-weight:600;color:var(--tile-fg-on-page)">🧪 Modes activables</h3>
      <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:14px">Active/désactive des fonctionnalités entières de l'app. Quand désactivé, un popup "Module en cours de développement" s'affiche à la place.</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${(x||[]).map(c=>`
          <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-radius:10px;background:var(--tile-bg);border:1px solid var(--tile-border)">
            <div>
              <div style="font-weight:700;font-size:14px;color:var(--tile-fg-on-page)">${c.label}</div>
              <div style="font-size:11px;color:var(--tile-fg-dim)">${c.enabled?"✅ Activé":"⛔ Désactivé"}</div>
            </div>
            <button class="feature-flag-toggle" data-key="${c.key}" data-enabled="${c.enabled}"
              style="width:52px;height:28px;border-radius:20px;border:none;cursor:pointer;position:relative;background:${c.enabled?"#1A6B3C":"#555"};transition:background .2s">
              <span style="position:absolute;top:3px;left:${c.enabled?"27px":"3px"};width:22px;height:22px;border-radius:50%;background:#fff;transition:left .2s"></span>
            </button>
          </div>
        `).join("")||'<div style="font-size:12px;color:var(--tile-fg-dim)">Aucun mode configuré — lance la migration correspondante.</div>'}
      </div>
    </div>
  `,window.adminNav=c=>{var d;(d=document.querySelector(`[data-page="${c}"]`))==null||d.click()},e.querySelectorAll(".feature-flag-toggle").forEach(c=>{c.addEventListener("click",async()=>{const d=c.dataset.key,m=c.dataset.enabled!=="true";c.disabled=!0;const{error:f}=await I.from("app_feature_flags").update({enabled:m,updated_at:new Date().toISOString()}).eq("key",d);if(c.disabled=!1,f){alert(f.message);return}Bt(),st(e)})}),(o=document.getElementById("signup-pwd-save"))==null||o.addEventListener("click",async()=>{const c=document.getElementById("signup-pwd-input").value.trim(),d=document.getElementById("signup-pwd-status");if(!c){d.textContent="Le code ne peut pas être vide.",d.style.color="#ff6b6b";return}const m=document.getElementById("signup-pwd-save");m.disabled=!0,m.textContent="⏳...";const{error:f}=await I.rpc("set_signup_password",{new_password:c});if(m.disabled=!1,m.textContent="💾 Enregistrer",f){d.textContent=f.message,d.style.color="#ff6b6b";return}d.textContent="✅ Code mis à jour.",d.style.color="#2ecc71"})}const dt={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},Yt={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Wt(){const e={};for(const t of St)e[t]=await Ct(t);return e}function re(e){return e.job==="GK"?e.note_g||0:e.job==="DEF"?e.note_d||0:e.job==="MIL"?e.note_m||0:e.note_a||0}async function Zt(e,t){const{toast:n}=t;if(!confirm(`Réattribuer une nouvelle photo à tous les joueurs ayant encore l'ancien format de chemin (public/faces/...) ?

Cette action est irréversible.`))return;const i=document.getElementById("fix-old-faces-btn");i&&(i.disabled=!0,i.textContent="⏳ En cours...");try{const{data:l,error:s}=await I.from("players").select("id, country_code, face").like("face","public/faces/%");if(s){n(s.message,"error");return}if(!(l!=null&&l.length)){n("Aucun joueur avec l'ancien format — rien à faire ✅","success");return}const{data:g}=await I.from("players").select("face").not("face","is",null),x=new Set((g||[]).map(c=>c.face).filter(c=>c&&!c.startsWith("public/faces/")));let _=0,o=0;for(const c of l){const d=await Ae(c.country_code,x);if(!d){o++;continue}const{error:m}=await I.from("players").update({face:d}).eq("id",c.id);if(m){o++;continue}x.add(d),_++}n(`${_} photo(s) réattribuée(s)${o?`, ${o} échec(s)`:""} ✅`,o?"error":"success")}finally{i&&(i.disabled=!1,i.textContent="🖼️ Réattribuer anciennes photos")}}function qe(e,t,n,i=!1){const l=`__players${e[0].toUpperCase()}${e.slice(1)}Filter`;return window[l]||(window[l]=new Set),`<div class="ms-wrap" data-ms-kind="${e}" style="position:relative;min-width:150px">
    <button type="button" id="ms-btn-${e}" class="btn btn-ghost" style="width:100%;text-align:left;display:flex;justify-content:space-between;align-items:center;gap:6px">
      <span id="ms-label-${e}">${t}</span>
      <span style="font-size:10px;opacity:.6">▾</span>
    </button>
    <div id="ms-panel-${e}" style="display:none;position:absolute;z-index:50;top:calc(100% + 4px);left:0;min-width:220px;max-height:280px;overflow-y:auto;background:#fff;border:1px solid var(--gray-200,#ddd);border-radius:10px;box-shadow:0 6px 20px rgba(0,0,0,0.15);padding:8px">
      ${i?`<input id="ms-search-${e}" placeholder="Rechercher…" style="width:100%;margin-bottom:6px;padding:6px 8px;font-size:12.5px">`:""}
      <div style="display:flex;gap:6px;margin-bottom:6px">
        <button type="button" class="btn btn-ghost btn-sm" id="ms-all-${e}" style="flex:1;font-size:11px;padding:4px">Tout</button>
        <button type="button" class="btn btn-ghost btn-sm" id="ms-none-${e}" style="flex:1;font-size:11px;padding:4px">Aucun</button>
      </div>
      <div id="ms-options-${e}">
        ${n.map(s=>`
          <label style="display:flex;align-items:center;gap:6px;padding:3px 2px;font-size:12.5px;cursor:pointer" data-ms-label="${(s.label||"").toLowerCase()}">
            <input type="checkbox" class="ms-check-${e}" value="${s.value}">
            <span>${s.label}</span>
          </label>`).join("")}
      </div>
    </div>
  </div>`}function Ue(e,t,n){var c,d,m;const i=`__players${e[0].toUpperCase()}${e.slice(1)}Filter`,l=window[i],s=t.querySelector(`#ms-btn-${e}`),g=t.querySelector(`#ms-panel-${e}`),x=t.querySelector(`#ms-label-${e}`),_=(x==null?void 0:x.textContent)||"";function o(){x&&(x.textContent=l.size?`${_} (${l.size})`:_)}t.querySelectorAll(`.ms-check-${e}`).forEach(f=>{f.checked=l.has(f.value),f.addEventListener("change",()=>{f.checked?l.add(f.value):l.delete(f.value),o(),n()})}),o(),s==null||s.addEventListener("click",f=>{f.stopPropagation();const p=g.style.display==="block";document.querySelectorAll('[id^="ms-panel-"]').forEach(r=>r.style.display="none"),g.style.display=p?"none":"block"}),g==null||g.addEventListener("click",f=>f.stopPropagation()),(c=t.querySelector(`#ms-all-${e}`))==null||c.addEventListener("click",()=>{t.querySelectorAll(`.ms-check-${e}`).forEach(f=>{f.checked=!0,l.add(f.value)}),o(),n()}),(d=t.querySelector(`#ms-none-${e}`))==null||d.addEventListener("click",()=>{t.querySelectorAll(`.ms-check-${e}`).forEach(f=>{f.checked=!1}),l.clear(),o(),n()}),(m=t.querySelector(`#ms-search-${e}`))==null||m.addEventListener("input",f=>{const p=f.target.value.toLowerCase();t.querySelectorAll(`#ms-options-${e} label`).forEach(r=>{r.style.display=r.dataset.msLabel.includes(p)?"flex":"none"})})}window.__playersMsDocListener||(window.__playersMsDocListener=!0,document.addEventListener("click",()=>{document.querySelectorAll('[id^="ms-panel-"]').forEach(e=>e.style.display="none")}));async function Qt(e,t){await ge(e,t)}async function ge(e,t,n=null){var o,c,d,m;const{toast:i}=t;n||(n={search:((o=document.getElementById("search-players"))==null?void 0:o.value)||"",job:((c=document.getElementById("filter-job"))==null?void 0:c.value)||"",rarity:((d=document.getElementById("filter-rarity"))==null?void 0:d.value)||"",clubs:window.__playersClubFilter?[...window.__playersClubFilter]:[],countries:window.__playersCountryFilter?[...window.__playersCountryFilter]:[],sort:((m=document.getElementById("sort-players"))==null?void 0:m.value)||"job"});const[{data:l,error:s},{data:g}]=await Promise.all([I.from("players").select("*, clubs(id,encoded_name,logo_url)"),I.from("clubs").select("id,encoded_name").order("encoded_name")]);if(s){e.innerHTML=`<p style="color:red">${s.message}</p>`;return}const x={GK:0,DEF:1,MIL:2,ATT:3},_=(l||[]).sort((f,p)=>{const r=(x[f.job]??4)-(x[p.job]??4);return r!==0?r:(f.surname_real||"").localeCompare(p.surname_real||"")});Xt(e,_,g||[],t,n)}function Xt(e,t,n,i,l=null){var c,d;const{toast:s}=i;if(e.innerHTML=`
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
          ${Object.entries(dt).map(([m,f])=>`<option value="${m}">${f}</option>`).join("")}
        </select>
        <button class="btn btn-primary" id="add-player-btn" style="white-space:nowrap">+ Joueur</button>
        <button class="btn btn-ghost" id="fix-old-faces-btn" style="white-space:nowrap">🖼️ Réattribuer anciennes photos</button>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-start">
        ${qe("club","🏟️ Club",n.map(m=>({value:m.id,label:m.encoded_name})),!0)}
        ${qe("country","🌍 Pays",[...new Set(t.map(m=>m.country_code).filter(Boolean))].sort().map(m=>({value:m,label:m})),!0)}
        <select id="sort-players" style="min-width:170px">
          <option value="job">Trier : Poste (défaut)</option>
          <option value="note_desc">Trier : Note ↓ (plus haute)</option>
          <option value="note_asc">Trier : Note ↑ (plus basse)</option>
          <option value="name">Trier : Nom (A→Z)</option>
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
    </div>`,l){const m=l,f=p=>document.getElementById(p);m.search&&f("search-players")&&(f("search-players").value=m.search),m.job&&f("filter-job")&&(f("filter-job").value=m.job),m.rarity&&f("filter-rarity")&&(f("filter-rarity").value=m.rarity),m.sort&&f("sort-players")&&(f("sort-players").value=m.sort)}l!=null&&l.clubs&&(window.__playersClubFilter=new Set(l.clubs)),l!=null&&l.countries&&(window.__playersCountryFilter=new Set(l.countries));function g(){var L;const m=document.getElementById("search-players").value.toLowerCase(),f=document.getElementById("filter-job").value,p=document.getElementById("filter-rarity").value,r=window.__playersClubFilter||new Set,h=window.__playersCountryFilter||new Set,u=((L=document.getElementById("sort-players"))==null?void 0:L.value)||"job";let w=t.filter(a=>(!m||`${a.firstname} ${a.surname_real}`.toLowerCase().includes(m))&&(!f||a.job===f)&&(!p||a.rarity===p)&&(!r.size||r.has(a.club_id))&&(!h.size||h.has(a.country_code)));return u==="note_desc"?w=[...w].sort((a,v)=>re(v)-re(a)):u==="note_asc"?w=[...w].sort((a,v)=>re(a)-re(v)):u==="name"&&(w=[...w].sort((a,v)=>(a.surname_real||"").localeCompare(v.surname_real||""))),w}const x=new Set;function _(){const m=document.getElementById("bulk-bar"),f=document.getElementById("bulk-count");m&&(m.style.display=x.size>0?"flex":"none",f&&(f.textContent=`${x.size} joueur(s) sélectionné(s)`))}function o(){const m=g();document.getElementById("count-label").textContent=`${m.length} joueur(s)`;const f=document.getElementById("players-list");if(!m.length){f.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}f.innerHTML=m.map(p=>{const r={...p,clubs:p.clubs,face:p.face||null},h=oe(r,{width:120});return`<div style="position:relative;cursor:pointer" data-edit="${p.id}">
        ${h}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${p.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),f.querySelectorAll("[data-edit]").forEach(p=>{p.addEventListener("click",()=>{const r=t.find(h=>h.id===p.dataset.edit);r&&He(r,n,e,i)})}),f.querySelectorAll(".btn-del-player").forEach(p=>{p.addEventListener("click",async r=>{if(r.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:h}=await I.from("players").delete().eq("id",p.dataset.del);h?s(h.message,"error"):(s("Joueur supprimé ✅","success"),ge(e,i))})})}o(),document.getElementById("search-players").addEventListener("input",o),document.getElementById("filter-job").addEventListener("change",o),document.getElementById("filter-rarity").addEventListener("change",o),document.getElementById("sort-players").addEventListener("change",o),Ue("club",e,o),Ue("country",e,o),(c=document.getElementById("bulk-cancel-btn"))==null||c.addEventListener("click",()=>{x.clear(),_(),o()}),(d=document.getElementById("bulk-delete-btn"))==null||d.addEventListener("click",async()=>{var r,h,u,w;if(!x.size||!confirm(`Supprimer ${x.size} joueur(s) ?`))return;const m=[...x],{error:f}=await I.from("players").delete().in("id",m);if(f){s(f.message,"error");return}s(`${m.length} joueur(s) supprimé(s) ✅`,"success"),x.clear();const p={search:((r=document.getElementById("search-players"))==null?void 0:r.value)||"",job:((h=document.getElementById("filter-job"))==null?void 0:h.value)||"",rarity:((u=document.getElementById("filter-rarity"))==null?void 0:u.value)||"",sort:((w=document.getElementById("sort-players"))==null?void 0:w.value)||"job",clubs:window.__playersClubFilter?[...window.__playersClubFilter]:[],countries:window.__playersCountryFilter?[...window.__playersCountryFilter]:[]};ge(e,i,p)}),document.getElementById("add-player-btn").addEventListener("click",()=>He(null,n,e,i)),document.getElementById("fix-old-faces-btn").addEventListener("click",()=>Zt(e,i))}async function He(e,t,n,i){const{toast:l,openModal:s,closeModal:g}=i,x=!!e,_=await Wt(),{data:o}=await I.from("players").select("face").not("face","is",null),c=new Set((o||[]).map(p=>p.face).filter(Boolean));e!=null&&e.face&&c.delete(e.face);const d='<option value="">— Club —</option>'+t.map(p=>`<option value="${p.id}" ${(e==null?void 0:e.club_id)===p.id?"selected":""}>${p.encoded_name}</option>`).join(""),m=e!=null&&e.face?e.face.split("/")[0]:"",f=Object.keys(_).map(p=>`<option value="${p}" ${m===p?"selected":""}>${p}</option>`).join("");s(x?`✏️ ${e.firstname} ${e.surname_real}`:"➕ Nouveau joueur",`<div style="display:flex;gap:20px;align-items:flex-start">

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
              ${["normal","pepite","papyte","legende"].map(p=>`<option value="${p}" ${(e==null?void 0:e.rarity)===p?"selected":""}>${dt[p]}</option>`).join("")}
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
            <select id="pm-club">${d}</select>
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
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([p,r,h])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${Yt[p]};font-weight:700">${p}</label>
                <input id="${r}" type="number" min="0" max="20" value="${(e==null?void 0:e[h])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
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
                ${f}
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
          ${x?"💾 Enregistrer":"✅ Créer le joueur"}
        </button>
        </div>
      </div>
    </div>`),setTimeout(()=>{var L,a,v;let p=(e==null?void 0:e.face)||null;function r(){var R,N,G,V,J,Y,W,je,De,Ne,Pe;const E=document.getElementById("card-preview");if(!E)return;const b=((R=document.getElementById("pm-fn"))==null?void 0:R.value)||"",$=(((N=document.getElementById("pm-real"))==null?void 0:N.value)||"").toUpperCase(),y=((G=document.getElementById("pm-job"))==null?void 0:G.value)||"ATT",k=((V=document.getElementById("pm-job2"))==null?void 0:V.value)||null,A=((J=document.getElementById("pm-rarity"))==null?void 0:J.value)||"normal",S=((Y=document.getElementById("pm-country"))==null?void 0:Y.value)||"FR",C=((W=document.getElementById("pm-club"))==null?void 0:W.value)||null,D=document.getElementById("pm-club"),j=D==null?void 0:D.options[D.selectedIndex];(j==null?void 0:j.text)!=="— Club —"&&(j==null||j.text);const O=parseInt((je=document.getElementById("pm-g"))==null?void 0:je.value)||0,U=parseInt((De=document.getElementById("pm-d"))==null?void 0:De.value)||0,H=parseInt((Ne=document.getElementById("pm-m"))==null?void 0:Ne.value)||0,B=parseInt((Pe=document.getElementById("pm-a"))==null?void 0:Pe.value)||0,M=t.find(At=>At.id===C),T={firstname:b||"Prénom",surname_real:$||"NOM",job:y,job2:k||null,rarity:A,country_code:S,club_id:C,note_g:O,note_d:U,note_m:H,note_a:B,face:p||null,clubs:M?{encoded_name:M.encoded_name,logo_url:M.logo_url}:null};E.innerHTML=oe(T,{width:160});const z=document.getElementById("pm-minmax");z&&(z.style.display=["pepite","papyte"].includes(A)?"grid":"none")}function h(E){const b=document.getElementById("faces-grid"),$=document.getElementById("pm-face");if(!b||!$)return;const y=_[E]||[];if(console.log("[players] loadFacesGrid folder=",E,"files=",y.length,y.slice(0,5)),!y.length){$.innerHTML='<option value="">— Aucun visage disponible —</option>',b.innerHTML=`<p style="font-size:11px;color:#888;font-style:italic">Aucune image dans le dossier "${E}" du bucket Supabase.</p>`;return}const k=y.filter(A=>{const S=E+"/"+A;return S===p||!c.has(S)});$.innerHTML='<option value="">— Choisir un visage —</option>'+k.map(A=>{const S=E+"/"+A;return`<option value="${S}" ${p===S?"selected":""}>${A}</option>`}).join(""),b.innerHTML=k.map(A=>{const S=E+"/"+A,C=p===S,D=Tt({face:S});return`<div data-face="${S}" style="cursor:pointer;border:2px solid ${C?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${D}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),b.querySelectorAll("[data-face]").forEach(A=>{A.addEventListener("click",()=>{p=A.dataset.face;const S=document.getElementById("pm-face");S&&(S.value=p),b.querySelectorAll("[data-face]").forEach(C=>{C.style.border=`2px solid ${C.dataset.face===p?"#4fc3f7":"transparent"}`}),r()})})}const u=e!=null&&e.face?e.face.split("/")[0]:"";u&&_[u]&&(document.getElementById("pm-folder").value=u,h(u)),(L=document.getElementById("pm-folder"))==null||L.addEventListener("change",E=>{h(E.target.value)}),(a=document.getElementById("pm-face"))==null||a.addEventListener("change",E=>{p=E.target.value||null,r()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach(E=>{var b,$;(b=document.getElementById(E))==null||b.addEventListener("input",r),($=document.getElementById(E))==null||$.addEventListener("change",r)}),(v=document.getElementById("pm-save"))==null||v.addEventListener("click",()=>tn(e,x,p,n,i)),r()},50)}function en(e){const t=n=>{var i;return(i=document.getElementById(n))==null?void 0:i.value};return{firstname:(t("pm-fn")||"").trim(),surname_real:(t("pm-real")||"").trim()||"JOUEUR",country_code:t("pm-country")||"FR",club_id:t("pm-club")||null,job:t("pm-job")||"ATT",job2:t("pm-job2")||null,rarity:t("pm-rarity")||"normal",note_g:parseInt(t("pm-g"))||0,note_d:parseInt(t("pm-d"))||0,note_m:parseInt(t("pm-m"))||0,note_a:parseInt(t("pm-a"))||0,note_min:parseInt(t("pm-nmin"))||null,note_max:parseInt(t("pm-nmax"))||null,sell_price:parseInt(t("pm-price"))||0,face:e||null,ethnie:t("pm-folder")||null,is_active:!0}}async function tn(e,t,n,i,l){var f,p,r,h;const{toast:s,closeModal:g}=l,x=document.getElementById("pm-error"),_=document.getElementById("pm-save"),o=en(n);if(!o.firstname){x.textContent="Le prénom est requis.";return}if(!o.surname_real){x.textContent="Le nom est requis.";return}_.disabled=!0,_.textContent="Enregistrement…";const c=o,{error:d}=t?await I.from("players").update({...c,updated_at:new Date().toISOString()}).eq("id",e.id):await I.from("players").insert(c);if(d){x.textContent=d.message,_.disabled=!1,_.textContent=t?"💾 Enregistrer":"✅ Créer le joueur";return}s(t?"Joueur modifié ✅":"Joueur créé ✅","success"),g();const m={search:((f=document.getElementById("search-players"))==null?void 0:f.value)||"",job:((p=document.getElementById("filter-job"))==null?void 0:p.value)||"",rarity:((r=document.getElementById("filter-rarity"))==null?void 0:r.value)||"",sort:((h=document.getElementById("sort-players"))==null?void 0:h.value)||"job",clubs:window.__playersClubFilter?[...window.__playersClubFilter]:[],countries:window.__playersCountryFilter?[...window.__playersCountryFilter]:[]};ge(i,l,m)}const nn={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},ct=["rase","court","milong","long"];function an(e){const t=Ce(e);if(t==="noir")return"noir";if(t==="typ")return Math.random()<.9?"noir":"marron";if(t==="metisse")return Math.random()<.6?"noir":"marron";const n=Math.random();return n<.35?"blond":n<.75?"marron":"noir"}function on(e){return Math.random()<.05?"chauve":an(e)}const Se=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function Ce(e){return nn[e]||"blanc"}function pt(e){return on(e)}function te(e,t){return Math.floor(Math.random()*(t-e+1))+e}function X(e){return e[Math.floor(Math.random()*e.length)]}function ut(e){const t=Se.filter(n=>n!==e);return X(t)}function we(e){const t=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","GR","RO","BG","UA","RU"],n=["MA","DZ","TN","EG","LY"],i=["NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","TZ","UG","ET"],l=["JP","KR","CN","VN","TH","ID","PH","IN","PK","BD","SA","AE","IR"];return t.includes(e)||["AR","UY","CL","PE","EC","CO","MX","BR"].includes(e)?"Europeans":n.includes(e)?"North Africans":i.includes(e)?"Africans":l.includes(e)?"Asians":"Europeans"}const rn=[{min:1,max:4,pct:55},{min:5,max:10,pct:20},{min:11,max:14,pct:10},{min:15,max:17,pct:10},{min:18,max:20,pct:5}];function mt(){const e=Math.random()*100;let t=0;for(const n of rn)if(t+=n.pct,e<t)return te(n.min,n.max);return te(1,4)}function ln(){const e=Array.from({length:20},(t,n)=>n);return e.sort(()=>Math.random()-.5),new Set(e.slice(0,10))}let ce=null;function sn(e,t){return e&&(ce||(ce=ln()),ce.has(t))?te(15,20):mt()}const fe={FR:{first:["Lucas","Tom","Hugo","Théo","Antoine","Kylian","Rayan","Axel","Paul","Enzo","Léo","Mathis","Nathan","Alexis","Ethan","Maxime","Julien","Baptiste","Nicolas","Pierre","Clément","Adrien","Valentin","Dylan","Loïc","Quentin","Florian","Kevin","Corentin","Raphaël"],last:["Martin","Bernard","Petit","Dupont","Moreau","Laurent","Robert","Michel","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard","Bonnet","Rousseau","Fontaine","Chevalier","Blanc","Garnier","Boyer","Gauthier","Garcia","Perrin","Robin","Clément","Morin","Nicolas","Henry","Lemaire","Noël","Dufour","Meunier","Brun","Blanchard","Giraud","Joly","Rivière","Brunet"]},ES:{first:["Carlos","Miguel","Javier","Alejandro","Sergio","David","Diego","Pablo","Álvaro","Marcos","Adrián","Rubén","Iker","Raúl","Fernando","Roberto","Víctor","Iván","Gonzalo","Antonio","Manuel","Jesús","Josué","Rodrigo","Cristian","Héctor","Óscar","Mario","Daniel","Jorge"],last:["García","Rodríguez","Martínez","López","Sánchez","González","Pérez","Hernández","Jiménez","Díaz","Torres","Ramírez","Flores","Rivera","Gómez","Morales","Álvarez","Romero","Herrera","Medina","Aguilar","Vargas","Guzmán","Muñoz","Salazar","Soto","Contreras","Rojas","Ramos","Ortiz"]},PT:{first:["João","Pedro","Diogo","Rúben","Bruno","Tiago","André","Ricardo","Luís","Gonçalo","Nuno","Mário","Fábio","Rui","Miguel","Sérgio","Hugo","Filipe","Paulo","Vítor"],last:["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Carvalho","Gomes","Ribeiro","Araújo","Barbosa","Cardoso","Correia","Teixeira","Machado","Vieira","Monteiro","Cunha","Pinto","Melo","Barros","Freitas","Fonseca","Andrade","Castro","Neves","Figueiredo","Duarte"]},BR:{first:["Gabriel","Lucas","Mateus","Gustavo","Felipe","Rodrigo","Thiago","Rafael","Bruno","Diego","Leonardo","Eduardo","Victor","Pedro","Carlos","Alexandre","André","Paulo","Danilo","Marcelo"],last:["Silva","Santos","Oliveira","Souza","Lima","Ferreira","Costa","Nascimento","Alves","Pereira","Rodrigues","Almeida","Nunes","Melo","Barbosa","Rocha","Brito","Castro","Carvalho","Gomes","Lopes","Ramos","Mendes","Cavalcanti","Batista","Azevedo","Campos","Freitas","Reis","Andrade"]},AR:{first:["Lionel","Sergio","Rodrigo","Nicolás","Ezequiel","Gonzalo","Federico","Mauro","Pablo","Diego","Lucas","Matías","Alejandro","Maximiliano","Emiliano","Marcos","Lautaro","Ángel","Leandro","Julián"],last:["González","Rodríguez","Martínez","García","López","Pérez","Sánchez","Romero","Torres","Flores","Díaz","Gómez","Alvarez","Ruiz","Castro","Herrera","Cabrera","Medina","Ferreyra","Suárez"]},IT:{first:["Marco","Luca","Alessandro","Matteo","Davide","Andrea","Francesco","Federico","Lorenzo","Riccardo","Stefano","Simone","Roberto","Nicola","Giovanni","Antonio","Emanuele","Daniele","Alberto","Giorgio"],last:["Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Ricci","Marino","Greco","Bruno","Gallo","Conti","De Luca","Mancini","Giordano","Rizzo","Lombardi","Moretti","Fontana","Rinaldi"]},DE:{first:["Lukas","Max","Jonas","Florian","Tobias","Stefan","Markus","Sebastian","Niklas","Leon","Tim","Felix","Alexander","Philipp","Christian","Thomas","Michael","Jan","Moritz","Fabian"],last:["Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Wolf","Schröder","Neumann","Schwarz","Zimmermann","Braun","Krüger","Hofmann","Wagner","Becker","Koch","Lehmann","Kaiser"]},GB:{first:["James","Harry","Oliver","Jack","George","Charlie","William","Thomas","Alfie","Edward","Ryan","Liam","Noah","Ethan","Kyle","Jordan","Callum","Aaron","Declan","Connor"],last:["Smith","Jones","Williams","Brown","Taylor","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Walker","Wright","Robinson","White","Thompson","Hughes","Edwards","Green","Hall"]},MA:{first:["Yassine","Karim","Mehdi","Amine","Hamza","Bilal","Soufiane","Rachid","Omar","Mohammed","Zakaria","Ilyas","Ayoub","Saad","Khalid","Adil","Tarik","Hicham","Reda","Nabil"],last:["Benali","Amrani","Bouazza","Cherif","Haddad","Meziane","Belkacem","Rahmani","Saidi","Zidane","Belhadj","Tazi","Idrissi","Alaoui","Bennani","Fassi","Lahlou","Naciri","Tahiri","Zniber"]},DZ:{first:["Yacine","Riyad","Sofiane","Haris","Adem","Islam","Bilal","Omar","Nassim","Mehdi","Ryad","Zinedine","Youssef","Farid","Karim","Mourad","Walid","Anes","Ferhat","Djamel"],last:["Amrouche","Boudiaf","Cherki","Guessab","Hamdi","Jaber","Lakhal","Mahjoub","Rezki","Sahnoun","Talbi","Zerrouki","Achour","Bakri","Chaouch","Djaballah","Ferhat","Gacem","Khaldi","Larbi"]},SN:{first:["Sadio","Ismaïla","Cheikhou","Gana","Famara","Mbaye","Pape","Aliou","Moussa","Sidy","Idrissa","Lamine","Bamba","Fallou","Abdou","Diallo","Mamadou","Souleymane","Oumar","Cheikh"],last:["Diallo","Traoré","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Ndiaye","Sow","Cissé","Fofana","Keita","Sylla","Kane","Diarra","Sanogo","Baldé","Kouyaté"]},CI:{first:["Didier","Wilfried","Serge","Jonathan","Franck","Maxwel","Salomon","Gervinho","Nicolas","Maxime","Ismael","Romaric","Abdul","Cheick","Arouna","Kolo","Yaya","Geoffroy","Siaka","Adama"],last:["Drogba","Zaha","Gnagnon","Koné","Touré","Bamba","Diomandé","Konaté","Coulibaly","Fofana","Traoré","Doumbia","Sanogo","Diabaté","Kalou","Bakayoko","Gradel","Seri","Aurier","Haller"]},CM:{first:["Samuel","Alex","Karl","Fabrice","Cédric","Nicolas","Georges","André","Joël","Roger","François","Jean","Patrick","Thierry","Eric","Benjamin","Aristide","Clinton","Clinton","Stéphane"],last:["Eto'o","Song","Choupo-Moting","Aboubakar","Bassogog","Kunde","Toko","Nkoudou","Ngadeu","Oyongo","Fai","Zambo","Mokoena","Ekambi","Tchamba","Mbida","Biya","Kameni","Meyong","Webo"]},NG:{first:["Kelechi","Ahmed","Victor","John","Emmanuel","Samuel","Moses","Ola","Chukwuemeka","Odion","Sunday","Chidi","Nnamdi","Chisom","Tunde","Emeka","Obinna","Uchenna","Ifeanyi","Segun"],last:["Osimhen","Iheanacho","Musa","Onyekuru","Iwobi","Ndidi","Nwankwo","Obi","Mikel","Martins","Okocha","Yekini","Amunike","Babangida","Fash","Lawal","Onuoha","Taiwo","Ayodele","Ameobi"]},JP:{first:["Ryota","Kenji","Hiroshi","Takumi","Yuto","Daichi","Shinji","Makoto","Koji","Naoki","Yuya","Shoya","Ryo","Shu","Atsuto","Masato","Hotaru","Genki","Ko","Ritsu"],last:["Nakamura","Tanaka","Suzuki","Sato","Yamamoto","Watanabe","Ito","Yamada","Saito","Matsumoto","Inoue","Kimura","Hayashi","Shimizu","Yamazaki","Mori","Abe","Ikeda","Kato","Honda"]},KR:{first:["Heung","Son","Ji","Sung","Jae","Young","Kang","Hyun","Woo","Tae","Seung","Min","Jun","Dong","Chang","Sang","Yo","Hee","Jin","Bum"],last:["Kim","Park","Lee","Choi","Jung","Kang","Cho","Yoon","Lim","Oh","Han","Seo","Kwon","Hwang","Ahn","Yang","Shin","Yoo","Jang","Song"]},MX:{first:["Carlos","Hirving","Andrés","Javier","Miguel","Raúl","Héctor","Diego","Jorge","Luis","Rodolfo","Erick","Jonathan","Néstor","Tecatito","Chicharito","Oswaldo","Oribe","Uriel","Giovanni"],last:["Hernández","Lozano","Guardado","Vela","Morales","Jiménez","Reyes","Corona","Herrera","Rodríguez","Ochoa","Chicharito","Flores","Domínguez","Araujo","Álvarez","Pineda","Sánchez","Antuna","Meza"]},_DEFAULT_EUROPE:{first:["Stefan","Ivan","Luca","Marco","Andrei","Cristian","Bogdan","Mircea","Adrian","Florin","Dušan","Aleksandar","Nikola","Nemanja","Marko","Filip","Milan","Branislav","Radomir","Dejan"],last:["Popescu","Ionescu","Stan","Marin","Stoica","Popa","Radu","Constantin","Barbu","Dobre","Petrović","Marković","Nikolić","Jovanović","Popović","Stanković","Đorđević","Lukić","Simić","Ilić"]},_DEFAULT_AFRIQUE:{first:["Mamadou","Ibrahima","Moussa","Seydou","Boubacar","Oumar","Modibo","Adama","Bakary","Abdoulaye","Lamine","Ousmane","Sekou","Demba","Tidiane","Amadou","Issiaka","Siaka","Fode","Samba"],last:["Diallo","Traoré","Coulibaly","Koné","Doumbia","Kouyaté","Bah","Konaté","Touré","Camara","Sylla","Keita","Diakité","Sangaré","Sanou","Sidibé","Bathily","Niakaté","Dioumassi","Sissoko"]},_DEFAULT_ASIE:{first:["Wei","Ming","Jae","Van","Duc","Sorn","Ali","Hassan","Reza","Arman","Yusuf","Tariq","Faris","Khalid","Saad","Rashid","Nasser","Walid","Ziad","Adel"],last:["Zhang","Wang","Liu","Chen","Yang","Huang","Zhou","Wu","Xu","Sun","Al-Rashidi","Al-Dosari","Al-Harthi","Al-Balushi","Al-Farsi","Al-Shamsi","Al-Neyadi","Al-Breiki","Al-Hammadi","Al-Mansouri"]},_DEFAULT_AMERIQUE:{first:["James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Marcus","Jordan","Andre","Devonte","Malik","Tyrone","Jamal","Darius","DeShawn","Brandon","Cody"],last:["Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Taylor","Anderson","Jackson","White","Harris","Clark","Lewis","Walker","Hall","Allen","Young","King"]}},dn={FR:"FR",BE:"FR",CH:"FR",MC:"FR",LU:"FR",ES:"ES",MX:"MX",CO:"ES",VE:"ES",PE:"ES",CL:"ES",EC:"ES",UY:"ES",PY:"ES",BO:"ES",CR:"ES",PA:"ES",HN:"ES",GT:"ES",SV:"ES",NI:"ES",DO:"ES",CU:"ES",PT:"PT",AO:"PT",MZ:"PT",CV:"PT",BR:"BR",AR:"AR",IT:"IT",SM:"IT",DE:"DE",AT:"DE",GB:"GB",IE:"GB",AU:"GB",NZ:"GB",CA:"GB",MA:"MA",TN:"DZ",LY:"DZ",DZ:"DZ",SN:"SN",ML:"SN",GN:"SN",GW:"SN",GM:"SN",MR:"SN",CI:"CI",BF:"CI",TG:"CI",BJ:"CI",GH:"CI",CM:"CM",GA:"CM",CG:"CM",CD:"CM",NG:"NG",JP:"JP",KR:"KR",MX:"MX",PL:"_DEFAULT_EUROPE",CZ:"_DEFAULT_EUROPE",SK:"_DEFAULT_EUROPE",HU:"_DEFAULT_EUROPE",HR:"_DEFAULT_EUROPE",RS:"_DEFAULT_EUROPE",SI:"_DEFAULT_EUROPE",RO:"_DEFAULT_EUROPE",BG:"_DEFAULT_EUROPE",GR:"_DEFAULT_EUROPE",TR:"_DEFAULT_EUROPE",RU:"_DEFAULT_EUROPE",UA:"_DEFAULT_EUROPE",NL:"_DEFAULT_EUROPE",DK:"_DEFAULT_EUROPE",SE:"_DEFAULT_EUROPE",NO:"_DEFAULT_EUROPE",FI:"_DEFAULT_EUROPE",AL:"_DEFAULT_EUROPE",EG:"_DEFAULT_AFRIQUE",ZA:"_DEFAULT_AFRIQUE",KE:"_DEFAULT_AFRIQUE",ET:"_DEFAULT_AFRIQUE",TZ:"_DEFAULT_AFRIQUE",UG:"_DEFAULT_AFRIQUE",CN:"_DEFAULT_ASIE",VN:"_DEFAULT_ASIE",TH:"_DEFAULT_ASIE",ID:"_DEFAULT_ASIE",PH:"_DEFAULT_ASIE",IN:"_DEFAULT_ASIE",PK:"_DEFAULT_ASIE",BD:"_DEFAULT_ASIE",IR:"_DEFAULT_ASIE",SA:"_DEFAULT_ASIE",AE:"_DEFAULT_ASIE",QA:"_DEFAULT_ASIE",KW:"_DEFAULT_ASIE",IQ:"_DEFAULT_ASIE",SY:"_DEFAULT_ASIE",JO:"_DEFAULT_ASIE",US:"_DEFAULT_AMERIQUE"};function gt(e){return dn[e]||"_DEFAULT_EUROPE"}function ft(e){const t=gt(e),n=(fe[t]||fe._DEFAULT_EUROPE).first;return X(n)}function yt(e){const t=gt(e);return(fe[t]||fe._DEFAULT_EUROPE).last}function cn(e,t,n=new Set,i=!1){const l=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],s=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],g=new Set(s.sort(()=>Math.random()-.5).slice(0,4)),x=[...s].sort(()=>Math.random()-.5),_=new Set(x.slice(0,2)),o=new Set(x.slice(2,4)),c=10,d=l.map((p,r)=>r<c);for(let p=d.length-1;p>0;p--){const r=Math.floor(Math.random()*(p+1));[d[p],d[r]]=[d[r],d[p]]}const m=new Set;function f(p){const r=yt(p),h=r.filter(a=>!m.has(a)&&!n.has(a)),u=h.length?h:r.filter(a=>!m.has(a)),w=u.length?u:r,L=X(w);return m.add(L),L}return l.map((p,r)=>{const h=d[r]?t:ut(t),u=Ce(h),w=pt(h),L=X(ct),a=_.has(r)?"pepite":o.has(r)?"papyte":"normal",v=a==="pepite"?te(10,15):a==="papyte"?te(15,20):sn(i,r),E=g.has(r),b=E?Math.max(0,v-2):0;let $=0,y=0,k=0,A=0,S=null;p==="GK"?$=v:p==="DEF"?(y=v,E&&(k=b,S="MIL")):p==="ATT"?(A=v,E&&(k=b,S="MIL")):(k=v,E&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(y=b,S="DEF"):(A=b,S="ATT")));const C=f(h);return{job:p,job2:S,firstname:ft(h),surname_real:C,country_code:h,club_id:e,note_g:$,note_d:y,note_m:k,note_a:A,skin:u,hair:w,hair_length:L,rarity:a,sell_price:0,ethnie:we(h),_ethnie:we(h)}})}async function bt(e,t,n,i=!1){ce=null;const{data:l}=await I.from("players").select("surname_real").not("surname_real","is",null),s=new Set((l||[]).map(p=>p.surname_real).filter(Boolean)),g=cn(e,t,s,i),{data:x}=await I.from("players").select("face").not("face","is",null),_=new Set((x||[]).map(p=>p.face).filter(Boolean)),o=new Set;for(const p of g){const r=await Ae(p.country_code,new Set([..._,...o]));r&&(p.face=r,o.add(r)),delete p._ethnie}const{data:c,error:d}=await I.from("players").insert(g).select("id");if(d){console.error("[GenSquad] Erreur batch insert:",d.message,d.details),n("Erreur: "+d.message,"error");return}const m=(c||[]).map(p=>({card_type:"player",player_id:p.id}));if(m.length){const{error:p}=await I.from("cards").insert(m);p&&console.warn("[GenSquad] Erreur cartes:",p.message)}const f=(c==null?void 0:c.length)||0;console.log("[GenSquad] Créés:",f,"/",g.length),f>0?n(`${f} joueurs générés ✅`,"success"):n("Erreur génération joueurs","error")}function vt(e){return{style:e.kit_style||F.style,color1:e.kit_color1||F.color1,color2:e.kit_color2||F.color2,color3:e.kit_color3||F.color3,shorts:e.kit_shorts||F.shorts,socks:e.kit_socks||F.socks}}let pe=[];async function pn(e,t){await xe(e,t)}async function xe(e,t){const[{data:n,error:i},{data:l}]=await Promise.all([I.from("clubs").select("*").order("real_name"),I.from("players").select("club_id")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}pe=n||[];const s={};(l||[]).forEach(g=>{s[g.club_id]=(s[g.club_id]||0)+1}),un(e,t,s)}function un(e,t,n={}){const{toast:i,openModal:l,closeModal:s}=t;e.innerHTML=`
    <div style="display:flex;gap:16px;height:calc(100vh - 56px);overflow:hidden;padding:16px">

      <!-- Colonne gauche : liste des clubs -->
      <div style="width:300px;flex-shrink:0;display:flex;flex-direction:column;gap:10px">
        <div style="display:flex;gap:8px;align-items:center">
          <input id="search-clubs" placeholder="🔍 Rechercher…" style="flex:1">
          <button class="btn btn-primary btn-sm" id="add-club-btn" style="white-space:nowrap">+ Club</button>
        </div>
        <div id="clubs-list" style="flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:6px"></div>
      </div>

      <!-- Colonne droite : fiche club -->
      <div id="club-panel" class="card-panel" style="flex:1;overflow-y:auto;display:flex;align-items:center;justify-content:center">
        <div style="color:var(--tile-fg-dim);text-align:center;padding:40px">← Sélectionnez un club ou créez-en un nouveau</div>
      </div>
    </div>`,g(pe),document.getElementById("search-clubs").addEventListener("input",x=>{const _=x.target.value.toLowerCase();g(pe.filter(o=>o.real_name.toLowerCase().includes(_)||o.encoded_name.toLowerCase().includes(_)))}),document.getElementById("add-club-btn").addEventListener("click",()=>Ge(null,e,t));function g(x){const _=document.getElementById("clubs-list");if(!x.length){_.innerHTML='<p style="color:var(--tile-fg-dim);padding:20px;text-align:center">Aucun club.</p>';return}const o={};x.forEach(m=>{const f=m.country_code||"—";o[f]||(o[f]=[]),o[f].push(m)});const c=Object.keys(o).sort(),d=m=>{const f=vt(m),p=m.logo_url?`<img src="${m.logo_url}" style="width:36px;height:36px;object-fit:contain;border-radius:8px;flex-shrink:0">`:`<div style="width:36px;height:36px;background:linear-gradient(135deg,${f.color1},${f.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:900;flex-shrink:0">${m.encoded_name.slice(0,3)}</div>`,r=n[m.id]||0;return`
        <div class="club-row" data-club-id="${m.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:10px;cursor:pointer;background:var(--tile-bg);border:1px solid var(--tile-border);transition:background .15s">
          ${p}
          <img src="https://flagsapi.com/${m.country_code}/flat/24.png" style="width:18px;height:13px;object-fit:cover;border-radius:2px;flex-shrink:0" onerror="this.style.display='none'">
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:12px;color:var(--tile-fg-on-page);font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${m.encoded_name}</div>
            <div style="font-size:10px;color:${r===0?"#e67e22":"var(--tile-fg-dim)"}">${r===0?"⚠️ 0 joueur":`👥 ${r}`}</div>
          </div>
          <button class="btn-del-club" data-del="${m.id}"
            style="width:22px;height:22px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;flex-shrink:0"
            onclick="event.stopPropagation()">✕</button>
        </div>`};_.innerHTML=c.map(m=>`
      <div style="display:flex;align-items:center;gap:8px;padding:8px 4px 4px;margin-top:6px">
        ${m!=="—"?`<img src="https://flagsapi.com/${m}/flat/24.png" style="width:20px;height:15px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">`:'<span style="font-size:14px">🌍</span>'}
        <span style="font-size:11px;font-weight:900;color:var(--tile-fg-dim);letter-spacing:1px">${m}</span>
        <span style="font-size:11px;color:var(--tile-fg-dim);background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:10px;padding:1px 8px">${o[m].length}</span>
        <div style="flex:1;height:1px;background:var(--tile-border)"></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:4px">
        ${o[m].map(d).join("")}
      </div>
    `).join(""),_.querySelectorAll(".club-row").forEach(m=>{m.addEventListener("click",()=>{const f=pe.find(p=>p.id===m.dataset.clubId);f&&Ge(f,e,t),_.querySelectorAll(".club-row").forEach(p=>p.style.background="var(--tile-bg)"),m.style.background="rgba(26,107,60,0.18)"})}),_.querySelectorAll(".btn-del-club").forEach(m=>{m.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:f}=await I.from("clubs").delete().eq("id",m.dataset.del);f?i(f.message,"error"):(i("Club supprimé","success"),xe(e,t))})})}}function mn(e){var j,O,U,H;const{openModal:t,closeModal:n}=e;let i=6;const l=36;function s(B){return new Array(B*B).fill("#ffffff")}let g=s(i),x="OP",_="#D4A017",o=50,c=0,d=0,m="",f="#ffffff",p=25,r=0,h=35,u=new Set,w=null;function L(){const B=l*i;let M="";for(let z=0;z<i;z++)for(let R=0;R<i;R++){const N=z*i+R;M+=`<rect x="${R*l}" y="${z*l}" width="${l}" height="${l}" fill="${g[N]}"/>`}const T=(z,R,N,G,V)=>{if(!z)return"";const J=B/2+G/100*B,Y=B/2+V/100*B,W=N/100*B*(z.length>3?3/z.length:1);return`<text x="${J}" y="${Y}" text-anchor="middle" dominant-baseline="central"
        font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="${W}"
        fill="${R}">${z}</text>`};return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${B} ${B}">
      ${M}
      ${T(x,_,o,c,d)}
      ${T(m,f,p,r,h)}
    </svg>`}function a(B){return"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(B)))}const v=(B,M,T,z,R,N,G)=>`
    <div style="background:#f7f7f7;border-radius:10px;padding:12px;display:flex;flex-direction:column;gap:8px">
      <div style="font-weight:700;font-size:12px;color:#333">${M}</div>
      <input id="flag-text${B}" maxlength="20" value="${T}" placeholder="${B===2?"Vide = désactivé":""}" style="font-weight:900">
      <div style="display:flex;align-items:center;gap:8px">
        <label style="margin:0;font-size:11px;white-space:nowrap">Couleur</label>
        <input type="color" id="flag-text${B}-color" value="${z}" style="width:40px;height:28px;padding:2px;cursor:pointer">
      </div>
      <div>
        <label style="font-size:10px">Taille (<span id="flag-size${B}-val">${R}</span>%)</label>
        <input type="range" id="flag-text${B}-size" min="5" max="120" value="${R}" style="width:100%">
      </div>
      <div>
        <label style="font-size:10px">Position H (<span id="flag-x${B}-val">${N}</span>)</label>
        <input type="range" id="flag-text${B}-x" min="-50" max="50" value="${N}" style="width:100%">
      </div>
      <div>
        <label style="font-size:10px">Position V (<span id="flag-y${B}-val">${G}</span>)</label>
        <input type="range" id="flag-text${B}-y" min="-50" max="50" value="${G}" style="width:100%">
      </div>
    </div>
  `,E=`
    <div id="flag-builder-wide"></div>
    <style>
      .modal:has(#flag-builder-wide) { max-width: 980px !important; }
    </style>
    <div style="display:grid;grid-template-columns:200px 1fr 1fr;gap:16px;margin-bottom:16px">
      <div style="display:flex;flex-direction:column;gap:10px;align-items:center">
        <div id="flag-preview" style="width:180px;height:180px;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.15)"></div>
        <div style="width:100%">
          <label style="font-size:11px">TAILLE DE LA GRILLE</label>
          <div style="display:flex;gap:4px">
            ${[6,9,12].map(B=>`<button type="button" class="btn ${B===i?"btn-primary":"btn-ghost"} btn-sm flag-grid-size" data-n="${B}" style="flex:1;padding:6px 4px">${B}×${B}</button>`).join("")}
          </div>
        </div>
      </div>

      ${v(1,"TEXTE 1 (20 caractères max)",x,_,o,c,d)}
      ${v(2,"TEXTE 2 — optionnel (20 caractères max)",m,f,p,r,h)}
    </div>

    <div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;flex-wrap:wrap;gap:8px">
        <label style="margin:0;font-size:12px">Couleurs des ${i*i} carrés — clique un carré (Ctrl/Shift+clic pour en sélectionner plusieurs), puis Ctrl+C / Ctrl+V pour copier-coller la couleur sur toute la sélection</label>
        <div style="display:flex;gap:6px;align-items:center">
          <button type="button" id="flag-copy-btn" class="btn btn-ghost btn-sm" disabled>📋 Copier</button>
          <button type="button" id="flag-paste-btn" class="btn btn-ghost btn-sm" disabled>📥 Coller</button>
          <span id="flag-clipboard-preview" style="display:none;align-items:center;gap:6px;font-size:12px;color:#666">
            Copié : <span id="flag-clipboard-swatch" style="display:inline-block;width:16px;height:16px;border-radius:4px;border:1px solid #ccc"></span>
          </span>
        </div>
      </div>
      <div id="flag-squares-grid" style="display:grid;gap:2px;justify-content:center"></div>
    </div>
  `;t(`🎨 Générer un logo (${i}×${i})`,E,`
    <button id="flag-cancel" class="btn btn-ghost">Annuler</button>
    <button id="flag-use" class="btn btn-primary">✅ Utiliser ce logo</button>
  `);function $(){const B=document.getElementById("flag-squares-grid");if(!B)return;const M=i>=12?30:i>=9?36:44;B.style.gridTemplateColumns=`repeat(${i}, ${M}px)`,B.innerHTML=g.map((T,z)=>`
      <div class="flag-square" data-i="${z}" style="width:${M}px;height:${M}px;border-radius:4px;background:${T};cursor:pointer;
        box-sizing:border-box;border:${u.has(z)?"3px solid #1A6B3C":"1px solid rgba(0,0,0,0.15)"}"></div>
    `).join(""),B.querySelectorAll(".flag-square").forEach(T=>{T.addEventListener("click",z=>{const R=parseInt(T.dataset.i);z.ctrlKey||z.metaKey||z.shiftKey?u.has(R)?u.delete(R):u.add(R):u=new Set([R]),$(),y()}),T.addEventListener("dblclick",()=>{const z=parseInt(T.dataset.i),R=document.createElement("input");R.type="color",R.value=g[z],R.style.position="fixed",R.style.opacity="0",document.body.appendChild(R),R.addEventListener("input",()=>{g[z]=R.value,$(),C()}),R.addEventListener("change",()=>R.remove()),R.click()})})}function y(){const B=document.getElementById("flag-copy-btn"),M=document.getElementById("flag-paste-btn");B.disabled=u.size===0,M.disabled=u.size===0||w===null}function k(){if(u.size===0)return;const B=[...u][0];w=g[B];const M=document.getElementById("flag-clipboard-preview"),T=document.getElementById("flag-clipboard-swatch");M&&(M.style.display="inline-flex"),T&&(T.style.background=w),y()}function A(){u.size===0||w===null||(u.forEach(B=>{g[B]=w}),$(),C())}(j=document.getElementById("flag-copy-btn"))==null||j.addEventListener("click",k),(O=document.getElementById("flag-paste-btn"))==null||O.addEventListener("click",A);function S(B){if(!document.getElementById("flag-squares-grid")){document.removeEventListener("keydown",S);return}!(B.ctrlKey||B.metaKey)||u.size===0||(B.key==="c"||B.key==="C"?(B.preventDefault(),k()):(B.key==="v"||B.key==="V")&&(B.preventDefault(),A()))}document.addEventListener("keydown",S),document.querySelectorAll(".flag-grid-size").forEach(B=>{B.addEventListener("click",()=>{const M=parseInt(B.dataset.n);if(M===i)return;i=M,g=s(i),u=new Set,w=null;const T=document.getElementById("flag-clipboard-preview");T&&(T.style.display="none"),$(),y(),C(),document.querySelectorAll(".flag-grid-size").forEach(z=>{z.classList.toggle("btn-primary",parseInt(z.dataset.n)===i),z.classList.toggle("btn-ghost",parseInt(z.dataset.n)!==i)})})});function C(){const B=document.getElementById("flag-preview");B&&(B.innerHTML=L())}$(),y(),C();function D(B){document.getElementById(`flag-text${B}`).addEventListener("input",M=>{const T=M.target.value.slice(0,20);B===1?x=T:m=T,C()}),document.getElementById(`flag-text${B}-color`).addEventListener("input",M=>{B===1?_=M.target.value:f=M.target.value,C()}),document.getElementById(`flag-text${B}-size`).addEventListener("input",M=>{const T=parseInt(M.target.value);B===1?o=T:p=T,document.getElementById(`flag-size${B}-val`).textContent=T,C()}),document.getElementById(`flag-text${B}-x`).addEventListener("input",M=>{const T=parseInt(M.target.value);B===1?c=T:r=T,document.getElementById(`flag-x${B}-val`).textContent=T,C()}),document.getElementById(`flag-text${B}-y`).addEventListener("input",M=>{const T=parseInt(M.target.value);B===1?d=T:h=T,document.getElementById(`flag-y${B}-val`).textContent=T,C()})}D(1),D(2),(U=document.getElementById("flag-cancel"))==null||U.addEventListener("click",()=>n()),(H=document.getElementById("flag-use"))==null||H.addEventListener("click",()=>{const B=a(L()),M=document.getElementById("m-logo-url-current");M&&(M.value=B);const T=document.getElementById("logo-preview");T&&(T.innerHTML=`<img src="${B}" style="width:100%;height:100%;object-fit:contain">`),n()})}async function Ge(e,t,n){var h,u,w,L,a,v,E;const{toast:i}=n,l=!!e,s=e?vt(e):{...F},g=document.getElementById("club-panel");if(!g)return;const x=Object.entries(Fe).map(([b,$])=>`<option value="${b}" ${s.style===b?"selected":""}>${$.label}</option>`).join(""),_=Se.map(b=>`<option value="${b}" ${((e==null?void 0:e.country_code)||"FR")===b?"selected":""}>${b}</option>`).join("");g.style.display="block",g.style.alignItems="",g.style.justifyContent="",g.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <h3 style="font-size:17px;font-weight:900;color:var(--tile-fg-on-page)">${l?`✏️ ${e.real_name}`:"➕ Nouveau club"}</h3>
      ${l?'<button id="btn-gen-squad-panel" class="btn btn-primary btn-sm">⚽ Générer joueurs</button>':""}
    </div>

    <div style="display:flex;flex-direction:column;gap:14px;max-width:640px">
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
            ${_}
          </select>
        </div>
      </div>

      <!-- Logo : upload de fichier, plus une URL -->
      <div class="form-group">
        <label>Logo du club</label>
        <div style="display:flex;align-items:center;gap:12px">
          <div id="logo-preview" style="width:56px;height:56px;border-radius:10px;background:var(--tile-bg);border:1.5px solid var(--tile-border);display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0">
            ${e!=null&&e.logo_url?`<img src="${e.logo_url}" style="width:100%;height:100%;object-fit:contain">`:'<span style="font-size:22px;opacity:.4">🏟️</span>'}
          </div>
          <div style="flex:1">
            <input type="file" id="m-logo-file" accept="image/png,image/jpeg,image/webp,image/svg+xml">
            <div style="font-size:11px;color:var(--tile-fg-dim);margin-top:4px">PNG/JPG/WEBP/SVG — remplace le logo actuel si un fichier est choisi</div>
            <button type="button" id="m-open-flag-builder" class="btn btn-ghost btn-sm" style="margin-top:8px">🎨 Générer un logo (6×6)</button>
          </div>
        </div>
        <input type="hidden" id="m-logo-url-current" value="${(e==null?void 0:e.logo_url)||""}">
      </div>

      <!-- Tenue -->
      <div style="border-top:1px solid var(--tile-border);padding-top:12px">
        <div style="font-weight:700;font-size:13px;margin-bottom:10px;color:var(--tile-fg-on-page)">👕 Tenue</div>
        <div style="display:flex;gap:12px;align-items:flex-start;flex-wrap:wrap">
          <div style="flex:1;min-width:200px;display:flex;flex-direction:column;gap:8px">
            <div class="form-group">
              <label>Style</label>
              <select id="m-kit-style" style="width:100%">${x}</select>
            </div>
            ${[["Couleur 1","m-kit-color1",s.color1,!1],["Couleur 2","m-kit-color2",s.color2,!1],["Couleur 3","m-kit-color3",s.color3,!0],["Short","m-kit-shorts",s.shorts,!1],["Chaussettes","m-kit-socks",s.socks,!1]].map(([b,$,y,k])=>`
              <div class="form-group" id="wrap-${$}" ${k?'style="display:none"':""}>
                <label>${b}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${$}" value="${y||"#000000"}" style="width:38px;height:32px;padding:2px;border:1px solid var(--tile-border);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${$}-txt" value="${y||"#000000"}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>`).join("")}
          </div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div id="kit-preview-wrap" style="background:#f0f0f0;border-radius:12px;padding:14px;border:1.5px solid var(--tile-border);min-width:60px;text-align:center"></div>
            <div style="font-size:10px;color:var(--tile-fg-dim)">Aperçu</div>
          </div>
        </div>
      </div>

      ${l?"":`
      <div style="border-top:1px solid var(--tile-border);padding-top:12px;display:flex;flex-direction:column;gap:8px">
        <div style="font-weight:700;font-size:13px;margin-bottom:2px;color:var(--tile-fg-on-page)">⚡ Génération automatique</div>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;padding:8px;background:rgba(26,107,60,0.1);border-radius:8px;border:1px solid rgba(26,107,60,0.3);color:var(--tile-fg-on-page)">
          <input type="checkbox" id="m-gen-stadium" checked style="width:16px;height:16px">
          🏟️ Créer la carte Stade du club automatiquement
        </label>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;padding:8px;background:rgba(26,107,60,0.1);border-radius:8px;border:1px solid rgba(26,107,60,0.3);color:var(--tile-fg-on-page)">
          <input type="checkbox" id="m-gen-squad" style="width:16px;height:16px">
          ⚽ Générer 20 joueurs (2 GK · 8 DEF · 6 MIL · 4 ATT)
        </label>
        <label id="m-gen-strong-label" style="display:none;align-items:center;gap:8px;font-size:13px;cursor:pointer;padding:8px;background:rgba(212,160,23,0.1);border-radius:8px;border:1px solid rgba(212,160,23,0.4);margin-left:12px;color:var(--tile-fg-on-page)">
          <input type="checkbox" id="m-gen-strong" style="width:16px;height:16px;accent-color:#D4A017">
          💪 Équipe Forte <span style="font-size:11px;color:var(--tile-fg-dim);font-weight:400">(10 joueurs note 15–20 garantis)</span>
        </label>
      </div>`}

      <div id="m-error" style="color:#ff6b6b;font-size:13px;min-height:16px"></div>
      <button class="btn btn-primary" id="m-save" style="width:100%;padding:14px;font-size:15px">
        ${l?"💾 Enregistrer":"✅ Créer le club"}
      </button>
    </div>

    ${l?`
    <div style="border-top:1px solid var(--tile-border);margin-top:24px;padding-top:20px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <h4 style="font-size:14px;font-weight:900;color:var(--tile-fg-on-page)">🃏 Joueurs du club (<span id="club-players-count">…</span>)</h4>
        <button id="btn-gen-one-player" class="btn btn-primary btn-sm">➕ Générer 1 joueur</button>
      </div>
      <div id="club-players-grid" style="display:flex;flex-wrap:wrap;gap:10px"></div>
    </div>`:""}
  `,(h=document.getElementById("m-logo-file"))==null||h.addEventListener("change",b=>{var k;const $=(k=b.target.files)==null?void 0:k[0];if(!$)return;const y=new FileReader;y.onload=()=>{document.getElementById("logo-preview").innerHTML=`<img src="${y.result}" style="width:100%;height:100%;object-fit:contain">`},y.readAsDataURL($)}),(u=document.getElementById("m-open-flag-builder"))==null||u.addEventListener("click",()=>{mn(n)}),ae();function o(){var k,A;const b=((k=document.getElementById("m-kit-style"))==null?void 0:k.value)||"uni",$=((A=Fe[b])==null?void 0:A.colors)===3,y=document.getElementById("wrap-m-kit-color3");y&&(y.style.display=$?"":"none")}o(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(b=>{const $=document.getElementById(b),y=document.getElementById(b+"-txt");!$||!y||($.addEventListener("input",()=>{y.value=$.value,ae()}),y.addEventListener("input",()=>{const k=y.value.trim();/^#[0-9a-fA-F]{6}$/.test(k)&&($.value=k,ae())}),y.addEventListener("change",()=>{let k=y.value.trim();k.startsWith("#")||(k="#"+k),/^#[0-9a-fA-F]{6}$/.test(k)&&($.value=k,y.value=k,ae())}))}),(w=document.getElementById("m-kit-style"))==null||w.addEventListener("change",()=>{o(),ae()});const c=document.getElementById("m-real"),d=document.getElementById("m-encoded");function m(){if(!c||!d||d.value)return;const b=c.value.trim().split(/\s+/),$=b.length===1?b[0].toUpperCase().slice(0,6):b.filter(y=>y.length>2).map(y=>y[0].toUpperCase()).join("")||b[0].toUpperCase().slice(0,4);d.value=$}c==null||c.addEventListener("input",m),(L=document.getElementById("auto-encode-btn"))==null||L.addEventListener("click",()=>{d&&(d.value=""),m()}),(a=document.getElementById("m-save"))==null||a.addEventListener("click",()=>xn(e,l,t,n));const f=document.getElementById("m-gen-squad"),p=document.getElementById("m-gen-strong-label");function r(){if(p&&(p.style.display=f!=null&&f.checked?"flex":"none",!(f!=null&&f.checked))){const b=document.getElementById("m-gen-strong");b&&(b.checked=!1)}}f==null||f.addEventListener("change",r),r(),(v=document.getElementById("btn-gen-squad-panel"))==null||v.addEventListener("click",()=>{gn(e,n,t)}),(E=document.getElementById("btn-gen-one-player"))==null||E.addEventListener("click",()=>{yn(e,n)}),l&&Te(e.id)}async function Te(e){const{data:t}=await I.from("players").select("*, clubs(encoded_name, logo_url, kit_style, kit_color1, kit_color2, kit_color3, kit_shorts, kit_socks)").eq("club_id",e).order("surname_real"),n=document.getElementById("club-players-grid"),i=document.getElementById("club-players-count");if(i&&(i.textContent=(t||[]).length),!!n){if(!(t!=null&&t.length)){n.innerHTML='<div style="color:var(--tile-fg-dim);padding:20px;font-size:13px">Aucun joueur dans ce club.</div>';return}n.innerHTML=t.map(l=>oe(l,{width:100})).join("")}}function gn(e,t,n){const{openModal:i,closeModal:l,toast:s}=t;i(`⚽ Générer — ${e.real_name}`,`<div style="display:flex;flex-direction:column;gap:14px">
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
    </div>`),setTimeout(()=>{var g,x;(g=document.getElementById("qg-cancel"))==null||g.addEventListener("click",()=>l()),(x=document.getElementById("qg-ok"))==null||x.addEventListener("click",async()=>{var o;const _=((o=document.getElementById("qg-strong"))==null?void 0:o.checked)??!1;l(),s("Génération en cours…","info"),await bt(e.id,e.country_code,s,_),s("Effectif généré ✅","success"),Te(e.id),xe(n,t)})},50)}const xt=["GK","DEF","MIL","ATT"],fn=[{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}];function yn(e,t){const{openModal:n,closeModal:i,toast:l}=t,s=Se.map(o=>`<option value="${o}">${o}</option>`).join(""),g=o=>xt.map(c=>`<option value="${c}" ${c===o?"selected":""}>${c}</option>`).join(""),x=`
    <div style="display:flex;flex-direction:column;gap:14px">
      <div style="display:flex;gap:10px">
        <label style="flex:1;display:flex;align-items:center;gap:8px;padding:12px;border-radius:10px;border:1.5px solid var(--gray-200);cursor:pointer">
          <input type="radio" name="gen-one-mode" value="random" checked style="width:16px;height:16px">
          <span style="font-weight:700">🎲 Aléatoire</span>
        </label>
        <label style="flex:1;display:flex;align-items:center;gap:8px;padding:12px;border-radius:10px;border:1.5px solid var(--gray-200);cursor:pointer">
          <input type="radio" name="gen-one-mode" value="custom" style="width:16px;height:16px">
          <span style="font-weight:700">🎛️ Personnalisé</span>
        </label>
      </div>

      <div id="gen-one-custom-fields" style="display:none;flex-direction:column;gap:12px;background:#f7f7f7;border-radius:10px;padding:14px">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label>POSTE 1</label>
            <select id="gen-one-job1">${g("MIL")}</select>
          </div>
          <div>
            <label>POSTE 2 (optionnel)</label>
            <select id="gen-one-job2">
              <option value="">— Aucun —</option>
              ${g(null)}
            </select>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label>RARETÉ</label>
            <select id="gen-one-rarity">
              ${fn.map(o=>`<option value="${o.value}">${o.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label>PAYS</label>
            <select id="gen-one-country">
              <option value="">— Aléatoire —</option>
              ${s}
            </select>
          </div>
        </div>
      </div>
    </div>
  `;n(`➕ Générer un joueur — ${e.real_name}`,x,`
    <button id="gen-one-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gen-one-ok" class="btn btn-primary">➕ Générer</button>
  `),setTimeout(()=>{var o,c;document.querySelectorAll('input[name="gen-one-mode"]').forEach(d=>{d.addEventListener("change",()=>{document.getElementById("gen-one-custom-fields").style.display=d.value==="custom"&&d.checked?"flex":"none"})}),(o=document.getElementById("gen-one-cancel"))==null||o.addEventListener("click",()=>i()),(c=document.getElementById("gen-one-ok"))==null||c.addEventListener("click",async()=>{var p,r,h,u,w;const d=((p=document.querySelector('input[name="gen-one-mode"]:checked'))==null?void 0:p.value)||"random",m=document.getElementById("gen-one-ok");m.disabled=!0,m.textContent="⏳ Génération…";const f={};d==="custom"&&(f.job=((r=document.getElementById("gen-one-job1"))==null?void 0:r.value)||null,f.job2=((h=document.getElementById("gen-one-job2"))==null?void 0:h.value)||null,f.rarity=((u=document.getElementById("gen-one-rarity"))==null?void 0:u.value)||null,f.country=((w=document.getElementById("gen-one-country"))==null?void 0:w.value)||null);try{await bn(e,f),l("Joueur généré ✅","success"),i(),Te(e.id)}catch(L){l("Erreur : "+L.message,"error"),m.disabled=!1,m.textContent="➕ Générer"}})},50)}async function bn(e,t={}){const n=t.country||(Math.random()<.5?e.country_code:ut(e.country_code)),i=t.job||X(xt),l=t.job2||null,s=t.rarity||(()=>{const A=Math.random()*100;return A<1.5?"legende":A<3?"pepite":A<4.5?"papyte":"normal"})(),g=s==="pepite"?te(10,15):s==="papyte"?te(15,20):mt(),x=l?Math.max(0,g-2):0;let _=0,o=0,c=0,d=0;i==="GK"&&(_=g),i==="DEF"&&(o=g),i==="MIL"&&(c=g),i==="ATT"&&(d=g),l==="GK"&&(_=x),l==="DEF"&&(o=x),l==="MIL"&&(c=x),l==="ATT"&&(d=x);const m=Ce(n),f=pt(n),p=X(ct),{data:r}=await I.from("players").select("surname_real").not("surname_real","is",null),h=new Set((r||[]).map(A=>A.surname_real).filter(Boolean)),u=yt(n),w=u.filter(A=>!h.has(A)),L=X(w.length?w:u),a={job:i,job2:l,firstname:ft(n),surname_real:L,country_code:n,club_id:e.id,note_g:_,note_d:o,note_m:c,note_a:d,skin:m,hair:f,hair_length:p,rarity:s,sell_price:0,ethnie:we(n)},{data:v}=await I.from("players").select("face").not("face","is",null),E=new Set((v||[]).map(A=>A.face).filter(Boolean)),b=await Ae(n,E);b&&(a.face=b);const{data:$,error:y}=await I.from("players").insert(a).select("id").single();if(y)throw y;const{error:k}=await I.from("cards").insert({card_type:"player",player_id:$.id});k&&console.warn("[GenOnePlayer] Erreur carte:",k.message)}function ht(){var e,t,n,i,l,s;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((t=document.getElementById("m-kit-color1"))==null?void 0:t.value)||"#1A6B3C",color2:((n=document.getElementById("m-kit-color2"))==null?void 0:n.value)||"#ffffff",color3:((i=document.getElementById("m-kit-color3"))==null?void 0:i.value)||"#000000",shorts:((l=document.getElementById("m-kit-shorts"))==null?void 0:l.value)||"#111111",socks:((s=document.getElementById("m-kit-socks"))==null?void 0:s.value)||"#ffffff"}}function ae(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=zt(ht(),"panel"))}async function vn(e,t){const n=(e.name.split(".").pop()||"png").toLowerCase(),i=`clubs/${t||"new"}-${Date.now()}.${n}`,{error:l}=await I.storage.from("assets").upload(i,e,{upsert:!0,cacheControl:"3600"});if(l)throw l;const{data:s}=I.storage.from("assets").getPublicUrl(i);return s.publicUrl}async function xn(e,t,n,i){var L,a,v,E,b,$,y,k,A;const{toast:l}=i,s=document.getElementById("m-error"),g=document.getElementById("m-save"),x=(L=document.getElementById("m-real"))==null?void 0:L.value.trim(),_=(a=document.getElementById("m-encoded"))==null?void 0:a.value.trim().toUpperCase(),o=(v=document.getElementById("m-country"))==null?void 0:v.value.trim().toUpperCase(),c=((b=(E=document.getElementById("m-logo-file"))==null?void 0:E.files)==null?void 0:b[0])||null,d=(($=document.getElementById("m-logo-url-current"))==null?void 0:$.value)||null,m=((y=document.getElementById("m-gen-stadium"))==null?void 0:y.checked)??!1,f=((k=document.getElementById("m-gen-squad"))==null?void 0:k.checked)??!1,p=((A=document.getElementById("m-gen-strong"))==null?void 0:A.checked)??!1,r=ht();if(!x){s.textContent="Le nom du club est requis.";return}if(!_){s.textContent="Le nom encodé est requis.";return}if(!o){s.textContent="Le pays est requis.";return}g.disabled=!0,g.textContent="Enregistrement…";let h=d;if(c)try{g.textContent="📤 Envoi du logo…",h=await vn(c,e==null?void 0:e.id)}catch(S){s.textContent="Erreur upload logo : "+S.message,g.disabled=!1,g.textContent=t?"💾 Enregistrer":"✅ Créer le club";return}const u={real_name:x,encoded_name:_,country_code:o,logo_url:h,kit_style:r.style,kit_color1:r.color1,kit_color2:r.color2,kit_color3:r.color3,kit_shorts:r.shorts,kit_socks:r.socks};let w=e==null?void 0:e.id;if(t){const{error:S}=await I.from("clubs").update(u).eq("id",w);if(S){s.textContent=S.message,g.disabled=!1,g.textContent="💾 Enregistrer";return}}else{const{data:S,error:C}=await I.from("clubs").insert(u).select().single();if(C){s.textContent=C.message,g.disabled=!1,g.textContent="✅ Créer le club";return}if(w=S.id,m){g.textContent="🏟️ Création du stade…";const{data:D,error:j}=await I.from("stadium_definitions").insert({name:`Stade de ${x}`,club_id:w,country_code:null}).select().single();j?console.warn("[Stadium] Erreur def stade:",j.message):D&&await I.from("cards").insert({card_type:"stadium",stadium_id:D.id})}f&&(g.textContent="⚽ Génération des joueurs…",await bt(w,o,l,p))}l(t?"Club modifié ✅":"Club créé ✅","success"),xe(n,i)}const hn=["normal","pepite","papyte","legende"],Ke=["GK","DEF","MIL","ATT"],En=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let ee={...q},ue=[];async function _n(e,{toast:t}){const{data:n}=await I.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");ue=n||[],ee={...q},e.innerHTML=kn(ue),$n(e,ue,t),K()}function Ve(){var n;const e=((n=document.getElementById("cb-surname-real"))==null?void 0:n.value)||"",t=document.getElementById("cb-surname-enc");t&&(t.value=ve(e))}function wn(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=ue.find(i=>String(i.id)===String(e));return t?{style:t.kit_style||F.style,color1:t.kit_color1||F.color1,color2:t.kit_color2||F.color2,shorts:t.kit_shorts||F.shorts,socks:t.kit_socks||F.socks}:{...F}}function K(){var m,f,p,r;const e=h=>{var u;return((u=document.getElementById(h))==null?void 0:u.value)||""},t={firstname:e("cb-firstname"),surname_real:e("cb-surname-enc")||ve(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((f=(m=document.getElementById("cb-club"))==null?void 0:m.selectedOptions[0])==null?void 0:f.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=wn(),i=document.getElementById("cb-club"),l=((r=(p=i==null?void 0:i.selectedOptions[0])==null?void 0:p.dataset)==null?void 0:r.logo)||null,s=lt(ee,n,120),g=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`,x=Dt(t,{portraitUrl:g,clubLogoUrl:l,showNotes:!0}),_=document.getElementById("card-preview");_&&(_.innerHTML=x);const o=document.getElementById("avatar-preview-wrap");o&&(o.innerHTML=s);const c=e("cb-surname-real"),d=document.getElementById("encode-summary");d&&c&&(d.textContent=`${e("cb-firstname")} ${c} → ${e("cb-firstname")} ${t.surname_real}`)}function Et(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};ee={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function $n(e,t,n){var l,s,g,x,_;e.querySelectorAll("input,select").forEach(o=>{o.addEventListener("input",K),o.addEventListener("change",K)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(o=>{var c;(c=document.getElementById(o))==null||c.addEventListener("change",()=>{Et(),K()})}),(l=document.getElementById("cb-surname-real"))==null||l.addEventListener("input",()=>{Ve(),K()}),(s=document.getElementById("btn-encode"))==null||s.addEventListener("click",()=>{Ve(),K()}),(g=document.getElementById("cb-club"))==null||g.addEventListener("change",K),(x=document.getElementById("btn-save-player"))==null||x.addEventListener("click",()=>In(n)),(_=document.getElementById("btn-reset"))==null||_.addEventListener("click",()=>{e.querySelectorAll("input").forEach(o=>o.value=""),e.querySelectorAll("select").forEach(o=>o.selectedIndex=0),ee={...q},i.forEach(o=>{const c=o.replace("av-",""),d=document.getElementById(o);d&&(d.value=q[c]||"")}),K()})}async function In(e){const t=g=>{var x;return((x=document.getElementById(g))==null?void 0:x.value)||""},n=t("cb-surname-real").trim(),i=t("cb-surname-enc").trim()||ve(n);if(!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}Et();const l={firstname:t("cb-firstname").trim(),surname_real:n,surname_real:i,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:ee,skin:ee.skin||"blanc",hair:ee.hairColor||"marron",hair_length:"court"},{error:s}=await I.from("players").insert(l);if(s){e("Erreur: "+s.message,"error");return}e(`✅ Joueur "${l.firstname} ${l.surname_real}" enregistré !`,"success")}function kn(e){const t=En.map(([o,c])=>`<option value="${o}">${c} (${o})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(o=>`<option value="${o.id}" data-logo="${o.logo_url||""}">${o.encoded_name}</option>`).join(""),i=Ke.map(o=>`<option value="${o}">${o}</option>`).join(""),l='<option value="">Aucun</option>'+Ke.map(o=>`<option value="${o}">${o}</option>`).join(""),s=hn.map(o=>`<option value="${o}">${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join(""),g=(o,c,d)=>Object.entries(c).map(([m,f])=>`<option value="${m}" ${m===(d||"")?"selected":""}>${f.label}</option>`).join(""),x=Object.keys(Mt).map(o=>`<option value="${o}" ${o===q.skin?"selected":""}>${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join(""),_=Object.keys(Rt).map(o=>`<option value="${o}" ${o===q.hairColor?"selected":""}>${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join("");return`
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
          <div><label>Poste secondaire</label><select id="cb-job2">${l}</select></div>
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
          ${["normal","pepite","papyte","legende"].map(o=>`
            <div style="background:${jt[o]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
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
              <select id="av-skin">${x}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${g("av-hair",Nt,q.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${_}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${g("av-eyebrows",Pt,q.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${g("av-eyes",Ft,q.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${g("av-nose",Ot,q.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${g("av-mouth",qt,q.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${g("av-beard",Ut,q.beard)}</select>
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
  `}const Ln=2*60*1e3;function ne(e){return e.last_seen?Date.now()-new Date(e.last_seen).getTime()<Ln:!1}async function $e(e,{toast:t}){const[{data:n,error:i},{data:l},{data:s}]=await Promise.all([I.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws,last_seen").order("created_at",{ascending:!1}),I.from("user_solo_progress").select("user_id, unlocked_level"),I.rpc("admin_get_user_emails")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const g={};(l||[]).forEach(p=>{g[p.user_id]=p.unlocked_level});const x={};(s||[]).forEach(p=>{x[p.id]=p.email});const _=n||[];e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap">
        <input id="search-users" placeholder="🔍 Rechercher un manager…" style="width:260px">
        <label style="display:flex;align-items:center;gap:6px;font-size:13px;cursor:pointer;user-select:none">
          <input type="checkbox" id="filter-online" style="width:16px;height:16px;cursor:pointer">
          <span>🟢 En ligne uniquement (<span id="online-count">0</span>)</span>
        </label>
      </div>
      <span style="font-size:13px;color:var(--gray-600)">${_.length} manager(s)</span>
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
  `;function o(p){const r=document.getElementById("online-count");r&&(r.textContent=p.filter(ne).length)}function c(){const p=document.getElementById("search-users").value.toLowerCase(),r=document.getElementById("filter-online").checked;f(_.filter(h=>{var u;return(h.pseudo.toLowerCase().includes(p)||((u=h.club_name)==null?void 0:u.toLowerCase().includes(p)))&&(!r||ne(h))}))}f(_),o(_),document.getElementById("search-users").addEventListener("input",c),document.getElementById("filter-online").addEventListener("change",c);const d=setInterval(async()=>{const{data:p}=await I.from("users").select("id,last_seen");if(!p)return;const r={};p.forEach(h=>{r[h.id]=h.last_seen}),_.forEach(h=>{h.last_seen=r[h.id]??h.last_seen}),o(_),document.querySelectorAll("[data-online-dot]").forEach(h=>{const u=_.find(w=>w.id===h.dataset.onlineDot);u&&(h.style.background=ne(u)?"#22c55e":"transparent")})},2e4),m=new MutationObserver(()=>{document.body.contains(e)||(clearInterval(d),m.disconnect())});m.observe(document.body,{childList:!0,subtree:!0});function f(p){document.getElementById("users-tbody").innerHTML=p.map(r=>{const h=r.mmr??1e3,u=r.mmr_deviation??350,w=r.placement_matches??0,L=Ht(h),a=r.ranked_wins??0,v=r.ranked_losses??0,E=r.ranked_draws??0,b=a+v+E,$=b>0?Math.round(a/b*100):null,y=w<10,k=u<80?"#1A6B3C":u<150?"#e67e22":"#bb2020";return`
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:6px">
              <span data-online-dot="${r.id}" title="${ne(r)?"En ligne":"Hors ligne"}"
                style="width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${ne(r)?"#22c55e":"transparent"};border:1px solid ${ne(r)?"#22c55e":"var(--gray-300,#ccc)"}"></span>
              <div style="font-weight:700">${r.pseudo}</div>
            </div>
            <div style="font-size:11px;color:var(--gray-600);margin-left:14px">${r.club_name||"—"}</div>
            <div style="font-size:10.5px;color:var(--gray-600);margin-left:14px">${x[r.id]||"—"}</div>
          </td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:6px">
              <span id="credits-display-${r.id}">${(r.credits||0).toLocaleString("fr")} cr.</span>
              <button class="btn-edit-credits" data-user="${r.id}" data-current="${r.credits||0}"
                style="background:none;border:none;cursor:pointer;font-size:12px;padding:0;opacity:.7" title="Modifier les crédits">✏️</button>
            </div>
            <div style="color:var(--gray-600)">🎮 Solo max : niv. ${g[r.id]??1}</div>
          </td>
          <td style="font-size:12px">${r.wins}V / ${r.draws}N / ${r.losses}D</td>
          <td style="font-size:12px">🥇${r.trophies_top1} 🥈${r.trophies_top2} 🥉${r.trophies_top3}</td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:5px">
              <span style="font-size:16px">${L.emoji}</span>
              <span style="font-weight:700;color:${L.color}">${L.label}</span>
            </div>
            ${y?`<div style="font-size:10px;color:#e67e22">${w}/10 placement${w<10?` (${10-w} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${a}V ${E}N ${v}D${$!==null?` · ${$}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${h}</div>
            <div style="font-size:10px;color:${k}">RD ±${Math.round(u)}</div>
          </td>
          <td>
            ${r.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td style="display:flex;gap:4px">
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${r.id}" data-is-admin="${r.is_admin}">
              ${r.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
            <button class="btn btn-ghost btn-sm" data-view-cards="${r.id}" data-pseudo="${r.pseudo}"
              title="Voir toutes les cartes et équipes de ce Manager">🃏</button>
            <button class="btn btn-ghost btn-sm" data-delete-manager="${r.id}" data-pseudo="${r.pseudo}"
              style="color:var(--red,#bb2020);" title="Supprimer ce Manager et TOUT ce qui le lie">
              🗑️
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll(".btn-edit-credits").forEach(r=>{r.addEventListener("click",async()=>{const h=r.dataset.user,u=Number(r.dataset.current)||0,w=prompt("Nouveau solde de crédits :",u);if(w===null)return;const L=parseInt(w.replace(/\s/g,""),10);if(isNaN(L)||L<0){t("Valeur invalide","error");return}const{data:a,error:v}=await I.rpc("admin_update_user_credits",{p_user_id:h,p_new_credits:L});if(v){t(v.message,"error");return}if(!(a!=null&&a.success)){t((a==null?void 0:a.error)||"Échec de la mise à jour","error");return}t("Crédits mis à jour ✅","success");const E=document.getElementById(`credits-display-${h}`);E&&(E.textContent=`${L.toLocaleString("fr")} cr.`),r.dataset.current=L})}),document.querySelectorAll("[data-toggle-admin]").forEach(r=>{r.addEventListener("click",async()=>{const h=r.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${h?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:u}=await I.from("users").update({is_admin:h}).eq("id",r.dataset.toggleAdmin);u?t(u.message,"error"):(t("Rôle mis à jour ✅","success"),$e(e,{toast:t}))})}),document.querySelectorAll("[data-view-cards]").forEach(r=>{r.addEventListener("click",()=>{Cn(r.dataset.viewCards,r.dataset.pseudo)})}),document.querySelectorAll("[data-delete-manager]").forEach(r=>{r.addEventListener("click",async()=>{const h=r.dataset.deleteManager,u=r.dataset.pseudo;if(!confirm(`⚠️ ATTENTION: Supprimer le Manager "${u}" supprimera DÉFINITIVEMENT:
- Tous ses decks
- Toutes ses cartes
- Tous ses matchs
- Tous ses résultats ranked
- Tout ce qui le lie en base

Continuer ?`)||!confirm("Êtes-vous vraiment sûr ? Cette action est IRRÉVERSIBLE."))return;r.disabled=!0,r.textContent="⏳";const{data:w,error:L}=await I.rpc("delete_manager_cascade",{p_user_id:h});if(L){t(`Erreur: ${L.message}`,"error"),r.disabled=!1,r.textContent="🗑️";return}if(!(w!=null&&w.success)){t(`Erreur: ${(w==null?void 0:w.error)||"Suppression échouée"}`,"error"),r.disabled=!1,r.textContent="🗑️";return}t(`Manager "${u}" supprimé et ${Object.values(w.deleted).reduce((a,v)=>a+v)} entrées supprimées ✅`,"success"),$e(e,{toast:t})})})}}const Je=[{key:"player",label:"⚽ Joueurs"},{key:"formation",label:"📋 Formations"},{key:"stadium",label:"🏟️ Stades"},{key:"game_changer",label:"⚡ Game Changers"},{key:"decks",label:"👥 Équipes"},{key:"boosters",label:"🎁 Boosters"}];function An(e){const t={GK:[],DEF:[],MIL:[],ATT:[]};return(e||[]).filter(n=>n.is_starter).forEach(n=>{const i=/^(GK|DEF|MIL|ATT)(\d+)$/.exec(n.position||"");if(!i)return;const l=i[1],s=parseInt(i[2],10)-1;t[l][s]=_t(n)}),t}function _t(e){const t=e.evolution_bonus||0,n=e.job2,i=n&&Number(e[`note_${n.toLowerCase()}`])||0,l=(s,g)=>(Number(g)||0)+(e.job===s?t:0)+(n===s&&i>0?t:0);return{cardId:e.card_id,firstname:e.firstname,name:e.surname_real,surname_real:e.surname_real,country_code:e.country_code,club_id:e.club_id,job:e.job,job2:e.job2,note_g:l("GK",e.note_g),note_d:l("DEF",e.note_d),note_m:l("MIL",e.note_m),note_a:l("ATT",e.note_a),evolution_bonus:t,rarity:e.rarity,face:e.face||null,clubName:e.club_encoded_name||null,clubLogo:e.club_logo_url||null,boost:0,used:!1}}function Bn(e){return e!=null&&e.image_url?`/icons/${e.image_url}`:null}function Sn(e){var t;return e!=null&&e.image_url?`/icons/${e.image_url}`:(t=e==null?void 0:e.club)!=null&&t.logo_url?e.club.logo_url:e!=null&&e.country_code?`https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null}function le(e){return e?`<div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-start">${e}</div>`:'<div style="padding:30px;text-align:center;color:#999;font-size:13px">Aucune carte dans cette catégorie.</div>'}async function Cn(e,t,n){const i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="3000",i.innerHTML=`<div class="modal admin-light-card" style="max-width:1100px;width:96%">
    <div class="modal-header"><h2>🃏 Collection de ${t}</h2><button class="btn-icon" id="mc-close">✕</button></div>
    <div class="modal-body" id="mc-body" style="padding:16px">
      <div style="text-align:center;color:#999;padding:30px">⏳ Chargement de la collection…</div>
    </div>
  </div>`,document.body.appendChild(i);const l=()=>i.remove();i.querySelector("#mc-close").addEventListener("click",l),i.addEventListener("click",a=>{a.target===i&&l()});const{data:s,error:g}=await I.rpc("admin_get_manager_collection",{p_user_id:e}),x=i.querySelector("#mc-body");if(!x)return;if(g||!(s!=null&&s.success)){x.innerHTML=`<div style="padding:20px;color:#bb2020">Erreur : ${(g==null?void 0:g.message)||(s==null?void 0:s.error)||"chargement impossible"}</div>`;return}const _=s.cards||[],o=s.decks||[],c={player:_.filter(a=>a.card_type==="player"&&a.player),formation:_.filter(a=>a.card_type==="formation"),stadium:_.filter(a=>a.card_type==="stadium"),game_changer:_.filter(a=>a.card_type==="game_changer")},d={player:c.player.length,formation:c.formation.length,stadium:c.stadium.length,game_changer:c.game_changer.length,decks:o.length},m={};m.player=le(c.player.map(a=>{const v={...a.player,_evolution_bonus:a.evolution_bonus||0};return`<div style="position:relative">${a.is_for_sale?'<div style="position:absolute;top:4px;right:4px;background:#D4A017;color:#111;font-size:9px;font-weight:800;padding:2px 6px;border-radius:8px;z-index:3">EN VENTE</div>':""}${oe(v,{width:110})}</div>`}).join("")),m.formation=le(c.formation.map(a=>`<div style="position:relative">${Gt(a.formation,de[a.formation],{width:120})}</div>`).join("")),m.stadium=le(c.stadium.map(a=>{var b;const v=a.stadium_def,E=((b=v==null?void 0:v.club)==null?void 0:b.encoded_name)||(v==null?void 0:v.country_code)||"—";return`<div style="position:relative">${Be((v==null?void 0:v.name)||"?",Sn(v),`${E}<br>+10 ⭐ joueurs alliés`,{width:120})}</div>`}).join("")),m.game_changer=le(c.game_changer.map(a=>{const v=a.gc_def;return`<div style="position:relative">${me((v==null?void 0:v.name)||a.gc_type||"Game Changer",Bn(v),"⚡",(v==null?void 0:v.effect)||"",{width:120})}</div>`}).join(""));function f(a){var C,D;const v=a.cards||[],E=v.filter(j=>!j.is_starter),b=An(v),$=a.stadium||null;$&&Kt(b,$);const y=["GK","DEF","MIL","ATT"].reduce((j,O)=>j+b[O].filter(Boolean).length,0),k=$?`
      <div style="display:flex;align-items:center;gap:10px;background:#eaf3fb;border:1px solid #c9def0;border-radius:10px;padding:8px 12px;margin-bottom:10px">
        ${(C=$.club)!=null&&C.logo_url?`<img src="${$.club.logo_url}" style="width:26px;height:26px;object-fit:contain">`:'<span style="font-size:20px">🏟️</span>'}
        <div style="font-weight:800;font-size:13px;color:#1a1a1a">${$.name||"Stade"}</div>
        <div style="margin-left:auto;font-size:12px;color:#1A6B3C;font-weight:700">
          +10 aux joueurs ${((D=$.club)==null?void 0:D.encoded_name)||$.country_code||""}
        </div>
      </div>`:"",A=a.formation&&de[a.formation]&&y?`<div style="max-width:560px;margin:0 auto;pointer-events:none">
           ${Vt(b,a.formation,null,[],340,375)}
         </div>`:`<div style="font-size:12px;color:#999;padding:20px;text-align:center">
           ${a.formation?de[a.formation]?"Aucun titulaire enregistré.":`Formation inconnue : ${a.formation}`:"Aucune formation définie pour ce deck."}
         </div>`,S=j=>`<div style="position:relative">${oe(_t(j),{width:74})}</div>`;return`
      ${k}
      ${A}
      ${E.length?`
        <div style="margin-top:12px">
          <div style="font-size:11px;color:#888;font-weight:700;margin-bottom:5px">REMPLAÇANTS (${E.length})</div>
          <div style="display:flex;flex-wrap:wrap;gap:8px">${E.map(S).join("")}</div>
        </div>`:""}
    `}m.decks=o.length?`<div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap">
         <label style="font-size:12px;font-weight:700;color:#555">Équipe :</label>
         <select id="mc-deck-select" style="padding:7px 10px;border-radius:8px;border:1px solid var(--gray-200,#ddd);background:#fff;color:#1a1a1a;font-size:13px;font-weight:600;min-width:240px">
           ${o.map((a,v)=>`<option value="${v}">${a.name||"Deck sans nom"} — ${a.formation||"?"}</option>`).join("")}
         </select>
         <span style="font-size:12px;color:#888">${o.length} équipe(s)</span>
       </div>
       <div id="mc-deck-pitch">${f(o[0])}</div>`:`<div style="padding:30px;text-align:center;color:#999;font-size:13px">Ce manager n'a créé aucune équipe.</div>`;const p=s.boosters||[],r=s.legacy_booster_cards||0,h={legende:"Légende",pepite:"Pépite",papyte:"Papyte",normal:"Normal"},u={legende:"#7a28b8",pepite:"#D4A017",papyte:"#909090",normal:"#888"},w=p.reduce((a,v)=>a+(v.nb_cards||0),0);m.boosters=`
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px">
      <div style="flex:1;min-width:150px;background:#f4f8f5;border:1px solid #d6e8dc;border-radius:12px;padding:12px 14px">
        <div style="font-size:11px;color:#666">Boosters ouverts</div>
        <div style="font-size:22px;font-weight:900;color:#1A6B3C">${p.length}</div>
      </div>
      <div style="flex:1;min-width:150px;background:#fdf8ec;border:1px solid #efe0bb;border-radius:12px;padding:12px 14px">
        <div style="font-size:11px;color:#666">Cartes obtenues</div>
        <div style="font-size:22px;font-weight:900;color:#D4A017">${w}</div>
      </div>
      <div style="flex:1;min-width:150px;background:#f7f7f7;border:1px solid #e0e0e0;border-radius:12px;padding:12px 14px">
        <div style="font-size:11px;color:#666">Cartes booster (historique)</div>
        <div style="font-size:22px;font-weight:900;color:#555">${r}</div>
      </div>
    </div>
    ${p.length?`
      <div style="display:flex;flex-direction:column;gap:8px">
        ${p.map(a=>{const v=a.opened_at?new Date(a.opened_at).toLocaleString("fr"):"—",E=(a.cards||[]).map(b=>{const $=u[b.rarity]||"#888",y=b.rarity?` · <span style="color:${$};font-weight:700">${h[b.rarity]||b.rarity}</span>`:"",k=b.is_duplicate?' <span style="color:#aaa">(doublon)</span>':"";return`<div style="font-size:12px;color:#333;padding:3px 0;border-bottom:1px dashed #eee">
              ${b.name||b.card_type||"?"}${y}${b.note!=null?` · note ${b.note}`:""}${k}
            </div>`}).join("");return`<details style="border:1px solid var(--gray-200,#e0e0e0);border-radius:10px;padding:10px 12px;background:#fafafa">
            <summary style="cursor:pointer;font-size:13px;font-weight:700;color:#1a1a1a">
              ${a.booster_name||"Booster"} <span style="font-weight:400;color:#777">· ${a.nb_cards||0} carte(s) · ${v}</span>
            </summary>
            <div style="margin-top:8px">${E||'<div style="font-size:12px;color:#999">Contenu non détaillé.</div>'}</div>
          </details>`}).join("")}
      </div>`:`
      <div style="padding:20px;text-align:center;color:#999;font-size:13px;line-height:1.6">
        Aucune ouverture enregistrée pour ce manager.<br>
        <span style="font-size:11.5px">Le journal des ouvertures a été mis en place récemment : seules les ouvertures postérieures y figurent.${r?` Le compteur « historique » (${r}) recense les cartes joueur encore possédées et obtenues en booster avant cela.`:""}</span>
      </div>`}
  `,x.innerHTML=`
    <div style="display:flex;gap:6px;flex-wrap:wrap;border-bottom:1px solid var(--gray-200,#e0e0e0);padding-bottom:10px;margin-bottom:14px">
      ${Je.map((a,v)=>`
        <button class="mc-tab" data-tab="${a.key}" style="
          border:1px solid ${v===0?"#1A6B3C":"var(--gray-200,#ddd)"};
          background:${v===0?"#1A6B3C":"#fff"};
          color:${v===0?"#fff":"#444"};
          padding:7px 13px;border-radius:999px;font-size:12.5px;font-weight:700;cursor:pointer">
          ${a.label} (${d[a.key]})
        </button>`).join("")}
    </div>
    ${Je.map((a,v)=>`
      <div class="mc-pane" data-pane="${a.key}" style="display:${v===0?"block":"none"}">${m[a.key]}</div>
    `).join("")}
  `;const L=x.querySelector("#mc-deck-select");L&&L.addEventListener("change",()=>{const a=x.querySelector("#mc-deck-pitch");a&&(a.innerHTML=f(o[Number(L.value)]))}),x.querySelectorAll(".mc-tab").forEach(a=>{a.addEventListener("click",()=>{x.querySelectorAll(".mc-tab").forEach(v=>{const E=v===a;v.style.background=E?"#1A6B3C":"#fff",v.style.color=E?"#fff":"#444",v.style.borderColor=E?"#1A6B3C":"var(--gray-200,#ddd)"}),x.querySelectorAll(".mc-pane").forEach(v=>{v.style.display=v.dataset.pane===a.dataset.tab?"block":"none"})})})}const Tn=[{value:"normal",label:"Normal",color:"#ccc"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function wt(e,t){var _;const{toast:n}=t,{data:i,error:l}=await I.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_real, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(l){e.innerHTML=`<p style="color:var(--danger)">${l.message}</p>`;return}const s=i||[],g=s.filter(o=>o.status==="active").length,x=s.filter(o=>o.status==="sold").length;e.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px">
      <button id="btn-price-grid" class="btn btn-primary">📊 Grille des prix</button>
      <div style="display:flex;gap:12px">
        <div class="card-panel" style="min-width:120px;text-align:center;padding:12px 20px">
          <div style="font-size:22px;font-weight:700;color:#1A6B3C">${g}</div>
          <div style="font-size:11px;color:var(--tile-fg-dim)">Annonces actives</div>
        </div>
        <div class="card-panel" style="min-width:120px;text-align:center;padding:12px 20px">
          <div style="font-size:22px;font-weight:700;color:#D4A017">${x}</div>
          <div style="font-size:11px;color:var(--tile-fg-dim)">Vendues</div>
        </div>
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
            ${s.map(o=>{var f,p,r,h;const c=(f=o.card)==null?void 0:f.player,d=c?`${c.firstname} ${c.surname_real}`:((p=o.card)==null?void 0:p.card_type)||"—",m={active:"#1A6B3C",sold:"#D4A017",cancelled:"#888"};return`<tr>
                <td><b>${d}</b>${c?`<div style="font-size:10px;color:var(--tile-fg-dim)">${c.rarity} · ${c.job}</div>`:""}</td>
                <td style="font-size:12px">${((r=o.seller)==null?void 0:r.pseudo)||"—"}</td>
                <td style="font-size:12px">${((h=o.buyer)==null?void 0:h.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(o.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${m[o.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
                    ${o.status.toUpperCase()}
                  </span>
                </td>
                <td style="font-size:11px;color:var(--tile-fg-dim)">${new Date(o.listed_at).toLocaleDateString("fr")}</td>
                <td>
                  ${o.status==="active"?`<button class="btn btn-danger btn-sm" data-cancel="${o.id}">Annuler</button>`:""}
                </td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,document.querySelectorAll("[data-cancel]").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:c}=await I.from("market_listings").update({status:"cancelled"}).eq("id",o.dataset.cancel);c?n(c.message,"error"):(n("Annonce annulée","success"),wt(e,t))})}),(_=document.getElementById("btn-price-grid"))==null||_.addEventListener("click",()=>zn(t))}async function zn(e){await Ie(e)}function Mn(){const e=document.getElementById("modal-overlay");if(!e||e._pgBlocker)return;const t=n=>{n.target===n.currentTarget&&n.stopImmediatePropagation()};e.addEventListener("click",t,!0),e._pgBlocker=t}function Ee(){const e=document.getElementById("modal-overlay");e!=null&&e._pgBlocker&&(e.removeEventListener("click",e._pgBlocker,!0),delete e._pgBlocker)}async function Ie(e){var f,p;const{openModal:t,closeModal:n,toast:i}=e,{data:l,error:s}=await I.from("sell_price_configs").select("*").order("rarity").order("note_min");if(s){i(s.message,"error");return}const g=r=>Tn.map(h=>`<option value="${h.value}" ${h.value===r?"selected":""}>${h.label}</option>`).join(""),x=r=>`
    <tr data-row="${r.id}">
      <td style="padding:4px 8px">
        <select data-field="rarity" data-id="${r.id}" style="width:100%;padding:6px;font-size:13px">${g(r.rarity)}</select>
      </td>
      <td style="padding:4px 8px">
        <input data-field="note_min" data-id="${r.id}" type="number" min="0" max="999" value="${r.note_min}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="note_max" data-id="${r.id}" type="number" min="0" max="999" value="${r.note_max}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="price_min" data-id="${r.id}" type="number" min="0" value="${r.price_min}" style="width:100%;padding:6px;text-align:right;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="price_max" data-id="${r.id}" type="number" min="0" value="${r.price_max}" style="width:100%;padding:6px;text-align:right;font-size:13px">
      </td>
      <td style="text-align:center;padding:4px 8px">
        <button class="btn btn-danger btn-sm" data-del-row="${r.id}">🗑️</button>
      </td>
    </tr>`,_=`
    <p style="font-size:13px;color:#666;margin-bottom:14px">
      Définit la fourchette de prix autorisée à la vente sur le marché, selon la rareté et la note du joueur.
      Modifie une cellule et quitte-la (Tab/clic ailleurs) pour enregistrer automatiquement — comme dans un tableur.
    </p>
    <div style="max-height:400px;overflow-y:auto;margin-bottom:14px">
      <table>
        <thead>
          <tr><th>Rareté</th><th style="text-align:center">Note min</th><th style="text-align:center">Note max</th><th style="text-align:right">Prix min</th><th style="text-align:right">Prix max</th><th style="text-align:center">Actions</th></tr>
        </thead>
        <tbody id="pg-tbody">
          ${(l||[]).map(x).join("")||'<tr><td colspan="6" style="text-align:center;color:#aaa;padding:20px">Aucune règle définie.</td></tr>'}
        </tbody>
      </table>
    </div>
  `;t("📊 Grille des prix — vente marché",_,`
    <button id="pg-add-row" class="btn btn-primary">+ Ajouter une ligne</button>
    <button id="pg-close" class="btn btn-ghost">Fermer</button>
  `),Mn(),(f=document.getElementById("pg-close"))==null||f.addEventListener("click",()=>{Ee(),n()});function c(r){const h=r.dataset.id,u=r.dataset.field,w=u==="rarity"?r.value:Number(r.value)||0;return d(h,{[u]:w},r)}async function d(r,h,u){const w=document.querySelector(`tr[data-row="${r}"]`),L=y=>w.querySelector(`[data-field="${y}"]`),a="note_min"in h?h.note_min:Number(L("note_min").value),v="note_max"in h?h.note_max:Number(L("note_max").value),E="price_min"in h?h.price_min:Number(L("price_min").value),b="price_max"in h?h.price_max:Number(L("price_max").value);if(a>v){i("Note min doit être ≤ note max","error");return}if(E>b){i("Prix min doit être ≤ prix max","error");return}const{error:$}=await I.from("sell_price_configs").update(h).eq("id",r);if($){i($.message,"error");return}u&&(u.style.transition="background .3s",u.style.background="#e8f8ee",setTimeout(()=>{u.style.background=""},500))}function m(){document.querySelectorAll("#pg-tbody [data-field]").forEach(r=>{r.addEventListener("change",()=>c(r))})}m(),document.querySelectorAll("[data-del-row]").forEach(r=>{r.addEventListener("click",async()=>{confirm("Supprimer cette ligne ?")&&(await I.from("sell_price_configs").delete().eq("id",r.dataset.delRow),i("Ligne supprimée","success"),Ee(),Ie(e))})}),(p=document.getElementById("pg-add-row"))==null||p.addEventListener("click",async()=>{var L;const r={rarity:"normal",note_min:0,note_max:20,price_min:2500,price_max:15e3},{data:h,error:u}=await I.from("sell_price_configs").insert(r).select().single();if(u){i(u.message,"error");return}const w=document.getElementById("pg-tbody");w.querySelector("td[colspan]")&&(w.innerHTML=""),w.insertAdjacentHTML("beforeend",x(h)),m(),(L=document.querySelector(`[data-del-row="${h.id}"]`))==null||L.addEventListener("click",async function(){confirm("Supprimer cette ligne ?")&&(await I.from("sell_price_configs").delete().eq("id",h.id),i("Ligne supprimée","success"),Ee(),Ie(e))}),i("Ligne ajoutée — modifie les valeurs directement","success")})}async function Rn(e,{toast:t}){e.innerHTML=`
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
  `,document.getElementById("export-clubs-template").addEventListener("click",()=>{se("clubs_template.csv",`real_name,encoded_name,country_code,logo_url
Paris Saint-Germain,PARIS FC,FR,
Real Madrid,MADRID FC,ES,
`)}),document.getElementById("export-players-template").addEventListener("click",()=>{se("players_template.csv",`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
Kylian,Mbappe,,FR,PARIS FC,ATT,,0,0,2,9,legende,,,blanc,noir,court,50000
Achraf,Hakimi,,MA,PARIS FC,DEF,MIL,0,7,5,3,pepite,5,9,metisse,noir,court,20000
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:n,error:i}=await I.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun club à exporter","info");return}let l=`real_name,encoded_name,country_code,logo_url
`;n.forEach(s=>{l+=[s.real_name,s.encoded_name,s.country_code,s.logo_url||""].map(Ye).join(",")+`
`}),se("clubs_export.csv",l),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:i}=await I.from("players").select("firstname,surname_real,surname_real,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_real");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let l=`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(s=>{var g;l+=[s.firstname,s.surname_real,s.surname_real,s.country_code,((g=s.clubs)==null?void 0:g.encoded_name)||"",s.job,s.job2||"",s.note_g,s.note_d,s.note_m,s.note_a,s.rarity,s.note_min??"",s.note_max??"",s.skin,s.hair,s.hair_length,s.sell_price].map(Ye).join(",")+`
`}),se("players_export.csv",l),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const l=document.getElementById("clubs-import-result");l.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const s=await i.text(),g=We(s);if(g.length===0){l.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let x=0,_=0;const o=[];for(const c of g){if(!c.real_name||!c.encoded_name||!c.country_code){_++,o.push(`Ligne ignorée (champs manquants): ${c.real_name||"?"}`);continue}const d={real_name:c.real_name,encoded_name:c.encoded_name.toUpperCase(),country_code:c.country_code.toUpperCase().slice(0,2),logo_url:c.logo_url||null},{error:m}=await I.from("clubs").upsert(d,{onConflict:"encoded_name"});m?(_++,o.push(`${c.encoded_name}: ${m.message}`)):x++}l.innerHTML=`<div style="color:var(--green)">✅ ${x} clubs importés</div>
        ${_>0?`<div style="color:#c0392b">❌ ${_} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${o.slice(0,10).join("<br>")}</div>`:""}`,t(`${x} clubs importés`,"success")}catch(s){l.innerHTML=`<span style="color:#c0392b">Erreur : ${s.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const l=document.getElementById("players-import-result");l.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const s=await i.text(),g=We(s);if(g.length===0){l.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:x}=await I.from("clubs").select("id,encoded_name"),_={};(x||[]).forEach(u=>{_[u.encoded_name.toUpperCase()]=u.id});let o=0,c=0;const d=[],m=["GK","DEF","MIL","ATT"],f=["normal","pepite","papyte","legende"],p=["blanc","metisse","typ","noir"],r=["blond","marron","noir","chauve"],h=["rase","court","milong","long"];for(const u of g){if(!u.firstname||!u.surname_real||!u.country_code||!u.job){c++,d.push(`Ligne ignorée (champs requis manquants): ${u.firstname||"?"}`);continue}if(!m.includes(u.job)){c++,d.push(`${u.firstname}: job invalide "${u.job}"`);continue}const w=u.club_encoded_name&&_[u.club_encoded_name.toUpperCase()]||null,L={firstname:u.firstname,surname_real:u.surname_real,surname_real:u.surname_real||ve(u.surname_real),country_code:u.country_code.toUpperCase().slice(0,2),club_id:w,job:u.job,job2:m.includes(u.job2)?u.job2:null,note_g:parseInt(u.note_g)||0,note_d:parseInt(u.note_d)||0,note_m:parseInt(u.note_m)||0,note_a:parseInt(u.note_a)||0,rarity:f.includes(u.rarity)?u.rarity:"normal",note_min:u.note_min!==""&&u.note_min!=null?parseInt(u.note_min):null,note_max:u.note_max!==""&&u.note_max!=null?parseInt(u.note_max):null,skin:p.includes(u.skin)?u.skin:"blanc",hair:r.includes(u.hair)?u.hair:"noir",hair_length:h.includes(u.hair_length)?u.hair_length:"court",sell_price:parseInt(u.sell_price)||0},{error:a}=await I.from("players").insert(L);a?(c++,d.push(`${u.firstname} ${u.surname_real}: ${a.message}`)):o++}l.innerHTML=`<div style="color:var(--green)">✅ ${o} joueurs importés</div>
        ${c>0?`<div style="color:#c0392b">❌ ${c} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${d.slice(0,10).join("<br>")}</div>`:""}`,t(`${o} joueurs importés`,"success")}catch(s){l.innerHTML=`<span style="color:#c0392b">Erreur : ${s.message}</span>`}n.target.value=""})}function Ye(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function se(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(n),l=document.createElement("a");l.href=i,l.download=e,l.click(),URL.revokeObjectURL(i)}function We(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(g=>g.trim());if(t.length<2)return[];const n=t[0],i=n.split(";").length>n.split(",").length?";":",",l=Ze(n,i).map(g=>g.trim().replace(/^\uFEFF/,"").toLowerCase()),s=[];for(let g=1;g<t.length;g++){if(!t[g].trim())continue;const x=Ze(t[g],i),_={};l.forEach((o,c)=>{_[o]=(x[c]||"").trim()}),!Object.values(_).every(o=>!o)&&s.push(_)}return s}function Ze(e,t=","){const n=[];let i="",l=!1;for(let s=0;s<e.length;s++){const g=e[s];l?g==='"'?e[s+1]==='"'?(i+='"',s++):l=!1:i+=g:g==='"'?l=!0:g===t?(n.push(i),i=""):i+=g}return n.push(i),n}const jn={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Dn(e,{toast:t}){const n=Object.keys(he);let i=n[0];const{data:l}=await I.from("formation_links_overrides").select("formation, links"),s={};(l||[]).forEach(c=>{s[c.formation]=c.links});let g=new Set;function x(c,d){return[c,d].sort().join("-")}function _(c){const d=s[c]||he[c]||[];g=new Set(d.map(([m,f])=>x(m,f)))}_(i),e.innerHTML=`
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
        <div style="font-weight:700;font-size:13px;margin-bottom:8px">Liens (${g.size}/? actifs)</div>
        <div id="links-list" style="display:flex;flex-direction:column;gap:4px;max-height:520px;overflow-y:auto"></div>
      </div>
    </div>
  `;function o(){const c=de[i]||{},d=Oe(i),m=320,f=400,p=22;function r(a){const v=c[a];return v?{x:v.x*m,y:v.y*f}:null}let h=`<svg width="${m}" height="${f}" viewBox="0 0 ${m} ${f}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;d.forEach(([a,v],E)=>{const b=r(a),$=r(v);if(!b||!$)return;const y=x(a,v),k=g.has(y),A=k?"#3b82f6":"#999",S=k?.95:.35,C=k?4:3;h+=`<line x1="${b.x}" y1="${b.y}" x2="${$.x}" y2="${$.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${y}" style="cursor:pointer"/>`,h+=`<line x1="${b.x}" y1="${b.y}" x2="${$.x}" y2="${$.y}"
        stroke="${A}" stroke-width="${C}" stroke-dasharray="${k?"none":"4,3"}"
        opacity="${S}" pointer-events="none" data-line-key="${y}"/>`});for(const a of Object.keys(c)){const v=r(a);if(!v)continue;const E=a.replace(/\d+/,""),b=jn[E]||"#555";h+=`<circle cx="${v.x}" cy="${v.y}" r="${p}" fill="${b}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,h+=`<text x="${v.x}" y="${v.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${a}</text>`}h+="</svg>",document.getElementById("field-wrap").innerHTML=h;const u=document.getElementById("links-list");u.innerHTML=d.map(([a,v])=>{const E=x(a,v),b=g.has(E);return`
        <button class="link-toggle" data-key="${E}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${b?"#3b82f6":"#ddd"};
          background:${b?"#eaf2ff":"#fafafa"};
          color:${b?"#1d4ed8":"#888"}">
          <span>${a} ↔ ${v}</span>
          <span>${b?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const w=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');w&&(w.textContent=`Liens (${g.size}/${d.length} actifs)`);function L(a){g.has(a)?g.delete(a):g.add(a),o()}e.querySelectorAll(".link-hit").forEach(a=>{a.addEventListener("click",()=>L(a.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(a=>{a.addEventListener("click",()=>L(a.dataset.key))})}o(),document.getElementById("formation-select").addEventListener("change",c=>{i=c.target.value,_(i),o()}),document.getElementById("reset-btn").addEventListener("click",()=>{const c=he[i]||[];g=new Set(c.map(([d,m])=>x(d,m))),o(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const d=Oe(i).filter(([f,p])=>g.has(x(f,p))),{error:m}=await I.from("formation_links_overrides").upsert({formation:i,links:d,updated_at:new Date().toISOString()});if(m){t(m.message,"error");return}s[i]=d,t(`Liens enregistrés pour ${i} (${d.length} actifs)`,"success")})}const Nn=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],Pn=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],Fn=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function On(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await I.from("booster_configs").select("*").order("sort_order");let n=null,i=[],l=null;const s=()=>window.innerWidth<700;async function g(){if(!n){i=[];return}if(n!==l){const{data:d}=await I.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");i=d||[],l=n}}function x(){return`
    <div id="booster-list" style="background:#fff;${s()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(t||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(d=>`
      <div class="booster-row" data-id="${d.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${d.id===n?"#f0f7f0":"#fff"}">
        ${d.image_url?`<img src="/icons/${d.image_url}" style="width:36px;height:36px;object-fit:contain;border-radius:6px;background:#f5f5f5;padding:2px">`:'<div style="width:36px;height:36px;background:#eee;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:20px">📦</div>'}
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${d.name}</div>
          <div style="font-size:11px;color:#888">
            ${d.price_type==="credits"?(d.price_credits||0)+" cr.":d.price_type==="pub"?"Pub":"Gratuit"}
            · ${d.card_count||5} cartes · ${d.is_active?"✅":"⛔"}
          </div>
        </div>
        <button class="btn-delete" data-id="${d.id}" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:18px;padding:4px;flex-shrink:0">🗑️</button>
      </div>`).join("")}
      ${(t||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>'}
    </div>`}function _(){const d=n?(t||[]).find(p=>p.id===n):null;if(!d)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const m=i.reduce((p,r)=>p+Number(r.percentage||0),0),f=Math.abs(m-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${s()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <h3 style="margin:0 0 14px;font-size:16px">${d.name}</h3>

      <!-- Infos de base -->
      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="f-name" value="${d.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="f-image-url" value="${d.image_url||""}" placeholder="ex: booster-players.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          ${d.image_url?`<img src="/icons/${d.image_url}" style="height:44px;margin-top:8px;border-radius:6px;object-fit:contain;background:#f0f0f0;padding:4px">`:""}
          <div id="icon-picker-grid" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE DE PRIX</label>
            <select id="f-price-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${Fn.map(p=>`<option value="${p.value}" ${d.price_type===p.value?"selected":""}>${p.label}</option>`).join("")}
            </select>
          </div>
          <div id="credits-field">
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">CRÉDITS</label>
            <input id="f-price-credits" type="number" min="0" value="${d.price_credits||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NB CARTES</label>
            <input id="f-card-count" type="number" min="1" max="10" value="${d.card_count||5}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="f-sort" type="number" value="${d.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:flex;align-items:center;gap:10px">
          <input type="checkbox" id="f-active" ${d.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
          <label for="f-active" style="font-size:13px;cursor:pointer;font-weight:600">Booster actif (visible dans la boutique)</label>
        </div>
        <div style="display:flex;align-items:center;gap:10px;margin-top:10px">
          <input type="checkbox" id="f-allow-dup" ${d.allow_duplicates!==!1?"checked":""} style="width:18px;height:18px;cursor:pointer">
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
              <input id="f-max-per-user" type="number" min="1" value="${d.max_per_user||""}" placeholder="ex: 1"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible à partir du</label>
              <input id="f-available-from" type="date" value="${d.available_from||""}"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible jusqu'au</label>
              <input id="f-available-until" type="date" value="${d.available_until||""}"
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
            <span style="margin-left:10px;font-size:12px;color:${f?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${m.toFixed(1)}% ${f?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((p,r)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${r}">
            <select class="rate-type" data-idx="${r}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Nn.map(h=>`<option value="${h.value}" ${p.card_type===h.value?"selected":""}>${h.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${r}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Pn.map(h=>`<option value="${h.value}" ${(p.rarity||"")===h.value?"selected":""}>${h.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${r}" type="number" min="0" max="100" value="${p.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${r}" type="number" min="0" max="100" value="${p.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${r}" type="number" min="0.1" max="100" step="0.1" value="${p.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${r}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function o(d=!1){d||await g();const m=!n&&s(),f=n&&s();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!s()||m||!n?x():""}
      ${!s()||f?_():""}
    </div>`,c()}function c(){var f,p,r,h,u,w,L;const d=a=>e.querySelector(a);e.querySelectorAll(".booster-row").forEach(a=>{a.addEventListener("click",v=>{v.target.closest(".btn-delete")||(n=a.dataset.id,l=null,o())})}),(f=d("#btn-back"))==null||f.addEventListener("click",()=>{n=null,o()}),(p=d("#btn-new"))==null||p.addEventListener("click",async()=>{const a=prompt("Nom du nouveau booster :");if(!(a!=null&&a.trim()))return;const{data:v,error:E}=await I.from("booster_configs").insert({name:a.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(E){alert(E.message);return}t.push(v),n=v.id,l=null,o()}),e.querySelectorAll(".btn-delete").forEach(a=>{a.addEventListener("click",async v=>{if(v.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await I.from("booster_configs").delete().eq("id",a.dataset.id);const E=t.findIndex(b=>b.id===a.dataset.id);E>-1&&t.splice(E,1),n===a.dataset.id&&(n=null,l=null),o()})}),(r=d("#btn-cancel"))==null||r.addEventListener("click",()=>{n=null,o()}),(h=d("#f-price-type"))==null||h.addEventListener("change",a=>{const v=d("#credits-field");v&&(v.style.opacity=a.target.value!=="credits"?"0.4":"1")}),(u=d("#btn-pick-icon"))==null||u.addEventListener("click",async()=>{var v;const a=d("#icon-picker-grid");if(a){if(a.style.display!=="none"){a.style.display="none";return}a.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',a.style.display="block";try{const b=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),$=Array.isArray(b)?b.filter(k=>k.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(k.name)):[];if(!$.length){a.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const y=((v=d("#f-image-url"))==null?void 0:v.value)||"";a.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${$.map(k=>`
          <div class="icon-pick-item" data-name="${k.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${k.name===y?"#1A6B3C":"#ddd"};background:${k.name===y?"#f0f7f0":"#fff"}">
            <img src="/icons/${k.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${k.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,a.querySelectorAll(".icon-pick-item").forEach(k=>{k.addEventListener("click",()=>{const A=d("#f-image-url");A&&(A.value=k.dataset.name),a.style.display="none"})})}catch(E){a.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${E.message}</div>`}}});function m(){e.querySelectorAll("[data-rate-idx]").forEach(a=>{var E,b,$,y,k;const v=Number(a.dataset.rateIdx);v>=0&&v<i.length&&(i[v].card_type=((E=a.querySelector(".rate-type"))==null?void 0:E.value)||"player",i[v].rarity=((b=a.querySelector(".rate-rarity"))==null?void 0:b.value)||null,i[v].note_min=Number(($=a.querySelector(".rate-note-min"))==null?void 0:$.value)||null,i[v].note_max=Number((y=a.querySelector(".rate-note-max"))==null?void 0:y.value)||null,i[v].percentage=Number((k=a.querySelector(".rate-pct"))==null?void 0:k.value)||0)})}(w=d("#btn-add-rate"))==null||w.addEventListener("click",()=>{m(),i.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),o(!0)}),e.querySelectorAll(".btn-del-rate").forEach(a=>{a.addEventListener("click",()=>{m(),i.splice(Number(a.dataset.idx),1),o(!0)})}),(L=d("#btn-save"))==null||L.addEventListener("click",async()=>{var y,k,A,S,C,D,j,O,U,H,B,M,T;const a=(t||[]).find(z=>z.id===n);if(!a)return;const v=[];e.querySelectorAll("[data-rate-idx]").forEach(z=>{var G,V,J,Y,W;const R=Number(z.dataset.rateIdx);v.push({booster_id:n,card_type:((G=z.querySelector(".rate-type"))==null?void 0:G.value)||"player",rarity:((V=z.querySelector(".rate-rarity"))==null?void 0:V.value)||null,note_min:Number((J=z.querySelector(".rate-note-min"))==null?void 0:J.value)||null,note_max:Number((Y=z.querySelector(".rate-note-max"))==null?void 0:Y.value)||null,percentage:Number((W=z.querySelector(".rate-pct"))==null?void 0:W.value)||0,sort_order:R});const N=v[v.length-1];N.rarity||(N.rarity=null),N.note_min||(N.note_min=null),N.note_max||(N.note_max=null)});const E=v.reduce((z,R)=>z+R.percentage,0);if(v.length&&Math.abs(E-100)>.5){alert(`La somme doit faire 100% (actuellement ${E.toFixed(1)}%)`);return}const b={name:((k=(y=d("#f-name"))==null?void 0:y.value)==null?void 0:k.trim())||a.name,image_url:((S=(A=d("#f-image-url"))==null?void 0:A.value)==null?void 0:S.trim())||null,price_type:(C=d("#f-price-type"))==null?void 0:C.value,price_credits:Number((D=d("#f-price-credits"))==null?void 0:D.value)||0,card_count:Number((j=d("#f-card-count"))==null?void 0:j.value)||5,is_active:((O=d("#f-active"))==null?void 0:O.checked)??a.is_active,allow_duplicates:((U=d("#f-allow-dup"))==null?void 0:U.checked)??!0,sort_order:Number((H=d("#f-sort"))==null?void 0:H.value)||0,max_per_user:(B=d("#f-max-per-user"))!=null&&B.value?Number(d("#f-max-per-user").value):null,available_from:((M=d("#f-available-from"))==null?void 0:M.value)||null,available_until:((T=d("#f-available-until"))==null?void 0:T.value)||null},{error:$}=await I.from("booster_configs").update(b).eq("id",n);if($){alert($.message);return}if(Object.assign(a,b),await I.from("booster_drop_rates").delete().eq("booster_id",n),v.length){const{error:z}=await I.from("booster_drop_rates").insert(v);if(z){alert(z.message);return}}i=v,l=n,alert("✅ Booster enregistré !"),o(!0)})}o()}const $t=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function qn(e){await ze(e)}async function ze(e){const{data:t,error:n}=await I.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
          ${(t||[]).map(i=>Un(i)).join("")}
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
              ${$t.map(i=>`<option value="${i.value}">${i.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>Qe(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Hn(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const l=(t||[]).find(s=>s.id===i.dataset.edit);l&&i.addEventListener("click",()=>Qe(l))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await I.from("sell_price_configs").delete().eq("id",i.dataset.delete),await ze(e))})})}function Un(e){const t=$t.find(n=>n.value===e.rarity);return`
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
    </tr>`}function Qe(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function Hn(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,l=parseInt(document.getElementById("form-note-min").value)||1,s=parseInt(document.getElementById("form-note-max").value)||10;if(l>s){alert("Note min doit être ≤ note max");return}const g={rarity:n,price:i,note_min:l,note_max:s,updated_at:new Date().toISOString()};let x;if(t?{error:x}=await I.from("sell_price_configs").update(g).eq("id",t):{error:x}=await I.from("sell_price_configs").insert(g),x){alert("Erreur : "+x.message);return}document.getElementById("config-form").style.display="none",await ze(e)}async function Gn(e){await Me(e)}async function Me(e){const{data:t}=await I.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Actualités</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(t||[]).map(n=>Kn(n)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
      </div>

      <!-- Formulaire -->
      <div id="article-form" class="admin-light-card" style="display:none;margin-top:24px;background:#fff;border-radius:12px;padding:20px;box-shadow:0 1px 8px rgba(0,0,0,0.1)">
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
            <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">IMAGE (optionnel)</label>
            <div style="display:flex;align-items:center;gap:12px">
              <div id="form-art-img-preview" style="width:56px;height:56px;border-radius:8px;background:#f0f0f0;border:1.5px solid #ddd;display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0">
                <span style="font-size:20px;opacity:.4">📰</span>
              </div>
              <div style="flex:1">
                <input type="file" id="form-art-img-file" accept="image/png,image/jpeg,image/webp">
                <div style="font-size:11px;color:#888;margin-top:4px">PNG/JPG/WEBP — remplace l'image actuelle si un fichier est choisi</div>
              </div>
            </div>
            <input type="hidden" id="form-art-img-current">
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>Xe(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Jn(e)),e.querySelectorAll("[data-edit-row]").forEach(n=>{const i=(t||[]).find(l=>l.id===n.dataset.editRow);i&&n.addEventListener("click",()=>Xe(i))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await I.from("patch_notes").delete().eq("id",n.dataset.delete),await Me(e))})})}function Kn(e){const t=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
    <div data-edit-row="${e.id}" class="admin-light-card" style="background:#fff;border-radius:10px;padding:14px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;gap:12px;align-items:flex-start;cursor:pointer">
      ${e.image_url?`<img src="${e.image_url}" style="width:60px;height:60px;object-fit:cover;border-radius:8px;flex-shrink:0">`:""}
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:2px">
          <span style="font-size:14px;font-weight:900;color:#1a1a1a">${e.title}</span>
          ${e.is_published?"":'<span style="font-size:10px;background:#f0f0f0;color:#888;padding:1px 6px;border-radius:6px;font-weight:700">BROUILLON</span>'}
        </div>
        <div style="font-size:11px;color:#999;margin-bottom:4px">${t}</div>
        <div style="font-size:12px;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e.description}</div>
      </div>
      <div style="display:flex;gap:6px;flex-shrink:0">
        <button data-delete="${e.id}" class="btn btn-ghost btn-sm" style="color:#cc2222" onclick="event.stopPropagation()">🗑️</button>
      </div>
    </div>`}function Xe(e){const t=document.getElementById("article-form");t.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img-current").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-img-file").value="";const n=document.getElementById("form-art-img-preview");n.innerHTML=e!=null&&e.image_url?`<img src="${e.image_url}" style="width:100%;height:100%;object-fit:cover">`:'<span style="font-size:20px;opacity:.4">📰</span>',document.getElementById("form-art-img-file").onchange=s=>{var _;const g=(_=s.target.files)==null?void 0:_[0];if(!g)return;const x=new FileReader;x.onload=()=>{n.innerHTML=`<img src="${x.result}" style="width:100%;height:100%;object-fit:cover">`},x.readAsDataURL(g)},document.getElementById("form-art-pub").checked=e?e.is_published:!0;const i=new Date((e==null?void 0:e.published_at)||Date.now()),l=new Date(i.getTime()-i.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=l,t.scrollIntoView({behavior:"smooth"})}async function Vn(e){const t=(e.name.split(".").pop()||"png").toLowerCase(),n=`journal/${Date.now()}.${t}`,{error:i}=await I.storage.from("assets").upload(n,e,{upsert:!0,cacheControl:"3600"});if(i)throw i;const{data:l}=I.storage.from("assets").getPublicUrl(n);return l.publicUrl}async function Jn(e){var f;const t=document.getElementById("form-id").value,n=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),l=((f=document.getElementById("form-art-img-file").files)==null?void 0:f[0])||null,s=document.getElementById("form-art-img-current").value||null,g=document.getElementById("form-art-pub").checked,x=document.getElementById("form-art-date").value,_=document.getElementById("form-save");if(!n){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}let o=s;if(l)try{_&&(_.textContent="📤 Envoi de l'image…"),o=await Vn(l)}catch(p){alert("Erreur upload image : "+p.message),_&&(_.textContent="💾 Enregistrer");return}const c=x?new Date(x).toISOString():new Date().toISOString(),d={title:n,description:i,image_url:o,is_published:g,published_at:c};let m;if(t?{error:m}=await I.from("patch_notes").update(d).eq("id",t):{error:m}=await I.from("patch_notes").insert(d),m){alert("Erreur : "+m.message);return}document.getElementById("article-form").style.display="none",await Me(e)}async function Yn(e){await ie(e)}async function ie(e){var c,d,m,f,p,r,h,u,w,L,a,v;const{data:t}=await I.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
    <div style="display:flex;gap:16px;height:calc(100vh - 56px);overflow:hidden;padding:16px">

      <!-- Colonne gauche : panneau de modification -->
      <div style="width:420px;flex-shrink:0;overflow-y:auto">
        <!-- Formulaire -->
        <div id="ts-form" style="background:#fff;border-radius:12px;padding:20px;box-shadow:0 1px 8px rgba(0,0,0,0.1)">
          <div id="ts-form-empty" style="text-align:center;padding:40px 10px;color:#aaa">
            ← Sélectionnez une étape ou créez-en une nouvelle
          </div>
          <div id="ts-form-content" style="display:none">
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([E,b,$])=>`<button type="button" data-cmd="${b}" title="${$}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${E}</button>`).join("")}
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
          </div><!-- /ts-form-content -->
        </div><!-- /ts-form -->
      </div><!-- /colonne gauche -->

      <!-- Colonne droite : liste des étapes -->
      <div style="flex:1;overflow-y:auto">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
          <div>
            <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">🎓 Tutoriel — Étapes</h2>
            <div style="font-size:12px;color:var(--tile-fg-dim);margin-top:2px">Gérez les slides du tutoriel affiché aux nouveaux joueurs</div>
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
            </div>`:(t||[]).map(E=>Wn(E)).join("")}
        </div>
      </div><!-- /colonne droite -->
    </div>`,(c=document.getElementById("ts-add"))==null||c.addEventListener("click",()=>et(null,(t==null?void 0:t.length)||0)),(d=document.getElementById("ts-reset"))==null||d.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:E}=await I.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(E?"Erreur : "+E.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(m=document.getElementById("ts-cancel"))==null||m.addEventListener("click",It),(f=document.getElementById("ts-save"))==null||f.addEventListener("click",()=>Qn(e)),(p=document.getElementById("ts-preview-btn"))==null||p.addEventListener("click",Zn);const n=document.getElementById("ts-editor"),i=()=>{const E=document.getElementById("ts-content");E&&n&&(E.value=n.innerHTML)};n==null||n.addEventListener("input",i),n==null||n.addEventListener("blur",i);const l=()=>{document.activeElement!==n&&(n==null||n.focus())};(r=document.getElementById("ts-toolbar"))==null||r.querySelectorAll("[data-cmd]").forEach(E=>{E.addEventListener("mousedown",b=>{b.preventDefault(),l();const $=E.dataset.cmd;$.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,$.split(":")[1]):document.execCommand($,!1,null),i()})}),(h=document.getElementById("ts-insert-color"))==null||h.addEventListener("mousedown",E=>{E.preventDefault(),l();const b=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");b&&(document.execCommand("foreColor",!1,b),i())}),(u=document.getElementById("ts-clear-format"))==null||u.addEventListener("mousedown",E=>{E.preventDefault(),l(),document.execCommand("removeFormat",!1,null),i()}),n==null||n.addEventListener("focus",()=>{n&&(n.style.borderColor="#1A6B3C")}),n==null||n.addEventListener("blur",()=>{n&&(n.style.borderColor="#ddd")});const s=document.getElementById("ts-image"),g=document.getElementById("ts-img-preview"),x=document.getElementById("ts-img-preview-el"),_=document.getElementById("ts-img-picker-grid"),o=()=>{var b;const E=(b=s==null?void 0:s.value)==null?void 0:b.trim();if(E){const $="/";x.src=`${$}icons/${E}`,g.style.display="block"}else g.style.display="none"};s==null||s.addEventListener("input",o),(w=document.getElementById("ts-img-clear"))==null||w.addEventListener("click",()=>{s&&(s.value=""),g.style.display="none",_.style.display="none"}),(L=document.getElementById("ts-img-pick"))==null||L.addEventListener("click",async()=>{if(_.style.display!=="none"){_.style.display="none";return}_.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',_.style.display="block";try{const b=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),$=Array.isArray(b)?b.filter(k=>k.name.startsWith("tuto_")):[];if(!$.length){_.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const y="/";_.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+$.map(k=>`
          <div data-pick="${k.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${y}icons/${k.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${k.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",_.querySelectorAll("[data-pick]").forEach(k=>{k.addEventListener("click",()=>{s&&(s.value=k.dataset.pick),o(),_.style.display="none"})})}catch(E){_.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+E.message+"</div>"}}),(a=document.getElementById("ts-color"))==null||a.addEventListener("input",E=>{const b=document.getElementById("ts-color-hex");b&&(b.value=E.target.value)}),(v=document.getElementById("ts-color-hex"))==null||v.addEventListener("input",E=>{const b=E.target.value;if(/^#[0-9a-fA-F]{6}$/.test(b)){const $=document.getElementById("ts-color");$&&($.value=b)}}),e.querySelectorAll("[data-edit-row]").forEach(E=>{const b=(t||[]).find($=>$.id===E.dataset.editRow);b&&E.addEventListener("click",()=>et(b))}),e.querySelectorAll("[data-delete]").forEach(E=>{E.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await I.from("tutorial_steps").delete().eq("id",E.dataset.delete),ie(e))})}),e.querySelectorAll("[data-toggle]").forEach(E=>{E.addEventListener("click",async()=>{const b=(t||[]).find($=>$.id===E.dataset.toggle);b&&(await I.from("tutorial_steps").update({is_active:!b.is_active}).eq("id",b.id),ie(e))})}),e.querySelectorAll("[data-up]").forEach(E=>{E.addEventListener("click",async()=>{const b=t||[],$=b.findIndex(y=>y.id===E.dataset.up);$<=0||(await Promise.all([I.from("tutorial_steps").update({step_order:b[$-1].step_order}).eq("id",b[$].id),I.from("tutorial_steps").update({step_order:b[$].step_order}).eq("id",b[$-1].id)]),ie(e))})}),e.querySelectorAll("[data-down]").forEach(E=>{E.addEventListener("click",async()=>{const b=t||[],$=b.findIndex(y=>y.id===E.dataset.down);$<0||$>=b.length-1||(await Promise.all([I.from("tutorial_steps").update({step_order:b[$+1].step_order}).eq("id",b[$].id),I.from("tutorial_steps").update({step_order:b[$].step_order}).eq("id",b[$+1].id)]),ie(e))})})}function Wn(e){return`
  <div data-edit-row="${e.id}" style="background:#fff;border-radius:10px;padding:12px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;align-items:center;gap:12px;cursor:pointer">
    <div style="font-size:28px;flex-shrink:0;width:40px;text-align:center">${e.emoji}</div>
    <div style="width:10px;height:36px;border-radius:4px;flex-shrink:0;background:${e.color}"></div>
    <div style="flex:1;min-width:0">
      <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e.title}</div>
      <div style="font-size:11px;color:#aaa;margin-top:2px">Ordre : ${e.step_order} · ${e.is_active?"🟢 Active":"🔴 Désactivée"}</div>
    </div>
    <div style="display:flex;gap:4px;flex-shrink:0;flex-wrap:wrap;justify-content:flex-end">
      <button data-up="${e.id}" class="btn btn-ghost btn-sm" title="Monter" style="padding:4px 8px" onclick="event.stopPropagation()">↑</button>
      <button data-down="${e.id}" class="btn btn-ghost btn-sm" title="Descendre" style="padding:4px 8px" onclick="event.stopPropagation()">↓</button>
      <button data-toggle="${e.id}" class="btn btn-ghost btn-sm" style="padding:4px 8px" onclick="event.stopPropagation()">${e.is_active?"🔴 Désactiver":"🟢 Activer"}</button>
      <button data-delete="${e.id}" class="btn btn-ghost btn-sm" style="color:#cc2222;padding:4px 8px" onclick="event.stopPropagation()">🗑️</button>
    </div>
  </div>`}function et(e,t=0){document.getElementById("ts-form-empty").style.display="none",document.getElementById("ts-form-content").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const n=document.getElementById("ts-editor");n&&(n.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??t,document.getElementById("ts-active").checked=e?e.is_active:!0;const i=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=i,document.getElementById("ts-color-hex").value=i;const l=(e==null?void 0:e.image_url)||"",s=document.getElementById("ts-image");s&&(s.value=l);const g=document.getElementById("ts-img-preview"),x=document.getElementById("ts-img-preview-el");if(l&&g&&x){const _="/";x.src=`${_}icons/${l}`,g.style.display="block"}else g&&(g.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function It(){document.getElementById("ts-form-content").style.display="none",document.getElementById("ts-form-empty").style.display="block",document.getElementById("ts-preview-area").innerHTML=""}function Zn(){var o,c;const e=document.getElementById("ts-emoji").value||"⚽",t=document.getElementById("ts-title").value||"Titre",n=document.getElementById("ts-editor"),i=n?n.innerHTML:document.getElementById("ts-content").value||"",l=document.getElementById("ts-color-hex").value||"#1A6B3C",s=(c=(o=document.getElementById("ts-image"))==null?void 0:o.value)==null?void 0:c.trim(),x=s?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${s}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",_=document.getElementById("ts-preview-area");_.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${l}"></div></div>
        <div style="padding:20px 20px 0;text-align:center">
          <div style="font-size:48px;margin-bottom:8px;line-height:1">${e}</div>
          <div style="font-size:17px;font-weight:900;color:#111;margin-bottom:4px">${t}</div>
          <div style="font-size:11px;color:#aaa">6 / 10</div>
        </div>
        ${x}
        <div style="padding:${s?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${i}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${l};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,_.querySelectorAll("ul,ol").forEach(d=>{d.style.paddingLeft="20px",d.style.margin="6px 0"}),_.querySelectorAll("li").forEach(d=>{d.style.marginBottom="4px"}),_.querySelectorAll("p").forEach(d=>{d.style.marginBottom="8px"})}async function Qn(e){var d,m;const t=document.getElementById("ts-id").value,n=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),l=document.getElementById("ts-editor"),s=(l?l.innerHTML:document.getElementById("ts-content").value).trim(),g=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",x=parseInt(document.getElementById("ts-order").value)||0,_=document.getElementById("ts-active").checked;if(!i||!s){alert("Titre et contenu sont obligatoires.");return}const o={emoji:n,title:i,content:s,color:g,step_order:x,is_active:_,image_url:((m=(d=document.getElementById("ts-image"))==null?void 0:d.value)==null?void 0:m.trim())||null};let c;if(t?{error:c}=await I.from("tutorial_steps").update(o).eq("id",t):{error:c}=await I.from("tutorial_steps").insert(o),c){alert("Erreur : "+c.message);return}It(),ie(e)}const kt="/",Lt=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function Xn(e,t){await ye(e,t)}async function ye(e,t){var l,s;const[{data:n},{data:i}]=await Promise.all([I.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),I.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;gap:10px;flex-wrap:wrap">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">🏟️ Stades</h2>
        <div style="display:flex;gap:8px">
          <button id="st-gen-countries-btn" class="btn btn-ghost">🌍 Créer les stades Pays manquants</button>
          <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
        </div>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="st-list">
        ${(n||[]).length?(n||[]).map(g=>ei(g)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucun stade créé.</div>'}
      </div>
    </div>`,(l=document.getElementById("st-add-btn"))==null||l.addEventListener("click",()=>tt(null,i,e,t)),(s=document.getElementById("st-gen-countries-btn"))==null||s.addEventListener("click",async()=>{const{toast:g}=t,x=new Set((n||[]).filter(m=>!m.club_id&&m.country_code).map(m=>m.country_code)),_=Lt.filter(([m])=>!x.has(m));if(!_.length){g("Tous les pays ont déjà un stade.","info");return}if(!confirm(`Créer ${_.length} stade(s) "Pays" manquant(s) ?`))return;const o=_.map(([m,f])=>({name:`Stade ${f}`,club_id:null,country_code:m})),{data:c,error:d}=await I.from("stadium_definitions").insert(o).select();if(d){g("Erreur : "+d.message,"error");return}c!=null&&c.length&&await I.from("cards").insert(c.map(m=>({card_type:"stadium",stadium_id:m.id}))),g(`${(c==null?void 0:c.length)||0} stade(s) Pays créé(s) ✅`,"success"),ye(e,t)}),e.querySelectorAll("[data-edit-stadium]").forEach(g=>{g.addEventListener("click",()=>{const x=(n||[]).find(_=>_.id===g.dataset.editStadium);x&&tt(x,i,e,t)})})}function ei(e){var l,s;let t=null;e.image_url?t=e.image_url.startsWith("http")?e.image_url:`${kt}icons/${e.image_url}`:(l=e.club)!=null&&l.logo_url?t=e.club.logo_url:e.country_code&&(t=`https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/64.png`);const n=((s=e.club)==null?void 0:s.encoded_name)||e.country_code||"—",i=Be(e.name,t,`${n}<br>+10 ⭐`,{width:140});return`<div data-edit-stadium="${e.id}" style="cursor:pointer;transition:transform .15s" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
    ${i}
  </div>`}function tt(e,t,n,i){var c,d,m;const{openModal:l,closeModal:s,toast:g}=i,x=`
    <div style="display:flex;gap:20px;flex-wrap:wrap">
      <div style="flex:1;min-width:220px;display:flex;flex-direction:column;gap:12px">
        <div>
          <label>NOM DU STADE *</label>
          <input id="st-name" placeholder="Ex: Stade de France" value="${(e==null?void 0:e.name)||""}">
        </div>
        <div>
          <label>CLUB AFFILIÉ (optionnel)</label>
          <select id="st-club">
            <option value="">-- Aucun club (bonus pays) --</option>
            ${(t||[]).map(f=>`<option value="${f.id}" data-logo="${f.logo_url||""}" ${(e==null?void 0:e.club_id)===f.id?"selected":""}>${f.encoded_name}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>PAYS (si pas de club)</label>
          <select id="st-country">
            <option value="">— Aucun pays —</option>
            ${Lt.map(([f,p])=>`<option value="${f}" ${(e==null?void 0:e.country_code)===f?"selected":""}>${p} (${f})</option>`).join("")}
          </select>
        </div>
        <div>
          <label>IMAGE (icône du stade)</label>
          <input id="st-image" placeholder="logo_club.png" value="${(e==null?void 0:e.image_url)||""}">
        </div>
      </div>
      <div style="flex-shrink:0;display:flex;flex-direction:column;align-items:center;gap:8px">
        <div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Aperçu carte</div>
        <div id="st-preview-card" style="width:140px"></div>
      </div>
    </div>
    ${e?'<button id="st-delete" class="btn btn-danger btn-sm" style="margin-top:16px">🗑️ Supprimer ce stade</button>':""}
  `;l(e?`Modifier : ${e.name}`:"Nouveau stade",x,`
    <button id="st-cancel" class="btn btn-ghost">Annuler</button>
    <button id="st-save" class="btn btn-primary">Enregistrer</button>
  `);const o=()=>{var b,$,y,k,A,S,C;const f=((b=document.getElementById("st-name"))==null?void 0:b.value)||"NOM DU STADE",p=(y=($=document.getElementById("st-image"))==null?void 0:$.value)==null?void 0:y.trim(),r=(A=(k=document.getElementById("st-country"))==null?void 0:k.value)==null?void 0:A.trim(),h=document.getElementById("st-club"),u=(h==null?void 0:h.selectedIndex)||0,w=h&&u>0?h.options[u].text:"",L=((C=(S=h==null?void 0:h.options[u])==null?void 0:S.getAttribute)==null?void 0:C.call(S,"data-logo"))||"";let a=null;p?a=p.startsWith("http")?p:`${kt}icons/${p}`:L?a=L:r&&(a=`https://flagsapi.com/${r.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`);const v=w||r||"—",E=document.getElementById("st-preview-card");E&&(E.innerHTML=Be(f,a,`${v}<br>+10 ⭐`,{width:140}))};o(),["st-name","st-club","st-country","st-image"].forEach(f=>{var p,r;(p=document.getElementById(f))==null||p.addEventListener("input",o),(r=document.getElementById(f))==null||r.addEventListener("change",o)}),(c=document.getElementById("st-cancel"))==null||c.addEventListener("click",()=>s()),(d=document.getElementById("st-save"))==null||d.addEventListener("click",async()=>{const f=document.getElementById("st-name").value.trim(),p=document.getElementById("st-club").value||null,r=document.getElementById("st-country").value.trim().toUpperCase()||null,h=document.getElementById("st-image").value.trim()||null;if(!f){g("Le nom est obligatoire","error");return}const u={name:f,club_id:p,country_code:r,image_url:h},{error:w}=e?await I.from("stadium_definitions").update(u).eq("id",e.id):await I.from("stadium_definitions").insert(u);if(w){g("Erreur : "+w.message,"error");return}g(e?"Stade modifié ✅":"Stade créé ✅","success"),s(),ye(n,i)}),(m=document.getElementById("st-delete"))==null||m.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await I.from("stadium_definitions").delete().eq("id",e.id),g("Stade supprimé","success"),s(),ye(n,i))})}const Q=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],ti=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}],Z=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],nt=["GK","DEF","MIL","ATT"];async function ni(e,t){await Re(e,t)}async function Re(e,t){var i;const{data:n}=await I.from("gc_definitions").select("*").order("sort_order").order("created_at");e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">⚡ Game Changers</h2>
        <button id="gc-add-btn" class="btn btn-primary">+ Nouvelle carte</button>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="gc-list">
        ${(n||[]).length?(n||[]).map(l=>ii(l)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucune carte Game Changer.</div>'}
      </div>
    </div>`,(i=document.getElementById("gc-add-btn"))==null||i.addEventListener("click",()=>it(null,e,t)),e.querySelectorAll("[data-edit-gc]").forEach(l=>{l.addEventListener("click",()=>{const s=(n||[]).find(g=>g.id===l.dataset.editGc);s&&it(s,e,t)})}),e.querySelectorAll(".btn-del-gc").forEach(l=>{l.addEventListener("click",async s=>{s.stopPropagation(),confirm("Supprimer cette carte Game Changer ?")&&(await I.from("gc_definitions").delete().eq("id",l.dataset.del),Re(e,t))})})}function ii(e){const t=Q.find(l=>l.value===e.gc_type)||Q[0],n=e.image_url?`/icons/${e.image_url}`:null,i=me(e.name||"?",n,t.label.split(" ")[0],e.effect||"",{width:130});return`<div data-edit-gc="${e.id}" style="position:relative;cursor:pointer">
    ${i}
    <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
      <button class="btn-del-gc" data-del="${e.id}"
        style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0">✕</button>
    </div>
    ${e.is_active?"":'<div style="position:absolute;top:4px;right:4px;z-index:10;background:#555;color:#fff;font-size:9px;font-weight:700;padding:2px 6px;border-radius:8px">INACTIF</div>'}
  </div>`}function it(e,t,n){var m,f,p,r,h;const{openModal:i,closeModal:l,toast:s}=n,g=!e,x=e||{name:"",gc_type:"game_changer",color:"purple",effect:"",image_url:"",sort_order:0,is_active:!0,effect_type:"BOOST_STAT",effect_params:{}},_=(()=>{const u=x.effect_params||{},w=Z.find(L=>L.value===(x.effect_type||"BOOST_STAT"))||Z[0];return`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${w.hasValue?`<div>
        <label>VALEUR (+N)</label>
        <input id="gc-p-value" type="number" min="1" max="5" value="${u.value||2}">
      </div>`:""}
      ${w.hasCount?`<div>
        <label>NB JOUEURS</label>
        <input id="gc-p-count" type="number" min="1" max="11" value="${u.count||1}">
      </div>`:""}
      ${w.hasTarget?`<div>
        <label>CIBLE</label>
        <select id="gc-p-target">
          <option value="home" ${(u.target||"home")==="home"?"selected":""}>Mon équipe</option>
          <option value="opponent" ${u.target==="opponent"?"selected":""}>Équipe adverse</option>
        </select>
      </div>`:""}
      ${w.hasRoles?`<div>
        <label>POSTES CIBLÉS</label>
        <div style="display:flex;gap:4px;flex-wrap:wrap">
          ${nt.map(L=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555">
            <input type="checkbox" class="gc-p-role" value="${L}" ${!u.roles||u.roles.includes(L)?"checked":""}> ${L}
          </label>`).join("")}
        </div>
      </div>`:""}
    </div>`})(),o=`
    <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:#1a1a2e;border-radius:12px">
      <div id="gc-modal-preview">${me(x.name||"?",x.image_url?`/icons/${x.image_url}`:null,(Q.find(u=>u.value===x.gc_type)||Q[0]).label.split(" ")[0],x.effect||"",{width:150})}</div>
    </div>

    <div style="display:flex;flex-direction:column;gap:12px">
      <div>
        <label>NOM</label>
        <input id="gc-name" value="${x.name}">
      </div>
      <div>
        <label>EFFET / DESCRIPTION</label>
        <textarea id="gc-effect" rows="3">${x.effect||""}</textarea>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label>TYPE</label>
          <select id="gc-type">
            ${Q.map(u=>`<option value="${u.value}" ${x.gc_type===u.value?"selected":""}>${u.label}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>COULEUR</label>
          <select id="gc-color">
            ${ti.map(u=>`<option value="${u.value}" ${x.color===u.value?"selected":""}>${u.label}</option>`).join("")}
          </select>
        </div>
      </div>
      <div>
        <label>IMAGE (public/icons/gamechanger-*)</label>
        <div style="display:flex;gap:8px;align-items:center;margin-bottom:8px">
          <input id="gc-image-url" value="${x.image_url||""}" placeholder="gamechanger-nom.png" style="flex:1">
          <button id="btn-pick-gc-icon" class="btn btn-primary btn-sm" style="white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
        </div>
        <div style="display:flex;gap:8px;align-items:center">
          <input type="file" id="gc-image-upload" accept="image/png,image/jpeg,image/webp" style="flex:1;padding:6px;border:1px solid #ddd;border-radius:6px;background:#f9f9f9">
          <button id="btn-upload-gc-icon" class="btn btn-primary btn-sm" style="white-space:nowrap;flex-shrink:0">📤 Upload</button>
        </div>
        <div id="gc-upload-status" style="font-size:11px;color:#666;margin-top:6px;display:none"></div>
        <div id="gc-icon-picker" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label>ORDRE</label>
          <input id="gc-sort" type="number" value="${x.sort_order||0}">
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding-top:20px">
          <input type="checkbox" id="gc-active" ${x.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
          <label for="gc-active" style="cursor:pointer;font-weight:600;text-transform:none">Actif</label>
        </div>
      </div>
      <div style="border-top:1px solid #eee;padding-top:12px;margin-top:4px">
        <label style="color:#7a28b8">EFFET EN JEU</label>
        <div>
          <label>TYPE D'EFFET</label>
          <select id="gc-effect-type" style="margin-bottom:10px">
            ${Z.map(u=>`<option value="${u.value}" ${(x.effect_type||"BOOST_STAT")===u.value?"selected":""}>${u.label}</option>`).join("")}
          </select>
        </div>
        <div id="gc-params-wrap">${_}</div>
      </div>
    </div>
  `;i(g?"Nouvelle carte Game Changer":`Modifier : ${x.name}`,o,`
    <button id="gc-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gc-save" class="btn btn-primary">💾 Enregistrer</button>
  `);const d=()=>{var b,$,y,k,A;const u=((b=document.getElementById("gc-name"))==null?void 0:b.value)||"?",w=(($=document.getElementById("gc-effect"))==null?void 0:$.value)||"",L=((y=document.getElementById("gc-type"))==null?void 0:y.value)||"game_changer",a=(A=(k=document.getElementById("gc-image-url"))==null?void 0:k.value)==null?void 0:A.trim(),v=Q.find(S=>S.value===L)||Q[0],E=document.getElementById("gc-modal-preview");E&&(E.innerHTML=me(u,a?`/icons/${a}`:null,v.label.split(" ")[0],w,{width:150}))};["gc-name","gc-effect","gc-type","gc-image-url"].forEach(u=>{var w,L;(w=document.getElementById(u))==null||w.addEventListener("input",d),(L=document.getElementById(u))==null||L.addEventListener("change",d)}),(m=document.getElementById("gc-effect-type"))==null||m.addEventListener("change",()=>{const u=document.getElementById("gc-effect-type").value,w=Z.find(a=>a.value===u)||Z[0],L=document.getElementById("gc-params-wrap");L.innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${w.hasValue?'<div><label>VALEUR (+N)</label><input id="gc-p-value" type="number" min="1" max="5" value="2"></div>':""}
      ${w.hasCount?'<div><label>NB JOUEURS</label><input id="gc-p-count" type="number" min="1" max="11" value="1"></div>':""}
      ${w.hasTarget?'<div><label>CIBLE</label><select id="gc-p-target"><option value="home">Mon équipe</option><option value="opponent">Équipe adverse</option></select></div>':""}
      ${w.hasRoles?`<div><label>POSTES CIBLÉS</label><div style="display:flex;gap:4px;flex-wrap:wrap">${nt.map(a=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555"><input type="checkbox" class="gc-p-role" value="${a}" checked> ${a}</label>`).join("")}</div></div>`:""}
    </div>`}),(f=document.getElementById("btn-pick-gc-icon"))==null||f.addEventListener("click",async()=>{var w;const u=document.getElementById("gc-icon-picker");if(u){if(u.style.display!=="none"){u.style.display="none";return}u.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',u.style.display="block";try{const a=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),v=Array.isArray(a)?a.filter(b=>b.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(b.name)):[];if(!v.length){u.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const E=((w=document.getElementById("gc-image-url"))==null?void 0:w.value)||"";u.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
        ${v.map(b=>`
        <div class="gc-icon-item" data-name="${b.name}"
          style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${b.name===E?"#7a28b8":"#ddd"};background:${b.name===E?"#f5f0ff":"#fff"}">
          <img src="/icons/${b.name}" style="height:44px;width:100%;object-fit:contain">
          <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
        </div>`).join("")}
      </div>`,u.querySelectorAll(".gc-icon-item").forEach(b=>{b.addEventListener("click",()=>{const $=document.getElementById("gc-image-url");$&&($.value=b.dataset.name),u.style.display="none",d()})})}catch(L){u.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${L.message}</div>`}}}),(p=document.getElementById("btn-upload-gc-icon"))==null||p.addEventListener("click",async()=>{var E;const u=document.getElementById("gc-image-upload"),w=(E=u==null?void 0:u.files)==null?void 0:E[0];if(!w){s("Choisir une image d'abord","error");return}const L=document.getElementById("gc-upload-status"),a=document.getElementById("btn-upload-gc-icon"),v=a.textContent;try{L.style.display="block",L.textContent="⏳ Upload en cours...",L.style.color="#666",a.disabled=!0;const b=w.name.split(".").pop().toLowerCase();if(!["png","jpg","jpeg","webp"].includes(b))throw new Error("Format invalide (PNG, JPG, WebP)");const y=Date.now(),A=`gamechanger-${w.name.replace(/\.[^.]+$/,"").replace(/[^a-z0-9-]/gi,"_").toLowerCase()}-${y}.${b}`,{data:S,error:C}=await I.storage.from("gc-icons").upload(A,w,{upsert:!1});if(C)throw C;document.getElementById("gc-image-url").value=A,d(),L.textContent="✅ Image uploadée avec succès",L.style.color="#27ae60",a.disabled=!1,a.textContent=v,u.value="",setTimeout(()=>{L.style.display="none"},3e3)}catch(b){L.textContent=`❌ Erreur : ${b.message}`,L.style.color="#c0392b",a.disabled=!1,a.textContent=v}}),(r=document.getElementById("gc-cancel"))==null||r.addEventListener("click",()=>l()),(h=document.getElementById("gc-save"))==null||h.addEventListener("click",async()=>{var E,b,$,y,k,A,S,C,D,j,O,U,H,B;const u=Z.find(M=>{var T;return M.value===(((T=document.getElementById("gc-effect-type"))==null?void 0:T.value)||"BOOST_STAT")})||Z[0],w=u.hasRoles?[...document.querySelectorAll(".gc-p-role:checked")].map(M=>M.value):null,L={...u.hasValue?{value:Number((E=document.getElementById("gc-p-value"))==null?void 0:E.value)||2}:{},...u.hasCount?{count:Number((b=document.getElementById("gc-p-count"))==null?void 0:b.value)||1}:{},...u.hasTarget?{target:(($=document.getElementById("gc-p-target"))==null?void 0:$.value)||"home"}:{},...u.hasRoles?{roles:w!=null&&w.length?w:null}:{}},a={name:((k=(y=document.getElementById("gc-name"))==null?void 0:y.value)==null?void 0:k.trim())||"",effect:((S=(A=document.getElementById("gc-effect"))==null?void 0:A.value)==null?void 0:S.trim())||null,image_url:((D=(C=document.getElementById("gc-image-url"))==null?void 0:C.value)==null?void 0:D.trim())||null,gc_type:((j=document.getElementById("gc-type"))==null?void 0:j.value)||"game_changer",color:((O=document.getElementById("gc-color"))==null?void 0:O.value)||"purple",sort_order:Number((U=document.getElementById("gc-sort"))==null?void 0:U.value)||0,is_active:((H=document.getElementById("gc-active"))==null?void 0:H.checked)??!0,effect_type:((B=document.getElementById("gc-effect-type"))==null?void 0:B.value)||"BOOST_STAT",effect_params:L};if(!a.name){s("Le nom est obligatoire","error");return}const{error:v}=g?await I.from("gc_definitions").insert(a):await I.from("gc_definitions").update(a).eq("id",x.id);if(v){s(v.message,"error");return}s(g?"Carte créée ✅":"Carte modifiée ✅","success"),l(),Re(t,n)})}async function ai(e,{toast:t,openModal:n,closeModal:i}){await P(e,{toast:t,openModal:n,closeModal:i})}async function P(e,t){var E,b,$;const{toast:n,openModal:i,closeModal:l}=t,[{data:s,error:g},{data:x},{data:_},{data:o}]=await Promise.all([I.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),I.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1),I.from("season_reward_tiers").select("*").order("rank_min"),I.from("booster_configs").select("id,name").order("sort_order")]);if(g){e.innerHTML=`<p style="color:red">${g.message}</p>`;return}const c=s||[],d=c.find(y=>y.is_active),m=(x||[]).filter(y=>(y.placement_matches||0)>=1),f=m.filter(y=>(y.placement_matches||0)>=10),p=["bronze","silver","gold","platinum","diamond","master"],r={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},h={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},u={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},w={};p.forEach(y=>{w[y]=0}),f.forEach(y=>{const k=y.rank_tier||"bronze";w[k]!==void 0&&w[k]++});const L=f.length?Math.round(f.reduce((y,k)=>y+(k.mmr||1e3),0)/f.length):0;function a(y){return y?new Date(y).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function v(y){const k=new Date;return y.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(y.end_at)<k?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${d?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${d.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${m.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Joueurs ranked</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${f.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Classés (10+ matchs)</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${L}</div>
            <div style="font-size:11px;color:var(--gray-600)">MMR moyen</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(d.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${f.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${p.map(y=>{const k=w[y],A=f.length>0?Math.round(k/f.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${u[y]} ${r[y]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${A}%;background:${h[y]};border-radius:4px;transition:width 0.5s"></div>
                </div>
                <span style="width:40px;text-align:right;color:var(--gray-600)">${k} (${A}%)</span>
              </div>`}).join("")}
        </div>`:`<div style="font-size:12px;color:var(--gray-600)">Aucun joueur classé pour l'instant.</div>`}
      </div>`:`
      <div class="card-panel" style="background:rgba(230,120,34,0.08);border:1.5px solid #e67e22">
        <div style="font-weight:700;color:#e67e22">⚠️ Aucune saison active</div>
        <div style="font-size:13px;color:var(--gray-600);margin-top:4px">Le mode Ranked est désactivé jusqu'à l'activation d'une saison.</div>
      </div>`}

      <!-- Header + bouton créer -->
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
        <div style="font-weight:700;font-size:14px">Toutes les saisons (${c.length})</div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-yellow" id="start-new-season-btn">🚀 Démarrer une nouvelle saison</button>
          <button class="btn btn-primary" id="create-season-btn">+ Nouvelle saison (sans reset)</button>
        </div>
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
              ${c.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':c.map(y=>{const k=Math.round((new Date(y.end_at)-new Date(y.start_at))/864e5),A=new Date(y.end_at)<new Date&&!y.is_active;return`
                    <tr>
                      <td><b>${y.name}</b></td>
                      <td style="font-size:12px">${a(y.start_at)}</td>
                      <td style="font-size:12px">${a(y.end_at)}</td>
                      <td style="font-size:12px">${k} jours</td>
                      <td>${v(y)}</td>
                      <td style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn btn-ghost btn-sm" data-edit="${y.id}">✏️ Modifier</button>
                        <button class="btn btn-ghost btn-sm" data-rewards-for="${y.id}" style="color:#D4A017;border-color:#D4A017">🏆 Récompenses</button>
                        ${y.is_active?"":`<button class="btn btn-yellow btn-sm" data-launch="${y.id}">▶ Lancer la saison</button>`}
                        ${y.is_active?`<button class="btn btn-ghost btn-sm" data-deactivate="${y.id}" style="color:#e67e22">⏹ Désactiver</button>`:`<button class="btn btn-primary btn-sm" data-activate="${y.id}">▶ Activer</button>`}
                        ${A?`<button class="btn btn-danger btn-sm" data-delete="${y.id}">🗑</button>`:""}
                      </td>
                    </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Récompenses de saison par palier de classement -->
      <div class="card-panel" id="rewards-section">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;flex-wrap:wrap;gap:8px">
          <div style="font-weight:700;font-size:14px">🏆 Récompenses de saison</div>
          <button id="add-reward-tier-btn" class="btn btn-primary btn-sm" ${c.length?"":`disabled title="Crée d'abord une saison"`}>+ Ajouter un palier</button>
        </div>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:12px">
          Paliers de classement (TOP 1, TOP 3, TOP 10...) associés à une saison Ranked. Chaque palier peut donner des crédits,
          des cartes joueur spécifiques et/ou des boosters, à partir d'une date d'activation optionnelle.
        </div>
        ${c.length?`
        <div class="table-wrap">
          <table>
            <thead>
              <tr><th>Saison</th><th>Palier</th><th>Classement</th><th style="text-align:right">Crédits</th><th style="text-align:center">Cartes</th><th style="text-align:center">Boosters</th><th>Activation</th><th>Statut</th><th>Actions</th></tr>
            </thead>
            <tbody>
              ${(_||[]).map(y=>{var S;const k=!y.activate_at||new Date(y.activate_at)<=new Date;return`<tr>
                  <td style="font-size:12px">${((S=c.find(C=>C.id===y.season_id))==null?void 0:S.name)||"—"}</td>
                  <td><b>${y.label}</b></td>
                  <td>${y.rank_min===y.rank_max?`#${y.rank_min}`:`#${y.rank_min}–${y.rank_max}`}</td>
                  <td style="text-align:right">${(y.credits||0).toLocaleString("fr")}</td>
                  <td style="text-align:center">${(y.player_ids||[]).length}</td>
                  <td style="text-align:center">${(y.booster_config_ids||[]).length}</td>
                  <td style="font-size:12px">${y.activate_at?a(y.activate_at):"Immédiat"}</td>
                  <td>
                    ${y.distributed_at?`<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Distribué le ${a(y.distributed_at)}</span>`:k?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">● Prêt</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">⏳ Programmé</span>'}
                  </td>
                  <td style="white-space:nowrap">
                    <button class="btn btn-ghost btn-sm" data-edit-tier="${y.id}">✏️</button>
                    <button class="btn btn-primary btn-sm" data-distribute-tier="${y.id}" ${k?"":"disabled"}>🎁 Distribuer</button>
                    <button class="btn btn-danger btn-sm" data-delete-tier="${y.id}">🗑️</button>
                  </td>
                </tr>`}).join("")||'<tr><td colspan="9" style="text-align:center;color:var(--tile-fg-dim);padding:16px">Aucun palier configuré.</td></tr>'}
            </tbody>
          </table>
        </div>`:'<div style="color:var(--tile-fg-dim);font-size:13px;padding:10px">Crée une saison pour configurer ses récompenses.</div>'}
      </div>
    </div>`,(E=document.getElementById("create-season-btn"))==null||E.addEventListener("click",()=>{at(null,{toast:n,openModal:i,closeModal:l,reload:()=>P(e,t)})}),(b=document.getElementById("start-new-season-btn"))==null||b.addEventListener("click",()=>{oi(d,{toast:n,openModal:i,closeModal:l,reload:()=>P(e,t)})}),e.querySelectorAll("[data-edit]").forEach(y=>{const k=c.find(A=>A.id==y.dataset.edit);y.addEventListener("click",()=>{at(k,{toast:n,openModal:i,closeModal:l,reload:()=>P(e,t)})})}),e.querySelectorAll("[data-activate]").forEach(y=>{y.addEventListener("click",async()=>{const k=parseInt(y.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:A}=await I.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(A){n(A.message,"error");return}const{error:S}=await I.from("ranked_seasons").update({is_active:!0}).eq("id",k);if(S){n(S.message,"error");return}await I.from("users").update({current_season_id:k}).gt("placement_matches",0),n("Saison activée ✅","success"),P(e,t)})}),e.querySelectorAll("[data-rewards-for]").forEach(y=>{y.addEventListener("click",()=>{var S;const k=parseInt(y.dataset.rewardsFor);(S=document.getElementById("rewards-section"))==null||S.scrollIntoView({behavior:"smooth",block:"start"});const A=c.find(C=>C.id===k);_e(null,c,A,o||[],{toast:n,openModal:i,closeModal:l,reload:()=>P(e,t)})})}),e.querySelectorAll("[data-launch]").forEach(y=>{y.addEventListener("click",async()=>{const k=parseInt(y.dataset.launch),A=c.find(D=>D.id===k);if(!confirm(`Lancer "${A==null?void 0:A.name}" ?

Ceci va :
• Journaliser le classement actuel dans l'historique
• Recalculer le MMR de TOUS les joueurs (reset doux)
• Activer cette saison

Action irréversible. Continuer ?`))return;y.disabled=!0,y.textContent="⏳ Lancement...";const{data:S,error:C}=await I.rpc("admin_launch_season",{p_season_id:k});if(y.disabled=!1,y.textContent="▶ Lancer la saison",C){n(C.message,"error");return}if(!(S!=null&&S.success)){n((S==null?void 0:S.error)||"Échec du lancement","error");return}n(`Saison lancée ✅ (${S.logged} classement(s) archivé(s), ${S.reset} joueur(s) recalculé(s))`,"success"),P(e,t)})}),e.querySelectorAll("[data-deactivate]").forEach(y=>{y.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:k}=await I.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(y.dataset.deactivate));if(k){n(k.message,"error");return}n("Saison désactivée","success"),P(e,t)})}),e.querySelectorAll("[data-delete]").forEach(y=>{y.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:k}=await I.from("ranked_seasons").delete().eq("id",parseInt(y.dataset.delete));if(k){n(k.message,"error");return}n("Saison supprimée","success"),P(e,t)})}),($=document.getElementById("add-reward-tier-btn"))==null||$.addEventListener("click",()=>{_e(null,c,d,o||[],{toast:n,openModal:i,closeModal:l,reload:()=>P(e,t)})}),e.querySelectorAll("[data-edit-tier]").forEach(y=>{const k=(_||[]).find(A=>A.id===y.dataset.editTier);y.addEventListener("click",()=>{_e(k,c,d,o||[],{toast:n,openModal:i,closeModal:l,reload:()=>P(e,t)})})}),e.querySelectorAll("[data-distribute-tier]").forEach(y=>{y.addEventListener("click",async()=>{const k=(_||[]).find(C=>C.id===y.dataset.distributeTier);if(!confirm(`Distribuer les récompenses du palier "${k==null?void 0:k.label}" à tous les joueurs concernés ?`))return;y.disabled=!0,y.textContent="⏳...";const{data:A,error:S}=await I.rpc("admin_distribute_season_reward",{p_tier_id:y.dataset.distributeTier});if(S){n(S.message,"error"),y.disabled=!1,y.textContent="🎁 Distribuer";return}if(!(A!=null&&A.success)){n((A==null?void 0:A.error)||"Échec de la distribution","error"),y.disabled=!1,y.textContent="🎁 Distribuer";return}n(`Récompenses distribuées à ${A.rewarded} joueur(s) ✅`,"success"),P(e,t)})}),e.querySelectorAll("[data-delete-tier]").forEach(y=>{y.addEventListener("click",async()=>{if(!confirm("Supprimer ce palier de récompense ?"))return;const{error:k}=await I.from("season_reward_tiers").delete().eq("id",y.dataset.deleteTier);if(k){n(k.message,"error");return}n("Palier supprimé","success"),P(e,t)})})}function _e(e,t,n,i,{toast:l,openModal:s,closeModal:g,reload:x}){var r,h,u,w,L;const _=!!e,o=(e==null?void 0:e.season_id)??(n==null?void 0:n.id)??((r=t[0])==null?void 0:r.id)??null;let c=[];const d=a=>{if(!a)return"";const v=new Date(a);return new Date(v.getTime()-v.getTimezoneOffset()*6e4).toISOString().slice(0,16)},m=`
    <div style="display:flex;flex-direction:column;gap:12px">
      <div>
        <label>SAISON RANKED</label>
        <select id="rt-season">
          ${t.map(a=>`<option value="${a.id}" ${a.id===o?"selected":""}>${a.name}${a.is_active?" (active)":""}</option>`).join("")}
        </select>
      </div>
      <div>
        <label>LIBELLÉ</label>
        <input id="rt-label" value="${(e==null?void 0:e.label)||""}" placeholder="Ex: TOP 1, TOP 10...">
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label>CLASSEMENT MIN</label>
          <input id="rt-rank-min" type="number" min="1" value="${(e==null?void 0:e.rank_min)??1}">
        </div>
        <div>
          <label>CLASSEMENT MAX</label>
          <input id="rt-rank-max" type="number" min="1" value="${(e==null?void 0:e.rank_max)??1}">
        </div>
      </div>
      <div>
        <label>CRÉDITS OFFERTS</label>
        <input id="rt-credits" type="number" min="0" value="${(e==null?void 0:e.credits)??0}">
      </div>
      <div>
        <label>DATE D'ACTIVATION (optionnel — vide = immédiat)</label>
        <input id="rt-activate-at" type="datetime-local" value="${d(e==null?void 0:e.activate_at)}">
      </div>
      <div>
        <label>BOOSTERS OFFERTS</label>
        <div style="display:flex;flex-direction:column;gap:6px;max-height:140px;overflow-y:auto;background:#f7f7f7;border-radius:8px;padding:8px">
          ${i.length?i.map(a=>`
            <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;color:#333">
              <input type="checkbox" class="rt-booster-cb" value="${a.id}" ${((e==null?void 0:e.booster_config_ids)||[]).includes(a.id)?"checked":""}>
              ${a.name}
            </label>`).join(""):'<div style="color:#999;font-size:12px">Aucun booster configuré.</div>'}
        </div>
      </div>
      <div>
        <label>CARTES JOUEUR SPÉCIFIQUES GARANTIES</label>
        <div style="display:flex;gap:8px;margin-bottom:8px">
          <input id="rt-player-search" placeholder="Rechercher un joueur par nom..." style="flex:1">
          <button id="rt-player-search-btn" class="btn btn-ghost btn-sm" style="white-space:nowrap">🔍 Chercher</button>
        </div>
        <div id="rt-player-results" style="display:none;flex-direction:column;gap:4px;max-height:120px;overflow-y:auto;background:#f7f7f7;border-radius:8px;padding:6px;margin-bottom:8px"></div>
        <div id="rt-player-chips" style="display:flex;flex-wrap:wrap;gap:6px"></div>
      </div>
      <div id="rt-error" style="font-size:12px;color:#ff6b6b;min-height:14px"></div>
    </div>
  `;s(_?`Modifier : ${e.label}`:"Nouveau palier de récompense",m,`
    <button id="rt-cancel" class="btn btn-ghost">Annuler</button>
    <button id="rt-save" class="btn btn-primary">💾 Enregistrer</button>
  `);function p(){const a=document.getElementById("rt-player-chips");a&&(a.innerHTML=c.map(v=>`
      <span style="display:inline-flex;align-items:center;gap:6px;background:#1A6B3C;color:#fff;font-size:12px;font-weight:700;padding:4px 8px;border-radius:14px">
        ${v.label}
        <button data-remove-player="${v.id}" style="background:none;border:none;color:#fff;cursor:pointer;font-size:12px;padding:0">✕</button>
      </span>`).join(""),a.querySelectorAll("[data-remove-player]").forEach(v=>{v.addEventListener("click",()=>{c=c.filter(E=>E.id!==v.dataset.removePlayer),p()})}))}(h=e==null?void 0:e.player_ids)!=null&&h.length&&I.from("players").select("id,firstname,surname_real").in("id",e.player_ids).then(({data:a})=>{c=(a||[]).map(v=>({id:v.id,label:`${v.firstname} ${v.surname_real}`})),p()}),(u=document.getElementById("rt-player-search-btn"))==null||u.addEventListener("click",async()=>{const a=document.getElementById("rt-player-search").value.trim();if(a.length<2)return;const{data:v}=await I.from("players").select("id,firstname,surname_real,rarity").or(`firstname.ilike.%${a}%,surname_real.ilike.%${a}%`).limit(10),E=document.getElementById("rt-player-results");if(!(v!=null&&v.length)){E.style.display="flex",E.innerHTML='<div style="color:#999;font-size:12px;padding:4px">Aucun résultat.</div>';return}E.style.display="flex",E.innerHTML=v.map(b=>`
      <div data-add-player="${b.id}" data-label="${b.firstname} ${b.surname_real}" style="cursor:pointer;padding:6px 8px;border-radius:6px;font-size:13px;color:#333" onmouseover="this.style.background='#eee'" onmouseout="this.style.background=''">
        ${b.firstname} ${b.surname_real} <span style="color:#999;font-size:11px">(${b.rarity})</span>
      </div>`).join(""),E.querySelectorAll("[data-add-player]").forEach(b=>{b.addEventListener("click",()=>{const $=b.dataset.addPlayer;c.some(y=>y.id===$)||c.push({id:$,label:b.dataset.label}),p(),E.style.display="none",document.getElementById("rt-player-search").value=""})})}),(w=document.getElementById("rt-cancel"))==null||w.addEventListener("click",()=>g()),(L=document.getElementById("rt-save"))==null||L.addEventListener("click",async()=>{const a=document.getElementById("rt-error"),v=parseInt(document.getElementById("rt-season").value),E=document.getElementById("rt-label").value.trim(),b=parseInt(document.getElementById("rt-rank-min").value)||1,$=parseInt(document.getElementById("rt-rank-max").value)||1,y=parseInt(document.getElementById("rt-credits").value)||0,k=document.getElementById("rt-activate-at").value,A=k?new Date(k).toISOString():null,S=[...document.querySelectorAll(".rt-booster-cb:checked")].map(j=>j.value);if(!E){a.textContent="Le libellé est obligatoire.";return}if(b>$){a.textContent="Le classement min doit être ≤ au max.";return}if(!v){a.textContent="Choisis une saison.";return}const C={season_id:v,label:E,rank_min:b,rank_max:$,credits:y,booster_config_ids:S,player_ids:c.map(j=>j.id),activate_at:A},{error:D}=_?await I.from("season_reward_tiers").update(C).eq("id",e.id):await I.from("season_reward_tiers").insert(C);if(D){a.textContent=D.message;return}l(_?"Palier modifié ✅":"Palier créé ✅","success"),g(),x()})}function oi(e,{toast:t,openModal:n,closeModal:i,reload:l}){var c,d;const s=new Date,g=new Date(s.getTime()+30*864e5),x=m=>m.toISOString().slice(0,10),_=`
    <div style="display:flex;flex-direction:column;gap:12px">
      <div style="background:#fff3cd;border:1.5px solid #e6a817;border-radius:10px;padding:12px 14px;color:#7a5c00;font-size:13px;line-height:1.5">
        ⚠️ <b>Action irréversible.</b> ${e?`La saison actuelle ("${e.name}") sera clôturée et `:""}
        le MMR de <b>tous les joueurs</b> sera recalculé (compression à 50% vers la moyenne 1000, RD remis à 350,
        matchs de placement remis à 0). Les statistiques de carrière (V/N/D) ne sont pas affectées.
      </div>
      <div>
        <label>NOM DE LA SAISON</label>
        <input id="sns-name" placeholder="Ex: Saison 2">
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label>DATE DE DÉBUT</label>
          <input id="sns-start" type="date" value="${x(s)}">
        </div>
        <div>
          <label>DATE DE FIN</label>
          <input id="sns-end" type="date" value="${x(g)}">
        </div>
      </div>
      <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;color:#333">
        <input type="checkbox" id="sns-confirm">
        Je comprends que cette action va recalculer le MMR de tous les joueurs et ne peut pas être annulée.
      </label>
      <div id="sns-error" style="font-size:12px;color:#ff6b6b;min-height:14px"></div>
    </div>
  `;n("Démarrer une nouvelle saison",_,`
    <button id="sns-cancel" class="btn btn-ghost">Annuler</button>
    <button id="sns-launch" class="btn btn-primary">🚀 Démarrer la saison</button>
  `),(c=document.getElementById("sns-cancel"))==null||c.addEventListener("click",()=>i()),(d=document.getElementById("sns-launch"))==null||d.addEventListener("click",async()=>{const m=document.getElementById("sns-error"),f=document.getElementById("sns-name").value.trim(),p=document.getElementById("sns-start").value,r=document.getElementById("sns-end").value,h=document.getElementById("sns-confirm").checked;if(!f){m.textContent="Le nom de la saison est requis.";return}if(!p||!r){m.textContent="Les deux dates sont requises.";return}if(new Date(p)>=new Date(r)){m.textContent="La date de fin doit être après la date de début.";return}if(!h){m.textContent="Coche la case de confirmation pour continuer.";return}const u=document.getElementById("sns-launch");u.disabled=!0,u.textContent="⏳ Recalcul en cours...";const{data:w,error:L}=await I.rpc("admin_start_new_season",{p_name:f,p_start_at:new Date(p).toISOString(),p_end_at:new Date(r).toISOString()});if(u.disabled=!1,u.textContent="🚀 Démarrer la saison",L){m.textContent=L.message;return}if(!(w!=null&&w.success)){m.textContent=(w==null?void 0:w.error)||"Échec de l'opération.";return}t(`Nouvelle saison démarrée ✅ (${w.users_reset} joueur(s) recalculé(s))`,"success"),i(),l()})}function at(e,{toast:t,openModal:n,closeModal:i,reload:l}){const s=!!e,g=new Date().toISOString().slice(0,16),x=new Date(Date.now()+90*864e5).toISOString().slice(0,16),_=e?new Date(e.start_at).toISOString().slice(0,16):g,o=e?new Date(e.end_at).toISOString().slice(0,16):x,c=(e==null?void 0:e.name)||"";n(s?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group">
        <label>Nom de la saison *</label>
        <input id="season-name" type="text" value="${c}" placeholder="ex: Saison 2 — Été 2026" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de début *</label>
        <input id="season-start" type="datetime-local" value="${_}" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de fin *</label>
        <input id="season-end" type="datetime-local" value="${o}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${s?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function d(){var h,u;const m=(h=document.getElementById("season-start"))==null?void 0:h.value,f=(u=document.getElementById("season-end"))==null?void 0:u.value,p=document.getElementById("season-duration");if(!m||!f||!p)return;const r=Math.round((new Date(f)-new Date(m))/864e5);p.textContent=r>0?`Durée : ${r} jour${r>1?"s":""}`:"⚠️ La fin doit être après le début",p.style.color=r>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var m,f,p;(m=document.getElementById("season-start"))==null||m.addEventListener("input",d),(f=document.getElementById("season-end"))==null||f.addEventListener("input",d),d(),(p=document.getElementById("season-save-btn"))==null||p.addEventListener("click",async()=>{var E,b,$;const r=(E=document.getElementById("season-name"))==null?void 0:E.value.trim(),h=(b=document.getElementById("season-start"))==null?void 0:b.value,u=($=document.getElementById("season-end"))==null?void 0:$.value,w=document.getElementById("season-error");if(!r){w.textContent="Le nom est requis.";return}if(!h){w.textContent="La date de début est requise.";return}if(!u){w.textContent="La date de fin est requise.";return}if(new Date(u)<=new Date(h)){w.textContent="La date de fin doit être après le début.";return}const L=document.getElementById("season-save-btn");L.disabled=!0,L.textContent="Enregistrement…";const a={name:r,start_at:new Date(h).toISOString(),end_at:new Date(u).toISOString()};let v;if(s?{error:v}=await I.from("ranked_seasons").update(a).eq("id",e.id):{error:v}=await I.from("ranked_seasons").insert({...a,is_active:!1}),v){w.textContent=v.message,L.disabled=!1,L.textContent=s?"💾 Enregistrer":"✅ Créer la saison";return}t(s?"Saison modifiée ✅":"Saison créée ✅","success"),i(),l()})},50)}async function ke(e,t){var _;const{toast:n}=t,{data:i,error:l}=await I.from("solo_levels").select("*").order("level_number");if(l){e.innerHTML=`<p style="color:var(--danger)">${l.message}</p>`;return}const s=o=>`
    <tr data-row="${o.id}">
      <td style="padding:4px 8px;text-align:center">
        <input data-field="level_number" data-id="${o.id}" type="number" min="1" value="${o.level_number}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="target_note_avg" data-id="${o.id}" type="number" min="0" max="999" step="0.5" value="${o.target_note_avg}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="nb_liens_jaune" data-id="${o.id}" type="number" min="0" value="${o.nb_liens_jaune}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="nb_liens_vert" data-id="${o.id}" type="number" min="0" value="${o.nb_liens_vert}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="nb_joueurs_stade" data-id="${o.id}" type="number" min="0" max="16" value="${o.nb_joueurs_stade}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="reward_credits" data-id="${o.id}" type="number" min="0" value="${o.reward_credits}" style="width:100%;padding:6px;text-align:right;font-size:13px">
      </td>
      <td style="text-align:center;padding:4px 8px">
        <input data-field="is_active" data-id="${o.id}" type="checkbox" ${o.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
      </td>
      <td style="text-align:center;padding:4px 8px">
        <button class="btn btn-danger btn-sm" data-del-row="${o.id}">🗑️</button>
      </td>
    </tr>`;e.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <div>
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">🎮 Solo Mode — Niveaux</h2>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-top:2px">
          Chaque niveau se débloque après victoire sur le précédent. Le choix des cartes précises reste piloté par l'IA ;
          ces paramètres définissent seulement le profil global de l'adversaire.
        </div>
      </div>
      <button id="solo-add-row" class="btn btn-primary">+ Ajouter un niveau</button>
    </div>

    <div class="card-panel">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th style="text-align:center">Niveau</th>
              <th>Note globale visée<br><span style="font-weight:400;font-size:10px">(moyenne / 16 joueurs)</span></th>
              <th style="text-align:center">Liens jaunes</th>
              <th style="text-align:center">Liens verts</th>
              <th style="text-align:center">Joueurs liés au stade</th>
              <th style="text-align:right">Récompense (cr.)</th>
              <th style="text-align:center">Actif</th>
              <th style="text-align:center">Actions</th>
            </tr>
          </thead>
          <tbody id="solo-tbody">
            ${(i||[]).map(s).join("")||'<tr><td colspan="8" style="text-align:center;color:#aaa;padding:20px">Aucun niveau défini.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;function g(){document.querySelectorAll("#solo-tbody [data-field]").forEach(o=>{o.addEventListener("change",()=>x(o))})}async function x(o){const c=o.dataset.id,d=o.dataset.field,m=d==="is_active"?o.checked:Number(o.value)||0,{error:f}=await I.from("solo_levels").update({[d]:m}).eq("id",c);if(f){n(f.message,"error");return}o.style.transition="background .3s",o.style.background="#e8f8ee",setTimeout(()=>{o.style.background=""},500)}g(),document.querySelectorAll("[data-del-row]").forEach(o=>{o.addEventListener("click",async()=>{confirm("Supprimer ce niveau ? Les joueurs ayant progressé au-delà seront affectés.")&&(await I.from("solo_levels").delete().eq("id",o.dataset.delRow),n("Niveau supprimé","success"),ke(e,t))})}),(_=document.getElementById("solo-add-row"))==null||_.addEventListener("click",async()=>{const c={level_number:Math.max(0,...(i||[]).map(f=>f.level_number))+1,target_note_avg:10,nb_liens_jaune:2,nb_liens_vert:1,nb_joueurs_stade:2,reward_credits:500,is_active:!0},{data:d,error:m}=await I.from("solo_levels").insert(c).select().single();if(m){n(m.message,"error");return}n("Niveau ajouté — modifie les valeurs directement","success"),ke(e,t)})}Jt(lt);function ri(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function li(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function Le(){document.getElementById("modal-overlay").classList.add("hidden")}const ot={dashboard:{title:"Dashboard",fn:st},players:{title:"Joueurs & Cartes",fn:Qt},clubs:{title:"Clubs",fn:pn},"card-builder":{title:"Card Builder",fn:_n},users:{title:"Managers",fn:$e},market:{title:"Mercato",fn:wt},"import-export":{title:"Import / Export CSV",fn:Rn},formations:{title:"Formations & Liens",fn:Dn},"boosters-config":{title:"Boosters",fn:On},"sell-price":{title:"Prix vente directe",fn:qn},journal:{title:"Actualités",fn:Gn},tutorial:{title:"Tutoriel",fn:Yn},stadiums:{title:"Stades",fn:Xn},"gc-cards":{title:"Game Changers",fn:ni},"ranked-seasons":{title:"Saisons Ranked",fn:ai},"solo-mode":{title:"Solo Mode",fn:ke}};async function be(e){document.querySelectorAll(".admin-sidebar nav a").forEach(l=>{l.classList.toggle("active",l.dataset.page===e)});const t=document.getElementById("mobile-page-select");t&&(t.value=e);const n=ot[e]||ot.dashboard;document.getElementById("page-title").textContent=n.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(i,{toast:ri,openModal:li,closeModal:Le,navigate:be})}catch(l){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${l.message}</div>`,console.error(l)}}async function si(){var t;const{data:{session:e}}=await I.auth.getSession();e&&await rt(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,l=document.getElementById("auth-error");if(l.textContent="",!n||!i){l.textContent="Remplissez tous les champs.";return}const{data:s,error:g}=await I.auth.signInWithPassword({email:n,password:i});if(g){l.textContent=g.message;return}await rt(s.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await I.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",Le),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&Le()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",i=>{i.preventDefault(),be(n.dataset.page)})}),(t=document.getElementById("mobile-page-select"))==null||t.addEventListener("change",n=>{be(n.target.value)})}async function rt(e){const{data:t,error:n}=await I.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(n||!t){i.textContent="Profil introuvable.";return}if(!t.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await I.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,be("dashboard")}si();
