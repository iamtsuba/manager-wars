import{s as L,i as Mt,_ as rt,g as lt,r as re,A as zt,l as Rt,K as Fe,D as q,a as jt,b as st,S as Dt,c as U,H as Nt,R as Pt,d as dt,e as Ft,f as Ot,E as Gt,h as qt,N as Ut,M as Ht,B as Kt,j as ct,k as Vt,F as pe,m as Ae,n as fe,o as Jt,p as Yt,q as Zt,t as he,u as Oe,T as le,v as Wt}from"./match-shared-Gpu5ritM.js";async function pt(e){var r;const[{count:t},{count:n},{count:a},{count:s},{count:l},{data:f},{data:E}]=await Promise.all([L.from("players").select("*",{count:"exact",head:!0}),L.from("clubs").select("*",{count:"exact",head:!0}),L.from("users").select("*",{count:"exact",head:!0}),L.from("stadium_definitions").select("*",{count:"exact",head:!0}),L.from("users").select("*",{count:"exact",head:!0}).gt("last_seen_at",new Date(Date.now()-18e4).toISOString()),L.rpc("get_signup_password"),L.from("app_feature_flags").select("*").order("key")]),_=f||"";e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:24px">

      <!-- Managers -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">👥 Managers</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${a??"–"}</div>
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
        ${(E||[]).map(c=>`
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
  `,window.adminNav=c=>{var p;(p=document.querySelector(`[data-page="${c}"]`))==null||p.click()},e.querySelectorAll(".feature-flag-toggle").forEach(c=>{c.addEventListener("click",async()=>{const p=c.dataset.key,v=c.dataset.enabled!=="true";c.disabled=!0;const{error:x}=await L.from("app_feature_flags").update({enabled:v,updated_at:new Date().toISOString()}).eq("key",p);if(c.disabled=!1,x){alert(x.message);return}Mt(),pt(e)})}),(r=document.getElementById("signup-pwd-save"))==null||r.addEventListener("click",async()=>{const c=document.getElementById("signup-pwd-input").value.trim(),p=document.getElementById("signup-pwd-status");if(!c){p.textContent="Le code ne peut pas être vide.",p.style.color="#ff6b6b";return}const v=document.getElementById("signup-pwd-save");v.disabled=!0,v.textContent="⏳...";const{error:x}=await L.rpc("set_signup_password",{new_password:c});if(v.disabled=!1,v.textContent="💾 Enregistrer",x){p.textContent=x.message,p.style.color="#ff6b6b";return}p.textContent="✅ Code mis à jour.",p.style.color="#2ecc71"})}const we={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},Qt={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Xt(){const e={};for(const t of zt)e[t]=await Rt(t);return e}function se(e){return e.job==="GK"?e.note_g||0:e.job==="DEF"?e.note_d||0:e.job==="MIL"?e.note_m||0:e.note_a||0}async function en(e){const t=document.getElementById("export-players-btn");t&&(t.disabled=!0,t.textContent="⏳ Export...");try{let n=[],a=0;const s=1e3;for(;;){const{data:r,error:c}=await L.from("players").select("*").order("surname_real").range(a,a+s-1);if(c){e(c.message,"error");return}if(n=n.concat(r||[]),!r||r.length<s)break;a+=s}if(!n.length){e("Aucun joueur à exporter","error");return}const l=await rt(()=>import("./xlsx-D_0l8YDs.js"),[]),f=l.utils.json_to_sheet(n),E=l.utils.book_new();l.utils.book_append_sheet(E,f,"Joueurs");const _=new Date().toISOString().slice(0,10);l.writeFile(E,`joueurs_${_}.xlsx`),e(`${n.length} joueur(s) exporté(s) ✅`,"success")}catch(n){e(`Erreur export : ${n.message}`,"error")}finally{t&&(t.disabled=!1,t.textContent="📤 Export Excel")}}async function tn(e,t,n){const{toast:a}=n,s=document.getElementById("import-players-btn");s&&(s.disabled=!0,s.textContent="⏳ Import...");try{const l=await rt(()=>import("./xlsx-D_0l8YDs.js"),[]),f=await e.arrayBuffer(),E=l.read(f,{type:"array"}),_=l.utils.sheet_to_json(E.Sheets[E.SheetNames[0]],{defval:null});if(!_.length){a("Fichier vide","error");return}const r=["firstname","surname_real","lastname_reel","job","job2","rarity","country_code","club_id","sell_price","note_g","note_d","note_m","note_a","note_min","note_max","face"],c=new Set(["sell_price","note_g","note_d","note_m","note_a","note_min","note_max"]),p=[],v=[];if(_.forEach((i,b)=>{if(!i.id){v.push(`ligne ${b+2} : id manquant`);return}const d={id:i.id},$=new Set(["firstname","surname_real"]);r.forEach(S=>{if(!(S in i))return;let o=i[S];if(typeof o=="string"&&(o=o.trim()),o===""&&(o=null),o!==null&&c.has(S)){const y=Number(o);o=Number.isFinite(y)?y:null}o===null&&$.has(S)&&o===null||(d[S]=o)}),d.updated_at=new Date().toISOString(),p.push(d)}),!p.length){a('Aucune ligne exploitable (colonne "id" requise)',"error");return}if(!confirm(`Mettre à jour ${p.length} joueur(s) depuis le fichier ?

Cette action écrase les données actuelles.`))return;let x=0;const g=100;for(let i=0;i<p.length;i+=g){const b=p.slice(i,i+g),{error:d}=await L.from("players").upsert(b,{onConflict:"id"});if(d){a(`Erreur lot ${Math.floor(i/g)+1} : ${d.message}`,"error");break}x+=b.length}a(`${x} joueur(s) mis à jour ✅${v.length?` — ${v.length} ligne(s) ignorée(s)`:""}`,"success"),v.length&&console.warn("[Import joueurs] lignes ignorées :",v),x&&ae(t,n)}catch(l){a(`Erreur import : ${l.message}`,"error")}finally{s&&(s.disabled=!1,s.textContent="📥 Import Excel")}}function Ge(e,t,n,a=!1){const s=`__players${e[0].toUpperCase()}${e.slice(1)}Filter`;return window[s]||(window[s]=new Set),`<div class="ms-wrap" data-ms-kind="${e}" style="position:relative;min-width:150px">
    <button type="button" id="ms-btn-${e}" class="btn btn-ghost" style="width:100%;text-align:left;display:flex;justify-content:space-between;align-items:center;gap:6px">
      <span id="ms-label-${e}">${t}</span>
      <span style="font-size:10px;opacity:.6">▾</span>
    </button>
    <div id="ms-panel-${e}" style="display:none;position:absolute;z-index:50;top:calc(100% + 4px);left:0;min-width:220px;max-height:280px;overflow-y:auto;background:#fff;border:1px solid var(--gray-200,#ddd);border-radius:10px;box-shadow:0 6px 20px rgba(0,0,0,0.15);padding:8px">
      ${a?`<input id="ms-search-${e}" placeholder="Rechercher…" style="width:100%;margin-bottom:6px;padding:6px 8px;font-size:12.5px">`:""}
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
  </div>`}function qe(e,t,n){var c,p,v;const a=`__players${e[0].toUpperCase()}${e.slice(1)}Filter`,s=window[a],l=t.querySelector(`#ms-btn-${e}`),f=t.querySelector(`#ms-panel-${e}`),E=t.querySelector(`#ms-label-${e}`),_=(E==null?void 0:E.textContent)||"";function r(){E&&(E.textContent=s.size?`${_} (${s.size})`:_)}t.querySelectorAll(`.ms-check-${e}`).forEach(x=>{x.checked=s.has(x.value),x.addEventListener("change",()=>{x.checked?s.add(x.value):s.delete(x.value),r(),n()})}),r(),l==null||l.addEventListener("click",x=>{x.stopPropagation();const g=f.style.display==="block";document.querySelectorAll('[id^="ms-panel-"]').forEach(i=>i.style.display="none"),f.style.display=g?"none":"block"}),f==null||f.addEventListener("click",x=>x.stopPropagation()),(c=t.querySelector(`#ms-all-${e}`))==null||c.addEventListener("click",()=>{t.querySelectorAll(`.ms-check-${e}`).forEach(x=>{x.checked=!0,s.add(x.value)}),r(),n()}),(p=t.querySelector(`#ms-none-${e}`))==null||p.addEventListener("click",()=>{t.querySelectorAll(`.ms-check-${e}`).forEach(x=>{x.checked=!1}),s.clear(),r(),n()}),(v=t.querySelector(`#ms-search-${e}`))==null||v.addEventListener("input",x=>{const g=x.target.value.toLowerCase();t.querySelectorAll(`#ms-options-${e} label`).forEach(i=>{i.style.display=i.dataset.msLabel.includes(g)?"flex":"none"})})}window.__playersMsDocListener||(window.__playersMsDocListener=!0,document.addEventListener("click",()=>{document.querySelectorAll('[id^="ms-panel-"]').forEach(e=>e.style.display="none")}));async function nn(e,t){await ae(e,t)}async function ae(e,t,n=null){var r,c,p,v;const{toast:a}=t;n||(n={search:((r=document.getElementById("search-players"))==null?void 0:r.value)||"",job:((c=document.getElementById("filter-job"))==null?void 0:c.value)||"",rarity:((p=document.getElementById("filter-rarity"))==null?void 0:p.value)||"",clubs:window.__playersClubFilter?[...window.__playersClubFilter]:[],countries:window.__playersCountryFilter?[...window.__playersCountryFilter]:[],sort:((v=document.getElementById("sort-players"))==null?void 0:v.value)||"job"});const[{data:s,error:l},{data:f}]=await Promise.all([L.from("players").select("*, clubs(id,encoded_name,logo_url)"),L.from("clubs").select("id,encoded_name").order("encoded_name")]);if(l){e.innerHTML=`<p style="color:red">${l.message}</p>`;return}const E={GK:0,DEF:1,MIL:2,ATT:3},_=(s||[]).sort((x,g)=>{const i=(E[x.job]??4)-(E[g.job]??4);return i!==0?i:(x.surname_real||"").localeCompare(g.surname_real||"")});an(e,_,f||[],t,n)}function an(e,t,n,a,s=null){var x,g;const{toast:l}=a;if(e.innerHTML=`
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
          ${Object.entries(we).map(([i,b])=>`<option value="${i}">${b}</option>`).join("")}
        </select>
        <button class="btn btn-primary" id="add-player-btn" style="white-space:nowrap">+ Joueur</button>
        <button class="btn btn-ghost" id="export-players-btn" style="white-space:nowrap">📤 Export Excel</button>
        <button class="btn btn-ghost" id="import-players-btn" style="white-space:nowrap">📥 Import Excel</button>
        <input type="file" id="import-players-file" accept=".xlsx,.xls" style="display:none">
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-start">
        ${Ge("club","🏟️ Club",n.map(i=>({value:i.id,label:i.encoded_name})),!0)}
        ${Ge("country","🌍 Pays",[...new Set(t.map(i=>i.country_code).filter(Boolean))].sort().map(i=>({value:i,label:i})),!0)}
        <select id="sort-players" style="min-width:170px">
          <option value="job">Trier : Poste (défaut)</option>
          <option value="note_desc">Trier : Note ↓ (plus haute)</option>
          <option value="note_asc">Trier : Note ↑ (plus basse)</option>
          <option value="name">Trier : Nom (A→Z)</option>
        </select>
      </div>
      <div id="filters-restore-hook" style="display:none"></div>
      <div style="display:flex;align-items:center;gap:10px">
        <div id="count-label" style="font-size:12px;color:var(--gray-600);flex:1">${t.length} joueur(s)</div>
        <div style="display:flex;gap:4px;background:var(--gray-100,#f0f0f0);border-radius:8px;padding:3px">
          <button type="button" class="view-mode-btn" data-view="card" style="padding:6px 12px;border-radius:6px;border:none;font-size:12px;font-weight:700;cursor:pointer;background:var(--green);color:#fff">🎴 Carte</button>
          <button type="button" class="view-mode-btn" data-view="list" style="padding:6px 12px;border-radius:6px;border:none;font-size:12px;font-weight:700;cursor:pointer;background:transparent;color:var(--gray-600)">📋 Liste</button>
        </div>
      </div>
      <div id="bulk-bar" style="display:none;align-items:center;gap:8px;padding:8px 10px;background:rgba(187,32,32,0.08);border:1px solid #bb2020;border-radius:10px">
        <span id="bulk-count" style="font-size:13px;font-weight:700;color:#bb2020;flex:1"></span>
        <button class="btn btn-danger btn-sm" id="bulk-delete-btn">🗑️ Supprimer la sélection</button>
        <button class="btn btn-ghost btn-sm" id="bulk-cancel-btn">Annuler</button>
      </div>
      <!-- Grille de cartes -->
      <div id="players-list" style="display:flex;flex-wrap:wrap;gap:12px"></div>
      <!-- Liste modifiable (tableau) -->
      <div id="players-table-wrap" style="display:none;overflow-x:auto;border:1px solid var(--gray-200,#e0e0e0);border-radius:10px"></div>
    </div>`,s){const i=s,b=d=>document.getElementById(d);i.search&&b("search-players")&&(b("search-players").value=i.search),i.job&&b("filter-job")&&(b("filter-job").value=i.job),i.rarity&&b("filter-rarity")&&(b("filter-rarity").value=i.rarity),i.sort&&b("sort-players")&&(b("sort-players").value=i.sort)}s!=null&&s.clubs&&(window.__playersClubFilter=new Set(s.clubs)),s!=null&&s.countries&&(window.__playersCountryFilter=new Set(s.countries));function f(){var h;const i=document.getElementById("search-players").value.toLowerCase(),b=document.getElementById("filter-job").value,d=document.getElementById("filter-rarity").value,$=window.__playersClubFilter||new Set,S=window.__playersCountryFilter||new Set,o=((h=document.getElementById("sort-players"))==null?void 0:h.value)||"job";let y=t.filter(u=>(!i||`${u.firstname} ${u.surname_real}`.toLowerCase().includes(i))&&(!b||u.job===b)&&(!d||u.rarity===d)&&(!$.size||$.has(u.club_id))&&(!S.size||S.has(u.country_code)));return o==="note_desc"?y=[...y].sort((u,w)=>se(w)-se(u)):o==="note_asc"?y=[...y].sort((u,w)=>se(u)-se(w)):o==="name"&&(y=[...y].sort((u,w)=>(u.surname_real||"").localeCompare(w.surname_real||""))),y}const E=new Set;function _(){const i=document.getElementById("bulk-bar"),b=document.getElementById("bulk-count");i&&(i.style.display=E.size>0?"flex":"none",b&&(b.textContent=`${E.size} joueur(s) sélectionné(s)`))}let r="card";function c(){const i=f();if(document.getElementById("count-label").textContent=`${i.length} joueur(s)`,r==="list"){document.getElementById("players-list").style.display="none",document.getElementById("players-table-wrap").style.display="block",v(i);return}document.getElementById("players-list").style.display="flex",document.getElementById("players-table-wrap").style.display="none",p(i)}function p(i){const b=document.getElementById("players-list");if(!i.length){b.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}b.innerHTML=i.map(d=>{const $={...d,clubs:d.clubs,face:d.face||null},S=re($,{width:120});return`<div style="position:relative;cursor:pointer" data-edit="${d.id}">
        ${S}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${d.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),b.querySelectorAll("[data-edit]").forEach(d=>{d.addEventListener("click",()=>{const $=t.find(S=>S.id===d.dataset.edit);$&&Ue($,n,e,a)})}),b.querySelectorAll(".btn-del-player").forEach(d=>{d.addEventListener("click",async $=>{if($.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:S}=await L.from("players").delete().eq("id",d.dataset.del);S?l(S.message,"error"):(l("Joueur supprimé ✅","success"),ae(e,a))})})}function v(i){const b=document.getElementById("players-table-wrap");if(!i.length){b.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}const d=I=>'<option value="">—</option>'+n.map(B=>`<option value="${B.id}" ${I===B.id?"selected":""}>${B.encoded_name}</option>`).join(""),$=I=>["GK","DEF","MIL","ATT"].map(B=>`<option value="${B}" ${I===B?"selected":""}>${B}</option>`).join(""),S=I=>'<option value="">Aucun</option>'+["GK","DEF","MIL","ATT"].map(B=>`<option value="${B}" ${I===B?"selected":""}>${B}</option>`).join(""),o=I=>["normal","pepite","papyte","legende"].map(B=>`<option value="${B}" ${I===B?"selected":""}>${we[B]}</option>`).join(""),y=I=>ut.map(B=>`<option value="${B}" ${(I||"FR")===B?"selected":""}>${mt[B]||B}</option>`).join(""),h=I=>`<th style="position:sticky;top:0;background:#f5f5f5;padding:8px 6px;font-size:11px;font-weight:800;color:#666;text-transform:uppercase;letter-spacing:0.3px;border-bottom:2px solid #e0e0e0;white-space:nowrap;text-align:left">${I}</th>`,u="width:100%;min-width:90px;padding:6px 7px;border:1px solid #ddd;border-radius:6px;font-size:12.5px;background:#fff;color:#1a1a1a",w="width:48px;padding:6px 4px;border:1px solid #ddd;border-radius:6px;font-size:12.5px;text-align:center;background:#fff;color:#1a1a1a";b.innerHTML=`
      <table style="border-collapse:collapse;width:100%;font-size:13px">
        <thead><tr>
          ${h("Prénom")}${h("Nom")}${h("Lastname")}${h("Poste 1")}${h("Poste 2")}${h("Rareté")}
          ${h("Pays")}${h("Club")}${h("GK")}${h("DEF")}${h("MIL")}${h("ATT")}${h("Visage")}${h("")}
        </tr></thead>
        <tbody>
          ${i.map(I=>{const B=I.face?lt({face:I.face}):null;return`<tr data-row-id="${I.id}" style="border-bottom:1px solid #eee">
              <td style="padding:5px"><input class="tv-field" data-field="firstname" data-id="${I.id}" value="${(I.firstname||"").replace(/"/g,"&quot;")}" style="${u}"></td>
              <td style="padding:5px"><input class="tv-field" data-field="surname_real" data-id="${I.id}" value="${(I.surname_real||"").replace(/"/g,"&quot;")}" style="${u}"></td>
              <td style="padding:5px"><input class="tv-field" data-field="lastname_reel" data-id="${I.id}" value="${(I.lastname_reel||"").replace(/"/g,"&quot;")}" style="${u}"></td>
              <td style="padding:5px"><select class="tv-field" data-field="job" data-id="${I.id}" style="${u}">${$(I.job)}</select></td>
              <td style="padding:5px"><select class="tv-field" data-field="job2" data-id="${I.id}" style="${u}">${S(I.job2)}</select></td>
              <td style="padding:5px"><select class="tv-field" data-field="rarity" data-id="${I.id}" style="${u}">${o(I.rarity)}</select></td>
              <td style="padding:5px">
                <div style="display:flex;align-items:center;gap:5px">
                  <img src="https://flagsapi.com/${(I.country_code||"FR").slice(0,2).toUpperCase()}/flat/24.png" style="width:18px;height:13px;object-fit:cover;border-radius:2px;flex-shrink:0" onerror="this.style.display='none'">
                  <select class="tv-field tv-country" data-field="country_code" data-id="${I.id}" style="${u}">${y(I.country_code)}</select>
                </div>
              </td>
              <td style="padding:5px"><select class="tv-field" data-field="club_id" data-id="${I.id}" style="${u};min-width:130px">${d(I.club_id)}</select></td>
              <td style="padding:5px"><input class="tv-field" data-field="note_g" data-id="${I.id}" type="number" min="0" max="20" value="${I.note_g??0}" style="${w}"></td>
              <td style="padding:5px"><input class="tv-field" data-field="note_d" data-id="${I.id}" type="number" min="0" max="20" value="${I.note_d??0}" style="${w}"></td>
              <td style="padding:5px"><input class="tv-field" data-field="note_m" data-id="${I.id}" type="number" min="0" max="20" value="${I.note_m??0}" style="${w}"></td>
              <td style="padding:5px"><input class="tv-field" data-field="note_a" data-id="${I.id}" type="number" min="0" max="20" value="${I.note_a??0}" style="${w}"></td>
              <td style="padding:5px;text-align:center">
                ${B?`<img src="${B}" style="width:32px;height:32px;object-fit:cover;border-radius:6px" onerror="this.style.display='none'">`:'<span style="color:#ccc;font-size:11px">—</span>'}
              </td>
              <td style="padding:5px">
                <button class="btn-del-player-tv" data-del="${I.id}" style="width:24px;height:24px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:12px;cursor:pointer">✕</button>
              </td>
            </tr>`}).join("")}
        </tbody>
      </table>`;const m=new Set(["note_g","note_d","note_m","note_a"]);function k(I,B){I.style.transition="background-color .15s",I.style.backgroundColor=B?"#d4f4dd":"#f9d0d0",setTimeout(()=>{I.style.backgroundColor="#fff"},500)}async function A(I){const B=I.dataset.id,j=I.dataset.field;let R=I.value;if(m.has(j)){const F=Number(R);R=Number.isFinite(F)?Math.max(0,Math.min(20,F)):0,I.value=R}if((j==="club_id"||j==="job2")&&!R&&(R=null),(j==="firstname"||j==="surname_real")&&!R.trim()){k(I,!1),l("Ce champ ne peut pas être vide","error");return}const{error:N}=await L.from("players").update({[j]:R,updated_at:new Date().toISOString()}).eq("id",B);if(k(I,!N),N){l(N.message,"error");return}const O=t.find(F=>F.id===B);O&&(O[j]=R)}b.querySelectorAll("input.tv-field").forEach(I=>{I.addEventListener("blur",()=>A(I)),I.addEventListener("keydown",B=>{B.key==="Enter"&&I.blur()})}),b.querySelectorAll("select.tv-field").forEach(I=>{I.addEventListener("change",()=>A(I))}),b.querySelectorAll(".btn-del-player-tv").forEach(I=>{I.addEventListener("click",async()=>{if(!confirm("Supprimer ce joueur ?"))return;const{error:B}=await L.from("players").delete().eq("id",I.dataset.del);B?l(B.message,"error"):(l("Joueur supprimé ✅","success"),ae(e,a))})})}c(),document.getElementById("search-players").addEventListener("input",c),document.getElementById("filter-job").addEventListener("change",c),document.getElementById("filter-rarity").addEventListener("change",c),document.getElementById("sort-players").addEventListener("change",c),qe("club",e,c),qe("country",e,c),e.querySelectorAll(".view-mode-btn").forEach(i=>{i.addEventListener("click",()=>{r=i.dataset.view==="list"?"list":"card",e.querySelectorAll(".view-mode-btn").forEach(b=>{const d=b===i;b.style.background=d?"var(--green)":"transparent",b.style.color=d?"#fff":"var(--gray-600)"}),c()})}),(x=document.getElementById("bulk-cancel-btn"))==null||x.addEventListener("click",()=>{E.clear(),_(),c()}),(g=document.getElementById("bulk-delete-btn"))==null||g.addEventListener("click",async()=>{var $,S,o,y;if(!E.size||!confirm(`Supprimer ${E.size} joueur(s) ?`))return;const i=[...E],{error:b}=await L.from("players").delete().in("id",i);if(b){l(b.message,"error");return}l(`${i.length} joueur(s) supprimé(s) ✅`,"success"),E.clear();const d={search:(($=document.getElementById("search-players"))==null?void 0:$.value)||"",job:((S=document.getElementById("filter-job"))==null?void 0:S.value)||"",rarity:((o=document.getElementById("filter-rarity"))==null?void 0:o.value)||"",sort:((y=document.getElementById("sort-players"))==null?void 0:y.value)||"job",clubs:window.__playersClubFilter?[...window.__playersClubFilter]:[],countries:window.__playersCountryFilter?[...window.__playersCountryFilter]:[]};ae(e,a,d)}),document.getElementById("add-player-btn").addEventListener("click",()=>Ue(null,n,e,a)),document.getElementById("export-players-btn").addEventListener("click",()=>en(a.toast)),document.getElementById("import-players-btn").addEventListener("click",()=>{document.getElementById("import-players-file").click()}),document.getElementById("import-players-file").addEventListener("change",i=>{var d;const b=(d=i.target.files)==null?void 0:d[0];b&&tn(b,e,a),i.target.value=""})}const ut=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD","GE","AM","AZ","BY","LT","LV","EE","SK","SI","BA","MK","ME","XK","MD","IS","IE","LU","FI","CY","MT","LI","SM","MC","AD","VA","UZ","KZ","TM","TJ","KG","IL","IQ","JO","LB","SY","KW","QA","BH","OM","YE","AF","MN","LK","NP","MM","KH","LA","MY","SG","TW","HK","MO","BT","MV","NZ","FJ","PG","NC","VU","SB","WS","TO","BO","PY","VE","GY","SR","PA","CR","HN","GT","SV","NI","BZ","CU","JM","HT","DO","TT","BS","BB","GD","LC","VC","AG","DM","KN","ET","SD","SS","SO","ER","DJ","UG","RW","BI","TZ","MZ","ZM","ZW","MW","NA","BW","LS","SZ","MG","MU","LY","TD","NE","BF","MR","GM","GW","SL","LR","TG","BJ","GA","CG","CF","GQ","KM","CV","ST","SC"],mt={FR:"France",DE:"Allemagne",ES:"Espagne",PT:"Portugal",IT:"Italie",GB:"Angleterre",NL:"Pays-Bas",BE:"Belgique",DK:"Danemark",SE:"Suède",NO:"Norvège",PL:"Pologne",CH:"Suisse",AT:"Autriche",CZ:"Tchéquie",HR:"Croatie",RS:"Serbie",AL:"Albanie",TR:"Turquie",AR:"Argentine",BR:"Brésil",UY:"Uruguay",CO:"Colombie",MX:"Mexique",CL:"Chili",PE:"Pérou",EC:"Équateur",MA:"Maroc",DZ:"Algérie",TN:"Tunisie",EG:"Égypte",NG:"Nigeria",SN:"Sénégal",CI:"Côte d'Ivoire",CM:"Cameroun",GH:"Ghana",ML:"Mali",GN:"Guinée",CD:"RD Congo",AO:"Angola",ZA:"Afrique du Sud",KE:"Kenya",JP:"Japon",KR:"Corée du Sud",CN:"Chine",VN:"Vietnam",TH:"Thaïlande",ID:"Indonésie",PH:"Philippines",US:"États-Unis",CA:"Canada",AU:"Australie",RU:"Russie",UA:"Ukraine",GR:"Grèce",RO:"Roumanie",BG:"Bulgarie",IR:"Iran",SA:"Arabie Saoudite",AE:"Émirats Arabes Unis",IN:"Inde",PK:"Pakistan",BD:"Bangladesh",GE:"Géorgie",AM:"Arménie",AZ:"Azerbaïdjan",BY:"Biélorussie",LT:"Lituanie",LV:"Lettonie",EE:"Estonie",SK:"Slovaquie",SI:"Slovénie",BA:"Bosnie-Herzégovine",MK:"Macédoine du Nord",ME:"Monténégro",XK:"Kosovo",MD:"Moldavie",IS:"Islande",IE:"Irlande",LU:"Luxembourg",FI:"Finlande",CY:"Chypre",MT:"Malte",LI:"Liechtenstein",SM:"Saint-Marin",MC:"Monaco",AD:"Andorre",VA:"Vatican",UZ:"Ouzbékistan",KZ:"Kazakhstan",TM:"Turkménistan",TJ:"Tadjikistan",KG:"Kirghizistan",IL:"Israël",IQ:"Irak",JO:"Jordanie",LB:"Liban",SY:"Syrie",KW:"Koweït",QA:"Qatar",BH:"Bahreïn",OM:"Oman",YE:"Yémen",AF:"Afghanistan",MN:"Mongolie",LK:"Sri Lanka",NP:"Népal",MM:"Myanmar",KH:"Cambodge",LA:"Laos",MY:"Malaisie",SG:"Singapour",TW:"Taïwan",HK:"Hong Kong",MO:"Macao",BT:"Bhoutan",MV:"Maldives",NZ:"Nouvelle-Zélande",FJ:"Fidji",PG:"Papouasie-Nouvelle-Guinée",NC:"Nouvelle-Calédonie",VU:"Vanuatu",SB:"Îles Salomon",WS:"Samoa",TO:"Tonga",BO:"Bolivie",PY:"Paraguay",VE:"Venezuela",GY:"Guyana",SR:"Suriname",PA:"Panama",CR:"Costa Rica",HN:"Honduras",GT:"Guatemala",SV:"Salvador",NI:"Nicaragua",BZ:"Belize",CU:"Cuba",JM:"Jamaïque",HT:"Haïti",DO:"République Dominicaine",TT:"Trinité-et-Tobago",BS:"Bahamas",BB:"Barbade",GD:"Grenade",LC:"Sainte-Lucie",VC:"Saint-Vincent",AG:"Antigua-et-Barbuda",DM:"Dominique",KN:"Saint-Kitts-et-Nevis",ET:"Éthiopie",SD:"Soudan",SS:"Soudan du Sud",SO:"Somalie",ER:"Érythrée",DJ:"Djibouti",UG:"Ouganda",RW:"Rwanda",BI:"Burundi",TZ:"Tanzanie",MZ:"Mozambique",ZM:"Zambie",ZW:"Zimbabwe",MW:"Malawi",NA:"Namibie",BW:"Botswana",LS:"Lesotho",SZ:"Eswatini",MG:"Madagascar",MU:"Maurice",LY:"Libye",TD:"Tchad",NE:"Niger",BF:"Burkina Faso",MR:"Mauritanie",GM:"Gambie",GW:"Guinée-Bissau",SL:"Sierra Leone",LR:"Liberia",TG:"Togo",BJ:"Bénin",GA:"Gabon",CG:"Congo",CF:"Centrafrique",GQ:"Guinée Équatoriale",KM:"Comores",CV:"Cap-Vert",ST:"Sao Tomé-et-Principe",SC:"Seychelles"};async function Ue(e,t,n,a){const{toast:s,openModal:l,closeModal:f}=a,E=!!e,_=await Xt(),{data:r}=await L.from("players").select("face").not("face","is",null),c=new Set((r||[]).map(g=>g.face).filter(Boolean));e!=null&&e.face&&c.delete(e.face);const p='<option value="">— Club —</option>'+t.map(g=>`<option value="${g.id}" ${(e==null?void 0:e.club_id)===g.id?"selected":""}>${g.encoded_name}</option>`).join(""),v=e!=null&&e.face?e.face.split("/")[0]:"",x=Object.keys(_).map(g=>`<option value="${g}" ${v===g?"selected":""}>${g}</option>`).join("");l(E?`✏️ ${e.firstname} ${e.surname_real}`:"➕ Nouveau joueur",`<style>
      /* Sur mobile, l'aperçu (largeur fixe) + le formulaire (min-width:300px)
         dépassaient la largeur de l'écran (480px minimum requis), forçant un
         layout écrasé avec scroll horizontal. En dessous de 700px, on empile
         verticalement : aperçu centré en haut, formulaire pleine largeur. */
      @media (max-width: 700px) {
        .pm-layout { flex-direction: column !important; gap: 14px !important }
        .pm-preview-col { position: static !important; width: 100% !important }
        .pm-preview-col > div:last-child { display:flex; justify-content:center }
        .pm-form-col { min-width: 0 !important; width: 100% !important; gap: 14px !important }
        .pm-grid4 { grid-template-columns: 1fr 1fr !important }

        /* Regroupement des champs en "sections" façon app mobile : fond
           légèrement distinct, coins arrondis, séparation nette entre
           blocs — au lieu de tout empiler à plat sans repère visuel. */
        .pm-section {
          background: #f7f8fa; border-radius: 14px; padding: 14px;
          border: 1px solid #ececec;
        }
        .pm-section-title {
          font-size: 11px; font-weight: 800; color: #999; text-transform: uppercase;
          letter-spacing: 0.6px; margin-bottom: 10px;
        }

        /* Zones tactiles agrandies (16px = évite le zoom auto iOS au focus) */
        .pm-form-col input, .pm-form-col select {
          font-size: 16px !important; padding: 12px 12px !important;
          border-radius: 10px !important; min-height: 46px;
        }
        .pm-form-col label { font-size: 12.5px; font-weight: 700; color: #555 }

        /* Barre "Enregistrer" façon barre d'action fixe d'app mobile */
        #pm-error { padding: 0 2px }
        .pm-save-bar {
          margin: 4px -14px -14px !important; padding: 12px 14px !important;
          box-shadow: 0 -4px 14px rgba(0,0,0,0.08);
          border-top: 1px solid #eee;
        }
        .pm-save-bar button { padding: 15px !important; border-radius: 12px !important; font-size: 16px !important }

        /* Aperçu de carte mis en valeur, comme une vraie prévisualisation d'app */
        #card-preview { filter: drop-shadow(0 6px 16px rgba(0,0,0,0.18)) }
      }
    </style>
    <div class="pm-layout" style="display:flex;gap:20px;align-items:flex-start;flex-wrap:wrap">

      <!-- Colonne gauche : aperçu carte -->
      <div class="pm-preview-col" style="flex-shrink:0;position:sticky;top:0">
        <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;text-align:center">Aperçu</div>
        <div id="card-preview" style="min-width:160px"></div>
      </div>

      <!-- Colonne droite : formulaire -->
      <div class="pm-form-col" style="flex:1;min-width:300px;display:flex;flex-direction:column;gap:12px">

        <!-- Identité -->
        <div class="pm-section">
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
        <div class="form-group" style="margin-top:8px">
          <label>Lastname (réel) <span style="font-weight:400;color:#999">— champ libre, indépendant</span></label>
          <input id="pm-lastname-reel" value="${(e==null?void 0:e.lastname_reel)||""}" placeholder="Silva">
        </div>
        </div>

        <!-- Poste + Rareté + Pays -->
        <div class="pm-section">
        <div class="pm-grid4" style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px">
          <div class="form-group">
            <label>Poste 1</label>
            <select id="pm-job">
              ${["GK","DEF","MIL","ATT"].map(g=>`<option value="${g}" ${(e==null?void 0:e.job)===g?"selected":""}>${g}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Poste 2</label>
            <select id="pm-job2">
              <option value="">Aucun</option>
              ${["GK","DEF","MIL","ATT"].map(g=>`<option value="${g}" ${(e==null?void 0:e.job2)===g?"selected":""}>${g}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Rareté</label>
            <select id="pm-rarity">
              ${["normal","pepite","papyte","legende"].map(g=>`<option value="${g}" ${(e==null?void 0:e.rarity)===g?"selected":""}>${we[g]}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Pays</label>
            <select id="pm-country">
              ${ut.map(g=>`<option value="${g}" ${((e==null?void 0:e.country_code)||"FR")===g?"selected":""}>${mt[g]||g}</option>`).join("")}
            </select>
          </div>
        </div>

        <!-- Club + Prix -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
          <div class="form-group">
            <label>Club</label>
            <select id="pm-club">${p}</select>
          </div>
          <div class="form-group">
            <label>Prix vente (cr.)</label>
            <input id="pm-price" type="number" min="0" value="${(e==null?void 0:e.sell_price)||0}">
          </div>
        </div>
        </div>

        <!-- Notes -->
        <div class="pm-section" style="border-top:1px solid var(--gray-200);padding-top:10px">
          <div style="font-weight:700;font-size:13px;margin-bottom:8px">📊 Notes (0–20)</div>
          <div class="pm-grid4" style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px">
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([g,i,b])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${Qt[g]};font-weight:700">${g}</label>
                <input id="${i}" type="number" min="0" max="20" value="${(e==null?void 0:e[b])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
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
        <div class="pm-section" style="border-top:1px solid var(--gray-200);padding-top:10px">
          <div style="font-weight:700;font-size:13px;margin-bottom:8px">🧑 Physique</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
            <div class="form-group">
              <label>Continent</label>
              <select id="pm-folder">
                <option value="">— Choisir —</option>
                ${x}
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
        <div class="pm-save-bar" style="position:sticky;bottom:0;background:#fff;padding:8px 0 4px;margin-top:4px">
        <button class="btn btn-primary" id="pm-save" style="width:100%;padding:14px;font-size:15px">
          ${E?"💾 Enregistrer":"✅ Créer le joueur"}
        </button>
        </div>
      </div>
    </div>`),setTimeout(()=>{var S,o,y;let g=(e==null?void 0:e.face)||null;function i(){var D,P,H,V,J,Y,Z,je,De,Ne,Pe;const h=document.getElementById("card-preview");if(!h)return;const u=((D=document.getElementById("pm-fn"))==null?void 0:D.value)||"",w=(((P=document.getElementById("pm-real"))==null?void 0:P.value)||"").toUpperCase(),m=((H=document.getElementById("pm-job"))==null?void 0:H.value)||"ATT",k=((V=document.getElementById("pm-job2"))==null?void 0:V.value)||null,A=((J=document.getElementById("pm-rarity"))==null?void 0:J.value)||"normal",I=((Y=document.getElementById("pm-country"))==null?void 0:Y.value)||"FR",B=((Z=document.getElementById("pm-club"))==null?void 0:Z.value)||null,j=document.getElementById("pm-club"),R=j==null?void 0:j.options[j.selectedIndex];(R==null?void 0:R.text)!=="— Club —"&&(R==null||R.text);const N=parseInt((je=document.getElementById("pm-g"))==null?void 0:je.value)||0,O=parseInt((De=document.getElementById("pm-d"))==null?void 0:De.value)||0,F=parseInt((Ne=document.getElementById("pm-m"))==null?void 0:Ne.value)||0,C=parseInt((Pe=document.getElementById("pm-a"))==null?void 0:Pe.value)||0,z=t.find(Tt=>Tt.id===B),T={firstname:u||"Prénom",surname_real:w||"NOM",job:m,job2:k||null,rarity:A,country_code:I,club_id:B,note_g:N,note_d:O,note_m:F,note_a:C,face:g||null,clubs:z?{encoded_name:z.encoded_name,logo_url:z.logo_url}:null};h.innerHTML=re(T,{width:160});const M=document.getElementById("pm-minmax");M&&(M.style.display=["pepite","papyte"].includes(A)?"grid":"none")}function b(h){const u=document.getElementById("faces-grid"),w=document.getElementById("pm-face");if(!u||!w)return;const m=_[h]||[];if(console.log("[players] loadFacesGrid folder=",h,"files=",m.length,m.slice(0,5)),!m.length){w.innerHTML='<option value="">— Aucun visage disponible —</option>',u.innerHTML=`<p style="font-size:11px;color:#888;font-style:italic">Aucune image dans le dossier "${h}" du bucket Supabase.</p>`;return}const k=m.filter(A=>{const I=h+"/"+A;return I===g||!c.has(I)});w.innerHTML='<option value="">— Choisir un visage —</option>'+k.map(A=>{const I=h+"/"+A;return`<option value="${I}" ${g===I?"selected":""}>${A}</option>`}).join(""),u.innerHTML=k.map(A=>{const I=h+"/"+A,B=g===I,j=lt({face:I});return`<div data-face="${I}" style="cursor:pointer;border:2px solid ${B?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${j}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),u.querySelectorAll("[data-face]").forEach(A=>{A.addEventListener("click",()=>{g=A.dataset.face;const I=document.getElementById("pm-face");I&&(I.value=g),u.querySelectorAll("[data-face]").forEach(B=>{B.style.border=`2px solid ${B.dataset.face===g?"#4fc3f7":"transparent"}`}),i()})})}const d=e!=null&&e.face?e.face.split("/")[0]:"";d&&_[d]&&(document.getElementById("pm-folder").value=d,b(d)),(S=document.getElementById("pm-folder"))==null||S.addEventListener("change",h=>{b(h.target.value)}),(o=document.getElementById("pm-face"))==null||o.addEventListener("change",h=>{g=h.target.value||null,i()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach(h=>{var u,w;(u=document.getElementById(h))==null||u.addEventListener("input",i),(w=document.getElementById(h))==null||w.addEventListener("change",i)}),(y=document.getElementById("pm-save"))==null||y.addEventListener("click",()=>rn(e,E,g,n,a)),i()},50)}function on(e){const t=n=>{var a;return(a=document.getElementById(n))==null?void 0:a.value};return{firstname:(t("pm-fn")||"").trim(),surname_real:(t("pm-real")||"").trim()||"JOUEUR",lastname_reel:(t("pm-lastname-reel")||"").trim()||null,country_code:t("pm-country")||"FR",club_id:t("pm-club")||null,job:t("pm-job")||"ATT",job2:t("pm-job2")||null,rarity:t("pm-rarity")||"normal",note_g:parseInt(t("pm-g"))||0,note_d:parseInt(t("pm-d"))||0,note_m:parseInt(t("pm-m"))||0,note_a:parseInt(t("pm-a"))||0,note_min:parseInt(t("pm-nmin"))||null,note_max:parseInt(t("pm-nmax"))||null,sell_price:parseInt(t("pm-price"))||0,face:e||null,ethnie:t("pm-folder")||null,is_active:!0}}async function rn(e,t,n,a,s){var x,g,i,b;const{toast:l,closeModal:f}=s,E=document.getElementById("pm-error"),_=document.getElementById("pm-save"),r=on(n);if(!r.firstname){E.textContent="Le prénom est requis.";return}if(!r.surname_real){E.textContent="Le nom est requis.";return}_.disabled=!0,_.textContent="Enregistrement…";const c=r,{error:p}=t?await L.from("players").update({...c,updated_at:new Date().toISOString()}).eq("id",e.id):await L.from("players").insert(c);if(p){E.textContent=p.message,_.disabled=!1,_.textContent=t?"💾 Enregistrer":"✅ Créer le joueur";return}l(t?"Joueur modifié ✅":"Joueur créé ✅","success"),f();const v={search:((x=document.getElementById("search-players"))==null?void 0:x.value)||"",job:((g=document.getElementById("filter-job"))==null?void 0:g.value)||"",rarity:((i=document.getElementById("filter-rarity"))==null?void 0:i.value)||"",sort:((b=document.getElementById("sort-players"))==null?void 0:b.value)||"job",clubs:window.__playersClubFilter?[...window.__playersClubFilter]:[],countries:window.__playersCountryFilter?[...window.__playersCountryFilter]:[]};ae(a,s,v)}const ln={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},gt=["rase","court","milong","long"];function sn(e){const t=Ce(e);if(t==="noir")return"noir";if(t==="typ")return Math.random()<.9?"noir":"marron";if(t==="metisse")return Math.random()<.6?"noir":"marron";const n=Math.random();return n<.35?"blond":n<.75?"marron":"noir"}function dn(e){return Math.random()<.05?"chauve":sn(e)}const Be=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function Ce(e){return ln[e]||"blanc"}function ft(e){return dn(e)}function te(e,t){return Math.floor(Math.random()*(t-e+1))+e}function X(e){return e[Math.floor(Math.random()*e.length)]}function yt(e){const t=Be.filter(n=>n!==e);return X(t)}function $e(e){const t=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","GR","RO","BG","UA","RU"],n=["MA","DZ","TN","EG","LY"],a=["NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","TZ","UG","ET"],s=["JP","KR","CN","VN","TH","ID","PH","IN","PK","BD","SA","AE","IR"];return t.includes(e)||["AR","UY","CL","PE","EC","CO","MX","BR"].includes(e)?"Europeans":n.includes(e)?"North Africans":a.includes(e)?"Africans":s.includes(e)?"Asians":"Europeans"}const cn=[{min:1,max:4,pct:55},{min:5,max:10,pct:20},{min:11,max:14,pct:10},{min:15,max:17,pct:10},{min:18,max:20,pct:5}];function bt(){const e=Math.random()*100;let t=0;for(const n of cn)if(t+=n.pct,e<t)return te(n.min,n.max);return te(1,4)}function pn(){const e=Array.from({length:20},(t,n)=>n);return e.sort(()=>Math.random()-.5),new Set(e.slice(0,10))}let ue=null;function un(e,t){return e&&(ue||(ue=pn()),ue.has(t))?te(15,20):bt()}const ye={FR:{first:["Lucas","Tom","Hugo","Théo","Antoine","Kylian","Rayan","Axel","Paul","Enzo","Léo","Mathis","Nathan","Alexis","Ethan","Maxime","Julien","Baptiste","Nicolas","Pierre","Clément","Adrien","Valentin","Dylan","Loïc","Quentin","Florian","Kevin","Corentin","Raphaël"],last:["Martin","Bernard","Petit","Dupont","Moreau","Laurent","Robert","Michel","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard","Bonnet","Rousseau","Fontaine","Chevalier","Blanc","Garnier","Boyer","Gauthier","Garcia","Perrin","Robin","Clément","Morin","Nicolas","Henry","Lemaire","Noël","Dufour","Meunier","Brun","Blanchard","Giraud","Joly","Rivière","Brunet"]},ES:{first:["Carlos","Miguel","Javier","Alejandro","Sergio","David","Diego","Pablo","Álvaro","Marcos","Adrián","Rubén","Iker","Raúl","Fernando","Roberto","Víctor","Iván","Gonzalo","Antonio","Manuel","Jesús","Josué","Rodrigo","Cristian","Héctor","Óscar","Mario","Daniel","Jorge"],last:["García","Rodríguez","Martínez","López","Sánchez","González","Pérez","Hernández","Jiménez","Díaz","Torres","Ramírez","Flores","Rivera","Gómez","Morales","Álvarez","Romero","Herrera","Medina","Aguilar","Vargas","Guzmán","Muñoz","Salazar","Soto","Contreras","Rojas","Ramos","Ortiz"]},PT:{first:["João","Pedro","Diogo","Rúben","Bruno","Tiago","André","Ricardo","Luís","Gonçalo","Nuno","Mário","Fábio","Rui","Miguel","Sérgio","Hugo","Filipe","Paulo","Vítor"],last:["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Carvalho","Gomes","Ribeiro","Araújo","Barbosa","Cardoso","Correia","Teixeira","Machado","Vieira","Monteiro","Cunha","Pinto","Melo","Barros","Freitas","Fonseca","Andrade","Castro","Neves","Figueiredo","Duarte"]},BR:{first:["Gabriel","Lucas","Mateus","Gustavo","Felipe","Rodrigo","Thiago","Rafael","Bruno","Diego","Leonardo","Eduardo","Victor","Pedro","Carlos","Alexandre","André","Paulo","Danilo","Marcelo"],last:["Silva","Santos","Oliveira","Souza","Lima","Ferreira","Costa","Nascimento","Alves","Pereira","Rodrigues","Almeida","Nunes","Melo","Barbosa","Rocha","Brito","Castro","Carvalho","Gomes","Lopes","Ramos","Mendes","Cavalcanti","Batista","Azevedo","Campos","Freitas","Reis","Andrade"]},AR:{first:["Lionel","Sergio","Rodrigo","Nicolás","Ezequiel","Gonzalo","Federico","Mauro","Pablo","Diego","Lucas","Matías","Alejandro","Maximiliano","Emiliano","Marcos","Lautaro","Ángel","Leandro","Julián"],last:["González","Rodríguez","Martínez","García","López","Pérez","Sánchez","Romero","Torres","Flores","Díaz","Gómez","Alvarez","Ruiz","Castro","Herrera","Cabrera","Medina","Ferreyra","Suárez"]},IT:{first:["Marco","Luca","Alessandro","Matteo","Davide","Andrea","Francesco","Federico","Lorenzo","Riccardo","Stefano","Simone","Roberto","Nicola","Giovanni","Antonio","Emanuele","Daniele","Alberto","Giorgio"],last:["Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Ricci","Marino","Greco","Bruno","Gallo","Conti","De Luca","Mancini","Giordano","Rizzo","Lombardi","Moretti","Fontana","Rinaldi"]},DE:{first:["Lukas","Max","Jonas","Florian","Tobias","Stefan","Markus","Sebastian","Niklas","Leon","Tim","Felix","Alexander","Philipp","Christian","Thomas","Michael","Jan","Moritz","Fabian"],last:["Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Wolf","Schröder","Neumann","Schwarz","Zimmermann","Braun","Krüger","Hofmann","Wagner","Becker","Koch","Lehmann","Kaiser"]},GB:{first:["James","Harry","Oliver","Jack","George","Charlie","William","Thomas","Alfie","Edward","Ryan","Liam","Noah","Ethan","Kyle","Jordan","Callum","Aaron","Declan","Connor"],last:["Smith","Jones","Williams","Brown","Taylor","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Walker","Wright","Robinson","White","Thompson","Hughes","Edwards","Green","Hall"]},MA:{first:["Yassine","Karim","Mehdi","Amine","Hamza","Bilal","Soufiane","Rachid","Omar","Mohammed","Zakaria","Ilyas","Ayoub","Saad","Khalid","Adil","Tarik","Hicham","Reda","Nabil"],last:["Benali","Amrani","Bouazza","Cherif","Haddad","Meziane","Belkacem","Rahmani","Saidi","Zidane","Belhadj","Tazi","Idrissi","Alaoui","Bennani","Fassi","Lahlou","Naciri","Tahiri","Zniber"]},DZ:{first:["Yacine","Riyad","Sofiane","Haris","Adem","Islam","Bilal","Omar","Nassim","Mehdi","Ryad","Zinedine","Youssef","Farid","Karim","Mourad","Walid","Anes","Ferhat","Djamel"],last:["Amrouche","Boudiaf","Cherki","Guessab","Hamdi","Jaber","Lakhal","Mahjoub","Rezki","Sahnoun","Talbi","Zerrouki","Achour","Bakri","Chaouch","Djaballah","Ferhat","Gacem","Khaldi","Larbi"]},SN:{first:["Sadio","Ismaïla","Cheikhou","Gana","Famara","Mbaye","Pape","Aliou","Moussa","Sidy","Idrissa","Lamine","Bamba","Fallou","Abdou","Diallo","Mamadou","Souleymane","Oumar","Cheikh"],last:["Diallo","Traoré","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Ndiaye","Sow","Cissé","Fofana","Keita","Sylla","Kane","Diarra","Sanogo","Baldé","Kouyaté"]},CI:{first:["Didier","Wilfried","Serge","Jonathan","Franck","Maxwel","Salomon","Gervinho","Nicolas","Maxime","Ismael","Romaric","Abdul","Cheick","Arouna","Kolo","Yaya","Geoffroy","Siaka","Adama"],last:["Drogba","Zaha","Gnagnon","Koné","Touré","Bamba","Diomandé","Konaté","Coulibaly","Fofana","Traoré","Doumbia","Sanogo","Diabaté","Kalou","Bakayoko","Gradel","Seri","Aurier","Haller"]},CM:{first:["Samuel","Alex","Karl","Fabrice","Cédric","Nicolas","Georges","André","Joël","Roger","François","Jean","Patrick","Thierry","Eric","Benjamin","Aristide","Clinton","Clinton","Stéphane"],last:["Eto'o","Song","Choupo-Moting","Aboubakar","Bassogog","Kunde","Toko","Nkoudou","Ngadeu","Oyongo","Fai","Zambo","Mokoena","Ekambi","Tchamba","Mbida","Biya","Kameni","Meyong","Webo"]},NG:{first:["Kelechi","Ahmed","Victor","John","Emmanuel","Samuel","Moses","Ola","Chukwuemeka","Odion","Sunday","Chidi","Nnamdi","Chisom","Tunde","Emeka","Obinna","Uchenna","Ifeanyi","Segun"],last:["Osimhen","Iheanacho","Musa","Onyekuru","Iwobi","Ndidi","Nwankwo","Obi","Mikel","Martins","Okocha","Yekini","Amunike","Babangida","Fash","Lawal","Onuoha","Taiwo","Ayodele","Ameobi"]},JP:{first:["Ryota","Kenji","Hiroshi","Takumi","Yuto","Daichi","Shinji","Makoto","Koji","Naoki","Yuya","Shoya","Ryo","Shu","Atsuto","Masato","Hotaru","Genki","Ko","Ritsu"],last:["Nakamura","Tanaka","Suzuki","Sato","Yamamoto","Watanabe","Ito","Yamada","Saito","Matsumoto","Inoue","Kimura","Hayashi","Shimizu","Yamazaki","Mori","Abe","Ikeda","Kato","Honda"]},KR:{first:["Heung","Son","Ji","Sung","Jae","Young","Kang","Hyun","Woo","Tae","Seung","Min","Jun","Dong","Chang","Sang","Yo","Hee","Jin","Bum"],last:["Kim","Park","Lee","Choi","Jung","Kang","Cho","Yoon","Lim","Oh","Han","Seo","Kwon","Hwang","Ahn","Yang","Shin","Yoo","Jang","Song"]},MX:{first:["Carlos","Hirving","Andrés","Javier","Miguel","Raúl","Héctor","Diego","Jorge","Luis","Rodolfo","Erick","Jonathan","Néstor","Tecatito","Chicharito","Oswaldo","Oribe","Uriel","Giovanni"],last:["Hernández","Lozano","Guardado","Vela","Morales","Jiménez","Reyes","Corona","Herrera","Rodríguez","Ochoa","Chicharito","Flores","Domínguez","Araujo","Álvarez","Pineda","Sánchez","Antuna","Meza"]},_DEFAULT_EUROPE:{first:["Stefan","Ivan","Luca","Marco","Andrei","Cristian","Bogdan","Mircea","Adrian","Florin","Dušan","Aleksandar","Nikola","Nemanja","Marko","Filip","Milan","Branislav","Radomir","Dejan"],last:["Popescu","Ionescu","Stan","Marin","Stoica","Popa","Radu","Constantin","Barbu","Dobre","Petrović","Marković","Nikolić","Jovanović","Popović","Stanković","Đorđević","Lukić","Simić","Ilić"]},_DEFAULT_AFRIQUE:{first:["Mamadou","Ibrahima","Moussa","Seydou","Boubacar","Oumar","Modibo","Adama","Bakary","Abdoulaye","Lamine","Ousmane","Sekou","Demba","Tidiane","Amadou","Issiaka","Siaka","Fode","Samba"],last:["Diallo","Traoré","Coulibaly","Koné","Doumbia","Kouyaté","Bah","Konaté","Touré","Camara","Sylla","Keita","Diakité","Sangaré","Sanou","Sidibé","Bathily","Niakaté","Dioumassi","Sissoko"]},_DEFAULT_ASIE:{first:["Wei","Ming","Jae","Van","Duc","Sorn","Ali","Hassan","Reza","Arman","Yusuf","Tariq","Faris","Khalid","Saad","Rashid","Nasser","Walid","Ziad","Adel"],last:["Zhang","Wang","Liu","Chen","Yang","Huang","Zhou","Wu","Xu","Sun","Al-Rashidi","Al-Dosari","Al-Harthi","Al-Balushi","Al-Farsi","Al-Shamsi","Al-Neyadi","Al-Breiki","Al-Hammadi","Al-Mansouri"]},_DEFAULT_AMERIQUE:{first:["James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Marcus","Jordan","Andre","Devonte","Malik","Tyrone","Jamal","Darius","DeShawn","Brandon","Cody"],last:["Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Taylor","Anderson","Jackson","White","Harris","Clark","Lewis","Walker","Hall","Allen","Young","King"]}},mn={FR:"FR",BE:"FR",CH:"FR",MC:"FR",LU:"FR",ES:"ES",MX:"MX",CO:"ES",VE:"ES",PE:"ES",CL:"ES",EC:"ES",UY:"ES",PY:"ES",BO:"ES",CR:"ES",PA:"ES",HN:"ES",GT:"ES",SV:"ES",NI:"ES",DO:"ES",CU:"ES",PT:"PT",AO:"PT",MZ:"PT",CV:"PT",BR:"BR",AR:"AR",IT:"IT",SM:"IT",DE:"DE",AT:"DE",GB:"GB",IE:"GB",AU:"GB",NZ:"GB",CA:"GB",MA:"MA",TN:"DZ",LY:"DZ",DZ:"DZ",SN:"SN",ML:"SN",GN:"SN",GW:"SN",GM:"SN",MR:"SN",CI:"CI",BF:"CI",TG:"CI",BJ:"CI",GH:"CI",CM:"CM",GA:"CM",CG:"CM",CD:"CM",NG:"NG",JP:"JP",KR:"KR",MX:"MX",PL:"_DEFAULT_EUROPE",CZ:"_DEFAULT_EUROPE",SK:"_DEFAULT_EUROPE",HU:"_DEFAULT_EUROPE",HR:"_DEFAULT_EUROPE",RS:"_DEFAULT_EUROPE",SI:"_DEFAULT_EUROPE",RO:"_DEFAULT_EUROPE",BG:"_DEFAULT_EUROPE",GR:"_DEFAULT_EUROPE",TR:"_DEFAULT_EUROPE",RU:"_DEFAULT_EUROPE",UA:"_DEFAULT_EUROPE",NL:"_DEFAULT_EUROPE",DK:"_DEFAULT_EUROPE",SE:"_DEFAULT_EUROPE",NO:"_DEFAULT_EUROPE",FI:"_DEFAULT_EUROPE",AL:"_DEFAULT_EUROPE",EG:"_DEFAULT_AFRIQUE",ZA:"_DEFAULT_AFRIQUE",KE:"_DEFAULT_AFRIQUE",ET:"_DEFAULT_AFRIQUE",TZ:"_DEFAULT_AFRIQUE",UG:"_DEFAULT_AFRIQUE",CN:"_DEFAULT_ASIE",VN:"_DEFAULT_ASIE",TH:"_DEFAULT_ASIE",ID:"_DEFAULT_ASIE",PH:"_DEFAULT_ASIE",IN:"_DEFAULT_ASIE",PK:"_DEFAULT_ASIE",BD:"_DEFAULT_ASIE",IR:"_DEFAULT_ASIE",SA:"_DEFAULT_ASIE",AE:"_DEFAULT_ASIE",QA:"_DEFAULT_ASIE",KW:"_DEFAULT_ASIE",IQ:"_DEFAULT_ASIE",SY:"_DEFAULT_ASIE",JO:"_DEFAULT_ASIE",US:"_DEFAULT_AMERIQUE"};function vt(e){return mn[e]||"_DEFAULT_EUROPE"}function xt(e){const t=vt(e),n=(ye[t]||ye._DEFAULT_EUROPE).first;return X(n)}function ht(e){const t=vt(e);return(ye[t]||ye._DEFAULT_EUROPE).last}function gn(e,t,n=new Set,a=!1){const s=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],l=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],f=new Set(l.sort(()=>Math.random()-.5).slice(0,4)),E=[...l].sort(()=>Math.random()-.5),_=new Set(E.slice(0,2)),r=new Set(E.slice(2,4)),c=10,p=s.map((g,i)=>i<c);for(let g=p.length-1;g>0;g--){const i=Math.floor(Math.random()*(g+1));[p[g],p[i]]=[p[i],p[g]]}const v=new Set;function x(g){const i=ht(g),b=i.filter(o=>!v.has(o)&&!n.has(o)),d=b.length?b:i.filter(o=>!v.has(o)),$=d.length?d:i,S=X($);return v.add(S),S}return s.map((g,i)=>{const b=p[i]?t:yt(t),d=Ce(b),$=ft(b),S=X(gt),o=_.has(i)?"pepite":r.has(i)?"papyte":"normal",y=o==="pepite"?te(10,15):o==="papyte"?te(15,20):un(a,i),h=f.has(i),u=h?Math.max(0,y-2):0;let w=0,m=0,k=0,A=0,I=null;g==="GK"?w=y:g==="DEF"?(m=y,h&&(k=u,I="MIL")):g==="ATT"?(A=y,h&&(k=u,I="MIL")):(k=y,h&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(m=u,I="DEF"):(A=u,I="ATT")));const B=x(b);return{job:g,job2:I,firstname:xt(b),surname_real:B,country_code:b,club_id:e,note_g:w,note_d:m,note_m:k,note_a:A,skin:d,hair:$,hair_length:S,rarity:o,sell_price:0,ethnie:$e(b),_ethnie:$e(b)}})}async function Et(e,t,n,a=!1){ue=null;const{data:s}=await L.from("players").select("surname_real").not("surname_real","is",null),l=new Set((s||[]).map(g=>g.surname_real).filter(Boolean)),f=gn(e,t,l,a),{data:E}=await L.from("players").select("face").not("face","is",null),_=new Set((E||[]).map(g=>g.face).filter(Boolean)),r=new Set;for(const g of f){const i=await st(g.country_code,new Set([..._,...r]));i&&(g.face=i,r.add(i)),delete g._ethnie}const{data:c,error:p}=await L.from("players").insert(f).select("id");if(p){console.error("[GenSquad] Erreur batch insert:",p.message,p.details),n("Erreur: "+p.message,"error");return}const v=(c||[]).map(g=>({card_type:"player",player_id:g.id}));if(v.length){const{error:g}=await L.from("cards").insert(v);g&&console.warn("[GenSquad] Erreur cartes:",g.message)}const x=(c==null?void 0:c.length)||0;console.log("[GenSquad] Créés:",x,"/",f.length),x>0?n(`${x} joueurs générés ✅`,"success"):n("Erreur génération joueurs","error")}function _t(e){return{style:e.kit_style||q.style,color1:e.kit_color1||q.color1,color2:e.kit_color2||q.color2,color3:e.kit_color3||q.color3,shorts:e.kit_shorts||q.shorts,socks:e.kit_socks||q.socks}}let me=[];async function fn(e,t){await xe(e,t)}async function xe(e,t){const[{data:n,error:a},{data:s}]=await Promise.all([L.from("clubs").select("*").order("real_name"),L.from("players").select("club_id")]);if(a){e.innerHTML=`<p style="color:red">${a.message}</p>`;return}me=n||[];const l={};(s||[]).forEach(f=>{l[f.club_id]=(l[f.club_id]||0)+1}),yn(e,t,l)}function yn(e,t,n={}){const{toast:a,openModal:s,closeModal:l}=t;e.innerHTML=`
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
    </div>`,f(me),document.getElementById("search-clubs").addEventListener("input",E=>{const _=E.target.value.toLowerCase();f(me.filter(r=>r.real_name.toLowerCase().includes(_)||r.encoded_name.toLowerCase().includes(_)))}),document.getElementById("add-club-btn").addEventListener("click",()=>He(null,e,t));function f(E){const _=document.getElementById("clubs-list");if(!E.length){_.innerHTML='<p style="color:var(--tile-fg-dim);padding:20px;text-align:center">Aucun club.</p>';return}const r={};E.forEach(v=>{const x=v.country_code||"—";r[x]||(r[x]=[]),r[x].push(v)});const c=Object.keys(r).sort(),p=v=>{const x=_t(v),g=v.logo_url?`<img src="${v.logo_url}" style="width:36px;height:36px;object-fit:contain;border-radius:8px;flex-shrink:0">`:`<div style="width:36px;height:36px;background:linear-gradient(135deg,${x.color1},${x.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:900;flex-shrink:0">${v.encoded_name.slice(0,3)}</div>`,i=n[v.id]||0;return`
        <div class="club-row" data-club-id="${v.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:10px;cursor:pointer;background:var(--tile-bg);border:1px solid var(--tile-border);transition:background .15s">
          ${g}
          <img src="https://flagsapi.com/${v.country_code}/flat/24.png" style="width:18px;height:13px;object-fit:cover;border-radius:2px;flex-shrink:0" onerror="this.style.display='none'">
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:12px;color:var(--tile-fg-on-page);font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v.encoded_name}</div>
            <div style="font-size:10px;color:${i===0?"#e67e22":"var(--tile-fg-dim)"}">${i===0?"⚠️ 0 joueur":`👥 ${i}`}</div>
          </div>
          <button class="btn-del-club" data-del="${v.id}"
            style="width:22px;height:22px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;flex-shrink:0"
            onclick="event.stopPropagation()">✕</button>
        </div>`};_.innerHTML=c.map(v=>`
      <div style="display:flex;align-items:center;gap:8px;padding:8px 4px 4px;margin-top:6px">
        ${v!=="—"?`<img src="https://flagsapi.com/${v}/flat/24.png" style="width:20px;height:15px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">`:'<span style="font-size:14px">🌍</span>'}
        <span style="font-size:11px;font-weight:900;color:var(--tile-fg-dim);letter-spacing:1px">${v}</span>
        <span style="font-size:11px;color:var(--tile-fg-dim);background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:10px;padding:1px 8px">${r[v].length}</span>
        <div style="flex:1;height:1px;background:var(--tile-border)"></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:4px">
        ${r[v].map(p).join("")}
      </div>
    `).join(""),_.querySelectorAll(".club-row").forEach(v=>{v.addEventListener("click",()=>{const x=me.find(g=>g.id===v.dataset.clubId);x&&He(x,e,t),_.querySelectorAll(".club-row").forEach(g=>g.style.background="var(--tile-bg)"),v.style.background="rgba(26,107,60,0.18)"})}),_.querySelectorAll(".btn-del-club").forEach(v=>{v.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:x}=await L.from("clubs").delete().eq("id",v.dataset.del);x?a(x.message,"error"):(a("Club supprimé","success"),xe(e,t))})})}}function bn(e){var R,N,O,F;const{openModal:t,closeModal:n}=e;let a=6;const s=36;function l(C){return new Array(C*C).fill("#ffffff")}let f=l(a),E="OP",_="#D4A017",r=50,c=0,p=0,v="",x="#ffffff",g=25,i=0,b=35,d=new Set,$=null;function S(){const C=s*a;let z="";for(let M=0;M<a;M++)for(let D=0;D<a;D++){const P=M*a+D;z+=`<rect x="${D*s}" y="${M*s}" width="${s}" height="${s}" fill="${f[P]}"/>`}const T=(M,D,P,H,V)=>{if(!M)return"";const J=C/2+H/100*C,Y=C/2+V/100*C,Z=P/100*C*(M.length>3?3/M.length:1);return`<text x="${J}" y="${Y}" text-anchor="middle" dominant-baseline="central"
        font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="${Z}"
        fill="${D}">${M}</text>`};return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${C} ${C}">
      ${z}
      ${T(E,_,r,c,p)}
      ${T(v,x,g,i,b)}
    </svg>`}function o(C){return"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(C)))}const y=(C,z,T,M,D,P,H)=>`
    <div style="background:#f7f7f7;border-radius:10px;padding:12px;display:flex;flex-direction:column;gap:8px">
      <div style="font-weight:700;font-size:12px;color:#333">${z}</div>
      <input id="flag-text${C}" maxlength="20" value="${T}" placeholder="${C===2?"Vide = désactivé":""}" style="font-weight:900">
      <div style="display:flex;align-items:center;gap:8px">
        <label style="margin:0;font-size:11px;white-space:nowrap">Couleur</label>
        <input type="color" id="flag-text${C}-color" value="${M}" style="width:40px;height:28px;padding:2px;cursor:pointer">
      </div>
      <div>
        <label style="font-size:10px">Taille (<span id="flag-size${C}-val">${D}</span>%)</label>
        <input type="range" id="flag-text${C}-size" min="5" max="120" value="${D}" style="width:100%">
      </div>
      <div>
        <label style="font-size:10px">Position H (<span id="flag-x${C}-val">${P}</span>)</label>
        <input type="range" id="flag-text${C}-x" min="-50" max="50" value="${P}" style="width:100%">
      </div>
      <div>
        <label style="font-size:10px">Position V (<span id="flag-y${C}-val">${H}</span>)</label>
        <input type="range" id="flag-text${C}-y" min="-50" max="50" value="${H}" style="width:100%">
      </div>
    </div>
  `,h=`
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
            ${[6,9,12].map(C=>`<button type="button" class="btn ${C===a?"btn-primary":"btn-ghost"} btn-sm flag-grid-size" data-n="${C}" style="flex:1;padding:6px 4px">${C}×${C}</button>`).join("")}
          </div>
        </div>
      </div>

      ${y(1,"TEXTE 1 (20 caractères max)",E,_,r,c,p)}
      ${y(2,"TEXTE 2 — optionnel (20 caractères max)",v,x,g,i,b)}
    </div>

    <div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;flex-wrap:wrap;gap:8px">
        <label style="margin:0;font-size:12px">Couleurs des ${a*a} carrés — clique un carré (Ctrl/Shift+clic pour en sélectionner plusieurs), puis Ctrl+C / Ctrl+V pour copier-coller la couleur sur toute la sélection</label>
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
  `;t(`🎨 Générer un logo (${a}×${a})`,h,`
    <button id="flag-cancel" class="btn btn-ghost">Annuler</button>
    <button id="flag-use" class="btn btn-primary">✅ Utiliser ce logo</button>
  `);function w(){const C=document.getElementById("flag-squares-grid");if(!C)return;const z=a>=12?30:a>=9?36:44;C.style.gridTemplateColumns=`repeat(${a}, ${z}px)`,C.innerHTML=f.map((T,M)=>`
      <div class="flag-square" data-i="${M}" style="width:${z}px;height:${z}px;border-radius:4px;background:${T};cursor:pointer;
        box-sizing:border-box;border:${d.has(M)?"3px solid #1A6B3C":"1px solid rgba(0,0,0,0.15)"}"></div>
    `).join(""),C.querySelectorAll(".flag-square").forEach(T=>{T.addEventListener("click",M=>{const D=parseInt(T.dataset.i);M.ctrlKey||M.metaKey||M.shiftKey?d.has(D)?d.delete(D):d.add(D):d=new Set([D]),w(),m()}),T.addEventListener("dblclick",()=>{const M=parseInt(T.dataset.i),D=document.createElement("input");D.type="color",D.value=f[M],D.style.position="fixed",D.style.opacity="0",document.body.appendChild(D),D.addEventListener("input",()=>{f[M]=D.value,w(),B()}),D.addEventListener("change",()=>D.remove()),D.click()})})}function m(){const C=document.getElementById("flag-copy-btn"),z=document.getElementById("flag-paste-btn");C.disabled=d.size===0,z.disabled=d.size===0||$===null}function k(){if(d.size===0)return;const C=[...d][0];$=f[C];const z=document.getElementById("flag-clipboard-preview"),T=document.getElementById("flag-clipboard-swatch");z&&(z.style.display="inline-flex"),T&&(T.style.background=$),m()}function A(){d.size===0||$===null||(d.forEach(C=>{f[C]=$}),w(),B())}(R=document.getElementById("flag-copy-btn"))==null||R.addEventListener("click",k),(N=document.getElementById("flag-paste-btn"))==null||N.addEventListener("click",A);function I(C){if(!document.getElementById("flag-squares-grid")){document.removeEventListener("keydown",I);return}!(C.ctrlKey||C.metaKey)||d.size===0||(C.key==="c"||C.key==="C"?(C.preventDefault(),k()):(C.key==="v"||C.key==="V")&&(C.preventDefault(),A()))}document.addEventListener("keydown",I),document.querySelectorAll(".flag-grid-size").forEach(C=>{C.addEventListener("click",()=>{const z=parseInt(C.dataset.n);if(z===a)return;a=z,f=l(a),d=new Set,$=null;const T=document.getElementById("flag-clipboard-preview");T&&(T.style.display="none"),w(),m(),B(),document.querySelectorAll(".flag-grid-size").forEach(M=>{M.classList.toggle("btn-primary",parseInt(M.dataset.n)===a),M.classList.toggle("btn-ghost",parseInt(M.dataset.n)!==a)})})});function B(){const C=document.getElementById("flag-preview");C&&(C.innerHTML=S())}w(),m(),B();function j(C){document.getElementById(`flag-text${C}`).addEventListener("input",z=>{const T=z.target.value.slice(0,20);C===1?E=T:v=T,B()}),document.getElementById(`flag-text${C}-color`).addEventListener("input",z=>{C===1?_=z.target.value:x=z.target.value,B()}),document.getElementById(`flag-text${C}-size`).addEventListener("input",z=>{const T=parseInt(z.target.value);C===1?r=T:g=T,document.getElementById(`flag-size${C}-val`).textContent=T,B()}),document.getElementById(`flag-text${C}-x`).addEventListener("input",z=>{const T=parseInt(z.target.value);C===1?c=T:i=T,document.getElementById(`flag-x${C}-val`).textContent=T,B()}),document.getElementById(`flag-text${C}-y`).addEventListener("input",z=>{const T=parseInt(z.target.value);C===1?p=T:b=T,document.getElementById(`flag-y${C}-val`).textContent=T,B()})}j(1),j(2),(O=document.getElementById("flag-cancel"))==null||O.addEventListener("click",()=>n()),(F=document.getElementById("flag-use"))==null||F.addEventListener("click",()=>{const C=o(S()),z=document.getElementById("m-logo-url-current");z&&(z.value=C);const T=document.getElementById("logo-preview");T&&(T.innerHTML=`<img src="${C}" style="width:100%;height:100%;object-fit:contain">`),n()})}async function He(e,t,n){var b,d,$,S,o,y,h;const{toast:a}=n,s=!!e,l=e?_t(e):{...q},f=document.getElementById("club-panel");if(!f)return;const E=Object.entries(Fe).map(([u,w])=>`<option value="${u}" ${l.style===u?"selected":""}>${w.label}</option>`).join(""),_=Be.map(u=>`<option value="${u}" ${((e==null?void 0:e.country_code)||"FR")===u?"selected":""}>${u}</option>`).join("");f.style.display="block",f.style.alignItems="",f.style.justifyContent="",f.innerHTML=`
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
              <select id="m-kit-style" style="width:100%">${E}</select>
            </div>
            ${[["Couleur 1","m-kit-color1",l.color1,!1],["Couleur 2","m-kit-color2",l.color2,!1],["Couleur 3","m-kit-color3",l.color3,!0],["Short","m-kit-shorts",l.shorts,!1],["Chaussettes","m-kit-socks",l.socks,!1]].map(([u,w,m,k])=>`
              <div class="form-group" id="wrap-${w}" ${k?'style="display:none"':""}>
                <label>${u}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${w}" value="${m||"#000000"}" style="width:38px;height:32px;padding:2px;border:1px solid var(--tile-border);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${w}-txt" value="${m||"#000000"}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
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
  `,(b=document.getElementById("m-logo-file"))==null||b.addEventListener("change",u=>{var k;const w=(k=u.target.files)==null?void 0:k[0];if(!w)return;const m=new FileReader;m.onload=()=>{document.getElementById("logo-preview").innerHTML=`<img src="${m.result}" style="width:100%;height:100%;object-fit:contain">`},m.readAsDataURL(w)}),(d=document.getElementById("m-open-flag-builder"))==null||d.addEventListener("click",()=>{bn(n)}),oe();function r(){var k,A;const u=((k=document.getElementById("m-kit-style"))==null?void 0:k.value)||"uni",w=((A=Fe[u])==null?void 0:A.colors)===3,m=document.getElementById("wrap-m-kit-color3");m&&(m.style.display=w?"":"none")}r(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(u=>{const w=document.getElementById(u),m=document.getElementById(u+"-txt");!w||!m||(w.addEventListener("input",()=>{m.value=w.value,oe()}),m.addEventListener("input",()=>{const k=m.value.trim();/^#[0-9a-fA-F]{6}$/.test(k)&&(w.value=k,oe())}),m.addEventListener("change",()=>{let k=m.value.trim();k.startsWith("#")||(k="#"+k),/^#[0-9a-fA-F]{6}$/.test(k)&&(w.value=k,m.value=k,oe())}))}),($=document.getElementById("m-kit-style"))==null||$.addEventListener("change",()=>{r(),oe()});const c=document.getElementById("m-real"),p=document.getElementById("m-encoded");function v(){if(!c||!p||p.value)return;const u=c.value.trim().split(/\s+/),w=u.length===1?u[0].toUpperCase().slice(0,6):u.filter(m=>m.length>2).map(m=>m[0].toUpperCase()).join("")||u[0].toUpperCase().slice(0,4);p.value=w}c==null||c.addEventListener("input",v),(S=document.getElementById("auto-encode-btn"))==null||S.addEventListener("click",()=>{p&&(p.value=""),v()}),(o=document.getElementById("m-save"))==null||o.addEventListener("click",()=>wn(e,s,t,n));const x=document.getElementById("m-gen-squad"),g=document.getElementById("m-gen-strong-label");function i(){if(g&&(g.style.display=x!=null&&x.checked?"flex":"none",!(x!=null&&x.checked))){const u=document.getElementById("m-gen-strong");u&&(u.checked=!1)}}x==null||x.addEventListener("change",i),i(),(y=document.getElementById("btn-gen-squad-panel"))==null||y.addEventListener("click",()=>{vn(e,n,t)}),(h=document.getElementById("btn-gen-one-player"))==null||h.addEventListener("click",()=>{hn(e,n)}),s&&Te(e.id)}async function Te(e){const{data:t}=await L.from("players").select("*, clubs(encoded_name, logo_url, kit_style, kit_color1, kit_color2, kit_color3, kit_shorts, kit_socks)").eq("club_id",e).order("surname_real"),n=document.getElementById("club-players-grid"),a=document.getElementById("club-players-count");if(a&&(a.textContent=(t||[]).length),!!n){if(!(t!=null&&t.length)){n.innerHTML='<div style="color:var(--tile-fg-dim);padding:20px;font-size:13px">Aucun joueur dans ce club.</div>';return}n.innerHTML=t.map(s=>re(s,{width:100})).join("")}}function vn(e,t,n){const{openModal:a,closeModal:s,toast:l}=t;a(`⚽ Générer — ${e.real_name}`,`<div style="display:flex;flex-direction:column;gap:14px">
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
    </div>`),setTimeout(()=>{var f,E;(f=document.getElementById("qg-cancel"))==null||f.addEventListener("click",()=>s()),(E=document.getElementById("qg-ok"))==null||E.addEventListener("click",async()=>{var r;const _=((r=document.getElementById("qg-strong"))==null?void 0:r.checked)??!1;s(),l("Génération en cours…","info"),await Et(e.id,e.country_code,l,_),l("Effectif généré ✅","success"),Te(e.id),xe(n,t)})},50)}const wt=["GK","DEF","MIL","ATT"],xn=[{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}];function hn(e,t){const{openModal:n,closeModal:a,toast:s}=t,l=Be.map(r=>`<option value="${r}">${r}</option>`).join(""),f=r=>wt.map(c=>`<option value="${c}" ${c===r?"selected":""}>${c}</option>`).join(""),E=`
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
            <select id="gen-one-job1">${f("MIL")}</select>
          </div>
          <div>
            <label>POSTE 2 (optionnel)</label>
            <select id="gen-one-job2">
              <option value="">— Aucun —</option>
              ${f(null)}
            </select>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label>RARETÉ</label>
            <select id="gen-one-rarity">
              ${xn.map(r=>`<option value="${r.value}">${r.label}</option>`).join("")}
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
  `;n(`➕ Générer un joueur — ${e.real_name}`,E,`
    <button id="gen-one-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gen-one-ok" class="btn btn-primary">➕ Générer</button>
  `),setTimeout(()=>{var r,c;document.querySelectorAll('input[name="gen-one-mode"]').forEach(p=>{p.addEventListener("change",()=>{document.getElementById("gen-one-custom-fields").style.display=p.value==="custom"&&p.checked?"flex":"none"})}),(r=document.getElementById("gen-one-cancel"))==null||r.addEventListener("click",()=>a()),(c=document.getElementById("gen-one-ok"))==null||c.addEventListener("click",async()=>{var g,i,b,d,$;const p=((g=document.querySelector('input[name="gen-one-mode"]:checked'))==null?void 0:g.value)||"random",v=document.getElementById("gen-one-ok");v.disabled=!0,v.textContent="⏳ Génération…";const x={};p==="custom"&&(x.job=((i=document.getElementById("gen-one-job1"))==null?void 0:i.value)||null,x.job2=((b=document.getElementById("gen-one-job2"))==null?void 0:b.value)||null,x.rarity=((d=document.getElementById("gen-one-rarity"))==null?void 0:d.value)||null,x.country=(($=document.getElementById("gen-one-country"))==null?void 0:$.value)||null);try{await En(e,x),s("Joueur généré ✅","success"),a(),Te(e.id)}catch(S){s("Erreur : "+S.message,"error"),v.disabled=!1,v.textContent="➕ Générer"}})},50)}async function En(e,t={}){const n=t.country||(Math.random()<.5?e.country_code:yt(e.country_code)),a=t.job||X(wt),s=t.job2||null,l=t.rarity||(()=>{const A=Math.random()*100;return A<1.5?"legende":A<3?"pepite":A<4.5?"papyte":"normal"})(),f=l==="pepite"?te(10,15):l==="papyte"?te(15,20):bt(),E=s?Math.max(0,f-2):0;let _=0,r=0,c=0,p=0;a==="GK"&&(_=f),a==="DEF"&&(r=f),a==="MIL"&&(c=f),a==="ATT"&&(p=f),s==="GK"&&(_=E),s==="DEF"&&(r=E),s==="MIL"&&(c=E),s==="ATT"&&(p=E);const v=Ce(n),x=ft(n),g=X(gt),{data:i}=await L.from("players").select("surname_real").not("surname_real","is",null),b=new Set((i||[]).map(A=>A.surname_real).filter(Boolean)),d=ht(n),$=d.filter(A=>!b.has(A)),S=X($.length?$:d),o={job:a,job2:s,firstname:xt(n),surname_real:S,country_code:n,club_id:e.id,note_g:_,note_d:r,note_m:c,note_a:p,skin:v,hair:x,hair_length:g,rarity:l,sell_price:0,ethnie:$e(n)},{data:y}=await L.from("players").select("face").not("face","is",null),h=new Set((y||[]).map(A=>A.face).filter(Boolean)),u=await st(n,h);u&&(o.face=u);const{data:w,error:m}=await L.from("players").insert(o).select("id").single();if(m)throw m;const{error:k}=await L.from("cards").insert({card_type:"player",player_id:w.id});k&&console.warn("[GenOnePlayer] Erreur carte:",k.message)}function $t(){var e,t,n,a,s,l;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((t=document.getElementById("m-kit-color1"))==null?void 0:t.value)||"#1A6B3C",color2:((n=document.getElementById("m-kit-color2"))==null?void 0:n.value)||"#ffffff",color3:((a=document.getElementById("m-kit-color3"))==null?void 0:a.value)||"#000000",shorts:((s=document.getElementById("m-kit-shorts"))==null?void 0:s.value)||"#111111",socks:((l=document.getElementById("m-kit-socks"))==null?void 0:l.value)||"#ffffff"}}function oe(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=jt($t(),"panel"))}async function _n(e,t){const n=(e.name.split(".").pop()||"png").toLowerCase(),a=`clubs/${t||"new"}-${Date.now()}.${n}`,{error:s}=await L.storage.from("assets").upload(a,e,{upsert:!0,cacheControl:"3600"});if(s)throw s;const{data:l}=L.storage.from("assets").getPublicUrl(a);return l.publicUrl}async function wn(e,t,n,a){var S,o,y,h,u,w,m,k,A;const{toast:s}=a,l=document.getElementById("m-error"),f=document.getElementById("m-save"),E=(S=document.getElementById("m-real"))==null?void 0:S.value.trim(),_=(o=document.getElementById("m-encoded"))==null?void 0:o.value.trim().toUpperCase(),r=(y=document.getElementById("m-country"))==null?void 0:y.value.trim().toUpperCase(),c=((u=(h=document.getElementById("m-logo-file"))==null?void 0:h.files)==null?void 0:u[0])||null,p=((w=document.getElementById("m-logo-url-current"))==null?void 0:w.value)||null,v=((m=document.getElementById("m-gen-stadium"))==null?void 0:m.checked)??!1,x=((k=document.getElementById("m-gen-squad"))==null?void 0:k.checked)??!1,g=((A=document.getElementById("m-gen-strong"))==null?void 0:A.checked)??!1,i=$t();if(!E){l.textContent="Le nom du club est requis.";return}if(!_){l.textContent="Le nom encodé est requis.";return}if(!r){l.textContent="Le pays est requis.";return}f.disabled=!0,f.textContent="Enregistrement…";let b=p;if(c)try{f.textContent="📤 Envoi du logo…",b=await _n(c,e==null?void 0:e.id)}catch(I){l.textContent="Erreur upload logo : "+I.message,f.disabled=!1,f.textContent=t?"💾 Enregistrer":"✅ Créer le club";return}const d={real_name:E,encoded_name:_,country_code:r,logo_url:b,kit_style:i.style,kit_color1:i.color1,kit_color2:i.color2,kit_color3:i.color3,kit_shorts:i.shorts,kit_socks:i.socks};let $=e==null?void 0:e.id;if(t){const{error:I}=await L.from("clubs").update(d).eq("id",$);if(I){l.textContent=I.message,f.disabled=!1,f.textContent="💾 Enregistrer";return}}else{const{data:I,error:B}=await L.from("clubs").insert(d).select().single();if(B){l.textContent=B.message,f.disabled=!1,f.textContent="✅ Créer le club";return}if($=I.id,v){f.textContent="🏟️ Création du stade…";const{data:j,error:R}=await L.from("stadium_definitions").insert({name:`Stade de ${E}`,club_id:$,country_code:null}).select().single();R?console.warn("[Stadium] Erreur def stade:",R.message):j&&await L.from("cards").insert({card_type:"stadium",stadium_id:j.id})}x&&(f.textContent="⚽ Génération des joueurs…",await Et($,r,s,g))}s(t?"Club modifié ✅":"Club créé ✅","success"),xe(n,a)}const $n=["normal","pepite","papyte","legende"],Ke=["GK","DEF","MIL","ATT"],In=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let ee={...U},ge=[];async function kn(e,{toast:t}){const{data:n}=await L.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");ge=n||[],ee={...U},e.innerHTML=Bn(ge),Sn(e,ge,t),K()}function Ln(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=ge.find(a=>String(a.id)===String(e));return t?{style:t.kit_style||q.style,color1:t.kit_color1||q.color1,color2:t.kit_color2||q.color2,shorts:t.kit_shorts||q.shorts,socks:t.kit_socks||q.socks}:{...q}}function K(){var c,p,v,x;const e=g=>{var i;return((i=document.getElementById(g))==null?void 0:i.value)||""},t={firstname:e("cb-firstname"),surname_real:e("cb-surname-real"),country_code:e("cb-country"),club_encoded_name:((p=(c=document.getElementById("cb-club"))==null?void 0:c.selectedOptions[0])==null?void 0:p.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=Ln(),a=document.getElementById("cb-club"),s=((x=(v=a==null?void 0:a.selectedOptions[0])==null?void 0:v.dataset)==null?void 0:x.logo)||null,l=dt(ee,n,120),f=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(l)}`,E=Ft(t,{portraitUrl:f,clubLogoUrl:s,showNotes:!0}),_=document.getElementById("card-preview");_&&(_.innerHTML=E);const r=document.getElementById("avatar-preview-wrap");r&&(r.innerHTML=l)}function It(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};ee={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function Sn(e,t,n){var s,l,f,E,_;e.querySelectorAll("input,select").forEach(r=>{r.addEventListener("input",K),r.addEventListener("change",K)});const a=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];a.forEach(r=>{var c;(c=document.getElementById(r))==null||c.addEventListener("change",()=>{It(),K()})}),(s=document.getElementById("cb-surname-real"))==null||s.addEventListener("input",K),(l=document.getElementById("cb-surname-enc"))==null||l.addEventListener("input",K),(f=document.getElementById("cb-club"))==null||f.addEventListener("change",K),(E=document.getElementById("btn-save-player"))==null||E.addEventListener("click",()=>An(n)),(_=document.getElementById("btn-reset"))==null||_.addEventListener("click",()=>{e.querySelectorAll("input").forEach(r=>r.value=""),e.querySelectorAll("select").forEach(r=>r.selectedIndex=0),ee={...U},a.forEach(r=>{const c=r.replace("av-",""),p=document.getElementById(r);p&&(p.value=U[c]||"")}),K()})}async function An(e){const t=l=>{var f;return((f=document.getElementById(l))==null?void 0:f.value)||""},n=t("cb-surname-real").trim();if(t("cb-surname-enc").trim(),!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}It();const a={firstname:t("cb-firstname").trim(),surname_real:n,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:ee,skin:ee.skin||"blanc",hair:ee.hairColor||"marron",hair_length:"court"},{error:s}=await L.from("players").insert(a);if(s){e("Erreur: "+s.message,"error");return}e(`✅ Joueur "${a.firstname} ${a.surname_real}" enregistré !`,"success")}function Bn(e){const t=In.map(([r,c])=>`<option value="${r}">${c} (${r})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(r=>`<option value="${r.id}" data-logo="${r.logo_url||""}">${r.encoded_name}</option>`).join(""),a=Ke.map(r=>`<option value="${r}">${r}</option>`).join(""),s='<option value="">Aucun</option>'+Ke.map(r=>`<option value="${r}">${r}</option>`).join(""),l=$n.map(r=>`<option value="${r}">${r.charAt(0).toUpperCase()+r.slice(1)}</option>`).join(""),f=(r,c,p)=>Object.entries(c).map(([v,x])=>`<option value="${v}" ${v===(p||"")?"selected":""}>${x.label}</option>`).join(""),E=Object.keys(Dt).map(r=>`<option value="${r}" ${r===U.skin?"selected":""}>${r.charAt(0).toUpperCase()+r.slice(1)}</option>`).join(""),_=Object.keys(Nt).map(r=>`<option value="${r}" ${r===U.hairColor?"selected":""}>${r.charAt(0).toUpperCase()+r.slice(1)}</option>`).join("");return`
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
          <div><label>Poste principal *</label><select id="cb-job">${a}</select></div>
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
            <div style="background:${Pt[r]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
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
              <select id="av-skin">${E}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${f("av-hair",Ot,U.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${_}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${f("av-eyebrows",Gt,U.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${f("av-eyes",qt,U.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${f("av-nose",Ut,U.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${f("av-mouth",Ht,U.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${f("av-beard",Kt,U.beard)}</select>
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
  `}const Cn=2*60*1e3;function ne(e){return e.last_seen?Date.now()-new Date(e.last_seen).getTime()<Cn:!1}async function Ie(e,{toast:t}){const[{data:n,error:a},{data:s},{data:l}]=await Promise.all([L.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws,last_seen").order("created_at",{ascending:!1}),L.rpc("admin_get_solo_progress"),L.rpc("admin_get_user_emails")]);if(a){e.innerHTML=`<p style="color:red">${a.message}</p>`;return}const f={};(s||[]).forEach(g=>{f[g.user_id]=g.unlocked_level});const E={};(l||[]).forEach(g=>{E[g.id]=g.email});const _=n||[];e.innerHTML=`
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
  `;function r(g){const i=document.getElementById("online-count");i&&(i.textContent=g.filter(ne).length)}function c(){const g=document.getElementById("search-users").value.toLowerCase(),i=document.getElementById("filter-online").checked;x(_.filter(b=>{var d;return(b.pseudo.toLowerCase().includes(g)||((d=b.club_name)==null?void 0:d.toLowerCase().includes(g)))&&(!i||ne(b))}))}x(_),r(_),document.getElementById("search-users").addEventListener("input",c),document.getElementById("filter-online").addEventListener("change",c);const p=setInterval(async()=>{const{data:g}=await L.from("users").select("id,last_seen");if(!g)return;const i={};g.forEach(b=>{i[b.id]=b.last_seen}),_.forEach(b=>{b.last_seen=i[b.id]??b.last_seen}),r(_),document.querySelectorAll("[data-online-dot]").forEach(b=>{const d=_.find($=>$.id===b.dataset.onlineDot);d&&(b.style.background=ne(d)?"#22c55e":"transparent")})},2e4),v=new MutationObserver(()=>{document.body.contains(e)||(clearInterval(p),v.disconnect())});v.observe(document.body,{childList:!0,subtree:!0});function x(g){document.getElementById("users-tbody").innerHTML=g.map(i=>{const b=i.mmr??1e3,d=i.mmr_deviation??350,$=i.placement_matches??0,S=ct(b),o=i.ranked_wins??0,y=i.ranked_losses??0,h=i.ranked_draws??0,u=o+y+h,w=u>0?Math.round(o/u*100):null,m=$<10,k=d<80?"#1A6B3C":d<150?"#e67e22":"#bb2020";return`
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:6px">
              <span data-online-dot="${i.id}" title="${ne(i)?"En ligne":"Hors ligne"}"
                style="width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${ne(i)?"#22c55e":"transparent"};border:1px solid ${ne(i)?"#22c55e":"var(--gray-300,#ccc)"}"></span>
              <div style="font-weight:700">${i.pseudo}</div>
            </div>
            <div style="font-size:11px;color:var(--gray-600);margin-left:14px">${i.club_name||"—"}</div>
            <div style="font-size:10.5px;color:var(--gray-600);margin-left:14px">${E[i.id]||"—"}</div>
          </td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:6px">
              <span id="credits-display-${i.id}">${(i.credits||0).toLocaleString("fr")} cr.</span>
              <button class="btn-edit-credits" data-user="${i.id}" data-current="${i.credits||0}"
                style="background:none;border:none;cursor:pointer;font-size:12px;padding:0;opacity:.7" title="Modifier les crédits">✏️</button>
            </div>
            <div style="color:var(--gray-600)">🎮 Solo max : niv. ${f[i.id]??1}</div>
          </td>
          <td style="font-size:12px">${i.wins}V / ${i.draws}N / ${i.losses}D</td>
          <td style="font-size:12px">🥇${i.trophies_top1} 🥈${i.trophies_top2} 🥉${i.trophies_top3}</td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:5px">
              <span style="font-size:16px">${S.emoji}</span>
              <span style="font-weight:700;color:${S.color}">${S.label}</span>
            </div>
            ${m?`<div style="font-size:10px;color:#e67e22">${$}/10 placement${$<10?` (${10-$} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${o}V ${h}N ${y}D${w!==null?` · ${w}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${b}</div>
            <div style="font-size:10px;color:${k}">RD ±${Math.round(d)}</div>
          </td>
          <td>
            ${i.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td style="display:flex;gap:4px">
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${i.id}" data-is-admin="${i.is_admin}">
              ${i.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
            <button class="btn btn-ghost btn-sm" data-view-cards="${i.id}" data-pseudo="${i.pseudo}"
              title="Voir toutes les cartes et équipes de ce Manager">🃏</button>
            <button class="btn btn-ghost btn-sm" data-delete-manager="${i.id}" data-pseudo="${i.pseudo}"
              style="color:var(--red,#bb2020);" title="Supprimer ce Manager et TOUT ce qui le lie">
              🗑️
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll(".btn-edit-credits").forEach(i=>{i.addEventListener("click",async()=>{const b=i.dataset.user,d=Number(i.dataset.current)||0,$=prompt("Nouveau solde de crédits :",d);if($===null)return;const S=parseInt($.replace(/\s/g,""),10);if(isNaN(S)||S<0){t("Valeur invalide","error");return}const{data:o,error:y}=await L.rpc("admin_update_user_credits",{p_user_id:b,p_new_credits:S});if(y){t(y.message,"error");return}if(!(o!=null&&o.success)){t((o==null?void 0:o.error)||"Échec de la mise à jour","error");return}t("Crédits mis à jour ✅","success");const h=document.getElementById(`credits-display-${b}`);h&&(h.textContent=`${S.toLocaleString("fr")} cr.`),i.dataset.current=S})}),document.querySelectorAll("[data-toggle-admin]").forEach(i=>{i.addEventListener("click",async()=>{const b=i.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${b?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:d}=await L.from("users").update({is_admin:b}).eq("id",i.dataset.toggleAdmin);d?t(d.message,"error"):(t("Rôle mis à jour ✅","success"),Ie(e,{toast:t}))})}),document.querySelectorAll("[data-view-cards]").forEach(i=>{i.addEventListener("click",()=>{Rn(i.dataset.viewCards,i.dataset.pseudo)})}),document.querySelectorAll("[data-delete-manager]").forEach(i=>{i.addEventListener("click",async()=>{const b=i.dataset.deleteManager,d=i.dataset.pseudo;if(!confirm(`⚠️ ATTENTION: Supprimer le Manager "${d}" supprimera DÉFINITIVEMENT:
- Tous ses decks
- Toutes ses cartes
- Tous ses matchs
- Tous ses résultats ranked
- Tout ce qui le lie en base

Continuer ?`)||!confirm("Êtes-vous vraiment sûr ? Cette action est IRRÉVERSIBLE."))return;i.disabled=!0,i.textContent="⏳";const{data:$,error:S}=await L.rpc("delete_manager_cascade",{p_user_id:b});if(S){t(`Erreur: ${S.message}`,"error"),i.disabled=!1,i.textContent="🗑️";return}if(!($!=null&&$.success)){t(`Erreur: ${($==null?void 0:$.error)||"Suppression échouée"}`,"error"),i.disabled=!1,i.textContent="🗑️";return}t(`Manager "${d}" supprimé et ${Object.values($.deleted).reduce((o,y)=>o+y)} entrées supprimées ✅`,"success"),Ie(e,{toast:t})})})}}const Ve=[{key:"player",label:"⚽ Joueurs"},{key:"formation",label:"📋 Formations"},{key:"stadium",label:"🏟️ Stades"},{key:"game_changer",label:"⚡ Game Changers"},{key:"decks",label:"👥 Équipes"},{key:"boosters",label:"🎁 Boosters"}];function Tn(e){const t={GK:[],DEF:[],MIL:[],ATT:[]};return(e||[]).filter(n=>n.is_starter).forEach(n=>{const a=/^(GK|DEF|MIL|ATT)(\d+)$/.exec(n.position||"");if(!a)return;const s=a[1],l=parseInt(a[2],10)-1;t[s][l]=kt(n)}),t}function kt(e){const t=e.evolution_bonus||0,n=e.job2,a=n&&Number(e[`note_${n.toLowerCase()}`])||0,s=(l,f)=>(Number(f)||0)+(e.job===l?t:0)+(n===l&&a>0?t:0);return{cardId:e.card_id,firstname:e.firstname,name:e.surname_real,surname_real:e.surname_real,country_code:e.country_code,club_id:e.club_id,job:e.job,job2:e.job2,note_g:s("GK",e.note_g),note_d:s("DEF",e.note_d),note_m:s("MIL",e.note_m),note_a:s("ATT",e.note_a),evolution_bonus:t,rarity:e.rarity,face:e.face||null,clubName:e.club_encoded_name||null,clubLogo:e.club_logo_url||null,boost:0,used:!1}}function Mn(e){return e!=null&&e.image_url?`/icons/${e.image_url}`:null}function zn(e){var t;return e!=null&&e.image_url?`/icons/${e.image_url}`:(t=e==null?void 0:e.club)!=null&&t.logo_url?e.club.logo_url:e!=null&&e.country_code?`https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null}function de(e){return e?`<div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-start">${e}</div>`:'<div style="padding:30px;text-align:center;color:#999;font-size:13px">Aucune carte dans cette catégorie.</div>'}async function Rn(e,t,n){const a=document.createElement("div");a.className="modal-overlay",a.style.zIndex="3000",a.innerHTML=`<div class="modal admin-light-card" style="max-width:1100px;width:96%">
    <div class="modal-header"><h2>🃏 Collection de ${t}</h2><button class="btn-icon" id="mc-close">✕</button></div>
    <div class="modal-body" id="mc-body" style="padding:16px">
      <div style="text-align:center;color:#999;padding:30px">⏳ Chargement de la collection…</div>
    </div>
  </div>`,document.body.appendChild(a);const s=()=>a.remove();a.querySelector("#mc-close").addEventListener("click",s),a.addEventListener("click",o=>{o.target===a&&s()});const{data:l,error:f}=await L.rpc("admin_get_manager_collection",{p_user_id:e}),E=a.querySelector("#mc-body");if(!E)return;if(f||!(l!=null&&l.success)){E.innerHTML=`<div style="padding:20px;color:#bb2020">Erreur : ${(f==null?void 0:f.message)||(l==null?void 0:l.error)||"chargement impossible"}</div>`;return}const _=l.cards||[],r=l.decks||[],c={player:_.filter(o=>o.card_type==="player"&&o.player),formation:_.filter(o=>o.card_type==="formation"),stadium:_.filter(o=>o.card_type==="stadium"),game_changer:_.filter(o=>o.card_type==="game_changer")},p={player:c.player.length,formation:c.formation.length,stadium:c.stadium.length,game_changer:c.game_changer.length,decks:r.length},v={};v.player=de(c.player.map(o=>{const y={...o.player,_evolution_bonus:o.evolution_bonus||0};return`<div style="position:relative">${o.is_for_sale?'<div style="position:absolute;top:4px;right:4px;background:#D4A017;color:#111;font-size:9px;font-weight:800;padding:2px 6px;border-radius:8px;z-index:3">EN VENTE</div>':""}${re(y,{width:110})}</div>`}).join("")),v.formation=de(c.formation.map(o=>`<div style="position:relative">${Vt(o.formation,pe[o.formation],{width:120})}</div>`).join("")),v.stadium=de(c.stadium.map(o=>{var u;const y=o.stadium_def,h=((u=y==null?void 0:y.club)==null?void 0:u.encoded_name)||(y==null?void 0:y.country_code)||"—";return`<div style="position:relative">${Ae((y==null?void 0:y.name)||"?",zn(y),`${h}<br>+10 ⭐ joueurs alliés`,{width:120})}</div>`}).join("")),v.game_changer=de(c.game_changer.map(o=>{const y=o.gc_def;return`<div style="position:relative">${fe((y==null?void 0:y.name)||o.gc_type||"Game Changer",Mn(y),"⚡",(y==null?void 0:y.effect)||"",{width:120})}</div>`}).join(""));function x(o){var B,j;const y=o.cards||[],h=y.filter(R=>!R.is_starter),u=Tn(y),w=o.stadium||null;w&&Jt(u,w);const m=["GK","DEF","MIL","ATT"].reduce((R,N)=>R+u[N].filter(Boolean).length,0),k=w?`
      <div style="display:flex;align-items:center;gap:10px;background:#eaf3fb;border:1px solid #c9def0;border-radius:10px;padding:8px 12px;margin-bottom:10px">
        ${(B=w.club)!=null&&B.logo_url?`<img src="${w.club.logo_url}" style="width:26px;height:26px;object-fit:contain">`:'<span style="font-size:20px">🏟️</span>'}
        <div style="font-weight:800;font-size:13px;color:#1a1a1a">${w.name||"Stade"}</div>
        <div style="margin-left:auto;font-size:12px;color:#1A6B3C;font-weight:700">
          +10 aux joueurs ${((j=w.club)==null?void 0:j.encoded_name)||w.country_code||""}
        </div>
      </div>`:"",A=o.formation&&pe[o.formation]&&m?`<div style="max-width:560px;margin:0 auto;pointer-events:none">
           ${Yt(u,o.formation,null,[],340,375)}
         </div>`:`<div style="font-size:12px;color:#999;padding:20px;text-align:center">
           ${o.formation?pe[o.formation]?"Aucun titulaire enregistré.":`Formation inconnue : ${o.formation}`:"Aucune formation définie pour ce deck."}
         </div>`,I=R=>`<div style="position:relative">${re(kt(R),{width:74})}</div>`;return`
      ${k}
      ${A}
      ${h.length?`
        <div style="margin-top:12px">
          <div style="font-size:11px;color:#888;font-weight:700;margin-bottom:5px">REMPLAÇANTS (${h.length})</div>
          <div style="display:flex;flex-wrap:wrap;gap:8px">${h.map(I).join("")}</div>
        </div>`:""}
    `}v.decks=r.length?`<div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap">
         <label style="font-size:12px;font-weight:700;color:#555">Équipe :</label>
         <select id="mc-deck-select" style="padding:7px 10px;border-radius:8px;border:1px solid var(--gray-200,#ddd);background:#fff;color:#1a1a1a;font-size:13px;font-weight:600;min-width:240px">
           ${r.map((o,y)=>`<option value="${y}">${o.name||"Deck sans nom"} — ${o.formation||"?"}</option>`).join("")}
         </select>
         <span style="font-size:12px;color:#888">${r.length} équipe(s)</span>
       </div>
       <div id="mc-deck-pitch">${x(r[0])}</div>`:`<div style="padding:30px;text-align:center;color:#999;font-size:13px">Ce manager n'a créé aucune équipe.</div>`;const g=l.boosters||[],i=l.legacy_booster_cards||0,b={legende:"Légende",pepite:"Pépite",papyte:"Papyte",normal:"Normal"},d={legende:"#7a28b8",pepite:"#D4A017",papyte:"#909090",normal:"#888"},$=g.reduce((o,y)=>o+(y.nb_cards||0),0);v.boosters=`
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px">
      <div style="flex:1;min-width:150px;background:#f4f8f5;border:1px solid #d6e8dc;border-radius:12px;padding:12px 14px">
        <div style="font-size:11px;color:#666">Boosters ouverts</div>
        <div style="font-size:22px;font-weight:900;color:#1A6B3C">${g.length}</div>
      </div>
      <div style="flex:1;min-width:150px;background:#fdf8ec;border:1px solid #efe0bb;border-radius:12px;padding:12px 14px">
        <div style="font-size:11px;color:#666">Cartes obtenues</div>
        <div style="font-size:22px;font-weight:900;color:#D4A017">${$}</div>
      </div>
      <div style="flex:1;min-width:150px;background:#f7f7f7;border:1px solid #e0e0e0;border-radius:12px;padding:12px 14px">
        <div style="font-size:11px;color:#666">Cartes booster (historique)</div>
        <div style="font-size:22px;font-weight:900;color:#555">${i}</div>
      </div>
    </div>
    ${g.length?`
      <div style="display:flex;flex-direction:column;gap:8px">
        ${g.map(o=>{const y=o.opened_at?new Date(o.opened_at).toLocaleString("fr"):"—",h=(o.cards||[]).map(u=>{const w=d[u.rarity]||"#888",m=u.rarity?` · <span style="color:${w};font-weight:700">${b[u.rarity]||u.rarity}</span>`:"",k=u.is_duplicate?' <span style="color:#aaa">(doublon)</span>':"";return`<div style="font-size:12px;color:#333;padding:3px 0;border-bottom:1px dashed #eee">
              ${u.name||u.card_type||"?"}${m}${u.note!=null?` · note ${u.note}`:""}${k}
            </div>`}).join("");return`<details style="border:1px solid var(--gray-200,#e0e0e0);border-radius:10px;padding:10px 12px;background:#fafafa">
            <summary style="cursor:pointer;font-size:13px;font-weight:700;color:#1a1a1a">
              ${o.booster_name||"Booster"} <span style="font-weight:400;color:#777">· ${o.nb_cards||0} carte(s) · ${y}</span>
            </summary>
            <div style="margin-top:8px">${h||'<div style="font-size:12px;color:#999">Contenu non détaillé.</div>'}</div>
          </details>`}).join("")}
      </div>`:`
      <div style="padding:20px;text-align:center;color:#999;font-size:13px;line-height:1.6">
        Aucune ouverture enregistrée pour ce manager.<br>
        <span style="font-size:11.5px">Le journal des ouvertures a été mis en place récemment : seules les ouvertures postérieures y figurent.${i?` Le compteur « historique » (${i}) recense les cartes joueur encore possédées et obtenues en booster avant cela.`:""}</span>
      </div>`}
  `,E.innerHTML=`
    <div style="display:flex;gap:6px;flex-wrap:wrap;border-bottom:1px solid var(--gray-200,#e0e0e0);padding-bottom:10px;margin-bottom:14px">
      ${Ve.map((o,y)=>`
        <button class="mc-tab" data-tab="${o.key}" style="
          border:1px solid ${y===0?"#1A6B3C":"var(--gray-200,#ddd)"};
          background:${y===0?"#1A6B3C":"#fff"};
          color:${y===0?"#fff":"#444"};
          padding:7px 13px;border-radius:999px;font-size:12.5px;font-weight:700;cursor:pointer">
          ${o.label} (${p[o.key]})
        </button>`).join("")}
    </div>
    ${Ve.map((o,y)=>`
      <div class="mc-pane" data-pane="${o.key}" style="display:${y===0?"block":"none"}">${v[o.key]}</div>
    `).join("")}
  `;const S=E.querySelector("#mc-deck-select");S&&S.addEventListener("change",()=>{const o=E.querySelector("#mc-deck-pitch");o&&(o.innerHTML=x(r[Number(S.value)]))}),E.querySelectorAll(".mc-tab").forEach(o=>{o.addEventListener("click",()=>{E.querySelectorAll(".mc-tab").forEach(y=>{const h=y===o;y.style.background=h?"#1A6B3C":"#fff",y.style.color=h?"#fff":"#444",y.style.borderColor=h?"#1A6B3C":"var(--gray-200,#ddd)"}),E.querySelectorAll(".mc-pane").forEach(y=>{y.style.display=y.dataset.pane===o.dataset.tab?"block":"none"})})})}const jn=[{value:"normal",label:"Normal",color:"#ccc"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function Lt(e,t){var _;const{toast:n}=t,{data:a,error:s}=await L.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_real, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(s){e.innerHTML=`<p style="color:var(--danger)">${s.message}</p>`;return}const l=a||[],f=l.filter(r=>r.status==="active").length,E=l.filter(r=>r.status==="sold").length;e.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px">
      <button id="btn-price-grid" class="btn btn-primary">📊 Grille des prix</button>
      <div style="display:flex;gap:12px">
        <div class="card-panel" style="min-width:120px;text-align:center;padding:12px 20px">
          <div style="font-size:22px;font-weight:700;color:#1A6B3C">${f}</div>
          <div style="font-size:11px;color:var(--tile-fg-dim)">Annonces actives</div>
        </div>
        <div class="card-panel" style="min-width:120px;text-align:center;padding:12px 20px">
          <div style="font-size:22px;font-weight:700;color:#D4A017">${E}</div>
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
            ${l.map(r=>{var x,g,i,b;const c=(x=r.card)==null?void 0:x.player,p=c?`${c.firstname} ${c.surname_real}`:((g=r.card)==null?void 0:g.card_type)||"—",v={active:"#1A6B3C",sold:"#D4A017",cancelled:"#888"};return`<tr>
                <td><b>${p}</b>${c?`<div style="font-size:10px;color:var(--tile-fg-dim)">${c.rarity} · ${c.job}</div>`:""}</td>
                <td style="font-size:12px">${((i=r.seller)==null?void 0:i.pseudo)||"—"}</td>
                <td style="font-size:12px">${((b=r.buyer)==null?void 0:b.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(r.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${v[r.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
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
  `,document.querySelectorAll("[data-cancel]").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:c}=await L.from("market_listings").update({status:"cancelled"}).eq("id",r.dataset.cancel);c?n(c.message,"error"):(n("Annonce annulée","success"),Lt(e,t))})}),(_=document.getElementById("btn-price-grid"))==null||_.addEventListener("click",()=>Dn(t))}async function Dn(e){await ke(e)}function Nn(){const e=document.getElementById("modal-overlay");if(!e||e._pgBlocker)return;const t=n=>{n.target===n.currentTarget&&n.stopImmediatePropagation()};e.addEventListener("click",t,!0),e._pgBlocker=t}function Ee(){const e=document.getElementById("modal-overlay");e!=null&&e._pgBlocker&&(e.removeEventListener("click",e._pgBlocker,!0),delete e._pgBlocker)}async function ke(e){var x,g;const{openModal:t,closeModal:n,toast:a}=e,{data:s,error:l}=await L.from("sell_price_configs").select("*").order("rarity").order("note_min");if(l){a(l.message,"error");return}const f=i=>jn.map(b=>`<option value="${b.value}" ${b.value===i?"selected":""}>${b.label}</option>`).join(""),E=i=>`
    <tr data-row="${i.id}">
      <td style="padding:4px 8px">
        <select data-field="rarity" data-id="${i.id}" style="width:100%;padding:6px;font-size:13px">${f(i.rarity)}</select>
      </td>
      <td style="padding:4px 8px">
        <input data-field="note_min" data-id="${i.id}" type="number" min="0" max="999" value="${i.note_min}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="note_max" data-id="${i.id}" type="number" min="0" max="999" value="${i.note_max}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="price_min" data-id="${i.id}" type="number" min="0" value="${i.price_min}" style="width:100%;padding:6px;text-align:right;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="price_max" data-id="${i.id}" type="number" min="0" value="${i.price_max}" style="width:100%;padding:6px;text-align:right;font-size:13px">
      </td>
      <td style="text-align:center;padding:4px 8px">
        <button class="btn btn-danger btn-sm" data-del-row="${i.id}">🗑️</button>
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
          ${(s||[]).map(E).join("")||'<tr><td colspan="6" style="text-align:center;color:#aaa;padding:20px">Aucune règle définie.</td></tr>'}
        </tbody>
      </table>
    </div>
  `;t("📊 Grille des prix — vente marché",_,`
    <button id="pg-add-row" class="btn btn-primary">+ Ajouter une ligne</button>
    <button id="pg-close" class="btn btn-ghost">Fermer</button>
  `),Nn(),(x=document.getElementById("pg-close"))==null||x.addEventListener("click",()=>{Ee(),n()});function c(i){const b=i.dataset.id,d=i.dataset.field,$=d==="rarity"?i.value:Number(i.value)||0;return p(b,{[d]:$},i)}async function p(i,b,d){const $=document.querySelector(`tr[data-row="${i}"]`),S=m=>$.querySelector(`[data-field="${m}"]`),o="note_min"in b?b.note_min:Number(S("note_min").value),y="note_max"in b?b.note_max:Number(S("note_max").value),h="price_min"in b?b.price_min:Number(S("price_min").value),u="price_max"in b?b.price_max:Number(S("price_max").value);if(o>y){a("Note min doit être ≤ note max","error");return}if(h>u){a("Prix min doit être ≤ prix max","error");return}const{error:w}=await L.from("sell_price_configs").update(b).eq("id",i);if(w){a(w.message,"error");return}d&&(d.style.transition="background .3s",d.style.background="#e8f8ee",setTimeout(()=>{d.style.background=""},500))}function v(){document.querySelectorAll("#pg-tbody [data-field]").forEach(i=>{i.addEventListener("change",()=>c(i))})}v(),document.querySelectorAll("[data-del-row]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette ligne ?")&&(await L.from("sell_price_configs").delete().eq("id",i.dataset.delRow),a("Ligne supprimée","success"),Ee(),ke(e))})}),(g=document.getElementById("pg-add-row"))==null||g.addEventListener("click",async()=>{var S;const i={rarity:"normal",note_min:0,note_max:20,price_min:2500,price_max:15e3},{data:b,error:d}=await L.from("sell_price_configs").insert(i).select().single();if(d){a(d.message,"error");return}const $=document.getElementById("pg-tbody");$.querySelector("td[colspan]")&&($.innerHTML=""),$.insertAdjacentHTML("beforeend",E(b)),v(),(S=document.querySelector(`[data-del-row="${b.id}"]`))==null||S.addEventListener("click",async function(){confirm("Supprimer cette ligne ?")&&(await L.from("sell_price_configs").delete().eq("id",b.id),a("Ligne supprimée","success"),Ee(),ke(e))}),a("Ligne ajoutée — modifie les valeurs directement","success")})}async function Pn(e,{toast:t}){e.innerHTML=`
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
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:n,error:a}=await L.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(a){t(a.message,"error");return}if(!n||n.length===0){t("Aucun club à exporter","info");return}let s=`real_name,encoded_name,country_code,logo_url
`;n.forEach(l=>{s+=[l.real_name,l.encoded_name,l.country_code,l.logo_url||""].map(Je).join(",")+`
`}),ce("clubs_export.csv",s),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:a}=await L.from("players").select("firstname,surname_real,surname_real,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_real");if(a){t(a.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let s=`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(l=>{var f;s+=[l.firstname,l.surname_real,l.surname_real,l.country_code,((f=l.clubs)==null?void 0:f.encoded_name)||"",l.job,l.job2||"",l.note_g,l.note_d,l.note_m,l.note_a,l.rarity,l.note_min??"",l.note_max??"",l.skin,l.hair,l.hair_length,l.sell_price].map(Je).join(",")+`
`}),ce("players_export.csv",s),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const a=n.target.files[0];if(!a)return;const s=document.getElementById("clubs-import-result");s.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const l=await a.text(),f=Ye(l);if(f.length===0){s.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let E=0,_=0;const r=[];for(const c of f){if(!c.real_name||!c.encoded_name||!c.country_code){_++,r.push(`Ligne ignorée (champs manquants): ${c.real_name||"?"}`);continue}const p={real_name:c.real_name,encoded_name:c.encoded_name.toUpperCase(),country_code:c.country_code.toUpperCase().slice(0,2),logo_url:c.logo_url||null},{error:v}=await L.from("clubs").upsert(p,{onConflict:"encoded_name"});v?(_++,r.push(`${c.encoded_name}: ${v.message}`)):E++}s.innerHTML=`<div style="color:var(--green)">✅ ${E} clubs importés</div>
        ${_>0?`<div style="color:#c0392b">❌ ${_} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${r.slice(0,10).join("<br>")}</div>`:""}`,t(`${E} clubs importés`,"success")}catch(l){s.innerHTML=`<span style="color:#c0392b">Erreur : ${l.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const a=n.target.files[0];if(!a)return;const s=document.getElementById("players-import-result");s.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const l=await a.text(),f=Ye(l);if(f.length===0){s.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:E}=await L.from("clubs").select("id,encoded_name"),_={};(E||[]).forEach(d=>{_[d.encoded_name.toUpperCase()]=d.id});let r=0,c=0;const p=[],v=["GK","DEF","MIL","ATT"],x=["normal","pepite","papyte","legende"],g=["blanc","metisse","typ","noir"],i=["blond","marron","noir","chauve"],b=["rase","court","milong","long"];for(const d of f){if(!d.firstname||!d.surname_real||!d.country_code||!d.job){c++,p.push(`Ligne ignorée (champs requis manquants): ${d.firstname||"?"}`);continue}if(!v.includes(d.job)){c++,p.push(`${d.firstname}: job invalide "${d.job}"`);continue}const $=d.club_encoded_name&&_[d.club_encoded_name.toUpperCase()]||null,S={firstname:d.firstname,surname_real:d.surname_real,surname_real:d.surname_real||Zt(d.surname_real),country_code:d.country_code.toUpperCase().slice(0,2),club_id:$,job:d.job,job2:v.includes(d.job2)?d.job2:null,note_g:parseInt(d.note_g)||0,note_d:parseInt(d.note_d)||0,note_m:parseInt(d.note_m)||0,note_a:parseInt(d.note_a)||0,rarity:x.includes(d.rarity)?d.rarity:"normal",note_min:d.note_min!==""&&d.note_min!=null?parseInt(d.note_min):null,note_max:d.note_max!==""&&d.note_max!=null?parseInt(d.note_max):null,skin:g.includes(d.skin)?d.skin:"blanc",hair:i.includes(d.hair)?d.hair:"noir",hair_length:b.includes(d.hair_length)?d.hair_length:"court",sell_price:parseInt(d.sell_price)||0},{error:o}=await L.from("players").insert(S);o?(c++,p.push(`${d.firstname} ${d.surname_real}: ${o.message}`)):r++}s.innerHTML=`<div style="color:var(--green)">✅ ${r} joueurs importés</div>
        ${c>0?`<div style="color:#c0392b">❌ ${c} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${p.slice(0,10).join("<br>")}</div>`:""}`,t(`${r} joueurs importés`,"success")}catch(l){s.innerHTML=`<span style="color:#c0392b">Erreur : ${l.message}</span>`}n.target.value=""})}function Je(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function ce(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(n),s=document.createElement("a");s.href=a,s.download=e,s.click(),URL.revokeObjectURL(a)}function Ye(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(f=>f.trim());if(t.length<2)return[];const n=t[0],a=n.split(";").length>n.split(",").length?";":",",s=Ze(n,a).map(f=>f.trim().replace(/^\uFEFF/,"").toLowerCase()),l=[];for(let f=1;f<t.length;f++){if(!t[f].trim())continue;const E=Ze(t[f],a),_={};s.forEach((r,c)=>{_[r]=(E[c]||"").trim()}),!Object.values(_).every(r=>!r)&&l.push(_)}return l}function Ze(e,t=","){const n=[];let a="",s=!1;for(let l=0;l<e.length;l++){const f=e[l];s?f==='"'?e[l+1]==='"'?(a+='"',l++):s=!1:a+=f:f==='"'?s=!0:f===t?(n.push(a),a=""):a+=f}return n.push(a),n}const Fn={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function On(e,{toast:t}){const n=Object.keys(he);let a=n[0];const{data:s}=await L.from("formation_links_overrides").select("formation, links"),l={};(s||[]).forEach(c=>{l[c.formation]=c.links});let f=new Set;function E(c,p){return[c,p].sort().join("-")}function _(c){const p=l[c]||he[c]||[];f=new Set(p.map(([v,x])=>E(v,x)))}_(a),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${n.map(c=>`<option value="${c}" ${c===a?"selected":""}>${c}</option>`).join("")}
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
        <div style="font-weight:700;font-size:13px;margin-bottom:8px">Liens (${f.size}/? actifs)</div>
        <div id="links-list" style="display:flex;flex-direction:column;gap:4px;max-height:520px;overflow-y:auto"></div>
      </div>
    </div>
  `;function r(){const c=pe[a]||{},p=Oe(a),v=320,x=400,g=22;function i(o){const y=c[o];return y?{x:y.x*v,y:y.y*x}:null}let b=`<svg width="${v}" height="${x}" viewBox="0 0 ${v} ${x}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;p.forEach(([o,y],h)=>{const u=i(o),w=i(y);if(!u||!w)return;const m=E(o,y),k=f.has(m),A=k?"#3b82f6":"#999",I=k?.95:.35,B=k?4:3;b+=`<line x1="${u.x}" y1="${u.y}" x2="${w.x}" y2="${w.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${m}" style="cursor:pointer"/>`,b+=`<line x1="${u.x}" y1="${u.y}" x2="${w.x}" y2="${w.y}"
        stroke="${A}" stroke-width="${B}" stroke-dasharray="${k?"none":"4,3"}"
        opacity="${I}" pointer-events="none" data-line-key="${m}"/>`});for(const o of Object.keys(c)){const y=i(o);if(!y)continue;const h=o.replace(/\d+/,""),u=Fn[h]||"#555";b+=`<circle cx="${y.x}" cy="${y.y}" r="${g}" fill="${u}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,b+=`<text x="${y.x}" y="${y.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${o}</text>`}b+="</svg>",document.getElementById("field-wrap").innerHTML=b;const d=document.getElementById("links-list");d.innerHTML=p.map(([o,y])=>{const h=E(o,y),u=f.has(h);return`
        <button class="link-toggle" data-key="${h}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${u?"#3b82f6":"#ddd"};
          background:${u?"#eaf2ff":"#fafafa"};
          color:${u?"#1d4ed8":"#888"}">
          <span>${o} ↔ ${y}</span>
          <span>${u?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const $=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');$&&($.textContent=`Liens (${f.size}/${p.length} actifs)`);function S(o){f.has(o)?f.delete(o):f.add(o),r()}e.querySelectorAll(".link-hit").forEach(o=>{o.addEventListener("click",()=>S(o.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(o=>{o.addEventListener("click",()=>S(o.dataset.key))})}r(),document.getElementById("formation-select").addEventListener("change",c=>{a=c.target.value,_(a),r()}),document.getElementById("reset-btn").addEventListener("click",()=>{const c=he[a]||[];f=new Set(c.map(([p,v])=>E(p,v))),r(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const p=Oe(a).filter(([x,g])=>f.has(E(x,g))),{error:v}=await L.from("formation_links_overrides").upsert({formation:a,links:p,updated_at:new Date().toISOString()});if(v){t(v.message,"error");return}l[a]=p,t(`Liens enregistrés pour ${a} (${p.length} actifs)`,"success")})}const Gn=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],qn=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],Un=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function Hn(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await L.from("booster_configs").select("*").order("sort_order");let n=null,a=[],s=null;const l=()=>window.innerWidth<700;async function f(){if(!n){a=[];return}if(n!==s){const{data:p}=await L.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");a=p||[],s=n}}function E(){return`
    <div id="booster-list" style="background:#fff;${l()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(t||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(p=>`
      <div class="booster-row" data-id="${p.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${p.id===n?"#f0f7f0":"#fff"}">
        ${p.image_url?`<img src="/icons/${p.image_url}" style="width:36px;height:36px;object-fit:contain;border-radius:6px;background:#f5f5f5;padding:2px">`:'<div style="width:36px;height:36px;background:#eee;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:20px">📦</div>'}
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.name}</div>
          <div style="font-size:11px;color:#888">
            ${p.price_type==="credits"?(p.price_credits||0)+" cr.":p.price_type==="pub"?"Pub":"Gratuit"}
            · ${p.card_count||5} cartes · ${p.is_active?"✅":"⛔"}
          </div>
        </div>
        <button class="btn-delete" data-id="${p.id}" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:18px;padding:4px;flex-shrink:0">🗑️</button>
      </div>`).join("")}
      ${(t||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>'}
    </div>`}function _(){const p=n?(t||[]).find(g=>g.id===n):null;if(!p)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const v=a.reduce((g,i)=>g+Number(i.percentage||0),0),x=Math.abs(v-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${l()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <h3 style="margin:0 0 14px;font-size:16px">${p.name}</h3>

      <!-- Infos de base -->
      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="f-name" value="${p.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="f-image-url" value="${p.image_url||""}" placeholder="ex: booster-players.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          ${p.image_url?`<img src="/icons/${p.image_url}" style="height:44px;margin-top:8px;border-radius:6px;object-fit:contain;background:#f0f0f0;padding:4px">`:""}
          <div id="icon-picker-grid" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE DE PRIX</label>
            <select id="f-price-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${Un.map(g=>`<option value="${g.value}" ${p.price_type===g.value?"selected":""}>${g.label}</option>`).join("")}
            </select>
          </div>
          <div id="credits-field">
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">CRÉDITS</label>
            <input id="f-price-credits" type="number" min="0" value="${p.price_credits||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NB CARTES</label>
            <input id="f-card-count" type="number" min="1" max="10" value="${p.card_count||5}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="f-sort" type="number" value="${p.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:flex;align-items:center;gap:10px">
          <input type="checkbox" id="f-active" ${p.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
          <label for="f-active" style="font-size:13px;cursor:pointer;font-weight:600">Booster actif (visible dans la boutique)</label>
        </div>
        <div style="display:flex;align-items:center;gap:10px;margin-top:10px">
          <input type="checkbox" id="f-allow-dup" ${p.allow_duplicates!==!1?"checked":""} style="width:18px;height:18px;cursor:pointer">
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
              <input id="f-max-per-user" type="number" min="1" value="${p.max_per_user||""}" placeholder="ex: 1"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible à partir du</label>
              <input id="f-available-from" type="date" value="${p.available_from||""}"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible jusqu'au</label>
              <input id="f-available-until" type="date" value="${p.available_until||""}"
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
            <span style="margin-left:10px;font-size:12px;color:${x?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${v.toFixed(1)}% ${x?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${a.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':a.map((g,i)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${i}">
            <select class="rate-type" data-idx="${i}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Gn.map(b=>`<option value="${b.value}" ${g.card_type===b.value?"selected":""}>${b.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${i}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${qn.map(b=>`<option value="${b.value}" ${(g.rarity||"")===b.value?"selected":""}>${b.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${i}" type="number" min="0" max="100" value="${g.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${i}" type="number" min="0" max="100" value="${g.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${i}" type="number" min="0.1" max="100" step="0.1" value="${g.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${i}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function r(p=!1){p||await f();const v=!n&&l(),x=n&&l();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!l()||v||!n?E():""}
      ${!l()||x?_():""}
    </div>`,c()}function c(){var x,g,i,b,d,$,S;const p=o=>e.querySelector(o);e.querySelectorAll(".booster-row").forEach(o=>{o.addEventListener("click",y=>{y.target.closest(".btn-delete")||(n=o.dataset.id,s=null,r())})}),(x=p("#btn-back"))==null||x.addEventListener("click",()=>{n=null,r()}),(g=p("#btn-new"))==null||g.addEventListener("click",async()=>{const o=prompt("Nom du nouveau booster :");if(!(o!=null&&o.trim()))return;const{data:y,error:h}=await L.from("booster_configs").insert({name:o.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(h){alert(h.message);return}t.push(y),n=y.id,s=null,r()}),e.querySelectorAll(".btn-delete").forEach(o=>{o.addEventListener("click",async y=>{if(y.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await L.from("booster_configs").delete().eq("id",o.dataset.id);const h=t.findIndex(u=>u.id===o.dataset.id);h>-1&&t.splice(h,1),n===o.dataset.id&&(n=null,s=null),r()})}),(i=p("#btn-cancel"))==null||i.addEventListener("click",()=>{n=null,r()}),(b=p("#f-price-type"))==null||b.addEventListener("change",o=>{const y=p("#credits-field");y&&(y.style.opacity=o.target.value!=="credits"?"0.4":"1")}),(d=p("#btn-pick-icon"))==null||d.addEventListener("click",async()=>{var y;const o=p("#icon-picker-grid");if(o){if(o.style.display!=="none"){o.style.display="none";return}o.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',o.style.display="block";try{const u=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),w=Array.isArray(u)?u.filter(k=>k.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(k.name)):[];if(!w.length){o.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const m=((y=p("#f-image-url"))==null?void 0:y.value)||"";o.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${w.map(k=>`
          <div class="icon-pick-item" data-name="${k.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${k.name===m?"#1A6B3C":"#ddd"};background:${k.name===m?"#f0f7f0":"#fff"}">
            <img src="/icons/${k.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${k.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,o.querySelectorAll(".icon-pick-item").forEach(k=>{k.addEventListener("click",()=>{const A=p("#f-image-url");A&&(A.value=k.dataset.name),o.style.display="none"})})}catch(h){o.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${h.message}</div>`}}});function v(){e.querySelectorAll("[data-rate-idx]").forEach(o=>{var h,u,w,m,k;const y=Number(o.dataset.rateIdx);y>=0&&y<a.length&&(a[y].card_type=((h=o.querySelector(".rate-type"))==null?void 0:h.value)||"player",a[y].rarity=((u=o.querySelector(".rate-rarity"))==null?void 0:u.value)||null,a[y].note_min=Number((w=o.querySelector(".rate-note-min"))==null?void 0:w.value)||null,a[y].note_max=Number((m=o.querySelector(".rate-note-max"))==null?void 0:m.value)||null,a[y].percentage=Number((k=o.querySelector(".rate-pct"))==null?void 0:k.value)||0)})}($=p("#btn-add-rate"))==null||$.addEventListener("click",()=>{v(),a.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:a.length}),r(!0)}),e.querySelectorAll(".btn-del-rate").forEach(o=>{o.addEventListener("click",()=>{v(),a.splice(Number(o.dataset.idx),1),r(!0)})}),(S=p("#btn-save"))==null||S.addEventListener("click",async()=>{var m,k,A,I,B,j,R,N,O,F,C,z,T;const o=(t||[]).find(M=>M.id===n);if(!o)return;const y=[];e.querySelectorAll("[data-rate-idx]").forEach(M=>{var H,V,J,Y,Z;const D=Number(M.dataset.rateIdx);y.push({booster_id:n,card_type:((H=M.querySelector(".rate-type"))==null?void 0:H.value)||"player",rarity:((V=M.querySelector(".rate-rarity"))==null?void 0:V.value)||null,note_min:Number((J=M.querySelector(".rate-note-min"))==null?void 0:J.value)||null,note_max:Number((Y=M.querySelector(".rate-note-max"))==null?void 0:Y.value)||null,percentage:Number((Z=M.querySelector(".rate-pct"))==null?void 0:Z.value)||0,sort_order:D});const P=y[y.length-1];P.rarity||(P.rarity=null),P.note_min||(P.note_min=null),P.note_max||(P.note_max=null)});const h=y.reduce((M,D)=>M+D.percentage,0);if(y.length&&Math.abs(h-100)>.5){alert(`La somme doit faire 100% (actuellement ${h.toFixed(1)}%)`);return}const u={name:((k=(m=p("#f-name"))==null?void 0:m.value)==null?void 0:k.trim())||o.name,image_url:((I=(A=p("#f-image-url"))==null?void 0:A.value)==null?void 0:I.trim())||null,price_type:(B=p("#f-price-type"))==null?void 0:B.value,price_credits:Number((j=p("#f-price-credits"))==null?void 0:j.value)||0,card_count:Number((R=p("#f-card-count"))==null?void 0:R.value)||5,is_active:((N=p("#f-active"))==null?void 0:N.checked)??o.is_active,allow_duplicates:((O=p("#f-allow-dup"))==null?void 0:O.checked)??!0,sort_order:Number((F=p("#f-sort"))==null?void 0:F.value)||0,max_per_user:(C=p("#f-max-per-user"))!=null&&C.value?Number(p("#f-max-per-user").value):null,available_from:((z=p("#f-available-from"))==null?void 0:z.value)||null,available_until:((T=p("#f-available-until"))==null?void 0:T.value)||null},{error:w}=await L.from("booster_configs").update(u).eq("id",n);if(w){alert(w.message);return}if(Object.assign(o,u),await L.from("booster_drop_rates").delete().eq("booster_id",n),y.length){const{error:M}=await L.from("booster_drop_rates").insert(y);if(M){alert(M.message);return}}a=y,s=n,alert("✅ Booster enregistré !"),r(!0)})}r()}const St=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function Kn(e){await Me(e)}async function Me(e){const{data:t,error:n}=await L.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
          ${(t||[]).map(a=>Vn(a)).join("")}
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
              ${St.map(a=>`<option value="${a.value}">${a.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>We(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Jn(e)),e.querySelectorAll("[data-edit]").forEach(a=>{const s=(t||[]).find(l=>l.id===a.dataset.edit);s&&a.addEventListener("click",()=>We(s))}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await L.from("sell_price_configs").delete().eq("id",a.dataset.delete),await Me(e))})})}function Vn(e){const t=St.find(n=>n.value===e.rarity);return`
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
    </tr>`}function We(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function Jn(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,a=parseInt(document.getElementById("form-price").value)||0,s=parseInt(document.getElementById("form-note-min").value)||1,l=parseInt(document.getElementById("form-note-max").value)||10;if(s>l){alert("Note min doit être ≤ note max");return}const f={rarity:n,price:a,note_min:s,note_max:l,updated_at:new Date().toISOString()};let E;if(t?{error:E}=await L.from("sell_price_configs").update(f).eq("id",t):{error:E}=await L.from("sell_price_configs").insert(f),E){alert("Erreur : "+E.message);return}document.getElementById("config-form").style.display="none",await Me(e)}async function Yn(e){await ze(e)}async function ze(e){const{data:t}=await L.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Actualités</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(t||[]).map(n=>Zn(n)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>Qe(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Qn(e)),e.querySelectorAll("[data-edit-row]").forEach(n=>{const a=(t||[]).find(s=>s.id===n.dataset.editRow);a&&n.addEventListener("click",()=>Qe(a))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await L.from("patch_notes").delete().eq("id",n.dataset.delete),await ze(e))})})}function Zn(e){const t=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function Qe(e){const t=document.getElementById("article-form");t.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img-current").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-img-file").value="";const n=document.getElementById("form-art-img-preview");n.innerHTML=e!=null&&e.image_url?`<img src="${e.image_url}" style="width:100%;height:100%;object-fit:cover">`:'<span style="font-size:20px;opacity:.4">📰</span>',document.getElementById("form-art-img-file").onchange=l=>{var _;const f=(_=l.target.files)==null?void 0:_[0];if(!f)return;const E=new FileReader;E.onload=()=>{n.innerHTML=`<img src="${E.result}" style="width:100%;height:100%;object-fit:cover">`},E.readAsDataURL(f)},document.getElementById("form-art-pub").checked=e?e.is_published:!0;const a=new Date((e==null?void 0:e.published_at)||Date.now()),s=new Date(a.getTime()-a.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=s,t.scrollIntoView({behavior:"smooth"})}async function Wn(e){const t=(e.name.split(".").pop()||"png").toLowerCase(),n=`journal/${Date.now()}.${t}`,{error:a}=await L.storage.from("assets").upload(n,e,{upsert:!0,cacheControl:"3600"});if(a)throw a;const{data:s}=L.storage.from("assets").getPublicUrl(n);return s.publicUrl}async function Qn(e){var x;const t=document.getElementById("form-id").value,n=document.getElementById("form-art-title").value.trim(),a=document.getElementById("form-art-desc").value.trim(),s=((x=document.getElementById("form-art-img-file").files)==null?void 0:x[0])||null,l=document.getElementById("form-art-img-current").value||null,f=document.getElementById("form-art-pub").checked,E=document.getElementById("form-art-date").value,_=document.getElementById("form-save");if(!n){alert("Le titre est obligatoire.");return}if(!a){alert("La description est obligatoire.");return}let r=l;if(s)try{_&&(_.textContent="📤 Envoi de l'image…"),r=await Wn(s)}catch(g){alert("Erreur upload image : "+g.message),_&&(_.textContent="💾 Enregistrer");return}const c=E?new Date(E).toISOString():new Date().toISOString(),p={title:n,description:a,image_url:r,is_published:f,published_at:c};let v;if(t?{error:v}=await L.from("patch_notes").update(p).eq("id",t):{error:v}=await L.from("patch_notes").insert(p),v){alert("Erreur : "+v.message);return}document.getElementById("article-form").style.display="none",await ze(e)}async function Xn(e){await ie(e)}async function ie(e){var c,p,v,x,g,i,b,d,$,S,o,y;const{data:t}=await L.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([h,u,w])=>`<button type="button" data-cmd="${u}" title="${w}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${h}</button>`).join("")}
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
            </div>`:(t||[]).map(h=>ei(h)).join("")}
        </div>
      </div><!-- /colonne droite -->
    </div>`,(c=document.getElementById("ts-add"))==null||c.addEventListener("click",()=>Xe(null,(t==null?void 0:t.length)||0)),(p=document.getElementById("ts-reset"))==null||p.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:h}=await L.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(h?"Erreur : "+h.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(v=document.getElementById("ts-cancel"))==null||v.addEventListener("click",At),(x=document.getElementById("ts-save"))==null||x.addEventListener("click",()=>ni(e)),(g=document.getElementById("ts-preview-btn"))==null||g.addEventListener("click",ti);const n=document.getElementById("ts-editor"),a=()=>{const h=document.getElementById("ts-content");h&&n&&(h.value=n.innerHTML)};n==null||n.addEventListener("input",a),n==null||n.addEventListener("blur",a);const s=()=>{document.activeElement!==n&&(n==null||n.focus())};(i=document.getElementById("ts-toolbar"))==null||i.querySelectorAll("[data-cmd]").forEach(h=>{h.addEventListener("mousedown",u=>{u.preventDefault(),s();const w=h.dataset.cmd;w.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,w.split(":")[1]):document.execCommand(w,!1,null),a()})}),(b=document.getElementById("ts-insert-color"))==null||b.addEventListener("mousedown",h=>{h.preventDefault(),s();const u=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");u&&(document.execCommand("foreColor",!1,u),a())}),(d=document.getElementById("ts-clear-format"))==null||d.addEventListener("mousedown",h=>{h.preventDefault(),s(),document.execCommand("removeFormat",!1,null),a()}),n==null||n.addEventListener("focus",()=>{n&&(n.style.borderColor="#1A6B3C")}),n==null||n.addEventListener("blur",()=>{n&&(n.style.borderColor="#ddd")});const l=document.getElementById("ts-image"),f=document.getElementById("ts-img-preview"),E=document.getElementById("ts-img-preview-el"),_=document.getElementById("ts-img-picker-grid"),r=()=>{var u;const h=(u=l==null?void 0:l.value)==null?void 0:u.trim();if(h){const w="/";E.src=`${w}icons/${h}`,f.style.display="block"}else f.style.display="none"};l==null||l.addEventListener("input",r),($=document.getElementById("ts-img-clear"))==null||$.addEventListener("click",()=>{l&&(l.value=""),f.style.display="none",_.style.display="none"}),(S=document.getElementById("ts-img-pick"))==null||S.addEventListener("click",async()=>{if(_.style.display!=="none"){_.style.display="none";return}_.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',_.style.display="block";try{const u=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),w=Array.isArray(u)?u.filter(k=>k.name.startsWith("tuto_")):[];if(!w.length){_.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const m="/";_.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+w.map(k=>`
          <div data-pick="${k.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${m}icons/${k.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${k.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",_.querySelectorAll("[data-pick]").forEach(k=>{k.addEventListener("click",()=>{l&&(l.value=k.dataset.pick),r(),_.style.display="none"})})}catch(h){_.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+h.message+"</div>"}}),(o=document.getElementById("ts-color"))==null||o.addEventListener("input",h=>{const u=document.getElementById("ts-color-hex");u&&(u.value=h.target.value)}),(y=document.getElementById("ts-color-hex"))==null||y.addEventListener("input",h=>{const u=h.target.value;if(/^#[0-9a-fA-F]{6}$/.test(u)){const w=document.getElementById("ts-color");w&&(w.value=u)}}),e.querySelectorAll("[data-edit-row]").forEach(h=>{const u=(t||[]).find(w=>w.id===h.dataset.editRow);u&&h.addEventListener("click",()=>Xe(u))}),e.querySelectorAll("[data-delete]").forEach(h=>{h.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await L.from("tutorial_steps").delete().eq("id",h.dataset.delete),ie(e))})}),e.querySelectorAll("[data-toggle]").forEach(h=>{h.addEventListener("click",async()=>{const u=(t||[]).find(w=>w.id===h.dataset.toggle);u&&(await L.from("tutorial_steps").update({is_active:!u.is_active}).eq("id",u.id),ie(e))})}),e.querySelectorAll("[data-up]").forEach(h=>{h.addEventListener("click",async()=>{const u=t||[],w=u.findIndex(m=>m.id===h.dataset.up);w<=0||(await Promise.all([L.from("tutorial_steps").update({step_order:u[w-1].step_order}).eq("id",u[w].id),L.from("tutorial_steps").update({step_order:u[w].step_order}).eq("id",u[w-1].id)]),ie(e))})}),e.querySelectorAll("[data-down]").forEach(h=>{h.addEventListener("click",async()=>{const u=t||[],w=u.findIndex(m=>m.id===h.dataset.down);w<0||w>=u.length-1||(await Promise.all([L.from("tutorial_steps").update({step_order:u[w+1].step_order}).eq("id",u[w].id),L.from("tutorial_steps").update({step_order:u[w].step_order}).eq("id",u[w+1].id)]),ie(e))})})}function ei(e){return`
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
  </div>`}function Xe(e,t=0){document.getElementById("ts-form-empty").style.display="none",document.getElementById("ts-form-content").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const n=document.getElementById("ts-editor");n&&(n.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??t,document.getElementById("ts-active").checked=e?e.is_active:!0;const a=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=a,document.getElementById("ts-color-hex").value=a;const s=(e==null?void 0:e.image_url)||"",l=document.getElementById("ts-image");l&&(l.value=s);const f=document.getElementById("ts-img-preview"),E=document.getElementById("ts-img-preview-el");if(s&&f&&E){const _="/";E.src=`${_}icons/${s}`,f.style.display="block"}else f&&(f.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function At(){document.getElementById("ts-form-content").style.display="none",document.getElementById("ts-form-empty").style.display="block",document.getElementById("ts-preview-area").innerHTML=""}function ti(){var r,c;const e=document.getElementById("ts-emoji").value||"⚽",t=document.getElementById("ts-title").value||"Titre",n=document.getElementById("ts-editor"),a=n?n.innerHTML:document.getElementById("ts-content").value||"",s=document.getElementById("ts-color-hex").value||"#1A6B3C",l=(c=(r=document.getElementById("ts-image"))==null?void 0:r.value)==null?void 0:c.trim(),E=l?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${l}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",_=document.getElementById("ts-preview-area");_.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${s}"></div></div>
        <div style="padding:20px 20px 0;text-align:center">
          <div style="font-size:48px;margin-bottom:8px;line-height:1">${e}</div>
          <div style="font-size:17px;font-weight:900;color:#111;margin-bottom:4px">${t}</div>
          <div style="font-size:11px;color:#aaa">6 / 10</div>
        </div>
        ${E}
        <div style="padding:${l?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${a}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${s};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,_.querySelectorAll("ul,ol").forEach(p=>{p.style.paddingLeft="20px",p.style.margin="6px 0"}),_.querySelectorAll("li").forEach(p=>{p.style.marginBottom="4px"}),_.querySelectorAll("p").forEach(p=>{p.style.marginBottom="8px"})}async function ni(e){var p,v;const t=document.getElementById("ts-id").value,n=document.getElementById("ts-emoji").value.trim()||"⚽",a=document.getElementById("ts-title").value.trim(),s=document.getElementById("ts-editor"),l=(s?s.innerHTML:document.getElementById("ts-content").value).trim(),f=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",E=parseInt(document.getElementById("ts-order").value)||0,_=document.getElementById("ts-active").checked;if(!a||!l){alert("Titre et contenu sont obligatoires.");return}const r={emoji:n,title:a,content:l,color:f,step_order:E,is_active:_,image_url:((v=(p=document.getElementById("ts-image"))==null?void 0:p.value)==null?void 0:v.trim())||null};let c;if(t?{error:c}=await L.from("tutorial_steps").update(r).eq("id",t):{error:c}=await L.from("tutorial_steps").insert(r),c){alert("Erreur : "+c.message);return}At(),ie(e)}const Bt="/",Ct=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function ii(e,t){await be(e,t)}async function be(e,t){var s,l;const[{data:n},{data:a}]=await Promise.all([L.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),L.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;gap:10px;flex-wrap:wrap">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">🏟️ Stades</h2>
        <div style="display:flex;gap:8px">
          <button id="st-gen-countries-btn" class="btn btn-ghost">🌍 Créer les stades Pays manquants</button>
          <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
        </div>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="st-list">
        ${(n||[]).length?(n||[]).map(f=>ai(f)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucun stade créé.</div>'}
      </div>
    </div>`,(s=document.getElementById("st-add-btn"))==null||s.addEventListener("click",()=>et(null,a,e,t)),(l=document.getElementById("st-gen-countries-btn"))==null||l.addEventListener("click",async()=>{const{toast:f}=t,E=new Set((n||[]).filter(v=>!v.club_id&&v.country_code).map(v=>v.country_code)),_=Ct.filter(([v])=>!E.has(v));if(!_.length){f("Tous les pays ont déjà un stade.","info");return}if(!confirm(`Créer ${_.length} stade(s) "Pays" manquant(s) ?`))return;const r=_.map(([v,x])=>({name:`Stade ${x}`,club_id:null,country_code:v})),{data:c,error:p}=await L.from("stadium_definitions").insert(r).select();if(p){f("Erreur : "+p.message,"error");return}c!=null&&c.length&&await L.from("cards").insert(c.map(v=>({card_type:"stadium",stadium_id:v.id}))),f(`${(c==null?void 0:c.length)||0} stade(s) Pays créé(s) ✅`,"success"),be(e,t)}),e.querySelectorAll("[data-edit-stadium]").forEach(f=>{f.addEventListener("click",()=>{const E=(n||[]).find(_=>_.id===f.dataset.editStadium);E&&et(E,a,e,t)})})}function ai(e){var s,l;let t=null;e.image_url?t=e.image_url.startsWith("http")?e.image_url:`${Bt}icons/${e.image_url}`:(s=e.club)!=null&&s.logo_url?t=e.club.logo_url:e.country_code&&(t=`https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/64.png`);const n=((l=e.club)==null?void 0:l.encoded_name)||e.country_code||"—",a=Ae(e.name,t,`${n}<br>+10 ⭐`,{width:140});return`<div data-edit-stadium="${e.id}" style="cursor:pointer;transition:transform .15s" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
    ${a}
  </div>`}function et(e,t,n,a){var c,p,v;const{openModal:s,closeModal:l,toast:f}=a,E=`
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
            ${(t||[]).map(x=>`<option value="${x.id}" data-logo="${x.logo_url||""}" ${(e==null?void 0:e.club_id)===x.id?"selected":""}>${x.encoded_name}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>PAYS (si pas de club)</label>
          <select id="st-country">
            <option value="">— Aucun pays —</option>
            ${Ct.map(([x,g])=>`<option value="${x}" ${(e==null?void 0:e.country_code)===x?"selected":""}>${g} (${x})</option>`).join("")}
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
  `;s(e?`Modifier : ${e.name}`:"Nouveau stade",E,`
    <button id="st-cancel" class="btn btn-ghost">Annuler</button>
    <button id="st-save" class="btn btn-primary">Enregistrer</button>
  `);const r=()=>{var u,w,m,k,A,I,B;const x=((u=document.getElementById("st-name"))==null?void 0:u.value)||"NOM DU STADE",g=(m=(w=document.getElementById("st-image"))==null?void 0:w.value)==null?void 0:m.trim(),i=(A=(k=document.getElementById("st-country"))==null?void 0:k.value)==null?void 0:A.trim(),b=document.getElementById("st-club"),d=(b==null?void 0:b.selectedIndex)||0,$=b&&d>0?b.options[d].text:"",S=((B=(I=b==null?void 0:b.options[d])==null?void 0:I.getAttribute)==null?void 0:B.call(I,"data-logo"))||"";let o=null;g?o=g.startsWith("http")?g:`${Bt}icons/${g}`:S?o=S:i&&(o=`https://flagsapi.com/${i.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`);const y=$||i||"—",h=document.getElementById("st-preview-card");h&&(h.innerHTML=Ae(x,o,`${y}<br>+10 ⭐`,{width:140}))};r(),["st-name","st-club","st-country","st-image"].forEach(x=>{var g,i;(g=document.getElementById(x))==null||g.addEventListener("input",r),(i=document.getElementById(x))==null||i.addEventListener("change",r)}),(c=document.getElementById("st-cancel"))==null||c.addEventListener("click",()=>l()),(p=document.getElementById("st-save"))==null||p.addEventListener("click",async()=>{const x=document.getElementById("st-name").value.trim(),g=document.getElementById("st-club").value||null,i=document.getElementById("st-country").value.trim().toUpperCase()||null,b=document.getElementById("st-image").value.trim()||null;if(!x){f("Le nom est obligatoire","error");return}const d={name:x,club_id:g,country_code:i,image_url:b},{error:$}=e?await L.from("stadium_definitions").update(d).eq("id",e.id):await L.from("stadium_definitions").insert(d);if($){f("Erreur : "+$.message,"error");return}f(e?"Stade modifié ✅":"Stade créé ✅","success"),l(),be(n,a)}),(v=document.getElementById("st-delete"))==null||v.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await L.from("stadium_definitions").delete().eq("id",e.id),f("Stade supprimé","success"),l(),be(n,a))})}const Q=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],oi=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}],W=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],tt=["GK","DEF","MIL","ATT"];async function ri(e,t){await Re(e,t)}async function Re(e,t){var a;const{data:n}=await L.from("gc_definitions").select("*").order("sort_order").order("created_at");e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">⚡ Game Changers</h2>
        <button id="gc-add-btn" class="btn btn-primary">+ Nouvelle carte</button>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="gc-list">
        ${(n||[]).length?(n||[]).map(s=>li(s)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucune carte Game Changer.</div>'}
      </div>
    </div>`,(a=document.getElementById("gc-add-btn"))==null||a.addEventListener("click",()=>nt(null,e,t)),e.querySelectorAll("[data-edit-gc]").forEach(s=>{s.addEventListener("click",()=>{const l=(n||[]).find(f=>f.id===s.dataset.editGc);l&&nt(l,e,t)})}),e.querySelectorAll(".btn-del-gc").forEach(s=>{s.addEventListener("click",async l=>{l.stopPropagation(),confirm("Supprimer cette carte Game Changer ?")&&(await L.from("gc_definitions").delete().eq("id",s.dataset.del),Re(e,t))})})}function li(e){const t=Q.find(s=>s.value===e.gc_type)||Q[0],n=e.image_url?`/icons/${e.image_url}`:null,a=fe(e.name||"?",n,t.label.split(" ")[0],e.effect||"",{width:130});return`<div data-edit-gc="${e.id}" style="position:relative;cursor:pointer">
    ${a}
    <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
      <button class="btn-del-gc" data-del="${e.id}"
        style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0">✕</button>
    </div>
    ${e.is_active?"":'<div style="position:absolute;top:4px;right:4px;z-index:10;background:#555;color:#fff;font-size:9px;font-weight:700;padding:2px 6px;border-radius:8px">INACTIF</div>'}
  </div>`}function nt(e,t,n){var v,x,g,i,b;const{openModal:a,closeModal:s,toast:l}=n,f=!e,E=e||{name:"",gc_type:"game_changer",color:"purple",effect:"",image_url:"",sort_order:0,is_active:!0,effect_type:"BOOST_STAT",effect_params:{}},_=(()=>{const d=E.effect_params||{},$=W.find(S=>S.value===(E.effect_type||"BOOST_STAT"))||W[0];return`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${$.hasValue?`<div>
        <label>VALEUR (+N)</label>
        <input id="gc-p-value" type="number" min="1" max="5" value="${d.value||2}">
      </div>`:""}
      ${$.hasCount?`<div>
        <label>NB JOUEURS</label>
        <input id="gc-p-count" type="number" min="1" max="11" value="${d.count||1}">
      </div>`:""}
      ${$.hasTarget?`<div>
        <label>CIBLE</label>
        <select id="gc-p-target">
          <option value="home" ${(d.target||"home")==="home"?"selected":""}>Mon équipe</option>
          <option value="opponent" ${d.target==="opponent"?"selected":""}>Équipe adverse</option>
        </select>
      </div>`:""}
      ${$.hasRoles?`<div>
        <label>POSTES CIBLÉS</label>
        <div style="display:flex;gap:4px;flex-wrap:wrap">
          ${tt.map(S=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555">
            <input type="checkbox" class="gc-p-role" value="${S}" ${!d.roles||d.roles.includes(S)?"checked":""}> ${S}
          </label>`).join("")}
        </div>
      </div>`:""}
    </div>`})(),r=`
    <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:#1a1a2e;border-radius:12px">
      <div id="gc-modal-preview">${fe(E.name||"?",E.image_url?`/icons/${E.image_url}`:null,(Q.find(d=>d.value===E.gc_type)||Q[0]).label.split(" ")[0],E.effect||"",{width:150})}</div>
    </div>

    <div style="display:flex;flex-direction:column;gap:12px">
      <div>
        <label>NOM</label>
        <input id="gc-name" value="${E.name}">
      </div>
      <div>
        <label>EFFET / DESCRIPTION</label>
        <textarea id="gc-effect" rows="3">${E.effect||""}</textarea>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label>TYPE</label>
          <select id="gc-type">
            ${Q.map(d=>`<option value="${d.value}" ${E.gc_type===d.value?"selected":""}>${d.label}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>COULEUR</label>
          <select id="gc-color">
            ${oi.map(d=>`<option value="${d.value}" ${E.color===d.value?"selected":""}>${d.label}</option>`).join("")}
          </select>
        </div>
      </div>
      <div>
        <label>IMAGE (public/icons/gamechanger-*)</label>
        <div style="display:flex;gap:8px;align-items:center;margin-bottom:8px">
          <input id="gc-image-url" value="${E.image_url||""}" placeholder="gamechanger-nom.png" style="flex:1">
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
          <input id="gc-sort" type="number" value="${E.sort_order||0}">
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding-top:20px">
          <input type="checkbox" id="gc-active" ${E.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
          <label for="gc-active" style="cursor:pointer;font-weight:600;text-transform:none">Actif</label>
        </div>
      </div>
      <div style="border-top:1px solid #eee;padding-top:12px;margin-top:4px">
        <label style="color:#7a28b8">EFFET EN JEU</label>
        <div>
          <label>TYPE D'EFFET</label>
          <select id="gc-effect-type" style="margin-bottom:10px">
            ${W.map(d=>`<option value="${d.value}" ${(E.effect_type||"BOOST_STAT")===d.value?"selected":""}>${d.label}</option>`).join("")}
          </select>
        </div>
        <div id="gc-params-wrap">${_}</div>
      </div>
    </div>
  `;a(f?"Nouvelle carte Game Changer":`Modifier : ${E.name}`,r,`
    <button id="gc-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gc-save" class="btn btn-primary">💾 Enregistrer</button>
  `);const p=()=>{var u,w,m,k,A;const d=((u=document.getElementById("gc-name"))==null?void 0:u.value)||"?",$=((w=document.getElementById("gc-effect"))==null?void 0:w.value)||"",S=((m=document.getElementById("gc-type"))==null?void 0:m.value)||"game_changer",o=(A=(k=document.getElementById("gc-image-url"))==null?void 0:k.value)==null?void 0:A.trim(),y=Q.find(I=>I.value===S)||Q[0],h=document.getElementById("gc-modal-preview");h&&(h.innerHTML=fe(d,o?`/icons/${o}`:null,y.label.split(" ")[0],$,{width:150}))};["gc-name","gc-effect","gc-type","gc-image-url"].forEach(d=>{var $,S;($=document.getElementById(d))==null||$.addEventListener("input",p),(S=document.getElementById(d))==null||S.addEventListener("change",p)}),(v=document.getElementById("gc-effect-type"))==null||v.addEventListener("change",()=>{const d=document.getElementById("gc-effect-type").value,$=W.find(o=>o.value===d)||W[0],S=document.getElementById("gc-params-wrap");S.innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${$.hasValue?'<div><label>VALEUR (+N)</label><input id="gc-p-value" type="number" min="1" max="5" value="2"></div>':""}
      ${$.hasCount?'<div><label>NB JOUEURS</label><input id="gc-p-count" type="number" min="1" max="11" value="1"></div>':""}
      ${$.hasTarget?'<div><label>CIBLE</label><select id="gc-p-target"><option value="home">Mon équipe</option><option value="opponent">Équipe adverse</option></select></div>':""}
      ${$.hasRoles?`<div><label>POSTES CIBLÉS</label><div style="display:flex;gap:4px;flex-wrap:wrap">${tt.map(o=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555"><input type="checkbox" class="gc-p-role" value="${o}" checked> ${o}</label>`).join("")}</div></div>`:""}
    </div>`}),(x=document.getElementById("btn-pick-gc-icon"))==null||x.addEventListener("click",async()=>{var $;const d=document.getElementById("gc-icon-picker");if(d){if(d.style.display!=="none"){d.style.display="none";return}d.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',d.style.display="block";try{const o=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),y=Array.isArray(o)?o.filter(u=>u.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(u.name)):[];if(!y.length){d.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const h=(($=document.getElementById("gc-image-url"))==null?void 0:$.value)||"";d.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
        ${y.map(u=>`
        <div class="gc-icon-item" data-name="${u.name}"
          style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${u.name===h?"#7a28b8":"#ddd"};background:${u.name===h?"#f5f0ff":"#fff"}">
          <img src="/icons/${u.name}" style="height:44px;width:100%;object-fit:contain">
          <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
        </div>`).join("")}
      </div>`,d.querySelectorAll(".gc-icon-item").forEach(u=>{u.addEventListener("click",()=>{const w=document.getElementById("gc-image-url");w&&(w.value=u.dataset.name),d.style.display="none",p()})})}catch(S){d.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${S.message}</div>`}}}),(g=document.getElementById("btn-upload-gc-icon"))==null||g.addEventListener("click",async()=>{var h;const d=document.getElementById("gc-image-upload"),$=(h=d==null?void 0:d.files)==null?void 0:h[0];if(!$){l("Choisir une image d'abord","error");return}const S=document.getElementById("gc-upload-status"),o=document.getElementById("btn-upload-gc-icon"),y=o.textContent;try{S.style.display="block",S.textContent="⏳ Upload en cours...",S.style.color="#666",o.disabled=!0;const u=$.name.split(".").pop().toLowerCase();if(!["png","jpg","jpeg","webp"].includes(u))throw new Error("Format invalide (PNG, JPG, WebP)");const m=Date.now(),A=`gamechanger-${$.name.replace(/\.[^.]+$/,"").replace(/[^a-z0-9-]/gi,"_").toLowerCase()}-${m}.${u}`,{data:I,error:B}=await L.storage.from("gc-icons").upload(A,$,{upsert:!1});if(B)throw B;document.getElementById("gc-image-url").value=A,p(),S.textContent="✅ Image uploadée avec succès",S.style.color="#27ae60",o.disabled=!1,o.textContent=y,d.value="",setTimeout(()=>{S.style.display="none"},3e3)}catch(u){S.textContent=`❌ Erreur : ${u.message}`,S.style.color="#c0392b",o.disabled=!1,o.textContent=y}}),(i=document.getElementById("gc-cancel"))==null||i.addEventListener("click",()=>s()),(b=document.getElementById("gc-save"))==null||b.addEventListener("click",async()=>{var h,u,w,m,k,A,I,B,j,R,N,O,F,C;const d=W.find(z=>{var T;return z.value===(((T=document.getElementById("gc-effect-type"))==null?void 0:T.value)||"BOOST_STAT")})||W[0],$=d.hasRoles?[...document.querySelectorAll(".gc-p-role:checked")].map(z=>z.value):null,S={...d.hasValue?{value:Number((h=document.getElementById("gc-p-value"))==null?void 0:h.value)||2}:{},...d.hasCount?{count:Number((u=document.getElementById("gc-p-count"))==null?void 0:u.value)||1}:{},...d.hasTarget?{target:((w=document.getElementById("gc-p-target"))==null?void 0:w.value)||"home"}:{},...d.hasRoles?{roles:$!=null&&$.length?$:null}:{}},o={name:((k=(m=document.getElementById("gc-name"))==null?void 0:m.value)==null?void 0:k.trim())||"",effect:((I=(A=document.getElementById("gc-effect"))==null?void 0:A.value)==null?void 0:I.trim())||null,image_url:((j=(B=document.getElementById("gc-image-url"))==null?void 0:B.value)==null?void 0:j.trim())||null,gc_type:((R=document.getElementById("gc-type"))==null?void 0:R.value)||"game_changer",color:((N=document.getElementById("gc-color"))==null?void 0:N.value)||"purple",sort_order:Number((O=document.getElementById("gc-sort"))==null?void 0:O.value)||0,is_active:((F=document.getElementById("gc-active"))==null?void 0:F.checked)??!0,effect_type:((C=document.getElementById("gc-effect-type"))==null?void 0:C.value)||"BOOST_STAT",effect_params:S};if(!o.name){l("Le nom est obligatoire","error");return}const{error:y}=f?await L.from("gc_definitions").insert(o):await L.from("gc_definitions").update(o).eq("id",E.id);if(y){l(y.message,"error");return}l(f?"Carte créée ✅":"Carte modifiée ✅","success"),s(),Re(t,n)})}async function si(e,{toast:t,openModal:n,closeModal:a}){await G(e,{toast:t,openModal:n,closeModal:a})}async function G(e,t){var h,u,w;const{toast:n,openModal:a,closeModal:s}=t,[{data:l,error:f},{data:E},{data:_},{data:r}]=await Promise.all([L.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),L.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1),L.from("season_reward_tiers").select("*").order("rank_min"),L.from("booster_configs").select("id,name").order("sort_order")]);if(f){e.innerHTML=`<p style="color:red">${f.message}</p>`;return}const c=l||[],p=c.find(m=>m.is_active),v=(E||[]).filter(m=>(m.placement_matches||0)>=1),x=v.filter(m=>(m.placement_matches||0)>=10),g=le.map(m=>m.id),i=Object.fromEntries(le.map(m=>[m.id,m.label])),b=Object.fromEntries(le.map(m=>[m.id,m.color])),d=Object.fromEntries(le.map(m=>[m.id,m.emoji])),$={};g.forEach(m=>{$[m]=0}),x.forEach(m=>{const k=ct(m.mmr??450).id;$[k]!==void 0&&$[k]++});const S=x.length?Math.round(x.reduce((m,k)=>m+(k.mmr||450),0)/x.length):0;function o(m){return m?new Date(m).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function y(m){const k=new Date;return m.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(m.end_at)<k?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${p?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${p.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${v.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Joueurs ranked</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${x.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Classés (10+ matchs)</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${S}</div>
            <div style="font-size:11px;color:var(--gray-600)">MMR moyen</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(p.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${x.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${g.map(m=>{const k=$[m],A=x.length>0?Math.round(k/x.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${d[m]} ${i[m]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${A}%;background:${b[m]};border-radius:4px;transition:width 0.5s"></div>
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
              ${c.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':c.map(m=>{const k=Math.round((new Date(m.end_at)-new Date(m.start_at))/864e5),A=new Date(m.end_at)<new Date&&!m.is_active;return`
                    <tr>
                      <td><b>${m.name}</b></td>
                      <td style="font-size:12px">${o(m.start_at)}</td>
                      <td style="font-size:12px">${o(m.end_at)}</td>
                      <td style="font-size:12px">${k} jours</td>
                      <td>${y(m)}</td>
                      <td style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn btn-ghost btn-sm" data-edit="${m.id}">✏️ Modifier</button>
                        <button class="btn btn-ghost btn-sm" data-rewards-for="${m.id}" style="color:#D4A017;border-color:#D4A017">🏆 Récompenses</button>
                        ${m.is_active?"":`<button class="btn btn-yellow btn-sm" data-launch="${m.id}">▶ Lancer la saison</button>`}
                        ${m.is_active?`<button class="btn btn-ghost btn-sm" data-deactivate="${m.id}" style="color:#e67e22">⏹ Désactiver</button>`:`<button class="btn btn-primary btn-sm" data-activate="${m.id}">▶ Activer</button>`}
                        ${A?`<button class="btn btn-danger btn-sm" data-delete="${m.id}">🗑</button>`:""}
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
              ${(_||[]).map(m=>{var I;const k=!m.activate_at||new Date(m.activate_at)<=new Date;return`<tr>
                  <td style="font-size:12px">${((I=c.find(B=>B.id===m.season_id))==null?void 0:I.name)||"—"}</td>
                  <td><b>${m.label}</b></td>
                  <td>${m.rank_min===m.rank_max?`#${m.rank_min}`:`#${m.rank_min}–${m.rank_max}`}</td>
                  <td style="text-align:right">${(m.credits||0).toLocaleString("fr")}</td>
                  <td style="text-align:center">${(m.player_ids||[]).length}</td>
                  <td style="text-align:center">${(m.booster_config_ids||[]).length}</td>
                  <td style="font-size:12px">${m.activate_at?o(m.activate_at):"Immédiat"}</td>
                  <td>
                    ${m.distributed_at?`<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Distribué le ${o(m.distributed_at)}</span>`:k?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">● Prêt</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">⏳ Programmé</span>'}
                  </td>
                  <td style="white-space:nowrap">
                    <button class="btn btn-ghost btn-sm" data-edit-tier="${m.id}">✏️</button>
                    <button class="btn btn-primary btn-sm" data-distribute-tier="${m.id}" ${k?"":"disabled"}>🎁 Distribuer</button>
                    <button class="btn btn-danger btn-sm" data-delete-tier="${m.id}">🗑️</button>
                  </td>
                </tr>`}).join("")||'<tr><td colspan="9" style="text-align:center;color:var(--tile-fg-dim);padding:16px">Aucun palier configuré.</td></tr>'}
            </tbody>
          </table>
        </div>`:'<div style="color:var(--tile-fg-dim);font-size:13px;padding:10px">Crée une saison pour configurer ses récompenses.</div>'}
      </div>
    </div>`,(h=document.getElementById("create-season-btn"))==null||h.addEventListener("click",()=>{it(null,{toast:n,openModal:a,closeModal:s,reload:()=>G(e,t)})}),(u=document.getElementById("start-new-season-btn"))==null||u.addEventListener("click",()=>{di(p,{toast:n,openModal:a,closeModal:s,reload:()=>G(e,t)})}),e.querySelectorAll("[data-edit]").forEach(m=>{const k=c.find(A=>A.id==m.dataset.edit);m.addEventListener("click",()=>{it(k,{toast:n,openModal:a,closeModal:s,reload:()=>G(e,t)})})}),e.querySelectorAll("[data-activate]").forEach(m=>{m.addEventListener("click",async()=>{const k=parseInt(m.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:A}=await L.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(A){n(A.message,"error");return}const{error:I}=await L.from("ranked_seasons").update({is_active:!0}).eq("id",k);if(I){n(I.message,"error");return}await L.from("users").update({current_season_id:k}).gt("placement_matches",0),n("Saison activée ✅","success"),G(e,t)})}),e.querySelectorAll("[data-rewards-for]").forEach(m=>{m.addEventListener("click",()=>{var I;const k=parseInt(m.dataset.rewardsFor);(I=document.getElementById("rewards-section"))==null||I.scrollIntoView({behavior:"smooth",block:"start"});const A=c.find(B=>B.id===k);_e(null,c,A,r||[],{toast:n,openModal:a,closeModal:s,reload:()=>G(e,t)})})}),e.querySelectorAll("[data-launch]").forEach(m=>{m.addEventListener("click",async()=>{const k=parseInt(m.dataset.launch),A=c.find(j=>j.id===k);if(!confirm(`Lancer "${A==null?void 0:A.name}" ?

Ceci va :
• Journaliser le classement actuel dans l'historique
• Recalculer le MMR de TOUS les joueurs (reset doux)
• Activer cette saison

Action irréversible. Continuer ?`))return;m.disabled=!0,m.textContent="⏳ Lancement...";const{data:I,error:B}=await L.rpc("admin_launch_season",{p_season_id:k});if(m.disabled=!1,m.textContent="▶ Lancer la saison",B){n(B.message,"error");return}if(!(I!=null&&I.success)){n((I==null?void 0:I.error)||"Échec du lancement","error");return}n(`Saison lancée ✅ (${I.logged} classement(s) archivé(s), ${I.reset} joueur(s) recalculé(s))`,"success"),G(e,t)})}),e.querySelectorAll("[data-deactivate]").forEach(m=>{m.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:k}=await L.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(m.dataset.deactivate));if(k){n(k.message,"error");return}n("Saison désactivée","success"),G(e,t)})}),e.querySelectorAll("[data-delete]").forEach(m=>{m.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:k}=await L.from("ranked_seasons").delete().eq("id",parseInt(m.dataset.delete));if(k){n(k.message,"error");return}n("Saison supprimée","success"),G(e,t)})}),(w=document.getElementById("add-reward-tier-btn"))==null||w.addEventListener("click",()=>{_e(null,c,p,r||[],{toast:n,openModal:a,closeModal:s,reload:()=>G(e,t)})}),e.querySelectorAll("[data-edit-tier]").forEach(m=>{const k=(_||[]).find(A=>A.id===m.dataset.editTier);m.addEventListener("click",()=>{_e(k,c,p,r||[],{toast:n,openModal:a,closeModal:s,reload:()=>G(e,t)})})}),e.querySelectorAll("[data-distribute-tier]").forEach(m=>{m.addEventListener("click",async()=>{const k=(_||[]).find(B=>B.id===m.dataset.distributeTier);if(!confirm(`Distribuer les récompenses du palier "${k==null?void 0:k.label}" à tous les joueurs concernés ?`))return;m.disabled=!0,m.textContent="⏳...";const{data:A,error:I}=await L.rpc("admin_distribute_season_reward",{p_tier_id:m.dataset.distributeTier});if(I){n(I.message,"error"),m.disabled=!1,m.textContent="🎁 Distribuer";return}if(!(A!=null&&A.success)){n((A==null?void 0:A.error)||"Échec de la distribution","error"),m.disabled=!1,m.textContent="🎁 Distribuer";return}n(`Récompenses distribuées à ${A.rewarded} joueur(s) ✅`,"success"),G(e,t)})}),e.querySelectorAll("[data-delete-tier]").forEach(m=>{m.addEventListener("click",async()=>{if(!confirm("Supprimer ce palier de récompense ?"))return;const{error:k}=await L.from("season_reward_tiers").delete().eq("id",m.dataset.deleteTier);if(k){n(k.message,"error");return}n("Palier supprimé","success"),G(e,t)})})}function _e(e,t,n,a,{toast:s,openModal:l,closeModal:f,reload:E}){var i,b,d,$,S;const _=!!e,r=(e==null?void 0:e.season_id)??(n==null?void 0:n.id)??((i=t[0])==null?void 0:i.id)??null;let c=[];const p=o=>{if(!o)return"";const y=new Date(o);return new Date(y.getTime()-y.getTimezoneOffset()*6e4).toISOString().slice(0,16)},v=`
    <div style="display:flex;flex-direction:column;gap:12px">
      <div>
        <label>SAISON RANKED</label>
        <select id="rt-season">
          ${t.map(o=>`<option value="${o.id}" ${o.id===r?"selected":""}>${o.name}${o.is_active?" (active)":""}</option>`).join("")}
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
        <input id="rt-activate-at" type="datetime-local" value="${p(e==null?void 0:e.activate_at)}">
      </div>
      <div>
        <label>BOOSTERS OFFERTS</label>
        <div style="display:flex;flex-direction:column;gap:6px;max-height:140px;overflow-y:auto;background:#f7f7f7;border-radius:8px;padding:8px">
          ${a.length?a.map(o=>`
            <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;color:#333">
              <input type="checkbox" class="rt-booster-cb" value="${o.id}" ${((e==null?void 0:e.booster_config_ids)||[]).includes(o.id)?"checked":""}>
              ${o.name}
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
  `;l(_?`Modifier : ${e.label}`:"Nouveau palier de récompense",v,`
    <button id="rt-cancel" class="btn btn-ghost">Annuler</button>
    <button id="rt-save" class="btn btn-primary">💾 Enregistrer</button>
  `);function g(){const o=document.getElementById("rt-player-chips");o&&(o.innerHTML=c.map(y=>`
      <span style="display:inline-flex;align-items:center;gap:6px;background:#1A6B3C;color:#fff;font-size:12px;font-weight:700;padding:4px 8px;border-radius:14px">
        ${y.label}
        <button data-remove-player="${y.id}" style="background:none;border:none;color:#fff;cursor:pointer;font-size:12px;padding:0">✕</button>
      </span>`).join(""),o.querySelectorAll("[data-remove-player]").forEach(y=>{y.addEventListener("click",()=>{c=c.filter(h=>h.id!==y.dataset.removePlayer),g()})}))}(b=e==null?void 0:e.player_ids)!=null&&b.length&&L.from("players").select("id,firstname,surname_real").in("id",e.player_ids).then(({data:o})=>{c=(o||[]).map(y=>({id:y.id,label:`${y.firstname} ${y.surname_real}`})),g()}),(d=document.getElementById("rt-player-search-btn"))==null||d.addEventListener("click",async()=>{const o=document.getElementById("rt-player-search").value.trim();if(o.length<2)return;const{data:y}=await L.from("players").select("id,firstname,surname_real,rarity").or(`firstname.ilike.%${o}%,surname_real.ilike.%${o}%`).limit(10),h=document.getElementById("rt-player-results");if(!(y!=null&&y.length)){h.style.display="flex",h.innerHTML='<div style="color:#999;font-size:12px;padding:4px">Aucun résultat.</div>';return}h.style.display="flex",h.innerHTML=y.map(u=>`
      <div data-add-player="${u.id}" data-label="${u.firstname} ${u.surname_real}" style="cursor:pointer;padding:6px 8px;border-radius:6px;font-size:13px;color:#333" onmouseover="this.style.background='#eee'" onmouseout="this.style.background=''">
        ${u.firstname} ${u.surname_real} <span style="color:#999;font-size:11px">(${u.rarity})</span>
      </div>`).join(""),h.querySelectorAll("[data-add-player]").forEach(u=>{u.addEventListener("click",()=>{const w=u.dataset.addPlayer;c.some(m=>m.id===w)||c.push({id:w,label:u.dataset.label}),g(),h.style.display="none",document.getElementById("rt-player-search").value=""})})}),($=document.getElementById("rt-cancel"))==null||$.addEventListener("click",()=>f()),(S=document.getElementById("rt-save"))==null||S.addEventListener("click",async()=>{const o=document.getElementById("rt-error"),y=parseInt(document.getElementById("rt-season").value),h=document.getElementById("rt-label").value.trim(),u=parseInt(document.getElementById("rt-rank-min").value)||1,w=parseInt(document.getElementById("rt-rank-max").value)||1,m=parseInt(document.getElementById("rt-credits").value)||0,k=document.getElementById("rt-activate-at").value,A=k?new Date(k).toISOString():null,I=[...document.querySelectorAll(".rt-booster-cb:checked")].map(R=>R.value);if(!h){o.textContent="Le libellé est obligatoire.";return}if(u>w){o.textContent="Le classement min doit être ≤ au max.";return}if(!y){o.textContent="Choisis une saison.";return}const B={season_id:y,label:h,rank_min:u,rank_max:w,credits:m,booster_config_ids:I,player_ids:c.map(R=>R.id),activate_at:A},{error:j}=_?await L.from("season_reward_tiers").update(B).eq("id",e.id):await L.from("season_reward_tiers").insert(B);if(j){o.textContent=j.message;return}s(_?"Palier modifié ✅":"Palier créé ✅","success"),f(),E()})}function di(e,{toast:t,openModal:n,closeModal:a,reload:s}){var c,p;const l=new Date,f=new Date(l.getTime()+30*864e5),E=v=>v.toISOString().slice(0,10),_=`
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
          <input id="sns-start" type="date" value="${E(l)}">
        </div>
        <div>
          <label>DATE DE FIN</label>
          <input id="sns-end" type="date" value="${E(f)}">
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
  `),(c=document.getElementById("sns-cancel"))==null||c.addEventListener("click",()=>a()),(p=document.getElementById("sns-launch"))==null||p.addEventListener("click",async()=>{const v=document.getElementById("sns-error"),x=document.getElementById("sns-name").value.trim(),g=document.getElementById("sns-start").value,i=document.getElementById("sns-end").value,b=document.getElementById("sns-confirm").checked;if(!x){v.textContent="Le nom de la saison est requis.";return}if(!g||!i){v.textContent="Les deux dates sont requises.";return}if(new Date(g)>=new Date(i)){v.textContent="La date de fin doit être après la date de début.";return}if(!b){v.textContent="Coche la case de confirmation pour continuer.";return}const d=document.getElementById("sns-launch");d.disabled=!0,d.textContent="⏳ Recalcul en cours...";const{data:$,error:S}=await L.rpc("admin_start_new_season",{p_name:x,p_start_at:new Date(g).toISOString(),p_end_at:new Date(i).toISOString()});if(d.disabled=!1,d.textContent="🚀 Démarrer la saison",S){v.textContent=S.message;return}if(!($!=null&&$.success)){v.textContent=($==null?void 0:$.error)||"Échec de l'opération.";return}t(`Nouvelle saison démarrée ✅ (${$.users_reset} joueur(s) recalculé(s))`,"success"),a(),s()})}function it(e,{toast:t,openModal:n,closeModal:a,reload:s}){const l=!!e,f=new Date().toISOString().slice(0,16),E=new Date(Date.now()+90*864e5).toISOString().slice(0,16),_=e?new Date(e.start_at).toISOString().slice(0,16):f,r=e?new Date(e.end_at).toISOString().slice(0,16):E,c=(e==null?void 0:e.name)||"";n(l?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
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
        <input id="season-end" type="datetime-local" value="${r}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${l?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function p(){var b,d;const v=(b=document.getElementById("season-start"))==null?void 0:b.value,x=(d=document.getElementById("season-end"))==null?void 0:d.value,g=document.getElementById("season-duration");if(!v||!x||!g)return;const i=Math.round((new Date(x)-new Date(v))/864e5);g.textContent=i>0?`Durée : ${i} jour${i>1?"s":""}`:"⚠️ La fin doit être après le début",g.style.color=i>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var v,x,g;(v=document.getElementById("season-start"))==null||v.addEventListener("input",p),(x=document.getElementById("season-end"))==null||x.addEventListener("input",p),p(),(g=document.getElementById("season-save-btn"))==null||g.addEventListener("click",async()=>{var h,u,w;const i=(h=document.getElementById("season-name"))==null?void 0:h.value.trim(),b=(u=document.getElementById("season-start"))==null?void 0:u.value,d=(w=document.getElementById("season-end"))==null?void 0:w.value,$=document.getElementById("season-error");if(!i){$.textContent="Le nom est requis.";return}if(!b){$.textContent="La date de début est requise.";return}if(!d){$.textContent="La date de fin est requise.";return}if(new Date(d)<=new Date(b)){$.textContent="La date de fin doit être après le début.";return}const S=document.getElementById("season-save-btn");S.disabled=!0,S.textContent="Enregistrement…";const o={name:i,start_at:new Date(b).toISOString(),end_at:new Date(d).toISOString()};let y;if(l?{error:y}=await L.from("ranked_seasons").update(o).eq("id",e.id):{error:y}=await L.from("ranked_seasons").insert({...o,is_active:!1}),y){$.textContent=y.message,S.disabled=!1,S.textContent=l?"💾 Enregistrer":"✅ Créer la saison";return}t(l?"Saison modifiée ✅":"Saison créée ✅","success"),a(),s()})},50)}async function Le(e,t){var _;const{toast:n}=t,{data:a,error:s}=await L.from("solo_levels").select("*").order("level_number");if(s){e.innerHTML=`<p style="color:var(--danger)">${s.message}</p>`;return}const l=r=>`
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
            ${(a||[]).map(l).join("")||'<tr><td colspan="8" style="text-align:center;color:#aaa;padding:20px">Aucun niveau défini.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;function f(){document.querySelectorAll("#solo-tbody [data-field]").forEach(r=>{r.addEventListener("change",()=>E(r))})}async function E(r){const c=r.dataset.id,p=r.dataset.field,v=p==="is_active"?r.checked:Number(r.value)||0,{error:x}=await L.from("solo_levels").update({[p]:v}).eq("id",c);if(x){n(x.message,"error");return}r.style.transition="background .3s",r.style.background="#e8f8ee",setTimeout(()=>{r.style.background=""},500)}f(),document.querySelectorAll("[data-del-row]").forEach(r=>{r.addEventListener("click",async()=>{confirm("Supprimer ce niveau ? Les joueurs ayant progressé au-delà seront affectés.")&&(await L.from("solo_levels").delete().eq("id",r.dataset.delRow),n("Niveau supprimé","success"),Le(e,t))})}),(_=document.getElementById("solo-add-row"))==null||_.addEventListener("click",async()=>{const c={level_number:Math.max(0,...(a||[]).map(x=>x.level_number))+1,target_note_avg:10,nb_liens_jaune:2,nb_liens_vert:1,nb_joueurs_stade:2,reward_credits:500,is_active:!0},{data:p,error:v}=await L.from("solo_levels").insert(c).select().single();if(v){n(v.message,"error");return}n("Niveau ajouté — modifie les valeurs directement","success"),Le(e,t)})}Wt(dt);function ci(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function pi(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function Se(){document.getElementById("modal-overlay").classList.add("hidden")}const at={dashboard:{title:"Dashboard",fn:pt},players:{title:"Joueurs & Cartes",fn:nn},clubs:{title:"Clubs",fn},"card-builder":{title:"Card Builder",fn:kn},users:{title:"Managers",fn:Ie},market:{title:"Mercato",fn:Lt},"import-export":{title:"Import / Export CSV",fn:Pn},formations:{title:"Formations & Liens",fn:On},"boosters-config":{title:"Boosters",fn:Hn},"sell-price":{title:"Prix vente directe",fn:Kn},journal:{title:"Actualités",fn:Yn},tutorial:{title:"Tutoriel",fn:Xn},stadiums:{title:"Stades",fn:ii},"gc-cards":{title:"Game Changers",fn:ri},"ranked-seasons":{title:"Saisons Ranked",fn:si},"solo-mode":{title:"Solo Mode",fn:Le}};async function ve(e){document.querySelectorAll(".admin-sidebar nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===e)});const t=document.getElementById("mobile-page-select");t&&(t.value=e);const n=at[e]||at.dashboard;document.getElementById("page-title").textContent=n.title;const a=document.getElementById("page-content");a.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(a,{toast:ci,openModal:pi,closeModal:Se,navigate:ve})}catch(s){a.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${s.message}</div>`,console.error(s)}}async function ui(){var t;const{data:{session:e}}=await L.auth.getSession();e&&await ot(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),a=document.getElementById("auth-password").value,s=document.getElementById("auth-error");if(s.textContent="",!n||!a){s.textContent="Remplissez tous les champs.";return}const{data:l,error:f}=await L.auth.signInWithPassword({email:n,password:a});if(f){s.textContent=f.message;return}await ot(l.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await L.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",Se),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&Se()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",a=>{a.preventDefault(),ve(n.dataset.page)})}),(t=document.getElementById("mobile-page-select"))==null||t.addEventListener("change",n=>{ve(n.target.value)})}async function ot(e){const{data:t,error:n}=await L.from("users").select("*").eq("id",e.id).single(),a=document.getElementById("auth-error");if(n||!t){a.textContent="Profil introuvable.";return}if(!t.is_admin){a.textContent="Accès refusé. Vous n'êtes pas administrateur.",await L.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,ve("dashboard")}ui();
