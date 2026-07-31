import{s as _,i as Et,r as we,a as $e,A as _t,l as wt,g as $t,K as Re,D as F,b as It,S as kt,c as O,H as Lt,R as Bt,e as pe,d as Xe,f as At,h as St,E as Ct,j as Tt,N as Mt,M as zt,B as Rt,k as Dt,F as ge,m as De,n as jt,o as et,p as be,q as Nt}from"./special-cards-DNsLLa5x.js";async function tt(e){var o;const[{count:t},{count:n},{count:a},{count:u},{count:d},{data:g},{data:v}]=await Promise.all([_.from("players").select("*",{count:"exact",head:!0}),_.from("clubs").select("*",{count:"exact",head:!0}),_.from("users").select("*",{count:"exact",head:!0}),_.from("stadium_definitions").select("*",{count:"exact",head:!0}),_.from("users").select("*",{count:"exact",head:!0}).gt("last_seen_at",new Date(Date.now()-18e4).toISOString()),_.rpc("get_signup_password"),_.from("app_feature_flags").select("*").order("key")]),h=g||"";e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:24px">

      <!-- Managers -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">👥 Managers</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${a??"–"}</div>
        <div style="display:flex;align-items:center;gap:6px;margin-top:10px;font-size:12px;color:var(--tile-fg-dim)">
          <span style="width:8px;height:8px;border-radius:50%;background:#2ecc71;display:inline-block;box-shadow:0 0 6px #2ecc71"></span>
          ${d??0} joueurs connectés
        </div>
      </div>

      <!-- Stadiums -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">🏟️ Stadiums</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${u??"–"}</div>
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
        <input id="signup-pwd-input" type="text" value="${h.replace(/"/g,"&quot;")}" style="flex:1">
        <button id="signup-pwd-save" class="btn btn-primary">💾 Enregistrer</button>
      </div>
      <div id="signup-pwd-status" style="font-size:12px;margin-top:8px;min-height:16px"></div>
    </div>
    <div class="card-panel" style="margin-top:20px">
      <h3 style="font-size:14px;margin-bottom:4px;font-weight:600;color:var(--tile-fg-on-page)">🧪 Modes activables</h3>
      <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:14px">Active/désactive des fonctionnalités entières de l'app. Quand désactivé, un popup "Module en cours de développement" s'affiche à la place.</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${(v||[]).map(l=>`
          <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-radius:10px;background:var(--tile-bg);border:1px solid var(--tile-border)">
            <div>
              <div style="font-weight:700;font-size:14px;color:var(--tile-fg-on-page)">${l.label}</div>
              <div style="font-size:11px;color:var(--tile-fg-dim)">${l.enabled?"✅ Activé":"⛔ Désactivé"}</div>
            </div>
            <button class="feature-flag-toggle" data-key="${l.key}" data-enabled="${l.enabled}"
              style="width:52px;height:28px;border-radius:20px;border:none;cursor:pointer;position:relative;background:${l.enabled?"#1A6B3C":"#555"};transition:background .2s">
              <span style="position:absolute;top:3px;left:${l.enabled?"27px":"3px"};width:22px;height:22px;border-radius:50%;background:#fff;transition:left .2s"></span>
            </button>
          </div>
        `).join("")||'<div style="font-size:12px;color:var(--tile-fg-dim)">Aucun mode configuré — lance la migration correspondante.</div>'}
      </div>
    </div>
  `,window.adminNav=l=>{var i;(i=document.querySelector(`[data-page="${l}"]`))==null||i.click()},e.querySelectorAll(".feature-flag-toggle").forEach(l=>{l.addEventListener("click",async()=>{const i=l.dataset.key,r=l.dataset.enabled!=="true";l.disabled=!0;const{error:p}=await _.from("app_feature_flags").update({enabled:r,updated_at:new Date().toISOString()}).eq("key",i);if(l.disabled=!1,p){alert(p.message);return}Et(),tt(e)})}),(o=document.getElementById("signup-pwd-save"))==null||o.addEventListener("click",async()=>{const l=document.getElementById("signup-pwd-input").value.trim(),i=document.getElementById("signup-pwd-status");if(!l){i.textContent="Le code ne peut pas être vide.",i.style.color="#ff6b6b";return}const r=document.getElementById("signup-pwd-save");r.disabled=!0,r.textContent="⏳...";const{error:p}=await _.rpc("set_signup_password",{new_password:l});if(r.disabled=!1,r.textContent="💾 Enregistrer",p){i.textContent=p.message,i.style.color="#ff6b6b";return}i.textContent="✅ Code mis à jour.",i.style.color="#2ecc71"})}const nt={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},Pt={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Ft(){const e={};for(const t of _t)e[t]=await wt(t);return e}async function Ot(e,t){const{toast:n}=t;if(!confirm(`Réattribuer une nouvelle photo à tous les joueurs ayant encore l'ancien format de chemin (public/faces/...) ?

Cette action est irréversible.`))return;const a=document.getElementById("fix-old-faces-btn");a&&(a.disabled=!0,a.textContent="⏳ En cours...");try{const{data:u,error:d}=await _.from("players").select("id, country_code, face").like("face","public/faces/%");if(d){n(d.message,"error");return}if(!(u!=null&&u.length)){n("Aucun joueur avec l'ancien format — rien à faire ✅","success");return}const{data:g}=await _.from("players").select("face").not("face","is",null),v=new Set((g||[]).map(l=>l.face).filter(l=>l&&!l.startsWith("public/faces/")));let h=0,o=0;for(const l of u){const i=await $e(l.country_code,v);if(!i){o++;continue}const{error:r}=await _.from("players").update({face:i}).eq("id",l.id);if(r){o++;continue}v.add(i),h++}n(`${h} photo(s) réattribuée(s)${o?`, ${o} échec(s)`:""} ✅`,o?"error":"success")}finally{a&&(a.disabled=!1,a.textContent="🖼️ Réattribuer anciennes photos")}}async function Ut(e,t){await se(e,t)}async function se(e,t,n=null){var o,l,i,r,p;const{toast:a}=t;n||(n={search:((o=document.getElementById("search-players"))==null?void 0:o.value)||"",job:((l=document.getElementById("filter-job"))==null?void 0:l.value)||"",rarity:((i=document.getElementById("filter-rarity"))==null?void 0:i.value)||"",club:((r=document.getElementById("filter-club"))==null?void 0:r.value)||"",country:((p=document.getElementById("filter-country"))==null?void 0:p.value)||""});const[{data:u,error:d},{data:g}]=await Promise.all([_.from("players").select("*, clubs(id,encoded_name,logo_url)"),_.from("clubs").select("id,encoded_name").order("encoded_name")]);if(d){e.innerHTML=`<p style="color:red">${d.message}</p>`;return}const v={GK:0,DEF:1,MIL:2,ATT:3},h=(u||[]).sort((s,f)=>{const x=(v[s.job]??4)-(v[f.job]??4);return x!==0?x:(s.surname_real||"").localeCompare(f.surname_real||"")});qt(e,h,g||[],t,n)}function qt(e,t,n,a,u=null){var l,i;const{toast:d}=a;if(e.innerHTML=`
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
          ${Object.entries(nt).map(([r,p])=>`<option value="${r}">${p}</option>`).join("")}
        </select>
        <button class="btn btn-primary" id="add-player-btn" style="white-space:nowrap">+ Joueur</button>
        <button class="btn btn-ghost" id="fix-old-faces-btn" style="white-space:nowrap">🖼️ Réattribuer anciennes photos</button>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <select id="filter-club" style="flex:1;min-width:140px">
          <option value="">Tous les clubs</option>
          ${n.map(r=>`<option value="${r.id}">${r.encoded_name}</option>`).join("")}
        </select>
        <select id="filter-country" style="flex:1;min-width:120px">
          <option value="">Tous les pays</option>
          ${[...new Set(t.map(r=>r.country_code).filter(Boolean))].sort().map(r=>`<option value="${r}">${r}</option>`).join("")}
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
    </div>`,u){const r=u,p=s=>document.getElementById(s);r.search&&p("search-players")&&(p("search-players").value=r.search),r.job&&p("filter-job")&&(p("filter-job").value=r.job),r.rarity&&p("filter-rarity")&&(p("filter-rarity").value=r.rarity),r.club&&p("filter-club")&&(p("filter-club").value=r.club),r.country&&p("filter-country")&&(p("filter-country").value=r.country)}if(u){const r=u,p=s=>document.getElementById(s);r.search&&p("search-players")&&(p("search-players").value=r.search),r.job&&p("filter-job")&&(p("filter-job").value=r.job),r.rarity&&p("filter-rarity")&&(p("filter-rarity").value=r.rarity),r.club&&p("filter-club")&&(p("filter-club").value=r.club),r.country&&p("filter-country")&&(p("filter-country").value=r.country)}function g(){const r=document.getElementById("search-players").value.toLowerCase(),p=document.getElementById("filter-job").value,s=document.getElementById("filter-rarity").value,f=document.getElementById("filter-club").value,x=document.getElementById("filter-country").value;return t.filter(c=>(!r||`${c.firstname} ${c.surname_real}`.toLowerCase().includes(r))&&(!p||c.job===p)&&(!s||c.rarity===s)&&(!f||c.club_id===f)&&(!x||c.country_code===x))}const v=new Set;function h(){const r=document.getElementById("bulk-bar"),p=document.getElementById("bulk-count");r&&(r.style.display=v.size>0?"flex":"none",p&&(p.textContent=`${v.size} joueur(s) sélectionné(s)`))}function o(){const r=g();document.getElementById("count-label").textContent=`${r.length} joueur(s)`;const p=document.getElementById("players-list");if(!r.length){p.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}p.innerHTML=r.map(s=>{const f={...s,clubs:s.clubs,face:s.face||null},x=we(f,{width:120});return`<div style="position:relative;cursor:pointer" data-edit="${s.id}">
        ${x}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${s.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),p.querySelectorAll("[data-edit]").forEach(s=>{s.addEventListener("click",()=>{const f=t.find(x=>x.id===s.dataset.edit);f&&je(f,n,e,a)})}),p.querySelectorAll(".btn-del-player").forEach(s=>{s.addEventListener("click",async f=>{if(f.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:x}=await _.from("players").delete().eq("id",s.dataset.del);x?d(x.message,"error"):(d("Joueur supprimé ✅","success"),se(e,a))})})}o(),document.getElementById("search-players").addEventListener("input",o),document.getElementById("filter-job").addEventListener("change",o),document.getElementById("filter-rarity").addEventListener("change",o),document.getElementById("filter-club").addEventListener("change",o),document.getElementById("filter-country").addEventListener("change",o),(l=document.getElementById("bulk-cancel-btn"))==null||l.addEventListener("click",()=>{v.clear(),h(),o()}),(i=document.getElementById("bulk-delete-btn"))==null||i.addEventListener("click",async()=>{var f,x,c,k,L;if(!v.size||!confirm(`Supprimer ${v.size} joueur(s) ?`))return;const r=[...v],{error:p}=await _.from("players").delete().in("id",r);if(p){d(p.message,"error");return}d(`${r.length} joueur(s) supprimé(s) ✅`,"success"),v.clear();const s={search:((f=document.getElementById("search-players"))==null?void 0:f.value)||"",job:((x=document.getElementById("filter-job"))==null?void 0:x.value)||"",rarity:((c=document.getElementById("filter-rarity"))==null?void 0:c.value)||"",club:((k=document.getElementById("filter-club"))==null?void 0:k.value)||"",country:((L=document.getElementById("filter-country"))==null?void 0:L.value)||""};se(e,a,s)}),document.getElementById("add-player-btn").addEventListener("click",()=>je(null,n,e,a)),document.getElementById("fix-old-faces-btn").addEventListener("click",()=>Ot(e,a))}async function je(e,t,n,a){const{toast:u,openModal:d,closeModal:g}=a,v=!!e,h=await Ft(),{data:o}=await _.from("players").select("face").not("face","is",null),l=new Set((o||[]).map(s=>s.face).filter(Boolean));e!=null&&e.face&&l.delete(e.face);const i='<option value="">— Club —</option>'+t.map(s=>`<option value="${s.id}" ${(e==null?void 0:e.club_id)===s.id?"selected":""}>${s.encoded_name}</option>`).join(""),r=e!=null&&e.face?e.face.split("/")[0]:"",p=Object.keys(h).map(s=>`<option value="${s}" ${r===s?"selected":""}>${s}</option>`).join("");d(v?`✏️ ${e.firstname} ${e.surname_real}`:"➕ Nouveau joueur",`<div style="display:flex;gap:20px;align-items:flex-start">

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
              ${["normal","pepite","papyte","legende"].map(s=>`<option value="${s}" ${(e==null?void 0:e.rarity)===s?"selected":""}>${nt[s]}</option>`).join("")}
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
            <select id="pm-club">${i}</select>
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
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([s,f,x])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${Pt[s]};font-weight:700">${s}</label>
                <input id="${f}" type="number" min="0" max="20" value="${(e==null?void 0:e[x])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
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
                ${p}
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
          ${v?"💾 Enregistrer":"✅ Créer le joueur"}
        </button>
        </div>
      </div>
    </div>`),setTimeout(()=>{var L,y,I;let s=(e==null?void 0:e.face)||null;function f(){var R,N,G,V,J,Y,W,Ce,Te,Me,ze;const E=document.getElementById("card-preview");if(!E)return;const b=((R=document.getElementById("pm-fn"))==null?void 0:R.value)||"",$=(((N=document.getElementById("pm-real"))==null?void 0:N.value)||"").toUpperCase(),m=((G=document.getElementById("pm-job"))==null?void 0:G.value)||"ATT",w=((V=document.getElementById("pm-job2"))==null?void 0:V.value)||null,B=((J=document.getElementById("pm-rarity"))==null?void 0:J.value)||"normal",S=((Y=document.getElementById("pm-country"))==null?void 0:Y.value)||"FR",C=((W=document.getElementById("pm-club"))==null?void 0:W.value)||null,D=document.getElementById("pm-club"),j=D==null?void 0:D.options[D.selectedIndex];(j==null?void 0:j.text)!=="— Club —"&&(j==null||j.text);const U=parseInt((Ce=document.getElementById("pm-g"))==null?void 0:Ce.value)||0,q=parseInt((Te=document.getElementById("pm-d"))==null?void 0:Te.value)||0,H=parseInt((Me=document.getElementById("pm-m"))==null?void 0:Me.value)||0,A=parseInt((ze=document.getElementById("pm-a"))==null?void 0:ze.value)||0,z=t.find(ht=>ht.id===C),T={firstname:b||"Prénom",surname_real:$||"NOM",job:m,job2:w||null,rarity:B,country_code:S,club_id:C,note_g:U,note_d:q,note_m:H,note_a:A,face:s||null,clubs:z?{encoded_name:z.encoded_name,logo_url:z.logo_url}:null};E.innerHTML=we(T,{width:160});const M=document.getElementById("pm-minmax");M&&(M.style.display=["pepite","papyte"].includes(B)?"grid":"none")}function x(E){const b=document.getElementById("faces-grid"),$=document.getElementById("pm-face");if(!b||!$)return;const m=h[E]||[];if(console.log("[players] loadFacesGrid folder=",E,"files=",m.length,m.slice(0,5)),!m.length){$.innerHTML='<option value="">— Aucun visage disponible —</option>',b.innerHTML=`<p style="font-size:11px;color:#888;font-style:italic">Aucune image dans le dossier "${E}" du bucket Supabase.</p>`;return}const w=m.filter(B=>{const S=E+"/"+B;return S===s||!l.has(S)});$.innerHTML='<option value="">— Choisir un visage —</option>'+w.map(B=>{const S=E+"/"+B;return`<option value="${S}" ${s===S?"selected":""}>${B}</option>`}).join(""),b.innerHTML=w.map(B=>{const S=E+"/"+B,C=s===S,D=$t({face:S});return`<div data-face="${S}" style="cursor:pointer;border:2px solid ${C?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${D}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),b.querySelectorAll("[data-face]").forEach(B=>{B.addEventListener("click",()=>{s=B.dataset.face;const S=document.getElementById("pm-face");S&&(S.value=s),b.querySelectorAll("[data-face]").forEach(C=>{C.style.border=`2px solid ${C.dataset.face===s?"#4fc3f7":"transparent"}`}),f()})})}const c=e!=null&&e.face?e.face.split("/")[0]:"";c&&h[c]&&(document.getElementById("pm-folder").value=c,x(c)),(L=document.getElementById("pm-folder"))==null||L.addEventListener("change",E=>{x(E.target.value)}),(y=document.getElementById("pm-face"))==null||y.addEventListener("change",E=>{s=E.target.value||null,f()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach(E=>{var b,$;(b=document.getElementById(E))==null||b.addEventListener("input",f),($=document.getElementById(E))==null||$.addEventListener("change",f)}),(I=document.getElementById("pm-save"))==null||I.addEventListener("click",()=>Gt(e,v,s,n,a)),f()},50)}function Ht(e){const t=n=>{var a;return(a=document.getElementById(n))==null?void 0:a.value};return{firstname:(t("pm-fn")||"").trim(),surname_real:(t("pm-real")||"").trim()||"JOUEUR",country_code:t("pm-country")||"FR",club_id:t("pm-club")||null,job:t("pm-job")||"ATT",job2:t("pm-job2")||null,rarity:t("pm-rarity")||"normal",note_g:parseInt(t("pm-g"))||0,note_d:parseInt(t("pm-d"))||0,note_m:parseInt(t("pm-m"))||0,note_a:parseInt(t("pm-a"))||0,note_min:parseInt(t("pm-nmin"))||null,note_max:parseInt(t("pm-nmax"))||null,sell_price:parseInt(t("pm-price"))||0,face:e||null,ethnie:t("pm-folder")||null,is_active:!0}}async function Gt(e,t,n,a,u){var p,s,f,x,c;const{toast:d,closeModal:g}=u,v=document.getElementById("pm-error"),h=document.getElementById("pm-save"),o=Ht(n);if(!o.firstname){v.textContent="Le prénom est requis.";return}if(!o.surname_real){v.textContent="Le nom est requis.";return}h.disabled=!0,h.textContent="Enregistrement…";const l=o,{error:i}=t?await _.from("players").update({...l,updated_at:new Date().toISOString()}).eq("id",e.id):await _.from("players").insert(l);if(i){v.textContent=i.message,h.disabled=!1,h.textContent=t?"💾 Enregistrer":"✅ Créer le joueur";return}d(t?"Joueur modifié ✅":"Joueur créé ✅","success"),g();const r={search:((p=document.getElementById("search-players"))==null?void 0:p.value)||"",job:((s=document.getElementById("filter-job"))==null?void 0:s.value)||"",rarity:((f=document.getElementById("filter-rarity"))==null?void 0:f.value)||"",club:((x=document.getElementById("filter-club"))==null?void 0:x.value)||"",country:((c=document.getElementById("filter-country"))==null?void 0:c.value)||""};se(a,u,r)}const Kt={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},it=["rase","court","milong","long"];function Vt(e){const t=ke(e);if(t==="noir")return"noir";if(t==="typ")return Math.random()<.9?"noir":"marron";if(t==="metisse")return Math.random()<.6?"noir":"marron";const n=Math.random();return n<.35?"blond":n<.75?"marron":"noir"}function Jt(e){return Math.random()<.05?"chauve":Vt(e)}const Ie=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function ke(e){return Kt[e]||"blanc"}function at(e){return Jt(e)}function te(e,t){return Math.floor(Math.random()*(t-e+1))+e}function X(e){return e[Math.floor(Math.random()*e.length)]}function ot(e){const t=Ie.filter(n=>n!==e);return X(t)}function ve(e){const t=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","GR","RO","BG","UA","RU"],n=["MA","DZ","TN","EG","LY"],a=["NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","TZ","UG","ET"],u=["JP","KR","CN","VN","TH","ID","PH","IN","PK","BD","SA","AE","IR"];return t.includes(e)||["AR","UY","CL","PE","EC","CO","MX","BR"].includes(e)?"Europeans":n.includes(e)?"North Africans":a.includes(e)?"Africans":u.includes(e)?"Asians":"Europeans"}const Yt=[{min:1,max:4,pct:55},{min:5,max:10,pct:20},{min:11,max:14,pct:10},{min:15,max:17,pct:10},{min:18,max:20,pct:5}];function rt(){const e=Math.random()*100;let t=0;for(const n of Yt)if(t+=n.pct,e<t)return te(n.min,n.max);return te(1,4)}function Wt(){const e=Array.from({length:20},(t,n)=>n);return e.sort(()=>Math.random()-.5),new Set(e.slice(0,10))}let oe=null;function Zt(e,t){return e&&(oe||(oe=Wt()),oe.has(t))?te(15,20):rt()}const de={FR:{first:["Lucas","Tom","Hugo","Théo","Antoine","Kylian","Rayan","Axel","Paul","Enzo","Léo","Mathis","Nathan","Alexis","Ethan","Maxime","Julien","Baptiste","Nicolas","Pierre","Clément","Adrien","Valentin","Dylan","Loïc","Quentin","Florian","Kevin","Corentin","Raphaël"],last:["Martin","Bernard","Petit","Dupont","Moreau","Laurent","Robert","Michel","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard","Bonnet","Rousseau","Fontaine","Chevalier","Blanc","Garnier","Boyer","Gauthier","Garcia","Perrin","Robin","Clément","Morin","Nicolas","Henry","Lemaire","Noël","Dufour","Meunier","Brun","Blanchard","Giraud","Joly","Rivière","Brunet"]},ES:{first:["Carlos","Miguel","Javier","Alejandro","Sergio","David","Diego","Pablo","Álvaro","Marcos","Adrián","Rubén","Iker","Raúl","Fernando","Roberto","Víctor","Iván","Gonzalo","Antonio","Manuel","Jesús","Josué","Rodrigo","Cristian","Héctor","Óscar","Mario","Daniel","Jorge"],last:["García","Rodríguez","Martínez","López","Sánchez","González","Pérez","Hernández","Jiménez","Díaz","Torres","Ramírez","Flores","Rivera","Gómez","Morales","Álvarez","Romero","Herrera","Medina","Aguilar","Vargas","Guzmán","Muñoz","Salazar","Soto","Contreras","Rojas","Ramos","Ortiz"]},PT:{first:["João","Pedro","Diogo","Rúben","Bruno","Tiago","André","Ricardo","Luís","Gonçalo","Nuno","Mário","Fábio","Rui","Miguel","Sérgio","Hugo","Filipe","Paulo","Vítor"],last:["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Carvalho","Gomes","Ribeiro","Araújo","Barbosa","Cardoso","Correia","Teixeira","Machado","Vieira","Monteiro","Cunha","Pinto","Melo","Barros","Freitas","Fonseca","Andrade","Castro","Neves","Figueiredo","Duarte"]},BR:{first:["Gabriel","Lucas","Mateus","Gustavo","Felipe","Rodrigo","Thiago","Rafael","Bruno","Diego","Leonardo","Eduardo","Victor","Pedro","Carlos","Alexandre","André","Paulo","Danilo","Marcelo"],last:["Silva","Santos","Oliveira","Souza","Lima","Ferreira","Costa","Nascimento","Alves","Pereira","Rodrigues","Almeida","Nunes","Melo","Barbosa","Rocha","Brito","Castro","Carvalho","Gomes","Lopes","Ramos","Mendes","Cavalcanti","Batista","Azevedo","Campos","Freitas","Reis","Andrade"]},AR:{first:["Lionel","Sergio","Rodrigo","Nicolás","Ezequiel","Gonzalo","Federico","Mauro","Pablo","Diego","Lucas","Matías","Alejandro","Maximiliano","Emiliano","Marcos","Lautaro","Ángel","Leandro","Julián"],last:["González","Rodríguez","Martínez","García","López","Pérez","Sánchez","Romero","Torres","Flores","Díaz","Gómez","Alvarez","Ruiz","Castro","Herrera","Cabrera","Medina","Ferreyra","Suárez"]},IT:{first:["Marco","Luca","Alessandro","Matteo","Davide","Andrea","Francesco","Federico","Lorenzo","Riccardo","Stefano","Simone","Roberto","Nicola","Giovanni","Antonio","Emanuele","Daniele","Alberto","Giorgio"],last:["Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Ricci","Marino","Greco","Bruno","Gallo","Conti","De Luca","Mancini","Giordano","Rizzo","Lombardi","Moretti","Fontana","Rinaldi"]},DE:{first:["Lukas","Max","Jonas","Florian","Tobias","Stefan","Markus","Sebastian","Niklas","Leon","Tim","Felix","Alexander","Philipp","Christian","Thomas","Michael","Jan","Moritz","Fabian"],last:["Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Wolf","Schröder","Neumann","Schwarz","Zimmermann","Braun","Krüger","Hofmann","Wagner","Becker","Koch","Lehmann","Kaiser"]},GB:{first:["James","Harry","Oliver","Jack","George","Charlie","William","Thomas","Alfie","Edward","Ryan","Liam","Noah","Ethan","Kyle","Jordan","Callum","Aaron","Declan","Connor"],last:["Smith","Jones","Williams","Brown","Taylor","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Walker","Wright","Robinson","White","Thompson","Hughes","Edwards","Green","Hall"]},MA:{first:["Yassine","Karim","Mehdi","Amine","Hamza","Bilal","Soufiane","Rachid","Omar","Mohammed","Zakaria","Ilyas","Ayoub","Saad","Khalid","Adil","Tarik","Hicham","Reda","Nabil"],last:["Benali","Amrani","Bouazza","Cherif","Haddad","Meziane","Belkacem","Rahmani","Saidi","Zidane","Belhadj","Tazi","Idrissi","Alaoui","Bennani","Fassi","Lahlou","Naciri","Tahiri","Zniber"]},DZ:{first:["Yacine","Riyad","Sofiane","Haris","Adem","Islam","Bilal","Omar","Nassim","Mehdi","Ryad","Zinedine","Youssef","Farid","Karim","Mourad","Walid","Anes","Ferhat","Djamel"],last:["Amrouche","Boudiaf","Cherki","Guessab","Hamdi","Jaber","Lakhal","Mahjoub","Rezki","Sahnoun","Talbi","Zerrouki","Achour","Bakri","Chaouch","Djaballah","Ferhat","Gacem","Khaldi","Larbi"]},SN:{first:["Sadio","Ismaïla","Cheikhou","Gana","Famara","Mbaye","Pape","Aliou","Moussa","Sidy","Idrissa","Lamine","Bamba","Fallou","Abdou","Diallo","Mamadou","Souleymane","Oumar","Cheikh"],last:["Diallo","Traoré","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Ndiaye","Sow","Cissé","Fofana","Keita","Sylla","Kane","Diarra","Sanogo","Baldé","Kouyaté"]},CI:{first:["Didier","Wilfried","Serge","Jonathan","Franck","Maxwel","Salomon","Gervinho","Nicolas","Maxime","Ismael","Romaric","Abdul","Cheick","Arouna","Kolo","Yaya","Geoffroy","Siaka","Adama"],last:["Drogba","Zaha","Gnagnon","Koné","Touré","Bamba","Diomandé","Konaté","Coulibaly","Fofana","Traoré","Doumbia","Sanogo","Diabaté","Kalou","Bakayoko","Gradel","Seri","Aurier","Haller"]},CM:{first:["Samuel","Alex","Karl","Fabrice","Cédric","Nicolas","Georges","André","Joël","Roger","François","Jean","Patrick","Thierry","Eric","Benjamin","Aristide","Clinton","Clinton","Stéphane"],last:["Eto'o","Song","Choupo-Moting","Aboubakar","Bassogog","Kunde","Toko","Nkoudou","Ngadeu","Oyongo","Fai","Zambo","Mokoena","Ekambi","Tchamba","Mbida","Biya","Kameni","Meyong","Webo"]},NG:{first:["Kelechi","Ahmed","Victor","John","Emmanuel","Samuel","Moses","Ola","Chukwuemeka","Odion","Sunday","Chidi","Nnamdi","Chisom","Tunde","Emeka","Obinna","Uchenna","Ifeanyi","Segun"],last:["Osimhen","Iheanacho","Musa","Onyekuru","Iwobi","Ndidi","Nwankwo","Obi","Mikel","Martins","Okocha","Yekini","Amunike","Babangida","Fash","Lawal","Onuoha","Taiwo","Ayodele","Ameobi"]},JP:{first:["Ryota","Kenji","Hiroshi","Takumi","Yuto","Daichi","Shinji","Makoto","Koji","Naoki","Yuya","Shoya","Ryo","Shu","Atsuto","Masato","Hotaru","Genki","Ko","Ritsu"],last:["Nakamura","Tanaka","Suzuki","Sato","Yamamoto","Watanabe","Ito","Yamada","Saito","Matsumoto","Inoue","Kimura","Hayashi","Shimizu","Yamazaki","Mori","Abe","Ikeda","Kato","Honda"]},KR:{first:["Heung","Son","Ji","Sung","Jae","Young","Kang","Hyun","Woo","Tae","Seung","Min","Jun","Dong","Chang","Sang","Yo","Hee","Jin","Bum"],last:["Kim","Park","Lee","Choi","Jung","Kang","Cho","Yoon","Lim","Oh","Han","Seo","Kwon","Hwang","Ahn","Yang","Shin","Yoo","Jang","Song"]},MX:{first:["Carlos","Hirving","Andrés","Javier","Miguel","Raúl","Héctor","Diego","Jorge","Luis","Rodolfo","Erick","Jonathan","Néstor","Tecatito","Chicharito","Oswaldo","Oribe","Uriel","Giovanni"],last:["Hernández","Lozano","Guardado","Vela","Morales","Jiménez","Reyes","Corona","Herrera","Rodríguez","Ochoa","Chicharito","Flores","Domínguez","Araujo","Álvarez","Pineda","Sánchez","Antuna","Meza"]},_DEFAULT_EUROPE:{first:["Stefan","Ivan","Luca","Marco","Andrei","Cristian","Bogdan","Mircea","Adrian","Florin","Dušan","Aleksandar","Nikola","Nemanja","Marko","Filip","Milan","Branislav","Radomir","Dejan"],last:["Popescu","Ionescu","Stan","Marin","Stoica","Popa","Radu","Constantin","Barbu","Dobre","Petrović","Marković","Nikolić","Jovanović","Popović","Stanković","Đorđević","Lukić","Simić","Ilić"]},_DEFAULT_AFRIQUE:{first:["Mamadou","Ibrahima","Moussa","Seydou","Boubacar","Oumar","Modibo","Adama","Bakary","Abdoulaye","Lamine","Ousmane","Sekou","Demba","Tidiane","Amadou","Issiaka","Siaka","Fode","Samba"],last:["Diallo","Traoré","Coulibaly","Koné","Doumbia","Kouyaté","Bah","Konaté","Touré","Camara","Sylla","Keita","Diakité","Sangaré","Sanou","Sidibé","Bathily","Niakaté","Dioumassi","Sissoko"]},_DEFAULT_ASIE:{first:["Wei","Ming","Jae","Van","Duc","Sorn","Ali","Hassan","Reza","Arman","Yusuf","Tariq","Faris","Khalid","Saad","Rashid","Nasser","Walid","Ziad","Adel"],last:["Zhang","Wang","Liu","Chen","Yang","Huang","Zhou","Wu","Xu","Sun","Al-Rashidi","Al-Dosari","Al-Harthi","Al-Balushi","Al-Farsi","Al-Shamsi","Al-Neyadi","Al-Breiki","Al-Hammadi","Al-Mansouri"]},_DEFAULT_AMERIQUE:{first:["James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Marcus","Jordan","Andre","Devonte","Malik","Tyrone","Jamal","Darius","DeShawn","Brandon","Cody"],last:["Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Taylor","Anderson","Jackson","White","Harris","Clark","Lewis","Walker","Hall","Allen","Young","King"]}},Qt={FR:"FR",BE:"FR",CH:"FR",MC:"FR",LU:"FR",ES:"ES",MX:"MX",CO:"ES",VE:"ES",PE:"ES",CL:"ES",EC:"ES",UY:"ES",PY:"ES",BO:"ES",CR:"ES",PA:"ES",HN:"ES",GT:"ES",SV:"ES",NI:"ES",DO:"ES",CU:"ES",PT:"PT",AO:"PT",MZ:"PT",CV:"PT",BR:"BR",AR:"AR",IT:"IT",SM:"IT",DE:"DE",AT:"DE",GB:"GB",IE:"GB",AU:"GB",NZ:"GB",CA:"GB",MA:"MA",TN:"DZ",LY:"DZ",DZ:"DZ",SN:"SN",ML:"SN",GN:"SN",GW:"SN",GM:"SN",MR:"SN",CI:"CI",BF:"CI",TG:"CI",BJ:"CI",GH:"CI",CM:"CM",GA:"CM",CG:"CM",CD:"CM",NG:"NG",JP:"JP",KR:"KR",MX:"MX",PL:"_DEFAULT_EUROPE",CZ:"_DEFAULT_EUROPE",SK:"_DEFAULT_EUROPE",HU:"_DEFAULT_EUROPE",HR:"_DEFAULT_EUROPE",RS:"_DEFAULT_EUROPE",SI:"_DEFAULT_EUROPE",RO:"_DEFAULT_EUROPE",BG:"_DEFAULT_EUROPE",GR:"_DEFAULT_EUROPE",TR:"_DEFAULT_EUROPE",RU:"_DEFAULT_EUROPE",UA:"_DEFAULT_EUROPE",NL:"_DEFAULT_EUROPE",DK:"_DEFAULT_EUROPE",SE:"_DEFAULT_EUROPE",NO:"_DEFAULT_EUROPE",FI:"_DEFAULT_EUROPE",AL:"_DEFAULT_EUROPE",EG:"_DEFAULT_AFRIQUE",ZA:"_DEFAULT_AFRIQUE",KE:"_DEFAULT_AFRIQUE",ET:"_DEFAULT_AFRIQUE",TZ:"_DEFAULT_AFRIQUE",UG:"_DEFAULT_AFRIQUE",CN:"_DEFAULT_ASIE",VN:"_DEFAULT_ASIE",TH:"_DEFAULT_ASIE",ID:"_DEFAULT_ASIE",PH:"_DEFAULT_ASIE",IN:"_DEFAULT_ASIE",PK:"_DEFAULT_ASIE",BD:"_DEFAULT_ASIE",IR:"_DEFAULT_ASIE",SA:"_DEFAULT_ASIE",AE:"_DEFAULT_ASIE",QA:"_DEFAULT_ASIE",KW:"_DEFAULT_ASIE",IQ:"_DEFAULT_ASIE",SY:"_DEFAULT_ASIE",JO:"_DEFAULT_ASIE",US:"_DEFAULT_AMERIQUE"};function lt(e){return Qt[e]||"_DEFAULT_EUROPE"}function st(e){const t=lt(e),n=(de[t]||de._DEFAULT_EUROPE).first;return X(n)}function dt(e){const t=lt(e);return(de[t]||de._DEFAULT_EUROPE).last}function Xt(e,t,n=new Set,a=!1){const u=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],d=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],g=new Set(d.sort(()=>Math.random()-.5).slice(0,4)),v=[...d].sort(()=>Math.random()-.5),h=new Set(v.slice(0,2)),o=new Set(v.slice(2,4)),l=10,i=u.map((s,f)=>f<l);for(let s=i.length-1;s>0;s--){const f=Math.floor(Math.random()*(s+1));[i[s],i[f]]=[i[f],i[s]]}const r=new Set;function p(s){const f=dt(s),x=f.filter(y=>!r.has(y)&&!n.has(y)),c=x.length?x:f.filter(y=>!r.has(y)),k=c.length?c:f,L=X(k);return r.add(L),L}return u.map((s,f)=>{const x=i[f]?t:ot(t),c=ke(x),k=at(x),L=X(it),y=h.has(f)?"pepite":o.has(f)?"papyte":"normal",I=y==="pepite"?te(10,15):y==="papyte"?te(15,20):Zt(a,f),E=g.has(f),b=E?Math.max(0,I-2):0;let $=0,m=0,w=0,B=0,S=null;s==="GK"?$=I:s==="DEF"?(m=I,E&&(w=b,S="MIL")):s==="ATT"?(B=I,E&&(w=b,S="MIL")):(w=I,E&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(m=b,S="DEF"):(B=b,S="ATT")));const C=p(x);return{job:s,job2:S,firstname:st(x),surname_real:C,country_code:x,club_id:e,note_g:$,note_d:m,note_m:w,note_a:B,skin:c,hair:k,hair_length:L,rarity:y,sell_price:0,ethnie:ve(x),_ethnie:ve(x)}})}async function ct(e,t,n,a=!1){oe=null;const{data:u}=await _.from("players").select("surname_real").not("surname_real","is",null),d=new Set((u||[]).map(s=>s.surname_real).filter(Boolean)),g=Xt(e,t,d,a),{data:v}=await _.from("players").select("face").not("face","is",null),h=new Set((v||[]).map(s=>s.face).filter(Boolean)),o=new Set;for(const s of g){const f=await $e(s.country_code,new Set([...h,...o]));f&&(s.face=f,o.add(f)),delete s._ethnie}const{data:l,error:i}=await _.from("players").insert(g).select("id");if(i){console.error("[GenSquad] Erreur batch insert:",i.message,i.details),n("Erreur: "+i.message,"error");return}const r=(l||[]).map(s=>({card_type:"player",player_id:s.id}));if(r.length){const{error:s}=await _.from("cards").insert(r);s&&console.warn("[GenSquad] Erreur cartes:",s.message)}const p=(l==null?void 0:l.length)||0;console.log("[GenSquad] Créés:",p,"/",g.length),p>0?n(`${p} joueurs générés ✅`,"success"):n("Erreur génération joueurs","error")}function ut(e){return{style:e.kit_style||F.style,color1:e.kit_color1||F.color1,color2:e.kit_color2||F.color2,color3:e.kit_color3||F.color3,shorts:e.kit_shorts||F.shorts,socks:e.kit_socks||F.socks}}let re=[];async function en(e,t){await me(e,t)}async function me(e,t){const[{data:n,error:a},{data:u}]=await Promise.all([_.from("clubs").select("*").order("real_name"),_.from("players").select("club_id")]);if(a){e.innerHTML=`<p style="color:red">${a.message}</p>`;return}re=n||[];const d={};(u||[]).forEach(g=>{d[g.club_id]=(d[g.club_id]||0)+1}),tn(e,t,d)}function tn(e,t,n={}){const{toast:a,openModal:u,closeModal:d}=t;e.innerHTML=`
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
    </div>`,g(re),document.getElementById("search-clubs").addEventListener("input",v=>{const h=v.target.value.toLowerCase();g(re.filter(o=>o.real_name.toLowerCase().includes(h)||o.encoded_name.toLowerCase().includes(h)))}),document.getElementById("add-club-btn").addEventListener("click",()=>Ne(null,e,t));function g(v){const h=document.getElementById("clubs-list");if(!v.length){h.innerHTML='<p style="color:var(--tile-fg-dim);padding:20px;text-align:center">Aucun club.</p>';return}const o={};v.forEach(r=>{const p=r.country_code||"—";o[p]||(o[p]=[]),o[p].push(r)});const l=Object.keys(o).sort(),i=r=>{const p=ut(r),s=r.logo_url?`<img src="${r.logo_url}" style="width:36px;height:36px;object-fit:contain;border-radius:8px;flex-shrink:0">`:`<div style="width:36px;height:36px;background:linear-gradient(135deg,${p.color1},${p.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:900;flex-shrink:0">${r.encoded_name.slice(0,3)}</div>`,f=n[r.id]||0;return`
        <div class="club-row" data-club-id="${r.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:10px;cursor:pointer;background:var(--tile-bg);border:1px solid var(--tile-border);transition:background .15s">
          ${s}
          <img src="https://flagsapi.com/${r.country_code}/flat/24.png" style="width:18px;height:13px;object-fit:cover;border-radius:2px;flex-shrink:0" onerror="this.style.display='none'">
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:12px;color:var(--tile-fg-on-page);font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${r.encoded_name}</div>
            <div style="font-size:10px;color:${f===0?"#e67e22":"var(--tile-fg-dim)"}">${f===0?"⚠️ 0 joueur":`👥 ${f}`}</div>
          </div>
          <button class="btn-del-club" data-del="${r.id}"
            style="width:22px;height:22px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;flex-shrink:0"
            onclick="event.stopPropagation()">✕</button>
        </div>`};h.innerHTML=l.map(r=>`
      <div style="display:flex;align-items:center;gap:8px;padding:8px 4px 4px;margin-top:6px">
        ${r!=="—"?`<img src="https://flagsapi.com/${r}/flat/24.png" style="width:20px;height:15px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">`:'<span style="font-size:14px">🌍</span>'}
        <span style="font-size:11px;font-weight:900;color:var(--tile-fg-dim);letter-spacing:1px">${r}</span>
        <span style="font-size:11px;color:var(--tile-fg-dim);background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:10px;padding:1px 8px">${o[r].length}</span>
        <div style="flex:1;height:1px;background:var(--tile-border)"></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:4px">
        ${o[r].map(i).join("")}
      </div>
    `).join(""),h.querySelectorAll(".club-row").forEach(r=>{r.addEventListener("click",()=>{const p=re.find(s=>s.id===r.dataset.clubId);p&&Ne(p,e,t),h.querySelectorAll(".club-row").forEach(s=>s.style.background="var(--tile-bg)"),r.style.background="rgba(26,107,60,0.18)"})}),h.querySelectorAll(".btn-del-club").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:p}=await _.from("clubs").delete().eq("id",r.dataset.del);p?a(p.message,"error"):(a("Club supprimé","success"),me(e,t))})})}}function nn(e){var j,U,q,H;const{openModal:t,closeModal:n}=e;let a=6;const u=36;function d(A){return new Array(A*A).fill("#ffffff")}let g=d(a),v="OP",h="#D4A017",o=50,l=0,i=0,r="",p="#ffffff",s=25,f=0,x=35,c=new Set,k=null;function L(){const A=u*a;let z="";for(let M=0;M<a;M++)for(let R=0;R<a;R++){const N=M*a+R;z+=`<rect x="${R*u}" y="${M*u}" width="${u}" height="${u}" fill="${g[N]}"/>`}const T=(M,R,N,G,V)=>{if(!M)return"";const J=A/2+G/100*A,Y=A/2+V/100*A,W=N/100*A*(M.length>3?3/M.length:1);return`<text x="${J}" y="${Y}" text-anchor="middle" dominant-baseline="central"
        font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="${W}"
        fill="${R}">${M}</text>`};return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${A} ${A}">
      ${z}
      ${T(v,h,o,l,i)}
      ${T(r,p,s,f,x)}
    </svg>`}function y(A){return"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(A)))}const I=(A,z,T,M,R,N,G)=>`
    <div style="background:#f7f7f7;border-radius:10px;padding:12px;display:flex;flex-direction:column;gap:8px">
      <div style="font-weight:700;font-size:12px;color:#333">${z}</div>
      <input id="flag-text${A}" maxlength="20" value="${T}" placeholder="${A===2?"Vide = désactivé":""}" style="font-weight:900">
      <div style="display:flex;align-items:center;gap:8px">
        <label style="margin:0;font-size:11px;white-space:nowrap">Couleur</label>
        <input type="color" id="flag-text${A}-color" value="${M}" style="width:40px;height:28px;padding:2px;cursor:pointer">
      </div>
      <div>
        <label style="font-size:10px">Taille (<span id="flag-size${A}-val">${R}</span>%)</label>
        <input type="range" id="flag-text${A}-size" min="5" max="120" value="${R}" style="width:100%">
      </div>
      <div>
        <label style="font-size:10px">Position H (<span id="flag-x${A}-val">${N}</span>)</label>
        <input type="range" id="flag-text${A}-x" min="-50" max="50" value="${N}" style="width:100%">
      </div>
      <div>
        <label style="font-size:10px">Position V (<span id="flag-y${A}-val">${G}</span>)</label>
        <input type="range" id="flag-text${A}-y" min="-50" max="50" value="${G}" style="width:100%">
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
            ${[6,9,12].map(A=>`<button type="button" class="btn ${A===a?"btn-primary":"btn-ghost"} btn-sm flag-grid-size" data-n="${A}" style="flex:1;padding:6px 4px">${A}×${A}</button>`).join("")}
          </div>
        </div>
      </div>

      ${I(1,"TEXTE 1 (20 caractères max)",v,h,o,l,i)}
      ${I(2,"TEXTE 2 — optionnel (20 caractères max)",r,p,s,f,x)}
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
  `;t(`🎨 Générer un logo (${a}×${a})`,E,`
    <button id="flag-cancel" class="btn btn-ghost">Annuler</button>
    <button id="flag-use" class="btn btn-primary">✅ Utiliser ce logo</button>
  `);function $(){const A=document.getElementById("flag-squares-grid");if(!A)return;const z=a>=12?30:a>=9?36:44;A.style.gridTemplateColumns=`repeat(${a}, ${z}px)`,A.innerHTML=g.map((T,M)=>`
      <div class="flag-square" data-i="${M}" style="width:${z}px;height:${z}px;border-radius:4px;background:${T};cursor:pointer;
        box-sizing:border-box;border:${c.has(M)?"3px solid #1A6B3C":"1px solid rgba(0,0,0,0.15)"}"></div>
    `).join(""),A.querySelectorAll(".flag-square").forEach(T=>{T.addEventListener("click",M=>{const R=parseInt(T.dataset.i);M.ctrlKey||M.metaKey||M.shiftKey?c.has(R)?c.delete(R):c.add(R):c=new Set([R]),$(),m()}),T.addEventListener("dblclick",()=>{const M=parseInt(T.dataset.i),R=document.createElement("input");R.type="color",R.value=g[M],R.style.position="fixed",R.style.opacity="0",document.body.appendChild(R),R.addEventListener("input",()=>{g[M]=R.value,$(),C()}),R.addEventListener("change",()=>R.remove()),R.click()})})}function m(){const A=document.getElementById("flag-copy-btn"),z=document.getElementById("flag-paste-btn");A.disabled=c.size===0,z.disabled=c.size===0||k===null}function w(){if(c.size===0)return;const A=[...c][0];k=g[A];const z=document.getElementById("flag-clipboard-preview"),T=document.getElementById("flag-clipboard-swatch");z&&(z.style.display="inline-flex"),T&&(T.style.background=k),m()}function B(){c.size===0||k===null||(c.forEach(A=>{g[A]=k}),$(),C())}(j=document.getElementById("flag-copy-btn"))==null||j.addEventListener("click",w),(U=document.getElementById("flag-paste-btn"))==null||U.addEventListener("click",B);function S(A){if(!document.getElementById("flag-squares-grid")){document.removeEventListener("keydown",S);return}!(A.ctrlKey||A.metaKey)||c.size===0||(A.key==="c"||A.key==="C"?(A.preventDefault(),w()):(A.key==="v"||A.key==="V")&&(A.preventDefault(),B()))}document.addEventListener("keydown",S),document.querySelectorAll(".flag-grid-size").forEach(A=>{A.addEventListener("click",()=>{const z=parseInt(A.dataset.n);if(z===a)return;a=z,g=d(a),c=new Set,k=null;const T=document.getElementById("flag-clipboard-preview");T&&(T.style.display="none"),$(),m(),C(),document.querySelectorAll(".flag-grid-size").forEach(M=>{M.classList.toggle("btn-primary",parseInt(M.dataset.n)===a),M.classList.toggle("btn-ghost",parseInt(M.dataset.n)!==a)})})});function C(){const A=document.getElementById("flag-preview");A&&(A.innerHTML=L())}$(),m(),C();function D(A){document.getElementById(`flag-text${A}`).addEventListener("input",z=>{const T=z.target.value.slice(0,20);A===1?v=T:r=T,C()}),document.getElementById(`flag-text${A}-color`).addEventListener("input",z=>{A===1?h=z.target.value:p=z.target.value,C()}),document.getElementById(`flag-text${A}-size`).addEventListener("input",z=>{const T=parseInt(z.target.value);A===1?o=T:s=T,document.getElementById(`flag-size${A}-val`).textContent=T,C()}),document.getElementById(`flag-text${A}-x`).addEventListener("input",z=>{const T=parseInt(z.target.value);A===1?l=T:f=T,document.getElementById(`flag-x${A}-val`).textContent=T,C()}),document.getElementById(`flag-text${A}-y`).addEventListener("input",z=>{const T=parseInt(z.target.value);A===1?i=T:x=T,document.getElementById(`flag-y${A}-val`).textContent=T,C()})}D(1),D(2),(q=document.getElementById("flag-cancel"))==null||q.addEventListener("click",()=>n()),(H=document.getElementById("flag-use"))==null||H.addEventListener("click",()=>{const A=y(L()),z=document.getElementById("m-logo-url-current");z&&(z.value=A);const T=document.getElementById("logo-preview");T&&(T.innerHTML=`<img src="${A}" style="width:100%;height:100%;object-fit:contain">`),n()})}async function Ne(e,t,n){var x,c,k,L,y,I,E;const{toast:a}=n,u=!!e,d=e?ut(e):{...F},g=document.getElementById("club-panel");if(!g)return;const v=Object.entries(Re).map(([b,$])=>`<option value="${b}" ${d.style===b?"selected":""}>${$.label}</option>`).join(""),h=Ie.map(b=>`<option value="${b}" ${((e==null?void 0:e.country_code)||"FR")===b?"selected":""}>${b}</option>`).join("");g.style.display="block",g.style.alignItems="",g.style.justifyContent="",g.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <h3 style="font-size:17px;font-weight:900;color:var(--tile-fg-on-page)">${u?`✏️ ${e.real_name}`:"➕ Nouveau club"}</h3>
      ${u?'<button id="btn-gen-squad-panel" class="btn btn-primary btn-sm">⚽ Générer joueurs</button>':""}
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
            ${h}
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
              <select id="m-kit-style" style="width:100%">${v}</select>
            </div>
            ${[["Couleur 1","m-kit-color1",d.color1,!1],["Couleur 2","m-kit-color2",d.color2,!1],["Couleur 3","m-kit-color3",d.color3,!0],["Short","m-kit-shorts",d.shorts,!1],["Chaussettes","m-kit-socks",d.socks,!1]].map(([b,$,m,w])=>`
              <div class="form-group" id="wrap-${$}" ${w?'style="display:none"':""}>
                <label>${b}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${$}" value="${m||"#000000"}" style="width:38px;height:32px;padding:2px;border:1px solid var(--tile-border);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${$}-txt" value="${m||"#000000"}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>`).join("")}
          </div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div id="kit-preview-wrap" style="background:#f0f0f0;border-radius:12px;padding:14px;border:1.5px solid var(--tile-border);min-width:60px;text-align:center"></div>
            <div style="font-size:10px;color:var(--tile-fg-dim)">Aperçu</div>
          </div>
        </div>
      </div>

      ${u?"":`
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
        ${u?"💾 Enregistrer":"✅ Créer le club"}
      </button>
    </div>

    ${u?`
    <div style="border-top:1px solid var(--tile-border);margin-top:24px;padding-top:20px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <h4 style="font-size:14px;font-weight:900;color:var(--tile-fg-on-page)">🃏 Joueurs du club (<span id="club-players-count">…</span>)</h4>
        <button id="btn-gen-one-player" class="btn btn-primary btn-sm">➕ Générer 1 joueur</button>
      </div>
      <div id="club-players-grid" style="display:flex;flex-wrap:wrap;gap:10px"></div>
    </div>`:""}
  `,(x=document.getElementById("m-logo-file"))==null||x.addEventListener("change",b=>{var w;const $=(w=b.target.files)==null?void 0:w[0];if(!$)return;const m=new FileReader;m.onload=()=>{document.getElementById("logo-preview").innerHTML=`<img src="${m.result}" style="width:100%;height:100%;object-fit:contain">`},m.readAsDataURL($)}),(c=document.getElementById("m-open-flag-builder"))==null||c.addEventListener("click",()=>{nn(n)}),ie();function o(){var w,B;const b=((w=document.getElementById("m-kit-style"))==null?void 0:w.value)||"uni",$=((B=Re[b])==null?void 0:B.colors)===3,m=document.getElementById("wrap-m-kit-color3");m&&(m.style.display=$?"":"none")}o(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(b=>{const $=document.getElementById(b),m=document.getElementById(b+"-txt");!$||!m||($.addEventListener("input",()=>{m.value=$.value,ie()}),m.addEventListener("input",()=>{const w=m.value.trim();/^#[0-9a-fA-F]{6}$/.test(w)&&($.value=w,ie())}),m.addEventListener("change",()=>{let w=m.value.trim();w.startsWith("#")||(w="#"+w),/^#[0-9a-fA-F]{6}$/.test(w)&&($.value=w,m.value=w,ie())}))}),(k=document.getElementById("m-kit-style"))==null||k.addEventListener("change",()=>{o(),ie()});const l=document.getElementById("m-real"),i=document.getElementById("m-encoded");function r(){if(!l||!i||i.value)return;const b=l.value.trim().split(/\s+/),$=b.length===1?b[0].toUpperCase().slice(0,6):b.filter(m=>m.length>2).map(m=>m[0].toUpperCase()).join("")||b[0].toUpperCase().slice(0,4);i.value=$}l==null||l.addEventListener("input",r),(L=document.getElementById("auto-encode-btn"))==null||L.addEventListener("click",()=>{i&&(i.value=""),r()}),(y=document.getElementById("m-save"))==null||y.addEventListener("click",()=>dn(e,u,t,n));const p=document.getElementById("m-gen-squad"),s=document.getElementById("m-gen-strong-label");function f(){if(s&&(s.style.display=p!=null&&p.checked?"flex":"none",!(p!=null&&p.checked))){const b=document.getElementById("m-gen-strong");b&&(b.checked=!1)}}p==null||p.addEventListener("change",f),f(),(I=document.getElementById("btn-gen-squad-panel"))==null||I.addEventListener("click",()=>{an(e,n,t)}),(E=document.getElementById("btn-gen-one-player"))==null||E.addEventListener("click",()=>{rn(e,n)}),u&&Le(e.id)}async function Le(e){const{data:t}=await _.from("players").select("*, clubs(encoded_name, logo_url, kit_style, kit_color1, kit_color2, kit_color3, kit_shorts, kit_socks)").eq("club_id",e).order("surname_real"),n=document.getElementById("club-players-grid"),a=document.getElementById("club-players-count");if(a&&(a.textContent=(t||[]).length),!!n){if(!(t!=null&&t.length)){n.innerHTML='<div style="color:var(--tile-fg-dim);padding:20px;font-size:13px">Aucun joueur dans ce club.</div>';return}n.innerHTML=t.map(u=>we(u,{width:100})).join("")}}function an(e,t,n){const{openModal:a,closeModal:u,toast:d}=t;a(`⚽ Générer — ${e.real_name}`,`<div style="display:flex;flex-direction:column;gap:14px">
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
    </div>`),setTimeout(()=>{var g,v;(g=document.getElementById("qg-cancel"))==null||g.addEventListener("click",()=>u()),(v=document.getElementById("qg-ok"))==null||v.addEventListener("click",async()=>{var o;const h=((o=document.getElementById("qg-strong"))==null?void 0:o.checked)??!1;u(),d("Génération en cours…","info"),await ct(e.id,e.country_code,d,h),d("Effectif généré ✅","success"),Le(e.id),me(n,t)})},50)}const pt=["GK","DEF","MIL","ATT"],on=[{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}];function rn(e,t){const{openModal:n,closeModal:a,toast:u}=t,d=Ie.map(o=>`<option value="${o}">${o}</option>`).join(""),g=o=>pt.map(l=>`<option value="${l}" ${l===o?"selected":""}>${l}</option>`).join(""),v=`
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
              ${on.map(o=>`<option value="${o.value}">${o.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label>PAYS</label>
            <select id="gen-one-country">
              <option value="">— Aléatoire —</option>
              ${d}
            </select>
          </div>
        </div>
      </div>
    </div>
  `;n(`➕ Générer un joueur — ${e.real_name}`,v,`
    <button id="gen-one-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gen-one-ok" class="btn btn-primary">➕ Générer</button>
  `),setTimeout(()=>{var o,l;document.querySelectorAll('input[name="gen-one-mode"]').forEach(i=>{i.addEventListener("change",()=>{document.getElementById("gen-one-custom-fields").style.display=i.value==="custom"&&i.checked?"flex":"none"})}),(o=document.getElementById("gen-one-cancel"))==null||o.addEventListener("click",()=>a()),(l=document.getElementById("gen-one-ok"))==null||l.addEventListener("click",async()=>{var s,f,x,c,k;const i=((s=document.querySelector('input[name="gen-one-mode"]:checked'))==null?void 0:s.value)||"random",r=document.getElementById("gen-one-ok");r.disabled=!0,r.textContent="⏳ Génération…";const p={};i==="custom"&&(p.job=((f=document.getElementById("gen-one-job1"))==null?void 0:f.value)||null,p.job2=((x=document.getElementById("gen-one-job2"))==null?void 0:x.value)||null,p.rarity=((c=document.getElementById("gen-one-rarity"))==null?void 0:c.value)||null,p.country=((k=document.getElementById("gen-one-country"))==null?void 0:k.value)||null);try{await ln(e,p),u("Joueur généré ✅","success"),a(),Le(e.id)}catch(L){u("Erreur : "+L.message,"error"),r.disabled=!1,r.textContent="➕ Générer"}})},50)}async function ln(e,t={}){const n=t.country||(Math.random()<.5?e.country_code:ot(e.country_code)),a=t.job||X(pt),u=t.job2||null,d=t.rarity||(()=>{const B=Math.random()*100;return B<1.5?"legende":B<3?"pepite":B<4.5?"papyte":"normal"})(),g=d==="pepite"?te(10,15):d==="papyte"?te(15,20):rt(),v=u?Math.max(0,g-2):0;let h=0,o=0,l=0,i=0;a==="GK"&&(h=g),a==="DEF"&&(o=g),a==="MIL"&&(l=g),a==="ATT"&&(i=g),u==="GK"&&(h=v),u==="DEF"&&(o=v),u==="MIL"&&(l=v),u==="ATT"&&(i=v);const r=ke(n),p=at(n),s=X(it),{data:f}=await _.from("players").select("surname_real").not("surname_real","is",null),x=new Set((f||[]).map(B=>B.surname_real).filter(Boolean)),c=dt(n),k=c.filter(B=>!x.has(B)),L=X(k.length?k:c),y={job:a,job2:u,firstname:st(n),surname_real:L,country_code:n,club_id:e.id,note_g:h,note_d:o,note_m:l,note_a:i,skin:r,hair:p,hair_length:s,rarity:d,sell_price:0,ethnie:ve(n)},{data:I}=await _.from("players").select("face").not("face","is",null),E=new Set((I||[]).map(B=>B.face).filter(Boolean)),b=await $e(n,E);b&&(y.face=b);const{data:$,error:m}=await _.from("players").insert(y).select("id").single();if(m)throw m;const{error:w}=await _.from("cards").insert({card_type:"player",player_id:$.id});w&&console.warn("[GenOnePlayer] Erreur carte:",w.message)}function mt(){var e,t,n,a,u,d;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((t=document.getElementById("m-kit-color1"))==null?void 0:t.value)||"#1A6B3C",color2:((n=document.getElementById("m-kit-color2"))==null?void 0:n.value)||"#ffffff",color3:((a=document.getElementById("m-kit-color3"))==null?void 0:a.value)||"#000000",shorts:((u=document.getElementById("m-kit-shorts"))==null?void 0:u.value)||"#111111",socks:((d=document.getElementById("m-kit-socks"))==null?void 0:d.value)||"#ffffff"}}function ie(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=It(mt(),"panel"))}async function sn(e,t){const n=(e.name.split(".").pop()||"png").toLowerCase(),a=`clubs/${t||"new"}-${Date.now()}.${n}`,{error:u}=await _.storage.from("assets").upload(a,e,{upsert:!0,cacheControl:"3600"});if(u)throw u;const{data:d}=_.storage.from("assets").getPublicUrl(a);return d.publicUrl}async function dn(e,t,n,a){var L,y,I,E,b,$,m,w,B;const{toast:u}=a,d=document.getElementById("m-error"),g=document.getElementById("m-save"),v=(L=document.getElementById("m-real"))==null?void 0:L.value.trim(),h=(y=document.getElementById("m-encoded"))==null?void 0:y.value.trim().toUpperCase(),o=(I=document.getElementById("m-country"))==null?void 0:I.value.trim().toUpperCase(),l=((b=(E=document.getElementById("m-logo-file"))==null?void 0:E.files)==null?void 0:b[0])||null,i=(($=document.getElementById("m-logo-url-current"))==null?void 0:$.value)||null,r=((m=document.getElementById("m-gen-stadium"))==null?void 0:m.checked)??!1,p=((w=document.getElementById("m-gen-squad"))==null?void 0:w.checked)??!1,s=((B=document.getElementById("m-gen-strong"))==null?void 0:B.checked)??!1,f=mt();if(!v){d.textContent="Le nom du club est requis.";return}if(!h){d.textContent="Le nom encodé est requis.";return}if(!o){d.textContent="Le pays est requis.";return}g.disabled=!0,g.textContent="Enregistrement…";let x=i;if(l)try{g.textContent="📤 Envoi du logo…",x=await sn(l,e==null?void 0:e.id)}catch(S){d.textContent="Erreur upload logo : "+S.message,g.disabled=!1,g.textContent=t?"💾 Enregistrer":"✅ Créer le club";return}const c={real_name:v,encoded_name:h,country_code:o,logo_url:x,kit_style:f.style,kit_color1:f.color1,kit_color2:f.color2,kit_color3:f.color3,kit_shorts:f.shorts,kit_socks:f.socks};let k=e==null?void 0:e.id;if(t){const{error:S}=await _.from("clubs").update(c).eq("id",k);if(S){d.textContent=S.message,g.disabled=!1,g.textContent="💾 Enregistrer";return}}else{const{data:S,error:C}=await _.from("clubs").insert(c).select().single();if(C){d.textContent=C.message,g.disabled=!1,g.textContent="✅ Créer le club";return}if(k=S.id,r){g.textContent="🏟️ Création du stade…";const{data:D,error:j}=await _.from("stadium_definitions").insert({name:`Stade de ${v}`,club_id:k,country_code:null}).select().single();j?console.warn("[Stadium] Erreur def stade:",j.message):D&&await _.from("cards").insert({card_type:"stadium",stadium_id:D.id})}p&&(g.textContent="⚽ Génération des joueurs…",await ct(k,o,u,s))}u(t?"Club modifié ✅":"Club créé ✅","success"),me(n,a)}const cn=["normal","pepite","papyte","legende"],Pe=["GK","DEF","MIL","ATT"],un=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let ee={...O},le=[];async function pn(e,{toast:t}){const{data:n}=await _.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");le=n||[],ee={...O},e.innerHTML=yn(le),gn(e,le,t),K()}function Fe(){var n;const e=((n=document.getElementById("cb-surname-real"))==null?void 0:n.value)||"",t=document.getElementById("cb-surname-enc");t&&(t.value=pe(e))}function mn(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=le.find(a=>String(a.id)===String(e));return t?{style:t.kit_style||F.style,color1:t.kit_color1||F.color1,color2:t.kit_color2||F.color2,shorts:t.kit_shorts||F.shorts,socks:t.kit_socks||F.socks}:{...F}}function K(){var r,p,s,f;const e=x=>{var c;return((c=document.getElementById(x))==null?void 0:c.value)||""},t={firstname:e("cb-firstname"),surname_real:e("cb-surname-enc")||pe(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((p=(r=document.getElementById("cb-club"))==null?void 0:r.selectedOptions[0])==null?void 0:p.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=mn(),a=document.getElementById("cb-club"),u=((f=(s=a==null?void 0:a.selectedOptions[0])==null?void 0:s.dataset)==null?void 0:f.logo)||null,d=Xe(ee,n,120),g=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(d)}`,v=At(t,{portraitUrl:g,clubLogoUrl:u,showNotes:!0}),h=document.getElementById("card-preview");h&&(h.innerHTML=v);const o=document.getElementById("avatar-preview-wrap");o&&(o.innerHTML=d);const l=e("cb-surname-real"),i=document.getElementById("encode-summary");i&&l&&(i.textContent=`${e("cb-firstname")} ${l} → ${e("cb-firstname")} ${t.surname_real}`)}function gt(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};ee={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function gn(e,t,n){var u,d,g,v,h;e.querySelectorAll("input,select").forEach(o=>{o.addEventListener("input",K),o.addEventListener("change",K)});const a=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];a.forEach(o=>{var l;(l=document.getElementById(o))==null||l.addEventListener("change",()=>{gt(),K()})}),(u=document.getElementById("cb-surname-real"))==null||u.addEventListener("input",()=>{Fe(),K()}),(d=document.getElementById("btn-encode"))==null||d.addEventListener("click",()=>{Fe(),K()}),(g=document.getElementById("cb-club"))==null||g.addEventListener("change",K),(v=document.getElementById("btn-save-player"))==null||v.addEventListener("click",()=>fn(n)),(h=document.getElementById("btn-reset"))==null||h.addEventListener("click",()=>{e.querySelectorAll("input").forEach(o=>o.value=""),e.querySelectorAll("select").forEach(o=>o.selectedIndex=0),ee={...O},a.forEach(o=>{const l=o.replace("av-",""),i=document.getElementById(o);i&&(i.value=O[l]||"")}),K()})}async function fn(e){const t=g=>{var v;return((v=document.getElementById(g))==null?void 0:v.value)||""},n=t("cb-surname-real").trim(),a=t("cb-surname-enc").trim()||pe(n);if(!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}gt();const u={firstname:t("cb-firstname").trim(),surname_real:n,surname_real:a,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:ee,skin:ee.skin||"blanc",hair:ee.hairColor||"marron",hair_length:"court"},{error:d}=await _.from("players").insert(u);if(d){e("Erreur: "+d.message,"error");return}e(`✅ Joueur "${u.firstname} ${u.surname_real}" enregistré !`,"success")}function yn(e){const t=un.map(([o,l])=>`<option value="${o}">${l} (${o})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(o=>`<option value="${o.id}" data-logo="${o.logo_url||""}">${o.encoded_name}</option>`).join(""),a=Pe.map(o=>`<option value="${o}">${o}</option>`).join(""),u='<option value="">Aucun</option>'+Pe.map(o=>`<option value="${o}">${o}</option>`).join(""),d=cn.map(o=>`<option value="${o}">${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join(""),g=(o,l,i)=>Object.entries(l).map(([r,p])=>`<option value="${r}" ${r===(i||"")?"selected":""}>${p.label}</option>`).join(""),v=Object.keys(kt).map(o=>`<option value="${o}" ${o===O.skin?"selected":""}>${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join(""),h=Object.keys(Lt).map(o=>`<option value="${o}" ${o===O.hairColor?"selected":""}>${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join("");return`
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
          <div><label>Poste principal *</label><select id="cb-job">${a}</select></div>
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
            <div style="background:${Bt[o]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
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
              <select id="av-skin">${v}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${g("av-hair",St,O.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${h}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${g("av-eyebrows",Ct,O.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${g("av-eyes",Tt,O.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${g("av-nose",Mt,O.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${g("av-mouth",zt,O.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${g("av-beard",Rt,O.beard)}</select>
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
  `}async function xe(e,{toast:t}){const[{data:n,error:a},{data:u},{data:d}]=await Promise.all([_.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").order("created_at",{ascending:!1}),_.from("user_solo_progress").select("user_id, unlocked_level"),_.rpc("admin_get_user_emails")]);if(a){e.innerHTML=`<p style="color:red">${a.message}</p>`;return}const g={};(u||[]).forEach(l=>{g[l.user_id]=l.unlocked_level});const v={};(d||[]).forEach(l=>{v[l.id]=l.email});const h=n||[];e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <input id="search-users" placeholder="🔍 Rechercher un manager…" style="width:260px">
      <span style="font-size:13px;color:var(--gray-600)">${h.length} manager(s)</span>
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
  `,o(h),document.getElementById("search-users").addEventListener("input",l=>{const i=l.target.value.toLowerCase();o(h.filter(r=>{var p;return r.pseudo.toLowerCase().includes(i)||((p=r.club_name)==null?void 0:p.toLowerCase().includes(i))}))});function o(l){document.getElementById("users-tbody").innerHTML=l.map(i=>{const r=i.mmr??1e3,p=i.mmr_deviation??350,s=i.placement_matches??0,f=Dt(r),x=i.ranked_wins??0,c=i.ranked_losses??0,k=i.ranked_draws??0,L=x+c+k,y=L>0?Math.round(x/L*100):null,I=s<10,E=p<80?"#1A6B3C":p<150?"#e67e22":"#bb2020";return`
        <tr>
          <td>
            <div style="font-weight:700">${i.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${i.club_name||"—"}</div>
            <div style="font-size:10.5px;color:var(--gray-600)">${v[i.id]||"—"}</div>
          </td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:6px">
              <span id="credits-display-${i.id}">${(i.credits||0).toLocaleString("fr")} cr.</span>
              <button class="btn-edit-credits" data-user="${i.id}" data-current="${i.credits||0}"
                style="background:none;border:none;cursor:pointer;font-size:12px;padding:0;opacity:.7" title="Modifier les crédits">✏️</button>
            </div>
            <div style="color:var(--gray-600)">Niv. Solo ${g[i.id]??1}</div>
          </td>
          <td style="font-size:12px">${i.wins}V / ${i.draws}N / ${i.losses}D</td>
          <td style="font-size:12px">🥇${i.trophies_top1} 🥈${i.trophies_top2} 🥉${i.trophies_top3}</td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:5px">
              <span style="font-size:16px">${f.emoji}</span>
              <span style="font-weight:700;color:${f.color}">${f.label}</span>
            </div>
            ${I?`<div style="font-size:10px;color:#e67e22">${s}/10 placement${s<10?` (${10-s} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${x}V ${k}N ${c}D${y!==null?` · ${y}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${r}</div>
            <div style="font-size:10px;color:${E}">RD ±${Math.round(p)}</div>
          </td>
          <td>
            ${i.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td style="display:flex;gap:4px">
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${i.id}" data-is-admin="${i.is_admin}">
              ${i.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
            <button class="btn btn-ghost btn-sm" data-delete-manager="${i.id}" data-pseudo="${i.pseudo}"
              style="color:var(--red,#bb2020);" title="Supprimer ce Manager et TOUT ce qui le lie">
              🗑️
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll(".btn-edit-credits").forEach(i=>{i.addEventListener("click",async()=>{const r=i.dataset.user,p=Number(i.dataset.current)||0,s=prompt("Nouveau solde de crédits :",p);if(s===null)return;const f=parseInt(s.replace(/\s/g,""),10);if(isNaN(f)||f<0){t("Valeur invalide","error");return}const{data:x,error:c}=await _.rpc("admin_update_user_credits",{p_user_id:r,p_new_credits:f});if(c){t(c.message,"error");return}if(!(x!=null&&x.success)){t((x==null?void 0:x.error)||"Échec de la mise à jour","error");return}t("Crédits mis à jour ✅","success");const k=document.getElementById(`credits-display-${r}`);k&&(k.textContent=`${f.toLocaleString("fr")} cr.`),i.dataset.current=f})}),document.querySelectorAll("[data-toggle-admin]").forEach(i=>{i.addEventListener("click",async()=>{const r=i.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${r?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:p}=await _.from("users").update({is_admin:r}).eq("id",i.dataset.toggleAdmin);p?t(p.message,"error"):(t("Rôle mis à jour ✅","success"),xe(e,{toast:t}))})}),document.querySelectorAll("[data-delete-manager]").forEach(i=>{i.addEventListener("click",async()=>{const r=i.dataset.deleteManager,p=i.dataset.pseudo;if(!confirm(`⚠️ ATTENTION: Supprimer le Manager "${p}" supprimera DÉFINITIVEMENT:
- Tous ses decks
- Toutes ses cartes
- Tous ses matchs
- Tous ses résultats ranked
- Tout ce qui le lie en base

Continuer ?`)||!confirm("Êtes-vous vraiment sûr ? Cette action est IRRÉVERSIBLE."))return;i.disabled=!0,i.textContent="⏳";const{data:s,error:f}=await _.rpc("delete_manager_cascade",{p_user_id:r});if(f){t(`Erreur: ${f.message}`,"error"),i.disabled=!1,i.textContent="🗑️";return}if(!(s!=null&&s.success)){t(`Erreur: ${(s==null?void 0:s.error)||"Suppression échouée"}`,"error"),i.disabled=!1,i.textContent="🗑️";return}t(`Manager "${p}" supprimé et ${Object.values(s.deleted).reduce((x,c)=>x+c)} entrées supprimées ✅`,"success"),xe(e,{toast:t})})})}}const bn=[{value:"normal",label:"Normal",color:"#ccc"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function ft(e,t){var h;const{toast:n}=t,{data:a,error:u}=await _.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_real, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(u){e.innerHTML=`<p style="color:var(--danger)">${u.message}</p>`;return}const d=a||[],g=d.filter(o=>o.status==="active").length,v=d.filter(o=>o.status==="sold").length;e.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px">
      <button id="btn-price-grid" class="btn btn-primary">📊 Grille des prix</button>
      <div style="display:flex;gap:12px">
        <div class="card-panel" style="min-width:120px;text-align:center;padding:12px 20px">
          <div style="font-size:22px;font-weight:700;color:#1A6B3C">${g}</div>
          <div style="font-size:11px;color:var(--tile-fg-dim)">Annonces actives</div>
        </div>
        <div class="card-panel" style="min-width:120px;text-align:center;padding:12px 20px">
          <div style="font-size:22px;font-weight:700;color:#D4A017">${v}</div>
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
            ${d.map(o=>{var p,s,f,x;const l=(p=o.card)==null?void 0:p.player,i=l?`${l.firstname} ${l.surname_real}`:((s=o.card)==null?void 0:s.card_type)||"—",r={active:"#1A6B3C",sold:"#D4A017",cancelled:"#888"};return`<tr>
                <td><b>${i}</b>${l?`<div style="font-size:10px;color:var(--tile-fg-dim)">${l.rarity} · ${l.job}</div>`:""}</td>
                <td style="font-size:12px">${((f=o.seller)==null?void 0:f.pseudo)||"—"}</td>
                <td style="font-size:12px">${((x=o.buyer)==null?void 0:x.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(o.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${r[o.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
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
  `,document.querySelectorAll("[data-cancel]").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:l}=await _.from("market_listings").update({status:"cancelled"}).eq("id",o.dataset.cancel);l?n(l.message,"error"):(n("Annonce annulée","success"),ft(e,t))})}),(h=document.getElementById("btn-price-grid"))==null||h.addEventListener("click",()=>vn(t))}async function vn(e){await he(e)}function xn(){const e=document.getElementById("modal-overlay");if(!e||e._pgBlocker)return;const t=n=>{n.target===n.currentTarget&&n.stopImmediatePropagation()};e.addEventListener("click",t,!0),e._pgBlocker=t}function fe(){const e=document.getElementById("modal-overlay");e!=null&&e._pgBlocker&&(e.removeEventListener("click",e._pgBlocker,!0),delete e._pgBlocker)}async function he(e){var p,s;const{openModal:t,closeModal:n,toast:a}=e,{data:u,error:d}=await _.from("sell_price_configs").select("*").order("rarity").order("note_min");if(d){a(d.message,"error");return}const g=f=>bn.map(x=>`<option value="${x.value}" ${x.value===f?"selected":""}>${x.label}</option>`).join(""),v=f=>`
    <tr data-row="${f.id}">
      <td style="padding:4px 8px">
        <select data-field="rarity" data-id="${f.id}" style="width:100%;padding:6px;font-size:13px">${g(f.rarity)}</select>
      </td>
      <td style="padding:4px 8px">
        <input data-field="note_min" data-id="${f.id}" type="number" min="0" max="999" value="${f.note_min}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="note_max" data-id="${f.id}" type="number" min="0" max="999" value="${f.note_max}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="price_min" data-id="${f.id}" type="number" min="0" value="${f.price_min}" style="width:100%;padding:6px;text-align:right;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="price_max" data-id="${f.id}" type="number" min="0" value="${f.price_max}" style="width:100%;padding:6px;text-align:right;font-size:13px">
      </td>
      <td style="text-align:center;padding:4px 8px">
        <button class="btn btn-danger btn-sm" data-del-row="${f.id}">🗑️</button>
      </td>
    </tr>`,h=`
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
          ${(u||[]).map(v).join("")||'<tr><td colspan="6" style="text-align:center;color:#aaa;padding:20px">Aucune règle définie.</td></tr>'}
        </tbody>
      </table>
    </div>
  `;t("📊 Grille des prix — vente marché",h,`
    <button id="pg-add-row" class="btn btn-primary">+ Ajouter une ligne</button>
    <button id="pg-close" class="btn btn-ghost">Fermer</button>
  `),xn(),(p=document.getElementById("pg-close"))==null||p.addEventListener("click",()=>{fe(),n()});function l(f){const x=f.dataset.id,c=f.dataset.field,k=c==="rarity"?f.value:Number(f.value)||0;return i(x,{[c]:k},f)}async function i(f,x,c){const k=document.querySelector(`tr[data-row="${f}"]`),L=m=>k.querySelector(`[data-field="${m}"]`),y="note_min"in x?x.note_min:Number(L("note_min").value),I="note_max"in x?x.note_max:Number(L("note_max").value),E="price_min"in x?x.price_min:Number(L("price_min").value),b="price_max"in x?x.price_max:Number(L("price_max").value);if(y>I){a("Note min doit être ≤ note max","error");return}if(E>b){a("Prix min doit être ≤ prix max","error");return}const{error:$}=await _.from("sell_price_configs").update(x).eq("id",f);if($){a($.message,"error");return}c&&(c.style.transition="background .3s",c.style.background="#e8f8ee",setTimeout(()=>{c.style.background=""},500))}function r(){document.querySelectorAll("#pg-tbody [data-field]").forEach(f=>{f.addEventListener("change",()=>l(f))})}r(),document.querySelectorAll("[data-del-row]").forEach(f=>{f.addEventListener("click",async()=>{confirm("Supprimer cette ligne ?")&&(await _.from("sell_price_configs").delete().eq("id",f.dataset.delRow),a("Ligne supprimée","success"),fe(),he(e))})}),(s=document.getElementById("pg-add-row"))==null||s.addEventListener("click",async()=>{var L;const f={rarity:"normal",note_min:0,note_max:20,price_min:2500,price_max:15e3},{data:x,error:c}=await _.from("sell_price_configs").insert(f).select().single();if(c){a(c.message,"error");return}const k=document.getElementById("pg-tbody");k.querySelector("td[colspan]")&&(k.innerHTML=""),k.insertAdjacentHTML("beforeend",v(x)),r(),(L=document.querySelector(`[data-del-row="${x.id}"]`))==null||L.addEventListener("click",async function(){confirm("Supprimer cette ligne ?")&&(await _.from("sell_price_configs").delete().eq("id",x.id),a("Ligne supprimée","success"),fe(),he(e))}),a("Ligne ajoutée — modifie les valeurs directement","success")})}async function hn(e,{toast:t}){e.innerHTML=`
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
  `,document.getElementById("export-clubs-template").addEventListener("click",()=>{ae("clubs_template.csv",`real_name,encoded_name,country_code,logo_url
Paris Saint-Germain,PARIS FC,FR,
Real Madrid,MADRID FC,ES,
`)}),document.getElementById("export-players-template").addEventListener("click",()=>{ae("players_template.csv",`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
Kylian,Mbappe,,FR,PARIS FC,ATT,,0,0,2,9,legende,,,blanc,noir,court,50000
Achraf,Hakimi,,MA,PARIS FC,DEF,MIL,0,7,5,3,pepite,5,9,metisse,noir,court,20000
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:n,error:a}=await _.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(a){t(a.message,"error");return}if(!n||n.length===0){t("Aucun club à exporter","info");return}let u=`real_name,encoded_name,country_code,logo_url
`;n.forEach(d=>{u+=[d.real_name,d.encoded_name,d.country_code,d.logo_url||""].map(Oe).join(",")+`
`}),ae("clubs_export.csv",u),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:a}=await _.from("players").select("firstname,surname_real,surname_real,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_real");if(a){t(a.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let u=`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(d=>{var g;u+=[d.firstname,d.surname_real,d.surname_real,d.country_code,((g=d.clubs)==null?void 0:g.encoded_name)||"",d.job,d.job2||"",d.note_g,d.note_d,d.note_m,d.note_a,d.rarity,d.note_min??"",d.note_max??"",d.skin,d.hair,d.hair_length,d.sell_price].map(Oe).join(",")+`
`}),ae("players_export.csv",u),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const a=n.target.files[0];if(!a)return;const u=document.getElementById("clubs-import-result");u.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const d=await a.text(),g=Ue(d);if(g.length===0){u.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let v=0,h=0;const o=[];for(const l of g){if(!l.real_name||!l.encoded_name||!l.country_code){h++,o.push(`Ligne ignorée (champs manquants): ${l.real_name||"?"}`);continue}const i={real_name:l.real_name,encoded_name:l.encoded_name.toUpperCase(),country_code:l.country_code.toUpperCase().slice(0,2),logo_url:l.logo_url||null},{error:r}=await _.from("clubs").upsert(i,{onConflict:"encoded_name"});r?(h++,o.push(`${l.encoded_name}: ${r.message}`)):v++}u.innerHTML=`<div style="color:var(--green)">✅ ${v} clubs importés</div>
        ${h>0?`<div style="color:#c0392b">❌ ${h} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${o.slice(0,10).join("<br>")}</div>`:""}`,t(`${v} clubs importés`,"success")}catch(d){u.innerHTML=`<span style="color:#c0392b">Erreur : ${d.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const a=n.target.files[0];if(!a)return;const u=document.getElementById("players-import-result");u.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const d=await a.text(),g=Ue(d);if(g.length===0){u.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:v}=await _.from("clubs").select("id,encoded_name"),h={};(v||[]).forEach(c=>{h[c.encoded_name.toUpperCase()]=c.id});let o=0,l=0;const i=[],r=["GK","DEF","MIL","ATT"],p=["normal","pepite","papyte","legende"],s=["blanc","metisse","typ","noir"],f=["blond","marron","noir","chauve"],x=["rase","court","milong","long"];for(const c of g){if(!c.firstname||!c.surname_real||!c.country_code||!c.job){l++,i.push(`Ligne ignorée (champs requis manquants): ${c.firstname||"?"}`);continue}if(!r.includes(c.job)){l++,i.push(`${c.firstname}: job invalide "${c.job}"`);continue}const k=c.club_encoded_name&&h[c.club_encoded_name.toUpperCase()]||null,L={firstname:c.firstname,surname_real:c.surname_real,surname_real:c.surname_real||pe(c.surname_real),country_code:c.country_code.toUpperCase().slice(0,2),club_id:k,job:c.job,job2:r.includes(c.job2)?c.job2:null,note_g:parseInt(c.note_g)||0,note_d:parseInt(c.note_d)||0,note_m:parseInt(c.note_m)||0,note_a:parseInt(c.note_a)||0,rarity:p.includes(c.rarity)?c.rarity:"normal",note_min:c.note_min!==""&&c.note_min!=null?parseInt(c.note_min):null,note_max:c.note_max!==""&&c.note_max!=null?parseInt(c.note_max):null,skin:s.includes(c.skin)?c.skin:"blanc",hair:f.includes(c.hair)?c.hair:"noir",hair_length:x.includes(c.hair_length)?c.hair_length:"court",sell_price:parseInt(c.sell_price)||0},{error:y}=await _.from("players").insert(L);y?(l++,i.push(`${c.firstname} ${c.surname_real}: ${y.message}`)):o++}u.innerHTML=`<div style="color:var(--green)">✅ ${o} joueurs importés</div>
        ${l>0?`<div style="color:#c0392b">❌ ${l} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${i.slice(0,10).join("<br>")}</div>`:""}`,t(`${o} joueurs importés`,"success")}catch(d){u.innerHTML=`<span style="color:#c0392b">Erreur : ${d.message}</span>`}n.target.value=""})}function Oe(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function ae(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(n),u=document.createElement("a");u.href=a,u.download=e,u.click(),URL.revokeObjectURL(a)}function Ue(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(g=>g.trim());if(t.length<2)return[];const n=t[0],a=n.split(";").length>n.split(",").length?";":",",u=qe(n,a).map(g=>g.trim().replace(/^\uFEFF/,"").toLowerCase()),d=[];for(let g=1;g<t.length;g++){if(!t[g].trim())continue;const v=qe(t[g],a),h={};u.forEach((o,l)=>{h[o]=(v[l]||"").trim()}),!Object.values(h).every(o=>!o)&&d.push(h)}return d}function qe(e,t=","){const n=[];let a="",u=!1;for(let d=0;d<e.length;d++){const g=e[d];u?g==='"'?e[d+1]==='"'?(a+='"',d++):u=!1:a+=g:g==='"'?u=!0:g===t?(n.push(a),a=""):a+=g}return n.push(a),n}const En={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function _n(e,{toast:t}){const n=Object.keys(ge);let a=n[0];const{data:u}=await _.from("formation_links_overrides").select("formation, links"),d={};(u||[]).forEach(l=>{d[l.formation]=l.links});let g=new Set;function v(l,i){return[l,i].sort().join("-")}function h(l){const i=d[l]||ge[l]||[];g=new Set(i.map(([r,p])=>v(r,p)))}h(a),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${n.map(l=>`<option value="${l}" ${l===a?"selected":""}>${l}</option>`).join("")}
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
  `;function o(){const l=jt[a]||{},i=De(a),r=320,p=400,s=22;function f(y){const I=l[y];return I?{x:I.x*r,y:I.y*p}:null}let x=`<svg width="${r}" height="${p}" viewBox="0 0 ${r} ${p}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;i.forEach(([y,I],E)=>{const b=f(y),$=f(I);if(!b||!$)return;const m=v(y,I),w=g.has(m),B=w?"#3b82f6":"#999",S=w?.95:.35,C=w?4:3;x+=`<line x1="${b.x}" y1="${b.y}" x2="${$.x}" y2="${$.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${m}" style="cursor:pointer"/>`,x+=`<line x1="${b.x}" y1="${b.y}" x2="${$.x}" y2="${$.y}"
        stroke="${B}" stroke-width="${C}" stroke-dasharray="${w?"none":"4,3"}"
        opacity="${S}" pointer-events="none" data-line-key="${m}"/>`});for(const y of Object.keys(l)){const I=f(y);if(!I)continue;const E=y.replace(/\d+/,""),b=En[E]||"#555";x+=`<circle cx="${I.x}" cy="${I.y}" r="${s}" fill="${b}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,x+=`<text x="${I.x}" y="${I.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${y}</text>`}x+="</svg>",document.getElementById("field-wrap").innerHTML=x;const c=document.getElementById("links-list");c.innerHTML=i.map(([y,I])=>{const E=v(y,I),b=g.has(E);return`
        <button class="link-toggle" data-key="${E}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${b?"#3b82f6":"#ddd"};
          background:${b?"#eaf2ff":"#fafafa"};
          color:${b?"#1d4ed8":"#888"}">
          <span>${y} ↔ ${I}</span>
          <span>${b?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const k=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');k&&(k.textContent=`Liens (${g.size}/${i.length} actifs)`);function L(y){g.has(y)?g.delete(y):g.add(y),o()}e.querySelectorAll(".link-hit").forEach(y=>{y.addEventListener("click",()=>L(y.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(y=>{y.addEventListener("click",()=>L(y.dataset.key))})}o(),document.getElementById("formation-select").addEventListener("change",l=>{a=l.target.value,h(a),o()}),document.getElementById("reset-btn").addEventListener("click",()=>{const l=ge[a]||[];g=new Set(l.map(([i,r])=>v(i,r))),o(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const i=De(a).filter(([p,s])=>g.has(v(p,s))),{error:r}=await _.from("formation_links_overrides").upsert({formation:a,links:i,updated_at:new Date().toISOString()});if(r){t(r.message,"error");return}d[a]=i,t(`Liens enregistrés pour ${a} (${i.length} actifs)`,"success")})}const wn=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],$n=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],In=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function kn(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await _.from("booster_configs").select("*").order("sort_order");let n=null,a=[],u=null;const d=()=>window.innerWidth<700;async function g(){if(!n){a=[];return}if(n!==u){const{data:i}=await _.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");a=i||[],u=n}}function v(){return`
    <div id="booster-list" style="background:#fff;${d()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(t||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(i=>`
      <div class="booster-row" data-id="${i.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${i.id===n?"#f0f7f0":"#fff"}">
        ${i.image_url?`<img src="/icons/${i.image_url}" style="width:36px;height:36px;object-fit:contain;border-radius:6px;background:#f5f5f5;padding:2px">`:'<div style="width:36px;height:36px;background:#eee;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:20px">📦</div>'}
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.name}</div>
          <div style="font-size:11px;color:#888">
            ${i.price_type==="credits"?(i.price_credits||0)+" cr.":i.price_type==="pub"?"Pub":"Gratuit"}
            · ${i.card_count||5} cartes · ${i.is_active?"✅":"⛔"}
          </div>
        </div>
        <button class="btn-delete" data-id="${i.id}" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:18px;padding:4px;flex-shrink:0">🗑️</button>
      </div>`).join("")}
      ${(t||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>'}
    </div>`}function h(){const i=n?(t||[]).find(s=>s.id===n):null;if(!i)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const r=a.reduce((s,f)=>s+Number(f.percentage||0),0),p=Math.abs(r-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${d()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <h3 style="margin:0 0 14px;font-size:16px">${i.name}</h3>

      <!-- Infos de base -->
      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="f-name" value="${i.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="f-image-url" value="${i.image_url||""}" placeholder="ex: booster-players.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          ${i.image_url?`<img src="/icons/${i.image_url}" style="height:44px;margin-top:8px;border-radius:6px;object-fit:contain;background:#f0f0f0;padding:4px">`:""}
          <div id="icon-picker-grid" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE DE PRIX</label>
            <select id="f-price-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${In.map(s=>`<option value="${s.value}" ${i.price_type===s.value?"selected":""}>${s.label}</option>`).join("")}
            </select>
          </div>
          <div id="credits-field">
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">CRÉDITS</label>
            <input id="f-price-credits" type="number" min="0" value="${i.price_credits||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NB CARTES</label>
            <input id="f-card-count" type="number" min="1" max="10" value="${i.card_count||5}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="f-sort" type="number" value="${i.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:flex;align-items:center;gap:10px">
          <input type="checkbox" id="f-active" ${i.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
          <label for="f-active" style="font-size:13px;cursor:pointer;font-weight:600">Booster actif (visible dans la boutique)</label>
        </div>
        <div style="display:flex;align-items:center;gap:10px;margin-top:10px">
          <input type="checkbox" id="f-allow-dup" ${i.allow_duplicates!==!1?"checked":""} style="width:18px;height:18px;cursor:pointer">
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
              <input id="f-max-per-user" type="number" min="1" value="${i.max_per_user||""}" placeholder="ex: 1"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible à partir du</label>
              <input id="f-available-from" type="date" value="${i.available_from||""}"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible jusqu'au</label>
              <input id="f-available-until" type="date" value="${i.available_until||""}"
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
              Total : ${r.toFixed(1)}% ${p?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${a.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':a.map((s,f)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${f}">
            <select class="rate-type" data-idx="${f}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${wn.map(x=>`<option value="${x.value}" ${s.card_type===x.value?"selected":""}>${x.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${f}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${$n.map(x=>`<option value="${x.value}" ${(s.rarity||"")===x.value?"selected":""}>${x.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${f}" type="number" min="0" max="20" value="${s.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${f}" type="number" min="0" max="20" value="${s.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${f}" type="number" min="0.1" max="100" step="0.1" value="${s.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${f}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function o(i=!1){i||await g();const r=!n&&d(),p=n&&d();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!d()||r||!n?v():""}
      ${!d()||p?h():""}
    </div>`,l()}function l(){var p,s,f,x,c,k,L;const i=y=>e.querySelector(y);e.querySelectorAll(".booster-row").forEach(y=>{y.addEventListener("click",I=>{I.target.closest(".btn-delete")||(n=y.dataset.id,u=null,o())})}),(p=i("#btn-back"))==null||p.addEventListener("click",()=>{n=null,o()}),(s=i("#btn-new"))==null||s.addEventListener("click",async()=>{const y=prompt("Nom du nouveau booster :");if(!(y!=null&&y.trim()))return;const{data:I,error:E}=await _.from("booster_configs").insert({name:y.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(E){alert(E.message);return}t.push(I),n=I.id,u=null,o()}),e.querySelectorAll(".btn-delete").forEach(y=>{y.addEventListener("click",async I=>{if(I.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await _.from("booster_configs").delete().eq("id",y.dataset.id);const E=t.findIndex(b=>b.id===y.dataset.id);E>-1&&t.splice(E,1),n===y.dataset.id&&(n=null,u=null),o()})}),(f=i("#btn-cancel"))==null||f.addEventListener("click",()=>{n=null,o()}),(x=i("#f-price-type"))==null||x.addEventListener("change",y=>{const I=i("#credits-field");I&&(I.style.opacity=y.target.value!=="credits"?"0.4":"1")}),(c=i("#btn-pick-icon"))==null||c.addEventListener("click",async()=>{var I;const y=i("#icon-picker-grid");if(y){if(y.style.display!=="none"){y.style.display="none";return}y.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',y.style.display="block";try{const b=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),$=Array.isArray(b)?b.filter(w=>w.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(w.name)):[];if(!$.length){y.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const m=((I=i("#f-image-url"))==null?void 0:I.value)||"";y.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${$.map(w=>`
          <div class="icon-pick-item" data-name="${w.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${w.name===m?"#1A6B3C":"#ddd"};background:${w.name===m?"#f0f7f0":"#fff"}">
            <img src="/icons/${w.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${w.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,y.querySelectorAll(".icon-pick-item").forEach(w=>{w.addEventListener("click",()=>{const B=i("#f-image-url");B&&(B.value=w.dataset.name),y.style.display="none"})})}catch(E){y.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${E.message}</div>`}}});function r(){e.querySelectorAll("[data-rate-idx]").forEach(y=>{var E,b,$,m,w;const I=Number(y.dataset.rateIdx);I>=0&&I<a.length&&(a[I].card_type=((E=y.querySelector(".rate-type"))==null?void 0:E.value)||"player",a[I].rarity=((b=y.querySelector(".rate-rarity"))==null?void 0:b.value)||null,a[I].note_min=Number(($=y.querySelector(".rate-note-min"))==null?void 0:$.value)||null,a[I].note_max=Number((m=y.querySelector(".rate-note-max"))==null?void 0:m.value)||null,a[I].percentage=Number((w=y.querySelector(".rate-pct"))==null?void 0:w.value)||0)})}(k=i("#btn-add-rate"))==null||k.addEventListener("click",()=>{r(),a.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:a.length}),o(!0)}),e.querySelectorAll(".btn-del-rate").forEach(y=>{y.addEventListener("click",()=>{r(),a.splice(Number(y.dataset.idx),1),o(!0)})}),(L=i("#btn-save"))==null||L.addEventListener("click",async()=>{var m,w,B,S,C,D,j,U,q,H,A,z,T;const y=(t||[]).find(M=>M.id===n);if(!y)return;const I=[];e.querySelectorAll("[data-rate-idx]").forEach(M=>{var G,V,J,Y,W;const R=Number(M.dataset.rateIdx);I.push({booster_id:n,card_type:((G=M.querySelector(".rate-type"))==null?void 0:G.value)||"player",rarity:((V=M.querySelector(".rate-rarity"))==null?void 0:V.value)||null,note_min:Number((J=M.querySelector(".rate-note-min"))==null?void 0:J.value)||null,note_max:Number((Y=M.querySelector(".rate-note-max"))==null?void 0:Y.value)||null,percentage:Number((W=M.querySelector(".rate-pct"))==null?void 0:W.value)||0,sort_order:R});const N=I[I.length-1];N.rarity||(N.rarity=null),N.note_min||(N.note_min=null),N.note_max||(N.note_max=null)});const E=I.reduce((M,R)=>M+R.percentage,0);if(I.length&&Math.abs(E-100)>.5){alert(`La somme doit faire 100% (actuellement ${E.toFixed(1)}%)`);return}const b={name:((w=(m=i("#f-name"))==null?void 0:m.value)==null?void 0:w.trim())||y.name,image_url:((S=(B=i("#f-image-url"))==null?void 0:B.value)==null?void 0:S.trim())||null,price_type:(C=i("#f-price-type"))==null?void 0:C.value,price_credits:Number((D=i("#f-price-credits"))==null?void 0:D.value)||0,card_count:Number((j=i("#f-card-count"))==null?void 0:j.value)||5,is_active:((U=i("#f-active"))==null?void 0:U.checked)??y.is_active,allow_duplicates:((q=i("#f-allow-dup"))==null?void 0:q.checked)??!0,sort_order:Number((H=i("#f-sort"))==null?void 0:H.value)||0,max_per_user:(A=i("#f-max-per-user"))!=null&&A.value?Number(i("#f-max-per-user").value):null,available_from:((z=i("#f-available-from"))==null?void 0:z.value)||null,available_until:((T=i("#f-available-until"))==null?void 0:T.value)||null},{error:$}=await _.from("booster_configs").update(b).eq("id",n);if($){alert($.message);return}if(Object.assign(y,b),await _.from("booster_drop_rates").delete().eq("booster_id",n),I.length){const{error:M}=await _.from("booster_drop_rates").insert(I);if(M){alert(M.message);return}}a=I,u=n,alert("✅ Booster enregistré !"),o(!0)})}o()}const yt=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function Ln(e){await Be(e)}async function Be(e){const{data:t,error:n}=await _.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
          ${(t||[]).map(a=>Bn(a)).join("")}
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
              ${yt.map(a=>`<option value="${a.value}">${a.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>He(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>An(e)),e.querySelectorAll("[data-edit]").forEach(a=>{const u=(t||[]).find(d=>d.id===a.dataset.edit);u&&a.addEventListener("click",()=>He(u))}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await _.from("sell_price_configs").delete().eq("id",a.dataset.delete),await Be(e))})})}function Bn(e){const t=yt.find(n=>n.value===e.rarity);return`
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
    </tr>`}function He(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function An(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,a=parseInt(document.getElementById("form-price").value)||0,u=parseInt(document.getElementById("form-note-min").value)||1,d=parseInt(document.getElementById("form-note-max").value)||10;if(u>d){alert("Note min doit être ≤ note max");return}const g={rarity:n,price:a,note_min:u,note_max:d,updated_at:new Date().toISOString()};let v;if(t?{error:v}=await _.from("sell_price_configs").update(g).eq("id",t):{error:v}=await _.from("sell_price_configs").insert(g),v){alert("Erreur : "+v.message);return}document.getElementById("config-form").style.display="none",await Be(e)}async function Sn(e){await Ae(e)}async function Ae(e){const{data:t}=await _.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Actualités</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(t||[]).map(n=>Cn(n)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>Ge(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Mn(e)),e.querySelectorAll("[data-edit-row]").forEach(n=>{const a=(t||[]).find(u=>u.id===n.dataset.editRow);a&&n.addEventListener("click",()=>Ge(a))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await _.from("patch_notes").delete().eq("id",n.dataset.delete),await Ae(e))})})}function Cn(e){const t=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
    <div data-edit-row="${e.id}" style="background:#fff;border-radius:10px;padding:14px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;gap:12px;align-items:flex-start;cursor:pointer">
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
    </div>`}function Ge(e){const t=document.getElementById("article-form");t.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img-current").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-img-file").value="";const n=document.getElementById("form-art-img-preview");n.innerHTML=e!=null&&e.image_url?`<img src="${e.image_url}" style="width:100%;height:100%;object-fit:cover">`:'<span style="font-size:20px;opacity:.4">📰</span>',document.getElementById("form-art-img-file").onchange=d=>{var h;const g=(h=d.target.files)==null?void 0:h[0];if(!g)return;const v=new FileReader;v.onload=()=>{n.innerHTML=`<img src="${v.result}" style="width:100%;height:100%;object-fit:cover">`},v.readAsDataURL(g)},document.getElementById("form-art-pub").checked=e?e.is_published:!0;const a=new Date((e==null?void 0:e.published_at)||Date.now()),u=new Date(a.getTime()-a.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=u,t.scrollIntoView({behavior:"smooth"})}async function Tn(e){const t=(e.name.split(".").pop()||"png").toLowerCase(),n=`journal/${Date.now()}.${t}`,{error:a}=await _.storage.from("assets").upload(n,e,{upsert:!0,cacheControl:"3600"});if(a)throw a;const{data:u}=_.storage.from("assets").getPublicUrl(n);return u.publicUrl}async function Mn(e){var p;const t=document.getElementById("form-id").value,n=document.getElementById("form-art-title").value.trim(),a=document.getElementById("form-art-desc").value.trim(),u=((p=document.getElementById("form-art-img-file").files)==null?void 0:p[0])||null,d=document.getElementById("form-art-img-current").value||null,g=document.getElementById("form-art-pub").checked,v=document.getElementById("form-art-date").value,h=document.getElementById("form-save");if(!n){alert("Le titre est obligatoire.");return}if(!a){alert("La description est obligatoire.");return}let o=d;if(u)try{h&&(h.textContent="📤 Envoi de l'image…"),o=await Tn(u)}catch(s){alert("Erreur upload image : "+s.message),h&&(h.textContent="💾 Enregistrer");return}const l=v?new Date(v).toISOString():new Date().toISOString(),i={title:n,description:a,image_url:o,is_published:g,published_at:l};let r;if(t?{error:r}=await _.from("patch_notes").update(i).eq("id",t):{error:r}=await _.from("patch_notes").insert(i),r){alert("Erreur : "+r.message);return}document.getElementById("article-form").style.display="none",await Ae(e)}async function zn(e){await ne(e)}async function ne(e){var l,i,r,p,s,f,x,c,k,L,y,I;const{data:t}=await _.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
            </div>`:(t||[]).map(E=>Rn(E)).join("")}
        </div>
      </div><!-- /colonne droite -->
    </div>`,(l=document.getElementById("ts-add"))==null||l.addEventListener("click",()=>Ke(null,(t==null?void 0:t.length)||0)),(i=document.getElementById("ts-reset"))==null||i.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:E}=await _.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(E?"Erreur : "+E.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(r=document.getElementById("ts-cancel"))==null||r.addEventListener("click",bt),(p=document.getElementById("ts-save"))==null||p.addEventListener("click",()=>jn(e)),(s=document.getElementById("ts-preview-btn"))==null||s.addEventListener("click",Dn);const n=document.getElementById("ts-editor"),a=()=>{const E=document.getElementById("ts-content");E&&n&&(E.value=n.innerHTML)};n==null||n.addEventListener("input",a),n==null||n.addEventListener("blur",a);const u=()=>{document.activeElement!==n&&(n==null||n.focus())};(f=document.getElementById("ts-toolbar"))==null||f.querySelectorAll("[data-cmd]").forEach(E=>{E.addEventListener("mousedown",b=>{b.preventDefault(),u();const $=E.dataset.cmd;$.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,$.split(":")[1]):document.execCommand($,!1,null),a()})}),(x=document.getElementById("ts-insert-color"))==null||x.addEventListener("mousedown",E=>{E.preventDefault(),u();const b=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");b&&(document.execCommand("foreColor",!1,b),a())}),(c=document.getElementById("ts-clear-format"))==null||c.addEventListener("mousedown",E=>{E.preventDefault(),u(),document.execCommand("removeFormat",!1,null),a()}),n==null||n.addEventListener("focus",()=>{n&&(n.style.borderColor="#1A6B3C")}),n==null||n.addEventListener("blur",()=>{n&&(n.style.borderColor="#ddd")});const d=document.getElementById("ts-image"),g=document.getElementById("ts-img-preview"),v=document.getElementById("ts-img-preview-el"),h=document.getElementById("ts-img-picker-grid"),o=()=>{var b;const E=(b=d==null?void 0:d.value)==null?void 0:b.trim();if(E){const $="/";v.src=`${$}icons/${E}`,g.style.display="block"}else g.style.display="none"};d==null||d.addEventListener("input",o),(k=document.getElementById("ts-img-clear"))==null||k.addEventListener("click",()=>{d&&(d.value=""),g.style.display="none",h.style.display="none"}),(L=document.getElementById("ts-img-pick"))==null||L.addEventListener("click",async()=>{if(h.style.display!=="none"){h.style.display="none";return}h.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',h.style.display="block";try{const b=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),$=Array.isArray(b)?b.filter(w=>w.name.startsWith("tuto_")):[];if(!$.length){h.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const m="/";h.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+$.map(w=>`
          <div data-pick="${w.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${m}icons/${w.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${w.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",h.querySelectorAll("[data-pick]").forEach(w=>{w.addEventListener("click",()=>{d&&(d.value=w.dataset.pick),o(),h.style.display="none"})})}catch(E){h.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+E.message+"</div>"}}),(y=document.getElementById("ts-color"))==null||y.addEventListener("input",E=>{const b=document.getElementById("ts-color-hex");b&&(b.value=E.target.value)}),(I=document.getElementById("ts-color-hex"))==null||I.addEventListener("input",E=>{const b=E.target.value;if(/^#[0-9a-fA-F]{6}$/.test(b)){const $=document.getElementById("ts-color");$&&($.value=b)}}),e.querySelectorAll("[data-edit-row]").forEach(E=>{const b=(t||[]).find($=>$.id===E.dataset.editRow);b&&E.addEventListener("click",()=>Ke(b))}),e.querySelectorAll("[data-delete]").forEach(E=>{E.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await _.from("tutorial_steps").delete().eq("id",E.dataset.delete),ne(e))})}),e.querySelectorAll("[data-toggle]").forEach(E=>{E.addEventListener("click",async()=>{const b=(t||[]).find($=>$.id===E.dataset.toggle);b&&(await _.from("tutorial_steps").update({is_active:!b.is_active}).eq("id",b.id),ne(e))})}),e.querySelectorAll("[data-up]").forEach(E=>{E.addEventListener("click",async()=>{const b=t||[],$=b.findIndex(m=>m.id===E.dataset.up);$<=0||(await Promise.all([_.from("tutorial_steps").update({step_order:b[$-1].step_order}).eq("id",b[$].id),_.from("tutorial_steps").update({step_order:b[$].step_order}).eq("id",b[$-1].id)]),ne(e))})}),e.querySelectorAll("[data-down]").forEach(E=>{E.addEventListener("click",async()=>{const b=t||[],$=b.findIndex(m=>m.id===E.dataset.down);$<0||$>=b.length-1||(await Promise.all([_.from("tutorial_steps").update({step_order:b[$+1].step_order}).eq("id",b[$].id),_.from("tutorial_steps").update({step_order:b[$].step_order}).eq("id",b[$+1].id)]),ne(e))})})}function Rn(e){return`
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
  </div>`}function Ke(e,t=0){document.getElementById("ts-form-empty").style.display="none",document.getElementById("ts-form-content").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const n=document.getElementById("ts-editor");n&&(n.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??t,document.getElementById("ts-active").checked=e?e.is_active:!0;const a=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=a,document.getElementById("ts-color-hex").value=a;const u=(e==null?void 0:e.image_url)||"",d=document.getElementById("ts-image");d&&(d.value=u);const g=document.getElementById("ts-img-preview"),v=document.getElementById("ts-img-preview-el");if(u&&g&&v){const h="/";v.src=`${h}icons/${u}`,g.style.display="block"}else g&&(g.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function bt(){document.getElementById("ts-form-content").style.display="none",document.getElementById("ts-form-empty").style.display="block",document.getElementById("ts-preview-area").innerHTML=""}function Dn(){var o,l;const e=document.getElementById("ts-emoji").value||"⚽",t=document.getElementById("ts-title").value||"Titre",n=document.getElementById("ts-editor"),a=n?n.innerHTML:document.getElementById("ts-content").value||"",u=document.getElementById("ts-color-hex").value||"#1A6B3C",d=(l=(o=document.getElementById("ts-image"))==null?void 0:o.value)==null?void 0:l.trim(),v=d?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${d}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",h=document.getElementById("ts-preview-area");h.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${u}"></div></div>
        <div style="padding:20px 20px 0;text-align:center">
          <div style="font-size:48px;margin-bottom:8px;line-height:1">${e}</div>
          <div style="font-size:17px;font-weight:900;color:#111;margin-bottom:4px">${t}</div>
          <div style="font-size:11px;color:#aaa">6 / 10</div>
        </div>
        ${v}
        <div style="padding:${d?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${a}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${u};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,h.querySelectorAll("ul,ol").forEach(i=>{i.style.paddingLeft="20px",i.style.margin="6px 0"}),h.querySelectorAll("li").forEach(i=>{i.style.marginBottom="4px"}),h.querySelectorAll("p").forEach(i=>{i.style.marginBottom="8px"})}async function jn(e){var i,r;const t=document.getElementById("ts-id").value,n=document.getElementById("ts-emoji").value.trim()||"⚽",a=document.getElementById("ts-title").value.trim(),u=document.getElementById("ts-editor"),d=(u?u.innerHTML:document.getElementById("ts-content").value).trim(),g=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",v=parseInt(document.getElementById("ts-order").value)||0,h=document.getElementById("ts-active").checked;if(!a||!d){alert("Titre et contenu sont obligatoires.");return}const o={emoji:n,title:a,content:d,color:g,step_order:v,is_active:h,image_url:((r=(i=document.getElementById("ts-image"))==null?void 0:i.value)==null?void 0:r.trim())||null};let l;if(t?{error:l}=await _.from("tutorial_steps").update(o).eq("id",t):{error:l}=await _.from("tutorial_steps").insert(o),l){alert("Erreur : "+l.message);return}bt(),ne(e)}const vt="/",xt=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function Nn(e,t){await ce(e,t)}async function ce(e,t){var u,d;const[{data:n},{data:a}]=await Promise.all([_.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),_.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;gap:10px;flex-wrap:wrap">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">🏟️ Stades</h2>
        <div style="display:flex;gap:8px">
          <button id="st-gen-countries-btn" class="btn btn-ghost">🌍 Créer les stades Pays manquants</button>
          <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
        </div>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="st-list">
        ${(n||[]).length?(n||[]).map(g=>Pn(g)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucun stade créé.</div>'}
      </div>
    </div>`,(u=document.getElementById("st-add-btn"))==null||u.addEventListener("click",()=>Ve(null,a,e,t)),(d=document.getElementById("st-gen-countries-btn"))==null||d.addEventListener("click",async()=>{const{toast:g}=t,v=new Set((n||[]).filter(r=>!r.club_id&&r.country_code).map(r=>r.country_code)),h=xt.filter(([r])=>!v.has(r));if(!h.length){g("Tous les pays ont déjà un stade.","info");return}if(!confirm(`Créer ${h.length} stade(s) "Pays" manquant(s) ?`))return;const o=h.map(([r,p])=>({name:`Stade ${p}`,club_id:null,country_code:r})),{data:l,error:i}=await _.from("stadium_definitions").insert(o).select();if(i){g("Erreur : "+i.message,"error");return}l!=null&&l.length&&await _.from("cards").insert(l.map(r=>({card_type:"stadium",stadium_id:r.id}))),g(`${(l==null?void 0:l.length)||0} stade(s) Pays créé(s) ✅`,"success"),ce(e,t)}),e.querySelectorAll("[data-edit-stadium]").forEach(g=>{g.addEventListener("click",()=>{const v=(n||[]).find(h=>h.id===g.dataset.editStadium);v&&Ve(v,a,e,t)})})}function Pn(e){var u,d;let t=null;e.image_url?t=e.image_url.startsWith("http")?e.image_url:`${vt}icons/${e.image_url}`:(u=e.club)!=null&&u.logo_url?t=e.club.logo_url:e.country_code&&(t=`https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/64.png`);const n=((d=e.club)==null?void 0:d.encoded_name)||e.country_code||"—",a=et(e.name,t,`${n}<br>+10 ⭐`,{width:140});return`<div data-edit-stadium="${e.id}" style="cursor:pointer;transition:transform .15s" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
    ${a}
  </div>`}function Ve(e,t,n,a){var l,i,r;const{openModal:u,closeModal:d,toast:g}=a,v=`
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
            ${(t||[]).map(p=>`<option value="${p.id}" data-logo="${p.logo_url||""}" ${(e==null?void 0:e.club_id)===p.id?"selected":""}>${p.encoded_name}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>PAYS (si pas de club)</label>
          <select id="st-country">
            <option value="">— Aucun pays —</option>
            ${xt.map(([p,s])=>`<option value="${p}" ${(e==null?void 0:e.country_code)===p?"selected":""}>${s} (${p})</option>`).join("")}
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
  `;u(e?`Modifier : ${e.name}`:"Nouveau stade",v,`
    <button id="st-cancel" class="btn btn-ghost">Annuler</button>
    <button id="st-save" class="btn btn-primary">Enregistrer</button>
  `);const o=()=>{var b,$,m,w,B,S,C;const p=((b=document.getElementById("st-name"))==null?void 0:b.value)||"NOM DU STADE",s=(m=($=document.getElementById("st-image"))==null?void 0:$.value)==null?void 0:m.trim(),f=(B=(w=document.getElementById("st-country"))==null?void 0:w.value)==null?void 0:B.trim(),x=document.getElementById("st-club"),c=(x==null?void 0:x.selectedIndex)||0,k=x&&c>0?x.options[c].text:"",L=((C=(S=x==null?void 0:x.options[c])==null?void 0:S.getAttribute)==null?void 0:C.call(S,"data-logo"))||"";let y=null;s?y=s.startsWith("http")?s:`${vt}icons/${s}`:L?y=L:f&&(y=`https://flagsapi.com/${f.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`);const I=k||f||"—",E=document.getElementById("st-preview-card");E&&(E.innerHTML=et(p,y,`${I}<br>+10 ⭐`,{width:140}))};o(),["st-name","st-club","st-country","st-image"].forEach(p=>{var s,f;(s=document.getElementById(p))==null||s.addEventListener("input",o),(f=document.getElementById(p))==null||f.addEventListener("change",o)}),(l=document.getElementById("st-cancel"))==null||l.addEventListener("click",()=>d()),(i=document.getElementById("st-save"))==null||i.addEventListener("click",async()=>{const p=document.getElementById("st-name").value.trim(),s=document.getElementById("st-club").value||null,f=document.getElementById("st-country").value.trim().toUpperCase()||null,x=document.getElementById("st-image").value.trim()||null;if(!p){g("Le nom est obligatoire","error");return}const c={name:p,club_id:s,country_code:f,image_url:x},{error:k}=e?await _.from("stadium_definitions").update(c).eq("id",e.id):await _.from("stadium_definitions").insert(c);if(k){g("Erreur : "+k.message,"error");return}g(e?"Stade modifié ✅":"Stade créé ✅","success"),d(),ce(n,a)}),(r=document.getElementById("st-delete"))==null||r.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await _.from("stadium_definitions").delete().eq("id",e.id),g("Stade supprimé","success"),d(),ce(n,a))})}const Q=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],Fn=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}],Z=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],Je=["GK","DEF","MIL","ATT"];async function On(e,t){await Se(e,t)}async function Se(e,t){var a;const{data:n}=await _.from("gc_definitions").select("*").order("sort_order").order("created_at");e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">⚡ Game Changers</h2>
        <button id="gc-add-btn" class="btn btn-primary">+ Nouvelle carte</button>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="gc-list">
        ${(n||[]).length?(n||[]).map(u=>Un(u)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucune carte Game Changer.</div>'}
      </div>
    </div>`,(a=document.getElementById("gc-add-btn"))==null||a.addEventListener("click",()=>Ye(null,e,t)),e.querySelectorAll("[data-edit-gc]").forEach(u=>{u.addEventListener("click",()=>{const d=(n||[]).find(g=>g.id===u.dataset.editGc);d&&Ye(d,e,t)})}),e.querySelectorAll(".btn-del-gc").forEach(u=>{u.addEventListener("click",async d=>{d.stopPropagation(),confirm("Supprimer cette carte Game Changer ?")&&(await _.from("gc_definitions").delete().eq("id",u.dataset.del),Se(e,t))})})}function Un(e){const t=Q.find(u=>u.value===e.gc_type)||Q[0],n=e.image_url?`/icons/${e.image_url}`:null,a=be(e.name||"?",n,t.label.split(" ")[0],e.effect||"",{width:130});return`<div data-edit-gc="${e.id}" style="position:relative;cursor:pointer">
    ${a}
    <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
      <button class="btn-del-gc" data-del="${e.id}"
        style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0">✕</button>
    </div>
    ${e.is_active?"":'<div style="position:absolute;top:4px;right:4px;z-index:10;background:#555;color:#fff;font-size:9px;font-weight:700;padding:2px 6px;border-radius:8px">INACTIF</div>'}
  </div>`}function Ye(e,t,n){var r,p,s,f,x;const{openModal:a,closeModal:u,toast:d}=n,g=!e,v=e||{name:"",gc_type:"game_changer",color:"purple",effect:"",image_url:"",sort_order:0,is_active:!0,effect_type:"BOOST_STAT",effect_params:{}},h=(()=>{const c=v.effect_params||{},k=Z.find(L=>L.value===(v.effect_type||"BOOST_STAT"))||Z[0];return`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${k.hasValue?`<div>
        <label>VALEUR (+N)</label>
        <input id="gc-p-value" type="number" min="1" max="5" value="${c.value||2}">
      </div>`:""}
      ${k.hasCount?`<div>
        <label>NB JOUEURS</label>
        <input id="gc-p-count" type="number" min="1" max="11" value="${c.count||1}">
      </div>`:""}
      ${k.hasTarget?`<div>
        <label>CIBLE</label>
        <select id="gc-p-target">
          <option value="home" ${(c.target||"home")==="home"?"selected":""}>Mon équipe</option>
          <option value="opponent" ${c.target==="opponent"?"selected":""}>Équipe adverse</option>
        </select>
      </div>`:""}
      ${k.hasRoles?`<div>
        <label>POSTES CIBLÉS</label>
        <div style="display:flex;gap:4px;flex-wrap:wrap">
          ${Je.map(L=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555">
            <input type="checkbox" class="gc-p-role" value="${L}" ${!c.roles||c.roles.includes(L)?"checked":""}> ${L}
          </label>`).join("")}
        </div>
      </div>`:""}
    </div>`})(),o=`
    <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:#1a1a2e;border-radius:12px">
      <div id="gc-modal-preview">${be(v.name||"?",v.image_url?`/icons/${v.image_url}`:null,(Q.find(c=>c.value===v.gc_type)||Q[0]).label.split(" ")[0],v.effect||"",{width:150})}</div>
    </div>

    <div style="display:flex;flex-direction:column;gap:12px">
      <div>
        <label>NOM</label>
        <input id="gc-name" value="${v.name}">
      </div>
      <div>
        <label>EFFET / DESCRIPTION</label>
        <textarea id="gc-effect" rows="3">${v.effect||""}</textarea>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label>TYPE</label>
          <select id="gc-type">
            ${Q.map(c=>`<option value="${c.value}" ${v.gc_type===c.value?"selected":""}>${c.label}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>COULEUR</label>
          <select id="gc-color">
            ${Fn.map(c=>`<option value="${c.value}" ${v.color===c.value?"selected":""}>${c.label}</option>`).join("")}
          </select>
        </div>
      </div>
      <div>
        <label>IMAGE (public/icons/gamechanger-*)</label>
        <div style="display:flex;gap:8px;align-items:center;margin-bottom:8px">
          <input id="gc-image-url" value="${v.image_url||""}" placeholder="gamechanger-nom.png" style="flex:1">
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
          <input id="gc-sort" type="number" value="${v.sort_order||0}">
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding-top:20px">
          <input type="checkbox" id="gc-active" ${v.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
          <label for="gc-active" style="cursor:pointer;font-weight:600;text-transform:none">Actif</label>
        </div>
      </div>
      <div style="border-top:1px solid #eee;padding-top:12px;margin-top:4px">
        <label style="color:#7a28b8">EFFET EN JEU</label>
        <div>
          <label>TYPE D'EFFET</label>
          <select id="gc-effect-type" style="margin-bottom:10px">
            ${Z.map(c=>`<option value="${c.value}" ${(v.effect_type||"BOOST_STAT")===c.value?"selected":""}>${c.label}</option>`).join("")}
          </select>
        </div>
        <div id="gc-params-wrap">${h}</div>
      </div>
    </div>
  `;a(g?"Nouvelle carte Game Changer":`Modifier : ${v.name}`,o,`
    <button id="gc-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gc-save" class="btn btn-primary">💾 Enregistrer</button>
  `);const i=()=>{var b,$,m,w,B;const c=((b=document.getElementById("gc-name"))==null?void 0:b.value)||"?",k=(($=document.getElementById("gc-effect"))==null?void 0:$.value)||"",L=((m=document.getElementById("gc-type"))==null?void 0:m.value)||"game_changer",y=(B=(w=document.getElementById("gc-image-url"))==null?void 0:w.value)==null?void 0:B.trim(),I=Q.find(S=>S.value===L)||Q[0],E=document.getElementById("gc-modal-preview");E&&(E.innerHTML=be(c,y?`/icons/${y}`:null,I.label.split(" ")[0],k,{width:150}))};["gc-name","gc-effect","gc-type","gc-image-url"].forEach(c=>{var k,L;(k=document.getElementById(c))==null||k.addEventListener("input",i),(L=document.getElementById(c))==null||L.addEventListener("change",i)}),(r=document.getElementById("gc-effect-type"))==null||r.addEventListener("change",()=>{const c=document.getElementById("gc-effect-type").value,k=Z.find(y=>y.value===c)||Z[0],L=document.getElementById("gc-params-wrap");L.innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${k.hasValue?'<div><label>VALEUR (+N)</label><input id="gc-p-value" type="number" min="1" max="5" value="2"></div>':""}
      ${k.hasCount?'<div><label>NB JOUEURS</label><input id="gc-p-count" type="number" min="1" max="11" value="1"></div>':""}
      ${k.hasTarget?'<div><label>CIBLE</label><select id="gc-p-target"><option value="home">Mon équipe</option><option value="opponent">Équipe adverse</option></select></div>':""}
      ${k.hasRoles?`<div><label>POSTES CIBLÉS</label><div style="display:flex;gap:4px;flex-wrap:wrap">${Je.map(y=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555"><input type="checkbox" class="gc-p-role" value="${y}" checked> ${y}</label>`).join("")}</div></div>`:""}
    </div>`}),(p=document.getElementById("btn-pick-gc-icon"))==null||p.addEventListener("click",async()=>{var k;const c=document.getElementById("gc-icon-picker");if(c){if(c.style.display!=="none"){c.style.display="none";return}c.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',c.style.display="block";try{const y=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),I=Array.isArray(y)?y.filter(b=>b.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(b.name)):[];if(!I.length){c.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const E=((k=document.getElementById("gc-image-url"))==null?void 0:k.value)||"";c.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
        ${I.map(b=>`
        <div class="gc-icon-item" data-name="${b.name}"
          style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${b.name===E?"#7a28b8":"#ddd"};background:${b.name===E?"#f5f0ff":"#fff"}">
          <img src="/icons/${b.name}" style="height:44px;width:100%;object-fit:contain">
          <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
        </div>`).join("")}
      </div>`,c.querySelectorAll(".gc-icon-item").forEach(b=>{b.addEventListener("click",()=>{const $=document.getElementById("gc-image-url");$&&($.value=b.dataset.name),c.style.display="none",i()})})}catch(L){c.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${L.message}</div>`}}}),(s=document.getElementById("btn-upload-gc-icon"))==null||s.addEventListener("click",async()=>{var E;const c=document.getElementById("gc-image-upload"),k=(E=c==null?void 0:c.files)==null?void 0:E[0];if(!k){d("Choisir une image d'abord","error");return}const L=document.getElementById("gc-upload-status"),y=document.getElementById("btn-upload-gc-icon"),I=y.textContent;try{L.style.display="block",L.textContent="⏳ Upload en cours...",L.style.color="#666",y.disabled=!0;const b=k.name.split(".").pop().toLowerCase();if(!["png","jpg","jpeg","webp"].includes(b))throw new Error("Format invalide (PNG, JPG, WebP)");const m=Date.now(),B=`gamechanger-${k.name.replace(/\.[^.]+$/,"").replace(/[^a-z0-9-]/gi,"_").toLowerCase()}-${m}.${b}`,{data:S,error:C}=await _.storage.from("gc-icons").upload(B,k,{upsert:!1});if(C)throw C;document.getElementById("gc-image-url").value=B,i(),L.textContent="✅ Image uploadée avec succès",L.style.color="#27ae60",y.disabled=!1,y.textContent=I,c.value="",setTimeout(()=>{L.style.display="none"},3e3)}catch(b){L.textContent=`❌ Erreur : ${b.message}`,L.style.color="#c0392b",y.disabled=!1,y.textContent=I}}),(f=document.getElementById("gc-cancel"))==null||f.addEventListener("click",()=>u()),(x=document.getElementById("gc-save"))==null||x.addEventListener("click",async()=>{var E,b,$,m,w,B,S,C,D,j,U,q,H,A;const c=Z.find(z=>{var T;return z.value===(((T=document.getElementById("gc-effect-type"))==null?void 0:T.value)||"BOOST_STAT")})||Z[0],k=c.hasRoles?[...document.querySelectorAll(".gc-p-role:checked")].map(z=>z.value):null,L={...c.hasValue?{value:Number((E=document.getElementById("gc-p-value"))==null?void 0:E.value)||2}:{},...c.hasCount?{count:Number((b=document.getElementById("gc-p-count"))==null?void 0:b.value)||1}:{},...c.hasTarget?{target:(($=document.getElementById("gc-p-target"))==null?void 0:$.value)||"home"}:{},...c.hasRoles?{roles:k!=null&&k.length?k:null}:{}},y={name:((w=(m=document.getElementById("gc-name"))==null?void 0:m.value)==null?void 0:w.trim())||"",effect:((S=(B=document.getElementById("gc-effect"))==null?void 0:B.value)==null?void 0:S.trim())||null,image_url:((D=(C=document.getElementById("gc-image-url"))==null?void 0:C.value)==null?void 0:D.trim())||null,gc_type:((j=document.getElementById("gc-type"))==null?void 0:j.value)||"game_changer",color:((U=document.getElementById("gc-color"))==null?void 0:U.value)||"purple",sort_order:Number((q=document.getElementById("gc-sort"))==null?void 0:q.value)||0,is_active:((H=document.getElementById("gc-active"))==null?void 0:H.checked)??!0,effect_type:((A=document.getElementById("gc-effect-type"))==null?void 0:A.value)||"BOOST_STAT",effect_params:L};if(!y.name){d("Le nom est obligatoire","error");return}const{error:I}=g?await _.from("gc_definitions").insert(y):await _.from("gc_definitions").update(y).eq("id",v.id);if(I){d(I.message,"error");return}d(g?"Carte créée ✅":"Carte modifiée ✅","success"),u(),Se(t,n)})}async function qn(e,{toast:t,openModal:n,closeModal:a}){await P(e,{toast:t,openModal:n,closeModal:a})}async function P(e,t){var E,b,$;const{toast:n,openModal:a,closeModal:u}=t,[{data:d,error:g},{data:v},{data:h},{data:o}]=await Promise.all([_.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),_.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1),_.from("season_reward_tiers").select("*").order("rank_min"),_.from("booster_configs").select("id,name").order("sort_order")]);if(g){e.innerHTML=`<p style="color:red">${g.message}</p>`;return}const l=d||[],i=l.find(m=>m.is_active),r=(v||[]).filter(m=>(m.placement_matches||0)>=1),p=r.filter(m=>(m.placement_matches||0)>=10),s=["bronze","silver","gold","platinum","diamond","master"],f={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},x={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},c={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},k={};s.forEach(m=>{k[m]=0}),p.forEach(m=>{const w=m.rank_tier||"bronze";k[w]!==void 0&&k[w]++});const L=p.length?Math.round(p.reduce((m,w)=>m+(w.mmr||1e3),0)/p.length):0;function y(m){return m?new Date(m).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function I(m){const w=new Date;return m.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(m.end_at)<w?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${i?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${i.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${r.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Joueurs ranked</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${p.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Classés (10+ matchs)</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${L}</div>
            <div style="font-size:11px;color:var(--gray-600)">MMR moyen</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(i.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${p.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${s.map(m=>{const w=k[m],B=p.length>0?Math.round(w/p.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${c[m]} ${f[m]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${B}%;background:${x[m]};border-radius:4px;transition:width 0.5s"></div>
                </div>
                <span style="width:40px;text-align:right;color:var(--gray-600)">${w} (${B}%)</span>
              </div>`}).join("")}
        </div>`:`<div style="font-size:12px;color:var(--gray-600)">Aucun joueur classé pour l'instant.</div>`}
      </div>`:`
      <div class="card-panel" style="background:rgba(230,120,34,0.08);border:1.5px solid #e67e22">
        <div style="font-weight:700;color:#e67e22">⚠️ Aucune saison active</div>
        <div style="font-size:13px;color:var(--gray-600);margin-top:4px">Le mode Ranked est désactivé jusqu'à l'activation d'une saison.</div>
      </div>`}

      <!-- Header + bouton créer -->
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
        <div style="font-weight:700;font-size:14px">Toutes les saisons (${l.length})</div>
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
              ${l.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':l.map(m=>{const w=Math.round((new Date(m.end_at)-new Date(m.start_at))/864e5),B=new Date(m.end_at)<new Date&&!m.is_active;return`
                    <tr>
                      <td><b>${m.name}</b></td>
                      <td style="font-size:12px">${y(m.start_at)}</td>
                      <td style="font-size:12px">${y(m.end_at)}</td>
                      <td style="font-size:12px">${w} jours</td>
                      <td>${I(m)}</td>
                      <td style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn btn-ghost btn-sm" data-edit="${m.id}">✏️ Modifier</button>
                        <button class="btn btn-ghost btn-sm" data-rewards-for="${m.id}" style="color:#D4A017;border-color:#D4A017">🏆 Récompenses</button>
                        ${m.is_active?"":`<button class="btn btn-yellow btn-sm" data-launch="${m.id}">▶ Lancer la saison</button>`}
                        ${m.is_active?`<button class="btn btn-ghost btn-sm" data-deactivate="${m.id}" style="color:#e67e22">⏹ Désactiver</button>`:`<button class="btn btn-primary btn-sm" data-activate="${m.id}">▶ Activer</button>`}
                        ${B?`<button class="btn btn-danger btn-sm" data-delete="${m.id}">🗑</button>`:""}
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
          <button id="add-reward-tier-btn" class="btn btn-primary btn-sm" ${l.length?"":`disabled title="Crée d'abord une saison"`}>+ Ajouter un palier</button>
        </div>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:12px">
          Paliers de classement (TOP 1, TOP 3, TOP 10...) associés à une saison Ranked. Chaque palier peut donner des crédits,
          des cartes joueur spécifiques et/ou des boosters, à partir d'une date d'activation optionnelle.
        </div>
        ${l.length?`
        <div class="table-wrap">
          <table>
            <thead>
              <tr><th>Saison</th><th>Palier</th><th>Classement</th><th style="text-align:right">Crédits</th><th style="text-align:center">Cartes</th><th style="text-align:center">Boosters</th><th>Activation</th><th>Statut</th><th>Actions</th></tr>
            </thead>
            <tbody>
              ${(h||[]).map(m=>{var S;const w=!m.activate_at||new Date(m.activate_at)<=new Date;return`<tr>
                  <td style="font-size:12px">${((S=l.find(C=>C.id===m.season_id))==null?void 0:S.name)||"—"}</td>
                  <td><b>${m.label}</b></td>
                  <td>${m.rank_min===m.rank_max?`#${m.rank_min}`:`#${m.rank_min}–${m.rank_max}`}</td>
                  <td style="text-align:right">${(m.credits||0).toLocaleString("fr")}</td>
                  <td style="text-align:center">${(m.player_ids||[]).length}</td>
                  <td style="text-align:center">${(m.booster_config_ids||[]).length}</td>
                  <td style="font-size:12px">${m.activate_at?y(m.activate_at):"Immédiat"}</td>
                  <td>
                    ${m.distributed_at?`<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Distribué le ${y(m.distributed_at)}</span>`:w?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">● Prêt</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">⏳ Programmé</span>'}
                  </td>
                  <td style="white-space:nowrap">
                    <button class="btn btn-ghost btn-sm" data-edit-tier="${m.id}">✏️</button>
                    <button class="btn btn-primary btn-sm" data-distribute-tier="${m.id}" ${w?"":"disabled"}>🎁 Distribuer</button>
                    <button class="btn btn-danger btn-sm" data-delete-tier="${m.id}">🗑️</button>
                  </td>
                </tr>`}).join("")||'<tr><td colspan="9" style="text-align:center;color:var(--tile-fg-dim);padding:16px">Aucun palier configuré.</td></tr>'}
            </tbody>
          </table>
        </div>`:'<div style="color:var(--tile-fg-dim);font-size:13px;padding:10px">Crée une saison pour configurer ses récompenses.</div>'}
      </div>
    </div>`,(E=document.getElementById("create-season-btn"))==null||E.addEventListener("click",()=>{We(null,{toast:n,openModal:a,closeModal:u,reload:()=>P(e,t)})}),(b=document.getElementById("start-new-season-btn"))==null||b.addEventListener("click",()=>{Hn(i,{toast:n,openModal:a,closeModal:u,reload:()=>P(e,t)})}),e.querySelectorAll("[data-edit]").forEach(m=>{const w=l.find(B=>B.id==m.dataset.edit);m.addEventListener("click",()=>{We(w,{toast:n,openModal:a,closeModal:u,reload:()=>P(e,t)})})}),e.querySelectorAll("[data-activate]").forEach(m=>{m.addEventListener("click",async()=>{const w=parseInt(m.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:B}=await _.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(B){n(B.message,"error");return}const{error:S}=await _.from("ranked_seasons").update({is_active:!0}).eq("id",w);if(S){n(S.message,"error");return}await _.from("users").update({current_season_id:w}).gt("placement_matches",0),n("Saison activée ✅","success"),P(e,t)})}),e.querySelectorAll("[data-rewards-for]").forEach(m=>{m.addEventListener("click",()=>{var S;const w=parseInt(m.dataset.rewardsFor);(S=document.getElementById("rewards-section"))==null||S.scrollIntoView({behavior:"smooth",block:"start"});const B=l.find(C=>C.id===w);ye(null,l,B,o||[],{toast:n,openModal:a,closeModal:u,reload:()=>P(e,t)})})}),e.querySelectorAll("[data-launch]").forEach(m=>{m.addEventListener("click",async()=>{const w=parseInt(m.dataset.launch),B=l.find(D=>D.id===w);if(!confirm(`Lancer "${B==null?void 0:B.name}" ?

Ceci va :
• Journaliser le classement actuel dans l'historique
• Recalculer le MMR de TOUS les joueurs (reset doux)
• Activer cette saison

Action irréversible. Continuer ?`))return;m.disabled=!0,m.textContent="⏳ Lancement...";const{data:S,error:C}=await _.rpc("admin_launch_season",{p_season_id:w});if(m.disabled=!1,m.textContent="▶ Lancer la saison",C){n(C.message,"error");return}if(!(S!=null&&S.success)){n((S==null?void 0:S.error)||"Échec du lancement","error");return}n(`Saison lancée ✅ (${S.logged} classement(s) archivé(s), ${S.reset} joueur(s) recalculé(s))`,"success"),P(e,t)})}),e.querySelectorAll("[data-deactivate]").forEach(m=>{m.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:w}=await _.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(m.dataset.deactivate));if(w){n(w.message,"error");return}n("Saison désactivée","success"),P(e,t)})}),e.querySelectorAll("[data-delete]").forEach(m=>{m.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:w}=await _.from("ranked_seasons").delete().eq("id",parseInt(m.dataset.delete));if(w){n(w.message,"error");return}n("Saison supprimée","success"),P(e,t)})}),($=document.getElementById("add-reward-tier-btn"))==null||$.addEventListener("click",()=>{ye(null,l,i,o||[],{toast:n,openModal:a,closeModal:u,reload:()=>P(e,t)})}),e.querySelectorAll("[data-edit-tier]").forEach(m=>{const w=(h||[]).find(B=>B.id===m.dataset.editTier);m.addEventListener("click",()=>{ye(w,l,i,o||[],{toast:n,openModal:a,closeModal:u,reload:()=>P(e,t)})})}),e.querySelectorAll("[data-distribute-tier]").forEach(m=>{m.addEventListener("click",async()=>{const w=(h||[]).find(C=>C.id===m.dataset.distributeTier);if(!confirm(`Distribuer les récompenses du palier "${w==null?void 0:w.label}" à tous les joueurs concernés ?`))return;m.disabled=!0,m.textContent="⏳...";const{data:B,error:S}=await _.rpc("admin_distribute_season_reward",{p_tier_id:m.dataset.distributeTier});if(S){n(S.message,"error"),m.disabled=!1,m.textContent="🎁 Distribuer";return}if(!(B!=null&&B.success)){n((B==null?void 0:B.error)||"Échec de la distribution","error"),m.disabled=!1,m.textContent="🎁 Distribuer";return}n(`Récompenses distribuées à ${B.rewarded} joueur(s) ✅`,"success"),P(e,t)})}),e.querySelectorAll("[data-delete-tier]").forEach(m=>{m.addEventListener("click",async()=>{if(!confirm("Supprimer ce palier de récompense ?"))return;const{error:w}=await _.from("season_reward_tiers").delete().eq("id",m.dataset.deleteTier);if(w){n(w.message,"error");return}n("Palier supprimé","success"),P(e,t)})})}function ye(e,t,n,a,{toast:u,openModal:d,closeModal:g,reload:v}){var f,x,c,k,L;const h=!!e,o=(e==null?void 0:e.season_id)??(n==null?void 0:n.id)??((f=t[0])==null?void 0:f.id)??null;let l=[];const i=y=>{if(!y)return"";const I=new Date(y);return new Date(I.getTime()-I.getTimezoneOffset()*6e4).toISOString().slice(0,16)},r=`
    <div style="display:flex;flex-direction:column;gap:12px">
      <div>
        <label>SAISON RANKED</label>
        <select id="rt-season">
          ${t.map(y=>`<option value="${y.id}" ${y.id===o?"selected":""}>${y.name}${y.is_active?" (active)":""}</option>`).join("")}
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
        <input id="rt-activate-at" type="datetime-local" value="${i(e==null?void 0:e.activate_at)}">
      </div>
      <div>
        <label>BOOSTERS OFFERTS</label>
        <div style="display:flex;flex-direction:column;gap:6px;max-height:140px;overflow-y:auto;background:#f7f7f7;border-radius:8px;padding:8px">
          ${a.length?a.map(y=>`
            <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;color:#333">
              <input type="checkbox" class="rt-booster-cb" value="${y.id}" ${((e==null?void 0:e.booster_config_ids)||[]).includes(y.id)?"checked":""}>
              ${y.name}
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
  `;d(h?`Modifier : ${e.label}`:"Nouveau palier de récompense",r,`
    <button id="rt-cancel" class="btn btn-ghost">Annuler</button>
    <button id="rt-save" class="btn btn-primary">💾 Enregistrer</button>
  `);function s(){const y=document.getElementById("rt-player-chips");y&&(y.innerHTML=l.map(I=>`
      <span style="display:inline-flex;align-items:center;gap:6px;background:#1A6B3C;color:#fff;font-size:12px;font-weight:700;padding:4px 8px;border-radius:14px">
        ${I.label}
        <button data-remove-player="${I.id}" style="background:none;border:none;color:#fff;cursor:pointer;font-size:12px;padding:0">✕</button>
      </span>`).join(""),y.querySelectorAll("[data-remove-player]").forEach(I=>{I.addEventListener("click",()=>{l=l.filter(E=>E.id!==I.dataset.removePlayer),s()})}))}(x=e==null?void 0:e.player_ids)!=null&&x.length&&_.from("players").select("id,firstname,surname_real").in("id",e.player_ids).then(({data:y})=>{l=(y||[]).map(I=>({id:I.id,label:`${I.firstname} ${I.surname_real}`})),s()}),(c=document.getElementById("rt-player-search-btn"))==null||c.addEventListener("click",async()=>{const y=document.getElementById("rt-player-search").value.trim();if(y.length<2)return;const{data:I}=await _.from("players").select("id,firstname,surname_real,rarity").or(`firstname.ilike.%${y}%,surname_real.ilike.%${y}%`).limit(10),E=document.getElementById("rt-player-results");if(!(I!=null&&I.length)){E.style.display="flex",E.innerHTML='<div style="color:#999;font-size:12px;padding:4px">Aucun résultat.</div>';return}E.style.display="flex",E.innerHTML=I.map(b=>`
      <div data-add-player="${b.id}" data-label="${b.firstname} ${b.surname_real}" style="cursor:pointer;padding:6px 8px;border-radius:6px;font-size:13px;color:#333" onmouseover="this.style.background='#eee'" onmouseout="this.style.background=''">
        ${b.firstname} ${b.surname_real} <span style="color:#999;font-size:11px">(${b.rarity})</span>
      </div>`).join(""),E.querySelectorAll("[data-add-player]").forEach(b=>{b.addEventListener("click",()=>{const $=b.dataset.addPlayer;l.some(m=>m.id===$)||l.push({id:$,label:b.dataset.label}),s(),E.style.display="none",document.getElementById("rt-player-search").value=""})})}),(k=document.getElementById("rt-cancel"))==null||k.addEventListener("click",()=>g()),(L=document.getElementById("rt-save"))==null||L.addEventListener("click",async()=>{const y=document.getElementById("rt-error"),I=parseInt(document.getElementById("rt-season").value),E=document.getElementById("rt-label").value.trim(),b=parseInt(document.getElementById("rt-rank-min").value)||1,$=parseInt(document.getElementById("rt-rank-max").value)||1,m=parseInt(document.getElementById("rt-credits").value)||0,w=document.getElementById("rt-activate-at").value,B=w?new Date(w).toISOString():null,S=[...document.querySelectorAll(".rt-booster-cb:checked")].map(j=>j.value);if(!E){y.textContent="Le libellé est obligatoire.";return}if(b>$){y.textContent="Le classement min doit être ≤ au max.";return}if(!I){y.textContent="Choisis une saison.";return}const C={season_id:I,label:E,rank_min:b,rank_max:$,credits:m,booster_config_ids:S,player_ids:l.map(j=>j.id),activate_at:B},{error:D}=h?await _.from("season_reward_tiers").update(C).eq("id",e.id):await _.from("season_reward_tiers").insert(C);if(D){y.textContent=D.message;return}u(h?"Palier modifié ✅":"Palier créé ✅","success"),g(),v()})}function Hn(e,{toast:t,openModal:n,closeModal:a,reload:u}){var l,i;const d=new Date,g=new Date(d.getTime()+30*864e5),v=r=>r.toISOString().slice(0,10),h=`
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
          <input id="sns-start" type="date" value="${v(d)}">
        </div>
        <div>
          <label>DATE DE FIN</label>
          <input id="sns-end" type="date" value="${v(g)}">
        </div>
      </div>
      <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;color:#333">
        <input type="checkbox" id="sns-confirm">
        Je comprends que cette action va recalculer le MMR de tous les joueurs et ne peut pas être annulée.
      </label>
      <div id="sns-error" style="font-size:12px;color:#ff6b6b;min-height:14px"></div>
    </div>
  `;n("Démarrer une nouvelle saison",h,`
    <button id="sns-cancel" class="btn btn-ghost">Annuler</button>
    <button id="sns-launch" class="btn btn-primary">🚀 Démarrer la saison</button>
  `),(l=document.getElementById("sns-cancel"))==null||l.addEventListener("click",()=>a()),(i=document.getElementById("sns-launch"))==null||i.addEventListener("click",async()=>{const r=document.getElementById("sns-error"),p=document.getElementById("sns-name").value.trim(),s=document.getElementById("sns-start").value,f=document.getElementById("sns-end").value,x=document.getElementById("sns-confirm").checked;if(!p){r.textContent="Le nom de la saison est requis.";return}if(!s||!f){r.textContent="Les deux dates sont requises.";return}if(new Date(s)>=new Date(f)){r.textContent="La date de fin doit être après la date de début.";return}if(!x){r.textContent="Coche la case de confirmation pour continuer.";return}const c=document.getElementById("sns-launch");c.disabled=!0,c.textContent="⏳ Recalcul en cours...";const{data:k,error:L}=await _.rpc("admin_start_new_season",{p_name:p,p_start_at:new Date(s).toISOString(),p_end_at:new Date(f).toISOString()});if(c.disabled=!1,c.textContent="🚀 Démarrer la saison",L){r.textContent=L.message;return}if(!(k!=null&&k.success)){r.textContent=(k==null?void 0:k.error)||"Échec de l'opération.";return}t(`Nouvelle saison démarrée ✅ (${k.users_reset} joueur(s) recalculé(s))`,"success"),a(),u()})}function We(e,{toast:t,openModal:n,closeModal:a,reload:u}){const d=!!e,g=new Date().toISOString().slice(0,16),v=new Date(Date.now()+90*864e5).toISOString().slice(0,16),h=e?new Date(e.start_at).toISOString().slice(0,16):g,o=e?new Date(e.end_at).toISOString().slice(0,16):v,l=(e==null?void 0:e.name)||"";n(d?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group">
        <label>Nom de la saison *</label>
        <input id="season-name" type="text" value="${l}" placeholder="ex: Saison 2 — Été 2026" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de début *</label>
        <input id="season-start" type="datetime-local" value="${h}" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de fin *</label>
        <input id="season-end" type="datetime-local" value="${o}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${d?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function i(){var x,c;const r=(x=document.getElementById("season-start"))==null?void 0:x.value,p=(c=document.getElementById("season-end"))==null?void 0:c.value,s=document.getElementById("season-duration");if(!r||!p||!s)return;const f=Math.round((new Date(p)-new Date(r))/864e5);s.textContent=f>0?`Durée : ${f} jour${f>1?"s":""}`:"⚠️ La fin doit être après le début",s.style.color=f>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var r,p,s;(r=document.getElementById("season-start"))==null||r.addEventListener("input",i),(p=document.getElementById("season-end"))==null||p.addEventListener("input",i),i(),(s=document.getElementById("season-save-btn"))==null||s.addEventListener("click",async()=>{var E,b,$;const f=(E=document.getElementById("season-name"))==null?void 0:E.value.trim(),x=(b=document.getElementById("season-start"))==null?void 0:b.value,c=($=document.getElementById("season-end"))==null?void 0:$.value,k=document.getElementById("season-error");if(!f){k.textContent="Le nom est requis.";return}if(!x){k.textContent="La date de début est requise.";return}if(!c){k.textContent="La date de fin est requise.";return}if(new Date(c)<=new Date(x)){k.textContent="La date de fin doit être après le début.";return}const L=document.getElementById("season-save-btn");L.disabled=!0,L.textContent="Enregistrement…";const y={name:f,start_at:new Date(x).toISOString(),end_at:new Date(c).toISOString()};let I;if(d?{error:I}=await _.from("ranked_seasons").update(y).eq("id",e.id):{error:I}=await _.from("ranked_seasons").insert({...y,is_active:!1}),I){k.textContent=I.message,L.disabled=!1,L.textContent=d?"💾 Enregistrer":"✅ Créer la saison";return}t(d?"Saison modifiée ✅":"Saison créée ✅","success"),a(),u()})},50)}async function Ee(e,t){var h;const{toast:n}=t,{data:a,error:u}=await _.from("solo_levels").select("*").order("level_number");if(u){e.innerHTML=`<p style="color:var(--danger)">${u.message}</p>`;return}const d=o=>`
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
            ${(a||[]).map(d).join("")||'<tr><td colspan="8" style="text-align:center;color:#aaa;padding:20px">Aucun niveau défini.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;function g(){document.querySelectorAll("#solo-tbody [data-field]").forEach(o=>{o.addEventListener("change",()=>v(o))})}async function v(o){const l=o.dataset.id,i=o.dataset.field,r=i==="is_active"?o.checked:Number(o.value)||0,{error:p}=await _.from("solo_levels").update({[i]:r}).eq("id",l);if(p){n(p.message,"error");return}o.style.transition="background .3s",o.style.background="#e8f8ee",setTimeout(()=>{o.style.background=""},500)}g(),document.querySelectorAll("[data-del-row]").forEach(o=>{o.addEventListener("click",async()=>{confirm("Supprimer ce niveau ? Les joueurs ayant progressé au-delà seront affectés.")&&(await _.from("solo_levels").delete().eq("id",o.dataset.delRow),n("Niveau supprimé","success"),Ee(e,t))})}),(h=document.getElementById("solo-add-row"))==null||h.addEventListener("click",async()=>{const l={level_number:Math.max(0,...(a||[]).map(p=>p.level_number))+1,target_note_avg:10,nb_liens_jaune:2,nb_liens_vert:1,nb_joueurs_stade:2,reward_credits:500,is_active:!0},{data:i,error:r}=await _.from("solo_levels").insert(l).select().single();if(r){n(r.message,"error");return}n("Niveau ajouté — modifie les valeurs directement","success"),Ee(e,t)})}Nt(Xe);function Gn(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function Kn(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function _e(){document.getElementById("modal-overlay").classList.add("hidden")}const Ze={dashboard:{title:"Dashboard",fn:tt},players:{title:"Joueurs & Cartes",fn:Ut},clubs:{title:"Clubs",fn:en},"card-builder":{title:"Card Builder",fn:pn},users:{title:"Managers",fn:xe},market:{title:"Mercato",fn:ft},"import-export":{title:"Import / Export CSV",fn:hn},formations:{title:"Formations & Liens",fn:_n},"boosters-config":{title:"Boosters",fn:kn},"sell-price":{title:"Prix vente directe",fn:Ln},journal:{title:"Actualités",fn:Sn},tutorial:{title:"Tutoriel",fn:zn},stadiums:{title:"Stades",fn:Nn},"gc-cards":{title:"Game Changers",fn:On},"ranked-seasons":{title:"Saisons Ranked",fn:qn},"solo-mode":{title:"Solo Mode",fn:Ee}};async function ue(e){document.querySelectorAll(".admin-sidebar nav a").forEach(u=>{u.classList.toggle("active",u.dataset.page===e)});const t=document.getElementById("mobile-page-select");t&&(t.value=e);const n=Ze[e]||Ze.dashboard;document.getElementById("page-title").textContent=n.title;const a=document.getElementById("page-content");a.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(a,{toast:Gn,openModal:Kn,closeModal:_e,navigate:ue})}catch(u){a.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${u.message}</div>`,console.error(u)}}async function Vn(){var t;const{data:{session:e}}=await _.auth.getSession();e&&await Qe(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),a=document.getElementById("auth-password").value,u=document.getElementById("auth-error");if(u.textContent="",!n||!a){u.textContent="Remplissez tous les champs.";return}const{data:d,error:g}=await _.auth.signInWithPassword({email:n,password:a});if(g){u.textContent=g.message;return}await Qe(d.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await _.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",_e),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&_e()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",a=>{a.preventDefault(),ue(n.dataset.page)})}),(t=document.getElementById("mobile-page-select"))==null||t.addEventListener("change",n=>{ue(n.target.value)})}async function Qe(e){const{data:t,error:n}=await _.from("users").select("*").eq("id",e.id).single(),a=document.getElementById("auth-error");if(n||!t){a.textContent="Profil introuvable.";return}if(!t.is_admin){a.textContent="Accès refusé. Vous n'êtes pas administrateur.",await _.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,ue("dashboard")}Vn();
