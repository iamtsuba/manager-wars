import{s as _,i as _t,r as $e,a as Ie,A as wt,l as $t,g as It,K as De,D as F,b as kt,S as Lt,c as O,H as Bt,R as At,e as me,d as et,f as St,h as Ct,E as Tt,j as Mt,N as zt,M as Rt,B as Dt,k as jt,F as fe,m as je,n as Nt,o as tt,p as ve,q as Pt}from"./special-cards-Bn7RhUuk.js";async function nt(e){var a;const[{count:t},{count:n},{count:i},{count:p},{count:c},{data:f},{data:x}]=await Promise.all([_.from("players").select("*",{count:"exact",head:!0}),_.from("clubs").select("*",{count:"exact",head:!0}),_.from("users").select("*",{count:"exact",head:!0}),_.from("stadium_definitions").select("*",{count:"exact",head:!0}),_.from("users").select("*",{count:"exact",head:!0}).gt("last_seen_at",new Date(Date.now()-18e4).toISOString()),_.rpc("get_signup_password"),_.from("app_feature_flags").select("*").order("key")]),h=f||"";e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:24px">

      <!-- Managers -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">👥 Managers</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${i??"–"}</div>
        <div style="display:flex;align-items:center;gap:6px;margin-top:10px;font-size:12px;color:var(--tile-fg-dim)">
          <span style="width:8px;height:8px;border-radius:50%;background:#2ecc71;display:inline-block;box-shadow:0 0 6px #2ecc71"></span>
          ${c??0} joueurs connectés
        </div>
      </div>

      <!-- Stadiums -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">🏟️ Stadiums</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${p??"–"}</div>
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
        ${(x||[]).map(u=>`
          <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-radius:10px;background:var(--tile-bg);border:1px solid var(--tile-border)">
            <div>
              <div style="font-weight:700;font-size:14px;color:var(--tile-fg-on-page)">${u.label}</div>
              <div style="font-size:11px;color:var(--tile-fg-dim)">${u.enabled?"✅ Activé":"⛔ Désactivé"}</div>
            </div>
            <button class="feature-flag-toggle" data-key="${u.key}" data-enabled="${u.enabled}"
              style="width:52px;height:28px;border-radius:20px;border:none;cursor:pointer;position:relative;background:${u.enabled?"#1A6B3C":"#555"};transition:background .2s">
              <span style="position:absolute;top:3px;left:${u.enabled?"27px":"3px"};width:22px;height:22px;border-radius:50%;background:#fff;transition:left .2s"></span>
            </button>
          </div>
        `).join("")||'<div style="font-size:12px;color:var(--tile-fg-dim)">Aucun mode configuré — lance la migration correspondante.</div>'}
      </div>
    </div>
  `,window.adminNav=u=>{var l;(l=document.querySelector(`[data-page="${u}"]`))==null||l.click()},e.querySelectorAll(".feature-flag-toggle").forEach(u=>{u.addEventListener("click",async()=>{const l=u.dataset.key,s=u.dataset.enabled!=="true";u.disabled=!0;const{error:g}=await _.from("app_feature_flags").update({enabled:s,updated_at:new Date().toISOString()}).eq("key",l);if(u.disabled=!1,g){alert(g.message);return}_t(),nt(e)})}),(a=document.getElementById("signup-pwd-save"))==null||a.addEventListener("click",async()=>{const u=document.getElementById("signup-pwd-input").value.trim(),l=document.getElementById("signup-pwd-status");if(!u){l.textContent="Le code ne peut pas être vide.",l.style.color="#ff6b6b";return}const s=document.getElementById("signup-pwd-save");s.disabled=!0,s.textContent="⏳...";const{error:g}=await _.rpc("set_signup_password",{new_password:u});if(s.disabled=!1,s.textContent="💾 Enregistrer",g){l.textContent=g.message,l.style.color="#ff6b6b";return}l.textContent="✅ Code mis à jour.",l.style.color="#2ecc71"})}const it={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},Ft={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Ot(){const e={};for(const t of wt)e[t]=await $t(t);return e}async function Ut(e,t){const{toast:n}=t;if(!confirm(`Réattribuer une nouvelle photo à tous les joueurs ayant encore l'ancien format de chemin (public/faces/...) ?

Cette action est irréversible.`))return;const i=document.getElementById("fix-old-faces-btn");i&&(i.disabled=!0,i.textContent="⏳ En cours...");try{const{data:p,error:c}=await _.from("players").select("id, country_code, face").like("face","public/faces/%");if(c){n(c.message,"error");return}if(!(p!=null&&p.length)){n("Aucun joueur avec l'ancien format — rien à faire ✅","success");return}const{data:f}=await _.from("players").select("face").not("face","is",null),x=new Set((f||[]).map(u=>u.face).filter(u=>u&&!u.startsWith("public/faces/")));let h=0,a=0;for(const u of p){const l=await Ie(u.country_code,x);if(!l){a++;continue}const{error:s}=await _.from("players").update({face:l}).eq("id",u.id);if(s){a++;continue}x.add(l),h++}n(`${h} photo(s) réattribuée(s)${a?`, ${a} échec(s)`:""} ✅`,a?"error":"success")}finally{i&&(i.disabled=!1,i.textContent="🖼️ Réattribuer anciennes photos")}}async function qt(e,t){await de(e,t)}async function de(e,t,n=null){var a,u,l,s,g;const{toast:i}=t;n||(n={search:((a=document.getElementById("search-players"))==null?void 0:a.value)||"",job:((u=document.getElementById("filter-job"))==null?void 0:u.value)||"",rarity:((l=document.getElementById("filter-rarity"))==null?void 0:l.value)||"",club:((s=document.getElementById("filter-club"))==null?void 0:s.value)||"",country:((g=document.getElementById("filter-country"))==null?void 0:g.value)||""});const[{data:p,error:c},{data:f}]=await Promise.all([_.from("players").select("*, clubs(id,encoded_name,logo_url)"),_.from("clubs").select("id,encoded_name").order("encoded_name")]);if(c){e.innerHTML=`<p style="color:red">${c.message}</p>`;return}const x={GK:0,DEF:1,MIL:2,ATT:3},h=(p||[]).sort((d,o)=>{const v=(x[d.job]??4)-(x[o.job]??4);return v!==0?v:(d.surname_real||"").localeCompare(o.surname_real||"")});Ht(e,h,f||[],t,n)}function Ht(e,t,n,i,p=null){var u,l;const{toast:c}=i;if(e.innerHTML=`
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
          ${Object.entries(it).map(([s,g])=>`<option value="${s}">${g}</option>`).join("")}
        </select>
        <button class="btn btn-primary" id="add-player-btn" style="white-space:nowrap">+ Joueur</button>
        <button class="btn btn-ghost" id="fix-old-faces-btn" style="white-space:nowrap">🖼️ Réattribuer anciennes photos</button>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <select id="filter-club" style="flex:1;min-width:140px">
          <option value="">Tous les clubs</option>
          ${n.map(s=>`<option value="${s.id}">${s.encoded_name}</option>`).join("")}
        </select>
        <select id="filter-country" style="flex:1;min-width:120px">
          <option value="">Tous les pays</option>
          ${[...new Set(t.map(s=>s.country_code).filter(Boolean))].sort().map(s=>`<option value="${s}">${s}</option>`).join("")}
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
    </div>`,p){const s=p,g=d=>document.getElementById(d);s.search&&g("search-players")&&(g("search-players").value=s.search),s.job&&g("filter-job")&&(g("filter-job").value=s.job),s.rarity&&g("filter-rarity")&&(g("filter-rarity").value=s.rarity),s.club&&g("filter-club")&&(g("filter-club").value=s.club),s.country&&g("filter-country")&&(g("filter-country").value=s.country)}if(p){const s=p,g=d=>document.getElementById(d);s.search&&g("search-players")&&(g("search-players").value=s.search),s.job&&g("filter-job")&&(g("filter-job").value=s.job),s.rarity&&g("filter-rarity")&&(g("filter-rarity").value=s.rarity),s.club&&g("filter-club")&&(g("filter-club").value=s.club),s.country&&g("filter-country")&&(g("filter-country").value=s.country)}function f(){const s=document.getElementById("search-players").value.toLowerCase(),g=document.getElementById("filter-job").value,d=document.getElementById("filter-rarity").value,o=document.getElementById("filter-club").value,v=document.getElementById("filter-country").value;return t.filter(r=>(!s||`${r.firstname} ${r.surname_real}`.toLowerCase().includes(s))&&(!g||r.job===g)&&(!d||r.rarity===d)&&(!o||r.club_id===o)&&(!v||r.country_code===v))}const x=new Set;function h(){const s=document.getElementById("bulk-bar"),g=document.getElementById("bulk-count");s&&(s.style.display=x.size>0?"flex":"none",g&&(g.textContent=`${x.size} joueur(s) sélectionné(s)`))}function a(){const s=f();document.getElementById("count-label").textContent=`${s.length} joueur(s)`;const g=document.getElementById("players-list");if(!s.length){g.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}g.innerHTML=s.map(d=>{const o={...d,clubs:d.clubs,face:d.face||null},v=$e(o,{width:120});return`<div style="position:relative;cursor:pointer" data-edit="${d.id}">
        ${v}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${d.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),g.querySelectorAll("[data-edit]").forEach(d=>{d.addEventListener("click",()=>{const o=t.find(v=>v.id===d.dataset.edit);o&&Ne(o,n,e,i)})}),g.querySelectorAll(".btn-del-player").forEach(d=>{d.addEventListener("click",async o=>{if(o.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:v}=await _.from("players").delete().eq("id",d.dataset.del);v?c(v.message,"error"):(c("Joueur supprimé ✅","success"),de(e,i))})})}a(),document.getElementById("search-players").addEventListener("input",a),document.getElementById("filter-job").addEventListener("change",a),document.getElementById("filter-rarity").addEventListener("change",a),document.getElementById("filter-club").addEventListener("change",a),document.getElementById("filter-country").addEventListener("change",a),(u=document.getElementById("bulk-cancel-btn"))==null||u.addEventListener("click",()=>{x.clear(),h(),a()}),(l=document.getElementById("bulk-delete-btn"))==null||l.addEventListener("click",async()=>{var o,v,r,$,L;if(!x.size||!confirm(`Supprimer ${x.size} joueur(s) ?`))return;const s=[...x],{error:g}=await _.from("players").delete().in("id",s);if(g){c(g.message,"error");return}c(`${s.length} joueur(s) supprimé(s) ✅`,"success"),x.clear();const d={search:((o=document.getElementById("search-players"))==null?void 0:o.value)||"",job:((v=document.getElementById("filter-job"))==null?void 0:v.value)||"",rarity:((r=document.getElementById("filter-rarity"))==null?void 0:r.value)||"",club:(($=document.getElementById("filter-club"))==null?void 0:$.value)||"",country:((L=document.getElementById("filter-country"))==null?void 0:L.value)||""};de(e,i,d)}),document.getElementById("add-player-btn").addEventListener("click",()=>Ne(null,n,e,i)),document.getElementById("fix-old-faces-btn").addEventListener("click",()=>Ut(e,i))}async function Ne(e,t,n,i){const{toast:p,openModal:c,closeModal:f}=i,x=!!e,h=await Ot(),{data:a}=await _.from("players").select("face").not("face","is",null),u=new Set((a||[]).map(d=>d.face).filter(Boolean));e!=null&&e.face&&u.delete(e.face);const l='<option value="">— Club —</option>'+t.map(d=>`<option value="${d.id}" ${(e==null?void 0:e.club_id)===d.id?"selected":""}>${d.encoded_name}</option>`).join(""),s=e!=null&&e.face?e.face.split("/")[0]:"",g=Object.keys(h).map(d=>`<option value="${d}" ${s===d?"selected":""}>${d}</option>`).join("");c(x?`✏️ ${e.firstname} ${e.surname_real}`:"➕ Nouveau joueur",`<div style="display:flex;gap:20px;align-items:flex-start">

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
              ${["normal","pepite","papyte","legende"].map(d=>`<option value="${d}" ${(e==null?void 0:e.rarity)===d?"selected":""}>${it[d]}</option>`).join("")}
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
            <select id="pm-club">${l}</select>
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
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([d,o,v])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${Ft[d]};font-weight:700">${d}</label>
                <input id="${o}" type="number" min="0" max="20" value="${(e==null?void 0:e[v])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
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
                ${g}
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
    </div>`),setTimeout(()=>{var L,y,I;let d=(e==null?void 0:e.face)||null;function o(){var R,N,G,V,J,Y,W,Te,Me,ze,Re;const E=document.getElementById("card-preview");if(!E)return;const b=((R=document.getElementById("pm-fn"))==null?void 0:R.value)||"",k=(((N=document.getElementById("pm-real"))==null?void 0:N.value)||"").toUpperCase(),m=((G=document.getElementById("pm-job"))==null?void 0:G.value)||"ATT",w=((V=document.getElementById("pm-job2"))==null?void 0:V.value)||null,B=((J=document.getElementById("pm-rarity"))==null?void 0:J.value)||"normal",S=((Y=document.getElementById("pm-country"))==null?void 0:Y.value)||"FR",C=((W=document.getElementById("pm-club"))==null?void 0:W.value)||null,D=document.getElementById("pm-club"),j=D==null?void 0:D.options[D.selectedIndex];(j==null?void 0:j.text)!=="— Club —"&&(j==null||j.text);const U=parseInt((Te=document.getElementById("pm-g"))==null?void 0:Te.value)||0,q=parseInt((Me=document.getElementById("pm-d"))==null?void 0:Me.value)||0,H=parseInt((ze=document.getElementById("pm-m"))==null?void 0:ze.value)||0,A=parseInt((Re=document.getElementById("pm-a"))==null?void 0:Re.value)||0,z=t.find(Et=>Et.id===C),T={firstname:b||"Prénom",surname_real:k||"NOM",job:m,job2:w||null,rarity:B,country_code:S,club_id:C,note_g:U,note_d:q,note_m:H,note_a:A,face:d||null,clubs:z?{encoded_name:z.encoded_name,logo_url:z.logo_url}:null};E.innerHTML=$e(T,{width:160});const M=document.getElementById("pm-minmax");M&&(M.style.display=["pepite","papyte"].includes(B)?"grid":"none")}function v(E){const b=document.getElementById("faces-grid"),k=document.getElementById("pm-face");if(!b||!k)return;const m=h[E]||[];if(console.log("[players] loadFacesGrid folder=",E,"files=",m.length,m.slice(0,5)),!m.length){k.innerHTML='<option value="">— Aucun visage disponible —</option>',b.innerHTML=`<p style="font-size:11px;color:#888;font-style:italic">Aucune image dans le dossier "${E}" du bucket Supabase.</p>`;return}const w=m.filter(B=>{const S=E+"/"+B;return S===d||!u.has(S)});k.innerHTML='<option value="">— Choisir un visage —</option>'+w.map(B=>{const S=E+"/"+B;return`<option value="${S}" ${d===S?"selected":""}>${B}</option>`}).join(""),b.innerHTML=w.map(B=>{const S=E+"/"+B,C=d===S,D=It({face:S});return`<div data-face="${S}" style="cursor:pointer;border:2px solid ${C?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${D}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),b.querySelectorAll("[data-face]").forEach(B=>{B.addEventListener("click",()=>{d=B.dataset.face;const S=document.getElementById("pm-face");S&&(S.value=d),b.querySelectorAll("[data-face]").forEach(C=>{C.style.border=`2px solid ${C.dataset.face===d?"#4fc3f7":"transparent"}`}),o()})})}const r=e!=null&&e.face?e.face.split("/")[0]:"";r&&h[r]&&(document.getElementById("pm-folder").value=r,v(r)),(L=document.getElementById("pm-folder"))==null||L.addEventListener("change",E=>{v(E.target.value)}),(y=document.getElementById("pm-face"))==null||y.addEventListener("change",E=>{d=E.target.value||null,o()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach(E=>{var b,k;(b=document.getElementById(E))==null||b.addEventListener("input",o),(k=document.getElementById(E))==null||k.addEventListener("change",o)}),(I=document.getElementById("pm-save"))==null||I.addEventListener("click",()=>Kt(e,x,d,n,i)),o()},50)}function Gt(e){const t=n=>{var i;return(i=document.getElementById(n))==null?void 0:i.value};return{firstname:(t("pm-fn")||"").trim(),surname_real:(t("pm-real")||"").trim()||"JOUEUR",country_code:t("pm-country")||"FR",club_id:t("pm-club")||null,job:t("pm-job")||"ATT",job2:t("pm-job2")||null,rarity:t("pm-rarity")||"normal",note_g:parseInt(t("pm-g"))||0,note_d:parseInt(t("pm-d"))||0,note_m:parseInt(t("pm-m"))||0,note_a:parseInt(t("pm-a"))||0,note_min:parseInt(t("pm-nmin"))||null,note_max:parseInt(t("pm-nmax"))||null,sell_price:parseInt(t("pm-price"))||0,face:e||null,ethnie:t("pm-folder")||null,is_active:!0}}async function Kt(e,t,n,i,p){var g,d,o,v,r;const{toast:c,closeModal:f}=p,x=document.getElementById("pm-error"),h=document.getElementById("pm-save"),a=Gt(n);if(!a.firstname){x.textContent="Le prénom est requis.";return}if(!a.surname_real){x.textContent="Le nom est requis.";return}h.disabled=!0,h.textContent="Enregistrement…";const u=a,{error:l}=t?await _.from("players").update({...u,updated_at:new Date().toISOString()}).eq("id",e.id):await _.from("players").insert(u);if(l){x.textContent=l.message,h.disabled=!1,h.textContent=t?"💾 Enregistrer":"✅ Créer le joueur";return}c(t?"Joueur modifié ✅":"Joueur créé ✅","success"),f();const s={search:((g=document.getElementById("search-players"))==null?void 0:g.value)||"",job:((d=document.getElementById("filter-job"))==null?void 0:d.value)||"",rarity:((o=document.getElementById("filter-rarity"))==null?void 0:o.value)||"",club:((v=document.getElementById("filter-club"))==null?void 0:v.value)||"",country:((r=document.getElementById("filter-country"))==null?void 0:r.value)||""};de(i,p,s)}const Vt={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},at=["rase","court","milong","long"];function Jt(e){const t=Le(e);if(t==="noir")return"noir";if(t==="typ")return Math.random()<.9?"noir":"marron";if(t==="metisse")return Math.random()<.6?"noir":"marron";const n=Math.random();return n<.35?"blond":n<.75?"marron":"noir"}function Yt(e){return Math.random()<.05?"chauve":Jt(e)}const ke=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function Le(e){return Vt[e]||"blanc"}function ot(e){return Yt(e)}function te(e,t){return Math.floor(Math.random()*(t-e+1))+e}function X(e){return e[Math.floor(Math.random()*e.length)]}function rt(e){const t=ke.filter(n=>n!==e);return X(t)}function xe(e){const t=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","GR","RO","BG","UA","RU"],n=["MA","DZ","TN","EG","LY"],i=["NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","TZ","UG","ET"],p=["JP","KR","CN","VN","TH","ID","PH","IN","PK","BD","SA","AE","IR"];return t.includes(e)||["AR","UY","CL","PE","EC","CO","MX","BR"].includes(e)?"Europeans":n.includes(e)?"North Africans":i.includes(e)?"Africans":p.includes(e)?"Asians":"Europeans"}const Wt=[{min:1,max:4,pct:55},{min:5,max:10,pct:20},{min:11,max:14,pct:10},{min:15,max:17,pct:10},{min:18,max:20,pct:5}];function lt(){const e=Math.random()*100;let t=0;for(const n of Wt)if(t+=n.pct,e<t)return te(n.min,n.max);return te(1,4)}function Zt(){const e=Array.from({length:20},(t,n)=>n);return e.sort(()=>Math.random()-.5),new Set(e.slice(0,10))}let re=null;function Qt(e,t){return e&&(re||(re=Zt()),re.has(t))?te(15,20):lt()}const ce={FR:{first:["Lucas","Tom","Hugo","Théo","Antoine","Kylian","Rayan","Axel","Paul","Enzo","Léo","Mathis","Nathan","Alexis","Ethan","Maxime","Julien","Baptiste","Nicolas","Pierre","Clément","Adrien","Valentin","Dylan","Loïc","Quentin","Florian","Kevin","Corentin","Raphaël"],last:["Martin","Bernard","Petit","Dupont","Moreau","Laurent","Robert","Michel","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard","Bonnet","Rousseau","Fontaine","Chevalier","Blanc","Garnier","Boyer","Gauthier","Garcia","Perrin","Robin","Clément","Morin","Nicolas","Henry","Lemaire","Noël","Dufour","Meunier","Brun","Blanchard","Giraud","Joly","Rivière","Brunet"]},ES:{first:["Carlos","Miguel","Javier","Alejandro","Sergio","David","Diego","Pablo","Álvaro","Marcos","Adrián","Rubén","Iker","Raúl","Fernando","Roberto","Víctor","Iván","Gonzalo","Antonio","Manuel","Jesús","Josué","Rodrigo","Cristian","Héctor","Óscar","Mario","Daniel","Jorge"],last:["García","Rodríguez","Martínez","López","Sánchez","González","Pérez","Hernández","Jiménez","Díaz","Torres","Ramírez","Flores","Rivera","Gómez","Morales","Álvarez","Romero","Herrera","Medina","Aguilar","Vargas","Guzmán","Muñoz","Salazar","Soto","Contreras","Rojas","Ramos","Ortiz"]},PT:{first:["João","Pedro","Diogo","Rúben","Bruno","Tiago","André","Ricardo","Luís","Gonçalo","Nuno","Mário","Fábio","Rui","Miguel","Sérgio","Hugo","Filipe","Paulo","Vítor"],last:["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Carvalho","Gomes","Ribeiro","Araújo","Barbosa","Cardoso","Correia","Teixeira","Machado","Vieira","Monteiro","Cunha","Pinto","Melo","Barros","Freitas","Fonseca","Andrade","Castro","Neves","Figueiredo","Duarte"]},BR:{first:["Gabriel","Lucas","Mateus","Gustavo","Felipe","Rodrigo","Thiago","Rafael","Bruno","Diego","Leonardo","Eduardo","Victor","Pedro","Carlos","Alexandre","André","Paulo","Danilo","Marcelo"],last:["Silva","Santos","Oliveira","Souza","Lima","Ferreira","Costa","Nascimento","Alves","Pereira","Rodrigues","Almeida","Nunes","Melo","Barbosa","Rocha","Brito","Castro","Carvalho","Gomes","Lopes","Ramos","Mendes","Cavalcanti","Batista","Azevedo","Campos","Freitas","Reis","Andrade"]},AR:{first:["Lionel","Sergio","Rodrigo","Nicolás","Ezequiel","Gonzalo","Federico","Mauro","Pablo","Diego","Lucas","Matías","Alejandro","Maximiliano","Emiliano","Marcos","Lautaro","Ángel","Leandro","Julián"],last:["González","Rodríguez","Martínez","García","López","Pérez","Sánchez","Romero","Torres","Flores","Díaz","Gómez","Alvarez","Ruiz","Castro","Herrera","Cabrera","Medina","Ferreyra","Suárez"]},IT:{first:["Marco","Luca","Alessandro","Matteo","Davide","Andrea","Francesco","Federico","Lorenzo","Riccardo","Stefano","Simone","Roberto","Nicola","Giovanni","Antonio","Emanuele","Daniele","Alberto","Giorgio"],last:["Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Ricci","Marino","Greco","Bruno","Gallo","Conti","De Luca","Mancini","Giordano","Rizzo","Lombardi","Moretti","Fontana","Rinaldi"]},DE:{first:["Lukas","Max","Jonas","Florian","Tobias","Stefan","Markus","Sebastian","Niklas","Leon","Tim","Felix","Alexander","Philipp","Christian","Thomas","Michael","Jan","Moritz","Fabian"],last:["Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Wolf","Schröder","Neumann","Schwarz","Zimmermann","Braun","Krüger","Hofmann","Wagner","Becker","Koch","Lehmann","Kaiser"]},GB:{first:["James","Harry","Oliver","Jack","George","Charlie","William","Thomas","Alfie","Edward","Ryan","Liam","Noah","Ethan","Kyle","Jordan","Callum","Aaron","Declan","Connor"],last:["Smith","Jones","Williams","Brown","Taylor","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Walker","Wright","Robinson","White","Thompson","Hughes","Edwards","Green","Hall"]},MA:{first:["Yassine","Karim","Mehdi","Amine","Hamza","Bilal","Soufiane","Rachid","Omar","Mohammed","Zakaria","Ilyas","Ayoub","Saad","Khalid","Adil","Tarik","Hicham","Reda","Nabil"],last:["Benali","Amrani","Bouazza","Cherif","Haddad","Meziane","Belkacem","Rahmani","Saidi","Zidane","Belhadj","Tazi","Idrissi","Alaoui","Bennani","Fassi","Lahlou","Naciri","Tahiri","Zniber"]},DZ:{first:["Yacine","Riyad","Sofiane","Haris","Adem","Islam","Bilal","Omar","Nassim","Mehdi","Ryad","Zinedine","Youssef","Farid","Karim","Mourad","Walid","Anes","Ferhat","Djamel"],last:["Amrouche","Boudiaf","Cherki","Guessab","Hamdi","Jaber","Lakhal","Mahjoub","Rezki","Sahnoun","Talbi","Zerrouki","Achour","Bakri","Chaouch","Djaballah","Ferhat","Gacem","Khaldi","Larbi"]},SN:{first:["Sadio","Ismaïla","Cheikhou","Gana","Famara","Mbaye","Pape","Aliou","Moussa","Sidy","Idrissa","Lamine","Bamba","Fallou","Abdou","Diallo","Mamadou","Souleymane","Oumar","Cheikh"],last:["Diallo","Traoré","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Ndiaye","Sow","Cissé","Fofana","Keita","Sylla","Kane","Diarra","Sanogo","Baldé","Kouyaté"]},CI:{first:["Didier","Wilfried","Serge","Jonathan","Franck","Maxwel","Salomon","Gervinho","Nicolas","Maxime","Ismael","Romaric","Abdul","Cheick","Arouna","Kolo","Yaya","Geoffroy","Siaka","Adama"],last:["Drogba","Zaha","Gnagnon","Koné","Touré","Bamba","Diomandé","Konaté","Coulibaly","Fofana","Traoré","Doumbia","Sanogo","Diabaté","Kalou","Bakayoko","Gradel","Seri","Aurier","Haller"]},CM:{first:["Samuel","Alex","Karl","Fabrice","Cédric","Nicolas","Georges","André","Joël","Roger","François","Jean","Patrick","Thierry","Eric","Benjamin","Aristide","Clinton","Clinton","Stéphane"],last:["Eto'o","Song","Choupo-Moting","Aboubakar","Bassogog","Kunde","Toko","Nkoudou","Ngadeu","Oyongo","Fai","Zambo","Mokoena","Ekambi","Tchamba","Mbida","Biya","Kameni","Meyong","Webo"]},NG:{first:["Kelechi","Ahmed","Victor","John","Emmanuel","Samuel","Moses","Ola","Chukwuemeka","Odion","Sunday","Chidi","Nnamdi","Chisom","Tunde","Emeka","Obinna","Uchenna","Ifeanyi","Segun"],last:["Osimhen","Iheanacho","Musa","Onyekuru","Iwobi","Ndidi","Nwankwo","Obi","Mikel","Martins","Okocha","Yekini","Amunike","Babangida","Fash","Lawal","Onuoha","Taiwo","Ayodele","Ameobi"]},JP:{first:["Ryota","Kenji","Hiroshi","Takumi","Yuto","Daichi","Shinji","Makoto","Koji","Naoki","Yuya","Shoya","Ryo","Shu","Atsuto","Masato","Hotaru","Genki","Ko","Ritsu"],last:["Nakamura","Tanaka","Suzuki","Sato","Yamamoto","Watanabe","Ito","Yamada","Saito","Matsumoto","Inoue","Kimura","Hayashi","Shimizu","Yamazaki","Mori","Abe","Ikeda","Kato","Honda"]},KR:{first:["Heung","Son","Ji","Sung","Jae","Young","Kang","Hyun","Woo","Tae","Seung","Min","Jun","Dong","Chang","Sang","Yo","Hee","Jin","Bum"],last:["Kim","Park","Lee","Choi","Jung","Kang","Cho","Yoon","Lim","Oh","Han","Seo","Kwon","Hwang","Ahn","Yang","Shin","Yoo","Jang","Song"]},MX:{first:["Carlos","Hirving","Andrés","Javier","Miguel","Raúl","Héctor","Diego","Jorge","Luis","Rodolfo","Erick","Jonathan","Néstor","Tecatito","Chicharito","Oswaldo","Oribe","Uriel","Giovanni"],last:["Hernández","Lozano","Guardado","Vela","Morales","Jiménez","Reyes","Corona","Herrera","Rodríguez","Ochoa","Chicharito","Flores","Domínguez","Araujo","Álvarez","Pineda","Sánchez","Antuna","Meza"]},_DEFAULT_EUROPE:{first:["Stefan","Ivan","Luca","Marco","Andrei","Cristian","Bogdan","Mircea","Adrian","Florin","Dušan","Aleksandar","Nikola","Nemanja","Marko","Filip","Milan","Branislav","Radomir","Dejan"],last:["Popescu","Ionescu","Stan","Marin","Stoica","Popa","Radu","Constantin","Barbu","Dobre","Petrović","Marković","Nikolić","Jovanović","Popović","Stanković","Đorđević","Lukić","Simić","Ilić"]},_DEFAULT_AFRIQUE:{first:["Mamadou","Ibrahima","Moussa","Seydou","Boubacar","Oumar","Modibo","Adama","Bakary","Abdoulaye","Lamine","Ousmane","Sekou","Demba","Tidiane","Amadou","Issiaka","Siaka","Fode","Samba"],last:["Diallo","Traoré","Coulibaly","Koné","Doumbia","Kouyaté","Bah","Konaté","Touré","Camara","Sylla","Keita","Diakité","Sangaré","Sanou","Sidibé","Bathily","Niakaté","Dioumassi","Sissoko"]},_DEFAULT_ASIE:{first:["Wei","Ming","Jae","Van","Duc","Sorn","Ali","Hassan","Reza","Arman","Yusuf","Tariq","Faris","Khalid","Saad","Rashid","Nasser","Walid","Ziad","Adel"],last:["Zhang","Wang","Liu","Chen","Yang","Huang","Zhou","Wu","Xu","Sun","Al-Rashidi","Al-Dosari","Al-Harthi","Al-Balushi","Al-Farsi","Al-Shamsi","Al-Neyadi","Al-Breiki","Al-Hammadi","Al-Mansouri"]},_DEFAULT_AMERIQUE:{first:["James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Marcus","Jordan","Andre","Devonte","Malik","Tyrone","Jamal","Darius","DeShawn","Brandon","Cody"],last:["Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Taylor","Anderson","Jackson","White","Harris","Clark","Lewis","Walker","Hall","Allen","Young","King"]}},Xt={FR:"FR",BE:"FR",CH:"FR",MC:"FR",LU:"FR",ES:"ES",MX:"MX",CO:"ES",VE:"ES",PE:"ES",CL:"ES",EC:"ES",UY:"ES",PY:"ES",BO:"ES",CR:"ES",PA:"ES",HN:"ES",GT:"ES",SV:"ES",NI:"ES",DO:"ES",CU:"ES",PT:"PT",AO:"PT",MZ:"PT",CV:"PT",BR:"BR",AR:"AR",IT:"IT",SM:"IT",DE:"DE",AT:"DE",GB:"GB",IE:"GB",AU:"GB",NZ:"GB",CA:"GB",MA:"MA",TN:"DZ",LY:"DZ",DZ:"DZ",SN:"SN",ML:"SN",GN:"SN",GW:"SN",GM:"SN",MR:"SN",CI:"CI",BF:"CI",TG:"CI",BJ:"CI",GH:"CI",CM:"CM",GA:"CM",CG:"CM",CD:"CM",NG:"NG",JP:"JP",KR:"KR",MX:"MX",PL:"_DEFAULT_EUROPE",CZ:"_DEFAULT_EUROPE",SK:"_DEFAULT_EUROPE",HU:"_DEFAULT_EUROPE",HR:"_DEFAULT_EUROPE",RS:"_DEFAULT_EUROPE",SI:"_DEFAULT_EUROPE",RO:"_DEFAULT_EUROPE",BG:"_DEFAULT_EUROPE",GR:"_DEFAULT_EUROPE",TR:"_DEFAULT_EUROPE",RU:"_DEFAULT_EUROPE",UA:"_DEFAULT_EUROPE",NL:"_DEFAULT_EUROPE",DK:"_DEFAULT_EUROPE",SE:"_DEFAULT_EUROPE",NO:"_DEFAULT_EUROPE",FI:"_DEFAULT_EUROPE",AL:"_DEFAULT_EUROPE",EG:"_DEFAULT_AFRIQUE",ZA:"_DEFAULT_AFRIQUE",KE:"_DEFAULT_AFRIQUE",ET:"_DEFAULT_AFRIQUE",TZ:"_DEFAULT_AFRIQUE",UG:"_DEFAULT_AFRIQUE",CN:"_DEFAULT_ASIE",VN:"_DEFAULT_ASIE",TH:"_DEFAULT_ASIE",ID:"_DEFAULT_ASIE",PH:"_DEFAULT_ASIE",IN:"_DEFAULT_ASIE",PK:"_DEFAULT_ASIE",BD:"_DEFAULT_ASIE",IR:"_DEFAULT_ASIE",SA:"_DEFAULT_ASIE",AE:"_DEFAULT_ASIE",QA:"_DEFAULT_ASIE",KW:"_DEFAULT_ASIE",IQ:"_DEFAULT_ASIE",SY:"_DEFAULT_ASIE",JO:"_DEFAULT_ASIE",US:"_DEFAULT_AMERIQUE"};function st(e){return Xt[e]||"_DEFAULT_EUROPE"}function dt(e){const t=st(e),n=(ce[t]||ce._DEFAULT_EUROPE).first;return X(n)}function ct(e){const t=st(e);return(ce[t]||ce._DEFAULT_EUROPE).last}function en(e,t,n=new Set,i=!1){const p=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],c=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],f=new Set(c.sort(()=>Math.random()-.5).slice(0,4)),x=[...c].sort(()=>Math.random()-.5),h=new Set(x.slice(0,2)),a=new Set(x.slice(2,4)),u=10,l=p.map((d,o)=>o<u);for(let d=l.length-1;d>0;d--){const o=Math.floor(Math.random()*(d+1));[l[d],l[o]]=[l[o],l[d]]}const s=new Set;function g(d){const o=ct(d),v=o.filter(y=>!s.has(y)&&!n.has(y)),r=v.length?v:o.filter(y=>!s.has(y)),$=r.length?r:o,L=X($);return s.add(L),L}return p.map((d,o)=>{const v=l[o]?t:rt(t),r=Le(v),$=ot(v),L=X(at),y=h.has(o)?"pepite":a.has(o)?"papyte":"normal",I=y==="pepite"?te(10,15):y==="papyte"?te(15,20):Qt(i,o),E=f.has(o),b=E?Math.max(0,I-2):0;let k=0,m=0,w=0,B=0,S=null;d==="GK"?k=I:d==="DEF"?(m=I,E&&(w=b,S="MIL")):d==="ATT"?(B=I,E&&(w=b,S="MIL")):(w=I,E&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(m=b,S="DEF"):(B=b,S="ATT")));const C=g(v);return{job:d,job2:S,firstname:dt(v),surname_real:C,country_code:v,club_id:e,note_g:k,note_d:m,note_m:w,note_a:B,skin:r,hair:$,hair_length:L,rarity:y,sell_price:0,ethnie:xe(v),_ethnie:xe(v)}})}async function pt(e,t,n,i=!1){re=null;const{data:p}=await _.from("players").select("surname_real").not("surname_real","is",null),c=new Set((p||[]).map(d=>d.surname_real).filter(Boolean)),f=en(e,t,c,i),{data:x}=await _.from("players").select("face").not("face","is",null),h=new Set((x||[]).map(d=>d.face).filter(Boolean)),a=new Set;for(const d of f){const o=await Ie(d.country_code,new Set([...h,...a]));o&&(d.face=o,a.add(o)),delete d._ethnie}const{data:u,error:l}=await _.from("players").insert(f).select("id");if(l){console.error("[GenSquad] Erreur batch insert:",l.message,l.details),n("Erreur: "+l.message,"error");return}const s=(u||[]).map(d=>({card_type:"player",player_id:d.id}));if(s.length){const{error:d}=await _.from("cards").insert(s);d&&console.warn("[GenSquad] Erreur cartes:",d.message)}const g=(u==null?void 0:u.length)||0;console.log("[GenSquad] Créés:",g,"/",f.length),g>0?n(`${g} joueurs générés ✅`,"success"):n("Erreur génération joueurs","error")}function ut(e){return{style:e.kit_style||F.style,color1:e.kit_color1||F.color1,color2:e.kit_color2||F.color2,color3:e.kit_color3||F.color3,shorts:e.kit_shorts||F.shorts,socks:e.kit_socks||F.socks}}let le=[];async function tn(e,t){await ge(e,t)}async function ge(e,t){const[{data:n,error:i},{data:p}]=await Promise.all([_.from("clubs").select("*").order("real_name"),_.from("players").select("club_id")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}le=n||[];const c={};(p||[]).forEach(f=>{c[f.club_id]=(c[f.club_id]||0)+1}),nn(e,t,c)}function nn(e,t,n={}){const{toast:i,openModal:p,closeModal:c}=t;e.innerHTML=`
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
    </div>`,f(le),document.getElementById("search-clubs").addEventListener("input",x=>{const h=x.target.value.toLowerCase();f(le.filter(a=>a.real_name.toLowerCase().includes(h)||a.encoded_name.toLowerCase().includes(h)))}),document.getElementById("add-club-btn").addEventListener("click",()=>Pe(null,e,t));function f(x){const h=document.getElementById("clubs-list");if(!x.length){h.innerHTML='<p style="color:var(--tile-fg-dim);padding:20px;text-align:center">Aucun club.</p>';return}const a={};x.forEach(s=>{const g=s.country_code||"—";a[g]||(a[g]=[]),a[g].push(s)});const u=Object.keys(a).sort(),l=s=>{const g=ut(s),d=s.logo_url?`<img src="${s.logo_url}" style="width:36px;height:36px;object-fit:contain;border-radius:8px;flex-shrink:0">`:`<div style="width:36px;height:36px;background:linear-gradient(135deg,${g.color1},${g.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:900;flex-shrink:0">${s.encoded_name.slice(0,3)}</div>`,o=n[s.id]||0;return`
        <div class="club-row" data-club-id="${s.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:10px;cursor:pointer;background:var(--tile-bg);border:1px solid var(--tile-border);transition:background .15s">
          ${d}
          <img src="https://flagsapi.com/${s.country_code}/flat/24.png" style="width:18px;height:13px;object-fit:cover;border-radius:2px;flex-shrink:0" onerror="this.style.display='none'">
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:12px;color:var(--tile-fg-on-page);font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${s.encoded_name}</div>
            <div style="font-size:10px;color:${o===0?"#e67e22":"var(--tile-fg-dim)"}">${o===0?"⚠️ 0 joueur":`👥 ${o}`}</div>
          </div>
          <button class="btn-del-club" data-del="${s.id}"
            style="width:22px;height:22px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;flex-shrink:0"
            onclick="event.stopPropagation()">✕</button>
        </div>`};h.innerHTML=u.map(s=>`
      <div style="display:flex;align-items:center;gap:8px;padding:8px 4px 4px;margin-top:6px">
        ${s!=="—"?`<img src="https://flagsapi.com/${s}/flat/24.png" style="width:20px;height:15px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">`:'<span style="font-size:14px">🌍</span>'}
        <span style="font-size:11px;font-weight:900;color:var(--tile-fg-dim);letter-spacing:1px">${s}</span>
        <span style="font-size:11px;color:var(--tile-fg-dim);background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:10px;padding:1px 8px">${a[s].length}</span>
        <div style="flex:1;height:1px;background:var(--tile-border)"></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:4px">
        ${a[s].map(l).join("")}
      </div>
    `).join(""),h.querySelectorAll(".club-row").forEach(s=>{s.addEventListener("click",()=>{const g=le.find(d=>d.id===s.dataset.clubId);g&&Pe(g,e,t),h.querySelectorAll(".club-row").forEach(d=>d.style.background="var(--tile-bg)"),s.style.background="rgba(26,107,60,0.18)"})}),h.querySelectorAll(".btn-del-club").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:g}=await _.from("clubs").delete().eq("id",s.dataset.del);g?i(g.message,"error"):(i("Club supprimé","success"),ge(e,t))})})}}function an(e){var j,U,q,H;const{openModal:t,closeModal:n}=e;let i=6;const p=36;function c(A){return new Array(A*A).fill("#ffffff")}let f=c(i),x="OP",h="#D4A017",a=50,u=0,l=0,s="",g="#ffffff",d=25,o=0,v=35,r=new Set,$=null;function L(){const A=p*i;let z="";for(let M=0;M<i;M++)for(let R=0;R<i;R++){const N=M*i+R;z+=`<rect x="${R*p}" y="${M*p}" width="${p}" height="${p}" fill="${f[N]}"/>`}const T=(M,R,N,G,V)=>{if(!M)return"";const J=A/2+G/100*A,Y=A/2+V/100*A,W=N/100*A*(M.length>3?3/M.length:1);return`<text x="${J}" y="${Y}" text-anchor="middle" dominant-baseline="central"
        font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="${W}"
        fill="${R}">${M}</text>`};return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${A} ${A}">
      ${z}
      ${T(x,h,a,u,l)}
      ${T(s,g,d,o,v)}
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
            ${[6,9,12].map(A=>`<button type="button" class="btn ${A===i?"btn-primary":"btn-ghost"} btn-sm flag-grid-size" data-n="${A}" style="flex:1;padding:6px 4px">${A}×${A}</button>`).join("")}
          </div>
        </div>
      </div>

      ${I(1,"TEXTE 1 (20 caractères max)",x,h,a,u,l)}
      ${I(2,"TEXTE 2 — optionnel (20 caractères max)",s,g,d,o,v)}
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
  `);function k(){const A=document.getElementById("flag-squares-grid");if(!A)return;const z=i>=12?30:i>=9?36:44;A.style.gridTemplateColumns=`repeat(${i}, ${z}px)`,A.innerHTML=f.map((T,M)=>`
      <div class="flag-square" data-i="${M}" style="width:${z}px;height:${z}px;border-radius:4px;background:${T};cursor:pointer;
        box-sizing:border-box;border:${r.has(M)?"3px solid #1A6B3C":"1px solid rgba(0,0,0,0.15)"}"></div>
    `).join(""),A.querySelectorAll(".flag-square").forEach(T=>{T.addEventListener("click",M=>{const R=parseInt(T.dataset.i);M.ctrlKey||M.metaKey||M.shiftKey?r.has(R)?r.delete(R):r.add(R):r=new Set([R]),k(),m()}),T.addEventListener("dblclick",()=>{const M=parseInt(T.dataset.i),R=document.createElement("input");R.type="color",R.value=f[M],R.style.position="fixed",R.style.opacity="0",document.body.appendChild(R),R.addEventListener("input",()=>{f[M]=R.value,k(),C()}),R.addEventListener("change",()=>R.remove()),R.click()})})}function m(){const A=document.getElementById("flag-copy-btn"),z=document.getElementById("flag-paste-btn");A.disabled=r.size===0,z.disabled=r.size===0||$===null}function w(){if(r.size===0)return;const A=[...r][0];$=f[A];const z=document.getElementById("flag-clipboard-preview"),T=document.getElementById("flag-clipboard-swatch");z&&(z.style.display="inline-flex"),T&&(T.style.background=$),m()}function B(){r.size===0||$===null||(r.forEach(A=>{f[A]=$}),k(),C())}(j=document.getElementById("flag-copy-btn"))==null||j.addEventListener("click",w),(U=document.getElementById("flag-paste-btn"))==null||U.addEventListener("click",B);function S(A){if(!document.getElementById("flag-squares-grid")){document.removeEventListener("keydown",S);return}!(A.ctrlKey||A.metaKey)||r.size===0||(A.key==="c"||A.key==="C"?(A.preventDefault(),w()):(A.key==="v"||A.key==="V")&&(A.preventDefault(),B()))}document.addEventListener("keydown",S),document.querySelectorAll(".flag-grid-size").forEach(A=>{A.addEventListener("click",()=>{const z=parseInt(A.dataset.n);if(z===i)return;i=z,f=c(i),r=new Set,$=null;const T=document.getElementById("flag-clipboard-preview");T&&(T.style.display="none"),k(),m(),C(),document.querySelectorAll(".flag-grid-size").forEach(M=>{M.classList.toggle("btn-primary",parseInt(M.dataset.n)===i),M.classList.toggle("btn-ghost",parseInt(M.dataset.n)!==i)})})});function C(){const A=document.getElementById("flag-preview");A&&(A.innerHTML=L())}k(),m(),C();function D(A){document.getElementById(`flag-text${A}`).addEventListener("input",z=>{const T=z.target.value.slice(0,20);A===1?x=T:s=T,C()}),document.getElementById(`flag-text${A}-color`).addEventListener("input",z=>{A===1?h=z.target.value:g=z.target.value,C()}),document.getElementById(`flag-text${A}-size`).addEventListener("input",z=>{const T=parseInt(z.target.value);A===1?a=T:d=T,document.getElementById(`flag-size${A}-val`).textContent=T,C()}),document.getElementById(`flag-text${A}-x`).addEventListener("input",z=>{const T=parseInt(z.target.value);A===1?u=T:o=T,document.getElementById(`flag-x${A}-val`).textContent=T,C()}),document.getElementById(`flag-text${A}-y`).addEventListener("input",z=>{const T=parseInt(z.target.value);A===1?l=T:v=T,document.getElementById(`flag-y${A}-val`).textContent=T,C()})}D(1),D(2),(q=document.getElementById("flag-cancel"))==null||q.addEventListener("click",()=>n()),(H=document.getElementById("flag-use"))==null||H.addEventListener("click",()=>{const A=y(L()),z=document.getElementById("m-logo-url-current");z&&(z.value=A);const T=document.getElementById("logo-preview");T&&(T.innerHTML=`<img src="${A}" style="width:100%;height:100%;object-fit:contain">`),n()})}async function Pe(e,t,n){var v,r,$,L,y,I,E;const{toast:i}=n,p=!!e,c=e?ut(e):{...F},f=document.getElementById("club-panel");if(!f)return;const x=Object.entries(De).map(([b,k])=>`<option value="${b}" ${c.style===b?"selected":""}>${k.label}</option>`).join(""),h=ke.map(b=>`<option value="${b}" ${((e==null?void 0:e.country_code)||"FR")===b?"selected":""}>${b}</option>`).join("");f.style.display="block",f.style.alignItems="",f.style.justifyContent="",f.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <h3 style="font-size:17px;font-weight:900;color:var(--tile-fg-on-page)">${p?`✏️ ${e.real_name}`:"➕ Nouveau club"}</h3>
      ${p?'<button id="btn-gen-squad-panel" class="btn btn-primary btn-sm">⚽ Générer joueurs</button>':""}
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
              <select id="m-kit-style" style="width:100%">${x}</select>
            </div>
            ${[["Couleur 1","m-kit-color1",c.color1,!1],["Couleur 2","m-kit-color2",c.color2,!1],["Couleur 3","m-kit-color3",c.color3,!0],["Short","m-kit-shorts",c.shorts,!1],["Chaussettes","m-kit-socks",c.socks,!1]].map(([b,k,m,w])=>`
              <div class="form-group" id="wrap-${k}" ${w?'style="display:none"':""}>
                <label>${b}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${k}" value="${m||"#000000"}" style="width:38px;height:32px;padding:2px;border:1px solid var(--tile-border);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${k}-txt" value="${m||"#000000"}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>`).join("")}
          </div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div id="kit-preview-wrap" style="background:#f0f0f0;border-radius:12px;padding:14px;border:1.5px solid var(--tile-border);min-width:60px;text-align:center"></div>
            <div style="font-size:10px;color:var(--tile-fg-dim)">Aperçu</div>
          </div>
        </div>
      </div>

      ${p?"":`
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
        ${p?"💾 Enregistrer":"✅ Créer le club"}
      </button>
    </div>

    ${p?`
    <div style="border-top:1px solid var(--tile-border);margin-top:24px;padding-top:20px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <h4 style="font-size:14px;font-weight:900;color:var(--tile-fg-on-page)">🃏 Joueurs du club (<span id="club-players-count">…</span>)</h4>
        <button id="btn-gen-one-player" class="btn btn-primary btn-sm">➕ Générer 1 joueur</button>
      </div>
      <div id="club-players-grid" style="display:flex;flex-wrap:wrap;gap:10px"></div>
    </div>`:""}
  `,(v=document.getElementById("m-logo-file"))==null||v.addEventListener("change",b=>{var w;const k=(w=b.target.files)==null?void 0:w[0];if(!k)return;const m=new FileReader;m.onload=()=>{document.getElementById("logo-preview").innerHTML=`<img src="${m.result}" style="width:100%;height:100%;object-fit:contain">`},m.readAsDataURL(k)}),(r=document.getElementById("m-open-flag-builder"))==null||r.addEventListener("click",()=>{an(n)}),ae();function a(){var w,B;const b=((w=document.getElementById("m-kit-style"))==null?void 0:w.value)||"uni",k=((B=De[b])==null?void 0:B.colors)===3,m=document.getElementById("wrap-m-kit-color3");m&&(m.style.display=k?"":"none")}a(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(b=>{const k=document.getElementById(b),m=document.getElementById(b+"-txt");!k||!m||(k.addEventListener("input",()=>{m.value=k.value,ae()}),m.addEventListener("input",()=>{const w=m.value.trim();/^#[0-9a-fA-F]{6}$/.test(w)&&(k.value=w,ae())}),m.addEventListener("change",()=>{let w=m.value.trim();w.startsWith("#")||(w="#"+w),/^#[0-9a-fA-F]{6}$/.test(w)&&(k.value=w,m.value=w,ae())}))}),($=document.getElementById("m-kit-style"))==null||$.addEventListener("change",()=>{a(),ae()});const u=document.getElementById("m-real"),l=document.getElementById("m-encoded");function s(){if(!u||!l||l.value)return;const b=u.value.trim().split(/\s+/),k=b.length===1?b[0].toUpperCase().slice(0,6):b.filter(m=>m.length>2).map(m=>m[0].toUpperCase()).join("")||b[0].toUpperCase().slice(0,4);l.value=k}u==null||u.addEventListener("input",s),(L=document.getElementById("auto-encode-btn"))==null||L.addEventListener("click",()=>{l&&(l.value=""),s()}),(y=document.getElementById("m-save"))==null||y.addEventListener("click",()=>cn(e,p,t,n));const g=document.getElementById("m-gen-squad"),d=document.getElementById("m-gen-strong-label");function o(){if(d&&(d.style.display=g!=null&&g.checked?"flex":"none",!(g!=null&&g.checked))){const b=document.getElementById("m-gen-strong");b&&(b.checked=!1)}}g==null||g.addEventListener("change",o),o(),(I=document.getElementById("btn-gen-squad-panel"))==null||I.addEventListener("click",()=>{on(e,n,t)}),(E=document.getElementById("btn-gen-one-player"))==null||E.addEventListener("click",()=>{ln(e,n)}),p&&Be(e.id)}async function Be(e){const{data:t}=await _.from("players").select("*, clubs(encoded_name, logo_url, kit_style, kit_color1, kit_color2, kit_color3, kit_shorts, kit_socks)").eq("club_id",e).order("surname_real"),n=document.getElementById("club-players-grid"),i=document.getElementById("club-players-count");if(i&&(i.textContent=(t||[]).length),!!n){if(!(t!=null&&t.length)){n.innerHTML='<div style="color:var(--tile-fg-dim);padding:20px;font-size:13px">Aucun joueur dans ce club.</div>';return}n.innerHTML=t.map(p=>$e(p,{width:100})).join("")}}function on(e,t,n){const{openModal:i,closeModal:p,toast:c}=t;i(`⚽ Générer — ${e.real_name}`,`<div style="display:flex;flex-direction:column;gap:14px">
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
    </div>`),setTimeout(()=>{var f,x;(f=document.getElementById("qg-cancel"))==null||f.addEventListener("click",()=>p()),(x=document.getElementById("qg-ok"))==null||x.addEventListener("click",async()=>{var a;const h=((a=document.getElementById("qg-strong"))==null?void 0:a.checked)??!1;p(),c("Génération en cours…","info"),await pt(e.id,e.country_code,c,h),c("Effectif généré ✅","success"),Be(e.id),ge(n,t)})},50)}const mt=["GK","DEF","MIL","ATT"],rn=[{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}];function ln(e,t){const{openModal:n,closeModal:i,toast:p}=t,c=ke.map(a=>`<option value="${a}">${a}</option>`).join(""),f=a=>mt.map(u=>`<option value="${u}" ${u===a?"selected":""}>${u}</option>`).join(""),x=`
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
              ${rn.map(a=>`<option value="${a.value}">${a.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label>PAYS</label>
            <select id="gen-one-country">
              <option value="">— Aléatoire —</option>
              ${c}
            </select>
          </div>
        </div>
      </div>
    </div>
  `;n(`➕ Générer un joueur — ${e.real_name}`,x,`
    <button id="gen-one-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gen-one-ok" class="btn btn-primary">➕ Générer</button>
  `),setTimeout(()=>{var a,u;document.querySelectorAll('input[name="gen-one-mode"]').forEach(l=>{l.addEventListener("change",()=>{document.getElementById("gen-one-custom-fields").style.display=l.value==="custom"&&l.checked?"flex":"none"})}),(a=document.getElementById("gen-one-cancel"))==null||a.addEventListener("click",()=>i()),(u=document.getElementById("gen-one-ok"))==null||u.addEventListener("click",async()=>{var d,o,v,r,$;const l=((d=document.querySelector('input[name="gen-one-mode"]:checked'))==null?void 0:d.value)||"random",s=document.getElementById("gen-one-ok");s.disabled=!0,s.textContent="⏳ Génération…";const g={};l==="custom"&&(g.job=((o=document.getElementById("gen-one-job1"))==null?void 0:o.value)||null,g.job2=((v=document.getElementById("gen-one-job2"))==null?void 0:v.value)||null,g.rarity=((r=document.getElementById("gen-one-rarity"))==null?void 0:r.value)||null,g.country=(($=document.getElementById("gen-one-country"))==null?void 0:$.value)||null);try{await sn(e,g),p("Joueur généré ✅","success"),i(),Be(e.id)}catch(L){p("Erreur : "+L.message,"error"),s.disabled=!1,s.textContent="➕ Générer"}})},50)}async function sn(e,t={}){const n=t.country||(Math.random()<.5?e.country_code:rt(e.country_code)),i=t.job||X(mt),p=t.job2||null,c=t.rarity||(()=>{const B=Math.random()*100;return B<1.5?"legende":B<3?"pepite":B<4.5?"papyte":"normal"})(),f=c==="pepite"?te(10,15):c==="papyte"?te(15,20):lt(),x=p?Math.max(0,f-2):0;let h=0,a=0,u=0,l=0;i==="GK"&&(h=f),i==="DEF"&&(a=f),i==="MIL"&&(u=f),i==="ATT"&&(l=f),p==="GK"&&(h=x),p==="DEF"&&(a=x),p==="MIL"&&(u=x),p==="ATT"&&(l=x);const s=Le(n),g=ot(n),d=X(at),{data:o}=await _.from("players").select("surname_real").not("surname_real","is",null),v=new Set((o||[]).map(B=>B.surname_real).filter(Boolean)),r=ct(n),$=r.filter(B=>!v.has(B)),L=X($.length?$:r),y={job:i,job2:p,firstname:dt(n),surname_real:L,country_code:n,club_id:e.id,note_g:h,note_d:a,note_m:u,note_a:l,skin:s,hair:g,hair_length:d,rarity:c,sell_price:0,ethnie:xe(n)},{data:I}=await _.from("players").select("face").not("face","is",null),E=new Set((I||[]).map(B=>B.face).filter(Boolean)),b=await Ie(n,E);b&&(y.face=b);const{data:k,error:m}=await _.from("players").insert(y).select("id").single();if(m)throw m;const{error:w}=await _.from("cards").insert({card_type:"player",player_id:k.id});w&&console.warn("[GenOnePlayer] Erreur carte:",w.message)}function gt(){var e,t,n,i,p,c;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((t=document.getElementById("m-kit-color1"))==null?void 0:t.value)||"#1A6B3C",color2:((n=document.getElementById("m-kit-color2"))==null?void 0:n.value)||"#ffffff",color3:((i=document.getElementById("m-kit-color3"))==null?void 0:i.value)||"#000000",shorts:((p=document.getElementById("m-kit-shorts"))==null?void 0:p.value)||"#111111",socks:((c=document.getElementById("m-kit-socks"))==null?void 0:c.value)||"#ffffff"}}function ae(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=kt(gt(),"panel"))}async function dn(e,t){const n=(e.name.split(".").pop()||"png").toLowerCase(),i=`clubs/${t||"new"}-${Date.now()}.${n}`,{error:p}=await _.storage.from("assets").upload(i,e,{upsert:!0,cacheControl:"3600"});if(p)throw p;const{data:c}=_.storage.from("assets").getPublicUrl(i);return c.publicUrl}async function cn(e,t,n,i){var L,y,I,E,b,k,m,w,B;const{toast:p}=i,c=document.getElementById("m-error"),f=document.getElementById("m-save"),x=(L=document.getElementById("m-real"))==null?void 0:L.value.trim(),h=(y=document.getElementById("m-encoded"))==null?void 0:y.value.trim().toUpperCase(),a=(I=document.getElementById("m-country"))==null?void 0:I.value.trim().toUpperCase(),u=((b=(E=document.getElementById("m-logo-file"))==null?void 0:E.files)==null?void 0:b[0])||null,l=((k=document.getElementById("m-logo-url-current"))==null?void 0:k.value)||null,s=((m=document.getElementById("m-gen-stadium"))==null?void 0:m.checked)??!1,g=((w=document.getElementById("m-gen-squad"))==null?void 0:w.checked)??!1,d=((B=document.getElementById("m-gen-strong"))==null?void 0:B.checked)??!1,o=gt();if(!x){c.textContent="Le nom du club est requis.";return}if(!h){c.textContent="Le nom encodé est requis.";return}if(!a){c.textContent="Le pays est requis.";return}f.disabled=!0,f.textContent="Enregistrement…";let v=l;if(u)try{f.textContent="📤 Envoi du logo…",v=await dn(u,e==null?void 0:e.id)}catch(S){c.textContent="Erreur upload logo : "+S.message,f.disabled=!1,f.textContent=t?"💾 Enregistrer":"✅ Créer le club";return}const r={real_name:x,encoded_name:h,country_code:a,logo_url:v,kit_style:o.style,kit_color1:o.color1,kit_color2:o.color2,kit_color3:o.color3,kit_shorts:o.shorts,kit_socks:o.socks};let $=e==null?void 0:e.id;if(t){const{error:S}=await _.from("clubs").update(r).eq("id",$);if(S){c.textContent=S.message,f.disabled=!1,f.textContent="💾 Enregistrer";return}}else{const{data:S,error:C}=await _.from("clubs").insert(r).select().single();if(C){c.textContent=C.message,f.disabled=!1,f.textContent="✅ Créer le club";return}if($=S.id,s){f.textContent="🏟️ Création du stade…";const{data:D,error:j}=await _.from("stadium_definitions").insert({name:`Stade de ${x}`,club_id:$,country_code:null}).select().single();j?console.warn("[Stadium] Erreur def stade:",j.message):D&&await _.from("cards").insert({card_type:"stadium",stadium_id:D.id})}g&&(f.textContent="⚽ Génération des joueurs…",await pt($,a,p,d))}p(t?"Club modifié ✅":"Club créé ✅","success"),ge(n,i)}const pn=["normal","pepite","papyte","legende"],Fe=["GK","DEF","MIL","ATT"],un=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let ee={...O},se=[];async function mn(e,{toast:t}){const{data:n}=await _.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");se=n||[],ee={...O},e.innerHTML=bn(se),fn(e,se,t),K()}function Oe(){var n;const e=((n=document.getElementById("cb-surname-real"))==null?void 0:n.value)||"",t=document.getElementById("cb-surname-enc");t&&(t.value=me(e))}function gn(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=se.find(i=>String(i.id)===String(e));return t?{style:t.kit_style||F.style,color1:t.kit_color1||F.color1,color2:t.kit_color2||F.color2,shorts:t.kit_shorts||F.shorts,socks:t.kit_socks||F.socks}:{...F}}function K(){var s,g,d,o;const e=v=>{var r;return((r=document.getElementById(v))==null?void 0:r.value)||""},t={firstname:e("cb-firstname"),surname_real:e("cb-surname-enc")||me(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((g=(s=document.getElementById("cb-club"))==null?void 0:s.selectedOptions[0])==null?void 0:g.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=gn(),i=document.getElementById("cb-club"),p=((o=(d=i==null?void 0:i.selectedOptions[0])==null?void 0:d.dataset)==null?void 0:o.logo)||null,c=et(ee,n,120),f=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(c)}`,x=St(t,{portraitUrl:f,clubLogoUrl:p,showNotes:!0}),h=document.getElementById("card-preview");h&&(h.innerHTML=x);const a=document.getElementById("avatar-preview-wrap");a&&(a.innerHTML=c);const u=e("cb-surname-real"),l=document.getElementById("encode-summary");l&&u&&(l.textContent=`${e("cb-firstname")} ${u} → ${e("cb-firstname")} ${t.surname_real}`)}function ft(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};ee={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function fn(e,t,n){var p,c,f,x,h;e.querySelectorAll("input,select").forEach(a=>{a.addEventListener("input",K),a.addEventListener("change",K)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(a=>{var u;(u=document.getElementById(a))==null||u.addEventListener("change",()=>{ft(),K()})}),(p=document.getElementById("cb-surname-real"))==null||p.addEventListener("input",()=>{Oe(),K()}),(c=document.getElementById("btn-encode"))==null||c.addEventListener("click",()=>{Oe(),K()}),(f=document.getElementById("cb-club"))==null||f.addEventListener("change",K),(x=document.getElementById("btn-save-player"))==null||x.addEventListener("click",()=>yn(n)),(h=document.getElementById("btn-reset"))==null||h.addEventListener("click",()=>{e.querySelectorAll("input").forEach(a=>a.value=""),e.querySelectorAll("select").forEach(a=>a.selectedIndex=0),ee={...O},i.forEach(a=>{const u=a.replace("av-",""),l=document.getElementById(a);l&&(l.value=O[u]||"")}),K()})}async function yn(e){const t=f=>{var x;return((x=document.getElementById(f))==null?void 0:x.value)||""},n=t("cb-surname-real").trim(),i=t("cb-surname-enc").trim()||me(n);if(!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}ft();const p={firstname:t("cb-firstname").trim(),surname_real:n,surname_real:i,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:ee,skin:ee.skin||"blanc",hair:ee.hairColor||"marron",hair_length:"court"},{error:c}=await _.from("players").insert(p);if(c){e("Erreur: "+c.message,"error");return}e(`✅ Joueur "${p.firstname} ${p.surname_real}" enregistré !`,"success")}function bn(e){const t=un.map(([a,u])=>`<option value="${a}">${u} (${a})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(a=>`<option value="${a.id}" data-logo="${a.logo_url||""}">${a.encoded_name}</option>`).join(""),i=Fe.map(a=>`<option value="${a}">${a}</option>`).join(""),p='<option value="">Aucun</option>'+Fe.map(a=>`<option value="${a}">${a}</option>`).join(""),c=pn.map(a=>`<option value="${a}">${a.charAt(0).toUpperCase()+a.slice(1)}</option>`).join(""),f=(a,u,l)=>Object.entries(u).map(([s,g])=>`<option value="${s}" ${s===(l||"")?"selected":""}>${g.label}</option>`).join(""),x=Object.keys(Lt).map(a=>`<option value="${a}" ${a===O.skin?"selected":""}>${a.charAt(0).toUpperCase()+a.slice(1)}</option>`).join(""),h=Object.keys(Bt).map(a=>`<option value="${a}" ${a===O.hairColor?"selected":""}>${a.charAt(0).toUpperCase()+a.slice(1)}</option>`).join("");return`
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
          <div><label>Poste secondaire</label><select id="cb-job2">${p}</select></div>
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
          <div><label>Rareté</label><select id="cb-rarity">${c}</select></div>
          <div><label>Note min</label><input id="cb-note-min" type="number" min="0" max="10" placeholder="—"></div>
          <div><label>Note max</label><input id="cb-note-max" type="number" min="0" max="10" placeholder="—"></div>
        </div>
        <div style="margin-top:8px;display:flex;gap:8px">
          ${["normal","pepite","papyte","legende"].map(a=>`
            <div style="background:${At[a]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
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
              <select id="av-skin">${x}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${f("av-hair",Ct,O.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${h}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${f("av-eyebrows",Tt,O.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${f("av-eyes",Mt,O.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${f("av-nose",zt,O.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${f("av-mouth",Rt,O.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${f("av-beard",Dt,O.beard)}</select>
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
  `}const vn=2*60*1e3;function ne(e){return e.last_seen?Date.now()-new Date(e.last_seen).getTime()<vn:!1}async function he(e,{toast:t}){const[{data:n,error:i},{data:p},{data:c}]=await Promise.all([_.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws,last_seen").order("created_at",{ascending:!1}),_.from("user_solo_progress").select("user_id, unlocked_level"),_.rpc("admin_get_user_emails")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const f={};(p||[]).forEach(d=>{f[d.user_id]=d.unlocked_level});const x={};(c||[]).forEach(d=>{x[d.id]=d.email});const h=n||[];e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap">
        <input id="search-users" placeholder="🔍 Rechercher un manager…" style="width:260px">
        <label style="display:flex;align-items:center;gap:6px;font-size:13px;cursor:pointer;user-select:none">
          <input type="checkbox" id="filter-online" style="width:16px;height:16px;cursor:pointer">
          <span>🟢 En ligne uniquement (<span id="online-count">0</span>)</span>
        </label>
      </div>
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
  `;function a(d){const o=document.getElementById("online-count");o&&(o.textContent=d.filter(ne).length)}function u(){const d=document.getElementById("search-users").value.toLowerCase(),o=document.getElementById("filter-online").checked;g(h.filter(v=>{var r;return(v.pseudo.toLowerCase().includes(d)||((r=v.club_name)==null?void 0:r.toLowerCase().includes(d)))&&(!o||ne(v))}))}g(h),a(h),document.getElementById("search-users").addEventListener("input",u),document.getElementById("filter-online").addEventListener("change",u);const l=setInterval(async()=>{const{data:d}=await _.from("users").select("id,last_seen");if(!d)return;const o={};d.forEach(v=>{o[v.id]=v.last_seen}),h.forEach(v=>{v.last_seen=o[v.id]??v.last_seen}),a(h),document.querySelectorAll("[data-online-dot]").forEach(v=>{const r=h.find($=>$.id===v.dataset.onlineDot);r&&(v.style.background=ne(r)?"#22c55e":"transparent")})},2e4),s=new MutationObserver(()=>{document.body.contains(e)||(clearInterval(l),s.disconnect())});s.observe(document.body,{childList:!0,subtree:!0});function g(d){document.getElementById("users-tbody").innerHTML=d.map(o=>{const v=o.mmr??1e3,r=o.mmr_deviation??350,$=o.placement_matches??0,L=jt(v),y=o.ranked_wins??0,I=o.ranked_losses??0,E=o.ranked_draws??0,b=y+I+E,k=b>0?Math.round(y/b*100):null,m=$<10,w=r<80?"#1A6B3C":r<150?"#e67e22":"#bb2020";return`
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
            <div style="color:var(--gray-600)">Niv. Solo ${f[o.id]??1}</div>
          </td>
          <td style="font-size:12px">${o.wins}V / ${o.draws}N / ${o.losses}D</td>
          <td style="font-size:12px">🥇${o.trophies_top1} 🥈${o.trophies_top2} 🥉${o.trophies_top3}</td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:5px">
              <span style="font-size:16px">${L.emoji}</span>
              <span style="font-weight:700;color:${L.color}">${L.label}</span>
            </div>
            ${m?`<div style="font-size:10px;color:#e67e22">${$}/10 placement${$<10?` (${10-$} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${y}V ${E}N ${I}D${k!==null?` · ${k}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${v}</div>
            <div style="font-size:10px;color:${w}">RD ±${Math.round(r)}</div>
          </td>
          <td>
            ${o.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td style="display:flex;gap:4px">
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${o.id}" data-is-admin="${o.is_admin}">
              ${o.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
            <button class="btn btn-ghost btn-sm" data-delete-manager="${o.id}" data-pseudo="${o.pseudo}"
              style="color:var(--red,#bb2020);" title="Supprimer ce Manager et TOUT ce qui le lie">
              🗑️
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll(".btn-edit-credits").forEach(o=>{o.addEventListener("click",async()=>{const v=o.dataset.user,r=Number(o.dataset.current)||0,$=prompt("Nouveau solde de crédits :",r);if($===null)return;const L=parseInt($.replace(/\s/g,""),10);if(isNaN(L)||L<0){t("Valeur invalide","error");return}const{data:y,error:I}=await _.rpc("admin_update_user_credits",{p_user_id:v,p_new_credits:L});if(I){t(I.message,"error");return}if(!(y!=null&&y.success)){t((y==null?void 0:y.error)||"Échec de la mise à jour","error");return}t("Crédits mis à jour ✅","success");const E=document.getElementById(`credits-display-${v}`);E&&(E.textContent=`${L.toLocaleString("fr")} cr.`),o.dataset.current=L})}),document.querySelectorAll("[data-toggle-admin]").forEach(o=>{o.addEventListener("click",async()=>{const v=o.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${v?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:r}=await _.from("users").update({is_admin:v}).eq("id",o.dataset.toggleAdmin);r?t(r.message,"error"):(t("Rôle mis à jour ✅","success"),he(e,{toast:t}))})}),document.querySelectorAll("[data-delete-manager]").forEach(o=>{o.addEventListener("click",async()=>{const v=o.dataset.deleteManager,r=o.dataset.pseudo;if(!confirm(`⚠️ ATTENTION: Supprimer le Manager "${r}" supprimera DÉFINITIVEMENT:
- Tous ses decks
- Toutes ses cartes
- Tous ses matchs
- Tous ses résultats ranked
- Tout ce qui le lie en base

Continuer ?`)||!confirm("Êtes-vous vraiment sûr ? Cette action est IRRÉVERSIBLE."))return;o.disabled=!0,o.textContent="⏳";const{data:$,error:L}=await _.rpc("delete_manager_cascade",{p_user_id:v});if(L){t(`Erreur: ${L.message}`,"error"),o.disabled=!1,o.textContent="🗑️";return}if(!($!=null&&$.success)){t(`Erreur: ${($==null?void 0:$.error)||"Suppression échouée"}`,"error"),o.disabled=!1,o.textContent="🗑️";return}t(`Manager "${r}" supprimé et ${Object.values($.deleted).reduce((y,I)=>y+I)} entrées supprimées ✅`,"success"),he(e,{toast:t})})})}}const xn=[{value:"normal",label:"Normal",color:"#ccc"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function yt(e,t){var h;const{toast:n}=t,{data:i,error:p}=await _.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_real, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(p){e.innerHTML=`<p style="color:var(--danger)">${p.message}</p>`;return}const c=i||[],f=c.filter(a=>a.status==="active").length,x=c.filter(a=>a.status==="sold").length;e.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px">
      <button id="btn-price-grid" class="btn btn-primary">📊 Grille des prix</button>
      <div style="display:flex;gap:12px">
        <div class="card-panel" style="min-width:120px;text-align:center;padding:12px 20px">
          <div style="font-size:22px;font-weight:700;color:#1A6B3C">${f}</div>
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
            ${c.map(a=>{var g,d,o,v;const u=(g=a.card)==null?void 0:g.player,l=u?`${u.firstname} ${u.surname_real}`:((d=a.card)==null?void 0:d.card_type)||"—",s={active:"#1A6B3C",sold:"#D4A017",cancelled:"#888"};return`<tr>
                <td><b>${l}</b>${u?`<div style="font-size:10px;color:var(--tile-fg-dim)">${u.rarity} · ${u.job}</div>`:""}</td>
                <td style="font-size:12px">${((o=a.seller)==null?void 0:o.pseudo)||"—"}</td>
                <td style="font-size:12px">${((v=a.buyer)==null?void 0:v.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(a.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${s[a.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
                    ${a.status.toUpperCase()}
                  </span>
                </td>
                <td style="font-size:11px;color:var(--tile-fg-dim)">${new Date(a.listed_at).toLocaleDateString("fr")}</td>
                <td>
                  ${a.status==="active"?`<button class="btn btn-danger btn-sm" data-cancel="${a.id}">Annuler</button>`:""}
                </td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,document.querySelectorAll("[data-cancel]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:u}=await _.from("market_listings").update({status:"cancelled"}).eq("id",a.dataset.cancel);u?n(u.message,"error"):(n("Annonce annulée","success"),yt(e,t))})}),(h=document.getElementById("btn-price-grid"))==null||h.addEventListener("click",()=>hn(t))}async function hn(e){await Ee(e)}function En(){const e=document.getElementById("modal-overlay");if(!e||e._pgBlocker)return;const t=n=>{n.target===n.currentTarget&&n.stopImmediatePropagation()};e.addEventListener("click",t,!0),e._pgBlocker=t}function ye(){const e=document.getElementById("modal-overlay");e!=null&&e._pgBlocker&&(e.removeEventListener("click",e._pgBlocker,!0),delete e._pgBlocker)}async function Ee(e){var g,d;const{openModal:t,closeModal:n,toast:i}=e,{data:p,error:c}=await _.from("sell_price_configs").select("*").order("rarity").order("note_min");if(c){i(c.message,"error");return}const f=o=>xn.map(v=>`<option value="${v.value}" ${v.value===o?"selected":""}>${v.label}</option>`).join(""),x=o=>`
    <tr data-row="${o.id}">
      <td style="padding:4px 8px">
        <select data-field="rarity" data-id="${o.id}" style="width:100%;padding:6px;font-size:13px">${f(o.rarity)}</select>
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
          ${(p||[]).map(x).join("")||'<tr><td colspan="6" style="text-align:center;color:#aaa;padding:20px">Aucune règle définie.</td></tr>'}
        </tbody>
      </table>
    </div>
  `;t("📊 Grille des prix — vente marché",h,`
    <button id="pg-add-row" class="btn btn-primary">+ Ajouter une ligne</button>
    <button id="pg-close" class="btn btn-ghost">Fermer</button>
  `),En(),(g=document.getElementById("pg-close"))==null||g.addEventListener("click",()=>{ye(),n()});function u(o){const v=o.dataset.id,r=o.dataset.field,$=r==="rarity"?o.value:Number(o.value)||0;return l(v,{[r]:$},o)}async function l(o,v,r){const $=document.querySelector(`tr[data-row="${o}"]`),L=m=>$.querySelector(`[data-field="${m}"]`),y="note_min"in v?v.note_min:Number(L("note_min").value),I="note_max"in v?v.note_max:Number(L("note_max").value),E="price_min"in v?v.price_min:Number(L("price_min").value),b="price_max"in v?v.price_max:Number(L("price_max").value);if(y>I){i("Note min doit être ≤ note max","error");return}if(E>b){i("Prix min doit être ≤ prix max","error");return}const{error:k}=await _.from("sell_price_configs").update(v).eq("id",o);if(k){i(k.message,"error");return}r&&(r.style.transition="background .3s",r.style.background="#e8f8ee",setTimeout(()=>{r.style.background=""},500))}function s(){document.querySelectorAll("#pg-tbody [data-field]").forEach(o=>{o.addEventListener("change",()=>u(o))})}s(),document.querySelectorAll("[data-del-row]").forEach(o=>{o.addEventListener("click",async()=>{confirm("Supprimer cette ligne ?")&&(await _.from("sell_price_configs").delete().eq("id",o.dataset.delRow),i("Ligne supprimée","success"),ye(),Ee(e))})}),(d=document.getElementById("pg-add-row"))==null||d.addEventListener("click",async()=>{var L;const o={rarity:"normal",note_min:0,note_max:20,price_min:2500,price_max:15e3},{data:v,error:r}=await _.from("sell_price_configs").insert(o).select().single();if(r){i(r.message,"error");return}const $=document.getElementById("pg-tbody");$.querySelector("td[colspan]")&&($.innerHTML=""),$.insertAdjacentHTML("beforeend",x(v)),s(),(L=document.querySelector(`[data-del-row="${v.id}"]`))==null||L.addEventListener("click",async function(){confirm("Supprimer cette ligne ?")&&(await _.from("sell_price_configs").delete().eq("id",v.id),i("Ligne supprimée","success"),ye(),Ee(e))}),i("Ligne ajoutée — modifie les valeurs directement","success")})}async function _n(e,{toast:t}){e.innerHTML=`
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
  `,document.getElementById("export-clubs-template").addEventListener("click",()=>{oe("clubs_template.csv",`real_name,encoded_name,country_code,logo_url
Paris Saint-Germain,PARIS FC,FR,
Real Madrid,MADRID FC,ES,
`)}),document.getElementById("export-players-template").addEventListener("click",()=>{oe("players_template.csv",`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
Kylian,Mbappe,,FR,PARIS FC,ATT,,0,0,2,9,legende,,,blanc,noir,court,50000
Achraf,Hakimi,,MA,PARIS FC,DEF,MIL,0,7,5,3,pepite,5,9,metisse,noir,court,20000
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:n,error:i}=await _.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun club à exporter","info");return}let p=`real_name,encoded_name,country_code,logo_url
`;n.forEach(c=>{p+=[c.real_name,c.encoded_name,c.country_code,c.logo_url||""].map(Ue).join(",")+`
`}),oe("clubs_export.csv",p),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:i}=await _.from("players").select("firstname,surname_real,surname_real,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_real");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let p=`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(c=>{var f;p+=[c.firstname,c.surname_real,c.surname_real,c.country_code,((f=c.clubs)==null?void 0:f.encoded_name)||"",c.job,c.job2||"",c.note_g,c.note_d,c.note_m,c.note_a,c.rarity,c.note_min??"",c.note_max??"",c.skin,c.hair,c.hair_length,c.sell_price].map(Ue).join(",")+`
`}),oe("players_export.csv",p),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const p=document.getElementById("clubs-import-result");p.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const c=await i.text(),f=qe(c);if(f.length===0){p.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let x=0,h=0;const a=[];for(const u of f){if(!u.real_name||!u.encoded_name||!u.country_code){h++,a.push(`Ligne ignorée (champs manquants): ${u.real_name||"?"}`);continue}const l={real_name:u.real_name,encoded_name:u.encoded_name.toUpperCase(),country_code:u.country_code.toUpperCase().slice(0,2),logo_url:u.logo_url||null},{error:s}=await _.from("clubs").upsert(l,{onConflict:"encoded_name"});s?(h++,a.push(`${u.encoded_name}: ${s.message}`)):x++}p.innerHTML=`<div style="color:var(--green)">✅ ${x} clubs importés</div>
        ${h>0?`<div style="color:#c0392b">❌ ${h} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${a.slice(0,10).join("<br>")}</div>`:""}`,t(`${x} clubs importés`,"success")}catch(c){p.innerHTML=`<span style="color:#c0392b">Erreur : ${c.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const p=document.getElementById("players-import-result");p.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const c=await i.text(),f=qe(c);if(f.length===0){p.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:x}=await _.from("clubs").select("id,encoded_name"),h={};(x||[]).forEach(r=>{h[r.encoded_name.toUpperCase()]=r.id});let a=0,u=0;const l=[],s=["GK","DEF","MIL","ATT"],g=["normal","pepite","papyte","legende"],d=["blanc","metisse","typ","noir"],o=["blond","marron","noir","chauve"],v=["rase","court","milong","long"];for(const r of f){if(!r.firstname||!r.surname_real||!r.country_code||!r.job){u++,l.push(`Ligne ignorée (champs requis manquants): ${r.firstname||"?"}`);continue}if(!s.includes(r.job)){u++,l.push(`${r.firstname}: job invalide "${r.job}"`);continue}const $=r.club_encoded_name&&h[r.club_encoded_name.toUpperCase()]||null,L={firstname:r.firstname,surname_real:r.surname_real,surname_real:r.surname_real||me(r.surname_real),country_code:r.country_code.toUpperCase().slice(0,2),club_id:$,job:r.job,job2:s.includes(r.job2)?r.job2:null,note_g:parseInt(r.note_g)||0,note_d:parseInt(r.note_d)||0,note_m:parseInt(r.note_m)||0,note_a:parseInt(r.note_a)||0,rarity:g.includes(r.rarity)?r.rarity:"normal",note_min:r.note_min!==""&&r.note_min!=null?parseInt(r.note_min):null,note_max:r.note_max!==""&&r.note_max!=null?parseInt(r.note_max):null,skin:d.includes(r.skin)?r.skin:"blanc",hair:o.includes(r.hair)?r.hair:"noir",hair_length:v.includes(r.hair_length)?r.hair_length:"court",sell_price:parseInt(r.sell_price)||0},{error:y}=await _.from("players").insert(L);y?(u++,l.push(`${r.firstname} ${r.surname_real}: ${y.message}`)):a++}p.innerHTML=`<div style="color:var(--green)">✅ ${a} joueurs importés</div>
        ${u>0?`<div style="color:#c0392b">❌ ${u} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${l.slice(0,10).join("<br>")}</div>`:""}`,t(`${a} joueurs importés`,"success")}catch(c){p.innerHTML=`<span style="color:#c0392b">Erreur : ${c.message}</span>`}n.target.value=""})}function Ue(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function oe(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(n),p=document.createElement("a");p.href=i,p.download=e,p.click(),URL.revokeObjectURL(i)}function qe(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(f=>f.trim());if(t.length<2)return[];const n=t[0],i=n.split(";").length>n.split(",").length?";":",",p=He(n,i).map(f=>f.trim().replace(/^\uFEFF/,"").toLowerCase()),c=[];for(let f=1;f<t.length;f++){if(!t[f].trim())continue;const x=He(t[f],i),h={};p.forEach((a,u)=>{h[a]=(x[u]||"").trim()}),!Object.values(h).every(a=>!a)&&c.push(h)}return c}function He(e,t=","){const n=[];let i="",p=!1;for(let c=0;c<e.length;c++){const f=e[c];p?f==='"'?e[c+1]==='"'?(i+='"',c++):p=!1:i+=f:f==='"'?p=!0:f===t?(n.push(i),i=""):i+=f}return n.push(i),n}const wn={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function $n(e,{toast:t}){const n=Object.keys(fe);let i=n[0];const{data:p}=await _.from("formation_links_overrides").select("formation, links"),c={};(p||[]).forEach(u=>{c[u.formation]=u.links});let f=new Set;function x(u,l){return[u,l].sort().join("-")}function h(u){const l=c[u]||fe[u]||[];f=new Set(l.map(([s,g])=>x(s,g)))}h(i),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${n.map(u=>`<option value="${u}" ${u===i?"selected":""}>${u}</option>`).join("")}
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
  `;function a(){const u=Nt[i]||{},l=je(i),s=320,g=400,d=22;function o(y){const I=u[y];return I?{x:I.x*s,y:I.y*g}:null}let v=`<svg width="${s}" height="${g}" viewBox="0 0 ${s} ${g}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;l.forEach(([y,I],E)=>{const b=o(y),k=o(I);if(!b||!k)return;const m=x(y,I),w=f.has(m),B=w?"#3b82f6":"#999",S=w?.95:.35,C=w?4:3;v+=`<line x1="${b.x}" y1="${b.y}" x2="${k.x}" y2="${k.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${m}" style="cursor:pointer"/>`,v+=`<line x1="${b.x}" y1="${b.y}" x2="${k.x}" y2="${k.y}"
        stroke="${B}" stroke-width="${C}" stroke-dasharray="${w?"none":"4,3"}"
        opacity="${S}" pointer-events="none" data-line-key="${m}"/>`});for(const y of Object.keys(u)){const I=o(y);if(!I)continue;const E=y.replace(/\d+/,""),b=wn[E]||"#555";v+=`<circle cx="${I.x}" cy="${I.y}" r="${d}" fill="${b}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,v+=`<text x="${I.x}" y="${I.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${y}</text>`}v+="</svg>",document.getElementById("field-wrap").innerHTML=v;const r=document.getElementById("links-list");r.innerHTML=l.map(([y,I])=>{const E=x(y,I),b=f.has(E);return`
        <button class="link-toggle" data-key="${E}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${b?"#3b82f6":"#ddd"};
          background:${b?"#eaf2ff":"#fafafa"};
          color:${b?"#1d4ed8":"#888"}">
          <span>${y} ↔ ${I}</span>
          <span>${b?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const $=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');$&&($.textContent=`Liens (${f.size}/${l.length} actifs)`);function L(y){f.has(y)?f.delete(y):f.add(y),a()}e.querySelectorAll(".link-hit").forEach(y=>{y.addEventListener("click",()=>L(y.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(y=>{y.addEventListener("click",()=>L(y.dataset.key))})}a(),document.getElementById("formation-select").addEventListener("change",u=>{i=u.target.value,h(i),a()}),document.getElementById("reset-btn").addEventListener("click",()=>{const u=fe[i]||[];f=new Set(u.map(([l,s])=>x(l,s))),a(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const l=je(i).filter(([g,d])=>f.has(x(g,d))),{error:s}=await _.from("formation_links_overrides").upsert({formation:i,links:l,updated_at:new Date().toISOString()});if(s){t(s.message,"error");return}c[i]=l,t(`Liens enregistrés pour ${i} (${l.length} actifs)`,"success")})}const In=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],kn=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],Ln=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function Bn(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await _.from("booster_configs").select("*").order("sort_order");let n=null,i=[],p=null;const c=()=>window.innerWidth<700;async function f(){if(!n){i=[];return}if(n!==p){const{data:l}=await _.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");i=l||[],p=n}}function x(){return`
    <div id="booster-list" style="background:#fff;${c()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(t||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(l=>`
      <div class="booster-row" data-id="${l.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${l.id===n?"#f0f7f0":"#fff"}">
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
      ${(t||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>'}
    </div>`}function h(){const l=n?(t||[]).find(d=>d.id===n):null;if(!l)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const s=i.reduce((d,o)=>d+Number(o.percentage||0),0),g=Math.abs(s-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${c()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

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
              ${Ln.map(d=>`<option value="${d.value}" ${l.price_type===d.value?"selected":""}>${d.label}</option>`).join("")}
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
            <span style="margin-left:10px;font-size:12px;color:${g?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${s.toFixed(1)}% ${g?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((d,o)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${o}">
            <select class="rate-type" data-idx="${o}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${In.map(v=>`<option value="${v.value}" ${d.card_type===v.value?"selected":""}>${v.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${o}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${kn.map(v=>`<option value="${v.value}" ${(d.rarity||"")===v.value?"selected":""}>${v.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${o}" type="number" min="0" max="20" value="${d.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${o}" type="number" min="0" max="20" value="${d.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
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
    </div>`}async function a(l=!1){l||await f();const s=!n&&c(),g=n&&c();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!c()||s||!n?x():""}
      ${!c()||g?h():""}
    </div>`,u()}function u(){var g,d,o,v,r,$,L;const l=y=>e.querySelector(y);e.querySelectorAll(".booster-row").forEach(y=>{y.addEventListener("click",I=>{I.target.closest(".btn-delete")||(n=y.dataset.id,p=null,a())})}),(g=l("#btn-back"))==null||g.addEventListener("click",()=>{n=null,a()}),(d=l("#btn-new"))==null||d.addEventListener("click",async()=>{const y=prompt("Nom du nouveau booster :");if(!(y!=null&&y.trim()))return;const{data:I,error:E}=await _.from("booster_configs").insert({name:y.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(E){alert(E.message);return}t.push(I),n=I.id,p=null,a()}),e.querySelectorAll(".btn-delete").forEach(y=>{y.addEventListener("click",async I=>{if(I.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await _.from("booster_configs").delete().eq("id",y.dataset.id);const E=t.findIndex(b=>b.id===y.dataset.id);E>-1&&t.splice(E,1),n===y.dataset.id&&(n=null,p=null),a()})}),(o=l("#btn-cancel"))==null||o.addEventListener("click",()=>{n=null,a()}),(v=l("#f-price-type"))==null||v.addEventListener("change",y=>{const I=l("#credits-field");I&&(I.style.opacity=y.target.value!=="credits"?"0.4":"1")}),(r=l("#btn-pick-icon"))==null||r.addEventListener("click",async()=>{var I;const y=l("#icon-picker-grid");if(y){if(y.style.display!=="none"){y.style.display="none";return}y.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',y.style.display="block";try{const b=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),k=Array.isArray(b)?b.filter(w=>w.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(w.name)):[];if(!k.length){y.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const m=((I=l("#f-image-url"))==null?void 0:I.value)||"";y.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${k.map(w=>`
          <div class="icon-pick-item" data-name="${w.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${w.name===m?"#1A6B3C":"#ddd"};background:${w.name===m?"#f0f7f0":"#fff"}">
            <img src="/icons/${w.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${w.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,y.querySelectorAll(".icon-pick-item").forEach(w=>{w.addEventListener("click",()=>{const B=l("#f-image-url");B&&(B.value=w.dataset.name),y.style.display="none"})})}catch(E){y.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${E.message}</div>`}}});function s(){e.querySelectorAll("[data-rate-idx]").forEach(y=>{var E,b,k,m,w;const I=Number(y.dataset.rateIdx);I>=0&&I<i.length&&(i[I].card_type=((E=y.querySelector(".rate-type"))==null?void 0:E.value)||"player",i[I].rarity=((b=y.querySelector(".rate-rarity"))==null?void 0:b.value)||null,i[I].note_min=Number((k=y.querySelector(".rate-note-min"))==null?void 0:k.value)||null,i[I].note_max=Number((m=y.querySelector(".rate-note-max"))==null?void 0:m.value)||null,i[I].percentage=Number((w=y.querySelector(".rate-pct"))==null?void 0:w.value)||0)})}($=l("#btn-add-rate"))==null||$.addEventListener("click",()=>{s(),i.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),a(!0)}),e.querySelectorAll(".btn-del-rate").forEach(y=>{y.addEventListener("click",()=>{s(),i.splice(Number(y.dataset.idx),1),a(!0)})}),(L=l("#btn-save"))==null||L.addEventListener("click",async()=>{var m,w,B,S,C,D,j,U,q,H,A,z,T;const y=(t||[]).find(M=>M.id===n);if(!y)return;const I=[];e.querySelectorAll("[data-rate-idx]").forEach(M=>{var G,V,J,Y,W;const R=Number(M.dataset.rateIdx);I.push({booster_id:n,card_type:((G=M.querySelector(".rate-type"))==null?void 0:G.value)||"player",rarity:((V=M.querySelector(".rate-rarity"))==null?void 0:V.value)||null,note_min:Number((J=M.querySelector(".rate-note-min"))==null?void 0:J.value)||null,note_max:Number((Y=M.querySelector(".rate-note-max"))==null?void 0:Y.value)||null,percentage:Number((W=M.querySelector(".rate-pct"))==null?void 0:W.value)||0,sort_order:R});const N=I[I.length-1];N.rarity||(N.rarity=null),N.note_min||(N.note_min=null),N.note_max||(N.note_max=null)});const E=I.reduce((M,R)=>M+R.percentage,0);if(I.length&&Math.abs(E-100)>.5){alert(`La somme doit faire 100% (actuellement ${E.toFixed(1)}%)`);return}const b={name:((w=(m=l("#f-name"))==null?void 0:m.value)==null?void 0:w.trim())||y.name,image_url:((S=(B=l("#f-image-url"))==null?void 0:B.value)==null?void 0:S.trim())||null,price_type:(C=l("#f-price-type"))==null?void 0:C.value,price_credits:Number((D=l("#f-price-credits"))==null?void 0:D.value)||0,card_count:Number((j=l("#f-card-count"))==null?void 0:j.value)||5,is_active:((U=l("#f-active"))==null?void 0:U.checked)??y.is_active,allow_duplicates:((q=l("#f-allow-dup"))==null?void 0:q.checked)??!0,sort_order:Number((H=l("#f-sort"))==null?void 0:H.value)||0,max_per_user:(A=l("#f-max-per-user"))!=null&&A.value?Number(l("#f-max-per-user").value):null,available_from:((z=l("#f-available-from"))==null?void 0:z.value)||null,available_until:((T=l("#f-available-until"))==null?void 0:T.value)||null},{error:k}=await _.from("booster_configs").update(b).eq("id",n);if(k){alert(k.message);return}if(Object.assign(y,b),await _.from("booster_drop_rates").delete().eq("booster_id",n),I.length){const{error:M}=await _.from("booster_drop_rates").insert(I);if(M){alert(M.message);return}}i=I,p=n,alert("✅ Booster enregistré !"),a(!0)})}a()}const bt=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function An(e){await Ae(e)}async function Ae(e){const{data:t,error:n}=await _.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
          ${(t||[]).map(i=>Sn(i)).join("")}
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
              ${bt.map(i=>`<option value="${i.value}">${i.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>Ge(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Cn(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const p=(t||[]).find(c=>c.id===i.dataset.edit);p&&i.addEventListener("click",()=>Ge(p))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await _.from("sell_price_configs").delete().eq("id",i.dataset.delete),await Ae(e))})})}function Sn(e){const t=bt.find(n=>n.value===e.rarity);return`
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
    </tr>`}function Ge(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function Cn(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,p=parseInt(document.getElementById("form-note-min").value)||1,c=parseInt(document.getElementById("form-note-max").value)||10;if(p>c){alert("Note min doit être ≤ note max");return}const f={rarity:n,price:i,note_min:p,note_max:c,updated_at:new Date().toISOString()};let x;if(t?{error:x}=await _.from("sell_price_configs").update(f).eq("id",t):{error:x}=await _.from("sell_price_configs").insert(f),x){alert("Erreur : "+x.message);return}document.getElementById("config-form").style.display="none",await Ae(e)}async function Tn(e){await Se(e)}async function Se(e){const{data:t}=await _.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Actualités</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(t||[]).map(n=>Mn(n)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>Ke(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Rn(e)),e.querySelectorAll("[data-edit-row]").forEach(n=>{const i=(t||[]).find(p=>p.id===n.dataset.editRow);i&&n.addEventListener("click",()=>Ke(i))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await _.from("patch_notes").delete().eq("id",n.dataset.delete),await Se(e))})})}function Mn(e){const t=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function Ke(e){const t=document.getElementById("article-form");t.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img-current").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-img-file").value="";const n=document.getElementById("form-art-img-preview");n.innerHTML=e!=null&&e.image_url?`<img src="${e.image_url}" style="width:100%;height:100%;object-fit:cover">`:'<span style="font-size:20px;opacity:.4">📰</span>',document.getElementById("form-art-img-file").onchange=c=>{var h;const f=(h=c.target.files)==null?void 0:h[0];if(!f)return;const x=new FileReader;x.onload=()=>{n.innerHTML=`<img src="${x.result}" style="width:100%;height:100%;object-fit:cover">`},x.readAsDataURL(f)},document.getElementById("form-art-pub").checked=e?e.is_published:!0;const i=new Date((e==null?void 0:e.published_at)||Date.now()),p=new Date(i.getTime()-i.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=p,t.scrollIntoView({behavior:"smooth"})}async function zn(e){const t=(e.name.split(".").pop()||"png").toLowerCase(),n=`journal/${Date.now()}.${t}`,{error:i}=await _.storage.from("assets").upload(n,e,{upsert:!0,cacheControl:"3600"});if(i)throw i;const{data:p}=_.storage.from("assets").getPublicUrl(n);return p.publicUrl}async function Rn(e){var g;const t=document.getElementById("form-id").value,n=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),p=((g=document.getElementById("form-art-img-file").files)==null?void 0:g[0])||null,c=document.getElementById("form-art-img-current").value||null,f=document.getElementById("form-art-pub").checked,x=document.getElementById("form-art-date").value,h=document.getElementById("form-save");if(!n){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}let a=c;if(p)try{h&&(h.textContent="📤 Envoi de l'image…"),a=await zn(p)}catch(d){alert("Erreur upload image : "+d.message),h&&(h.textContent="💾 Enregistrer");return}const u=x?new Date(x).toISOString():new Date().toISOString(),l={title:n,description:i,image_url:a,is_published:f,published_at:u};let s;if(t?{error:s}=await _.from("patch_notes").update(l).eq("id",t):{error:s}=await _.from("patch_notes").insert(l),s){alert("Erreur : "+s.message);return}document.getElementById("article-form").style.display="none",await Se(e)}async function Dn(e){await ie(e)}async function ie(e){var u,l,s,g,d,o,v,r,$,L,y,I;const{data:t}=await _.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([E,b,k])=>`<button type="button" data-cmd="${b}" title="${k}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${E}</button>`).join("")}
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
            </div>`:(t||[]).map(E=>jn(E)).join("")}
        </div>
      </div><!-- /colonne droite -->
    </div>`,(u=document.getElementById("ts-add"))==null||u.addEventListener("click",()=>Ve(null,(t==null?void 0:t.length)||0)),(l=document.getElementById("ts-reset"))==null||l.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:E}=await _.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(E?"Erreur : "+E.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(s=document.getElementById("ts-cancel"))==null||s.addEventListener("click",vt),(g=document.getElementById("ts-save"))==null||g.addEventListener("click",()=>Pn(e)),(d=document.getElementById("ts-preview-btn"))==null||d.addEventListener("click",Nn);const n=document.getElementById("ts-editor"),i=()=>{const E=document.getElementById("ts-content");E&&n&&(E.value=n.innerHTML)};n==null||n.addEventListener("input",i),n==null||n.addEventListener("blur",i);const p=()=>{document.activeElement!==n&&(n==null||n.focus())};(o=document.getElementById("ts-toolbar"))==null||o.querySelectorAll("[data-cmd]").forEach(E=>{E.addEventListener("mousedown",b=>{b.preventDefault(),p();const k=E.dataset.cmd;k.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,k.split(":")[1]):document.execCommand(k,!1,null),i()})}),(v=document.getElementById("ts-insert-color"))==null||v.addEventListener("mousedown",E=>{E.preventDefault(),p();const b=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");b&&(document.execCommand("foreColor",!1,b),i())}),(r=document.getElementById("ts-clear-format"))==null||r.addEventListener("mousedown",E=>{E.preventDefault(),p(),document.execCommand("removeFormat",!1,null),i()}),n==null||n.addEventListener("focus",()=>{n&&(n.style.borderColor="#1A6B3C")}),n==null||n.addEventListener("blur",()=>{n&&(n.style.borderColor="#ddd")});const c=document.getElementById("ts-image"),f=document.getElementById("ts-img-preview"),x=document.getElementById("ts-img-preview-el"),h=document.getElementById("ts-img-picker-grid"),a=()=>{var b;const E=(b=c==null?void 0:c.value)==null?void 0:b.trim();if(E){const k="/";x.src=`${k}icons/${E}`,f.style.display="block"}else f.style.display="none"};c==null||c.addEventListener("input",a),($=document.getElementById("ts-img-clear"))==null||$.addEventListener("click",()=>{c&&(c.value=""),f.style.display="none",h.style.display="none"}),(L=document.getElementById("ts-img-pick"))==null||L.addEventListener("click",async()=>{if(h.style.display!=="none"){h.style.display="none";return}h.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',h.style.display="block";try{const b=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),k=Array.isArray(b)?b.filter(w=>w.name.startsWith("tuto_")):[];if(!k.length){h.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const m="/";h.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+k.map(w=>`
          <div data-pick="${w.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${m}icons/${w.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${w.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",h.querySelectorAll("[data-pick]").forEach(w=>{w.addEventListener("click",()=>{c&&(c.value=w.dataset.pick),a(),h.style.display="none"})})}catch(E){h.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+E.message+"</div>"}}),(y=document.getElementById("ts-color"))==null||y.addEventListener("input",E=>{const b=document.getElementById("ts-color-hex");b&&(b.value=E.target.value)}),(I=document.getElementById("ts-color-hex"))==null||I.addEventListener("input",E=>{const b=E.target.value;if(/^#[0-9a-fA-F]{6}$/.test(b)){const k=document.getElementById("ts-color");k&&(k.value=b)}}),e.querySelectorAll("[data-edit-row]").forEach(E=>{const b=(t||[]).find(k=>k.id===E.dataset.editRow);b&&E.addEventListener("click",()=>Ve(b))}),e.querySelectorAll("[data-delete]").forEach(E=>{E.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await _.from("tutorial_steps").delete().eq("id",E.dataset.delete),ie(e))})}),e.querySelectorAll("[data-toggle]").forEach(E=>{E.addEventListener("click",async()=>{const b=(t||[]).find(k=>k.id===E.dataset.toggle);b&&(await _.from("tutorial_steps").update({is_active:!b.is_active}).eq("id",b.id),ie(e))})}),e.querySelectorAll("[data-up]").forEach(E=>{E.addEventListener("click",async()=>{const b=t||[],k=b.findIndex(m=>m.id===E.dataset.up);k<=0||(await Promise.all([_.from("tutorial_steps").update({step_order:b[k-1].step_order}).eq("id",b[k].id),_.from("tutorial_steps").update({step_order:b[k].step_order}).eq("id",b[k-1].id)]),ie(e))})}),e.querySelectorAll("[data-down]").forEach(E=>{E.addEventListener("click",async()=>{const b=t||[],k=b.findIndex(m=>m.id===E.dataset.down);k<0||k>=b.length-1||(await Promise.all([_.from("tutorial_steps").update({step_order:b[k+1].step_order}).eq("id",b[k].id),_.from("tutorial_steps").update({step_order:b[k].step_order}).eq("id",b[k+1].id)]),ie(e))})})}function jn(e){return`
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
  </div>`}function Ve(e,t=0){document.getElementById("ts-form-empty").style.display="none",document.getElementById("ts-form-content").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const n=document.getElementById("ts-editor");n&&(n.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??t,document.getElementById("ts-active").checked=e?e.is_active:!0;const i=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=i,document.getElementById("ts-color-hex").value=i;const p=(e==null?void 0:e.image_url)||"",c=document.getElementById("ts-image");c&&(c.value=p);const f=document.getElementById("ts-img-preview"),x=document.getElementById("ts-img-preview-el");if(p&&f&&x){const h="/";x.src=`${h}icons/${p}`,f.style.display="block"}else f&&(f.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function vt(){document.getElementById("ts-form-content").style.display="none",document.getElementById("ts-form-empty").style.display="block",document.getElementById("ts-preview-area").innerHTML=""}function Nn(){var a,u;const e=document.getElementById("ts-emoji").value||"⚽",t=document.getElementById("ts-title").value||"Titre",n=document.getElementById("ts-editor"),i=n?n.innerHTML:document.getElementById("ts-content").value||"",p=document.getElementById("ts-color-hex").value||"#1A6B3C",c=(u=(a=document.getElementById("ts-image"))==null?void 0:a.value)==null?void 0:u.trim(),x=c?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${c}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",h=document.getElementById("ts-preview-area");h.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${p}"></div></div>
        <div style="padding:20px 20px 0;text-align:center">
          <div style="font-size:48px;margin-bottom:8px;line-height:1">${e}</div>
          <div style="font-size:17px;font-weight:900;color:#111;margin-bottom:4px">${t}</div>
          <div style="font-size:11px;color:#aaa">6 / 10</div>
        </div>
        ${x}
        <div style="padding:${c?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${i}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${p};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,h.querySelectorAll("ul,ol").forEach(l=>{l.style.paddingLeft="20px",l.style.margin="6px 0"}),h.querySelectorAll("li").forEach(l=>{l.style.marginBottom="4px"}),h.querySelectorAll("p").forEach(l=>{l.style.marginBottom="8px"})}async function Pn(e){var l,s;const t=document.getElementById("ts-id").value,n=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),p=document.getElementById("ts-editor"),c=(p?p.innerHTML:document.getElementById("ts-content").value).trim(),f=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",x=parseInt(document.getElementById("ts-order").value)||0,h=document.getElementById("ts-active").checked;if(!i||!c){alert("Titre et contenu sont obligatoires.");return}const a={emoji:n,title:i,content:c,color:f,step_order:x,is_active:h,image_url:((s=(l=document.getElementById("ts-image"))==null?void 0:l.value)==null?void 0:s.trim())||null};let u;if(t?{error:u}=await _.from("tutorial_steps").update(a).eq("id",t):{error:u}=await _.from("tutorial_steps").insert(a),u){alert("Erreur : "+u.message);return}vt(),ie(e)}const xt="/",ht=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function Fn(e,t){await pe(e,t)}async function pe(e,t){var p,c;const[{data:n},{data:i}]=await Promise.all([_.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),_.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;gap:10px;flex-wrap:wrap">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">🏟️ Stades</h2>
        <div style="display:flex;gap:8px">
          <button id="st-gen-countries-btn" class="btn btn-ghost">🌍 Créer les stades Pays manquants</button>
          <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
        </div>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="st-list">
        ${(n||[]).length?(n||[]).map(f=>On(f)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucun stade créé.</div>'}
      </div>
    </div>`,(p=document.getElementById("st-add-btn"))==null||p.addEventListener("click",()=>Je(null,i,e,t)),(c=document.getElementById("st-gen-countries-btn"))==null||c.addEventListener("click",async()=>{const{toast:f}=t,x=new Set((n||[]).filter(s=>!s.club_id&&s.country_code).map(s=>s.country_code)),h=ht.filter(([s])=>!x.has(s));if(!h.length){f("Tous les pays ont déjà un stade.","info");return}if(!confirm(`Créer ${h.length} stade(s) "Pays" manquant(s) ?`))return;const a=h.map(([s,g])=>({name:`Stade ${g}`,club_id:null,country_code:s})),{data:u,error:l}=await _.from("stadium_definitions").insert(a).select();if(l){f("Erreur : "+l.message,"error");return}u!=null&&u.length&&await _.from("cards").insert(u.map(s=>({card_type:"stadium",stadium_id:s.id}))),f(`${(u==null?void 0:u.length)||0} stade(s) Pays créé(s) ✅`,"success"),pe(e,t)}),e.querySelectorAll("[data-edit-stadium]").forEach(f=>{f.addEventListener("click",()=>{const x=(n||[]).find(h=>h.id===f.dataset.editStadium);x&&Je(x,i,e,t)})})}function On(e){var p,c;let t=null;e.image_url?t=e.image_url.startsWith("http")?e.image_url:`${xt}icons/${e.image_url}`:(p=e.club)!=null&&p.logo_url?t=e.club.logo_url:e.country_code&&(t=`https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/64.png`);const n=((c=e.club)==null?void 0:c.encoded_name)||e.country_code||"—",i=tt(e.name,t,`${n}<br>+10 ⭐`,{width:140});return`<div data-edit-stadium="${e.id}" style="cursor:pointer;transition:transform .15s" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
    ${i}
  </div>`}function Je(e,t,n,i){var u,l,s;const{openModal:p,closeModal:c,toast:f}=i,x=`
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
            ${(t||[]).map(g=>`<option value="${g.id}" data-logo="${g.logo_url||""}" ${(e==null?void 0:e.club_id)===g.id?"selected":""}>${g.encoded_name}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>PAYS (si pas de club)</label>
          <select id="st-country">
            <option value="">— Aucun pays —</option>
            ${ht.map(([g,d])=>`<option value="${g}" ${(e==null?void 0:e.country_code)===g?"selected":""}>${d} (${g})</option>`).join("")}
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
  `;p(e?`Modifier : ${e.name}`:"Nouveau stade",x,`
    <button id="st-cancel" class="btn btn-ghost">Annuler</button>
    <button id="st-save" class="btn btn-primary">Enregistrer</button>
  `);const a=()=>{var b,k,m,w,B,S,C;const g=((b=document.getElementById("st-name"))==null?void 0:b.value)||"NOM DU STADE",d=(m=(k=document.getElementById("st-image"))==null?void 0:k.value)==null?void 0:m.trim(),o=(B=(w=document.getElementById("st-country"))==null?void 0:w.value)==null?void 0:B.trim(),v=document.getElementById("st-club"),r=(v==null?void 0:v.selectedIndex)||0,$=v&&r>0?v.options[r].text:"",L=((C=(S=v==null?void 0:v.options[r])==null?void 0:S.getAttribute)==null?void 0:C.call(S,"data-logo"))||"";let y=null;d?y=d.startsWith("http")?d:`${xt}icons/${d}`:L?y=L:o&&(y=`https://flagsapi.com/${o.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`);const I=$||o||"—",E=document.getElementById("st-preview-card");E&&(E.innerHTML=tt(g,y,`${I}<br>+10 ⭐`,{width:140}))};a(),["st-name","st-club","st-country","st-image"].forEach(g=>{var d,o;(d=document.getElementById(g))==null||d.addEventListener("input",a),(o=document.getElementById(g))==null||o.addEventListener("change",a)}),(u=document.getElementById("st-cancel"))==null||u.addEventListener("click",()=>c()),(l=document.getElementById("st-save"))==null||l.addEventListener("click",async()=>{const g=document.getElementById("st-name").value.trim(),d=document.getElementById("st-club").value||null,o=document.getElementById("st-country").value.trim().toUpperCase()||null,v=document.getElementById("st-image").value.trim()||null;if(!g){f("Le nom est obligatoire","error");return}const r={name:g,club_id:d,country_code:o,image_url:v},{error:$}=e?await _.from("stadium_definitions").update(r).eq("id",e.id):await _.from("stadium_definitions").insert(r);if($){f("Erreur : "+$.message,"error");return}f(e?"Stade modifié ✅":"Stade créé ✅","success"),c(),pe(n,i)}),(s=document.getElementById("st-delete"))==null||s.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await _.from("stadium_definitions").delete().eq("id",e.id),f("Stade supprimé","success"),c(),pe(n,i))})}const Q=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],Un=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}],Z=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],Ye=["GK","DEF","MIL","ATT"];async function qn(e,t){await Ce(e,t)}async function Ce(e,t){var i;const{data:n}=await _.from("gc_definitions").select("*").order("sort_order").order("created_at");e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">⚡ Game Changers</h2>
        <button id="gc-add-btn" class="btn btn-primary">+ Nouvelle carte</button>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="gc-list">
        ${(n||[]).length?(n||[]).map(p=>Hn(p)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucune carte Game Changer.</div>'}
      </div>
    </div>`,(i=document.getElementById("gc-add-btn"))==null||i.addEventListener("click",()=>We(null,e,t)),e.querySelectorAll("[data-edit-gc]").forEach(p=>{p.addEventListener("click",()=>{const c=(n||[]).find(f=>f.id===p.dataset.editGc);c&&We(c,e,t)})}),e.querySelectorAll(".btn-del-gc").forEach(p=>{p.addEventListener("click",async c=>{c.stopPropagation(),confirm("Supprimer cette carte Game Changer ?")&&(await _.from("gc_definitions").delete().eq("id",p.dataset.del),Ce(e,t))})})}function Hn(e){const t=Q.find(p=>p.value===e.gc_type)||Q[0],n=e.image_url?`/icons/${e.image_url}`:null,i=ve(e.name||"?",n,t.label.split(" ")[0],e.effect||"",{width:130});return`<div data-edit-gc="${e.id}" style="position:relative;cursor:pointer">
    ${i}
    <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
      <button class="btn-del-gc" data-del="${e.id}"
        style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0">✕</button>
    </div>
    ${e.is_active?"":'<div style="position:absolute;top:4px;right:4px;z-index:10;background:#555;color:#fff;font-size:9px;font-weight:700;padding:2px 6px;border-radius:8px">INACTIF</div>'}
  </div>`}function We(e,t,n){var s,g,d,o,v;const{openModal:i,closeModal:p,toast:c}=n,f=!e,x=e||{name:"",gc_type:"game_changer",color:"purple",effect:"",image_url:"",sort_order:0,is_active:!0,effect_type:"BOOST_STAT",effect_params:{}},h=(()=>{const r=x.effect_params||{},$=Z.find(L=>L.value===(x.effect_type||"BOOST_STAT"))||Z[0];return`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${$.hasValue?`<div>
        <label>VALEUR (+N)</label>
        <input id="gc-p-value" type="number" min="1" max="5" value="${r.value||2}">
      </div>`:""}
      ${$.hasCount?`<div>
        <label>NB JOUEURS</label>
        <input id="gc-p-count" type="number" min="1" max="11" value="${r.count||1}">
      </div>`:""}
      ${$.hasTarget?`<div>
        <label>CIBLE</label>
        <select id="gc-p-target">
          <option value="home" ${(r.target||"home")==="home"?"selected":""}>Mon équipe</option>
          <option value="opponent" ${r.target==="opponent"?"selected":""}>Équipe adverse</option>
        </select>
      </div>`:""}
      ${$.hasRoles?`<div>
        <label>POSTES CIBLÉS</label>
        <div style="display:flex;gap:4px;flex-wrap:wrap">
          ${Ye.map(L=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555">
            <input type="checkbox" class="gc-p-role" value="${L}" ${!r.roles||r.roles.includes(L)?"checked":""}> ${L}
          </label>`).join("")}
        </div>
      </div>`:""}
    </div>`})(),a=`
    <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:#1a1a2e;border-radius:12px">
      <div id="gc-modal-preview">${ve(x.name||"?",x.image_url?`/icons/${x.image_url}`:null,(Q.find(r=>r.value===x.gc_type)||Q[0]).label.split(" ")[0],x.effect||"",{width:150})}</div>
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
            ${Q.map(r=>`<option value="${r.value}" ${x.gc_type===r.value?"selected":""}>${r.label}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>COULEUR</label>
          <select id="gc-color">
            ${Un.map(r=>`<option value="${r.value}" ${x.color===r.value?"selected":""}>${r.label}</option>`).join("")}
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
            ${Z.map(r=>`<option value="${r.value}" ${(x.effect_type||"BOOST_STAT")===r.value?"selected":""}>${r.label}</option>`).join("")}
          </select>
        </div>
        <div id="gc-params-wrap">${h}</div>
      </div>
    </div>
  `;i(f?"Nouvelle carte Game Changer":`Modifier : ${x.name}`,a,`
    <button id="gc-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gc-save" class="btn btn-primary">💾 Enregistrer</button>
  `);const l=()=>{var b,k,m,w,B;const r=((b=document.getElementById("gc-name"))==null?void 0:b.value)||"?",$=((k=document.getElementById("gc-effect"))==null?void 0:k.value)||"",L=((m=document.getElementById("gc-type"))==null?void 0:m.value)||"game_changer",y=(B=(w=document.getElementById("gc-image-url"))==null?void 0:w.value)==null?void 0:B.trim(),I=Q.find(S=>S.value===L)||Q[0],E=document.getElementById("gc-modal-preview");E&&(E.innerHTML=ve(r,y?`/icons/${y}`:null,I.label.split(" ")[0],$,{width:150}))};["gc-name","gc-effect","gc-type","gc-image-url"].forEach(r=>{var $,L;($=document.getElementById(r))==null||$.addEventListener("input",l),(L=document.getElementById(r))==null||L.addEventListener("change",l)}),(s=document.getElementById("gc-effect-type"))==null||s.addEventListener("change",()=>{const r=document.getElementById("gc-effect-type").value,$=Z.find(y=>y.value===r)||Z[0],L=document.getElementById("gc-params-wrap");L.innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${$.hasValue?'<div><label>VALEUR (+N)</label><input id="gc-p-value" type="number" min="1" max="5" value="2"></div>':""}
      ${$.hasCount?'<div><label>NB JOUEURS</label><input id="gc-p-count" type="number" min="1" max="11" value="1"></div>':""}
      ${$.hasTarget?'<div><label>CIBLE</label><select id="gc-p-target"><option value="home">Mon équipe</option><option value="opponent">Équipe adverse</option></select></div>':""}
      ${$.hasRoles?`<div><label>POSTES CIBLÉS</label><div style="display:flex;gap:4px;flex-wrap:wrap">${Ye.map(y=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555"><input type="checkbox" class="gc-p-role" value="${y}" checked> ${y}</label>`).join("")}</div></div>`:""}
    </div>`}),(g=document.getElementById("btn-pick-gc-icon"))==null||g.addEventListener("click",async()=>{var $;const r=document.getElementById("gc-icon-picker");if(r){if(r.style.display!=="none"){r.style.display="none";return}r.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',r.style.display="block";try{const y=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),I=Array.isArray(y)?y.filter(b=>b.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(b.name)):[];if(!I.length){r.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const E=(($=document.getElementById("gc-image-url"))==null?void 0:$.value)||"";r.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
        ${I.map(b=>`
        <div class="gc-icon-item" data-name="${b.name}"
          style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${b.name===E?"#7a28b8":"#ddd"};background:${b.name===E?"#f5f0ff":"#fff"}">
          <img src="/icons/${b.name}" style="height:44px;width:100%;object-fit:contain">
          <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
        </div>`).join("")}
      </div>`,r.querySelectorAll(".gc-icon-item").forEach(b=>{b.addEventListener("click",()=>{const k=document.getElementById("gc-image-url");k&&(k.value=b.dataset.name),r.style.display="none",l()})})}catch(L){r.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${L.message}</div>`}}}),(d=document.getElementById("btn-upload-gc-icon"))==null||d.addEventListener("click",async()=>{var E;const r=document.getElementById("gc-image-upload"),$=(E=r==null?void 0:r.files)==null?void 0:E[0];if(!$){c("Choisir une image d'abord","error");return}const L=document.getElementById("gc-upload-status"),y=document.getElementById("btn-upload-gc-icon"),I=y.textContent;try{L.style.display="block",L.textContent="⏳ Upload en cours...",L.style.color="#666",y.disabled=!0;const b=$.name.split(".").pop().toLowerCase();if(!["png","jpg","jpeg","webp"].includes(b))throw new Error("Format invalide (PNG, JPG, WebP)");const m=Date.now(),B=`gamechanger-${$.name.replace(/\.[^.]+$/,"").replace(/[^a-z0-9-]/gi,"_").toLowerCase()}-${m}.${b}`,{data:S,error:C}=await _.storage.from("gc-icons").upload(B,$,{upsert:!1});if(C)throw C;document.getElementById("gc-image-url").value=B,l(),L.textContent="✅ Image uploadée avec succès",L.style.color="#27ae60",y.disabled=!1,y.textContent=I,r.value="",setTimeout(()=>{L.style.display="none"},3e3)}catch(b){L.textContent=`❌ Erreur : ${b.message}`,L.style.color="#c0392b",y.disabled=!1,y.textContent=I}}),(o=document.getElementById("gc-cancel"))==null||o.addEventListener("click",()=>p()),(v=document.getElementById("gc-save"))==null||v.addEventListener("click",async()=>{var E,b,k,m,w,B,S,C,D,j,U,q,H,A;const r=Z.find(z=>{var T;return z.value===(((T=document.getElementById("gc-effect-type"))==null?void 0:T.value)||"BOOST_STAT")})||Z[0],$=r.hasRoles?[...document.querySelectorAll(".gc-p-role:checked")].map(z=>z.value):null,L={...r.hasValue?{value:Number((E=document.getElementById("gc-p-value"))==null?void 0:E.value)||2}:{},...r.hasCount?{count:Number((b=document.getElementById("gc-p-count"))==null?void 0:b.value)||1}:{},...r.hasTarget?{target:((k=document.getElementById("gc-p-target"))==null?void 0:k.value)||"home"}:{},...r.hasRoles?{roles:$!=null&&$.length?$:null}:{}},y={name:((w=(m=document.getElementById("gc-name"))==null?void 0:m.value)==null?void 0:w.trim())||"",effect:((S=(B=document.getElementById("gc-effect"))==null?void 0:B.value)==null?void 0:S.trim())||null,image_url:((D=(C=document.getElementById("gc-image-url"))==null?void 0:C.value)==null?void 0:D.trim())||null,gc_type:((j=document.getElementById("gc-type"))==null?void 0:j.value)||"game_changer",color:((U=document.getElementById("gc-color"))==null?void 0:U.value)||"purple",sort_order:Number((q=document.getElementById("gc-sort"))==null?void 0:q.value)||0,is_active:((H=document.getElementById("gc-active"))==null?void 0:H.checked)??!0,effect_type:((A=document.getElementById("gc-effect-type"))==null?void 0:A.value)||"BOOST_STAT",effect_params:L};if(!y.name){c("Le nom est obligatoire","error");return}const{error:I}=f?await _.from("gc_definitions").insert(y):await _.from("gc_definitions").update(y).eq("id",x.id);if(I){c(I.message,"error");return}c(f?"Carte créée ✅":"Carte modifiée ✅","success"),p(),Ce(t,n)})}async function Gn(e,{toast:t,openModal:n,closeModal:i}){await P(e,{toast:t,openModal:n,closeModal:i})}async function P(e,t){var E,b,k;const{toast:n,openModal:i,closeModal:p}=t,[{data:c,error:f},{data:x},{data:h},{data:a}]=await Promise.all([_.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),_.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1),_.from("season_reward_tiers").select("*").order("rank_min"),_.from("booster_configs").select("id,name").order("sort_order")]);if(f){e.innerHTML=`<p style="color:red">${f.message}</p>`;return}const u=c||[],l=u.find(m=>m.is_active),s=(x||[]).filter(m=>(m.placement_matches||0)>=1),g=s.filter(m=>(m.placement_matches||0)>=10),d=["bronze","silver","gold","platinum","diamond","master"],o={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},v={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},r={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},$={};d.forEach(m=>{$[m]=0}),g.forEach(m=>{const w=m.rank_tier||"bronze";$[w]!==void 0&&$[w]++});const L=g.length?Math.round(g.reduce((m,w)=>m+(w.mmr||1e3),0)/g.length):0;function y(m){return m?new Date(m).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function I(m){const w=new Date;return m.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(m.end_at)<w?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${l?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${l.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${s.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Joueurs ranked</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${g.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Classés (10+ matchs)</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${L}</div>
            <div style="font-size:11px;color:var(--gray-600)">MMR moyen</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(l.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${g.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${d.map(m=>{const w=$[m],B=g.length>0?Math.round(w/g.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${r[m]} ${o[m]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${B}%;background:${v[m]};border-radius:4px;transition:width 0.5s"></div>
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
        <div style="font-weight:700;font-size:14px">Toutes les saisons (${u.length})</div>
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
              ${u.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':u.map(m=>{const w=Math.round((new Date(m.end_at)-new Date(m.start_at))/864e5),B=new Date(m.end_at)<new Date&&!m.is_active;return`
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
          <button id="add-reward-tier-btn" class="btn btn-primary btn-sm" ${u.length?"":`disabled title="Crée d'abord une saison"`}>+ Ajouter un palier</button>
        </div>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:12px">
          Paliers de classement (TOP 1, TOP 3, TOP 10...) associés à une saison Ranked. Chaque palier peut donner des crédits,
          des cartes joueur spécifiques et/ou des boosters, à partir d'une date d'activation optionnelle.
        </div>
        ${u.length?`
        <div class="table-wrap">
          <table>
            <thead>
              <tr><th>Saison</th><th>Palier</th><th>Classement</th><th style="text-align:right">Crédits</th><th style="text-align:center">Cartes</th><th style="text-align:center">Boosters</th><th>Activation</th><th>Statut</th><th>Actions</th></tr>
            </thead>
            <tbody>
              ${(h||[]).map(m=>{var S;const w=!m.activate_at||new Date(m.activate_at)<=new Date;return`<tr>
                  <td style="font-size:12px">${((S=u.find(C=>C.id===m.season_id))==null?void 0:S.name)||"—"}</td>
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
    </div>`,(E=document.getElementById("create-season-btn"))==null||E.addEventListener("click",()=>{Ze(null,{toast:n,openModal:i,closeModal:p,reload:()=>P(e,t)})}),(b=document.getElementById("start-new-season-btn"))==null||b.addEventListener("click",()=>{Kn(l,{toast:n,openModal:i,closeModal:p,reload:()=>P(e,t)})}),e.querySelectorAll("[data-edit]").forEach(m=>{const w=u.find(B=>B.id==m.dataset.edit);m.addEventListener("click",()=>{Ze(w,{toast:n,openModal:i,closeModal:p,reload:()=>P(e,t)})})}),e.querySelectorAll("[data-activate]").forEach(m=>{m.addEventListener("click",async()=>{const w=parseInt(m.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:B}=await _.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(B){n(B.message,"error");return}const{error:S}=await _.from("ranked_seasons").update({is_active:!0}).eq("id",w);if(S){n(S.message,"error");return}await _.from("users").update({current_season_id:w}).gt("placement_matches",0),n("Saison activée ✅","success"),P(e,t)})}),e.querySelectorAll("[data-rewards-for]").forEach(m=>{m.addEventListener("click",()=>{var S;const w=parseInt(m.dataset.rewardsFor);(S=document.getElementById("rewards-section"))==null||S.scrollIntoView({behavior:"smooth",block:"start"});const B=u.find(C=>C.id===w);be(null,u,B,a||[],{toast:n,openModal:i,closeModal:p,reload:()=>P(e,t)})})}),e.querySelectorAll("[data-launch]").forEach(m=>{m.addEventListener("click",async()=>{const w=parseInt(m.dataset.launch),B=u.find(D=>D.id===w);if(!confirm(`Lancer "${B==null?void 0:B.name}" ?

Ceci va :
• Journaliser le classement actuel dans l'historique
• Recalculer le MMR de TOUS les joueurs (reset doux)
• Activer cette saison

Action irréversible. Continuer ?`))return;m.disabled=!0,m.textContent="⏳ Lancement...";const{data:S,error:C}=await _.rpc("admin_launch_season",{p_season_id:w});if(m.disabled=!1,m.textContent="▶ Lancer la saison",C){n(C.message,"error");return}if(!(S!=null&&S.success)){n((S==null?void 0:S.error)||"Échec du lancement","error");return}n(`Saison lancée ✅ (${S.logged} classement(s) archivé(s), ${S.reset} joueur(s) recalculé(s))`,"success"),P(e,t)})}),e.querySelectorAll("[data-deactivate]").forEach(m=>{m.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:w}=await _.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(m.dataset.deactivate));if(w){n(w.message,"error");return}n("Saison désactivée","success"),P(e,t)})}),e.querySelectorAll("[data-delete]").forEach(m=>{m.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:w}=await _.from("ranked_seasons").delete().eq("id",parseInt(m.dataset.delete));if(w){n(w.message,"error");return}n("Saison supprimée","success"),P(e,t)})}),(k=document.getElementById("add-reward-tier-btn"))==null||k.addEventListener("click",()=>{be(null,u,l,a||[],{toast:n,openModal:i,closeModal:p,reload:()=>P(e,t)})}),e.querySelectorAll("[data-edit-tier]").forEach(m=>{const w=(h||[]).find(B=>B.id===m.dataset.editTier);m.addEventListener("click",()=>{be(w,u,l,a||[],{toast:n,openModal:i,closeModal:p,reload:()=>P(e,t)})})}),e.querySelectorAll("[data-distribute-tier]").forEach(m=>{m.addEventListener("click",async()=>{const w=(h||[]).find(C=>C.id===m.dataset.distributeTier);if(!confirm(`Distribuer les récompenses du palier "${w==null?void 0:w.label}" à tous les joueurs concernés ?`))return;m.disabled=!0,m.textContent="⏳...";const{data:B,error:S}=await _.rpc("admin_distribute_season_reward",{p_tier_id:m.dataset.distributeTier});if(S){n(S.message,"error"),m.disabled=!1,m.textContent="🎁 Distribuer";return}if(!(B!=null&&B.success)){n((B==null?void 0:B.error)||"Échec de la distribution","error"),m.disabled=!1,m.textContent="🎁 Distribuer";return}n(`Récompenses distribuées à ${B.rewarded} joueur(s) ✅`,"success"),P(e,t)})}),e.querySelectorAll("[data-delete-tier]").forEach(m=>{m.addEventListener("click",async()=>{if(!confirm("Supprimer ce palier de récompense ?"))return;const{error:w}=await _.from("season_reward_tiers").delete().eq("id",m.dataset.deleteTier);if(w){n(w.message,"error");return}n("Palier supprimé","success"),P(e,t)})})}function be(e,t,n,i,{toast:p,openModal:c,closeModal:f,reload:x}){var o,v,r,$,L;const h=!!e,a=(e==null?void 0:e.season_id)??(n==null?void 0:n.id)??((o=t[0])==null?void 0:o.id)??null;let u=[];const l=y=>{if(!y)return"";const I=new Date(y);return new Date(I.getTime()-I.getTimezoneOffset()*6e4).toISOString().slice(0,16)},s=`
    <div style="display:flex;flex-direction:column;gap:12px">
      <div>
        <label>SAISON RANKED</label>
        <select id="rt-season">
          ${t.map(y=>`<option value="${y.id}" ${y.id===a?"selected":""}>${y.name}${y.is_active?" (active)":""}</option>`).join("")}
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
        <input id="rt-activate-at" type="datetime-local" value="${l(e==null?void 0:e.activate_at)}">
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
  `;c(h?`Modifier : ${e.label}`:"Nouveau palier de récompense",s,`
    <button id="rt-cancel" class="btn btn-ghost">Annuler</button>
    <button id="rt-save" class="btn btn-primary">💾 Enregistrer</button>
  `);function d(){const y=document.getElementById("rt-player-chips");y&&(y.innerHTML=u.map(I=>`
      <span style="display:inline-flex;align-items:center;gap:6px;background:#1A6B3C;color:#fff;font-size:12px;font-weight:700;padding:4px 8px;border-radius:14px">
        ${I.label}
        <button data-remove-player="${I.id}" style="background:none;border:none;color:#fff;cursor:pointer;font-size:12px;padding:0">✕</button>
      </span>`).join(""),y.querySelectorAll("[data-remove-player]").forEach(I=>{I.addEventListener("click",()=>{u=u.filter(E=>E.id!==I.dataset.removePlayer),d()})}))}(v=e==null?void 0:e.player_ids)!=null&&v.length&&_.from("players").select("id,firstname,surname_real").in("id",e.player_ids).then(({data:y})=>{u=(y||[]).map(I=>({id:I.id,label:`${I.firstname} ${I.surname_real}`})),d()}),(r=document.getElementById("rt-player-search-btn"))==null||r.addEventListener("click",async()=>{const y=document.getElementById("rt-player-search").value.trim();if(y.length<2)return;const{data:I}=await _.from("players").select("id,firstname,surname_real,rarity").or(`firstname.ilike.%${y}%,surname_real.ilike.%${y}%`).limit(10),E=document.getElementById("rt-player-results");if(!(I!=null&&I.length)){E.style.display="flex",E.innerHTML='<div style="color:#999;font-size:12px;padding:4px">Aucun résultat.</div>';return}E.style.display="flex",E.innerHTML=I.map(b=>`
      <div data-add-player="${b.id}" data-label="${b.firstname} ${b.surname_real}" style="cursor:pointer;padding:6px 8px;border-radius:6px;font-size:13px;color:#333" onmouseover="this.style.background='#eee'" onmouseout="this.style.background=''">
        ${b.firstname} ${b.surname_real} <span style="color:#999;font-size:11px">(${b.rarity})</span>
      </div>`).join(""),E.querySelectorAll("[data-add-player]").forEach(b=>{b.addEventListener("click",()=>{const k=b.dataset.addPlayer;u.some(m=>m.id===k)||u.push({id:k,label:b.dataset.label}),d(),E.style.display="none",document.getElementById("rt-player-search").value=""})})}),($=document.getElementById("rt-cancel"))==null||$.addEventListener("click",()=>f()),(L=document.getElementById("rt-save"))==null||L.addEventListener("click",async()=>{const y=document.getElementById("rt-error"),I=parseInt(document.getElementById("rt-season").value),E=document.getElementById("rt-label").value.trim(),b=parseInt(document.getElementById("rt-rank-min").value)||1,k=parseInt(document.getElementById("rt-rank-max").value)||1,m=parseInt(document.getElementById("rt-credits").value)||0,w=document.getElementById("rt-activate-at").value,B=w?new Date(w).toISOString():null,S=[...document.querySelectorAll(".rt-booster-cb:checked")].map(j=>j.value);if(!E){y.textContent="Le libellé est obligatoire.";return}if(b>k){y.textContent="Le classement min doit être ≤ au max.";return}if(!I){y.textContent="Choisis une saison.";return}const C={season_id:I,label:E,rank_min:b,rank_max:k,credits:m,booster_config_ids:S,player_ids:u.map(j=>j.id),activate_at:B},{error:D}=h?await _.from("season_reward_tiers").update(C).eq("id",e.id):await _.from("season_reward_tiers").insert(C);if(D){y.textContent=D.message;return}p(h?"Palier modifié ✅":"Palier créé ✅","success"),f(),x()})}function Kn(e,{toast:t,openModal:n,closeModal:i,reload:p}){var u,l;const c=new Date,f=new Date(c.getTime()+30*864e5),x=s=>s.toISOString().slice(0,10),h=`
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
          <input id="sns-start" type="date" value="${x(c)}">
        </div>
        <div>
          <label>DATE DE FIN</label>
          <input id="sns-end" type="date" value="${x(f)}">
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
  `),(u=document.getElementById("sns-cancel"))==null||u.addEventListener("click",()=>i()),(l=document.getElementById("sns-launch"))==null||l.addEventListener("click",async()=>{const s=document.getElementById("sns-error"),g=document.getElementById("sns-name").value.trim(),d=document.getElementById("sns-start").value,o=document.getElementById("sns-end").value,v=document.getElementById("sns-confirm").checked;if(!g){s.textContent="Le nom de la saison est requis.";return}if(!d||!o){s.textContent="Les deux dates sont requises.";return}if(new Date(d)>=new Date(o)){s.textContent="La date de fin doit être après la date de début.";return}if(!v){s.textContent="Coche la case de confirmation pour continuer.";return}const r=document.getElementById("sns-launch");r.disabled=!0,r.textContent="⏳ Recalcul en cours...";const{data:$,error:L}=await _.rpc("admin_start_new_season",{p_name:g,p_start_at:new Date(d).toISOString(),p_end_at:new Date(o).toISOString()});if(r.disabled=!1,r.textContent="🚀 Démarrer la saison",L){s.textContent=L.message;return}if(!($!=null&&$.success)){s.textContent=($==null?void 0:$.error)||"Échec de l'opération.";return}t(`Nouvelle saison démarrée ✅ (${$.users_reset} joueur(s) recalculé(s))`,"success"),i(),p()})}function Ze(e,{toast:t,openModal:n,closeModal:i,reload:p}){const c=!!e,f=new Date().toISOString().slice(0,16),x=new Date(Date.now()+90*864e5).toISOString().slice(0,16),h=e?new Date(e.start_at).toISOString().slice(0,16):f,a=e?new Date(e.end_at).toISOString().slice(0,16):x,u=(e==null?void 0:e.name)||"";n(c?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group">
        <label>Nom de la saison *</label>
        <input id="season-name" type="text" value="${u}" placeholder="ex: Saison 2 — Été 2026" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de début *</label>
        <input id="season-start" type="datetime-local" value="${h}" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de fin *</label>
        <input id="season-end" type="datetime-local" value="${a}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${c?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function l(){var v,r;const s=(v=document.getElementById("season-start"))==null?void 0:v.value,g=(r=document.getElementById("season-end"))==null?void 0:r.value,d=document.getElementById("season-duration");if(!s||!g||!d)return;const o=Math.round((new Date(g)-new Date(s))/864e5);d.textContent=o>0?`Durée : ${o} jour${o>1?"s":""}`:"⚠️ La fin doit être après le début",d.style.color=o>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var s,g,d;(s=document.getElementById("season-start"))==null||s.addEventListener("input",l),(g=document.getElementById("season-end"))==null||g.addEventListener("input",l),l(),(d=document.getElementById("season-save-btn"))==null||d.addEventListener("click",async()=>{var E,b,k;const o=(E=document.getElementById("season-name"))==null?void 0:E.value.trim(),v=(b=document.getElementById("season-start"))==null?void 0:b.value,r=(k=document.getElementById("season-end"))==null?void 0:k.value,$=document.getElementById("season-error");if(!o){$.textContent="Le nom est requis.";return}if(!v){$.textContent="La date de début est requise.";return}if(!r){$.textContent="La date de fin est requise.";return}if(new Date(r)<=new Date(v)){$.textContent="La date de fin doit être après le début.";return}const L=document.getElementById("season-save-btn");L.disabled=!0,L.textContent="Enregistrement…";const y={name:o,start_at:new Date(v).toISOString(),end_at:new Date(r).toISOString()};let I;if(c?{error:I}=await _.from("ranked_seasons").update(y).eq("id",e.id):{error:I}=await _.from("ranked_seasons").insert({...y,is_active:!1}),I){$.textContent=I.message,L.disabled=!1,L.textContent=c?"💾 Enregistrer":"✅ Créer la saison";return}t(c?"Saison modifiée ✅":"Saison créée ✅","success"),i(),p()})},50)}async function _e(e,t){var h;const{toast:n}=t,{data:i,error:p}=await _.from("solo_levels").select("*").order("level_number");if(p){e.innerHTML=`<p style="color:var(--danger)">${p.message}</p>`;return}const c=a=>`
    <tr data-row="${a.id}">
      <td style="padding:4px 8px;text-align:center">
        <input data-field="level_number" data-id="${a.id}" type="number" min="1" value="${a.level_number}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="target_note_avg" data-id="${a.id}" type="number" min="0" max="999" step="0.5" value="${a.target_note_avg}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="nb_liens_jaune" data-id="${a.id}" type="number" min="0" value="${a.nb_liens_jaune}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="nb_liens_vert" data-id="${a.id}" type="number" min="0" value="${a.nb_liens_vert}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="nb_joueurs_stade" data-id="${a.id}" type="number" min="0" max="16" value="${a.nb_joueurs_stade}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="reward_credits" data-id="${a.id}" type="number" min="0" value="${a.reward_credits}" style="width:100%;padding:6px;text-align:right;font-size:13px">
      </td>
      <td style="text-align:center;padding:4px 8px">
        <input data-field="is_active" data-id="${a.id}" type="checkbox" ${a.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
      </td>
      <td style="text-align:center;padding:4px 8px">
        <button class="btn btn-danger btn-sm" data-del-row="${a.id}">🗑️</button>
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
            ${(i||[]).map(c).join("")||'<tr><td colspan="8" style="text-align:center;color:#aaa;padding:20px">Aucun niveau défini.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;function f(){document.querySelectorAll("#solo-tbody [data-field]").forEach(a=>{a.addEventListener("change",()=>x(a))})}async function x(a){const u=a.dataset.id,l=a.dataset.field,s=l==="is_active"?a.checked:Number(a.value)||0,{error:g}=await _.from("solo_levels").update({[l]:s}).eq("id",u);if(g){n(g.message,"error");return}a.style.transition="background .3s",a.style.background="#e8f8ee",setTimeout(()=>{a.style.background=""},500)}f(),document.querySelectorAll("[data-del-row]").forEach(a=>{a.addEventListener("click",async()=>{confirm("Supprimer ce niveau ? Les joueurs ayant progressé au-delà seront affectés.")&&(await _.from("solo_levels").delete().eq("id",a.dataset.delRow),n("Niveau supprimé","success"),_e(e,t))})}),(h=document.getElementById("solo-add-row"))==null||h.addEventListener("click",async()=>{const u={level_number:Math.max(0,...(i||[]).map(g=>g.level_number))+1,target_note_avg:10,nb_liens_jaune:2,nb_liens_vert:1,nb_joueurs_stade:2,reward_credits:500,is_active:!0},{data:l,error:s}=await _.from("solo_levels").insert(u).select().single();if(s){n(s.message,"error");return}n("Niveau ajouté — modifie les valeurs directement","success"),_e(e,t)})}Pt(et);function Vn(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function Jn(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function we(){document.getElementById("modal-overlay").classList.add("hidden")}const Qe={dashboard:{title:"Dashboard",fn:nt},players:{title:"Joueurs & Cartes",fn:qt},clubs:{title:"Clubs",fn:tn},"card-builder":{title:"Card Builder",fn:mn},users:{title:"Managers",fn:he},market:{title:"Mercato",fn:yt},"import-export":{title:"Import / Export CSV",fn:_n},formations:{title:"Formations & Liens",fn:$n},"boosters-config":{title:"Boosters",fn:Bn},"sell-price":{title:"Prix vente directe",fn:An},journal:{title:"Actualités",fn:Tn},tutorial:{title:"Tutoriel",fn:Dn},stadiums:{title:"Stades",fn:Fn},"gc-cards":{title:"Game Changers",fn:qn},"ranked-seasons":{title:"Saisons Ranked",fn:Gn},"solo-mode":{title:"Solo Mode",fn:_e}};async function ue(e){document.querySelectorAll(".admin-sidebar nav a").forEach(p=>{p.classList.toggle("active",p.dataset.page===e)});const t=document.getElementById("mobile-page-select");t&&(t.value=e);const n=Qe[e]||Qe.dashboard;document.getElementById("page-title").textContent=n.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(i,{toast:Vn,openModal:Jn,closeModal:we,navigate:ue})}catch(p){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${p.message}</div>`,console.error(p)}}async function Yn(){var t;const{data:{session:e}}=await _.auth.getSession();e&&await Xe(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,p=document.getElementById("auth-error");if(p.textContent="",!n||!i){p.textContent="Remplissez tous les champs.";return}const{data:c,error:f}=await _.auth.signInWithPassword({email:n,password:i});if(f){p.textContent=f.message;return}await Xe(c.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await _.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",we),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&we()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",i=>{i.preventDefault(),ue(n.dataset.page)})}),(t=document.getElementById("mobile-page-select"))==null||t.addEventListener("change",n=>{ue(n.target.value)})}async function Xe(e){const{data:t,error:n}=await _.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(n||!t){i.textContent="Profil introuvable.";return}if(!t.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await _.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,ue("dashboard")}Yn();
