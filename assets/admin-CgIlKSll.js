import{s as _,i as Et,r as Ee,a as _e,A as _t,l as wt,g as It,K as Me,D as z,b as $t,S as kt,c as R,H as Lt,R as Bt,e as ue,d as Qe,f as At,h as St,E as Ct,j as Tt,N as Mt,M as zt,B as Rt,k as Dt,F as ge,m as ze,n as jt,o as Xe,p as ye,q as Nt}from"./special-cards-Deqf4LjR.js";async function et(e){var o;const[{count:t},{count:n},{count:i},{count:d},{count:l},{data:m},{data:x}]=await Promise.all([_.from("players").select("*",{count:"exact",head:!0}),_.from("clubs").select("*",{count:"exact",head:!0}),_.from("users").select("*",{count:"exact",head:!0}),_.from("stadium_definitions").select("*",{count:"exact",head:!0}),_.from("users").select("*",{count:"exact",head:!0}).gt("last_seen_at",new Date(Date.now()-18e4).toISOString()),_.rpc("get_signup_password"),_.from("app_feature_flags").select("*").order("key")]),E=m||"";e.innerHTML=`
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
        ${(x||[]).map(s=>`
          <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-radius:10px;background:var(--tile-bg);border:1px solid var(--tile-border)">
            <div>
              <div style="font-weight:700;font-size:14px;color:var(--tile-fg-on-page)">${s.label}</div>
              <div style="font-size:11px;color:var(--tile-fg-dim)">${s.enabled?"✅ Activé":"⛔ Désactivé"}</div>
            </div>
            <button class="feature-flag-toggle" data-key="${s.key}" data-enabled="${s.enabled}"
              style="width:52px;height:28px;border-radius:20px;border:none;cursor:pointer;position:relative;background:${s.enabled?"#1A6B3C":"#555"};transition:background .2s">
              <span style="position:absolute;top:3px;left:${s.enabled?"27px":"3px"};width:22px;height:22px;border-radius:50%;background:#fff;transition:left .2s"></span>
            </button>
          </div>
        `).join("")||'<div style="font-size:12px;color:var(--tile-fg-dim)">Aucun mode configuré — lance la migration correspondante.</div>'}
      </div>
    </div>
  `,window.adminNav=s=>{var a;(a=document.querySelector(`[data-page="${s}"]`))==null||a.click()},e.querySelectorAll(".feature-flag-toggle").forEach(s=>{s.addEventListener("click",async()=>{const a=s.dataset.key,r=s.dataset.enabled!=="true";s.disabled=!0;const{error:p}=await _.from("app_feature_flags").update({enabled:r,updated_at:new Date().toISOString()}).eq("key",a);if(s.disabled=!1,p){alert(p.message);return}Et(),et(e)})}),(o=document.getElementById("signup-pwd-save"))==null||o.addEventListener("click",async()=>{const s=document.getElementById("signup-pwd-input").value.trim(),a=document.getElementById("signup-pwd-status");if(!s){a.textContent="Le code ne peut pas être vide.",a.style.color="#ff6b6b";return}const r=document.getElementById("signup-pwd-save");r.disabled=!0,r.textContent="⏳...";const{error:p}=await _.rpc("set_signup_password",{new_password:s});if(r.disabled=!1,r.textContent="💾 Enregistrer",p){a.textContent=p.message,a.style.color="#ff6b6b";return}a.textContent="✅ Code mis à jour.",a.style.color="#2ecc71"})}const tt={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},Pt={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Ft(){const e={};for(const t of _t)e[t]=await wt(t);return e}async function Ot(e,t){const{toast:n}=t;if(!confirm(`Réattribuer une nouvelle photo à tous les joueurs ayant encore l'ancien format de chemin (public/faces/...) ?

Cette action est irréversible.`))return;const i=document.getElementById("fix-old-faces-btn");i&&(i.disabled=!0,i.textContent="⏳ En cours...");try{const{data:d,error:l}=await _.from("players").select("id, country_code, face").like("face","public/faces/%");if(l){n(l.message,"error");return}if(!(d!=null&&d.length)){n("Aucun joueur avec l'ancien format — rien à faire ✅","success");return}const{data:m}=await _.from("players").select("face").not("face","is",null),x=new Set((m||[]).map(s=>s.face).filter(s=>s&&!s.startsWith("public/faces/")));let E=0,o=0;for(const s of d){const a=await _e(s.country_code,x);if(!a){o++;continue}const{error:r}=await _.from("players").update({face:a}).eq("id",s.id);if(r){o++;continue}x.add(a),E++}n(`${E} photo(s) réattribuée(s)${o?`, ${o} échec(s)`:""} ✅`,o?"error":"success")}finally{i&&(i.disabled=!1,i.textContent="🖼️ Réattribuer anciennes photos")}}async function Ut(e,t){await se(e,t)}async function se(e,t,n=null){var o,s,a,r,p;const{toast:i}=t;n||(n={search:((o=document.getElementById("search-players"))==null?void 0:o.value)||"",job:((s=document.getElementById("filter-job"))==null?void 0:s.value)||"",rarity:((a=document.getElementById("filter-rarity"))==null?void 0:a.value)||"",club:((r=document.getElementById("filter-club"))==null?void 0:r.value)||"",country:((p=document.getElementById("filter-country"))==null?void 0:p.value)||""});const[{data:d,error:l},{data:m}]=await Promise.all([_.from("players").select("*, clubs(id,encoded_name,logo_url)"),_.from("clubs").select("id,encoded_name").order("encoded_name")]);if(l){e.innerHTML=`<p style="color:red">${l.message}</p>`;return}const x={GK:0,DEF:1,MIL:2,ATT:3},E=(d||[]).sort((c,g)=>{const u=(x[c.job]??4)-(x[g.job]??4);return u!==0?u:(c.surname_real||"").localeCompare(g.surname_real||"")});Ht(e,E,m||[],t,n)}function Ht(e,t,n,i,d=null){var s,a;const{toast:l}=i;if(e.innerHTML=`
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
          ${Object.entries(tt).map(([r,p])=>`<option value="${r}">${p}</option>`).join("")}
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
    </div>`,d){const r=d,p=c=>document.getElementById(c);r.search&&p("search-players")&&(p("search-players").value=r.search),r.job&&p("filter-job")&&(p("filter-job").value=r.job),r.rarity&&p("filter-rarity")&&(p("filter-rarity").value=r.rarity),r.club&&p("filter-club")&&(p("filter-club").value=r.club),r.country&&p("filter-country")&&(p("filter-country").value=r.country)}if(d){const r=d,p=c=>document.getElementById(c);r.search&&p("search-players")&&(p("search-players").value=r.search),r.job&&p("filter-job")&&(p("filter-job").value=r.job),r.rarity&&p("filter-rarity")&&(p("filter-rarity").value=r.rarity),r.club&&p("filter-club")&&(p("filter-club").value=r.club),r.country&&p("filter-country")&&(p("filter-country").value=r.country)}function m(){const r=document.getElementById("search-players").value.toLowerCase(),p=document.getElementById("filter-job").value,c=document.getElementById("filter-rarity").value,g=document.getElementById("filter-club").value,u=document.getElementById("filter-country").value;return t.filter(b=>(!r||`${b.firstname} ${b.surname_real}`.toLowerCase().includes(r))&&(!p||b.job===p)&&(!c||b.rarity===c)&&(!g||b.club_id===g)&&(!u||b.country_code===u))}const x=new Set;function E(){const r=document.getElementById("bulk-bar"),p=document.getElementById("bulk-count");r&&(r.style.display=x.size>0?"flex":"none",p&&(p.textContent=`${x.size} joueur(s) sélectionné(s)`))}function o(){const r=m();document.getElementById("count-label").textContent=`${r.length} joueur(s)`;const p=document.getElementById("players-list");if(!r.length){p.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}p.innerHTML=r.map(c=>{const g={...c,clubs:c.clubs,face:c.face||null},u=Ee(g,{width:120});return`<div style="position:relative;cursor:pointer" data-edit="${c.id}">
        ${u}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${c.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),p.querySelectorAll("[data-edit]").forEach(c=>{c.addEventListener("click",()=>{const g=t.find(u=>u.id===c.dataset.edit);g&&Re(g,n,e,i)})}),p.querySelectorAll(".btn-del-player").forEach(c=>{c.addEventListener("click",async g=>{if(g.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:u}=await _.from("players").delete().eq("id",c.dataset.del);u?l(u.message,"error"):(l("Joueur supprimé ✅","success"),se(e,i))})})}o(),document.getElementById("search-players").addEventListener("input",o),document.getElementById("filter-job").addEventListener("change",o),document.getElementById("filter-rarity").addEventListener("change",o),document.getElementById("filter-club").addEventListener("change",o),document.getElementById("filter-country").addEventListener("change",o),(s=document.getElementById("bulk-cancel-btn"))==null||s.addEventListener("click",()=>{x.clear(),E(),o()}),(a=document.getElementById("bulk-delete-btn"))==null||a.addEventListener("click",async()=>{var g,u,b,L,k;if(!x.size||!confirm(`Supprimer ${x.size} joueur(s) ?`))return;const r=[...x],{error:p}=await _.from("players").delete().in("id",r);if(p){l(p.message,"error");return}l(`${r.length} joueur(s) supprimé(s) ✅`,"success"),x.clear();const c={search:((g=document.getElementById("search-players"))==null?void 0:g.value)||"",job:((u=document.getElementById("filter-job"))==null?void 0:u.value)||"",rarity:((b=document.getElementById("filter-rarity"))==null?void 0:b.value)||"",club:((L=document.getElementById("filter-club"))==null?void 0:L.value)||"",country:((k=document.getElementById("filter-country"))==null?void 0:k.value)||""};se(e,i,c)}),document.getElementById("add-player-btn").addEventListener("click",()=>Re(null,n,e,i)),document.getElementById("fix-old-faces-btn").addEventListener("click",()=>Ot(e,i))}async function Re(e,t,n,i){const{toast:d,openModal:l,closeModal:m}=i,x=!!e,E=await Ft(),{data:o}=await _.from("players").select("face").not("face","is",null),s=new Set((o||[]).map(c=>c.face).filter(Boolean));e!=null&&e.face&&s.delete(e.face);const a='<option value="">— Club —</option>'+t.map(c=>`<option value="${c.id}" ${(e==null?void 0:e.club_id)===c.id?"selected":""}>${c.encoded_name}</option>`).join(""),r=e!=null&&e.face?e.face.split("/")[0]:"",p=Object.keys(E).map(c=>`<option value="${c}" ${r===c?"selected":""}>${c}</option>`).join("");l(x?`✏️ ${e.firstname} ${e.surname_real}`:"➕ Nouveau joueur",`<div style="display:flex;gap:20px;align-items:flex-start">

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
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([c,g,u])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${Pt[c]};font-weight:700">${c}</label>
                <input id="${g}" type="number" min="0" max="20" value="${(e==null?void 0:e[u])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
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
          ${x?"💾 Enregistrer":"✅ Créer le joueur"}
        </button>
        </div>
      </div>
    </div>`),setTimeout(()=>{var k,y,w;let c=(e==null?void 0:e.face)||null;function g(){var Y,N,Z,Q,X,ee,te,Ae,Se,Ce,Te;const h=document.getElementById("card-preview");if(!h)return;const v=((Y=document.getElementById("pm-fn"))==null?void 0:Y.value)||"",$=(((N=document.getElementById("pm-real"))==null?void 0:N.value)||"").toUpperCase(),f=((Z=document.getElementById("pm-job"))==null?void 0:Z.value)||"ATT",I=((Q=document.getElementById("pm-job2"))==null?void 0:Q.value)||null,B=((X=document.getElementById("pm-rarity"))==null?void 0:X.value)||"normal",A=((ee=document.getElementById("pm-country"))==null?void 0:ee.value)||"FR",S=((te=document.getElementById("pm-club"))==null?void 0:te.value)||null,C=document.getElementById("pm-club"),T=C==null?void 0:C.options[C.selectedIndex];(T==null?void 0:T.text)!=="— Club —"&&(T==null||T.text);const O=parseInt((Ae=document.getElementById("pm-g"))==null?void 0:Ae.value)||0,U=parseInt((Se=document.getElementById("pm-d"))==null?void 0:Se.value)||0,H=parseInt((Ce=document.getElementById("pm-m"))==null?void 0:Ce.value)||0,P=parseInt((Te=document.getElementById("pm-a"))==null?void 0:Te.value)||0,j=t.find(ht=>ht.id===S),ie={firstname:v||"Prénom",surname_real:$||"NOM",job:f,job2:I||null,rarity:B,country_code:A,club_id:S,note_g:O,note_d:U,note_m:H,note_a:P,face:c||null,clubs:j?{encoded_name:j.encoded_name,logo_url:j.logo_url}:null};h.innerHTML=Ee(ie,{width:160});const M=document.getElementById("pm-minmax");M&&(M.style.display=["pepite","papyte"].includes(B)?"grid":"none")}function u(h){const v=document.getElementById("faces-grid"),$=document.getElementById("pm-face");if(!v||!$)return;const f=E[h]||[];if(console.log("[players] loadFacesGrid folder=",h,"files=",f.length,f.slice(0,5)),!f.length){$.innerHTML='<option value="">— Aucun visage disponible —</option>',v.innerHTML=`<p style="font-size:11px;color:#888;font-style:italic">Aucune image dans le dossier "${h}" du bucket Supabase.</p>`;return}const I=f.filter(B=>{const A=h+"/"+B;return A===c||!s.has(A)});$.innerHTML='<option value="">— Choisir un visage —</option>'+I.map(B=>{const A=h+"/"+B;return`<option value="${A}" ${c===A?"selected":""}>${B}</option>`}).join(""),v.innerHTML=I.map(B=>{const A=h+"/"+B,S=c===A,C=It({face:A});return`<div data-face="${A}" style="cursor:pointer;border:2px solid ${S?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${C}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),v.querySelectorAll("[data-face]").forEach(B=>{B.addEventListener("click",()=>{c=B.dataset.face;const A=document.getElementById("pm-face");A&&(A.value=c),v.querySelectorAll("[data-face]").forEach(S=>{S.style.border=`2px solid ${S.dataset.face===c?"#4fc3f7":"transparent"}`}),g()})})}const b=e!=null&&e.face?e.face.split("/")[0]:"";b&&E[b]&&(document.getElementById("pm-folder").value=b,u(b)),(k=document.getElementById("pm-folder"))==null||k.addEventListener("change",h=>{u(h.target.value)}),(y=document.getElementById("pm-face"))==null||y.addEventListener("change",h=>{c=h.target.value||null,g()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach(h=>{var v,$;(v=document.getElementById(h))==null||v.addEventListener("input",g),($=document.getElementById(h))==null||$.addEventListener("change",g)}),(w=document.getElementById("pm-save"))==null||w.addEventListener("click",()=>Gt(e,x,c,n,i)),g()},50)}function qt(e){const t=n=>{var i;return(i=document.getElementById(n))==null?void 0:i.value};return{firstname:(t("pm-fn")||"").trim(),surname_real:(t("pm-real")||"").trim()||"JOUEUR",country_code:t("pm-country")||"FR",club_id:t("pm-club")||null,job:t("pm-job")||"ATT",job2:t("pm-job2")||null,rarity:t("pm-rarity")||"normal",note_g:parseInt(t("pm-g"))||0,note_d:parseInt(t("pm-d"))||0,note_m:parseInt(t("pm-m"))||0,note_a:parseInt(t("pm-a"))||0,note_min:parseInt(t("pm-nmin"))||null,note_max:parseInt(t("pm-nmax"))||null,sell_price:parseInt(t("pm-price"))||0,face:e||null,ethnie:t("pm-folder")||null,is_active:!0}}async function Gt(e,t,n,i,d){var p,c,g,u,b;const{toast:l,closeModal:m}=d,x=document.getElementById("pm-error"),E=document.getElementById("pm-save"),o=qt(n);if(!o.firstname){x.textContent="Le prénom est requis.";return}if(!o.surname_real){x.textContent="Le nom est requis.";return}E.disabled=!0,E.textContent="Enregistrement…";const s=o,{error:a}=t?await _.from("players").update({...s,updated_at:new Date().toISOString()}).eq("id",e.id):await _.from("players").insert(s);if(a){x.textContent=a.message,E.disabled=!1,E.textContent=t?"💾 Enregistrer":"✅ Créer le joueur";return}l(t?"Joueur modifié ✅":"Joueur créé ✅","success"),m();const r={search:((p=document.getElementById("search-players"))==null?void 0:p.value)||"",job:((c=document.getElementById("filter-job"))==null?void 0:c.value)||"",rarity:((g=document.getElementById("filter-rarity"))==null?void 0:g.value)||"",club:((u=document.getElementById("filter-club"))==null?void 0:u.value)||"",country:((b=document.getElementById("filter-country"))==null?void 0:b.value)||""};se(i,d,r)}const Kt={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},nt=["rase","court","milong","long"];function Jt(e){const t=Ie(e);if(t==="noir")return"noir";if(t==="typ")return Math.random()<.9?"noir":"marron";if(t==="metisse")return Math.random()<.6?"noir":"marron";const n=Math.random();return n<.35?"blond":n<.75?"marron":"noir"}function Vt(e){return Math.random()<.05?"chauve":Jt(e)}const we=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function Ie(e){return Kt[e]||"blanc"}function it(e){return Vt(e)}function V(e,t){return Math.floor(Math.random()*(t-e+1))+e}function K(e){return e[Math.floor(Math.random()*e.length)]}function at(e){const t=we.filter(n=>n!==e);return K(t)}function be(e){const t=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","GR","RO","BG","UA","RU"],n=["MA","DZ","TN","EG","LY"],i=["NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","TZ","UG","ET"],d=["JP","KR","CN","VN","TH","ID","PH","IN","PK","BD","SA","AE","IR"];return t.includes(e)||["AR","UY","CL","PE","EC","CO","MX","BR"].includes(e)?"Europeans":n.includes(e)?"North Africans":i.includes(e)?"Africans":d.includes(e)?"Asians":"Europeans"}const Yt=[{min:1,max:4,pct:55},{min:5,max:10,pct:20},{min:11,max:14,pct:10},{min:15,max:17,pct:10},{min:18,max:20,pct:5}];function ot(){const e=Math.random()*100;let t=0;for(const n of Yt)if(t+=n.pct,e<t)return V(n.min,n.max);return V(1,4)}function Wt(){const e=Array.from({length:20},(t,n)=>n);return e.sort(()=>Math.random()-.5),new Set(e.slice(0,10))}let oe=null;function Zt(e,t){return e&&(oe||(oe=Wt()),oe.has(t))?V(15,20):ot()}const de={FR:{first:["Lucas","Tom","Hugo","Théo","Antoine","Kylian","Rayan","Axel","Paul","Enzo","Léo","Mathis","Nathan","Alexis","Ethan","Maxime","Julien","Baptiste","Nicolas","Pierre","Clément","Adrien","Valentin","Dylan","Loïc","Quentin","Florian","Kevin","Corentin","Raphaël"],last:["Martin","Bernard","Petit","Dupont","Moreau","Laurent","Robert","Michel","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard","Bonnet","Rousseau","Fontaine","Chevalier","Blanc","Garnier","Boyer","Gauthier","Garcia","Perrin","Robin","Clément","Morin","Nicolas","Henry","Lemaire","Noël","Dufour","Meunier","Brun","Blanchard","Giraud","Joly","Rivière","Brunet"]},ES:{first:["Carlos","Miguel","Javier","Alejandro","Sergio","David","Diego","Pablo","Álvaro","Marcos","Adrián","Rubén","Iker","Raúl","Fernando","Roberto","Víctor","Iván","Gonzalo","Antonio","Manuel","Jesús","Josué","Rodrigo","Cristian","Héctor","Óscar","Mario","Daniel","Jorge"],last:["García","Rodríguez","Martínez","López","Sánchez","González","Pérez","Hernández","Jiménez","Díaz","Torres","Ramírez","Flores","Rivera","Gómez","Morales","Álvarez","Romero","Herrera","Medina","Aguilar","Vargas","Guzmán","Muñoz","Salazar","Soto","Contreras","Rojas","Ramos","Ortiz"]},PT:{first:["João","Pedro","Diogo","Rúben","Bruno","Tiago","André","Ricardo","Luís","Gonçalo","Nuno","Mário","Fábio","Rui","Miguel","Sérgio","Hugo","Filipe","Paulo","Vítor"],last:["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Carvalho","Gomes","Ribeiro","Araújo","Barbosa","Cardoso","Correia","Teixeira","Machado","Vieira","Monteiro","Cunha","Pinto","Melo","Barros","Freitas","Fonseca","Andrade","Castro","Neves","Figueiredo","Duarte"]},BR:{first:["Gabriel","Lucas","Mateus","Gustavo","Felipe","Rodrigo","Thiago","Rafael","Bruno","Diego","Leonardo","Eduardo","Victor","Pedro","Carlos","Alexandre","André","Paulo","Danilo","Marcelo"],last:["Silva","Santos","Oliveira","Souza","Lima","Ferreira","Costa","Nascimento","Alves","Pereira","Rodrigues","Almeida","Nunes","Melo","Barbosa","Rocha","Brito","Castro","Carvalho","Gomes","Lopes","Ramos","Mendes","Cavalcanti","Batista","Azevedo","Campos","Freitas","Reis","Andrade"]},AR:{first:["Lionel","Sergio","Rodrigo","Nicolás","Ezequiel","Gonzalo","Federico","Mauro","Pablo","Diego","Lucas","Matías","Alejandro","Maximiliano","Emiliano","Marcos","Lautaro","Ángel","Leandro","Julián"],last:["González","Rodríguez","Martínez","García","López","Pérez","Sánchez","Romero","Torres","Flores","Díaz","Gómez","Alvarez","Ruiz","Castro","Herrera","Cabrera","Medina","Ferreyra","Suárez"]},IT:{first:["Marco","Luca","Alessandro","Matteo","Davide","Andrea","Francesco","Federico","Lorenzo","Riccardo","Stefano","Simone","Roberto","Nicola","Giovanni","Antonio","Emanuele","Daniele","Alberto","Giorgio"],last:["Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Ricci","Marino","Greco","Bruno","Gallo","Conti","De Luca","Mancini","Giordano","Rizzo","Lombardi","Moretti","Fontana","Rinaldi"]},DE:{first:["Lukas","Max","Jonas","Florian","Tobias","Stefan","Markus","Sebastian","Niklas","Leon","Tim","Felix","Alexander","Philipp","Christian","Thomas","Michael","Jan","Moritz","Fabian"],last:["Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Wolf","Schröder","Neumann","Schwarz","Zimmermann","Braun","Krüger","Hofmann","Wagner","Becker","Koch","Lehmann","Kaiser"]},GB:{first:["James","Harry","Oliver","Jack","George","Charlie","William","Thomas","Alfie","Edward","Ryan","Liam","Noah","Ethan","Kyle","Jordan","Callum","Aaron","Declan","Connor"],last:["Smith","Jones","Williams","Brown","Taylor","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Walker","Wright","Robinson","White","Thompson","Hughes","Edwards","Green","Hall"]},MA:{first:["Yassine","Karim","Mehdi","Amine","Hamza","Bilal","Soufiane","Rachid","Omar","Mohammed","Zakaria","Ilyas","Ayoub","Saad","Khalid","Adil","Tarik","Hicham","Reda","Nabil"],last:["Benali","Amrani","Bouazza","Cherif","Haddad","Meziane","Belkacem","Rahmani","Saidi","Zidane","Belhadj","Tazi","Idrissi","Alaoui","Bennani","Fassi","Lahlou","Naciri","Tahiri","Zniber"]},DZ:{first:["Yacine","Riyad","Sofiane","Haris","Adem","Islam","Bilal","Omar","Nassim","Mehdi","Ryad","Zinedine","Youssef","Farid","Karim","Mourad","Walid","Anes","Ferhat","Djamel"],last:["Amrouche","Boudiaf","Cherki","Guessab","Hamdi","Jaber","Lakhal","Mahjoub","Rezki","Sahnoun","Talbi","Zerrouki","Achour","Bakri","Chaouch","Djaballah","Ferhat","Gacem","Khaldi","Larbi"]},SN:{first:["Sadio","Ismaïla","Cheikhou","Gana","Famara","Mbaye","Pape","Aliou","Moussa","Sidy","Idrissa","Lamine","Bamba","Fallou","Abdou","Diallo","Mamadou","Souleymane","Oumar","Cheikh"],last:["Diallo","Traoré","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Ndiaye","Sow","Cissé","Fofana","Keita","Sylla","Kane","Diarra","Sanogo","Baldé","Kouyaté"]},CI:{first:["Didier","Wilfried","Serge","Jonathan","Franck","Maxwel","Salomon","Gervinho","Nicolas","Maxime","Ismael","Romaric","Abdul","Cheick","Arouna","Kolo","Yaya","Geoffroy","Siaka","Adama"],last:["Drogba","Zaha","Gnagnon","Koné","Touré","Bamba","Diomandé","Konaté","Coulibaly","Fofana","Traoré","Doumbia","Sanogo","Diabaté","Kalou","Bakayoko","Gradel","Seri","Aurier","Haller"]},CM:{first:["Samuel","Alex","Karl","Fabrice","Cédric","Nicolas","Georges","André","Joël","Roger","François","Jean","Patrick","Thierry","Eric","Benjamin","Aristide","Clinton","Clinton","Stéphane"],last:["Eto'o","Song","Choupo-Moting","Aboubakar","Bassogog","Kunde","Toko","Nkoudou","Ngadeu","Oyongo","Fai","Zambo","Mokoena","Ekambi","Tchamba","Mbida","Biya","Kameni","Meyong","Webo"]},NG:{first:["Kelechi","Ahmed","Victor","John","Emmanuel","Samuel","Moses","Ola","Chukwuemeka","Odion","Sunday","Chidi","Nnamdi","Chisom","Tunde","Emeka","Obinna","Uchenna","Ifeanyi","Segun"],last:["Osimhen","Iheanacho","Musa","Onyekuru","Iwobi","Ndidi","Nwankwo","Obi","Mikel","Martins","Okocha","Yekini","Amunike","Babangida","Fash","Lawal","Onuoha","Taiwo","Ayodele","Ameobi"]},JP:{first:["Ryota","Kenji","Hiroshi","Takumi","Yuto","Daichi","Shinji","Makoto","Koji","Naoki","Yuya","Shoya","Ryo","Shu","Atsuto","Masato","Hotaru","Genki","Ko","Ritsu"],last:["Nakamura","Tanaka","Suzuki","Sato","Yamamoto","Watanabe","Ito","Yamada","Saito","Matsumoto","Inoue","Kimura","Hayashi","Shimizu","Yamazaki","Mori","Abe","Ikeda","Kato","Honda"]},KR:{first:["Heung","Son","Ji","Sung","Jae","Young","Kang","Hyun","Woo","Tae","Seung","Min","Jun","Dong","Chang","Sang","Yo","Hee","Jin","Bum"],last:["Kim","Park","Lee","Choi","Jung","Kang","Cho","Yoon","Lim","Oh","Han","Seo","Kwon","Hwang","Ahn","Yang","Shin","Yoo","Jang","Song"]},MX:{first:["Carlos","Hirving","Andrés","Javier","Miguel","Raúl","Héctor","Diego","Jorge","Luis","Rodolfo","Erick","Jonathan","Néstor","Tecatito","Chicharito","Oswaldo","Oribe","Uriel","Giovanni"],last:["Hernández","Lozano","Guardado","Vela","Morales","Jiménez","Reyes","Corona","Herrera","Rodríguez","Ochoa","Chicharito","Flores","Domínguez","Araujo","Álvarez","Pineda","Sánchez","Antuna","Meza"]},_DEFAULT_EUROPE:{first:["Stefan","Ivan","Luca","Marco","Andrei","Cristian","Bogdan","Mircea","Adrian","Florin","Dušan","Aleksandar","Nikola","Nemanja","Marko","Filip","Milan","Branislav","Radomir","Dejan"],last:["Popescu","Ionescu","Stan","Marin","Stoica","Popa","Radu","Constantin","Barbu","Dobre","Petrović","Marković","Nikolić","Jovanović","Popović","Stanković","Đorđević","Lukić","Simić","Ilić"]},_DEFAULT_AFRIQUE:{first:["Mamadou","Ibrahima","Moussa","Seydou","Boubacar","Oumar","Modibo","Adama","Bakary","Abdoulaye","Lamine","Ousmane","Sekou","Demba","Tidiane","Amadou","Issiaka","Siaka","Fode","Samba"],last:["Diallo","Traoré","Coulibaly","Koné","Doumbia","Kouyaté","Bah","Konaté","Touré","Camara","Sylla","Keita","Diakité","Sangaré","Sanou","Sidibé","Bathily","Niakaté","Dioumassi","Sissoko"]},_DEFAULT_ASIE:{first:["Wei","Ming","Jae","Van","Duc","Sorn","Ali","Hassan","Reza","Arman","Yusuf","Tariq","Faris","Khalid","Saad","Rashid","Nasser","Walid","Ziad","Adel"],last:["Zhang","Wang","Liu","Chen","Yang","Huang","Zhou","Wu","Xu","Sun","Al-Rashidi","Al-Dosari","Al-Harthi","Al-Balushi","Al-Farsi","Al-Shamsi","Al-Neyadi","Al-Breiki","Al-Hammadi","Al-Mansouri"]},_DEFAULT_AMERIQUE:{first:["James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Marcus","Jordan","Andre","Devonte","Malik","Tyrone","Jamal","Darius","DeShawn","Brandon","Cody"],last:["Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Taylor","Anderson","Jackson","White","Harris","Clark","Lewis","Walker","Hall","Allen","Young","King"]}},Qt={FR:"FR",BE:"FR",CH:"FR",MC:"FR",LU:"FR",ES:"ES",MX:"MX",CO:"ES",VE:"ES",PE:"ES",CL:"ES",EC:"ES",UY:"ES",PY:"ES",BO:"ES",CR:"ES",PA:"ES",HN:"ES",GT:"ES",SV:"ES",NI:"ES",DO:"ES",CU:"ES",PT:"PT",AO:"PT",MZ:"PT",CV:"PT",BR:"BR",AR:"AR",IT:"IT",SM:"IT",DE:"DE",AT:"DE",GB:"GB",IE:"GB",AU:"GB",NZ:"GB",CA:"GB",MA:"MA",TN:"DZ",LY:"DZ",DZ:"DZ",SN:"SN",ML:"SN",GN:"SN",GW:"SN",GM:"SN",MR:"SN",CI:"CI",BF:"CI",TG:"CI",BJ:"CI",GH:"CI",CM:"CM",GA:"CM",CG:"CM",CD:"CM",NG:"NG",JP:"JP",KR:"KR",MX:"MX",PL:"_DEFAULT_EUROPE",CZ:"_DEFAULT_EUROPE",SK:"_DEFAULT_EUROPE",HU:"_DEFAULT_EUROPE",HR:"_DEFAULT_EUROPE",RS:"_DEFAULT_EUROPE",SI:"_DEFAULT_EUROPE",RO:"_DEFAULT_EUROPE",BG:"_DEFAULT_EUROPE",GR:"_DEFAULT_EUROPE",TR:"_DEFAULT_EUROPE",RU:"_DEFAULT_EUROPE",UA:"_DEFAULT_EUROPE",NL:"_DEFAULT_EUROPE",DK:"_DEFAULT_EUROPE",SE:"_DEFAULT_EUROPE",NO:"_DEFAULT_EUROPE",FI:"_DEFAULT_EUROPE",AL:"_DEFAULT_EUROPE",EG:"_DEFAULT_AFRIQUE",ZA:"_DEFAULT_AFRIQUE",KE:"_DEFAULT_AFRIQUE",ET:"_DEFAULT_AFRIQUE",TZ:"_DEFAULT_AFRIQUE",UG:"_DEFAULT_AFRIQUE",CN:"_DEFAULT_ASIE",VN:"_DEFAULT_ASIE",TH:"_DEFAULT_ASIE",ID:"_DEFAULT_ASIE",PH:"_DEFAULT_ASIE",IN:"_DEFAULT_ASIE",PK:"_DEFAULT_ASIE",BD:"_DEFAULT_ASIE",IR:"_DEFAULT_ASIE",SA:"_DEFAULT_ASIE",AE:"_DEFAULT_ASIE",QA:"_DEFAULT_ASIE",KW:"_DEFAULT_ASIE",IQ:"_DEFAULT_ASIE",SY:"_DEFAULT_ASIE",JO:"_DEFAULT_ASIE",US:"_DEFAULT_AMERIQUE"};function rt(e){return Qt[e]||"_DEFAULT_EUROPE"}function lt(e){const t=rt(e),n=(de[t]||de._DEFAULT_EUROPE).first;return K(n)}function st(e){const t=rt(e);return(de[t]||de._DEFAULT_EUROPE).last}function Xt(e,t,n=new Set,i=!1){const d=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],l=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],m=new Set(l.sort(()=>Math.random()-.5).slice(0,4)),x=[...l].sort(()=>Math.random()-.5),E=new Set(x.slice(0,2)),o=new Set(x.slice(2,4)),s=10,a=d.map((c,g)=>g<s);for(let c=a.length-1;c>0;c--){const g=Math.floor(Math.random()*(c+1));[a[c],a[g]]=[a[g],a[c]]}const r=new Set;function p(c){const g=st(c),u=g.filter(y=>!r.has(y)&&!n.has(y)),b=u.length?u:g.filter(y=>!r.has(y)),L=b.length?b:g,k=K(L);return r.add(k),k}return d.map((c,g)=>{const u=a[g]?t:at(t),b=Ie(u),L=it(u),k=K(nt),y=E.has(g)?"pepite":o.has(g)?"papyte":"normal",w=y==="pepite"?V(10,15):y==="papyte"?V(15,20):Zt(i,g),h=m.has(g),v=h?Math.max(0,w-2):0;let $=0,f=0,I=0,B=0,A=null;c==="GK"?$=w:c==="DEF"?(f=w,h&&(I=v,A="MIL")):c==="ATT"?(B=w,h&&(I=v,A="MIL")):(I=w,h&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(f=v,A="DEF"):(B=v,A="ATT")));const S=p(u);return{job:c,job2:A,firstname:lt(u),surname_real:S,country_code:u,club_id:e,note_g:$,note_d:f,note_m:I,note_a:B,skin:b,hair:L,hair_length:k,rarity:y,sell_price:0,ethnie:be(u),_ethnie:be(u)}})}async function dt(e,t,n,i=!1){oe=null;const{data:d}=await _.from("players").select("surname_real").not("surname_real","is",null),l=new Set((d||[]).map(c=>c.surname_real).filter(Boolean)),m=Xt(e,t,l,i),{data:x}=await _.from("players").select("face").not("face","is",null),E=new Set((x||[]).map(c=>c.face).filter(Boolean)),o=new Set;for(const c of m){const g=await _e(c.country_code,new Set([...E,...o]));g&&(c.face=g,o.add(g)),delete c._ethnie}const{data:s,error:a}=await _.from("players").insert(m).select("id");if(a){console.error("[GenSquad] Erreur batch insert:",a.message,a.details),n("Erreur: "+a.message,"error");return}const r=(s||[]).map(c=>({card_type:"player",player_id:c.id}));if(r.length){const{error:c}=await _.from("cards").insert(r);c&&console.warn("[GenSquad] Erreur cartes:",c.message)}const p=(s==null?void 0:s.length)||0;console.log("[GenSquad] Créés:",p,"/",m.length),p>0?n(`${p} joueurs générés ✅`,"success"):n("Erreur génération joueurs","error")}function ct(e){return{style:e.kit_style||z.style,color1:e.kit_color1||z.color1,color2:e.kit_color2||z.color2,color3:e.kit_color3||z.color3,shorts:e.kit_shorts||z.shorts,socks:e.kit_socks||z.socks}}let re=[];async function en(e,t){await me(e,t)}async function me(e,t){const[{data:n,error:i},{data:d}]=await Promise.all([_.from("clubs").select("*").order("real_name"),_.from("players").select("club_id")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}re=n||[];const l={};(d||[]).forEach(m=>{l[m.club_id]=(l[m.club_id]||0)+1}),tn(e,t,l)}function tn(e,t,n={}){const{toast:i,openModal:d,closeModal:l}=t;e.innerHTML=`
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
    </div>`,m(re),document.getElementById("search-clubs").addEventListener("input",x=>{const E=x.target.value.toLowerCase();m(re.filter(o=>o.real_name.toLowerCase().includes(E)||o.encoded_name.toLowerCase().includes(E)))}),document.getElementById("add-club-btn").addEventListener("click",()=>De(null,e,t));function m(x){const E=document.getElementById("clubs-list");if(!x.length){E.innerHTML='<p style="color:var(--tile-fg-dim);padding:20px;text-align:center">Aucun club.</p>';return}const o={};x.forEach(r=>{const p=r.country_code||"—";o[p]||(o[p]=[]),o[p].push(r)});const s=Object.keys(o).sort(),a=r=>{const p=ct(r),c=r.logo_url?`<img src="${r.logo_url}" style="width:36px;height:36px;object-fit:contain;border-radius:8px;flex-shrink:0">`:`<div style="width:36px;height:36px;background:linear-gradient(135deg,${p.color1},${p.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:900;flex-shrink:0">${r.encoded_name.slice(0,3)}</div>`,g=n[r.id]||0;return`
        <div class="club-row" data-club-id="${r.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:10px;cursor:pointer;background:var(--tile-bg);border:1px solid var(--tile-border);transition:background .15s">
          ${c}
          <img src="https://flagsapi.com/${r.country_code}/flat/24.png" style="width:18px;height:13px;object-fit:cover;border-radius:2px;flex-shrink:0" onerror="this.style.display='none'">
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:12px;color:var(--tile-fg-on-page);font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${r.encoded_name}</div>
            <div style="font-size:10px;color:${g===0?"#e67e22":"var(--tile-fg-dim)"}">${g===0?"⚠️ 0 joueur":`👥 ${g}`}</div>
          </div>
          <button class="btn-del-club" data-del="${r.id}"
            style="width:22px;height:22px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;flex-shrink:0"
            onclick="event.stopPropagation()">✕</button>
        </div>`};E.innerHTML=s.map(r=>`
      <div style="display:flex;align-items:center;gap:8px;padding:8px 4px 4px;margin-top:6px">
        ${r!=="—"?`<img src="https://flagsapi.com/${r}/flat/24.png" style="width:20px;height:15px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">`:'<span style="font-size:14px">🌍</span>'}
        <span style="font-size:11px;font-weight:900;color:var(--tile-fg-dim);letter-spacing:1px">${r}</span>
        <span style="font-size:11px;color:var(--tile-fg-dim);background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:10px;padding:1px 8px">${o[r].length}</span>
        <div style="flex:1;height:1px;background:var(--tile-border)"></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:4px">
        ${o[r].map(a).join("")}
      </div>
    `).join(""),E.querySelectorAll(".club-row").forEach(r=>{r.addEventListener("click",()=>{const p=re.find(c=>c.id===r.dataset.clubId);p&&De(p,e,t),E.querySelectorAll(".club-row").forEach(c=>c.style.background="var(--tile-bg)"),r.style.background="rgba(26,107,60,0.18)"})}),E.querySelectorAll(".btn-del-club").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:p}=await _.from("clubs").delete().eq("id",r.dataset.del);p?i(p.message,"error"):(i("Club supprimé","success"),me(e,t))})})}}function nn(e){var b,L;const{openModal:t,closeModal:n}=e,i=6,d=40,l=d*i,m=[];for(let k=0;k<i;k++)for(let y=0;y<i;y++)m.push((k+y)%2===0?"#00AEEF":"#ffffff");let x="OP",E="#D4A017",o=50,s=0,a=0;function r(){let k="";for(let v=0;v<i;v++)for(let $=0;$<i;$++){const f=v*i+$;k+=`<rect x="${$*d}" y="${v*d}" width="${d}" height="${d}" fill="${m[f]}"/>`}const y=l/2+s/100*l,w=l/2+a/100*l,h=o/100*l;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${l} ${l}">
      ${k}
      <text x="${y}" y="${w}" text-anchor="middle" dominant-baseline="central"
        font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="${h}"
        fill="${E}">${(x||"").toUpperCase().slice(0,3)}</text>
    </svg>`}function p(k){return"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(k)))}const c=`
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
        <label>POSITION HORIZONTALE (<span id="flag-x-val">${s}</span>)</label>
        <input type="range" id="flag-text-x" min="-50" max="50" value="${s}" style="width:100%">
      </div>
      <div style="width:260px">
        <label>POSITION VERTICALE (<span id="flag-y-val">${a}</span>)</label>
        <input type="range" id="flag-text-y" min="-50" max="50" value="${a}" style="width:100%">
      </div>

      <div>
        <label style="display:block;text-align:center;margin-bottom:8px">Couleurs des ${i*i} carrés</label>
        <div style="display:grid;grid-template-columns:repeat(${i},28px);gap:3px">
          ${m.map((k,y)=>`<input type="color" class="flag-square-color" data-i="${y}" value="${k}" style="width:28px;height:28px;padding:1px;border-radius:4px;cursor:pointer">`).join("")}
        </div>
      </div>
    </div>
  `;t(`🎨 Générer un logo (${i}×${i})`,c,`
    <button id="flag-cancel" class="btn btn-ghost">Annuler</button>
    <button id="flag-use" class="btn btn-primary">✅ Utiliser ce logo</button>
  `);function u(){document.getElementById("flag-preview").innerHTML=r()}u(),document.getElementById("flag-text").addEventListener("input",k=>{x=k.target.value.toUpperCase().slice(0,3),k.target.value=x,u()}),document.getElementById("flag-text-color").addEventListener("input",k=>{E=k.target.value,u()}),document.getElementById("flag-text-size").addEventListener("input",k=>{o=parseInt(k.target.value),document.getElementById("flag-size-val").textContent=o,u()}),document.getElementById("flag-text-x").addEventListener("input",k=>{s=parseInt(k.target.value),document.getElementById("flag-x-val").textContent=s,u()}),document.getElementById("flag-text-y").addEventListener("input",k=>{a=parseInt(k.target.value),document.getElementById("flag-y-val").textContent=a,u()}),document.querySelectorAll(".flag-square-color").forEach(k=>{k.addEventListener("input",y=>{m[parseInt(y.target.dataset.i)]=y.target.value,u()})}),(b=document.getElementById("flag-cancel"))==null||b.addEventListener("click",()=>n()),(L=document.getElementById("flag-use"))==null||L.addEventListener("click",()=>{const k=p(r()),y=document.getElementById("m-logo-url-current");y&&(y.value=k);const w=document.getElementById("logo-preview");w&&(w.innerHTML=`<img src="${k}" style="width:100%;height:100%;object-fit:contain">`),n()})}async function De(e,t,n){var u,b,L,k,y,w,h;const{toast:i}=n,d=!!e,l=e?ct(e):{...z},m=document.getElementById("club-panel");if(!m)return;const x=Object.entries(Me).map(([v,$])=>`<option value="${v}" ${l.style===v?"selected":""}>${$.label}</option>`).join(""),E=we.map(v=>`<option value="${v}" ${((e==null?void 0:e.country_code)||"FR")===v?"selected":""}>${v}</option>`).join("");m.style.display="block",m.style.alignItems="",m.style.justifyContent="",m.innerHTML=`
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
            ${[["Couleur 1","m-kit-color1",l.color1,!1],["Couleur 2","m-kit-color2",l.color2,!1],["Couleur 3","m-kit-color3",l.color3,!0],["Short","m-kit-shorts",l.shorts,!1],["Chaussettes","m-kit-socks",l.socks,!1]].map(([v,$,f,I])=>`
              <div class="form-group" id="wrap-${$}" ${I?'style="display:none"':""}>
                <label>${v}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${$}" value="${f||"#000000"}" style="width:38px;height:32px;padding:2px;border:1px solid var(--tile-border);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${$}-txt" value="${f||"#000000"}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
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
  `,(u=document.getElementById("m-logo-file"))==null||u.addEventListener("change",v=>{var I;const $=(I=v.target.files)==null?void 0:I[0];if(!$)return;const f=new FileReader;f.onload=()=>{document.getElementById("logo-preview").innerHTML=`<img src="${f.result}" style="width:100%;height:100%;object-fit:contain">`},f.readAsDataURL($)}),(b=document.getElementById("m-open-flag-builder"))==null||b.addEventListener("click",()=>{nn(n)}),ne();function o(){var I,B;const v=((I=document.getElementById("m-kit-style"))==null?void 0:I.value)||"uni",$=((B=Me[v])==null?void 0:B.colors)===3,f=document.getElementById("wrap-m-kit-color3");f&&(f.style.display=$?"":"none")}o(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(v=>{const $=document.getElementById(v),f=document.getElementById(v+"-txt");!$||!f||($.addEventListener("input",()=>{f.value=$.value,ne()}),f.addEventListener("input",()=>{const I=f.value.trim();/^#[0-9a-fA-F]{6}$/.test(I)&&($.value=I,ne())}),f.addEventListener("change",()=>{let I=f.value.trim();I.startsWith("#")||(I="#"+I),/^#[0-9a-fA-F]{6}$/.test(I)&&($.value=I,f.value=I,ne())}))}),(L=document.getElementById("m-kit-style"))==null||L.addEventListener("change",()=>{o(),ne()});const s=document.getElementById("m-real"),a=document.getElementById("m-encoded");function r(){if(!s||!a||a.value)return;const v=s.value.trim().split(/\s+/),$=v.length===1?v[0].toUpperCase().slice(0,6):v.filter(f=>f.length>2).map(f=>f[0].toUpperCase()).join("")||v[0].toUpperCase().slice(0,4);a.value=$}s==null||s.addEventListener("input",r),(k=document.getElementById("auto-encode-btn"))==null||k.addEventListener("click",()=>{a&&(a.value=""),r()}),(y=document.getElementById("m-save"))==null||y.addEventListener("click",()=>dn(e,d,t,n));const p=document.getElementById("m-gen-squad"),c=document.getElementById("m-gen-strong-label");function g(){if(c&&(c.style.display=p!=null&&p.checked?"flex":"none",!(p!=null&&p.checked))){const v=document.getElementById("m-gen-strong");v&&(v.checked=!1)}}p==null||p.addEventListener("change",g),g(),(w=document.getElementById("btn-gen-squad-panel"))==null||w.addEventListener("click",()=>{an(e,n,t)}),(h=document.getElementById("btn-gen-one-player"))==null||h.addEventListener("click",()=>{rn(e,n)}),d&&$e(e.id)}async function $e(e){const{data:t}=await _.from("players").select("*, clubs(encoded_name, logo_url, kit_style, kit_color1, kit_color2, kit_color3, kit_shorts, kit_socks)").eq("club_id",e).order("surname_real"),n=document.getElementById("club-players-grid"),i=document.getElementById("club-players-count");if(i&&(i.textContent=(t||[]).length),!!n){if(!(t!=null&&t.length)){n.innerHTML='<div style="color:var(--tile-fg-dim);padding:20px;font-size:13px">Aucun joueur dans ce club.</div>';return}n.innerHTML=t.map(d=>Ee(d,{width:100})).join("")}}function an(e,t,n){const{openModal:i,closeModal:d,toast:l}=t;i(`⚽ Générer — ${e.real_name}`,`<div style="display:flex;flex-direction:column;gap:14px">
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
    </div>`),setTimeout(()=>{var m,x;(m=document.getElementById("qg-cancel"))==null||m.addEventListener("click",()=>d()),(x=document.getElementById("qg-ok"))==null||x.addEventListener("click",async()=>{var o;const E=((o=document.getElementById("qg-strong"))==null?void 0:o.checked)??!1;d(),l("Génération en cours…","info"),await dt(e.id,e.country_code,l,E),l("Effectif généré ✅","success"),$e(e.id),me(n,t)})},50)}const pt=["GK","DEF","MIL","ATT"],on=[{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}];function rn(e,t){const{openModal:n,closeModal:i,toast:d}=t,l=we.map(o=>`<option value="${o}">${o}</option>`).join(""),m=o=>pt.map(s=>`<option value="${s}" ${s===o?"selected":""}>${s}</option>`).join(""),x=`
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
            <select id="gen-one-job1">${m("MIL")}</select>
          </div>
          <div>
            <label>POSTE 2 (optionnel)</label>
            <select id="gen-one-job2">
              <option value="">— Aucun —</option>
              ${m(null)}
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
              ${l}
            </select>
          </div>
        </div>
      </div>
    </div>
  `;n(`➕ Générer un joueur — ${e.real_name}`,x,`
    <button id="gen-one-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gen-one-ok" class="btn btn-primary">➕ Générer</button>
  `),setTimeout(()=>{var o,s;document.querySelectorAll('input[name="gen-one-mode"]').forEach(a=>{a.addEventListener("change",()=>{document.getElementById("gen-one-custom-fields").style.display=a.value==="custom"&&a.checked?"flex":"none"})}),(o=document.getElementById("gen-one-cancel"))==null||o.addEventListener("click",()=>i()),(s=document.getElementById("gen-one-ok"))==null||s.addEventListener("click",async()=>{var c,g,u,b,L;const a=((c=document.querySelector('input[name="gen-one-mode"]:checked'))==null?void 0:c.value)||"random",r=document.getElementById("gen-one-ok");r.disabled=!0,r.textContent="⏳ Génération…";const p={};a==="custom"&&(p.job=((g=document.getElementById("gen-one-job1"))==null?void 0:g.value)||null,p.job2=((u=document.getElementById("gen-one-job2"))==null?void 0:u.value)||null,p.rarity=((b=document.getElementById("gen-one-rarity"))==null?void 0:b.value)||null,p.country=((L=document.getElementById("gen-one-country"))==null?void 0:L.value)||null);try{await ln(e,p),d("Joueur généré ✅","success"),i(),$e(e.id)}catch(k){d("Erreur : "+k.message,"error"),r.disabled=!1,r.textContent="➕ Générer"}})},50)}async function ln(e,t={}){const n=t.country||(Math.random()<.5?e.country_code:at(e.country_code)),i=t.job||K(pt),d=t.job2||null,l=t.rarity||(()=>{const B=Math.random()*100;return B<1.5?"legende":B<3?"pepite":B<4.5?"papyte":"normal"})(),m=l==="pepite"?V(10,15):l==="papyte"?V(15,20):ot(),x=d?Math.max(0,m-2):0;let E=0,o=0,s=0,a=0;i==="GK"&&(E=m),i==="DEF"&&(o=m),i==="MIL"&&(s=m),i==="ATT"&&(a=m),d==="GK"&&(E=x),d==="DEF"&&(o=x),d==="MIL"&&(s=x),d==="ATT"&&(a=x);const r=Ie(n),p=it(n),c=K(nt),{data:g}=await _.from("players").select("surname_real").not("surname_real","is",null),u=new Set((g||[]).map(B=>B.surname_real).filter(Boolean)),b=st(n),L=b.filter(B=>!u.has(B)),k=K(L.length?L:b),y={job:i,job2:d,firstname:lt(n),surname_real:k,country_code:n,club_id:e.id,note_g:E,note_d:o,note_m:s,note_a:a,skin:r,hair:p,hair_length:c,rarity:l,sell_price:0,ethnie:be(n)},{data:w}=await _.from("players").select("face").not("face","is",null),h=new Set((w||[]).map(B=>B.face).filter(Boolean)),v=await _e(n,h);v&&(y.face=v);const{data:$,error:f}=await _.from("players").insert(y).select("id").single();if(f)throw f;const{error:I}=await _.from("cards").insert({card_type:"player",player_id:$.id});I&&console.warn("[GenOnePlayer] Erreur carte:",I.message)}function ut(){var e,t,n,i,d,l;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((t=document.getElementById("m-kit-color1"))==null?void 0:t.value)||"#1A6B3C",color2:((n=document.getElementById("m-kit-color2"))==null?void 0:n.value)||"#ffffff",color3:((i=document.getElementById("m-kit-color3"))==null?void 0:i.value)||"#000000",shorts:((d=document.getElementById("m-kit-shorts"))==null?void 0:d.value)||"#111111",socks:((l=document.getElementById("m-kit-socks"))==null?void 0:l.value)||"#ffffff"}}function ne(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=$t(ut(),"panel"))}async function sn(e,t){const n=(e.name.split(".").pop()||"png").toLowerCase(),i=`clubs/${t||"new"}-${Date.now()}.${n}`,{error:d}=await _.storage.from("assets").upload(i,e,{upsert:!0,cacheControl:"3600"});if(d)throw d;const{data:l}=_.storage.from("assets").getPublicUrl(i);return l.publicUrl}async function dn(e,t,n,i){var k,y,w,h,v,$,f,I,B;const{toast:d}=i,l=document.getElementById("m-error"),m=document.getElementById("m-save"),x=(k=document.getElementById("m-real"))==null?void 0:k.value.trim(),E=(y=document.getElementById("m-encoded"))==null?void 0:y.value.trim().toUpperCase(),o=(w=document.getElementById("m-country"))==null?void 0:w.value.trim().toUpperCase(),s=((v=(h=document.getElementById("m-logo-file"))==null?void 0:h.files)==null?void 0:v[0])||null,a=(($=document.getElementById("m-logo-url-current"))==null?void 0:$.value)||null,r=((f=document.getElementById("m-gen-stadium"))==null?void 0:f.checked)??!1,p=((I=document.getElementById("m-gen-squad"))==null?void 0:I.checked)??!1,c=((B=document.getElementById("m-gen-strong"))==null?void 0:B.checked)??!1,g=ut();if(!x){l.textContent="Le nom du club est requis.";return}if(!E){l.textContent="Le nom encodé est requis.";return}if(!o){l.textContent="Le pays est requis.";return}m.disabled=!0,m.textContent="Enregistrement…";let u=a;if(s)try{m.textContent="📤 Envoi du logo…",u=await sn(s,e==null?void 0:e.id)}catch(A){l.textContent="Erreur upload logo : "+A.message,m.disabled=!1,m.textContent=t?"💾 Enregistrer":"✅ Créer le club";return}const b={real_name:x,encoded_name:E,country_code:o,logo_url:u,kit_style:g.style,kit_color1:g.color1,kit_color2:g.color2,kit_color3:g.color3,kit_shorts:g.shorts,kit_socks:g.socks};let L=e==null?void 0:e.id;if(t){const{error:A}=await _.from("clubs").update(b).eq("id",L);if(A){l.textContent=A.message,m.disabled=!1,m.textContent="💾 Enregistrer";return}}else{const{data:A,error:S}=await _.from("clubs").insert(b).select().single();if(S){l.textContent=S.message,m.disabled=!1,m.textContent="✅ Créer le club";return}if(L=A.id,r){m.textContent="🏟️ Création du stade…";const{data:C,error:T}=await _.from("stadium_definitions").insert({name:`Stade de ${x}`,club_id:L,country_code:null}).select().single();T?console.warn("[Stadium] Erreur def stade:",T.message):C&&await _.from("cards").insert({card_type:"stadium",stadium_id:C.id})}p&&(m.textContent="⚽ Génération des joueurs…",await dt(L,o,d,c))}d(t?"Club modifié ✅":"Club créé ✅","success"),me(n,i)}const cn=["normal","pepite","papyte","legende"],je=["GK","DEF","MIL","ATT"],pn=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let J={...R},le=[];async function un(e,{toast:t}){const{data:n}=await _.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");le=n||[],J={...R},e.innerHTML=yn(le),gn(e,le,t),F()}function Ne(){var n;const e=((n=document.getElementById("cb-surname-real"))==null?void 0:n.value)||"",t=document.getElementById("cb-surname-enc");t&&(t.value=ue(e))}function mn(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=le.find(i=>String(i.id)===String(e));return t?{style:t.kit_style||z.style,color1:t.kit_color1||z.color1,color2:t.kit_color2||z.color2,shorts:t.kit_shorts||z.shorts,socks:t.kit_socks||z.socks}:{...z}}function F(){var r,p,c,g;const e=u=>{var b;return((b=document.getElementById(u))==null?void 0:b.value)||""},t={firstname:e("cb-firstname"),surname_real:e("cb-surname-enc")||ue(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((p=(r=document.getElementById("cb-club"))==null?void 0:r.selectedOptions[0])==null?void 0:p.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=mn(),i=document.getElementById("cb-club"),d=((g=(c=i==null?void 0:i.selectedOptions[0])==null?void 0:c.dataset)==null?void 0:g.logo)||null,l=Qe(J,n,120),m=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(l)}`,x=At(t,{portraitUrl:m,clubLogoUrl:d,showNotes:!0}),E=document.getElementById("card-preview");E&&(E.innerHTML=x);const o=document.getElementById("avatar-preview-wrap");o&&(o.innerHTML=l);const s=e("cb-surname-real"),a=document.getElementById("encode-summary");a&&s&&(a.textContent=`${e("cb-firstname")} ${s} → ${e("cb-firstname")} ${t.surname_real}`)}function mt(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};J={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function gn(e,t,n){var d,l,m,x,E;e.querySelectorAll("input,select").forEach(o=>{o.addEventListener("input",F),o.addEventListener("change",F)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(o=>{var s;(s=document.getElementById(o))==null||s.addEventListener("change",()=>{mt(),F()})}),(d=document.getElementById("cb-surname-real"))==null||d.addEventListener("input",()=>{Ne(),F()}),(l=document.getElementById("btn-encode"))==null||l.addEventListener("click",()=>{Ne(),F()}),(m=document.getElementById("cb-club"))==null||m.addEventListener("change",F),(x=document.getElementById("btn-save-player"))==null||x.addEventListener("click",()=>fn(n)),(E=document.getElementById("btn-reset"))==null||E.addEventListener("click",()=>{e.querySelectorAll("input").forEach(o=>o.value=""),e.querySelectorAll("select").forEach(o=>o.selectedIndex=0),J={...R},i.forEach(o=>{const s=o.replace("av-",""),a=document.getElementById(o);a&&(a.value=R[s]||"")}),F()})}async function fn(e){const t=m=>{var x;return((x=document.getElementById(m))==null?void 0:x.value)||""},n=t("cb-surname-real").trim(),i=t("cb-surname-enc").trim()||ue(n);if(!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}mt();const d={firstname:t("cb-firstname").trim(),surname_real:n,surname_real:i,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:J,skin:J.skin||"blanc",hair:J.hairColor||"marron",hair_length:"court"},{error:l}=await _.from("players").insert(d);if(l){e("Erreur: "+l.message,"error");return}e(`✅ Joueur "${d.firstname} ${d.surname_real}" enregistré !`,"success")}function yn(e){const t=pn.map(([o,s])=>`<option value="${o}">${s} (${o})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(o=>`<option value="${o.id}" data-logo="${o.logo_url||""}">${o.encoded_name}</option>`).join(""),i=je.map(o=>`<option value="${o}">${o}</option>`).join(""),d='<option value="">Aucun</option>'+je.map(o=>`<option value="${o}">${o}</option>`).join(""),l=cn.map(o=>`<option value="${o}">${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join(""),m=(o,s,a)=>Object.entries(s).map(([r,p])=>`<option value="${r}" ${r===(a||"")?"selected":""}>${p.label}</option>`).join(""),x=Object.keys(kt).map(o=>`<option value="${o}" ${o===R.skin?"selected":""}>${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join(""),E=Object.keys(Lt).map(o=>`<option value="${o}" ${o===R.hairColor?"selected":""}>${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join("");return`
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
          <div><label>Rareté</label><select id="cb-rarity">${l}</select></div>
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
              <select id="av-skin">${x}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${m("av-hair",St,R.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${E}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${m("av-eyebrows",Ct,R.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${m("av-eyes",Tt,R.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${m("av-nose",Mt,R.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${m("av-mouth",zt,R.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${m("av-beard",Rt,R.beard)}</select>
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
  `}async function gt(e,{toast:t}){const[{data:n,error:i},{data:d},{data:l}]=await Promise.all([_.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").order("created_at",{ascending:!1}),_.from("user_solo_progress").select("user_id, unlocked_level"),_.rpc("admin_get_user_emails")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const m={};(d||[]).forEach(s=>{m[s.user_id]=s.unlocked_level});const x={};(l||[]).forEach(s=>{x[s.id]=s.email});const E=n||[];e.innerHTML=`
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
  `,o(E),document.getElementById("search-users").addEventListener("input",s=>{const a=s.target.value.toLowerCase();o(E.filter(r=>{var p;return r.pseudo.toLowerCase().includes(a)||((p=r.club_name)==null?void 0:p.toLowerCase().includes(a))}))});function o(s){document.getElementById("users-tbody").innerHTML=s.map(a=>{const r=a.mmr??1e3,p=a.mmr_deviation??350,c=a.placement_matches??0,g=Dt(r),u=a.ranked_wins??0,b=a.ranked_losses??0,L=a.ranked_draws??0,k=u+b+L,y=k>0?Math.round(u/k*100):null,w=c<10,h=p<80?"#1A6B3C":p<150?"#e67e22":"#bb2020";return`
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
            <div style="color:var(--gray-600)">Niv. Solo ${m[a.id]??1}</div>
          </td>
          <td style="font-size:12px">${a.wins}V / ${a.draws}N / ${a.losses}D</td>
          <td style="font-size:12px">🥇${a.trophies_top1} 🥈${a.trophies_top2} 🥉${a.trophies_top3}</td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:5px">
              <span style="font-size:16px">${g.emoji}</span>
              <span style="font-weight:700;color:${g.color}">${g.label}</span>
            </div>
            ${w?`<div style="font-size:10px;color:#e67e22">${c}/10 placement${c<10?` (${10-c} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${u}V ${L}N ${b}D${y!==null?` · ${y}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${r}</div>
            <div style="font-size:10px;color:${h}">RD ±${Math.round(p)}</div>
          </td>
          <td>
            ${a.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td>
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${a.id}" data-is-admin="${a.is_admin}">
              ${a.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll(".btn-edit-credits").forEach(a=>{a.addEventListener("click",async()=>{const r=a.dataset.user,p=Number(a.dataset.current)||0,c=prompt("Nouveau solde de crédits :",p);if(c===null)return;const g=parseInt(c.replace(/\s/g,""),10);if(isNaN(g)||g<0){t("Valeur invalide","error");return}const{data:u,error:b}=await _.rpc("admin_update_user_credits",{p_user_id:r,p_new_credits:g});if(b){t(b.message,"error");return}if(!(u!=null&&u.success)){t((u==null?void 0:u.error)||"Échec de la mise à jour","error");return}t("Crédits mis à jour ✅","success");const L=document.getElementById(`credits-display-${r}`);L&&(L.textContent=`${g.toLocaleString("fr")} cr.`),a.dataset.current=g})}),document.querySelectorAll("[data-toggle-admin]").forEach(a=>{a.addEventListener("click",async()=>{const r=a.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${r?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:p}=await _.from("users").update({is_admin:r}).eq("id",a.dataset.toggleAdmin);p?t(p.message,"error"):(t("Rôle mis à jour ✅","success"),gt(e,{toast:t}))})})}}const bn=[{value:"normal",label:"Normal",color:"#ccc"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function ft(e,t){var E;const{toast:n}=t,{data:i,error:d}=await _.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_real, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(d){e.innerHTML=`<p style="color:var(--danger)">${d.message}</p>`;return}const l=i||[],m=l.filter(o=>o.status==="active").length,x=l.filter(o=>o.status==="sold").length;e.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px">
      <button id="btn-price-grid" class="btn btn-primary">📊 Grille des prix</button>
      <div style="display:flex;gap:12px">
        <div class="card-panel" style="min-width:120px;text-align:center;padding:12px 20px">
          <div style="font-size:22px;font-weight:700;color:#1A6B3C">${m}</div>
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
            ${l.map(o=>{var p,c,g,u;const s=(p=o.card)==null?void 0:p.player,a=s?`${s.firstname} ${s.surname_real}`:((c=o.card)==null?void 0:c.card_type)||"—",r={active:"#1A6B3C",sold:"#D4A017",cancelled:"#888"};return`<tr>
                <td><b>${a}</b>${s?`<div style="font-size:10px;color:var(--tile-fg-dim)">${s.rarity} · ${s.job}</div>`:""}</td>
                <td style="font-size:12px">${((g=o.seller)==null?void 0:g.pseudo)||"—"}</td>
                <td style="font-size:12px">${((u=o.buyer)==null?void 0:u.pseudo)||"—"}</td>
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
  `,document.querySelectorAll("[data-cancel]").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:s}=await _.from("market_listings").update({status:"cancelled"}).eq("id",o.dataset.cancel);s?n(s.message,"error"):(n("Annonce annulée","success"),ft(e,t))})}),(E=document.getElementById("btn-price-grid"))==null||E.addEventListener("click",()=>vn(t))}async function vn(e){await ve(e)}function xn(){const e=document.getElementById("modal-overlay");if(!e||e._pgBlocker)return;const t=n=>{n.target===n.currentTarget&&n.stopImmediatePropagation()};e.addEventListener("click",t,!0),e._pgBlocker=t}function fe(){const e=document.getElementById("modal-overlay");e!=null&&e._pgBlocker&&(e.removeEventListener("click",e._pgBlocker,!0),delete e._pgBlocker)}async function ve(e){var p,c;const{openModal:t,closeModal:n,toast:i}=e,{data:d,error:l}=await _.from("sell_price_configs").select("*").order("rarity").order("note_min");if(l){i(l.message,"error");return}const m=g=>bn.map(u=>`<option value="${u.value}" ${u.value===g?"selected":""}>${u.label}</option>`).join(""),x=g=>`
    <tr data-row="${g.id}">
      <td style="padding:4px 8px">
        <select data-field="rarity" data-id="${g.id}" style="width:100%;padding:6px;font-size:13px">${m(g.rarity)}</select>
      </td>
      <td style="padding:4px 8px">
        <input data-field="note_min" data-id="${g.id}" type="number" min="0" max="999" value="${g.note_min}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="note_max" data-id="${g.id}" type="number" min="0" max="999" value="${g.note_max}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="price_min" data-id="${g.id}" type="number" min="0" value="${g.price_min}" style="width:100%;padding:6px;text-align:right;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="price_max" data-id="${g.id}" type="number" min="0" value="${g.price_max}" style="width:100%;padding:6px;text-align:right;font-size:13px">
      </td>
      <td style="text-align:center;padding:4px 8px">
        <button class="btn btn-danger btn-sm" data-del-row="${g.id}">🗑️</button>
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
  `),xn(),(p=document.getElementById("pg-close"))==null||p.addEventListener("click",()=>{fe(),n()});function s(g){const u=g.dataset.id,b=g.dataset.field,L=b==="rarity"?g.value:Number(g.value)||0;return a(u,{[b]:L},g)}async function a(g,u,b){const L=document.querySelector(`tr[data-row="${g}"]`),k=f=>L.querySelector(`[data-field="${f}"]`),y="note_min"in u?u.note_min:Number(k("note_min").value),w="note_max"in u?u.note_max:Number(k("note_max").value),h="price_min"in u?u.price_min:Number(k("price_min").value),v="price_max"in u?u.price_max:Number(k("price_max").value);if(y>w){i("Note min doit être ≤ note max","error");return}if(h>v){i("Prix min doit être ≤ prix max","error");return}const{error:$}=await _.from("sell_price_configs").update(u).eq("id",g);if($){i($.message,"error");return}b&&(b.style.transition="background .3s",b.style.background="#e8f8ee",setTimeout(()=>{b.style.background=""},500))}function r(){document.querySelectorAll("#pg-tbody [data-field]").forEach(g=>{g.addEventListener("change",()=>s(g))})}r(),document.querySelectorAll("[data-del-row]").forEach(g=>{g.addEventListener("click",async()=>{confirm("Supprimer cette ligne ?")&&(await _.from("sell_price_configs").delete().eq("id",g.dataset.delRow),i("Ligne supprimée","success"),fe(),ve(e))})}),(c=document.getElementById("pg-add-row"))==null||c.addEventListener("click",async()=>{var k;const g={rarity:"normal",note_min:0,note_max:20,price_min:2500,price_max:15e3},{data:u,error:b}=await _.from("sell_price_configs").insert(g).select().single();if(b){i(b.message,"error");return}const L=document.getElementById("pg-tbody");L.querySelector("td[colspan]")&&(L.innerHTML=""),L.insertAdjacentHTML("beforeend",x(u)),r(),(k=document.querySelector(`[data-del-row="${u.id}"]`))==null||k.addEventListener("click",async function(){confirm("Supprimer cette ligne ?")&&(await _.from("sell_price_configs").delete().eq("id",u.id),i("Ligne supprimée","success"),fe(),ve(e))}),i("Ligne ajoutée — modifie les valeurs directement","success")})}async function hn(e,{toast:t}){e.innerHTML=`
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
`;n.forEach(l=>{d+=[l.real_name,l.encoded_name,l.country_code,l.logo_url||""].map(Pe).join(",")+`
`}),ae("clubs_export.csv",d),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:i}=await _.from("players").select("firstname,surname_real,surname_real,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_real");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let d=`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(l=>{var m;d+=[l.firstname,l.surname_real,l.surname_real,l.country_code,((m=l.clubs)==null?void 0:m.encoded_name)||"",l.job,l.job2||"",l.note_g,l.note_d,l.note_m,l.note_a,l.rarity,l.note_min??"",l.note_max??"",l.skin,l.hair,l.hair_length,l.sell_price].map(Pe).join(",")+`
`}),ae("players_export.csv",d),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const d=document.getElementById("clubs-import-result");d.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const l=await i.text(),m=Fe(l);if(m.length===0){d.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let x=0,E=0;const o=[];for(const s of m){if(!s.real_name||!s.encoded_name||!s.country_code){E++,o.push(`Ligne ignorée (champs manquants): ${s.real_name||"?"}`);continue}const a={real_name:s.real_name,encoded_name:s.encoded_name.toUpperCase(),country_code:s.country_code.toUpperCase().slice(0,2),logo_url:s.logo_url||null},{error:r}=await _.from("clubs").upsert(a,{onConflict:"encoded_name"});r?(E++,o.push(`${s.encoded_name}: ${r.message}`)):x++}d.innerHTML=`<div style="color:var(--green)">✅ ${x} clubs importés</div>
        ${E>0?`<div style="color:#c0392b">❌ ${E} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${o.slice(0,10).join("<br>")}</div>`:""}`,t(`${x} clubs importés`,"success")}catch(l){d.innerHTML=`<span style="color:#c0392b">Erreur : ${l.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const d=document.getElementById("players-import-result");d.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const l=await i.text(),m=Fe(l);if(m.length===0){d.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:x}=await _.from("clubs").select("id,encoded_name"),E={};(x||[]).forEach(b=>{E[b.encoded_name.toUpperCase()]=b.id});let o=0,s=0;const a=[],r=["GK","DEF","MIL","ATT"],p=["normal","pepite","papyte","legende"],c=["blanc","metisse","typ","noir"],g=["blond","marron","noir","chauve"],u=["rase","court","milong","long"];for(const b of m){if(!b.firstname||!b.surname_real||!b.country_code||!b.job){s++,a.push(`Ligne ignorée (champs requis manquants): ${b.firstname||"?"}`);continue}if(!r.includes(b.job)){s++,a.push(`${b.firstname}: job invalide "${b.job}"`);continue}const L=b.club_encoded_name&&E[b.club_encoded_name.toUpperCase()]||null,k={firstname:b.firstname,surname_real:b.surname_real,surname_real:b.surname_real||ue(b.surname_real),country_code:b.country_code.toUpperCase().slice(0,2),club_id:L,job:b.job,job2:r.includes(b.job2)?b.job2:null,note_g:parseInt(b.note_g)||0,note_d:parseInt(b.note_d)||0,note_m:parseInt(b.note_m)||0,note_a:parseInt(b.note_a)||0,rarity:p.includes(b.rarity)?b.rarity:"normal",note_min:b.note_min!==""&&b.note_min!=null?parseInt(b.note_min):null,note_max:b.note_max!==""&&b.note_max!=null?parseInt(b.note_max):null,skin:c.includes(b.skin)?b.skin:"blanc",hair:g.includes(b.hair)?b.hair:"noir",hair_length:u.includes(b.hair_length)?b.hair_length:"court",sell_price:parseInt(b.sell_price)||0},{error:y}=await _.from("players").insert(k);y?(s++,a.push(`${b.firstname} ${b.surname_real}: ${y.message}`)):o++}d.innerHTML=`<div style="color:var(--green)">✅ ${o} joueurs importés</div>
        ${s>0?`<div style="color:#c0392b">❌ ${s} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${a.slice(0,10).join("<br>")}</div>`:""}`,t(`${o} joueurs importés`,"success")}catch(l){d.innerHTML=`<span style="color:#c0392b">Erreur : ${l.message}</span>`}n.target.value=""})}function Pe(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function ae(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(n),d=document.createElement("a");d.href=i,d.download=e,d.click(),URL.revokeObjectURL(i)}function Fe(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(m=>m.trim());if(t.length<2)return[];const n=t[0],i=n.split(";").length>n.split(",").length?";":",",d=Oe(n,i).map(m=>m.trim().replace(/^\uFEFF/,"").toLowerCase()),l=[];for(let m=1;m<t.length;m++){if(!t[m].trim())continue;const x=Oe(t[m],i),E={};d.forEach((o,s)=>{E[o]=(x[s]||"").trim()}),!Object.values(E).every(o=>!o)&&l.push(E)}return l}function Oe(e,t=","){const n=[];let i="",d=!1;for(let l=0;l<e.length;l++){const m=e[l];d?m==='"'?e[l+1]==='"'?(i+='"',l++):d=!1:i+=m:m==='"'?d=!0:m===t?(n.push(i),i=""):i+=m}return n.push(i),n}const En={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function _n(e,{toast:t}){const n=Object.keys(ge);let i=n[0];const{data:d}=await _.from("formation_links_overrides").select("formation, links"),l={};(d||[]).forEach(s=>{l[s.formation]=s.links});let m=new Set;function x(s,a){return[s,a].sort().join("-")}function E(s){const a=l[s]||ge[s]||[];m=new Set(a.map(([r,p])=>x(r,p)))}E(i),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${n.map(s=>`<option value="${s}" ${s===i?"selected":""}>${s}</option>`).join("")}
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
        <div style="font-weight:700;font-size:13px;margin-bottom:8px">Liens (${m.size}/? actifs)</div>
        <div id="links-list" style="display:flex;flex-direction:column;gap:4px;max-height:520px;overflow-y:auto"></div>
      </div>
    </div>
  `;function o(){const s=jt[i]||{},a=ze(i),r=320,p=400,c=22;function g(y){const w=s[y];return w?{x:w.x*r,y:w.y*p}:null}let u=`<svg width="${r}" height="${p}" viewBox="0 0 ${r} ${p}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;a.forEach(([y,w],h)=>{const v=g(y),$=g(w);if(!v||!$)return;const f=x(y,w),I=m.has(f),B=I?"#3b82f6":"#999",A=I?.95:.35,S=I?4:3;u+=`<line x1="${v.x}" y1="${v.y}" x2="${$.x}" y2="${$.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${f}" style="cursor:pointer"/>`,u+=`<line x1="${v.x}" y1="${v.y}" x2="${$.x}" y2="${$.y}"
        stroke="${B}" stroke-width="${S}" stroke-dasharray="${I?"none":"4,3"}"
        opacity="${A}" pointer-events="none" data-line-key="${f}"/>`});for(const y of Object.keys(s)){const w=g(y);if(!w)continue;const h=y.replace(/\d+/,""),v=En[h]||"#555";u+=`<circle cx="${w.x}" cy="${w.y}" r="${c}" fill="${v}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,u+=`<text x="${w.x}" y="${w.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${y}</text>`}u+="</svg>",document.getElementById("field-wrap").innerHTML=u;const b=document.getElementById("links-list");b.innerHTML=a.map(([y,w])=>{const h=x(y,w),v=m.has(h);return`
        <button class="link-toggle" data-key="${h}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${v?"#3b82f6":"#ddd"};
          background:${v?"#eaf2ff":"#fafafa"};
          color:${v?"#1d4ed8":"#888"}">
          <span>${y} ↔ ${w}</span>
          <span>${v?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const L=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');L&&(L.textContent=`Liens (${m.size}/${a.length} actifs)`);function k(y){m.has(y)?m.delete(y):m.add(y),o()}e.querySelectorAll(".link-hit").forEach(y=>{y.addEventListener("click",()=>k(y.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(y=>{y.addEventListener("click",()=>k(y.dataset.key))})}o(),document.getElementById("formation-select").addEventListener("change",s=>{i=s.target.value,E(i),o()}),document.getElementById("reset-btn").addEventListener("click",()=>{const s=ge[i]||[];m=new Set(s.map(([a,r])=>x(a,r))),o(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const a=ze(i).filter(([p,c])=>m.has(x(p,c))),{error:r}=await _.from("formation_links_overrides").upsert({formation:i,links:a,updated_at:new Date().toISOString()});if(r){t(r.message,"error");return}l[i]=a,t(`Liens enregistrés pour ${i} (${a.length} actifs)`,"success")})}const wn=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],In=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],$n=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function kn(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await _.from("booster_configs").select("*").order("sort_order");let n=null,i=[],d=null;const l=()=>window.innerWidth<700;async function m(){if(!n){i=[];return}if(n!==d){const{data:a}=await _.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");i=a||[],d=n}}function x(){return`
    <div id="booster-list" style="background:#fff;${l()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
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
    </div>`;const r=i.reduce((c,g)=>c+Number(g.percentage||0),0),p=Math.abs(r-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${l()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

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
            <span style="margin-left:10px;font-size:12px;color:${p?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${r.toFixed(1)}% ${p?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((c,g)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${g}">
            <select class="rate-type" data-idx="${g}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${wn.map(u=>`<option value="${u.value}" ${c.card_type===u.value?"selected":""}>${u.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${g}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${In.map(u=>`<option value="${u.value}" ${(c.rarity||"")===u.value?"selected":""}>${u.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${g}" type="number" min="0" max="20" value="${c.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${g}" type="number" min="0" max="20" value="${c.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${g}" type="number" min="0.1" max="100" step="0.1" value="${c.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${g}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function o(a=!1){a||await m();const r=!n&&l(),p=n&&l();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!l()||r||!n?x():""}
      ${!l()||p?E():""}
    </div>`,s()}function s(){var p,c,g,u,b,L,k;const a=y=>e.querySelector(y);e.querySelectorAll(".booster-row").forEach(y=>{y.addEventListener("click",w=>{w.target.closest(".btn-delete")||(n=y.dataset.id,d=null,o())})}),(p=a("#btn-back"))==null||p.addEventListener("click",()=>{n=null,o()}),(c=a("#btn-new"))==null||c.addEventListener("click",async()=>{const y=prompt("Nom du nouveau booster :");if(!(y!=null&&y.trim()))return;const{data:w,error:h}=await _.from("booster_configs").insert({name:y.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(h){alert(h.message);return}t.push(w),n=w.id,d=null,o()}),e.querySelectorAll(".btn-delete").forEach(y=>{y.addEventListener("click",async w=>{if(w.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await _.from("booster_configs").delete().eq("id",y.dataset.id);const h=t.findIndex(v=>v.id===y.dataset.id);h>-1&&t.splice(h,1),n===y.dataset.id&&(n=null,d=null),o()})}),(g=a("#btn-cancel"))==null||g.addEventListener("click",()=>{n=null,o()}),(u=a("#f-price-type"))==null||u.addEventListener("change",y=>{const w=a("#credits-field");w&&(w.style.opacity=y.target.value!=="credits"?"0.4":"1")}),(b=a("#btn-pick-icon"))==null||b.addEventListener("click",async()=>{var w;const y=a("#icon-picker-grid");if(y){if(y.style.display!=="none"){y.style.display="none";return}y.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',y.style.display="block";try{const v=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),$=Array.isArray(v)?v.filter(I=>I.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(I.name)):[];if(!$.length){y.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const f=((w=a("#f-image-url"))==null?void 0:w.value)||"";y.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${$.map(I=>`
          <div class="icon-pick-item" data-name="${I.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${I.name===f?"#1A6B3C":"#ddd"};background:${I.name===f?"#f0f7f0":"#fff"}">
            <img src="/icons/${I.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,y.querySelectorAll(".icon-pick-item").forEach(I=>{I.addEventListener("click",()=>{const B=a("#f-image-url");B&&(B.value=I.dataset.name),y.style.display="none"})})}catch(h){y.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${h.message}</div>`}}});function r(){e.querySelectorAll("[data-rate-idx]").forEach(y=>{var h,v,$,f,I;const w=Number(y.dataset.rateIdx);w>=0&&w<i.length&&(i[w].card_type=((h=y.querySelector(".rate-type"))==null?void 0:h.value)||"player",i[w].rarity=((v=y.querySelector(".rate-rarity"))==null?void 0:v.value)||null,i[w].note_min=Number(($=y.querySelector(".rate-note-min"))==null?void 0:$.value)||null,i[w].note_max=Number((f=y.querySelector(".rate-note-max"))==null?void 0:f.value)||null,i[w].percentage=Number((I=y.querySelector(".rate-pct"))==null?void 0:I.value)||0)})}(L=a("#btn-add-rate"))==null||L.addEventListener("click",()=>{r(),i.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),o(!0)}),e.querySelectorAll(".btn-del-rate").forEach(y=>{y.addEventListener("click",()=>{r(),i.splice(Number(y.dataset.idx),1),o(!0)})}),(k=a("#btn-save"))==null||k.addEventListener("click",async()=>{var f,I,B,A,S,C,T,O,U,H,P,j,ie;const y=(t||[]).find(M=>M.id===n);if(!y)return;const w=[];e.querySelectorAll("[data-rate-idx]").forEach(M=>{var Z,Q,X,ee,te;const Y=Number(M.dataset.rateIdx);w.push({booster_id:n,card_type:((Z=M.querySelector(".rate-type"))==null?void 0:Z.value)||"player",rarity:((Q=M.querySelector(".rate-rarity"))==null?void 0:Q.value)||null,note_min:Number((X=M.querySelector(".rate-note-min"))==null?void 0:X.value)||null,note_max:Number((ee=M.querySelector(".rate-note-max"))==null?void 0:ee.value)||null,percentage:Number((te=M.querySelector(".rate-pct"))==null?void 0:te.value)||0,sort_order:Y});const N=w[w.length-1];N.rarity||(N.rarity=null),N.note_min||(N.note_min=null),N.note_max||(N.note_max=null)});const h=w.reduce((M,Y)=>M+Y.percentage,0);if(w.length&&Math.abs(h-100)>.5){alert(`La somme doit faire 100% (actuellement ${h.toFixed(1)}%)`);return}const v={name:((I=(f=a("#f-name"))==null?void 0:f.value)==null?void 0:I.trim())||y.name,image_url:((A=(B=a("#f-image-url"))==null?void 0:B.value)==null?void 0:A.trim())||null,price_type:(S=a("#f-price-type"))==null?void 0:S.value,price_credits:Number((C=a("#f-price-credits"))==null?void 0:C.value)||0,card_count:Number((T=a("#f-card-count"))==null?void 0:T.value)||5,is_active:((O=a("#f-active"))==null?void 0:O.checked)??y.is_active,allow_duplicates:((U=a("#f-allow-dup"))==null?void 0:U.checked)??!0,sort_order:Number((H=a("#f-sort"))==null?void 0:H.value)||0,max_per_user:(P=a("#f-max-per-user"))!=null&&P.value?Number(a("#f-max-per-user").value):null,available_from:((j=a("#f-available-from"))==null?void 0:j.value)||null,available_until:((ie=a("#f-available-until"))==null?void 0:ie.value)||null},{error:$}=await _.from("booster_configs").update(v).eq("id",n);if($){alert($.message);return}if(Object.assign(y,v),await _.from("booster_drop_rates").delete().eq("booster_id",n),w.length){const{error:M}=await _.from("booster_drop_rates").insert(w);if(M){alert(M.message);return}}i=w,d=n,alert("✅ Booster enregistré !"),o(!0)})}o()}const yt=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function Ln(e){await ke(e)}async function ke(e){const{data:t,error:n}=await _.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
          ${(t||[]).map(i=>Bn(i)).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>Ue(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>An(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const d=(t||[]).find(l=>l.id===i.dataset.edit);d&&i.addEventListener("click",()=>Ue(d))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await _.from("sell_price_configs").delete().eq("id",i.dataset.delete),await ke(e))})})}function Bn(e){const t=yt.find(n=>n.value===e.rarity);return`
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
    </tr>`}function Ue(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function An(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,d=parseInt(document.getElementById("form-note-min").value)||1,l=parseInt(document.getElementById("form-note-max").value)||10;if(d>l){alert("Note min doit être ≤ note max");return}const m={rarity:n,price:i,note_min:d,note_max:l,updated_at:new Date().toISOString()};let x;if(t?{error:x}=await _.from("sell_price_configs").update(m).eq("id",t):{error:x}=await _.from("sell_price_configs").insert(m),x){alert("Erreur : "+x.message);return}document.getElementById("config-form").style.display="none",await ke(e)}async function Sn(e){await Le(e)}async function Le(e){const{data:t}=await _.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>He(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Mn(e)),e.querySelectorAll("[data-edit-row]").forEach(n=>{const i=(t||[]).find(d=>d.id===n.dataset.editRow);i&&n.addEventListener("click",()=>He(i))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await _.from("patch_notes").delete().eq("id",n.dataset.delete),await Le(e))})})}function Cn(e){const t=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function He(e){const t=document.getElementById("article-form");t.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img-current").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-img-file").value="";const n=document.getElementById("form-art-img-preview");n.innerHTML=e!=null&&e.image_url?`<img src="${e.image_url}" style="width:100%;height:100%;object-fit:cover">`:'<span style="font-size:20px;opacity:.4">📰</span>',document.getElementById("form-art-img-file").onchange=l=>{var E;const m=(E=l.target.files)==null?void 0:E[0];if(!m)return;const x=new FileReader;x.onload=()=>{n.innerHTML=`<img src="${x.result}" style="width:100%;height:100%;object-fit:cover">`},x.readAsDataURL(m)},document.getElementById("form-art-pub").checked=e?e.is_published:!0;const i=new Date((e==null?void 0:e.published_at)||Date.now()),d=new Date(i.getTime()-i.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=d,t.scrollIntoView({behavior:"smooth"})}async function Tn(e){const t=(e.name.split(".").pop()||"png").toLowerCase(),n=`journal/${Date.now()}.${t}`,{error:i}=await _.storage.from("assets").upload(n,e,{upsert:!0,cacheControl:"3600"});if(i)throw i;const{data:d}=_.storage.from("assets").getPublicUrl(n);return d.publicUrl}async function Mn(e){var p;const t=document.getElementById("form-id").value,n=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),d=((p=document.getElementById("form-art-img-file").files)==null?void 0:p[0])||null,l=document.getElementById("form-art-img-current").value||null,m=document.getElementById("form-art-pub").checked,x=document.getElementById("form-art-date").value,E=document.getElementById("form-save");if(!n){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}let o=l;if(d)try{E&&(E.textContent="📤 Envoi de l'image…"),o=await Tn(d)}catch(c){alert("Erreur upload image : "+c.message),E&&(E.textContent="💾 Enregistrer");return}const s=x?new Date(x).toISOString():new Date().toISOString(),a={title:n,description:i,image_url:o,is_published:m,published_at:s};let r;if(t?{error:r}=await _.from("patch_notes").update(a).eq("id",t):{error:r}=await _.from("patch_notes").insert(a),r){alert("Erreur : "+r.message);return}document.getElementById("article-form").style.display="none",await Le(e)}async function zn(e){await W(e)}async function W(e){var s,a,r,p,c,g,u,b,L,k,y,w;const{data:t}=await _.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
    </div>`,(s=document.getElementById("ts-add"))==null||s.addEventListener("click",()=>qe(null,(t==null?void 0:t.length)||0)),(a=document.getElementById("ts-reset"))==null||a.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:h}=await _.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(h?"Erreur : "+h.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(r=document.getElementById("ts-cancel"))==null||r.addEventListener("click",bt),(p=document.getElementById("ts-save"))==null||p.addEventListener("click",()=>jn(e)),(c=document.getElementById("ts-preview-btn"))==null||c.addEventListener("click",Dn);const n=document.getElementById("ts-editor"),i=()=>{const h=document.getElementById("ts-content");h&&n&&(h.value=n.innerHTML)};n==null||n.addEventListener("input",i),n==null||n.addEventListener("blur",i);const d=()=>{document.activeElement!==n&&(n==null||n.focus())};(g=document.getElementById("ts-toolbar"))==null||g.querySelectorAll("[data-cmd]").forEach(h=>{h.addEventListener("mousedown",v=>{v.preventDefault(),d();const $=h.dataset.cmd;$.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,$.split(":")[1]):document.execCommand($,!1,null),i()})}),(u=document.getElementById("ts-insert-color"))==null||u.addEventListener("mousedown",h=>{h.preventDefault(),d();const v=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");v&&(document.execCommand("foreColor",!1,v),i())}),(b=document.getElementById("ts-clear-format"))==null||b.addEventListener("mousedown",h=>{h.preventDefault(),d(),document.execCommand("removeFormat",!1,null),i()}),n==null||n.addEventListener("focus",()=>{n&&(n.style.borderColor="#1A6B3C")}),n==null||n.addEventListener("blur",()=>{n&&(n.style.borderColor="#ddd")});const l=document.getElementById("ts-image"),m=document.getElementById("ts-img-preview"),x=document.getElementById("ts-img-preview-el"),E=document.getElementById("ts-img-picker-grid"),o=()=>{var v;const h=(v=l==null?void 0:l.value)==null?void 0:v.trim();if(h){const $="/";x.src=`${$}icons/${h}`,m.style.display="block"}else m.style.display="none"};l==null||l.addEventListener("input",o),(L=document.getElementById("ts-img-clear"))==null||L.addEventListener("click",()=>{l&&(l.value=""),m.style.display="none",E.style.display="none"}),(k=document.getElementById("ts-img-pick"))==null||k.addEventListener("click",async()=>{if(E.style.display!=="none"){E.style.display="none";return}E.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',E.style.display="block";try{const v=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),$=Array.isArray(v)?v.filter(I=>I.name.startsWith("tuto_")):[];if(!$.length){E.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const f="/";E.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+$.map(I=>`
          <div data-pick="${I.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${f}icons/${I.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",E.querySelectorAll("[data-pick]").forEach(I=>{I.addEventListener("click",()=>{l&&(l.value=I.dataset.pick),o(),E.style.display="none"})})}catch(h){E.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+h.message+"</div>"}}),(y=document.getElementById("ts-color"))==null||y.addEventListener("input",h=>{const v=document.getElementById("ts-color-hex");v&&(v.value=h.target.value)}),(w=document.getElementById("ts-color-hex"))==null||w.addEventListener("input",h=>{const v=h.target.value;if(/^#[0-9a-fA-F]{6}$/.test(v)){const $=document.getElementById("ts-color");$&&($.value=v)}}),e.querySelectorAll("[data-edit-row]").forEach(h=>{const v=(t||[]).find($=>$.id===h.dataset.editRow);v&&h.addEventListener("click",()=>qe(v))}),e.querySelectorAll("[data-delete]").forEach(h=>{h.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await _.from("tutorial_steps").delete().eq("id",h.dataset.delete),W(e))})}),e.querySelectorAll("[data-toggle]").forEach(h=>{h.addEventListener("click",async()=>{const v=(t||[]).find($=>$.id===h.dataset.toggle);v&&(await _.from("tutorial_steps").update({is_active:!v.is_active}).eq("id",v.id),W(e))})}),e.querySelectorAll("[data-up]").forEach(h=>{h.addEventListener("click",async()=>{const v=t||[],$=v.findIndex(f=>f.id===h.dataset.up);$<=0||(await Promise.all([_.from("tutorial_steps").update({step_order:v[$-1].step_order}).eq("id",v[$].id),_.from("tutorial_steps").update({step_order:v[$].step_order}).eq("id",v[$-1].id)]),W(e))})}),e.querySelectorAll("[data-down]").forEach(h=>{h.addEventListener("click",async()=>{const v=t||[],$=v.findIndex(f=>f.id===h.dataset.down);$<0||$>=v.length-1||(await Promise.all([_.from("tutorial_steps").update({step_order:v[$+1].step_order}).eq("id",v[$].id),_.from("tutorial_steps").update({step_order:v[$].step_order}).eq("id",v[$+1].id)]),W(e))})})}function Rn(e){return`
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
  </div>`}function qe(e,t=0){document.getElementById("ts-form-empty").style.display="none",document.getElementById("ts-form-content").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const n=document.getElementById("ts-editor");n&&(n.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??t,document.getElementById("ts-active").checked=e?e.is_active:!0;const i=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=i,document.getElementById("ts-color-hex").value=i;const d=(e==null?void 0:e.image_url)||"",l=document.getElementById("ts-image");l&&(l.value=d);const m=document.getElementById("ts-img-preview"),x=document.getElementById("ts-img-preview-el");if(d&&m&&x){const E="/";x.src=`${E}icons/${d}`,m.style.display="block"}else m&&(m.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function bt(){document.getElementById("ts-form-content").style.display="none",document.getElementById("ts-form-empty").style.display="block",document.getElementById("ts-preview-area").innerHTML=""}function Dn(){var o,s;const e=document.getElementById("ts-emoji").value||"⚽",t=document.getElementById("ts-title").value||"Titre",n=document.getElementById("ts-editor"),i=n?n.innerHTML:document.getElementById("ts-content").value||"",d=document.getElementById("ts-color-hex").value||"#1A6B3C",l=(s=(o=document.getElementById("ts-image"))==null?void 0:o.value)==null?void 0:s.trim(),x=l?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${l}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",E=document.getElementById("ts-preview-area");E.innerHTML=`
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
        <div style="padding:${l?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${i}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${d};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,E.querySelectorAll("ul,ol").forEach(a=>{a.style.paddingLeft="20px",a.style.margin="6px 0"}),E.querySelectorAll("li").forEach(a=>{a.style.marginBottom="4px"}),E.querySelectorAll("p").forEach(a=>{a.style.marginBottom="8px"})}async function jn(e){var a,r;const t=document.getElementById("ts-id").value,n=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),d=document.getElementById("ts-editor"),l=(d?d.innerHTML:document.getElementById("ts-content").value).trim(),m=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",x=parseInt(document.getElementById("ts-order").value)||0,E=document.getElementById("ts-active").checked;if(!i||!l){alert("Titre et contenu sont obligatoires.");return}const o={emoji:n,title:i,content:l,color:m,step_order:x,is_active:E,image_url:((r=(a=document.getElementById("ts-image"))==null?void 0:a.value)==null?void 0:r.trim())||null};let s;if(t?{error:s}=await _.from("tutorial_steps").update(o).eq("id",t):{error:s}=await _.from("tutorial_steps").insert(o),s){alert("Erreur : "+s.message);return}bt(),W(e)}const vt="/",xt=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function Nn(e,t){await ce(e,t)}async function ce(e,t){var d,l;const[{data:n},{data:i}]=await Promise.all([_.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),_.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;gap:10px;flex-wrap:wrap">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">🏟️ Stades</h2>
        <div style="display:flex;gap:8px">
          <button id="st-gen-countries-btn" class="btn btn-ghost">🌍 Créer les stades Pays manquants</button>
          <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
        </div>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="st-list">
        ${(n||[]).length?(n||[]).map(m=>Pn(m)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucun stade créé.</div>'}
      </div>
    </div>`,(d=document.getElementById("st-add-btn"))==null||d.addEventListener("click",()=>Ge(null,i,e,t)),(l=document.getElementById("st-gen-countries-btn"))==null||l.addEventListener("click",async()=>{const{toast:m}=t,x=new Set((n||[]).filter(r=>!r.club_id&&r.country_code).map(r=>r.country_code)),E=xt.filter(([r])=>!x.has(r));if(!E.length){m("Tous les pays ont déjà un stade.","info");return}if(!confirm(`Créer ${E.length} stade(s) "Pays" manquant(s) ?`))return;const o=E.map(([r,p])=>({name:`Stade ${p}`,club_id:null,country_code:r})),{data:s,error:a}=await _.from("stadium_definitions").insert(o).select();if(a){m("Erreur : "+a.message,"error");return}s!=null&&s.length&&await _.from("cards").insert(s.map(r=>({card_type:"stadium",stadium_id:r.id}))),m(`${(s==null?void 0:s.length)||0} stade(s) Pays créé(s) ✅`,"success"),ce(e,t)}),e.querySelectorAll("[data-edit-stadium]").forEach(m=>{m.addEventListener("click",()=>{const x=(n||[]).find(E=>E.id===m.dataset.editStadium);x&&Ge(x,i,e,t)})})}function Pn(e){var d,l;let t=null;e.image_url?t=e.image_url.startsWith("http")?e.image_url:`${vt}icons/${e.image_url}`:(d=e.club)!=null&&d.logo_url?t=e.club.logo_url:e.country_code&&(t=`https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/64.png`);const n=((l=e.club)==null?void 0:l.encoded_name)||e.country_code||"—",i=Xe(e.name,t,`${n}<br>+10 ⭐`,{width:140});return`<div data-edit-stadium="${e.id}" style="cursor:pointer;transition:transform .15s" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
    ${i}
  </div>`}function Ge(e,t,n,i){var s,a,r;const{openModal:d,closeModal:l,toast:m}=i,x=`
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
            ${xt.map(([p,c])=>`<option value="${p}" ${(e==null?void 0:e.country_code)===p?"selected":""}>${c} (${p})</option>`).join("")}
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
  `);const o=()=>{var v,$,f,I,B,A,S;const p=((v=document.getElementById("st-name"))==null?void 0:v.value)||"NOM DU STADE",c=(f=($=document.getElementById("st-image"))==null?void 0:$.value)==null?void 0:f.trim(),g=(B=(I=document.getElementById("st-country"))==null?void 0:I.value)==null?void 0:B.trim(),u=document.getElementById("st-club"),b=(u==null?void 0:u.selectedIndex)||0,L=u&&b>0?u.options[b].text:"",k=((S=(A=u==null?void 0:u.options[b])==null?void 0:A.getAttribute)==null?void 0:S.call(A,"data-logo"))||"";let y=null;c?y=c.startsWith("http")?c:`${vt}icons/${c}`:k?y=k:g&&(y=`https://flagsapi.com/${g.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`);const w=L||g||"—",h=document.getElementById("st-preview-card");h&&(h.innerHTML=Xe(p,y,`${w}<br>+10 ⭐`,{width:140}))};o(),["st-name","st-club","st-country","st-image"].forEach(p=>{var c,g;(c=document.getElementById(p))==null||c.addEventListener("input",o),(g=document.getElementById(p))==null||g.addEventListener("change",o)}),(s=document.getElementById("st-cancel"))==null||s.addEventListener("click",()=>l()),(a=document.getElementById("st-save"))==null||a.addEventListener("click",async()=>{const p=document.getElementById("st-name").value.trim(),c=document.getElementById("st-club").value||null,g=document.getElementById("st-country").value.trim().toUpperCase()||null,u=document.getElementById("st-image").value.trim()||null;if(!p){m("Le nom est obligatoire","error");return}const b={name:p,club_id:c,country_code:g,image_url:u},{error:L}=e?await _.from("stadium_definitions").update(b).eq("id",e.id):await _.from("stadium_definitions").insert(b);if(L){m("Erreur : "+L.message,"error");return}m(e?"Stade modifié ✅":"Stade créé ✅","success"),l(),ce(n,i)}),(r=document.getElementById("st-delete"))==null||r.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await _.from("stadium_definitions").delete().eq("id",e.id),m("Stade supprimé","success"),l(),ce(n,i))})}const G=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],Fn=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}],q=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],Ke=["GK","DEF","MIL","ATT"];async function On(e,t){await Be(e,t)}async function Be(e,t){var i;const{data:n}=await _.from("gc_definitions").select("*").order("sort_order").order("created_at");e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">⚡ Game Changers</h2>
        <button id="gc-add-btn" class="btn btn-primary">+ Nouvelle carte</button>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="gc-list">
        ${(n||[]).length?(n||[]).map(d=>Un(d)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucune carte Game Changer.</div>'}
      </div>
    </div>`,(i=document.getElementById("gc-add-btn"))==null||i.addEventListener("click",()=>Je(null,e,t)),e.querySelectorAll("[data-edit-gc]").forEach(d=>{d.addEventListener("click",()=>{const l=(n||[]).find(m=>m.id===d.dataset.editGc);l&&Je(l,e,t)})}),e.querySelectorAll(".btn-del-gc").forEach(d=>{d.addEventListener("click",async l=>{l.stopPropagation(),confirm("Supprimer cette carte Game Changer ?")&&(await _.from("gc_definitions").delete().eq("id",d.dataset.del),Be(e,t))})})}function Un(e){const t=G.find(d=>d.value===e.gc_type)||G[0],n=e.image_url?`/icons/${e.image_url}`:null,i=ye(e.name||"?",n,t.label.split(" ")[0],e.effect||"",{width:130});return`<div data-edit-gc="${e.id}" style="position:relative;cursor:pointer">
    ${i}
    <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
      <button class="btn-del-gc" data-del="${e.id}"
        style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0">✕</button>
    </div>
    ${e.is_active?"":'<div style="position:absolute;top:4px;right:4px;z-index:10;background:#555;color:#fff;font-size:9px;font-weight:700;padding:2px 6px;border-radius:8px">INACTIF</div>'}
  </div>`}function Je(e,t,n){var r,p,c,g;const{openModal:i,closeModal:d,toast:l}=n,m=!e,x=e||{name:"",gc_type:"game_changer",color:"purple",effect:"",image_url:"",sort_order:0,is_active:!0,effect_type:"BOOST_STAT",effect_params:{}},E=(()=>{const u=x.effect_params||{},b=q.find(L=>L.value===(x.effect_type||"BOOST_STAT"))||q[0];return`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${b.hasValue?`<div>
        <label>VALEUR (+N)</label>
        <input id="gc-p-value" type="number" min="1" max="5" value="${u.value||2}">
      </div>`:""}
      ${b.hasCount?`<div>
        <label>NB JOUEURS</label>
        <input id="gc-p-count" type="number" min="1" max="11" value="${u.count||1}">
      </div>`:""}
      ${b.hasTarget?`<div>
        <label>CIBLE</label>
        <select id="gc-p-target">
          <option value="home" ${(u.target||"home")==="home"?"selected":""}>Mon équipe</option>
          <option value="opponent" ${u.target==="opponent"?"selected":""}>Équipe adverse</option>
        </select>
      </div>`:""}
      ${b.hasRoles?`<div>
        <label>POSTES CIBLÉS</label>
        <div style="display:flex;gap:4px;flex-wrap:wrap">
          ${Ke.map(L=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555">
            <input type="checkbox" class="gc-p-role" value="${L}" ${!u.roles||u.roles.includes(L)?"checked":""}> ${L}
          </label>`).join("")}
        </div>
      </div>`:""}
    </div>`})(),o=`
    <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:#1a1a2e;border-radius:12px">
      <div id="gc-modal-preview">${ye(x.name||"?",x.image_url?`/icons/${x.image_url}`:null,(G.find(u=>u.value===x.gc_type)||G[0]).label.split(" ")[0],x.effect||"",{width:150})}</div>
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
            ${G.map(u=>`<option value="${u.value}" ${x.gc_type===u.value?"selected":""}>${u.label}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>COULEUR</label>
          <select id="gc-color">
            ${Fn.map(u=>`<option value="${u.value}" ${x.color===u.value?"selected":""}>${u.label}</option>`).join("")}
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
            ${q.map(u=>`<option value="${u.value}" ${(x.effect_type||"BOOST_STAT")===u.value?"selected":""}>${u.label}</option>`).join("")}
          </select>
        </div>
        <div id="gc-params-wrap">${E}</div>
      </div>
    </div>
  `;i(m?"Nouvelle carte Game Changer":`Modifier : ${x.name}`,o,`
    <button id="gc-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gc-save" class="btn btn-primary">💾 Enregistrer</button>
  `);const a=()=>{var h,v,$,f,I;const u=((h=document.getElementById("gc-name"))==null?void 0:h.value)||"?",b=((v=document.getElementById("gc-effect"))==null?void 0:v.value)||"",L=(($=document.getElementById("gc-type"))==null?void 0:$.value)||"game_changer",k=(I=(f=document.getElementById("gc-image-url"))==null?void 0:f.value)==null?void 0:I.trim(),y=G.find(B=>B.value===L)||G[0],w=document.getElementById("gc-modal-preview");w&&(w.innerHTML=ye(u,k?`/icons/${k}`:null,y.label.split(" ")[0],b,{width:150}))};["gc-name","gc-effect","gc-type","gc-image-url"].forEach(u=>{var b,L;(b=document.getElementById(u))==null||b.addEventListener("input",a),(L=document.getElementById(u))==null||L.addEventListener("change",a)}),(r=document.getElementById("gc-effect-type"))==null||r.addEventListener("change",()=>{const u=document.getElementById("gc-effect-type").value,b=q.find(k=>k.value===u)||q[0],L=document.getElementById("gc-params-wrap");L.innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${b.hasValue?'<div><label>VALEUR (+N)</label><input id="gc-p-value" type="number" min="1" max="5" value="2"></div>':""}
      ${b.hasCount?'<div><label>NB JOUEURS</label><input id="gc-p-count" type="number" min="1" max="11" value="1"></div>':""}
      ${b.hasTarget?'<div><label>CIBLE</label><select id="gc-p-target"><option value="home">Mon équipe</option><option value="opponent">Équipe adverse</option></select></div>':""}
      ${b.hasRoles?`<div><label>POSTES CIBLÉS</label><div style="display:flex;gap:4px;flex-wrap:wrap">${Ke.map(k=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555"><input type="checkbox" class="gc-p-role" value="${k}" checked> ${k}</label>`).join("")}</div></div>`:""}
    </div>`}),(p=document.getElementById("btn-pick-gc-icon"))==null||p.addEventListener("click",async()=>{var b;const u=document.getElementById("gc-icon-picker");if(u){if(u.style.display!=="none"){u.style.display="none";return}u.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',u.style.display="block";try{const k=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),y=Array.isArray(k)?k.filter(h=>h.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(h.name)):[];if(!y.length){u.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const w=((b=document.getElementById("gc-image-url"))==null?void 0:b.value)||"";u.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
        ${y.map(h=>`
        <div class="gc-icon-item" data-name="${h.name}"
          style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${h.name===w?"#7a28b8":"#ddd"};background:${h.name===w?"#f5f0ff":"#fff"}">
          <img src="/icons/${h.name}" style="height:44px;width:100%;object-fit:contain">
          <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${h.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
        </div>`).join("")}
      </div>`,u.querySelectorAll(".gc-icon-item").forEach(h=>{h.addEventListener("click",()=>{const v=document.getElementById("gc-image-url");v&&(v.value=h.dataset.name),u.style.display="none",a()})})}catch(L){u.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${L.message}</div>`}}}),(c=document.getElementById("gc-cancel"))==null||c.addEventListener("click",()=>d()),(g=document.getElementById("gc-save"))==null||g.addEventListener("click",async()=>{var w,h,v,$,f,I,B,A,S,C,T,O,U,H;const u=q.find(P=>{var j;return P.value===(((j=document.getElementById("gc-effect-type"))==null?void 0:j.value)||"BOOST_STAT")})||q[0],b=u.hasRoles?[...document.querySelectorAll(".gc-p-role:checked")].map(P=>P.value):null,L={...u.hasValue?{value:Number((w=document.getElementById("gc-p-value"))==null?void 0:w.value)||2}:{},...u.hasCount?{count:Number((h=document.getElementById("gc-p-count"))==null?void 0:h.value)||1}:{},...u.hasTarget?{target:((v=document.getElementById("gc-p-target"))==null?void 0:v.value)||"home"}:{},...u.hasRoles?{roles:b!=null&&b.length?b:null}:{}},k={name:((f=($=document.getElementById("gc-name"))==null?void 0:$.value)==null?void 0:f.trim())||"",effect:((B=(I=document.getElementById("gc-effect"))==null?void 0:I.value)==null?void 0:B.trim())||null,image_url:((S=(A=document.getElementById("gc-image-url"))==null?void 0:A.value)==null?void 0:S.trim())||null,gc_type:((C=document.getElementById("gc-type"))==null?void 0:C.value)||"game_changer",color:((T=document.getElementById("gc-color"))==null?void 0:T.value)||"purple",sort_order:Number((O=document.getElementById("gc-sort"))==null?void 0:O.value)||0,is_active:((U=document.getElementById("gc-active"))==null?void 0:U.checked)??!0,effect_type:((H=document.getElementById("gc-effect-type"))==null?void 0:H.value)||"BOOST_STAT",effect_params:L};if(!k.name){l("Le nom est obligatoire","error");return}const{error:y}=m?await _.from("gc_definitions").insert(k):await _.from("gc_definitions").update(k).eq("id",x.id);if(y){l(y.message,"error");return}l(m?"Carte créée ✅":"Carte modifiée ✅","success"),d(),Be(t,n)})}async function Hn(e,{toast:t,openModal:n,closeModal:i}){await D(e,{toast:t,openModal:n,closeModal:i})}async function D(e,t){var h,v,$;const{toast:n,openModal:i,closeModal:d}=t,[{data:l,error:m},{data:x},{data:E},{data:o}]=await Promise.all([_.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),_.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1),_.from("season_reward_tiers").select("*").order("rank_min"),_.from("booster_configs").select("id,name").order("sort_order")]);if(m){e.innerHTML=`<p style="color:red">${m.message}</p>`;return}const s=l||[],a=s.find(f=>f.is_active),r=(x||[]).filter(f=>(f.placement_matches||0)>=1),p=r.filter(f=>(f.placement_matches||0)>=10),c=["bronze","silver","gold","platinum","diamond","master"],g={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},u={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},b={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},L={};c.forEach(f=>{L[f]=0}),p.forEach(f=>{const I=f.rank_tier||"bronze";L[I]!==void 0&&L[I]++});const k=p.length?Math.round(p.reduce((f,I)=>f+(I.mmr||1e3),0)/p.length):0;function y(f){return f?new Date(f).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function w(f){const I=new Date;return f.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(f.end_at)<I?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
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
            <div style="font-size:22px;font-weight:900">${p.length}</div>
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
        ${p.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${c.map(f=>{const I=L[f],B=p.length>0?Math.round(I/p.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${b[f]} ${g[f]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${B}%;background:${u[f]};border-radius:4px;transition:width 0.5s"></div>
                </div>
                <span style="width:40px;text-align:right;color:var(--gray-600)">${I} (${B}%)</span>
              </div>`}).join("")}
        </div>`:`<div style="font-size:12px;color:var(--gray-600)">Aucun joueur classé pour l'instant.</div>`}
      </div>`:`
      <div class="card-panel" style="background:rgba(230,120,34,0.08);border:1.5px solid #e67e22">
        <div style="font-weight:700;color:#e67e22">⚠️ Aucune saison active</div>
        <div style="font-size:13px;color:var(--gray-600);margin-top:4px">Le mode Ranked est désactivé jusqu'à l'activation d'une saison.</div>
      </div>`}

      <!-- Header + bouton créer -->
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
        <div style="font-weight:700;font-size:14px">Toutes les saisons (${s.length})</div>
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
              ${s.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':s.map(f=>{const I=Math.round((new Date(f.end_at)-new Date(f.start_at))/864e5),B=new Date(f.end_at)<new Date&&!f.is_active;return`
                    <tr>
                      <td><b>${f.name}</b></td>
                      <td style="font-size:12px">${y(f.start_at)}</td>
                      <td style="font-size:12px">${y(f.end_at)}</td>
                      <td style="font-size:12px">${I} jours</td>
                      <td>${w(f)}</td>
                      <td style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn btn-ghost btn-sm" data-edit="${f.id}">✏️ Modifier</button>
                        ${f.is_active?`<button class="btn btn-ghost btn-sm" data-deactivate="${f.id}" style="color:#e67e22">⏹ Désactiver</button>`:`<button class="btn btn-primary btn-sm" data-activate="${f.id}">▶ Activer</button>`}
                        ${B?`<button class="btn btn-danger btn-sm" data-delete="${f.id}">🗑</button>`:""}
                      </td>
                    </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Récompenses de saison par palier de classement -->
      <div class="card-panel">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;flex-wrap:wrap;gap:8px">
          <div style="font-weight:700;font-size:14px">🏆 Récompenses de saison</div>
          <button id="add-reward-tier-btn" class="btn btn-primary btn-sm" ${s.length?"":`disabled title="Crée d'abord une saison"`}>+ Ajouter un palier</button>
        </div>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:12px">
          Paliers de classement (TOP 1, TOP 3, TOP 10...) associés à une saison Ranked. Chaque palier peut donner des crédits,
          des cartes joueur spécifiques et/ou des boosters, à partir d'une date d'activation optionnelle.
        </div>
        ${s.length?`
        <div class="table-wrap">
          <table>
            <thead>
              <tr><th>Saison</th><th>Palier</th><th>Classement</th><th style="text-align:right">Crédits</th><th style="text-align:center">Cartes</th><th style="text-align:center">Boosters</th><th>Activation</th><th>Statut</th><th>Actions</th></tr>
            </thead>
            <tbody>
              ${(E||[]).map(f=>{var A;const I=!f.activate_at||new Date(f.activate_at)<=new Date;return`<tr>
                  <td style="font-size:12px">${((A=s.find(S=>S.id===f.season_id))==null?void 0:A.name)||"—"}</td>
                  <td><b>${f.label}</b></td>
                  <td>${f.rank_min===f.rank_max?`#${f.rank_min}`:`#${f.rank_min}–${f.rank_max}`}</td>
                  <td style="text-align:right">${(f.credits||0).toLocaleString("fr")}</td>
                  <td style="text-align:center">${(f.player_ids||[]).length}</td>
                  <td style="text-align:center">${(f.booster_config_ids||[]).length}</td>
                  <td style="font-size:12px">${f.activate_at?y(f.activate_at):"Immédiat"}</td>
                  <td>
                    ${f.distributed_at?`<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Distribué le ${y(f.distributed_at)}</span>`:I?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">● Prêt</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">⏳ Programmé</span>'}
                  </td>
                  <td style="white-space:nowrap">
                    <button class="btn btn-ghost btn-sm" data-edit-tier="${f.id}">✏️</button>
                    <button class="btn btn-primary btn-sm" data-distribute-tier="${f.id}" ${I?"":"disabled"}>🎁 Distribuer</button>
                    <button class="btn btn-danger btn-sm" data-delete-tier="${f.id}">🗑️</button>
                  </td>
                </tr>`}).join("")||'<tr><td colspan="9" style="text-align:center;color:var(--tile-fg-dim);padding:16px">Aucun palier configuré.</td></tr>'}
            </tbody>
          </table>
        </div>`:'<div style="color:var(--tile-fg-dim);font-size:13px;padding:10px">Crée une saison pour configurer ses récompenses.</div>'}
      </div>
    </div>`,(h=document.getElementById("create-season-btn"))==null||h.addEventListener("click",()=>{Ye(null,{toast:n,openModal:i,closeModal:d,reload:()=>D(e,t)})}),(v=document.getElementById("start-new-season-btn"))==null||v.addEventListener("click",()=>{qn(a,{toast:n,openModal:i,closeModal:d,reload:()=>D(e,t)})}),e.querySelectorAll("[data-edit]").forEach(f=>{const I=s.find(B=>B.id==f.dataset.edit);f.addEventListener("click",()=>{Ye(I,{toast:n,openModal:i,closeModal:d,reload:()=>D(e,t)})})}),e.querySelectorAll("[data-activate]").forEach(f=>{f.addEventListener("click",async()=>{const I=parseInt(f.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:B}=await _.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(B){n(B.message,"error");return}const{error:A}=await _.from("ranked_seasons").update({is_active:!0}).eq("id",I);if(A){n(A.message,"error");return}await _.from("users").update({current_season_id:I}).gt("placement_matches",0),n("Saison activée ✅","success"),D(e,t)})}),e.querySelectorAll("[data-deactivate]").forEach(f=>{f.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:I}=await _.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(f.dataset.deactivate));if(I){n(I.message,"error");return}n("Saison désactivée","success"),D(e,t)})}),e.querySelectorAll("[data-delete]").forEach(f=>{f.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:I}=await _.from("ranked_seasons").delete().eq("id",parseInt(f.dataset.delete));if(I){n(I.message,"error");return}n("Saison supprimée","success"),D(e,t)})}),($=document.getElementById("add-reward-tier-btn"))==null||$.addEventListener("click",()=>{Ve(null,s,a,o||[],{toast:n,openModal:i,closeModal:d,reload:()=>D(e,t)})}),e.querySelectorAll("[data-edit-tier]").forEach(f=>{const I=(E||[]).find(B=>B.id===f.dataset.editTier);f.addEventListener("click",()=>{Ve(I,s,a,o||[],{toast:n,openModal:i,closeModal:d,reload:()=>D(e,t)})})}),e.querySelectorAll("[data-distribute-tier]").forEach(f=>{f.addEventListener("click",async()=>{const I=(E||[]).find(S=>S.id===f.dataset.distributeTier);if(!confirm(`Distribuer les récompenses du palier "${I==null?void 0:I.label}" à tous les joueurs concernés ?`))return;f.disabled=!0,f.textContent="⏳...";const{data:B,error:A}=await _.rpc("admin_distribute_season_reward",{p_tier_id:f.dataset.distributeTier});if(A){n(A.message,"error"),f.disabled=!1,f.textContent="🎁 Distribuer";return}if(!(B!=null&&B.success)){n((B==null?void 0:B.error)||"Échec de la distribution","error"),f.disabled=!1,f.textContent="🎁 Distribuer";return}n(`Récompenses distribuées à ${B.rewarded} joueur(s) ✅`,"success"),D(e,t)})}),e.querySelectorAll("[data-delete-tier]").forEach(f=>{f.addEventListener("click",async()=>{if(!confirm("Supprimer ce palier de récompense ?"))return;const{error:I}=await _.from("season_reward_tiers").delete().eq("id",f.dataset.deleteTier);if(I){n(I.message,"error");return}n("Palier supprimé","success"),D(e,t)})})}function Ve(e,t,n,i,{toast:d,openModal:l,closeModal:m,reload:x}){var g,u,b,L,k;const E=!!e,o=(e==null?void 0:e.season_id)??(n==null?void 0:n.id)??((g=t[0])==null?void 0:g.id)??null;let s=[];const a=y=>{if(!y)return"";const w=new Date(y);return new Date(w.getTime()-w.getTimezoneOffset()*6e4).toISOString().slice(0,16)},r=`
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
  `;l(E?`Modifier : ${e.label}`:"Nouveau palier de récompense",r,`
    <button id="rt-cancel" class="btn btn-ghost">Annuler</button>
    <button id="rt-save" class="btn btn-primary">💾 Enregistrer</button>
  `);function c(){const y=document.getElementById("rt-player-chips");y&&(y.innerHTML=s.map(w=>`
      <span style="display:inline-flex;align-items:center;gap:6px;background:#1A6B3C;color:#fff;font-size:12px;font-weight:700;padding:4px 8px;border-radius:14px">
        ${w.label}
        <button data-remove-player="${w.id}" style="background:none;border:none;color:#fff;cursor:pointer;font-size:12px;padding:0">✕</button>
      </span>`).join(""),y.querySelectorAll("[data-remove-player]").forEach(w=>{w.addEventListener("click",()=>{s=s.filter(h=>h.id!==w.dataset.removePlayer),c()})}))}(u=e==null?void 0:e.player_ids)!=null&&u.length&&_.from("players").select("id,firstname,surname_real").in("id",e.player_ids).then(({data:y})=>{s=(y||[]).map(w=>({id:w.id,label:`${w.firstname} ${w.surname_real}`})),c()}),(b=document.getElementById("rt-player-search-btn"))==null||b.addEventListener("click",async()=>{const y=document.getElementById("rt-player-search").value.trim();if(y.length<2)return;const{data:w}=await _.from("players").select("id,firstname,surname_real,rarity").or(`firstname.ilike.%${y}%,surname_real.ilike.%${y}%`).limit(10),h=document.getElementById("rt-player-results");if(!(w!=null&&w.length)){h.style.display="flex",h.innerHTML='<div style="color:#999;font-size:12px;padding:4px">Aucun résultat.</div>';return}h.style.display="flex",h.innerHTML=w.map(v=>`
      <div data-add-player="${v.id}" data-label="${v.firstname} ${v.surname_real}" style="cursor:pointer;padding:6px 8px;border-radius:6px;font-size:13px;color:#333" onmouseover="this.style.background='#eee'" onmouseout="this.style.background=''">
        ${v.firstname} ${v.surname_real} <span style="color:#999;font-size:11px">(${v.rarity})</span>
      </div>`).join(""),h.querySelectorAll("[data-add-player]").forEach(v=>{v.addEventListener("click",()=>{const $=v.dataset.addPlayer;s.some(f=>f.id===$)||s.push({id:$,label:v.dataset.label}),c(),h.style.display="none",document.getElementById("rt-player-search").value=""})})}),(L=document.getElementById("rt-cancel"))==null||L.addEventListener("click",()=>m()),(k=document.getElementById("rt-save"))==null||k.addEventListener("click",async()=>{const y=document.getElementById("rt-error"),w=parseInt(document.getElementById("rt-season").value),h=document.getElementById("rt-label").value.trim(),v=parseInt(document.getElementById("rt-rank-min").value)||1,$=parseInt(document.getElementById("rt-rank-max").value)||1,f=parseInt(document.getElementById("rt-credits").value)||0,I=document.getElementById("rt-activate-at").value,B=I?new Date(I).toISOString():null,A=[...document.querySelectorAll(".rt-booster-cb:checked")].map(T=>T.value);if(!h){y.textContent="Le libellé est obligatoire.";return}if(v>$){y.textContent="Le classement min doit être ≤ au max.";return}if(!w){y.textContent="Choisis une saison.";return}const S={season_id:w,label:h,rank_min:v,rank_max:$,credits:f,booster_config_ids:A,player_ids:s.map(T=>T.id),activate_at:B},{error:C}=E?await _.from("season_reward_tiers").update(S).eq("id",e.id):await _.from("season_reward_tiers").insert(S);if(C){y.textContent=C.message;return}d(E?"Palier modifié ✅":"Palier créé ✅","success"),m(),x()})}function qn(e,{toast:t,openModal:n,closeModal:i,reload:d}){var s,a;const l=new Date,m=new Date(l.getTime()+30*864e5),x=r=>r.toISOString().slice(0,10),E=`
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
          <input id="sns-end" type="date" value="${x(m)}">
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
  `),(s=document.getElementById("sns-cancel"))==null||s.addEventListener("click",()=>i()),(a=document.getElementById("sns-launch"))==null||a.addEventListener("click",async()=>{const r=document.getElementById("sns-error"),p=document.getElementById("sns-name").value.trim(),c=document.getElementById("sns-start").value,g=document.getElementById("sns-end").value,u=document.getElementById("sns-confirm").checked;if(!p){r.textContent="Le nom de la saison est requis.";return}if(!c||!g){r.textContent="Les deux dates sont requises.";return}if(new Date(c)>=new Date(g)){r.textContent="La date de fin doit être après la date de début.";return}if(!u){r.textContent="Coche la case de confirmation pour continuer.";return}const b=document.getElementById("sns-launch");b.disabled=!0,b.textContent="⏳ Recalcul en cours...";const{data:L,error:k}=await _.rpc("admin_start_new_season",{p_name:p,p_start_at:new Date(c).toISOString(),p_end_at:new Date(g).toISOString()});if(b.disabled=!1,b.textContent="🚀 Démarrer la saison",k){r.textContent=k.message;return}if(!(L!=null&&L.success)){r.textContent=(L==null?void 0:L.error)||"Échec de l'opération.";return}t(`Nouvelle saison démarrée ✅ (${L.users_reset} joueur(s) recalculé(s))`,"success"),i(),d()})}function Ye(e,{toast:t,openModal:n,closeModal:i,reload:d}){const l=!!e,m=new Date().toISOString().slice(0,16),x=new Date(Date.now()+90*864e5).toISOString().slice(0,16),E=e?new Date(e.start_at).toISOString().slice(0,16):m,o=e?new Date(e.end_at).toISOString().slice(0,16):x,s=(e==null?void 0:e.name)||"";n(l?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group">
        <label>Nom de la saison *</label>
        <input id="season-name" type="text" value="${s}" placeholder="ex: Saison 2 — Été 2026" style="width:100%">
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
      <button class="btn btn-primary" id="season-save-btn">${l?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function a(){var u,b;const r=(u=document.getElementById("season-start"))==null?void 0:u.value,p=(b=document.getElementById("season-end"))==null?void 0:b.value,c=document.getElementById("season-duration");if(!r||!p||!c)return;const g=Math.round((new Date(p)-new Date(r))/864e5);c.textContent=g>0?`Durée : ${g} jour${g>1?"s":""}`:"⚠️ La fin doit être après le début",c.style.color=g>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var r,p,c;(r=document.getElementById("season-start"))==null||r.addEventListener("input",a),(p=document.getElementById("season-end"))==null||p.addEventListener("input",a),a(),(c=document.getElementById("season-save-btn"))==null||c.addEventListener("click",async()=>{var h,v,$;const g=(h=document.getElementById("season-name"))==null?void 0:h.value.trim(),u=(v=document.getElementById("season-start"))==null?void 0:v.value,b=($=document.getElementById("season-end"))==null?void 0:$.value,L=document.getElementById("season-error");if(!g){L.textContent="Le nom est requis.";return}if(!u){L.textContent="La date de début est requise.";return}if(!b){L.textContent="La date de fin est requise.";return}if(new Date(b)<=new Date(u)){L.textContent="La date de fin doit être après le début.";return}const k=document.getElementById("season-save-btn");k.disabled=!0,k.textContent="Enregistrement…";const y={name:g,start_at:new Date(u).toISOString(),end_at:new Date(b).toISOString()};let w;if(l?{error:w}=await _.from("ranked_seasons").update(y).eq("id",e.id):{error:w}=await _.from("ranked_seasons").insert({...y,is_active:!1}),w){L.textContent=w.message,k.disabled=!1,k.textContent=l?"💾 Enregistrer":"✅ Créer la saison";return}t(l?"Saison modifiée ✅":"Saison créée ✅","success"),i(),d()})},50)}async function xe(e,t){var E;const{toast:n}=t,{data:i,error:d}=await _.from("solo_levels").select("*").order("level_number");if(d){e.innerHTML=`<p style="color:var(--danger)">${d.message}</p>`;return}const l=o=>`
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
            ${(i||[]).map(l).join("")||'<tr><td colspan="8" style="text-align:center;color:#aaa;padding:20px">Aucun niveau défini.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;function m(){document.querySelectorAll("#solo-tbody [data-field]").forEach(o=>{o.addEventListener("change",()=>x(o))})}async function x(o){const s=o.dataset.id,a=o.dataset.field,r=a==="is_active"?o.checked:Number(o.value)||0,{error:p}=await _.from("solo_levels").update({[a]:r}).eq("id",s);if(p){n(p.message,"error");return}o.style.transition="background .3s",o.style.background="#e8f8ee",setTimeout(()=>{o.style.background=""},500)}m(),document.querySelectorAll("[data-del-row]").forEach(o=>{o.addEventListener("click",async()=>{confirm("Supprimer ce niveau ? Les joueurs ayant progressé au-delà seront affectés.")&&(await _.from("solo_levels").delete().eq("id",o.dataset.delRow),n("Niveau supprimé","success"),xe(e,t))})}),(E=document.getElementById("solo-add-row"))==null||E.addEventListener("click",async()=>{const s={level_number:Math.max(0,...(i||[]).map(p=>p.level_number))+1,target_note_avg:10,nb_liens_jaune:2,nb_liens_vert:1,nb_joueurs_stade:2,reward_credits:500,is_active:!0},{data:a,error:r}=await _.from("solo_levels").insert(s).select().single();if(r){n(r.message,"error");return}n("Niveau ajouté — modifie les valeurs directement","success"),xe(e,t)})}Nt(Qe);function Gn(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function Kn(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function he(){document.getElementById("modal-overlay").classList.add("hidden")}const We={dashboard:{title:"Dashboard",fn:et},players:{title:"Joueurs & Cartes",fn:Ut},clubs:{title:"Clubs",fn:en},"card-builder":{title:"Card Builder",fn:un},users:{title:"Managers",fn:gt},market:{title:"Mercato",fn:ft},"import-export":{title:"Import / Export CSV",fn:hn},formations:{title:"Formations & Liens",fn:_n},"boosters-config":{title:"Boosters",fn:kn},"sell-price":{title:"Prix vente directe",fn:Ln},journal:{title:"Actualités",fn:Sn},tutorial:{title:"Tutoriel",fn:zn},stadiums:{title:"Stades",fn:Nn},"gc-cards":{title:"Game Changers",fn:On},"ranked-seasons":{title:"Saisons Ranked",fn:Hn},"solo-mode":{title:"Solo Mode",fn:xe}};async function pe(e){document.querySelectorAll(".admin-sidebar nav a").forEach(d=>{d.classList.toggle("active",d.dataset.page===e)});const t=document.getElementById("mobile-page-select");t&&(t.value=e);const n=We[e]||We.dashboard;document.getElementById("page-title").textContent=n.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(i,{toast:Gn,openModal:Kn,closeModal:he,navigate:pe})}catch(d){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${d.message}</div>`,console.error(d)}}async function Jn(){var t;const{data:{session:e}}=await _.auth.getSession();e&&await Ze(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,d=document.getElementById("auth-error");if(d.textContent="",!n||!i){d.textContent="Remplissez tous les champs.";return}const{data:l,error:m}=await _.auth.signInWithPassword({email:n,password:i});if(m){d.textContent=m.message;return}await Ze(l.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await _.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",he),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&he()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",i=>{i.preventDefault(),pe(n.dataset.page)})}),(t=document.getElementById("mobile-page-select"))==null||t.addEventListener("change",n=>{pe(n.target.value)})}async function Ze(e){const{data:t,error:n}=await _.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(n||!t){i.textContent="Profil introuvable.";return}if(!t.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await _.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,pe("dashboard")}Jn();
