import{s as _,i as Et,r as _e,a as we,A as _t,l as wt,g as It,K as ze,D as R,b as $t,S as kt,c as D,H as Lt,R as At,e as pe,d as Qe,f as Bt,h as St,E as Ct,j as Tt,N as Mt,M as zt,B as Rt,k as Dt,F as ge,m as Re,n as jt,o as Xe,p as be,q as Nt}from"./special-cards-DNsLLa5x.js";async function et(e){var o;const[{count:t},{count:n},{count:i},{count:d},{count:s},{data:g},{data:x}]=await Promise.all([_.from("players").select("*",{count:"exact",head:!0}),_.from("clubs").select("*",{count:"exact",head:!0}),_.from("users").select("*",{count:"exact",head:!0}),_.from("stadium_definitions").select("*",{count:"exact",head:!0}),_.from("users").select("*",{count:"exact",head:!0}).gt("last_seen_at",new Date(Date.now()-18e4).toISOString()),_.rpc("get_signup_password"),_.from("app_feature_flags").select("*").order("key")]),E=g||"";e.innerHTML=`
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
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${d??"–"}</div>
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
        <input id="signup-pwd-input" type="text" value="${E.replace(/"/g,"&quot;")}" style="flex:1">
        <button id="signup-pwd-save" class="btn btn-primary">💾 Enregistrer</button>
      </div>
      <div id="signup-pwd-status" style="font-size:12px;margin-top:8px;min-height:16px"></div>
    </div>
    <div class="card-panel" style="margin-top:20px">
      <h3 style="font-size:14px;margin-bottom:4px;font-weight:600;color:var(--tile-fg-on-page)">🧪 Modes activables</h3>
      <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:14px">Active/désactive des fonctionnalités entières de l'app. Quand désactivé, un popup "Module en cours de développement" s'affiche à la place.</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${(x||[]).map(l=>`
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
  `,window.adminNav=l=>{var a;(a=document.querySelector(`[data-page="${l}"]`))==null||a.click()},e.querySelectorAll(".feature-flag-toggle").forEach(l=>{l.addEventListener("click",async()=>{const a=l.dataset.key,r=l.dataset.enabled!=="true";l.disabled=!0;const{error:u}=await _.from("app_feature_flags").update({enabled:r,updated_at:new Date().toISOString()}).eq("key",a);if(l.disabled=!1,u){alert(u.message);return}Et(),et(e)})}),(o=document.getElementById("signup-pwd-save"))==null||o.addEventListener("click",async()=>{const l=document.getElementById("signup-pwd-input").value.trim(),a=document.getElementById("signup-pwd-status");if(!l){a.textContent="Le code ne peut pas être vide.",a.style.color="#ff6b6b";return}const r=document.getElementById("signup-pwd-save");r.disabled=!0,r.textContent="⏳...";const{error:u}=await _.rpc("set_signup_password",{new_password:l});if(r.disabled=!1,r.textContent="💾 Enregistrer",u){a.textContent=u.message,a.style.color="#ff6b6b";return}a.textContent="✅ Code mis à jour.",a.style.color="#2ecc71"})}const tt={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},Pt={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Ft(){const e={};for(const t of _t)e[t]=await wt(t);return e}async function Ot(e,t){const{toast:n}=t;if(!confirm(`Réattribuer une nouvelle photo à tous les joueurs ayant encore l'ancien format de chemin (public/faces/...) ?

Cette action est irréversible.`))return;const i=document.getElementById("fix-old-faces-btn");i&&(i.disabled=!0,i.textContent="⏳ En cours...");try{const{data:d,error:s}=await _.from("players").select("id, country_code, face").like("face","public/faces/%");if(s){n(s.message,"error");return}if(!(d!=null&&d.length)){n("Aucun joueur avec l'ancien format — rien à faire ✅","success");return}const{data:g}=await _.from("players").select("face").not("face","is",null),x=new Set((g||[]).map(l=>l.face).filter(l=>l&&!l.startsWith("public/faces/")));let E=0,o=0;for(const l of d){const a=await we(l.country_code,x);if(!a){o++;continue}const{error:r}=await _.from("players").update({face:a}).eq("id",l.id);if(r){o++;continue}x.add(a),E++}n(`${E} photo(s) réattribuée(s)${o?`, ${o} échec(s)`:""} ✅`,o?"error":"success")}finally{i&&(i.disabled=!1,i.textContent="🖼️ Réattribuer anciennes photos")}}async function Ut(e,t){await se(e,t)}async function se(e,t,n=null){var o,l,a,r,u;const{toast:i}=t;n||(n={search:((o=document.getElementById("search-players"))==null?void 0:o.value)||"",job:((l=document.getElementById("filter-job"))==null?void 0:l.value)||"",rarity:((a=document.getElementById("filter-rarity"))==null?void 0:a.value)||"",club:((r=document.getElementById("filter-club"))==null?void 0:r.value)||"",country:((u=document.getElementById("filter-country"))==null?void 0:u.value)||""});const[{data:d,error:s},{data:g}]=await Promise.all([_.from("players").select("*, clubs(id,encoded_name,logo_url)"),_.from("clubs").select("id,encoded_name").order("encoded_name")]);if(s){e.innerHTML=`<p style="color:red">${s.message}</p>`;return}const x={GK:0,DEF:1,MIL:2,ATT:3},E=(d||[]).sort((c,f)=>{const p=(x[c.job]??4)-(x[f.job]??4);return p!==0?p:(c.surname_real||"").localeCompare(f.surname_real||"")});Ht(e,E,g||[],t,n)}function Ht(e,t,n,i,d=null){var l,a;const{toast:s}=i;if(e.innerHTML=`
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
          ${Object.entries(tt).map(([r,u])=>`<option value="${r}">${u}</option>`).join("")}
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
    </div>`,d){const r=d,u=c=>document.getElementById(c);r.search&&u("search-players")&&(u("search-players").value=r.search),r.job&&u("filter-job")&&(u("filter-job").value=r.job),r.rarity&&u("filter-rarity")&&(u("filter-rarity").value=r.rarity),r.club&&u("filter-club")&&(u("filter-club").value=r.club),r.country&&u("filter-country")&&(u("filter-country").value=r.country)}if(d){const r=d,u=c=>document.getElementById(c);r.search&&u("search-players")&&(u("search-players").value=r.search),r.job&&u("filter-job")&&(u("filter-job").value=r.job),r.rarity&&u("filter-rarity")&&(u("filter-rarity").value=r.rarity),r.club&&u("filter-club")&&(u("filter-club").value=r.club),r.country&&u("filter-country")&&(u("filter-country").value=r.country)}function g(){const r=document.getElementById("search-players").value.toLowerCase(),u=document.getElementById("filter-job").value,c=document.getElementById("filter-rarity").value,f=document.getElementById("filter-club").value,p=document.getElementById("filter-country").value;return t.filter(b=>(!r||`${b.firstname} ${b.surname_real}`.toLowerCase().includes(r))&&(!u||b.job===u)&&(!c||b.rarity===c)&&(!f||b.club_id===f)&&(!p||b.country_code===p))}const x=new Set;function E(){const r=document.getElementById("bulk-bar"),u=document.getElementById("bulk-count");r&&(r.style.display=x.size>0?"flex":"none",u&&(u.textContent=`${x.size} joueur(s) sélectionné(s)`))}function o(){const r=g();document.getElementById("count-label").textContent=`${r.length} joueur(s)`;const u=document.getElementById("players-list");if(!r.length){u.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}u.innerHTML=r.map(c=>{const f={...c,clubs:c.clubs,face:c.face||null},p=_e(f,{width:120});return`<div style="position:relative;cursor:pointer" data-edit="${c.id}">
        ${p}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${c.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),u.querySelectorAll("[data-edit]").forEach(c=>{c.addEventListener("click",()=>{const f=t.find(p=>p.id===c.dataset.edit);f&&De(f,n,e,i)})}),u.querySelectorAll(".btn-del-player").forEach(c=>{c.addEventListener("click",async f=>{if(f.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:p}=await _.from("players").delete().eq("id",c.dataset.del);p?s(p.message,"error"):(s("Joueur supprimé ✅","success"),se(e,i))})})}o(),document.getElementById("search-players").addEventListener("input",o),document.getElementById("filter-job").addEventListener("change",o),document.getElementById("filter-rarity").addEventListener("change",o),document.getElementById("filter-club").addEventListener("change",o),document.getElementById("filter-country").addEventListener("change",o),(l=document.getElementById("bulk-cancel-btn"))==null||l.addEventListener("click",()=>{x.clear(),E(),o()}),(a=document.getElementById("bulk-delete-btn"))==null||a.addEventListener("click",async()=>{var f,p,b,L,k;if(!x.size||!confirm(`Supprimer ${x.size} joueur(s) ?`))return;const r=[...x],{error:u}=await _.from("players").delete().in("id",r);if(u){s(u.message,"error");return}s(`${r.length} joueur(s) supprimé(s) ✅`,"success"),x.clear();const c={search:((f=document.getElementById("search-players"))==null?void 0:f.value)||"",job:((p=document.getElementById("filter-job"))==null?void 0:p.value)||"",rarity:((b=document.getElementById("filter-rarity"))==null?void 0:b.value)||"",club:((L=document.getElementById("filter-club"))==null?void 0:L.value)||"",country:((k=document.getElementById("filter-country"))==null?void 0:k.value)||""};se(e,i,c)}),document.getElementById("add-player-btn").addEventListener("click",()=>De(null,n,e,i)),document.getElementById("fix-old-faces-btn").addEventListener("click",()=>Ot(e,i))}async function De(e,t,n,i){const{toast:d,openModal:s,closeModal:g}=i,x=!!e,E=await Ft(),{data:o}=await _.from("players").select("face").not("face","is",null),l=new Set((o||[]).map(c=>c.face).filter(Boolean));e!=null&&e.face&&l.delete(e.face);const a='<option value="">— Club —</option>'+t.map(c=>`<option value="${c.id}" ${(e==null?void 0:e.club_id)===c.id?"selected":""}>${c.encoded_name}</option>`).join(""),r=e!=null&&e.face?e.face.split("/")[0]:"",u=Object.keys(E).map(c=>`<option value="${c}" ${r===c?"selected":""}>${c}</option>`).join("");s(x?`✏️ ${e.firstname} ${e.surname_real}`:"➕ Nouveau joueur",`<div style="display:flex;gap:20px;align-items:flex-start">

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
              ${["GK","DEF","MIL","ATT"].map(c=>`<option value="${c}" ${(e==null?void 0:e.job)===c?"selected":""}>${c}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Poste 2</label>
            <select id="pm-job2">
              <option value="">Aucun</option>
              ${["GK","DEF","MIL","ATT"].map(c=>`<option value="${c}" ${(e==null?void 0:e.job2)===c?"selected":""}>${c}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Rareté</label>
            <select id="pm-rarity">
              ${["normal","pepite","papyte","legende"].map(c=>`<option value="${c}" ${(e==null?void 0:e.rarity)===c?"selected":""}>${tt[c]}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Pays</label>
            <select id="pm-country">
              ${["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"].map(c=>`<option value="${c}" ${((e==null?void 0:e.country_code)||"FR")===c?"selected":""}>${c}</option>`).join("")}
            </select>
          </div>
        </div>

        <!-- Club + Prix -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <div class="form-group">
            <label>Club</label>
            <select id="pm-club">${a}</select>
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
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([c,f,p])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${Pt[c]};font-weight:700">${c}</label>
                <input id="${f}" type="number" min="0" max="20" value="${(e==null?void 0:e[p])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
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
                ${u}
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
    </div>`),setTimeout(()=>{var k,y,I;let c=(e==null?void 0:e.face)||null;function f(){var Y,N,Z,Q,X,ee,te,Se,Ce,Te,Me;const h=document.getElementById("card-preview");if(!h)return;const v=((Y=document.getElementById("pm-fn"))==null?void 0:Y.value)||"",$=(((N=document.getElementById("pm-real"))==null?void 0:N.value)||"").toUpperCase(),m=((Z=document.getElementById("pm-job"))==null?void 0:Z.value)||"ATT",w=((Q=document.getElementById("pm-job2"))==null?void 0:Q.value)||null,A=((X=document.getElementById("pm-rarity"))==null?void 0:X.value)||"normal",B=((ee=document.getElementById("pm-country"))==null?void 0:ee.value)||"FR",S=((te=document.getElementById("pm-club"))==null?void 0:te.value)||null,C=document.getElementById("pm-club"),T=C==null?void 0:C.options[C.selectedIndex];(T==null?void 0:T.text)!=="— Club —"&&(T==null||T.text);const O=parseInt((Se=document.getElementById("pm-g"))==null?void 0:Se.value)||0,U=parseInt((Ce=document.getElementById("pm-d"))==null?void 0:Ce.value)||0,H=parseInt((Te=document.getElementById("pm-m"))==null?void 0:Te.value)||0,P=parseInt((Me=document.getElementById("pm-a"))==null?void 0:Me.value)||0,j=t.find(ht=>ht.id===S),ie={firstname:v||"Prénom",surname_real:$||"NOM",job:m,job2:w||null,rarity:A,country_code:B,club_id:S,note_g:O,note_d:U,note_m:H,note_a:P,face:c||null,clubs:j?{encoded_name:j.encoded_name,logo_url:j.logo_url}:null};h.innerHTML=_e(ie,{width:160});const M=document.getElementById("pm-minmax");M&&(M.style.display=["pepite","papyte"].includes(A)?"grid":"none")}function p(h){const v=document.getElementById("faces-grid"),$=document.getElementById("pm-face");if(!v||!$)return;const m=E[h]||[];if(console.log("[players] loadFacesGrid folder=",h,"files=",m.length,m.slice(0,5)),!m.length){$.innerHTML='<option value="">— Aucun visage disponible —</option>',v.innerHTML=`<p style="font-size:11px;color:#888;font-style:italic">Aucune image dans le dossier "${h}" du bucket Supabase.</p>`;return}const w=m.filter(A=>{const B=h+"/"+A;return B===c||!l.has(B)});$.innerHTML='<option value="">— Choisir un visage —</option>'+w.map(A=>{const B=h+"/"+A;return`<option value="${B}" ${c===B?"selected":""}>${A}</option>`}).join(""),v.innerHTML=w.map(A=>{const B=h+"/"+A,S=c===B,C=It({face:B});return`<div data-face="${B}" style="cursor:pointer;border:2px solid ${S?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${C}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),v.querySelectorAll("[data-face]").forEach(A=>{A.addEventListener("click",()=>{c=A.dataset.face;const B=document.getElementById("pm-face");B&&(B.value=c),v.querySelectorAll("[data-face]").forEach(S=>{S.style.border=`2px solid ${S.dataset.face===c?"#4fc3f7":"transparent"}`}),f()})})}const b=e!=null&&e.face?e.face.split("/")[0]:"";b&&E[b]&&(document.getElementById("pm-folder").value=b,p(b)),(k=document.getElementById("pm-folder"))==null||k.addEventListener("change",h=>{p(h.target.value)}),(y=document.getElementById("pm-face"))==null||y.addEventListener("change",h=>{c=h.target.value||null,f()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach(h=>{var v,$;(v=document.getElementById(h))==null||v.addEventListener("input",f),($=document.getElementById(h))==null||$.addEventListener("change",f)}),(I=document.getElementById("pm-save"))==null||I.addEventListener("click",()=>Gt(e,x,c,n,i)),f()},50)}function qt(e){const t=n=>{var i;return(i=document.getElementById(n))==null?void 0:i.value};return{firstname:(t("pm-fn")||"").trim(),surname_real:(t("pm-real")||"").trim()||"JOUEUR",country_code:t("pm-country")||"FR",club_id:t("pm-club")||null,job:t("pm-job")||"ATT",job2:t("pm-job2")||null,rarity:t("pm-rarity")||"normal",note_g:parseInt(t("pm-g"))||0,note_d:parseInt(t("pm-d"))||0,note_m:parseInt(t("pm-m"))||0,note_a:parseInt(t("pm-a"))||0,note_min:parseInt(t("pm-nmin"))||null,note_max:parseInt(t("pm-nmax"))||null,sell_price:parseInt(t("pm-price"))||0,face:e||null,ethnie:t("pm-folder")||null,is_active:!0}}async function Gt(e,t,n,i,d){var u,c,f,p,b;const{toast:s,closeModal:g}=d,x=document.getElementById("pm-error"),E=document.getElementById("pm-save"),o=qt(n);if(!o.firstname){x.textContent="Le prénom est requis.";return}if(!o.surname_real){x.textContent="Le nom est requis.";return}E.disabled=!0,E.textContent="Enregistrement…";const l=o,{error:a}=t?await _.from("players").update({...l,updated_at:new Date().toISOString()}).eq("id",e.id):await _.from("players").insert(l);if(a){x.textContent=a.message,E.disabled=!1,E.textContent=t?"💾 Enregistrer":"✅ Créer le joueur";return}s(t?"Joueur modifié ✅":"Joueur créé ✅","success"),g();const r={search:((u=document.getElementById("search-players"))==null?void 0:u.value)||"",job:((c=document.getElementById("filter-job"))==null?void 0:c.value)||"",rarity:((f=document.getElementById("filter-rarity"))==null?void 0:f.value)||"",club:((p=document.getElementById("filter-club"))==null?void 0:p.value)||"",country:((b=document.getElementById("filter-country"))==null?void 0:b.value)||""};se(i,d,r)}const Kt={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},nt=["rase","court","milong","long"];function Jt(e){const t=$e(e);if(t==="noir")return"noir";if(t==="typ")return Math.random()<.9?"noir":"marron";if(t==="metisse")return Math.random()<.6?"noir":"marron";const n=Math.random();return n<.35?"blond":n<.75?"marron":"noir"}function Vt(e){return Math.random()<.05?"chauve":Jt(e)}const Ie=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function $e(e){return Kt[e]||"blanc"}function it(e){return Vt(e)}function V(e,t){return Math.floor(Math.random()*(t-e+1))+e}function K(e){return e[Math.floor(Math.random()*e.length)]}function at(e){const t=Ie.filter(n=>n!==e);return K(t)}function ve(e){const t=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","GR","RO","BG","UA","RU"],n=["MA","DZ","TN","EG","LY"],i=["NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","TZ","UG","ET"],d=["JP","KR","CN","VN","TH","ID","PH","IN","PK","BD","SA","AE","IR"];return t.includes(e)||["AR","UY","CL","PE","EC","CO","MX","BR"].includes(e)?"Europeans":n.includes(e)?"North Africans":i.includes(e)?"Africans":d.includes(e)?"Asians":"Europeans"}const Yt=[{min:1,max:4,pct:55},{min:5,max:10,pct:20},{min:11,max:14,pct:10},{min:15,max:17,pct:10},{min:18,max:20,pct:5}];function ot(){const e=Math.random()*100;let t=0;for(const n of Yt)if(t+=n.pct,e<t)return V(n.min,n.max);return V(1,4)}function Wt(){const e=Array.from({length:20},(t,n)=>n);return e.sort(()=>Math.random()-.5),new Set(e.slice(0,10))}let oe=null;function Zt(e,t){return e&&(oe||(oe=Wt()),oe.has(t))?V(15,20):ot()}const de={FR:{first:["Lucas","Tom","Hugo","Théo","Antoine","Kylian","Rayan","Axel","Paul","Enzo","Léo","Mathis","Nathan","Alexis","Ethan","Maxime","Julien","Baptiste","Nicolas","Pierre","Clément","Adrien","Valentin","Dylan","Loïc","Quentin","Florian","Kevin","Corentin","Raphaël"],last:["Martin","Bernard","Petit","Dupont","Moreau","Laurent","Robert","Michel","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard","Bonnet","Rousseau","Fontaine","Chevalier","Blanc","Garnier","Boyer","Gauthier","Garcia","Perrin","Robin","Clément","Morin","Nicolas","Henry","Lemaire","Noël","Dufour","Meunier","Brun","Blanchard","Giraud","Joly","Rivière","Brunet"]},ES:{first:["Carlos","Miguel","Javier","Alejandro","Sergio","David","Diego","Pablo","Álvaro","Marcos","Adrián","Rubén","Iker","Raúl","Fernando","Roberto","Víctor","Iván","Gonzalo","Antonio","Manuel","Jesús","Josué","Rodrigo","Cristian","Héctor","Óscar","Mario","Daniel","Jorge"],last:["García","Rodríguez","Martínez","López","Sánchez","González","Pérez","Hernández","Jiménez","Díaz","Torres","Ramírez","Flores","Rivera","Gómez","Morales","Álvarez","Romero","Herrera","Medina","Aguilar","Vargas","Guzmán","Muñoz","Salazar","Soto","Contreras","Rojas","Ramos","Ortiz"]},PT:{first:["João","Pedro","Diogo","Rúben","Bruno","Tiago","André","Ricardo","Luís","Gonçalo","Nuno","Mário","Fábio","Rui","Miguel","Sérgio","Hugo","Filipe","Paulo","Vítor"],last:["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Carvalho","Gomes","Ribeiro","Araújo","Barbosa","Cardoso","Correia","Teixeira","Machado","Vieira","Monteiro","Cunha","Pinto","Melo","Barros","Freitas","Fonseca","Andrade","Castro","Neves","Figueiredo","Duarte"]},BR:{first:["Gabriel","Lucas","Mateus","Gustavo","Felipe","Rodrigo","Thiago","Rafael","Bruno","Diego","Leonardo","Eduardo","Victor","Pedro","Carlos","Alexandre","André","Paulo","Danilo","Marcelo"],last:["Silva","Santos","Oliveira","Souza","Lima","Ferreira","Costa","Nascimento","Alves","Pereira","Rodrigues","Almeida","Nunes","Melo","Barbosa","Rocha","Brito","Castro","Carvalho","Gomes","Lopes","Ramos","Mendes","Cavalcanti","Batista","Azevedo","Campos","Freitas","Reis","Andrade"]},AR:{first:["Lionel","Sergio","Rodrigo","Nicolás","Ezequiel","Gonzalo","Federico","Mauro","Pablo","Diego","Lucas","Matías","Alejandro","Maximiliano","Emiliano","Marcos","Lautaro","Ángel","Leandro","Julián"],last:["González","Rodríguez","Martínez","García","López","Pérez","Sánchez","Romero","Torres","Flores","Díaz","Gómez","Alvarez","Ruiz","Castro","Herrera","Cabrera","Medina","Ferreyra","Suárez"]},IT:{first:["Marco","Luca","Alessandro","Matteo","Davide","Andrea","Francesco","Federico","Lorenzo","Riccardo","Stefano","Simone","Roberto","Nicola","Giovanni","Antonio","Emanuele","Daniele","Alberto","Giorgio"],last:["Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Ricci","Marino","Greco","Bruno","Gallo","Conti","De Luca","Mancini","Giordano","Rizzo","Lombardi","Moretti","Fontana","Rinaldi"]},DE:{first:["Lukas","Max","Jonas","Florian","Tobias","Stefan","Markus","Sebastian","Niklas","Leon","Tim","Felix","Alexander","Philipp","Christian","Thomas","Michael","Jan","Moritz","Fabian"],last:["Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Wolf","Schröder","Neumann","Schwarz","Zimmermann","Braun","Krüger","Hofmann","Wagner","Becker","Koch","Lehmann","Kaiser"]},GB:{first:["James","Harry","Oliver","Jack","George","Charlie","William","Thomas","Alfie","Edward","Ryan","Liam","Noah","Ethan","Kyle","Jordan","Callum","Aaron","Declan","Connor"],last:["Smith","Jones","Williams","Brown","Taylor","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Walker","Wright","Robinson","White","Thompson","Hughes","Edwards","Green","Hall"]},MA:{first:["Yassine","Karim","Mehdi","Amine","Hamza","Bilal","Soufiane","Rachid","Omar","Mohammed","Zakaria","Ilyas","Ayoub","Saad","Khalid","Adil","Tarik","Hicham","Reda","Nabil"],last:["Benali","Amrani","Bouazza","Cherif","Haddad","Meziane","Belkacem","Rahmani","Saidi","Zidane","Belhadj","Tazi","Idrissi","Alaoui","Bennani","Fassi","Lahlou","Naciri","Tahiri","Zniber"]},DZ:{first:["Yacine","Riyad","Sofiane","Haris","Adem","Islam","Bilal","Omar","Nassim","Mehdi","Ryad","Zinedine","Youssef","Farid","Karim","Mourad","Walid","Anes","Ferhat","Djamel"],last:["Amrouche","Boudiaf","Cherki","Guessab","Hamdi","Jaber","Lakhal","Mahjoub","Rezki","Sahnoun","Talbi","Zerrouki","Achour","Bakri","Chaouch","Djaballah","Ferhat","Gacem","Khaldi","Larbi"]},SN:{first:["Sadio","Ismaïla","Cheikhou","Gana","Famara","Mbaye","Pape","Aliou","Moussa","Sidy","Idrissa","Lamine","Bamba","Fallou","Abdou","Diallo","Mamadou","Souleymane","Oumar","Cheikh"],last:["Diallo","Traoré","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Ndiaye","Sow","Cissé","Fofana","Keita","Sylla","Kane","Diarra","Sanogo","Baldé","Kouyaté"]},CI:{first:["Didier","Wilfried","Serge","Jonathan","Franck","Maxwel","Salomon","Gervinho","Nicolas","Maxime","Ismael","Romaric","Abdul","Cheick","Arouna","Kolo","Yaya","Geoffroy","Siaka","Adama"],last:["Drogba","Zaha","Gnagnon","Koné","Touré","Bamba","Diomandé","Konaté","Coulibaly","Fofana","Traoré","Doumbia","Sanogo","Diabaté","Kalou","Bakayoko","Gradel","Seri","Aurier","Haller"]},CM:{first:["Samuel","Alex","Karl","Fabrice","Cédric","Nicolas","Georges","André","Joël","Roger","François","Jean","Patrick","Thierry","Eric","Benjamin","Aristide","Clinton","Clinton","Stéphane"],last:["Eto'o","Song","Choupo-Moting","Aboubakar","Bassogog","Kunde","Toko","Nkoudou","Ngadeu","Oyongo","Fai","Zambo","Mokoena","Ekambi","Tchamba","Mbida","Biya","Kameni","Meyong","Webo"]},NG:{first:["Kelechi","Ahmed","Victor","John","Emmanuel","Samuel","Moses","Ola","Chukwuemeka","Odion","Sunday","Chidi","Nnamdi","Chisom","Tunde","Emeka","Obinna","Uchenna","Ifeanyi","Segun"],last:["Osimhen","Iheanacho","Musa","Onyekuru","Iwobi","Ndidi","Nwankwo","Obi","Mikel","Martins","Okocha","Yekini","Amunike","Babangida","Fash","Lawal","Onuoha","Taiwo","Ayodele","Ameobi"]},JP:{first:["Ryota","Kenji","Hiroshi","Takumi","Yuto","Daichi","Shinji","Makoto","Koji","Naoki","Yuya","Shoya","Ryo","Shu","Atsuto","Masato","Hotaru","Genki","Ko","Ritsu"],last:["Nakamura","Tanaka","Suzuki","Sato","Yamamoto","Watanabe","Ito","Yamada","Saito","Matsumoto","Inoue","Kimura","Hayashi","Shimizu","Yamazaki","Mori","Abe","Ikeda","Kato","Honda"]},KR:{first:["Heung","Son","Ji","Sung","Jae","Young","Kang","Hyun","Woo","Tae","Seung","Min","Jun","Dong","Chang","Sang","Yo","Hee","Jin","Bum"],last:["Kim","Park","Lee","Choi","Jung","Kang","Cho","Yoon","Lim","Oh","Han","Seo","Kwon","Hwang","Ahn","Yang","Shin","Yoo","Jang","Song"]},MX:{first:["Carlos","Hirving","Andrés","Javier","Miguel","Raúl","Héctor","Diego","Jorge","Luis","Rodolfo","Erick","Jonathan","Néstor","Tecatito","Chicharito","Oswaldo","Oribe","Uriel","Giovanni"],last:["Hernández","Lozano","Guardado","Vela","Morales","Jiménez","Reyes","Corona","Herrera","Rodríguez","Ochoa","Chicharito","Flores","Domínguez","Araujo","Álvarez","Pineda","Sánchez","Antuna","Meza"]},_DEFAULT_EUROPE:{first:["Stefan","Ivan","Luca","Marco","Andrei","Cristian","Bogdan","Mircea","Adrian","Florin","Dušan","Aleksandar","Nikola","Nemanja","Marko","Filip","Milan","Branislav","Radomir","Dejan"],last:["Popescu","Ionescu","Stan","Marin","Stoica","Popa","Radu","Constantin","Barbu","Dobre","Petrović","Marković","Nikolić","Jovanović","Popović","Stanković","Đorđević","Lukić","Simić","Ilić"]},_DEFAULT_AFRIQUE:{first:["Mamadou","Ibrahima","Moussa","Seydou","Boubacar","Oumar","Modibo","Adama","Bakary","Abdoulaye","Lamine","Ousmane","Sekou","Demba","Tidiane","Amadou","Issiaka","Siaka","Fode","Samba"],last:["Diallo","Traoré","Coulibaly","Koné","Doumbia","Kouyaté","Bah","Konaté","Touré","Camara","Sylla","Keita","Diakité","Sangaré","Sanou","Sidibé","Bathily","Niakaté","Dioumassi","Sissoko"]},_DEFAULT_ASIE:{first:["Wei","Ming","Jae","Van","Duc","Sorn","Ali","Hassan","Reza","Arman","Yusuf","Tariq","Faris","Khalid","Saad","Rashid","Nasser","Walid","Ziad","Adel"],last:["Zhang","Wang","Liu","Chen","Yang","Huang","Zhou","Wu","Xu","Sun","Al-Rashidi","Al-Dosari","Al-Harthi","Al-Balushi","Al-Farsi","Al-Shamsi","Al-Neyadi","Al-Breiki","Al-Hammadi","Al-Mansouri"]},_DEFAULT_AMERIQUE:{first:["James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Marcus","Jordan","Andre","Devonte","Malik","Tyrone","Jamal","Darius","DeShawn","Brandon","Cody"],last:["Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Taylor","Anderson","Jackson","White","Harris","Clark","Lewis","Walker","Hall","Allen","Young","King"]}},Qt={FR:"FR",BE:"FR",CH:"FR",MC:"FR",LU:"FR",ES:"ES",MX:"MX",CO:"ES",VE:"ES",PE:"ES",CL:"ES",EC:"ES",UY:"ES",PY:"ES",BO:"ES",CR:"ES",PA:"ES",HN:"ES",GT:"ES",SV:"ES",NI:"ES",DO:"ES",CU:"ES",PT:"PT",AO:"PT",MZ:"PT",CV:"PT",BR:"BR",AR:"AR",IT:"IT",SM:"IT",DE:"DE",AT:"DE",GB:"GB",IE:"GB",AU:"GB",NZ:"GB",CA:"GB",MA:"MA",TN:"DZ",LY:"DZ",DZ:"DZ",SN:"SN",ML:"SN",GN:"SN",GW:"SN",GM:"SN",MR:"SN",CI:"CI",BF:"CI",TG:"CI",BJ:"CI",GH:"CI",CM:"CM",GA:"CM",CG:"CM",CD:"CM",NG:"NG",JP:"JP",KR:"KR",MX:"MX",PL:"_DEFAULT_EUROPE",CZ:"_DEFAULT_EUROPE",SK:"_DEFAULT_EUROPE",HU:"_DEFAULT_EUROPE",HR:"_DEFAULT_EUROPE",RS:"_DEFAULT_EUROPE",SI:"_DEFAULT_EUROPE",RO:"_DEFAULT_EUROPE",BG:"_DEFAULT_EUROPE",GR:"_DEFAULT_EUROPE",TR:"_DEFAULT_EUROPE",RU:"_DEFAULT_EUROPE",UA:"_DEFAULT_EUROPE",NL:"_DEFAULT_EUROPE",DK:"_DEFAULT_EUROPE",SE:"_DEFAULT_EUROPE",NO:"_DEFAULT_EUROPE",FI:"_DEFAULT_EUROPE",AL:"_DEFAULT_EUROPE",EG:"_DEFAULT_AFRIQUE",ZA:"_DEFAULT_AFRIQUE",KE:"_DEFAULT_AFRIQUE",ET:"_DEFAULT_AFRIQUE",TZ:"_DEFAULT_AFRIQUE",UG:"_DEFAULT_AFRIQUE",CN:"_DEFAULT_ASIE",VN:"_DEFAULT_ASIE",TH:"_DEFAULT_ASIE",ID:"_DEFAULT_ASIE",PH:"_DEFAULT_ASIE",IN:"_DEFAULT_ASIE",PK:"_DEFAULT_ASIE",BD:"_DEFAULT_ASIE",IR:"_DEFAULT_ASIE",SA:"_DEFAULT_ASIE",AE:"_DEFAULT_ASIE",QA:"_DEFAULT_ASIE",KW:"_DEFAULT_ASIE",IQ:"_DEFAULT_ASIE",SY:"_DEFAULT_ASIE",JO:"_DEFAULT_ASIE",US:"_DEFAULT_AMERIQUE"};function rt(e){return Qt[e]||"_DEFAULT_EUROPE"}function lt(e){const t=rt(e),n=(de[t]||de._DEFAULT_EUROPE).first;return K(n)}function st(e){const t=rt(e);return(de[t]||de._DEFAULT_EUROPE).last}function Xt(e,t,n=new Set,i=!1){const d=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],s=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],g=new Set(s.sort(()=>Math.random()-.5).slice(0,4)),x=[...s].sort(()=>Math.random()-.5),E=new Set(x.slice(0,2)),o=new Set(x.slice(2,4)),l=10,a=d.map((c,f)=>f<l);for(let c=a.length-1;c>0;c--){const f=Math.floor(Math.random()*(c+1));[a[c],a[f]]=[a[f],a[c]]}const r=new Set;function u(c){const f=st(c),p=f.filter(y=>!r.has(y)&&!n.has(y)),b=p.length?p:f.filter(y=>!r.has(y)),L=b.length?b:f,k=K(L);return r.add(k),k}return d.map((c,f)=>{const p=a[f]?t:at(t),b=$e(p),L=it(p),k=K(nt),y=E.has(f)?"pepite":o.has(f)?"papyte":"normal",I=y==="pepite"?V(10,15):y==="papyte"?V(15,20):Zt(i,f),h=g.has(f),v=h?Math.max(0,I-2):0;let $=0,m=0,w=0,A=0,B=null;c==="GK"?$=I:c==="DEF"?(m=I,h&&(w=v,B="MIL")):c==="ATT"?(A=I,h&&(w=v,B="MIL")):(w=I,h&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(m=v,B="DEF"):(A=v,B="ATT")));const S=u(p);return{job:c,job2:B,firstname:lt(p),surname_real:S,country_code:p,club_id:e,note_g:$,note_d:m,note_m:w,note_a:A,skin:b,hair:L,hair_length:k,rarity:y,sell_price:0,ethnie:ve(p),_ethnie:ve(p)}})}async function dt(e,t,n,i=!1){oe=null;const{data:d}=await _.from("players").select("surname_real").not("surname_real","is",null),s=new Set((d||[]).map(c=>c.surname_real).filter(Boolean)),g=Xt(e,t,s,i),{data:x}=await _.from("players").select("face").not("face","is",null),E=new Set((x||[]).map(c=>c.face).filter(Boolean)),o=new Set;for(const c of g){const f=await we(c.country_code,new Set([...E,...o]));f&&(c.face=f,o.add(f)),delete c._ethnie}const{data:l,error:a}=await _.from("players").insert(g).select("id");if(a){console.error("[GenSquad] Erreur batch insert:",a.message,a.details),n("Erreur: "+a.message,"error");return}const r=(l||[]).map(c=>({card_type:"player",player_id:c.id}));if(r.length){const{error:c}=await _.from("cards").insert(r);c&&console.warn("[GenSquad] Erreur cartes:",c.message)}const u=(l==null?void 0:l.length)||0;console.log("[GenSquad] Créés:",u,"/",g.length),u>0?n(`${u} joueurs générés ✅`,"success"):n("Erreur génération joueurs","error")}function ct(e){return{style:e.kit_style||R.style,color1:e.kit_color1||R.color1,color2:e.kit_color2||R.color2,color3:e.kit_color3||R.color3,shorts:e.kit_shorts||R.shorts,socks:e.kit_socks||R.socks}}let re=[];async function en(e,t){await me(e,t)}async function me(e,t){const[{data:n,error:i},{data:d}]=await Promise.all([_.from("clubs").select("*").order("real_name"),_.from("players").select("club_id")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}re=n||[];const s={};(d||[]).forEach(g=>{s[g.club_id]=(s[g.club_id]||0)+1}),tn(e,t,s)}function tn(e,t,n={}){const{toast:i,openModal:d,closeModal:s}=t;e.innerHTML=`
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
    </div>`,g(re),document.getElementById("search-clubs").addEventListener("input",x=>{const E=x.target.value.toLowerCase();g(re.filter(o=>o.real_name.toLowerCase().includes(E)||o.encoded_name.toLowerCase().includes(E)))}),document.getElementById("add-club-btn").addEventListener("click",()=>je(null,e,t));function g(x){const E=document.getElementById("clubs-list");if(!x.length){E.innerHTML='<p style="color:var(--tile-fg-dim);padding:20px;text-align:center">Aucun club.</p>';return}const o={};x.forEach(r=>{const u=r.country_code||"—";o[u]||(o[u]=[]),o[u].push(r)});const l=Object.keys(o).sort(),a=r=>{const u=ct(r),c=r.logo_url?`<img src="${r.logo_url}" style="width:36px;height:36px;object-fit:contain;border-radius:8px;flex-shrink:0">`:`<div style="width:36px;height:36px;background:linear-gradient(135deg,${u.color1},${u.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:900;flex-shrink:0">${r.encoded_name.slice(0,3)}</div>`,f=n[r.id]||0;return`
        <div class="club-row" data-club-id="${r.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:10px;cursor:pointer;background:var(--tile-bg);border:1px solid var(--tile-border);transition:background .15s">
          ${c}
          <img src="https://flagsapi.com/${r.country_code}/flat/24.png" style="width:18px;height:13px;object-fit:cover;border-radius:2px;flex-shrink:0" onerror="this.style.display='none'">
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:12px;color:var(--tile-fg-on-page);font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${r.encoded_name}</div>
            <div style="font-size:10px;color:${f===0?"#e67e22":"var(--tile-fg-dim)"}">${f===0?"⚠️ 0 joueur":`👥 ${f}`}</div>
          </div>
          <button class="btn-del-club" data-del="${r.id}"
            style="width:22px;height:22px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;flex-shrink:0"
            onclick="event.stopPropagation()">✕</button>
        </div>`};E.innerHTML=l.map(r=>`
      <div style="display:flex;align-items:center;gap:8px;padding:8px 4px 4px;margin-top:6px">
        ${r!=="—"?`<img src="https://flagsapi.com/${r}/flat/24.png" style="width:20px;height:15px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">`:'<span style="font-size:14px">🌍</span>'}
        <span style="font-size:11px;font-weight:900;color:var(--tile-fg-dim);letter-spacing:1px">${r}</span>
        <span style="font-size:11px;color:var(--tile-fg-dim);background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:10px;padding:1px 8px">${o[r].length}</span>
        <div style="flex:1;height:1px;background:var(--tile-border)"></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:4px">
        ${o[r].map(a).join("")}
      </div>
    `).join(""),E.querySelectorAll(".club-row").forEach(r=>{r.addEventListener("click",()=>{const u=re.find(c=>c.id===r.dataset.clubId);u&&je(u,e,t),E.querySelectorAll(".club-row").forEach(c=>c.style.background="var(--tile-bg)"),r.style.background="rgba(26,107,60,0.18)"})}),E.querySelectorAll(".btn-del-club").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:u}=await _.from("clubs").delete().eq("id",r.dataset.del);u?i(u.message,"error"):(i("Club supprimé","success"),me(e,t))})})}}function nn(e){var b,L;const{openModal:t,closeModal:n}=e,i=6,d=40,s=d*i,g=[];for(let k=0;k<i;k++)for(let y=0;y<i;y++)g.push((k+y)%2===0?"#00AEEF":"#ffffff");let x="OP",E="#D4A017",o=50,l=0,a=0;function r(){let k="";for(let v=0;v<i;v++)for(let $=0;$<i;$++){const m=v*i+$;k+=`<rect x="${$*d}" y="${v*d}" width="${d}" height="${d}" fill="${g[m]}"/>`}const y=s/2+l/100*s,I=s/2+a/100*s,h=o/100*s;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${s}">
      ${k}
      <text x="${y}" y="${I}" text-anchor="middle" dominant-baseline="central"
        font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="${h}"
        fill="${E}">${(x||"").toUpperCase().slice(0,3)}</text>
    </svg>`}function u(k){return"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(k)))}const c=`
    <div style="display:flex;flex-direction:column;gap:14px;align-items:center;max-height:70vh;overflow-y:auto;padding-right:4px">
      <div id="flag-preview" style="width:200px;height:200px;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.15);flex-shrink:0"></div>

      <div>
        <label>TEXTE (3 caractères max)</label>
        <input id="flag-text" maxlength="3" value="${x}" style="width:120px;text-align:center;font-weight:900;text-transform:uppercase">
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <label style="margin:0">Couleur du texte</label>
        <input type="color" id="flag-text-color" value="${E}" style="width:44px;height:32px;padding:2px;cursor:pointer">
      </div>

      <div style="width:260px">
        <label>TAILLE DU TEXTE (<span id="flag-size-val">${o}</span>%)</label>
        <input type="range" id="flag-text-size" min="10" max="120" value="${o}" style="width:100%">
      </div>
      <div style="width:260px">
        <label>POSITION HORIZONTALE (<span id="flag-x-val">${l}</span>)</label>
        <input type="range" id="flag-text-x" min="-50" max="50" value="${l}" style="width:100%">
      </div>
      <div style="width:260px">
        <label>POSITION VERTICALE (<span id="flag-y-val">${a}</span>)</label>
        <input type="range" id="flag-text-y" min="-50" max="50" value="${a}" style="width:100%">
      </div>

      <div>
        <label style="display:block;text-align:center;margin-bottom:8px">Couleurs des ${i*i} carrés</label>
        <div style="display:grid;grid-template-columns:repeat(${i},28px);gap:3px">
          ${g.map((k,y)=>`<input type="color" class="flag-square-color" data-i="${y}" value="${k}" style="width:28px;height:28px;padding:1px;border-radius:4px;cursor:pointer">`).join("")}
        </div>
      </div>
    </div>
  `;t(`🎨 Générer un logo (${i}×${i})`,c,`
    <button id="flag-cancel" class="btn btn-ghost">Annuler</button>
    <button id="flag-use" class="btn btn-primary">✅ Utiliser ce logo</button>
  `);function p(){document.getElementById("flag-preview").innerHTML=r()}p(),document.getElementById("flag-text").addEventListener("input",k=>{x=k.target.value.toUpperCase().slice(0,3),k.target.value=x,p()}),document.getElementById("flag-text-color").addEventListener("input",k=>{E=k.target.value,p()}),document.getElementById("flag-text-size").addEventListener("input",k=>{o=parseInt(k.target.value),document.getElementById("flag-size-val").textContent=o,p()}),document.getElementById("flag-text-x").addEventListener("input",k=>{l=parseInt(k.target.value),document.getElementById("flag-x-val").textContent=l,p()}),document.getElementById("flag-text-y").addEventListener("input",k=>{a=parseInt(k.target.value),document.getElementById("flag-y-val").textContent=a,p()}),document.querySelectorAll(".flag-square-color").forEach(k=>{k.addEventListener("input",y=>{g[parseInt(y.target.dataset.i)]=y.target.value,p()})}),(b=document.getElementById("flag-cancel"))==null||b.addEventListener("click",()=>n()),(L=document.getElementById("flag-use"))==null||L.addEventListener("click",()=>{const k=u(r()),y=document.getElementById("m-logo-url-current");y&&(y.value=k);const I=document.getElementById("logo-preview");I&&(I.innerHTML=`<img src="${k}" style="width:100%;height:100%;object-fit:contain">`),n()})}async function je(e,t,n){var p,b,L,k,y,I,h;const{toast:i}=n,d=!!e,s=e?ct(e):{...R},g=document.getElementById("club-panel");if(!g)return;const x=Object.entries(ze).map(([v,$])=>`<option value="${v}" ${s.style===v?"selected":""}>${$.label}</option>`).join(""),E=Ie.map(v=>`<option value="${v}" ${((e==null?void 0:e.country_code)||"FR")===v?"selected":""}>${v}</option>`).join("");g.style.display="block",g.style.alignItems="",g.style.justifyContent="",g.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <h3 style="font-size:17px;font-weight:900;color:var(--tile-fg-on-page)">${d?`✏️ ${e.real_name}`:"➕ Nouveau club"}</h3>
      ${d?'<button id="btn-gen-squad-panel" class="btn btn-primary btn-sm">⚽ Générer joueurs</button>':""}
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
            ${E}
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
            ${[["Couleur 1","m-kit-color1",s.color1,!1],["Couleur 2","m-kit-color2",s.color2,!1],["Couleur 3","m-kit-color3",s.color3,!0],["Short","m-kit-shorts",s.shorts,!1],["Chaussettes","m-kit-socks",s.socks,!1]].map(([v,$,m,w])=>`
              <div class="form-group" id="wrap-${$}" ${w?'style="display:none"':""}>
                <label>${v}</label>
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

      ${d?"":`
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
        ${d?"💾 Enregistrer":"✅ Créer le club"}
      </button>
    </div>

    ${d?`
    <div style="border-top:1px solid var(--tile-border);margin-top:24px;padding-top:20px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <h4 style="font-size:14px;font-weight:900;color:var(--tile-fg-on-page)">🃏 Joueurs du club (<span id="club-players-count">…</span>)</h4>
        <button id="btn-gen-one-player" class="btn btn-primary btn-sm">➕ Générer 1 joueur</button>
      </div>
      <div id="club-players-grid" style="display:flex;flex-wrap:wrap;gap:10px"></div>
    </div>`:""}
  `,(p=document.getElementById("m-logo-file"))==null||p.addEventListener("change",v=>{var w;const $=(w=v.target.files)==null?void 0:w[0];if(!$)return;const m=new FileReader;m.onload=()=>{document.getElementById("logo-preview").innerHTML=`<img src="${m.result}" style="width:100%;height:100%;object-fit:contain">`},m.readAsDataURL($)}),(b=document.getElementById("m-open-flag-builder"))==null||b.addEventListener("click",()=>{nn(n)}),ne();function o(){var w,A;const v=((w=document.getElementById("m-kit-style"))==null?void 0:w.value)||"uni",$=((A=ze[v])==null?void 0:A.colors)===3,m=document.getElementById("wrap-m-kit-color3");m&&(m.style.display=$?"":"none")}o(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(v=>{const $=document.getElementById(v),m=document.getElementById(v+"-txt");!$||!m||($.addEventListener("input",()=>{m.value=$.value,ne()}),m.addEventListener("input",()=>{const w=m.value.trim();/^#[0-9a-fA-F]{6}$/.test(w)&&($.value=w,ne())}),m.addEventListener("change",()=>{let w=m.value.trim();w.startsWith("#")||(w="#"+w),/^#[0-9a-fA-F]{6}$/.test(w)&&($.value=w,m.value=w,ne())}))}),(L=document.getElementById("m-kit-style"))==null||L.addEventListener("change",()=>{o(),ne()});const l=document.getElementById("m-real"),a=document.getElementById("m-encoded");function r(){if(!l||!a||a.value)return;const v=l.value.trim().split(/\s+/),$=v.length===1?v[0].toUpperCase().slice(0,6):v.filter(m=>m.length>2).map(m=>m[0].toUpperCase()).join("")||v[0].toUpperCase().slice(0,4);a.value=$}l==null||l.addEventListener("input",r),(k=document.getElementById("auto-encode-btn"))==null||k.addEventListener("click",()=>{a&&(a.value=""),r()}),(y=document.getElementById("m-save"))==null||y.addEventListener("click",()=>dn(e,d,t,n));const u=document.getElementById("m-gen-squad"),c=document.getElementById("m-gen-strong-label");function f(){if(c&&(c.style.display=u!=null&&u.checked?"flex":"none",!(u!=null&&u.checked))){const v=document.getElementById("m-gen-strong");v&&(v.checked=!1)}}u==null||u.addEventListener("change",f),f(),(I=document.getElementById("btn-gen-squad-panel"))==null||I.addEventListener("click",()=>{an(e,n,t)}),(h=document.getElementById("btn-gen-one-player"))==null||h.addEventListener("click",()=>{rn(e,n)}),d&&ke(e.id)}async function ke(e){const{data:t}=await _.from("players").select("*, clubs(encoded_name, logo_url, kit_style, kit_color1, kit_color2, kit_color3, kit_shorts, kit_socks)").eq("club_id",e).order("surname_real"),n=document.getElementById("club-players-grid"),i=document.getElementById("club-players-count");if(i&&(i.textContent=(t||[]).length),!!n){if(!(t!=null&&t.length)){n.innerHTML='<div style="color:var(--tile-fg-dim);padding:20px;font-size:13px">Aucun joueur dans ce club.</div>';return}n.innerHTML=t.map(d=>_e(d,{width:100})).join("")}}function an(e,t,n){const{openModal:i,closeModal:d,toast:s}=t;i(`⚽ Générer — ${e.real_name}`,`<div style="display:flex;flex-direction:column;gap:14px">
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
    </div>`),setTimeout(()=>{var g,x;(g=document.getElementById("qg-cancel"))==null||g.addEventListener("click",()=>d()),(x=document.getElementById("qg-ok"))==null||x.addEventListener("click",async()=>{var o;const E=((o=document.getElementById("qg-strong"))==null?void 0:o.checked)??!1;d(),s("Génération en cours…","info"),await dt(e.id,e.country_code,s,E),s("Effectif généré ✅","success"),ke(e.id),me(n,t)})},50)}const ut=["GK","DEF","MIL","ATT"],on=[{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}];function rn(e,t){const{openModal:n,closeModal:i,toast:d}=t,s=Ie.map(o=>`<option value="${o}">${o}</option>`).join(""),g=o=>ut.map(l=>`<option value="${l}" ${l===o?"selected":""}>${l}</option>`).join(""),x=`
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
              ${s}
            </select>
          </div>
        </div>
      </div>
    </div>
  `;n(`➕ Générer un joueur — ${e.real_name}`,x,`
    <button id="gen-one-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gen-one-ok" class="btn btn-primary">➕ Générer</button>
  `),setTimeout(()=>{var o,l;document.querySelectorAll('input[name="gen-one-mode"]').forEach(a=>{a.addEventListener("change",()=>{document.getElementById("gen-one-custom-fields").style.display=a.value==="custom"&&a.checked?"flex":"none"})}),(o=document.getElementById("gen-one-cancel"))==null||o.addEventListener("click",()=>i()),(l=document.getElementById("gen-one-ok"))==null||l.addEventListener("click",async()=>{var c,f,p,b,L;const a=((c=document.querySelector('input[name="gen-one-mode"]:checked'))==null?void 0:c.value)||"random",r=document.getElementById("gen-one-ok");r.disabled=!0,r.textContent="⏳ Génération…";const u={};a==="custom"&&(u.job=((f=document.getElementById("gen-one-job1"))==null?void 0:f.value)||null,u.job2=((p=document.getElementById("gen-one-job2"))==null?void 0:p.value)||null,u.rarity=((b=document.getElementById("gen-one-rarity"))==null?void 0:b.value)||null,u.country=((L=document.getElementById("gen-one-country"))==null?void 0:L.value)||null);try{await ln(e,u),d("Joueur généré ✅","success"),i(),ke(e.id)}catch(k){d("Erreur : "+k.message,"error"),r.disabled=!1,r.textContent="➕ Générer"}})},50)}async function ln(e,t={}){const n=t.country||(Math.random()<.5?e.country_code:at(e.country_code)),i=t.job||K(ut),d=t.job2||null,s=t.rarity||(()=>{const A=Math.random()*100;return A<1.5?"legende":A<3?"pepite":A<4.5?"papyte":"normal"})(),g=s==="pepite"?V(10,15):s==="papyte"?V(15,20):ot(),x=d?Math.max(0,g-2):0;let E=0,o=0,l=0,a=0;i==="GK"&&(E=g),i==="DEF"&&(o=g),i==="MIL"&&(l=g),i==="ATT"&&(a=g),d==="GK"&&(E=x),d==="DEF"&&(o=x),d==="MIL"&&(l=x),d==="ATT"&&(a=x);const r=$e(n),u=it(n),c=K(nt),{data:f}=await _.from("players").select("surname_real").not("surname_real","is",null),p=new Set((f||[]).map(A=>A.surname_real).filter(Boolean)),b=st(n),L=b.filter(A=>!p.has(A)),k=K(L.length?L:b),y={job:i,job2:d,firstname:lt(n),surname_real:k,country_code:n,club_id:e.id,note_g:E,note_d:o,note_m:l,note_a:a,skin:r,hair:u,hair_length:c,rarity:s,sell_price:0,ethnie:ve(n)},{data:I}=await _.from("players").select("face").not("face","is",null),h=new Set((I||[]).map(A=>A.face).filter(Boolean)),v=await we(n,h);v&&(y.face=v);const{data:$,error:m}=await _.from("players").insert(y).select("id").single();if(m)throw m;const{error:w}=await _.from("cards").insert({card_type:"player",player_id:$.id});w&&console.warn("[GenOnePlayer] Erreur carte:",w.message)}function pt(){var e,t,n,i,d,s;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((t=document.getElementById("m-kit-color1"))==null?void 0:t.value)||"#1A6B3C",color2:((n=document.getElementById("m-kit-color2"))==null?void 0:n.value)||"#ffffff",color3:((i=document.getElementById("m-kit-color3"))==null?void 0:i.value)||"#000000",shorts:((d=document.getElementById("m-kit-shorts"))==null?void 0:d.value)||"#111111",socks:((s=document.getElementById("m-kit-socks"))==null?void 0:s.value)||"#ffffff"}}function ne(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=$t(pt(),"panel"))}async function sn(e,t){const n=(e.name.split(".").pop()||"png").toLowerCase(),i=`clubs/${t||"new"}-${Date.now()}.${n}`,{error:d}=await _.storage.from("assets").upload(i,e,{upsert:!0,cacheControl:"3600"});if(d)throw d;const{data:s}=_.storage.from("assets").getPublicUrl(i);return s.publicUrl}async function dn(e,t,n,i){var k,y,I,h,v,$,m,w,A;const{toast:d}=i,s=document.getElementById("m-error"),g=document.getElementById("m-save"),x=(k=document.getElementById("m-real"))==null?void 0:k.value.trim(),E=(y=document.getElementById("m-encoded"))==null?void 0:y.value.trim().toUpperCase(),o=(I=document.getElementById("m-country"))==null?void 0:I.value.trim().toUpperCase(),l=((v=(h=document.getElementById("m-logo-file"))==null?void 0:h.files)==null?void 0:v[0])||null,a=(($=document.getElementById("m-logo-url-current"))==null?void 0:$.value)||null,r=((m=document.getElementById("m-gen-stadium"))==null?void 0:m.checked)??!1,u=((w=document.getElementById("m-gen-squad"))==null?void 0:w.checked)??!1,c=((A=document.getElementById("m-gen-strong"))==null?void 0:A.checked)??!1,f=pt();if(!x){s.textContent="Le nom du club est requis.";return}if(!E){s.textContent="Le nom encodé est requis.";return}if(!o){s.textContent="Le pays est requis.";return}g.disabled=!0,g.textContent="Enregistrement…";let p=a;if(l)try{g.textContent="📤 Envoi du logo…",p=await sn(l,e==null?void 0:e.id)}catch(B){s.textContent="Erreur upload logo : "+B.message,g.disabled=!1,g.textContent=t?"💾 Enregistrer":"✅ Créer le club";return}const b={real_name:x,encoded_name:E,country_code:o,logo_url:p,kit_style:f.style,kit_color1:f.color1,kit_color2:f.color2,kit_color3:f.color3,kit_shorts:f.shorts,kit_socks:f.socks};let L=e==null?void 0:e.id;if(t){const{error:B}=await _.from("clubs").update(b).eq("id",L);if(B){s.textContent=B.message,g.disabled=!1,g.textContent="💾 Enregistrer";return}}else{const{data:B,error:S}=await _.from("clubs").insert(b).select().single();if(S){s.textContent=S.message,g.disabled=!1,g.textContent="✅ Créer le club";return}if(L=B.id,r){g.textContent="🏟️ Création du stade…";const{data:C,error:T}=await _.from("stadium_definitions").insert({name:`Stade de ${x}`,club_id:L,country_code:null}).select().single();T?console.warn("[Stadium] Erreur def stade:",T.message):C&&await _.from("cards").insert({card_type:"stadium",stadium_id:C.id})}u&&(g.textContent="⚽ Génération des joueurs…",await dt(L,o,d,c))}d(t?"Club modifié ✅":"Club créé ✅","success"),me(n,i)}const cn=["normal","pepite","papyte","legende"],Ne=["GK","DEF","MIL","ATT"],un=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let J={...D},le=[];async function pn(e,{toast:t}){const{data:n}=await _.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");le=n||[],J={...D},e.innerHTML=yn(le),gn(e,le,t),F()}function Pe(){var n;const e=((n=document.getElementById("cb-surname-real"))==null?void 0:n.value)||"",t=document.getElementById("cb-surname-enc");t&&(t.value=pe(e))}function mn(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=le.find(i=>String(i.id)===String(e));return t?{style:t.kit_style||R.style,color1:t.kit_color1||R.color1,color2:t.kit_color2||R.color2,shorts:t.kit_shorts||R.shorts,socks:t.kit_socks||R.socks}:{...R}}function F(){var r,u,c,f;const e=p=>{var b;return((b=document.getElementById(p))==null?void 0:b.value)||""},t={firstname:e("cb-firstname"),surname_real:e("cb-surname-enc")||pe(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((u=(r=document.getElementById("cb-club"))==null?void 0:r.selectedOptions[0])==null?void 0:u.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=mn(),i=document.getElementById("cb-club"),d=((f=(c=i==null?void 0:i.selectedOptions[0])==null?void 0:c.dataset)==null?void 0:f.logo)||null,s=Qe(J,n,120),g=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`,x=Bt(t,{portraitUrl:g,clubLogoUrl:d,showNotes:!0}),E=document.getElementById("card-preview");E&&(E.innerHTML=x);const o=document.getElementById("avatar-preview-wrap");o&&(o.innerHTML=s);const l=e("cb-surname-real"),a=document.getElementById("encode-summary");a&&l&&(a.textContent=`${e("cb-firstname")} ${l} → ${e("cb-firstname")} ${t.surname_real}`)}function mt(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};J={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function gn(e,t,n){var d,s,g,x,E;e.querySelectorAll("input,select").forEach(o=>{o.addEventListener("input",F),o.addEventListener("change",F)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(o=>{var l;(l=document.getElementById(o))==null||l.addEventListener("change",()=>{mt(),F()})}),(d=document.getElementById("cb-surname-real"))==null||d.addEventListener("input",()=>{Pe(),F()}),(s=document.getElementById("btn-encode"))==null||s.addEventListener("click",()=>{Pe(),F()}),(g=document.getElementById("cb-club"))==null||g.addEventListener("change",F),(x=document.getElementById("btn-save-player"))==null||x.addEventListener("click",()=>fn(n)),(E=document.getElementById("btn-reset"))==null||E.addEventListener("click",()=>{e.querySelectorAll("input").forEach(o=>o.value=""),e.querySelectorAll("select").forEach(o=>o.selectedIndex=0),J={...D},i.forEach(o=>{const l=o.replace("av-",""),a=document.getElementById(o);a&&(a.value=D[l]||"")}),F()})}async function fn(e){const t=g=>{var x;return((x=document.getElementById(g))==null?void 0:x.value)||""},n=t("cb-surname-real").trim(),i=t("cb-surname-enc").trim()||pe(n);if(!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}mt();const d={firstname:t("cb-firstname").trim(),surname_real:n,surname_real:i,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:J,skin:J.skin||"blanc",hair:J.hairColor||"marron",hair_length:"court"},{error:s}=await _.from("players").insert(d);if(s){e("Erreur: "+s.message,"error");return}e(`✅ Joueur "${d.firstname} ${d.surname_real}" enregistré !`,"success")}function yn(e){const t=un.map(([o,l])=>`<option value="${o}">${l} (${o})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(o=>`<option value="${o.id}" data-logo="${o.logo_url||""}">${o.encoded_name}</option>`).join(""),i=Ne.map(o=>`<option value="${o}">${o}</option>`).join(""),d='<option value="">Aucun</option>'+Ne.map(o=>`<option value="${o}">${o}</option>`).join(""),s=cn.map(o=>`<option value="${o}">${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join(""),g=(o,l,a)=>Object.entries(l).map(([r,u])=>`<option value="${r}" ${r===(a||"")?"selected":""}>${u.label}</option>`).join(""),x=Object.keys(kt).map(o=>`<option value="${o}" ${o===D.skin?"selected":""}>${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join(""),E=Object.keys(Lt).map(o=>`<option value="${o}" ${o===D.hairColor?"selected":""}>${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join("");return`
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
          <div><label>Poste secondaire</label><select id="cb-job2">${d}</select></div>
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
            <div style="background:${At[o]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
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
              <select id="av-hair">${g("av-hair",St,D.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${E}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${g("av-eyebrows",Ct,D.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${g("av-eyes",Tt,D.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${g("av-nose",Mt,D.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${g("av-mouth",zt,D.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${g("av-beard",Rt,D.beard)}</select>
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
  `}async function gt(e,{toast:t}){const[{data:n,error:i},{data:d},{data:s}]=await Promise.all([_.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").order("created_at",{ascending:!1}),_.from("user_solo_progress").select("user_id, unlocked_level"),_.rpc("admin_get_user_emails")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const g={};(d||[]).forEach(l=>{g[l.user_id]=l.unlocked_level});const x={};(s||[]).forEach(l=>{x[l.id]=l.email});const E=n||[];e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <input id="search-users" placeholder="🔍 Rechercher un manager…" style="width:260px">
      <span style="font-size:13px;color:var(--gray-600)">${E.length} manager(s)</span>
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
  `,o(E),document.getElementById("search-users").addEventListener("input",l=>{const a=l.target.value.toLowerCase();o(E.filter(r=>{var u;return r.pseudo.toLowerCase().includes(a)||((u=r.club_name)==null?void 0:u.toLowerCase().includes(a))}))});function o(l){document.getElementById("users-tbody").innerHTML=l.map(a=>{const r=a.mmr??1e3,u=a.mmr_deviation??350,c=a.placement_matches??0,f=Dt(r),p=a.ranked_wins??0,b=a.ranked_losses??0,L=a.ranked_draws??0,k=p+b+L,y=k>0?Math.round(p/k*100):null,I=c<10,h=u<80?"#1A6B3C":u<150?"#e67e22":"#bb2020";return`
        <tr>
          <td>
            <div style="font-weight:700">${a.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${a.club_name||"—"}</div>
            <div style="font-size:10.5px;color:var(--gray-600)">${x[a.id]||"—"}</div>
          </td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:6px">
              <span id="credits-display-${a.id}">${(a.credits||0).toLocaleString("fr")} cr.</span>
              <button class="btn-edit-credits" data-user="${a.id}" data-current="${a.credits||0}"
                style="background:none;border:none;cursor:pointer;font-size:12px;padding:0;opacity:.7" title="Modifier les crédits">✏️</button>
            </div>
            <div style="color:var(--gray-600)">Niv. Solo ${g[a.id]??1}</div>
          </td>
          <td style="font-size:12px">${a.wins}V / ${a.draws}N / ${a.losses}D</td>
          <td style="font-size:12px">🥇${a.trophies_top1} 🥈${a.trophies_top2} 🥉${a.trophies_top3}</td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:5px">
              <span style="font-size:16px">${f.emoji}</span>
              <span style="font-weight:700;color:${f.color}">${f.label}</span>
            </div>
            ${I?`<div style="font-size:10px;color:#e67e22">${c}/10 placement${c<10?` (${10-c} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${p}V ${L}N ${b}D${y!==null?` · ${y}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${r}</div>
            <div style="font-size:10px;color:${h}">RD ±${Math.round(u)}</div>
          </td>
          <td>
            ${a.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td>
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${a.id}" data-is-admin="${a.is_admin}">
              ${a.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll(".btn-edit-credits").forEach(a=>{a.addEventListener("click",async()=>{const r=a.dataset.user,u=Number(a.dataset.current)||0,c=prompt("Nouveau solde de crédits :",u);if(c===null)return;const f=parseInt(c.replace(/\s/g,""),10);if(isNaN(f)||f<0){t("Valeur invalide","error");return}const{data:p,error:b}=await _.rpc("admin_update_user_credits",{p_user_id:r,p_new_credits:f});if(b){t(b.message,"error");return}if(!(p!=null&&p.success)){t((p==null?void 0:p.error)||"Échec de la mise à jour","error");return}t("Crédits mis à jour ✅","success");const L=document.getElementById(`credits-display-${r}`);L&&(L.textContent=`${f.toLocaleString("fr")} cr.`),a.dataset.current=f})}),document.querySelectorAll("[data-toggle-admin]").forEach(a=>{a.addEventListener("click",async()=>{const r=a.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${r?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:u}=await _.from("users").update({is_admin:r}).eq("id",a.dataset.toggleAdmin);u?t(u.message,"error"):(t("Rôle mis à jour ✅","success"),gt(e,{toast:t}))})})}}const bn=[{value:"normal",label:"Normal",color:"#ccc"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function ft(e,t){var E;const{toast:n}=t,{data:i,error:d}=await _.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_real, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(d){e.innerHTML=`<p style="color:var(--danger)">${d.message}</p>`;return}const s=i||[],g=s.filter(o=>o.status==="active").length,x=s.filter(o=>o.status==="sold").length;e.innerHTML=`
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
            ${s.map(o=>{var u,c,f,p;const l=(u=o.card)==null?void 0:u.player,a=l?`${l.firstname} ${l.surname_real}`:((c=o.card)==null?void 0:c.card_type)||"—",r={active:"#1A6B3C",sold:"#D4A017",cancelled:"#888"};return`<tr>
                <td><b>${a}</b>${l?`<div style="font-size:10px;color:var(--tile-fg-dim)">${l.rarity} · ${l.job}</div>`:""}</td>
                <td style="font-size:12px">${((f=o.seller)==null?void 0:f.pseudo)||"—"}</td>
                <td style="font-size:12px">${((p=o.buyer)==null?void 0:p.pseudo)||"—"}</td>
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
  `,document.querySelectorAll("[data-cancel]").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:l}=await _.from("market_listings").update({status:"cancelled"}).eq("id",o.dataset.cancel);l?n(l.message,"error"):(n("Annonce annulée","success"),ft(e,t))})}),(E=document.getElementById("btn-price-grid"))==null||E.addEventListener("click",()=>vn(t))}async function vn(e){await xe(e)}function xn(){const e=document.getElementById("modal-overlay");if(!e||e._pgBlocker)return;const t=n=>{n.target===n.currentTarget&&n.stopImmediatePropagation()};e.addEventListener("click",t,!0),e._pgBlocker=t}function fe(){const e=document.getElementById("modal-overlay");e!=null&&e._pgBlocker&&(e.removeEventListener("click",e._pgBlocker,!0),delete e._pgBlocker)}async function xe(e){var u,c;const{openModal:t,closeModal:n,toast:i}=e,{data:d,error:s}=await _.from("sell_price_configs").select("*").order("rarity").order("note_min");if(s){i(s.message,"error");return}const g=f=>bn.map(p=>`<option value="${p.value}" ${p.value===f?"selected":""}>${p.label}</option>`).join(""),x=f=>`
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
    </tr>`,E=`
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
          ${(d||[]).map(x).join("")||'<tr><td colspan="6" style="text-align:center;color:#aaa;padding:20px">Aucune règle définie.</td></tr>'}
        </tbody>
      </table>
    </div>
  `;t("📊 Grille des prix — vente marché",E,`
    <button id="pg-add-row" class="btn btn-primary">+ Ajouter une ligne</button>
    <button id="pg-close" class="btn btn-ghost">Fermer</button>
  `),xn(),(u=document.getElementById("pg-close"))==null||u.addEventListener("click",()=>{fe(),n()});function l(f){const p=f.dataset.id,b=f.dataset.field,L=b==="rarity"?f.value:Number(f.value)||0;return a(p,{[b]:L},f)}async function a(f,p,b){const L=document.querySelector(`tr[data-row="${f}"]`),k=m=>L.querySelector(`[data-field="${m}"]`),y="note_min"in p?p.note_min:Number(k("note_min").value),I="note_max"in p?p.note_max:Number(k("note_max").value),h="price_min"in p?p.price_min:Number(k("price_min").value),v="price_max"in p?p.price_max:Number(k("price_max").value);if(y>I){i("Note min doit être ≤ note max","error");return}if(h>v){i("Prix min doit être ≤ prix max","error");return}const{error:$}=await _.from("sell_price_configs").update(p).eq("id",f);if($){i($.message,"error");return}b&&(b.style.transition="background .3s",b.style.background="#e8f8ee",setTimeout(()=>{b.style.background=""},500))}function r(){document.querySelectorAll("#pg-tbody [data-field]").forEach(f=>{f.addEventListener("change",()=>l(f))})}r(),document.querySelectorAll("[data-del-row]").forEach(f=>{f.addEventListener("click",async()=>{confirm("Supprimer cette ligne ?")&&(await _.from("sell_price_configs").delete().eq("id",f.dataset.delRow),i("Ligne supprimée","success"),fe(),xe(e))})}),(c=document.getElementById("pg-add-row"))==null||c.addEventListener("click",async()=>{var k;const f={rarity:"normal",note_min:0,note_max:20,price_min:2500,price_max:15e3},{data:p,error:b}=await _.from("sell_price_configs").insert(f).select().single();if(b){i(b.message,"error");return}const L=document.getElementById("pg-tbody");L.querySelector("td[colspan]")&&(L.innerHTML=""),L.insertAdjacentHTML("beforeend",x(p)),r(),(k=document.querySelector(`[data-del-row="${p.id}"]`))==null||k.addEventListener("click",async function(){confirm("Supprimer cette ligne ?")&&(await _.from("sell_price_configs").delete().eq("id",p.id),i("Ligne supprimée","success"),fe(),xe(e))}),i("Ligne ajoutée — modifie les valeurs directement","success")})}async function hn(e,{toast:t}){e.innerHTML=`
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
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:n,error:i}=await _.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun club à exporter","info");return}let d=`real_name,encoded_name,country_code,logo_url
`;n.forEach(s=>{d+=[s.real_name,s.encoded_name,s.country_code,s.logo_url||""].map(Fe).join(",")+`
`}),ae("clubs_export.csv",d),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:i}=await _.from("players").select("firstname,surname_real,surname_real,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_real");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let d=`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(s=>{var g;d+=[s.firstname,s.surname_real,s.surname_real,s.country_code,((g=s.clubs)==null?void 0:g.encoded_name)||"",s.job,s.job2||"",s.note_g,s.note_d,s.note_m,s.note_a,s.rarity,s.note_min??"",s.note_max??"",s.skin,s.hair,s.hair_length,s.sell_price].map(Fe).join(",")+`
`}),ae("players_export.csv",d),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const d=document.getElementById("clubs-import-result");d.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const s=await i.text(),g=Oe(s);if(g.length===0){d.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let x=0,E=0;const o=[];for(const l of g){if(!l.real_name||!l.encoded_name||!l.country_code){E++,o.push(`Ligne ignorée (champs manquants): ${l.real_name||"?"}`);continue}const a={real_name:l.real_name,encoded_name:l.encoded_name.toUpperCase(),country_code:l.country_code.toUpperCase().slice(0,2),logo_url:l.logo_url||null},{error:r}=await _.from("clubs").upsert(a,{onConflict:"encoded_name"});r?(E++,o.push(`${l.encoded_name}: ${r.message}`)):x++}d.innerHTML=`<div style="color:var(--green)">✅ ${x} clubs importés</div>
        ${E>0?`<div style="color:#c0392b">❌ ${E} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${o.slice(0,10).join("<br>")}</div>`:""}`,t(`${x} clubs importés`,"success")}catch(s){d.innerHTML=`<span style="color:#c0392b">Erreur : ${s.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const d=document.getElementById("players-import-result");d.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const s=await i.text(),g=Oe(s);if(g.length===0){d.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:x}=await _.from("clubs").select("id,encoded_name"),E={};(x||[]).forEach(b=>{E[b.encoded_name.toUpperCase()]=b.id});let o=0,l=0;const a=[],r=["GK","DEF","MIL","ATT"],u=["normal","pepite","papyte","legende"],c=["blanc","metisse","typ","noir"],f=["blond","marron","noir","chauve"],p=["rase","court","milong","long"];for(const b of g){if(!b.firstname||!b.surname_real||!b.country_code||!b.job){l++,a.push(`Ligne ignorée (champs requis manquants): ${b.firstname||"?"}`);continue}if(!r.includes(b.job)){l++,a.push(`${b.firstname}: job invalide "${b.job}"`);continue}const L=b.club_encoded_name&&E[b.club_encoded_name.toUpperCase()]||null,k={firstname:b.firstname,surname_real:b.surname_real,surname_real:b.surname_real||pe(b.surname_real),country_code:b.country_code.toUpperCase().slice(0,2),club_id:L,job:b.job,job2:r.includes(b.job2)?b.job2:null,note_g:parseInt(b.note_g)||0,note_d:parseInt(b.note_d)||0,note_m:parseInt(b.note_m)||0,note_a:parseInt(b.note_a)||0,rarity:u.includes(b.rarity)?b.rarity:"normal",note_min:b.note_min!==""&&b.note_min!=null?parseInt(b.note_min):null,note_max:b.note_max!==""&&b.note_max!=null?parseInt(b.note_max):null,skin:c.includes(b.skin)?b.skin:"blanc",hair:f.includes(b.hair)?b.hair:"noir",hair_length:p.includes(b.hair_length)?b.hair_length:"court",sell_price:parseInt(b.sell_price)||0},{error:y}=await _.from("players").insert(k);y?(l++,a.push(`${b.firstname} ${b.surname_real}: ${y.message}`)):o++}d.innerHTML=`<div style="color:var(--green)">✅ ${o} joueurs importés</div>
        ${l>0?`<div style="color:#c0392b">❌ ${l} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${a.slice(0,10).join("<br>")}</div>`:""}`,t(`${o} joueurs importés`,"success")}catch(s){d.innerHTML=`<span style="color:#c0392b">Erreur : ${s.message}</span>`}n.target.value=""})}function Fe(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function ae(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(n),d=document.createElement("a");d.href=i,d.download=e,d.click(),URL.revokeObjectURL(i)}function Oe(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(g=>g.trim());if(t.length<2)return[];const n=t[0],i=n.split(";").length>n.split(",").length?";":",",d=Ue(n,i).map(g=>g.trim().replace(/^\uFEFF/,"").toLowerCase()),s=[];for(let g=1;g<t.length;g++){if(!t[g].trim())continue;const x=Ue(t[g],i),E={};d.forEach((o,l)=>{E[o]=(x[l]||"").trim()}),!Object.values(E).every(o=>!o)&&s.push(E)}return s}function Ue(e,t=","){const n=[];let i="",d=!1;for(let s=0;s<e.length;s++){const g=e[s];d?g==='"'?e[s+1]==='"'?(i+='"',s++):d=!1:i+=g:g==='"'?d=!0:g===t?(n.push(i),i=""):i+=g}return n.push(i),n}const En={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function _n(e,{toast:t}){const n=Object.keys(ge);let i=n[0];const{data:d}=await _.from("formation_links_overrides").select("formation, links"),s={};(d||[]).forEach(l=>{s[l.formation]=l.links});let g=new Set;function x(l,a){return[l,a].sort().join("-")}function E(l){const a=s[l]||ge[l]||[];g=new Set(a.map(([r,u])=>x(r,u)))}E(i),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${n.map(l=>`<option value="${l}" ${l===i?"selected":""}>${l}</option>`).join("")}
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
  `;function o(){const l=jt[i]||{},a=Re(i),r=320,u=400,c=22;function f(y){const I=l[y];return I?{x:I.x*r,y:I.y*u}:null}let p=`<svg width="${r}" height="${u}" viewBox="0 0 ${r} ${u}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;a.forEach(([y,I],h)=>{const v=f(y),$=f(I);if(!v||!$)return;const m=x(y,I),w=g.has(m),A=w?"#3b82f6":"#999",B=w?.95:.35,S=w?4:3;p+=`<line x1="${v.x}" y1="${v.y}" x2="${$.x}" y2="${$.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${m}" style="cursor:pointer"/>`,p+=`<line x1="${v.x}" y1="${v.y}" x2="${$.x}" y2="${$.y}"
        stroke="${A}" stroke-width="${S}" stroke-dasharray="${w?"none":"4,3"}"
        opacity="${B}" pointer-events="none" data-line-key="${m}"/>`});for(const y of Object.keys(l)){const I=f(y);if(!I)continue;const h=y.replace(/\d+/,""),v=En[h]||"#555";p+=`<circle cx="${I.x}" cy="${I.y}" r="${c}" fill="${v}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,p+=`<text x="${I.x}" y="${I.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${y}</text>`}p+="</svg>",document.getElementById("field-wrap").innerHTML=p;const b=document.getElementById("links-list");b.innerHTML=a.map(([y,I])=>{const h=x(y,I),v=g.has(h);return`
        <button class="link-toggle" data-key="${h}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${v?"#3b82f6":"#ddd"};
          background:${v?"#eaf2ff":"#fafafa"};
          color:${v?"#1d4ed8":"#888"}">
          <span>${y} ↔ ${I}</span>
          <span>${v?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const L=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');L&&(L.textContent=`Liens (${g.size}/${a.length} actifs)`);function k(y){g.has(y)?g.delete(y):g.add(y),o()}e.querySelectorAll(".link-hit").forEach(y=>{y.addEventListener("click",()=>k(y.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(y=>{y.addEventListener("click",()=>k(y.dataset.key))})}o(),document.getElementById("formation-select").addEventListener("change",l=>{i=l.target.value,E(i),o()}),document.getElementById("reset-btn").addEventListener("click",()=>{const l=ge[i]||[];g=new Set(l.map(([a,r])=>x(a,r))),o(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const a=Re(i).filter(([u,c])=>g.has(x(u,c))),{error:r}=await _.from("formation_links_overrides").upsert({formation:i,links:a,updated_at:new Date().toISOString()});if(r){t(r.message,"error");return}s[i]=a,t(`Liens enregistrés pour ${i} (${a.length} actifs)`,"success")})}const wn=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],In=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],$n=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function kn(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await _.from("booster_configs").select("*").order("sort_order");let n=null,i=[],d=null;const s=()=>window.innerWidth<700;async function g(){if(!n){i=[];return}if(n!==d){const{data:a}=await _.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");i=a||[],d=n}}function x(){return`
    <div id="booster-list" style="background:#fff;${s()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(t||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(a=>`
      <div class="booster-row" data-id="${a.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${a.id===n?"#f0f7f0":"#fff"}">
        ${a.image_url?`<img src="/icons/${a.image_url}" style="width:36px;height:36px;object-fit:contain;border-radius:6px;background:#f5f5f5;padding:2px">`:'<div style="width:36px;height:36px;background:#eee;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:20px">📦</div>'}
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.name}</div>
          <div style="font-size:11px;color:#888">
            ${a.price_type==="credits"?(a.price_credits||0)+" cr.":a.price_type==="pub"?"Pub":"Gratuit"}
            · ${a.card_count||5} cartes · ${a.is_active?"✅":"⛔"}
          </div>
        </div>
        <button class="btn-delete" data-id="${a.id}" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:18px;padding:4px;flex-shrink:0">🗑️</button>
      </div>`).join("")}
      ${(t||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>'}
    </div>`}function E(){const a=n?(t||[]).find(c=>c.id===n):null;if(!a)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const r=i.reduce((c,f)=>c+Number(f.percentage||0),0),u=Math.abs(r-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${s()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <h3 style="margin:0 0 14px;font-size:16px">${a.name}</h3>

      <!-- Infos de base -->
      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="f-name" value="${a.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="f-image-url" value="${a.image_url||""}" placeholder="ex: booster-players.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          ${a.image_url?`<img src="/icons/${a.image_url}" style="height:44px;margin-top:8px;border-radius:6px;object-fit:contain;background:#f0f0f0;padding:4px">`:""}
          <div id="icon-picker-grid" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE DE PRIX</label>
            <select id="f-price-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${$n.map(c=>`<option value="${c.value}" ${a.price_type===c.value?"selected":""}>${c.label}</option>`).join("")}
            </select>
          </div>
          <div id="credits-field">
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">CRÉDITS</label>
            <input id="f-price-credits" type="number" min="0" value="${a.price_credits||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NB CARTES</label>
            <input id="f-card-count" type="number" min="1" max="10" value="${a.card_count||5}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="f-sort" type="number" value="${a.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:flex;align-items:center;gap:10px">
          <input type="checkbox" id="f-active" ${a.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
          <label for="f-active" style="font-size:13px;cursor:pointer;font-weight:600">Booster actif (visible dans la boutique)</label>
        </div>
        <div style="display:flex;align-items:center;gap:10px;margin-top:10px">
          <input type="checkbox" id="f-allow-dup" ${a.allow_duplicates!==!1?"checked":""} style="width:18px;height:18px;cursor:pointer">
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
              <input id="f-max-per-user" type="number" min="1" value="${a.max_per_user||""}" placeholder="ex: 1"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible à partir du</label>
              <input id="f-available-from" type="date" value="${a.available_from||""}"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible jusqu'au</label>
              <input id="f-available-until" type="date" value="${a.available_until||""}"
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
              Total : ${r.toFixed(1)}% ${u?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((c,f)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${f}">
            <select class="rate-type" data-idx="${f}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${wn.map(p=>`<option value="${p.value}" ${c.card_type===p.value?"selected":""}>${p.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${f}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${In.map(p=>`<option value="${p.value}" ${(c.rarity||"")===p.value?"selected":""}>${p.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${f}" type="number" min="0" max="20" value="${c.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${f}" type="number" min="0" max="20" value="${c.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${f}" type="number" min="0.1" max="100" step="0.1" value="${c.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${f}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function o(a=!1){a||await g();const r=!n&&s(),u=n&&s();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!s()||r||!n?x():""}
      ${!s()||u?E():""}
    </div>`,l()}function l(){var u,c,f,p,b,L,k;const a=y=>e.querySelector(y);e.querySelectorAll(".booster-row").forEach(y=>{y.addEventListener("click",I=>{I.target.closest(".btn-delete")||(n=y.dataset.id,d=null,o())})}),(u=a("#btn-back"))==null||u.addEventListener("click",()=>{n=null,o()}),(c=a("#btn-new"))==null||c.addEventListener("click",async()=>{const y=prompt("Nom du nouveau booster :");if(!(y!=null&&y.trim()))return;const{data:I,error:h}=await _.from("booster_configs").insert({name:y.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(h){alert(h.message);return}t.push(I),n=I.id,d=null,o()}),e.querySelectorAll(".btn-delete").forEach(y=>{y.addEventListener("click",async I=>{if(I.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await _.from("booster_configs").delete().eq("id",y.dataset.id);const h=t.findIndex(v=>v.id===y.dataset.id);h>-1&&t.splice(h,1),n===y.dataset.id&&(n=null,d=null),o()})}),(f=a("#btn-cancel"))==null||f.addEventListener("click",()=>{n=null,o()}),(p=a("#f-price-type"))==null||p.addEventListener("change",y=>{const I=a("#credits-field");I&&(I.style.opacity=y.target.value!=="credits"?"0.4":"1")}),(b=a("#btn-pick-icon"))==null||b.addEventListener("click",async()=>{var I;const y=a("#icon-picker-grid");if(y){if(y.style.display!=="none"){y.style.display="none";return}y.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',y.style.display="block";try{const v=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),$=Array.isArray(v)?v.filter(w=>w.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(w.name)):[];if(!$.length){y.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const m=((I=a("#f-image-url"))==null?void 0:I.value)||"";y.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${$.map(w=>`
          <div class="icon-pick-item" data-name="${w.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${w.name===m?"#1A6B3C":"#ddd"};background:${w.name===m?"#f0f7f0":"#fff"}">
            <img src="/icons/${w.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${w.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,y.querySelectorAll(".icon-pick-item").forEach(w=>{w.addEventListener("click",()=>{const A=a("#f-image-url");A&&(A.value=w.dataset.name),y.style.display="none"})})}catch(h){y.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${h.message}</div>`}}});function r(){e.querySelectorAll("[data-rate-idx]").forEach(y=>{var h,v,$,m,w;const I=Number(y.dataset.rateIdx);I>=0&&I<i.length&&(i[I].card_type=((h=y.querySelector(".rate-type"))==null?void 0:h.value)||"player",i[I].rarity=((v=y.querySelector(".rate-rarity"))==null?void 0:v.value)||null,i[I].note_min=Number(($=y.querySelector(".rate-note-min"))==null?void 0:$.value)||null,i[I].note_max=Number((m=y.querySelector(".rate-note-max"))==null?void 0:m.value)||null,i[I].percentage=Number((w=y.querySelector(".rate-pct"))==null?void 0:w.value)||0)})}(L=a("#btn-add-rate"))==null||L.addEventListener("click",()=>{r(),i.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),o(!0)}),e.querySelectorAll(".btn-del-rate").forEach(y=>{y.addEventListener("click",()=>{r(),i.splice(Number(y.dataset.idx),1),o(!0)})}),(k=a("#btn-save"))==null||k.addEventListener("click",async()=>{var m,w,A,B,S,C,T,O,U,H,P,j,ie;const y=(t||[]).find(M=>M.id===n);if(!y)return;const I=[];e.querySelectorAll("[data-rate-idx]").forEach(M=>{var Z,Q,X,ee,te;const Y=Number(M.dataset.rateIdx);I.push({booster_id:n,card_type:((Z=M.querySelector(".rate-type"))==null?void 0:Z.value)||"player",rarity:((Q=M.querySelector(".rate-rarity"))==null?void 0:Q.value)||null,note_min:Number((X=M.querySelector(".rate-note-min"))==null?void 0:X.value)||null,note_max:Number((ee=M.querySelector(".rate-note-max"))==null?void 0:ee.value)||null,percentage:Number((te=M.querySelector(".rate-pct"))==null?void 0:te.value)||0,sort_order:Y});const N=I[I.length-1];N.rarity||(N.rarity=null),N.note_min||(N.note_min=null),N.note_max||(N.note_max=null)});const h=I.reduce((M,Y)=>M+Y.percentage,0);if(I.length&&Math.abs(h-100)>.5){alert(`La somme doit faire 100% (actuellement ${h.toFixed(1)}%)`);return}const v={name:((w=(m=a("#f-name"))==null?void 0:m.value)==null?void 0:w.trim())||y.name,image_url:((B=(A=a("#f-image-url"))==null?void 0:A.value)==null?void 0:B.trim())||null,price_type:(S=a("#f-price-type"))==null?void 0:S.value,price_credits:Number((C=a("#f-price-credits"))==null?void 0:C.value)||0,card_count:Number((T=a("#f-card-count"))==null?void 0:T.value)||5,is_active:((O=a("#f-active"))==null?void 0:O.checked)??y.is_active,allow_duplicates:((U=a("#f-allow-dup"))==null?void 0:U.checked)??!0,sort_order:Number((H=a("#f-sort"))==null?void 0:H.value)||0,max_per_user:(P=a("#f-max-per-user"))!=null&&P.value?Number(a("#f-max-per-user").value):null,available_from:((j=a("#f-available-from"))==null?void 0:j.value)||null,available_until:((ie=a("#f-available-until"))==null?void 0:ie.value)||null},{error:$}=await _.from("booster_configs").update(v).eq("id",n);if($){alert($.message);return}if(Object.assign(y,v),await _.from("booster_drop_rates").delete().eq("booster_id",n),I.length){const{error:M}=await _.from("booster_drop_rates").insert(I);if(M){alert(M.message);return}}i=I,d=n,alert("✅ Booster enregistré !"),o(!0)})}o()}const yt=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function Ln(e){await Le(e)}async function Le(e){const{data:t,error:n}=await _.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
          ${(t||[]).map(i=>An(i)).join("")}
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
              ${yt.map(i=>`<option value="${i.value}">${i.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>He(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Bn(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const d=(t||[]).find(s=>s.id===i.dataset.edit);d&&i.addEventListener("click",()=>He(d))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await _.from("sell_price_configs").delete().eq("id",i.dataset.delete),await Le(e))})})}function An(e){const t=yt.find(n=>n.value===e.rarity);return`
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
    </tr>`}function He(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function Bn(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,d=parseInt(document.getElementById("form-note-min").value)||1,s=parseInt(document.getElementById("form-note-max").value)||10;if(d>s){alert("Note min doit être ≤ note max");return}const g={rarity:n,price:i,note_min:d,note_max:s,updated_at:new Date().toISOString()};let x;if(t?{error:x}=await _.from("sell_price_configs").update(g).eq("id",t):{error:x}=await _.from("sell_price_configs").insert(g),x){alert("Erreur : "+x.message);return}document.getElementById("config-form").style.display="none",await Le(e)}async function Sn(e){await Ae(e)}async function Ae(e){const{data:t}=await _.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>qe(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Mn(e)),e.querySelectorAll("[data-edit-row]").forEach(n=>{const i=(t||[]).find(d=>d.id===n.dataset.editRow);i&&n.addEventListener("click",()=>qe(i))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await _.from("patch_notes").delete().eq("id",n.dataset.delete),await Ae(e))})})}function Cn(e){const t=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function qe(e){const t=document.getElementById("article-form");t.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img-current").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-img-file").value="";const n=document.getElementById("form-art-img-preview");n.innerHTML=e!=null&&e.image_url?`<img src="${e.image_url}" style="width:100%;height:100%;object-fit:cover">`:'<span style="font-size:20px;opacity:.4">📰</span>',document.getElementById("form-art-img-file").onchange=s=>{var E;const g=(E=s.target.files)==null?void 0:E[0];if(!g)return;const x=new FileReader;x.onload=()=>{n.innerHTML=`<img src="${x.result}" style="width:100%;height:100%;object-fit:cover">`},x.readAsDataURL(g)},document.getElementById("form-art-pub").checked=e?e.is_published:!0;const i=new Date((e==null?void 0:e.published_at)||Date.now()),d=new Date(i.getTime()-i.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=d,t.scrollIntoView({behavior:"smooth"})}async function Tn(e){const t=(e.name.split(".").pop()||"png").toLowerCase(),n=`journal/${Date.now()}.${t}`,{error:i}=await _.storage.from("assets").upload(n,e,{upsert:!0,cacheControl:"3600"});if(i)throw i;const{data:d}=_.storage.from("assets").getPublicUrl(n);return d.publicUrl}async function Mn(e){var u;const t=document.getElementById("form-id").value,n=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),d=((u=document.getElementById("form-art-img-file").files)==null?void 0:u[0])||null,s=document.getElementById("form-art-img-current").value||null,g=document.getElementById("form-art-pub").checked,x=document.getElementById("form-art-date").value,E=document.getElementById("form-save");if(!n){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}let o=s;if(d)try{E&&(E.textContent="📤 Envoi de l'image…"),o=await Tn(d)}catch(c){alert("Erreur upload image : "+c.message),E&&(E.textContent="💾 Enregistrer");return}const l=x?new Date(x).toISOString():new Date().toISOString(),a={title:n,description:i,image_url:o,is_published:g,published_at:l};let r;if(t?{error:r}=await _.from("patch_notes").update(a).eq("id",t):{error:r}=await _.from("patch_notes").insert(a),r){alert("Erreur : "+r.message);return}document.getElementById("article-form").style.display="none",await Ae(e)}async function zn(e){await W(e)}async function W(e){var l,a,r,u,c,f,p,b,L,k,y,I;const{data:t}=await _.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([h,v,$])=>`<button type="button" data-cmd="${v}" title="${$}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${h}</button>`).join("")}
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
            </div>`:(t||[]).map(h=>Rn(h)).join("")}
        </div>
      </div><!-- /colonne droite -->
    </div>`,(l=document.getElementById("ts-add"))==null||l.addEventListener("click",()=>Ge(null,(t==null?void 0:t.length)||0)),(a=document.getElementById("ts-reset"))==null||a.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:h}=await _.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(h?"Erreur : "+h.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(r=document.getElementById("ts-cancel"))==null||r.addEventListener("click",bt),(u=document.getElementById("ts-save"))==null||u.addEventListener("click",()=>jn(e)),(c=document.getElementById("ts-preview-btn"))==null||c.addEventListener("click",Dn);const n=document.getElementById("ts-editor"),i=()=>{const h=document.getElementById("ts-content");h&&n&&(h.value=n.innerHTML)};n==null||n.addEventListener("input",i),n==null||n.addEventListener("blur",i);const d=()=>{document.activeElement!==n&&(n==null||n.focus())};(f=document.getElementById("ts-toolbar"))==null||f.querySelectorAll("[data-cmd]").forEach(h=>{h.addEventListener("mousedown",v=>{v.preventDefault(),d();const $=h.dataset.cmd;$.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,$.split(":")[1]):document.execCommand($,!1,null),i()})}),(p=document.getElementById("ts-insert-color"))==null||p.addEventListener("mousedown",h=>{h.preventDefault(),d();const v=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");v&&(document.execCommand("foreColor",!1,v),i())}),(b=document.getElementById("ts-clear-format"))==null||b.addEventListener("mousedown",h=>{h.preventDefault(),d(),document.execCommand("removeFormat",!1,null),i()}),n==null||n.addEventListener("focus",()=>{n&&(n.style.borderColor="#1A6B3C")}),n==null||n.addEventListener("blur",()=>{n&&(n.style.borderColor="#ddd")});const s=document.getElementById("ts-image"),g=document.getElementById("ts-img-preview"),x=document.getElementById("ts-img-preview-el"),E=document.getElementById("ts-img-picker-grid"),o=()=>{var v;const h=(v=s==null?void 0:s.value)==null?void 0:v.trim();if(h){const $="/";x.src=`${$}icons/${h}`,g.style.display="block"}else g.style.display="none"};s==null||s.addEventListener("input",o),(L=document.getElementById("ts-img-clear"))==null||L.addEventListener("click",()=>{s&&(s.value=""),g.style.display="none",E.style.display="none"}),(k=document.getElementById("ts-img-pick"))==null||k.addEventListener("click",async()=>{if(E.style.display!=="none"){E.style.display="none";return}E.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',E.style.display="block";try{const v=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),$=Array.isArray(v)?v.filter(w=>w.name.startsWith("tuto_")):[];if(!$.length){E.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const m="/";E.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+$.map(w=>`
          <div data-pick="${w.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${m}icons/${w.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${w.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",E.querySelectorAll("[data-pick]").forEach(w=>{w.addEventListener("click",()=>{s&&(s.value=w.dataset.pick),o(),E.style.display="none"})})}catch(h){E.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+h.message+"</div>"}}),(y=document.getElementById("ts-color"))==null||y.addEventListener("input",h=>{const v=document.getElementById("ts-color-hex");v&&(v.value=h.target.value)}),(I=document.getElementById("ts-color-hex"))==null||I.addEventListener("input",h=>{const v=h.target.value;if(/^#[0-9a-fA-F]{6}$/.test(v)){const $=document.getElementById("ts-color");$&&($.value=v)}}),e.querySelectorAll("[data-edit-row]").forEach(h=>{const v=(t||[]).find($=>$.id===h.dataset.editRow);v&&h.addEventListener("click",()=>Ge(v))}),e.querySelectorAll("[data-delete]").forEach(h=>{h.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await _.from("tutorial_steps").delete().eq("id",h.dataset.delete),W(e))})}),e.querySelectorAll("[data-toggle]").forEach(h=>{h.addEventListener("click",async()=>{const v=(t||[]).find($=>$.id===h.dataset.toggle);v&&(await _.from("tutorial_steps").update({is_active:!v.is_active}).eq("id",v.id),W(e))})}),e.querySelectorAll("[data-up]").forEach(h=>{h.addEventListener("click",async()=>{const v=t||[],$=v.findIndex(m=>m.id===h.dataset.up);$<=0||(await Promise.all([_.from("tutorial_steps").update({step_order:v[$-1].step_order}).eq("id",v[$].id),_.from("tutorial_steps").update({step_order:v[$].step_order}).eq("id",v[$-1].id)]),W(e))})}),e.querySelectorAll("[data-down]").forEach(h=>{h.addEventListener("click",async()=>{const v=t||[],$=v.findIndex(m=>m.id===h.dataset.down);$<0||$>=v.length-1||(await Promise.all([_.from("tutorial_steps").update({step_order:v[$+1].step_order}).eq("id",v[$].id),_.from("tutorial_steps").update({step_order:v[$].step_order}).eq("id",v[$+1].id)]),W(e))})})}function Rn(e){return`
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
  </div>`}function Ge(e,t=0){document.getElementById("ts-form-empty").style.display="none",document.getElementById("ts-form-content").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const n=document.getElementById("ts-editor");n&&(n.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??t,document.getElementById("ts-active").checked=e?e.is_active:!0;const i=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=i,document.getElementById("ts-color-hex").value=i;const d=(e==null?void 0:e.image_url)||"",s=document.getElementById("ts-image");s&&(s.value=d);const g=document.getElementById("ts-img-preview"),x=document.getElementById("ts-img-preview-el");if(d&&g&&x){const E="/";x.src=`${E}icons/${d}`,g.style.display="block"}else g&&(g.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function bt(){document.getElementById("ts-form-content").style.display="none",document.getElementById("ts-form-empty").style.display="block",document.getElementById("ts-preview-area").innerHTML=""}function Dn(){var o,l;const e=document.getElementById("ts-emoji").value||"⚽",t=document.getElementById("ts-title").value||"Titre",n=document.getElementById("ts-editor"),i=n?n.innerHTML:document.getElementById("ts-content").value||"",d=document.getElementById("ts-color-hex").value||"#1A6B3C",s=(l=(o=document.getElementById("ts-image"))==null?void 0:o.value)==null?void 0:l.trim(),x=s?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${s}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",E=document.getElementById("ts-preview-area");E.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${d}"></div></div>
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
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${d};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,E.querySelectorAll("ul,ol").forEach(a=>{a.style.paddingLeft="20px",a.style.margin="6px 0"}),E.querySelectorAll("li").forEach(a=>{a.style.marginBottom="4px"}),E.querySelectorAll("p").forEach(a=>{a.style.marginBottom="8px"})}async function jn(e){var a,r;const t=document.getElementById("ts-id").value,n=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),d=document.getElementById("ts-editor"),s=(d?d.innerHTML:document.getElementById("ts-content").value).trim(),g=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",x=parseInt(document.getElementById("ts-order").value)||0,E=document.getElementById("ts-active").checked;if(!i||!s){alert("Titre et contenu sont obligatoires.");return}const o={emoji:n,title:i,content:s,color:g,step_order:x,is_active:E,image_url:((r=(a=document.getElementById("ts-image"))==null?void 0:a.value)==null?void 0:r.trim())||null};let l;if(t?{error:l}=await _.from("tutorial_steps").update(o).eq("id",t):{error:l}=await _.from("tutorial_steps").insert(o),l){alert("Erreur : "+l.message);return}bt(),W(e)}const vt="/",xt=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function Nn(e,t){await ce(e,t)}async function ce(e,t){var d,s;const[{data:n},{data:i}]=await Promise.all([_.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),_.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
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
    </div>`,(d=document.getElementById("st-add-btn"))==null||d.addEventListener("click",()=>Ke(null,i,e,t)),(s=document.getElementById("st-gen-countries-btn"))==null||s.addEventListener("click",async()=>{const{toast:g}=t,x=new Set((n||[]).filter(r=>!r.club_id&&r.country_code).map(r=>r.country_code)),E=xt.filter(([r])=>!x.has(r));if(!E.length){g("Tous les pays ont déjà un stade.","info");return}if(!confirm(`Créer ${E.length} stade(s) "Pays" manquant(s) ?`))return;const o=E.map(([r,u])=>({name:`Stade ${u}`,club_id:null,country_code:r})),{data:l,error:a}=await _.from("stadium_definitions").insert(o).select();if(a){g("Erreur : "+a.message,"error");return}l!=null&&l.length&&await _.from("cards").insert(l.map(r=>({card_type:"stadium",stadium_id:r.id}))),g(`${(l==null?void 0:l.length)||0} stade(s) Pays créé(s) ✅`,"success"),ce(e,t)}),e.querySelectorAll("[data-edit-stadium]").forEach(g=>{g.addEventListener("click",()=>{const x=(n||[]).find(E=>E.id===g.dataset.editStadium);x&&Ke(x,i,e,t)})})}function Pn(e){var d,s;let t=null;e.image_url?t=e.image_url.startsWith("http")?e.image_url:`${vt}icons/${e.image_url}`:(d=e.club)!=null&&d.logo_url?t=e.club.logo_url:e.country_code&&(t=`https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/64.png`);const n=((s=e.club)==null?void 0:s.encoded_name)||e.country_code||"—",i=Xe(e.name,t,`${n}<br>+10 ⭐`,{width:140});return`<div data-edit-stadium="${e.id}" style="cursor:pointer;transition:transform .15s" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
    ${i}
  </div>`}function Ke(e,t,n,i){var l,a,r;const{openModal:d,closeModal:s,toast:g}=i,x=`
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
            ${(t||[]).map(u=>`<option value="${u.id}" data-logo="${u.logo_url||""}" ${(e==null?void 0:e.club_id)===u.id?"selected":""}>${u.encoded_name}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>PAYS (si pas de club)</label>
          <select id="st-country">
            <option value="">— Aucun pays —</option>
            ${xt.map(([u,c])=>`<option value="${u}" ${(e==null?void 0:e.country_code)===u?"selected":""}>${c} (${u})</option>`).join("")}
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
  `;d(e?`Modifier : ${e.name}`:"Nouveau stade",x,`
    <button id="st-cancel" class="btn btn-ghost">Annuler</button>
    <button id="st-save" class="btn btn-primary">Enregistrer</button>
  `);const o=()=>{var v,$,m,w,A,B,S;const u=((v=document.getElementById("st-name"))==null?void 0:v.value)||"NOM DU STADE",c=(m=($=document.getElementById("st-image"))==null?void 0:$.value)==null?void 0:m.trim(),f=(A=(w=document.getElementById("st-country"))==null?void 0:w.value)==null?void 0:A.trim(),p=document.getElementById("st-club"),b=(p==null?void 0:p.selectedIndex)||0,L=p&&b>0?p.options[b].text:"",k=((S=(B=p==null?void 0:p.options[b])==null?void 0:B.getAttribute)==null?void 0:S.call(B,"data-logo"))||"";let y=null;c?y=c.startsWith("http")?c:`${vt}icons/${c}`:k?y=k:f&&(y=`https://flagsapi.com/${f.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`);const I=L||f||"—",h=document.getElementById("st-preview-card");h&&(h.innerHTML=Xe(u,y,`${I}<br>+10 ⭐`,{width:140}))};o(),["st-name","st-club","st-country","st-image"].forEach(u=>{var c,f;(c=document.getElementById(u))==null||c.addEventListener("input",o),(f=document.getElementById(u))==null||f.addEventListener("change",o)}),(l=document.getElementById("st-cancel"))==null||l.addEventListener("click",()=>s()),(a=document.getElementById("st-save"))==null||a.addEventListener("click",async()=>{const u=document.getElementById("st-name").value.trim(),c=document.getElementById("st-club").value||null,f=document.getElementById("st-country").value.trim().toUpperCase()||null,p=document.getElementById("st-image").value.trim()||null;if(!u){g("Le nom est obligatoire","error");return}const b={name:u,club_id:c,country_code:f,image_url:p},{error:L}=e?await _.from("stadium_definitions").update(b).eq("id",e.id):await _.from("stadium_definitions").insert(b);if(L){g("Erreur : "+L.message,"error");return}g(e?"Stade modifié ✅":"Stade créé ✅","success"),s(),ce(n,i)}),(r=document.getElementById("st-delete"))==null||r.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await _.from("stadium_definitions").delete().eq("id",e.id),g("Stade supprimé","success"),s(),ce(n,i))})}const G=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],Fn=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}],q=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],Je=["GK","DEF","MIL","ATT"];async function On(e,t){await Be(e,t)}async function Be(e,t){var i;const{data:n}=await _.from("gc_definitions").select("*").order("sort_order").order("created_at");e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">⚡ Game Changers</h2>
        <button id="gc-add-btn" class="btn btn-primary">+ Nouvelle carte</button>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="gc-list">
        ${(n||[]).length?(n||[]).map(d=>Un(d)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucune carte Game Changer.</div>'}
      </div>
    </div>`,(i=document.getElementById("gc-add-btn"))==null||i.addEventListener("click",()=>Ve(null,e,t)),e.querySelectorAll("[data-edit-gc]").forEach(d=>{d.addEventListener("click",()=>{const s=(n||[]).find(g=>g.id===d.dataset.editGc);s&&Ve(s,e,t)})}),e.querySelectorAll(".btn-del-gc").forEach(d=>{d.addEventListener("click",async s=>{s.stopPropagation(),confirm("Supprimer cette carte Game Changer ?")&&(await _.from("gc_definitions").delete().eq("id",d.dataset.del),Be(e,t))})})}function Un(e){const t=G.find(d=>d.value===e.gc_type)||G[0],n=e.image_url?`/icons/${e.image_url}`:null,i=be(e.name||"?",n,t.label.split(" ")[0],e.effect||"",{width:130});return`<div data-edit-gc="${e.id}" style="position:relative;cursor:pointer">
    ${i}
    <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
      <button class="btn-del-gc" data-del="${e.id}"
        style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0">✕</button>
    </div>
    ${e.is_active?"":'<div style="position:absolute;top:4px;right:4px;z-index:10;background:#555;color:#fff;font-size:9px;font-weight:700;padding:2px 6px;border-radius:8px">INACTIF</div>'}
  </div>`}function Ve(e,t,n){var r,u,c,f;const{openModal:i,closeModal:d,toast:s}=n,g=!e,x=e||{name:"",gc_type:"game_changer",color:"purple",effect:"",image_url:"",sort_order:0,is_active:!0,effect_type:"BOOST_STAT",effect_params:{}},E=(()=>{const p=x.effect_params||{},b=q.find(L=>L.value===(x.effect_type||"BOOST_STAT"))||q[0];return`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${b.hasValue?`<div>
        <label>VALEUR (+N)</label>
        <input id="gc-p-value" type="number" min="1" max="5" value="${p.value||2}">
      </div>`:""}
      ${b.hasCount?`<div>
        <label>NB JOUEURS</label>
        <input id="gc-p-count" type="number" min="1" max="11" value="${p.count||1}">
      </div>`:""}
      ${b.hasTarget?`<div>
        <label>CIBLE</label>
        <select id="gc-p-target">
          <option value="home" ${(p.target||"home")==="home"?"selected":""}>Mon équipe</option>
          <option value="opponent" ${p.target==="opponent"?"selected":""}>Équipe adverse</option>
        </select>
      </div>`:""}
      ${b.hasRoles?`<div>
        <label>POSTES CIBLÉS</label>
        <div style="display:flex;gap:4px;flex-wrap:wrap">
          ${Je.map(L=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555">
            <input type="checkbox" class="gc-p-role" value="${L}" ${!p.roles||p.roles.includes(L)?"checked":""}> ${L}
          </label>`).join("")}
        </div>
      </div>`:""}
    </div>`})(),o=`
    <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:#1a1a2e;border-radius:12px">
      <div id="gc-modal-preview">${be(x.name||"?",x.image_url?`/icons/${x.image_url}`:null,(G.find(p=>p.value===x.gc_type)||G[0]).label.split(" ")[0],x.effect||"",{width:150})}</div>
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
            ${G.map(p=>`<option value="${p.value}" ${x.gc_type===p.value?"selected":""}>${p.label}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>COULEUR</label>
          <select id="gc-color">
            ${Fn.map(p=>`<option value="${p.value}" ${x.color===p.value?"selected":""}>${p.label}</option>`).join("")}
          </select>
        </div>
      </div>
      <div>
        <label>IMAGE (public/icons/gamechanger-*)</label>
        <div style="display:flex;gap:8px;align-items:center">
          <input id="gc-image-url" value="${x.image_url||""}" placeholder="gamechanger-nom.png" style="flex:1">
          <button id="btn-pick-gc-icon" class="btn btn-primary btn-sm" style="white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
        </div>
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
            ${q.map(p=>`<option value="${p.value}" ${(x.effect_type||"BOOST_STAT")===p.value?"selected":""}>${p.label}</option>`).join("")}
          </select>
        </div>
        <div id="gc-params-wrap">${E}</div>
      </div>
    </div>
  `;i(g?"Nouvelle carte Game Changer":`Modifier : ${x.name}`,o,`
    <button id="gc-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gc-save" class="btn btn-primary">💾 Enregistrer</button>
  `);const a=()=>{var h,v,$,m,w;const p=((h=document.getElementById("gc-name"))==null?void 0:h.value)||"?",b=((v=document.getElementById("gc-effect"))==null?void 0:v.value)||"",L=(($=document.getElementById("gc-type"))==null?void 0:$.value)||"game_changer",k=(w=(m=document.getElementById("gc-image-url"))==null?void 0:m.value)==null?void 0:w.trim(),y=G.find(A=>A.value===L)||G[0],I=document.getElementById("gc-modal-preview");I&&(I.innerHTML=be(p,k?`/icons/${k}`:null,y.label.split(" ")[0],b,{width:150}))};["gc-name","gc-effect","gc-type","gc-image-url"].forEach(p=>{var b,L;(b=document.getElementById(p))==null||b.addEventListener("input",a),(L=document.getElementById(p))==null||L.addEventListener("change",a)}),(r=document.getElementById("gc-effect-type"))==null||r.addEventListener("change",()=>{const p=document.getElementById("gc-effect-type").value,b=q.find(k=>k.value===p)||q[0],L=document.getElementById("gc-params-wrap");L.innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${b.hasValue?'<div><label>VALEUR (+N)</label><input id="gc-p-value" type="number" min="1" max="5" value="2"></div>':""}
      ${b.hasCount?'<div><label>NB JOUEURS</label><input id="gc-p-count" type="number" min="1" max="11" value="1"></div>':""}
      ${b.hasTarget?'<div><label>CIBLE</label><select id="gc-p-target"><option value="home">Mon équipe</option><option value="opponent">Équipe adverse</option></select></div>':""}
      ${b.hasRoles?`<div><label>POSTES CIBLÉS</label><div style="display:flex;gap:4px;flex-wrap:wrap">${Je.map(k=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555"><input type="checkbox" class="gc-p-role" value="${k}" checked> ${k}</label>`).join("")}</div></div>`:""}
    </div>`}),(u=document.getElementById("btn-pick-gc-icon"))==null||u.addEventListener("click",async()=>{var b;const p=document.getElementById("gc-icon-picker");if(p){if(p.style.display!=="none"){p.style.display="none";return}p.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',p.style.display="block";try{const k=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),y=Array.isArray(k)?k.filter(h=>h.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(h.name)):[];if(!y.length){p.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const I=((b=document.getElementById("gc-image-url"))==null?void 0:b.value)||"";p.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
        ${y.map(h=>`
        <div class="gc-icon-item" data-name="${h.name}"
          style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${h.name===I?"#7a28b8":"#ddd"};background:${h.name===I?"#f5f0ff":"#fff"}">
          <img src="/icons/${h.name}" style="height:44px;width:100%;object-fit:contain">
          <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${h.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
        </div>`).join("")}
      </div>`,p.querySelectorAll(".gc-icon-item").forEach(h=>{h.addEventListener("click",()=>{const v=document.getElementById("gc-image-url");v&&(v.value=h.dataset.name),p.style.display="none",a()})})}catch(L){p.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${L.message}</div>`}}}),(c=document.getElementById("gc-cancel"))==null||c.addEventListener("click",()=>d()),(f=document.getElementById("gc-save"))==null||f.addEventListener("click",async()=>{var I,h,v,$,m,w,A,B,S,C,T,O,U,H;const p=q.find(P=>{var j;return P.value===(((j=document.getElementById("gc-effect-type"))==null?void 0:j.value)||"BOOST_STAT")})||q[0],b=p.hasRoles?[...document.querySelectorAll(".gc-p-role:checked")].map(P=>P.value):null,L={...p.hasValue?{value:Number((I=document.getElementById("gc-p-value"))==null?void 0:I.value)||2}:{},...p.hasCount?{count:Number((h=document.getElementById("gc-p-count"))==null?void 0:h.value)||1}:{},...p.hasTarget?{target:((v=document.getElementById("gc-p-target"))==null?void 0:v.value)||"home"}:{},...p.hasRoles?{roles:b!=null&&b.length?b:null}:{}},k={name:((m=($=document.getElementById("gc-name"))==null?void 0:$.value)==null?void 0:m.trim())||"",effect:((A=(w=document.getElementById("gc-effect"))==null?void 0:w.value)==null?void 0:A.trim())||null,image_url:((S=(B=document.getElementById("gc-image-url"))==null?void 0:B.value)==null?void 0:S.trim())||null,gc_type:((C=document.getElementById("gc-type"))==null?void 0:C.value)||"game_changer",color:((T=document.getElementById("gc-color"))==null?void 0:T.value)||"purple",sort_order:Number((O=document.getElementById("gc-sort"))==null?void 0:O.value)||0,is_active:((U=document.getElementById("gc-active"))==null?void 0:U.checked)??!0,effect_type:((H=document.getElementById("gc-effect-type"))==null?void 0:H.value)||"BOOST_STAT",effect_params:L};if(!k.name){s("Le nom est obligatoire","error");return}const{error:y}=g?await _.from("gc_definitions").insert(k):await _.from("gc_definitions").update(k).eq("id",x.id);if(y){s(y.message,"error");return}s(g?"Carte créée ✅":"Carte modifiée ✅","success"),d(),Be(t,n)})}async function Hn(e,{toast:t,openModal:n,closeModal:i}){await z(e,{toast:t,openModal:n,closeModal:i})}async function z(e,t){var h,v,$;const{toast:n,openModal:i,closeModal:d}=t,[{data:s,error:g},{data:x},{data:E},{data:o}]=await Promise.all([_.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),_.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1),_.from("season_reward_tiers").select("*").order("rank_min"),_.from("booster_configs").select("id,name").order("sort_order")]);if(g){e.innerHTML=`<p style="color:red">${g.message}</p>`;return}const l=s||[],a=l.find(m=>m.is_active),r=(x||[]).filter(m=>(m.placement_matches||0)>=1),u=r.filter(m=>(m.placement_matches||0)>=10),c=["bronze","silver","gold","platinum","diamond","master"],f={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},p={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},b={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},L={};c.forEach(m=>{L[m]=0}),u.forEach(m=>{const w=m.rank_tier||"bronze";L[w]!==void 0&&L[w]++});const k=u.length?Math.round(u.reduce((m,w)=>m+(w.mmr||1e3),0)/u.length):0;function y(m){return m?new Date(m).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function I(m){const w=new Date;return m.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(m.end_at)<w?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${a?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${a.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${r.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Joueurs ranked</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${u.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Classés (10+ matchs)</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${k}</div>
            <div style="font-size:11px;color:var(--gray-600)">MMR moyen</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(a.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${u.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${c.map(m=>{const w=L[m],A=u.length>0?Math.round(w/u.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${b[m]} ${f[m]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${A}%;background:${p[m]};border-radius:4px;transition:width 0.5s"></div>
                </div>
                <span style="width:40px;text-align:right;color:var(--gray-600)">${w} (${A}%)</span>
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
              ${l.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':l.map(m=>{const w=Math.round((new Date(m.end_at)-new Date(m.start_at))/864e5),A=new Date(m.end_at)<new Date&&!m.is_active;return`
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
              ${(E||[]).map(m=>{var B;const w=!m.activate_at||new Date(m.activate_at)<=new Date;return`<tr>
                  <td style="font-size:12px">${((B=l.find(S=>S.id===m.season_id))==null?void 0:B.name)||"—"}</td>
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
    </div>`,(h=document.getElementById("create-season-btn"))==null||h.addEventListener("click",()=>{Ye(null,{toast:n,openModal:i,closeModal:d,reload:()=>z(e,t)})}),(v=document.getElementById("start-new-season-btn"))==null||v.addEventListener("click",()=>{qn(a,{toast:n,openModal:i,closeModal:d,reload:()=>z(e,t)})}),e.querySelectorAll("[data-edit]").forEach(m=>{const w=l.find(A=>A.id==m.dataset.edit);m.addEventListener("click",()=>{Ye(w,{toast:n,openModal:i,closeModal:d,reload:()=>z(e,t)})})}),e.querySelectorAll("[data-activate]").forEach(m=>{m.addEventListener("click",async()=>{const w=parseInt(m.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:A}=await _.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(A){n(A.message,"error");return}const{error:B}=await _.from("ranked_seasons").update({is_active:!0}).eq("id",w);if(B){n(B.message,"error");return}await _.from("users").update({current_season_id:w}).gt("placement_matches",0),n("Saison activée ✅","success"),z(e,t)})}),e.querySelectorAll("[data-rewards-for]").forEach(m=>{m.addEventListener("click",()=>{var B;const w=parseInt(m.dataset.rewardsFor);(B=document.getElementById("rewards-section"))==null||B.scrollIntoView({behavior:"smooth",block:"start"});const A=l.find(S=>S.id===w);ye(null,l,A,o||[],{toast:n,openModal:i,closeModal:d,reload:()=>z(e,t)})})}),e.querySelectorAll("[data-launch]").forEach(m=>{m.addEventListener("click",async()=>{const w=parseInt(m.dataset.launch),A=l.find(C=>C.id===w);if(!confirm(`Lancer "${A==null?void 0:A.name}" ?

Ceci va :
• Journaliser le classement actuel dans l'historique
• Recalculer le MMR de TOUS les joueurs (reset doux)
• Activer cette saison

Action irréversible. Continuer ?`))return;m.disabled=!0,m.textContent="⏳ Lancement...";const{data:B,error:S}=await _.rpc("admin_launch_season",{p_season_id:w});if(m.disabled=!1,m.textContent="▶ Lancer la saison",S){n(S.message,"error");return}if(!(B!=null&&B.success)){n((B==null?void 0:B.error)||"Échec du lancement","error");return}n(`Saison lancée ✅ (${B.logged} classement(s) archivé(s), ${B.reset} joueur(s) recalculé(s))`,"success"),z(e,t)})}),e.querySelectorAll("[data-deactivate]").forEach(m=>{m.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:w}=await _.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(m.dataset.deactivate));if(w){n(w.message,"error");return}n("Saison désactivée","success"),z(e,t)})}),e.querySelectorAll("[data-delete]").forEach(m=>{m.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:w}=await _.from("ranked_seasons").delete().eq("id",parseInt(m.dataset.delete));if(w){n(w.message,"error");return}n("Saison supprimée","success"),z(e,t)})}),($=document.getElementById("add-reward-tier-btn"))==null||$.addEventListener("click",()=>{ye(null,l,a,o||[],{toast:n,openModal:i,closeModal:d,reload:()=>z(e,t)})}),e.querySelectorAll("[data-edit-tier]").forEach(m=>{const w=(E||[]).find(A=>A.id===m.dataset.editTier);m.addEventListener("click",()=>{ye(w,l,a,o||[],{toast:n,openModal:i,closeModal:d,reload:()=>z(e,t)})})}),e.querySelectorAll("[data-distribute-tier]").forEach(m=>{m.addEventListener("click",async()=>{const w=(E||[]).find(S=>S.id===m.dataset.distributeTier);if(!confirm(`Distribuer les récompenses du palier "${w==null?void 0:w.label}" à tous les joueurs concernés ?`))return;m.disabled=!0,m.textContent="⏳...";const{data:A,error:B}=await _.rpc("admin_distribute_season_reward",{p_tier_id:m.dataset.distributeTier});if(B){n(B.message,"error"),m.disabled=!1,m.textContent="🎁 Distribuer";return}if(!(A!=null&&A.success)){n((A==null?void 0:A.error)||"Échec de la distribution","error"),m.disabled=!1,m.textContent="🎁 Distribuer";return}n(`Récompenses distribuées à ${A.rewarded} joueur(s) ✅`,"success"),z(e,t)})}),e.querySelectorAll("[data-delete-tier]").forEach(m=>{m.addEventListener("click",async()=>{if(!confirm("Supprimer ce palier de récompense ?"))return;const{error:w}=await _.from("season_reward_tiers").delete().eq("id",m.dataset.deleteTier);if(w){n(w.message,"error");return}n("Palier supprimé","success"),z(e,t)})})}function ye(e,t,n,i,{toast:d,openModal:s,closeModal:g,reload:x}){var f,p,b,L,k;const E=!!e,o=(e==null?void 0:e.season_id)??(n==null?void 0:n.id)??((f=t[0])==null?void 0:f.id)??null;let l=[];const a=y=>{if(!y)return"";const I=new Date(y);return new Date(I.getTime()-I.getTimezoneOffset()*6e4).toISOString().slice(0,16)},r=`
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
        <input id="rt-activate-at" type="datetime-local" value="${a(e==null?void 0:e.activate_at)}">
      </div>
      <div>
        <label>BOOSTERS OFFERTS</label>
        <div style="display:flex;flex-direction:column;gap:6px;max-height:140px;overflow-y:auto;background:#f7f7f7;border-radius:8px;padding:8px">
          ${i.length?i.map(y=>`
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
  `;s(E?`Modifier : ${e.label}`:"Nouveau palier de récompense",r,`
    <button id="rt-cancel" class="btn btn-ghost">Annuler</button>
    <button id="rt-save" class="btn btn-primary">💾 Enregistrer</button>
  `);function c(){const y=document.getElementById("rt-player-chips");y&&(y.innerHTML=l.map(I=>`
      <span style="display:inline-flex;align-items:center;gap:6px;background:#1A6B3C;color:#fff;font-size:12px;font-weight:700;padding:4px 8px;border-radius:14px">
        ${I.label}
        <button data-remove-player="${I.id}" style="background:none;border:none;color:#fff;cursor:pointer;font-size:12px;padding:0">✕</button>
      </span>`).join(""),y.querySelectorAll("[data-remove-player]").forEach(I=>{I.addEventListener("click",()=>{l=l.filter(h=>h.id!==I.dataset.removePlayer),c()})}))}(p=e==null?void 0:e.player_ids)!=null&&p.length&&_.from("players").select("id,firstname,surname_real").in("id",e.player_ids).then(({data:y})=>{l=(y||[]).map(I=>({id:I.id,label:`${I.firstname} ${I.surname_real}`})),c()}),(b=document.getElementById("rt-player-search-btn"))==null||b.addEventListener("click",async()=>{const y=document.getElementById("rt-player-search").value.trim();if(y.length<2)return;const{data:I}=await _.from("players").select("id,firstname,surname_real,rarity").or(`firstname.ilike.%${y}%,surname_real.ilike.%${y}%`).limit(10),h=document.getElementById("rt-player-results");if(!(I!=null&&I.length)){h.style.display="flex",h.innerHTML='<div style="color:#999;font-size:12px;padding:4px">Aucun résultat.</div>';return}h.style.display="flex",h.innerHTML=I.map(v=>`
      <div data-add-player="${v.id}" data-label="${v.firstname} ${v.surname_real}" style="cursor:pointer;padding:6px 8px;border-radius:6px;font-size:13px;color:#333" onmouseover="this.style.background='#eee'" onmouseout="this.style.background=''">
        ${v.firstname} ${v.surname_real} <span style="color:#999;font-size:11px">(${v.rarity})</span>
      </div>`).join(""),h.querySelectorAll("[data-add-player]").forEach(v=>{v.addEventListener("click",()=>{const $=v.dataset.addPlayer;l.some(m=>m.id===$)||l.push({id:$,label:v.dataset.label}),c(),h.style.display="none",document.getElementById("rt-player-search").value=""})})}),(L=document.getElementById("rt-cancel"))==null||L.addEventListener("click",()=>g()),(k=document.getElementById("rt-save"))==null||k.addEventListener("click",async()=>{const y=document.getElementById("rt-error"),I=parseInt(document.getElementById("rt-season").value),h=document.getElementById("rt-label").value.trim(),v=parseInt(document.getElementById("rt-rank-min").value)||1,$=parseInt(document.getElementById("rt-rank-max").value)||1,m=parseInt(document.getElementById("rt-credits").value)||0,w=document.getElementById("rt-activate-at").value,A=w?new Date(w).toISOString():null,B=[...document.querySelectorAll(".rt-booster-cb:checked")].map(T=>T.value);if(!h){y.textContent="Le libellé est obligatoire.";return}if(v>$){y.textContent="Le classement min doit être ≤ au max.";return}if(!I){y.textContent="Choisis une saison.";return}const S={season_id:I,label:h,rank_min:v,rank_max:$,credits:m,booster_config_ids:B,player_ids:l.map(T=>T.id),activate_at:A},{error:C}=E?await _.from("season_reward_tiers").update(S).eq("id",e.id):await _.from("season_reward_tiers").insert(S);if(C){y.textContent=C.message;return}d(E?"Palier modifié ✅":"Palier créé ✅","success"),g(),x()})}function qn(e,{toast:t,openModal:n,closeModal:i,reload:d}){var l,a;const s=new Date,g=new Date(s.getTime()+30*864e5),x=r=>r.toISOString().slice(0,10),E=`
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
  `;n("Démarrer une nouvelle saison",E,`
    <button id="sns-cancel" class="btn btn-ghost">Annuler</button>
    <button id="sns-launch" class="btn btn-primary">🚀 Démarrer la saison</button>
  `),(l=document.getElementById("sns-cancel"))==null||l.addEventListener("click",()=>i()),(a=document.getElementById("sns-launch"))==null||a.addEventListener("click",async()=>{const r=document.getElementById("sns-error"),u=document.getElementById("sns-name").value.trim(),c=document.getElementById("sns-start").value,f=document.getElementById("sns-end").value,p=document.getElementById("sns-confirm").checked;if(!u){r.textContent="Le nom de la saison est requis.";return}if(!c||!f){r.textContent="Les deux dates sont requises.";return}if(new Date(c)>=new Date(f)){r.textContent="La date de fin doit être après la date de début.";return}if(!p){r.textContent="Coche la case de confirmation pour continuer.";return}const b=document.getElementById("sns-launch");b.disabled=!0,b.textContent="⏳ Recalcul en cours...";const{data:L,error:k}=await _.rpc("admin_start_new_season",{p_name:u,p_start_at:new Date(c).toISOString(),p_end_at:new Date(f).toISOString()});if(b.disabled=!1,b.textContent="🚀 Démarrer la saison",k){r.textContent=k.message;return}if(!(L!=null&&L.success)){r.textContent=(L==null?void 0:L.error)||"Échec de l'opération.";return}t(`Nouvelle saison démarrée ✅ (${L.users_reset} joueur(s) recalculé(s))`,"success"),i(),d()})}function Ye(e,{toast:t,openModal:n,closeModal:i,reload:d}){const s=!!e,g=new Date().toISOString().slice(0,16),x=new Date(Date.now()+90*864e5).toISOString().slice(0,16),E=e?new Date(e.start_at).toISOString().slice(0,16):g,o=e?new Date(e.end_at).toISOString().slice(0,16):x,l=(e==null?void 0:e.name)||"";n(s?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group">
        <label>Nom de la saison *</label>
        <input id="season-name" type="text" value="${l}" placeholder="ex: Saison 2 — Été 2026" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de début *</label>
        <input id="season-start" type="datetime-local" value="${E}" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de fin *</label>
        <input id="season-end" type="datetime-local" value="${o}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${s?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function a(){var p,b;const r=(p=document.getElementById("season-start"))==null?void 0:p.value,u=(b=document.getElementById("season-end"))==null?void 0:b.value,c=document.getElementById("season-duration");if(!r||!u||!c)return;const f=Math.round((new Date(u)-new Date(r))/864e5);c.textContent=f>0?`Durée : ${f} jour${f>1?"s":""}`:"⚠️ La fin doit être après le début",c.style.color=f>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var r,u,c;(r=document.getElementById("season-start"))==null||r.addEventListener("input",a),(u=document.getElementById("season-end"))==null||u.addEventListener("input",a),a(),(c=document.getElementById("season-save-btn"))==null||c.addEventListener("click",async()=>{var h,v,$;const f=(h=document.getElementById("season-name"))==null?void 0:h.value.trim(),p=(v=document.getElementById("season-start"))==null?void 0:v.value,b=($=document.getElementById("season-end"))==null?void 0:$.value,L=document.getElementById("season-error");if(!f){L.textContent="Le nom est requis.";return}if(!p){L.textContent="La date de début est requise.";return}if(!b){L.textContent="La date de fin est requise.";return}if(new Date(b)<=new Date(p)){L.textContent="La date de fin doit être après le début.";return}const k=document.getElementById("season-save-btn");k.disabled=!0,k.textContent="Enregistrement…";const y={name:f,start_at:new Date(p).toISOString(),end_at:new Date(b).toISOString()};let I;if(s?{error:I}=await _.from("ranked_seasons").update(y).eq("id",e.id):{error:I}=await _.from("ranked_seasons").insert({...y,is_active:!1}),I){L.textContent=I.message,k.disabled=!1,k.textContent=s?"💾 Enregistrer":"✅ Créer la saison";return}t(s?"Saison modifiée ✅":"Saison créée ✅","success"),i(),d()})},50)}async function he(e,t){var E;const{toast:n}=t,{data:i,error:d}=await _.from("solo_levels").select("*").order("level_number");if(d){e.innerHTML=`<p style="color:var(--danger)">${d.message}</p>`;return}const s=o=>`
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
  `;function g(){document.querySelectorAll("#solo-tbody [data-field]").forEach(o=>{o.addEventListener("change",()=>x(o))})}async function x(o){const l=o.dataset.id,a=o.dataset.field,r=a==="is_active"?o.checked:Number(o.value)||0,{error:u}=await _.from("solo_levels").update({[a]:r}).eq("id",l);if(u){n(u.message,"error");return}o.style.transition="background .3s",o.style.background="#e8f8ee",setTimeout(()=>{o.style.background=""},500)}g(),document.querySelectorAll("[data-del-row]").forEach(o=>{o.addEventListener("click",async()=>{confirm("Supprimer ce niveau ? Les joueurs ayant progressé au-delà seront affectés.")&&(await _.from("solo_levels").delete().eq("id",o.dataset.delRow),n("Niveau supprimé","success"),he(e,t))})}),(E=document.getElementById("solo-add-row"))==null||E.addEventListener("click",async()=>{const l={level_number:Math.max(0,...(i||[]).map(u=>u.level_number))+1,target_note_avg:10,nb_liens_jaune:2,nb_liens_vert:1,nb_joueurs_stade:2,reward_credits:500,is_active:!0},{data:a,error:r}=await _.from("solo_levels").insert(l).select().single();if(r){n(r.message,"error");return}n("Niveau ajouté — modifie les valeurs directement","success"),he(e,t)})}Nt(Qe);function Gn(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function Kn(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function Ee(){document.getElementById("modal-overlay").classList.add("hidden")}const We={dashboard:{title:"Dashboard",fn:et},players:{title:"Joueurs & Cartes",fn:Ut},clubs:{title:"Clubs",fn:en},"card-builder":{title:"Card Builder",fn:pn},users:{title:"Managers",fn:gt},market:{title:"Mercato",fn:ft},"import-export":{title:"Import / Export CSV",fn:hn},formations:{title:"Formations & Liens",fn:_n},"boosters-config":{title:"Boosters",fn:kn},"sell-price":{title:"Prix vente directe",fn:Ln},journal:{title:"Actualités",fn:Sn},tutorial:{title:"Tutoriel",fn:zn},stadiums:{title:"Stades",fn:Nn},"gc-cards":{title:"Game Changers",fn:On},"ranked-seasons":{title:"Saisons Ranked",fn:Hn},"solo-mode":{title:"Solo Mode",fn:he}};async function ue(e){document.querySelectorAll(".admin-sidebar nav a").forEach(d=>{d.classList.toggle("active",d.dataset.page===e)});const t=document.getElementById("mobile-page-select");t&&(t.value=e);const n=We[e]||We.dashboard;document.getElementById("page-title").textContent=n.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(i,{toast:Gn,openModal:Kn,closeModal:Ee,navigate:ue})}catch(d){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${d.message}</div>`,console.error(d)}}async function Jn(){var t;const{data:{session:e}}=await _.auth.getSession();e&&await Ze(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,d=document.getElementById("auth-error");if(d.textContent="",!n||!i){d.textContent="Remplissez tous les champs.";return}const{data:s,error:g}=await _.auth.signInWithPassword({email:n,password:i});if(g){d.textContent=g.message;return}await Ze(s.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await _.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",Ee),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&Ee()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",i=>{i.preventDefault(),ue(n.dataset.page)})}),(t=document.getElementById("mobile-page-select"))==null||t.addEventListener("change",n=>{ue(n.target.value)})}async function Ze(e){const{data:t,error:n}=await _.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(n||!t){i.textContent="Profil introuvable.";return}if(!t.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await _.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,ue("dashboard")}Jn();
