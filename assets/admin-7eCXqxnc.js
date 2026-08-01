import{s as $,i as kt,r as oe,a as Le,A as Lt,l as Bt,g as At,K as Pe,D as F,b as St,S as Ct,c as q,H as Tt,R as zt,e as be,d as at,f as Mt,h as Rt,E as jt,j as Dt,N as Nt,M as Pt,B as Ft,k as Ot,m as qt,F as se,n as Be,o as ue,p as Ut,q as Ht,t as xe,u as Fe,v as Gt}from"./match-shared-DxhZaXlw.js";async function ot(e){var a;const[{count:t},{count:n},{count:i},{count:c},{count:l},{data:y},{data:x}]=await Promise.all([$.from("players").select("*",{count:"exact",head:!0}),$.from("clubs").select("*",{count:"exact",head:!0}),$.from("users").select("*",{count:"exact",head:!0}),$.from("stadium_definitions").select("*",{count:"exact",head:!0}),$.from("users").select("*",{count:"exact",head:!0}).gt("last_seen_at",new Date(Date.now()-18e4).toISOString()),$.rpc("get_signup_password"),$.from("app_feature_flags").select("*").order("key")]),_=y||"";e.innerHTML=`
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
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${c??"–"}</div>
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
  `,window.adminNav=m=>{var p;(p=document.querySelector(`[data-page="${m}"]`))==null||p.click()},e.querySelectorAll(".feature-flag-toggle").forEach(m=>{m.addEventListener("click",async()=>{const p=m.dataset.key,s=m.dataset.enabled!=="true";m.disabled=!0;const{error:f}=await $.from("app_feature_flags").update({enabled:s,updated_at:new Date().toISOString()}).eq("key",p);if(m.disabled=!1,f){alert(f.message);return}kt(),ot(e)})}),(a=document.getElementById("signup-pwd-save"))==null||a.addEventListener("click",async()=>{const m=document.getElementById("signup-pwd-input").value.trim(),p=document.getElementById("signup-pwd-status");if(!m){p.textContent="Le code ne peut pas être vide.",p.style.color="#ff6b6b";return}const s=document.getElementById("signup-pwd-save");s.disabled=!0,s.textContent="⏳...";const{error:f}=await $.rpc("set_signup_password",{new_password:m});if(s.disabled=!1,s.textContent="💾 Enregistrer",f){p.textContent=f.message,p.style.color="#ff6b6b";return}p.textContent="✅ Code mis à jour.",p.style.color="#2ecc71"})}const rt={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},Kt={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Vt(){const e={};for(const t of Lt)e[t]=await Bt(t);return e}async function Jt(e,t){const{toast:n}=t;if(!confirm(`Réattribuer une nouvelle photo à tous les joueurs ayant encore l'ancien format de chemin (public/faces/...) ?

Cette action est irréversible.`))return;const i=document.getElementById("fix-old-faces-btn");i&&(i.disabled=!0,i.textContent="⏳ En cours...");try{const{data:c,error:l}=await $.from("players").select("id, country_code, face").like("face","public/faces/%");if(l){n(l.message,"error");return}if(!(c!=null&&c.length)){n("Aucun joueur avec l'ancien format — rien à faire ✅","success");return}const{data:y}=await $.from("players").select("face").not("face","is",null),x=new Set((y||[]).map(m=>m.face).filter(m=>m&&!m.startsWith("public/faces/")));let _=0,a=0;for(const m of c){const p=await Le(m.country_code,x);if(!p){a++;continue}const{error:s}=await $.from("players").update({face:p}).eq("id",m.id);if(s){a++;continue}x.add(p),_++}n(`${_} photo(s) réattribuée(s)${a?`, ${a} échec(s)`:""} ✅`,a?"error":"success")}finally{i&&(i.disabled=!1,i.textContent="🖼️ Réattribuer anciennes photos")}}async function Yt(e,t){await me(e,t)}async function me(e,t,n=null){var a,m,p,s,f;const{toast:i}=t;n||(n={search:((a=document.getElementById("search-players"))==null?void 0:a.value)||"",job:((m=document.getElementById("filter-job"))==null?void 0:m.value)||"",rarity:((p=document.getElementById("filter-rarity"))==null?void 0:p.value)||"",club:((s=document.getElementById("filter-club"))==null?void 0:s.value)||"",country:((f=document.getElementById("filter-country"))==null?void 0:f.value)||""});const[{data:c,error:l},{data:y}]=await Promise.all([$.from("players").select("*, clubs(id,encoded_name,logo_url)"),$.from("clubs").select("id,encoded_name").order("encoded_name")]);if(l){e.innerHTML=`<p style="color:red">${l.message}</p>`;return}const x={GK:0,DEF:1,MIL:2,ATT:3},_=(c||[]).sort((u,r)=>{const h=(x[u.job]??4)-(x[r.job]??4);return h!==0?h:(u.surname_real||"").localeCompare(r.surname_real||"")});Wt(e,_,y||[],t,n)}function Wt(e,t,n,i,c=null){var m,p;const{toast:l}=i;if(e.innerHTML=`
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
          ${Object.entries(rt).map(([s,f])=>`<option value="${s}">${f}</option>`).join("")}
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
    </div>`,c){const s=c,f=u=>document.getElementById(u);s.search&&f("search-players")&&(f("search-players").value=s.search),s.job&&f("filter-job")&&(f("filter-job").value=s.job),s.rarity&&f("filter-rarity")&&(f("filter-rarity").value=s.rarity),s.club&&f("filter-club")&&(f("filter-club").value=s.club),s.country&&f("filter-country")&&(f("filter-country").value=s.country)}if(c){const s=c,f=u=>document.getElementById(u);s.search&&f("search-players")&&(f("search-players").value=s.search),s.job&&f("filter-job")&&(f("filter-job").value=s.job),s.rarity&&f("filter-rarity")&&(f("filter-rarity").value=s.rarity),s.club&&f("filter-club")&&(f("filter-club").value=s.club),s.country&&f("filter-country")&&(f("filter-country").value=s.country)}function y(){const s=document.getElementById("search-players").value.toLowerCase(),f=document.getElementById("filter-job").value,u=document.getElementById("filter-rarity").value,r=document.getElementById("filter-club").value,h=document.getElementById("filter-country").value;return t.filter(d=>(!s||`${d.firstname} ${d.surname_real}`.toLowerCase().includes(s))&&(!f||d.job===f)&&(!u||d.rarity===u)&&(!r||d.club_id===r)&&(!h||d.country_code===h))}const x=new Set;function _(){const s=document.getElementById("bulk-bar"),f=document.getElementById("bulk-count");s&&(s.style.display=x.size>0?"flex":"none",f&&(f.textContent=`${x.size} joueur(s) sélectionné(s)`))}function a(){const s=y();document.getElementById("count-label").textContent=`${s.length} joueur(s)`;const f=document.getElementById("players-list");if(!s.length){f.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}f.innerHTML=s.map(u=>{const r={...u,clubs:u.clubs,face:u.face||null},h=oe(r,{width:120});return`<div style="position:relative;cursor:pointer" data-edit="${u.id}">
        ${h}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${u.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),f.querySelectorAll("[data-edit]").forEach(u=>{u.addEventListener("click",()=>{const r=t.find(h=>h.id===u.dataset.edit);r&&Oe(r,n,e,i)})}),f.querySelectorAll(".btn-del-player").forEach(u=>{u.addEventListener("click",async r=>{if(r.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:h}=await $.from("players").delete().eq("id",u.dataset.del);h?l(h.message,"error"):(l("Joueur supprimé ✅","success"),me(e,i))})})}a(),document.getElementById("search-players").addEventListener("input",a),document.getElementById("filter-job").addEventListener("change",a),document.getElementById("filter-rarity").addEventListener("change",a),document.getElementById("filter-club").addEventListener("change",a),document.getElementById("filter-country").addEventListener("change",a),(m=document.getElementById("bulk-cancel-btn"))==null||m.addEventListener("click",()=>{x.clear(),_(),a()}),(p=document.getElementById("bulk-delete-btn"))==null||p.addEventListener("click",async()=>{var r,h,d,k,L;if(!x.size||!confirm(`Supprimer ${x.size} joueur(s) ?`))return;const s=[...x],{error:f}=await $.from("players").delete().in("id",s);if(f){l(f.message,"error");return}l(`${s.length} joueur(s) supprimé(s) ✅`,"success"),x.clear();const u={search:((r=document.getElementById("search-players"))==null?void 0:r.value)||"",job:((h=document.getElementById("filter-job"))==null?void 0:h.value)||"",rarity:((d=document.getElementById("filter-rarity"))==null?void 0:d.value)||"",club:((k=document.getElementById("filter-club"))==null?void 0:k.value)||"",country:((L=document.getElementById("filter-country"))==null?void 0:L.value)||""};me(e,i,u)}),document.getElementById("add-player-btn").addEventListener("click",()=>Oe(null,n,e,i)),document.getElementById("fix-old-faces-btn").addEventListener("click",()=>Jt(e,i))}async function Oe(e,t,n,i){const{toast:c,openModal:l,closeModal:y}=i,x=!!e,_=await Vt(),{data:a}=await $.from("players").select("face").not("face","is",null),m=new Set((a||[]).map(u=>u.face).filter(Boolean));e!=null&&e.face&&m.delete(e.face);const p='<option value="">— Club —</option>'+t.map(u=>`<option value="${u.id}" ${(e==null?void 0:e.club_id)===u.id?"selected":""}>${u.encoded_name}</option>`).join(""),s=e!=null&&e.face?e.face.split("/")[0]:"",f=Object.keys(_).map(u=>`<option value="${u}" ${s===u?"selected":""}>${u}</option>`).join("");l(x?`✏️ ${e.firstname} ${e.surname_real}`:"➕ Nouveau joueur",`<div style="display:flex;gap:20px;align-items:flex-start">

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
              ${["GK","DEF","MIL","ATT"].map(u=>`<option value="${u}" ${(e==null?void 0:e.job)===u?"selected":""}>${u}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Poste 2</label>
            <select id="pm-job2">
              <option value="">Aucun</option>
              ${["GK","DEF","MIL","ATT"].map(u=>`<option value="${u}" ${(e==null?void 0:e.job2)===u?"selected":""}>${u}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Rareté</label>
            <select id="pm-rarity">
              ${["normal","pepite","papyte","legende"].map(u=>`<option value="${u}" ${(e==null?void 0:e.rarity)===u?"selected":""}>${rt[u]}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Pays</label>
            <select id="pm-country">
              ${["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"].map(u=>`<option value="${u}" ${((e==null?void 0:e.country_code)||"FR")===u?"selected":""}>${u}</option>`).join("")}
            </select>
          </div>
        </div>

        <!-- Club + Prix -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <div class="form-group">
            <label>Club</label>
            <select id="pm-club">${p}</select>
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
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([u,r,h])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${Kt[u]};font-weight:700">${u}</label>
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
    </div>`),setTimeout(()=>{var L,o,v;let u=(e==null?void 0:e.face)||null;function r(){var R,N,G,V,J,Y,W,Re,je,De,Ne;const E=document.getElementById("card-preview");if(!E)return;const b=((R=document.getElementById("pm-fn"))==null?void 0:R.value)||"",w=(((N=document.getElementById("pm-real"))==null?void 0:N.value)||"").toUpperCase(),g=((G=document.getElementById("pm-job"))==null?void 0:G.value)||"ATT",I=((V=document.getElementById("pm-job2"))==null?void 0:V.value)||null,B=((J=document.getElementById("pm-rarity"))==null?void 0:J.value)||"normal",S=((Y=document.getElementById("pm-country"))==null?void 0:Y.value)||"FR",C=((W=document.getElementById("pm-club"))==null?void 0:W.value)||null,D=document.getElementById("pm-club"),j=D==null?void 0:D.options[D.selectedIndex];(j==null?void 0:j.text)!=="— Club —"&&(j==null||j.text);const O=parseInt((Re=document.getElementById("pm-g"))==null?void 0:Re.value)||0,U=parseInt((je=document.getElementById("pm-d"))==null?void 0:je.value)||0,H=parseInt((De=document.getElementById("pm-m"))==null?void 0:De.value)||0,A=parseInt((Ne=document.getElementById("pm-a"))==null?void 0:Ne.value)||0,M=t.find(It=>It.id===C),T={firstname:b||"Prénom",surname_real:w||"NOM",job:g,job2:I||null,rarity:B,country_code:S,club_id:C,note_g:O,note_d:U,note_m:H,note_a:A,face:u||null,clubs:M?{encoded_name:M.encoded_name,logo_url:M.logo_url}:null};E.innerHTML=oe(T,{width:160});const z=document.getElementById("pm-minmax");z&&(z.style.display=["pepite","papyte"].includes(B)?"grid":"none")}function h(E){const b=document.getElementById("faces-grid"),w=document.getElementById("pm-face");if(!b||!w)return;const g=_[E]||[];if(console.log("[players] loadFacesGrid folder=",E,"files=",g.length,g.slice(0,5)),!g.length){w.innerHTML='<option value="">— Aucun visage disponible —</option>',b.innerHTML=`<p style="font-size:11px;color:#888;font-style:italic">Aucune image dans le dossier "${E}" du bucket Supabase.</p>`;return}const I=g.filter(B=>{const S=E+"/"+B;return S===u||!m.has(S)});w.innerHTML='<option value="">— Choisir un visage —</option>'+I.map(B=>{const S=E+"/"+B;return`<option value="${S}" ${u===S?"selected":""}>${B}</option>`}).join(""),b.innerHTML=I.map(B=>{const S=E+"/"+B,C=u===S,D=At({face:S});return`<div data-face="${S}" style="cursor:pointer;border:2px solid ${C?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${D}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),b.querySelectorAll("[data-face]").forEach(B=>{B.addEventListener("click",()=>{u=B.dataset.face;const S=document.getElementById("pm-face");S&&(S.value=u),b.querySelectorAll("[data-face]").forEach(C=>{C.style.border=`2px solid ${C.dataset.face===u?"#4fc3f7":"transparent"}`}),r()})})}const d=e!=null&&e.face?e.face.split("/")[0]:"";d&&_[d]&&(document.getElementById("pm-folder").value=d,h(d)),(L=document.getElementById("pm-folder"))==null||L.addEventListener("change",E=>{h(E.target.value)}),(o=document.getElementById("pm-face"))==null||o.addEventListener("change",E=>{u=E.target.value||null,r()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach(E=>{var b,w;(b=document.getElementById(E))==null||b.addEventListener("input",r),(w=document.getElementById(E))==null||w.addEventListener("change",r)}),(v=document.getElementById("pm-save"))==null||v.addEventListener("click",()=>Qt(e,x,u,n,i)),r()},50)}function Zt(e){const t=n=>{var i;return(i=document.getElementById(n))==null?void 0:i.value};return{firstname:(t("pm-fn")||"").trim(),surname_real:(t("pm-real")||"").trim()||"JOUEUR",country_code:t("pm-country")||"FR",club_id:t("pm-club")||null,job:t("pm-job")||"ATT",job2:t("pm-job2")||null,rarity:t("pm-rarity")||"normal",note_g:parseInt(t("pm-g"))||0,note_d:parseInt(t("pm-d"))||0,note_m:parseInt(t("pm-m"))||0,note_a:parseInt(t("pm-a"))||0,note_min:parseInt(t("pm-nmin"))||null,note_max:parseInt(t("pm-nmax"))||null,sell_price:parseInt(t("pm-price"))||0,face:e||null,ethnie:t("pm-folder")||null,is_active:!0}}async function Qt(e,t,n,i,c){var f,u,r,h,d;const{toast:l,closeModal:y}=c,x=document.getElementById("pm-error"),_=document.getElementById("pm-save"),a=Zt(n);if(!a.firstname){x.textContent="Le prénom est requis.";return}if(!a.surname_real){x.textContent="Le nom est requis.";return}_.disabled=!0,_.textContent="Enregistrement…";const m=a,{error:p}=t?await $.from("players").update({...m,updated_at:new Date().toISOString()}).eq("id",e.id):await $.from("players").insert(m);if(p){x.textContent=p.message,_.disabled=!1,_.textContent=t?"💾 Enregistrer":"✅ Créer le joueur";return}l(t?"Joueur modifié ✅":"Joueur créé ✅","success"),y();const s={search:((f=document.getElementById("search-players"))==null?void 0:f.value)||"",job:((u=document.getElementById("filter-job"))==null?void 0:u.value)||"",rarity:((r=document.getElementById("filter-rarity"))==null?void 0:r.value)||"",club:((h=document.getElementById("filter-club"))==null?void 0:h.value)||"",country:((d=document.getElementById("filter-country"))==null?void 0:d.value)||""};me(i,c,s)}const Xt={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},lt=["rase","court","milong","long"];function en(e){const t=Se(e);if(t==="noir")return"noir";if(t==="typ")return Math.random()<.9?"noir":"marron";if(t==="metisse")return Math.random()<.6?"noir":"marron";const n=Math.random();return n<.35?"blond":n<.75?"marron":"noir"}function tn(e){return Math.random()<.05?"chauve":en(e)}const Ae=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function Se(e){return Xt[e]||"blanc"}function st(e){return tn(e)}function te(e,t){return Math.floor(Math.random()*(t-e+1))+e}function X(e){return e[Math.floor(Math.random()*e.length)]}function dt(e){const t=Ae.filter(n=>n!==e);return X(t)}function _e(e){const t=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","GR","RO","BG","UA","RU"],n=["MA","DZ","TN","EG","LY"],i=["NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","TZ","UG","ET"],c=["JP","KR","CN","VN","TH","ID","PH","IN","PK","BD","SA","AE","IR"];return t.includes(e)||["AR","UY","CL","PE","EC","CO","MX","BR"].includes(e)?"Europeans":n.includes(e)?"North Africans":i.includes(e)?"Africans":c.includes(e)?"Asians":"Europeans"}const nn=[{min:1,max:4,pct:55},{min:5,max:10,pct:20},{min:11,max:14,pct:10},{min:15,max:17,pct:10},{min:18,max:20,pct:5}];function ct(){const e=Math.random()*100;let t=0;for(const n of nn)if(t+=n.pct,e<t)return te(n.min,n.max);return te(1,4)}function an(){const e=Array.from({length:20},(t,n)=>n);return e.sort(()=>Math.random()-.5),new Set(e.slice(0,10))}let de=null;function on(e,t){return e&&(de||(de=an()),de.has(t))?te(15,20):ct()}const ge={FR:{first:["Lucas","Tom","Hugo","Théo","Antoine","Kylian","Rayan","Axel","Paul","Enzo","Léo","Mathis","Nathan","Alexis","Ethan","Maxime","Julien","Baptiste","Nicolas","Pierre","Clément","Adrien","Valentin","Dylan","Loïc","Quentin","Florian","Kevin","Corentin","Raphaël"],last:["Martin","Bernard","Petit","Dupont","Moreau","Laurent","Robert","Michel","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard","Bonnet","Rousseau","Fontaine","Chevalier","Blanc","Garnier","Boyer","Gauthier","Garcia","Perrin","Robin","Clément","Morin","Nicolas","Henry","Lemaire","Noël","Dufour","Meunier","Brun","Blanchard","Giraud","Joly","Rivière","Brunet"]},ES:{first:["Carlos","Miguel","Javier","Alejandro","Sergio","David","Diego","Pablo","Álvaro","Marcos","Adrián","Rubén","Iker","Raúl","Fernando","Roberto","Víctor","Iván","Gonzalo","Antonio","Manuel","Jesús","Josué","Rodrigo","Cristian","Héctor","Óscar","Mario","Daniel","Jorge"],last:["García","Rodríguez","Martínez","López","Sánchez","González","Pérez","Hernández","Jiménez","Díaz","Torres","Ramírez","Flores","Rivera","Gómez","Morales","Álvarez","Romero","Herrera","Medina","Aguilar","Vargas","Guzmán","Muñoz","Salazar","Soto","Contreras","Rojas","Ramos","Ortiz"]},PT:{first:["João","Pedro","Diogo","Rúben","Bruno","Tiago","André","Ricardo","Luís","Gonçalo","Nuno","Mário","Fábio","Rui","Miguel","Sérgio","Hugo","Filipe","Paulo","Vítor"],last:["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Carvalho","Gomes","Ribeiro","Araújo","Barbosa","Cardoso","Correia","Teixeira","Machado","Vieira","Monteiro","Cunha","Pinto","Melo","Barros","Freitas","Fonseca","Andrade","Castro","Neves","Figueiredo","Duarte"]},BR:{first:["Gabriel","Lucas","Mateus","Gustavo","Felipe","Rodrigo","Thiago","Rafael","Bruno","Diego","Leonardo","Eduardo","Victor","Pedro","Carlos","Alexandre","André","Paulo","Danilo","Marcelo"],last:["Silva","Santos","Oliveira","Souza","Lima","Ferreira","Costa","Nascimento","Alves","Pereira","Rodrigues","Almeida","Nunes","Melo","Barbosa","Rocha","Brito","Castro","Carvalho","Gomes","Lopes","Ramos","Mendes","Cavalcanti","Batista","Azevedo","Campos","Freitas","Reis","Andrade"]},AR:{first:["Lionel","Sergio","Rodrigo","Nicolás","Ezequiel","Gonzalo","Federico","Mauro","Pablo","Diego","Lucas","Matías","Alejandro","Maximiliano","Emiliano","Marcos","Lautaro","Ángel","Leandro","Julián"],last:["González","Rodríguez","Martínez","García","López","Pérez","Sánchez","Romero","Torres","Flores","Díaz","Gómez","Alvarez","Ruiz","Castro","Herrera","Cabrera","Medina","Ferreyra","Suárez"]},IT:{first:["Marco","Luca","Alessandro","Matteo","Davide","Andrea","Francesco","Federico","Lorenzo","Riccardo","Stefano","Simone","Roberto","Nicola","Giovanni","Antonio","Emanuele","Daniele","Alberto","Giorgio"],last:["Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Ricci","Marino","Greco","Bruno","Gallo","Conti","De Luca","Mancini","Giordano","Rizzo","Lombardi","Moretti","Fontana","Rinaldi"]},DE:{first:["Lukas","Max","Jonas","Florian","Tobias","Stefan","Markus","Sebastian","Niklas","Leon","Tim","Felix","Alexander","Philipp","Christian","Thomas","Michael","Jan","Moritz","Fabian"],last:["Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Wolf","Schröder","Neumann","Schwarz","Zimmermann","Braun","Krüger","Hofmann","Wagner","Becker","Koch","Lehmann","Kaiser"]},GB:{first:["James","Harry","Oliver","Jack","George","Charlie","William","Thomas","Alfie","Edward","Ryan","Liam","Noah","Ethan","Kyle","Jordan","Callum","Aaron","Declan","Connor"],last:["Smith","Jones","Williams","Brown","Taylor","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Walker","Wright","Robinson","White","Thompson","Hughes","Edwards","Green","Hall"]},MA:{first:["Yassine","Karim","Mehdi","Amine","Hamza","Bilal","Soufiane","Rachid","Omar","Mohammed","Zakaria","Ilyas","Ayoub","Saad","Khalid","Adil","Tarik","Hicham","Reda","Nabil"],last:["Benali","Amrani","Bouazza","Cherif","Haddad","Meziane","Belkacem","Rahmani","Saidi","Zidane","Belhadj","Tazi","Idrissi","Alaoui","Bennani","Fassi","Lahlou","Naciri","Tahiri","Zniber"]},DZ:{first:["Yacine","Riyad","Sofiane","Haris","Adem","Islam","Bilal","Omar","Nassim","Mehdi","Ryad","Zinedine","Youssef","Farid","Karim","Mourad","Walid","Anes","Ferhat","Djamel"],last:["Amrouche","Boudiaf","Cherki","Guessab","Hamdi","Jaber","Lakhal","Mahjoub","Rezki","Sahnoun","Talbi","Zerrouki","Achour","Bakri","Chaouch","Djaballah","Ferhat","Gacem","Khaldi","Larbi"]},SN:{first:["Sadio","Ismaïla","Cheikhou","Gana","Famara","Mbaye","Pape","Aliou","Moussa","Sidy","Idrissa","Lamine","Bamba","Fallou","Abdou","Diallo","Mamadou","Souleymane","Oumar","Cheikh"],last:["Diallo","Traoré","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Ndiaye","Sow","Cissé","Fofana","Keita","Sylla","Kane","Diarra","Sanogo","Baldé","Kouyaté"]},CI:{first:["Didier","Wilfried","Serge","Jonathan","Franck","Maxwel","Salomon","Gervinho","Nicolas","Maxime","Ismael","Romaric","Abdul","Cheick","Arouna","Kolo","Yaya","Geoffroy","Siaka","Adama"],last:["Drogba","Zaha","Gnagnon","Koné","Touré","Bamba","Diomandé","Konaté","Coulibaly","Fofana","Traoré","Doumbia","Sanogo","Diabaté","Kalou","Bakayoko","Gradel","Seri","Aurier","Haller"]},CM:{first:["Samuel","Alex","Karl","Fabrice","Cédric","Nicolas","Georges","André","Joël","Roger","François","Jean","Patrick","Thierry","Eric","Benjamin","Aristide","Clinton","Clinton","Stéphane"],last:["Eto'o","Song","Choupo-Moting","Aboubakar","Bassogog","Kunde","Toko","Nkoudou","Ngadeu","Oyongo","Fai","Zambo","Mokoena","Ekambi","Tchamba","Mbida","Biya","Kameni","Meyong","Webo"]},NG:{first:["Kelechi","Ahmed","Victor","John","Emmanuel","Samuel","Moses","Ola","Chukwuemeka","Odion","Sunday","Chidi","Nnamdi","Chisom","Tunde","Emeka","Obinna","Uchenna","Ifeanyi","Segun"],last:["Osimhen","Iheanacho","Musa","Onyekuru","Iwobi","Ndidi","Nwankwo","Obi","Mikel","Martins","Okocha","Yekini","Amunike","Babangida","Fash","Lawal","Onuoha","Taiwo","Ayodele","Ameobi"]},JP:{first:["Ryota","Kenji","Hiroshi","Takumi","Yuto","Daichi","Shinji","Makoto","Koji","Naoki","Yuya","Shoya","Ryo","Shu","Atsuto","Masato","Hotaru","Genki","Ko","Ritsu"],last:["Nakamura","Tanaka","Suzuki","Sato","Yamamoto","Watanabe","Ito","Yamada","Saito","Matsumoto","Inoue","Kimura","Hayashi","Shimizu","Yamazaki","Mori","Abe","Ikeda","Kato","Honda"]},KR:{first:["Heung","Son","Ji","Sung","Jae","Young","Kang","Hyun","Woo","Tae","Seung","Min","Jun","Dong","Chang","Sang","Yo","Hee","Jin","Bum"],last:["Kim","Park","Lee","Choi","Jung","Kang","Cho","Yoon","Lim","Oh","Han","Seo","Kwon","Hwang","Ahn","Yang","Shin","Yoo","Jang","Song"]},MX:{first:["Carlos","Hirving","Andrés","Javier","Miguel","Raúl","Héctor","Diego","Jorge","Luis","Rodolfo","Erick","Jonathan","Néstor","Tecatito","Chicharito","Oswaldo","Oribe","Uriel","Giovanni"],last:["Hernández","Lozano","Guardado","Vela","Morales","Jiménez","Reyes","Corona","Herrera","Rodríguez","Ochoa","Chicharito","Flores","Domínguez","Araujo","Álvarez","Pineda","Sánchez","Antuna","Meza"]},_DEFAULT_EUROPE:{first:["Stefan","Ivan","Luca","Marco","Andrei","Cristian","Bogdan","Mircea","Adrian","Florin","Dušan","Aleksandar","Nikola","Nemanja","Marko","Filip","Milan","Branislav","Radomir","Dejan"],last:["Popescu","Ionescu","Stan","Marin","Stoica","Popa","Radu","Constantin","Barbu","Dobre","Petrović","Marković","Nikolić","Jovanović","Popović","Stanković","Đorđević","Lukić","Simić","Ilić"]},_DEFAULT_AFRIQUE:{first:["Mamadou","Ibrahima","Moussa","Seydou","Boubacar","Oumar","Modibo","Adama","Bakary","Abdoulaye","Lamine","Ousmane","Sekou","Demba","Tidiane","Amadou","Issiaka","Siaka","Fode","Samba"],last:["Diallo","Traoré","Coulibaly","Koné","Doumbia","Kouyaté","Bah","Konaté","Touré","Camara","Sylla","Keita","Diakité","Sangaré","Sanou","Sidibé","Bathily","Niakaté","Dioumassi","Sissoko"]},_DEFAULT_ASIE:{first:["Wei","Ming","Jae","Van","Duc","Sorn","Ali","Hassan","Reza","Arman","Yusuf","Tariq","Faris","Khalid","Saad","Rashid","Nasser","Walid","Ziad","Adel"],last:["Zhang","Wang","Liu","Chen","Yang","Huang","Zhou","Wu","Xu","Sun","Al-Rashidi","Al-Dosari","Al-Harthi","Al-Balushi","Al-Farsi","Al-Shamsi","Al-Neyadi","Al-Breiki","Al-Hammadi","Al-Mansouri"]},_DEFAULT_AMERIQUE:{first:["James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Marcus","Jordan","Andre","Devonte","Malik","Tyrone","Jamal","Darius","DeShawn","Brandon","Cody"],last:["Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Taylor","Anderson","Jackson","White","Harris","Clark","Lewis","Walker","Hall","Allen","Young","King"]}},rn={FR:"FR",BE:"FR",CH:"FR",MC:"FR",LU:"FR",ES:"ES",MX:"MX",CO:"ES",VE:"ES",PE:"ES",CL:"ES",EC:"ES",UY:"ES",PY:"ES",BO:"ES",CR:"ES",PA:"ES",HN:"ES",GT:"ES",SV:"ES",NI:"ES",DO:"ES",CU:"ES",PT:"PT",AO:"PT",MZ:"PT",CV:"PT",BR:"BR",AR:"AR",IT:"IT",SM:"IT",DE:"DE",AT:"DE",GB:"GB",IE:"GB",AU:"GB",NZ:"GB",CA:"GB",MA:"MA",TN:"DZ",LY:"DZ",DZ:"DZ",SN:"SN",ML:"SN",GN:"SN",GW:"SN",GM:"SN",MR:"SN",CI:"CI",BF:"CI",TG:"CI",BJ:"CI",GH:"CI",CM:"CM",GA:"CM",CG:"CM",CD:"CM",NG:"NG",JP:"JP",KR:"KR",MX:"MX",PL:"_DEFAULT_EUROPE",CZ:"_DEFAULT_EUROPE",SK:"_DEFAULT_EUROPE",HU:"_DEFAULT_EUROPE",HR:"_DEFAULT_EUROPE",RS:"_DEFAULT_EUROPE",SI:"_DEFAULT_EUROPE",RO:"_DEFAULT_EUROPE",BG:"_DEFAULT_EUROPE",GR:"_DEFAULT_EUROPE",TR:"_DEFAULT_EUROPE",RU:"_DEFAULT_EUROPE",UA:"_DEFAULT_EUROPE",NL:"_DEFAULT_EUROPE",DK:"_DEFAULT_EUROPE",SE:"_DEFAULT_EUROPE",NO:"_DEFAULT_EUROPE",FI:"_DEFAULT_EUROPE",AL:"_DEFAULT_EUROPE",EG:"_DEFAULT_AFRIQUE",ZA:"_DEFAULT_AFRIQUE",KE:"_DEFAULT_AFRIQUE",ET:"_DEFAULT_AFRIQUE",TZ:"_DEFAULT_AFRIQUE",UG:"_DEFAULT_AFRIQUE",CN:"_DEFAULT_ASIE",VN:"_DEFAULT_ASIE",TH:"_DEFAULT_ASIE",ID:"_DEFAULT_ASIE",PH:"_DEFAULT_ASIE",IN:"_DEFAULT_ASIE",PK:"_DEFAULT_ASIE",BD:"_DEFAULT_ASIE",IR:"_DEFAULT_ASIE",SA:"_DEFAULT_ASIE",AE:"_DEFAULT_ASIE",QA:"_DEFAULT_ASIE",KW:"_DEFAULT_ASIE",IQ:"_DEFAULT_ASIE",SY:"_DEFAULT_ASIE",JO:"_DEFAULT_ASIE",US:"_DEFAULT_AMERIQUE"};function pt(e){return rn[e]||"_DEFAULT_EUROPE"}function ut(e){const t=pt(e),n=(ge[t]||ge._DEFAULT_EUROPE).first;return X(n)}function mt(e){const t=pt(e);return(ge[t]||ge._DEFAULT_EUROPE).last}function ln(e,t,n=new Set,i=!1){const c=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],l=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],y=new Set(l.sort(()=>Math.random()-.5).slice(0,4)),x=[...l].sort(()=>Math.random()-.5),_=new Set(x.slice(0,2)),a=new Set(x.slice(2,4)),m=10,p=c.map((u,r)=>r<m);for(let u=p.length-1;u>0;u--){const r=Math.floor(Math.random()*(u+1));[p[u],p[r]]=[p[r],p[u]]}const s=new Set;function f(u){const r=mt(u),h=r.filter(o=>!s.has(o)&&!n.has(o)),d=h.length?h:r.filter(o=>!s.has(o)),k=d.length?d:r,L=X(k);return s.add(L),L}return c.map((u,r)=>{const h=p[r]?t:dt(t),d=Se(h),k=st(h),L=X(lt),o=_.has(r)?"pepite":a.has(r)?"papyte":"normal",v=o==="pepite"?te(10,15):o==="papyte"?te(15,20):on(i,r),E=y.has(r),b=E?Math.max(0,v-2):0;let w=0,g=0,I=0,B=0,S=null;u==="GK"?w=v:u==="DEF"?(g=v,E&&(I=b,S="MIL")):u==="ATT"?(B=v,E&&(I=b,S="MIL")):(I=v,E&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(g=b,S="DEF"):(B=b,S="ATT")));const C=f(h);return{job:u,job2:S,firstname:ut(h),surname_real:C,country_code:h,club_id:e,note_g:w,note_d:g,note_m:I,note_a:B,skin:d,hair:k,hair_length:L,rarity:o,sell_price:0,ethnie:_e(h),_ethnie:_e(h)}})}async function gt(e,t,n,i=!1){de=null;const{data:c}=await $.from("players").select("surname_real").not("surname_real","is",null),l=new Set((c||[]).map(u=>u.surname_real).filter(Boolean)),y=ln(e,t,l,i),{data:x}=await $.from("players").select("face").not("face","is",null),_=new Set((x||[]).map(u=>u.face).filter(Boolean)),a=new Set;for(const u of y){const r=await Le(u.country_code,new Set([..._,...a]));r&&(u.face=r,a.add(r)),delete u._ethnie}const{data:m,error:p}=await $.from("players").insert(y).select("id");if(p){console.error("[GenSquad] Erreur batch insert:",p.message,p.details),n("Erreur: "+p.message,"error");return}const s=(m||[]).map(u=>({card_type:"player",player_id:u.id}));if(s.length){const{error:u}=await $.from("cards").insert(s);u&&console.warn("[GenSquad] Erreur cartes:",u.message)}const f=(m==null?void 0:m.length)||0;console.log("[GenSquad] Créés:",f,"/",y.length),f>0?n(`${f} joueurs générés ✅`,"success"):n("Erreur génération joueurs","error")}function ft(e){return{style:e.kit_style||F.style,color1:e.kit_color1||F.color1,color2:e.kit_color2||F.color2,color3:e.kit_color3||F.color3,shorts:e.kit_shorts||F.shorts,socks:e.kit_socks||F.socks}}let ce=[];async function sn(e,t){await ve(e,t)}async function ve(e,t){const[{data:n,error:i},{data:c}]=await Promise.all([$.from("clubs").select("*").order("real_name"),$.from("players").select("club_id")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}ce=n||[];const l={};(c||[]).forEach(y=>{l[y.club_id]=(l[y.club_id]||0)+1}),dn(e,t,l)}function dn(e,t,n={}){const{toast:i,openModal:c,closeModal:l}=t;e.innerHTML=`
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
    </div>`,y(ce),document.getElementById("search-clubs").addEventListener("input",x=>{const _=x.target.value.toLowerCase();y(ce.filter(a=>a.real_name.toLowerCase().includes(_)||a.encoded_name.toLowerCase().includes(_)))}),document.getElementById("add-club-btn").addEventListener("click",()=>qe(null,e,t));function y(x){const _=document.getElementById("clubs-list");if(!x.length){_.innerHTML='<p style="color:var(--tile-fg-dim);padding:20px;text-align:center">Aucun club.</p>';return}const a={};x.forEach(s=>{const f=s.country_code||"—";a[f]||(a[f]=[]),a[f].push(s)});const m=Object.keys(a).sort(),p=s=>{const f=ft(s),u=s.logo_url?`<img src="${s.logo_url}" style="width:36px;height:36px;object-fit:contain;border-radius:8px;flex-shrink:0">`:`<div style="width:36px;height:36px;background:linear-gradient(135deg,${f.color1},${f.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:900;flex-shrink:0">${s.encoded_name.slice(0,3)}</div>`,r=n[s.id]||0;return`
        <div class="club-row" data-club-id="${s.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:10px;cursor:pointer;background:var(--tile-bg);border:1px solid var(--tile-border);transition:background .15s">
          ${u}
          <img src="https://flagsapi.com/${s.country_code}/flat/24.png" style="width:18px;height:13px;object-fit:cover;border-radius:2px;flex-shrink:0" onerror="this.style.display='none'">
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:12px;color:var(--tile-fg-on-page);font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${s.encoded_name}</div>
            <div style="font-size:10px;color:${r===0?"#e67e22":"var(--tile-fg-dim)"}">${r===0?"⚠️ 0 joueur":`👥 ${r}`}</div>
          </div>
          <button class="btn-del-club" data-del="${s.id}"
            style="width:22px;height:22px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;flex-shrink:0"
            onclick="event.stopPropagation()">✕</button>
        </div>`};_.innerHTML=m.map(s=>`
      <div style="display:flex;align-items:center;gap:8px;padding:8px 4px 4px;margin-top:6px">
        ${s!=="—"?`<img src="https://flagsapi.com/${s}/flat/24.png" style="width:20px;height:15px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">`:'<span style="font-size:14px">🌍</span>'}
        <span style="font-size:11px;font-weight:900;color:var(--tile-fg-dim);letter-spacing:1px">${s}</span>
        <span style="font-size:11px;color:var(--tile-fg-dim);background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:10px;padding:1px 8px">${a[s].length}</span>
        <div style="flex:1;height:1px;background:var(--tile-border)"></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:4px">
        ${a[s].map(p).join("")}
      </div>
    `).join(""),_.querySelectorAll(".club-row").forEach(s=>{s.addEventListener("click",()=>{const f=ce.find(u=>u.id===s.dataset.clubId);f&&qe(f,e,t),_.querySelectorAll(".club-row").forEach(u=>u.style.background="var(--tile-bg)"),s.style.background="rgba(26,107,60,0.18)"})}),_.querySelectorAll(".btn-del-club").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:f}=await $.from("clubs").delete().eq("id",s.dataset.del);f?i(f.message,"error"):(i("Club supprimé","success"),ve(e,t))})})}}function cn(e){var j,O,U,H;const{openModal:t,closeModal:n}=e;let i=6;const c=36;function l(A){return new Array(A*A).fill("#ffffff")}let y=l(i),x="OP",_="#D4A017",a=50,m=0,p=0,s="",f="#ffffff",u=25,r=0,h=35,d=new Set,k=null;function L(){const A=c*i;let M="";for(let z=0;z<i;z++)for(let R=0;R<i;R++){const N=z*i+R;M+=`<rect x="${R*c}" y="${z*c}" width="${c}" height="${c}" fill="${y[N]}"/>`}const T=(z,R,N,G,V)=>{if(!z)return"";const J=A/2+G/100*A,Y=A/2+V/100*A,W=N/100*A*(z.length>3?3/z.length:1);return`<text x="${J}" y="${Y}" text-anchor="middle" dominant-baseline="central"
        font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="${W}"
        fill="${R}">${z}</text>`};return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${A} ${A}">
      ${M}
      ${T(x,_,a,m,p)}
      ${T(s,f,u,r,h)}
    </svg>`}function o(A){return"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(A)))}const v=(A,M,T,z,R,N,G)=>`
    <div style="background:#f7f7f7;border-radius:10px;padding:12px;display:flex;flex-direction:column;gap:8px">
      <div style="font-weight:700;font-size:12px;color:#333">${M}</div>
      <input id="flag-text${A}" maxlength="20" value="${T}" placeholder="${A===2?"Vide = désactivé":""}" style="font-weight:900">
      <div style="display:flex;align-items:center;gap:8px">
        <label style="margin:0;font-size:11px;white-space:nowrap">Couleur</label>
        <input type="color" id="flag-text${A}-color" value="${z}" style="width:40px;height:28px;padding:2px;cursor:pointer">
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

      ${v(1,"TEXTE 1 (20 caractères max)",x,_,a,m,p)}
      ${v(2,"TEXTE 2 — optionnel (20 caractères max)",s,f,u,r,h)}
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
  `);function w(){const A=document.getElementById("flag-squares-grid");if(!A)return;const M=i>=12?30:i>=9?36:44;A.style.gridTemplateColumns=`repeat(${i}, ${M}px)`,A.innerHTML=y.map((T,z)=>`
      <div class="flag-square" data-i="${z}" style="width:${M}px;height:${M}px;border-radius:4px;background:${T};cursor:pointer;
        box-sizing:border-box;border:${d.has(z)?"3px solid #1A6B3C":"1px solid rgba(0,0,0,0.15)"}"></div>
    `).join(""),A.querySelectorAll(".flag-square").forEach(T=>{T.addEventListener("click",z=>{const R=parseInt(T.dataset.i);z.ctrlKey||z.metaKey||z.shiftKey?d.has(R)?d.delete(R):d.add(R):d=new Set([R]),w(),g()}),T.addEventListener("dblclick",()=>{const z=parseInt(T.dataset.i),R=document.createElement("input");R.type="color",R.value=y[z],R.style.position="fixed",R.style.opacity="0",document.body.appendChild(R),R.addEventListener("input",()=>{y[z]=R.value,w(),C()}),R.addEventListener("change",()=>R.remove()),R.click()})})}function g(){const A=document.getElementById("flag-copy-btn"),M=document.getElementById("flag-paste-btn");A.disabled=d.size===0,M.disabled=d.size===0||k===null}function I(){if(d.size===0)return;const A=[...d][0];k=y[A];const M=document.getElementById("flag-clipboard-preview"),T=document.getElementById("flag-clipboard-swatch");M&&(M.style.display="inline-flex"),T&&(T.style.background=k),g()}function B(){d.size===0||k===null||(d.forEach(A=>{y[A]=k}),w(),C())}(j=document.getElementById("flag-copy-btn"))==null||j.addEventListener("click",I),(O=document.getElementById("flag-paste-btn"))==null||O.addEventListener("click",B);function S(A){if(!document.getElementById("flag-squares-grid")){document.removeEventListener("keydown",S);return}!(A.ctrlKey||A.metaKey)||d.size===0||(A.key==="c"||A.key==="C"?(A.preventDefault(),I()):(A.key==="v"||A.key==="V")&&(A.preventDefault(),B()))}document.addEventListener("keydown",S),document.querySelectorAll(".flag-grid-size").forEach(A=>{A.addEventListener("click",()=>{const M=parseInt(A.dataset.n);if(M===i)return;i=M,y=l(i),d=new Set,k=null;const T=document.getElementById("flag-clipboard-preview");T&&(T.style.display="none"),w(),g(),C(),document.querySelectorAll(".flag-grid-size").forEach(z=>{z.classList.toggle("btn-primary",parseInt(z.dataset.n)===i),z.classList.toggle("btn-ghost",parseInt(z.dataset.n)!==i)})})});function C(){const A=document.getElementById("flag-preview");A&&(A.innerHTML=L())}w(),g(),C();function D(A){document.getElementById(`flag-text${A}`).addEventListener("input",M=>{const T=M.target.value.slice(0,20);A===1?x=T:s=T,C()}),document.getElementById(`flag-text${A}-color`).addEventListener("input",M=>{A===1?_=M.target.value:f=M.target.value,C()}),document.getElementById(`flag-text${A}-size`).addEventListener("input",M=>{const T=parseInt(M.target.value);A===1?a=T:u=T,document.getElementById(`flag-size${A}-val`).textContent=T,C()}),document.getElementById(`flag-text${A}-x`).addEventListener("input",M=>{const T=parseInt(M.target.value);A===1?m=T:r=T,document.getElementById(`flag-x${A}-val`).textContent=T,C()}),document.getElementById(`flag-text${A}-y`).addEventListener("input",M=>{const T=parseInt(M.target.value);A===1?p=T:h=T,document.getElementById(`flag-y${A}-val`).textContent=T,C()})}D(1),D(2),(U=document.getElementById("flag-cancel"))==null||U.addEventListener("click",()=>n()),(H=document.getElementById("flag-use"))==null||H.addEventListener("click",()=>{const A=o(L()),M=document.getElementById("m-logo-url-current");M&&(M.value=A);const T=document.getElementById("logo-preview");T&&(T.innerHTML=`<img src="${A}" style="width:100%;height:100%;object-fit:contain">`),n()})}async function qe(e,t,n){var h,d,k,L,o,v,E;const{toast:i}=n,c=!!e,l=e?ft(e):{...F},y=document.getElementById("club-panel");if(!y)return;const x=Object.entries(Pe).map(([b,w])=>`<option value="${b}" ${l.style===b?"selected":""}>${w.label}</option>`).join(""),_=Ae.map(b=>`<option value="${b}" ${((e==null?void 0:e.country_code)||"FR")===b?"selected":""}>${b}</option>`).join("");y.style.display="block",y.style.alignItems="",y.style.justifyContent="",y.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <h3 style="font-size:17px;font-weight:900;color:var(--tile-fg-on-page)">${c?`✏️ ${e.real_name}`:"➕ Nouveau club"}</h3>
      ${c?'<button id="btn-gen-squad-panel" class="btn btn-primary btn-sm">⚽ Générer joueurs</button>':""}
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
            ${[["Couleur 1","m-kit-color1",l.color1,!1],["Couleur 2","m-kit-color2",l.color2,!1],["Couleur 3","m-kit-color3",l.color3,!0],["Short","m-kit-shorts",l.shorts,!1],["Chaussettes","m-kit-socks",l.socks,!1]].map(([b,w,g,I])=>`
              <div class="form-group" id="wrap-${w}" ${I?'style="display:none"':""}>
                <label>${b}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${w}" value="${g||"#000000"}" style="width:38px;height:32px;padding:2px;border:1px solid var(--tile-border);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${w}-txt" value="${g||"#000000"}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>`).join("")}
          </div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div id="kit-preview-wrap" style="background:#f0f0f0;border-radius:12px;padding:14px;border:1.5px solid var(--tile-border);min-width:60px;text-align:center"></div>
            <div style="font-size:10px;color:var(--tile-fg-dim)">Aperçu</div>
          </div>
        </div>
      </div>

      ${c?"":`
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
        ${c?"💾 Enregistrer":"✅ Créer le club"}
      </button>
    </div>

    ${c?`
    <div style="border-top:1px solid var(--tile-border);margin-top:24px;padding-top:20px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <h4 style="font-size:14px;font-weight:900;color:var(--tile-fg-on-page)">🃏 Joueurs du club (<span id="club-players-count">…</span>)</h4>
        <button id="btn-gen-one-player" class="btn btn-primary btn-sm">➕ Générer 1 joueur</button>
      </div>
      <div id="club-players-grid" style="display:flex;flex-wrap:wrap;gap:10px"></div>
    </div>`:""}
  `,(h=document.getElementById("m-logo-file"))==null||h.addEventListener("change",b=>{var I;const w=(I=b.target.files)==null?void 0:I[0];if(!w)return;const g=new FileReader;g.onload=()=>{document.getElementById("logo-preview").innerHTML=`<img src="${g.result}" style="width:100%;height:100%;object-fit:contain">`},g.readAsDataURL(w)}),(d=document.getElementById("m-open-flag-builder"))==null||d.addEventListener("click",()=>{cn(n)}),ae();function a(){var I,B;const b=((I=document.getElementById("m-kit-style"))==null?void 0:I.value)||"uni",w=((B=Pe[b])==null?void 0:B.colors)===3,g=document.getElementById("wrap-m-kit-color3");g&&(g.style.display=w?"":"none")}a(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(b=>{const w=document.getElementById(b),g=document.getElementById(b+"-txt");!w||!g||(w.addEventListener("input",()=>{g.value=w.value,ae()}),g.addEventListener("input",()=>{const I=g.value.trim();/^#[0-9a-fA-F]{6}$/.test(I)&&(w.value=I,ae())}),g.addEventListener("change",()=>{let I=g.value.trim();I.startsWith("#")||(I="#"+I),/^#[0-9a-fA-F]{6}$/.test(I)&&(w.value=I,g.value=I,ae())}))}),(k=document.getElementById("m-kit-style"))==null||k.addEventListener("change",()=>{a(),ae()});const m=document.getElementById("m-real"),p=document.getElementById("m-encoded");function s(){if(!m||!p||p.value)return;const b=m.value.trim().split(/\s+/),w=b.length===1?b[0].toUpperCase().slice(0,6):b.filter(g=>g.length>2).map(g=>g[0].toUpperCase()).join("")||b[0].toUpperCase().slice(0,4);p.value=w}m==null||m.addEventListener("input",s),(L=document.getElementById("auto-encode-btn"))==null||L.addEventListener("click",()=>{p&&(p.value=""),s()}),(o=document.getElementById("m-save"))==null||o.addEventListener("click",()=>yn(e,c,t,n));const f=document.getElementById("m-gen-squad"),u=document.getElementById("m-gen-strong-label");function r(){if(u&&(u.style.display=f!=null&&f.checked?"flex":"none",!(f!=null&&f.checked))){const b=document.getElementById("m-gen-strong");b&&(b.checked=!1)}}f==null||f.addEventListener("change",r),r(),(v=document.getElementById("btn-gen-squad-panel"))==null||v.addEventListener("click",()=>{pn(e,n,t)}),(E=document.getElementById("btn-gen-one-player"))==null||E.addEventListener("click",()=>{mn(e,n)}),c&&Ce(e.id)}async function Ce(e){const{data:t}=await $.from("players").select("*, clubs(encoded_name, logo_url, kit_style, kit_color1, kit_color2, kit_color3, kit_shorts, kit_socks)").eq("club_id",e).order("surname_real"),n=document.getElementById("club-players-grid"),i=document.getElementById("club-players-count");if(i&&(i.textContent=(t||[]).length),!!n){if(!(t!=null&&t.length)){n.innerHTML='<div style="color:var(--tile-fg-dim);padding:20px;font-size:13px">Aucun joueur dans ce club.</div>';return}n.innerHTML=t.map(c=>oe(c,{width:100})).join("")}}function pn(e,t,n){const{openModal:i,closeModal:c,toast:l}=t;i(`⚽ Générer — ${e.real_name}`,`<div style="display:flex;flex-direction:column;gap:14px">
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
    </div>`),setTimeout(()=>{var y,x;(y=document.getElementById("qg-cancel"))==null||y.addEventListener("click",()=>c()),(x=document.getElementById("qg-ok"))==null||x.addEventListener("click",async()=>{var a;const _=((a=document.getElementById("qg-strong"))==null?void 0:a.checked)??!1;c(),l("Génération en cours…","info"),await gt(e.id,e.country_code,l,_),l("Effectif généré ✅","success"),Ce(e.id),ve(n,t)})},50)}const yt=["GK","DEF","MIL","ATT"],un=[{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}];function mn(e,t){const{openModal:n,closeModal:i,toast:c}=t,l=Ae.map(a=>`<option value="${a}">${a}</option>`).join(""),y=a=>yt.map(m=>`<option value="${m}" ${m===a?"selected":""}>${m}</option>`).join(""),x=`
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
              ${un.map(a=>`<option value="${a.value}">${a.label}</option>`).join("")}
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
  `),setTimeout(()=>{var a,m;document.querySelectorAll('input[name="gen-one-mode"]').forEach(p=>{p.addEventListener("change",()=>{document.getElementById("gen-one-custom-fields").style.display=p.value==="custom"&&p.checked?"flex":"none"})}),(a=document.getElementById("gen-one-cancel"))==null||a.addEventListener("click",()=>i()),(m=document.getElementById("gen-one-ok"))==null||m.addEventListener("click",async()=>{var u,r,h,d,k;const p=((u=document.querySelector('input[name="gen-one-mode"]:checked'))==null?void 0:u.value)||"random",s=document.getElementById("gen-one-ok");s.disabled=!0,s.textContent="⏳ Génération…";const f={};p==="custom"&&(f.job=((r=document.getElementById("gen-one-job1"))==null?void 0:r.value)||null,f.job2=((h=document.getElementById("gen-one-job2"))==null?void 0:h.value)||null,f.rarity=((d=document.getElementById("gen-one-rarity"))==null?void 0:d.value)||null,f.country=((k=document.getElementById("gen-one-country"))==null?void 0:k.value)||null);try{await gn(e,f),c("Joueur généré ✅","success"),i(),Ce(e.id)}catch(L){c("Erreur : "+L.message,"error"),s.disabled=!1,s.textContent="➕ Générer"}})},50)}async function gn(e,t={}){const n=t.country||(Math.random()<.5?e.country_code:dt(e.country_code)),i=t.job||X(yt),c=t.job2||null,l=t.rarity||(()=>{const B=Math.random()*100;return B<1.5?"legende":B<3?"pepite":B<4.5?"papyte":"normal"})(),y=l==="pepite"?te(10,15):l==="papyte"?te(15,20):ct(),x=c?Math.max(0,y-2):0;let _=0,a=0,m=0,p=0;i==="GK"&&(_=y),i==="DEF"&&(a=y),i==="MIL"&&(m=y),i==="ATT"&&(p=y),c==="GK"&&(_=x),c==="DEF"&&(a=x),c==="MIL"&&(m=x),c==="ATT"&&(p=x);const s=Se(n),f=st(n),u=X(lt),{data:r}=await $.from("players").select("surname_real").not("surname_real","is",null),h=new Set((r||[]).map(B=>B.surname_real).filter(Boolean)),d=mt(n),k=d.filter(B=>!h.has(B)),L=X(k.length?k:d),o={job:i,job2:c,firstname:ut(n),surname_real:L,country_code:n,club_id:e.id,note_g:_,note_d:a,note_m:m,note_a:p,skin:s,hair:f,hair_length:u,rarity:l,sell_price:0,ethnie:_e(n)},{data:v}=await $.from("players").select("face").not("face","is",null),E=new Set((v||[]).map(B=>B.face).filter(Boolean)),b=await Le(n,E);b&&(o.face=b);const{data:w,error:g}=await $.from("players").insert(o).select("id").single();if(g)throw g;const{error:I}=await $.from("cards").insert({card_type:"player",player_id:w.id});I&&console.warn("[GenOnePlayer] Erreur carte:",I.message)}function bt(){var e,t,n,i,c,l;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((t=document.getElementById("m-kit-color1"))==null?void 0:t.value)||"#1A6B3C",color2:((n=document.getElementById("m-kit-color2"))==null?void 0:n.value)||"#ffffff",color3:((i=document.getElementById("m-kit-color3"))==null?void 0:i.value)||"#000000",shorts:((c=document.getElementById("m-kit-shorts"))==null?void 0:c.value)||"#111111",socks:((l=document.getElementById("m-kit-socks"))==null?void 0:l.value)||"#ffffff"}}function ae(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=St(bt(),"panel"))}async function fn(e,t){const n=(e.name.split(".").pop()||"png").toLowerCase(),i=`clubs/${t||"new"}-${Date.now()}.${n}`,{error:c}=await $.storage.from("assets").upload(i,e,{upsert:!0,cacheControl:"3600"});if(c)throw c;const{data:l}=$.storage.from("assets").getPublicUrl(i);return l.publicUrl}async function yn(e,t,n,i){var L,o,v,E,b,w,g,I,B;const{toast:c}=i,l=document.getElementById("m-error"),y=document.getElementById("m-save"),x=(L=document.getElementById("m-real"))==null?void 0:L.value.trim(),_=(o=document.getElementById("m-encoded"))==null?void 0:o.value.trim().toUpperCase(),a=(v=document.getElementById("m-country"))==null?void 0:v.value.trim().toUpperCase(),m=((b=(E=document.getElementById("m-logo-file"))==null?void 0:E.files)==null?void 0:b[0])||null,p=((w=document.getElementById("m-logo-url-current"))==null?void 0:w.value)||null,s=((g=document.getElementById("m-gen-stadium"))==null?void 0:g.checked)??!1,f=((I=document.getElementById("m-gen-squad"))==null?void 0:I.checked)??!1,u=((B=document.getElementById("m-gen-strong"))==null?void 0:B.checked)??!1,r=bt();if(!x){l.textContent="Le nom du club est requis.";return}if(!_){l.textContent="Le nom encodé est requis.";return}if(!a){l.textContent="Le pays est requis.";return}y.disabled=!0,y.textContent="Enregistrement…";let h=p;if(m)try{y.textContent="📤 Envoi du logo…",h=await fn(m,e==null?void 0:e.id)}catch(S){l.textContent="Erreur upload logo : "+S.message,y.disabled=!1,y.textContent=t?"💾 Enregistrer":"✅ Créer le club";return}const d={real_name:x,encoded_name:_,country_code:a,logo_url:h,kit_style:r.style,kit_color1:r.color1,kit_color2:r.color2,kit_color3:r.color3,kit_shorts:r.shorts,kit_socks:r.socks};let k=e==null?void 0:e.id;if(t){const{error:S}=await $.from("clubs").update(d).eq("id",k);if(S){l.textContent=S.message,y.disabled=!1,y.textContent="💾 Enregistrer";return}}else{const{data:S,error:C}=await $.from("clubs").insert(d).select().single();if(C){l.textContent=C.message,y.disabled=!1,y.textContent="✅ Créer le club";return}if(k=S.id,s){y.textContent="🏟️ Création du stade…";const{data:D,error:j}=await $.from("stadium_definitions").insert({name:`Stade de ${x}`,club_id:k,country_code:null}).select().single();j?console.warn("[Stadium] Erreur def stade:",j.message):D&&await $.from("cards").insert({card_type:"stadium",stadium_id:D.id})}f&&(y.textContent="⚽ Génération des joueurs…",await gt(k,a,c,u))}c(t?"Club modifié ✅":"Club créé ✅","success"),ve(n,i)}const bn=["normal","pepite","papyte","legende"],Ue=["GK","DEF","MIL","ATT"],vn=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let ee={...q},pe=[];async function xn(e,{toast:t}){const{data:n}=await $.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");pe=n||[],ee={...q},e.innerHTML=wn(pe),En(e,pe,t),K()}function He(){var n;const e=((n=document.getElementById("cb-surname-real"))==null?void 0:n.value)||"",t=document.getElementById("cb-surname-enc");t&&(t.value=be(e))}function hn(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=pe.find(i=>String(i.id)===String(e));return t?{style:t.kit_style||F.style,color1:t.kit_color1||F.color1,color2:t.kit_color2||F.color2,shorts:t.kit_shorts||F.shorts,socks:t.kit_socks||F.socks}:{...F}}function K(){var s,f,u,r;const e=h=>{var d;return((d=document.getElementById(h))==null?void 0:d.value)||""},t={firstname:e("cb-firstname"),surname_real:e("cb-surname-enc")||be(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((f=(s=document.getElementById("cb-club"))==null?void 0:s.selectedOptions[0])==null?void 0:f.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=hn(),i=document.getElementById("cb-club"),c=((r=(u=i==null?void 0:i.selectedOptions[0])==null?void 0:u.dataset)==null?void 0:r.logo)||null,l=at(ee,n,120),y=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(l)}`,x=Mt(t,{portraitUrl:y,clubLogoUrl:c,showNotes:!0}),_=document.getElementById("card-preview");_&&(_.innerHTML=x);const a=document.getElementById("avatar-preview-wrap");a&&(a.innerHTML=l);const m=e("cb-surname-real"),p=document.getElementById("encode-summary");p&&m&&(p.textContent=`${e("cb-firstname")} ${m} → ${e("cb-firstname")} ${t.surname_real}`)}function vt(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};ee={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function En(e,t,n){var c,l,y,x,_;e.querySelectorAll("input,select").forEach(a=>{a.addEventListener("input",K),a.addEventListener("change",K)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(a=>{var m;(m=document.getElementById(a))==null||m.addEventListener("change",()=>{vt(),K()})}),(c=document.getElementById("cb-surname-real"))==null||c.addEventListener("input",()=>{He(),K()}),(l=document.getElementById("btn-encode"))==null||l.addEventListener("click",()=>{He(),K()}),(y=document.getElementById("cb-club"))==null||y.addEventListener("change",K),(x=document.getElementById("btn-save-player"))==null||x.addEventListener("click",()=>_n(n)),(_=document.getElementById("btn-reset"))==null||_.addEventListener("click",()=>{e.querySelectorAll("input").forEach(a=>a.value=""),e.querySelectorAll("select").forEach(a=>a.selectedIndex=0),ee={...q},i.forEach(a=>{const m=a.replace("av-",""),p=document.getElementById(a);p&&(p.value=q[m]||"")}),K()})}async function _n(e){const t=y=>{var x;return((x=document.getElementById(y))==null?void 0:x.value)||""},n=t("cb-surname-real").trim(),i=t("cb-surname-enc").trim()||be(n);if(!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}vt();const c={firstname:t("cb-firstname").trim(),surname_real:n,surname_real:i,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:ee,skin:ee.skin||"blanc",hair:ee.hairColor||"marron",hair_length:"court"},{error:l}=await $.from("players").insert(c);if(l){e("Erreur: "+l.message,"error");return}e(`✅ Joueur "${c.firstname} ${c.surname_real}" enregistré !`,"success")}function wn(e){const t=vn.map(([a,m])=>`<option value="${a}">${m} (${a})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(a=>`<option value="${a.id}" data-logo="${a.logo_url||""}">${a.encoded_name}</option>`).join(""),i=Ue.map(a=>`<option value="${a}">${a}</option>`).join(""),c='<option value="">Aucun</option>'+Ue.map(a=>`<option value="${a}">${a}</option>`).join(""),l=bn.map(a=>`<option value="${a}">${a.charAt(0).toUpperCase()+a.slice(1)}</option>`).join(""),y=(a,m,p)=>Object.entries(m).map(([s,f])=>`<option value="${s}" ${s===(p||"")?"selected":""}>${f.label}</option>`).join(""),x=Object.keys(Ct).map(a=>`<option value="${a}" ${a===q.skin?"selected":""}>${a.charAt(0).toUpperCase()+a.slice(1)}</option>`).join(""),_=Object.keys(Tt).map(a=>`<option value="${a}" ${a===q.hairColor?"selected":""}>${a.charAt(0).toUpperCase()+a.slice(1)}</option>`).join("");return`
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
            <div style="background:${zt[a]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
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
              <select id="av-hair">${y("av-hair",Rt,q.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${_}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${y("av-eyebrows",jt,q.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${y("av-eyes",Dt,q.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${y("av-nose",Nt,q.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${y("av-mouth",Pt,q.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${y("av-beard",Ft,q.beard)}</select>
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
  `}const $n=2*60*1e3;function ne(e){return e.last_seen?Date.now()-new Date(e.last_seen).getTime()<$n:!1}async function we(e,{toast:t}){const[{data:n,error:i},{data:c},{data:l}]=await Promise.all([$.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws,last_seen").order("created_at",{ascending:!1}),$.from("user_solo_progress").select("user_id, unlocked_level"),$.rpc("admin_get_user_emails")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const y={};(c||[]).forEach(u=>{y[u.user_id]=u.unlocked_level});const x={};(l||[]).forEach(u=>{x[u.id]=u.email});const _=n||[];e.innerHTML=`
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
  `;function a(u){const r=document.getElementById("online-count");r&&(r.textContent=u.filter(ne).length)}function m(){const u=document.getElementById("search-users").value.toLowerCase(),r=document.getElementById("filter-online").checked;f(_.filter(h=>{var d;return(h.pseudo.toLowerCase().includes(u)||((d=h.club_name)==null?void 0:d.toLowerCase().includes(u)))&&(!r||ne(h))}))}f(_),a(_),document.getElementById("search-users").addEventListener("input",m),document.getElementById("filter-online").addEventListener("change",m);const p=setInterval(async()=>{const{data:u}=await $.from("users").select("id,last_seen");if(!u)return;const r={};u.forEach(h=>{r[h.id]=h.last_seen}),_.forEach(h=>{h.last_seen=r[h.id]??h.last_seen}),a(_),document.querySelectorAll("[data-online-dot]").forEach(h=>{const d=_.find(k=>k.id===h.dataset.onlineDot);d&&(h.style.background=ne(d)?"#22c55e":"transparent")})},2e4),s=new MutationObserver(()=>{document.body.contains(e)||(clearInterval(p),s.disconnect())});s.observe(document.body,{childList:!0,subtree:!0});function f(u){document.getElementById("users-tbody").innerHTML=u.map(r=>{const h=r.mmr??1e3,d=r.mmr_deviation??350,k=r.placement_matches??0,L=Ot(h),o=r.ranked_wins??0,v=r.ranked_losses??0,E=r.ranked_draws??0,b=o+v+E,w=b>0?Math.round(o/b*100):null,g=k<10,I=d<80?"#1A6B3C":d<150?"#e67e22":"#bb2020";return`
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
            <div style="color:var(--gray-600)">🎮 Solo max : niv. ${y[r.id]??1}</div>
          </td>
          <td style="font-size:12px">${r.wins}V / ${r.draws}N / ${r.losses}D</td>
          <td style="font-size:12px">🥇${r.trophies_top1} 🥈${r.trophies_top2} 🥉${r.trophies_top3}</td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:5px">
              <span style="font-size:16px">${L.emoji}</span>
              <span style="font-weight:700;color:${L.color}">${L.label}</span>
            </div>
            ${g?`<div style="font-size:10px;color:#e67e22">${k}/10 placement${k<10?` (${10-k} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${o}V ${E}N ${v}D${w!==null?` · ${w}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${h}</div>
            <div style="font-size:10px;color:${I}">RD ±${Math.round(d)}</div>
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
        </tr>`}).join(""),document.querySelectorAll(".btn-edit-credits").forEach(r=>{r.addEventListener("click",async()=>{const h=r.dataset.user,d=Number(r.dataset.current)||0,k=prompt("Nouveau solde de crédits :",d);if(k===null)return;const L=parseInt(k.replace(/\s/g,""),10);if(isNaN(L)||L<0){t("Valeur invalide","error");return}const{data:o,error:v}=await $.rpc("admin_update_user_credits",{p_user_id:h,p_new_credits:L});if(v){t(v.message,"error");return}if(!(o!=null&&o.success)){t((o==null?void 0:o.error)||"Échec de la mise à jour","error");return}t("Crédits mis à jour ✅","success");const E=document.getElementById(`credits-display-${h}`);E&&(E.textContent=`${L.toLocaleString("fr")} cr.`),r.dataset.current=L})}),document.querySelectorAll("[data-toggle-admin]").forEach(r=>{r.addEventListener("click",async()=>{const h=r.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${h?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:d}=await $.from("users").update({is_admin:h}).eq("id",r.dataset.toggleAdmin);d?t(d.message,"error"):(t("Rôle mis à jour ✅","success"),we(e,{toast:t}))})}),document.querySelectorAll("[data-view-cards]").forEach(r=>{r.addEventListener("click",()=>{Bn(r.dataset.viewCards,r.dataset.pseudo)})}),document.querySelectorAll("[data-delete-manager]").forEach(r=>{r.addEventListener("click",async()=>{const h=r.dataset.deleteManager,d=r.dataset.pseudo;if(!confirm(`⚠️ ATTENTION: Supprimer le Manager "${d}" supprimera DÉFINITIVEMENT:
- Tous ses decks
- Toutes ses cartes
- Tous ses matchs
- Tous ses résultats ranked
- Tout ce qui le lie en base

Continuer ?`)||!confirm("Êtes-vous vraiment sûr ? Cette action est IRRÉVERSIBLE."))return;r.disabled=!0,r.textContent="⏳";const{data:k,error:L}=await $.rpc("delete_manager_cascade",{p_user_id:h});if(L){t(`Erreur: ${L.message}`,"error"),r.disabled=!1,r.textContent="🗑️";return}if(!(k!=null&&k.success)){t(`Erreur: ${(k==null?void 0:k.error)||"Suppression échouée"}`,"error"),r.disabled=!1,r.textContent="🗑️";return}t(`Manager "${d}" supprimé et ${Object.values(k.deleted).reduce((o,v)=>o+v)} entrées supprimées ✅`,"success"),we(e,{toast:t})})})}}const Ge=[{key:"player",label:"⚽ Joueurs"},{key:"formation",label:"📋 Formations"},{key:"stadium",label:"🏟️ Stades"},{key:"game_changer",label:"⚡ Game Changers"},{key:"decks",label:"👥 Équipes"},{key:"boosters",label:"🎁 Boosters"}];function In(e){const t={GK:[],DEF:[],MIL:[],ATT:[]};return(e||[]).filter(n=>n.is_starter).forEach(n=>{const i=/^(GK|DEF|MIL|ATT)(\d+)$/.exec(n.position||"");if(!i)return;const c=i[1],l=parseInt(i[2],10)-1;t[c][l]=xt(n)}),t}function xt(e){const t=e.evolution_bonus||0,n=e.job2,i=n&&Number(e[`note_${n.toLowerCase()}`])||0,c=(l,y)=>(Number(y)||0)+(e.job===l?t:0)+(n===l&&i>0?t:0);return{cardId:e.card_id,firstname:e.firstname,name:e.surname_real,surname_real:e.surname_real,country_code:e.country_code,club_id:e.club_id,job:e.job,job2:e.job2,note_g:c("GK",e.note_g),note_d:c("DEF",e.note_d),note_m:c("MIL",e.note_m),note_a:c("ATT",e.note_a),evolution_bonus:t,rarity:e.rarity,face:e.face||null,clubName:e.club_encoded_name||null,clubLogo:e.club_logo_url||null,boost:0,used:!1}}function kn(e){return e!=null&&e.image_url?`/icons/${e.image_url}`:null}function Ln(e){var t;return e!=null&&e.image_url?`/icons/${e.image_url}`:(t=e==null?void 0:e.club)!=null&&t.logo_url?e.club.logo_url:e!=null&&e.country_code?`https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null}function re(e){return e?`<div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-start">${e}</div>`:'<div style="padding:30px;text-align:center;color:#999;font-size:13px">Aucune carte dans cette catégorie.</div>'}async function Bn(e,t,n){const i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="3000",i.innerHTML=`<div class="modal admin-light-card" style="max-width:1100px;width:96%">
    <div class="modal-header"><h2>🃏 Collection de ${t}</h2><button class="btn-icon" id="mc-close">✕</button></div>
    <div class="modal-body" id="mc-body" style="padding:16px">
      <div style="text-align:center;color:#999;padding:30px">⏳ Chargement de la collection…</div>
    </div>
  </div>`,document.body.appendChild(i);const c=()=>i.remove();i.querySelector("#mc-close").addEventListener("click",c),i.addEventListener("click",o=>{o.target===i&&c()});const{data:l,error:y}=await $.rpc("admin_get_manager_collection",{p_user_id:e}),x=i.querySelector("#mc-body");if(!x)return;if(y||!(l!=null&&l.success)){x.innerHTML=`<div style="padding:20px;color:#bb2020">Erreur : ${(y==null?void 0:y.message)||(l==null?void 0:l.error)||"chargement impossible"}</div>`;return}const _=l.cards||[],a=l.decks||[],m={player:_.filter(o=>o.card_type==="player"&&o.player),formation:_.filter(o=>o.card_type==="formation"),stadium:_.filter(o=>o.card_type==="stadium"),game_changer:_.filter(o=>o.card_type==="game_changer")},p={player:m.player.length,formation:m.formation.length,stadium:m.stadium.length,game_changer:m.game_changer.length,decks:a.length},s={};s.player=re(m.player.map(o=>{const v={...o.player,_evolution_bonus:o.evolution_bonus||0};return`<div style="position:relative">${o.is_for_sale?'<div style="position:absolute;top:4px;right:4px;background:#D4A017;color:#111;font-size:9px;font-weight:800;padding:2px 6px;border-radius:8px;z-index:3">EN VENTE</div>':""}${oe(v,{width:110})}</div>`}).join("")),s.formation=re(m.formation.map(o=>`<div style="position:relative">${qt(o.formation,se[o.formation],{width:120})}</div>`).join("")),s.stadium=re(m.stadium.map(o=>{var b;const v=o.stadium_def,E=((b=v==null?void 0:v.club)==null?void 0:b.encoded_name)||(v==null?void 0:v.country_code)||"—";return`<div style="position:relative">${Be((v==null?void 0:v.name)||"?",Ln(v),`${E}<br>+10 ⭐ joueurs alliés`,{width:120})}</div>`}).join("")),s.game_changer=re(m.game_changer.map(o=>{const v=o.gc_def;return`<div style="position:relative">${ue((v==null?void 0:v.name)||o.gc_type||"Game Changer",kn(v),"⚡",(v==null?void 0:v.effect)||"",{width:120})}</div>`}).join(""));function f(o){var C,D;const v=o.cards||[],E=v.filter(j=>!j.is_starter),b=In(v),w=o.stadium||null;w&&Ut(b,w);const g=["GK","DEF","MIL","ATT"].reduce((j,O)=>j+b[O].filter(Boolean).length,0),I=w?`
      <div style="display:flex;align-items:center;gap:10px;background:#eaf3fb;border:1px solid #c9def0;border-radius:10px;padding:8px 12px;margin-bottom:10px">
        ${(C=w.club)!=null&&C.logo_url?`<img src="${w.club.logo_url}" style="width:26px;height:26px;object-fit:contain">`:'<span style="font-size:20px">🏟️</span>'}
        <div style="font-weight:800;font-size:13px;color:#1a1a1a">${w.name||"Stade"}</div>
        <div style="margin-left:auto;font-size:12px;color:#1A6B3C;font-weight:700">
          +10 aux joueurs ${((D=w.club)==null?void 0:D.encoded_name)||w.country_code||""}
        </div>
      </div>`:"",B=o.formation&&se[o.formation]&&g?`<div style="max-width:560px;margin:0 auto;pointer-events:none">
           ${Ht(b,o.formation,null,[],340,375)}
         </div>`:`<div style="font-size:12px;color:#999;padding:20px;text-align:center">
           ${o.formation?se[o.formation]?"Aucun titulaire enregistré.":`Formation inconnue : ${o.formation}`:"Aucune formation définie pour ce deck."}
         </div>`,S=j=>`<div style="position:relative">${oe(xt(j),{width:74})}</div>`;return`
      ${I}
      ${B}
      ${E.length?`
        <div style="margin-top:12px">
          <div style="font-size:11px;color:#888;font-weight:700;margin-bottom:5px">REMPLAÇANTS (${E.length})</div>
          <div style="display:flex;flex-wrap:wrap;gap:8px">${E.map(S).join("")}</div>
        </div>`:""}
    `}s.decks=a.length?`<div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap">
         <label style="font-size:12px;font-weight:700;color:#555">Équipe :</label>
         <select id="mc-deck-select" style="padding:7px 10px;border-radius:8px;border:1px solid var(--gray-200,#ddd);background:#fff;color:#1a1a1a;font-size:13px;font-weight:600;min-width:240px">
           ${a.map((o,v)=>`<option value="${v}">${o.name||"Deck sans nom"} — ${o.formation||"?"}</option>`).join("")}
         </select>
         <span style="font-size:12px;color:#888">${a.length} équipe(s)</span>
       </div>
       <div id="mc-deck-pitch">${f(a[0])}</div>`:`<div style="padding:30px;text-align:center;color:#999;font-size:13px">Ce manager n'a créé aucune équipe.</div>`;const u=l.boosters||[],r=l.legacy_booster_cards||0,h={legende:"Légende",pepite:"Pépite",papyte:"Papyte",normal:"Normal"},d={legende:"#7a28b8",pepite:"#D4A017",papyte:"#909090",normal:"#888"},k=u.reduce((o,v)=>o+(v.nb_cards||0),0);s.boosters=`
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px">
      <div style="flex:1;min-width:150px;background:#f4f8f5;border:1px solid #d6e8dc;border-radius:12px;padding:12px 14px">
        <div style="font-size:11px;color:#666">Boosters ouverts</div>
        <div style="font-size:22px;font-weight:900;color:#1A6B3C">${u.length}</div>
      </div>
      <div style="flex:1;min-width:150px;background:#fdf8ec;border:1px solid #efe0bb;border-radius:12px;padding:12px 14px">
        <div style="font-size:11px;color:#666">Cartes obtenues</div>
        <div style="font-size:22px;font-weight:900;color:#D4A017">${k}</div>
      </div>
      <div style="flex:1;min-width:150px;background:#f7f7f7;border:1px solid #e0e0e0;border-radius:12px;padding:12px 14px">
        <div style="font-size:11px;color:#666">Cartes booster (historique)</div>
        <div style="font-size:22px;font-weight:900;color:#555">${r}</div>
      </div>
    </div>
    ${u.length?`
      <div style="display:flex;flex-direction:column;gap:8px">
        ${u.map(o=>{const v=o.opened_at?new Date(o.opened_at).toLocaleString("fr"):"—",E=(o.cards||[]).map(b=>{const w=d[b.rarity]||"#888",g=b.rarity?` · <span style="color:${w};font-weight:700">${h[b.rarity]||b.rarity}</span>`:"",I=b.is_duplicate?' <span style="color:#aaa">(doublon)</span>':"";return`<div style="font-size:12px;color:#333;padding:3px 0;border-bottom:1px dashed #eee">
              ${b.name||b.card_type||"?"}${g}${b.note!=null?` · note ${b.note}`:""}${I}
            </div>`}).join("");return`<details style="border:1px solid var(--gray-200,#e0e0e0);border-radius:10px;padding:10px 12px;background:#fafafa">
            <summary style="cursor:pointer;font-size:13px;font-weight:700;color:#1a1a1a">
              ${o.booster_name||"Booster"} <span style="font-weight:400;color:#777">· ${o.nb_cards||0} carte(s) · ${v}</span>
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
      ${Ge.map((o,v)=>`
        <button class="mc-tab" data-tab="${o.key}" style="
          border:1px solid ${v===0?"#1A6B3C":"var(--gray-200,#ddd)"};
          background:${v===0?"#1A6B3C":"#fff"};
          color:${v===0?"#fff":"#444"};
          padding:7px 13px;border-radius:999px;font-size:12.5px;font-weight:700;cursor:pointer">
          ${o.label} (${p[o.key]})
        </button>`).join("")}
    </div>
    ${Ge.map((o,v)=>`
      <div class="mc-pane" data-pane="${o.key}" style="display:${v===0?"block":"none"}">${s[o.key]}</div>
    `).join("")}
  `;const L=x.querySelector("#mc-deck-select");L&&L.addEventListener("change",()=>{const o=x.querySelector("#mc-deck-pitch");o&&(o.innerHTML=f(a[Number(L.value)]))}),x.querySelectorAll(".mc-tab").forEach(o=>{o.addEventListener("click",()=>{x.querySelectorAll(".mc-tab").forEach(v=>{const E=v===o;v.style.background=E?"#1A6B3C":"#fff",v.style.color=E?"#fff":"#444",v.style.borderColor=E?"#1A6B3C":"var(--gray-200,#ddd)"}),x.querySelectorAll(".mc-pane").forEach(v=>{v.style.display=v.dataset.pane===o.dataset.tab?"block":"none"})})})}const An=[{value:"normal",label:"Normal",color:"#ccc"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function ht(e,t){var _;const{toast:n}=t,{data:i,error:c}=await $.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_real, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(c){e.innerHTML=`<p style="color:var(--danger)">${c.message}</p>`;return}const l=i||[],y=l.filter(a=>a.status==="active").length,x=l.filter(a=>a.status==="sold").length;e.innerHTML=`
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
            ${l.map(a=>{var f,u,r,h;const m=(f=a.card)==null?void 0:f.player,p=m?`${m.firstname} ${m.surname_real}`:((u=a.card)==null?void 0:u.card_type)||"—",s={active:"#1A6B3C",sold:"#D4A017",cancelled:"#888"};return`<tr>
                <td><b>${p}</b>${m?`<div style="font-size:10px;color:var(--tile-fg-dim)">${m.rarity} · ${m.job}</div>`:""}</td>
                <td style="font-size:12px">${((r=a.seller)==null?void 0:r.pseudo)||"—"}</td>
                <td style="font-size:12px">${((h=a.buyer)==null?void 0:h.pseudo)||"—"}</td>
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
  `,document.querySelectorAll("[data-cancel]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:m}=await $.from("market_listings").update({status:"cancelled"}).eq("id",a.dataset.cancel);m?n(m.message,"error"):(n("Annonce annulée","success"),ht(e,t))})}),(_=document.getElementById("btn-price-grid"))==null||_.addEventListener("click",()=>Sn(t))}async function Sn(e){await $e(e)}function Cn(){const e=document.getElementById("modal-overlay");if(!e||e._pgBlocker)return;const t=n=>{n.target===n.currentTarget&&n.stopImmediatePropagation()};e.addEventListener("click",t,!0),e._pgBlocker=t}function he(){const e=document.getElementById("modal-overlay");e!=null&&e._pgBlocker&&(e.removeEventListener("click",e._pgBlocker,!0),delete e._pgBlocker)}async function $e(e){var f,u;const{openModal:t,closeModal:n,toast:i}=e,{data:c,error:l}=await $.from("sell_price_configs").select("*").order("rarity").order("note_min");if(l){i(l.message,"error");return}const y=r=>An.map(h=>`<option value="${h.value}" ${h.value===r?"selected":""}>${h.label}</option>`).join(""),x=r=>`
    <tr data-row="${r.id}">
      <td style="padding:4px 8px">
        <select data-field="rarity" data-id="${r.id}" style="width:100%;padding:6px;font-size:13px">${y(r.rarity)}</select>
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
          ${(c||[]).map(x).join("")||'<tr><td colspan="6" style="text-align:center;color:#aaa;padding:20px">Aucune règle définie.</td></tr>'}
        </tbody>
      </table>
    </div>
  `;t("📊 Grille des prix — vente marché",_,`
    <button id="pg-add-row" class="btn btn-primary">+ Ajouter une ligne</button>
    <button id="pg-close" class="btn btn-ghost">Fermer</button>
  `),Cn(),(f=document.getElementById("pg-close"))==null||f.addEventListener("click",()=>{he(),n()});function m(r){const h=r.dataset.id,d=r.dataset.field,k=d==="rarity"?r.value:Number(r.value)||0;return p(h,{[d]:k},r)}async function p(r,h,d){const k=document.querySelector(`tr[data-row="${r}"]`),L=g=>k.querySelector(`[data-field="${g}"]`),o="note_min"in h?h.note_min:Number(L("note_min").value),v="note_max"in h?h.note_max:Number(L("note_max").value),E="price_min"in h?h.price_min:Number(L("price_min").value),b="price_max"in h?h.price_max:Number(L("price_max").value);if(o>v){i("Note min doit être ≤ note max","error");return}if(E>b){i("Prix min doit être ≤ prix max","error");return}const{error:w}=await $.from("sell_price_configs").update(h).eq("id",r);if(w){i(w.message,"error");return}d&&(d.style.transition="background .3s",d.style.background="#e8f8ee",setTimeout(()=>{d.style.background=""},500))}function s(){document.querySelectorAll("#pg-tbody [data-field]").forEach(r=>{r.addEventListener("change",()=>m(r))})}s(),document.querySelectorAll("[data-del-row]").forEach(r=>{r.addEventListener("click",async()=>{confirm("Supprimer cette ligne ?")&&(await $.from("sell_price_configs").delete().eq("id",r.dataset.delRow),i("Ligne supprimée","success"),he(),$e(e))})}),(u=document.getElementById("pg-add-row"))==null||u.addEventListener("click",async()=>{var L;const r={rarity:"normal",note_min:0,note_max:20,price_min:2500,price_max:15e3},{data:h,error:d}=await $.from("sell_price_configs").insert(r).select().single();if(d){i(d.message,"error");return}const k=document.getElementById("pg-tbody");k.querySelector("td[colspan]")&&(k.innerHTML=""),k.insertAdjacentHTML("beforeend",x(h)),s(),(L=document.querySelector(`[data-del-row="${h.id}"]`))==null||L.addEventListener("click",async function(){confirm("Supprimer cette ligne ?")&&(await $.from("sell_price_configs").delete().eq("id",h.id),i("Ligne supprimée","success"),he(),$e(e))}),i("Ligne ajoutée — modifie les valeurs directement","success")})}async function Tn(e,{toast:t}){e.innerHTML=`
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
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:n,error:i}=await $.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun club à exporter","info");return}let c=`real_name,encoded_name,country_code,logo_url
`;n.forEach(l=>{c+=[l.real_name,l.encoded_name,l.country_code,l.logo_url||""].map(Ke).join(",")+`
`}),le("clubs_export.csv",c),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:i}=await $.from("players").select("firstname,surname_real,surname_real,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_real");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let c=`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(l=>{var y;c+=[l.firstname,l.surname_real,l.surname_real,l.country_code,((y=l.clubs)==null?void 0:y.encoded_name)||"",l.job,l.job2||"",l.note_g,l.note_d,l.note_m,l.note_a,l.rarity,l.note_min??"",l.note_max??"",l.skin,l.hair,l.hair_length,l.sell_price].map(Ke).join(",")+`
`}),le("players_export.csv",c),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const c=document.getElementById("clubs-import-result");c.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const l=await i.text(),y=Ve(l);if(y.length===0){c.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let x=0,_=0;const a=[];for(const m of y){if(!m.real_name||!m.encoded_name||!m.country_code){_++,a.push(`Ligne ignorée (champs manquants): ${m.real_name||"?"}`);continue}const p={real_name:m.real_name,encoded_name:m.encoded_name.toUpperCase(),country_code:m.country_code.toUpperCase().slice(0,2),logo_url:m.logo_url||null},{error:s}=await $.from("clubs").upsert(p,{onConflict:"encoded_name"});s?(_++,a.push(`${m.encoded_name}: ${s.message}`)):x++}c.innerHTML=`<div style="color:var(--green)">✅ ${x} clubs importés</div>
        ${_>0?`<div style="color:#c0392b">❌ ${_} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${a.slice(0,10).join("<br>")}</div>`:""}`,t(`${x} clubs importés`,"success")}catch(l){c.innerHTML=`<span style="color:#c0392b">Erreur : ${l.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const c=document.getElementById("players-import-result");c.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const l=await i.text(),y=Ve(l);if(y.length===0){c.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:x}=await $.from("clubs").select("id,encoded_name"),_={};(x||[]).forEach(d=>{_[d.encoded_name.toUpperCase()]=d.id});let a=0,m=0;const p=[],s=["GK","DEF","MIL","ATT"],f=["normal","pepite","papyte","legende"],u=["blanc","metisse","typ","noir"],r=["blond","marron","noir","chauve"],h=["rase","court","milong","long"];for(const d of y){if(!d.firstname||!d.surname_real||!d.country_code||!d.job){m++,p.push(`Ligne ignorée (champs requis manquants): ${d.firstname||"?"}`);continue}if(!s.includes(d.job)){m++,p.push(`${d.firstname}: job invalide "${d.job}"`);continue}const k=d.club_encoded_name&&_[d.club_encoded_name.toUpperCase()]||null,L={firstname:d.firstname,surname_real:d.surname_real,surname_real:d.surname_real||be(d.surname_real),country_code:d.country_code.toUpperCase().slice(0,2),club_id:k,job:d.job,job2:s.includes(d.job2)?d.job2:null,note_g:parseInt(d.note_g)||0,note_d:parseInt(d.note_d)||0,note_m:parseInt(d.note_m)||0,note_a:parseInt(d.note_a)||0,rarity:f.includes(d.rarity)?d.rarity:"normal",note_min:d.note_min!==""&&d.note_min!=null?parseInt(d.note_min):null,note_max:d.note_max!==""&&d.note_max!=null?parseInt(d.note_max):null,skin:u.includes(d.skin)?d.skin:"blanc",hair:r.includes(d.hair)?d.hair:"noir",hair_length:h.includes(d.hair_length)?d.hair_length:"court",sell_price:parseInt(d.sell_price)||0},{error:o}=await $.from("players").insert(L);o?(m++,p.push(`${d.firstname} ${d.surname_real}: ${o.message}`)):a++}c.innerHTML=`<div style="color:var(--green)">✅ ${a} joueurs importés</div>
        ${m>0?`<div style="color:#c0392b">❌ ${m} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${p.slice(0,10).join("<br>")}</div>`:""}`,t(`${a} joueurs importés`,"success")}catch(l){c.innerHTML=`<span style="color:#c0392b">Erreur : ${l.message}</span>`}n.target.value=""})}function Ke(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function le(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(n),c=document.createElement("a");c.href=i,c.download=e,c.click(),URL.revokeObjectURL(i)}function Ve(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(y=>y.trim());if(t.length<2)return[];const n=t[0],i=n.split(";").length>n.split(",").length?";":",",c=Je(n,i).map(y=>y.trim().replace(/^\uFEFF/,"").toLowerCase()),l=[];for(let y=1;y<t.length;y++){if(!t[y].trim())continue;const x=Je(t[y],i),_={};c.forEach((a,m)=>{_[a]=(x[m]||"").trim()}),!Object.values(_).every(a=>!a)&&l.push(_)}return l}function Je(e,t=","){const n=[];let i="",c=!1;for(let l=0;l<e.length;l++){const y=e[l];c?y==='"'?e[l+1]==='"'?(i+='"',l++):c=!1:i+=y:y==='"'?c=!0:y===t?(n.push(i),i=""):i+=y}return n.push(i),n}const zn={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Mn(e,{toast:t}){const n=Object.keys(xe);let i=n[0];const{data:c}=await $.from("formation_links_overrides").select("formation, links"),l={};(c||[]).forEach(m=>{l[m.formation]=m.links});let y=new Set;function x(m,p){return[m,p].sort().join("-")}function _(m){const p=l[m]||xe[m]||[];y=new Set(p.map(([s,f])=>x(s,f)))}_(i),e.innerHTML=`
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
  `;function a(){const m=se[i]||{},p=Fe(i),s=320,f=400,u=22;function r(o){const v=m[o];return v?{x:v.x*s,y:v.y*f}:null}let h=`<svg width="${s}" height="${f}" viewBox="0 0 ${s} ${f}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;p.forEach(([o,v],E)=>{const b=r(o),w=r(v);if(!b||!w)return;const g=x(o,v),I=y.has(g),B=I?"#3b82f6":"#999",S=I?.95:.35,C=I?4:3;h+=`<line x1="${b.x}" y1="${b.y}" x2="${w.x}" y2="${w.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${g}" style="cursor:pointer"/>`,h+=`<line x1="${b.x}" y1="${b.y}" x2="${w.x}" y2="${w.y}"
        stroke="${B}" stroke-width="${C}" stroke-dasharray="${I?"none":"4,3"}"
        opacity="${S}" pointer-events="none" data-line-key="${g}"/>`});for(const o of Object.keys(m)){const v=r(o);if(!v)continue;const E=o.replace(/\d+/,""),b=zn[E]||"#555";h+=`<circle cx="${v.x}" cy="${v.y}" r="${u}" fill="${b}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,h+=`<text x="${v.x}" y="${v.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${o}</text>`}h+="</svg>",document.getElementById("field-wrap").innerHTML=h;const d=document.getElementById("links-list");d.innerHTML=p.map(([o,v])=>{const E=x(o,v),b=y.has(E);return`
        <button class="link-toggle" data-key="${E}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${b?"#3b82f6":"#ddd"};
          background:${b?"#eaf2ff":"#fafafa"};
          color:${b?"#1d4ed8":"#888"}">
          <span>${o} ↔ ${v}</span>
          <span>${b?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const k=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');k&&(k.textContent=`Liens (${y.size}/${p.length} actifs)`);function L(o){y.has(o)?y.delete(o):y.add(o),a()}e.querySelectorAll(".link-hit").forEach(o=>{o.addEventListener("click",()=>L(o.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(o=>{o.addEventListener("click",()=>L(o.dataset.key))})}a(),document.getElementById("formation-select").addEventListener("change",m=>{i=m.target.value,_(i),a()}),document.getElementById("reset-btn").addEventListener("click",()=>{const m=xe[i]||[];y=new Set(m.map(([p,s])=>x(p,s))),a(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const p=Fe(i).filter(([f,u])=>y.has(x(f,u))),{error:s}=await $.from("formation_links_overrides").upsert({formation:i,links:p,updated_at:new Date().toISOString()});if(s){t(s.message,"error");return}l[i]=p,t(`Liens enregistrés pour ${i} (${p.length} actifs)`,"success")})}const Rn=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],jn=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],Dn=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function Nn(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await $.from("booster_configs").select("*").order("sort_order");let n=null,i=[],c=null;const l=()=>window.innerWidth<700;async function y(){if(!n){i=[];return}if(n!==c){const{data:p}=await $.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");i=p||[],c=n}}function x(){return`
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
    </div>`}function _(){const p=n?(t||[]).find(u=>u.id===n):null;if(!p)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const s=i.reduce((u,r)=>u+Number(r.percentage||0),0),f=Math.abs(s-100)<.1;return`
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
              ${Dn.map(u=>`<option value="${u.value}" ${p.price_type===u.value?"selected":""}>${u.label}</option>`).join("")}
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
            <span style="margin-left:10px;font-size:12px;color:${f?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${s.toFixed(1)}% ${f?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((u,r)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${r}">
            <select class="rate-type" data-idx="${r}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Rn.map(h=>`<option value="${h.value}" ${u.card_type===h.value?"selected":""}>${h.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${r}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${jn.map(h=>`<option value="${h.value}" ${(u.rarity||"")===h.value?"selected":""}>${h.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${r}" type="number" min="0" max="100" value="${u.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${r}" type="number" min="0" max="100" value="${u.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${r}" type="number" min="0.1" max="100" step="0.1" value="${u.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${r}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function a(p=!1){p||await y();const s=!n&&l(),f=n&&l();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!l()||s||!n?x():""}
      ${!l()||f?_():""}
    </div>`,m()}function m(){var f,u,r,h,d,k,L;const p=o=>e.querySelector(o);e.querySelectorAll(".booster-row").forEach(o=>{o.addEventListener("click",v=>{v.target.closest(".btn-delete")||(n=o.dataset.id,c=null,a())})}),(f=p("#btn-back"))==null||f.addEventListener("click",()=>{n=null,a()}),(u=p("#btn-new"))==null||u.addEventListener("click",async()=>{const o=prompt("Nom du nouveau booster :");if(!(o!=null&&o.trim()))return;const{data:v,error:E}=await $.from("booster_configs").insert({name:o.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(E){alert(E.message);return}t.push(v),n=v.id,c=null,a()}),e.querySelectorAll(".btn-delete").forEach(o=>{o.addEventListener("click",async v=>{if(v.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await $.from("booster_configs").delete().eq("id",o.dataset.id);const E=t.findIndex(b=>b.id===o.dataset.id);E>-1&&t.splice(E,1),n===o.dataset.id&&(n=null,c=null),a()})}),(r=p("#btn-cancel"))==null||r.addEventListener("click",()=>{n=null,a()}),(h=p("#f-price-type"))==null||h.addEventListener("change",o=>{const v=p("#credits-field");v&&(v.style.opacity=o.target.value!=="credits"?"0.4":"1")}),(d=p("#btn-pick-icon"))==null||d.addEventListener("click",async()=>{var v;const o=p("#icon-picker-grid");if(o){if(o.style.display!=="none"){o.style.display="none";return}o.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',o.style.display="block";try{const b=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),w=Array.isArray(b)?b.filter(I=>I.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(I.name)):[];if(!w.length){o.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const g=((v=p("#f-image-url"))==null?void 0:v.value)||"";o.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${w.map(I=>`
          <div class="icon-pick-item" data-name="${I.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${I.name===g?"#1A6B3C":"#ddd"};background:${I.name===g?"#f0f7f0":"#fff"}">
            <img src="/icons/${I.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,o.querySelectorAll(".icon-pick-item").forEach(I=>{I.addEventListener("click",()=>{const B=p("#f-image-url");B&&(B.value=I.dataset.name),o.style.display="none"})})}catch(E){o.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${E.message}</div>`}}});function s(){e.querySelectorAll("[data-rate-idx]").forEach(o=>{var E,b,w,g,I;const v=Number(o.dataset.rateIdx);v>=0&&v<i.length&&(i[v].card_type=((E=o.querySelector(".rate-type"))==null?void 0:E.value)||"player",i[v].rarity=((b=o.querySelector(".rate-rarity"))==null?void 0:b.value)||null,i[v].note_min=Number((w=o.querySelector(".rate-note-min"))==null?void 0:w.value)||null,i[v].note_max=Number((g=o.querySelector(".rate-note-max"))==null?void 0:g.value)||null,i[v].percentage=Number((I=o.querySelector(".rate-pct"))==null?void 0:I.value)||0)})}(k=p("#btn-add-rate"))==null||k.addEventListener("click",()=>{s(),i.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),a(!0)}),e.querySelectorAll(".btn-del-rate").forEach(o=>{o.addEventListener("click",()=>{s(),i.splice(Number(o.dataset.idx),1),a(!0)})}),(L=p("#btn-save"))==null||L.addEventListener("click",async()=>{var g,I,B,S,C,D,j,O,U,H,A,M,T;const o=(t||[]).find(z=>z.id===n);if(!o)return;const v=[];e.querySelectorAll("[data-rate-idx]").forEach(z=>{var G,V,J,Y,W;const R=Number(z.dataset.rateIdx);v.push({booster_id:n,card_type:((G=z.querySelector(".rate-type"))==null?void 0:G.value)||"player",rarity:((V=z.querySelector(".rate-rarity"))==null?void 0:V.value)||null,note_min:Number((J=z.querySelector(".rate-note-min"))==null?void 0:J.value)||null,note_max:Number((Y=z.querySelector(".rate-note-max"))==null?void 0:Y.value)||null,percentage:Number((W=z.querySelector(".rate-pct"))==null?void 0:W.value)||0,sort_order:R});const N=v[v.length-1];N.rarity||(N.rarity=null),N.note_min||(N.note_min=null),N.note_max||(N.note_max=null)});const E=v.reduce((z,R)=>z+R.percentage,0);if(v.length&&Math.abs(E-100)>.5){alert(`La somme doit faire 100% (actuellement ${E.toFixed(1)}%)`);return}const b={name:((I=(g=p("#f-name"))==null?void 0:g.value)==null?void 0:I.trim())||o.name,image_url:((S=(B=p("#f-image-url"))==null?void 0:B.value)==null?void 0:S.trim())||null,price_type:(C=p("#f-price-type"))==null?void 0:C.value,price_credits:Number((D=p("#f-price-credits"))==null?void 0:D.value)||0,card_count:Number((j=p("#f-card-count"))==null?void 0:j.value)||5,is_active:((O=p("#f-active"))==null?void 0:O.checked)??o.is_active,allow_duplicates:((U=p("#f-allow-dup"))==null?void 0:U.checked)??!0,sort_order:Number((H=p("#f-sort"))==null?void 0:H.value)||0,max_per_user:(A=p("#f-max-per-user"))!=null&&A.value?Number(p("#f-max-per-user").value):null,available_from:((M=p("#f-available-from"))==null?void 0:M.value)||null,available_until:((T=p("#f-available-until"))==null?void 0:T.value)||null},{error:w}=await $.from("booster_configs").update(b).eq("id",n);if(w){alert(w.message);return}if(Object.assign(o,b),await $.from("booster_drop_rates").delete().eq("booster_id",n),v.length){const{error:z}=await $.from("booster_drop_rates").insert(v);if(z){alert(z.message);return}}i=v,c=n,alert("✅ Booster enregistré !"),a(!0)})}a()}const Et=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function Pn(e){await Te(e)}async function Te(e){const{data:t,error:n}=await $.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
          ${(t||[]).map(i=>Fn(i)).join("")}
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
              ${Et.map(i=>`<option value="${i.value}">${i.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>Ye(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>On(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const c=(t||[]).find(l=>l.id===i.dataset.edit);c&&i.addEventListener("click",()=>Ye(c))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await $.from("sell_price_configs").delete().eq("id",i.dataset.delete),await Te(e))})})}function Fn(e){const t=Et.find(n=>n.value===e.rarity);return`
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
    </tr>`}function Ye(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function On(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,c=parseInt(document.getElementById("form-note-min").value)||1,l=parseInt(document.getElementById("form-note-max").value)||10;if(c>l){alert("Note min doit être ≤ note max");return}const y={rarity:n,price:i,note_min:c,note_max:l,updated_at:new Date().toISOString()};let x;if(t?{error:x}=await $.from("sell_price_configs").update(y).eq("id",t):{error:x}=await $.from("sell_price_configs").insert(y),x){alert("Erreur : "+x.message);return}document.getElementById("config-form").style.display="none",await Te(e)}async function qn(e){await ze(e)}async function ze(e){const{data:t}=await $.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Actualités</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(t||[]).map(n=>Un(n)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>We(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Gn(e)),e.querySelectorAll("[data-edit-row]").forEach(n=>{const i=(t||[]).find(c=>c.id===n.dataset.editRow);i&&n.addEventListener("click",()=>We(i))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await $.from("patch_notes").delete().eq("id",n.dataset.delete),await ze(e))})})}function Un(e){const t=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function We(e){const t=document.getElementById("article-form");t.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img-current").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-img-file").value="";const n=document.getElementById("form-art-img-preview");n.innerHTML=e!=null&&e.image_url?`<img src="${e.image_url}" style="width:100%;height:100%;object-fit:cover">`:'<span style="font-size:20px;opacity:.4">📰</span>',document.getElementById("form-art-img-file").onchange=l=>{var _;const y=(_=l.target.files)==null?void 0:_[0];if(!y)return;const x=new FileReader;x.onload=()=>{n.innerHTML=`<img src="${x.result}" style="width:100%;height:100%;object-fit:cover">`},x.readAsDataURL(y)},document.getElementById("form-art-pub").checked=e?e.is_published:!0;const i=new Date((e==null?void 0:e.published_at)||Date.now()),c=new Date(i.getTime()-i.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=c,t.scrollIntoView({behavior:"smooth"})}async function Hn(e){const t=(e.name.split(".").pop()||"png").toLowerCase(),n=`journal/${Date.now()}.${t}`,{error:i}=await $.storage.from("assets").upload(n,e,{upsert:!0,cacheControl:"3600"});if(i)throw i;const{data:c}=$.storage.from("assets").getPublicUrl(n);return c.publicUrl}async function Gn(e){var f;const t=document.getElementById("form-id").value,n=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),c=((f=document.getElementById("form-art-img-file").files)==null?void 0:f[0])||null,l=document.getElementById("form-art-img-current").value||null,y=document.getElementById("form-art-pub").checked,x=document.getElementById("form-art-date").value,_=document.getElementById("form-save");if(!n){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}let a=l;if(c)try{_&&(_.textContent="📤 Envoi de l'image…"),a=await Hn(c)}catch(u){alert("Erreur upload image : "+u.message),_&&(_.textContent="💾 Enregistrer");return}const m=x?new Date(x).toISOString():new Date().toISOString(),p={title:n,description:i,image_url:a,is_published:y,published_at:m};let s;if(t?{error:s}=await $.from("patch_notes").update(p).eq("id",t):{error:s}=await $.from("patch_notes").insert(p),s){alert("Erreur : "+s.message);return}document.getElementById("article-form").style.display="none",await ze(e)}async function Kn(e){await ie(e)}async function ie(e){var m,p,s,f,u,r,h,d,k,L,o,v;const{data:t}=await $.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([E,b,w])=>`<button type="button" data-cmd="${b}" title="${w}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${E}</button>`).join("")}
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
            </div>`:(t||[]).map(E=>Vn(E)).join("")}
        </div>
      </div><!-- /colonne droite -->
    </div>`,(m=document.getElementById("ts-add"))==null||m.addEventListener("click",()=>Ze(null,(t==null?void 0:t.length)||0)),(p=document.getElementById("ts-reset"))==null||p.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:E}=await $.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(E?"Erreur : "+E.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(s=document.getElementById("ts-cancel"))==null||s.addEventListener("click",_t),(f=document.getElementById("ts-save"))==null||f.addEventListener("click",()=>Yn(e)),(u=document.getElementById("ts-preview-btn"))==null||u.addEventListener("click",Jn);const n=document.getElementById("ts-editor"),i=()=>{const E=document.getElementById("ts-content");E&&n&&(E.value=n.innerHTML)};n==null||n.addEventListener("input",i),n==null||n.addEventListener("blur",i);const c=()=>{document.activeElement!==n&&(n==null||n.focus())};(r=document.getElementById("ts-toolbar"))==null||r.querySelectorAll("[data-cmd]").forEach(E=>{E.addEventListener("mousedown",b=>{b.preventDefault(),c();const w=E.dataset.cmd;w.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,w.split(":")[1]):document.execCommand(w,!1,null),i()})}),(h=document.getElementById("ts-insert-color"))==null||h.addEventListener("mousedown",E=>{E.preventDefault(),c();const b=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");b&&(document.execCommand("foreColor",!1,b),i())}),(d=document.getElementById("ts-clear-format"))==null||d.addEventListener("mousedown",E=>{E.preventDefault(),c(),document.execCommand("removeFormat",!1,null),i()}),n==null||n.addEventListener("focus",()=>{n&&(n.style.borderColor="#1A6B3C")}),n==null||n.addEventListener("blur",()=>{n&&(n.style.borderColor="#ddd")});const l=document.getElementById("ts-image"),y=document.getElementById("ts-img-preview"),x=document.getElementById("ts-img-preview-el"),_=document.getElementById("ts-img-picker-grid"),a=()=>{var b;const E=(b=l==null?void 0:l.value)==null?void 0:b.trim();if(E){const w="/";x.src=`${w}icons/${E}`,y.style.display="block"}else y.style.display="none"};l==null||l.addEventListener("input",a),(k=document.getElementById("ts-img-clear"))==null||k.addEventListener("click",()=>{l&&(l.value=""),y.style.display="none",_.style.display="none"}),(L=document.getElementById("ts-img-pick"))==null||L.addEventListener("click",async()=>{if(_.style.display!=="none"){_.style.display="none";return}_.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',_.style.display="block";try{const b=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),w=Array.isArray(b)?b.filter(I=>I.name.startsWith("tuto_")):[];if(!w.length){_.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const g="/";_.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+w.map(I=>`
          <div data-pick="${I.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${g}icons/${I.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",_.querySelectorAll("[data-pick]").forEach(I=>{I.addEventListener("click",()=>{l&&(l.value=I.dataset.pick),a(),_.style.display="none"})})}catch(E){_.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+E.message+"</div>"}}),(o=document.getElementById("ts-color"))==null||o.addEventListener("input",E=>{const b=document.getElementById("ts-color-hex");b&&(b.value=E.target.value)}),(v=document.getElementById("ts-color-hex"))==null||v.addEventListener("input",E=>{const b=E.target.value;if(/^#[0-9a-fA-F]{6}$/.test(b)){const w=document.getElementById("ts-color");w&&(w.value=b)}}),e.querySelectorAll("[data-edit-row]").forEach(E=>{const b=(t||[]).find(w=>w.id===E.dataset.editRow);b&&E.addEventListener("click",()=>Ze(b))}),e.querySelectorAll("[data-delete]").forEach(E=>{E.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await $.from("tutorial_steps").delete().eq("id",E.dataset.delete),ie(e))})}),e.querySelectorAll("[data-toggle]").forEach(E=>{E.addEventListener("click",async()=>{const b=(t||[]).find(w=>w.id===E.dataset.toggle);b&&(await $.from("tutorial_steps").update({is_active:!b.is_active}).eq("id",b.id),ie(e))})}),e.querySelectorAll("[data-up]").forEach(E=>{E.addEventListener("click",async()=>{const b=t||[],w=b.findIndex(g=>g.id===E.dataset.up);w<=0||(await Promise.all([$.from("tutorial_steps").update({step_order:b[w-1].step_order}).eq("id",b[w].id),$.from("tutorial_steps").update({step_order:b[w].step_order}).eq("id",b[w-1].id)]),ie(e))})}),e.querySelectorAll("[data-down]").forEach(E=>{E.addEventListener("click",async()=>{const b=t||[],w=b.findIndex(g=>g.id===E.dataset.down);w<0||w>=b.length-1||(await Promise.all([$.from("tutorial_steps").update({step_order:b[w+1].step_order}).eq("id",b[w].id),$.from("tutorial_steps").update({step_order:b[w].step_order}).eq("id",b[w+1].id)]),ie(e))})})}function Vn(e){return`
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
  </div>`}function Ze(e,t=0){document.getElementById("ts-form-empty").style.display="none",document.getElementById("ts-form-content").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const n=document.getElementById("ts-editor");n&&(n.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??t,document.getElementById("ts-active").checked=e?e.is_active:!0;const i=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=i,document.getElementById("ts-color-hex").value=i;const c=(e==null?void 0:e.image_url)||"",l=document.getElementById("ts-image");l&&(l.value=c);const y=document.getElementById("ts-img-preview"),x=document.getElementById("ts-img-preview-el");if(c&&y&&x){const _="/";x.src=`${_}icons/${c}`,y.style.display="block"}else y&&(y.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function _t(){document.getElementById("ts-form-content").style.display="none",document.getElementById("ts-form-empty").style.display="block",document.getElementById("ts-preview-area").innerHTML=""}function Jn(){var a,m;const e=document.getElementById("ts-emoji").value||"⚽",t=document.getElementById("ts-title").value||"Titre",n=document.getElementById("ts-editor"),i=n?n.innerHTML:document.getElementById("ts-content").value||"",c=document.getElementById("ts-color-hex").value||"#1A6B3C",l=(m=(a=document.getElementById("ts-image"))==null?void 0:a.value)==null?void 0:m.trim(),x=l?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${l}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",_=document.getElementById("ts-preview-area");_.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${c}"></div></div>
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
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${c};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,_.querySelectorAll("ul,ol").forEach(p=>{p.style.paddingLeft="20px",p.style.margin="6px 0"}),_.querySelectorAll("li").forEach(p=>{p.style.marginBottom="4px"}),_.querySelectorAll("p").forEach(p=>{p.style.marginBottom="8px"})}async function Yn(e){var p,s;const t=document.getElementById("ts-id").value,n=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),c=document.getElementById("ts-editor"),l=(c?c.innerHTML:document.getElementById("ts-content").value).trim(),y=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",x=parseInt(document.getElementById("ts-order").value)||0,_=document.getElementById("ts-active").checked;if(!i||!l){alert("Titre et contenu sont obligatoires.");return}const a={emoji:n,title:i,content:l,color:y,step_order:x,is_active:_,image_url:((s=(p=document.getElementById("ts-image"))==null?void 0:p.value)==null?void 0:s.trim())||null};let m;if(t?{error:m}=await $.from("tutorial_steps").update(a).eq("id",t):{error:m}=await $.from("tutorial_steps").insert(a),m){alert("Erreur : "+m.message);return}_t(),ie(e)}const wt="/",$t=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function Wn(e,t){await fe(e,t)}async function fe(e,t){var c,l;const[{data:n},{data:i}]=await Promise.all([$.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),$.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;gap:10px;flex-wrap:wrap">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">🏟️ Stades</h2>
        <div style="display:flex;gap:8px">
          <button id="st-gen-countries-btn" class="btn btn-ghost">🌍 Créer les stades Pays manquants</button>
          <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
        </div>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="st-list">
        ${(n||[]).length?(n||[]).map(y=>Zn(y)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucun stade créé.</div>'}
      </div>
    </div>`,(c=document.getElementById("st-add-btn"))==null||c.addEventListener("click",()=>Qe(null,i,e,t)),(l=document.getElementById("st-gen-countries-btn"))==null||l.addEventListener("click",async()=>{const{toast:y}=t,x=new Set((n||[]).filter(s=>!s.club_id&&s.country_code).map(s=>s.country_code)),_=$t.filter(([s])=>!x.has(s));if(!_.length){y("Tous les pays ont déjà un stade.","info");return}if(!confirm(`Créer ${_.length} stade(s) "Pays" manquant(s) ?`))return;const a=_.map(([s,f])=>({name:`Stade ${f}`,club_id:null,country_code:s})),{data:m,error:p}=await $.from("stadium_definitions").insert(a).select();if(p){y("Erreur : "+p.message,"error");return}m!=null&&m.length&&await $.from("cards").insert(m.map(s=>({card_type:"stadium",stadium_id:s.id}))),y(`${(m==null?void 0:m.length)||0} stade(s) Pays créé(s) ✅`,"success"),fe(e,t)}),e.querySelectorAll("[data-edit-stadium]").forEach(y=>{y.addEventListener("click",()=>{const x=(n||[]).find(_=>_.id===y.dataset.editStadium);x&&Qe(x,i,e,t)})})}function Zn(e){var c,l;let t=null;e.image_url?t=e.image_url.startsWith("http")?e.image_url:`${wt}icons/${e.image_url}`:(c=e.club)!=null&&c.logo_url?t=e.club.logo_url:e.country_code&&(t=`https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/64.png`);const n=((l=e.club)==null?void 0:l.encoded_name)||e.country_code||"—",i=Be(e.name,t,`${n}<br>+10 ⭐`,{width:140});return`<div data-edit-stadium="${e.id}" style="cursor:pointer;transition:transform .15s" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
    ${i}
  </div>`}function Qe(e,t,n,i){var m,p,s;const{openModal:c,closeModal:l,toast:y}=i,x=`
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
            ${$t.map(([f,u])=>`<option value="${f}" ${(e==null?void 0:e.country_code)===f?"selected":""}>${u} (${f})</option>`).join("")}
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
  `;c(e?`Modifier : ${e.name}`:"Nouveau stade",x,`
    <button id="st-cancel" class="btn btn-ghost">Annuler</button>
    <button id="st-save" class="btn btn-primary">Enregistrer</button>
  `);const a=()=>{var b,w,g,I,B,S,C;const f=((b=document.getElementById("st-name"))==null?void 0:b.value)||"NOM DU STADE",u=(g=(w=document.getElementById("st-image"))==null?void 0:w.value)==null?void 0:g.trim(),r=(B=(I=document.getElementById("st-country"))==null?void 0:I.value)==null?void 0:B.trim(),h=document.getElementById("st-club"),d=(h==null?void 0:h.selectedIndex)||0,k=h&&d>0?h.options[d].text:"",L=((C=(S=h==null?void 0:h.options[d])==null?void 0:S.getAttribute)==null?void 0:C.call(S,"data-logo"))||"";let o=null;u?o=u.startsWith("http")?u:`${wt}icons/${u}`:L?o=L:r&&(o=`https://flagsapi.com/${r.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`);const v=k||r||"—",E=document.getElementById("st-preview-card");E&&(E.innerHTML=Be(f,o,`${v}<br>+10 ⭐`,{width:140}))};a(),["st-name","st-club","st-country","st-image"].forEach(f=>{var u,r;(u=document.getElementById(f))==null||u.addEventListener("input",a),(r=document.getElementById(f))==null||r.addEventListener("change",a)}),(m=document.getElementById("st-cancel"))==null||m.addEventListener("click",()=>l()),(p=document.getElementById("st-save"))==null||p.addEventListener("click",async()=>{const f=document.getElementById("st-name").value.trim(),u=document.getElementById("st-club").value||null,r=document.getElementById("st-country").value.trim().toUpperCase()||null,h=document.getElementById("st-image").value.trim()||null;if(!f){y("Le nom est obligatoire","error");return}const d={name:f,club_id:u,country_code:r,image_url:h},{error:k}=e?await $.from("stadium_definitions").update(d).eq("id",e.id):await $.from("stadium_definitions").insert(d);if(k){y("Erreur : "+k.message,"error");return}y(e?"Stade modifié ✅":"Stade créé ✅","success"),l(),fe(n,i)}),(s=document.getElementById("st-delete"))==null||s.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await $.from("stadium_definitions").delete().eq("id",e.id),y("Stade supprimé","success"),l(),fe(n,i))})}const Q=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],Qn=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}],Z=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],Xe=["GK","DEF","MIL","ATT"];async function Xn(e,t){await Me(e,t)}async function Me(e,t){var i;const{data:n}=await $.from("gc_definitions").select("*").order("sort_order").order("created_at");e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">⚡ Game Changers</h2>
        <button id="gc-add-btn" class="btn btn-primary">+ Nouvelle carte</button>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="gc-list">
        ${(n||[]).length?(n||[]).map(c=>ei(c)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucune carte Game Changer.</div>'}
      </div>
    </div>`,(i=document.getElementById("gc-add-btn"))==null||i.addEventListener("click",()=>et(null,e,t)),e.querySelectorAll("[data-edit-gc]").forEach(c=>{c.addEventListener("click",()=>{const l=(n||[]).find(y=>y.id===c.dataset.editGc);l&&et(l,e,t)})}),e.querySelectorAll(".btn-del-gc").forEach(c=>{c.addEventListener("click",async l=>{l.stopPropagation(),confirm("Supprimer cette carte Game Changer ?")&&(await $.from("gc_definitions").delete().eq("id",c.dataset.del),Me(e,t))})})}function ei(e){const t=Q.find(c=>c.value===e.gc_type)||Q[0],n=e.image_url?`/icons/${e.image_url}`:null,i=ue(e.name||"?",n,t.label.split(" ")[0],e.effect||"",{width:130});return`<div data-edit-gc="${e.id}" style="position:relative;cursor:pointer">
    ${i}
    <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
      <button class="btn-del-gc" data-del="${e.id}"
        style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0">✕</button>
    </div>
    ${e.is_active?"":'<div style="position:absolute;top:4px;right:4px;z-index:10;background:#555;color:#fff;font-size:9px;font-weight:700;padding:2px 6px;border-radius:8px">INACTIF</div>'}
  </div>`}function et(e,t,n){var s,f,u,r,h;const{openModal:i,closeModal:c,toast:l}=n,y=!e,x=e||{name:"",gc_type:"game_changer",color:"purple",effect:"",image_url:"",sort_order:0,is_active:!0,effect_type:"BOOST_STAT",effect_params:{}},_=(()=>{const d=x.effect_params||{},k=Z.find(L=>L.value===(x.effect_type||"BOOST_STAT"))||Z[0];return`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${k.hasValue?`<div>
        <label>VALEUR (+N)</label>
        <input id="gc-p-value" type="number" min="1" max="5" value="${d.value||2}">
      </div>`:""}
      ${k.hasCount?`<div>
        <label>NB JOUEURS</label>
        <input id="gc-p-count" type="number" min="1" max="11" value="${d.count||1}">
      </div>`:""}
      ${k.hasTarget?`<div>
        <label>CIBLE</label>
        <select id="gc-p-target">
          <option value="home" ${(d.target||"home")==="home"?"selected":""}>Mon équipe</option>
          <option value="opponent" ${d.target==="opponent"?"selected":""}>Équipe adverse</option>
        </select>
      </div>`:""}
      ${k.hasRoles?`<div>
        <label>POSTES CIBLÉS</label>
        <div style="display:flex;gap:4px;flex-wrap:wrap">
          ${Xe.map(L=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555">
            <input type="checkbox" class="gc-p-role" value="${L}" ${!d.roles||d.roles.includes(L)?"checked":""}> ${L}
          </label>`).join("")}
        </div>
      </div>`:""}
    </div>`})(),a=`
    <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:#1a1a2e;border-radius:12px">
      <div id="gc-modal-preview">${ue(x.name||"?",x.image_url?`/icons/${x.image_url}`:null,(Q.find(d=>d.value===x.gc_type)||Q[0]).label.split(" ")[0],x.effect||"",{width:150})}</div>
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
            ${Q.map(d=>`<option value="${d.value}" ${x.gc_type===d.value?"selected":""}>${d.label}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>COULEUR</label>
          <select id="gc-color">
            ${Qn.map(d=>`<option value="${d.value}" ${x.color===d.value?"selected":""}>${d.label}</option>`).join("")}
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
            ${Z.map(d=>`<option value="${d.value}" ${(x.effect_type||"BOOST_STAT")===d.value?"selected":""}>${d.label}</option>`).join("")}
          </select>
        </div>
        <div id="gc-params-wrap">${_}</div>
      </div>
    </div>
  `;i(y?"Nouvelle carte Game Changer":`Modifier : ${x.name}`,a,`
    <button id="gc-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gc-save" class="btn btn-primary">💾 Enregistrer</button>
  `);const p=()=>{var b,w,g,I,B;const d=((b=document.getElementById("gc-name"))==null?void 0:b.value)||"?",k=((w=document.getElementById("gc-effect"))==null?void 0:w.value)||"",L=((g=document.getElementById("gc-type"))==null?void 0:g.value)||"game_changer",o=(B=(I=document.getElementById("gc-image-url"))==null?void 0:I.value)==null?void 0:B.trim(),v=Q.find(S=>S.value===L)||Q[0],E=document.getElementById("gc-modal-preview");E&&(E.innerHTML=ue(d,o?`/icons/${o}`:null,v.label.split(" ")[0],k,{width:150}))};["gc-name","gc-effect","gc-type","gc-image-url"].forEach(d=>{var k,L;(k=document.getElementById(d))==null||k.addEventListener("input",p),(L=document.getElementById(d))==null||L.addEventListener("change",p)}),(s=document.getElementById("gc-effect-type"))==null||s.addEventListener("change",()=>{const d=document.getElementById("gc-effect-type").value,k=Z.find(o=>o.value===d)||Z[0],L=document.getElementById("gc-params-wrap");L.innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${k.hasValue?'<div><label>VALEUR (+N)</label><input id="gc-p-value" type="number" min="1" max="5" value="2"></div>':""}
      ${k.hasCount?'<div><label>NB JOUEURS</label><input id="gc-p-count" type="number" min="1" max="11" value="1"></div>':""}
      ${k.hasTarget?'<div><label>CIBLE</label><select id="gc-p-target"><option value="home">Mon équipe</option><option value="opponent">Équipe adverse</option></select></div>':""}
      ${k.hasRoles?`<div><label>POSTES CIBLÉS</label><div style="display:flex;gap:4px;flex-wrap:wrap">${Xe.map(o=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555"><input type="checkbox" class="gc-p-role" value="${o}" checked> ${o}</label>`).join("")}</div></div>`:""}
    </div>`}),(f=document.getElementById("btn-pick-gc-icon"))==null||f.addEventListener("click",async()=>{var k;const d=document.getElementById("gc-icon-picker");if(d){if(d.style.display!=="none"){d.style.display="none";return}d.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',d.style.display="block";try{const o=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),v=Array.isArray(o)?o.filter(b=>b.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(b.name)):[];if(!v.length){d.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const E=((k=document.getElementById("gc-image-url"))==null?void 0:k.value)||"";d.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
        ${v.map(b=>`
        <div class="gc-icon-item" data-name="${b.name}"
          style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${b.name===E?"#7a28b8":"#ddd"};background:${b.name===E?"#f5f0ff":"#fff"}">
          <img src="/icons/${b.name}" style="height:44px;width:100%;object-fit:contain">
          <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
        </div>`).join("")}
      </div>`,d.querySelectorAll(".gc-icon-item").forEach(b=>{b.addEventListener("click",()=>{const w=document.getElementById("gc-image-url");w&&(w.value=b.dataset.name),d.style.display="none",p()})})}catch(L){d.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${L.message}</div>`}}}),(u=document.getElementById("btn-upload-gc-icon"))==null||u.addEventListener("click",async()=>{var E;const d=document.getElementById("gc-image-upload"),k=(E=d==null?void 0:d.files)==null?void 0:E[0];if(!k){l("Choisir une image d'abord","error");return}const L=document.getElementById("gc-upload-status"),o=document.getElementById("btn-upload-gc-icon"),v=o.textContent;try{L.style.display="block",L.textContent="⏳ Upload en cours...",L.style.color="#666",o.disabled=!0;const b=k.name.split(".").pop().toLowerCase();if(!["png","jpg","jpeg","webp"].includes(b))throw new Error("Format invalide (PNG, JPG, WebP)");const g=Date.now(),B=`gamechanger-${k.name.replace(/\.[^.]+$/,"").replace(/[^a-z0-9-]/gi,"_").toLowerCase()}-${g}.${b}`,{data:S,error:C}=await $.storage.from("gc-icons").upload(B,k,{upsert:!1});if(C)throw C;document.getElementById("gc-image-url").value=B,p(),L.textContent="✅ Image uploadée avec succès",L.style.color="#27ae60",o.disabled=!1,o.textContent=v,d.value="",setTimeout(()=>{L.style.display="none"},3e3)}catch(b){L.textContent=`❌ Erreur : ${b.message}`,L.style.color="#c0392b",o.disabled=!1,o.textContent=v}}),(r=document.getElementById("gc-cancel"))==null||r.addEventListener("click",()=>c()),(h=document.getElementById("gc-save"))==null||h.addEventListener("click",async()=>{var E,b,w,g,I,B,S,C,D,j,O,U,H,A;const d=Z.find(M=>{var T;return M.value===(((T=document.getElementById("gc-effect-type"))==null?void 0:T.value)||"BOOST_STAT")})||Z[0],k=d.hasRoles?[...document.querySelectorAll(".gc-p-role:checked")].map(M=>M.value):null,L={...d.hasValue?{value:Number((E=document.getElementById("gc-p-value"))==null?void 0:E.value)||2}:{},...d.hasCount?{count:Number((b=document.getElementById("gc-p-count"))==null?void 0:b.value)||1}:{},...d.hasTarget?{target:((w=document.getElementById("gc-p-target"))==null?void 0:w.value)||"home"}:{},...d.hasRoles?{roles:k!=null&&k.length?k:null}:{}},o={name:((I=(g=document.getElementById("gc-name"))==null?void 0:g.value)==null?void 0:I.trim())||"",effect:((S=(B=document.getElementById("gc-effect"))==null?void 0:B.value)==null?void 0:S.trim())||null,image_url:((D=(C=document.getElementById("gc-image-url"))==null?void 0:C.value)==null?void 0:D.trim())||null,gc_type:((j=document.getElementById("gc-type"))==null?void 0:j.value)||"game_changer",color:((O=document.getElementById("gc-color"))==null?void 0:O.value)||"purple",sort_order:Number((U=document.getElementById("gc-sort"))==null?void 0:U.value)||0,is_active:((H=document.getElementById("gc-active"))==null?void 0:H.checked)??!0,effect_type:((A=document.getElementById("gc-effect-type"))==null?void 0:A.value)||"BOOST_STAT",effect_params:L};if(!o.name){l("Le nom est obligatoire","error");return}const{error:v}=y?await $.from("gc_definitions").insert(o):await $.from("gc_definitions").update(o).eq("id",x.id);if(v){l(v.message,"error");return}l(y?"Carte créée ✅":"Carte modifiée ✅","success"),c(),Me(t,n)})}async function ti(e,{toast:t,openModal:n,closeModal:i}){await P(e,{toast:t,openModal:n,closeModal:i})}async function P(e,t){var E,b,w;const{toast:n,openModal:i,closeModal:c}=t,[{data:l,error:y},{data:x},{data:_},{data:a}]=await Promise.all([$.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),$.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1),$.from("season_reward_tiers").select("*").order("rank_min"),$.from("booster_configs").select("id,name").order("sort_order")]);if(y){e.innerHTML=`<p style="color:red">${y.message}</p>`;return}const m=l||[],p=m.find(g=>g.is_active),s=(x||[]).filter(g=>(g.placement_matches||0)>=1),f=s.filter(g=>(g.placement_matches||0)>=10),u=["bronze","silver","gold","platinum","diamond","master"],r={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},h={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},d={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},k={};u.forEach(g=>{k[g]=0}),f.forEach(g=>{const I=g.rank_tier||"bronze";k[I]!==void 0&&k[I]++});const L=f.length?Math.round(f.reduce((g,I)=>g+(I.mmr||1e3),0)/f.length):0;function o(g){return g?new Date(g).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function v(g){const I=new Date;return g.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(g.end_at)<I?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${p?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${p.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${s.length}</div>
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
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(p.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${f.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${u.map(g=>{const I=k[g],B=f.length>0?Math.round(I/f.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${d[g]} ${r[g]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${B}%;background:${h[g]};border-radius:4px;transition:width 0.5s"></div>
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
              ${m.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':m.map(g=>{const I=Math.round((new Date(g.end_at)-new Date(g.start_at))/864e5),B=new Date(g.end_at)<new Date&&!g.is_active;return`
                    <tr>
                      <td><b>${g.name}</b></td>
                      <td style="font-size:12px">${o(g.start_at)}</td>
                      <td style="font-size:12px">${o(g.end_at)}</td>
                      <td style="font-size:12px">${I} jours</td>
                      <td>${v(g)}</td>
                      <td style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn btn-ghost btn-sm" data-edit="${g.id}">✏️ Modifier</button>
                        <button class="btn btn-ghost btn-sm" data-rewards-for="${g.id}" style="color:#D4A017;border-color:#D4A017">🏆 Récompenses</button>
                        ${g.is_active?"":`<button class="btn btn-yellow btn-sm" data-launch="${g.id}">▶ Lancer la saison</button>`}
                        ${g.is_active?`<button class="btn btn-ghost btn-sm" data-deactivate="${g.id}" style="color:#e67e22">⏹ Désactiver</button>`:`<button class="btn btn-primary btn-sm" data-activate="${g.id}">▶ Activer</button>`}
                        ${B?`<button class="btn btn-danger btn-sm" data-delete="${g.id}">🗑</button>`:""}
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
              ${(_||[]).map(g=>{var S;const I=!g.activate_at||new Date(g.activate_at)<=new Date;return`<tr>
                  <td style="font-size:12px">${((S=m.find(C=>C.id===g.season_id))==null?void 0:S.name)||"—"}</td>
                  <td><b>${g.label}</b></td>
                  <td>${g.rank_min===g.rank_max?`#${g.rank_min}`:`#${g.rank_min}–${g.rank_max}`}</td>
                  <td style="text-align:right">${(g.credits||0).toLocaleString("fr")}</td>
                  <td style="text-align:center">${(g.player_ids||[]).length}</td>
                  <td style="text-align:center">${(g.booster_config_ids||[]).length}</td>
                  <td style="font-size:12px">${g.activate_at?o(g.activate_at):"Immédiat"}</td>
                  <td>
                    ${g.distributed_at?`<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Distribué le ${o(g.distributed_at)}</span>`:I?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">● Prêt</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">⏳ Programmé</span>'}
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
    </div>`,(E=document.getElementById("create-season-btn"))==null||E.addEventListener("click",()=>{tt(null,{toast:n,openModal:i,closeModal:c,reload:()=>P(e,t)})}),(b=document.getElementById("start-new-season-btn"))==null||b.addEventListener("click",()=>{ni(p,{toast:n,openModal:i,closeModal:c,reload:()=>P(e,t)})}),e.querySelectorAll("[data-edit]").forEach(g=>{const I=m.find(B=>B.id==g.dataset.edit);g.addEventListener("click",()=>{tt(I,{toast:n,openModal:i,closeModal:c,reload:()=>P(e,t)})})}),e.querySelectorAll("[data-activate]").forEach(g=>{g.addEventListener("click",async()=>{const I=parseInt(g.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:B}=await $.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(B){n(B.message,"error");return}const{error:S}=await $.from("ranked_seasons").update({is_active:!0}).eq("id",I);if(S){n(S.message,"error");return}await $.from("users").update({current_season_id:I}).gt("placement_matches",0),n("Saison activée ✅","success"),P(e,t)})}),e.querySelectorAll("[data-rewards-for]").forEach(g=>{g.addEventListener("click",()=>{var S;const I=parseInt(g.dataset.rewardsFor);(S=document.getElementById("rewards-section"))==null||S.scrollIntoView({behavior:"smooth",block:"start"});const B=m.find(C=>C.id===I);Ee(null,m,B,a||[],{toast:n,openModal:i,closeModal:c,reload:()=>P(e,t)})})}),e.querySelectorAll("[data-launch]").forEach(g=>{g.addEventListener("click",async()=>{const I=parseInt(g.dataset.launch),B=m.find(D=>D.id===I);if(!confirm(`Lancer "${B==null?void 0:B.name}" ?

Ceci va :
• Journaliser le classement actuel dans l'historique
• Recalculer le MMR de TOUS les joueurs (reset doux)
• Activer cette saison

Action irréversible. Continuer ?`))return;g.disabled=!0,g.textContent="⏳ Lancement...";const{data:S,error:C}=await $.rpc("admin_launch_season",{p_season_id:I});if(g.disabled=!1,g.textContent="▶ Lancer la saison",C){n(C.message,"error");return}if(!(S!=null&&S.success)){n((S==null?void 0:S.error)||"Échec du lancement","error");return}n(`Saison lancée ✅ (${S.logged} classement(s) archivé(s), ${S.reset} joueur(s) recalculé(s))`,"success"),P(e,t)})}),e.querySelectorAll("[data-deactivate]").forEach(g=>{g.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:I}=await $.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(g.dataset.deactivate));if(I){n(I.message,"error");return}n("Saison désactivée","success"),P(e,t)})}),e.querySelectorAll("[data-delete]").forEach(g=>{g.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:I}=await $.from("ranked_seasons").delete().eq("id",parseInt(g.dataset.delete));if(I){n(I.message,"error");return}n("Saison supprimée","success"),P(e,t)})}),(w=document.getElementById("add-reward-tier-btn"))==null||w.addEventListener("click",()=>{Ee(null,m,p,a||[],{toast:n,openModal:i,closeModal:c,reload:()=>P(e,t)})}),e.querySelectorAll("[data-edit-tier]").forEach(g=>{const I=(_||[]).find(B=>B.id===g.dataset.editTier);g.addEventListener("click",()=>{Ee(I,m,p,a||[],{toast:n,openModal:i,closeModal:c,reload:()=>P(e,t)})})}),e.querySelectorAll("[data-distribute-tier]").forEach(g=>{g.addEventListener("click",async()=>{const I=(_||[]).find(C=>C.id===g.dataset.distributeTier);if(!confirm(`Distribuer les récompenses du palier "${I==null?void 0:I.label}" à tous les joueurs concernés ?`))return;g.disabled=!0,g.textContent="⏳...";const{data:B,error:S}=await $.rpc("admin_distribute_season_reward",{p_tier_id:g.dataset.distributeTier});if(S){n(S.message,"error"),g.disabled=!1,g.textContent="🎁 Distribuer";return}if(!(B!=null&&B.success)){n((B==null?void 0:B.error)||"Échec de la distribution","error"),g.disabled=!1,g.textContent="🎁 Distribuer";return}n(`Récompenses distribuées à ${B.rewarded} joueur(s) ✅`,"success"),P(e,t)})}),e.querySelectorAll("[data-delete-tier]").forEach(g=>{g.addEventListener("click",async()=>{if(!confirm("Supprimer ce palier de récompense ?"))return;const{error:I}=await $.from("season_reward_tiers").delete().eq("id",g.dataset.deleteTier);if(I){n(I.message,"error");return}n("Palier supprimé","success"),P(e,t)})})}function Ee(e,t,n,i,{toast:c,openModal:l,closeModal:y,reload:x}){var r,h,d,k,L;const _=!!e,a=(e==null?void 0:e.season_id)??(n==null?void 0:n.id)??((r=t[0])==null?void 0:r.id)??null;let m=[];const p=o=>{if(!o)return"";const v=new Date(o);return new Date(v.getTime()-v.getTimezoneOffset()*6e4).toISOString().slice(0,16)},s=`
    <div style="display:flex;flex-direction:column;gap:12px">
      <div>
        <label>SAISON RANKED</label>
        <select id="rt-season">
          ${t.map(o=>`<option value="${o.id}" ${o.id===a?"selected":""}>${o.name}${o.is_active?" (active)":""}</option>`).join("")}
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
          ${i.length?i.map(o=>`
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
  `;l(_?`Modifier : ${e.label}`:"Nouveau palier de récompense",s,`
    <button id="rt-cancel" class="btn btn-ghost">Annuler</button>
    <button id="rt-save" class="btn btn-primary">💾 Enregistrer</button>
  `);function u(){const o=document.getElementById("rt-player-chips");o&&(o.innerHTML=m.map(v=>`
      <span style="display:inline-flex;align-items:center;gap:6px;background:#1A6B3C;color:#fff;font-size:12px;font-weight:700;padding:4px 8px;border-radius:14px">
        ${v.label}
        <button data-remove-player="${v.id}" style="background:none;border:none;color:#fff;cursor:pointer;font-size:12px;padding:0">✕</button>
      </span>`).join(""),o.querySelectorAll("[data-remove-player]").forEach(v=>{v.addEventListener("click",()=>{m=m.filter(E=>E.id!==v.dataset.removePlayer),u()})}))}(h=e==null?void 0:e.player_ids)!=null&&h.length&&$.from("players").select("id,firstname,surname_real").in("id",e.player_ids).then(({data:o})=>{m=(o||[]).map(v=>({id:v.id,label:`${v.firstname} ${v.surname_real}`})),u()}),(d=document.getElementById("rt-player-search-btn"))==null||d.addEventListener("click",async()=>{const o=document.getElementById("rt-player-search").value.trim();if(o.length<2)return;const{data:v}=await $.from("players").select("id,firstname,surname_real,rarity").or(`firstname.ilike.%${o}%,surname_real.ilike.%${o}%`).limit(10),E=document.getElementById("rt-player-results");if(!(v!=null&&v.length)){E.style.display="flex",E.innerHTML='<div style="color:#999;font-size:12px;padding:4px">Aucun résultat.</div>';return}E.style.display="flex",E.innerHTML=v.map(b=>`
      <div data-add-player="${b.id}" data-label="${b.firstname} ${b.surname_real}" style="cursor:pointer;padding:6px 8px;border-radius:6px;font-size:13px;color:#333" onmouseover="this.style.background='#eee'" onmouseout="this.style.background=''">
        ${b.firstname} ${b.surname_real} <span style="color:#999;font-size:11px">(${b.rarity})</span>
      </div>`).join(""),E.querySelectorAll("[data-add-player]").forEach(b=>{b.addEventListener("click",()=>{const w=b.dataset.addPlayer;m.some(g=>g.id===w)||m.push({id:w,label:b.dataset.label}),u(),E.style.display="none",document.getElementById("rt-player-search").value=""})})}),(k=document.getElementById("rt-cancel"))==null||k.addEventListener("click",()=>y()),(L=document.getElementById("rt-save"))==null||L.addEventListener("click",async()=>{const o=document.getElementById("rt-error"),v=parseInt(document.getElementById("rt-season").value),E=document.getElementById("rt-label").value.trim(),b=parseInt(document.getElementById("rt-rank-min").value)||1,w=parseInt(document.getElementById("rt-rank-max").value)||1,g=parseInt(document.getElementById("rt-credits").value)||0,I=document.getElementById("rt-activate-at").value,B=I?new Date(I).toISOString():null,S=[...document.querySelectorAll(".rt-booster-cb:checked")].map(j=>j.value);if(!E){o.textContent="Le libellé est obligatoire.";return}if(b>w){o.textContent="Le classement min doit être ≤ au max.";return}if(!v){o.textContent="Choisis une saison.";return}const C={season_id:v,label:E,rank_min:b,rank_max:w,credits:g,booster_config_ids:S,player_ids:m.map(j=>j.id),activate_at:B},{error:D}=_?await $.from("season_reward_tiers").update(C).eq("id",e.id):await $.from("season_reward_tiers").insert(C);if(D){o.textContent=D.message;return}c(_?"Palier modifié ✅":"Palier créé ✅","success"),y(),x()})}function ni(e,{toast:t,openModal:n,closeModal:i,reload:c}){var m,p;const l=new Date,y=new Date(l.getTime()+30*864e5),x=s=>s.toISOString().slice(0,10),_=`
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
  `),(m=document.getElementById("sns-cancel"))==null||m.addEventListener("click",()=>i()),(p=document.getElementById("sns-launch"))==null||p.addEventListener("click",async()=>{const s=document.getElementById("sns-error"),f=document.getElementById("sns-name").value.trim(),u=document.getElementById("sns-start").value,r=document.getElementById("sns-end").value,h=document.getElementById("sns-confirm").checked;if(!f){s.textContent="Le nom de la saison est requis.";return}if(!u||!r){s.textContent="Les deux dates sont requises.";return}if(new Date(u)>=new Date(r)){s.textContent="La date de fin doit être après la date de début.";return}if(!h){s.textContent="Coche la case de confirmation pour continuer.";return}const d=document.getElementById("sns-launch");d.disabled=!0,d.textContent="⏳ Recalcul en cours...";const{data:k,error:L}=await $.rpc("admin_start_new_season",{p_name:f,p_start_at:new Date(u).toISOString(),p_end_at:new Date(r).toISOString()});if(d.disabled=!1,d.textContent="🚀 Démarrer la saison",L){s.textContent=L.message;return}if(!(k!=null&&k.success)){s.textContent=(k==null?void 0:k.error)||"Échec de l'opération.";return}t(`Nouvelle saison démarrée ✅ (${k.users_reset} joueur(s) recalculé(s))`,"success"),i(),c()})}function tt(e,{toast:t,openModal:n,closeModal:i,reload:c}){const l=!!e,y=new Date().toISOString().slice(0,16),x=new Date(Date.now()+90*864e5).toISOString().slice(0,16),_=e?new Date(e.start_at).toISOString().slice(0,16):y,a=e?new Date(e.end_at).toISOString().slice(0,16):x,m=(e==null?void 0:e.name)||"";n(l?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
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
        <input id="season-end" type="datetime-local" value="${a}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${l?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function p(){var h,d;const s=(h=document.getElementById("season-start"))==null?void 0:h.value,f=(d=document.getElementById("season-end"))==null?void 0:d.value,u=document.getElementById("season-duration");if(!s||!f||!u)return;const r=Math.round((new Date(f)-new Date(s))/864e5);u.textContent=r>0?`Durée : ${r} jour${r>1?"s":""}`:"⚠️ La fin doit être après le début",u.style.color=r>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var s,f,u;(s=document.getElementById("season-start"))==null||s.addEventListener("input",p),(f=document.getElementById("season-end"))==null||f.addEventListener("input",p),p(),(u=document.getElementById("season-save-btn"))==null||u.addEventListener("click",async()=>{var E,b,w;const r=(E=document.getElementById("season-name"))==null?void 0:E.value.trim(),h=(b=document.getElementById("season-start"))==null?void 0:b.value,d=(w=document.getElementById("season-end"))==null?void 0:w.value,k=document.getElementById("season-error");if(!r){k.textContent="Le nom est requis.";return}if(!h){k.textContent="La date de début est requise.";return}if(!d){k.textContent="La date de fin est requise.";return}if(new Date(d)<=new Date(h)){k.textContent="La date de fin doit être après le début.";return}const L=document.getElementById("season-save-btn");L.disabled=!0,L.textContent="Enregistrement…";const o={name:r,start_at:new Date(h).toISOString(),end_at:new Date(d).toISOString()};let v;if(l?{error:v}=await $.from("ranked_seasons").update(o).eq("id",e.id):{error:v}=await $.from("ranked_seasons").insert({...o,is_active:!1}),v){k.textContent=v.message,L.disabled=!1,L.textContent=l?"💾 Enregistrer":"✅ Créer la saison";return}t(l?"Saison modifiée ✅":"Saison créée ✅","success"),i(),c()})},50)}async function Ie(e,t){var _;const{toast:n}=t,{data:i,error:c}=await $.from("solo_levels").select("*").order("level_number");if(c){e.innerHTML=`<p style="color:var(--danger)">${c.message}</p>`;return}const l=a=>`
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
            ${(i||[]).map(l).join("")||'<tr><td colspan="8" style="text-align:center;color:#aaa;padding:20px">Aucun niveau défini.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;function y(){document.querySelectorAll("#solo-tbody [data-field]").forEach(a=>{a.addEventListener("change",()=>x(a))})}async function x(a){const m=a.dataset.id,p=a.dataset.field,s=p==="is_active"?a.checked:Number(a.value)||0,{error:f}=await $.from("solo_levels").update({[p]:s}).eq("id",m);if(f){n(f.message,"error");return}a.style.transition="background .3s",a.style.background="#e8f8ee",setTimeout(()=>{a.style.background=""},500)}y(),document.querySelectorAll("[data-del-row]").forEach(a=>{a.addEventListener("click",async()=>{confirm("Supprimer ce niveau ? Les joueurs ayant progressé au-delà seront affectés.")&&(await $.from("solo_levels").delete().eq("id",a.dataset.delRow),n("Niveau supprimé","success"),Ie(e,t))})}),(_=document.getElementById("solo-add-row"))==null||_.addEventListener("click",async()=>{const m={level_number:Math.max(0,...(i||[]).map(f=>f.level_number))+1,target_note_avg:10,nb_liens_jaune:2,nb_liens_vert:1,nb_joueurs_stade:2,reward_credits:500,is_active:!0},{data:p,error:s}=await $.from("solo_levels").insert(m).select().single();if(s){n(s.message,"error");return}n("Niveau ajouté — modifie les valeurs directement","success"),Ie(e,t)})}Gt(at);function ii(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function ai(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function ke(){document.getElementById("modal-overlay").classList.add("hidden")}const nt={dashboard:{title:"Dashboard",fn:ot},players:{title:"Joueurs & Cartes",fn:Yt},clubs:{title:"Clubs",fn:sn},"card-builder":{title:"Card Builder",fn:xn},users:{title:"Managers",fn:we},market:{title:"Mercato",fn:ht},"import-export":{title:"Import / Export CSV",fn:Tn},formations:{title:"Formations & Liens",fn:Mn},"boosters-config":{title:"Boosters",fn:Nn},"sell-price":{title:"Prix vente directe",fn:Pn},journal:{title:"Actualités",fn:qn},tutorial:{title:"Tutoriel",fn:Kn},stadiums:{title:"Stades",fn:Wn},"gc-cards":{title:"Game Changers",fn:Xn},"ranked-seasons":{title:"Saisons Ranked",fn:ti},"solo-mode":{title:"Solo Mode",fn:Ie}};async function ye(e){document.querySelectorAll(".admin-sidebar nav a").forEach(c=>{c.classList.toggle("active",c.dataset.page===e)});const t=document.getElementById("mobile-page-select");t&&(t.value=e);const n=nt[e]||nt.dashboard;document.getElementById("page-title").textContent=n.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(i,{toast:ii,openModal:ai,closeModal:ke,navigate:ye})}catch(c){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${c.message}</div>`,console.error(c)}}async function oi(){var t;const{data:{session:e}}=await $.auth.getSession();e&&await it(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,c=document.getElementById("auth-error");if(c.textContent="",!n||!i){c.textContent="Remplissez tous les champs.";return}const{data:l,error:y}=await $.auth.signInWithPassword({email:n,password:i});if(y){c.textContent=y.message;return}await it(l.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await $.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",ke),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&ke()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",i=>{i.preventDefault(),ye(n.dataset.page)})}),(t=document.getElementById("mobile-page-select"))==null||t.addEventListener("change",n=>{ye(n.target.value)})}async function it(e){const{data:t,error:n}=await $.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(n||!t){i.textContent="Profil introuvable.";return}if(!t.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await $.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,ye("dashboard")}oi();
