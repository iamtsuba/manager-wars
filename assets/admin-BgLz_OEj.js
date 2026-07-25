import{s as _,r as Ee,a as _e,A as vt,l as xt,g as ht,K as Me,D as z,b as Et,S as _t,c as R,H as wt,R as It,e as ce,d as Ze,f as $t,h as kt,E as Lt,i as Bt,N as At,M as St,B as Ct,j as Tt,F as pe,k as ze,m as Mt,n as Qe,o as ge,p as zt}from"./special-cards-lEGt-tGs.js";async function Rt(e){var h;const[{count:t},{count:n},{count:o},{count:l},{count:a},{data:m}]=await Promise.all([_.from("players").select("*",{count:"exact",head:!0}),_.from("clubs").select("*",{count:"exact",head:!0}),_.from("users").select("*",{count:"exact",head:!0}),_.from("stadium_definitions").select("*",{count:"exact",head:!0}),_.from("users").select("*",{count:"exact",head:!0}).gt("last_seen_at",new Date(Date.now()-18e4).toISOString()),_.rpc("get_signup_password")]),p=m||"";e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:24px">

      <!-- Managers -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">👥 Managers</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${o??"–"}</div>
        <div style="display:flex;align-items:center;gap:6px;margin-top:10px;font-size:12px;color:var(--tile-fg-dim)">
          <span style="width:8px;height:8px;border-radius:50%;background:#2ecc71;display:inline-block;box-shadow:0 0 6px #2ecc71"></span>
          ${a??0} joueurs connectés
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
        <input id="signup-pwd-input" type="text" value="${p.replace(/"/g,"&quot;")}" style="flex:1">
        <button id="signup-pwd-save" class="btn btn-primary">💾 Enregistrer</button>
      </div>
      <div id="signup-pwd-status" style="font-size:12px;margin-top:8px;min-height:16px"></div>
    </div>
  `,window.adminNav=i=>{var u;(u=document.querySelector(`[data-page="${i}"]`))==null||u.click()},(h=document.getElementById("signup-pwd-save"))==null||h.addEventListener("click",async()=>{const i=document.getElementById("signup-pwd-input").value.trim(),u=document.getElementById("signup-pwd-status");if(!i){u.textContent="Le code ne peut pas être vide.",u.style.color="#ff6b6b";return}const r=document.getElementById("signup-pwd-save");r.disabled=!0,r.textContent="⏳...";const{error:g}=await _.rpc("set_signup_password",{new_password:i});if(r.disabled=!1,r.textContent="💾 Enregistrer",g){u.textContent=g.message,u.style.color="#ff6b6b";return}u.textContent="✅ Code mis à jour.",u.style.color="#2ecc71"})}const Xe={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},jt={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Dt(){const e={};for(const t of vt)e[t]=await xt(t);return e}async function Nt(e,t){const{toast:n}=t;if(!confirm(`Réattribuer une nouvelle photo à tous les joueurs ayant encore l'ancien format de chemin (public/faces/...) ?

Cette action est irréversible.`))return;const o=document.getElementById("fix-old-faces-btn");o&&(o.disabled=!0,o.textContent="⏳ En cours...");try{const{data:l,error:a}=await _.from("players").select("id, country_code, face").like("face","public/faces/%");if(a){n(a.message,"error");return}if(!(l!=null&&l.length)){n("Aucun joueur avec l'ancien format — rien à faire ✅","success");return}const{data:m}=await _.from("players").select("face").not("face","is",null),p=new Set((m||[]).map(u=>u.face).filter(u=>u&&!u.startsWith("public/faces/")));let h=0,i=0;for(const u of l){const r=await _e(u.country_code,p);if(!r){i++;continue}const{error:g}=await _.from("players").update({face:r}).eq("id",u.id);if(g){i++;continue}p.add(r),h++}n(`${h} photo(s) réattribuée(s)${i?`, ${i} échec(s)`:""} ✅`,i?"error":"success")}finally{o&&(o.disabled=!1,o.textContent="🖼️ Réattribuer anciennes photos")}}async function Pt(e,t){await le(e,t)}async function le(e,t,n=null){var i,u,r,g,y;const{toast:o}=t;n||(n={search:((i=document.getElementById("search-players"))==null?void 0:i.value)||"",job:((u=document.getElementById("filter-job"))==null?void 0:u.value)||"",rarity:((r=document.getElementById("filter-rarity"))==null?void 0:r.value)||"",club:((g=document.getElementById("filter-club"))==null?void 0:g.value)||"",country:((y=document.getElementById("filter-country"))==null?void 0:y.value)||""});const[{data:l,error:a},{data:m}]=await Promise.all([_.from("players").select("*, clubs(id,encoded_name,logo_url)"),_.from("clubs").select("id,encoded_name").order("encoded_name")]);if(a){e.innerHTML=`<p style="color:red">${a.message}</p>`;return}const p={GK:0,DEF:1,MIL:2,ATT:3},h=(l||[]).sort((s,f)=>{const d=(p[s.job]??4)-(p[f.job]??4);return d!==0?d:(s.surname_real||"").localeCompare(f.surname_real||"")});Ft(e,h,m||[],t,n)}function Ft(e,t,n,o,l=null){var u,r;const{toast:a}=o;if(e.innerHTML=`
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
          ${Object.entries(Xe).map(([g,y])=>`<option value="${g}">${y}</option>`).join("")}
        </select>
        <button class="btn btn-primary" id="add-player-btn" style="white-space:nowrap">+ Joueur</button>
        <button class="btn btn-ghost" id="fix-old-faces-btn" style="white-space:nowrap">🖼️ Réattribuer anciennes photos</button>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <select id="filter-club" style="flex:1;min-width:140px">
          <option value="">Tous les clubs</option>
          ${n.map(g=>`<option value="${g.id}">${g.encoded_name}</option>`).join("")}
        </select>
        <select id="filter-country" style="flex:1;min-width:120px">
          <option value="">Tous les pays</option>
          ${[...new Set(t.map(g=>g.country_code).filter(Boolean))].sort().map(g=>`<option value="${g}">${g}</option>`).join("")}
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
    </div>`,l){const g=l,y=s=>document.getElementById(s);g.search&&y("search-players")&&(y("search-players").value=g.search),g.job&&y("filter-job")&&(y("filter-job").value=g.job),g.rarity&&y("filter-rarity")&&(y("filter-rarity").value=g.rarity),g.club&&y("filter-club")&&(y("filter-club").value=g.club),g.country&&y("filter-country")&&(y("filter-country").value=g.country)}if(l){const g=l,y=s=>document.getElementById(s);g.search&&y("search-players")&&(y("search-players").value=g.search),g.job&&y("filter-job")&&(y("filter-job").value=g.job),g.rarity&&y("filter-rarity")&&(y("filter-rarity").value=g.rarity),g.club&&y("filter-club")&&(y("filter-club").value=g.club),g.country&&y("filter-country")&&(y("filter-country").value=g.country)}function m(){const g=document.getElementById("search-players").value.toLowerCase(),y=document.getElementById("filter-job").value,s=document.getElementById("filter-rarity").value,f=document.getElementById("filter-club").value,d=document.getElementById("filter-country").value;return t.filter(b=>(!g||`${b.firstname} ${b.surname_real}`.toLowerCase().includes(g))&&(!y||b.job===y)&&(!s||b.rarity===s)&&(!f||b.club_id===f)&&(!d||b.country_code===d))}const p=new Set;function h(){const g=document.getElementById("bulk-bar"),y=document.getElementById("bulk-count");g&&(g.style.display=p.size>0?"flex":"none",y&&(y.textContent=`${p.size} joueur(s) sélectionné(s)`))}function i(){const g=m();document.getElementById("count-label").textContent=`${g.length} joueur(s)`;const y=document.getElementById("players-list");if(!g.length){y.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}y.innerHTML=g.map(s=>{const f={...s,clubs:s.clubs,face:s.face||null},d=Ee(f,{width:120});return`<div style="position:relative;cursor:pointer" data-edit="${s.id}">
        ${d}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${s.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),y.querySelectorAll("[data-edit]").forEach(s=>{s.addEventListener("click",()=>{const f=t.find(d=>d.id===s.dataset.edit);f&&Re(f,n,e,o)})}),y.querySelectorAll(".btn-del-player").forEach(s=>{s.addEventListener("click",async f=>{if(f.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:d}=await _.from("players").delete().eq("id",s.dataset.del);d?a(d.message,"error"):(a("Joueur supprimé ✅","success"),le(e,o))})})}i(),document.getElementById("search-players").addEventListener("input",i),document.getElementById("filter-job").addEventListener("change",i),document.getElementById("filter-rarity").addEventListener("change",i),document.getElementById("filter-club").addEventListener("change",i),document.getElementById("filter-country").addEventListener("change",i),(u=document.getElementById("bulk-cancel-btn"))==null||u.addEventListener("click",()=>{p.clear(),h(),i()}),(r=document.getElementById("bulk-delete-btn"))==null||r.addEventListener("click",async()=>{var f,d,b,I,k;if(!p.size||!confirm(`Supprimer ${p.size} joueur(s) ?`))return;const g=[...p],{error:y}=await _.from("players").delete().in("id",g);if(y){a(y.message,"error");return}a(`${g.length} joueur(s) supprimé(s) ✅`,"success"),p.clear();const s={search:((f=document.getElementById("search-players"))==null?void 0:f.value)||"",job:((d=document.getElementById("filter-job"))==null?void 0:d.value)||"",rarity:((b=document.getElementById("filter-rarity"))==null?void 0:b.value)||"",club:((I=document.getElementById("filter-club"))==null?void 0:I.value)||"",country:((k=document.getElementById("filter-country"))==null?void 0:k.value)||""};le(e,o,s)}),document.getElementById("add-player-btn").addEventListener("click",()=>Re(null,n,e,o)),document.getElementById("fix-old-faces-btn").addEventListener("click",()=>Nt(e,o))}async function Re(e,t,n,o){const{toast:l,openModal:a,closeModal:m}=o,p=!!e,h=await Dt(),{data:i}=await _.from("players").select("face").not("face","is",null),u=new Set((i||[]).map(s=>s.face).filter(Boolean));e!=null&&e.face&&u.delete(e.face);const r='<option value="">— Club —</option>'+t.map(s=>`<option value="${s.id}" ${(e==null?void 0:e.club_id)===s.id?"selected":""}>${s.encoded_name}</option>`).join(""),g=e!=null&&e.face?e.face.split("/")[0]:"",y=Object.keys(h).map(s=>`<option value="${s}" ${g===s?"selected":""}>${s}</option>`).join("");a(p?`✏️ ${e.firstname} ${e.surname_real}`:"➕ Nouveau joueur",`<div style="display:flex;gap:20px;align-items:flex-start">

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
              ${["normal","pepite","papyte","legende"].map(s=>`<option value="${s}" ${(e==null?void 0:e.rarity)===s?"selected":""}>${Xe[s]}</option>`).join("")}
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
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([s,f,d])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${jt[s]};font-weight:700">${s}</label>
                <input id="${f}" type="number" min="0" max="20" value="${(e==null?void 0:e[d])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
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
                ${y}
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
          ${p?"💾 Enregistrer":"✅ Créer le joueur"}
        </button>
        </div>
      </div>
    </div>`),setTimeout(()=>{var k,E,v;let s=(e==null?void 0:e.face)||null;function f(){var J,D,W,Z,Q,X,ee,Ae,Se,Ce,Te;const c=document.getElementById("card-preview");if(!c)return;const x=((J=document.getElementById("pm-fn"))==null?void 0:J.value)||"",w=(((D=document.getElementById("pm-real"))==null?void 0:D.value)||"").toUpperCase(),$=((W=document.getElementById("pm-job"))==null?void 0:W.value)||"ATT",L=((Z=document.getElementById("pm-job2"))==null?void 0:Z.value)||null,B=((Q=document.getElementById("pm-rarity"))==null?void 0:Q.value)||"normal",A=((X=document.getElementById("pm-country"))==null?void 0:X.value)||"FR",S=((ee=document.getElementById("pm-club"))==null?void 0:ee.value)||null,C=document.getElementById("pm-club"),M=C==null?void 0:C.options[C.selectedIndex];(M==null?void 0:M.text)!=="— Club —"&&(M==null||M.text);const F=parseInt((Ae=document.getElementById("pm-g"))==null?void 0:Ae.value)||0,O=parseInt((Se=document.getElementById("pm-d"))==null?void 0:Se.value)||0,U=parseInt((Ce=document.getElementById("pm-m"))==null?void 0:Ce.value)||0,N=parseInt((Te=document.getElementById("pm-a"))==null?void 0:Te.value)||0,j=t.find(bt=>bt.id===S),ne={firstname:x||"Prénom",surname_real:w||"NOM",job:$,job2:L||null,rarity:B,country_code:A,club_id:S,note_g:F,note_d:O,note_m:U,note_a:N,face:s||null,clubs:j?{encoded_name:j.encoded_name,logo_url:j.logo_url}:null};c.innerHTML=Ee(ne,{width:160});const T=document.getElementById("pm-minmax");T&&(T.style.display=["pepite","papyte"].includes(B)?"grid":"none")}function d(c){const x=document.getElementById("faces-grid"),w=document.getElementById("pm-face");if(!x||!w)return;const $=h[c]||[];if(console.log("[players] loadFacesGrid folder=",c,"files=",$.length,$.slice(0,5)),!$.length){w.innerHTML='<option value="">— Aucun visage disponible —</option>',x.innerHTML=`<p style="font-size:11px;color:#888;font-style:italic">Aucune image dans le dossier "${c}" du bucket Supabase.</p>`;return}const L=$.filter(B=>{const A=c+"/"+B;return A===s||!u.has(A)});w.innerHTML='<option value="">— Choisir un visage —</option>'+L.map(B=>{const A=c+"/"+B;return`<option value="${A}" ${s===A?"selected":""}>${B}</option>`}).join(""),x.innerHTML=L.map(B=>{const A=c+"/"+B,S=s===A,C=ht({face:A});return`<div data-face="${A}" style="cursor:pointer;border:2px solid ${S?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${C}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),x.querySelectorAll("[data-face]").forEach(B=>{B.addEventListener("click",()=>{s=B.dataset.face;const A=document.getElementById("pm-face");A&&(A.value=s),x.querySelectorAll("[data-face]").forEach(S=>{S.style.border=`2px solid ${S.dataset.face===s?"#4fc3f7":"transparent"}`}),f()})})}const b=e!=null&&e.face?e.face.split("/")[0]:"";b&&h[b]&&(document.getElementById("pm-folder").value=b,d(b)),(k=document.getElementById("pm-folder"))==null||k.addEventListener("change",c=>{d(c.target.value)}),(E=document.getElementById("pm-face"))==null||E.addEventListener("change",c=>{s=c.target.value||null,f()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach(c=>{var x,w;(x=document.getElementById(c))==null||x.addEventListener("input",f),(w=document.getElementById(c))==null||w.addEventListener("change",f)}),(v=document.getElementById("pm-save"))==null||v.addEventListener("click",()=>Ut(e,p,s,n,o)),f()},50)}function Ot(e){const t=n=>{var o;return(o=document.getElementById(n))==null?void 0:o.value};return{firstname:(t("pm-fn")||"").trim(),surname_real:(t("pm-real")||"").trim()||"JOUEUR",country_code:t("pm-country")||"FR",club_id:t("pm-club")||null,job:t("pm-job")||"ATT",job2:t("pm-job2")||null,rarity:t("pm-rarity")||"normal",note_g:parseInt(t("pm-g"))||0,note_d:parseInt(t("pm-d"))||0,note_m:parseInt(t("pm-m"))||0,note_a:parseInt(t("pm-a"))||0,note_min:parseInt(t("pm-nmin"))||null,note_max:parseInt(t("pm-nmax"))||null,sell_price:parseInt(t("pm-price"))||0,face:e||null,ethnie:t("pm-folder")||null,is_active:!0}}async function Ut(e,t,n,o,l){var y,s,f,d,b;const{toast:a,closeModal:m}=l,p=document.getElementById("pm-error"),h=document.getElementById("pm-save"),i=Ot(n);if(!i.firstname){p.textContent="Le prénom est requis.";return}if(!i.surname_real){p.textContent="Le nom est requis.";return}h.disabled=!0,h.textContent="Enregistrement…";const u=i,{error:r}=t?await _.from("players").update({...u,updated_at:new Date().toISOString()}).eq("id",e.id):await _.from("players").insert(u);if(r){p.textContent=r.message,h.disabled=!1,h.textContent=t?"💾 Enregistrer":"✅ Créer le joueur";return}a(t?"Joueur modifié ✅":"Joueur créé ✅","success"),m();const g={search:((y=document.getElementById("search-players"))==null?void 0:y.value)||"",job:((s=document.getElementById("filter-job"))==null?void 0:s.value)||"",rarity:((f=document.getElementById("filter-rarity"))==null?void 0:f.value)||"",club:((d=document.getElementById("filter-club"))==null?void 0:d.value)||"",country:((b=document.getElementById("filter-country"))==null?void 0:b.value)||""};le(o,l,g)}const Gt={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},et=["rase","court","milong","long"];function Ht(e){const t=Ie(e);if(t==="noir")return"noir";if(t==="typ")return Math.random()<.9?"noir":"marron";if(t==="metisse")return Math.random()<.6?"noir":"marron";const n=Math.random();return n<.35?"blond":n<.75?"marron":"noir"}function qt(e){return Math.random()<.05?"chauve":Ht(e)}const we=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function Ie(e){return Gt[e]||"blanc"}function tt(e){return qt(e)}function fe(e,t){return Math.floor(Math.random()*(t-e+1))+e}function q(e){return e[Math.floor(Math.random()*e.length)]}function nt(e){const t=we.filter(n=>n!==e);return q(t)}function ye(e){const t=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","GR","RO","BG","UA","RU"],n=["MA","DZ","TN","EG","LY"],o=["NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","TZ","UG","ET"],l=["JP","KR","CN","VN","TH","ID","PH","IN","PK","BD","SA","AE","IR"];return t.includes(e)||["AR","UY","CL","PE","EC","CO","MX","BR"].includes(e)?"Europeans":n.includes(e)?"North Africans":o.includes(e)?"Africans":l.includes(e)?"Asians":"Europeans"}const Kt=[{min:1,max:4,pct:55},{min:5,max:10,pct:20},{min:11,max:14,pct:10},{min:15,max:17,pct:10},{min:18,max:20,pct:5}];function it(){const e=Math.random()*100;let t=0;for(const n of Kt)if(t+=n.pct,e<t)return fe(n.min,n.max);return fe(1,4)}function Jt(){const e=Array.from({length:20},(t,n)=>n);return e.sort(()=>Math.random()-.5),new Set(e.slice(0,10))}let oe=null;function Vt(e,t){return e&&(oe||(oe=Jt()),oe.has(t))?fe(15,20):it()}const se={FR:{first:["Lucas","Tom","Hugo","Théo","Antoine","Kylian","Rayan","Axel","Paul","Enzo","Léo","Mathis","Nathan","Alexis","Ethan","Maxime","Julien","Baptiste","Nicolas","Pierre","Clément","Adrien","Valentin","Dylan","Loïc","Quentin","Florian","Kevin","Corentin","Raphaël"],last:["Martin","Bernard","Petit","Dupont","Moreau","Laurent","Robert","Michel","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard","Bonnet","Rousseau","Fontaine","Chevalier","Blanc","Garnier","Boyer","Gauthier","Garcia","Perrin","Robin","Clément","Morin","Nicolas","Henry","Lemaire","Noël","Dufour","Meunier","Brun","Blanchard","Giraud","Joly","Rivière","Brunet"]},ES:{first:["Carlos","Miguel","Javier","Alejandro","Sergio","David","Diego","Pablo","Álvaro","Marcos","Adrián","Rubén","Iker","Raúl","Fernando","Roberto","Víctor","Iván","Gonzalo","Antonio","Manuel","Jesús","Josué","Rodrigo","Cristian","Héctor","Óscar","Mario","Daniel","Jorge"],last:["García","Rodríguez","Martínez","López","Sánchez","González","Pérez","Hernández","Jiménez","Díaz","Torres","Ramírez","Flores","Rivera","Gómez","Morales","Álvarez","Romero","Herrera","Medina","Aguilar","Vargas","Guzmán","Muñoz","Salazar","Soto","Contreras","Rojas","Ramos","Ortiz"]},PT:{first:["João","Pedro","Diogo","Rúben","Bruno","Tiago","André","Ricardo","Luís","Gonçalo","Nuno","Mário","Fábio","Rui","Miguel","Sérgio","Hugo","Filipe","Paulo","Vítor"],last:["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Carvalho","Gomes","Ribeiro","Araújo","Barbosa","Cardoso","Correia","Teixeira","Machado","Vieira","Monteiro","Cunha","Pinto","Melo","Barros","Freitas","Fonseca","Andrade","Castro","Neves","Figueiredo","Duarte"]},BR:{first:["Gabriel","Lucas","Mateus","Gustavo","Felipe","Rodrigo","Thiago","Rafael","Bruno","Diego","Leonardo","Eduardo","Victor","Pedro","Carlos","Alexandre","André","Paulo","Danilo","Marcelo"],last:["Silva","Santos","Oliveira","Souza","Lima","Ferreira","Costa","Nascimento","Alves","Pereira","Rodrigues","Almeida","Nunes","Melo","Barbosa","Rocha","Brito","Castro","Carvalho","Gomes","Lopes","Ramos","Mendes","Cavalcanti","Batista","Azevedo","Campos","Freitas","Reis","Andrade"]},AR:{first:["Lionel","Sergio","Rodrigo","Nicolás","Ezequiel","Gonzalo","Federico","Mauro","Pablo","Diego","Lucas","Matías","Alejandro","Maximiliano","Emiliano","Marcos","Lautaro","Ángel","Leandro","Julián"],last:["González","Rodríguez","Martínez","García","López","Pérez","Sánchez","Romero","Torres","Flores","Díaz","Gómez","Alvarez","Ruiz","Castro","Herrera","Cabrera","Medina","Ferreyra","Suárez"]},IT:{first:["Marco","Luca","Alessandro","Matteo","Davide","Andrea","Francesco","Federico","Lorenzo","Riccardo","Stefano","Simone","Roberto","Nicola","Giovanni","Antonio","Emanuele","Daniele","Alberto","Giorgio"],last:["Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Ricci","Marino","Greco","Bruno","Gallo","Conti","De Luca","Mancini","Giordano","Rizzo","Lombardi","Moretti","Fontana","Rinaldi"]},DE:{first:["Lukas","Max","Jonas","Florian","Tobias","Stefan","Markus","Sebastian","Niklas","Leon","Tim","Felix","Alexander","Philipp","Christian","Thomas","Michael","Jan","Moritz","Fabian"],last:["Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Wolf","Schröder","Neumann","Schwarz","Zimmermann","Braun","Krüger","Hofmann","Wagner","Becker","Koch","Lehmann","Kaiser"]},GB:{first:["James","Harry","Oliver","Jack","George","Charlie","William","Thomas","Alfie","Edward","Ryan","Liam","Noah","Ethan","Kyle","Jordan","Callum","Aaron","Declan","Connor"],last:["Smith","Jones","Williams","Brown","Taylor","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Walker","Wright","Robinson","White","Thompson","Hughes","Edwards","Green","Hall"]},MA:{first:["Yassine","Karim","Mehdi","Amine","Hamza","Bilal","Soufiane","Rachid","Omar","Mohammed","Zakaria","Ilyas","Ayoub","Saad","Khalid","Adil","Tarik","Hicham","Reda","Nabil"],last:["Benali","Amrani","Bouazza","Cherif","Haddad","Meziane","Belkacem","Rahmani","Saidi","Zidane","Belhadj","Tazi","Idrissi","Alaoui","Bennani","Fassi","Lahlou","Naciri","Tahiri","Zniber"]},DZ:{first:["Yacine","Riyad","Sofiane","Haris","Adem","Islam","Bilal","Omar","Nassim","Mehdi","Ryad","Zinedine","Youssef","Farid","Karim","Mourad","Walid","Anes","Ferhat","Djamel"],last:["Amrouche","Boudiaf","Cherki","Guessab","Hamdi","Jaber","Lakhal","Mahjoub","Rezki","Sahnoun","Talbi","Zerrouki","Achour","Bakri","Chaouch","Djaballah","Ferhat","Gacem","Khaldi","Larbi"]},SN:{first:["Sadio","Ismaïla","Cheikhou","Gana","Famara","Mbaye","Pape","Aliou","Moussa","Sidy","Idrissa","Lamine","Bamba","Fallou","Abdou","Diallo","Mamadou","Souleymane","Oumar","Cheikh"],last:["Diallo","Traoré","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Ndiaye","Sow","Cissé","Fofana","Keita","Sylla","Kane","Diarra","Sanogo","Baldé","Kouyaté"]},CI:{first:["Didier","Wilfried","Serge","Jonathan","Franck","Maxwel","Salomon","Gervinho","Nicolas","Maxime","Ismael","Romaric","Abdul","Cheick","Arouna","Kolo","Yaya","Geoffroy","Siaka","Adama"],last:["Drogba","Zaha","Gnagnon","Koné","Touré","Bamba","Diomandé","Konaté","Coulibaly","Fofana","Traoré","Doumbia","Sanogo","Diabaté","Kalou","Bakayoko","Gradel","Seri","Aurier","Haller"]},CM:{first:["Samuel","Alex","Karl","Fabrice","Cédric","Nicolas","Georges","André","Joël","Roger","François","Jean","Patrick","Thierry","Eric","Benjamin","Aristide","Clinton","Clinton","Stéphane"],last:["Eto'o","Song","Choupo-Moting","Aboubakar","Bassogog","Kunde","Toko","Nkoudou","Ngadeu","Oyongo","Fai","Zambo","Mokoena","Ekambi","Tchamba","Mbida","Biya","Kameni","Meyong","Webo"]},NG:{first:["Kelechi","Ahmed","Victor","John","Emmanuel","Samuel","Moses","Ola","Chukwuemeka","Odion","Sunday","Chidi","Nnamdi","Chisom","Tunde","Emeka","Obinna","Uchenna","Ifeanyi","Segun"],last:["Osimhen","Iheanacho","Musa","Onyekuru","Iwobi","Ndidi","Nwankwo","Obi","Mikel","Martins","Okocha","Yekini","Amunike","Babangida","Fash","Lawal","Onuoha","Taiwo","Ayodele","Ameobi"]},JP:{first:["Ryota","Kenji","Hiroshi","Takumi","Yuto","Daichi","Shinji","Makoto","Koji","Naoki","Yuya","Shoya","Ryo","Shu","Atsuto","Masato","Hotaru","Genki","Ko","Ritsu"],last:["Nakamura","Tanaka","Suzuki","Sato","Yamamoto","Watanabe","Ito","Yamada","Saito","Matsumoto","Inoue","Kimura","Hayashi","Shimizu","Yamazaki","Mori","Abe","Ikeda","Kato","Honda"]},KR:{first:["Heung","Son","Ji","Sung","Jae","Young","Kang","Hyun","Woo","Tae","Seung","Min","Jun","Dong","Chang","Sang","Yo","Hee","Jin","Bum"],last:["Kim","Park","Lee","Choi","Jung","Kang","Cho","Yoon","Lim","Oh","Han","Seo","Kwon","Hwang","Ahn","Yang","Shin","Yoo","Jang","Song"]},MX:{first:["Carlos","Hirving","Andrés","Javier","Miguel","Raúl","Héctor","Diego","Jorge","Luis","Rodolfo","Erick","Jonathan","Néstor","Tecatito","Chicharito","Oswaldo","Oribe","Uriel","Giovanni"],last:["Hernández","Lozano","Guardado","Vela","Morales","Jiménez","Reyes","Corona","Herrera","Rodríguez","Ochoa","Chicharito","Flores","Domínguez","Araujo","Álvarez","Pineda","Sánchez","Antuna","Meza"]},_DEFAULT_EUROPE:{first:["Stefan","Ivan","Luca","Marco","Andrei","Cristian","Bogdan","Mircea","Adrian","Florin","Dušan","Aleksandar","Nikola","Nemanja","Marko","Filip","Milan","Branislav","Radomir","Dejan"],last:["Popescu","Ionescu","Stan","Marin","Stoica","Popa","Radu","Constantin","Barbu","Dobre","Petrović","Marković","Nikolić","Jovanović","Popović","Stanković","Đorđević","Lukić","Simić","Ilić"]},_DEFAULT_AFRIQUE:{first:["Mamadou","Ibrahima","Moussa","Seydou","Boubacar","Oumar","Modibo","Adama","Bakary","Abdoulaye","Lamine","Ousmane","Sekou","Demba","Tidiane","Amadou","Issiaka","Siaka","Fode","Samba"],last:["Diallo","Traoré","Coulibaly","Koné","Doumbia","Kouyaté","Bah","Konaté","Touré","Camara","Sylla","Keita","Diakité","Sangaré","Sanou","Sidibé","Bathily","Niakaté","Dioumassi","Sissoko"]},_DEFAULT_ASIE:{first:["Wei","Ming","Jae","Van","Duc","Sorn","Ali","Hassan","Reza","Arman","Yusuf","Tariq","Faris","Khalid","Saad","Rashid","Nasser","Walid","Ziad","Adel"],last:["Zhang","Wang","Liu","Chen","Yang","Huang","Zhou","Wu","Xu","Sun","Al-Rashidi","Al-Dosari","Al-Harthi","Al-Balushi","Al-Farsi","Al-Shamsi","Al-Neyadi","Al-Breiki","Al-Hammadi","Al-Mansouri"]},_DEFAULT_AMERIQUE:{first:["James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Marcus","Jordan","Andre","Devonte","Malik","Tyrone","Jamal","Darius","DeShawn","Brandon","Cody"],last:["Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Taylor","Anderson","Jackson","White","Harris","Clark","Lewis","Walker","Hall","Allen","Young","King"]}},Yt={FR:"FR",BE:"FR",CH:"FR",MC:"FR",LU:"FR",ES:"ES",MX:"MX",CO:"ES",VE:"ES",PE:"ES",CL:"ES",EC:"ES",UY:"ES",PY:"ES",BO:"ES",CR:"ES",PA:"ES",HN:"ES",GT:"ES",SV:"ES",NI:"ES",DO:"ES",CU:"ES",PT:"PT",AO:"PT",MZ:"PT",CV:"PT",BR:"BR",AR:"AR",IT:"IT",SM:"IT",DE:"DE",AT:"DE",GB:"GB",IE:"GB",AU:"GB",NZ:"GB",CA:"GB",MA:"MA",TN:"DZ",LY:"DZ",DZ:"DZ",SN:"SN",ML:"SN",GN:"SN",GW:"SN",GM:"SN",MR:"SN",CI:"CI",BF:"CI",TG:"CI",BJ:"CI",GH:"CI",CM:"CM",GA:"CM",CG:"CM",CD:"CM",NG:"NG",JP:"JP",KR:"KR",MX:"MX",PL:"_DEFAULT_EUROPE",CZ:"_DEFAULT_EUROPE",SK:"_DEFAULT_EUROPE",HU:"_DEFAULT_EUROPE",HR:"_DEFAULT_EUROPE",RS:"_DEFAULT_EUROPE",SI:"_DEFAULT_EUROPE",RO:"_DEFAULT_EUROPE",BG:"_DEFAULT_EUROPE",GR:"_DEFAULT_EUROPE",TR:"_DEFAULT_EUROPE",RU:"_DEFAULT_EUROPE",UA:"_DEFAULT_EUROPE",NL:"_DEFAULT_EUROPE",DK:"_DEFAULT_EUROPE",SE:"_DEFAULT_EUROPE",NO:"_DEFAULT_EUROPE",FI:"_DEFAULT_EUROPE",AL:"_DEFAULT_EUROPE",EG:"_DEFAULT_AFRIQUE",ZA:"_DEFAULT_AFRIQUE",KE:"_DEFAULT_AFRIQUE",ET:"_DEFAULT_AFRIQUE",TZ:"_DEFAULT_AFRIQUE",UG:"_DEFAULT_AFRIQUE",CN:"_DEFAULT_ASIE",VN:"_DEFAULT_ASIE",TH:"_DEFAULT_ASIE",ID:"_DEFAULT_ASIE",PH:"_DEFAULT_ASIE",IN:"_DEFAULT_ASIE",PK:"_DEFAULT_ASIE",BD:"_DEFAULT_ASIE",IR:"_DEFAULT_ASIE",SA:"_DEFAULT_ASIE",AE:"_DEFAULT_ASIE",QA:"_DEFAULT_ASIE",KW:"_DEFAULT_ASIE",IQ:"_DEFAULT_ASIE",SY:"_DEFAULT_ASIE",JO:"_DEFAULT_ASIE",US:"_DEFAULT_AMERIQUE"};function ot(e){return Yt[e]||"_DEFAULT_EUROPE"}function at(e){const t=ot(e),n=(se[t]||se._DEFAULT_EUROPE).first;return q(n)}function rt(e){const t=ot(e);return(se[t]||se._DEFAULT_EUROPE).last}function Wt(e,t,n=new Set,o=!1){const l=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],a=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],m=new Set(a.sort(()=>Math.random()-.5).slice(0,4)),p=[...a].sort(()=>Math.random()-.5),h=new Set(p.slice(0,2)),i=new Set(p.slice(2,4)),u=10,r=l.map((s,f)=>f<u);for(let s=r.length-1;s>0;s--){const f=Math.floor(Math.random()*(s+1));[r[s],r[f]]=[r[f],r[s]]}const g=new Set;function y(s){const f=rt(s),d=f.filter(E=>!g.has(E)&&!n.has(E)),b=d.length?d:f.filter(E=>!g.has(E)),I=b.length?b:f,k=q(I);return g.add(k),k}return l.map((s,f)=>{const d=r[f]?t:nt(t),b=Ie(d),I=tt(d),k=q(et),E=Vt(o,f),v=m.has(f),c=v?Math.max(0,E-2):0;let x=0,w=0,$=0,L=0,B=null;s==="GK"?x=E:s==="DEF"?(w=E,v&&($=c,B="MIL")):s==="ATT"?(L=E,v&&($=c,B="MIL")):($=E,v&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(w=c,B="DEF"):(L=c,B="ATT")));const A=h.has(f)?"pepite":i.has(f)?"papyte":"normal",S=y(d);return{job:s,job2:B,firstname:at(d),surname_real:S,country_code:d,club_id:e,note_g:x,note_d:w,note_m:$,note_a:L,skin:b,hair:I,hair_length:k,rarity:A,sell_price:0,ethnie:ye(d),_ethnie:ye(d)}})}async function lt(e,t,n,o=!1){oe=null;const{data:l}=await _.from("players").select("surname_real").not("surname_real","is",null),a=new Set((l||[]).map(s=>s.surname_real).filter(Boolean)),m=Wt(e,t,a,o),{data:p}=await _.from("players").select("face").not("face","is",null),h=new Set((p||[]).map(s=>s.face).filter(Boolean)),i=new Set;for(const s of m){const f=await _e(s.country_code,new Set([...h,...i]));f&&(s.face=f,i.add(f)),delete s._ethnie}const{data:u,error:r}=await _.from("players").insert(m).select("id");if(r){console.error("[GenSquad] Erreur batch insert:",r.message,r.details),n("Erreur: "+r.message,"error");return}const g=(u||[]).map(s=>({card_type:"player",player_id:s.id}));if(g.length){const{error:s}=await _.from("cards").insert(g);s&&console.warn("[GenSquad] Erreur cartes:",s.message)}const y=(u==null?void 0:u.length)||0;console.log("[GenSquad] Créés:",y,"/",m.length),y>0?n(`${y} joueurs générés ✅`,"success"):n("Erreur génération joueurs","error")}function st(e){return{style:e.kit_style||z.style,color1:e.kit_color1||z.color1,color2:e.kit_color2||z.color2,color3:e.kit_color3||z.color3,shorts:e.kit_shorts||z.shorts,socks:e.kit_socks||z.socks}}let ae=[];async function Zt(e,t){await ue(e,t)}async function ue(e,t){const[{data:n,error:o},{data:l}]=await Promise.all([_.from("clubs").select("*").order("real_name"),_.from("players").select("club_id")]);if(o){e.innerHTML=`<p style="color:red">${o.message}</p>`;return}ae=n||[];const a={};(l||[]).forEach(m=>{a[m.club_id]=(a[m.club_id]||0)+1}),Qt(e,t,a)}function Qt(e,t,n={}){const{toast:o,openModal:l,closeModal:a}=t;e.innerHTML=`
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
    </div>`,m(ae),document.getElementById("search-clubs").addEventListener("input",p=>{const h=p.target.value.toLowerCase();m(ae.filter(i=>i.real_name.toLowerCase().includes(h)||i.encoded_name.toLowerCase().includes(h)))}),document.getElementById("add-club-btn").addEventListener("click",()=>je(null,e,t));function m(p){const h=document.getElementById("clubs-list");if(!p.length){h.innerHTML='<p style="color:var(--tile-fg-dim);padding:20px;text-align:center">Aucun club.</p>';return}h.innerHTML=p.map(i=>{const u=st(i),r=i.logo_url?`<img src="${i.logo_url}" style="width:36px;height:36px;object-fit:contain;border-radius:8px;flex-shrink:0">`:`<div style="width:36px;height:36px;background:linear-gradient(135deg,${u.color1},${u.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:900;flex-shrink:0">${i.encoded_name.slice(0,3)}</div>`,g=n[i.id]||0;return`
        <div class="club-row" data-club-id="${i.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:10px;cursor:pointer;background:var(--tile-bg);border:1px solid var(--tile-border);transition:background .15s">
          ${r}
          <img src="https://flagsapi.com/${i.country_code}/flat/24.png" style="width:18px;height:13px;object-fit:cover;border-radius:2px;flex-shrink:0" onerror="this.style.display='none'">
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:12px;color:var(--tile-fg-on-page);font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.encoded_name}</div>
            <div style="font-size:10px;color:${g===0?"#e67e22":"var(--tile-fg-dim)"}">${g===0?"⚠️ 0 joueur":`👥 ${g}`}</div>
          </div>
          <button class="btn-del-club" data-del="${i.id}"
            style="width:22px;height:22px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;flex-shrink:0"
            onclick="event.stopPropagation()">✕</button>
        </div>`}).join(""),h.querySelectorAll(".club-row").forEach(i=>{i.addEventListener("click",()=>{const u=ae.find(r=>r.id===i.dataset.clubId);u&&je(u,e,t),h.querySelectorAll(".club-row").forEach(r=>r.style.background="var(--tile-bg)"),i.style.background="rgba(26,107,60,0.18)"})}),h.querySelectorAll(".btn-del-club").forEach(i=>{i.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:u}=await _.from("clubs").delete().eq("id",i.dataset.del);u?o(u.message,"error"):(o("Club supprimé","success"),ue(e,t))})})}}async function je(e,t,n){var d,b,I,k,E,v;const{toast:o}=n,l=!!e,a=e?st(e):{...z},m=document.getElementById("club-panel");if(!m)return;const p=Object.entries(Me).map(([c,x])=>`<option value="${c}" ${a.style===c?"selected":""}>${x.label}</option>`).join(""),h=we.map(c=>`<option value="${c}" ${((e==null?void 0:e.country_code)||"FR")===c?"selected":""}>${c}</option>`).join("");m.style.display="block",m.style.alignItems="",m.style.justifyContent="",m.innerHTML=`
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
              <select id="m-kit-style" style="width:100%">${p}</select>
            </div>
            ${[["Couleur 1","m-kit-color1",a.color1,!1],["Couleur 2","m-kit-color2",a.color2,!1],["Couleur 3","m-kit-color3",a.color3,!0],["Short","m-kit-shorts",a.shorts,!1],["Chaussettes","m-kit-socks",a.socks,!1]].map(([c,x,w,$])=>`
              <div class="form-group" id="wrap-${x}" ${$?'style="display:none"':""}>
                <label>${c}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${x}" value="${w||"#000000"}" style="width:38px;height:32px;padding:2px;border:1px solid var(--tile-border);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${x}-txt" value="${w||"#000000"}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
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
  `,(d=document.getElementById("m-logo-file"))==null||d.addEventListener("change",c=>{var $;const x=($=c.target.files)==null?void 0:$[0];if(!x)return;const w=new FileReader;w.onload=()=>{document.getElementById("logo-preview").innerHTML=`<img src="${w.result}" style="width:100%;height:100%;object-fit:contain">`},w.readAsDataURL(x)}),te();function i(){var $,L;const c=(($=document.getElementById("m-kit-style"))==null?void 0:$.value)||"uni",x=((L=Me[c])==null?void 0:L.colors)===3,w=document.getElementById("wrap-m-kit-color3");w&&(w.style.display=x?"":"none")}i(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(c=>{const x=document.getElementById(c),w=document.getElementById(c+"-txt");!x||!w||(x.addEventListener("input",()=>{w.value=x.value,te()}),w.addEventListener("input",()=>{const $=w.value.trim();/^#[0-9a-fA-F]{6}$/.test($)&&(x.value=$,te())}),w.addEventListener("change",()=>{let $=w.value.trim();$.startsWith("#")||($="#"+$),/^#[0-9a-fA-F]{6}$/.test($)&&(x.value=$,w.value=$,te())}))}),(b=document.getElementById("m-kit-style"))==null||b.addEventListener("change",()=>{i(),te()});const u=document.getElementById("m-real"),r=document.getElementById("m-encoded");function g(){if(!u||!r||r.value)return;const c=u.value.trim().split(/\s+/),x=c.length===1?c[0].toUpperCase().slice(0,6):c.filter(w=>w.length>2).map(w=>w[0].toUpperCase()).join("")||c[0].toUpperCase().slice(0,4);r.value=x}u==null||u.addEventListener("input",g),(I=document.getElementById("auto-encode-btn"))==null||I.addEventListener("click",()=>{r&&(r.value=""),g()}),(k=document.getElementById("m-save"))==null||k.addEventListener("click",()=>an(e,l,t,n));const y=document.getElementById("m-gen-squad"),s=document.getElementById("m-gen-strong-label");function f(){if(s&&(s.style.display=y!=null&&y.checked?"flex":"none",!(y!=null&&y.checked))){const c=document.getElementById("m-gen-strong");c&&(c.checked=!1)}}y==null||y.addEventListener("change",f),f(),(E=document.getElementById("btn-gen-squad-panel"))==null||E.addEventListener("click",()=>{Xt(e,n,t)}),(v=document.getElementById("btn-gen-one-player"))==null||v.addEventListener("click",()=>{tn(e,n)}),l&&$e(e.id)}async function $e(e){const{data:t}=await _.from("players").select("*, clubs(encoded_name, logo_url, kit_style, kit_color1, kit_color2, kit_color3, kit_shorts, kit_socks)").eq("club_id",e).order("surname_real"),n=document.getElementById("club-players-grid"),o=document.getElementById("club-players-count");if(o&&(o.textContent=(t||[]).length),!!n){if(!(t!=null&&t.length)){n.innerHTML='<div style="color:var(--tile-fg-dim);padding:20px;font-size:13px">Aucun joueur dans ce club.</div>';return}n.innerHTML=t.map(l=>Ee(l,{width:100})).join("")}}function Xt(e,t,n){const{openModal:o,closeModal:l,toast:a}=t;o(`⚽ Générer — ${e.real_name}`,`<div style="display:flex;flex-direction:column;gap:14px">
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
    </div>`),setTimeout(()=>{var m,p;(m=document.getElementById("qg-cancel"))==null||m.addEventListener("click",()=>l()),(p=document.getElementById("qg-ok"))==null||p.addEventListener("click",async()=>{var i;const h=((i=document.getElementById("qg-strong"))==null?void 0:i.checked)??!1;l(),a("Génération en cours…","info"),await lt(e.id,e.country_code,a,h),a("Effectif généré ✅","success"),$e(e.id),ue(n,t)})},50)}const dt=["GK","DEF","MIL","ATT"],en=[{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}];function tn(e,t){const{openModal:n,closeModal:o,toast:l}=t,a=we.map(i=>`<option value="${i}">${i}</option>`).join(""),m=i=>dt.map(u=>`<option value="${u}" ${u===i?"selected":""}>${u}</option>`).join(""),p=`
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
              ${en.map(i=>`<option value="${i.value}">${i.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label>PAYS</label>
            <select id="gen-one-country">
              <option value="">— Aléatoire —</option>
              ${a}
            </select>
          </div>
        </div>
      </div>
    </div>
  `;n(`➕ Générer un joueur — ${e.real_name}`,p,`
    <button id="gen-one-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gen-one-ok" class="btn btn-primary">➕ Générer</button>
  `),setTimeout(()=>{var i,u;document.querySelectorAll('input[name="gen-one-mode"]').forEach(r=>{r.addEventListener("change",()=>{document.getElementById("gen-one-custom-fields").style.display=r.value==="custom"&&r.checked?"flex":"none"})}),(i=document.getElementById("gen-one-cancel"))==null||i.addEventListener("click",()=>o()),(u=document.getElementById("gen-one-ok"))==null||u.addEventListener("click",async()=>{var s,f,d,b,I;const r=((s=document.querySelector('input[name="gen-one-mode"]:checked'))==null?void 0:s.value)||"random",g=document.getElementById("gen-one-ok");g.disabled=!0,g.textContent="⏳ Génération…";const y={};r==="custom"&&(y.job=((f=document.getElementById("gen-one-job1"))==null?void 0:f.value)||null,y.job2=((d=document.getElementById("gen-one-job2"))==null?void 0:d.value)||null,y.rarity=((b=document.getElementById("gen-one-rarity"))==null?void 0:b.value)||null,y.country=((I=document.getElementById("gen-one-country"))==null?void 0:I.value)||null);try{await nn(e,y),l("Joueur généré ✅","success"),o(),$e(e.id)}catch(k){l("Erreur : "+k.message,"error"),g.disabled=!1,g.textContent="➕ Générer"}})},50)}async function nn(e,t={}){const n=t.country||(Math.random()<.5?e.country_code:nt(e.country_code)),o=t.job||q(dt),l=t.job2||null,a=t.rarity||(()=>{const B=Math.random()*100;return B<1.5?"legende":B<3?"pepite":B<4.5?"papyte":"normal"})(),m=it(),p=l?Math.max(0,m-2):0;let h=0,i=0,u=0,r=0;o==="GK"&&(h=m),o==="DEF"&&(i=m),o==="MIL"&&(u=m),o==="ATT"&&(r=m),l==="GK"&&(h=p),l==="DEF"&&(i=p),l==="MIL"&&(u=p),l==="ATT"&&(r=p);const g=Ie(n),y=tt(n),s=q(et),{data:f}=await _.from("players").select("surname_real").not("surname_real","is",null),d=new Set((f||[]).map(B=>B.surname_real).filter(Boolean)),b=rt(n),I=b.filter(B=>!d.has(B)),k=q(I.length?I:b),E={job:o,job2:l,firstname:at(n),surname_real:k,country_code:n,club_id:e.id,note_g:h,note_d:i,note_m:u,note_a:r,skin:g,hair:y,hair_length:s,rarity:a,sell_price:0,ethnie:ye(n)},{data:v}=await _.from("players").select("face").not("face","is",null),c=new Set((v||[]).map(B=>B.face).filter(Boolean)),x=await _e(n,c);x&&(E.face=x);const{data:w,error:$}=await _.from("players").insert(E).select("id").single();if($)throw $;const{error:L}=await _.from("cards").insert({card_type:"player",player_id:w.id});L&&console.warn("[GenOnePlayer] Erreur carte:",L.message)}function ct(){var e,t,n,o,l,a;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((t=document.getElementById("m-kit-color1"))==null?void 0:t.value)||"#1A6B3C",color2:((n=document.getElementById("m-kit-color2"))==null?void 0:n.value)||"#ffffff",color3:((o=document.getElementById("m-kit-color3"))==null?void 0:o.value)||"#000000",shorts:((l=document.getElementById("m-kit-shorts"))==null?void 0:l.value)||"#111111",socks:((a=document.getElementById("m-kit-socks"))==null?void 0:a.value)||"#ffffff"}}function te(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=Et(ct(),"panel"))}async function on(e,t){const n=(e.name.split(".").pop()||"png").toLowerCase(),o=`clubs/${t||"new"}-${Date.now()}.${n}`,{error:l}=await _.storage.from("assets").upload(o,e,{upsert:!0,cacheControl:"3600"});if(l)throw l;const{data:a}=_.storage.from("assets").getPublicUrl(o);return a.publicUrl}async function an(e,t,n,o){var k,E,v,c,x,w,$,L,B;const{toast:l}=o,a=document.getElementById("m-error"),m=document.getElementById("m-save"),p=(k=document.getElementById("m-real"))==null?void 0:k.value.trim(),h=(E=document.getElementById("m-encoded"))==null?void 0:E.value.trim().toUpperCase(),i=(v=document.getElementById("m-country"))==null?void 0:v.value.trim().toUpperCase(),u=((x=(c=document.getElementById("m-logo-file"))==null?void 0:c.files)==null?void 0:x[0])||null,r=((w=document.getElementById("m-logo-url-current"))==null?void 0:w.value)||null,g=(($=document.getElementById("m-gen-stadium"))==null?void 0:$.checked)??!1,y=((L=document.getElementById("m-gen-squad"))==null?void 0:L.checked)??!1,s=((B=document.getElementById("m-gen-strong"))==null?void 0:B.checked)??!1,f=ct();if(!p){a.textContent="Le nom du club est requis.";return}if(!h){a.textContent="Le nom encodé est requis.";return}if(!i){a.textContent="Le pays est requis.";return}m.disabled=!0,m.textContent="Enregistrement…";let d=r;if(u)try{m.textContent="📤 Envoi du logo…",d=await on(u,e==null?void 0:e.id)}catch(A){a.textContent="Erreur upload logo : "+A.message,m.disabled=!1,m.textContent=t?"💾 Enregistrer":"✅ Créer le club";return}const b={real_name:p,encoded_name:h,country_code:i,logo_url:d,kit_style:f.style,kit_color1:f.color1,kit_color2:f.color2,kit_color3:f.color3,kit_shorts:f.shorts,kit_socks:f.socks};let I=e==null?void 0:e.id;if(t){const{error:A}=await _.from("clubs").update(b).eq("id",I);if(A){a.textContent=A.message,m.disabled=!1,m.textContent="💾 Enregistrer";return}}else{const{data:A,error:S}=await _.from("clubs").insert(b).select().single();if(S){a.textContent=S.message,m.disabled=!1,m.textContent="✅ Créer le club";return}if(I=A.id,g){m.textContent="🏟️ Création du stade…";const{data:C,error:M}=await _.from("stadium_definitions").insert({name:`Stade de ${p}`,club_id:I,country_code:i}).select().single();M?console.warn("[Stadium] Erreur def stade:",M.message):C&&await _.from("cards").insert({card_type:"stadium",stadium_id:C.id})}y&&(m.textContent="⚽ Génération des joueurs…",await lt(I,i,l,s))}l(t?"Club modifié ✅":"Club créé ✅","success"),ue(n,o)}const rn=["normal","pepite","papyte","legende"],De=["GK","DEF","MIL","ATT"],ln=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let K={...R},re=[];async function sn(e,{toast:t}){const{data:n}=await _.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");re=n||[],K={...R},e.innerHTML=pn(re),cn(e,re,t),P()}function Ne(){var n;const e=((n=document.getElementById("cb-surname-real"))==null?void 0:n.value)||"",t=document.getElementById("cb-surname-enc");t&&(t.value=ce(e))}function dn(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=re.find(o=>String(o.id)===String(e));return t?{style:t.kit_style||z.style,color1:t.kit_color1||z.color1,color2:t.kit_color2||z.color2,shorts:t.kit_shorts||z.shorts,socks:t.kit_socks||z.socks}:{...z}}function P(){var g,y,s,f;const e=d=>{var b;return((b=document.getElementById(d))==null?void 0:b.value)||""},t={firstname:e("cb-firstname"),surname_real:e("cb-surname-enc")||ce(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((y=(g=document.getElementById("cb-club"))==null?void 0:g.selectedOptions[0])==null?void 0:y.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=dn(),o=document.getElementById("cb-club"),l=((f=(s=o==null?void 0:o.selectedOptions[0])==null?void 0:s.dataset)==null?void 0:f.logo)||null,a=Ze(K,n,120),m=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(a)}`,p=$t(t,{portraitUrl:m,clubLogoUrl:l,showNotes:!0}),h=document.getElementById("card-preview");h&&(h.innerHTML=p);const i=document.getElementById("avatar-preview-wrap");i&&(i.innerHTML=a);const u=e("cb-surname-real"),r=document.getElementById("encode-summary");r&&u&&(r.textContent=`${e("cb-firstname")} ${u} → ${e("cb-firstname")} ${t.surname_real}`)}function ut(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};K={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function cn(e,t,n){var l,a,m,p,h;e.querySelectorAll("input,select").forEach(i=>{i.addEventListener("input",P),i.addEventListener("change",P)});const o=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];o.forEach(i=>{var u;(u=document.getElementById(i))==null||u.addEventListener("change",()=>{ut(),P()})}),(l=document.getElementById("cb-surname-real"))==null||l.addEventListener("input",()=>{Ne(),P()}),(a=document.getElementById("btn-encode"))==null||a.addEventListener("click",()=>{Ne(),P()}),(m=document.getElementById("cb-club"))==null||m.addEventListener("change",P),(p=document.getElementById("btn-save-player"))==null||p.addEventListener("click",()=>un(n)),(h=document.getElementById("btn-reset"))==null||h.addEventListener("click",()=>{e.querySelectorAll("input").forEach(i=>i.value=""),e.querySelectorAll("select").forEach(i=>i.selectedIndex=0),K={...R},o.forEach(i=>{const u=i.replace("av-",""),r=document.getElementById(i);r&&(r.value=R[u]||"")}),P()})}async function un(e){const t=m=>{var p;return((p=document.getElementById(m))==null?void 0:p.value)||""},n=t("cb-surname-real").trim(),o=t("cb-surname-enc").trim()||ce(n);if(!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}ut();const l={firstname:t("cb-firstname").trim(),surname_real:n,surname_real:o,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:K,skin:K.skin||"blanc",hair:K.hairColor||"marron",hair_length:"court"},{error:a}=await _.from("players").insert(l);if(a){e("Erreur: "+a.message,"error");return}e(`✅ Joueur "${l.firstname} ${l.surname_real}" enregistré !`,"success")}function pn(e){const t=ln.map(([i,u])=>`<option value="${i}">${u} (${i})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(i=>`<option value="${i.id}" data-logo="${i.logo_url||""}">${i.encoded_name}</option>`).join(""),o=De.map(i=>`<option value="${i}">${i}</option>`).join(""),l='<option value="">Aucun</option>'+De.map(i=>`<option value="${i}">${i}</option>`).join(""),a=rn.map(i=>`<option value="${i}">${i.charAt(0).toUpperCase()+i.slice(1)}</option>`).join(""),m=(i,u,r)=>Object.entries(u).map(([g,y])=>`<option value="${g}" ${g===(r||"")?"selected":""}>${y.label}</option>`).join(""),p=Object.keys(_t).map(i=>`<option value="${i}" ${i===R.skin?"selected":""}>${i.charAt(0).toUpperCase()+i.slice(1)}</option>`).join(""),h=Object.keys(wt).map(i=>`<option value="${i}" ${i===R.hairColor?"selected":""}>${i.charAt(0).toUpperCase()+i.slice(1)}</option>`).join("");return`
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
          <div><label>Poste principal *</label><select id="cb-job">${o}</select></div>
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
          <div><label>Rareté</label><select id="cb-rarity">${a}</select></div>
          <div><label>Note min</label><input id="cb-note-min" type="number" min="0" max="10" placeholder="—"></div>
          <div><label>Note max</label><input id="cb-note-max" type="number" min="0" max="10" placeholder="—"></div>
        </div>
        <div style="margin-top:8px;display:flex;gap:8px">
          ${["normal","pepite","papyte","legende"].map(i=>`
            <div style="background:${It[i]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
              ${i.toUpperCase()}
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
              <select id="av-skin">${p}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${m("av-hair",kt,R.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${h}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${m("av-eyebrows",Lt,R.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${m("av-eyes",Bt,R.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${m("av-nose",At,R.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${m("av-mouth",St,R.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${m("av-beard",Ct,R.beard)}</select>
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
  `}async function pt(e,{toast:t}){const{data:n,error:o}=await _.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").order("created_at",{ascending:!1});if(o){e.innerHTML=`<p style="color:red">${o.message}</p>`;return}const l=n||[];e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <input id="search-users" placeholder="🔍 Rechercher un manager…" style="width:260px">
      <span style="font-size:13px;color:var(--gray-600)">${l.length} manager(s)</span>
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
  `,a(l),document.getElementById("search-users").addEventListener("input",m=>{const p=m.target.value.toLowerCase();a(l.filter(h=>{var i;return h.pseudo.toLowerCase().includes(p)||((i=h.club_name)==null?void 0:i.toLowerCase().includes(p))}))});function a(m){document.getElementById("users-tbody").innerHTML=m.map(p=>{const h=p.mmr??1e3,i=p.mmr_deviation??350,u=p.placement_matches??0,r=Tt(h),g=p.ranked_wins??0,y=p.ranked_losses??0,s=p.ranked_draws??0,f=g+y+s,d=f>0?Math.round(g/f*100):null,b=u<10,I=i<80?"#1A6B3C":i<150?"#e67e22":"#bb2020";return`
        <tr>
          <td>
            <div style="font-weight:700">${p.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${p.club_name||"—"}</div>
          </td>
          <td style="font-size:12px">
            <div>${(p.credits||0).toLocaleString("fr")} cr.</div>
            <div style="color:var(--gray-600)">Niv. ${p.level}</div>
          </td>
          <td style="font-size:12px">${p.wins}V / ${p.draws}N / ${p.losses}D</td>
          <td style="font-size:12px">🥇${p.trophies_top1} 🥈${p.trophies_top2} 🥉${p.trophies_top3}</td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:5px">
              <span style="font-size:16px">${r.emoji}</span>
              <span style="font-weight:700;color:${r.color}">${r.label}</span>
            </div>
            ${b?`<div style="font-size:10px;color:#e67e22">${u}/10 placement${u<10?` (${10-u} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${g}V ${s}N ${y}D${d!==null?` · ${d}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${h}</div>
            <div style="font-size:10px;color:${I}">RD ±${Math.round(i)}</div>
          </td>
          <td>
            ${p.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td>
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${p.id}" data-is-admin="${p.is_admin}">
              ${p.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(p=>{p.addEventListener("click",async()=>{const h=p.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${h?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:i}=await _.from("users").update({is_admin:h}).eq("id",p.dataset.toggleAdmin);i?t(i.message,"error"):(t("Rôle mis à jour ✅","success"),pt(e,{toast:t}))})})}}const mn=[{value:"normal",label:"Normal",color:"#ccc"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function mt(e,t){var h;const{toast:n}=t,{data:o,error:l}=await _.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_real, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(l){e.innerHTML=`<p style="color:var(--danger)">${l.message}</p>`;return}const a=o||[],m=a.filter(i=>i.status==="active").length,p=a.filter(i=>i.status==="sold").length;e.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px">
      <button id="btn-price-grid" class="btn btn-primary">📊 Grille des prix</button>
      <div style="display:flex;gap:12px">
        <div class="card-panel" style="min-width:120px;text-align:center;padding:12px 20px">
          <div style="font-size:22px;font-weight:700;color:#1A6B3C">${m}</div>
          <div style="font-size:11px;color:var(--tile-fg-dim)">Annonces actives</div>
        </div>
        <div class="card-panel" style="min-width:120px;text-align:center;padding:12px 20px">
          <div style="font-size:22px;font-weight:700;color:#D4A017">${p}</div>
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
            ${a.map(i=>{var y,s,f,d;const u=(y=i.card)==null?void 0:y.player,r=u?`${u.firstname} ${u.surname_real}`:((s=i.card)==null?void 0:s.card_type)||"—",g={active:"#1A6B3C",sold:"#D4A017",cancelled:"#888"};return`<tr>
                <td><b>${r}</b>${u?`<div style="font-size:10px;color:var(--tile-fg-dim)">${u.rarity} · ${u.job}</div>`:""}</td>
                <td style="font-size:12px">${((f=i.seller)==null?void 0:f.pseudo)||"—"}</td>
                <td style="font-size:12px">${((d=i.buyer)==null?void 0:d.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(i.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${g[i.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
                    ${i.status.toUpperCase()}
                  </span>
                </td>
                <td style="font-size:11px;color:var(--tile-fg-dim)">${new Date(i.listed_at).toLocaleDateString("fr")}</td>
                <td>
                  ${i.status==="active"?`<button class="btn btn-danger btn-sm" data-cancel="${i.id}">Annuler</button>`:""}
                </td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,document.querySelectorAll("[data-cancel]").forEach(i=>{i.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:u}=await _.from("market_listings").update({status:"cancelled"}).eq("id",i.dataset.cancel);u?n(u.message,"error"):(n("Annonce annulée","success"),mt(e,t))})}),(h=document.getElementById("btn-price-grid"))==null||h.addEventListener("click",()=>gn(t))}async function gn(e){await be(e)}function fn(){const e=document.getElementById("modal-overlay");if(!e||e._pgBlocker)return;const t=n=>{n.target===n.currentTarget&&n.stopImmediatePropagation()};e.addEventListener("click",t,!0),e._pgBlocker=t}function me(){const e=document.getElementById("modal-overlay");e!=null&&e._pgBlocker&&(e.removeEventListener("click",e._pgBlocker,!0),delete e._pgBlocker)}async function be(e){var y,s;const{openModal:t,closeModal:n,toast:o}=e,{data:l,error:a}=await _.from("sell_price_configs").select("*").order("rarity").order("note_min");if(a){o(a.message,"error");return}const m=f=>mn.map(d=>`<option value="${d.value}" ${d.value===f?"selected":""}>${d.label}</option>`).join(""),p=f=>`
    <tr data-row="${f.id}">
      <td style="padding:4px 8px">
        <select data-field="rarity" data-id="${f.id}" style="width:100%;padding:6px;font-size:13px">${m(f.rarity)}</select>
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
          ${(l||[]).map(p).join("")||'<tr><td colspan="6" style="text-align:center;color:#aaa;padding:20px">Aucune règle définie.</td></tr>'}
        </tbody>
      </table>
    </div>
  `;t("📊 Grille des prix — vente marché",h,`
    <button id="pg-add-row" class="btn btn-primary">+ Ajouter une ligne</button>
    <button id="pg-close" class="btn btn-ghost">Fermer</button>
  `),fn(),(y=document.getElementById("pg-close"))==null||y.addEventListener("click",()=>{me(),n()});function u(f){const d=f.dataset.id,b=f.dataset.field,I=b==="rarity"?f.value:Number(f.value)||0;return r(d,{[b]:I},f)}async function r(f,d,b){const I=document.querySelector(`tr[data-row="${f}"]`),k=$=>I.querySelector(`[data-field="${$}"]`),E="note_min"in d?d.note_min:Number(k("note_min").value),v="note_max"in d?d.note_max:Number(k("note_max").value),c="price_min"in d?d.price_min:Number(k("price_min").value),x="price_max"in d?d.price_max:Number(k("price_max").value);if(E>v){o("Note min doit être ≤ note max","error");return}if(c>x){o("Prix min doit être ≤ prix max","error");return}const{error:w}=await _.from("sell_price_configs").update(d).eq("id",f);if(w){o(w.message,"error");return}b&&(b.style.transition="background .3s",b.style.background="#e8f8ee",setTimeout(()=>{b.style.background=""},500))}function g(){document.querySelectorAll("#pg-tbody [data-field]").forEach(f=>{f.addEventListener("change",()=>u(f))})}g(),document.querySelectorAll("[data-del-row]").forEach(f=>{f.addEventListener("click",async()=>{confirm("Supprimer cette ligne ?")&&(await _.from("sell_price_configs").delete().eq("id",f.dataset.delRow),o("Ligne supprimée","success"),me(),be(e))})}),(s=document.getElementById("pg-add-row"))==null||s.addEventListener("click",async()=>{var k;const f={rarity:"normal",note_min:0,note_max:20,price_min:2500,price_max:15e3},{data:d,error:b}=await _.from("sell_price_configs").insert(f).select().single();if(b){o(b.message,"error");return}const I=document.getElementById("pg-tbody");I.querySelector("td[colspan]")&&(I.innerHTML=""),I.insertAdjacentHTML("beforeend",p(d)),g(),(k=document.querySelector(`[data-del-row="${d.id}"]`))==null||k.addEventListener("click",async function(){confirm("Supprimer cette ligne ?")&&(await _.from("sell_price_configs").delete().eq("id",d.id),o("Ligne supprimée","success"),me(),be(e))}),o("Ligne ajoutée — modifie les valeurs directement","success")})}async function yn(e,{toast:t}){e.innerHTML=`
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
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:n,error:o}=await _.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(o){t(o.message,"error");return}if(!n||n.length===0){t("Aucun club à exporter","info");return}let l=`real_name,encoded_name,country_code,logo_url
`;n.forEach(a=>{l+=[a.real_name,a.encoded_name,a.country_code,a.logo_url||""].map(Pe).join(",")+`
`}),ie("clubs_export.csv",l),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:o}=await _.from("players").select("firstname,surname_real,surname_real,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_real");if(o){t(o.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let l=`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(a=>{var m;l+=[a.firstname,a.surname_real,a.surname_real,a.country_code,((m=a.clubs)==null?void 0:m.encoded_name)||"",a.job,a.job2||"",a.note_g,a.note_d,a.note_m,a.note_a,a.rarity,a.note_min??"",a.note_max??"",a.skin,a.hair,a.hair_length,a.sell_price].map(Pe).join(",")+`
`}),ie("players_export.csv",l),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const o=n.target.files[0];if(!o)return;const l=document.getElementById("clubs-import-result");l.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const a=await o.text(),m=Fe(a);if(m.length===0){l.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let p=0,h=0;const i=[];for(const u of m){if(!u.real_name||!u.encoded_name||!u.country_code){h++,i.push(`Ligne ignorée (champs manquants): ${u.real_name||"?"}`);continue}const r={real_name:u.real_name,encoded_name:u.encoded_name.toUpperCase(),country_code:u.country_code.toUpperCase().slice(0,2),logo_url:u.logo_url||null},{error:g}=await _.from("clubs").upsert(r,{onConflict:"encoded_name"});g?(h++,i.push(`${u.encoded_name}: ${g.message}`)):p++}l.innerHTML=`<div style="color:var(--green)">✅ ${p} clubs importés</div>
        ${h>0?`<div style="color:#c0392b">❌ ${h} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${i.slice(0,10).join("<br>")}</div>`:""}`,t(`${p} clubs importés`,"success")}catch(a){l.innerHTML=`<span style="color:#c0392b">Erreur : ${a.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const o=n.target.files[0];if(!o)return;const l=document.getElementById("players-import-result");l.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const a=await o.text(),m=Fe(a);if(m.length===0){l.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:p}=await _.from("clubs").select("id,encoded_name"),h={};(p||[]).forEach(b=>{h[b.encoded_name.toUpperCase()]=b.id});let i=0,u=0;const r=[],g=["GK","DEF","MIL","ATT"],y=["normal","pepite","papyte","legende"],s=["blanc","metisse","typ","noir"],f=["blond","marron","noir","chauve"],d=["rase","court","milong","long"];for(const b of m){if(!b.firstname||!b.surname_real||!b.country_code||!b.job){u++,r.push(`Ligne ignorée (champs requis manquants): ${b.firstname||"?"}`);continue}if(!g.includes(b.job)){u++,r.push(`${b.firstname}: job invalide "${b.job}"`);continue}const I=b.club_encoded_name&&h[b.club_encoded_name.toUpperCase()]||null,k={firstname:b.firstname,surname_real:b.surname_real,surname_real:b.surname_real||ce(b.surname_real),country_code:b.country_code.toUpperCase().slice(0,2),club_id:I,job:b.job,job2:g.includes(b.job2)?b.job2:null,note_g:parseInt(b.note_g)||0,note_d:parseInt(b.note_d)||0,note_m:parseInt(b.note_m)||0,note_a:parseInt(b.note_a)||0,rarity:y.includes(b.rarity)?b.rarity:"normal",note_min:b.note_min!==""&&b.note_min!=null?parseInt(b.note_min):null,note_max:b.note_max!==""&&b.note_max!=null?parseInt(b.note_max):null,skin:s.includes(b.skin)?b.skin:"blanc",hair:f.includes(b.hair)?b.hair:"noir",hair_length:d.includes(b.hair_length)?b.hair_length:"court",sell_price:parseInt(b.sell_price)||0},{error:E}=await _.from("players").insert(k);E?(u++,r.push(`${b.firstname} ${b.surname_real}: ${E.message}`)):i++}l.innerHTML=`<div style="color:var(--green)">✅ ${i} joueurs importés</div>
        ${u>0?`<div style="color:#c0392b">❌ ${u} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${r.slice(0,10).join("<br>")}</div>`:""}`,t(`${i} joueurs importés`,"success")}catch(a){l.innerHTML=`<span style="color:#c0392b">Erreur : ${a.message}</span>`}n.target.value=""})}function Pe(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function ie(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),o=URL.createObjectURL(n),l=document.createElement("a");l.href=o,l.download=e,l.click(),URL.revokeObjectURL(o)}function Fe(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(m=>m.trim());if(t.length<2)return[];const n=t[0],o=n.split(";").length>n.split(",").length?";":",",l=Oe(n,o).map(m=>m.trim().replace(/^\uFEFF/,"").toLowerCase()),a=[];for(let m=1;m<t.length;m++){if(!t[m].trim())continue;const p=Oe(t[m],o),h={};l.forEach((i,u)=>{h[i]=(p[u]||"").trim()}),!Object.values(h).every(i=>!i)&&a.push(h)}return a}function Oe(e,t=","){const n=[];let o="",l=!1;for(let a=0;a<e.length;a++){const m=e[a];l?m==='"'?e[a+1]==='"'?(o+='"',a++):l=!1:o+=m:m==='"'?l=!0:m===t?(n.push(o),o=""):o+=m}return n.push(o),n}const bn={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function vn(e,{toast:t}){const n=Object.keys(pe);let o=n[0];const{data:l}=await _.from("formation_links_overrides").select("formation, links"),a={};(l||[]).forEach(u=>{a[u.formation]=u.links});let m=new Set;function p(u,r){return[u,r].sort().join("-")}function h(u){const r=a[u]||pe[u]||[];m=new Set(r.map(([g,y])=>p(g,y)))}h(o),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${n.map(u=>`<option value="${u}" ${u===o?"selected":""}>${u}</option>`).join("")}
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
  `;function i(){const u=Mt[o]||{},r=ze(o),g=320,y=400,s=22;function f(E){const v=u[E];return v?{x:v.x*g,y:v.y*y}:null}let d=`<svg width="${g}" height="${y}" viewBox="0 0 ${g} ${y}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;r.forEach(([E,v],c)=>{const x=f(E),w=f(v);if(!x||!w)return;const $=p(E,v),L=m.has($),B=L?"#3b82f6":"#999",A=L?.95:.35,S=L?4:3;d+=`<line x1="${x.x}" y1="${x.y}" x2="${w.x}" y2="${w.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${$}" style="cursor:pointer"/>`,d+=`<line x1="${x.x}" y1="${x.y}" x2="${w.x}" y2="${w.y}"
        stroke="${B}" stroke-width="${S}" stroke-dasharray="${L?"none":"4,3"}"
        opacity="${A}" pointer-events="none" data-line-key="${$}"/>`});for(const E of Object.keys(u)){const v=f(E);if(!v)continue;const c=E.replace(/\d+/,""),x=bn[c]||"#555";d+=`<circle cx="${v.x}" cy="${v.y}" r="${s}" fill="${x}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,d+=`<text x="${v.x}" y="${v.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${E}</text>`}d+="</svg>",document.getElementById("field-wrap").innerHTML=d;const b=document.getElementById("links-list");b.innerHTML=r.map(([E,v])=>{const c=p(E,v),x=m.has(c);return`
        <button class="link-toggle" data-key="${c}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${x?"#3b82f6":"#ddd"};
          background:${x?"#eaf2ff":"#fafafa"};
          color:${x?"#1d4ed8":"#888"}">
          <span>${E} ↔ ${v}</span>
          <span>${x?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const I=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');I&&(I.textContent=`Liens (${m.size}/${r.length} actifs)`);function k(E){m.has(E)?m.delete(E):m.add(E),i()}e.querySelectorAll(".link-hit").forEach(E=>{E.addEventListener("click",()=>k(E.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(E=>{E.addEventListener("click",()=>k(E.dataset.key))})}i(),document.getElementById("formation-select").addEventListener("change",u=>{o=u.target.value,h(o),i()}),document.getElementById("reset-btn").addEventListener("click",()=>{const u=pe[o]||[];m=new Set(u.map(([r,g])=>p(r,g))),i(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const r=ze(o).filter(([y,s])=>m.has(p(y,s))),{error:g}=await _.from("formation_links_overrides").upsert({formation:o,links:r,updated_at:new Date().toISOString()});if(g){t(g.message,"error");return}a[o]=r,t(`Liens enregistrés pour ${o} (${r.length} actifs)`,"success")})}const xn=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],hn=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],En=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function _n(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await _.from("booster_configs").select("*").order("sort_order");let n=null,o=[],l=null;const a=()=>window.innerWidth<700;async function m(){if(!n){o=[];return}if(n!==l){const{data:r}=await _.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");o=r||[],l=n}}function p(){return`
    <div id="booster-list" style="background:#fff;${a()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
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
    </div>`}function h(){const r=n?(t||[]).find(s=>s.id===n):null;if(!r)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const g=o.reduce((s,f)=>s+Number(f.percentage||0),0),y=Math.abs(g-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${a()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

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
              ${En.map(s=>`<option value="${s.value}" ${r.price_type===s.value?"selected":""}>${s.label}</option>`).join("")}
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
            <span style="margin-left:10px;font-size:12px;color:${y?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${g.toFixed(1)}% ${y?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${o.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':o.map((s,f)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${f}">
            <select class="rate-type" data-idx="${f}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${xn.map(d=>`<option value="${d.value}" ${s.card_type===d.value?"selected":""}>${d.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${f}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${hn.map(d=>`<option value="${d.value}" ${(s.rarity||"")===d.value?"selected":""}>${d.label}</option>`).join("")}
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
    </div>`}async function i(r=!1){r||await m();const g=!n&&a(),y=n&&a();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!a()||g||!n?p():""}
      ${!a()||y?h():""}
    </div>`,u()}function u(){var y,s,f,d,b,I,k;const r=E=>e.querySelector(E);e.querySelectorAll(".booster-row").forEach(E=>{E.addEventListener("click",v=>{v.target.closest(".btn-delete")||(n=E.dataset.id,l=null,i())})}),(y=r("#btn-back"))==null||y.addEventListener("click",()=>{n=null,i()}),(s=r("#btn-new"))==null||s.addEventListener("click",async()=>{const E=prompt("Nom du nouveau booster :");if(!(E!=null&&E.trim()))return;const{data:v,error:c}=await _.from("booster_configs").insert({name:E.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(c){alert(c.message);return}t.push(v),n=v.id,l=null,i()}),e.querySelectorAll(".btn-delete").forEach(E=>{E.addEventListener("click",async v=>{if(v.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await _.from("booster_configs").delete().eq("id",E.dataset.id);const c=t.findIndex(x=>x.id===E.dataset.id);c>-1&&t.splice(c,1),n===E.dataset.id&&(n=null,l=null),i()})}),(f=r("#btn-cancel"))==null||f.addEventListener("click",()=>{n=null,i()}),(d=r("#f-price-type"))==null||d.addEventListener("change",E=>{const v=r("#credits-field");v&&(v.style.opacity=E.target.value!=="credits"?"0.4":"1")}),(b=r("#btn-pick-icon"))==null||b.addEventListener("click",async()=>{var v;const E=r("#icon-picker-grid");if(E){if(E.style.display!=="none"){E.style.display="none";return}E.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',E.style.display="block";try{const x=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),w=Array.isArray(x)?x.filter(L=>L.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(L.name)):[];if(!w.length){E.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const $=((v=r("#f-image-url"))==null?void 0:v.value)||"";E.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${w.map(L=>`
          <div class="icon-pick-item" data-name="${L.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${L.name===$?"#1A6B3C":"#ddd"};background:${L.name===$?"#f0f7f0":"#fff"}">
            <img src="/icons/${L.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${L.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,E.querySelectorAll(".icon-pick-item").forEach(L=>{L.addEventListener("click",()=>{const B=r("#f-image-url");B&&(B.value=L.dataset.name),E.style.display="none"})})}catch(c){E.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${c.message}</div>`}}});function g(){e.querySelectorAll("[data-rate-idx]").forEach(E=>{var c,x,w,$,L;const v=Number(E.dataset.rateIdx);v>=0&&v<o.length&&(o[v].card_type=((c=E.querySelector(".rate-type"))==null?void 0:c.value)||"player",o[v].rarity=((x=E.querySelector(".rate-rarity"))==null?void 0:x.value)||null,o[v].note_min=Number((w=E.querySelector(".rate-note-min"))==null?void 0:w.value)||null,o[v].note_max=Number(($=E.querySelector(".rate-note-max"))==null?void 0:$.value)||null,o[v].percentage=Number((L=E.querySelector(".rate-pct"))==null?void 0:L.value)||0)})}(I=r("#btn-add-rate"))==null||I.addEventListener("click",()=>{g(),o.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:o.length}),i(!0)}),e.querySelectorAll(".btn-del-rate").forEach(E=>{E.addEventListener("click",()=>{g(),o.splice(Number(E.dataset.idx),1),i(!0)})}),(k=r("#btn-save"))==null||k.addEventListener("click",async()=>{var $,L,B,A,S,C,M,F,O,U,N,j,ne;const E=(t||[]).find(T=>T.id===n);if(!E)return;const v=[];e.querySelectorAll("[data-rate-idx]").forEach(T=>{var W,Z,Q,X,ee;const J=Number(T.dataset.rateIdx);v.push({booster_id:n,card_type:((W=T.querySelector(".rate-type"))==null?void 0:W.value)||"player",rarity:((Z=T.querySelector(".rate-rarity"))==null?void 0:Z.value)||null,note_min:Number((Q=T.querySelector(".rate-note-min"))==null?void 0:Q.value)||null,note_max:Number((X=T.querySelector(".rate-note-max"))==null?void 0:X.value)||null,percentage:Number((ee=T.querySelector(".rate-pct"))==null?void 0:ee.value)||0,sort_order:J});const D=v[v.length-1];D.rarity||(D.rarity=null),D.note_min||(D.note_min=null),D.note_max||(D.note_max=null)});const c=v.reduce((T,J)=>T+J.percentage,0);if(v.length&&Math.abs(c-100)>.5){alert(`La somme doit faire 100% (actuellement ${c.toFixed(1)}%)`);return}const x={name:((L=($=r("#f-name"))==null?void 0:$.value)==null?void 0:L.trim())||E.name,image_url:((A=(B=r("#f-image-url"))==null?void 0:B.value)==null?void 0:A.trim())||null,price_type:(S=r("#f-price-type"))==null?void 0:S.value,price_credits:Number((C=r("#f-price-credits"))==null?void 0:C.value)||0,card_count:Number((M=r("#f-card-count"))==null?void 0:M.value)||5,is_active:((F=r("#f-active"))==null?void 0:F.checked)??E.is_active,allow_duplicates:((O=r("#f-allow-dup"))==null?void 0:O.checked)??!0,sort_order:Number((U=r("#f-sort"))==null?void 0:U.value)||0,max_per_user:(N=r("#f-max-per-user"))!=null&&N.value?Number(r("#f-max-per-user").value):null,available_from:((j=r("#f-available-from"))==null?void 0:j.value)||null,available_until:((ne=r("#f-available-until"))==null?void 0:ne.value)||null},{error:w}=await _.from("booster_configs").update(x).eq("id",n);if(w){alert(w.message);return}if(Object.assign(E,x),await _.from("booster_drop_rates").delete().eq("booster_id",n),v.length){const{error:T}=await _.from("booster_drop_rates").insert(v);if(T){alert(T.message);return}}o=v,l=n,alert("✅ Booster enregistré !"),i(!0)})}i()}const gt=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function wn(e){await ke(e)}async function ke(e){const{data:t,error:n}=await _.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
          ${(t||[]).map(o=>In(o)).join("")}
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
              ${gt.map(o=>`<option value="${o.value}">${o.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>Ue(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>$n(e)),e.querySelectorAll("[data-edit]").forEach(o=>{const l=(t||[]).find(a=>a.id===o.dataset.edit);l&&o.addEventListener("click",()=>Ue(l))}),e.querySelectorAll("[data-delete]").forEach(o=>{o.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await _.from("sell_price_configs").delete().eq("id",o.dataset.delete),await ke(e))})})}function In(e){const t=gt.find(n=>n.value===e.rarity);return`
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
    </tr>`}function Ue(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function $n(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,o=parseInt(document.getElementById("form-price").value)||0,l=parseInt(document.getElementById("form-note-min").value)||1,a=parseInt(document.getElementById("form-note-max").value)||10;if(l>a){alert("Note min doit être ≤ note max");return}const m={rarity:n,price:o,note_min:l,note_max:a,updated_at:new Date().toISOString()};let p;if(t?{error:p}=await _.from("sell_price_configs").update(m).eq("id",t):{error:p}=await _.from("sell_price_configs").insert(m),p){alert("Erreur : "+p.message);return}document.getElementById("config-form").style.display="none",await ke(e)}async function kn(e){await Le(e)}async function Le(e){const{data:t}=await _.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Actualités</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(t||[]).map(n=>Ln(n)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>Ge(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>An(e)),e.querySelectorAll("[data-edit-row]").forEach(n=>{const o=(t||[]).find(l=>l.id===n.dataset.editRow);o&&n.addEventListener("click",()=>Ge(o))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await _.from("patch_notes").delete().eq("id",n.dataset.delete),await Le(e))})})}function Ln(e){const t=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function Ge(e){const t=document.getElementById("article-form");t.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img-current").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-img-file").value="";const n=document.getElementById("form-art-img-preview");n.innerHTML=e!=null&&e.image_url?`<img src="${e.image_url}" style="width:100%;height:100%;object-fit:cover">`:'<span style="font-size:20px;opacity:.4">📰</span>',document.getElementById("form-art-img-file").onchange=a=>{var h;const m=(h=a.target.files)==null?void 0:h[0];if(!m)return;const p=new FileReader;p.onload=()=>{n.innerHTML=`<img src="${p.result}" style="width:100%;height:100%;object-fit:cover">`},p.readAsDataURL(m)},document.getElementById("form-art-pub").checked=e?e.is_published:!0;const o=new Date((e==null?void 0:e.published_at)||Date.now()),l=new Date(o.getTime()-o.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=l,t.scrollIntoView({behavior:"smooth"})}async function Bn(e){const t=(e.name.split(".").pop()||"png").toLowerCase(),n=`journal/${Date.now()}.${t}`,{error:o}=await _.storage.from("assets").upload(n,e,{upsert:!0,cacheControl:"3600"});if(o)throw o;const{data:l}=_.storage.from("assets").getPublicUrl(n);return l.publicUrl}async function An(e){var y;const t=document.getElementById("form-id").value,n=document.getElementById("form-art-title").value.trim(),o=document.getElementById("form-art-desc").value.trim(),l=((y=document.getElementById("form-art-img-file").files)==null?void 0:y[0])||null,a=document.getElementById("form-art-img-current").value||null,m=document.getElementById("form-art-pub").checked,p=document.getElementById("form-art-date").value,h=document.getElementById("form-save");if(!n){alert("Le titre est obligatoire.");return}if(!o){alert("La description est obligatoire.");return}let i=a;if(l)try{h&&(h.textContent="📤 Envoi de l'image…"),i=await Bn(l)}catch(s){alert("Erreur upload image : "+s.message),h&&(h.textContent="💾 Enregistrer");return}const u=p?new Date(p).toISOString():new Date().toISOString(),r={title:n,description:o,image_url:i,is_published:m,published_at:u};let g;if(t?{error:g}=await _.from("patch_notes").update(r).eq("id",t):{error:g}=await _.from("patch_notes").insert(r),g){alert("Erreur : "+g.message);return}document.getElementById("article-form").style.display="none",await Le(e)}async function Sn(e){await Y(e)}async function Y(e){var u,r,g,y,s,f,d,b,I,k,E,v;const{data:t}=await _.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([c,x,w])=>`<button type="button" data-cmd="${x}" title="${w}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${c}</button>`).join("")}
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
            </div>`:(t||[]).map(c=>Cn(c)).join("")}
        </div>
      </div><!-- /colonne droite -->
    </div>`,(u=document.getElementById("ts-add"))==null||u.addEventListener("click",()=>He(null,(t==null?void 0:t.length)||0)),(r=document.getElementById("ts-reset"))==null||r.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:c}=await _.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(c?"Erreur : "+c.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(g=document.getElementById("ts-cancel"))==null||g.addEventListener("click",ft),(y=document.getElementById("ts-save"))==null||y.addEventListener("click",()=>Mn(e)),(s=document.getElementById("ts-preview-btn"))==null||s.addEventListener("click",Tn);const n=document.getElementById("ts-editor"),o=()=>{const c=document.getElementById("ts-content");c&&n&&(c.value=n.innerHTML)};n==null||n.addEventListener("input",o),n==null||n.addEventListener("blur",o);const l=()=>{document.activeElement!==n&&(n==null||n.focus())};(f=document.getElementById("ts-toolbar"))==null||f.querySelectorAll("[data-cmd]").forEach(c=>{c.addEventListener("mousedown",x=>{x.preventDefault(),l();const w=c.dataset.cmd;w.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,w.split(":")[1]):document.execCommand(w,!1,null),o()})}),(d=document.getElementById("ts-insert-color"))==null||d.addEventListener("mousedown",c=>{c.preventDefault(),l();const x=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");x&&(document.execCommand("foreColor",!1,x),o())}),(b=document.getElementById("ts-clear-format"))==null||b.addEventListener("mousedown",c=>{c.preventDefault(),l(),document.execCommand("removeFormat",!1,null),o()}),n==null||n.addEventListener("focus",()=>{n&&(n.style.borderColor="#1A6B3C")}),n==null||n.addEventListener("blur",()=>{n&&(n.style.borderColor="#ddd")});const a=document.getElementById("ts-image"),m=document.getElementById("ts-img-preview"),p=document.getElementById("ts-img-preview-el"),h=document.getElementById("ts-img-picker-grid"),i=()=>{var x;const c=(x=a==null?void 0:a.value)==null?void 0:x.trim();if(c){const w="/";p.src=`${w}icons/${c}`,m.style.display="block"}else m.style.display="none"};a==null||a.addEventListener("input",i),(I=document.getElementById("ts-img-clear"))==null||I.addEventListener("click",()=>{a&&(a.value=""),m.style.display="none",h.style.display="none"}),(k=document.getElementById("ts-img-pick"))==null||k.addEventListener("click",async()=>{if(h.style.display!=="none"){h.style.display="none";return}h.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',h.style.display="block";try{const x=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),w=Array.isArray(x)?x.filter(L=>L.name.startsWith("tuto_")):[];if(!w.length){h.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const $="/";h.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+w.map(L=>`
          <div data-pick="${L.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${$}icons/${L.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${L.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",h.querySelectorAll("[data-pick]").forEach(L=>{L.addEventListener("click",()=>{a&&(a.value=L.dataset.pick),i(),h.style.display="none"})})}catch(c){h.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+c.message+"</div>"}}),(E=document.getElementById("ts-color"))==null||E.addEventListener("input",c=>{const x=document.getElementById("ts-color-hex");x&&(x.value=c.target.value)}),(v=document.getElementById("ts-color-hex"))==null||v.addEventListener("input",c=>{const x=c.target.value;if(/^#[0-9a-fA-F]{6}$/.test(x)){const w=document.getElementById("ts-color");w&&(w.value=x)}}),e.querySelectorAll("[data-edit-row]").forEach(c=>{const x=(t||[]).find(w=>w.id===c.dataset.editRow);x&&c.addEventListener("click",()=>He(x))}),e.querySelectorAll("[data-delete]").forEach(c=>{c.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await _.from("tutorial_steps").delete().eq("id",c.dataset.delete),Y(e))})}),e.querySelectorAll("[data-toggle]").forEach(c=>{c.addEventListener("click",async()=>{const x=(t||[]).find(w=>w.id===c.dataset.toggle);x&&(await _.from("tutorial_steps").update({is_active:!x.is_active}).eq("id",x.id),Y(e))})}),e.querySelectorAll("[data-up]").forEach(c=>{c.addEventListener("click",async()=>{const x=t||[],w=x.findIndex($=>$.id===c.dataset.up);w<=0||(await Promise.all([_.from("tutorial_steps").update({step_order:x[w-1].step_order}).eq("id",x[w].id),_.from("tutorial_steps").update({step_order:x[w].step_order}).eq("id",x[w-1].id)]),Y(e))})}),e.querySelectorAll("[data-down]").forEach(c=>{c.addEventListener("click",async()=>{const x=t||[],w=x.findIndex($=>$.id===c.dataset.down);w<0||w>=x.length-1||(await Promise.all([_.from("tutorial_steps").update({step_order:x[w+1].step_order}).eq("id",x[w].id),_.from("tutorial_steps").update({step_order:x[w].step_order}).eq("id",x[w+1].id)]),Y(e))})})}function Cn(e){return`
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
  </div>`}function He(e,t=0){document.getElementById("ts-form-empty").style.display="none",document.getElementById("ts-form-content").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const n=document.getElementById("ts-editor");n&&(n.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??t,document.getElementById("ts-active").checked=e?e.is_active:!0;const o=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=o,document.getElementById("ts-color-hex").value=o;const l=(e==null?void 0:e.image_url)||"",a=document.getElementById("ts-image");a&&(a.value=l);const m=document.getElementById("ts-img-preview"),p=document.getElementById("ts-img-preview-el");if(l&&m&&p){const h="/";p.src=`${h}icons/${l}`,m.style.display="block"}else m&&(m.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function ft(){document.getElementById("ts-form-content").style.display="none",document.getElementById("ts-form-empty").style.display="block",document.getElementById("ts-preview-area").innerHTML=""}function Tn(){var i,u;const e=document.getElementById("ts-emoji").value||"⚽",t=document.getElementById("ts-title").value||"Titre",n=document.getElementById("ts-editor"),o=n?n.innerHTML:document.getElementById("ts-content").value||"",l=document.getElementById("ts-color-hex").value||"#1A6B3C",a=(u=(i=document.getElementById("ts-image"))==null?void 0:i.value)==null?void 0:u.trim(),p=a?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${a}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",h=document.getElementById("ts-preview-area");h.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${l}"></div></div>
        <div style="padding:20px 20px 0;text-align:center">
          <div style="font-size:48px;margin-bottom:8px;line-height:1">${e}</div>
          <div style="font-size:17px;font-weight:900;color:#111;margin-bottom:4px">${t}</div>
          <div style="font-size:11px;color:#aaa">6 / 10</div>
        </div>
        ${p}
        <div style="padding:${a?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${o}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${l};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,h.querySelectorAll("ul,ol").forEach(r=>{r.style.paddingLeft="20px",r.style.margin="6px 0"}),h.querySelectorAll("li").forEach(r=>{r.style.marginBottom="4px"}),h.querySelectorAll("p").forEach(r=>{r.style.marginBottom="8px"})}async function Mn(e){var r,g;const t=document.getElementById("ts-id").value,n=document.getElementById("ts-emoji").value.trim()||"⚽",o=document.getElementById("ts-title").value.trim(),l=document.getElementById("ts-editor"),a=(l?l.innerHTML:document.getElementById("ts-content").value).trim(),m=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",p=parseInt(document.getElementById("ts-order").value)||0,h=document.getElementById("ts-active").checked;if(!o||!a){alert("Titre et contenu sont obligatoires.");return}const i={emoji:n,title:o,content:a,color:m,step_order:p,is_active:h,image_url:((g=(r=document.getElementById("ts-image"))==null?void 0:r.value)==null?void 0:g.trim())||null};let u;if(t?{error:u}=await _.from("tutorial_steps").update(i).eq("id",t):{error:u}=await _.from("tutorial_steps").insert(i),u){alert("Erreur : "+u.message);return}ft(),Y(e)}const yt="/",zn=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function Rn(e,t){await ve(e,t)}async function ve(e,t){var l;const[{data:n},{data:o}]=await Promise.all([_.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),_.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">🏟️ Stades</h2>
        <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="st-list">
        ${(n||[]).length?(n||[]).map(a=>jn(a)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucun stade créé.</div>'}
      </div>
    </div>`,(l=document.getElementById("st-add-btn"))==null||l.addEventListener("click",()=>qe(null,o,e,t)),e.querySelectorAll("[data-edit-stadium]").forEach(a=>{a.addEventListener("click",()=>{const m=(n||[]).find(p=>p.id===a.dataset.editStadium);m&&qe(m,o,e,t)})})}function jn(e){var l,a;let t=null;e.image_url?t=e.image_url.startsWith("http")?e.image_url:`${yt}icons/${e.image_url}`:(l=e.club)!=null&&l.logo_url?t=e.club.logo_url:e.country_code&&(t=`https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/64.png`);const n=((a=e.club)==null?void 0:a.encoded_name)||e.country_code||"—",o=Qe(e.name,t,`${n}<br>+10 ⭐`,{width:140});return`<div data-edit-stadium="${e.id}" style="cursor:pointer;transition:transform .15s" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
    ${o}
  </div>`}function qe(e,t,n,o){var u,r,g;const{openModal:l,closeModal:a,toast:m}=o,p=`
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
            ${(t||[]).map(y=>`<option value="${y.id}" data-logo="${y.logo_url||""}" ${(e==null?void 0:e.club_id)===y.id?"selected":""}>${y.encoded_name}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>PAYS (si pas de club)</label>
          <select id="st-country">
            <option value="">— Aucun pays —</option>
            ${zn.map(([y,s])=>`<option value="${y}" ${(e==null?void 0:e.country_code)===y?"selected":""}>${s} (${y})</option>`).join("")}
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
  `;l(e?`Modifier : ${e.name}`:"Nouveau stade",p,`
    <button id="st-cancel" class="btn btn-ghost">Annuler</button>
    <button id="st-save" class="btn btn-primary">Enregistrer</button>
  `);const i=()=>{var x,w,$,L,B,A,S;const y=((x=document.getElementById("st-name"))==null?void 0:x.value)||"NOM DU STADE",s=($=(w=document.getElementById("st-image"))==null?void 0:w.value)==null?void 0:$.trim(),f=(B=(L=document.getElementById("st-country"))==null?void 0:L.value)==null?void 0:B.trim(),d=document.getElementById("st-club"),b=(d==null?void 0:d.selectedIndex)||0,I=d&&b>0?d.options[b].text:"",k=((S=(A=d==null?void 0:d.options[b])==null?void 0:A.getAttribute)==null?void 0:S.call(A,"data-logo"))||"";let E=null;s?E=s.startsWith("http")?s:`${yt}icons/${s}`:k?E=k:f&&(E=`https://flagsapi.com/${f.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`);const v=I||f||"—",c=document.getElementById("st-preview-card");c&&(c.innerHTML=Qe(y,E,`${v}<br>+10 ⭐`,{width:140}))};i(),["st-name","st-club","st-country","st-image"].forEach(y=>{var s,f;(s=document.getElementById(y))==null||s.addEventListener("input",i),(f=document.getElementById(y))==null||f.addEventListener("change",i)}),(u=document.getElementById("st-cancel"))==null||u.addEventListener("click",()=>a()),(r=document.getElementById("st-save"))==null||r.addEventListener("click",async()=>{const y=document.getElementById("st-name").value.trim(),s=document.getElementById("st-club").value||null,f=document.getElementById("st-country").value.trim().toUpperCase()||null,d=document.getElementById("st-image").value.trim()||null;if(!y){m("Le nom est obligatoire","error");return}const b={name:y,club_id:s,country_code:f,image_url:d},{error:I}=e?await _.from("stadium_definitions").update(b).eq("id",e.id):await _.from("stadium_definitions").insert(b);if(I){m("Erreur : "+I.message,"error");return}m(e?"Stade modifié ✅":"Stade créé ✅","success"),a(),ve(n,o)}),(g=document.getElementById("st-delete"))==null||g.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await _.from("stadium_definitions").delete().eq("id",e.id),m("Stade supprimé","success"),a(),ve(n,o))})}const H=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],Dn=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}],G=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],Ke=["GK","DEF","MIL","ATT"];async function Nn(e,t){await Be(e,t)}async function Be(e,t){var o;const{data:n}=await _.from("gc_definitions").select("*").order("sort_order").order("created_at");e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">⚡ Game Changers</h2>
        <button id="gc-add-btn" class="btn btn-primary">+ Nouvelle carte</button>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="gc-list">
        ${(n||[]).length?(n||[]).map(l=>Pn(l)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucune carte Game Changer.</div>'}
      </div>
    </div>`,(o=document.getElementById("gc-add-btn"))==null||o.addEventListener("click",()=>Je(null,e,t)),e.querySelectorAll("[data-edit-gc]").forEach(l=>{l.addEventListener("click",()=>{const a=(n||[]).find(m=>m.id===l.dataset.editGc);a&&Je(a,e,t)})}),e.querySelectorAll(".btn-del-gc").forEach(l=>{l.addEventListener("click",async a=>{a.stopPropagation(),confirm("Supprimer cette carte Game Changer ?")&&(await _.from("gc_definitions").delete().eq("id",l.dataset.del),Be(e,t))})})}function Pn(e){const t=H.find(l=>l.value===e.gc_type)||H[0],n=e.image_url?`/icons/${e.image_url}`:null,o=ge(e.name||"?",n,t.label.split(" ")[0],e.effect||"",{width:130});return`<div data-edit-gc="${e.id}" style="position:relative;cursor:pointer">
    ${o}
    <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
      <button class="btn-del-gc" data-del="${e.id}"
        style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0">✕</button>
    </div>
    ${e.is_active?"":'<div style="position:absolute;top:4px;right:4px;z-index:10;background:#555;color:#fff;font-size:9px;font-weight:700;padding:2px 6px;border-radius:8px">INACTIF</div>'}
  </div>`}function Je(e,t,n){var g,y,s,f;const{openModal:o,closeModal:l,toast:a}=n,m=!e,p=e||{name:"",gc_type:"game_changer",color:"purple",effect:"",image_url:"",sort_order:0,is_active:!0,effect_type:"BOOST_STAT",effect_params:{}},h=(()=>{const d=p.effect_params||{},b=G.find(I=>I.value===(p.effect_type||"BOOST_STAT"))||G[0];return`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${b.hasValue?`<div>
        <label>VALEUR (+N)</label>
        <input id="gc-p-value" type="number" min="1" max="5" value="${d.value||2}">
      </div>`:""}
      ${b.hasCount?`<div>
        <label>NB JOUEURS</label>
        <input id="gc-p-count" type="number" min="1" max="11" value="${d.count||1}">
      </div>`:""}
      ${b.hasTarget?`<div>
        <label>CIBLE</label>
        <select id="gc-p-target">
          <option value="home" ${(d.target||"home")==="home"?"selected":""}>Mon équipe</option>
          <option value="opponent" ${d.target==="opponent"?"selected":""}>Équipe adverse</option>
        </select>
      </div>`:""}
      ${b.hasRoles?`<div>
        <label>POSTES CIBLÉS</label>
        <div style="display:flex;gap:4px;flex-wrap:wrap">
          ${Ke.map(I=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555">
            <input type="checkbox" class="gc-p-role" value="${I}" ${!d.roles||d.roles.includes(I)?"checked":""}> ${I}
          </label>`).join("")}
        </div>
      </div>`:""}
    </div>`})(),i=`
    <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:#1a1a2e;border-radius:12px">
      <div id="gc-modal-preview">${ge(p.name||"?",p.image_url?`/icons/${p.image_url}`:null,(H.find(d=>d.value===p.gc_type)||H[0]).label.split(" ")[0],p.effect||"",{width:150})}</div>
    </div>

    <div style="display:flex;flex-direction:column;gap:12px">
      <div>
        <label>NOM</label>
        <input id="gc-name" value="${p.name}">
      </div>
      <div>
        <label>EFFET / DESCRIPTION</label>
        <textarea id="gc-effect" rows="3">${p.effect||""}</textarea>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label>TYPE</label>
          <select id="gc-type">
            ${H.map(d=>`<option value="${d.value}" ${p.gc_type===d.value?"selected":""}>${d.label}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>COULEUR</label>
          <select id="gc-color">
            ${Dn.map(d=>`<option value="${d.value}" ${p.color===d.value?"selected":""}>${d.label}</option>`).join("")}
          </select>
        </div>
      </div>
      <div>
        <label>IMAGE (public/icons/gamechanger-*)</label>
        <div style="display:flex;gap:8px;align-items:center">
          <input id="gc-image-url" value="${p.image_url||""}" placeholder="gamechanger-nom.png" style="flex:1">
          <button id="btn-pick-gc-icon" class="btn btn-primary btn-sm" style="white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
        </div>
        <div id="gc-icon-picker" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label>ORDRE</label>
          <input id="gc-sort" type="number" value="${p.sort_order||0}">
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding-top:20px">
          <input type="checkbox" id="gc-active" ${p.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
          <label for="gc-active" style="cursor:pointer;font-weight:600;text-transform:none">Actif</label>
        </div>
      </div>
      <div style="border-top:1px solid #eee;padding-top:12px;margin-top:4px">
        <label style="color:#7a28b8">EFFET EN JEU</label>
        <div>
          <label>TYPE D'EFFET</label>
          <select id="gc-effect-type" style="margin-bottom:10px">
            ${G.map(d=>`<option value="${d.value}" ${(p.effect_type||"BOOST_STAT")===d.value?"selected":""}>${d.label}</option>`).join("")}
          </select>
        </div>
        <div id="gc-params-wrap">${h}</div>
      </div>
    </div>
  `;o(m?"Nouvelle carte Game Changer":`Modifier : ${p.name}`,i,`
    <button id="gc-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gc-save" class="btn btn-primary">💾 Enregistrer</button>
  `);const r=()=>{var c,x,w,$,L;const d=((c=document.getElementById("gc-name"))==null?void 0:c.value)||"?",b=((x=document.getElementById("gc-effect"))==null?void 0:x.value)||"",I=((w=document.getElementById("gc-type"))==null?void 0:w.value)||"game_changer",k=(L=($=document.getElementById("gc-image-url"))==null?void 0:$.value)==null?void 0:L.trim(),E=H.find(B=>B.value===I)||H[0],v=document.getElementById("gc-modal-preview");v&&(v.innerHTML=ge(d,k?`/icons/${k}`:null,E.label.split(" ")[0],b,{width:150}))};["gc-name","gc-effect","gc-type","gc-image-url"].forEach(d=>{var b,I;(b=document.getElementById(d))==null||b.addEventListener("input",r),(I=document.getElementById(d))==null||I.addEventListener("change",r)}),(g=document.getElementById("gc-effect-type"))==null||g.addEventListener("change",()=>{const d=document.getElementById("gc-effect-type").value,b=G.find(k=>k.value===d)||G[0],I=document.getElementById("gc-params-wrap");I.innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${b.hasValue?'<div><label>VALEUR (+N)</label><input id="gc-p-value" type="number" min="1" max="5" value="2"></div>':""}
      ${b.hasCount?'<div><label>NB JOUEURS</label><input id="gc-p-count" type="number" min="1" max="11" value="1"></div>':""}
      ${b.hasTarget?'<div><label>CIBLE</label><select id="gc-p-target"><option value="home">Mon équipe</option><option value="opponent">Équipe adverse</option></select></div>':""}
      ${b.hasRoles?`<div><label>POSTES CIBLÉS</label><div style="display:flex;gap:4px;flex-wrap:wrap">${Ke.map(k=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555"><input type="checkbox" class="gc-p-role" value="${k}" checked> ${k}</label>`).join("")}</div></div>`:""}
    </div>`}),(y=document.getElementById("btn-pick-gc-icon"))==null||y.addEventListener("click",async()=>{var b;const d=document.getElementById("gc-icon-picker");if(d){if(d.style.display!=="none"){d.style.display="none";return}d.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',d.style.display="block";try{const k=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),E=Array.isArray(k)?k.filter(c=>c.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(c.name)):[];if(!E.length){d.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const v=((b=document.getElementById("gc-image-url"))==null?void 0:b.value)||"";d.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
        ${E.map(c=>`
        <div class="gc-icon-item" data-name="${c.name}"
          style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${c.name===v?"#7a28b8":"#ddd"};background:${c.name===v?"#f5f0ff":"#fff"}">
          <img src="/icons/${c.name}" style="height:44px;width:100%;object-fit:contain">
          <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
        </div>`).join("")}
      </div>`,d.querySelectorAll(".gc-icon-item").forEach(c=>{c.addEventListener("click",()=>{const x=document.getElementById("gc-image-url");x&&(x.value=c.dataset.name),d.style.display="none",r()})})}catch(I){d.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${I.message}</div>`}}}),(s=document.getElementById("gc-cancel"))==null||s.addEventListener("click",()=>l()),(f=document.getElementById("gc-save"))==null||f.addEventListener("click",async()=>{var v,c,x,w,$,L,B,A,S,C,M,F,O,U;const d=G.find(N=>{var j;return N.value===(((j=document.getElementById("gc-effect-type"))==null?void 0:j.value)||"BOOST_STAT")})||G[0],b=d.hasRoles?[...document.querySelectorAll(".gc-p-role:checked")].map(N=>N.value):null,I={...d.hasValue?{value:Number((v=document.getElementById("gc-p-value"))==null?void 0:v.value)||2}:{},...d.hasCount?{count:Number((c=document.getElementById("gc-p-count"))==null?void 0:c.value)||1}:{},...d.hasTarget?{target:((x=document.getElementById("gc-p-target"))==null?void 0:x.value)||"home"}:{},...d.hasRoles?{roles:b!=null&&b.length?b:null}:{}},k={name:(($=(w=document.getElementById("gc-name"))==null?void 0:w.value)==null?void 0:$.trim())||"",effect:((B=(L=document.getElementById("gc-effect"))==null?void 0:L.value)==null?void 0:B.trim())||null,image_url:((S=(A=document.getElementById("gc-image-url"))==null?void 0:A.value)==null?void 0:S.trim())||null,gc_type:((C=document.getElementById("gc-type"))==null?void 0:C.value)||"game_changer",color:((M=document.getElementById("gc-color"))==null?void 0:M.value)||"purple",sort_order:Number((F=document.getElementById("gc-sort"))==null?void 0:F.value)||0,is_active:((O=document.getElementById("gc-active"))==null?void 0:O.checked)??!0,effect_type:((U=document.getElementById("gc-effect-type"))==null?void 0:U.value)||"BOOST_STAT",effect_params:I};if(!k.name){a("Le nom est obligatoire","error");return}const{error:E}=m?await _.from("gc_definitions").insert(k):await _.from("gc_definitions").update(k).eq("id",p.id);if(E){a(E.message,"error");return}a(m?"Carte créée ✅":"Carte modifiée ✅","success"),l(),Be(t,n)})}async function Fn(e,{toast:t,openModal:n,closeModal:o}){await V(e,{toast:t,openModal:n,closeModal:o})}async function V(e,t){var E;const{toast:n,openModal:o,closeModal:l}=t,[{data:a,error:m},{data:p}]=await Promise.all([_.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),_.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1)]);if(m){e.innerHTML=`<p style="color:red">${m.message}</p>`;return}const h=a||[],i=h.find(v=>v.is_active),u=(p||[]).filter(v=>(v.placement_matches||0)>=1),r=u.filter(v=>(v.placement_matches||0)>=10),g=["bronze","silver","gold","platinum","diamond","master"],y={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},s={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},f={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},d={};g.forEach(v=>{d[v]=0}),r.forEach(v=>{const c=v.rank_tier||"bronze";d[c]!==void 0&&d[c]++});const b=r.length?Math.round(r.reduce((v,c)=>v+(c.mmr||1e3),0)/r.length):0;function I(v){return v?new Date(v).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function k(v){const c=new Date;return v.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(v.end_at)<c?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${i?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${i.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${u.length}</div>
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
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(i.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${r.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${g.map(v=>{const c=d[v],x=r.length>0?Math.round(c/r.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${f[v]} ${y[v]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${x}%;background:${s[v]};border-radius:4px;transition:width 0.5s"></div>
                </div>
                <span style="width:40px;text-align:right;color:var(--gray-600)">${c} (${x}%)</span>
              </div>`}).join("")}
        </div>`:`<div style="font-size:12px;color:var(--gray-600)">Aucun joueur classé pour l'instant.</div>`}
      </div>`:`
      <div class="card-panel" style="background:rgba(230,120,34,0.08);border:1.5px solid #e67e22">
        <div style="font-weight:700;color:#e67e22">⚠️ Aucune saison active</div>
        <div style="font-size:13px;color:var(--gray-600);margin-top:4px">Le mode Ranked est désactivé jusqu'à l'activation d'une saison.</div>
      </div>`}

      <!-- Header + bouton créer -->
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div style="font-weight:700;font-size:14px">Toutes les saisons (${h.length})</div>
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
              ${h.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':h.map(v=>{const c=Math.round((new Date(v.end_at)-new Date(v.start_at))/864e5),x=new Date(v.end_at)<new Date&&!v.is_active;return`
                    <tr>
                      <td><b>${v.name}</b></td>
                      <td style="font-size:12px">${I(v.start_at)}</td>
                      <td style="font-size:12px">${I(v.end_at)}</td>
                      <td style="font-size:12px">${c} jours</td>
                      <td>${k(v)}</td>
                      <td style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn btn-ghost btn-sm" data-edit="${v.id}">✏️ Modifier</button>
                        ${v.is_active?`<button class="btn btn-ghost btn-sm" data-deactivate="${v.id}" style="color:#e67e22">⏹ Désactiver</button>`:`<button class="btn btn-primary btn-sm" data-activate="${v.id}">▶ Activer</button>`}
                        ${x?`<button class="btn btn-danger btn-sm" data-delete="${v.id}">🗑</button>`:""}
                      </td>
                    </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>`,(E=document.getElementById("create-season-btn"))==null||E.addEventListener("click",()=>{Ve(null,{toast:n,openModal:o,closeModal:l,reload:()=>V(e,t)})}),e.querySelectorAll("[data-edit]").forEach(v=>{const c=h.find(x=>x.id==v.dataset.edit);v.addEventListener("click",()=>{Ve(c,{toast:n,openModal:o,closeModal:l,reload:()=>V(e,t)})})}),e.querySelectorAll("[data-activate]").forEach(v=>{v.addEventListener("click",async()=>{const c=parseInt(v.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:x}=await _.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(x){n(x.message,"error");return}const{error:w}=await _.from("ranked_seasons").update({is_active:!0}).eq("id",c);if(w){n(w.message,"error");return}await _.from("users").update({current_season_id:c}).gt("placement_matches",0),n("Saison activée ✅","success"),V(e,t)})}),e.querySelectorAll("[data-deactivate]").forEach(v=>{v.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:c}=await _.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(v.dataset.deactivate));if(c){n(c.message,"error");return}n("Saison désactivée","success"),V(e,t)})}),e.querySelectorAll("[data-delete]").forEach(v=>{v.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:c}=await _.from("ranked_seasons").delete().eq("id",parseInt(v.dataset.delete));if(c){n(c.message,"error");return}n("Saison supprimée","success"),V(e,t)})})}function Ve(e,{toast:t,openModal:n,closeModal:o,reload:l}){const a=!!e,m=new Date().toISOString().slice(0,16),p=new Date(Date.now()+90*864e5).toISOString().slice(0,16),h=e?new Date(e.start_at).toISOString().slice(0,16):m,i=e?new Date(e.end_at).toISOString().slice(0,16):p,u=(e==null?void 0:e.name)||"";n(a?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
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
        <input id="season-end" type="datetime-local" value="${i}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${a?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function r(){var d,b;const g=(d=document.getElementById("season-start"))==null?void 0:d.value,y=(b=document.getElementById("season-end"))==null?void 0:b.value,s=document.getElementById("season-duration");if(!g||!y||!s)return;const f=Math.round((new Date(y)-new Date(g))/864e5);s.textContent=f>0?`Durée : ${f} jour${f>1?"s":""}`:"⚠️ La fin doit être après le début",s.style.color=f>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var g,y,s;(g=document.getElementById("season-start"))==null||g.addEventListener("input",r),(y=document.getElementById("season-end"))==null||y.addEventListener("input",r),r(),(s=document.getElementById("season-save-btn"))==null||s.addEventListener("click",async()=>{var c,x,w;const f=(c=document.getElementById("season-name"))==null?void 0:c.value.trim(),d=(x=document.getElementById("season-start"))==null?void 0:x.value,b=(w=document.getElementById("season-end"))==null?void 0:w.value,I=document.getElementById("season-error");if(!f){I.textContent="Le nom est requis.";return}if(!d){I.textContent="La date de début est requise.";return}if(!b){I.textContent="La date de fin est requise.";return}if(new Date(b)<=new Date(d)){I.textContent="La date de fin doit être après le début.";return}const k=document.getElementById("season-save-btn");k.disabled=!0,k.textContent="Enregistrement…";const E={name:f,start_at:new Date(d).toISOString(),end_at:new Date(b).toISOString()};let v;if(a?{error:v}=await _.from("ranked_seasons").update(E).eq("id",e.id):{error:v}=await _.from("ranked_seasons").insert({...E,is_active:!1}),v){I.textContent=v.message,k.disabled=!1,k.textContent=a?"💾 Enregistrer":"✅ Créer la saison";return}t(a?"Saison modifiée ✅":"Saison créée ✅","success"),o(),l()})},50)}async function xe(e,t){var h;const{toast:n}=t,{data:o,error:l}=await _.from("solo_levels").select("*").order("level_number");if(l){e.innerHTML=`<p style="color:var(--danger)">${l.message}</p>`;return}const a=i=>`
    <tr data-row="${i.id}">
      <td style="padding:4px 8px;text-align:center">
        <input data-field="level_number" data-id="${i.id}" type="number" min="1" value="${i.level_number}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="target_note_avg" data-id="${i.id}" type="number" min="0" max="999" step="0.5" value="${i.target_note_avg}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="nb_liens_jaune" data-id="${i.id}" type="number" min="0" value="${i.nb_liens_jaune}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="nb_liens_vert" data-id="${i.id}" type="number" min="0" value="${i.nb_liens_vert}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="nb_joueurs_stade" data-id="${i.id}" type="number" min="0" max="16" value="${i.nb_joueurs_stade}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="reward_credits" data-id="${i.id}" type="number" min="0" value="${i.reward_credits}" style="width:100%;padding:6px;text-align:right;font-size:13px">
      </td>
      <td style="text-align:center;padding:4px 8px">
        <input data-field="is_active" data-id="${i.id}" type="checkbox" ${i.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
      </td>
      <td style="text-align:center;padding:4px 8px">
        <button class="btn btn-danger btn-sm" data-del-row="${i.id}">🗑️</button>
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
            ${(o||[]).map(a).join("")||'<tr><td colspan="8" style="text-align:center;color:#aaa;padding:20px">Aucun niveau défini.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;function m(){document.querySelectorAll("#solo-tbody [data-field]").forEach(i=>{i.addEventListener("change",()=>p(i))})}async function p(i){const u=i.dataset.id,r=i.dataset.field,g=r==="is_active"?i.checked:Number(i.value)||0,{error:y}=await _.from("solo_levels").update({[r]:g}).eq("id",u);if(y){n(y.message,"error");return}i.style.transition="background .3s",i.style.background="#e8f8ee",setTimeout(()=>{i.style.background=""},500)}m(),document.querySelectorAll("[data-del-row]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer ce niveau ? Les joueurs ayant progressé au-delà seront affectés.")&&(await _.from("solo_levels").delete().eq("id",i.dataset.delRow),n("Niveau supprimé","success"),xe(e,t))})}),(h=document.getElementById("solo-add-row"))==null||h.addEventListener("click",async()=>{const u={level_number:Math.max(0,...(o||[]).map(y=>y.level_number))+1,target_note_avg:10,nb_liens_jaune:2,nb_liens_vert:1,nb_joueurs_stade:2,reward_credits:500,is_active:!0},{data:r,error:g}=await _.from("solo_levels").insert(u).select().single();if(g){n(g.message,"error");return}n("Niveau ajouté — modifie les valeurs directement","success"),xe(e,t)})}zt(Ze);function On(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function Un(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function he(){document.getElementById("modal-overlay").classList.add("hidden")}const Ye={dashboard:{title:"Dashboard",fn:Rt},players:{title:"Joueurs & Cartes",fn:Pt},clubs:{title:"Clubs",fn:Zt},"card-builder":{title:"Card Builder",fn:sn},users:{title:"Managers",fn:pt},market:{title:"Mercato",fn:mt},"import-export":{title:"Import / Export CSV",fn:yn},formations:{title:"Formations & Liens",fn:vn},"boosters-config":{title:"Boosters",fn:_n},"sell-price":{title:"Prix vente directe",fn:wn},journal:{title:"Actualités",fn:kn},tutorial:{title:"Tutoriel",fn:Sn},stadiums:{title:"Stades",fn:Rn},"gc-cards":{title:"Game Changers",fn:Nn},"ranked-seasons":{title:"Saisons Ranked",fn:Fn},"solo-mode":{title:"Solo Mode",fn:xe}};async function de(e){document.querySelectorAll(".admin-sidebar nav a").forEach(l=>{l.classList.toggle("active",l.dataset.page===e)});const t=document.getElementById("mobile-page-select");t&&(t.value=e);const n=Ye[e]||Ye.dashboard;document.getElementById("page-title").textContent=n.title;const o=document.getElementById("page-content");o.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(o,{toast:On,openModal:Un,closeModal:he,navigate:de})}catch(l){o.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${l.message}</div>`,console.error(l)}}async function Gn(){var t;const{data:{session:e}}=await _.auth.getSession();e&&await We(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),o=document.getElementById("auth-password").value,l=document.getElementById("auth-error");if(l.textContent="",!n||!o){l.textContent="Remplissez tous les champs.";return}const{data:a,error:m}=await _.auth.signInWithPassword({email:n,password:o});if(m){l.textContent=m.message;return}await We(a.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await _.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",he),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&he()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",o=>{o.preventDefault(),de(n.dataset.page)})}),(t=document.getElementById("mobile-page-select"))==null||t.addEventListener("change",n=>{de(n.target.value)})}async function We(e){const{data:t,error:n}=await _.from("users").select("*").eq("id",e.id).single(),o=document.getElementById("auth-error");if(n||!t){o.textContent="Profil introuvable.";return}if(!t.is_admin){o.textContent="Accès refusé. Vous n'êtes pas administrateur.",await _.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,de("dashboard")}Gn();
