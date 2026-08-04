import{s as k,i as Bt,r as oe,_ as ot,A as Ct,l as Tt,g as Mt,K as Pe,D as F,a as zt,b as rt,S as Rt,c as q,H as jt,R as Dt,d as lt,e as Nt,f as Pt,E as Ft,h as Ot,N as qt,M as Ut,B as Ht,j as st,k as Gt,F as pe,m as Ae,n as fe,o as Kt,p as Vt,q as Jt,t as he,u as Fe,T as le,v as Yt}from"./match-shared-ClAg5DBE.js";async function dt(e){var r;const[{count:t},{count:n},{count:i},{count:s},{count:l},{data:y},{data:x}]=await Promise.all([k.from("players").select("*",{count:"exact",head:!0}),k.from("clubs").select("*",{count:"exact",head:!0}),k.from("users").select("*",{count:"exact",head:!0}),k.from("stadium_definitions").select("*",{count:"exact",head:!0}),k.from("users").select("*",{count:"exact",head:!0}).gt("last_seen_at",new Date(Date.now()-18e4).toISOString()),k.rpc("get_signup_password"),k.from("app_feature_flags").select("*").order("key")]),_=y||"";e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:24px">

      <!-- Managers -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">👥 Managers</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${i??"–"}</div>
        <div style="display:flex;align-items:center;gap:6px;margin-top:10px;font-size:12px;color:var(--tile-fg-dim)">
          <span style="width:8px;height:8px;border-radius:50%;background:#2ecc71;display:inline-block;box-shadow:0 0 6px #2ecc71"></span>
          ${l??0} joueurs connectés
        </div>
      </div>

      <!-- Stadiums -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">🏟️ Stadiums</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${s??"–"}</div>
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
        ${(x||[]).map(m=>`
          <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-radius:10px;background:var(--tile-bg);border:1px solid var(--tile-border)">
            <div>
              <div style="font-weight:700;font-size:14px;color:var(--tile-fg-on-page)">${m.label}</div>
              <div style="font-size:11px;color:var(--tile-fg-dim)">${m.enabled?"✅ Activé":"⛔ Désactivé"}</div>
            </div>
            <button class="feature-flag-toggle" data-key="${m.key}" data-enabled="${m.enabled}"
              style="width:52px;height:28px;border-radius:20px;border:none;cursor:pointer;position:relative;background:${m.enabled?"#1A6B3C":"#555"};transition:background .2s">
              <span style="position:absolute;top:3px;left:${m.enabled?"27px":"3px"};width:22px;height:22px;border-radius:50%;background:#fff;transition:left .2s"></span>
            </button>
          </div>
        `).join("")||'<div style="font-size:12px;color:var(--tile-fg-dim)">Aucun mode configuré — lance la migration correspondante.</div>'}
      </div>
    </div>
  `,window.adminNav=m=>{var c;(c=document.querySelector(`[data-page="${m}"]`))==null||c.click()},e.querySelectorAll(".feature-flag-toggle").forEach(m=>{m.addEventListener("click",async()=>{const c=m.dataset.key,p=m.dataset.enabled!=="true";m.disabled=!0;const{error:f}=await k.from("app_feature_flags").update({enabled:p,updated_at:new Date().toISOString()}).eq("key",c);if(m.disabled=!1,f){alert(f.message);return}Bt(),dt(e)})}),(r=document.getElementById("signup-pwd-save"))==null||r.addEventListener("click",async()=>{const m=document.getElementById("signup-pwd-input").value.trim(),c=document.getElementById("signup-pwd-status");if(!m){c.textContent="Le code ne peut pas être vide.",c.style.color="#ff6b6b";return}const p=document.getElementById("signup-pwd-save");p.disabled=!0,p.textContent="⏳...";const{error:f}=await k.rpc("set_signup_password",{new_password:m});if(p.disabled=!1,p.textContent="💾 Enregistrer",f){c.textContent=f.message,c.style.color="#ff6b6b";return}c.textContent="✅ Code mis à jour.",c.style.color="#2ecc71"})}const ct={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},Wt={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Zt(){const e={};for(const t of Ct)e[t]=await Tt(t);return e}function se(e){return e.job==="GK"?e.note_g||0:e.job==="DEF"?e.note_d||0:e.job==="MIL"?e.note_m||0:e.note_a||0}async function Xt(e){const t=document.getElementById("export-players-btn");t&&(t.disabled=!0,t.textContent="⏳ Export...");try{let n=[],i=0;const s=1e3;for(;;){const{data:r,error:m}=await k.from("players").select("*").order("surname_real").range(i,i+s-1);if(m){e(m.message,"error");return}if(n=n.concat(r||[]),!r||r.length<s)break;i+=s}if(!n.length){e("Aucun joueur à exporter","error");return}const l=await ot(()=>import("./xlsx-D_0l8YDs.js"),[]),y=l.utils.json_to_sheet(n),x=l.utils.book_new();l.utils.book_append_sheet(x,y,"Joueurs");const _=new Date().toISOString().slice(0,10);l.writeFile(x,`joueurs_${_}.xlsx`),e(`${n.length} joueur(s) exporté(s) ✅`,"success")}catch(n){e(`Erreur export : ${n.message}`,"error")}finally{t&&(t.disabled=!1,t.textContent="📤 Export Excel")}}async function Qt(e,t,n){const{toast:i}=n,s=document.getElementById("import-players-btn");s&&(s.disabled=!0,s.textContent="⏳ Import...");try{const l=await ot(()=>import("./xlsx-D_0l8YDs.js"),[]),y=await e.arrayBuffer(),x=l.read(y,{type:"array"}),_=l.utils.sheet_to_json(x.Sheets[x.SheetNames[0]],{defval:null});if(!_.length){i("Fichier vide","error");return}const r=["firstname","surname_real","job","job2","rarity","country_code","club_id","sell_price","note_g","note_d","note_m","note_a","note_min","note_max","face"],m=new Set(["sell_price","note_g","note_d","note_m","note_a","note_min","note_max"]),c=[],p=[];if(_.forEach((o,h)=>{if(!o.id){p.push(`ligne ${h+2} : id manquant`);return}const u={id:o.id},w=new Set(["firstname","surname_real"]);r.forEach(L=>{if(!(L in o))return;let a=o[L];if(typeof a=="string"&&(a=a.trim()),a===""&&(a=null),a!==null&&m.has(L)){const v=Number(a);a=Number.isFinite(v)?v:null}a===null&&w.has(L)&&a===null||(u[L]=a)}),u.updated_at=new Date().toISOString(),c.push(u)}),!c.length){i('Aucune ligne exploitable (colonne "id" requise)',"error");return}if(!confirm(`Mettre à jour ${c.length} joueur(s) depuis le fichier ?

Cette action écrase les données actuelles.`))return;let f=0;const d=100;for(let o=0;o<c.length;o+=d){const h=c.slice(o,o+d),{error:u}=await k.from("players").upsert(h,{onConflict:"id"});if(u){i(`Erreur lot ${Math.floor(o/d)+1} : ${u.message}`,"error");break}f+=h.length}i(`${f} joueur(s) mis à jour ✅${p.length?` — ${p.length} ligne(s) ignorée(s)`:""}`,"success"),p.length&&console.warn("[Import joueurs] lignes ignorées :",p),f&&re(t,n)}catch(l){i(`Erreur import : ${l.message}`,"error")}finally{s&&(s.disabled=!1,s.textContent="📥 Import Excel")}}function Oe(e,t,n,i=!1){const s=`__players${e[0].toUpperCase()}${e.slice(1)}Filter`;return window[s]||(window[s]=new Set),`<div class="ms-wrap" data-ms-kind="${e}" style="position:relative;min-width:150px">
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
        ${n.map(l=>`
          <label style="display:flex;align-items:center;gap:6px;padding:3px 2px;font-size:12.5px;cursor:pointer" data-ms-label="${(l.label||"").toLowerCase()}">
            <input type="checkbox" class="ms-check-${e}" value="${l.value}">
            <span>${l.label}</span>
          </label>`).join("")}
      </div>
    </div>
  </div>`}function qe(e,t,n){var m,c,p;const i=`__players${e[0].toUpperCase()}${e.slice(1)}Filter`,s=window[i],l=t.querySelector(`#ms-btn-${e}`),y=t.querySelector(`#ms-panel-${e}`),x=t.querySelector(`#ms-label-${e}`),_=(x==null?void 0:x.textContent)||"";function r(){x&&(x.textContent=s.size?`${_} (${s.size})`:_)}t.querySelectorAll(`.ms-check-${e}`).forEach(f=>{f.checked=s.has(f.value),f.addEventListener("change",()=>{f.checked?s.add(f.value):s.delete(f.value),r(),n()})}),r(),l==null||l.addEventListener("click",f=>{f.stopPropagation();const d=y.style.display==="block";document.querySelectorAll('[id^="ms-panel-"]').forEach(o=>o.style.display="none"),y.style.display=d?"none":"block"}),y==null||y.addEventListener("click",f=>f.stopPropagation()),(m=t.querySelector(`#ms-all-${e}`))==null||m.addEventListener("click",()=>{t.querySelectorAll(`.ms-check-${e}`).forEach(f=>{f.checked=!0,s.add(f.value)}),r(),n()}),(c=t.querySelector(`#ms-none-${e}`))==null||c.addEventListener("click",()=>{t.querySelectorAll(`.ms-check-${e}`).forEach(f=>{f.checked=!1}),s.clear(),r(),n()}),(p=t.querySelector(`#ms-search-${e}`))==null||p.addEventListener("input",f=>{const d=f.target.value.toLowerCase();t.querySelectorAll(`#ms-options-${e} label`).forEach(o=>{o.style.display=o.dataset.msLabel.includes(d)?"flex":"none"})})}window.__playersMsDocListener||(window.__playersMsDocListener=!0,document.addEventListener("click",()=>{document.querySelectorAll('[id^="ms-panel-"]').forEach(e=>e.style.display="none")}));async function en(e,t){await re(e,t)}async function re(e,t,n=null){var r,m,c,p;const{toast:i}=t;n||(n={search:((r=document.getElementById("search-players"))==null?void 0:r.value)||"",job:((m=document.getElementById("filter-job"))==null?void 0:m.value)||"",rarity:((c=document.getElementById("filter-rarity"))==null?void 0:c.value)||"",clubs:window.__playersClubFilter?[...window.__playersClubFilter]:[],countries:window.__playersCountryFilter?[...window.__playersCountryFilter]:[],sort:((p=document.getElementById("sort-players"))==null?void 0:p.value)||"job"});const[{data:s,error:l},{data:y}]=await Promise.all([k.from("players").select("*, clubs(id,encoded_name,logo_url)"),k.from("clubs").select("id,encoded_name").order("encoded_name")]);if(l){e.innerHTML=`<p style="color:red">${l.message}</p>`;return}const x={GK:0,DEF:1,MIL:2,ATT:3},_=(s||[]).sort((f,d)=>{const o=(x[f.job]??4)-(x[d.job]??4);return o!==0?o:(f.surname_real||"").localeCompare(d.surname_real||"")});tn(e,_,y||[],t,n)}function tn(e,t,n,i,s=null){var m,c;const{toast:l}=i;if(e.innerHTML=`
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
          ${Object.entries(ct).map(([p,f])=>`<option value="${p}">${f}</option>`).join("")}
        </select>
        <button class="btn btn-primary" id="add-player-btn" style="white-space:nowrap">+ Joueur</button>
        <button class="btn btn-ghost" id="export-players-btn" style="white-space:nowrap">📤 Export Excel</button>
        <button class="btn btn-ghost" id="import-players-btn" style="white-space:nowrap">📥 Import Excel</button>
        <input type="file" id="import-players-file" accept=".xlsx,.xls" style="display:none">
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-start">
        ${Oe("club","🏟️ Club",n.map(p=>({value:p.id,label:p.encoded_name})),!0)}
        ${Oe("country","🌍 Pays",[...new Set(t.map(p=>p.country_code).filter(Boolean))].sort().map(p=>({value:p,label:p})),!0)}
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
    </div>`,s){const p=s,f=d=>document.getElementById(d);p.search&&f("search-players")&&(f("search-players").value=p.search),p.job&&f("filter-job")&&(f("filter-job").value=p.job),p.rarity&&f("filter-rarity")&&(f("filter-rarity").value=p.rarity),p.sort&&f("sort-players")&&(f("sort-players").value=p.sort)}s!=null&&s.clubs&&(window.__playersClubFilter=new Set(s.clubs)),s!=null&&s.countries&&(window.__playersCountryFilter=new Set(s.countries));function y(){var L;const p=document.getElementById("search-players").value.toLowerCase(),f=document.getElementById("filter-job").value,d=document.getElementById("filter-rarity").value,o=window.__playersClubFilter||new Set,h=window.__playersCountryFilter||new Set,u=((L=document.getElementById("sort-players"))==null?void 0:L.value)||"job";let w=t.filter(a=>(!p||`${a.firstname} ${a.surname_real}`.toLowerCase().includes(p))&&(!f||a.job===f)&&(!d||a.rarity===d)&&(!o.size||o.has(a.club_id))&&(!h.size||h.has(a.country_code)));return u==="note_desc"?w=[...w].sort((a,v)=>se(v)-se(a)):u==="note_asc"?w=[...w].sort((a,v)=>se(a)-se(v)):u==="name"&&(w=[...w].sort((a,v)=>(a.surname_real||"").localeCompare(v.surname_real||""))),w}const x=new Set;function _(){const p=document.getElementById("bulk-bar"),f=document.getElementById("bulk-count");p&&(p.style.display=x.size>0?"flex":"none",f&&(f.textContent=`${x.size} joueur(s) sélectionné(s)`))}function r(){const p=y();document.getElementById("count-label").textContent=`${p.length} joueur(s)`;const f=document.getElementById("players-list");if(!p.length){f.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}f.innerHTML=p.map(d=>{const o={...d,clubs:d.clubs,face:d.face||null},h=oe(o,{width:120});return`<div style="position:relative;cursor:pointer" data-edit="${d.id}">
        ${h}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${d.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),f.querySelectorAll("[data-edit]").forEach(d=>{d.addEventListener("click",()=>{const o=t.find(h=>h.id===d.dataset.edit);o&&Ue(o,n,e,i)})}),f.querySelectorAll(".btn-del-player").forEach(d=>{d.addEventListener("click",async o=>{if(o.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:h}=await k.from("players").delete().eq("id",d.dataset.del);h?l(h.message,"error"):(l("Joueur supprimé ✅","success"),re(e,i))})})}r(),document.getElementById("search-players").addEventListener("input",r),document.getElementById("filter-job").addEventListener("change",r),document.getElementById("filter-rarity").addEventListener("change",r),document.getElementById("sort-players").addEventListener("change",r),qe("club",e,r),qe("country",e,r),(m=document.getElementById("bulk-cancel-btn"))==null||m.addEventListener("click",()=>{x.clear(),_(),r()}),(c=document.getElementById("bulk-delete-btn"))==null||c.addEventListener("click",async()=>{var o,h,u,w;if(!x.size||!confirm(`Supprimer ${x.size} joueur(s) ?`))return;const p=[...x],{error:f}=await k.from("players").delete().in("id",p);if(f){l(f.message,"error");return}l(`${p.length} joueur(s) supprimé(s) ✅`,"success"),x.clear();const d={search:((o=document.getElementById("search-players"))==null?void 0:o.value)||"",job:((h=document.getElementById("filter-job"))==null?void 0:h.value)||"",rarity:((u=document.getElementById("filter-rarity"))==null?void 0:u.value)||"",sort:((w=document.getElementById("sort-players"))==null?void 0:w.value)||"job",clubs:window.__playersClubFilter?[...window.__playersClubFilter]:[],countries:window.__playersCountryFilter?[...window.__playersCountryFilter]:[]};re(e,i,d)}),document.getElementById("add-player-btn").addEventListener("click",()=>Ue(null,n,e,i)),document.getElementById("export-players-btn").addEventListener("click",()=>Xt(i.toast)),document.getElementById("import-players-btn").addEventListener("click",()=>{document.getElementById("import-players-file").click()}),document.getElementById("import-players-file").addEventListener("change",p=>{var d;const f=(d=p.target.files)==null?void 0:d[0];f&&Qt(f,e,i),p.target.value=""})}async function Ue(e,t,n,i){const{toast:s,openModal:l,closeModal:y}=i,x=!!e,_=await Zt(),{data:r}=await k.from("players").select("face").not("face","is",null),m=new Set((r||[]).map(d=>d.face).filter(Boolean));e!=null&&e.face&&m.delete(e.face);const c='<option value="">— Club —</option>'+t.map(d=>`<option value="${d.id}" ${(e==null?void 0:e.club_id)===d.id?"selected":""}>${d.encoded_name}</option>`).join(""),p=e!=null&&e.face?e.face.split("/")[0]:"",f=Object.keys(_).map(d=>`<option value="${d}" ${p===d?"selected":""}>${d}</option>`).join("");l(x?`✏️ ${e.firstname} ${e.surname_real}`:"➕ Nouveau joueur",`<div style="display:flex;gap:20px;align-items:flex-start">

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
              ${["GK","DEF","MIL","ATT"].map(d=>`<option value="${d}" ${(e==null?void 0:e.job)===d?"selected":""}>${d}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Poste 2</label>
            <select id="pm-job2">
              <option value="">Aucun</option>
              ${["GK","DEF","MIL","ATT"].map(d=>`<option value="${d}" ${(e==null?void 0:e.job2)===d?"selected":""}>${d}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Rareté</label>
            <select id="pm-rarity">
              ${["normal","pepite","papyte","legende"].map(d=>`<option value="${d}" ${(e==null?void 0:e.rarity)===d?"selected":""}>${ct[d]}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Pays</label>
            <select id="pm-country">
              ${["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"].map(d=>`<option value="${d}" ${((e==null?void 0:e.country_code)||"FR")===d?"selected":""}>${d}</option>`).join("")}
            </select>
          </div>
        </div>

        <!-- Club + Prix -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <div class="form-group">
            <label>Club</label>
            <select id="pm-club">${c}</select>
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
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([d,o,h])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${Wt[d]};font-weight:700">${d}</label>
                <input id="${o}" type="number" min="0" max="20" value="${(e==null?void 0:e[h])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
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
    </div>`),setTimeout(()=>{var L,a,v;let d=(e==null?void 0:e.face)||null;function o(){var R,N,G,V,J,Y,W,Re,je,De,Ne;const E=document.getElementById("card-preview");if(!E)return;const b=((R=document.getElementById("pm-fn"))==null?void 0:R.value)||"",$=(((N=document.getElementById("pm-real"))==null?void 0:N.value)||"").toUpperCase(),g=((G=document.getElementById("pm-job"))==null?void 0:G.value)||"ATT",I=((V=document.getElementById("pm-job2"))==null?void 0:V.value)||null,A=((J=document.getElementById("pm-rarity"))==null?void 0:J.value)||"normal",B=((Y=document.getElementById("pm-country"))==null?void 0:Y.value)||"FR",C=((W=document.getElementById("pm-club"))==null?void 0:W.value)||null,D=document.getElementById("pm-club"),j=D==null?void 0:D.options[D.selectedIndex];(j==null?void 0:j.text)!=="— Club —"&&(j==null||j.text);const O=parseInt((Re=document.getElementById("pm-g"))==null?void 0:Re.value)||0,U=parseInt((je=document.getElementById("pm-d"))==null?void 0:je.value)||0,H=parseInt((De=document.getElementById("pm-m"))==null?void 0:De.value)||0,S=parseInt((Ne=document.getElementById("pm-a"))==null?void 0:Ne.value)||0,z=t.find(St=>St.id===C),T={firstname:b||"Prénom",surname_real:$||"NOM",job:g,job2:I||null,rarity:A,country_code:B,club_id:C,note_g:O,note_d:U,note_m:H,note_a:S,face:d||null,clubs:z?{encoded_name:z.encoded_name,logo_url:z.logo_url}:null};E.innerHTML=oe(T,{width:160});const M=document.getElementById("pm-minmax");M&&(M.style.display=["pepite","papyte"].includes(A)?"grid":"none")}function h(E){const b=document.getElementById("faces-grid"),$=document.getElementById("pm-face");if(!b||!$)return;const g=_[E]||[];if(console.log("[players] loadFacesGrid folder=",E,"files=",g.length,g.slice(0,5)),!g.length){$.innerHTML='<option value="">— Aucun visage disponible —</option>',b.innerHTML=`<p style="font-size:11px;color:#888;font-style:italic">Aucune image dans le dossier "${E}" du bucket Supabase.</p>`;return}const I=g.filter(A=>{const B=E+"/"+A;return B===d||!m.has(B)});$.innerHTML='<option value="">— Choisir un visage —</option>'+I.map(A=>{const B=E+"/"+A;return`<option value="${B}" ${d===B?"selected":""}>${A}</option>`}).join(""),b.innerHTML=I.map(A=>{const B=E+"/"+A,C=d===B,D=Mt({face:B});return`<div data-face="${B}" style="cursor:pointer;border:2px solid ${C?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${D}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),b.querySelectorAll("[data-face]").forEach(A=>{A.addEventListener("click",()=>{d=A.dataset.face;const B=document.getElementById("pm-face");B&&(B.value=d),b.querySelectorAll("[data-face]").forEach(C=>{C.style.border=`2px solid ${C.dataset.face===d?"#4fc3f7":"transparent"}`}),o()})})}const u=e!=null&&e.face?e.face.split("/")[0]:"";u&&_[u]&&(document.getElementById("pm-folder").value=u,h(u)),(L=document.getElementById("pm-folder"))==null||L.addEventListener("change",E=>{h(E.target.value)}),(a=document.getElementById("pm-face"))==null||a.addEventListener("change",E=>{d=E.target.value||null,o()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach(E=>{var b,$;(b=document.getElementById(E))==null||b.addEventListener("input",o),($=document.getElementById(E))==null||$.addEventListener("change",o)}),(v=document.getElementById("pm-save"))==null||v.addEventListener("click",()=>an(e,x,d,n,i)),o()},50)}function nn(e){const t=n=>{var i;return(i=document.getElementById(n))==null?void 0:i.value};return{firstname:(t("pm-fn")||"").trim(),surname_real:(t("pm-real")||"").trim()||"JOUEUR",country_code:t("pm-country")||"FR",club_id:t("pm-club")||null,job:t("pm-job")||"ATT",job2:t("pm-job2")||null,rarity:t("pm-rarity")||"normal",note_g:parseInt(t("pm-g"))||0,note_d:parseInt(t("pm-d"))||0,note_m:parseInt(t("pm-m"))||0,note_a:parseInt(t("pm-a"))||0,note_min:parseInt(t("pm-nmin"))||null,note_max:parseInt(t("pm-nmax"))||null,sell_price:parseInt(t("pm-price"))||0,face:e||null,ethnie:t("pm-folder")||null,is_active:!0}}async function an(e,t,n,i,s){var f,d,o,h;const{toast:l,closeModal:y}=s,x=document.getElementById("pm-error"),_=document.getElementById("pm-save"),r=nn(n);if(!r.firstname){x.textContent="Le prénom est requis.";return}if(!r.surname_real){x.textContent="Le nom est requis.";return}_.disabled=!0,_.textContent="Enregistrement…";const m=r,{error:c}=t?await k.from("players").update({...m,updated_at:new Date().toISOString()}).eq("id",e.id):await k.from("players").insert(m);if(c){x.textContent=c.message,_.disabled=!1,_.textContent=t?"💾 Enregistrer":"✅ Créer le joueur";return}l(t?"Joueur modifié ✅":"Joueur créé ✅","success"),y();const p={search:((f=document.getElementById("search-players"))==null?void 0:f.value)||"",job:((d=document.getElementById("filter-job"))==null?void 0:d.value)||"",rarity:((o=document.getElementById("filter-rarity"))==null?void 0:o.value)||"",sort:((h=document.getElementById("sort-players"))==null?void 0:h.value)||"job",clubs:window.__playersClubFilter?[...window.__playersClubFilter]:[],countries:window.__playersCountryFilter?[...window.__playersCountryFilter]:[]};re(i,s,p)}const on={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},pt=["rase","court","milong","long"];function rn(e){const t=Be(e);if(t==="noir")return"noir";if(t==="typ")return Math.random()<.9?"noir":"marron";if(t==="metisse")return Math.random()<.6?"noir":"marron";const n=Math.random();return n<.35?"blond":n<.75?"marron":"noir"}function ln(e){return Math.random()<.05?"chauve":rn(e)}const Se=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function Be(e){return on[e]||"blanc"}function ut(e){return ln(e)}function te(e,t){return Math.floor(Math.random()*(t-e+1))+e}function Q(e){return e[Math.floor(Math.random()*e.length)]}function mt(e){const t=Se.filter(n=>n!==e);return Q(t)}function we(e){const t=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","GR","RO","BG","UA","RU"],n=["MA","DZ","TN","EG","LY"],i=["NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","TZ","UG","ET"],s=["JP","KR","CN","VN","TH","ID","PH","IN","PK","BD","SA","AE","IR"];return t.includes(e)||["AR","UY","CL","PE","EC","CO","MX","BR"].includes(e)?"Europeans":n.includes(e)?"North Africans":i.includes(e)?"Africans":s.includes(e)?"Asians":"Europeans"}const sn=[{min:1,max:4,pct:55},{min:5,max:10,pct:20},{min:11,max:14,pct:10},{min:15,max:17,pct:10},{min:18,max:20,pct:5}];function gt(){const e=Math.random()*100;let t=0;for(const n of sn)if(t+=n.pct,e<t)return te(n.min,n.max);return te(1,4)}function dn(){const e=Array.from({length:20},(t,n)=>n);return e.sort(()=>Math.random()-.5),new Set(e.slice(0,10))}let ue=null;function cn(e,t){return e&&(ue||(ue=dn()),ue.has(t))?te(15,20):gt()}const ye={FR:{first:["Lucas","Tom","Hugo","Théo","Antoine","Kylian","Rayan","Axel","Paul","Enzo","Léo","Mathis","Nathan","Alexis","Ethan","Maxime","Julien","Baptiste","Nicolas","Pierre","Clément","Adrien","Valentin","Dylan","Loïc","Quentin","Florian","Kevin","Corentin","Raphaël"],last:["Martin","Bernard","Petit","Dupont","Moreau","Laurent","Robert","Michel","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard","Bonnet","Rousseau","Fontaine","Chevalier","Blanc","Garnier","Boyer","Gauthier","Garcia","Perrin","Robin","Clément","Morin","Nicolas","Henry","Lemaire","Noël","Dufour","Meunier","Brun","Blanchard","Giraud","Joly","Rivière","Brunet"]},ES:{first:["Carlos","Miguel","Javier","Alejandro","Sergio","David","Diego","Pablo","Álvaro","Marcos","Adrián","Rubén","Iker","Raúl","Fernando","Roberto","Víctor","Iván","Gonzalo","Antonio","Manuel","Jesús","Josué","Rodrigo","Cristian","Héctor","Óscar","Mario","Daniel","Jorge"],last:["García","Rodríguez","Martínez","López","Sánchez","González","Pérez","Hernández","Jiménez","Díaz","Torres","Ramírez","Flores","Rivera","Gómez","Morales","Álvarez","Romero","Herrera","Medina","Aguilar","Vargas","Guzmán","Muñoz","Salazar","Soto","Contreras","Rojas","Ramos","Ortiz"]},PT:{first:["João","Pedro","Diogo","Rúben","Bruno","Tiago","André","Ricardo","Luís","Gonçalo","Nuno","Mário","Fábio","Rui","Miguel","Sérgio","Hugo","Filipe","Paulo","Vítor"],last:["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Carvalho","Gomes","Ribeiro","Araújo","Barbosa","Cardoso","Correia","Teixeira","Machado","Vieira","Monteiro","Cunha","Pinto","Melo","Barros","Freitas","Fonseca","Andrade","Castro","Neves","Figueiredo","Duarte"]},BR:{first:["Gabriel","Lucas","Mateus","Gustavo","Felipe","Rodrigo","Thiago","Rafael","Bruno","Diego","Leonardo","Eduardo","Victor","Pedro","Carlos","Alexandre","André","Paulo","Danilo","Marcelo"],last:["Silva","Santos","Oliveira","Souza","Lima","Ferreira","Costa","Nascimento","Alves","Pereira","Rodrigues","Almeida","Nunes","Melo","Barbosa","Rocha","Brito","Castro","Carvalho","Gomes","Lopes","Ramos","Mendes","Cavalcanti","Batista","Azevedo","Campos","Freitas","Reis","Andrade"]},AR:{first:["Lionel","Sergio","Rodrigo","Nicolás","Ezequiel","Gonzalo","Federico","Mauro","Pablo","Diego","Lucas","Matías","Alejandro","Maximiliano","Emiliano","Marcos","Lautaro","Ángel","Leandro","Julián"],last:["González","Rodríguez","Martínez","García","López","Pérez","Sánchez","Romero","Torres","Flores","Díaz","Gómez","Alvarez","Ruiz","Castro","Herrera","Cabrera","Medina","Ferreyra","Suárez"]},IT:{first:["Marco","Luca","Alessandro","Matteo","Davide","Andrea","Francesco","Federico","Lorenzo","Riccardo","Stefano","Simone","Roberto","Nicola","Giovanni","Antonio","Emanuele","Daniele","Alberto","Giorgio"],last:["Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Ricci","Marino","Greco","Bruno","Gallo","Conti","De Luca","Mancini","Giordano","Rizzo","Lombardi","Moretti","Fontana","Rinaldi"]},DE:{first:["Lukas","Max","Jonas","Florian","Tobias","Stefan","Markus","Sebastian","Niklas","Leon","Tim","Felix","Alexander","Philipp","Christian","Thomas","Michael","Jan","Moritz","Fabian"],last:["Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Wolf","Schröder","Neumann","Schwarz","Zimmermann","Braun","Krüger","Hofmann","Wagner","Becker","Koch","Lehmann","Kaiser"]},GB:{first:["James","Harry","Oliver","Jack","George","Charlie","William","Thomas","Alfie","Edward","Ryan","Liam","Noah","Ethan","Kyle","Jordan","Callum","Aaron","Declan","Connor"],last:["Smith","Jones","Williams","Brown","Taylor","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Walker","Wright","Robinson","White","Thompson","Hughes","Edwards","Green","Hall"]},MA:{first:["Yassine","Karim","Mehdi","Amine","Hamza","Bilal","Soufiane","Rachid","Omar","Mohammed","Zakaria","Ilyas","Ayoub","Saad","Khalid","Adil","Tarik","Hicham","Reda","Nabil"],last:["Benali","Amrani","Bouazza","Cherif","Haddad","Meziane","Belkacem","Rahmani","Saidi","Zidane","Belhadj","Tazi","Idrissi","Alaoui","Bennani","Fassi","Lahlou","Naciri","Tahiri","Zniber"]},DZ:{first:["Yacine","Riyad","Sofiane","Haris","Adem","Islam","Bilal","Omar","Nassim","Mehdi","Ryad","Zinedine","Youssef","Farid","Karim","Mourad","Walid","Anes","Ferhat","Djamel"],last:["Amrouche","Boudiaf","Cherki","Guessab","Hamdi","Jaber","Lakhal","Mahjoub","Rezki","Sahnoun","Talbi","Zerrouki","Achour","Bakri","Chaouch","Djaballah","Ferhat","Gacem","Khaldi","Larbi"]},SN:{first:["Sadio","Ismaïla","Cheikhou","Gana","Famara","Mbaye","Pape","Aliou","Moussa","Sidy","Idrissa","Lamine","Bamba","Fallou","Abdou","Diallo","Mamadou","Souleymane","Oumar","Cheikh"],last:["Diallo","Traoré","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Ndiaye","Sow","Cissé","Fofana","Keita","Sylla","Kane","Diarra","Sanogo","Baldé","Kouyaté"]},CI:{first:["Didier","Wilfried","Serge","Jonathan","Franck","Maxwel","Salomon","Gervinho","Nicolas","Maxime","Ismael","Romaric","Abdul","Cheick","Arouna","Kolo","Yaya","Geoffroy","Siaka","Adama"],last:["Drogba","Zaha","Gnagnon","Koné","Touré","Bamba","Diomandé","Konaté","Coulibaly","Fofana","Traoré","Doumbia","Sanogo","Diabaté","Kalou","Bakayoko","Gradel","Seri","Aurier","Haller"]},CM:{first:["Samuel","Alex","Karl","Fabrice","Cédric","Nicolas","Georges","André","Joël","Roger","François","Jean","Patrick","Thierry","Eric","Benjamin","Aristide","Clinton","Clinton","Stéphane"],last:["Eto'o","Song","Choupo-Moting","Aboubakar","Bassogog","Kunde","Toko","Nkoudou","Ngadeu","Oyongo","Fai","Zambo","Mokoena","Ekambi","Tchamba","Mbida","Biya","Kameni","Meyong","Webo"]},NG:{first:["Kelechi","Ahmed","Victor","John","Emmanuel","Samuel","Moses","Ola","Chukwuemeka","Odion","Sunday","Chidi","Nnamdi","Chisom","Tunde","Emeka","Obinna","Uchenna","Ifeanyi","Segun"],last:["Osimhen","Iheanacho","Musa","Onyekuru","Iwobi","Ndidi","Nwankwo","Obi","Mikel","Martins","Okocha","Yekini","Amunike","Babangida","Fash","Lawal","Onuoha","Taiwo","Ayodele","Ameobi"]},JP:{first:["Ryota","Kenji","Hiroshi","Takumi","Yuto","Daichi","Shinji","Makoto","Koji","Naoki","Yuya","Shoya","Ryo","Shu","Atsuto","Masato","Hotaru","Genki","Ko","Ritsu"],last:["Nakamura","Tanaka","Suzuki","Sato","Yamamoto","Watanabe","Ito","Yamada","Saito","Matsumoto","Inoue","Kimura","Hayashi","Shimizu","Yamazaki","Mori","Abe","Ikeda","Kato","Honda"]},KR:{first:["Heung","Son","Ji","Sung","Jae","Young","Kang","Hyun","Woo","Tae","Seung","Min","Jun","Dong","Chang","Sang","Yo","Hee","Jin","Bum"],last:["Kim","Park","Lee","Choi","Jung","Kang","Cho","Yoon","Lim","Oh","Han","Seo","Kwon","Hwang","Ahn","Yang","Shin","Yoo","Jang","Song"]},MX:{first:["Carlos","Hirving","Andrés","Javier","Miguel","Raúl","Héctor","Diego","Jorge","Luis","Rodolfo","Erick","Jonathan","Néstor","Tecatito","Chicharito","Oswaldo","Oribe","Uriel","Giovanni"],last:["Hernández","Lozano","Guardado","Vela","Morales","Jiménez","Reyes","Corona","Herrera","Rodríguez","Ochoa","Chicharito","Flores","Domínguez","Araujo","Álvarez","Pineda","Sánchez","Antuna","Meza"]},_DEFAULT_EUROPE:{first:["Stefan","Ivan","Luca","Marco","Andrei","Cristian","Bogdan","Mircea","Adrian","Florin","Dušan","Aleksandar","Nikola","Nemanja","Marko","Filip","Milan","Branislav","Radomir","Dejan"],last:["Popescu","Ionescu","Stan","Marin","Stoica","Popa","Radu","Constantin","Barbu","Dobre","Petrović","Marković","Nikolić","Jovanović","Popović","Stanković","Đorđević","Lukić","Simić","Ilić"]},_DEFAULT_AFRIQUE:{first:["Mamadou","Ibrahima","Moussa","Seydou","Boubacar","Oumar","Modibo","Adama","Bakary","Abdoulaye","Lamine","Ousmane","Sekou","Demba","Tidiane","Amadou","Issiaka","Siaka","Fode","Samba"],last:["Diallo","Traoré","Coulibaly","Koné","Doumbia","Kouyaté","Bah","Konaté","Touré","Camara","Sylla","Keita","Diakité","Sangaré","Sanou","Sidibé","Bathily","Niakaté","Dioumassi","Sissoko"]},_DEFAULT_ASIE:{first:["Wei","Ming","Jae","Van","Duc","Sorn","Ali","Hassan","Reza","Arman","Yusuf","Tariq","Faris","Khalid","Saad","Rashid","Nasser","Walid","Ziad","Adel"],last:["Zhang","Wang","Liu","Chen","Yang","Huang","Zhou","Wu","Xu","Sun","Al-Rashidi","Al-Dosari","Al-Harthi","Al-Balushi","Al-Farsi","Al-Shamsi","Al-Neyadi","Al-Breiki","Al-Hammadi","Al-Mansouri"]},_DEFAULT_AMERIQUE:{first:["James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Marcus","Jordan","Andre","Devonte","Malik","Tyrone","Jamal","Darius","DeShawn","Brandon","Cody"],last:["Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Taylor","Anderson","Jackson","White","Harris","Clark","Lewis","Walker","Hall","Allen","Young","King"]}},pn={FR:"FR",BE:"FR",CH:"FR",MC:"FR",LU:"FR",ES:"ES",MX:"MX",CO:"ES",VE:"ES",PE:"ES",CL:"ES",EC:"ES",UY:"ES",PY:"ES",BO:"ES",CR:"ES",PA:"ES",HN:"ES",GT:"ES",SV:"ES",NI:"ES",DO:"ES",CU:"ES",PT:"PT",AO:"PT",MZ:"PT",CV:"PT",BR:"BR",AR:"AR",IT:"IT",SM:"IT",DE:"DE",AT:"DE",GB:"GB",IE:"GB",AU:"GB",NZ:"GB",CA:"GB",MA:"MA",TN:"DZ",LY:"DZ",DZ:"DZ",SN:"SN",ML:"SN",GN:"SN",GW:"SN",GM:"SN",MR:"SN",CI:"CI",BF:"CI",TG:"CI",BJ:"CI",GH:"CI",CM:"CM",GA:"CM",CG:"CM",CD:"CM",NG:"NG",JP:"JP",KR:"KR",MX:"MX",PL:"_DEFAULT_EUROPE",CZ:"_DEFAULT_EUROPE",SK:"_DEFAULT_EUROPE",HU:"_DEFAULT_EUROPE",HR:"_DEFAULT_EUROPE",RS:"_DEFAULT_EUROPE",SI:"_DEFAULT_EUROPE",RO:"_DEFAULT_EUROPE",BG:"_DEFAULT_EUROPE",GR:"_DEFAULT_EUROPE",TR:"_DEFAULT_EUROPE",RU:"_DEFAULT_EUROPE",UA:"_DEFAULT_EUROPE",NL:"_DEFAULT_EUROPE",DK:"_DEFAULT_EUROPE",SE:"_DEFAULT_EUROPE",NO:"_DEFAULT_EUROPE",FI:"_DEFAULT_EUROPE",AL:"_DEFAULT_EUROPE",EG:"_DEFAULT_AFRIQUE",ZA:"_DEFAULT_AFRIQUE",KE:"_DEFAULT_AFRIQUE",ET:"_DEFAULT_AFRIQUE",TZ:"_DEFAULT_AFRIQUE",UG:"_DEFAULT_AFRIQUE",CN:"_DEFAULT_ASIE",VN:"_DEFAULT_ASIE",TH:"_DEFAULT_ASIE",ID:"_DEFAULT_ASIE",PH:"_DEFAULT_ASIE",IN:"_DEFAULT_ASIE",PK:"_DEFAULT_ASIE",BD:"_DEFAULT_ASIE",IR:"_DEFAULT_ASIE",SA:"_DEFAULT_ASIE",AE:"_DEFAULT_ASIE",QA:"_DEFAULT_ASIE",KW:"_DEFAULT_ASIE",IQ:"_DEFAULT_ASIE",SY:"_DEFAULT_ASIE",JO:"_DEFAULT_ASIE",US:"_DEFAULT_AMERIQUE"};function ft(e){return pn[e]||"_DEFAULT_EUROPE"}function yt(e){const t=ft(e),n=(ye[t]||ye._DEFAULT_EUROPE).first;return Q(n)}function bt(e){const t=ft(e);return(ye[t]||ye._DEFAULT_EUROPE).last}function un(e,t,n=new Set,i=!1){const s=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],l=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],y=new Set(l.sort(()=>Math.random()-.5).slice(0,4)),x=[...l].sort(()=>Math.random()-.5),_=new Set(x.slice(0,2)),r=new Set(x.slice(2,4)),m=10,c=s.map((d,o)=>o<m);for(let d=c.length-1;d>0;d--){const o=Math.floor(Math.random()*(d+1));[c[d],c[o]]=[c[o],c[d]]}const p=new Set;function f(d){const o=bt(d),h=o.filter(a=>!p.has(a)&&!n.has(a)),u=h.length?h:o.filter(a=>!p.has(a)),w=u.length?u:o,L=Q(w);return p.add(L),L}return s.map((d,o)=>{const h=c[o]?t:mt(t),u=Be(h),w=ut(h),L=Q(pt),a=_.has(o)?"pepite":r.has(o)?"papyte":"normal",v=a==="pepite"?te(10,15):a==="papyte"?te(15,20):cn(i,o),E=y.has(o),b=E?Math.max(0,v-2):0;let $=0,g=0,I=0,A=0,B=null;d==="GK"?$=v:d==="DEF"?(g=v,E&&(I=b,B="MIL")):d==="ATT"?(A=v,E&&(I=b,B="MIL")):(I=v,E&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(g=b,B="DEF"):(A=b,B="ATT")));const C=f(h);return{job:d,job2:B,firstname:yt(h),surname_real:C,country_code:h,club_id:e,note_g:$,note_d:g,note_m:I,note_a:A,skin:u,hair:w,hair_length:L,rarity:a,sell_price:0,ethnie:we(h),_ethnie:we(h)}})}async function vt(e,t,n,i=!1){ue=null;const{data:s}=await k.from("players").select("surname_real").not("surname_real","is",null),l=new Set((s||[]).map(d=>d.surname_real).filter(Boolean)),y=un(e,t,l,i),{data:x}=await k.from("players").select("face").not("face","is",null),_=new Set((x||[]).map(d=>d.face).filter(Boolean)),r=new Set;for(const d of y){const o=await rt(d.country_code,new Set([..._,...r]));o&&(d.face=o,r.add(o)),delete d._ethnie}const{data:m,error:c}=await k.from("players").insert(y).select("id");if(c){console.error("[GenSquad] Erreur batch insert:",c.message,c.details),n("Erreur: "+c.message,"error");return}const p=(m||[]).map(d=>({card_type:"player",player_id:d.id}));if(p.length){const{error:d}=await k.from("cards").insert(p);d&&console.warn("[GenSquad] Erreur cartes:",d.message)}const f=(m==null?void 0:m.length)||0;console.log("[GenSquad] Créés:",f,"/",y.length),f>0?n(`${f} joueurs générés ✅`,"success"):n("Erreur génération joueurs","error")}function xt(e){return{style:e.kit_style||F.style,color1:e.kit_color1||F.color1,color2:e.kit_color2||F.color2,color3:e.kit_color3||F.color3,shorts:e.kit_shorts||F.shorts,socks:e.kit_socks||F.socks}}let me=[];async function mn(e,t){await xe(e,t)}async function xe(e,t){const[{data:n,error:i},{data:s}]=await Promise.all([k.from("clubs").select("*").order("real_name"),k.from("players").select("club_id")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}me=n||[];const l={};(s||[]).forEach(y=>{l[y.club_id]=(l[y.club_id]||0)+1}),gn(e,t,l)}function gn(e,t,n={}){const{toast:i,openModal:s,closeModal:l}=t;e.innerHTML=`
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
    </div>`,y(me),document.getElementById("search-clubs").addEventListener("input",x=>{const _=x.target.value.toLowerCase();y(me.filter(r=>r.real_name.toLowerCase().includes(_)||r.encoded_name.toLowerCase().includes(_)))}),document.getElementById("add-club-btn").addEventListener("click",()=>He(null,e,t));function y(x){const _=document.getElementById("clubs-list");if(!x.length){_.innerHTML='<p style="color:var(--tile-fg-dim);padding:20px;text-align:center">Aucun club.</p>';return}const r={};x.forEach(p=>{const f=p.country_code||"—";r[f]||(r[f]=[]),r[f].push(p)});const m=Object.keys(r).sort(),c=p=>{const f=xt(p),d=p.logo_url?`<img src="${p.logo_url}" style="width:36px;height:36px;object-fit:contain;border-radius:8px;flex-shrink:0">`:`<div style="width:36px;height:36px;background:linear-gradient(135deg,${f.color1},${f.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:900;flex-shrink:0">${p.encoded_name.slice(0,3)}</div>`,o=n[p.id]||0;return`
        <div class="club-row" data-club-id="${p.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:10px;cursor:pointer;background:var(--tile-bg);border:1px solid var(--tile-border);transition:background .15s">
          ${d}
          <img src="https://flagsapi.com/${p.country_code}/flat/24.png" style="width:18px;height:13px;object-fit:cover;border-radius:2px;flex-shrink:0" onerror="this.style.display='none'">
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:12px;color:var(--tile-fg-on-page);font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.encoded_name}</div>
            <div style="font-size:10px;color:${o===0?"#e67e22":"var(--tile-fg-dim)"}">${o===0?"⚠️ 0 joueur":`👥 ${o}`}</div>
          </div>
          <button class="btn-del-club" data-del="${p.id}"
            style="width:22px;height:22px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;flex-shrink:0"
            onclick="event.stopPropagation()">✕</button>
        </div>`};_.innerHTML=m.map(p=>`
      <div style="display:flex;align-items:center;gap:8px;padding:8px 4px 4px;margin-top:6px">
        ${p!=="—"?`<img src="https://flagsapi.com/${p}/flat/24.png" style="width:20px;height:15px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">`:'<span style="font-size:14px">🌍</span>'}
        <span style="font-size:11px;font-weight:900;color:var(--tile-fg-dim);letter-spacing:1px">${p}</span>
        <span style="font-size:11px;color:var(--tile-fg-dim);background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:10px;padding:1px 8px">${r[p].length}</span>
        <div style="flex:1;height:1px;background:var(--tile-border)"></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:4px">
        ${r[p].map(c).join("")}
      </div>
    `).join(""),_.querySelectorAll(".club-row").forEach(p=>{p.addEventListener("click",()=>{const f=me.find(d=>d.id===p.dataset.clubId);f&&He(f,e,t),_.querySelectorAll(".club-row").forEach(d=>d.style.background="var(--tile-bg)"),p.style.background="rgba(26,107,60,0.18)"})}),_.querySelectorAll(".btn-del-club").forEach(p=>{p.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:f}=await k.from("clubs").delete().eq("id",p.dataset.del);f?i(f.message,"error"):(i("Club supprimé","success"),xe(e,t))})})}}function fn(e){var j,O,U,H;const{openModal:t,closeModal:n}=e;let i=6;const s=36;function l(S){return new Array(S*S).fill("#ffffff")}let y=l(i),x="OP",_="#D4A017",r=50,m=0,c=0,p="",f="#ffffff",d=25,o=0,h=35,u=new Set,w=null;function L(){const S=s*i;let z="";for(let M=0;M<i;M++)for(let R=0;R<i;R++){const N=M*i+R;z+=`<rect x="${R*s}" y="${M*s}" width="${s}" height="${s}" fill="${y[N]}"/>`}const T=(M,R,N,G,V)=>{if(!M)return"";const J=S/2+G/100*S,Y=S/2+V/100*S,W=N/100*S*(M.length>3?3/M.length:1);return`<text x="${J}" y="${Y}" text-anchor="middle" dominant-baseline="central"
        font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="${W}"
        fill="${R}">${M}</text>`};return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${S} ${S}">
      ${z}
      ${T(x,_,r,m,c)}
      ${T(p,f,d,o,h)}
    </svg>`}function a(S){return"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(S)))}const v=(S,z,T,M,R,N,G)=>`
    <div style="background:#f7f7f7;border-radius:10px;padding:12px;display:flex;flex-direction:column;gap:8px">
      <div style="font-weight:700;font-size:12px;color:#333">${z}</div>
      <input id="flag-text${S}" maxlength="20" value="${T}" placeholder="${S===2?"Vide = désactivé":""}" style="font-weight:900">
      <div style="display:flex;align-items:center;gap:8px">
        <label style="margin:0;font-size:11px;white-space:nowrap">Couleur</label>
        <input type="color" id="flag-text${S}-color" value="${M}" style="width:40px;height:28px;padding:2px;cursor:pointer">
      </div>
      <div>
        <label style="font-size:10px">Taille (<span id="flag-size${S}-val">${R}</span>%)</label>
        <input type="range" id="flag-text${S}-size" min="5" max="120" value="${R}" style="width:100%">
      </div>
      <div>
        <label style="font-size:10px">Position H (<span id="flag-x${S}-val">${N}</span>)</label>
        <input type="range" id="flag-text${S}-x" min="-50" max="50" value="${N}" style="width:100%">
      </div>
      <div>
        <label style="font-size:10px">Position V (<span id="flag-y${S}-val">${G}</span>)</label>
        <input type="range" id="flag-text${S}-y" min="-50" max="50" value="${G}" style="width:100%">
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
            ${[6,9,12].map(S=>`<button type="button" class="btn ${S===i?"btn-primary":"btn-ghost"} btn-sm flag-grid-size" data-n="${S}" style="flex:1;padding:6px 4px">${S}×${S}</button>`).join("")}
          </div>
        </div>
      </div>

      ${v(1,"TEXTE 1 (20 caractères max)",x,_,r,m,c)}
      ${v(2,"TEXTE 2 — optionnel (20 caractères max)",p,f,d,o,h)}
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
  `);function $(){const S=document.getElementById("flag-squares-grid");if(!S)return;const z=i>=12?30:i>=9?36:44;S.style.gridTemplateColumns=`repeat(${i}, ${z}px)`,S.innerHTML=y.map((T,M)=>`
      <div class="flag-square" data-i="${M}" style="width:${z}px;height:${z}px;border-radius:4px;background:${T};cursor:pointer;
        box-sizing:border-box;border:${u.has(M)?"3px solid #1A6B3C":"1px solid rgba(0,0,0,0.15)"}"></div>
    `).join(""),S.querySelectorAll(".flag-square").forEach(T=>{T.addEventListener("click",M=>{const R=parseInt(T.dataset.i);M.ctrlKey||M.metaKey||M.shiftKey?u.has(R)?u.delete(R):u.add(R):u=new Set([R]),$(),g()}),T.addEventListener("dblclick",()=>{const M=parseInt(T.dataset.i),R=document.createElement("input");R.type="color",R.value=y[M],R.style.position="fixed",R.style.opacity="0",document.body.appendChild(R),R.addEventListener("input",()=>{y[M]=R.value,$(),C()}),R.addEventListener("change",()=>R.remove()),R.click()})})}function g(){const S=document.getElementById("flag-copy-btn"),z=document.getElementById("flag-paste-btn");S.disabled=u.size===0,z.disabled=u.size===0||w===null}function I(){if(u.size===0)return;const S=[...u][0];w=y[S];const z=document.getElementById("flag-clipboard-preview"),T=document.getElementById("flag-clipboard-swatch");z&&(z.style.display="inline-flex"),T&&(T.style.background=w),g()}function A(){u.size===0||w===null||(u.forEach(S=>{y[S]=w}),$(),C())}(j=document.getElementById("flag-copy-btn"))==null||j.addEventListener("click",I),(O=document.getElementById("flag-paste-btn"))==null||O.addEventListener("click",A);function B(S){if(!document.getElementById("flag-squares-grid")){document.removeEventListener("keydown",B);return}!(S.ctrlKey||S.metaKey)||u.size===0||(S.key==="c"||S.key==="C"?(S.preventDefault(),I()):(S.key==="v"||S.key==="V")&&(S.preventDefault(),A()))}document.addEventListener("keydown",B),document.querySelectorAll(".flag-grid-size").forEach(S=>{S.addEventListener("click",()=>{const z=parseInt(S.dataset.n);if(z===i)return;i=z,y=l(i),u=new Set,w=null;const T=document.getElementById("flag-clipboard-preview");T&&(T.style.display="none"),$(),g(),C(),document.querySelectorAll(".flag-grid-size").forEach(M=>{M.classList.toggle("btn-primary",parseInt(M.dataset.n)===i),M.classList.toggle("btn-ghost",parseInt(M.dataset.n)!==i)})})});function C(){const S=document.getElementById("flag-preview");S&&(S.innerHTML=L())}$(),g(),C();function D(S){document.getElementById(`flag-text${S}`).addEventListener("input",z=>{const T=z.target.value.slice(0,20);S===1?x=T:p=T,C()}),document.getElementById(`flag-text${S}-color`).addEventListener("input",z=>{S===1?_=z.target.value:f=z.target.value,C()}),document.getElementById(`flag-text${S}-size`).addEventListener("input",z=>{const T=parseInt(z.target.value);S===1?r=T:d=T,document.getElementById(`flag-size${S}-val`).textContent=T,C()}),document.getElementById(`flag-text${S}-x`).addEventListener("input",z=>{const T=parseInt(z.target.value);S===1?m=T:o=T,document.getElementById(`flag-x${S}-val`).textContent=T,C()}),document.getElementById(`flag-text${S}-y`).addEventListener("input",z=>{const T=parseInt(z.target.value);S===1?c=T:h=T,document.getElementById(`flag-y${S}-val`).textContent=T,C()})}D(1),D(2),(U=document.getElementById("flag-cancel"))==null||U.addEventListener("click",()=>n()),(H=document.getElementById("flag-use"))==null||H.addEventListener("click",()=>{const S=a(L()),z=document.getElementById("m-logo-url-current");z&&(z.value=S);const T=document.getElementById("logo-preview");T&&(T.innerHTML=`<img src="${S}" style="width:100%;height:100%;object-fit:contain">`),n()})}async function He(e,t,n){var h,u,w,L,a,v,E;const{toast:i}=n,s=!!e,l=e?xt(e):{...F},y=document.getElementById("club-panel");if(!y)return;const x=Object.entries(Pe).map(([b,$])=>`<option value="${b}" ${l.style===b?"selected":""}>${$.label}</option>`).join(""),_=Se.map(b=>`<option value="${b}" ${((e==null?void 0:e.country_code)||"FR")===b?"selected":""}>${b}</option>`).join("");y.style.display="block",y.style.alignItems="",y.style.justifyContent="",y.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <h3 style="font-size:17px;font-weight:900;color:var(--tile-fg-on-page)">${s?`✏️ ${e.real_name}`:"➕ Nouveau club"}</h3>
      ${s?'<button id="btn-gen-squad-panel" class="btn btn-primary btn-sm">⚽ Générer joueurs</button>':""}
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
            ${[["Couleur 1","m-kit-color1",l.color1,!1],["Couleur 2","m-kit-color2",l.color2,!1],["Couleur 3","m-kit-color3",l.color3,!0],["Short","m-kit-shorts",l.shorts,!1],["Chaussettes","m-kit-socks",l.socks,!1]].map(([b,$,g,I])=>`
              <div class="form-group" id="wrap-${$}" ${I?'style="display:none"':""}>
                <label>${b}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${$}" value="${g||"#000000"}" style="width:38px;height:32px;padding:2px;border:1px solid var(--tile-border);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${$}-txt" value="${g||"#000000"}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>`).join("")}
          </div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div id="kit-preview-wrap" style="background:#f0f0f0;border-radius:12px;padding:14px;border:1.5px solid var(--tile-border);min-width:60px;text-align:center"></div>
            <div style="font-size:10px;color:var(--tile-fg-dim)">Aperçu</div>
          </div>
        </div>
      </div>

      ${s?"":`
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
        ${s?"💾 Enregistrer":"✅ Créer le club"}
      </button>
    </div>

    ${s?`
    <div style="border-top:1px solid var(--tile-border);margin-top:24px;padding-top:20px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <h4 style="font-size:14px;font-weight:900;color:var(--tile-fg-on-page)">🃏 Joueurs du club (<span id="club-players-count">…</span>)</h4>
        <button id="btn-gen-one-player" class="btn btn-primary btn-sm">➕ Générer 1 joueur</button>
      </div>
      <div id="club-players-grid" style="display:flex;flex-wrap:wrap;gap:10px"></div>
    </div>`:""}
  `,(h=document.getElementById("m-logo-file"))==null||h.addEventListener("change",b=>{var I;const $=(I=b.target.files)==null?void 0:I[0];if(!$)return;const g=new FileReader;g.onload=()=>{document.getElementById("logo-preview").innerHTML=`<img src="${g.result}" style="width:100%;height:100%;object-fit:contain">`},g.readAsDataURL($)}),(u=document.getElementById("m-open-flag-builder"))==null||u.addEventListener("click",()=>{fn(n)}),ae();function r(){var I,A;const b=((I=document.getElementById("m-kit-style"))==null?void 0:I.value)||"uni",$=((A=Pe[b])==null?void 0:A.colors)===3,g=document.getElementById("wrap-m-kit-color3");g&&(g.style.display=$?"":"none")}r(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(b=>{const $=document.getElementById(b),g=document.getElementById(b+"-txt");!$||!g||($.addEventListener("input",()=>{g.value=$.value,ae()}),g.addEventListener("input",()=>{const I=g.value.trim();/^#[0-9a-fA-F]{6}$/.test(I)&&($.value=I,ae())}),g.addEventListener("change",()=>{let I=g.value.trim();I.startsWith("#")||(I="#"+I),/^#[0-9a-fA-F]{6}$/.test(I)&&($.value=I,g.value=I,ae())}))}),(w=document.getElementById("m-kit-style"))==null||w.addEventListener("change",()=>{r(),ae()});const m=document.getElementById("m-real"),c=document.getElementById("m-encoded");function p(){if(!m||!c||c.value)return;const b=m.value.trim().split(/\s+/),$=b.length===1?b[0].toUpperCase().slice(0,6):b.filter(g=>g.length>2).map(g=>g[0].toUpperCase()).join("")||b[0].toUpperCase().slice(0,4);c.value=$}m==null||m.addEventListener("input",p),(L=document.getElementById("auto-encode-btn"))==null||L.addEventListener("click",()=>{c&&(c.value=""),p()}),(a=document.getElementById("m-save"))==null||a.addEventListener("click",()=>En(e,s,t,n));const f=document.getElementById("m-gen-squad"),d=document.getElementById("m-gen-strong-label");function o(){if(d&&(d.style.display=f!=null&&f.checked?"flex":"none",!(f!=null&&f.checked))){const b=document.getElementById("m-gen-strong");b&&(b.checked=!1)}}f==null||f.addEventListener("change",o),o(),(v=document.getElementById("btn-gen-squad-panel"))==null||v.addEventListener("click",()=>{yn(e,n,t)}),(E=document.getElementById("btn-gen-one-player"))==null||E.addEventListener("click",()=>{vn(e,n)}),s&&Ce(e.id)}async function Ce(e){const{data:t}=await k.from("players").select("*, clubs(encoded_name, logo_url, kit_style, kit_color1, kit_color2, kit_color3, kit_shorts, kit_socks)").eq("club_id",e).order("surname_real"),n=document.getElementById("club-players-grid"),i=document.getElementById("club-players-count");if(i&&(i.textContent=(t||[]).length),!!n){if(!(t!=null&&t.length)){n.innerHTML='<div style="color:var(--tile-fg-dim);padding:20px;font-size:13px">Aucun joueur dans ce club.</div>';return}n.innerHTML=t.map(s=>oe(s,{width:100})).join("")}}function yn(e,t,n){const{openModal:i,closeModal:s,toast:l}=t;i(`⚽ Générer — ${e.real_name}`,`<div style="display:flex;flex-direction:column;gap:14px">
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
    </div>`),setTimeout(()=>{var y,x;(y=document.getElementById("qg-cancel"))==null||y.addEventListener("click",()=>s()),(x=document.getElementById("qg-ok"))==null||x.addEventListener("click",async()=>{var r;const _=((r=document.getElementById("qg-strong"))==null?void 0:r.checked)??!1;s(),l("Génération en cours…","info"),await vt(e.id,e.country_code,l,_),l("Effectif généré ✅","success"),Ce(e.id),xe(n,t)})},50)}const ht=["GK","DEF","MIL","ATT"],bn=[{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}];function vn(e,t){const{openModal:n,closeModal:i,toast:s}=t,l=Se.map(r=>`<option value="${r}">${r}</option>`).join(""),y=r=>ht.map(m=>`<option value="${m}" ${m===r?"selected":""}>${m}</option>`).join(""),x=`
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
            <select id="gen-one-job1">${y("MIL")}</select>
          </div>
          <div>
            <label>POSTE 2 (optionnel)</label>
            <select id="gen-one-job2">
              <option value="">— Aucun —</option>
              ${y(null)}
            </select>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label>RARETÉ</label>
            <select id="gen-one-rarity">
              ${bn.map(r=>`<option value="${r.value}">${r.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label>PAYS</label>
            <select id="gen-one-country">
              <option value="">— Aléatoire —</option>
              ${l}
            </select>
          </div>
        </div>
      </div>
    </div>
  `;n(`➕ Générer un joueur — ${e.real_name}`,x,`
    <button id="gen-one-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gen-one-ok" class="btn btn-primary">➕ Générer</button>
  `),setTimeout(()=>{var r,m;document.querySelectorAll('input[name="gen-one-mode"]').forEach(c=>{c.addEventListener("change",()=>{document.getElementById("gen-one-custom-fields").style.display=c.value==="custom"&&c.checked?"flex":"none"})}),(r=document.getElementById("gen-one-cancel"))==null||r.addEventListener("click",()=>i()),(m=document.getElementById("gen-one-ok"))==null||m.addEventListener("click",async()=>{var d,o,h,u,w;const c=((d=document.querySelector('input[name="gen-one-mode"]:checked'))==null?void 0:d.value)||"random",p=document.getElementById("gen-one-ok");p.disabled=!0,p.textContent="⏳ Génération…";const f={};c==="custom"&&(f.job=((o=document.getElementById("gen-one-job1"))==null?void 0:o.value)||null,f.job2=((h=document.getElementById("gen-one-job2"))==null?void 0:h.value)||null,f.rarity=((u=document.getElementById("gen-one-rarity"))==null?void 0:u.value)||null,f.country=((w=document.getElementById("gen-one-country"))==null?void 0:w.value)||null);try{await xn(e,f),s("Joueur généré ✅","success"),i(),Ce(e.id)}catch(L){s("Erreur : "+L.message,"error"),p.disabled=!1,p.textContent="➕ Générer"}})},50)}async function xn(e,t={}){const n=t.country||(Math.random()<.5?e.country_code:mt(e.country_code)),i=t.job||Q(ht),s=t.job2||null,l=t.rarity||(()=>{const A=Math.random()*100;return A<1.5?"legende":A<3?"pepite":A<4.5?"papyte":"normal"})(),y=l==="pepite"?te(10,15):l==="papyte"?te(15,20):gt(),x=s?Math.max(0,y-2):0;let _=0,r=0,m=0,c=0;i==="GK"&&(_=y),i==="DEF"&&(r=y),i==="MIL"&&(m=y),i==="ATT"&&(c=y),s==="GK"&&(_=x),s==="DEF"&&(r=x),s==="MIL"&&(m=x),s==="ATT"&&(c=x);const p=Be(n),f=ut(n),d=Q(pt),{data:o}=await k.from("players").select("surname_real").not("surname_real","is",null),h=new Set((o||[]).map(A=>A.surname_real).filter(Boolean)),u=bt(n),w=u.filter(A=>!h.has(A)),L=Q(w.length?w:u),a={job:i,job2:s,firstname:yt(n),surname_real:L,country_code:n,club_id:e.id,note_g:_,note_d:r,note_m:m,note_a:c,skin:p,hair:f,hair_length:d,rarity:l,sell_price:0,ethnie:we(n)},{data:v}=await k.from("players").select("face").not("face","is",null),E=new Set((v||[]).map(A=>A.face).filter(Boolean)),b=await rt(n,E);b&&(a.face=b);const{data:$,error:g}=await k.from("players").insert(a).select("id").single();if(g)throw g;const{error:I}=await k.from("cards").insert({card_type:"player",player_id:$.id});I&&console.warn("[GenOnePlayer] Erreur carte:",I.message)}function Et(){var e,t,n,i,s,l;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((t=document.getElementById("m-kit-color1"))==null?void 0:t.value)||"#1A6B3C",color2:((n=document.getElementById("m-kit-color2"))==null?void 0:n.value)||"#ffffff",color3:((i=document.getElementById("m-kit-color3"))==null?void 0:i.value)||"#000000",shorts:((s=document.getElementById("m-kit-shorts"))==null?void 0:s.value)||"#111111",socks:((l=document.getElementById("m-kit-socks"))==null?void 0:l.value)||"#ffffff"}}function ae(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=zt(Et(),"panel"))}async function hn(e,t){const n=(e.name.split(".").pop()||"png").toLowerCase(),i=`clubs/${t||"new"}-${Date.now()}.${n}`,{error:s}=await k.storage.from("assets").upload(i,e,{upsert:!0,cacheControl:"3600"});if(s)throw s;const{data:l}=k.storage.from("assets").getPublicUrl(i);return l.publicUrl}async function En(e,t,n,i){var L,a,v,E,b,$,g,I,A;const{toast:s}=i,l=document.getElementById("m-error"),y=document.getElementById("m-save"),x=(L=document.getElementById("m-real"))==null?void 0:L.value.trim(),_=(a=document.getElementById("m-encoded"))==null?void 0:a.value.trim().toUpperCase(),r=(v=document.getElementById("m-country"))==null?void 0:v.value.trim().toUpperCase(),m=((b=(E=document.getElementById("m-logo-file"))==null?void 0:E.files)==null?void 0:b[0])||null,c=(($=document.getElementById("m-logo-url-current"))==null?void 0:$.value)||null,p=((g=document.getElementById("m-gen-stadium"))==null?void 0:g.checked)??!1,f=((I=document.getElementById("m-gen-squad"))==null?void 0:I.checked)??!1,d=((A=document.getElementById("m-gen-strong"))==null?void 0:A.checked)??!1,o=Et();if(!x){l.textContent="Le nom du club est requis.";return}if(!_){l.textContent="Le nom encodé est requis.";return}if(!r){l.textContent="Le pays est requis.";return}y.disabled=!0,y.textContent="Enregistrement…";let h=c;if(m)try{y.textContent="📤 Envoi du logo…",h=await hn(m,e==null?void 0:e.id)}catch(B){l.textContent="Erreur upload logo : "+B.message,y.disabled=!1,y.textContent=t?"💾 Enregistrer":"✅ Créer le club";return}const u={real_name:x,encoded_name:_,country_code:r,logo_url:h,kit_style:o.style,kit_color1:o.color1,kit_color2:o.color2,kit_color3:o.color3,kit_shorts:o.shorts,kit_socks:o.socks};let w=e==null?void 0:e.id;if(t){const{error:B}=await k.from("clubs").update(u).eq("id",w);if(B){l.textContent=B.message,y.disabled=!1,y.textContent="💾 Enregistrer";return}}else{const{data:B,error:C}=await k.from("clubs").insert(u).select().single();if(C){l.textContent=C.message,y.disabled=!1,y.textContent="✅ Créer le club";return}if(w=B.id,p){y.textContent="🏟️ Création du stade…";const{data:D,error:j}=await k.from("stadium_definitions").insert({name:`Stade de ${x}`,club_id:w,country_code:null}).select().single();j?console.warn("[Stadium] Erreur def stade:",j.message):D&&await k.from("cards").insert({card_type:"stadium",stadium_id:D.id})}f&&(y.textContent="⚽ Génération des joueurs…",await vt(w,r,s,d))}s(t?"Club modifié ✅":"Club créé ✅","success"),xe(n,i)}const _n=["normal","pepite","papyte","legende"],Ge=["GK","DEF","MIL","ATT"],wn=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let ee={...q},ge=[];async function $n(e,{toast:t}){const{data:n}=await k.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");ge=n||[],ee={...q},e.innerHTML=An(ge),kn(e,ge,t),K()}function In(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=ge.find(i=>String(i.id)===String(e));return t?{style:t.kit_style||F.style,color1:t.kit_color1||F.color1,color2:t.kit_color2||F.color2,shorts:t.kit_shorts||F.shorts,socks:t.kit_socks||F.socks}:{...F}}function K(){var m,c,p,f;const e=d=>{var o;return((o=document.getElementById(d))==null?void 0:o.value)||""},t={firstname:e("cb-firstname"),surname_real:e("cb-surname-real"),country_code:e("cb-country"),club_encoded_name:((c=(m=document.getElementById("cb-club"))==null?void 0:m.selectedOptions[0])==null?void 0:c.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=In(),i=document.getElementById("cb-club"),s=((f=(p=i==null?void 0:i.selectedOptions[0])==null?void 0:p.dataset)==null?void 0:f.logo)||null,l=lt(ee,n,120),y=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(l)}`,x=Nt(t,{portraitUrl:y,clubLogoUrl:s,showNotes:!0}),_=document.getElementById("card-preview");_&&(_.innerHTML=x);const r=document.getElementById("avatar-preview-wrap");r&&(r.innerHTML=l)}function _t(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};ee={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function kn(e,t,n){var s,l,y,x,_;e.querySelectorAll("input,select").forEach(r=>{r.addEventListener("input",K),r.addEventListener("change",K)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(r=>{var m;(m=document.getElementById(r))==null||m.addEventListener("change",()=>{_t(),K()})}),(s=document.getElementById("cb-surname-real"))==null||s.addEventListener("input",K),(l=document.getElementById("cb-surname-enc"))==null||l.addEventListener("input",K),(y=document.getElementById("cb-club"))==null||y.addEventListener("change",K),(x=document.getElementById("btn-save-player"))==null||x.addEventListener("click",()=>Ln(n)),(_=document.getElementById("btn-reset"))==null||_.addEventListener("click",()=>{e.querySelectorAll("input").forEach(r=>r.value=""),e.querySelectorAll("select").forEach(r=>r.selectedIndex=0),ee={...q},i.forEach(r=>{const m=r.replace("av-",""),c=document.getElementById(r);c&&(c.value=q[m]||"")}),K()})}async function Ln(e){const t=l=>{var y;return((y=document.getElementById(l))==null?void 0:y.value)||""},n=t("cb-surname-real").trim();if(t("cb-surname-enc").trim(),!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}_t();const i={firstname:t("cb-firstname").trim(),surname_real:n,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:ee,skin:ee.skin||"blanc",hair:ee.hairColor||"marron",hair_length:"court"},{error:s}=await k.from("players").insert(i);if(s){e("Erreur: "+s.message,"error");return}e(`✅ Joueur "${i.firstname} ${i.surname_real}" enregistré !`,"success")}function An(e){const t=wn.map(([r,m])=>`<option value="${r}">${m} (${r})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(r=>`<option value="${r.id}" data-logo="${r.logo_url||""}">${r.encoded_name}</option>`).join(""),i=Ge.map(r=>`<option value="${r}">${r}</option>`).join(""),s='<option value="">Aucun</option>'+Ge.map(r=>`<option value="${r}">${r}</option>`).join(""),l=_n.map(r=>`<option value="${r}">${r.charAt(0).toUpperCase()+r.slice(1)}</option>`).join(""),y=(r,m,c)=>Object.entries(m).map(([p,f])=>`<option value="${p}" ${p===(c||"")?"selected":""}>${f.label}</option>`).join(""),x=Object.keys(Rt).map(r=>`<option value="${r}" ${r===q.skin?"selected":""}>${r.charAt(0).toUpperCase()+r.slice(1)}</option>`).join(""),_=Object.keys(jt).map(r=>`<option value="${r}" ${r===q.hairColor?"selected":""}>${r.charAt(0).toUpperCase()+r.slice(1)}</option>`).join("");return`
  <div style="display:grid;grid-template-columns:1fr 340px;gap:20px;align-items:start">

    <!-- ── Formulaire gauche ── -->
    <div style="display:flex;flex-direction:column;gap:14px">

      <!-- Identité -->
      <div class="card-panel">
        <h3 style="font-size:14px;font-weight:600;margin-bottom:12px">👤 Identité du joueur</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div><label>Prénom *</label><input id="cb-firstname" placeholder="Osame"></div>
          <div>
            <label>Nom *</label>
            <input id="cb-surname-real" placeholder="Sahraoui" style="width:100%">
          </div>
          <div>
            <label>Surname</label>
            <input id="cb-surname-enc" placeholder="Sahraoui">
          </div>
          <div id="encode-summary-wrap" style="display:none">
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
          <div><label>Poste secondaire</label><select id="cb-job2">${s}</select></div>
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
          ${["normal","pepite","papyte","legende"].map(r=>`
            <div style="background:${Dt[r]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
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
              <select id="av-skin">${x}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${y("av-hair",Pt,q.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${_}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${y("av-eyebrows",Ft,q.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${y("av-eyes",Ot,q.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${y("av-nose",qt,q.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${y("av-mouth",Ut,q.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${y("av-beard",Ht,q.beard)}</select>
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
  `}const Sn=2*60*1e3;function ne(e){return e.last_seen?Date.now()-new Date(e.last_seen).getTime()<Sn:!1}async function $e(e,{toast:t}){const[{data:n,error:i},{data:s},{data:l}]=await Promise.all([k.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws,last_seen").order("created_at",{ascending:!1}),k.rpc("admin_get_solo_progress"),k.rpc("admin_get_user_emails")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const y={};(s||[]).forEach(d=>{y[d.user_id]=d.unlocked_level});const x={};(l||[]).forEach(d=>{x[d.id]=d.email});const _=n||[];e.innerHTML=`
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
  `;function r(d){const o=document.getElementById("online-count");o&&(o.textContent=d.filter(ne).length)}function m(){const d=document.getElementById("search-users").value.toLowerCase(),o=document.getElementById("filter-online").checked;f(_.filter(h=>{var u;return(h.pseudo.toLowerCase().includes(d)||((u=h.club_name)==null?void 0:u.toLowerCase().includes(d)))&&(!o||ne(h))}))}f(_),r(_),document.getElementById("search-users").addEventListener("input",m),document.getElementById("filter-online").addEventListener("change",m);const c=setInterval(async()=>{const{data:d}=await k.from("users").select("id,last_seen");if(!d)return;const o={};d.forEach(h=>{o[h.id]=h.last_seen}),_.forEach(h=>{h.last_seen=o[h.id]??h.last_seen}),r(_),document.querySelectorAll("[data-online-dot]").forEach(h=>{const u=_.find(w=>w.id===h.dataset.onlineDot);u&&(h.style.background=ne(u)?"#22c55e":"transparent")})},2e4),p=new MutationObserver(()=>{document.body.contains(e)||(clearInterval(c),p.disconnect())});p.observe(document.body,{childList:!0,subtree:!0});function f(d){document.getElementById("users-tbody").innerHTML=d.map(o=>{const h=o.mmr??1e3,u=o.mmr_deviation??350,w=o.placement_matches??0,L=st(h),a=o.ranked_wins??0,v=o.ranked_losses??0,E=o.ranked_draws??0,b=a+v+E,$=b>0?Math.round(a/b*100):null,g=w<10,I=u<80?"#1A6B3C":u<150?"#e67e22":"#bb2020";return`
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:6px">
              <span data-online-dot="${o.id}" title="${ne(o)?"En ligne":"Hors ligne"}"
                style="width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${ne(o)?"#22c55e":"transparent"};border:1px solid ${ne(o)?"#22c55e":"var(--gray-300,#ccc)"}"></span>
              <div style="font-weight:700">${o.pseudo}</div>
            </div>
            <div style="font-size:11px;color:var(--gray-600);margin-left:14px">${o.club_name||"—"}</div>
            <div style="font-size:10.5px;color:var(--gray-600);margin-left:14px">${x[o.id]||"—"}</div>
          </td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:6px">
              <span id="credits-display-${o.id}">${(o.credits||0).toLocaleString("fr")} cr.</span>
              <button class="btn-edit-credits" data-user="${o.id}" data-current="${o.credits||0}"
                style="background:none;border:none;cursor:pointer;font-size:12px;padding:0;opacity:.7" title="Modifier les crédits">✏️</button>
            </div>
            <div style="color:var(--gray-600)">🎮 Solo max : niv. ${y[o.id]??1}</div>
          </td>
          <td style="font-size:12px">${o.wins}V / ${o.draws}N / ${o.losses}D</td>
          <td style="font-size:12px">🥇${o.trophies_top1} 🥈${o.trophies_top2} 🥉${o.trophies_top3}</td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:5px">
              <span style="font-size:16px">${L.emoji}</span>
              <span style="font-weight:700;color:${L.color}">${L.label}</span>
            </div>
            ${g?`<div style="font-size:10px;color:#e67e22">${w}/10 placement${w<10?` (${10-w} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${a}V ${E}N ${v}D${$!==null?` · ${$}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${h}</div>
            <div style="font-size:10px;color:${I}">RD ±${Math.round(u)}</div>
          </td>
          <td>
            ${o.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td style="display:flex;gap:4px">
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${o.id}" data-is-admin="${o.is_admin}">
              ${o.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
            <button class="btn btn-ghost btn-sm" data-view-cards="${o.id}" data-pseudo="${o.pseudo}"
              title="Voir toutes les cartes et équipes de ce Manager">🃏</button>
            <button class="btn btn-ghost btn-sm" data-delete-manager="${o.id}" data-pseudo="${o.pseudo}"
              style="color:var(--red,#bb2020);" title="Supprimer ce Manager et TOUT ce qui le lie">
              🗑️
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll(".btn-edit-credits").forEach(o=>{o.addEventListener("click",async()=>{const h=o.dataset.user,u=Number(o.dataset.current)||0,w=prompt("Nouveau solde de crédits :",u);if(w===null)return;const L=parseInt(w.replace(/\s/g,""),10);if(isNaN(L)||L<0){t("Valeur invalide","error");return}const{data:a,error:v}=await k.rpc("admin_update_user_credits",{p_user_id:h,p_new_credits:L});if(v){t(v.message,"error");return}if(!(a!=null&&a.success)){t((a==null?void 0:a.error)||"Échec de la mise à jour","error");return}t("Crédits mis à jour ✅","success");const E=document.getElementById(`credits-display-${h}`);E&&(E.textContent=`${L.toLocaleString("fr")} cr.`),o.dataset.current=L})}),document.querySelectorAll("[data-toggle-admin]").forEach(o=>{o.addEventListener("click",async()=>{const h=o.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${h?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:u}=await k.from("users").update({is_admin:h}).eq("id",o.dataset.toggleAdmin);u?t(u.message,"error"):(t("Rôle mis à jour ✅","success"),$e(e,{toast:t}))})}),document.querySelectorAll("[data-view-cards]").forEach(o=>{o.addEventListener("click",()=>{Mn(o.dataset.viewCards,o.dataset.pseudo)})}),document.querySelectorAll("[data-delete-manager]").forEach(o=>{o.addEventListener("click",async()=>{const h=o.dataset.deleteManager,u=o.dataset.pseudo;if(!confirm(`⚠️ ATTENTION: Supprimer le Manager "${u}" supprimera DÉFINITIVEMENT:
- Tous ses decks
- Toutes ses cartes
- Tous ses matchs
- Tous ses résultats ranked
- Tout ce qui le lie en base

Continuer ?`)||!confirm("Êtes-vous vraiment sûr ? Cette action est IRRÉVERSIBLE."))return;o.disabled=!0,o.textContent="⏳";const{data:w,error:L}=await k.rpc("delete_manager_cascade",{p_user_id:h});if(L){t(`Erreur: ${L.message}`,"error"),o.disabled=!1,o.textContent="🗑️";return}if(!(w!=null&&w.success)){t(`Erreur: ${(w==null?void 0:w.error)||"Suppression échouée"}`,"error"),o.disabled=!1,o.textContent="🗑️";return}t(`Manager "${u}" supprimé et ${Object.values(w.deleted).reduce((a,v)=>a+v)} entrées supprimées ✅`,"success"),$e(e,{toast:t})})})}}const Ke=[{key:"player",label:"⚽ Joueurs"},{key:"formation",label:"📋 Formations"},{key:"stadium",label:"🏟️ Stades"},{key:"game_changer",label:"⚡ Game Changers"},{key:"decks",label:"👥 Équipes"},{key:"boosters",label:"🎁 Boosters"}];function Bn(e){const t={GK:[],DEF:[],MIL:[],ATT:[]};return(e||[]).filter(n=>n.is_starter).forEach(n=>{const i=/^(GK|DEF|MIL|ATT)(\d+)$/.exec(n.position||"");if(!i)return;const s=i[1],l=parseInt(i[2],10)-1;t[s][l]=wt(n)}),t}function wt(e){const t=e.evolution_bonus||0,n=e.job2,i=n&&Number(e[`note_${n.toLowerCase()}`])||0,s=(l,y)=>(Number(y)||0)+(e.job===l?t:0)+(n===l&&i>0?t:0);return{cardId:e.card_id,firstname:e.firstname,name:e.surname_real,surname_real:e.surname_real,country_code:e.country_code,club_id:e.club_id,job:e.job,job2:e.job2,note_g:s("GK",e.note_g),note_d:s("DEF",e.note_d),note_m:s("MIL",e.note_m),note_a:s("ATT",e.note_a),evolution_bonus:t,rarity:e.rarity,face:e.face||null,clubName:e.club_encoded_name||null,clubLogo:e.club_logo_url||null,boost:0,used:!1}}function Cn(e){return e!=null&&e.image_url?`/icons/${e.image_url}`:null}function Tn(e){var t;return e!=null&&e.image_url?`/icons/${e.image_url}`:(t=e==null?void 0:e.club)!=null&&t.logo_url?e.club.logo_url:e!=null&&e.country_code?`https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null}function de(e){return e?`<div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-start">${e}</div>`:'<div style="padding:30px;text-align:center;color:#999;font-size:13px">Aucune carte dans cette catégorie.</div>'}async function Mn(e,t,n){const i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="3000",i.innerHTML=`<div class="modal admin-light-card" style="max-width:1100px;width:96%">
    <div class="modal-header"><h2>🃏 Collection de ${t}</h2><button class="btn-icon" id="mc-close">✕</button></div>
    <div class="modal-body" id="mc-body" style="padding:16px">
      <div style="text-align:center;color:#999;padding:30px">⏳ Chargement de la collection…</div>
    </div>
  </div>`,document.body.appendChild(i);const s=()=>i.remove();i.querySelector("#mc-close").addEventListener("click",s),i.addEventListener("click",a=>{a.target===i&&s()});const{data:l,error:y}=await k.rpc("admin_get_manager_collection",{p_user_id:e}),x=i.querySelector("#mc-body");if(!x)return;if(y||!(l!=null&&l.success)){x.innerHTML=`<div style="padding:20px;color:#bb2020">Erreur : ${(y==null?void 0:y.message)||(l==null?void 0:l.error)||"chargement impossible"}</div>`;return}const _=l.cards||[],r=l.decks||[],m={player:_.filter(a=>a.card_type==="player"&&a.player),formation:_.filter(a=>a.card_type==="formation"),stadium:_.filter(a=>a.card_type==="stadium"),game_changer:_.filter(a=>a.card_type==="game_changer")},c={player:m.player.length,formation:m.formation.length,stadium:m.stadium.length,game_changer:m.game_changer.length,decks:r.length},p={};p.player=de(m.player.map(a=>{const v={...a.player,_evolution_bonus:a.evolution_bonus||0};return`<div style="position:relative">${a.is_for_sale?'<div style="position:absolute;top:4px;right:4px;background:#D4A017;color:#111;font-size:9px;font-weight:800;padding:2px 6px;border-radius:8px;z-index:3">EN VENTE</div>':""}${oe(v,{width:110})}</div>`}).join("")),p.formation=de(m.formation.map(a=>`<div style="position:relative">${Gt(a.formation,pe[a.formation],{width:120})}</div>`).join("")),p.stadium=de(m.stadium.map(a=>{var b;const v=a.stadium_def,E=((b=v==null?void 0:v.club)==null?void 0:b.encoded_name)||(v==null?void 0:v.country_code)||"—";return`<div style="position:relative">${Ae((v==null?void 0:v.name)||"?",Tn(v),`${E}<br>+10 ⭐ joueurs alliés`,{width:120})}</div>`}).join("")),p.game_changer=de(m.game_changer.map(a=>{const v=a.gc_def;return`<div style="position:relative">${fe((v==null?void 0:v.name)||a.gc_type||"Game Changer",Cn(v),"⚡",(v==null?void 0:v.effect)||"",{width:120})}</div>`}).join(""));function f(a){var C,D;const v=a.cards||[],E=v.filter(j=>!j.is_starter),b=Bn(v),$=a.stadium||null;$&&Kt(b,$);const g=["GK","DEF","MIL","ATT"].reduce((j,O)=>j+b[O].filter(Boolean).length,0),I=$?`
      <div style="display:flex;align-items:center;gap:10px;background:#eaf3fb;border:1px solid #c9def0;border-radius:10px;padding:8px 12px;margin-bottom:10px">
        ${(C=$.club)!=null&&C.logo_url?`<img src="${$.club.logo_url}" style="width:26px;height:26px;object-fit:contain">`:'<span style="font-size:20px">🏟️</span>'}
        <div style="font-weight:800;font-size:13px;color:#1a1a1a">${$.name||"Stade"}</div>
        <div style="margin-left:auto;font-size:12px;color:#1A6B3C;font-weight:700">
          +10 aux joueurs ${((D=$.club)==null?void 0:D.encoded_name)||$.country_code||""}
        </div>
      </div>`:"",A=a.formation&&pe[a.formation]&&g?`<div style="max-width:560px;margin:0 auto;pointer-events:none">
           ${Vt(b,a.formation,null,[],340,375)}
         </div>`:`<div style="font-size:12px;color:#999;padding:20px;text-align:center">
           ${a.formation?pe[a.formation]?"Aucun titulaire enregistré.":`Formation inconnue : ${a.formation}`:"Aucune formation définie pour ce deck."}
         </div>`,B=j=>`<div style="position:relative">${oe(wt(j),{width:74})}</div>`;return`
      ${I}
      ${A}
      ${E.length?`
        <div style="margin-top:12px">
          <div style="font-size:11px;color:#888;font-weight:700;margin-bottom:5px">REMPLAÇANTS (${E.length})</div>
          <div style="display:flex;flex-wrap:wrap;gap:8px">${E.map(B).join("")}</div>
        </div>`:""}
    `}p.decks=r.length?`<div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap">
         <label style="font-size:12px;font-weight:700;color:#555">Équipe :</label>
         <select id="mc-deck-select" style="padding:7px 10px;border-radius:8px;border:1px solid var(--gray-200,#ddd);background:#fff;color:#1a1a1a;font-size:13px;font-weight:600;min-width:240px">
           ${r.map((a,v)=>`<option value="${v}">${a.name||"Deck sans nom"} — ${a.formation||"?"}</option>`).join("")}
         </select>
         <span style="font-size:12px;color:#888">${r.length} équipe(s)</span>
       </div>
       <div id="mc-deck-pitch">${f(r[0])}</div>`:`<div style="padding:30px;text-align:center;color:#999;font-size:13px">Ce manager n'a créé aucune équipe.</div>`;const d=l.boosters||[],o=l.legacy_booster_cards||0,h={legende:"Légende",pepite:"Pépite",papyte:"Papyte",normal:"Normal"},u={legende:"#7a28b8",pepite:"#D4A017",papyte:"#909090",normal:"#888"},w=d.reduce((a,v)=>a+(v.nb_cards||0),0);p.boosters=`
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px">
      <div style="flex:1;min-width:150px;background:#f4f8f5;border:1px solid #d6e8dc;border-radius:12px;padding:12px 14px">
        <div style="font-size:11px;color:#666">Boosters ouverts</div>
        <div style="font-size:22px;font-weight:900;color:#1A6B3C">${d.length}</div>
      </div>
      <div style="flex:1;min-width:150px;background:#fdf8ec;border:1px solid #efe0bb;border-radius:12px;padding:12px 14px">
        <div style="font-size:11px;color:#666">Cartes obtenues</div>
        <div style="font-size:22px;font-weight:900;color:#D4A017">${w}</div>
      </div>
      <div style="flex:1;min-width:150px;background:#f7f7f7;border:1px solid #e0e0e0;border-radius:12px;padding:12px 14px">
        <div style="font-size:11px;color:#666">Cartes booster (historique)</div>
        <div style="font-size:22px;font-weight:900;color:#555">${o}</div>
      </div>
    </div>
    ${d.length?`
      <div style="display:flex;flex-direction:column;gap:8px">
        ${d.map(a=>{const v=a.opened_at?new Date(a.opened_at).toLocaleString("fr"):"—",E=(a.cards||[]).map(b=>{const $=u[b.rarity]||"#888",g=b.rarity?` · <span style="color:${$};font-weight:700">${h[b.rarity]||b.rarity}</span>`:"",I=b.is_duplicate?' <span style="color:#aaa">(doublon)</span>':"";return`<div style="font-size:12px;color:#333;padding:3px 0;border-bottom:1px dashed #eee">
              ${b.name||b.card_type||"?"}${g}${b.note!=null?` · note ${b.note}`:""}${I}
            </div>`}).join("");return`<details style="border:1px solid var(--gray-200,#e0e0e0);border-radius:10px;padding:10px 12px;background:#fafafa">
            <summary style="cursor:pointer;font-size:13px;font-weight:700;color:#1a1a1a">
              ${a.booster_name||"Booster"} <span style="font-weight:400;color:#777">· ${a.nb_cards||0} carte(s) · ${v}</span>
            </summary>
            <div style="margin-top:8px">${E||'<div style="font-size:12px;color:#999">Contenu non détaillé.</div>'}</div>
          </details>`}).join("")}
      </div>`:`
      <div style="padding:20px;text-align:center;color:#999;font-size:13px;line-height:1.6">
        Aucune ouverture enregistrée pour ce manager.<br>
        <span style="font-size:11.5px">Le journal des ouvertures a été mis en place récemment : seules les ouvertures postérieures y figurent.${o?` Le compteur « historique » (${o}) recense les cartes joueur encore possédées et obtenues en booster avant cela.`:""}</span>
      </div>`}
  `,x.innerHTML=`
    <div style="display:flex;gap:6px;flex-wrap:wrap;border-bottom:1px solid var(--gray-200,#e0e0e0);padding-bottom:10px;margin-bottom:14px">
      ${Ke.map((a,v)=>`
        <button class="mc-tab" data-tab="${a.key}" style="
          border:1px solid ${v===0?"#1A6B3C":"var(--gray-200,#ddd)"};
          background:${v===0?"#1A6B3C":"#fff"};
          color:${v===0?"#fff":"#444"};
          padding:7px 13px;border-radius:999px;font-size:12.5px;font-weight:700;cursor:pointer">
          ${a.label} (${c[a.key]})
        </button>`).join("")}
    </div>
    ${Ke.map((a,v)=>`
      <div class="mc-pane" data-pane="${a.key}" style="display:${v===0?"block":"none"}">${p[a.key]}</div>
    `).join("")}
  `;const L=x.querySelector("#mc-deck-select");L&&L.addEventListener("change",()=>{const a=x.querySelector("#mc-deck-pitch");a&&(a.innerHTML=f(r[Number(L.value)]))}),x.querySelectorAll(".mc-tab").forEach(a=>{a.addEventListener("click",()=>{x.querySelectorAll(".mc-tab").forEach(v=>{const E=v===a;v.style.background=E?"#1A6B3C":"#fff",v.style.color=E?"#fff":"#444",v.style.borderColor=E?"#1A6B3C":"var(--gray-200,#ddd)"}),x.querySelectorAll(".mc-pane").forEach(v=>{v.style.display=v.dataset.pane===a.dataset.tab?"block":"none"})})})}const zn=[{value:"normal",label:"Normal",color:"#ccc"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function $t(e,t){var _;const{toast:n}=t,{data:i,error:s}=await k.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_real, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(s){e.innerHTML=`<p style="color:var(--danger)">${s.message}</p>`;return}const l=i||[],y=l.filter(r=>r.status==="active").length,x=l.filter(r=>r.status==="sold").length;e.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px">
      <button id="btn-price-grid" class="btn btn-primary">📊 Grille des prix</button>
      <div style="display:flex;gap:12px">
        <div class="card-panel" style="min-width:120px;text-align:center;padding:12px 20px">
          <div style="font-size:22px;font-weight:700;color:#1A6B3C">${y}</div>
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
            ${l.map(r=>{var f,d,o,h;const m=(f=r.card)==null?void 0:f.player,c=m?`${m.firstname} ${m.surname_real}`:((d=r.card)==null?void 0:d.card_type)||"—",p={active:"#1A6B3C",sold:"#D4A017",cancelled:"#888"};return`<tr>
                <td><b>${c}</b>${m?`<div style="font-size:10px;color:var(--tile-fg-dim)">${m.rarity} · ${m.job}</div>`:""}</td>
                <td style="font-size:12px">${((o=r.seller)==null?void 0:o.pseudo)||"—"}</td>
                <td style="font-size:12px">${((h=r.buyer)==null?void 0:h.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(r.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${p[r.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
                    ${r.status.toUpperCase()}
                  </span>
                </td>
                <td style="font-size:11px;color:var(--tile-fg-dim)">${new Date(r.listed_at).toLocaleDateString("fr")}</td>
                <td>
                  ${r.status==="active"?`<button class="btn btn-danger btn-sm" data-cancel="${r.id}">Annuler</button>`:""}
                </td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,document.querySelectorAll("[data-cancel]").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:m}=await k.from("market_listings").update({status:"cancelled"}).eq("id",r.dataset.cancel);m?n(m.message,"error"):(n("Annonce annulée","success"),$t(e,t))})}),(_=document.getElementById("btn-price-grid"))==null||_.addEventListener("click",()=>Rn(t))}async function Rn(e){await Ie(e)}function jn(){const e=document.getElementById("modal-overlay");if(!e||e._pgBlocker)return;const t=n=>{n.target===n.currentTarget&&n.stopImmediatePropagation()};e.addEventListener("click",t,!0),e._pgBlocker=t}function Ee(){const e=document.getElementById("modal-overlay");e!=null&&e._pgBlocker&&(e.removeEventListener("click",e._pgBlocker,!0),delete e._pgBlocker)}async function Ie(e){var f,d;const{openModal:t,closeModal:n,toast:i}=e,{data:s,error:l}=await k.from("sell_price_configs").select("*").order("rarity").order("note_min");if(l){i(l.message,"error");return}const y=o=>zn.map(h=>`<option value="${h.value}" ${h.value===o?"selected":""}>${h.label}</option>`).join(""),x=o=>`
    <tr data-row="${o.id}">
      <td style="padding:4px 8px">
        <select data-field="rarity" data-id="${o.id}" style="width:100%;padding:6px;font-size:13px">${y(o.rarity)}</select>
      </td>
      <td style="padding:4px 8px">
        <input data-field="note_min" data-id="${o.id}" type="number" min="0" max="999" value="${o.note_min}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="note_max" data-id="${o.id}" type="number" min="0" max="999" value="${o.note_max}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="price_min" data-id="${o.id}" type="number" min="0" value="${o.price_min}" style="width:100%;padding:6px;text-align:right;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="price_max" data-id="${o.id}" type="number" min="0" value="${o.price_max}" style="width:100%;padding:6px;text-align:right;font-size:13px">
      </td>
      <td style="text-align:center;padding:4px 8px">
        <button class="btn btn-danger btn-sm" data-del-row="${o.id}">🗑️</button>
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
          ${(s||[]).map(x).join("")||'<tr><td colspan="6" style="text-align:center;color:#aaa;padding:20px">Aucune règle définie.</td></tr>'}
        </tbody>
      </table>
    </div>
  `;t("📊 Grille des prix — vente marché",_,`
    <button id="pg-add-row" class="btn btn-primary">+ Ajouter une ligne</button>
    <button id="pg-close" class="btn btn-ghost">Fermer</button>
  `),jn(),(f=document.getElementById("pg-close"))==null||f.addEventListener("click",()=>{Ee(),n()});function m(o){const h=o.dataset.id,u=o.dataset.field,w=u==="rarity"?o.value:Number(o.value)||0;return c(h,{[u]:w},o)}async function c(o,h,u){const w=document.querySelector(`tr[data-row="${o}"]`),L=g=>w.querySelector(`[data-field="${g}"]`),a="note_min"in h?h.note_min:Number(L("note_min").value),v="note_max"in h?h.note_max:Number(L("note_max").value),E="price_min"in h?h.price_min:Number(L("price_min").value),b="price_max"in h?h.price_max:Number(L("price_max").value);if(a>v){i("Note min doit être ≤ note max","error");return}if(E>b){i("Prix min doit être ≤ prix max","error");return}const{error:$}=await k.from("sell_price_configs").update(h).eq("id",o);if($){i($.message,"error");return}u&&(u.style.transition="background .3s",u.style.background="#e8f8ee",setTimeout(()=>{u.style.background=""},500))}function p(){document.querySelectorAll("#pg-tbody [data-field]").forEach(o=>{o.addEventListener("change",()=>m(o))})}p(),document.querySelectorAll("[data-del-row]").forEach(o=>{o.addEventListener("click",async()=>{confirm("Supprimer cette ligne ?")&&(await k.from("sell_price_configs").delete().eq("id",o.dataset.delRow),i("Ligne supprimée","success"),Ee(),Ie(e))})}),(d=document.getElementById("pg-add-row"))==null||d.addEventListener("click",async()=>{var L;const o={rarity:"normal",note_min:0,note_max:20,price_min:2500,price_max:15e3},{data:h,error:u}=await k.from("sell_price_configs").insert(o).select().single();if(u){i(u.message,"error");return}const w=document.getElementById("pg-tbody");w.querySelector("td[colspan]")&&(w.innerHTML=""),w.insertAdjacentHTML("beforeend",x(h)),p(),(L=document.querySelector(`[data-del-row="${h.id}"]`))==null||L.addEventListener("click",async function(){confirm("Supprimer cette ligne ?")&&(await k.from("sell_price_configs").delete().eq("id",h.id),i("Ligne supprimée","success"),Ee(),Ie(e))}),i("Ligne ajoutée — modifie les valeurs directement","success")})}async function Dn(e,{toast:t}){e.innerHTML=`
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
  `,document.getElementById("export-clubs-template").addEventListener("click",()=>{ce("clubs_template.csv",`real_name,encoded_name,country_code,logo_url
Paris Saint-Germain,PARIS FC,FR,
Real Madrid,MADRID FC,ES,
`)}),document.getElementById("export-players-template").addEventListener("click",()=>{ce("players_template.csv",`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
Kylian,Mbappe,,FR,PARIS FC,ATT,,0,0,2,9,legende,,,blanc,noir,court,50000
Achraf,Hakimi,,MA,PARIS FC,DEF,MIL,0,7,5,3,pepite,5,9,metisse,noir,court,20000
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:n,error:i}=await k.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun club à exporter","info");return}let s=`real_name,encoded_name,country_code,logo_url
`;n.forEach(l=>{s+=[l.real_name,l.encoded_name,l.country_code,l.logo_url||""].map(Ve).join(",")+`
`}),ce("clubs_export.csv",s),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:i}=await k.from("players").select("firstname,surname_real,surname_real,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_real");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let s=`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(l=>{var y;s+=[l.firstname,l.surname_real,l.surname_real,l.country_code,((y=l.clubs)==null?void 0:y.encoded_name)||"",l.job,l.job2||"",l.note_g,l.note_d,l.note_m,l.note_a,l.rarity,l.note_min??"",l.note_max??"",l.skin,l.hair,l.hair_length,l.sell_price].map(Ve).join(",")+`
`}),ce("players_export.csv",s),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const s=document.getElementById("clubs-import-result");s.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const l=await i.text(),y=Je(l);if(y.length===0){s.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let x=0,_=0;const r=[];for(const m of y){if(!m.real_name||!m.encoded_name||!m.country_code){_++,r.push(`Ligne ignorée (champs manquants): ${m.real_name||"?"}`);continue}const c={real_name:m.real_name,encoded_name:m.encoded_name.toUpperCase(),country_code:m.country_code.toUpperCase().slice(0,2),logo_url:m.logo_url||null},{error:p}=await k.from("clubs").upsert(c,{onConflict:"encoded_name"});p?(_++,r.push(`${m.encoded_name}: ${p.message}`)):x++}s.innerHTML=`<div style="color:var(--green)">✅ ${x} clubs importés</div>
        ${_>0?`<div style="color:#c0392b">❌ ${_} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${r.slice(0,10).join("<br>")}</div>`:""}`,t(`${x} clubs importés`,"success")}catch(l){s.innerHTML=`<span style="color:#c0392b">Erreur : ${l.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const s=document.getElementById("players-import-result");s.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const l=await i.text(),y=Je(l);if(y.length===0){s.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:x}=await k.from("clubs").select("id,encoded_name"),_={};(x||[]).forEach(u=>{_[u.encoded_name.toUpperCase()]=u.id});let r=0,m=0;const c=[],p=["GK","DEF","MIL","ATT"],f=["normal","pepite","papyte","legende"],d=["blanc","metisse","typ","noir"],o=["blond","marron","noir","chauve"],h=["rase","court","milong","long"];for(const u of y){if(!u.firstname||!u.surname_real||!u.country_code||!u.job){m++,c.push(`Ligne ignorée (champs requis manquants): ${u.firstname||"?"}`);continue}if(!p.includes(u.job)){m++,c.push(`${u.firstname}: job invalide "${u.job}"`);continue}const w=u.club_encoded_name&&_[u.club_encoded_name.toUpperCase()]||null,L={firstname:u.firstname,surname_real:u.surname_real,surname_real:u.surname_real||Jt(u.surname_real),country_code:u.country_code.toUpperCase().slice(0,2),club_id:w,job:u.job,job2:p.includes(u.job2)?u.job2:null,note_g:parseInt(u.note_g)||0,note_d:parseInt(u.note_d)||0,note_m:parseInt(u.note_m)||0,note_a:parseInt(u.note_a)||0,rarity:f.includes(u.rarity)?u.rarity:"normal",note_min:u.note_min!==""&&u.note_min!=null?parseInt(u.note_min):null,note_max:u.note_max!==""&&u.note_max!=null?parseInt(u.note_max):null,skin:d.includes(u.skin)?u.skin:"blanc",hair:o.includes(u.hair)?u.hair:"noir",hair_length:h.includes(u.hair_length)?u.hair_length:"court",sell_price:parseInt(u.sell_price)||0},{error:a}=await k.from("players").insert(L);a?(m++,c.push(`${u.firstname} ${u.surname_real}: ${a.message}`)):r++}s.innerHTML=`<div style="color:var(--green)">✅ ${r} joueurs importés</div>
        ${m>0?`<div style="color:#c0392b">❌ ${m} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${c.slice(0,10).join("<br>")}</div>`:""}`,t(`${r} joueurs importés`,"success")}catch(l){s.innerHTML=`<span style="color:#c0392b">Erreur : ${l.message}</span>`}n.target.value=""})}function Ve(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function ce(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(n),s=document.createElement("a");s.href=i,s.download=e,s.click(),URL.revokeObjectURL(i)}function Je(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(y=>y.trim());if(t.length<2)return[];const n=t[0],i=n.split(";").length>n.split(",").length?";":",",s=Ye(n,i).map(y=>y.trim().replace(/^\uFEFF/,"").toLowerCase()),l=[];for(let y=1;y<t.length;y++){if(!t[y].trim())continue;const x=Ye(t[y],i),_={};s.forEach((r,m)=>{_[r]=(x[m]||"").trim()}),!Object.values(_).every(r=>!r)&&l.push(_)}return l}function Ye(e,t=","){const n=[];let i="",s=!1;for(let l=0;l<e.length;l++){const y=e[l];s?y==='"'?e[l+1]==='"'?(i+='"',l++):s=!1:i+=y:y==='"'?s=!0:y===t?(n.push(i),i=""):i+=y}return n.push(i),n}const Nn={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Pn(e,{toast:t}){const n=Object.keys(he);let i=n[0];const{data:s}=await k.from("formation_links_overrides").select("formation, links"),l={};(s||[]).forEach(m=>{l[m.formation]=m.links});let y=new Set;function x(m,c){return[m,c].sort().join("-")}function _(m){const c=l[m]||he[m]||[];y=new Set(c.map(([p,f])=>x(p,f)))}_(i),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${n.map(m=>`<option value="${m}" ${m===i?"selected":""}>${m}</option>`).join("")}
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
        <div style="font-weight:700;font-size:13px;margin-bottom:8px">Liens (${y.size}/? actifs)</div>
        <div id="links-list" style="display:flex;flex-direction:column;gap:4px;max-height:520px;overflow-y:auto"></div>
      </div>
    </div>
  `;function r(){const m=pe[i]||{},c=Fe(i),p=320,f=400,d=22;function o(a){const v=m[a];return v?{x:v.x*p,y:v.y*f}:null}let h=`<svg width="${p}" height="${f}" viewBox="0 0 ${p} ${f}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;c.forEach(([a,v],E)=>{const b=o(a),$=o(v);if(!b||!$)return;const g=x(a,v),I=y.has(g),A=I?"#3b82f6":"#999",B=I?.95:.35,C=I?4:3;h+=`<line x1="${b.x}" y1="${b.y}" x2="${$.x}" y2="${$.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${g}" style="cursor:pointer"/>`,h+=`<line x1="${b.x}" y1="${b.y}" x2="${$.x}" y2="${$.y}"
        stroke="${A}" stroke-width="${C}" stroke-dasharray="${I?"none":"4,3"}"
        opacity="${B}" pointer-events="none" data-line-key="${g}"/>`});for(const a of Object.keys(m)){const v=o(a);if(!v)continue;const E=a.replace(/\d+/,""),b=Nn[E]||"#555";h+=`<circle cx="${v.x}" cy="${v.y}" r="${d}" fill="${b}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,h+=`<text x="${v.x}" y="${v.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${a}</text>`}h+="</svg>",document.getElementById("field-wrap").innerHTML=h;const u=document.getElementById("links-list");u.innerHTML=c.map(([a,v])=>{const E=x(a,v),b=y.has(E);return`
        <button class="link-toggle" data-key="${E}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${b?"#3b82f6":"#ddd"};
          background:${b?"#eaf2ff":"#fafafa"};
          color:${b?"#1d4ed8":"#888"}">
          <span>${a} ↔ ${v}</span>
          <span>${b?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const w=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');w&&(w.textContent=`Liens (${y.size}/${c.length} actifs)`);function L(a){y.has(a)?y.delete(a):y.add(a),r()}e.querySelectorAll(".link-hit").forEach(a=>{a.addEventListener("click",()=>L(a.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(a=>{a.addEventListener("click",()=>L(a.dataset.key))})}r(),document.getElementById("formation-select").addEventListener("change",m=>{i=m.target.value,_(i),r()}),document.getElementById("reset-btn").addEventListener("click",()=>{const m=he[i]||[];y=new Set(m.map(([c,p])=>x(c,p))),r(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const c=Fe(i).filter(([f,d])=>y.has(x(f,d))),{error:p}=await k.from("formation_links_overrides").upsert({formation:i,links:c,updated_at:new Date().toISOString()});if(p){t(p.message,"error");return}l[i]=c,t(`Liens enregistrés pour ${i} (${c.length} actifs)`,"success")})}const Fn=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],On=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],qn=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function Un(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await k.from("booster_configs").select("*").order("sort_order");let n=null,i=[],s=null;const l=()=>window.innerWidth<700;async function y(){if(!n){i=[];return}if(n!==s){const{data:c}=await k.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");i=c||[],s=n}}function x(){return`
    <div id="booster-list" style="background:#fff;${l()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(t||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(c=>`
      <div class="booster-row" data-id="${c.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${c.id===n?"#f0f7f0":"#fff"}">
        ${c.image_url?`<img src="/icons/${c.image_url}" style="width:36px;height:36px;object-fit:contain;border-radius:6px;background:#f5f5f5;padding:2px">`:'<div style="width:36px;height:36px;background:#eee;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:20px">📦</div>'}
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.name}</div>
          <div style="font-size:11px;color:#888">
            ${c.price_type==="credits"?(c.price_credits||0)+" cr.":c.price_type==="pub"?"Pub":"Gratuit"}
            · ${c.card_count||5} cartes · ${c.is_active?"✅":"⛔"}
          </div>
        </div>
        <button class="btn-delete" data-id="${c.id}" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:18px;padding:4px;flex-shrink:0">🗑️</button>
      </div>`).join("")}
      ${(t||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>'}
    </div>`}function _(){const c=n?(t||[]).find(d=>d.id===n):null;if(!c)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const p=i.reduce((d,o)=>d+Number(o.percentage||0),0),f=Math.abs(p-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${l()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

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
          ${c.image_url?`<img src="/icons/${c.image_url}" style="height:44px;margin-top:8px;border-radius:6px;object-fit:contain;background:#f0f0f0;padding:4px">`:""}
          <div id="icon-picker-grid" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE DE PRIX</label>
            <select id="f-price-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${qn.map(d=>`<option value="${d.value}" ${c.price_type===d.value?"selected":""}>${d.label}</option>`).join("")}
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
        <div style="display:flex;align-items:center;gap:10px;margin-top:10px">
          <input type="checkbox" id="f-allow-dup" ${c.allow_duplicates!==!1?"checked":""} style="width:18px;height:18px;cursor:pointer">
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
              <input id="f-max-per-user" type="number" min="1" value="${c.max_per_user||""}" placeholder="ex: 1"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible à partir du</label>
              <input id="f-available-from" type="date" value="${c.available_from||""}"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible jusqu'au</label>
              <input id="f-available-until" type="date" value="${c.available_until||""}"
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
              Total : ${p.toFixed(1)}% ${f?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((d,o)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${o}">
            <select class="rate-type" data-idx="${o}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Fn.map(h=>`<option value="${h.value}" ${d.card_type===h.value?"selected":""}>${h.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${o}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${On.map(h=>`<option value="${h.value}" ${(d.rarity||"")===h.value?"selected":""}>${h.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${o}" type="number" min="0" max="100" value="${d.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${o}" type="number" min="0" max="100" value="${d.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${o}" type="number" min="0.1" max="100" step="0.1" value="${d.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${o}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function r(c=!1){c||await y();const p=!n&&l(),f=n&&l();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!l()||p||!n?x():""}
      ${!l()||f?_():""}
    </div>`,m()}function m(){var f,d,o,h,u,w,L;const c=a=>e.querySelector(a);e.querySelectorAll(".booster-row").forEach(a=>{a.addEventListener("click",v=>{v.target.closest(".btn-delete")||(n=a.dataset.id,s=null,r())})}),(f=c("#btn-back"))==null||f.addEventListener("click",()=>{n=null,r()}),(d=c("#btn-new"))==null||d.addEventListener("click",async()=>{const a=prompt("Nom du nouveau booster :");if(!(a!=null&&a.trim()))return;const{data:v,error:E}=await k.from("booster_configs").insert({name:a.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(E){alert(E.message);return}t.push(v),n=v.id,s=null,r()}),e.querySelectorAll(".btn-delete").forEach(a=>{a.addEventListener("click",async v=>{if(v.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await k.from("booster_configs").delete().eq("id",a.dataset.id);const E=t.findIndex(b=>b.id===a.dataset.id);E>-1&&t.splice(E,1),n===a.dataset.id&&(n=null,s=null),r()})}),(o=c("#btn-cancel"))==null||o.addEventListener("click",()=>{n=null,r()}),(h=c("#f-price-type"))==null||h.addEventListener("change",a=>{const v=c("#credits-field");v&&(v.style.opacity=a.target.value!=="credits"?"0.4":"1")}),(u=c("#btn-pick-icon"))==null||u.addEventListener("click",async()=>{var v;const a=c("#icon-picker-grid");if(a){if(a.style.display!=="none"){a.style.display="none";return}a.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',a.style.display="block";try{const b=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),$=Array.isArray(b)?b.filter(I=>I.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(I.name)):[];if(!$.length){a.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const g=((v=c("#f-image-url"))==null?void 0:v.value)||"";a.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${$.map(I=>`
          <div class="icon-pick-item" data-name="${I.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${I.name===g?"#1A6B3C":"#ddd"};background:${I.name===g?"#f0f7f0":"#fff"}">
            <img src="/icons/${I.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,a.querySelectorAll(".icon-pick-item").forEach(I=>{I.addEventListener("click",()=>{const A=c("#f-image-url");A&&(A.value=I.dataset.name),a.style.display="none"})})}catch(E){a.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${E.message}</div>`}}});function p(){e.querySelectorAll("[data-rate-idx]").forEach(a=>{var E,b,$,g,I;const v=Number(a.dataset.rateIdx);v>=0&&v<i.length&&(i[v].card_type=((E=a.querySelector(".rate-type"))==null?void 0:E.value)||"player",i[v].rarity=((b=a.querySelector(".rate-rarity"))==null?void 0:b.value)||null,i[v].note_min=Number(($=a.querySelector(".rate-note-min"))==null?void 0:$.value)||null,i[v].note_max=Number((g=a.querySelector(".rate-note-max"))==null?void 0:g.value)||null,i[v].percentage=Number((I=a.querySelector(".rate-pct"))==null?void 0:I.value)||0)})}(w=c("#btn-add-rate"))==null||w.addEventListener("click",()=>{p(),i.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),r(!0)}),e.querySelectorAll(".btn-del-rate").forEach(a=>{a.addEventListener("click",()=>{p(),i.splice(Number(a.dataset.idx),1),r(!0)})}),(L=c("#btn-save"))==null||L.addEventListener("click",async()=>{var g,I,A,B,C,D,j,O,U,H,S,z,T;const a=(t||[]).find(M=>M.id===n);if(!a)return;const v=[];e.querySelectorAll("[data-rate-idx]").forEach(M=>{var G,V,J,Y,W;const R=Number(M.dataset.rateIdx);v.push({booster_id:n,card_type:((G=M.querySelector(".rate-type"))==null?void 0:G.value)||"player",rarity:((V=M.querySelector(".rate-rarity"))==null?void 0:V.value)||null,note_min:Number((J=M.querySelector(".rate-note-min"))==null?void 0:J.value)||null,note_max:Number((Y=M.querySelector(".rate-note-max"))==null?void 0:Y.value)||null,percentage:Number((W=M.querySelector(".rate-pct"))==null?void 0:W.value)||0,sort_order:R});const N=v[v.length-1];N.rarity||(N.rarity=null),N.note_min||(N.note_min=null),N.note_max||(N.note_max=null)});const E=v.reduce((M,R)=>M+R.percentage,0);if(v.length&&Math.abs(E-100)>.5){alert(`La somme doit faire 100% (actuellement ${E.toFixed(1)}%)`);return}const b={name:((I=(g=c("#f-name"))==null?void 0:g.value)==null?void 0:I.trim())||a.name,image_url:((B=(A=c("#f-image-url"))==null?void 0:A.value)==null?void 0:B.trim())||null,price_type:(C=c("#f-price-type"))==null?void 0:C.value,price_credits:Number((D=c("#f-price-credits"))==null?void 0:D.value)||0,card_count:Number((j=c("#f-card-count"))==null?void 0:j.value)||5,is_active:((O=c("#f-active"))==null?void 0:O.checked)??a.is_active,allow_duplicates:((U=c("#f-allow-dup"))==null?void 0:U.checked)??!0,sort_order:Number((H=c("#f-sort"))==null?void 0:H.value)||0,max_per_user:(S=c("#f-max-per-user"))!=null&&S.value?Number(c("#f-max-per-user").value):null,available_from:((z=c("#f-available-from"))==null?void 0:z.value)||null,available_until:((T=c("#f-available-until"))==null?void 0:T.value)||null},{error:$}=await k.from("booster_configs").update(b).eq("id",n);if($){alert($.message);return}if(Object.assign(a,b),await k.from("booster_drop_rates").delete().eq("booster_id",n),v.length){const{error:M}=await k.from("booster_drop_rates").insert(v);if(M){alert(M.message);return}}i=v,s=n,alert("✅ Booster enregistré !"),r(!0)})}r()}const It=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function Hn(e){await Te(e)}async function Te(e){const{data:t,error:n}=await k.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
          ${(t||[]).map(i=>Gn(i)).join("")}
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
              ${It.map(i=>`<option value="${i.value}">${i.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>We(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Kn(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const s=(t||[]).find(l=>l.id===i.dataset.edit);s&&i.addEventListener("click",()=>We(s))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await k.from("sell_price_configs").delete().eq("id",i.dataset.delete),await Te(e))})})}function Gn(e){const t=It.find(n=>n.value===e.rarity);return`
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
    </tr>`}function We(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function Kn(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,s=parseInt(document.getElementById("form-note-min").value)||1,l=parseInt(document.getElementById("form-note-max").value)||10;if(s>l){alert("Note min doit être ≤ note max");return}const y={rarity:n,price:i,note_min:s,note_max:l,updated_at:new Date().toISOString()};let x;if(t?{error:x}=await k.from("sell_price_configs").update(y).eq("id",t):{error:x}=await k.from("sell_price_configs").insert(y),x){alert("Erreur : "+x.message);return}document.getElementById("config-form").style.display="none",await Te(e)}async function Vn(e){await Me(e)}async function Me(e){const{data:t}=await k.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Actualités</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(t||[]).map(n=>Jn(n)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>Ze(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Wn(e)),e.querySelectorAll("[data-edit-row]").forEach(n=>{const i=(t||[]).find(s=>s.id===n.dataset.editRow);i&&n.addEventListener("click",()=>Ze(i))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await k.from("patch_notes").delete().eq("id",n.dataset.delete),await Me(e))})})}function Jn(e){const t=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function Ze(e){const t=document.getElementById("article-form");t.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img-current").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-img-file").value="";const n=document.getElementById("form-art-img-preview");n.innerHTML=e!=null&&e.image_url?`<img src="${e.image_url}" style="width:100%;height:100%;object-fit:cover">`:'<span style="font-size:20px;opacity:.4">📰</span>',document.getElementById("form-art-img-file").onchange=l=>{var _;const y=(_=l.target.files)==null?void 0:_[0];if(!y)return;const x=new FileReader;x.onload=()=>{n.innerHTML=`<img src="${x.result}" style="width:100%;height:100%;object-fit:cover">`},x.readAsDataURL(y)},document.getElementById("form-art-pub").checked=e?e.is_published:!0;const i=new Date((e==null?void 0:e.published_at)||Date.now()),s=new Date(i.getTime()-i.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=s,t.scrollIntoView({behavior:"smooth"})}async function Yn(e){const t=(e.name.split(".").pop()||"png").toLowerCase(),n=`journal/${Date.now()}.${t}`,{error:i}=await k.storage.from("assets").upload(n,e,{upsert:!0,cacheControl:"3600"});if(i)throw i;const{data:s}=k.storage.from("assets").getPublicUrl(n);return s.publicUrl}async function Wn(e){var f;const t=document.getElementById("form-id").value,n=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),s=((f=document.getElementById("form-art-img-file").files)==null?void 0:f[0])||null,l=document.getElementById("form-art-img-current").value||null,y=document.getElementById("form-art-pub").checked,x=document.getElementById("form-art-date").value,_=document.getElementById("form-save");if(!n){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}let r=l;if(s)try{_&&(_.textContent="📤 Envoi de l'image…"),r=await Yn(s)}catch(d){alert("Erreur upload image : "+d.message),_&&(_.textContent="💾 Enregistrer");return}const m=x?new Date(x).toISOString():new Date().toISOString(),c={title:n,description:i,image_url:r,is_published:y,published_at:m};let p;if(t?{error:p}=await k.from("patch_notes").update(c).eq("id",t):{error:p}=await k.from("patch_notes").insert(c),p){alert("Erreur : "+p.message);return}document.getElementById("article-form").style.display="none",await Me(e)}async function Zn(e){await ie(e)}async function ie(e){var m,c,p,f,d,o,h,u,w,L,a,v;const{data:t}=await k.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
            </div>`:(t||[]).map(E=>Xn(E)).join("")}
        </div>
      </div><!-- /colonne droite -->
    </div>`,(m=document.getElementById("ts-add"))==null||m.addEventListener("click",()=>Xe(null,(t==null?void 0:t.length)||0)),(c=document.getElementById("ts-reset"))==null||c.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:E}=await k.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(E?"Erreur : "+E.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(p=document.getElementById("ts-cancel"))==null||p.addEventListener("click",kt),(f=document.getElementById("ts-save"))==null||f.addEventListener("click",()=>ei(e)),(d=document.getElementById("ts-preview-btn"))==null||d.addEventListener("click",Qn);const n=document.getElementById("ts-editor"),i=()=>{const E=document.getElementById("ts-content");E&&n&&(E.value=n.innerHTML)};n==null||n.addEventListener("input",i),n==null||n.addEventListener("blur",i);const s=()=>{document.activeElement!==n&&(n==null||n.focus())};(o=document.getElementById("ts-toolbar"))==null||o.querySelectorAll("[data-cmd]").forEach(E=>{E.addEventListener("mousedown",b=>{b.preventDefault(),s();const $=E.dataset.cmd;$.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,$.split(":")[1]):document.execCommand($,!1,null),i()})}),(h=document.getElementById("ts-insert-color"))==null||h.addEventListener("mousedown",E=>{E.preventDefault(),s();const b=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");b&&(document.execCommand("foreColor",!1,b),i())}),(u=document.getElementById("ts-clear-format"))==null||u.addEventListener("mousedown",E=>{E.preventDefault(),s(),document.execCommand("removeFormat",!1,null),i()}),n==null||n.addEventListener("focus",()=>{n&&(n.style.borderColor="#1A6B3C")}),n==null||n.addEventListener("blur",()=>{n&&(n.style.borderColor="#ddd")});const l=document.getElementById("ts-image"),y=document.getElementById("ts-img-preview"),x=document.getElementById("ts-img-preview-el"),_=document.getElementById("ts-img-picker-grid"),r=()=>{var b;const E=(b=l==null?void 0:l.value)==null?void 0:b.trim();if(E){const $="/";x.src=`${$}icons/${E}`,y.style.display="block"}else y.style.display="none"};l==null||l.addEventListener("input",r),(w=document.getElementById("ts-img-clear"))==null||w.addEventListener("click",()=>{l&&(l.value=""),y.style.display="none",_.style.display="none"}),(L=document.getElementById("ts-img-pick"))==null||L.addEventListener("click",async()=>{if(_.style.display!=="none"){_.style.display="none";return}_.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',_.style.display="block";try{const b=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),$=Array.isArray(b)?b.filter(I=>I.name.startsWith("tuto_")):[];if(!$.length){_.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const g="/";_.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+$.map(I=>`
          <div data-pick="${I.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${g}icons/${I.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",_.querySelectorAll("[data-pick]").forEach(I=>{I.addEventListener("click",()=>{l&&(l.value=I.dataset.pick),r(),_.style.display="none"})})}catch(E){_.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+E.message+"</div>"}}),(a=document.getElementById("ts-color"))==null||a.addEventListener("input",E=>{const b=document.getElementById("ts-color-hex");b&&(b.value=E.target.value)}),(v=document.getElementById("ts-color-hex"))==null||v.addEventListener("input",E=>{const b=E.target.value;if(/^#[0-9a-fA-F]{6}$/.test(b)){const $=document.getElementById("ts-color");$&&($.value=b)}}),e.querySelectorAll("[data-edit-row]").forEach(E=>{const b=(t||[]).find($=>$.id===E.dataset.editRow);b&&E.addEventListener("click",()=>Xe(b))}),e.querySelectorAll("[data-delete]").forEach(E=>{E.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await k.from("tutorial_steps").delete().eq("id",E.dataset.delete),ie(e))})}),e.querySelectorAll("[data-toggle]").forEach(E=>{E.addEventListener("click",async()=>{const b=(t||[]).find($=>$.id===E.dataset.toggle);b&&(await k.from("tutorial_steps").update({is_active:!b.is_active}).eq("id",b.id),ie(e))})}),e.querySelectorAll("[data-up]").forEach(E=>{E.addEventListener("click",async()=>{const b=t||[],$=b.findIndex(g=>g.id===E.dataset.up);$<=0||(await Promise.all([k.from("tutorial_steps").update({step_order:b[$-1].step_order}).eq("id",b[$].id),k.from("tutorial_steps").update({step_order:b[$].step_order}).eq("id",b[$-1].id)]),ie(e))})}),e.querySelectorAll("[data-down]").forEach(E=>{E.addEventListener("click",async()=>{const b=t||[],$=b.findIndex(g=>g.id===E.dataset.down);$<0||$>=b.length-1||(await Promise.all([k.from("tutorial_steps").update({step_order:b[$+1].step_order}).eq("id",b[$].id),k.from("tutorial_steps").update({step_order:b[$].step_order}).eq("id",b[$+1].id)]),ie(e))})})}function Xn(e){return`
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
  </div>`}function Xe(e,t=0){document.getElementById("ts-form-empty").style.display="none",document.getElementById("ts-form-content").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const n=document.getElementById("ts-editor");n&&(n.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??t,document.getElementById("ts-active").checked=e?e.is_active:!0;const i=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=i,document.getElementById("ts-color-hex").value=i;const s=(e==null?void 0:e.image_url)||"",l=document.getElementById("ts-image");l&&(l.value=s);const y=document.getElementById("ts-img-preview"),x=document.getElementById("ts-img-preview-el");if(s&&y&&x){const _="/";x.src=`${_}icons/${s}`,y.style.display="block"}else y&&(y.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function kt(){document.getElementById("ts-form-content").style.display="none",document.getElementById("ts-form-empty").style.display="block",document.getElementById("ts-preview-area").innerHTML=""}function Qn(){var r,m;const e=document.getElementById("ts-emoji").value||"⚽",t=document.getElementById("ts-title").value||"Titre",n=document.getElementById("ts-editor"),i=n?n.innerHTML:document.getElementById("ts-content").value||"",s=document.getElementById("ts-color-hex").value||"#1A6B3C",l=(m=(r=document.getElementById("ts-image"))==null?void 0:r.value)==null?void 0:m.trim(),x=l?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${l}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",_=document.getElementById("ts-preview-area");_.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${s}"></div></div>
        <div style="padding:20px 20px 0;text-align:center">
          <div style="font-size:48px;margin-bottom:8px;line-height:1">${e}</div>
          <div style="font-size:17px;font-weight:900;color:#111;margin-bottom:4px">${t}</div>
          <div style="font-size:11px;color:#aaa">6 / 10</div>
        </div>
        ${x}
        <div style="padding:${l?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${i}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${s};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,_.querySelectorAll("ul,ol").forEach(c=>{c.style.paddingLeft="20px",c.style.margin="6px 0"}),_.querySelectorAll("li").forEach(c=>{c.style.marginBottom="4px"}),_.querySelectorAll("p").forEach(c=>{c.style.marginBottom="8px"})}async function ei(e){var c,p;const t=document.getElementById("ts-id").value,n=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),s=document.getElementById("ts-editor"),l=(s?s.innerHTML:document.getElementById("ts-content").value).trim(),y=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",x=parseInt(document.getElementById("ts-order").value)||0,_=document.getElementById("ts-active").checked;if(!i||!l){alert("Titre et contenu sont obligatoires.");return}const r={emoji:n,title:i,content:l,color:y,step_order:x,is_active:_,image_url:((p=(c=document.getElementById("ts-image"))==null?void 0:c.value)==null?void 0:p.trim())||null};let m;if(t?{error:m}=await k.from("tutorial_steps").update(r).eq("id",t):{error:m}=await k.from("tutorial_steps").insert(r),m){alert("Erreur : "+m.message);return}kt(),ie(e)}const Lt="/",At=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function ti(e,t){await be(e,t)}async function be(e,t){var s,l;const[{data:n},{data:i}]=await Promise.all([k.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),k.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;gap:10px;flex-wrap:wrap">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">🏟️ Stades</h2>
        <div style="display:flex;gap:8px">
          <button id="st-gen-countries-btn" class="btn btn-ghost">🌍 Créer les stades Pays manquants</button>
          <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
        </div>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="st-list">
        ${(n||[]).length?(n||[]).map(y=>ni(y)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucun stade créé.</div>'}
      </div>
    </div>`,(s=document.getElementById("st-add-btn"))==null||s.addEventListener("click",()=>Qe(null,i,e,t)),(l=document.getElementById("st-gen-countries-btn"))==null||l.addEventListener("click",async()=>{const{toast:y}=t,x=new Set((n||[]).filter(p=>!p.club_id&&p.country_code).map(p=>p.country_code)),_=At.filter(([p])=>!x.has(p));if(!_.length){y("Tous les pays ont déjà un stade.","info");return}if(!confirm(`Créer ${_.length} stade(s) "Pays" manquant(s) ?`))return;const r=_.map(([p,f])=>({name:`Stade ${f}`,club_id:null,country_code:p})),{data:m,error:c}=await k.from("stadium_definitions").insert(r).select();if(c){y("Erreur : "+c.message,"error");return}m!=null&&m.length&&await k.from("cards").insert(m.map(p=>({card_type:"stadium",stadium_id:p.id}))),y(`${(m==null?void 0:m.length)||0} stade(s) Pays créé(s) ✅`,"success"),be(e,t)}),e.querySelectorAll("[data-edit-stadium]").forEach(y=>{y.addEventListener("click",()=>{const x=(n||[]).find(_=>_.id===y.dataset.editStadium);x&&Qe(x,i,e,t)})})}function ni(e){var s,l;let t=null;e.image_url?t=e.image_url.startsWith("http")?e.image_url:`${Lt}icons/${e.image_url}`:(s=e.club)!=null&&s.logo_url?t=e.club.logo_url:e.country_code&&(t=`https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/64.png`);const n=((l=e.club)==null?void 0:l.encoded_name)||e.country_code||"—",i=Ae(e.name,t,`${n}<br>+10 ⭐`,{width:140});return`<div data-edit-stadium="${e.id}" style="cursor:pointer;transition:transform .15s" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
    ${i}
  </div>`}function Qe(e,t,n,i){var m,c,p;const{openModal:s,closeModal:l,toast:y}=i,x=`
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
            ${At.map(([f,d])=>`<option value="${f}" ${(e==null?void 0:e.country_code)===f?"selected":""}>${d} (${f})</option>`).join("")}
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
  `;s(e?`Modifier : ${e.name}`:"Nouveau stade",x,`
    <button id="st-cancel" class="btn btn-ghost">Annuler</button>
    <button id="st-save" class="btn btn-primary">Enregistrer</button>
  `);const r=()=>{var b,$,g,I,A,B,C;const f=((b=document.getElementById("st-name"))==null?void 0:b.value)||"NOM DU STADE",d=(g=($=document.getElementById("st-image"))==null?void 0:$.value)==null?void 0:g.trim(),o=(A=(I=document.getElementById("st-country"))==null?void 0:I.value)==null?void 0:A.trim(),h=document.getElementById("st-club"),u=(h==null?void 0:h.selectedIndex)||0,w=h&&u>0?h.options[u].text:"",L=((C=(B=h==null?void 0:h.options[u])==null?void 0:B.getAttribute)==null?void 0:C.call(B,"data-logo"))||"";let a=null;d?a=d.startsWith("http")?d:`${Lt}icons/${d}`:L?a=L:o&&(a=`https://flagsapi.com/${o.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`);const v=w||o||"—",E=document.getElementById("st-preview-card");E&&(E.innerHTML=Ae(f,a,`${v}<br>+10 ⭐`,{width:140}))};r(),["st-name","st-club","st-country","st-image"].forEach(f=>{var d,o;(d=document.getElementById(f))==null||d.addEventListener("input",r),(o=document.getElementById(f))==null||o.addEventListener("change",r)}),(m=document.getElementById("st-cancel"))==null||m.addEventListener("click",()=>l()),(c=document.getElementById("st-save"))==null||c.addEventListener("click",async()=>{const f=document.getElementById("st-name").value.trim(),d=document.getElementById("st-club").value||null,o=document.getElementById("st-country").value.trim().toUpperCase()||null,h=document.getElementById("st-image").value.trim()||null;if(!f){y("Le nom est obligatoire","error");return}const u={name:f,club_id:d,country_code:o,image_url:h},{error:w}=e?await k.from("stadium_definitions").update(u).eq("id",e.id):await k.from("stadium_definitions").insert(u);if(w){y("Erreur : "+w.message,"error");return}y(e?"Stade modifié ✅":"Stade créé ✅","success"),l(),be(n,i)}),(p=document.getElementById("st-delete"))==null||p.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await k.from("stadium_definitions").delete().eq("id",e.id),y("Stade supprimé","success"),l(),be(n,i))})}const X=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],ii=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}],Z=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],et=["GK","DEF","MIL","ATT"];async function ai(e,t){await ze(e,t)}async function ze(e,t){var i;const{data:n}=await k.from("gc_definitions").select("*").order("sort_order").order("created_at");e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">⚡ Game Changers</h2>
        <button id="gc-add-btn" class="btn btn-primary">+ Nouvelle carte</button>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="gc-list">
        ${(n||[]).length?(n||[]).map(s=>oi(s)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucune carte Game Changer.</div>'}
      </div>
    </div>`,(i=document.getElementById("gc-add-btn"))==null||i.addEventListener("click",()=>tt(null,e,t)),e.querySelectorAll("[data-edit-gc]").forEach(s=>{s.addEventListener("click",()=>{const l=(n||[]).find(y=>y.id===s.dataset.editGc);l&&tt(l,e,t)})}),e.querySelectorAll(".btn-del-gc").forEach(s=>{s.addEventListener("click",async l=>{l.stopPropagation(),confirm("Supprimer cette carte Game Changer ?")&&(await k.from("gc_definitions").delete().eq("id",s.dataset.del),ze(e,t))})})}function oi(e){const t=X.find(s=>s.value===e.gc_type)||X[0],n=e.image_url?`/icons/${e.image_url}`:null,i=fe(e.name||"?",n,t.label.split(" ")[0],e.effect||"",{width:130});return`<div data-edit-gc="${e.id}" style="position:relative;cursor:pointer">
    ${i}
    <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
      <button class="btn-del-gc" data-del="${e.id}"
        style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0">✕</button>
    </div>
    ${e.is_active?"":'<div style="position:absolute;top:4px;right:4px;z-index:10;background:#555;color:#fff;font-size:9px;font-weight:700;padding:2px 6px;border-radius:8px">INACTIF</div>'}
  </div>`}function tt(e,t,n){var p,f,d,o,h;const{openModal:i,closeModal:s,toast:l}=n,y=!e,x=e||{name:"",gc_type:"game_changer",color:"purple",effect:"",image_url:"",sort_order:0,is_active:!0,effect_type:"BOOST_STAT",effect_params:{}},_=(()=>{const u=x.effect_params||{},w=Z.find(L=>L.value===(x.effect_type||"BOOST_STAT"))||Z[0];return`
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
          ${et.map(L=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555">
            <input type="checkbox" class="gc-p-role" value="${L}" ${!u.roles||u.roles.includes(L)?"checked":""}> ${L}
          </label>`).join("")}
        </div>
      </div>`:""}
    </div>`})(),r=`
    <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:#1a1a2e;border-radius:12px">
      <div id="gc-modal-preview">${fe(x.name||"?",x.image_url?`/icons/${x.image_url}`:null,(X.find(u=>u.value===x.gc_type)||X[0]).label.split(" ")[0],x.effect||"",{width:150})}</div>
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
            ${X.map(u=>`<option value="${u.value}" ${x.gc_type===u.value?"selected":""}>${u.label}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>COULEUR</label>
          <select id="gc-color">
            ${ii.map(u=>`<option value="${u.value}" ${x.color===u.value?"selected":""}>${u.label}</option>`).join("")}
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
  `;i(y?"Nouvelle carte Game Changer":`Modifier : ${x.name}`,r,`
    <button id="gc-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gc-save" class="btn btn-primary">💾 Enregistrer</button>
  `);const c=()=>{var b,$,g,I,A;const u=((b=document.getElementById("gc-name"))==null?void 0:b.value)||"?",w=(($=document.getElementById("gc-effect"))==null?void 0:$.value)||"",L=((g=document.getElementById("gc-type"))==null?void 0:g.value)||"game_changer",a=(A=(I=document.getElementById("gc-image-url"))==null?void 0:I.value)==null?void 0:A.trim(),v=X.find(B=>B.value===L)||X[0],E=document.getElementById("gc-modal-preview");E&&(E.innerHTML=fe(u,a?`/icons/${a}`:null,v.label.split(" ")[0],w,{width:150}))};["gc-name","gc-effect","gc-type","gc-image-url"].forEach(u=>{var w,L;(w=document.getElementById(u))==null||w.addEventListener("input",c),(L=document.getElementById(u))==null||L.addEventListener("change",c)}),(p=document.getElementById("gc-effect-type"))==null||p.addEventListener("change",()=>{const u=document.getElementById("gc-effect-type").value,w=Z.find(a=>a.value===u)||Z[0],L=document.getElementById("gc-params-wrap");L.innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${w.hasValue?'<div><label>VALEUR (+N)</label><input id="gc-p-value" type="number" min="1" max="5" value="2"></div>':""}
      ${w.hasCount?'<div><label>NB JOUEURS</label><input id="gc-p-count" type="number" min="1" max="11" value="1"></div>':""}
      ${w.hasTarget?'<div><label>CIBLE</label><select id="gc-p-target"><option value="home">Mon équipe</option><option value="opponent">Équipe adverse</option></select></div>':""}
      ${w.hasRoles?`<div><label>POSTES CIBLÉS</label><div style="display:flex;gap:4px;flex-wrap:wrap">${et.map(a=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555"><input type="checkbox" class="gc-p-role" value="${a}" checked> ${a}</label>`).join("")}</div></div>`:""}
    </div>`}),(f=document.getElementById("btn-pick-gc-icon"))==null||f.addEventListener("click",async()=>{var w;const u=document.getElementById("gc-icon-picker");if(u){if(u.style.display!=="none"){u.style.display="none";return}u.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',u.style.display="block";try{const a=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),v=Array.isArray(a)?a.filter(b=>b.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(b.name)):[];if(!v.length){u.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const E=((w=document.getElementById("gc-image-url"))==null?void 0:w.value)||"";u.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
        ${v.map(b=>`
        <div class="gc-icon-item" data-name="${b.name}"
          style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${b.name===E?"#7a28b8":"#ddd"};background:${b.name===E?"#f5f0ff":"#fff"}">
          <img src="/icons/${b.name}" style="height:44px;width:100%;object-fit:contain">
          <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
        </div>`).join("")}
      </div>`,u.querySelectorAll(".gc-icon-item").forEach(b=>{b.addEventListener("click",()=>{const $=document.getElementById("gc-image-url");$&&($.value=b.dataset.name),u.style.display="none",c()})})}catch(L){u.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${L.message}</div>`}}}),(d=document.getElementById("btn-upload-gc-icon"))==null||d.addEventListener("click",async()=>{var E;const u=document.getElementById("gc-image-upload"),w=(E=u==null?void 0:u.files)==null?void 0:E[0];if(!w){l("Choisir une image d'abord","error");return}const L=document.getElementById("gc-upload-status"),a=document.getElementById("btn-upload-gc-icon"),v=a.textContent;try{L.style.display="block",L.textContent="⏳ Upload en cours...",L.style.color="#666",a.disabled=!0;const b=w.name.split(".").pop().toLowerCase();if(!["png","jpg","jpeg","webp"].includes(b))throw new Error("Format invalide (PNG, JPG, WebP)");const g=Date.now(),A=`gamechanger-${w.name.replace(/\.[^.]+$/,"").replace(/[^a-z0-9-]/gi,"_").toLowerCase()}-${g}.${b}`,{data:B,error:C}=await k.storage.from("gc-icons").upload(A,w,{upsert:!1});if(C)throw C;document.getElementById("gc-image-url").value=A,c(),L.textContent="✅ Image uploadée avec succès",L.style.color="#27ae60",a.disabled=!1,a.textContent=v,u.value="",setTimeout(()=>{L.style.display="none"},3e3)}catch(b){L.textContent=`❌ Erreur : ${b.message}`,L.style.color="#c0392b",a.disabled=!1,a.textContent=v}}),(o=document.getElementById("gc-cancel"))==null||o.addEventListener("click",()=>s()),(h=document.getElementById("gc-save"))==null||h.addEventListener("click",async()=>{var E,b,$,g,I,A,B,C,D,j,O,U,H,S;const u=Z.find(z=>{var T;return z.value===(((T=document.getElementById("gc-effect-type"))==null?void 0:T.value)||"BOOST_STAT")})||Z[0],w=u.hasRoles?[...document.querySelectorAll(".gc-p-role:checked")].map(z=>z.value):null,L={...u.hasValue?{value:Number((E=document.getElementById("gc-p-value"))==null?void 0:E.value)||2}:{},...u.hasCount?{count:Number((b=document.getElementById("gc-p-count"))==null?void 0:b.value)||1}:{},...u.hasTarget?{target:(($=document.getElementById("gc-p-target"))==null?void 0:$.value)||"home"}:{},...u.hasRoles?{roles:w!=null&&w.length?w:null}:{}},a={name:((I=(g=document.getElementById("gc-name"))==null?void 0:g.value)==null?void 0:I.trim())||"",effect:((B=(A=document.getElementById("gc-effect"))==null?void 0:A.value)==null?void 0:B.trim())||null,image_url:((D=(C=document.getElementById("gc-image-url"))==null?void 0:C.value)==null?void 0:D.trim())||null,gc_type:((j=document.getElementById("gc-type"))==null?void 0:j.value)||"game_changer",color:((O=document.getElementById("gc-color"))==null?void 0:O.value)||"purple",sort_order:Number((U=document.getElementById("gc-sort"))==null?void 0:U.value)||0,is_active:((H=document.getElementById("gc-active"))==null?void 0:H.checked)??!0,effect_type:((S=document.getElementById("gc-effect-type"))==null?void 0:S.value)||"BOOST_STAT",effect_params:L};if(!a.name){l("Le nom est obligatoire","error");return}const{error:v}=y?await k.from("gc_definitions").insert(a):await k.from("gc_definitions").update(a).eq("id",x.id);if(v){l(v.message,"error");return}l(y?"Carte créée ✅":"Carte modifiée ✅","success"),s(),ze(t,n)})}async function ri(e,{toast:t,openModal:n,closeModal:i}){await P(e,{toast:t,openModal:n,closeModal:i})}async function P(e,t){var E,b,$;const{toast:n,openModal:i,closeModal:s}=t,[{data:l,error:y},{data:x},{data:_},{data:r}]=await Promise.all([k.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),k.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1),k.from("season_reward_tiers").select("*").order("rank_min"),k.from("booster_configs").select("id,name").order("sort_order")]);if(y){e.innerHTML=`<p style="color:red">${y.message}</p>`;return}const m=l||[],c=m.find(g=>g.is_active),p=(x||[]).filter(g=>(g.placement_matches||0)>=1),f=p.filter(g=>(g.placement_matches||0)>=10),d=le.map(g=>g.id),o=Object.fromEntries(le.map(g=>[g.id,g.label])),h=Object.fromEntries(le.map(g=>[g.id,g.color])),u=Object.fromEntries(le.map(g=>[g.id,g.emoji])),w={};d.forEach(g=>{w[g]=0}),f.forEach(g=>{const I=st(g.mmr??450).id;w[I]!==void 0&&w[I]++});const L=f.length?Math.round(f.reduce((g,I)=>g+(I.mmr||450),0)/f.length):0;function a(g){return g?new Date(g).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function v(g){const I=new Date;return g.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(g.end_at)<I?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${c?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${c.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${p.length}</div>
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
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(c.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${f.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${d.map(g=>{const I=w[g],A=f.length>0?Math.round(I/f.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${u[g]} ${o[g]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${A}%;background:${h[g]};border-radius:4px;transition:width 0.5s"></div>
                </div>
                <span style="width:40px;text-align:right;color:var(--gray-600)">${I} (${A}%)</span>
              </div>`}).join("")}
        </div>`:`<div style="font-size:12px;color:var(--gray-600)">Aucun joueur classé pour l'instant.</div>`}
      </div>`:`
      <div class="card-panel" style="background:rgba(230,120,34,0.08);border:1.5px solid #e67e22">
        <div style="font-weight:700;color:#e67e22">⚠️ Aucune saison active</div>
        <div style="font-size:13px;color:var(--gray-600);margin-top:4px">Le mode Ranked est désactivé jusqu'à l'activation d'une saison.</div>
      </div>`}

      <!-- Header + bouton créer -->
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
        <div style="font-weight:700;font-size:14px">Toutes les saisons (${m.length})</div>
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
              ${m.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':m.map(g=>{const I=Math.round((new Date(g.end_at)-new Date(g.start_at))/864e5),A=new Date(g.end_at)<new Date&&!g.is_active;return`
                    <tr>
                      <td><b>${g.name}</b></td>
                      <td style="font-size:12px">${a(g.start_at)}</td>
                      <td style="font-size:12px">${a(g.end_at)}</td>
                      <td style="font-size:12px">${I} jours</td>
                      <td>${v(g)}</td>
                      <td style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn btn-ghost btn-sm" data-edit="${g.id}">✏️ Modifier</button>
                        <button class="btn btn-ghost btn-sm" data-rewards-for="${g.id}" style="color:#D4A017;border-color:#D4A017">🏆 Récompenses</button>
                        ${g.is_active?"":`<button class="btn btn-yellow btn-sm" data-launch="${g.id}">▶ Lancer la saison</button>`}
                        ${g.is_active?`<button class="btn btn-ghost btn-sm" data-deactivate="${g.id}" style="color:#e67e22">⏹ Désactiver</button>`:`<button class="btn btn-primary btn-sm" data-activate="${g.id}">▶ Activer</button>`}
                        ${A?`<button class="btn btn-danger btn-sm" data-delete="${g.id}">🗑</button>`:""}
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
          <button id="add-reward-tier-btn" class="btn btn-primary btn-sm" ${m.length?"":`disabled title="Crée d'abord une saison"`}>+ Ajouter un palier</button>
        </div>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:12px">
          Paliers de classement (TOP 1, TOP 3, TOP 10...) associés à une saison Ranked. Chaque palier peut donner des crédits,
          des cartes joueur spécifiques et/ou des boosters, à partir d'une date d'activation optionnelle.
        </div>
        ${m.length?`
        <div class="table-wrap">
          <table>
            <thead>
              <tr><th>Saison</th><th>Palier</th><th>Classement</th><th style="text-align:right">Crédits</th><th style="text-align:center">Cartes</th><th style="text-align:center">Boosters</th><th>Activation</th><th>Statut</th><th>Actions</th></tr>
            </thead>
            <tbody>
              ${(_||[]).map(g=>{var B;const I=!g.activate_at||new Date(g.activate_at)<=new Date;return`<tr>
                  <td style="font-size:12px">${((B=m.find(C=>C.id===g.season_id))==null?void 0:B.name)||"—"}</td>
                  <td><b>${g.label}</b></td>
                  <td>${g.rank_min===g.rank_max?`#${g.rank_min}`:`#${g.rank_min}–${g.rank_max}`}</td>
                  <td style="text-align:right">${(g.credits||0).toLocaleString("fr")}</td>
                  <td style="text-align:center">${(g.player_ids||[]).length}</td>
                  <td style="text-align:center">${(g.booster_config_ids||[]).length}</td>
                  <td style="font-size:12px">${g.activate_at?a(g.activate_at):"Immédiat"}</td>
                  <td>
                    ${g.distributed_at?`<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Distribué le ${a(g.distributed_at)}</span>`:I?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">● Prêt</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">⏳ Programmé</span>'}
                  </td>
                  <td style="white-space:nowrap">
                    <button class="btn btn-ghost btn-sm" data-edit-tier="${g.id}">✏️</button>
                    <button class="btn btn-primary btn-sm" data-distribute-tier="${g.id}" ${I?"":"disabled"}>🎁 Distribuer</button>
                    <button class="btn btn-danger btn-sm" data-delete-tier="${g.id}">🗑️</button>
                  </td>
                </tr>`}).join("")||'<tr><td colspan="9" style="text-align:center;color:var(--tile-fg-dim);padding:16px">Aucun palier configuré.</td></tr>'}
            </tbody>
          </table>
        </div>`:'<div style="color:var(--tile-fg-dim);font-size:13px;padding:10px">Crée une saison pour configurer ses récompenses.</div>'}
      </div>
    </div>`,(E=document.getElementById("create-season-btn"))==null||E.addEventListener("click",()=>{nt(null,{toast:n,openModal:i,closeModal:s,reload:()=>P(e,t)})}),(b=document.getElementById("start-new-season-btn"))==null||b.addEventListener("click",()=>{li(c,{toast:n,openModal:i,closeModal:s,reload:()=>P(e,t)})}),e.querySelectorAll("[data-edit]").forEach(g=>{const I=m.find(A=>A.id==g.dataset.edit);g.addEventListener("click",()=>{nt(I,{toast:n,openModal:i,closeModal:s,reload:()=>P(e,t)})})}),e.querySelectorAll("[data-activate]").forEach(g=>{g.addEventListener("click",async()=>{const I=parseInt(g.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:A}=await k.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(A){n(A.message,"error");return}const{error:B}=await k.from("ranked_seasons").update({is_active:!0}).eq("id",I);if(B){n(B.message,"error");return}await k.from("users").update({current_season_id:I}).gt("placement_matches",0),n("Saison activée ✅","success"),P(e,t)})}),e.querySelectorAll("[data-rewards-for]").forEach(g=>{g.addEventListener("click",()=>{var B;const I=parseInt(g.dataset.rewardsFor);(B=document.getElementById("rewards-section"))==null||B.scrollIntoView({behavior:"smooth",block:"start"});const A=m.find(C=>C.id===I);_e(null,m,A,r||[],{toast:n,openModal:i,closeModal:s,reload:()=>P(e,t)})})}),e.querySelectorAll("[data-launch]").forEach(g=>{g.addEventListener("click",async()=>{const I=parseInt(g.dataset.launch),A=m.find(D=>D.id===I);if(!confirm(`Lancer "${A==null?void 0:A.name}" ?

Ceci va :
• Journaliser le classement actuel dans l'historique
• Recalculer le MMR de TOUS les joueurs (reset doux)
• Activer cette saison

Action irréversible. Continuer ?`))return;g.disabled=!0,g.textContent="⏳ Lancement...";const{data:B,error:C}=await k.rpc("admin_launch_season",{p_season_id:I});if(g.disabled=!1,g.textContent="▶ Lancer la saison",C){n(C.message,"error");return}if(!(B!=null&&B.success)){n((B==null?void 0:B.error)||"Échec du lancement","error");return}n(`Saison lancée ✅ (${B.logged} classement(s) archivé(s), ${B.reset} joueur(s) recalculé(s))`,"success"),P(e,t)})}),e.querySelectorAll("[data-deactivate]").forEach(g=>{g.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:I}=await k.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(g.dataset.deactivate));if(I){n(I.message,"error");return}n("Saison désactivée","success"),P(e,t)})}),e.querySelectorAll("[data-delete]").forEach(g=>{g.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:I}=await k.from("ranked_seasons").delete().eq("id",parseInt(g.dataset.delete));if(I){n(I.message,"error");return}n("Saison supprimée","success"),P(e,t)})}),($=document.getElementById("add-reward-tier-btn"))==null||$.addEventListener("click",()=>{_e(null,m,c,r||[],{toast:n,openModal:i,closeModal:s,reload:()=>P(e,t)})}),e.querySelectorAll("[data-edit-tier]").forEach(g=>{const I=(_||[]).find(A=>A.id===g.dataset.editTier);g.addEventListener("click",()=>{_e(I,m,c,r||[],{toast:n,openModal:i,closeModal:s,reload:()=>P(e,t)})})}),e.querySelectorAll("[data-distribute-tier]").forEach(g=>{g.addEventListener("click",async()=>{const I=(_||[]).find(C=>C.id===g.dataset.distributeTier);if(!confirm(`Distribuer les récompenses du palier "${I==null?void 0:I.label}" à tous les joueurs concernés ?`))return;g.disabled=!0,g.textContent="⏳...";const{data:A,error:B}=await k.rpc("admin_distribute_season_reward",{p_tier_id:g.dataset.distributeTier});if(B){n(B.message,"error"),g.disabled=!1,g.textContent="🎁 Distribuer";return}if(!(A!=null&&A.success)){n((A==null?void 0:A.error)||"Échec de la distribution","error"),g.disabled=!1,g.textContent="🎁 Distribuer";return}n(`Récompenses distribuées à ${A.rewarded} joueur(s) ✅`,"success"),P(e,t)})}),e.querySelectorAll("[data-delete-tier]").forEach(g=>{g.addEventListener("click",async()=>{if(!confirm("Supprimer ce palier de récompense ?"))return;const{error:I}=await k.from("season_reward_tiers").delete().eq("id",g.dataset.deleteTier);if(I){n(I.message,"error");return}n("Palier supprimé","success"),P(e,t)})})}function _e(e,t,n,i,{toast:s,openModal:l,closeModal:y,reload:x}){var o,h,u,w,L;const _=!!e,r=(e==null?void 0:e.season_id)??(n==null?void 0:n.id)??((o=t[0])==null?void 0:o.id)??null;let m=[];const c=a=>{if(!a)return"";const v=new Date(a);return new Date(v.getTime()-v.getTimezoneOffset()*6e4).toISOString().slice(0,16)},p=`
    <div style="display:flex;flex-direction:column;gap:12px">
      <div>
        <label>SAISON RANKED</label>
        <select id="rt-season">
          ${t.map(a=>`<option value="${a.id}" ${a.id===r?"selected":""}>${a.name}${a.is_active?" (active)":""}</option>`).join("")}
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
        <input id="rt-activate-at" type="datetime-local" value="${c(e==null?void 0:e.activate_at)}">
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
  `;l(_?`Modifier : ${e.label}`:"Nouveau palier de récompense",p,`
    <button id="rt-cancel" class="btn btn-ghost">Annuler</button>
    <button id="rt-save" class="btn btn-primary">💾 Enregistrer</button>
  `);function d(){const a=document.getElementById("rt-player-chips");a&&(a.innerHTML=m.map(v=>`
      <span style="display:inline-flex;align-items:center;gap:6px;background:#1A6B3C;color:#fff;font-size:12px;font-weight:700;padding:4px 8px;border-radius:14px">
        ${v.label}
        <button data-remove-player="${v.id}" style="background:none;border:none;color:#fff;cursor:pointer;font-size:12px;padding:0">✕</button>
      </span>`).join(""),a.querySelectorAll("[data-remove-player]").forEach(v=>{v.addEventListener("click",()=>{m=m.filter(E=>E.id!==v.dataset.removePlayer),d()})}))}(h=e==null?void 0:e.player_ids)!=null&&h.length&&k.from("players").select("id,firstname,surname_real").in("id",e.player_ids).then(({data:a})=>{m=(a||[]).map(v=>({id:v.id,label:`${v.firstname} ${v.surname_real}`})),d()}),(u=document.getElementById("rt-player-search-btn"))==null||u.addEventListener("click",async()=>{const a=document.getElementById("rt-player-search").value.trim();if(a.length<2)return;const{data:v}=await k.from("players").select("id,firstname,surname_real,rarity").or(`firstname.ilike.%${a}%,surname_real.ilike.%${a}%`).limit(10),E=document.getElementById("rt-player-results");if(!(v!=null&&v.length)){E.style.display="flex",E.innerHTML='<div style="color:#999;font-size:12px;padding:4px">Aucun résultat.</div>';return}E.style.display="flex",E.innerHTML=v.map(b=>`
      <div data-add-player="${b.id}" data-label="${b.firstname} ${b.surname_real}" style="cursor:pointer;padding:6px 8px;border-radius:6px;font-size:13px;color:#333" onmouseover="this.style.background='#eee'" onmouseout="this.style.background=''">
        ${b.firstname} ${b.surname_real} <span style="color:#999;font-size:11px">(${b.rarity})</span>
      </div>`).join(""),E.querySelectorAll("[data-add-player]").forEach(b=>{b.addEventListener("click",()=>{const $=b.dataset.addPlayer;m.some(g=>g.id===$)||m.push({id:$,label:b.dataset.label}),d(),E.style.display="none",document.getElementById("rt-player-search").value=""})})}),(w=document.getElementById("rt-cancel"))==null||w.addEventListener("click",()=>y()),(L=document.getElementById("rt-save"))==null||L.addEventListener("click",async()=>{const a=document.getElementById("rt-error"),v=parseInt(document.getElementById("rt-season").value),E=document.getElementById("rt-label").value.trim(),b=parseInt(document.getElementById("rt-rank-min").value)||1,$=parseInt(document.getElementById("rt-rank-max").value)||1,g=parseInt(document.getElementById("rt-credits").value)||0,I=document.getElementById("rt-activate-at").value,A=I?new Date(I).toISOString():null,B=[...document.querySelectorAll(".rt-booster-cb:checked")].map(j=>j.value);if(!E){a.textContent="Le libellé est obligatoire.";return}if(b>$){a.textContent="Le classement min doit être ≤ au max.";return}if(!v){a.textContent="Choisis une saison.";return}const C={season_id:v,label:E,rank_min:b,rank_max:$,credits:g,booster_config_ids:B,player_ids:m.map(j=>j.id),activate_at:A},{error:D}=_?await k.from("season_reward_tiers").update(C).eq("id",e.id):await k.from("season_reward_tiers").insert(C);if(D){a.textContent=D.message;return}s(_?"Palier modifié ✅":"Palier créé ✅","success"),y(),x()})}function li(e,{toast:t,openModal:n,closeModal:i,reload:s}){var m,c;const l=new Date,y=new Date(l.getTime()+30*864e5),x=p=>p.toISOString().slice(0,10),_=`
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
          <input id="sns-start" type="date" value="${x(l)}">
        </div>
        <div>
          <label>DATE DE FIN</label>
          <input id="sns-end" type="date" value="${x(y)}">
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
  `),(m=document.getElementById("sns-cancel"))==null||m.addEventListener("click",()=>i()),(c=document.getElementById("sns-launch"))==null||c.addEventListener("click",async()=>{const p=document.getElementById("sns-error"),f=document.getElementById("sns-name").value.trim(),d=document.getElementById("sns-start").value,o=document.getElementById("sns-end").value,h=document.getElementById("sns-confirm").checked;if(!f){p.textContent="Le nom de la saison est requis.";return}if(!d||!o){p.textContent="Les deux dates sont requises.";return}if(new Date(d)>=new Date(o)){p.textContent="La date de fin doit être après la date de début.";return}if(!h){p.textContent="Coche la case de confirmation pour continuer.";return}const u=document.getElementById("sns-launch");u.disabled=!0,u.textContent="⏳ Recalcul en cours...";const{data:w,error:L}=await k.rpc("admin_start_new_season",{p_name:f,p_start_at:new Date(d).toISOString(),p_end_at:new Date(o).toISOString()});if(u.disabled=!1,u.textContent="🚀 Démarrer la saison",L){p.textContent=L.message;return}if(!(w!=null&&w.success)){p.textContent=(w==null?void 0:w.error)||"Échec de l'opération.";return}t(`Nouvelle saison démarrée ✅ (${w.users_reset} joueur(s) recalculé(s))`,"success"),i(),s()})}function nt(e,{toast:t,openModal:n,closeModal:i,reload:s}){const l=!!e,y=new Date().toISOString().slice(0,16),x=new Date(Date.now()+90*864e5).toISOString().slice(0,16),_=e?new Date(e.start_at).toISOString().slice(0,16):y,r=e?new Date(e.end_at).toISOString().slice(0,16):x,m=(e==null?void 0:e.name)||"";n(l?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group">
        <label>Nom de la saison *</label>
        <input id="season-name" type="text" value="${m}" placeholder="ex: Saison 2 — Été 2026" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de début *</label>
        <input id="season-start" type="datetime-local" value="${_}" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de fin *</label>
        <input id="season-end" type="datetime-local" value="${r}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${l?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function c(){var h,u;const p=(h=document.getElementById("season-start"))==null?void 0:h.value,f=(u=document.getElementById("season-end"))==null?void 0:u.value,d=document.getElementById("season-duration");if(!p||!f||!d)return;const o=Math.round((new Date(f)-new Date(p))/864e5);d.textContent=o>0?`Durée : ${o} jour${o>1?"s":""}`:"⚠️ La fin doit être après le début",d.style.color=o>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var p,f,d;(p=document.getElementById("season-start"))==null||p.addEventListener("input",c),(f=document.getElementById("season-end"))==null||f.addEventListener("input",c),c(),(d=document.getElementById("season-save-btn"))==null||d.addEventListener("click",async()=>{var E,b,$;const o=(E=document.getElementById("season-name"))==null?void 0:E.value.trim(),h=(b=document.getElementById("season-start"))==null?void 0:b.value,u=($=document.getElementById("season-end"))==null?void 0:$.value,w=document.getElementById("season-error");if(!o){w.textContent="Le nom est requis.";return}if(!h){w.textContent="La date de début est requise.";return}if(!u){w.textContent="La date de fin est requise.";return}if(new Date(u)<=new Date(h)){w.textContent="La date de fin doit être après le début.";return}const L=document.getElementById("season-save-btn");L.disabled=!0,L.textContent="Enregistrement…";const a={name:o,start_at:new Date(h).toISOString(),end_at:new Date(u).toISOString()};let v;if(l?{error:v}=await k.from("ranked_seasons").update(a).eq("id",e.id):{error:v}=await k.from("ranked_seasons").insert({...a,is_active:!1}),v){w.textContent=v.message,L.disabled=!1,L.textContent=l?"💾 Enregistrer":"✅ Créer la saison";return}t(l?"Saison modifiée ✅":"Saison créée ✅","success"),i(),s()})},50)}async function ke(e,t){var _;const{toast:n}=t,{data:i,error:s}=await k.from("solo_levels").select("*").order("level_number");if(s){e.innerHTML=`<p style="color:var(--danger)">${s.message}</p>`;return}const l=r=>`
    <tr data-row="${r.id}">
      <td style="padding:4px 8px;text-align:center">
        <input data-field="level_number" data-id="${r.id}" type="number" min="1" value="${r.level_number}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="target_note_avg" data-id="${r.id}" type="number" min="0" max="999" step="0.5" value="${r.target_note_avg}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="nb_liens_jaune" data-id="${r.id}" type="number" min="0" value="${r.nb_liens_jaune}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="nb_liens_vert" data-id="${r.id}" type="number" min="0" value="${r.nb_liens_vert}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="nb_joueurs_stade" data-id="${r.id}" type="number" min="0" max="16" value="${r.nb_joueurs_stade}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="reward_credits" data-id="${r.id}" type="number" min="0" value="${r.reward_credits}" style="width:100%;padding:6px;text-align:right;font-size:13px">
      </td>
      <td style="text-align:center;padding:4px 8px">
        <input data-field="is_active" data-id="${r.id}" type="checkbox" ${r.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
      </td>
      <td style="text-align:center;padding:4px 8px">
        <button class="btn btn-danger btn-sm" data-del-row="${r.id}">🗑️</button>
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
            ${(i||[]).map(l).join("")||'<tr><td colspan="8" style="text-align:center;color:#aaa;padding:20px">Aucun niveau défini.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;function y(){document.querySelectorAll("#solo-tbody [data-field]").forEach(r=>{r.addEventListener("change",()=>x(r))})}async function x(r){const m=r.dataset.id,c=r.dataset.field,p=c==="is_active"?r.checked:Number(r.value)||0,{error:f}=await k.from("solo_levels").update({[c]:p}).eq("id",m);if(f){n(f.message,"error");return}r.style.transition="background .3s",r.style.background="#e8f8ee",setTimeout(()=>{r.style.background=""},500)}y(),document.querySelectorAll("[data-del-row]").forEach(r=>{r.addEventListener("click",async()=>{confirm("Supprimer ce niveau ? Les joueurs ayant progressé au-delà seront affectés.")&&(await k.from("solo_levels").delete().eq("id",r.dataset.delRow),n("Niveau supprimé","success"),ke(e,t))})}),(_=document.getElementById("solo-add-row"))==null||_.addEventListener("click",async()=>{const m={level_number:Math.max(0,...(i||[]).map(f=>f.level_number))+1,target_note_avg:10,nb_liens_jaune:2,nb_liens_vert:1,nb_joueurs_stade:2,reward_credits:500,is_active:!0},{data:c,error:p}=await k.from("solo_levels").insert(m).select().single();if(p){n(p.message,"error");return}n("Niveau ajouté — modifie les valeurs directement","success"),ke(e,t)})}Yt(lt);function si(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function di(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function Le(){document.getElementById("modal-overlay").classList.add("hidden")}const it={dashboard:{title:"Dashboard",fn:dt},players:{title:"Joueurs & Cartes",fn:en},clubs:{title:"Clubs",fn:mn},"card-builder":{title:"Card Builder",fn:$n},users:{title:"Managers",fn:$e},market:{title:"Mercato",fn:$t},"import-export":{title:"Import / Export CSV",fn:Dn},formations:{title:"Formations & Liens",fn:Pn},"boosters-config":{title:"Boosters",fn:Un},"sell-price":{title:"Prix vente directe",fn:Hn},journal:{title:"Actualités",fn:Vn},tutorial:{title:"Tutoriel",fn:Zn},stadiums:{title:"Stades",fn:ti},"gc-cards":{title:"Game Changers",fn:ai},"ranked-seasons":{title:"Saisons Ranked",fn:ri},"solo-mode":{title:"Solo Mode",fn:ke}};async function ve(e){document.querySelectorAll(".admin-sidebar nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===e)});const t=document.getElementById("mobile-page-select");t&&(t.value=e);const n=it[e]||it.dashboard;document.getElementById("page-title").textContent=n.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(i,{toast:si,openModal:di,closeModal:Le,navigate:ve})}catch(s){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${s.message}</div>`,console.error(s)}}async function ci(){var t;const{data:{session:e}}=await k.auth.getSession();e&&await at(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,s=document.getElementById("auth-error");if(s.textContent="",!n||!i){s.textContent="Remplissez tous les champs.";return}const{data:l,error:y}=await k.auth.signInWithPassword({email:n,password:i});if(y){s.textContent=y.message;return}await at(l.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await k.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",Le),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&Le()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",i=>{i.preventDefault(),ve(n.dataset.page)})}),(t=document.getElementById("mobile-page-select"))==null||t.addEventListener("change",n=>{ve(n.target.value)})}async function at(e){const{data:t,error:n}=await k.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(n||!t){i.textContent="Profil introuvable.";return}if(!t.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await k.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,ve("dashboard")}ci();
