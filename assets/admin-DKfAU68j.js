import{s as k,i as It,r as oe,a as Le,A as kt,l as Lt,g as Bt,K as Pe,D as F,b as At,S as St,c as O,H as Ct,R as Tt,e as be,d as at,f as Mt,h as zt,E as Rt,j as jt,N as Dt,M as Nt,B as Pt,k as Ft,m as Ot,F as se,n as Be,o as ue,p as qt,q as xe,t as Fe,u as Ut}from"./match-shared-DVEmlV85.js";async function ot(e){var a;const[{count:n},{count:t},{count:i},{count:u},{count:r},{data:y},{data:h}]=await Promise.all([k.from("players").select("*",{count:"exact",head:!0}),k.from("clubs").select("*",{count:"exact",head:!0}),k.from("users").select("*",{count:"exact",head:!0}),k.from("stadium_definitions").select("*",{count:"exact",head:!0}),k.from("users").select("*",{count:"exact",head:!0}).gt("last_seen_at",new Date(Date.now()-18e4).toISOString()),k.rpc("get_signup_password"),k.from("app_feature_flags").select("*").order("key")]),_=y||"";e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:24px">

      <!-- Managers -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">👥 Managers</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${i??"–"}</div>
        <div style="display:flex;align-items:center;gap:6px;margin-top:10px;font-size:12px;color:var(--tile-fg-dim)">
          <span style="width:8px;height:8px;border-radius:50%;background:#2ecc71;display:inline-block;box-shadow:0 0 6px #2ecc71"></span>
          ${r??0} joueurs connectés
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
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${t??"–"}</div>
        <button class="btn btn-yellow btn-sm" style="width:100%;margin-top:10px" onclick="window.adminNav('clubs')">+ Add new teams</button>
      </div>

      <!-- Players -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">🃏 Players</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${n??"–"}</div>
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
        ${(h||[]).map(c=>`
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
  `,window.adminNav=c=>{var d;(d=document.querySelector(`[data-page="${c}"]`))==null||d.click()},e.querySelectorAll(".feature-flag-toggle").forEach(c=>{c.addEventListener("click",async()=>{const d=c.dataset.key,l=c.dataset.enabled!=="true";c.disabled=!0;const{error:m}=await k.from("app_feature_flags").update({enabled:l,updated_at:new Date().toISOString()}).eq("key",d);if(c.disabled=!1,m){alert(m.message);return}It(),ot(e)})}),(a=document.getElementById("signup-pwd-save"))==null||a.addEventListener("click",async()=>{const c=document.getElementById("signup-pwd-input").value.trim(),d=document.getElementById("signup-pwd-status");if(!c){d.textContent="Le code ne peut pas être vide.",d.style.color="#ff6b6b";return}const l=document.getElementById("signup-pwd-save");l.disabled=!0,l.textContent="⏳...";const{error:m}=await k.rpc("set_signup_password",{new_password:c});if(l.disabled=!1,l.textContent="💾 Enregistrer",m){d.textContent=m.message,d.style.color="#ff6b6b";return}d.textContent="✅ Code mis à jour.",d.style.color="#2ecc71"})}const rt={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},Ht={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Gt(){const e={};for(const n of kt)e[n]=await Lt(n);return e}async function Kt(e,n){const{toast:t}=n;if(!confirm(`Réattribuer une nouvelle photo à tous les joueurs ayant encore l'ancien format de chemin (public/faces/...) ?

Cette action est irréversible.`))return;const i=document.getElementById("fix-old-faces-btn");i&&(i.disabled=!0,i.textContent="⏳ En cours...");try{const{data:u,error:r}=await k.from("players").select("id, country_code, face").like("face","public/faces/%");if(r){t(r.message,"error");return}if(!(u!=null&&u.length)){t("Aucun joueur avec l'ancien format — rien à faire ✅","success");return}const{data:y}=await k.from("players").select("face").not("face","is",null),h=new Set((y||[]).map(c=>c.face).filter(c=>c&&!c.startsWith("public/faces/")));let _=0,a=0;for(const c of u){const d=await Le(c.country_code,h);if(!d){a++;continue}const{error:l}=await k.from("players").update({face:d}).eq("id",c.id);if(l){a++;continue}h.add(d),_++}t(`${_} photo(s) réattribuée(s)${a?`, ${a} échec(s)`:""} ✅`,a?"error":"success")}finally{i&&(i.disabled=!1,i.textContent="🖼️ Réattribuer anciennes photos")}}async function Vt(e,n){await me(e,n)}async function me(e,n,t=null){var a,c,d,l,m;const{toast:i}=n;t||(t={search:((a=document.getElementById("search-players"))==null?void 0:a.value)||"",job:((c=document.getElementById("filter-job"))==null?void 0:c.value)||"",rarity:((d=document.getElementById("filter-rarity"))==null?void 0:d.value)||"",club:((l=document.getElementById("filter-club"))==null?void 0:l.value)||"",country:((m=document.getElementById("filter-country"))==null?void 0:m.value)||""});const[{data:u,error:r},{data:y}]=await Promise.all([k.from("players").select("*, clubs(id,encoded_name,logo_url)"),k.from("clubs").select("id,encoded_name").order("encoded_name")]);if(r){e.innerHTML=`<p style="color:red">${r.message}</p>`;return}const h={GK:0,DEF:1,MIL:2,ATT:3},_=(u||[]).sort((p,o)=>{const x=(h[p.job]??4)-(h[o.job]??4);return x!==0?x:(p.surname_real||"").localeCompare(o.surname_real||"")});Jt(e,_,y||[],n,t)}function Jt(e,n,t,i,u=null){var c,d;const{toast:r}=i;if(e.innerHTML=`
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
          ${Object.entries(rt).map(([l,m])=>`<option value="${l}">${m}</option>`).join("")}
        </select>
        <button class="btn btn-primary" id="add-player-btn" style="white-space:nowrap">+ Joueur</button>
        <button class="btn btn-ghost" id="fix-old-faces-btn" style="white-space:nowrap">🖼️ Réattribuer anciennes photos</button>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <select id="filter-club" style="flex:1;min-width:140px">
          <option value="">Tous les clubs</option>
          ${t.map(l=>`<option value="${l.id}">${l.encoded_name}</option>`).join("")}
        </select>
        <select id="filter-country" style="flex:1;min-width:120px">
          <option value="">Tous les pays</option>
          ${[...new Set(n.map(l=>l.country_code).filter(Boolean))].sort().map(l=>`<option value="${l}">${l}</option>`).join("")}
        </select>
      </div>
      <div id="filters-restore-hook" style="display:none"></div>
      <div id="count-label" style="font-size:12px;color:var(--gray-600)">${n.length} joueur(s)</div>
      <div id="bulk-bar" style="display:none;align-items:center;gap:8px;padding:8px 10px;background:rgba(187,32,32,0.08);border:1px solid #bb2020;border-radius:10px">
        <span id="bulk-count" style="font-size:13px;font-weight:700;color:#bb2020;flex:1"></span>
        <button class="btn btn-danger btn-sm" id="bulk-delete-btn">🗑️ Supprimer la sélection</button>
        <button class="btn btn-ghost btn-sm" id="bulk-cancel-btn">Annuler</button>
      </div>
      <!-- Grille de cartes -->
      <div id="players-list" style="display:flex;flex-wrap:wrap;gap:12px"></div>
    </div>`,u){const l=u,m=p=>document.getElementById(p);l.search&&m("search-players")&&(m("search-players").value=l.search),l.job&&m("filter-job")&&(m("filter-job").value=l.job),l.rarity&&m("filter-rarity")&&(m("filter-rarity").value=l.rarity),l.club&&m("filter-club")&&(m("filter-club").value=l.club),l.country&&m("filter-country")&&(m("filter-country").value=l.country)}if(u){const l=u,m=p=>document.getElementById(p);l.search&&m("search-players")&&(m("search-players").value=l.search),l.job&&m("filter-job")&&(m("filter-job").value=l.job),l.rarity&&m("filter-rarity")&&(m("filter-rarity").value=l.rarity),l.club&&m("filter-club")&&(m("filter-club").value=l.club),l.country&&m("filter-country")&&(m("filter-country").value=l.country)}function y(){const l=document.getElementById("search-players").value.toLowerCase(),m=document.getElementById("filter-job").value,p=document.getElementById("filter-rarity").value,o=document.getElementById("filter-club").value,x=document.getElementById("filter-country").value;return n.filter(s=>(!l||`${s.firstname} ${s.surname_real}`.toLowerCase().includes(l))&&(!m||s.job===m)&&(!p||s.rarity===p)&&(!o||s.club_id===o)&&(!x||s.country_code===x))}const h=new Set;function _(){const l=document.getElementById("bulk-bar"),m=document.getElementById("bulk-count");l&&(l.style.display=h.size>0?"flex":"none",m&&(m.textContent=`${h.size} joueur(s) sélectionné(s)`))}function a(){const l=y();document.getElementById("count-label").textContent=`${l.length} joueur(s)`;const m=document.getElementById("players-list");if(!l.length){m.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}m.innerHTML=l.map(p=>{const o={...p,clubs:p.clubs,face:p.face||null},x=oe(o,{width:120});return`<div style="position:relative;cursor:pointer" data-edit="${p.id}">
        ${x}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${p.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),m.querySelectorAll("[data-edit]").forEach(p=>{p.addEventListener("click",()=>{const o=n.find(x=>x.id===p.dataset.edit);o&&Oe(o,t,e,i)})}),m.querySelectorAll(".btn-del-player").forEach(p=>{p.addEventListener("click",async o=>{if(o.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:x}=await k.from("players").delete().eq("id",p.dataset.del);x?r(x.message,"error"):(r("Joueur supprimé ✅","success"),me(e,i))})})}a(),document.getElementById("search-players").addEventListener("input",a),document.getElementById("filter-job").addEventListener("change",a),document.getElementById("filter-rarity").addEventListener("change",a),document.getElementById("filter-club").addEventListener("change",a),document.getElementById("filter-country").addEventListener("change",a),(c=document.getElementById("bulk-cancel-btn"))==null||c.addEventListener("click",()=>{h.clear(),_(),a()}),(d=document.getElementById("bulk-delete-btn"))==null||d.addEventListener("click",async()=>{var o,x,s,b,w;if(!h.size||!confirm(`Supprimer ${h.size} joueur(s) ?`))return;const l=[...h],{error:m}=await k.from("players").delete().in("id",l);if(m){r(m.message,"error");return}r(`${l.length} joueur(s) supprimé(s) ✅`,"success"),h.clear();const p={search:((o=document.getElementById("search-players"))==null?void 0:o.value)||"",job:((x=document.getElementById("filter-job"))==null?void 0:x.value)||"",rarity:((s=document.getElementById("filter-rarity"))==null?void 0:s.value)||"",club:((b=document.getElementById("filter-club"))==null?void 0:b.value)||"",country:((w=document.getElementById("filter-country"))==null?void 0:w.value)||""};me(e,i,p)}),document.getElementById("add-player-btn").addEventListener("click",()=>Oe(null,t,e,i)),document.getElementById("fix-old-faces-btn").addEventListener("click",()=>Kt(e,i))}async function Oe(e,n,t,i){const{toast:u,openModal:r,closeModal:y}=i,h=!!e,_=await Gt(),{data:a}=await k.from("players").select("face").not("face","is",null),c=new Set((a||[]).map(p=>p.face).filter(Boolean));e!=null&&e.face&&c.delete(e.face);const d='<option value="">— Club —</option>'+n.map(p=>`<option value="${p.id}" ${(e==null?void 0:e.club_id)===p.id?"selected":""}>${p.encoded_name}</option>`).join(""),l=e!=null&&e.face?e.face.split("/")[0]:"",m=Object.keys(_).map(p=>`<option value="${p}" ${l===p?"selected":""}>${p}</option>`).join("");r(h?`✏️ ${e.firstname} ${e.surname_real}`:"➕ Nouveau joueur",`<div style="display:flex;gap:20px;align-items:flex-start">

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
              ${["normal","pepite","papyte","legende"].map(p=>`<option value="${p}" ${(e==null?void 0:e.rarity)===p?"selected":""}>${rt[p]}</option>`).join("")}
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
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([p,o,x])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${Ht[p]};font-weight:700">${p}</label>
                <input id="${o}" type="number" min="0" max="20" value="${(e==null?void 0:e[x])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
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
          ${h?"💾 Enregistrer":"✅ Créer le joueur"}
        </button>
        </div>
      </div>
    </div>`),setTimeout(()=>{var w,g,I;let p=(e==null?void 0:e.face)||null;function o(){var R,N,G,V,J,Y,W,Re,je,De,Ne;const $=document.getElementById("card-preview");if(!$)return;const v=((R=document.getElementById("pm-fn"))==null?void 0:R.value)||"",L=(((N=document.getElementById("pm-real"))==null?void 0:N.value)||"").toUpperCase(),f=((G=document.getElementById("pm-job"))==null?void 0:G.value)||"ATT",E=((V=document.getElementById("pm-job2"))==null?void 0:V.value)||null,B=((J=document.getElementById("pm-rarity"))==null?void 0:J.value)||"normal",S=((Y=document.getElementById("pm-country"))==null?void 0:Y.value)||"FR",C=((W=document.getElementById("pm-club"))==null?void 0:W.value)||null,j=document.getElementById("pm-club"),D=j==null?void 0:j.options[j.selectedIndex];(D==null?void 0:D.text)!=="— Club —"&&(D==null||D.text);const q=parseInt((Re=document.getElementById("pm-g"))==null?void 0:Re.value)||0,U=parseInt((je=document.getElementById("pm-d"))==null?void 0:je.value)||0,H=parseInt((De=document.getElementById("pm-m"))==null?void 0:De.value)||0,A=parseInt((Ne=document.getElementById("pm-a"))==null?void 0:Ne.value)||0,z=n.find($t=>$t.id===C),T={firstname:v||"Prénom",surname_real:L||"NOM",job:f,job2:E||null,rarity:B,country_code:S,club_id:C,note_g:q,note_d:U,note_m:H,note_a:A,face:p||null,clubs:z?{encoded_name:z.encoded_name,logo_url:z.logo_url}:null};$.innerHTML=oe(T,{width:160});const M=document.getElementById("pm-minmax");M&&(M.style.display=["pepite","papyte"].includes(B)?"grid":"none")}function x($){const v=document.getElementById("faces-grid"),L=document.getElementById("pm-face");if(!v||!L)return;const f=_[$]||[];if(console.log("[players] loadFacesGrid folder=",$,"files=",f.length,f.slice(0,5)),!f.length){L.innerHTML='<option value="">— Aucun visage disponible —</option>',v.innerHTML=`<p style="font-size:11px;color:#888;font-style:italic">Aucune image dans le dossier "${$}" du bucket Supabase.</p>`;return}const E=f.filter(B=>{const S=$+"/"+B;return S===p||!c.has(S)});L.innerHTML='<option value="">— Choisir un visage —</option>'+E.map(B=>{const S=$+"/"+B;return`<option value="${S}" ${p===S?"selected":""}>${B}</option>`}).join(""),v.innerHTML=E.map(B=>{const S=$+"/"+B,C=p===S,j=Bt({face:S});return`<div data-face="${S}" style="cursor:pointer;border:2px solid ${C?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${j}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),v.querySelectorAll("[data-face]").forEach(B=>{B.addEventListener("click",()=>{p=B.dataset.face;const S=document.getElementById("pm-face");S&&(S.value=p),v.querySelectorAll("[data-face]").forEach(C=>{C.style.border=`2px solid ${C.dataset.face===p?"#4fc3f7":"transparent"}`}),o()})})}const s=e!=null&&e.face?e.face.split("/")[0]:"";s&&_[s]&&(document.getElementById("pm-folder").value=s,x(s)),(w=document.getElementById("pm-folder"))==null||w.addEventListener("change",$=>{x($.target.value)}),(g=document.getElementById("pm-face"))==null||g.addEventListener("change",$=>{p=$.target.value||null,o()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach($=>{var v,L;(v=document.getElementById($))==null||v.addEventListener("input",o),(L=document.getElementById($))==null||L.addEventListener("change",o)}),(I=document.getElementById("pm-save"))==null||I.addEventListener("click",()=>Wt(e,h,p,t,i)),o()},50)}function Yt(e){const n=t=>{var i;return(i=document.getElementById(t))==null?void 0:i.value};return{firstname:(n("pm-fn")||"").trim(),surname_real:(n("pm-real")||"").trim()||"JOUEUR",country_code:n("pm-country")||"FR",club_id:n("pm-club")||null,job:n("pm-job")||"ATT",job2:n("pm-job2")||null,rarity:n("pm-rarity")||"normal",note_g:parseInt(n("pm-g"))||0,note_d:parseInt(n("pm-d"))||0,note_m:parseInt(n("pm-m"))||0,note_a:parseInt(n("pm-a"))||0,note_min:parseInt(n("pm-nmin"))||null,note_max:parseInt(n("pm-nmax"))||null,sell_price:parseInt(n("pm-price"))||0,face:e||null,ethnie:n("pm-folder")||null,is_active:!0}}async function Wt(e,n,t,i,u){var m,p,o,x,s;const{toast:r,closeModal:y}=u,h=document.getElementById("pm-error"),_=document.getElementById("pm-save"),a=Yt(t);if(!a.firstname){h.textContent="Le prénom est requis.";return}if(!a.surname_real){h.textContent="Le nom est requis.";return}_.disabled=!0,_.textContent="Enregistrement…";const c=a,{error:d}=n?await k.from("players").update({...c,updated_at:new Date().toISOString()}).eq("id",e.id):await k.from("players").insert(c);if(d){h.textContent=d.message,_.disabled=!1,_.textContent=n?"💾 Enregistrer":"✅ Créer le joueur";return}r(n?"Joueur modifié ✅":"Joueur créé ✅","success"),y();const l={search:((m=document.getElementById("search-players"))==null?void 0:m.value)||"",job:((p=document.getElementById("filter-job"))==null?void 0:p.value)||"",rarity:((o=document.getElementById("filter-rarity"))==null?void 0:o.value)||"",club:((x=document.getElementById("filter-club"))==null?void 0:x.value)||"",country:((s=document.getElementById("filter-country"))==null?void 0:s.value)||""};me(i,u,l)}const Zt={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},lt=["rase","court","milong","long"];function Qt(e){const n=Se(e);if(n==="noir")return"noir";if(n==="typ")return Math.random()<.9?"noir":"marron";if(n==="metisse")return Math.random()<.6?"noir":"marron";const t=Math.random();return t<.35?"blond":t<.75?"marron":"noir"}function Xt(e){return Math.random()<.05?"chauve":Qt(e)}const Ae=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function Se(e){return Zt[e]||"blanc"}function st(e){return Xt(e)}function te(e,n){return Math.floor(Math.random()*(n-e+1))+e}function X(e){return e[Math.floor(Math.random()*e.length)]}function dt(e){const n=Ae.filter(t=>t!==e);return X(n)}function _e(e){const n=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","GR","RO","BG","UA","RU"],t=["MA","DZ","TN","EG","LY"],i=["NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","TZ","UG","ET"],u=["JP","KR","CN","VN","TH","ID","PH","IN","PK","BD","SA","AE","IR"];return n.includes(e)||["AR","UY","CL","PE","EC","CO","MX","BR"].includes(e)?"Europeans":t.includes(e)?"North Africans":i.includes(e)?"Africans":u.includes(e)?"Asians":"Europeans"}const en=[{min:1,max:4,pct:55},{min:5,max:10,pct:20},{min:11,max:14,pct:10},{min:15,max:17,pct:10},{min:18,max:20,pct:5}];function ct(){const e=Math.random()*100;let n=0;for(const t of en)if(n+=t.pct,e<n)return te(t.min,t.max);return te(1,4)}function tn(){const e=Array.from({length:20},(n,t)=>t);return e.sort(()=>Math.random()-.5),new Set(e.slice(0,10))}let de=null;function nn(e,n){return e&&(de||(de=tn()),de.has(n))?te(15,20):ct()}const ge={FR:{first:["Lucas","Tom","Hugo","Théo","Antoine","Kylian","Rayan","Axel","Paul","Enzo","Léo","Mathis","Nathan","Alexis","Ethan","Maxime","Julien","Baptiste","Nicolas","Pierre","Clément","Adrien","Valentin","Dylan","Loïc","Quentin","Florian","Kevin","Corentin","Raphaël"],last:["Martin","Bernard","Petit","Dupont","Moreau","Laurent","Robert","Michel","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard","Bonnet","Rousseau","Fontaine","Chevalier","Blanc","Garnier","Boyer","Gauthier","Garcia","Perrin","Robin","Clément","Morin","Nicolas","Henry","Lemaire","Noël","Dufour","Meunier","Brun","Blanchard","Giraud","Joly","Rivière","Brunet"]},ES:{first:["Carlos","Miguel","Javier","Alejandro","Sergio","David","Diego","Pablo","Álvaro","Marcos","Adrián","Rubén","Iker","Raúl","Fernando","Roberto","Víctor","Iván","Gonzalo","Antonio","Manuel","Jesús","Josué","Rodrigo","Cristian","Héctor","Óscar","Mario","Daniel","Jorge"],last:["García","Rodríguez","Martínez","López","Sánchez","González","Pérez","Hernández","Jiménez","Díaz","Torres","Ramírez","Flores","Rivera","Gómez","Morales","Álvarez","Romero","Herrera","Medina","Aguilar","Vargas","Guzmán","Muñoz","Salazar","Soto","Contreras","Rojas","Ramos","Ortiz"]},PT:{first:["João","Pedro","Diogo","Rúben","Bruno","Tiago","André","Ricardo","Luís","Gonçalo","Nuno","Mário","Fábio","Rui","Miguel","Sérgio","Hugo","Filipe","Paulo","Vítor"],last:["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Carvalho","Gomes","Ribeiro","Araújo","Barbosa","Cardoso","Correia","Teixeira","Machado","Vieira","Monteiro","Cunha","Pinto","Melo","Barros","Freitas","Fonseca","Andrade","Castro","Neves","Figueiredo","Duarte"]},BR:{first:["Gabriel","Lucas","Mateus","Gustavo","Felipe","Rodrigo","Thiago","Rafael","Bruno","Diego","Leonardo","Eduardo","Victor","Pedro","Carlos","Alexandre","André","Paulo","Danilo","Marcelo"],last:["Silva","Santos","Oliveira","Souza","Lima","Ferreira","Costa","Nascimento","Alves","Pereira","Rodrigues","Almeida","Nunes","Melo","Barbosa","Rocha","Brito","Castro","Carvalho","Gomes","Lopes","Ramos","Mendes","Cavalcanti","Batista","Azevedo","Campos","Freitas","Reis","Andrade"]},AR:{first:["Lionel","Sergio","Rodrigo","Nicolás","Ezequiel","Gonzalo","Federico","Mauro","Pablo","Diego","Lucas","Matías","Alejandro","Maximiliano","Emiliano","Marcos","Lautaro","Ángel","Leandro","Julián"],last:["González","Rodríguez","Martínez","García","López","Pérez","Sánchez","Romero","Torres","Flores","Díaz","Gómez","Alvarez","Ruiz","Castro","Herrera","Cabrera","Medina","Ferreyra","Suárez"]},IT:{first:["Marco","Luca","Alessandro","Matteo","Davide","Andrea","Francesco","Federico","Lorenzo","Riccardo","Stefano","Simone","Roberto","Nicola","Giovanni","Antonio","Emanuele","Daniele","Alberto","Giorgio"],last:["Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Ricci","Marino","Greco","Bruno","Gallo","Conti","De Luca","Mancini","Giordano","Rizzo","Lombardi","Moretti","Fontana","Rinaldi"]},DE:{first:["Lukas","Max","Jonas","Florian","Tobias","Stefan","Markus","Sebastian","Niklas","Leon","Tim","Felix","Alexander","Philipp","Christian","Thomas","Michael","Jan","Moritz","Fabian"],last:["Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Wolf","Schröder","Neumann","Schwarz","Zimmermann","Braun","Krüger","Hofmann","Wagner","Becker","Koch","Lehmann","Kaiser"]},GB:{first:["James","Harry","Oliver","Jack","George","Charlie","William","Thomas","Alfie","Edward","Ryan","Liam","Noah","Ethan","Kyle","Jordan","Callum","Aaron","Declan","Connor"],last:["Smith","Jones","Williams","Brown","Taylor","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Walker","Wright","Robinson","White","Thompson","Hughes","Edwards","Green","Hall"]},MA:{first:["Yassine","Karim","Mehdi","Amine","Hamza","Bilal","Soufiane","Rachid","Omar","Mohammed","Zakaria","Ilyas","Ayoub","Saad","Khalid","Adil","Tarik","Hicham","Reda","Nabil"],last:["Benali","Amrani","Bouazza","Cherif","Haddad","Meziane","Belkacem","Rahmani","Saidi","Zidane","Belhadj","Tazi","Idrissi","Alaoui","Bennani","Fassi","Lahlou","Naciri","Tahiri","Zniber"]},DZ:{first:["Yacine","Riyad","Sofiane","Haris","Adem","Islam","Bilal","Omar","Nassim","Mehdi","Ryad","Zinedine","Youssef","Farid","Karim","Mourad","Walid","Anes","Ferhat","Djamel"],last:["Amrouche","Boudiaf","Cherki","Guessab","Hamdi","Jaber","Lakhal","Mahjoub","Rezki","Sahnoun","Talbi","Zerrouki","Achour","Bakri","Chaouch","Djaballah","Ferhat","Gacem","Khaldi","Larbi"]},SN:{first:["Sadio","Ismaïla","Cheikhou","Gana","Famara","Mbaye","Pape","Aliou","Moussa","Sidy","Idrissa","Lamine","Bamba","Fallou","Abdou","Diallo","Mamadou","Souleymane","Oumar","Cheikh"],last:["Diallo","Traoré","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Ndiaye","Sow","Cissé","Fofana","Keita","Sylla","Kane","Diarra","Sanogo","Baldé","Kouyaté"]},CI:{first:["Didier","Wilfried","Serge","Jonathan","Franck","Maxwel","Salomon","Gervinho","Nicolas","Maxime","Ismael","Romaric","Abdul","Cheick","Arouna","Kolo","Yaya","Geoffroy","Siaka","Adama"],last:["Drogba","Zaha","Gnagnon","Koné","Touré","Bamba","Diomandé","Konaté","Coulibaly","Fofana","Traoré","Doumbia","Sanogo","Diabaté","Kalou","Bakayoko","Gradel","Seri","Aurier","Haller"]},CM:{first:["Samuel","Alex","Karl","Fabrice","Cédric","Nicolas","Georges","André","Joël","Roger","François","Jean","Patrick","Thierry","Eric","Benjamin","Aristide","Clinton","Clinton","Stéphane"],last:["Eto'o","Song","Choupo-Moting","Aboubakar","Bassogog","Kunde","Toko","Nkoudou","Ngadeu","Oyongo","Fai","Zambo","Mokoena","Ekambi","Tchamba","Mbida","Biya","Kameni","Meyong","Webo"]},NG:{first:["Kelechi","Ahmed","Victor","John","Emmanuel","Samuel","Moses","Ola","Chukwuemeka","Odion","Sunday","Chidi","Nnamdi","Chisom","Tunde","Emeka","Obinna","Uchenna","Ifeanyi","Segun"],last:["Osimhen","Iheanacho","Musa","Onyekuru","Iwobi","Ndidi","Nwankwo","Obi","Mikel","Martins","Okocha","Yekini","Amunike","Babangida","Fash","Lawal","Onuoha","Taiwo","Ayodele","Ameobi"]},JP:{first:["Ryota","Kenji","Hiroshi","Takumi","Yuto","Daichi","Shinji","Makoto","Koji","Naoki","Yuya","Shoya","Ryo","Shu","Atsuto","Masato","Hotaru","Genki","Ko","Ritsu"],last:["Nakamura","Tanaka","Suzuki","Sato","Yamamoto","Watanabe","Ito","Yamada","Saito","Matsumoto","Inoue","Kimura","Hayashi","Shimizu","Yamazaki","Mori","Abe","Ikeda","Kato","Honda"]},KR:{first:["Heung","Son","Ji","Sung","Jae","Young","Kang","Hyun","Woo","Tae","Seung","Min","Jun","Dong","Chang","Sang","Yo","Hee","Jin","Bum"],last:["Kim","Park","Lee","Choi","Jung","Kang","Cho","Yoon","Lim","Oh","Han","Seo","Kwon","Hwang","Ahn","Yang","Shin","Yoo","Jang","Song"]},MX:{first:["Carlos","Hirving","Andrés","Javier","Miguel","Raúl","Héctor","Diego","Jorge","Luis","Rodolfo","Erick","Jonathan","Néstor","Tecatito","Chicharito","Oswaldo","Oribe","Uriel","Giovanni"],last:["Hernández","Lozano","Guardado","Vela","Morales","Jiménez","Reyes","Corona","Herrera","Rodríguez","Ochoa","Chicharito","Flores","Domínguez","Araujo","Álvarez","Pineda","Sánchez","Antuna","Meza"]},_DEFAULT_EUROPE:{first:["Stefan","Ivan","Luca","Marco","Andrei","Cristian","Bogdan","Mircea","Adrian","Florin","Dušan","Aleksandar","Nikola","Nemanja","Marko","Filip","Milan","Branislav","Radomir","Dejan"],last:["Popescu","Ionescu","Stan","Marin","Stoica","Popa","Radu","Constantin","Barbu","Dobre","Petrović","Marković","Nikolić","Jovanović","Popović","Stanković","Đorđević","Lukić","Simić","Ilić"]},_DEFAULT_AFRIQUE:{first:["Mamadou","Ibrahima","Moussa","Seydou","Boubacar","Oumar","Modibo","Adama","Bakary","Abdoulaye","Lamine","Ousmane","Sekou","Demba","Tidiane","Amadou","Issiaka","Siaka","Fode","Samba"],last:["Diallo","Traoré","Coulibaly","Koné","Doumbia","Kouyaté","Bah","Konaté","Touré","Camara","Sylla","Keita","Diakité","Sangaré","Sanou","Sidibé","Bathily","Niakaté","Dioumassi","Sissoko"]},_DEFAULT_ASIE:{first:["Wei","Ming","Jae","Van","Duc","Sorn","Ali","Hassan","Reza","Arman","Yusuf","Tariq","Faris","Khalid","Saad","Rashid","Nasser","Walid","Ziad","Adel"],last:["Zhang","Wang","Liu","Chen","Yang","Huang","Zhou","Wu","Xu","Sun","Al-Rashidi","Al-Dosari","Al-Harthi","Al-Balushi","Al-Farsi","Al-Shamsi","Al-Neyadi","Al-Breiki","Al-Hammadi","Al-Mansouri"]},_DEFAULT_AMERIQUE:{first:["James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Marcus","Jordan","Andre","Devonte","Malik","Tyrone","Jamal","Darius","DeShawn","Brandon","Cody"],last:["Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Taylor","Anderson","Jackson","White","Harris","Clark","Lewis","Walker","Hall","Allen","Young","King"]}},an={FR:"FR",BE:"FR",CH:"FR",MC:"FR",LU:"FR",ES:"ES",MX:"MX",CO:"ES",VE:"ES",PE:"ES",CL:"ES",EC:"ES",UY:"ES",PY:"ES",BO:"ES",CR:"ES",PA:"ES",HN:"ES",GT:"ES",SV:"ES",NI:"ES",DO:"ES",CU:"ES",PT:"PT",AO:"PT",MZ:"PT",CV:"PT",BR:"BR",AR:"AR",IT:"IT",SM:"IT",DE:"DE",AT:"DE",GB:"GB",IE:"GB",AU:"GB",NZ:"GB",CA:"GB",MA:"MA",TN:"DZ",LY:"DZ",DZ:"DZ",SN:"SN",ML:"SN",GN:"SN",GW:"SN",GM:"SN",MR:"SN",CI:"CI",BF:"CI",TG:"CI",BJ:"CI",GH:"CI",CM:"CM",GA:"CM",CG:"CM",CD:"CM",NG:"NG",JP:"JP",KR:"KR",MX:"MX",PL:"_DEFAULT_EUROPE",CZ:"_DEFAULT_EUROPE",SK:"_DEFAULT_EUROPE",HU:"_DEFAULT_EUROPE",HR:"_DEFAULT_EUROPE",RS:"_DEFAULT_EUROPE",SI:"_DEFAULT_EUROPE",RO:"_DEFAULT_EUROPE",BG:"_DEFAULT_EUROPE",GR:"_DEFAULT_EUROPE",TR:"_DEFAULT_EUROPE",RU:"_DEFAULT_EUROPE",UA:"_DEFAULT_EUROPE",NL:"_DEFAULT_EUROPE",DK:"_DEFAULT_EUROPE",SE:"_DEFAULT_EUROPE",NO:"_DEFAULT_EUROPE",FI:"_DEFAULT_EUROPE",AL:"_DEFAULT_EUROPE",EG:"_DEFAULT_AFRIQUE",ZA:"_DEFAULT_AFRIQUE",KE:"_DEFAULT_AFRIQUE",ET:"_DEFAULT_AFRIQUE",TZ:"_DEFAULT_AFRIQUE",UG:"_DEFAULT_AFRIQUE",CN:"_DEFAULT_ASIE",VN:"_DEFAULT_ASIE",TH:"_DEFAULT_ASIE",ID:"_DEFAULT_ASIE",PH:"_DEFAULT_ASIE",IN:"_DEFAULT_ASIE",PK:"_DEFAULT_ASIE",BD:"_DEFAULT_ASIE",IR:"_DEFAULT_ASIE",SA:"_DEFAULT_ASIE",AE:"_DEFAULT_ASIE",QA:"_DEFAULT_ASIE",KW:"_DEFAULT_ASIE",IQ:"_DEFAULT_ASIE",SY:"_DEFAULT_ASIE",JO:"_DEFAULT_ASIE",US:"_DEFAULT_AMERIQUE"};function pt(e){return an[e]||"_DEFAULT_EUROPE"}function ut(e){const n=pt(e),t=(ge[n]||ge._DEFAULT_EUROPE).first;return X(t)}function mt(e){const n=pt(e);return(ge[n]||ge._DEFAULT_EUROPE).last}function on(e,n,t=new Set,i=!1){const u=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],r=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],y=new Set(r.sort(()=>Math.random()-.5).slice(0,4)),h=[...r].sort(()=>Math.random()-.5),_=new Set(h.slice(0,2)),a=new Set(h.slice(2,4)),c=10,d=u.map((p,o)=>o<c);for(let p=d.length-1;p>0;p--){const o=Math.floor(Math.random()*(p+1));[d[p],d[o]]=[d[o],d[p]]}const l=new Set;function m(p){const o=mt(p),x=o.filter(g=>!l.has(g)&&!t.has(g)),s=x.length?x:o.filter(g=>!l.has(g)),b=s.length?s:o,w=X(b);return l.add(w),w}return u.map((p,o)=>{const x=d[o]?n:dt(n),s=Se(x),b=st(x),w=X(lt),g=_.has(o)?"pepite":a.has(o)?"papyte":"normal",I=g==="pepite"?te(10,15):g==="papyte"?te(15,20):nn(i,o),$=y.has(o),v=$?Math.max(0,I-2):0;let L=0,f=0,E=0,B=0,S=null;p==="GK"?L=I:p==="DEF"?(f=I,$&&(E=v,S="MIL")):p==="ATT"?(B=I,$&&(E=v,S="MIL")):(E=I,$&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(f=v,S="DEF"):(B=v,S="ATT")));const C=m(x);return{job:p,job2:S,firstname:ut(x),surname_real:C,country_code:x,club_id:e,note_g:L,note_d:f,note_m:E,note_a:B,skin:s,hair:b,hair_length:w,rarity:g,sell_price:0,ethnie:_e(x),_ethnie:_e(x)}})}async function gt(e,n,t,i=!1){de=null;const{data:u}=await k.from("players").select("surname_real").not("surname_real","is",null),r=new Set((u||[]).map(p=>p.surname_real).filter(Boolean)),y=on(e,n,r,i),{data:h}=await k.from("players").select("face").not("face","is",null),_=new Set((h||[]).map(p=>p.face).filter(Boolean)),a=new Set;for(const p of y){const o=await Le(p.country_code,new Set([..._,...a]));o&&(p.face=o,a.add(o)),delete p._ethnie}const{data:c,error:d}=await k.from("players").insert(y).select("id");if(d){console.error("[GenSquad] Erreur batch insert:",d.message,d.details),t("Erreur: "+d.message,"error");return}const l=(c||[]).map(p=>({card_type:"player",player_id:p.id}));if(l.length){const{error:p}=await k.from("cards").insert(l);p&&console.warn("[GenSquad] Erreur cartes:",p.message)}const m=(c==null?void 0:c.length)||0;console.log("[GenSquad] Créés:",m,"/",y.length),m>0?t(`${m} joueurs générés ✅`,"success"):t("Erreur génération joueurs","error")}function ft(e){return{style:e.kit_style||F.style,color1:e.kit_color1||F.color1,color2:e.kit_color2||F.color2,color3:e.kit_color3||F.color3,shorts:e.kit_shorts||F.shorts,socks:e.kit_socks||F.socks}}let ce=[];async function rn(e,n){await ve(e,n)}async function ve(e,n){const[{data:t,error:i},{data:u}]=await Promise.all([k.from("clubs").select("*").order("real_name"),k.from("players").select("club_id")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}ce=t||[];const r={};(u||[]).forEach(y=>{r[y.club_id]=(r[y.club_id]||0)+1}),ln(e,n,r)}function ln(e,n,t={}){const{toast:i,openModal:u,closeModal:r}=n;e.innerHTML=`
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
    </div>`,y(ce),document.getElementById("search-clubs").addEventListener("input",h=>{const _=h.target.value.toLowerCase();y(ce.filter(a=>a.real_name.toLowerCase().includes(_)||a.encoded_name.toLowerCase().includes(_)))}),document.getElementById("add-club-btn").addEventListener("click",()=>qe(null,e,n));function y(h){const _=document.getElementById("clubs-list");if(!h.length){_.innerHTML='<p style="color:var(--tile-fg-dim);padding:20px;text-align:center">Aucun club.</p>';return}const a={};h.forEach(l=>{const m=l.country_code||"—";a[m]||(a[m]=[]),a[m].push(l)});const c=Object.keys(a).sort(),d=l=>{const m=ft(l),p=l.logo_url?`<img src="${l.logo_url}" style="width:36px;height:36px;object-fit:contain;border-radius:8px;flex-shrink:0">`:`<div style="width:36px;height:36px;background:linear-gradient(135deg,${m.color1},${m.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:900;flex-shrink:0">${l.encoded_name.slice(0,3)}</div>`,o=t[l.id]||0;return`
        <div class="club-row" data-club-id="${l.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:10px;cursor:pointer;background:var(--tile-bg);border:1px solid var(--tile-border);transition:background .15s">
          ${p}
          <img src="https://flagsapi.com/${l.country_code}/flat/24.png" style="width:18px;height:13px;object-fit:cover;border-radius:2px;flex-shrink:0" onerror="this.style.display='none'">
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:12px;color:var(--tile-fg-on-page);font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l.encoded_name}</div>
            <div style="font-size:10px;color:${o===0?"#e67e22":"var(--tile-fg-dim)"}">${o===0?"⚠️ 0 joueur":`👥 ${o}`}</div>
          </div>
          <button class="btn-del-club" data-del="${l.id}"
            style="width:22px;height:22px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;flex-shrink:0"
            onclick="event.stopPropagation()">✕</button>
        </div>`};_.innerHTML=c.map(l=>`
      <div style="display:flex;align-items:center;gap:8px;padding:8px 4px 4px;margin-top:6px">
        ${l!=="—"?`<img src="https://flagsapi.com/${l}/flat/24.png" style="width:20px;height:15px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">`:'<span style="font-size:14px">🌍</span>'}
        <span style="font-size:11px;font-weight:900;color:var(--tile-fg-dim);letter-spacing:1px">${l}</span>
        <span style="font-size:11px;color:var(--tile-fg-dim);background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:10px;padding:1px 8px">${a[l].length}</span>
        <div style="flex:1;height:1px;background:var(--tile-border)"></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:4px">
        ${a[l].map(d).join("")}
      </div>
    `).join(""),_.querySelectorAll(".club-row").forEach(l=>{l.addEventListener("click",()=>{const m=ce.find(p=>p.id===l.dataset.clubId);m&&qe(m,e,n),_.querySelectorAll(".club-row").forEach(p=>p.style.background="var(--tile-bg)"),l.style.background="rgba(26,107,60,0.18)"})}),_.querySelectorAll(".btn-del-club").forEach(l=>{l.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:m}=await k.from("clubs").delete().eq("id",l.dataset.del);m?i(m.message,"error"):(i("Club supprimé","success"),ve(e,n))})})}}function sn(e){var D,q,U,H;const{openModal:n,closeModal:t}=e;let i=6;const u=36;function r(A){return new Array(A*A).fill("#ffffff")}let y=r(i),h="OP",_="#D4A017",a=50,c=0,d=0,l="",m="#ffffff",p=25,o=0,x=35,s=new Set,b=null;function w(){const A=u*i;let z="";for(let M=0;M<i;M++)for(let R=0;R<i;R++){const N=M*i+R;z+=`<rect x="${R*u}" y="${M*u}" width="${u}" height="${u}" fill="${y[N]}"/>`}const T=(M,R,N,G,V)=>{if(!M)return"";const J=A/2+G/100*A,Y=A/2+V/100*A,W=N/100*A*(M.length>3?3/M.length:1);return`<text x="${J}" y="${Y}" text-anchor="middle" dominant-baseline="central"
        font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="${W}"
        fill="${R}">${M}</text>`};return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${A} ${A}">
      ${z}
      ${T(h,_,a,c,d)}
      ${T(l,m,p,o,x)}
    </svg>`}function g(A){return"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(A)))}const I=(A,z,T,M,R,N,G)=>`
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
  `,$=`
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

      ${I(1,"TEXTE 1 (20 caractères max)",h,_,a,c,d)}
      ${I(2,"TEXTE 2 — optionnel (20 caractères max)",l,m,p,o,x)}
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
  `;n(`🎨 Générer un logo (${i}×${i})`,$,`
    <button id="flag-cancel" class="btn btn-ghost">Annuler</button>
    <button id="flag-use" class="btn btn-primary">✅ Utiliser ce logo</button>
  `);function L(){const A=document.getElementById("flag-squares-grid");if(!A)return;const z=i>=12?30:i>=9?36:44;A.style.gridTemplateColumns=`repeat(${i}, ${z}px)`,A.innerHTML=y.map((T,M)=>`
      <div class="flag-square" data-i="${M}" style="width:${z}px;height:${z}px;border-radius:4px;background:${T};cursor:pointer;
        box-sizing:border-box;border:${s.has(M)?"3px solid #1A6B3C":"1px solid rgba(0,0,0,0.15)"}"></div>
    `).join(""),A.querySelectorAll(".flag-square").forEach(T=>{T.addEventListener("click",M=>{const R=parseInt(T.dataset.i);M.ctrlKey||M.metaKey||M.shiftKey?s.has(R)?s.delete(R):s.add(R):s=new Set([R]),L(),f()}),T.addEventListener("dblclick",()=>{const M=parseInt(T.dataset.i),R=document.createElement("input");R.type="color",R.value=y[M],R.style.position="fixed",R.style.opacity="0",document.body.appendChild(R),R.addEventListener("input",()=>{y[M]=R.value,L(),C()}),R.addEventListener("change",()=>R.remove()),R.click()})})}function f(){const A=document.getElementById("flag-copy-btn"),z=document.getElementById("flag-paste-btn");A.disabled=s.size===0,z.disabled=s.size===0||b===null}function E(){if(s.size===0)return;const A=[...s][0];b=y[A];const z=document.getElementById("flag-clipboard-preview"),T=document.getElementById("flag-clipboard-swatch");z&&(z.style.display="inline-flex"),T&&(T.style.background=b),f()}function B(){s.size===0||b===null||(s.forEach(A=>{y[A]=b}),L(),C())}(D=document.getElementById("flag-copy-btn"))==null||D.addEventListener("click",E),(q=document.getElementById("flag-paste-btn"))==null||q.addEventListener("click",B);function S(A){if(!document.getElementById("flag-squares-grid")){document.removeEventListener("keydown",S);return}!(A.ctrlKey||A.metaKey)||s.size===0||(A.key==="c"||A.key==="C"?(A.preventDefault(),E()):(A.key==="v"||A.key==="V")&&(A.preventDefault(),B()))}document.addEventListener("keydown",S),document.querySelectorAll(".flag-grid-size").forEach(A=>{A.addEventListener("click",()=>{const z=parseInt(A.dataset.n);if(z===i)return;i=z,y=r(i),s=new Set,b=null;const T=document.getElementById("flag-clipboard-preview");T&&(T.style.display="none"),L(),f(),C(),document.querySelectorAll(".flag-grid-size").forEach(M=>{M.classList.toggle("btn-primary",parseInt(M.dataset.n)===i),M.classList.toggle("btn-ghost",parseInt(M.dataset.n)!==i)})})});function C(){const A=document.getElementById("flag-preview");A&&(A.innerHTML=w())}L(),f(),C();function j(A){document.getElementById(`flag-text${A}`).addEventListener("input",z=>{const T=z.target.value.slice(0,20);A===1?h=T:l=T,C()}),document.getElementById(`flag-text${A}-color`).addEventListener("input",z=>{A===1?_=z.target.value:m=z.target.value,C()}),document.getElementById(`flag-text${A}-size`).addEventListener("input",z=>{const T=parseInt(z.target.value);A===1?a=T:p=T,document.getElementById(`flag-size${A}-val`).textContent=T,C()}),document.getElementById(`flag-text${A}-x`).addEventListener("input",z=>{const T=parseInt(z.target.value);A===1?c=T:o=T,document.getElementById(`flag-x${A}-val`).textContent=T,C()}),document.getElementById(`flag-text${A}-y`).addEventListener("input",z=>{const T=parseInt(z.target.value);A===1?d=T:x=T,document.getElementById(`flag-y${A}-val`).textContent=T,C()})}j(1),j(2),(U=document.getElementById("flag-cancel"))==null||U.addEventListener("click",()=>t()),(H=document.getElementById("flag-use"))==null||H.addEventListener("click",()=>{const A=g(w()),z=document.getElementById("m-logo-url-current");z&&(z.value=A);const T=document.getElementById("logo-preview");T&&(T.innerHTML=`<img src="${A}" style="width:100%;height:100%;object-fit:contain">`),t()})}async function qe(e,n,t){var x,s,b,w,g,I,$;const{toast:i}=t,u=!!e,r=e?ft(e):{...F},y=document.getElementById("club-panel");if(!y)return;const h=Object.entries(Pe).map(([v,L])=>`<option value="${v}" ${r.style===v?"selected":""}>${L.label}</option>`).join(""),_=Ae.map(v=>`<option value="${v}" ${((e==null?void 0:e.country_code)||"FR")===v?"selected":""}>${v}</option>`).join("");y.style.display="block",y.style.alignItems="",y.style.justifyContent="",y.innerHTML=`
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
              <select id="m-kit-style" style="width:100%">${h}</select>
            </div>
            ${[["Couleur 1","m-kit-color1",r.color1,!1],["Couleur 2","m-kit-color2",r.color2,!1],["Couleur 3","m-kit-color3",r.color3,!0],["Short","m-kit-shorts",r.shorts,!1],["Chaussettes","m-kit-socks",r.socks,!1]].map(([v,L,f,E])=>`
              <div class="form-group" id="wrap-${L}" ${E?'style="display:none"':""}>
                <label>${v}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${L}" value="${f||"#000000"}" style="width:38px;height:32px;padding:2px;border:1px solid var(--tile-border);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${L}-txt" value="${f||"#000000"}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
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
  `,(x=document.getElementById("m-logo-file"))==null||x.addEventListener("change",v=>{var E;const L=(E=v.target.files)==null?void 0:E[0];if(!L)return;const f=new FileReader;f.onload=()=>{document.getElementById("logo-preview").innerHTML=`<img src="${f.result}" style="width:100%;height:100%;object-fit:contain">`},f.readAsDataURL(L)}),(s=document.getElementById("m-open-flag-builder"))==null||s.addEventListener("click",()=>{sn(t)}),ae();function a(){var E,B;const v=((E=document.getElementById("m-kit-style"))==null?void 0:E.value)||"uni",L=((B=Pe[v])==null?void 0:B.colors)===3,f=document.getElementById("wrap-m-kit-color3");f&&(f.style.display=L?"":"none")}a(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(v=>{const L=document.getElementById(v),f=document.getElementById(v+"-txt");!L||!f||(L.addEventListener("input",()=>{f.value=L.value,ae()}),f.addEventListener("input",()=>{const E=f.value.trim();/^#[0-9a-fA-F]{6}$/.test(E)&&(L.value=E,ae())}),f.addEventListener("change",()=>{let E=f.value.trim();E.startsWith("#")||(E="#"+E),/^#[0-9a-fA-F]{6}$/.test(E)&&(L.value=E,f.value=E,ae())}))}),(b=document.getElementById("m-kit-style"))==null||b.addEventListener("change",()=>{a(),ae()});const c=document.getElementById("m-real"),d=document.getElementById("m-encoded");function l(){if(!c||!d||d.value)return;const v=c.value.trim().split(/\s+/),L=v.length===1?v[0].toUpperCase().slice(0,6):v.filter(f=>f.length>2).map(f=>f[0].toUpperCase()).join("")||v[0].toUpperCase().slice(0,4);d.value=L}c==null||c.addEventListener("input",l),(w=document.getElementById("auto-encode-btn"))==null||w.addEventListener("click",()=>{d&&(d.value=""),l()}),(g=document.getElementById("m-save"))==null||g.addEventListener("click",()=>gn(e,u,n,t));const m=document.getElementById("m-gen-squad"),p=document.getElementById("m-gen-strong-label");function o(){if(p&&(p.style.display=m!=null&&m.checked?"flex":"none",!(m!=null&&m.checked))){const v=document.getElementById("m-gen-strong");v&&(v.checked=!1)}}m==null||m.addEventListener("change",o),o(),(I=document.getElementById("btn-gen-squad-panel"))==null||I.addEventListener("click",()=>{dn(e,t,n)}),($=document.getElementById("btn-gen-one-player"))==null||$.addEventListener("click",()=>{pn(e,t)}),u&&Ce(e.id)}async function Ce(e){const{data:n}=await k.from("players").select("*, clubs(encoded_name, logo_url, kit_style, kit_color1, kit_color2, kit_color3, kit_shorts, kit_socks)").eq("club_id",e).order("surname_real"),t=document.getElementById("club-players-grid"),i=document.getElementById("club-players-count");if(i&&(i.textContent=(n||[]).length),!!t){if(!(n!=null&&n.length)){t.innerHTML='<div style="color:var(--tile-fg-dim);padding:20px;font-size:13px">Aucun joueur dans ce club.</div>';return}t.innerHTML=n.map(u=>oe(u,{width:100})).join("")}}function dn(e,n,t){const{openModal:i,closeModal:u,toast:r}=n;i(`⚽ Générer — ${e.real_name}`,`<div style="display:flex;flex-direction:column;gap:14px">
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
    </div>`),setTimeout(()=>{var y,h;(y=document.getElementById("qg-cancel"))==null||y.addEventListener("click",()=>u()),(h=document.getElementById("qg-ok"))==null||h.addEventListener("click",async()=>{var a;const _=((a=document.getElementById("qg-strong"))==null?void 0:a.checked)??!1;u(),r("Génération en cours…","info"),await gt(e.id,e.country_code,r,_),r("Effectif généré ✅","success"),Ce(e.id),ve(t,n)})},50)}const yt=["GK","DEF","MIL","ATT"],cn=[{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}];function pn(e,n){const{openModal:t,closeModal:i,toast:u}=n,r=Ae.map(a=>`<option value="${a}">${a}</option>`).join(""),y=a=>yt.map(c=>`<option value="${c}" ${c===a?"selected":""}>${c}</option>`).join(""),h=`
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
              ${cn.map(a=>`<option value="${a.value}">${a.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label>PAYS</label>
            <select id="gen-one-country">
              <option value="">— Aléatoire —</option>
              ${r}
            </select>
          </div>
        </div>
      </div>
    </div>
  `;t(`➕ Générer un joueur — ${e.real_name}`,h,`
    <button id="gen-one-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gen-one-ok" class="btn btn-primary">➕ Générer</button>
  `),setTimeout(()=>{var a,c;document.querySelectorAll('input[name="gen-one-mode"]').forEach(d=>{d.addEventListener("change",()=>{document.getElementById("gen-one-custom-fields").style.display=d.value==="custom"&&d.checked?"flex":"none"})}),(a=document.getElementById("gen-one-cancel"))==null||a.addEventListener("click",()=>i()),(c=document.getElementById("gen-one-ok"))==null||c.addEventListener("click",async()=>{var p,o,x,s,b;const d=((p=document.querySelector('input[name="gen-one-mode"]:checked'))==null?void 0:p.value)||"random",l=document.getElementById("gen-one-ok");l.disabled=!0,l.textContent="⏳ Génération…";const m={};d==="custom"&&(m.job=((o=document.getElementById("gen-one-job1"))==null?void 0:o.value)||null,m.job2=((x=document.getElementById("gen-one-job2"))==null?void 0:x.value)||null,m.rarity=((s=document.getElementById("gen-one-rarity"))==null?void 0:s.value)||null,m.country=((b=document.getElementById("gen-one-country"))==null?void 0:b.value)||null);try{await un(e,m),u("Joueur généré ✅","success"),i(),Ce(e.id)}catch(w){u("Erreur : "+w.message,"error"),l.disabled=!1,l.textContent="➕ Générer"}})},50)}async function un(e,n={}){const t=n.country||(Math.random()<.5?e.country_code:dt(e.country_code)),i=n.job||X(yt),u=n.job2||null,r=n.rarity||(()=>{const B=Math.random()*100;return B<1.5?"legende":B<3?"pepite":B<4.5?"papyte":"normal"})(),y=r==="pepite"?te(10,15):r==="papyte"?te(15,20):ct(),h=u?Math.max(0,y-2):0;let _=0,a=0,c=0,d=0;i==="GK"&&(_=y),i==="DEF"&&(a=y),i==="MIL"&&(c=y),i==="ATT"&&(d=y),u==="GK"&&(_=h),u==="DEF"&&(a=h),u==="MIL"&&(c=h),u==="ATT"&&(d=h);const l=Se(t),m=st(t),p=X(lt),{data:o}=await k.from("players").select("surname_real").not("surname_real","is",null),x=new Set((o||[]).map(B=>B.surname_real).filter(Boolean)),s=mt(t),b=s.filter(B=>!x.has(B)),w=X(b.length?b:s),g={job:i,job2:u,firstname:ut(t),surname_real:w,country_code:t,club_id:e.id,note_g:_,note_d:a,note_m:c,note_a:d,skin:l,hair:m,hair_length:p,rarity:r,sell_price:0,ethnie:_e(t)},{data:I}=await k.from("players").select("face").not("face","is",null),$=new Set((I||[]).map(B=>B.face).filter(Boolean)),v=await Le(t,$);v&&(g.face=v);const{data:L,error:f}=await k.from("players").insert(g).select("id").single();if(f)throw f;const{error:E}=await k.from("cards").insert({card_type:"player",player_id:L.id});E&&console.warn("[GenOnePlayer] Erreur carte:",E.message)}function bt(){var e,n,t,i,u,r;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((n=document.getElementById("m-kit-color1"))==null?void 0:n.value)||"#1A6B3C",color2:((t=document.getElementById("m-kit-color2"))==null?void 0:t.value)||"#ffffff",color3:((i=document.getElementById("m-kit-color3"))==null?void 0:i.value)||"#000000",shorts:((u=document.getElementById("m-kit-shorts"))==null?void 0:u.value)||"#111111",socks:((r=document.getElementById("m-kit-socks"))==null?void 0:r.value)||"#ffffff"}}function ae(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=At(bt(),"panel"))}async function mn(e,n){const t=(e.name.split(".").pop()||"png").toLowerCase(),i=`clubs/${n||"new"}-${Date.now()}.${t}`,{error:u}=await k.storage.from("assets").upload(i,e,{upsert:!0,cacheControl:"3600"});if(u)throw u;const{data:r}=k.storage.from("assets").getPublicUrl(i);return r.publicUrl}async function gn(e,n,t,i){var w,g,I,$,v,L,f,E,B;const{toast:u}=i,r=document.getElementById("m-error"),y=document.getElementById("m-save"),h=(w=document.getElementById("m-real"))==null?void 0:w.value.trim(),_=(g=document.getElementById("m-encoded"))==null?void 0:g.value.trim().toUpperCase(),a=(I=document.getElementById("m-country"))==null?void 0:I.value.trim().toUpperCase(),c=((v=($=document.getElementById("m-logo-file"))==null?void 0:$.files)==null?void 0:v[0])||null,d=((L=document.getElementById("m-logo-url-current"))==null?void 0:L.value)||null,l=((f=document.getElementById("m-gen-stadium"))==null?void 0:f.checked)??!1,m=((E=document.getElementById("m-gen-squad"))==null?void 0:E.checked)??!1,p=((B=document.getElementById("m-gen-strong"))==null?void 0:B.checked)??!1,o=bt();if(!h){r.textContent="Le nom du club est requis.";return}if(!_){r.textContent="Le nom encodé est requis.";return}if(!a){r.textContent="Le pays est requis.";return}y.disabled=!0,y.textContent="Enregistrement…";let x=d;if(c)try{y.textContent="📤 Envoi du logo…",x=await mn(c,e==null?void 0:e.id)}catch(S){r.textContent="Erreur upload logo : "+S.message,y.disabled=!1,y.textContent=n?"💾 Enregistrer":"✅ Créer le club";return}const s={real_name:h,encoded_name:_,country_code:a,logo_url:x,kit_style:o.style,kit_color1:o.color1,kit_color2:o.color2,kit_color3:o.color3,kit_shorts:o.shorts,kit_socks:o.socks};let b=e==null?void 0:e.id;if(n){const{error:S}=await k.from("clubs").update(s).eq("id",b);if(S){r.textContent=S.message,y.disabled=!1,y.textContent="💾 Enregistrer";return}}else{const{data:S,error:C}=await k.from("clubs").insert(s).select().single();if(C){r.textContent=C.message,y.disabled=!1,y.textContent="✅ Créer le club";return}if(b=S.id,l){y.textContent="🏟️ Création du stade…";const{data:j,error:D}=await k.from("stadium_definitions").insert({name:`Stade de ${h}`,club_id:b,country_code:null}).select().single();D?console.warn("[Stadium] Erreur def stade:",D.message):j&&await k.from("cards").insert({card_type:"stadium",stadium_id:j.id})}m&&(y.textContent="⚽ Génération des joueurs…",await gt(b,a,u,p))}u(n?"Club modifié ✅":"Club créé ✅","success"),ve(t,i)}const fn=["normal","pepite","papyte","legende"],Ue=["GK","DEF","MIL","ATT"],yn=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let ee={...O},pe=[];async function bn(e,{toast:n}){const{data:t}=await k.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");pe=t||[],ee={...O},e.innerHTML=En(pe),xn(e,pe,n),K()}function He(){var t;const e=((t=document.getElementById("cb-surname-real"))==null?void 0:t.value)||"",n=document.getElementById("cb-surname-enc");n&&(n.value=be(e))}function vn(){var t;const e=(t=document.getElementById("cb-club"))==null?void 0:t.value,n=pe.find(i=>String(i.id)===String(e));return n?{style:n.kit_style||F.style,color1:n.kit_color1||F.color1,color2:n.kit_color2||F.color2,shorts:n.kit_shorts||F.shorts,socks:n.kit_socks||F.socks}:{...F}}function K(){var l,m,p,o;const e=x=>{var s;return((s=document.getElementById(x))==null?void 0:s.value)||""},n={firstname:e("cb-firstname"),surname_real:e("cb-surname-enc")||be(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((m=(l=document.getElementById("cb-club"))==null?void 0:l.selectedOptions[0])==null?void 0:m.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},t=vn(),i=document.getElementById("cb-club"),u=((o=(p=i==null?void 0:i.selectedOptions[0])==null?void 0:p.dataset)==null?void 0:o.logo)||null,r=at(ee,t,120),y=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(r)}`,h=Mt(n,{portraitUrl:y,clubLogoUrl:u,showNotes:!0}),_=document.getElementById("card-preview");_&&(_.innerHTML=h);const a=document.getElementById("avatar-preview-wrap");a&&(a.innerHTML=r);const c=e("cb-surname-real"),d=document.getElementById("encode-summary");d&&c&&(d.textContent=`${e("cb-firstname")} ${c} → ${e("cb-firstname")} ${n.surname_real}`)}function vt(){const e=n=>{var t;return((t=document.getElementById(n))==null?void 0:t.value)||""};ee={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function xn(e,n,t){var u,r,y,h,_;e.querySelectorAll("input,select").forEach(a=>{a.addEventListener("input",K),a.addEventListener("change",K)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(a=>{var c;(c=document.getElementById(a))==null||c.addEventListener("change",()=>{vt(),K()})}),(u=document.getElementById("cb-surname-real"))==null||u.addEventListener("input",()=>{He(),K()}),(r=document.getElementById("btn-encode"))==null||r.addEventListener("click",()=>{He(),K()}),(y=document.getElementById("cb-club"))==null||y.addEventListener("change",K),(h=document.getElementById("btn-save-player"))==null||h.addEventListener("click",()=>hn(t)),(_=document.getElementById("btn-reset"))==null||_.addEventListener("click",()=>{e.querySelectorAll("input").forEach(a=>a.value=""),e.querySelectorAll("select").forEach(a=>a.selectedIndex=0),ee={...O},i.forEach(a=>{const c=a.replace("av-",""),d=document.getElementById(a);d&&(d.value=O[c]||"")}),K()})}async function hn(e){const n=y=>{var h;return((h=document.getElementById(y))==null?void 0:h.value)||""},t=n("cb-surname-real").trim(),i=n("cb-surname-enc").trim()||be(t);if(!n("cb-firstname")||!t||!n("cb-country")||!n("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}vt();const u={firstname:n("cb-firstname").trim(),surname_real:t,surname_real:i,country_code:n("cb-country"),club_id:n("cb-club")||null,job:n("cb-job"),job2:n("cb-job2")||null,note_g:parseInt(n("cb-note-g"))||0,note_d:parseInt(n("cb-note-d"))||0,note_m:parseInt(n("cb-note-m"))||0,note_a:parseInt(n("cb-note-a"))||0,rarity:n("cb-rarity")||"normal",note_min:parseInt(n("cb-note-min"))||null,note_max:parseInt(n("cb-note-max"))||null,sell_price:parseInt(n("cb-price"))||0,avatar_config:ee,skin:ee.skin||"blanc",hair:ee.hairColor||"marron",hair_length:"court"},{error:r}=await k.from("players").insert(u);if(r){e("Erreur: "+r.message,"error");return}e(`✅ Joueur "${u.firstname} ${u.surname_real}" enregistré !`,"success")}function En(e){const n=yn.map(([a,c])=>`<option value="${a}">${c} (${a})</option>`).join(""),t='<option value="">— Sélectionner un club —</option>'+e.map(a=>`<option value="${a.id}" data-logo="${a.logo_url||""}">${a.encoded_name}</option>`).join(""),i=Ue.map(a=>`<option value="${a}">${a}</option>`).join(""),u='<option value="">Aucun</option>'+Ue.map(a=>`<option value="${a}">${a}</option>`).join(""),r=fn.map(a=>`<option value="${a}">${a.charAt(0).toUpperCase()+a.slice(1)}</option>`).join(""),y=(a,c,d)=>Object.entries(c).map(([l,m])=>`<option value="${l}" ${l===(d||"")?"selected":""}>${m.label}</option>`).join(""),h=Object.keys(St).map(a=>`<option value="${a}" ${a===O.skin?"selected":""}>${a.charAt(0).toUpperCase()+a.slice(1)}</option>`).join(""),_=Object.keys(Ct).map(a=>`<option value="${a}" ${a===O.hairColor?"selected":""}>${a.charAt(0).toUpperCase()+a.slice(1)}</option>`).join("");return`
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
          <div><label>Rareté</label><select id="cb-rarity">${r}</select></div>
          <div><label>Note min</label><input id="cb-note-min" type="number" min="0" max="10" placeholder="—"></div>
          <div><label>Note max</label><input id="cb-note-max" type="number" min="0" max="10" placeholder="—"></div>
        </div>
        <div style="margin-top:8px;display:flex;gap:8px">
          ${["normal","pepite","papyte","legende"].map(a=>`
            <div style="background:${Tt[a]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
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
              <select id="av-skin">${h}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${y("av-hair",zt,O.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${_}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${y("av-eyebrows",Rt,O.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${y("av-eyes",jt,O.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${y("av-nose",Dt,O.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${y("av-mouth",Nt,O.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${y("av-beard",Pt,O.beard)}</select>
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
  `}const _n=2*60*1e3;function ne(e){return e.last_seen?Date.now()-new Date(e.last_seen).getTime()<_n:!1}async function we(e,{toast:n}){const[{data:t,error:i},{data:u},{data:r}]=await Promise.all([k.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws,last_seen").order("created_at",{ascending:!1}),k.from("user_solo_progress").select("user_id, unlocked_level"),k.rpc("admin_get_user_emails")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const y={};(u||[]).forEach(p=>{y[p.user_id]=p.unlocked_level});const h={};(r||[]).forEach(p=>{h[p.id]=p.email});const _=t||[];e.innerHTML=`
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
  `;function a(p){const o=document.getElementById("online-count");o&&(o.textContent=p.filter(ne).length)}function c(){const p=document.getElementById("search-users").value.toLowerCase(),o=document.getElementById("filter-online").checked;m(_.filter(x=>{var s;return(x.pseudo.toLowerCase().includes(p)||((s=x.club_name)==null?void 0:s.toLowerCase().includes(p)))&&(!o||ne(x))}))}m(_),a(_),document.getElementById("search-users").addEventListener("input",c),document.getElementById("filter-online").addEventListener("change",c);const d=setInterval(async()=>{const{data:p}=await k.from("users").select("id,last_seen");if(!p)return;const o={};p.forEach(x=>{o[x.id]=x.last_seen}),_.forEach(x=>{x.last_seen=o[x.id]??x.last_seen}),a(_),document.querySelectorAll("[data-online-dot]").forEach(x=>{const s=_.find(b=>b.id===x.dataset.onlineDot);s&&(x.style.background=ne(s)?"#22c55e":"transparent")})},2e4),l=new MutationObserver(()=>{document.body.contains(e)||(clearInterval(d),l.disconnect())});l.observe(document.body,{childList:!0,subtree:!0});function m(p){document.getElementById("users-tbody").innerHTML=p.map(o=>{const x=o.mmr??1e3,s=o.mmr_deviation??350,b=o.placement_matches??0,w=Ft(x),g=o.ranked_wins??0,I=o.ranked_losses??0,$=o.ranked_draws??0,v=g+I+$,L=v>0?Math.round(g/v*100):null,f=b<10,E=s<80?"#1A6B3C":s<150?"#e67e22":"#bb2020";return`
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:6px">
              <span data-online-dot="${o.id}" title="${ne(o)?"En ligne":"Hors ligne"}"
                style="width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${ne(o)?"#22c55e":"transparent"};border:1px solid ${ne(o)?"#22c55e":"var(--gray-300,#ccc)"}"></span>
              <div style="font-weight:700">${o.pseudo}</div>
            </div>
            <div style="font-size:11px;color:var(--gray-600);margin-left:14px">${o.club_name||"—"}</div>
            <div style="font-size:10.5px;color:var(--gray-600);margin-left:14px">${h[o.id]||"—"}</div>
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
              <span style="font-size:16px">${w.emoji}</span>
              <span style="font-weight:700;color:${w.color}">${w.label}</span>
            </div>
            ${f?`<div style="font-size:10px;color:#e67e22">${b}/10 placement${b<10?` (${10-b} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${g}V ${$}N ${I}D${L!==null?` · ${L}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${x}</div>
            <div style="font-size:10px;color:${E}">RD ±${Math.round(s)}</div>
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
        </tr>`}).join(""),document.querySelectorAll(".btn-edit-credits").forEach(o=>{o.addEventListener("click",async()=>{const x=o.dataset.user,s=Number(o.dataset.current)||0,b=prompt("Nouveau solde de crédits :",s);if(b===null)return;const w=parseInt(b.replace(/\s/g,""),10);if(isNaN(w)||w<0){n("Valeur invalide","error");return}const{data:g,error:I}=await k.rpc("admin_update_user_credits",{p_user_id:x,p_new_credits:w});if(I){n(I.message,"error");return}if(!(g!=null&&g.success)){n((g==null?void 0:g.error)||"Échec de la mise à jour","error");return}n("Crédits mis à jour ✅","success");const $=document.getElementById(`credits-display-${x}`);$&&($.textContent=`${w.toLocaleString("fr")} cr.`),o.dataset.current=w})}),document.querySelectorAll("[data-toggle-admin]").forEach(o=>{o.addEventListener("click",async()=>{const x=o.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${x?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:s}=await k.from("users").update({is_admin:x}).eq("id",o.dataset.toggleAdmin);s?n(s.message,"error"):(n("Rôle mis à jour ✅","success"),we(e,{toast:n}))})}),document.querySelectorAll("[data-view-cards]").forEach(o=>{o.addEventListener("click",()=>{kn(o.dataset.viewCards,o.dataset.pseudo)})}),document.querySelectorAll("[data-delete-manager]").forEach(o=>{o.addEventListener("click",async()=>{const x=o.dataset.deleteManager,s=o.dataset.pseudo;if(!confirm(`⚠️ ATTENTION: Supprimer le Manager "${s}" supprimera DÉFINITIVEMENT:
- Tous ses decks
- Toutes ses cartes
- Tous ses matchs
- Tous ses résultats ranked
- Tout ce qui le lie en base

Continuer ?`)||!confirm("Êtes-vous vraiment sûr ? Cette action est IRRÉVERSIBLE."))return;o.disabled=!0,o.textContent="⏳";const{data:b,error:w}=await k.rpc("delete_manager_cascade",{p_user_id:x});if(w){n(`Erreur: ${w.message}`,"error"),o.disabled=!1,o.textContent="🗑️";return}if(!(b!=null&&b.success)){n(`Erreur: ${(b==null?void 0:b.error)||"Suppression échouée"}`,"error"),o.disabled=!1,o.textContent="🗑️";return}n(`Manager "${s}" supprimé et ${Object.values(b.deleted).reduce((g,I)=>g+I)} entrées supprimées ✅`,"success"),we(e,{toast:n})})})}}const Ge=[{key:"player",label:"⚽ Joueurs"},{key:"formation",label:"📋 Formations"},{key:"stadium",label:"🏟️ Stades"},{key:"game_changer",label:"⚡ Game Changers"},{key:"decks",label:"👥 Équipes"},{key:"boosters",label:"🎁 Boosters"}];function wn(e){const n={GK:[],DEF:[],MIL:[],ATT:[]};return(e||[]).filter(t=>t.is_starter).forEach(t=>{const i=/^(GK|DEF|MIL|ATT)(\d+)$/.exec(t.position||"");if(!i)return;const u=i[1],r=parseInt(i[2],10)-1;n[u][r]={cardId:t.card_id,firstname:t.firstname,surname_real:t.surname_real,country_code:t.country_code,club_id:t.club_id,job:t.job,job2:t.job2,note_g:t.note_g,note_d:t.note_d,note_m:t.note_m,note_a:t.note_a,rarity:t.rarity,face:t.face,clubs:t.club_encoded_name?{encoded_name:t.club_encoded_name,logo_url:t.club_logo_url}:null,_evolution_bonus:t.evolution_bonus||0,used:!1}}),n}function $n(e){return e!=null&&e.image_url?`/icons/${e.image_url}`:null}function In(e){var n;return e!=null&&e.image_url?`/icons/${e.image_url}`:(n=e==null?void 0:e.club)!=null&&n.logo_url?e.club.logo_url:e!=null&&e.country_code?`https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null}function re(e){return e?`<div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-start">${e}</div>`:'<div style="padding:30px;text-align:center;color:#999;font-size:13px">Aucune carte dans cette catégorie.</div>'}async function kn(e,n,t){const i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="3000",i.innerHTML=`<div class="modal admin-light-card" style="max-width:1100px;width:96%">
    <div class="modal-header"><h2>🃏 Collection de ${n}</h2><button class="btn-icon" id="mc-close">✕</button></div>
    <div class="modal-body" id="mc-body" style="padding:16px">
      <div style="text-align:center;color:#999;padding:30px">⏳ Chargement de la collection…</div>
    </div>
  </div>`,document.body.appendChild(i);const u=()=>i.remove();i.querySelector("#mc-close").addEventListener("click",u),i.addEventListener("click",b=>{b.target===i&&u()});const{data:r,error:y}=await k.rpc("admin_get_manager_collection",{p_user_id:e}),h=i.querySelector("#mc-body");if(!h)return;if(y||!(r!=null&&r.success)){h.innerHTML=`<div style="padding:20px;color:#bb2020">Erreur : ${(y==null?void 0:y.message)||(r==null?void 0:r.error)||"chargement impossible"}</div>`;return}const _=r.cards||[],a=r.decks||[],c={player:_.filter(b=>b.card_type==="player"&&b.player),formation:_.filter(b=>b.card_type==="formation"),stadium:_.filter(b=>b.card_type==="stadium"),game_changer:_.filter(b=>b.card_type==="game_changer")},d={player:c.player.length,formation:c.formation.length,stadium:c.stadium.length,game_changer:c.game_changer.length,decks:a.length},l={};l.player=re(c.player.map(b=>{const w={...b.player,_evolution_bonus:b.evolution_bonus||0};return`<div style="position:relative">${b.is_for_sale?'<div style="position:absolute;top:4px;right:4px;background:#D4A017;color:#111;font-size:9px;font-weight:800;padding:2px 6px;border-radius:8px;z-index:3">EN VENTE</div>':""}${oe(w,{width:110})}</div>`}).join("")),l.formation=re(c.formation.map(b=>`<div style="position:relative">${Ot(b.formation,se[b.formation],{width:120})}</div>`).join("")),l.stadium=re(c.stadium.map(b=>{var I;const w=b.stadium_def,g=((I=w==null?void 0:w.club)==null?void 0:I.encoded_name)||(w==null?void 0:w.country_code)||"—";return`<div style="position:relative">${Be((w==null?void 0:w.name)||"?",In(w),`${g}<br>+10 ⭐ joueurs alliés`,{width:120})}</div>`}).join("")),l.game_changer=re(c.game_changer.map(b=>{const w=b.gc_def;return`<div style="position:relative">${ue((w==null?void 0:w.name)||b.gc_type||"Game Changer",$n(w),"⚡",(w==null?void 0:w.effect)||"",{width:120})}</div>`}).join("")),l.decks=a.length?a.map(b=>{const w=b.cards||[],g=w.filter(E=>E.is_starter),I=w.filter(E=>!E.is_starter),$=wn(w),v=["GK","DEF","MIL","ATT"].reduce((E,B)=>E+$[B].filter(Boolean).length,0),L=b.formation&&se[b.formation]&&v?`<div style="max-width:460px;margin:0 auto;pointer-events:none">
               ${qt($,b.formation,null,[],320,350)}
             </div>`:`<div style="font-size:12px;color:#999;padding:16px;text-align:center">
               ${b.formation?se[b.formation]?"Aucun titulaire enregistré.":`Formation inconnue : ${b.formation}`:"Aucune formation définie pour ce deck."}
             </div>`,f=E=>{const B={firstname:E.firstname,surname_real:E.surname_real,country_code:E.country_code,job:E.job,job2:E.job2,note_g:E.note_g,note_d:E.note_d,note_m:E.note_m,note_a:E.note_a,rarity:E.rarity,face:E.face,clubs:E.club_encoded_name?{encoded_name:E.club_encoded_name,logo_url:E.club_logo_url}:null,_evolution_bonus:E.evolution_bonus||0};return`<div style="position:relative">${oe(B,{width:74})}</div>`};return`<div style="margin-bottom:22px;padding:14px;border:1px solid var(--gray-200,#e0e0e0);border-radius:12px;background:#fafafa">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;flex-wrap:wrap">
            <div style="font-weight:800;font-size:14px;color:#1a1a1a">${b.name||"Deck sans nom"}</div>
            <div style="font-size:11px;color:#666">${b.formation||"—"} · ${g.length} titulaire(s)${I.length?` · ${I.length} remplaçant(s)`:""}</div>
          </div>
          ${L}
          ${I.length?`<div style="margin-top:10px"><div style="font-size:11px;color:#888;font-weight:700;margin-bottom:5px">REMPLAÇANTS</div>
               <div style="display:flex;flex-wrap:wrap;gap:8px">${I.map(f).join("")}</div></div>`:""}
        </div>`}).join(""):`<div style="padding:30px;text-align:center;color:#999;font-size:13px">Ce manager n'a créé aucune équipe.</div>`;const m=r.boosters||[],p=r.legacy_booster_cards||0,o={legende:"Légende",pepite:"Pépite",papyte:"Papyte",normal:"Normal"},x={legende:"#7a28b8",pepite:"#D4A017",papyte:"#909090",normal:"#888"},s=m.reduce((b,w)=>b+(w.nb_cards||0),0);l.boosters=`
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px">
      <div style="flex:1;min-width:150px;background:#f4f8f5;border:1px solid #d6e8dc;border-radius:12px;padding:12px 14px">
        <div style="font-size:11px;color:#666">Boosters ouverts</div>
        <div style="font-size:22px;font-weight:900;color:#1A6B3C">${m.length}</div>
      </div>
      <div style="flex:1;min-width:150px;background:#fdf8ec;border:1px solid #efe0bb;border-radius:12px;padding:12px 14px">
        <div style="font-size:11px;color:#666">Cartes obtenues</div>
        <div style="font-size:22px;font-weight:900;color:#D4A017">${s}</div>
      </div>
      <div style="flex:1;min-width:150px;background:#f7f7f7;border:1px solid #e0e0e0;border-radius:12px;padding:12px 14px">
        <div style="font-size:11px;color:#666">Cartes booster (historique)</div>
        <div style="font-size:22px;font-weight:900;color:#555">${p}</div>
      </div>
    </div>
    ${m.length?`
      <div style="display:flex;flex-direction:column;gap:8px">
        ${m.map(b=>{const w=b.opened_at?new Date(b.opened_at).toLocaleString("fr"):"—",g=(b.cards||[]).map(I=>{const $=x[I.rarity]||"#888",v=I.rarity?` · <span style="color:${$};font-weight:700">${o[I.rarity]||I.rarity}</span>`:"",L=I.is_duplicate?' <span style="color:#aaa">(doublon)</span>':"";return`<div style="font-size:12px;color:#333;padding:3px 0;border-bottom:1px dashed #eee">
              ${I.name||I.card_type||"?"}${v}${I.note!=null?` · note ${I.note}`:""}${L}
            </div>`}).join("");return`<details style="border:1px solid var(--gray-200,#e0e0e0);border-radius:10px;padding:10px 12px;background:#fafafa">
            <summary style="cursor:pointer;font-size:13px;font-weight:700;color:#1a1a1a">
              ${b.booster_name||"Booster"} <span style="font-weight:400;color:#777">· ${b.nb_cards||0} carte(s) · ${w}</span>
            </summary>
            <div style="margin-top:8px">${g||'<div style="font-size:12px;color:#999">Contenu non détaillé.</div>'}</div>
          </details>`}).join("")}
      </div>`:`
      <div style="padding:20px;text-align:center;color:#999;font-size:13px;line-height:1.6">
        Aucune ouverture enregistrée pour ce manager.<br>
        <span style="font-size:11.5px">Le journal des ouvertures a été mis en place récemment : seules les ouvertures postérieures y figurent.${p?` Le compteur « historique » (${p}) recense les cartes joueur encore possédées et obtenues en booster avant cela.`:""}</span>
      </div>`}
  `,h.innerHTML=`
    <div style="display:flex;gap:6px;flex-wrap:wrap;border-bottom:1px solid var(--gray-200,#e0e0e0);padding-bottom:10px;margin-bottom:14px">
      ${Ge.map((b,w)=>`
        <button class="mc-tab" data-tab="${b.key}" style="
          border:1px solid ${w===0?"#1A6B3C":"var(--gray-200,#ddd)"};
          background:${w===0?"#1A6B3C":"#fff"};
          color:${w===0?"#fff":"#444"};
          padding:7px 13px;border-radius:999px;font-size:12.5px;font-weight:700;cursor:pointer">
          ${b.label} (${d[b.key]})
        </button>`).join("")}
    </div>
    ${Ge.map((b,w)=>`
      <div class="mc-pane" data-pane="${b.key}" style="display:${w===0?"block":"none"}">${l[b.key]}</div>
    `).join("")}
  `,h.querySelectorAll(".mc-tab").forEach(b=>{b.addEventListener("click",()=>{h.querySelectorAll(".mc-tab").forEach(w=>{const g=w===b;w.style.background=g?"#1A6B3C":"#fff",w.style.color=g?"#fff":"#444",w.style.borderColor=g?"#1A6B3C":"var(--gray-200,#ddd)"}),h.querySelectorAll(".mc-pane").forEach(w=>{w.style.display=w.dataset.pane===b.dataset.tab?"block":"none"})})})}const Ln=[{value:"normal",label:"Normal",color:"#ccc"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function xt(e,n){var _;const{toast:t}=n,{data:i,error:u}=await k.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_real, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(u){e.innerHTML=`<p style="color:var(--danger)">${u.message}</p>`;return}const r=i||[],y=r.filter(a=>a.status==="active").length,h=r.filter(a=>a.status==="sold").length;e.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px">
      <button id="btn-price-grid" class="btn btn-primary">📊 Grille des prix</button>
      <div style="display:flex;gap:12px">
        <div class="card-panel" style="min-width:120px;text-align:center;padding:12px 20px">
          <div style="font-size:22px;font-weight:700;color:#1A6B3C">${y}</div>
          <div style="font-size:11px;color:var(--tile-fg-dim)">Annonces actives</div>
        </div>
        <div class="card-panel" style="min-width:120px;text-align:center;padding:12px 20px">
          <div style="font-size:22px;font-weight:700;color:#D4A017">${h}</div>
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
            ${r.map(a=>{var m,p,o,x;const c=(m=a.card)==null?void 0:m.player,d=c?`${c.firstname} ${c.surname_real}`:((p=a.card)==null?void 0:p.card_type)||"—",l={active:"#1A6B3C",sold:"#D4A017",cancelled:"#888"};return`<tr>
                <td><b>${d}</b>${c?`<div style="font-size:10px;color:var(--tile-fg-dim)">${c.rarity} · ${c.job}</div>`:""}</td>
                <td style="font-size:12px">${((o=a.seller)==null?void 0:o.pseudo)||"—"}</td>
                <td style="font-size:12px">${((x=a.buyer)==null?void 0:x.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(a.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${l[a.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
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
  `,document.querySelectorAll("[data-cancel]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:c}=await k.from("market_listings").update({status:"cancelled"}).eq("id",a.dataset.cancel);c?t(c.message,"error"):(t("Annonce annulée","success"),xt(e,n))})}),(_=document.getElementById("btn-price-grid"))==null||_.addEventListener("click",()=>Bn(n))}async function Bn(e){await $e(e)}function An(){const e=document.getElementById("modal-overlay");if(!e||e._pgBlocker)return;const n=t=>{t.target===t.currentTarget&&t.stopImmediatePropagation()};e.addEventListener("click",n,!0),e._pgBlocker=n}function he(){const e=document.getElementById("modal-overlay");e!=null&&e._pgBlocker&&(e.removeEventListener("click",e._pgBlocker,!0),delete e._pgBlocker)}async function $e(e){var m,p;const{openModal:n,closeModal:t,toast:i}=e,{data:u,error:r}=await k.from("sell_price_configs").select("*").order("rarity").order("note_min");if(r){i(r.message,"error");return}const y=o=>Ln.map(x=>`<option value="${x.value}" ${x.value===o?"selected":""}>${x.label}</option>`).join(""),h=o=>`
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
          ${(u||[]).map(h).join("")||'<tr><td colspan="6" style="text-align:center;color:#aaa;padding:20px">Aucune règle définie.</td></tr>'}
        </tbody>
      </table>
    </div>
  `;n("📊 Grille des prix — vente marché",_,`
    <button id="pg-add-row" class="btn btn-primary">+ Ajouter une ligne</button>
    <button id="pg-close" class="btn btn-ghost">Fermer</button>
  `),An(),(m=document.getElementById("pg-close"))==null||m.addEventListener("click",()=>{he(),t()});function c(o){const x=o.dataset.id,s=o.dataset.field,b=s==="rarity"?o.value:Number(o.value)||0;return d(x,{[s]:b},o)}async function d(o,x,s){const b=document.querySelector(`tr[data-row="${o}"]`),w=f=>b.querySelector(`[data-field="${f}"]`),g="note_min"in x?x.note_min:Number(w("note_min").value),I="note_max"in x?x.note_max:Number(w("note_max").value),$="price_min"in x?x.price_min:Number(w("price_min").value),v="price_max"in x?x.price_max:Number(w("price_max").value);if(g>I){i("Note min doit être ≤ note max","error");return}if($>v){i("Prix min doit être ≤ prix max","error");return}const{error:L}=await k.from("sell_price_configs").update(x).eq("id",o);if(L){i(L.message,"error");return}s&&(s.style.transition="background .3s",s.style.background="#e8f8ee",setTimeout(()=>{s.style.background=""},500))}function l(){document.querySelectorAll("#pg-tbody [data-field]").forEach(o=>{o.addEventListener("change",()=>c(o))})}l(),document.querySelectorAll("[data-del-row]").forEach(o=>{o.addEventListener("click",async()=>{confirm("Supprimer cette ligne ?")&&(await k.from("sell_price_configs").delete().eq("id",o.dataset.delRow),i("Ligne supprimée","success"),he(),$e(e))})}),(p=document.getElementById("pg-add-row"))==null||p.addEventListener("click",async()=>{var w;const o={rarity:"normal",note_min:0,note_max:20,price_min:2500,price_max:15e3},{data:x,error:s}=await k.from("sell_price_configs").insert(o).select().single();if(s){i(s.message,"error");return}const b=document.getElementById("pg-tbody");b.querySelector("td[colspan]")&&(b.innerHTML=""),b.insertAdjacentHTML("beforeend",h(x)),l(),(w=document.querySelector(`[data-del-row="${x.id}"]`))==null||w.addEventListener("click",async function(){confirm("Supprimer cette ligne ?")&&(await k.from("sell_price_configs").delete().eq("id",x.id),i("Ligne supprimée","success"),he(),$e(e))}),i("Ligne ajoutée — modifie les valeurs directement","success")})}async function Sn(e,{toast:n}){e.innerHTML=`
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
  `,document.getElementById("export-clubs-template").addEventListener("click",()=>{le("clubs_template.csv",`real_name,encoded_name,country_code,logo_url
Paris Saint-Germain,PARIS FC,FR,
Real Madrid,MADRID FC,ES,
`)}),document.getElementById("export-players-template").addEventListener("click",()=>{le("players_template.csv",`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
Kylian,Mbappe,,FR,PARIS FC,ATT,,0,0,2,9,legende,,,blanc,noir,court,50000
Achraf,Hakimi,,MA,PARIS FC,DEF,MIL,0,7,5,3,pepite,5,9,metisse,noir,court,20000
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:t,error:i}=await k.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(i){n(i.message,"error");return}if(!t||t.length===0){n("Aucun club à exporter","info");return}let u=`real_name,encoded_name,country_code,logo_url
`;t.forEach(r=>{u+=[r.real_name,r.encoded_name,r.country_code,r.logo_url||""].map(Ke).join(",")+`
`}),le("clubs_export.csv",u),n(`${t.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:t,error:i}=await k.from("players").select("firstname,surname_real,surname_real,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_real");if(i){n(i.message,"error");return}if(!t||t.length===0){n("Aucun joueur à exporter","info");return}let u=`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;t.forEach(r=>{var y;u+=[r.firstname,r.surname_real,r.surname_real,r.country_code,((y=r.clubs)==null?void 0:y.encoded_name)||"",r.job,r.job2||"",r.note_g,r.note_d,r.note_m,r.note_a,r.rarity,r.note_min??"",r.note_max??"",r.skin,r.hair,r.hair_length,r.sell_price].map(Ke).join(",")+`
`}),le("players_export.csv",u),n(`${t.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async t=>{const i=t.target.files[0];if(!i)return;const u=document.getElementById("clubs-import-result");u.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const r=await i.text(),y=Ve(r);if(y.length===0){u.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let h=0,_=0;const a=[];for(const c of y){if(!c.real_name||!c.encoded_name||!c.country_code){_++,a.push(`Ligne ignorée (champs manquants): ${c.real_name||"?"}`);continue}const d={real_name:c.real_name,encoded_name:c.encoded_name.toUpperCase(),country_code:c.country_code.toUpperCase().slice(0,2),logo_url:c.logo_url||null},{error:l}=await k.from("clubs").upsert(d,{onConflict:"encoded_name"});l?(_++,a.push(`${c.encoded_name}: ${l.message}`)):h++}u.innerHTML=`<div style="color:var(--green)">✅ ${h} clubs importés</div>
        ${_>0?`<div style="color:#c0392b">❌ ${_} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${a.slice(0,10).join("<br>")}</div>`:""}`,n(`${h} clubs importés`,"success")}catch(r){u.innerHTML=`<span style="color:#c0392b">Erreur : ${r.message}</span>`}t.target.value=""}),document.getElementById("import-players").addEventListener("change",async t=>{const i=t.target.files[0];if(!i)return;const u=document.getElementById("players-import-result");u.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const r=await i.text(),y=Ve(r);if(y.length===0){u.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:h}=await k.from("clubs").select("id,encoded_name"),_={};(h||[]).forEach(s=>{_[s.encoded_name.toUpperCase()]=s.id});let a=0,c=0;const d=[],l=["GK","DEF","MIL","ATT"],m=["normal","pepite","papyte","legende"],p=["blanc","metisse","typ","noir"],o=["blond","marron","noir","chauve"],x=["rase","court","milong","long"];for(const s of y){if(!s.firstname||!s.surname_real||!s.country_code||!s.job){c++,d.push(`Ligne ignorée (champs requis manquants): ${s.firstname||"?"}`);continue}if(!l.includes(s.job)){c++,d.push(`${s.firstname}: job invalide "${s.job}"`);continue}const b=s.club_encoded_name&&_[s.club_encoded_name.toUpperCase()]||null,w={firstname:s.firstname,surname_real:s.surname_real,surname_real:s.surname_real||be(s.surname_real),country_code:s.country_code.toUpperCase().slice(0,2),club_id:b,job:s.job,job2:l.includes(s.job2)?s.job2:null,note_g:parseInt(s.note_g)||0,note_d:parseInt(s.note_d)||0,note_m:parseInt(s.note_m)||0,note_a:parseInt(s.note_a)||0,rarity:m.includes(s.rarity)?s.rarity:"normal",note_min:s.note_min!==""&&s.note_min!=null?parseInt(s.note_min):null,note_max:s.note_max!==""&&s.note_max!=null?parseInt(s.note_max):null,skin:p.includes(s.skin)?s.skin:"blanc",hair:o.includes(s.hair)?s.hair:"noir",hair_length:x.includes(s.hair_length)?s.hair_length:"court",sell_price:parseInt(s.sell_price)||0},{error:g}=await k.from("players").insert(w);g?(c++,d.push(`${s.firstname} ${s.surname_real}: ${g.message}`)):a++}u.innerHTML=`<div style="color:var(--green)">✅ ${a} joueurs importés</div>
        ${c>0?`<div style="color:#c0392b">❌ ${c} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${d.slice(0,10).join("<br>")}</div>`:""}`,n(`${a} joueurs importés`,"success")}catch(r){u.innerHTML=`<span style="color:#c0392b">Erreur : ${r.message}</span>`}t.target.value=""})}function Ke(e){const n=String(e??"");return n.includes(",")||n.includes('"')||n.includes(`
`)?'"'+n.replace(/"/g,'""')+'"':n}function le(e,n){const t=new Blob(["\uFEFF"+n],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(t),u=document.createElement("a");u.href=i,u.download=e,u.click(),URL.revokeObjectURL(i)}function Ve(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const n=e.split(`
`).filter(y=>y.trim());if(n.length<2)return[];const t=n[0],i=t.split(";").length>t.split(",").length?";":",",u=Je(t,i).map(y=>y.trim().replace(/^\uFEFF/,"").toLowerCase()),r=[];for(let y=1;y<n.length;y++){if(!n[y].trim())continue;const h=Je(n[y],i),_={};u.forEach((a,c)=>{_[a]=(h[c]||"").trim()}),!Object.values(_).every(a=>!a)&&r.push(_)}return r}function Je(e,n=","){const t=[];let i="",u=!1;for(let r=0;r<e.length;r++){const y=e[r];u?y==='"'?e[r+1]==='"'?(i+='"',r++):u=!1:i+=y:y==='"'?u=!0:y===n?(t.push(i),i=""):i+=y}return t.push(i),t}const Cn={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Tn(e,{toast:n}){const t=Object.keys(xe);let i=t[0];const{data:u}=await k.from("formation_links_overrides").select("formation, links"),r={};(u||[]).forEach(c=>{r[c.formation]=c.links});let y=new Set;function h(c,d){return[c,d].sort().join("-")}function _(c){const d=r[c]||xe[c]||[];y=new Set(d.map(([l,m])=>h(l,m)))}_(i),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${t.map(c=>`<option value="${c}" ${c===i?"selected":""}>${c}</option>`).join("")}
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
  `;function a(){const c=se[i]||{},d=Fe(i),l=320,m=400,p=22;function o(g){const I=c[g];return I?{x:I.x*l,y:I.y*m}:null}let x=`<svg width="${l}" height="${m}" viewBox="0 0 ${l} ${m}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;d.forEach(([g,I],$)=>{const v=o(g),L=o(I);if(!v||!L)return;const f=h(g,I),E=y.has(f),B=E?"#3b82f6":"#999",S=E?.95:.35,C=E?4:3;x+=`<line x1="${v.x}" y1="${v.y}" x2="${L.x}" y2="${L.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${f}" style="cursor:pointer"/>`,x+=`<line x1="${v.x}" y1="${v.y}" x2="${L.x}" y2="${L.y}"
        stroke="${B}" stroke-width="${C}" stroke-dasharray="${E?"none":"4,3"}"
        opacity="${S}" pointer-events="none" data-line-key="${f}"/>`});for(const g of Object.keys(c)){const I=o(g);if(!I)continue;const $=g.replace(/\d+/,""),v=Cn[$]||"#555";x+=`<circle cx="${I.x}" cy="${I.y}" r="${p}" fill="${v}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,x+=`<text x="${I.x}" y="${I.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${g}</text>`}x+="</svg>",document.getElementById("field-wrap").innerHTML=x;const s=document.getElementById("links-list");s.innerHTML=d.map(([g,I])=>{const $=h(g,I),v=y.has($);return`
        <button class="link-toggle" data-key="${$}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${v?"#3b82f6":"#ddd"};
          background:${v?"#eaf2ff":"#fafafa"};
          color:${v?"#1d4ed8":"#888"}">
          <span>${g} ↔ ${I}</span>
          <span>${v?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const b=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');b&&(b.textContent=`Liens (${y.size}/${d.length} actifs)`);function w(g){y.has(g)?y.delete(g):y.add(g),a()}e.querySelectorAll(".link-hit").forEach(g=>{g.addEventListener("click",()=>w(g.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(g=>{g.addEventListener("click",()=>w(g.dataset.key))})}a(),document.getElementById("formation-select").addEventListener("change",c=>{i=c.target.value,_(i),a()}),document.getElementById("reset-btn").addEventListener("click",()=>{const c=xe[i]||[];y=new Set(c.map(([d,l])=>h(d,l))),a(),n("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const d=Fe(i).filter(([m,p])=>y.has(h(m,p))),{error:l}=await k.from("formation_links_overrides").upsert({formation:i,links:d,updated_at:new Date().toISOString()});if(l){n(l.message,"error");return}r[i]=d,n(`Liens enregistrés pour ${i} (${d.length} actifs)`,"success")})}const Mn=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],zn=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],Rn=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function jn(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:n}=await k.from("booster_configs").select("*").order("sort_order");let t=null,i=[],u=null;const r=()=>window.innerWidth<700;async function y(){if(!t){i=[];return}if(t!==u){const{data:d}=await k.from("booster_drop_rates").select("*").eq("booster_id",t).order("sort_order");i=d||[],u=t}}function h(){return`
    <div id="booster-list" style="background:#fff;${r()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(n||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(n||[]).map(d=>`
      <div class="booster-row" data-id="${d.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${d.id===t?"#f0f7f0":"#fff"}">
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
      ${(n||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>'}
    </div>`}function _(){const d=t?(n||[]).find(p=>p.id===t):null;if(!d)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const l=i.reduce((p,o)=>p+Number(o.percentage||0),0),m=Math.abs(l-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${r()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

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
              ${Rn.map(p=>`<option value="${p.value}" ${d.price_type===p.value?"selected":""}>${p.label}</option>`).join("")}
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
            <span style="margin-left:10px;font-size:12px;color:${m?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${l.toFixed(1)}% ${m?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((p,o)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${o}">
            <select class="rate-type" data-idx="${o}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Mn.map(x=>`<option value="${x.value}" ${p.card_type===x.value?"selected":""}>${x.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${o}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${zn.map(x=>`<option value="${x.value}" ${(p.rarity||"")===x.value?"selected":""}>${x.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${o}" type="number" min="0" max="20" value="${p.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${o}" type="number" min="0" max="20" value="${p.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${o}" type="number" min="0.1" max="100" step="0.1" value="${p.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${o}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function a(d=!1){d||await y();const l=!t&&r(),m=t&&r();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!r()||l||!t?h():""}
      ${!r()||m?_():""}
    </div>`,c()}function c(){var m,p,o,x,s,b,w;const d=g=>e.querySelector(g);e.querySelectorAll(".booster-row").forEach(g=>{g.addEventListener("click",I=>{I.target.closest(".btn-delete")||(t=g.dataset.id,u=null,a())})}),(m=d("#btn-back"))==null||m.addEventListener("click",()=>{t=null,a()}),(p=d("#btn-new"))==null||p.addEventListener("click",async()=>{const g=prompt("Nom du nouveau booster :");if(!(g!=null&&g.trim()))return;const{data:I,error:$}=await k.from("booster_configs").insert({name:g.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if($){alert($.message);return}n.push(I),t=I.id,u=null,a()}),e.querySelectorAll(".btn-delete").forEach(g=>{g.addEventListener("click",async I=>{if(I.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await k.from("booster_configs").delete().eq("id",g.dataset.id);const $=n.findIndex(v=>v.id===g.dataset.id);$>-1&&n.splice($,1),t===g.dataset.id&&(t=null,u=null),a()})}),(o=d("#btn-cancel"))==null||o.addEventListener("click",()=>{t=null,a()}),(x=d("#f-price-type"))==null||x.addEventListener("change",g=>{const I=d("#credits-field");I&&(I.style.opacity=g.target.value!=="credits"?"0.4":"1")}),(s=d("#btn-pick-icon"))==null||s.addEventListener("click",async()=>{var I;const g=d("#icon-picker-grid");if(g){if(g.style.display!=="none"){g.style.display="none";return}g.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',g.style.display="block";try{const v=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),L=Array.isArray(v)?v.filter(E=>E.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(E.name)):[];if(!L.length){g.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const f=((I=d("#f-image-url"))==null?void 0:I.value)||"";g.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${L.map(E=>`
          <div class="icon-pick-item" data-name="${E.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${E.name===f?"#1A6B3C":"#ddd"};background:${E.name===f?"#f0f7f0":"#fff"}">
            <img src="/icons/${E.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${E.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,g.querySelectorAll(".icon-pick-item").forEach(E=>{E.addEventListener("click",()=>{const B=d("#f-image-url");B&&(B.value=E.dataset.name),g.style.display="none"})})}catch($){g.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${$.message}</div>`}}});function l(){e.querySelectorAll("[data-rate-idx]").forEach(g=>{var $,v,L,f,E;const I=Number(g.dataset.rateIdx);I>=0&&I<i.length&&(i[I].card_type=(($=g.querySelector(".rate-type"))==null?void 0:$.value)||"player",i[I].rarity=((v=g.querySelector(".rate-rarity"))==null?void 0:v.value)||null,i[I].note_min=Number((L=g.querySelector(".rate-note-min"))==null?void 0:L.value)||null,i[I].note_max=Number((f=g.querySelector(".rate-note-max"))==null?void 0:f.value)||null,i[I].percentage=Number((E=g.querySelector(".rate-pct"))==null?void 0:E.value)||0)})}(b=d("#btn-add-rate"))==null||b.addEventListener("click",()=>{l(),i.push({id:null,booster_id:t,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),a(!0)}),e.querySelectorAll(".btn-del-rate").forEach(g=>{g.addEventListener("click",()=>{l(),i.splice(Number(g.dataset.idx),1),a(!0)})}),(w=d("#btn-save"))==null||w.addEventListener("click",async()=>{var f,E,B,S,C,j,D,q,U,H,A,z,T;const g=(n||[]).find(M=>M.id===t);if(!g)return;const I=[];e.querySelectorAll("[data-rate-idx]").forEach(M=>{var G,V,J,Y,W;const R=Number(M.dataset.rateIdx);I.push({booster_id:t,card_type:((G=M.querySelector(".rate-type"))==null?void 0:G.value)||"player",rarity:((V=M.querySelector(".rate-rarity"))==null?void 0:V.value)||null,note_min:Number((J=M.querySelector(".rate-note-min"))==null?void 0:J.value)||null,note_max:Number((Y=M.querySelector(".rate-note-max"))==null?void 0:Y.value)||null,percentage:Number((W=M.querySelector(".rate-pct"))==null?void 0:W.value)||0,sort_order:R});const N=I[I.length-1];N.rarity||(N.rarity=null),N.note_min||(N.note_min=null),N.note_max||(N.note_max=null)});const $=I.reduce((M,R)=>M+R.percentage,0);if(I.length&&Math.abs($-100)>.5){alert(`La somme doit faire 100% (actuellement ${$.toFixed(1)}%)`);return}const v={name:((E=(f=d("#f-name"))==null?void 0:f.value)==null?void 0:E.trim())||g.name,image_url:((S=(B=d("#f-image-url"))==null?void 0:B.value)==null?void 0:S.trim())||null,price_type:(C=d("#f-price-type"))==null?void 0:C.value,price_credits:Number((j=d("#f-price-credits"))==null?void 0:j.value)||0,card_count:Number((D=d("#f-card-count"))==null?void 0:D.value)||5,is_active:((q=d("#f-active"))==null?void 0:q.checked)??g.is_active,allow_duplicates:((U=d("#f-allow-dup"))==null?void 0:U.checked)??!0,sort_order:Number((H=d("#f-sort"))==null?void 0:H.value)||0,max_per_user:(A=d("#f-max-per-user"))!=null&&A.value?Number(d("#f-max-per-user").value):null,available_from:((z=d("#f-available-from"))==null?void 0:z.value)||null,available_until:((T=d("#f-available-until"))==null?void 0:T.value)||null},{error:L}=await k.from("booster_configs").update(v).eq("id",t);if(L){alert(L.message);return}if(Object.assign(g,v),await k.from("booster_drop_rates").delete().eq("booster_id",t),I.length){const{error:M}=await k.from("booster_drop_rates").insert(I);if(M){alert(M.message);return}}i=I,u=t,alert("✅ Booster enregistré !"),a(!0)})}a()}const ht=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function Dn(e){await Te(e)}async function Te(e){const{data:n,error:t}=await k.from("sell_price_configs").select("*").order("rarity").order("note_min");if(t){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${t.message}</div>`;return}e.innerHTML=`
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
          ${(n||[]).map(i=>Nn(i)).join("")}
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
              ${ht.map(i=>`<option value="${i.value}">${i.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>Ye(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Pn(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const u=(n||[]).find(r=>r.id===i.dataset.edit);u&&i.addEventListener("click",()=>Ye(u))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await k.from("sell_price_configs").delete().eq("id",i.dataset.delete),await Te(e))})})}function Nn(e){const n=ht.find(t=>t.value===e.rarity);return`
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
    </tr>`}function Ye(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function Pn(e){const n=document.getElementById("form-id").value,t=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,u=parseInt(document.getElementById("form-note-min").value)||1,r=parseInt(document.getElementById("form-note-max").value)||10;if(u>r){alert("Note min doit être ≤ note max");return}const y={rarity:t,price:i,note_min:u,note_max:r,updated_at:new Date().toISOString()};let h;if(n?{error:h}=await k.from("sell_price_configs").update(y).eq("id",n):{error:h}=await k.from("sell_price_configs").insert(y),h){alert("Erreur : "+h.message);return}document.getElementById("config-form").style.display="none",await Te(e)}async function Fn(e){await Me(e)}async function Me(e){const{data:n}=await k.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Actualités</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(n||[]).map(t=>On(t)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>We(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Un(e)),e.querySelectorAll("[data-edit-row]").forEach(t=>{const i=(n||[]).find(u=>u.id===t.dataset.editRow);i&&t.addEventListener("click",()=>We(i))}),e.querySelectorAll("[data-delete]").forEach(t=>{t.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await k.from("patch_notes").delete().eq("id",t.dataset.delete),await Me(e))})})}function On(e){const n=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
    <div data-edit-row="${e.id}" class="admin-light-card" style="background:#fff;border-radius:10px;padding:14px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;gap:12px;align-items:flex-start;cursor:pointer">
      ${e.image_url?`<img src="${e.image_url}" style="width:60px;height:60px;object-fit:cover;border-radius:8px;flex-shrink:0">`:""}
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:2px">
          <span style="font-size:14px;font-weight:900;color:#1a1a1a">${e.title}</span>
          ${e.is_published?"":'<span style="font-size:10px;background:#f0f0f0;color:#888;padding:1px 6px;border-radius:6px;font-weight:700">BROUILLON</span>'}
        </div>
        <div style="font-size:11px;color:#999;margin-bottom:4px">${n}</div>
        <div style="font-size:12px;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e.description}</div>
      </div>
      <div style="display:flex;gap:6px;flex-shrink:0">
        <button data-delete="${e.id}" class="btn btn-ghost btn-sm" style="color:#cc2222" onclick="event.stopPropagation()">🗑️</button>
      </div>
    </div>`}function We(e){const n=document.getElementById("article-form");n.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img-current").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-img-file").value="";const t=document.getElementById("form-art-img-preview");t.innerHTML=e!=null&&e.image_url?`<img src="${e.image_url}" style="width:100%;height:100%;object-fit:cover">`:'<span style="font-size:20px;opacity:.4">📰</span>',document.getElementById("form-art-img-file").onchange=r=>{var _;const y=(_=r.target.files)==null?void 0:_[0];if(!y)return;const h=new FileReader;h.onload=()=>{t.innerHTML=`<img src="${h.result}" style="width:100%;height:100%;object-fit:cover">`},h.readAsDataURL(y)},document.getElementById("form-art-pub").checked=e?e.is_published:!0;const i=new Date((e==null?void 0:e.published_at)||Date.now()),u=new Date(i.getTime()-i.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=u,n.scrollIntoView({behavior:"smooth"})}async function qn(e){const n=(e.name.split(".").pop()||"png").toLowerCase(),t=`journal/${Date.now()}.${n}`,{error:i}=await k.storage.from("assets").upload(t,e,{upsert:!0,cacheControl:"3600"});if(i)throw i;const{data:u}=k.storage.from("assets").getPublicUrl(t);return u.publicUrl}async function Un(e){var m;const n=document.getElementById("form-id").value,t=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),u=((m=document.getElementById("form-art-img-file").files)==null?void 0:m[0])||null,r=document.getElementById("form-art-img-current").value||null,y=document.getElementById("form-art-pub").checked,h=document.getElementById("form-art-date").value,_=document.getElementById("form-save");if(!t){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}let a=r;if(u)try{_&&(_.textContent="📤 Envoi de l'image…"),a=await qn(u)}catch(p){alert("Erreur upload image : "+p.message),_&&(_.textContent="💾 Enregistrer");return}const c=h?new Date(h).toISOString():new Date().toISOString(),d={title:t,description:i,image_url:a,is_published:y,published_at:c};let l;if(n?{error:l}=await k.from("patch_notes").update(d).eq("id",n):{error:l}=await k.from("patch_notes").insert(d),l){alert("Erreur : "+l.message);return}document.getElementById("article-form").style.display="none",await Me(e)}async function Hn(e){await ie(e)}async function ie(e){var c,d,l,m,p,o,x,s,b,w,g,I;const{data:n}=await k.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([$,v,L])=>`<button type="button" data-cmd="${v}" title="${L}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${$}</button>`).join("")}
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
          ${(n||[]).length===0?`
            <div style="text-align:center;padding:40px;color:#aaa;background:#fff;border-radius:12px">
              Aucune étape. Clique sur "+ Ajouter" pour commencer.
            </div>`:(n||[]).map($=>Gn($)).join("")}
        </div>
      </div><!-- /colonne droite -->
    </div>`,(c=document.getElementById("ts-add"))==null||c.addEventListener("click",()=>Ze(null,(n==null?void 0:n.length)||0)),(d=document.getElementById("ts-reset"))==null||d.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:$}=await k.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert($?"Erreur : "+$.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(l=document.getElementById("ts-cancel"))==null||l.addEventListener("click",Et),(m=document.getElementById("ts-save"))==null||m.addEventListener("click",()=>Vn(e)),(p=document.getElementById("ts-preview-btn"))==null||p.addEventListener("click",Kn);const t=document.getElementById("ts-editor"),i=()=>{const $=document.getElementById("ts-content");$&&t&&($.value=t.innerHTML)};t==null||t.addEventListener("input",i),t==null||t.addEventListener("blur",i);const u=()=>{document.activeElement!==t&&(t==null||t.focus())};(o=document.getElementById("ts-toolbar"))==null||o.querySelectorAll("[data-cmd]").forEach($=>{$.addEventListener("mousedown",v=>{v.preventDefault(),u();const L=$.dataset.cmd;L.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,L.split(":")[1]):document.execCommand(L,!1,null),i()})}),(x=document.getElementById("ts-insert-color"))==null||x.addEventListener("mousedown",$=>{$.preventDefault(),u();const v=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");v&&(document.execCommand("foreColor",!1,v),i())}),(s=document.getElementById("ts-clear-format"))==null||s.addEventListener("mousedown",$=>{$.preventDefault(),u(),document.execCommand("removeFormat",!1,null),i()}),t==null||t.addEventListener("focus",()=>{t&&(t.style.borderColor="#1A6B3C")}),t==null||t.addEventListener("blur",()=>{t&&(t.style.borderColor="#ddd")});const r=document.getElementById("ts-image"),y=document.getElementById("ts-img-preview"),h=document.getElementById("ts-img-preview-el"),_=document.getElementById("ts-img-picker-grid"),a=()=>{var v;const $=(v=r==null?void 0:r.value)==null?void 0:v.trim();if($){const L="/";h.src=`${L}icons/${$}`,y.style.display="block"}else y.style.display="none"};r==null||r.addEventListener("input",a),(b=document.getElementById("ts-img-clear"))==null||b.addEventListener("click",()=>{r&&(r.value=""),y.style.display="none",_.style.display="none"}),(w=document.getElementById("ts-img-pick"))==null||w.addEventListener("click",async()=>{if(_.style.display!=="none"){_.style.display="none";return}_.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',_.style.display="block";try{const v=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),L=Array.isArray(v)?v.filter(E=>E.name.startsWith("tuto_")):[];if(!L.length){_.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const f="/";_.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+L.map(E=>`
          <div data-pick="${E.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${f}icons/${E.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${E.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",_.querySelectorAll("[data-pick]").forEach(E=>{E.addEventListener("click",()=>{r&&(r.value=E.dataset.pick),a(),_.style.display="none"})})}catch($){_.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+$.message+"</div>"}}),(g=document.getElementById("ts-color"))==null||g.addEventListener("input",$=>{const v=document.getElementById("ts-color-hex");v&&(v.value=$.target.value)}),(I=document.getElementById("ts-color-hex"))==null||I.addEventListener("input",$=>{const v=$.target.value;if(/^#[0-9a-fA-F]{6}$/.test(v)){const L=document.getElementById("ts-color");L&&(L.value=v)}}),e.querySelectorAll("[data-edit-row]").forEach($=>{const v=(n||[]).find(L=>L.id===$.dataset.editRow);v&&$.addEventListener("click",()=>Ze(v))}),e.querySelectorAll("[data-delete]").forEach($=>{$.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await k.from("tutorial_steps").delete().eq("id",$.dataset.delete),ie(e))})}),e.querySelectorAll("[data-toggle]").forEach($=>{$.addEventListener("click",async()=>{const v=(n||[]).find(L=>L.id===$.dataset.toggle);v&&(await k.from("tutorial_steps").update({is_active:!v.is_active}).eq("id",v.id),ie(e))})}),e.querySelectorAll("[data-up]").forEach($=>{$.addEventListener("click",async()=>{const v=n||[],L=v.findIndex(f=>f.id===$.dataset.up);L<=0||(await Promise.all([k.from("tutorial_steps").update({step_order:v[L-1].step_order}).eq("id",v[L].id),k.from("tutorial_steps").update({step_order:v[L].step_order}).eq("id",v[L-1].id)]),ie(e))})}),e.querySelectorAll("[data-down]").forEach($=>{$.addEventListener("click",async()=>{const v=n||[],L=v.findIndex(f=>f.id===$.dataset.down);L<0||L>=v.length-1||(await Promise.all([k.from("tutorial_steps").update({step_order:v[L+1].step_order}).eq("id",v[L].id),k.from("tutorial_steps").update({step_order:v[L].step_order}).eq("id",v[L+1].id)]),ie(e))})})}function Gn(e){return`
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
  </div>`}function Ze(e,n=0){document.getElementById("ts-form-empty").style.display="none",document.getElementById("ts-form-content").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const t=document.getElementById("ts-editor");t&&(t.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??n,document.getElementById("ts-active").checked=e?e.is_active:!0;const i=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=i,document.getElementById("ts-color-hex").value=i;const u=(e==null?void 0:e.image_url)||"",r=document.getElementById("ts-image");r&&(r.value=u);const y=document.getElementById("ts-img-preview"),h=document.getElementById("ts-img-preview-el");if(u&&y&&h){const _="/";h.src=`${_}icons/${u}`,y.style.display="block"}else y&&(y.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function Et(){document.getElementById("ts-form-content").style.display="none",document.getElementById("ts-form-empty").style.display="block",document.getElementById("ts-preview-area").innerHTML=""}function Kn(){var a,c;const e=document.getElementById("ts-emoji").value||"⚽",n=document.getElementById("ts-title").value||"Titre",t=document.getElementById("ts-editor"),i=t?t.innerHTML:document.getElementById("ts-content").value||"",u=document.getElementById("ts-color-hex").value||"#1A6B3C",r=(c=(a=document.getElementById("ts-image"))==null?void 0:a.value)==null?void 0:c.trim(),h=r?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${r}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",_=document.getElementById("ts-preview-area");_.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${u}"></div></div>
        <div style="padding:20px 20px 0;text-align:center">
          <div style="font-size:48px;margin-bottom:8px;line-height:1">${e}</div>
          <div style="font-size:17px;font-weight:900;color:#111;margin-bottom:4px">${n}</div>
          <div style="font-size:11px;color:#aaa">6 / 10</div>
        </div>
        ${h}
        <div style="padding:${r?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${i}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${u};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,_.querySelectorAll("ul,ol").forEach(d=>{d.style.paddingLeft="20px",d.style.margin="6px 0"}),_.querySelectorAll("li").forEach(d=>{d.style.marginBottom="4px"}),_.querySelectorAll("p").forEach(d=>{d.style.marginBottom="8px"})}async function Vn(e){var d,l;const n=document.getElementById("ts-id").value,t=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),u=document.getElementById("ts-editor"),r=(u?u.innerHTML:document.getElementById("ts-content").value).trim(),y=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",h=parseInt(document.getElementById("ts-order").value)||0,_=document.getElementById("ts-active").checked;if(!i||!r){alert("Titre et contenu sont obligatoires.");return}const a={emoji:t,title:i,content:r,color:y,step_order:h,is_active:_,image_url:((l=(d=document.getElementById("ts-image"))==null?void 0:d.value)==null?void 0:l.trim())||null};let c;if(n?{error:c}=await k.from("tutorial_steps").update(a).eq("id",n):{error:c}=await k.from("tutorial_steps").insert(a),c){alert("Erreur : "+c.message);return}Et(),ie(e)}const _t="/",wt=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function Jn(e,n){await fe(e,n)}async function fe(e,n){var u,r;const[{data:t},{data:i}]=await Promise.all([k.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),k.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;gap:10px;flex-wrap:wrap">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">🏟️ Stades</h2>
        <div style="display:flex;gap:8px">
          <button id="st-gen-countries-btn" class="btn btn-ghost">🌍 Créer les stades Pays manquants</button>
          <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
        </div>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="st-list">
        ${(t||[]).length?(t||[]).map(y=>Yn(y)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucun stade créé.</div>'}
      </div>
    </div>`,(u=document.getElementById("st-add-btn"))==null||u.addEventListener("click",()=>Qe(null,i,e,n)),(r=document.getElementById("st-gen-countries-btn"))==null||r.addEventListener("click",async()=>{const{toast:y}=n,h=new Set((t||[]).filter(l=>!l.club_id&&l.country_code).map(l=>l.country_code)),_=wt.filter(([l])=>!h.has(l));if(!_.length){y("Tous les pays ont déjà un stade.","info");return}if(!confirm(`Créer ${_.length} stade(s) "Pays" manquant(s) ?`))return;const a=_.map(([l,m])=>({name:`Stade ${m}`,club_id:null,country_code:l})),{data:c,error:d}=await k.from("stadium_definitions").insert(a).select();if(d){y("Erreur : "+d.message,"error");return}c!=null&&c.length&&await k.from("cards").insert(c.map(l=>({card_type:"stadium",stadium_id:l.id}))),y(`${(c==null?void 0:c.length)||0} stade(s) Pays créé(s) ✅`,"success"),fe(e,n)}),e.querySelectorAll("[data-edit-stadium]").forEach(y=>{y.addEventListener("click",()=>{const h=(t||[]).find(_=>_.id===y.dataset.editStadium);h&&Qe(h,i,e,n)})})}function Yn(e){var u,r;let n=null;e.image_url?n=e.image_url.startsWith("http")?e.image_url:`${_t}icons/${e.image_url}`:(u=e.club)!=null&&u.logo_url?n=e.club.logo_url:e.country_code&&(n=`https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/64.png`);const t=((r=e.club)==null?void 0:r.encoded_name)||e.country_code||"—",i=Be(e.name,n,`${t}<br>+10 ⭐`,{width:140});return`<div data-edit-stadium="${e.id}" style="cursor:pointer;transition:transform .15s" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
    ${i}
  </div>`}function Qe(e,n,t,i){var c,d,l;const{openModal:u,closeModal:r,toast:y}=i,h=`
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
            ${(n||[]).map(m=>`<option value="${m.id}" data-logo="${m.logo_url||""}" ${(e==null?void 0:e.club_id)===m.id?"selected":""}>${m.encoded_name}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>PAYS (si pas de club)</label>
          <select id="st-country">
            <option value="">— Aucun pays —</option>
            ${wt.map(([m,p])=>`<option value="${m}" ${(e==null?void 0:e.country_code)===m?"selected":""}>${p} (${m})</option>`).join("")}
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
  `;u(e?`Modifier : ${e.name}`:"Nouveau stade",h,`
    <button id="st-cancel" class="btn btn-ghost">Annuler</button>
    <button id="st-save" class="btn btn-primary">Enregistrer</button>
  `);const a=()=>{var v,L,f,E,B,S,C;const m=((v=document.getElementById("st-name"))==null?void 0:v.value)||"NOM DU STADE",p=(f=(L=document.getElementById("st-image"))==null?void 0:L.value)==null?void 0:f.trim(),o=(B=(E=document.getElementById("st-country"))==null?void 0:E.value)==null?void 0:B.trim(),x=document.getElementById("st-club"),s=(x==null?void 0:x.selectedIndex)||0,b=x&&s>0?x.options[s].text:"",w=((C=(S=x==null?void 0:x.options[s])==null?void 0:S.getAttribute)==null?void 0:C.call(S,"data-logo"))||"";let g=null;p?g=p.startsWith("http")?p:`${_t}icons/${p}`:w?g=w:o&&(g=`https://flagsapi.com/${o.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`);const I=b||o||"—",$=document.getElementById("st-preview-card");$&&($.innerHTML=Be(m,g,`${I}<br>+10 ⭐`,{width:140}))};a(),["st-name","st-club","st-country","st-image"].forEach(m=>{var p,o;(p=document.getElementById(m))==null||p.addEventListener("input",a),(o=document.getElementById(m))==null||o.addEventListener("change",a)}),(c=document.getElementById("st-cancel"))==null||c.addEventListener("click",()=>r()),(d=document.getElementById("st-save"))==null||d.addEventListener("click",async()=>{const m=document.getElementById("st-name").value.trim(),p=document.getElementById("st-club").value||null,o=document.getElementById("st-country").value.trim().toUpperCase()||null,x=document.getElementById("st-image").value.trim()||null;if(!m){y("Le nom est obligatoire","error");return}const s={name:m,club_id:p,country_code:o,image_url:x},{error:b}=e?await k.from("stadium_definitions").update(s).eq("id",e.id):await k.from("stadium_definitions").insert(s);if(b){y("Erreur : "+b.message,"error");return}y(e?"Stade modifié ✅":"Stade créé ✅","success"),r(),fe(t,i)}),(l=document.getElementById("st-delete"))==null||l.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await k.from("stadium_definitions").delete().eq("id",e.id),y("Stade supprimé","success"),r(),fe(t,i))})}const Q=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],Wn=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}],Z=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],Xe=["GK","DEF","MIL","ATT"];async function Zn(e,n){await ze(e,n)}async function ze(e,n){var i;const{data:t}=await k.from("gc_definitions").select("*").order("sort_order").order("created_at");e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">⚡ Game Changers</h2>
        <button id="gc-add-btn" class="btn btn-primary">+ Nouvelle carte</button>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="gc-list">
        ${(t||[]).length?(t||[]).map(u=>Qn(u)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucune carte Game Changer.</div>'}
      </div>
    </div>`,(i=document.getElementById("gc-add-btn"))==null||i.addEventListener("click",()=>et(null,e,n)),e.querySelectorAll("[data-edit-gc]").forEach(u=>{u.addEventListener("click",()=>{const r=(t||[]).find(y=>y.id===u.dataset.editGc);r&&et(r,e,n)})}),e.querySelectorAll(".btn-del-gc").forEach(u=>{u.addEventListener("click",async r=>{r.stopPropagation(),confirm("Supprimer cette carte Game Changer ?")&&(await k.from("gc_definitions").delete().eq("id",u.dataset.del),ze(e,n))})})}function Qn(e){const n=Q.find(u=>u.value===e.gc_type)||Q[0],t=e.image_url?`/icons/${e.image_url}`:null,i=ue(e.name||"?",t,n.label.split(" ")[0],e.effect||"",{width:130});return`<div data-edit-gc="${e.id}" style="position:relative;cursor:pointer">
    ${i}
    <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
      <button class="btn-del-gc" data-del="${e.id}"
        style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0">✕</button>
    </div>
    ${e.is_active?"":'<div style="position:absolute;top:4px;right:4px;z-index:10;background:#555;color:#fff;font-size:9px;font-weight:700;padding:2px 6px;border-radius:8px">INACTIF</div>'}
  </div>`}function et(e,n,t){var l,m,p,o,x;const{openModal:i,closeModal:u,toast:r}=t,y=!e,h=e||{name:"",gc_type:"game_changer",color:"purple",effect:"",image_url:"",sort_order:0,is_active:!0,effect_type:"BOOST_STAT",effect_params:{}},_=(()=>{const s=h.effect_params||{},b=Z.find(w=>w.value===(h.effect_type||"BOOST_STAT"))||Z[0];return`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${b.hasValue?`<div>
        <label>VALEUR (+N)</label>
        <input id="gc-p-value" type="number" min="1" max="5" value="${s.value||2}">
      </div>`:""}
      ${b.hasCount?`<div>
        <label>NB JOUEURS</label>
        <input id="gc-p-count" type="number" min="1" max="11" value="${s.count||1}">
      </div>`:""}
      ${b.hasTarget?`<div>
        <label>CIBLE</label>
        <select id="gc-p-target">
          <option value="home" ${(s.target||"home")==="home"?"selected":""}>Mon équipe</option>
          <option value="opponent" ${s.target==="opponent"?"selected":""}>Équipe adverse</option>
        </select>
      </div>`:""}
      ${b.hasRoles?`<div>
        <label>POSTES CIBLÉS</label>
        <div style="display:flex;gap:4px;flex-wrap:wrap">
          ${Xe.map(w=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555">
            <input type="checkbox" class="gc-p-role" value="${w}" ${!s.roles||s.roles.includes(w)?"checked":""}> ${w}
          </label>`).join("")}
        </div>
      </div>`:""}
    </div>`})(),a=`
    <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:#1a1a2e;border-radius:12px">
      <div id="gc-modal-preview">${ue(h.name||"?",h.image_url?`/icons/${h.image_url}`:null,(Q.find(s=>s.value===h.gc_type)||Q[0]).label.split(" ")[0],h.effect||"",{width:150})}</div>
    </div>

    <div style="display:flex;flex-direction:column;gap:12px">
      <div>
        <label>NOM</label>
        <input id="gc-name" value="${h.name}">
      </div>
      <div>
        <label>EFFET / DESCRIPTION</label>
        <textarea id="gc-effect" rows="3">${h.effect||""}</textarea>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label>TYPE</label>
          <select id="gc-type">
            ${Q.map(s=>`<option value="${s.value}" ${h.gc_type===s.value?"selected":""}>${s.label}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>COULEUR</label>
          <select id="gc-color">
            ${Wn.map(s=>`<option value="${s.value}" ${h.color===s.value?"selected":""}>${s.label}</option>`).join("")}
          </select>
        </div>
      </div>
      <div>
        <label>IMAGE (public/icons/gamechanger-*)</label>
        <div style="display:flex;gap:8px;align-items:center;margin-bottom:8px">
          <input id="gc-image-url" value="${h.image_url||""}" placeholder="gamechanger-nom.png" style="flex:1">
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
          <input id="gc-sort" type="number" value="${h.sort_order||0}">
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding-top:20px">
          <input type="checkbox" id="gc-active" ${h.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
          <label for="gc-active" style="cursor:pointer;font-weight:600;text-transform:none">Actif</label>
        </div>
      </div>
      <div style="border-top:1px solid #eee;padding-top:12px;margin-top:4px">
        <label style="color:#7a28b8">EFFET EN JEU</label>
        <div>
          <label>TYPE D'EFFET</label>
          <select id="gc-effect-type" style="margin-bottom:10px">
            ${Z.map(s=>`<option value="${s.value}" ${(h.effect_type||"BOOST_STAT")===s.value?"selected":""}>${s.label}</option>`).join("")}
          </select>
        </div>
        <div id="gc-params-wrap">${_}</div>
      </div>
    </div>
  `;i(y?"Nouvelle carte Game Changer":`Modifier : ${h.name}`,a,`
    <button id="gc-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gc-save" class="btn btn-primary">💾 Enregistrer</button>
  `);const d=()=>{var v,L,f,E,B;const s=((v=document.getElementById("gc-name"))==null?void 0:v.value)||"?",b=((L=document.getElementById("gc-effect"))==null?void 0:L.value)||"",w=((f=document.getElementById("gc-type"))==null?void 0:f.value)||"game_changer",g=(B=(E=document.getElementById("gc-image-url"))==null?void 0:E.value)==null?void 0:B.trim(),I=Q.find(S=>S.value===w)||Q[0],$=document.getElementById("gc-modal-preview");$&&($.innerHTML=ue(s,g?`/icons/${g}`:null,I.label.split(" ")[0],b,{width:150}))};["gc-name","gc-effect","gc-type","gc-image-url"].forEach(s=>{var b,w;(b=document.getElementById(s))==null||b.addEventListener("input",d),(w=document.getElementById(s))==null||w.addEventListener("change",d)}),(l=document.getElementById("gc-effect-type"))==null||l.addEventListener("change",()=>{const s=document.getElementById("gc-effect-type").value,b=Z.find(g=>g.value===s)||Z[0],w=document.getElementById("gc-params-wrap");w.innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${b.hasValue?'<div><label>VALEUR (+N)</label><input id="gc-p-value" type="number" min="1" max="5" value="2"></div>':""}
      ${b.hasCount?'<div><label>NB JOUEURS</label><input id="gc-p-count" type="number" min="1" max="11" value="1"></div>':""}
      ${b.hasTarget?'<div><label>CIBLE</label><select id="gc-p-target"><option value="home">Mon équipe</option><option value="opponent">Équipe adverse</option></select></div>':""}
      ${b.hasRoles?`<div><label>POSTES CIBLÉS</label><div style="display:flex;gap:4px;flex-wrap:wrap">${Xe.map(g=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555"><input type="checkbox" class="gc-p-role" value="${g}" checked> ${g}</label>`).join("")}</div></div>`:""}
    </div>`}),(m=document.getElementById("btn-pick-gc-icon"))==null||m.addEventListener("click",async()=>{var b;const s=document.getElementById("gc-icon-picker");if(s){if(s.style.display!=="none"){s.style.display="none";return}s.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',s.style.display="block";try{const g=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),I=Array.isArray(g)?g.filter(v=>v.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(v.name)):[];if(!I.length){s.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const $=((b=document.getElementById("gc-image-url"))==null?void 0:b.value)||"";s.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
        ${I.map(v=>`
        <div class="gc-icon-item" data-name="${v.name}"
          style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${v.name===$?"#7a28b8":"#ddd"};background:${v.name===$?"#f5f0ff":"#fff"}">
          <img src="/icons/${v.name}" style="height:44px;width:100%;object-fit:contain">
          <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
        </div>`).join("")}
      </div>`,s.querySelectorAll(".gc-icon-item").forEach(v=>{v.addEventListener("click",()=>{const L=document.getElementById("gc-image-url");L&&(L.value=v.dataset.name),s.style.display="none",d()})})}catch(w){s.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${w.message}</div>`}}}),(p=document.getElementById("btn-upload-gc-icon"))==null||p.addEventListener("click",async()=>{var $;const s=document.getElementById("gc-image-upload"),b=($=s==null?void 0:s.files)==null?void 0:$[0];if(!b){r("Choisir une image d'abord","error");return}const w=document.getElementById("gc-upload-status"),g=document.getElementById("btn-upload-gc-icon"),I=g.textContent;try{w.style.display="block",w.textContent="⏳ Upload en cours...",w.style.color="#666",g.disabled=!0;const v=b.name.split(".").pop().toLowerCase();if(!["png","jpg","jpeg","webp"].includes(v))throw new Error("Format invalide (PNG, JPG, WebP)");const f=Date.now(),B=`gamechanger-${b.name.replace(/\.[^.]+$/,"").replace(/[^a-z0-9-]/gi,"_").toLowerCase()}-${f}.${v}`,{data:S,error:C}=await k.storage.from("gc-icons").upload(B,b,{upsert:!1});if(C)throw C;document.getElementById("gc-image-url").value=B,d(),w.textContent="✅ Image uploadée avec succès",w.style.color="#27ae60",g.disabled=!1,g.textContent=I,s.value="",setTimeout(()=>{w.style.display="none"},3e3)}catch(v){w.textContent=`❌ Erreur : ${v.message}`,w.style.color="#c0392b",g.disabled=!1,g.textContent=I}}),(o=document.getElementById("gc-cancel"))==null||o.addEventListener("click",()=>u()),(x=document.getElementById("gc-save"))==null||x.addEventListener("click",async()=>{var $,v,L,f,E,B,S,C,j,D,q,U,H,A;const s=Z.find(z=>{var T;return z.value===(((T=document.getElementById("gc-effect-type"))==null?void 0:T.value)||"BOOST_STAT")})||Z[0],b=s.hasRoles?[...document.querySelectorAll(".gc-p-role:checked")].map(z=>z.value):null,w={...s.hasValue?{value:Number(($=document.getElementById("gc-p-value"))==null?void 0:$.value)||2}:{},...s.hasCount?{count:Number((v=document.getElementById("gc-p-count"))==null?void 0:v.value)||1}:{},...s.hasTarget?{target:((L=document.getElementById("gc-p-target"))==null?void 0:L.value)||"home"}:{},...s.hasRoles?{roles:b!=null&&b.length?b:null}:{}},g={name:((E=(f=document.getElementById("gc-name"))==null?void 0:f.value)==null?void 0:E.trim())||"",effect:((S=(B=document.getElementById("gc-effect"))==null?void 0:B.value)==null?void 0:S.trim())||null,image_url:((j=(C=document.getElementById("gc-image-url"))==null?void 0:C.value)==null?void 0:j.trim())||null,gc_type:((D=document.getElementById("gc-type"))==null?void 0:D.value)||"game_changer",color:((q=document.getElementById("gc-color"))==null?void 0:q.value)||"purple",sort_order:Number((U=document.getElementById("gc-sort"))==null?void 0:U.value)||0,is_active:((H=document.getElementById("gc-active"))==null?void 0:H.checked)??!0,effect_type:((A=document.getElementById("gc-effect-type"))==null?void 0:A.value)||"BOOST_STAT",effect_params:w};if(!g.name){r("Le nom est obligatoire","error");return}const{error:I}=y?await k.from("gc_definitions").insert(g):await k.from("gc_definitions").update(g).eq("id",h.id);if(I){r(I.message,"error");return}r(y?"Carte créée ✅":"Carte modifiée ✅","success"),u(),ze(n,t)})}async function Xn(e,{toast:n,openModal:t,closeModal:i}){await P(e,{toast:n,openModal:t,closeModal:i})}async function P(e,n){var $,v,L;const{toast:t,openModal:i,closeModal:u}=n,[{data:r,error:y},{data:h},{data:_},{data:a}]=await Promise.all([k.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),k.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1),k.from("season_reward_tiers").select("*").order("rank_min"),k.from("booster_configs").select("id,name").order("sort_order")]);if(y){e.innerHTML=`<p style="color:red">${y.message}</p>`;return}const c=r||[],d=c.find(f=>f.is_active),l=(h||[]).filter(f=>(f.placement_matches||0)>=1),m=l.filter(f=>(f.placement_matches||0)>=10),p=["bronze","silver","gold","platinum","diamond","master"],o={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},x={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},s={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},b={};p.forEach(f=>{b[f]=0}),m.forEach(f=>{const E=f.rank_tier||"bronze";b[E]!==void 0&&b[E]++});const w=m.length?Math.round(m.reduce((f,E)=>f+(E.mmr||1e3),0)/m.length):0;function g(f){return f?new Date(f).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function I(f){const E=new Date;return f.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(f.end_at)<E?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${d?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${d.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${l.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Joueurs ranked</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${m.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Classés (10+ matchs)</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${w}</div>
            <div style="font-size:11px;color:var(--gray-600)">MMR moyen</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(d.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${m.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${p.map(f=>{const E=b[f],B=m.length>0?Math.round(E/m.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${s[f]} ${o[f]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${B}%;background:${x[f]};border-radius:4px;transition:width 0.5s"></div>
                </div>
                <span style="width:40px;text-align:right;color:var(--gray-600)">${E} (${B}%)</span>
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
              ${c.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':c.map(f=>{const E=Math.round((new Date(f.end_at)-new Date(f.start_at))/864e5),B=new Date(f.end_at)<new Date&&!f.is_active;return`
                    <tr>
                      <td><b>${f.name}</b></td>
                      <td style="font-size:12px">${g(f.start_at)}</td>
                      <td style="font-size:12px">${g(f.end_at)}</td>
                      <td style="font-size:12px">${E} jours</td>
                      <td>${I(f)}</td>
                      <td style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn btn-ghost btn-sm" data-edit="${f.id}">✏️ Modifier</button>
                        <button class="btn btn-ghost btn-sm" data-rewards-for="${f.id}" style="color:#D4A017;border-color:#D4A017">🏆 Récompenses</button>
                        ${f.is_active?"":`<button class="btn btn-yellow btn-sm" data-launch="${f.id}">▶ Lancer la saison</button>`}
                        ${f.is_active?`<button class="btn btn-ghost btn-sm" data-deactivate="${f.id}" style="color:#e67e22">⏹ Désactiver</button>`:`<button class="btn btn-primary btn-sm" data-activate="${f.id}">▶ Activer</button>`}
                        ${B?`<button class="btn btn-danger btn-sm" data-delete="${f.id}">🗑</button>`:""}
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
              ${(_||[]).map(f=>{var S;const E=!f.activate_at||new Date(f.activate_at)<=new Date;return`<tr>
                  <td style="font-size:12px">${((S=c.find(C=>C.id===f.season_id))==null?void 0:S.name)||"—"}</td>
                  <td><b>${f.label}</b></td>
                  <td>${f.rank_min===f.rank_max?`#${f.rank_min}`:`#${f.rank_min}–${f.rank_max}`}</td>
                  <td style="text-align:right">${(f.credits||0).toLocaleString("fr")}</td>
                  <td style="text-align:center">${(f.player_ids||[]).length}</td>
                  <td style="text-align:center">${(f.booster_config_ids||[]).length}</td>
                  <td style="font-size:12px">${f.activate_at?g(f.activate_at):"Immédiat"}</td>
                  <td>
                    ${f.distributed_at?`<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Distribué le ${g(f.distributed_at)}</span>`:E?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">● Prêt</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">⏳ Programmé</span>'}
                  </td>
                  <td style="white-space:nowrap">
                    <button class="btn btn-ghost btn-sm" data-edit-tier="${f.id}">✏️</button>
                    <button class="btn btn-primary btn-sm" data-distribute-tier="${f.id}" ${E?"":"disabled"}>🎁 Distribuer</button>
                    <button class="btn btn-danger btn-sm" data-delete-tier="${f.id}">🗑️</button>
                  </td>
                </tr>`}).join("")||'<tr><td colspan="9" style="text-align:center;color:var(--tile-fg-dim);padding:16px">Aucun palier configuré.</td></tr>'}
            </tbody>
          </table>
        </div>`:'<div style="color:var(--tile-fg-dim);font-size:13px;padding:10px">Crée une saison pour configurer ses récompenses.</div>'}
      </div>
    </div>`,($=document.getElementById("create-season-btn"))==null||$.addEventListener("click",()=>{tt(null,{toast:t,openModal:i,closeModal:u,reload:()=>P(e,n)})}),(v=document.getElementById("start-new-season-btn"))==null||v.addEventListener("click",()=>{ei(d,{toast:t,openModal:i,closeModal:u,reload:()=>P(e,n)})}),e.querySelectorAll("[data-edit]").forEach(f=>{const E=c.find(B=>B.id==f.dataset.edit);f.addEventListener("click",()=>{tt(E,{toast:t,openModal:i,closeModal:u,reload:()=>P(e,n)})})}),e.querySelectorAll("[data-activate]").forEach(f=>{f.addEventListener("click",async()=>{const E=parseInt(f.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:B}=await k.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(B){t(B.message,"error");return}const{error:S}=await k.from("ranked_seasons").update({is_active:!0}).eq("id",E);if(S){t(S.message,"error");return}await k.from("users").update({current_season_id:E}).gt("placement_matches",0),t("Saison activée ✅","success"),P(e,n)})}),e.querySelectorAll("[data-rewards-for]").forEach(f=>{f.addEventListener("click",()=>{var S;const E=parseInt(f.dataset.rewardsFor);(S=document.getElementById("rewards-section"))==null||S.scrollIntoView({behavior:"smooth",block:"start"});const B=c.find(C=>C.id===E);Ee(null,c,B,a||[],{toast:t,openModal:i,closeModal:u,reload:()=>P(e,n)})})}),e.querySelectorAll("[data-launch]").forEach(f=>{f.addEventListener("click",async()=>{const E=parseInt(f.dataset.launch),B=c.find(j=>j.id===E);if(!confirm(`Lancer "${B==null?void 0:B.name}" ?

Ceci va :
• Journaliser le classement actuel dans l'historique
• Recalculer le MMR de TOUS les joueurs (reset doux)
• Activer cette saison

Action irréversible. Continuer ?`))return;f.disabled=!0,f.textContent="⏳ Lancement...";const{data:S,error:C}=await k.rpc("admin_launch_season",{p_season_id:E});if(f.disabled=!1,f.textContent="▶ Lancer la saison",C){t(C.message,"error");return}if(!(S!=null&&S.success)){t((S==null?void 0:S.error)||"Échec du lancement","error");return}t(`Saison lancée ✅ (${S.logged} classement(s) archivé(s), ${S.reset} joueur(s) recalculé(s))`,"success"),P(e,n)})}),e.querySelectorAll("[data-deactivate]").forEach(f=>{f.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:E}=await k.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(f.dataset.deactivate));if(E){t(E.message,"error");return}t("Saison désactivée","success"),P(e,n)})}),e.querySelectorAll("[data-delete]").forEach(f=>{f.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:E}=await k.from("ranked_seasons").delete().eq("id",parseInt(f.dataset.delete));if(E){t(E.message,"error");return}t("Saison supprimée","success"),P(e,n)})}),(L=document.getElementById("add-reward-tier-btn"))==null||L.addEventListener("click",()=>{Ee(null,c,d,a||[],{toast:t,openModal:i,closeModal:u,reload:()=>P(e,n)})}),e.querySelectorAll("[data-edit-tier]").forEach(f=>{const E=(_||[]).find(B=>B.id===f.dataset.editTier);f.addEventListener("click",()=>{Ee(E,c,d,a||[],{toast:t,openModal:i,closeModal:u,reload:()=>P(e,n)})})}),e.querySelectorAll("[data-distribute-tier]").forEach(f=>{f.addEventListener("click",async()=>{const E=(_||[]).find(C=>C.id===f.dataset.distributeTier);if(!confirm(`Distribuer les récompenses du palier "${E==null?void 0:E.label}" à tous les joueurs concernés ?`))return;f.disabled=!0,f.textContent="⏳...";const{data:B,error:S}=await k.rpc("admin_distribute_season_reward",{p_tier_id:f.dataset.distributeTier});if(S){t(S.message,"error"),f.disabled=!1,f.textContent="🎁 Distribuer";return}if(!(B!=null&&B.success)){t((B==null?void 0:B.error)||"Échec de la distribution","error"),f.disabled=!1,f.textContent="🎁 Distribuer";return}t(`Récompenses distribuées à ${B.rewarded} joueur(s) ✅`,"success"),P(e,n)})}),e.querySelectorAll("[data-delete-tier]").forEach(f=>{f.addEventListener("click",async()=>{if(!confirm("Supprimer ce palier de récompense ?"))return;const{error:E}=await k.from("season_reward_tiers").delete().eq("id",f.dataset.deleteTier);if(E){t(E.message,"error");return}t("Palier supprimé","success"),P(e,n)})})}function Ee(e,n,t,i,{toast:u,openModal:r,closeModal:y,reload:h}){var o,x,s,b,w;const _=!!e,a=(e==null?void 0:e.season_id)??(t==null?void 0:t.id)??((o=n[0])==null?void 0:o.id)??null;let c=[];const d=g=>{if(!g)return"";const I=new Date(g);return new Date(I.getTime()-I.getTimezoneOffset()*6e4).toISOString().slice(0,16)},l=`
    <div style="display:flex;flex-direction:column;gap:12px">
      <div>
        <label>SAISON RANKED</label>
        <select id="rt-season">
          ${n.map(g=>`<option value="${g.id}" ${g.id===a?"selected":""}>${g.name}${g.is_active?" (active)":""}</option>`).join("")}
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
          ${i.length?i.map(g=>`
            <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;color:#333">
              <input type="checkbox" class="rt-booster-cb" value="${g.id}" ${((e==null?void 0:e.booster_config_ids)||[]).includes(g.id)?"checked":""}>
              ${g.name}
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
  `;r(_?`Modifier : ${e.label}`:"Nouveau palier de récompense",l,`
    <button id="rt-cancel" class="btn btn-ghost">Annuler</button>
    <button id="rt-save" class="btn btn-primary">💾 Enregistrer</button>
  `);function p(){const g=document.getElementById("rt-player-chips");g&&(g.innerHTML=c.map(I=>`
      <span style="display:inline-flex;align-items:center;gap:6px;background:#1A6B3C;color:#fff;font-size:12px;font-weight:700;padding:4px 8px;border-radius:14px">
        ${I.label}
        <button data-remove-player="${I.id}" style="background:none;border:none;color:#fff;cursor:pointer;font-size:12px;padding:0">✕</button>
      </span>`).join(""),g.querySelectorAll("[data-remove-player]").forEach(I=>{I.addEventListener("click",()=>{c=c.filter($=>$.id!==I.dataset.removePlayer),p()})}))}(x=e==null?void 0:e.player_ids)!=null&&x.length&&k.from("players").select("id,firstname,surname_real").in("id",e.player_ids).then(({data:g})=>{c=(g||[]).map(I=>({id:I.id,label:`${I.firstname} ${I.surname_real}`})),p()}),(s=document.getElementById("rt-player-search-btn"))==null||s.addEventListener("click",async()=>{const g=document.getElementById("rt-player-search").value.trim();if(g.length<2)return;const{data:I}=await k.from("players").select("id,firstname,surname_real,rarity").or(`firstname.ilike.%${g}%,surname_real.ilike.%${g}%`).limit(10),$=document.getElementById("rt-player-results");if(!(I!=null&&I.length)){$.style.display="flex",$.innerHTML='<div style="color:#999;font-size:12px;padding:4px">Aucun résultat.</div>';return}$.style.display="flex",$.innerHTML=I.map(v=>`
      <div data-add-player="${v.id}" data-label="${v.firstname} ${v.surname_real}" style="cursor:pointer;padding:6px 8px;border-radius:6px;font-size:13px;color:#333" onmouseover="this.style.background='#eee'" onmouseout="this.style.background=''">
        ${v.firstname} ${v.surname_real} <span style="color:#999;font-size:11px">(${v.rarity})</span>
      </div>`).join(""),$.querySelectorAll("[data-add-player]").forEach(v=>{v.addEventListener("click",()=>{const L=v.dataset.addPlayer;c.some(f=>f.id===L)||c.push({id:L,label:v.dataset.label}),p(),$.style.display="none",document.getElementById("rt-player-search").value=""})})}),(b=document.getElementById("rt-cancel"))==null||b.addEventListener("click",()=>y()),(w=document.getElementById("rt-save"))==null||w.addEventListener("click",async()=>{const g=document.getElementById("rt-error"),I=parseInt(document.getElementById("rt-season").value),$=document.getElementById("rt-label").value.trim(),v=parseInt(document.getElementById("rt-rank-min").value)||1,L=parseInt(document.getElementById("rt-rank-max").value)||1,f=parseInt(document.getElementById("rt-credits").value)||0,E=document.getElementById("rt-activate-at").value,B=E?new Date(E).toISOString():null,S=[...document.querySelectorAll(".rt-booster-cb:checked")].map(D=>D.value);if(!$){g.textContent="Le libellé est obligatoire.";return}if(v>L){g.textContent="Le classement min doit être ≤ au max.";return}if(!I){g.textContent="Choisis une saison.";return}const C={season_id:I,label:$,rank_min:v,rank_max:L,credits:f,booster_config_ids:S,player_ids:c.map(D=>D.id),activate_at:B},{error:j}=_?await k.from("season_reward_tiers").update(C).eq("id",e.id):await k.from("season_reward_tiers").insert(C);if(j){g.textContent=j.message;return}u(_?"Palier modifié ✅":"Palier créé ✅","success"),y(),h()})}function ei(e,{toast:n,openModal:t,closeModal:i,reload:u}){var c,d;const r=new Date,y=new Date(r.getTime()+30*864e5),h=l=>l.toISOString().slice(0,10),_=`
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
          <input id="sns-start" type="date" value="${h(r)}">
        </div>
        <div>
          <label>DATE DE FIN</label>
          <input id="sns-end" type="date" value="${h(y)}">
        </div>
      </div>
      <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;color:#333">
        <input type="checkbox" id="sns-confirm">
        Je comprends que cette action va recalculer le MMR de tous les joueurs et ne peut pas être annulée.
      </label>
      <div id="sns-error" style="font-size:12px;color:#ff6b6b;min-height:14px"></div>
    </div>
  `;t("Démarrer une nouvelle saison",_,`
    <button id="sns-cancel" class="btn btn-ghost">Annuler</button>
    <button id="sns-launch" class="btn btn-primary">🚀 Démarrer la saison</button>
  `),(c=document.getElementById("sns-cancel"))==null||c.addEventListener("click",()=>i()),(d=document.getElementById("sns-launch"))==null||d.addEventListener("click",async()=>{const l=document.getElementById("sns-error"),m=document.getElementById("sns-name").value.trim(),p=document.getElementById("sns-start").value,o=document.getElementById("sns-end").value,x=document.getElementById("sns-confirm").checked;if(!m){l.textContent="Le nom de la saison est requis.";return}if(!p||!o){l.textContent="Les deux dates sont requises.";return}if(new Date(p)>=new Date(o)){l.textContent="La date de fin doit être après la date de début.";return}if(!x){l.textContent="Coche la case de confirmation pour continuer.";return}const s=document.getElementById("sns-launch");s.disabled=!0,s.textContent="⏳ Recalcul en cours...";const{data:b,error:w}=await k.rpc("admin_start_new_season",{p_name:m,p_start_at:new Date(p).toISOString(),p_end_at:new Date(o).toISOString()});if(s.disabled=!1,s.textContent="🚀 Démarrer la saison",w){l.textContent=w.message;return}if(!(b!=null&&b.success)){l.textContent=(b==null?void 0:b.error)||"Échec de l'opération.";return}n(`Nouvelle saison démarrée ✅ (${b.users_reset} joueur(s) recalculé(s))`,"success"),i(),u()})}function tt(e,{toast:n,openModal:t,closeModal:i,reload:u}){const r=!!e,y=new Date().toISOString().slice(0,16),h=new Date(Date.now()+90*864e5).toISOString().slice(0,16),_=e?new Date(e.start_at).toISOString().slice(0,16):y,a=e?new Date(e.end_at).toISOString().slice(0,16):h,c=(e==null?void 0:e.name)||"";t(r?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
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
        <input id="season-end" type="datetime-local" value="${a}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${r?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function d(){var x,s;const l=(x=document.getElementById("season-start"))==null?void 0:x.value,m=(s=document.getElementById("season-end"))==null?void 0:s.value,p=document.getElementById("season-duration");if(!l||!m||!p)return;const o=Math.round((new Date(m)-new Date(l))/864e5);p.textContent=o>0?`Durée : ${o} jour${o>1?"s":""}`:"⚠️ La fin doit être après le début",p.style.color=o>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var l,m,p;(l=document.getElementById("season-start"))==null||l.addEventListener("input",d),(m=document.getElementById("season-end"))==null||m.addEventListener("input",d),d(),(p=document.getElementById("season-save-btn"))==null||p.addEventListener("click",async()=>{var $,v,L;const o=($=document.getElementById("season-name"))==null?void 0:$.value.trim(),x=(v=document.getElementById("season-start"))==null?void 0:v.value,s=(L=document.getElementById("season-end"))==null?void 0:L.value,b=document.getElementById("season-error");if(!o){b.textContent="Le nom est requis.";return}if(!x){b.textContent="La date de début est requise.";return}if(!s){b.textContent="La date de fin est requise.";return}if(new Date(s)<=new Date(x)){b.textContent="La date de fin doit être après le début.";return}const w=document.getElementById("season-save-btn");w.disabled=!0,w.textContent="Enregistrement…";const g={name:o,start_at:new Date(x).toISOString(),end_at:new Date(s).toISOString()};let I;if(r?{error:I}=await k.from("ranked_seasons").update(g).eq("id",e.id):{error:I}=await k.from("ranked_seasons").insert({...g,is_active:!1}),I){b.textContent=I.message,w.disabled=!1,w.textContent=r?"💾 Enregistrer":"✅ Créer la saison";return}n(r?"Saison modifiée ✅":"Saison créée ✅","success"),i(),u()})},50)}async function Ie(e,n){var _;const{toast:t}=n,{data:i,error:u}=await k.from("solo_levels").select("*").order("level_number");if(u){e.innerHTML=`<p style="color:var(--danger)">${u.message}</p>`;return}const r=a=>`
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
            ${(i||[]).map(r).join("")||'<tr><td colspan="8" style="text-align:center;color:#aaa;padding:20px">Aucun niveau défini.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;function y(){document.querySelectorAll("#solo-tbody [data-field]").forEach(a=>{a.addEventListener("change",()=>h(a))})}async function h(a){const c=a.dataset.id,d=a.dataset.field,l=d==="is_active"?a.checked:Number(a.value)||0,{error:m}=await k.from("solo_levels").update({[d]:l}).eq("id",c);if(m){t(m.message,"error");return}a.style.transition="background .3s",a.style.background="#e8f8ee",setTimeout(()=>{a.style.background=""},500)}y(),document.querySelectorAll("[data-del-row]").forEach(a=>{a.addEventListener("click",async()=>{confirm("Supprimer ce niveau ? Les joueurs ayant progressé au-delà seront affectés.")&&(await k.from("solo_levels").delete().eq("id",a.dataset.delRow),t("Niveau supprimé","success"),Ie(e,n))})}),(_=document.getElementById("solo-add-row"))==null||_.addEventListener("click",async()=>{const c={level_number:Math.max(0,...(i||[]).map(m=>m.level_number))+1,target_note_avg:10,nb_liens_jaune:2,nb_liens_vert:1,nb_joueurs_stade:2,reward_credits:500,is_active:!0},{data:d,error:l}=await k.from("solo_levels").insert(c).select().single();if(l){t(l.message,"error");return}t("Niveau ajouté — modifie les valeurs directement","success"),Ie(e,n)})}Ut(at);function ti(e,n="info"){const t=document.getElementById("toast");t.textContent=e,t.className=`show ${n}`,clearTimeout(t._t),t._t=setTimeout(()=>{t.className=""},3e3)}function ni(e,n,t=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=n,document.getElementById("modal-footer").innerHTML=t,document.getElementById("modal-overlay").classList.remove("hidden")}function ke(){document.getElementById("modal-overlay").classList.add("hidden")}const nt={dashboard:{title:"Dashboard",fn:ot},players:{title:"Joueurs & Cartes",fn:Vt},clubs:{title:"Clubs",fn:rn},"card-builder":{title:"Card Builder",fn:bn},users:{title:"Managers",fn:we},market:{title:"Mercato",fn:xt},"import-export":{title:"Import / Export CSV",fn:Sn},formations:{title:"Formations & Liens",fn:Tn},"boosters-config":{title:"Boosters",fn:jn},"sell-price":{title:"Prix vente directe",fn:Dn},journal:{title:"Actualités",fn:Fn},tutorial:{title:"Tutoriel",fn:Hn},stadiums:{title:"Stades",fn:Jn},"gc-cards":{title:"Game Changers",fn:Zn},"ranked-seasons":{title:"Saisons Ranked",fn:Xn},"solo-mode":{title:"Solo Mode",fn:Ie}};async function ye(e){document.querySelectorAll(".admin-sidebar nav a").forEach(u=>{u.classList.toggle("active",u.dataset.page===e)});const n=document.getElementById("mobile-page-select");n&&(n.value=e);const t=nt[e]||nt.dashboard;document.getElementById("page-title").textContent=t.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await t.fn(i,{toast:ti,openModal:ni,closeModal:ke,navigate:ye})}catch(u){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${u.message}</div>`,console.error(u)}}async function ii(){var n;const{data:{session:e}}=await k.auth.getSession();e&&await it(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const t=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,u=document.getElementById("auth-error");if(u.textContent="",!t||!i){u.textContent="Remplissez tous les champs.";return}const{data:r,error:y}=await k.auth.signInWithPassword({email:t,password:i});if(y){u.textContent=y.message;return}await it(r.user)}),document.getElementById("auth-password").addEventListener("keydown",t=>{t.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await k.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",ke),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&ke()}),document.querySelectorAll(".admin-sidebar nav a").forEach(t=>{t.addEventListener("click",i=>{i.preventDefault(),ye(t.dataset.page)})}),(n=document.getElementById("mobile-page-select"))==null||n.addEventListener("change",t=>{ye(t.target.value)})}async function it(e){const{data:n,error:t}=await k.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(t||!n){i.textContent="Profil introuvable.";return}if(!n.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await k.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${n.pseudo}`,ye("dashboard")}ii();
