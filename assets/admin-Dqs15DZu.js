import{s as _,r as Ee,a as _e,A as xt,l as ht,g as Et,K as Me,D as z,b as _t,S as wt,c as R,H as It,R as $t,e as ue,d as Ze,f as kt,h as Lt,E as Bt,i as At,N as St,M as Ct,B as Tt,j as Mt,F as ge,k as ze,m as zt,n as Qe,o as ye,p as Rt}from"./special-cards-Cc3e36Hs.js";async function jt(e){var h;const[{count:t},{count:n},{count:o},{count:s},{count:r},{data:g}]=await Promise.all([_.from("players").select("*",{count:"exact",head:!0}),_.from("clubs").select("*",{count:"exact",head:!0}),_.from("users").select("*",{count:"exact",head:!0}),_.from("stadium_definitions").select("*",{count:"exact",head:!0}),_.from("users").select("*",{count:"exact",head:!0}).gt("last_seen_at",new Date(Date.now()-18e4).toISOString()),_.rpc("get_signup_password")]),b=g||"";e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:24px">

      <!-- Managers -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">👥 Managers</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${o??"–"}</div>
        <div style="display:flex;align-items:center;gap:6px;margin-top:10px;font-size:12px;color:var(--tile-fg-dim)">
          <span style="width:8px;height:8px;border-radius:50%;background:#2ecc71;display:inline-block;box-shadow:0 0 6px #2ecc71"></span>
          ${r??0} joueurs connectés
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
        <input id="signup-pwd-input" type="text" value="${b.replace(/"/g,"&quot;")}" style="flex:1">
        <button id="signup-pwd-save" class="btn btn-primary">💾 Enregistrer</button>
      </div>
      <div id="signup-pwd-status" style="font-size:12px;margin-top:8px;min-height:16px"></div>
    </div>
  `,window.adminNav=i=>{var c;(c=document.querySelector(`[data-page="${i}"]`))==null||c.click()},(h=document.getElementById("signup-pwd-save"))==null||h.addEventListener("click",async()=>{const i=document.getElementById("signup-pwd-input").value.trim(),c=document.getElementById("signup-pwd-status");if(!i){c.textContent="Le code ne peut pas être vide.",c.style.color="#ff6b6b";return}const a=document.getElementById("signup-pwd-save");a.disabled=!0,a.textContent="⏳...";const{error:l}=await _.rpc("set_signup_password",{new_password:i});if(a.disabled=!1,a.textContent="💾 Enregistrer",l){c.textContent=l.message,c.style.color="#ff6b6b";return}c.textContent="✅ Code mis à jour.",c.style.color="#2ecc71"})}const Xe={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},Dt={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Nt(){const e={};for(const t of xt)e[t]=await ht(t);return e}async function Pt(e,t){const{toast:n}=t;if(!confirm(`Réattribuer une nouvelle photo à tous les joueurs ayant encore l'ancien format de chemin (public/faces/...) ?

Cette action est irréversible.`))return;const o=document.getElementById("fix-old-faces-btn");o&&(o.disabled=!0,o.textContent="⏳ En cours...");try{const{data:s,error:r}=await _.from("players").select("id, country_code, face").like("face","public/faces/%");if(r){n(r.message,"error");return}if(!(s!=null&&s.length)){n("Aucun joueur avec l'ancien format — rien à faire ✅","success");return}const{data:g}=await _.from("players").select("face").not("face","is",null),b=new Set((g||[]).map(c=>c.face).filter(c=>c&&!c.startsWith("public/faces/")));let h=0,i=0;for(const c of s){const a=await _e(c.country_code,b);if(!a){i++;continue}const{error:l}=await _.from("players").update({face:a}).eq("id",c.id);if(l){i++;continue}b.add(a),h++}n(`${h} photo(s) réattribuée(s)${i?`, ${i} échec(s)`:""} ✅`,i?"error":"success")}finally{o&&(o.disabled=!1,o.textContent="🖼️ Réattribuer anciennes photos")}}async function Ft(e,t){await se(e,t)}async function se(e,t,n=null){var i,c,a,l,u;const{toast:o}=t;n||(n={search:((i=document.getElementById("search-players"))==null?void 0:i.value)||"",job:((c=document.getElementById("filter-job"))==null?void 0:c.value)||"",rarity:((a=document.getElementById("filter-rarity"))==null?void 0:a.value)||"",club:((l=document.getElementById("filter-club"))==null?void 0:l.value)||"",country:((u=document.getElementById("filter-country"))==null?void 0:u.value)||""});const[{data:s,error:r},{data:g}]=await Promise.all([_.from("players").select("*, clubs(id,encoded_name,logo_url)"),_.from("clubs").select("id,encoded_name").order("encoded_name")]);if(r){e.innerHTML=`<p style="color:red">${r.message}</p>`;return}const b={GK:0,DEF:1,MIL:2,ATT:3},h=(s||[]).sort((d,f)=>{const p=(b[d.job]??4)-(b[f.job]??4);return p!==0?p:(d.surname_real||"").localeCompare(f.surname_real||"")});Ot(e,h,g||[],t,n)}function Ot(e,t,n,o,s=null){var c,a;const{toast:r}=o;if(e.innerHTML=`
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
          ${Object.entries(Xe).map(([l,u])=>`<option value="${l}">${u}</option>`).join("")}
        </select>
        <button class="btn btn-primary" id="add-player-btn" style="white-space:nowrap">+ Joueur</button>
        <button class="btn btn-ghost" id="fix-old-faces-btn" style="white-space:nowrap">🖼️ Réattribuer anciennes photos</button>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <select id="filter-club" style="flex:1;min-width:140px">
          <option value="">Tous les clubs</option>
          ${n.map(l=>`<option value="${l.id}">${l.encoded_name}</option>`).join("")}
        </select>
        <select id="filter-country" style="flex:1;min-width:120px">
          <option value="">Tous les pays</option>
          ${[...new Set(t.map(l=>l.country_code).filter(Boolean))].sort().map(l=>`<option value="${l}">${l}</option>`).join("")}
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
    </div>`,s){const l=s,u=d=>document.getElementById(d);l.search&&u("search-players")&&(u("search-players").value=l.search),l.job&&u("filter-job")&&(u("filter-job").value=l.job),l.rarity&&u("filter-rarity")&&(u("filter-rarity").value=l.rarity),l.club&&u("filter-club")&&(u("filter-club").value=l.club),l.country&&u("filter-country")&&(u("filter-country").value=l.country)}if(s){const l=s,u=d=>document.getElementById(d);l.search&&u("search-players")&&(u("search-players").value=l.search),l.job&&u("filter-job")&&(u("filter-job").value=l.job),l.rarity&&u("filter-rarity")&&(u("filter-rarity").value=l.rarity),l.club&&u("filter-club")&&(u("filter-club").value=l.club),l.country&&u("filter-country")&&(u("filter-country").value=l.country)}function g(){const l=document.getElementById("search-players").value.toLowerCase(),u=document.getElementById("filter-job").value,d=document.getElementById("filter-rarity").value,f=document.getElementById("filter-club").value,p=document.getElementById("filter-country").value;return t.filter(y=>(!l||`${y.firstname} ${y.surname_real}`.toLowerCase().includes(l))&&(!u||y.job===u)&&(!d||y.rarity===d)&&(!f||y.club_id===f)&&(!p||y.country_code===p))}const b=new Set;function h(){const l=document.getElementById("bulk-bar"),u=document.getElementById("bulk-count");l&&(l.style.display=b.size>0?"flex":"none",u&&(u.textContent=`${b.size} joueur(s) sélectionné(s)`))}function i(){const l=g();document.getElementById("count-label").textContent=`${l.length} joueur(s)`;const u=document.getElementById("players-list");if(!l.length){u.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}u.innerHTML=l.map(d=>{const f={...d,clubs:d.clubs,face:d.face||null},p=Ee(f,{width:120});return`<div style="position:relative;cursor:pointer" data-edit="${d.id}">
        ${p}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${d.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),u.querySelectorAll("[data-edit]").forEach(d=>{d.addEventListener("click",()=>{const f=t.find(p=>p.id===d.dataset.edit);f&&Re(f,n,e,o)})}),u.querySelectorAll(".btn-del-player").forEach(d=>{d.addEventListener("click",async f=>{if(f.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:p}=await _.from("players").delete().eq("id",d.dataset.del);p?r(p.message,"error"):(r("Joueur supprimé ✅","success"),se(e,o))})})}i(),document.getElementById("search-players").addEventListener("input",i),document.getElementById("filter-job").addEventListener("change",i),document.getElementById("filter-rarity").addEventListener("change",i),document.getElementById("filter-club").addEventListener("change",i),document.getElementById("filter-country").addEventListener("change",i),(c=document.getElementById("bulk-cancel-btn"))==null||c.addEventListener("click",()=>{b.clear(),h(),i()}),(a=document.getElementById("bulk-delete-btn"))==null||a.addEventListener("click",async()=>{var f,p,y,I,$;if(!b.size||!confirm(`Supprimer ${b.size} joueur(s) ?`))return;const l=[...b],{error:u}=await _.from("players").delete().in("id",l);if(u){r(u.message,"error");return}r(`${l.length} joueur(s) supprimé(s) ✅`,"success"),b.clear();const d={search:((f=document.getElementById("search-players"))==null?void 0:f.value)||"",job:((p=document.getElementById("filter-job"))==null?void 0:p.value)||"",rarity:((y=document.getElementById("filter-rarity"))==null?void 0:y.value)||"",club:((I=document.getElementById("filter-club"))==null?void 0:I.value)||"",country:(($=document.getElementById("filter-country"))==null?void 0:$.value)||""};se(e,o,d)}),document.getElementById("add-player-btn").addEventListener("click",()=>Re(null,n,e,o)),document.getElementById("fix-old-faces-btn").addEventListener("click",()=>Pt(e,o))}async function Re(e,t,n,o){const{toast:s,openModal:r,closeModal:g}=o,b=!!e,h=await Nt(),{data:i}=await _.from("players").select("face").not("face","is",null),c=new Set((i||[]).map(d=>d.face).filter(Boolean));e!=null&&e.face&&c.delete(e.face);const a='<option value="">— Club —</option>'+t.map(d=>`<option value="${d.id}" ${(e==null?void 0:e.club_id)===d.id?"selected":""}>${d.encoded_name}</option>`).join(""),l=e!=null&&e.face?e.face.split("/")[0]:"",u=Object.keys(h).map(d=>`<option value="${d}" ${l===d?"selected":""}>${d}</option>`).join("");r(b?`✏️ ${e.firstname} ${e.surname_real}`:"➕ Nouveau joueur",`<div style="display:flex;gap:20px;align-items:flex-start">

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
              ${["normal","pepite","papyte","legende"].map(d=>`<option value="${d}" ${(e==null?void 0:e.rarity)===d?"selected":""}>${Xe[d]}</option>`).join("")}
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
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([d,f,p])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${Dt[d]};font-weight:700">${d}</label>
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
          ${b?"💾 Enregistrer":"✅ Créer le joueur"}
        </button>
        </div>
      </div>
    </div>`),setTimeout(()=>{var $,E,v;let d=(e==null?void 0:e.face)||null;function f(){var V,D,Z,Q,X,ee,te,Ae,Se,Ce,Te;const m=document.getElementById("card-preview");if(!m)return;const x=((V=document.getElementById("pm-fn"))==null?void 0:V.value)||"",w=(((D=document.getElementById("pm-real"))==null?void 0:D.value)||"").toUpperCase(),k=((Z=document.getElementById("pm-job"))==null?void 0:Z.value)||"ATT",L=((Q=document.getElementById("pm-job2"))==null?void 0:Q.value)||null,B=((X=document.getElementById("pm-rarity"))==null?void 0:X.value)||"normal",A=((ee=document.getElementById("pm-country"))==null?void 0:ee.value)||"FR",S=((te=document.getElementById("pm-club"))==null?void 0:te.value)||null,C=document.getElementById("pm-club"),M=C==null?void 0:C.options[C.selectedIndex];(M==null?void 0:M.text)!=="— Club —"&&(M==null||M.text);const F=parseInt((Ae=document.getElementById("pm-g"))==null?void 0:Ae.value)||0,O=parseInt((Se=document.getElementById("pm-d"))==null?void 0:Se.value)||0,U=parseInt((Ce=document.getElementById("pm-m"))==null?void 0:Ce.value)||0,N=parseInt((Te=document.getElementById("pm-a"))==null?void 0:Te.value)||0,j=t.find(vt=>vt.id===S),ie={firstname:x||"Prénom",surname_real:w||"NOM",job:k,job2:L||null,rarity:B,country_code:A,club_id:S,note_g:F,note_d:O,note_m:U,note_a:N,face:d||null,clubs:j?{encoded_name:j.encoded_name,logo_url:j.logo_url}:null};m.innerHTML=Ee(ie,{width:160});const T=document.getElementById("pm-minmax");T&&(T.style.display=["pepite","papyte"].includes(B)?"grid":"none")}function p(m){const x=document.getElementById("faces-grid"),w=document.getElementById("pm-face");if(!x||!w)return;const k=h[m]||[];if(console.log("[players] loadFacesGrid folder=",m,"files=",k.length,k.slice(0,5)),!k.length){w.innerHTML='<option value="">— Aucun visage disponible —</option>',x.innerHTML=`<p style="font-size:11px;color:#888;font-style:italic">Aucune image dans le dossier "${m}" du bucket Supabase.</p>`;return}const L=k.filter(B=>{const A=m+"/"+B;return A===d||!c.has(A)});w.innerHTML='<option value="">— Choisir un visage —</option>'+L.map(B=>{const A=m+"/"+B;return`<option value="${A}" ${d===A?"selected":""}>${B}</option>`}).join(""),x.innerHTML=L.map(B=>{const A=m+"/"+B,S=d===A,C=Et({face:A});return`<div data-face="${A}" style="cursor:pointer;border:2px solid ${S?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${C}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),x.querySelectorAll("[data-face]").forEach(B=>{B.addEventListener("click",()=>{d=B.dataset.face;const A=document.getElementById("pm-face");A&&(A.value=d),x.querySelectorAll("[data-face]").forEach(S=>{S.style.border=`2px solid ${S.dataset.face===d?"#4fc3f7":"transparent"}`}),f()})})}const y=e!=null&&e.face?e.face.split("/")[0]:"";y&&h[y]&&(document.getElementById("pm-folder").value=y,p(y)),($=document.getElementById("pm-folder"))==null||$.addEventListener("change",m=>{p(m.target.value)}),(E=document.getElementById("pm-face"))==null||E.addEventListener("change",m=>{d=m.target.value||null,f()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach(m=>{var x,w;(x=document.getElementById(m))==null||x.addEventListener("input",f),(w=document.getElementById(m))==null||w.addEventListener("change",f)}),(v=document.getElementById("pm-save"))==null||v.addEventListener("click",()=>Gt(e,b,d,n,o)),f()},50)}function Ut(e){const t=n=>{var o;return(o=document.getElementById(n))==null?void 0:o.value};return{firstname:(t("pm-fn")||"").trim(),surname_real:(t("pm-real")||"").trim()||"JOUEUR",country_code:t("pm-country")||"FR",club_id:t("pm-club")||null,job:t("pm-job")||"ATT",job2:t("pm-job2")||null,rarity:t("pm-rarity")||"normal",note_g:parseInt(t("pm-g"))||0,note_d:parseInt(t("pm-d"))||0,note_m:parseInt(t("pm-m"))||0,note_a:parseInt(t("pm-a"))||0,note_min:parseInt(t("pm-nmin"))||null,note_max:parseInt(t("pm-nmax"))||null,sell_price:parseInt(t("pm-price"))||0,face:e||null,ethnie:t("pm-folder")||null,is_active:!0}}async function Gt(e,t,n,o,s){var u,d,f,p,y;const{toast:r,closeModal:g}=s,b=document.getElementById("pm-error"),h=document.getElementById("pm-save"),i=Ut(n);if(!i.firstname){b.textContent="Le prénom est requis.";return}if(!i.surname_real){b.textContent="Le nom est requis.";return}h.disabled=!0,h.textContent="Enregistrement…";const c=i,{error:a}=t?await _.from("players").update({...c,updated_at:new Date().toISOString()}).eq("id",e.id):await _.from("players").insert(c);if(a){b.textContent=a.message,h.disabled=!1,h.textContent=t?"💾 Enregistrer":"✅ Créer le joueur";return}r(t?"Joueur modifié ✅":"Joueur créé ✅","success"),g();const l={search:((u=document.getElementById("search-players"))==null?void 0:u.value)||"",job:((d=document.getElementById("filter-job"))==null?void 0:d.value)||"",rarity:((f=document.getElementById("filter-rarity"))==null?void 0:f.value)||"",club:((p=document.getElementById("filter-club"))==null?void 0:p.value)||"",country:((y=document.getElementById("filter-country"))==null?void 0:y.value)||""};se(o,s,l)}const Ht={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},et=["rase","court","milong","long"];function qt(e){const t=Ie(e);if(t==="noir")return"noir";if(t==="typ")return Math.random()<.9?"noir":"marron";if(t==="metisse")return Math.random()<.6?"noir":"marron";const n=Math.random();return n<.35?"blond":n<.75?"marron":"noir"}function Kt(e){return Math.random()<.05?"chauve":qt(e)}const we=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function Ie(e){return Ht[e]||"blanc"}function tt(e){return Kt(e)}function J(e,t){return Math.floor(Math.random()*(t-e+1))+e}function q(e){return e[Math.floor(Math.random()*e.length)]}function nt(e){const t=we.filter(n=>n!==e);return q(t)}function be(e){const t=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","GR","RO","BG","UA","RU"],n=["MA","DZ","TN","EG","LY"],o=["NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","TZ","UG","ET"],s=["JP","KR","CN","VN","TH","ID","PH","IN","PK","BD","SA","AE","IR"];return t.includes(e)||["AR","UY","CL","PE","EC","CO","MX","BR"].includes(e)?"Europeans":n.includes(e)?"North Africans":o.includes(e)?"Africans":s.includes(e)?"Asians":"Europeans"}const Jt=[{min:1,max:4,pct:55},{min:5,max:10,pct:20},{min:11,max:14,pct:10},{min:15,max:17,pct:10},{min:18,max:20,pct:5}];function it(){const e=Math.random()*100;let t=0;for(const n of Jt)if(t+=n.pct,e<t)return J(n.min,n.max);return J(1,4)}function Vt(){const e=Array.from({length:20},(t,n)=>n);return e.sort(()=>Math.random()-.5),new Set(e.slice(0,10))}let ae=null;function Yt(e,t){return e&&(ae||(ae=Vt()),ae.has(t))?J(15,20):it()}const de={FR:{first:["Lucas","Tom","Hugo","Théo","Antoine","Kylian","Rayan","Axel","Paul","Enzo","Léo","Mathis","Nathan","Alexis","Ethan","Maxime","Julien","Baptiste","Nicolas","Pierre","Clément","Adrien","Valentin","Dylan","Loïc","Quentin","Florian","Kevin","Corentin","Raphaël"],last:["Martin","Bernard","Petit","Dupont","Moreau","Laurent","Robert","Michel","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard","Bonnet","Rousseau","Fontaine","Chevalier","Blanc","Garnier","Boyer","Gauthier","Garcia","Perrin","Robin","Clément","Morin","Nicolas","Henry","Lemaire","Noël","Dufour","Meunier","Brun","Blanchard","Giraud","Joly","Rivière","Brunet"]},ES:{first:["Carlos","Miguel","Javier","Alejandro","Sergio","David","Diego","Pablo","Álvaro","Marcos","Adrián","Rubén","Iker","Raúl","Fernando","Roberto","Víctor","Iván","Gonzalo","Antonio","Manuel","Jesús","Josué","Rodrigo","Cristian","Héctor","Óscar","Mario","Daniel","Jorge"],last:["García","Rodríguez","Martínez","López","Sánchez","González","Pérez","Hernández","Jiménez","Díaz","Torres","Ramírez","Flores","Rivera","Gómez","Morales","Álvarez","Romero","Herrera","Medina","Aguilar","Vargas","Guzmán","Muñoz","Salazar","Soto","Contreras","Rojas","Ramos","Ortiz"]},PT:{first:["João","Pedro","Diogo","Rúben","Bruno","Tiago","André","Ricardo","Luís","Gonçalo","Nuno","Mário","Fábio","Rui","Miguel","Sérgio","Hugo","Filipe","Paulo","Vítor"],last:["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Carvalho","Gomes","Ribeiro","Araújo","Barbosa","Cardoso","Correia","Teixeira","Machado","Vieira","Monteiro","Cunha","Pinto","Melo","Barros","Freitas","Fonseca","Andrade","Castro","Neves","Figueiredo","Duarte"]},BR:{first:["Gabriel","Lucas","Mateus","Gustavo","Felipe","Rodrigo","Thiago","Rafael","Bruno","Diego","Leonardo","Eduardo","Victor","Pedro","Carlos","Alexandre","André","Paulo","Danilo","Marcelo"],last:["Silva","Santos","Oliveira","Souza","Lima","Ferreira","Costa","Nascimento","Alves","Pereira","Rodrigues","Almeida","Nunes","Melo","Barbosa","Rocha","Brito","Castro","Carvalho","Gomes","Lopes","Ramos","Mendes","Cavalcanti","Batista","Azevedo","Campos","Freitas","Reis","Andrade"]},AR:{first:["Lionel","Sergio","Rodrigo","Nicolás","Ezequiel","Gonzalo","Federico","Mauro","Pablo","Diego","Lucas","Matías","Alejandro","Maximiliano","Emiliano","Marcos","Lautaro","Ángel","Leandro","Julián"],last:["González","Rodríguez","Martínez","García","López","Pérez","Sánchez","Romero","Torres","Flores","Díaz","Gómez","Alvarez","Ruiz","Castro","Herrera","Cabrera","Medina","Ferreyra","Suárez"]},IT:{first:["Marco","Luca","Alessandro","Matteo","Davide","Andrea","Francesco","Federico","Lorenzo","Riccardo","Stefano","Simone","Roberto","Nicola","Giovanni","Antonio","Emanuele","Daniele","Alberto","Giorgio"],last:["Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Ricci","Marino","Greco","Bruno","Gallo","Conti","De Luca","Mancini","Giordano","Rizzo","Lombardi","Moretti","Fontana","Rinaldi"]},DE:{first:["Lukas","Max","Jonas","Florian","Tobias","Stefan","Markus","Sebastian","Niklas","Leon","Tim","Felix","Alexander","Philipp","Christian","Thomas","Michael","Jan","Moritz","Fabian"],last:["Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Wolf","Schröder","Neumann","Schwarz","Zimmermann","Braun","Krüger","Hofmann","Wagner","Becker","Koch","Lehmann","Kaiser"]},GB:{first:["James","Harry","Oliver","Jack","George","Charlie","William","Thomas","Alfie","Edward","Ryan","Liam","Noah","Ethan","Kyle","Jordan","Callum","Aaron","Declan","Connor"],last:["Smith","Jones","Williams","Brown","Taylor","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Walker","Wright","Robinson","White","Thompson","Hughes","Edwards","Green","Hall"]},MA:{first:["Yassine","Karim","Mehdi","Amine","Hamza","Bilal","Soufiane","Rachid","Omar","Mohammed","Zakaria","Ilyas","Ayoub","Saad","Khalid","Adil","Tarik","Hicham","Reda","Nabil"],last:["Benali","Amrani","Bouazza","Cherif","Haddad","Meziane","Belkacem","Rahmani","Saidi","Zidane","Belhadj","Tazi","Idrissi","Alaoui","Bennani","Fassi","Lahlou","Naciri","Tahiri","Zniber"]},DZ:{first:["Yacine","Riyad","Sofiane","Haris","Adem","Islam","Bilal","Omar","Nassim","Mehdi","Ryad","Zinedine","Youssef","Farid","Karim","Mourad","Walid","Anes","Ferhat","Djamel"],last:["Amrouche","Boudiaf","Cherki","Guessab","Hamdi","Jaber","Lakhal","Mahjoub","Rezki","Sahnoun","Talbi","Zerrouki","Achour","Bakri","Chaouch","Djaballah","Ferhat","Gacem","Khaldi","Larbi"]},SN:{first:["Sadio","Ismaïla","Cheikhou","Gana","Famara","Mbaye","Pape","Aliou","Moussa","Sidy","Idrissa","Lamine","Bamba","Fallou","Abdou","Diallo","Mamadou","Souleymane","Oumar","Cheikh"],last:["Diallo","Traoré","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Ndiaye","Sow","Cissé","Fofana","Keita","Sylla","Kane","Diarra","Sanogo","Baldé","Kouyaté"]},CI:{first:["Didier","Wilfried","Serge","Jonathan","Franck","Maxwel","Salomon","Gervinho","Nicolas","Maxime","Ismael","Romaric","Abdul","Cheick","Arouna","Kolo","Yaya","Geoffroy","Siaka","Adama"],last:["Drogba","Zaha","Gnagnon","Koné","Touré","Bamba","Diomandé","Konaté","Coulibaly","Fofana","Traoré","Doumbia","Sanogo","Diabaté","Kalou","Bakayoko","Gradel","Seri","Aurier","Haller"]},CM:{first:["Samuel","Alex","Karl","Fabrice","Cédric","Nicolas","Georges","André","Joël","Roger","François","Jean","Patrick","Thierry","Eric","Benjamin","Aristide","Clinton","Clinton","Stéphane"],last:["Eto'o","Song","Choupo-Moting","Aboubakar","Bassogog","Kunde","Toko","Nkoudou","Ngadeu","Oyongo","Fai","Zambo","Mokoena","Ekambi","Tchamba","Mbida","Biya","Kameni","Meyong","Webo"]},NG:{first:["Kelechi","Ahmed","Victor","John","Emmanuel","Samuel","Moses","Ola","Chukwuemeka","Odion","Sunday","Chidi","Nnamdi","Chisom","Tunde","Emeka","Obinna","Uchenna","Ifeanyi","Segun"],last:["Osimhen","Iheanacho","Musa","Onyekuru","Iwobi","Ndidi","Nwankwo","Obi","Mikel","Martins","Okocha","Yekini","Amunike","Babangida","Fash","Lawal","Onuoha","Taiwo","Ayodele","Ameobi"]},JP:{first:["Ryota","Kenji","Hiroshi","Takumi","Yuto","Daichi","Shinji","Makoto","Koji","Naoki","Yuya","Shoya","Ryo","Shu","Atsuto","Masato","Hotaru","Genki","Ko","Ritsu"],last:["Nakamura","Tanaka","Suzuki","Sato","Yamamoto","Watanabe","Ito","Yamada","Saito","Matsumoto","Inoue","Kimura","Hayashi","Shimizu","Yamazaki","Mori","Abe","Ikeda","Kato","Honda"]},KR:{first:["Heung","Son","Ji","Sung","Jae","Young","Kang","Hyun","Woo","Tae","Seung","Min","Jun","Dong","Chang","Sang","Yo","Hee","Jin","Bum"],last:["Kim","Park","Lee","Choi","Jung","Kang","Cho","Yoon","Lim","Oh","Han","Seo","Kwon","Hwang","Ahn","Yang","Shin","Yoo","Jang","Song"]},MX:{first:["Carlos","Hirving","Andrés","Javier","Miguel","Raúl","Héctor","Diego","Jorge","Luis","Rodolfo","Erick","Jonathan","Néstor","Tecatito","Chicharito","Oswaldo","Oribe","Uriel","Giovanni"],last:["Hernández","Lozano","Guardado","Vela","Morales","Jiménez","Reyes","Corona","Herrera","Rodríguez","Ochoa","Chicharito","Flores","Domínguez","Araujo","Álvarez","Pineda","Sánchez","Antuna","Meza"]},_DEFAULT_EUROPE:{first:["Stefan","Ivan","Luca","Marco","Andrei","Cristian","Bogdan","Mircea","Adrian","Florin","Dušan","Aleksandar","Nikola","Nemanja","Marko","Filip","Milan","Branislav","Radomir","Dejan"],last:["Popescu","Ionescu","Stan","Marin","Stoica","Popa","Radu","Constantin","Barbu","Dobre","Petrović","Marković","Nikolić","Jovanović","Popović","Stanković","Đorđević","Lukić","Simić","Ilić"]},_DEFAULT_AFRIQUE:{first:["Mamadou","Ibrahima","Moussa","Seydou","Boubacar","Oumar","Modibo","Adama","Bakary","Abdoulaye","Lamine","Ousmane","Sekou","Demba","Tidiane","Amadou","Issiaka","Siaka","Fode","Samba"],last:["Diallo","Traoré","Coulibaly","Koné","Doumbia","Kouyaté","Bah","Konaté","Touré","Camara","Sylla","Keita","Diakité","Sangaré","Sanou","Sidibé","Bathily","Niakaté","Dioumassi","Sissoko"]},_DEFAULT_ASIE:{first:["Wei","Ming","Jae","Van","Duc","Sorn","Ali","Hassan","Reza","Arman","Yusuf","Tariq","Faris","Khalid","Saad","Rashid","Nasser","Walid","Ziad","Adel"],last:["Zhang","Wang","Liu","Chen","Yang","Huang","Zhou","Wu","Xu","Sun","Al-Rashidi","Al-Dosari","Al-Harthi","Al-Balushi","Al-Farsi","Al-Shamsi","Al-Neyadi","Al-Breiki","Al-Hammadi","Al-Mansouri"]},_DEFAULT_AMERIQUE:{first:["James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Marcus","Jordan","Andre","Devonte","Malik","Tyrone","Jamal","Darius","DeShawn","Brandon","Cody"],last:["Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Taylor","Anderson","Jackson","White","Harris","Clark","Lewis","Walker","Hall","Allen","Young","King"]}},Wt={FR:"FR",BE:"FR",CH:"FR",MC:"FR",LU:"FR",ES:"ES",MX:"MX",CO:"ES",VE:"ES",PE:"ES",CL:"ES",EC:"ES",UY:"ES",PY:"ES",BO:"ES",CR:"ES",PA:"ES",HN:"ES",GT:"ES",SV:"ES",NI:"ES",DO:"ES",CU:"ES",PT:"PT",AO:"PT",MZ:"PT",CV:"PT",BR:"BR",AR:"AR",IT:"IT",SM:"IT",DE:"DE",AT:"DE",GB:"GB",IE:"GB",AU:"GB",NZ:"GB",CA:"GB",MA:"MA",TN:"DZ",LY:"DZ",DZ:"DZ",SN:"SN",ML:"SN",GN:"SN",GW:"SN",GM:"SN",MR:"SN",CI:"CI",BF:"CI",TG:"CI",BJ:"CI",GH:"CI",CM:"CM",GA:"CM",CG:"CM",CD:"CM",NG:"NG",JP:"JP",KR:"KR",MX:"MX",PL:"_DEFAULT_EUROPE",CZ:"_DEFAULT_EUROPE",SK:"_DEFAULT_EUROPE",HU:"_DEFAULT_EUROPE",HR:"_DEFAULT_EUROPE",RS:"_DEFAULT_EUROPE",SI:"_DEFAULT_EUROPE",RO:"_DEFAULT_EUROPE",BG:"_DEFAULT_EUROPE",GR:"_DEFAULT_EUROPE",TR:"_DEFAULT_EUROPE",RU:"_DEFAULT_EUROPE",UA:"_DEFAULT_EUROPE",NL:"_DEFAULT_EUROPE",DK:"_DEFAULT_EUROPE",SE:"_DEFAULT_EUROPE",NO:"_DEFAULT_EUROPE",FI:"_DEFAULT_EUROPE",AL:"_DEFAULT_EUROPE",EG:"_DEFAULT_AFRIQUE",ZA:"_DEFAULT_AFRIQUE",KE:"_DEFAULT_AFRIQUE",ET:"_DEFAULT_AFRIQUE",TZ:"_DEFAULT_AFRIQUE",UG:"_DEFAULT_AFRIQUE",CN:"_DEFAULT_ASIE",VN:"_DEFAULT_ASIE",TH:"_DEFAULT_ASIE",ID:"_DEFAULT_ASIE",PH:"_DEFAULT_ASIE",IN:"_DEFAULT_ASIE",PK:"_DEFAULT_ASIE",BD:"_DEFAULT_ASIE",IR:"_DEFAULT_ASIE",SA:"_DEFAULT_ASIE",AE:"_DEFAULT_ASIE",QA:"_DEFAULT_ASIE",KW:"_DEFAULT_ASIE",IQ:"_DEFAULT_ASIE",SY:"_DEFAULT_ASIE",JO:"_DEFAULT_ASIE",US:"_DEFAULT_AMERIQUE"};function ot(e){return Wt[e]||"_DEFAULT_EUROPE"}function at(e){const t=ot(e),n=(de[t]||de._DEFAULT_EUROPE).first;return q(n)}function rt(e){const t=ot(e);return(de[t]||de._DEFAULT_EUROPE).last}function Zt(e,t,n=new Set,o=!1){const s=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],r=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],g=new Set(r.sort(()=>Math.random()-.5).slice(0,4)),b=[...r].sort(()=>Math.random()-.5),h=new Set(b.slice(0,2)),i=new Set(b.slice(2,4)),c=10,a=s.map((d,f)=>f<c);for(let d=a.length-1;d>0;d--){const f=Math.floor(Math.random()*(d+1));[a[d],a[f]]=[a[f],a[d]]}const l=new Set;function u(d){const f=rt(d),p=f.filter(E=>!l.has(E)&&!n.has(E)),y=p.length?p:f.filter(E=>!l.has(E)),I=y.length?y:f,$=q(I);return l.add($),$}return s.map((d,f)=>{const p=a[f]?t:nt(t),y=Ie(p),I=tt(p),$=q(et),E=h.has(f)?"pepite":i.has(f)?"papyte":"normal",v=E==="pepite"?J(10,15):E==="papyte"?J(15,20):Yt(o,f),m=g.has(f),x=m?Math.max(0,v-2):0;let w=0,k=0,L=0,B=0,A=null;d==="GK"?w=v:d==="DEF"?(k=v,m&&(L=x,A="MIL")):d==="ATT"?(B=v,m&&(L=x,A="MIL")):(L=v,m&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(k=x,A="DEF"):(B=x,A="ATT")));const S=u(p);return{job:d,job2:A,firstname:at(p),surname_real:S,country_code:p,club_id:e,note_g:w,note_d:k,note_m:L,note_a:B,skin:y,hair:I,hair_length:$,rarity:E,sell_price:0,ethnie:be(p),_ethnie:be(p)}})}async function lt(e,t,n,o=!1){ae=null;const{data:s}=await _.from("players").select("surname_real").not("surname_real","is",null),r=new Set((s||[]).map(d=>d.surname_real).filter(Boolean)),g=Zt(e,t,r,o),{data:b}=await _.from("players").select("face").not("face","is",null),h=new Set((b||[]).map(d=>d.face).filter(Boolean)),i=new Set;for(const d of g){const f=await _e(d.country_code,new Set([...h,...i]));f&&(d.face=f,i.add(f)),delete d._ethnie}const{data:c,error:a}=await _.from("players").insert(g).select("id");if(a){console.error("[GenSquad] Erreur batch insert:",a.message,a.details),n("Erreur: "+a.message,"error");return}const l=(c||[]).map(d=>({card_type:"player",player_id:d.id}));if(l.length){const{error:d}=await _.from("cards").insert(l);d&&console.warn("[GenSquad] Erreur cartes:",d.message)}const u=(c==null?void 0:c.length)||0;console.log("[GenSquad] Créés:",u,"/",g.length),u>0?n(`${u} joueurs générés ✅`,"success"):n("Erreur génération joueurs","error")}function st(e){return{style:e.kit_style||z.style,color1:e.kit_color1||z.color1,color2:e.kit_color2||z.color2,color3:e.kit_color3||z.color3,shorts:e.kit_shorts||z.shorts,socks:e.kit_socks||z.socks}}let re=[];async function Qt(e,t){await me(e,t)}async function me(e,t){const[{data:n,error:o},{data:s}]=await Promise.all([_.from("clubs").select("*").order("real_name"),_.from("players").select("club_id")]);if(o){e.innerHTML=`<p style="color:red">${o.message}</p>`;return}re=n||[];const r={};(s||[]).forEach(g=>{r[g.club_id]=(r[g.club_id]||0)+1}),Xt(e,t,r)}function Xt(e,t,n={}){const{toast:o,openModal:s,closeModal:r}=t;e.innerHTML=`
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
    </div>`,g(re),document.getElementById("search-clubs").addEventListener("input",b=>{const h=b.target.value.toLowerCase();g(re.filter(i=>i.real_name.toLowerCase().includes(h)||i.encoded_name.toLowerCase().includes(h)))}),document.getElementById("add-club-btn").addEventListener("click",()=>je(null,e,t));function g(b){const h=document.getElementById("clubs-list");if(!b.length){h.innerHTML='<p style="color:var(--tile-fg-dim);padding:20px;text-align:center">Aucun club.</p>';return}const i={};b.forEach(l=>{const u=l.country_code||"—";i[u]||(i[u]=[]),i[u].push(l)});const c=Object.keys(i).sort(),a=l=>{const u=st(l),d=l.logo_url?`<img src="${l.logo_url}" style="width:36px;height:36px;object-fit:contain;border-radius:8px;flex-shrink:0">`:`<div style="width:36px;height:36px;background:linear-gradient(135deg,${u.color1},${u.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:900;flex-shrink:0">${l.encoded_name.slice(0,3)}</div>`,f=n[l.id]||0;return`
        <div class="club-row" data-club-id="${l.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:10px;cursor:pointer;background:var(--tile-bg);border:1px solid var(--tile-border);transition:background .15s">
          ${d}
          <img src="https://flagsapi.com/${l.country_code}/flat/24.png" style="width:18px;height:13px;object-fit:cover;border-radius:2px;flex-shrink:0" onerror="this.style.display='none'">
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:12px;color:var(--tile-fg-on-page);font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l.encoded_name}</div>
            <div style="font-size:10px;color:${f===0?"#e67e22":"var(--tile-fg-dim)"}">${f===0?"⚠️ 0 joueur":`👥 ${f}`}</div>
          </div>
          <button class="btn-del-club" data-del="${l.id}"
            style="width:22px;height:22px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;flex-shrink:0"
            onclick="event.stopPropagation()">✕</button>
        </div>`};h.innerHTML=c.map(l=>`
      <div style="display:flex;align-items:center;gap:8px;padding:8px 4px 4px;margin-top:6px">
        ${l!=="—"?`<img src="https://flagsapi.com/${l}/flat/24.png" style="width:20px;height:15px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">`:'<span style="font-size:14px">🌍</span>'}
        <span style="font-size:11px;font-weight:900;color:var(--tile-fg-dim);letter-spacing:1px">${l}</span>
        <span style="font-size:11px;color:var(--tile-fg-dim);background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:10px;padding:1px 8px">${i[l].length}</span>
        <div style="flex:1;height:1px;background:var(--tile-border)"></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:4px">
        ${i[l].map(a).join("")}
      </div>
    `).join(""),h.querySelectorAll(".club-row").forEach(l=>{l.addEventListener("click",()=>{const u=re.find(d=>d.id===l.dataset.clubId);u&&je(u,e,t),h.querySelectorAll(".club-row").forEach(d=>d.style.background="var(--tile-bg)"),l.style.background="rgba(26,107,60,0.18)"})}),h.querySelectorAll(".btn-del-club").forEach(l=>{l.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:u}=await _.from("clubs").delete().eq("id",l.dataset.del);u?o(u.message,"error"):(o("Club supprimé","success"),me(e,t))})})}}async function je(e,t,n){var p,y,I,$,E,v;const{toast:o}=n,s=!!e,r=e?st(e):{...z},g=document.getElementById("club-panel");if(!g)return;const b=Object.entries(Me).map(([m,x])=>`<option value="${m}" ${r.style===m?"selected":""}>${x.label}</option>`).join(""),h=we.map(m=>`<option value="${m}" ${((e==null?void 0:e.country_code)||"FR")===m?"selected":""}>${m}</option>`).join("");g.style.display="block",g.style.alignItems="",g.style.justifyContent="",g.innerHTML=`
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
              <select id="m-kit-style" style="width:100%">${b}</select>
            </div>
            ${[["Couleur 1","m-kit-color1",r.color1,!1],["Couleur 2","m-kit-color2",r.color2,!1],["Couleur 3","m-kit-color3",r.color3,!0],["Short","m-kit-shorts",r.shorts,!1],["Chaussettes","m-kit-socks",r.socks,!1]].map(([m,x,w,k])=>`
              <div class="form-group" id="wrap-${x}" ${k?'style="display:none"':""}>
                <label>${m}</label>
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
  `,(p=document.getElementById("m-logo-file"))==null||p.addEventListener("change",m=>{var k;const x=(k=m.target.files)==null?void 0:k[0];if(!x)return;const w=new FileReader;w.onload=()=>{document.getElementById("logo-preview").innerHTML=`<img src="${w.result}" style="width:100%;height:100%;object-fit:contain">`},w.readAsDataURL(x)}),ne();function i(){var k,L;const m=((k=document.getElementById("m-kit-style"))==null?void 0:k.value)||"uni",x=((L=Me[m])==null?void 0:L.colors)===3,w=document.getElementById("wrap-m-kit-color3");w&&(w.style.display=x?"":"none")}i(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(m=>{const x=document.getElementById(m),w=document.getElementById(m+"-txt");!x||!w||(x.addEventListener("input",()=>{w.value=x.value,ne()}),w.addEventListener("input",()=>{const k=w.value.trim();/^#[0-9a-fA-F]{6}$/.test(k)&&(x.value=k,ne())}),w.addEventListener("change",()=>{let k=w.value.trim();k.startsWith("#")||(k="#"+k),/^#[0-9a-fA-F]{6}$/.test(k)&&(x.value=k,w.value=k,ne())}))}),(y=document.getElementById("m-kit-style"))==null||y.addEventListener("change",()=>{i(),ne()});const c=document.getElementById("m-real"),a=document.getElementById("m-encoded");function l(){if(!c||!a||a.value)return;const m=c.value.trim().split(/\s+/),x=m.length===1?m[0].toUpperCase().slice(0,6):m.filter(w=>w.length>2).map(w=>w[0].toUpperCase()).join("")||m[0].toUpperCase().slice(0,4);a.value=x}c==null||c.addEventListener("input",l),(I=document.getElementById("auto-encode-btn"))==null||I.addEventListener("click",()=>{a&&(a.value=""),l()}),($=document.getElementById("m-save"))==null||$.addEventListener("click",()=>rn(e,s,t,n));const u=document.getElementById("m-gen-squad"),d=document.getElementById("m-gen-strong-label");function f(){if(d&&(d.style.display=u!=null&&u.checked?"flex":"none",!(u!=null&&u.checked))){const m=document.getElementById("m-gen-strong");m&&(m.checked=!1)}}u==null||u.addEventListener("change",f),f(),(E=document.getElementById("btn-gen-squad-panel"))==null||E.addEventListener("click",()=>{en(e,n,t)}),(v=document.getElementById("btn-gen-one-player"))==null||v.addEventListener("click",()=>{nn(e,n)}),s&&$e(e.id)}async function $e(e){const{data:t}=await _.from("players").select("*, clubs(encoded_name, logo_url, kit_style, kit_color1, kit_color2, kit_color3, kit_shorts, kit_socks)").eq("club_id",e).order("surname_real"),n=document.getElementById("club-players-grid"),o=document.getElementById("club-players-count");if(o&&(o.textContent=(t||[]).length),!!n){if(!(t!=null&&t.length)){n.innerHTML='<div style="color:var(--tile-fg-dim);padding:20px;font-size:13px">Aucun joueur dans ce club.</div>';return}n.innerHTML=t.map(s=>Ee(s,{width:100})).join("")}}function en(e,t,n){const{openModal:o,closeModal:s,toast:r}=t;o(`⚽ Générer — ${e.real_name}`,`<div style="display:flex;flex-direction:column;gap:14px">
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
    </div>`),setTimeout(()=>{var g,b;(g=document.getElementById("qg-cancel"))==null||g.addEventListener("click",()=>s()),(b=document.getElementById("qg-ok"))==null||b.addEventListener("click",async()=>{var i;const h=((i=document.getElementById("qg-strong"))==null?void 0:i.checked)??!1;s(),r("Génération en cours…","info"),await lt(e.id,e.country_code,r,h),r("Effectif généré ✅","success"),$e(e.id),me(n,t)})},50)}const dt=["GK","DEF","MIL","ATT"],tn=[{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}];function nn(e,t){const{openModal:n,closeModal:o,toast:s}=t,r=we.map(i=>`<option value="${i}">${i}</option>`).join(""),g=i=>dt.map(c=>`<option value="${c}" ${c===i?"selected":""}>${c}</option>`).join(""),b=`
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
              ${tn.map(i=>`<option value="${i.value}">${i.label}</option>`).join("")}
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
  `;n(`➕ Générer un joueur — ${e.real_name}`,b,`
    <button id="gen-one-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gen-one-ok" class="btn btn-primary">➕ Générer</button>
  `),setTimeout(()=>{var i,c;document.querySelectorAll('input[name="gen-one-mode"]').forEach(a=>{a.addEventListener("change",()=>{document.getElementById("gen-one-custom-fields").style.display=a.value==="custom"&&a.checked?"flex":"none"})}),(i=document.getElementById("gen-one-cancel"))==null||i.addEventListener("click",()=>o()),(c=document.getElementById("gen-one-ok"))==null||c.addEventListener("click",async()=>{var d,f,p,y,I;const a=((d=document.querySelector('input[name="gen-one-mode"]:checked'))==null?void 0:d.value)||"random",l=document.getElementById("gen-one-ok");l.disabled=!0,l.textContent="⏳ Génération…";const u={};a==="custom"&&(u.job=((f=document.getElementById("gen-one-job1"))==null?void 0:f.value)||null,u.job2=((p=document.getElementById("gen-one-job2"))==null?void 0:p.value)||null,u.rarity=((y=document.getElementById("gen-one-rarity"))==null?void 0:y.value)||null,u.country=((I=document.getElementById("gen-one-country"))==null?void 0:I.value)||null);try{await on(e,u),s("Joueur généré ✅","success"),o(),$e(e.id)}catch($){s("Erreur : "+$.message,"error"),l.disabled=!1,l.textContent="➕ Générer"}})},50)}async function on(e,t={}){const n=t.country||(Math.random()<.5?e.country_code:nt(e.country_code)),o=t.job||q(dt),s=t.job2||null,r=t.rarity||(()=>{const B=Math.random()*100;return B<1.5?"legende":B<3?"pepite":B<4.5?"papyte":"normal"})(),g=r==="pepite"?J(10,15):r==="papyte"?J(15,20):it(),b=s?Math.max(0,g-2):0;let h=0,i=0,c=0,a=0;o==="GK"&&(h=g),o==="DEF"&&(i=g),o==="MIL"&&(c=g),o==="ATT"&&(a=g),s==="GK"&&(h=b),s==="DEF"&&(i=b),s==="MIL"&&(c=b),s==="ATT"&&(a=b);const l=Ie(n),u=tt(n),d=q(et),{data:f}=await _.from("players").select("surname_real").not("surname_real","is",null),p=new Set((f||[]).map(B=>B.surname_real).filter(Boolean)),y=rt(n),I=y.filter(B=>!p.has(B)),$=q(I.length?I:y),E={job:o,job2:s,firstname:at(n),surname_real:$,country_code:n,club_id:e.id,note_g:h,note_d:i,note_m:c,note_a:a,skin:l,hair:u,hair_length:d,rarity:r,sell_price:0,ethnie:be(n)},{data:v}=await _.from("players").select("face").not("face","is",null),m=new Set((v||[]).map(B=>B.face).filter(Boolean)),x=await _e(n,m);x&&(E.face=x);const{data:w,error:k}=await _.from("players").insert(E).select("id").single();if(k)throw k;const{error:L}=await _.from("cards").insert({card_type:"player",player_id:w.id});L&&console.warn("[GenOnePlayer] Erreur carte:",L.message)}function ct(){var e,t,n,o,s,r;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((t=document.getElementById("m-kit-color1"))==null?void 0:t.value)||"#1A6B3C",color2:((n=document.getElementById("m-kit-color2"))==null?void 0:n.value)||"#ffffff",color3:((o=document.getElementById("m-kit-color3"))==null?void 0:o.value)||"#000000",shorts:((s=document.getElementById("m-kit-shorts"))==null?void 0:s.value)||"#111111",socks:((r=document.getElementById("m-kit-socks"))==null?void 0:r.value)||"#ffffff"}}function ne(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=_t(ct(),"panel"))}async function an(e,t){const n=(e.name.split(".").pop()||"png").toLowerCase(),o=`clubs/${t||"new"}-${Date.now()}.${n}`,{error:s}=await _.storage.from("assets").upload(o,e,{upsert:!0,cacheControl:"3600"});if(s)throw s;const{data:r}=_.storage.from("assets").getPublicUrl(o);return r.publicUrl}async function rn(e,t,n,o){var $,E,v,m,x,w,k,L,B;const{toast:s}=o,r=document.getElementById("m-error"),g=document.getElementById("m-save"),b=($=document.getElementById("m-real"))==null?void 0:$.value.trim(),h=(E=document.getElementById("m-encoded"))==null?void 0:E.value.trim().toUpperCase(),i=(v=document.getElementById("m-country"))==null?void 0:v.value.trim().toUpperCase(),c=((x=(m=document.getElementById("m-logo-file"))==null?void 0:m.files)==null?void 0:x[0])||null,a=((w=document.getElementById("m-logo-url-current"))==null?void 0:w.value)||null,l=((k=document.getElementById("m-gen-stadium"))==null?void 0:k.checked)??!1,u=((L=document.getElementById("m-gen-squad"))==null?void 0:L.checked)??!1,d=((B=document.getElementById("m-gen-strong"))==null?void 0:B.checked)??!1,f=ct();if(!b){r.textContent="Le nom du club est requis.";return}if(!h){r.textContent="Le nom encodé est requis.";return}if(!i){r.textContent="Le pays est requis.";return}g.disabled=!0,g.textContent="Enregistrement…";let p=a;if(c)try{g.textContent="📤 Envoi du logo…",p=await an(c,e==null?void 0:e.id)}catch(A){r.textContent="Erreur upload logo : "+A.message,g.disabled=!1,g.textContent=t?"💾 Enregistrer":"✅ Créer le club";return}const y={real_name:b,encoded_name:h,country_code:i,logo_url:p,kit_style:f.style,kit_color1:f.color1,kit_color2:f.color2,kit_color3:f.color3,kit_shorts:f.shorts,kit_socks:f.socks};let I=e==null?void 0:e.id;if(t){const{error:A}=await _.from("clubs").update(y).eq("id",I);if(A){r.textContent=A.message,g.disabled=!1,g.textContent="💾 Enregistrer";return}}else{const{data:A,error:S}=await _.from("clubs").insert(y).select().single();if(S){r.textContent=S.message,g.disabled=!1,g.textContent="✅ Créer le club";return}if(I=A.id,l){g.textContent="🏟️ Création du stade…";const{data:C,error:M}=await _.from("stadium_definitions").insert({name:`Stade de ${b}`,club_id:I,country_code:null}).select().single();M?console.warn("[Stadium] Erreur def stade:",M.message):C&&await _.from("cards").insert({card_type:"stadium",stadium_id:C.id})}u&&(g.textContent="⚽ Génération des joueurs…",await lt(I,i,s,d))}s(t?"Club modifié ✅":"Club créé ✅","success"),me(n,o)}const ln=["normal","pepite","papyte","legende"],De=["GK","DEF","MIL","ATT"],sn=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let K={...R},le=[];async function dn(e,{toast:t}){const{data:n}=await _.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");le=n||[],K={...R},e.innerHTML=mn(le),pn(e,le,t),P()}function Ne(){var n;const e=((n=document.getElementById("cb-surname-real"))==null?void 0:n.value)||"",t=document.getElementById("cb-surname-enc");t&&(t.value=ue(e))}function cn(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=le.find(o=>String(o.id)===String(e));return t?{style:t.kit_style||z.style,color1:t.kit_color1||z.color1,color2:t.kit_color2||z.color2,shorts:t.kit_shorts||z.shorts,socks:t.kit_socks||z.socks}:{...z}}function P(){var l,u,d,f;const e=p=>{var y;return((y=document.getElementById(p))==null?void 0:y.value)||""},t={firstname:e("cb-firstname"),surname_real:e("cb-surname-enc")||ue(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((u=(l=document.getElementById("cb-club"))==null?void 0:l.selectedOptions[0])==null?void 0:u.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=cn(),o=document.getElementById("cb-club"),s=((f=(d=o==null?void 0:o.selectedOptions[0])==null?void 0:d.dataset)==null?void 0:f.logo)||null,r=Ze(K,n,120),g=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(r)}`,b=kt(t,{portraitUrl:g,clubLogoUrl:s,showNotes:!0}),h=document.getElementById("card-preview");h&&(h.innerHTML=b);const i=document.getElementById("avatar-preview-wrap");i&&(i.innerHTML=r);const c=e("cb-surname-real"),a=document.getElementById("encode-summary");a&&c&&(a.textContent=`${e("cb-firstname")} ${c} → ${e("cb-firstname")} ${t.surname_real}`)}function pt(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};K={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function pn(e,t,n){var s,r,g,b,h;e.querySelectorAll("input,select").forEach(i=>{i.addEventListener("input",P),i.addEventListener("change",P)});const o=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];o.forEach(i=>{var c;(c=document.getElementById(i))==null||c.addEventListener("change",()=>{pt(),P()})}),(s=document.getElementById("cb-surname-real"))==null||s.addEventListener("input",()=>{Ne(),P()}),(r=document.getElementById("btn-encode"))==null||r.addEventListener("click",()=>{Ne(),P()}),(g=document.getElementById("cb-club"))==null||g.addEventListener("change",P),(b=document.getElementById("btn-save-player"))==null||b.addEventListener("click",()=>un(n)),(h=document.getElementById("btn-reset"))==null||h.addEventListener("click",()=>{e.querySelectorAll("input").forEach(i=>i.value=""),e.querySelectorAll("select").forEach(i=>i.selectedIndex=0),K={...R},o.forEach(i=>{const c=i.replace("av-",""),a=document.getElementById(i);a&&(a.value=R[c]||"")}),P()})}async function un(e){const t=g=>{var b;return((b=document.getElementById(g))==null?void 0:b.value)||""},n=t("cb-surname-real").trim(),o=t("cb-surname-enc").trim()||ue(n);if(!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}pt();const s={firstname:t("cb-firstname").trim(),surname_real:n,surname_real:o,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:K,skin:K.skin||"blanc",hair:K.hairColor||"marron",hair_length:"court"},{error:r}=await _.from("players").insert(s);if(r){e("Erreur: "+r.message,"error");return}e(`✅ Joueur "${s.firstname} ${s.surname_real}" enregistré !`,"success")}function mn(e){const t=sn.map(([i,c])=>`<option value="${i}">${c} (${i})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(i=>`<option value="${i.id}" data-logo="${i.logo_url||""}">${i.encoded_name}</option>`).join(""),o=De.map(i=>`<option value="${i}">${i}</option>`).join(""),s='<option value="">Aucun</option>'+De.map(i=>`<option value="${i}">${i}</option>`).join(""),r=ln.map(i=>`<option value="${i}">${i.charAt(0).toUpperCase()+i.slice(1)}</option>`).join(""),g=(i,c,a)=>Object.entries(c).map(([l,u])=>`<option value="${l}" ${l===(a||"")?"selected":""}>${u.label}</option>`).join(""),b=Object.keys(wt).map(i=>`<option value="${i}" ${i===R.skin?"selected":""}>${i.charAt(0).toUpperCase()+i.slice(1)}</option>`).join(""),h=Object.keys(It).map(i=>`<option value="${i}" ${i===R.hairColor?"selected":""}>${i.charAt(0).toUpperCase()+i.slice(1)}</option>`).join("");return`
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
          <div><label>Rareté</label><select id="cb-rarity">${r}</select></div>
          <div><label>Note min</label><input id="cb-note-min" type="number" min="0" max="10" placeholder="—"></div>
          <div><label>Note max</label><input id="cb-note-max" type="number" min="0" max="10" placeholder="—"></div>
        </div>
        <div style="margin-top:8px;display:flex;gap:8px">
          ${["normal","pepite","papyte","legende"].map(i=>`
            <div style="background:${$t[i]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
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
              <select id="av-skin">${b}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${g("av-hair",Lt,R.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${h}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${g("av-eyebrows",Bt,R.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${g("av-eyes",At,R.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${g("av-nose",St,R.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${g("av-mouth",Ct,R.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${g("av-beard",Tt,R.beard)}</select>
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
  `}async function ut(e,{toast:t}){const[{data:n,error:o},{data:s}]=await Promise.all([_.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").order("created_at",{ascending:!1}),_.from("user_solo_progress").select("user_id, unlocked_level")]);if(o){e.innerHTML=`<p style="color:red">${o.message}</p>`;return}const r={};(s||[]).forEach(h=>{r[h.user_id]=h.unlocked_level});const g=n||[];e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <input id="search-users" placeholder="🔍 Rechercher un manager…" style="width:260px">
      <span style="font-size:13px;color:var(--gray-600)">${g.length} manager(s)</span>
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
  `,b(g),document.getElementById("search-users").addEventListener("input",h=>{const i=h.target.value.toLowerCase();b(g.filter(c=>{var a;return c.pseudo.toLowerCase().includes(i)||((a=c.club_name)==null?void 0:a.toLowerCase().includes(i))}))});function b(h){document.getElementById("users-tbody").innerHTML=h.map(i=>{const c=i.mmr??1e3,a=i.mmr_deviation??350,l=i.placement_matches??0,u=Mt(c),d=i.ranked_wins??0,f=i.ranked_losses??0,p=i.ranked_draws??0,y=d+f+p,I=y>0?Math.round(d/y*100):null,$=l<10,E=a<80?"#1A6B3C":a<150?"#e67e22":"#bb2020";return`
        <tr>
          <td>
            <div style="font-weight:700">${i.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${i.club_name||"—"}</div>
          </td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:6px">
              <span id="credits-display-${i.id}">${(i.credits||0).toLocaleString("fr")} cr.</span>
              <button class="btn-edit-credits" data-user="${i.id}" data-current="${i.credits||0}"
                style="background:none;border:none;cursor:pointer;font-size:12px;padding:0;opacity:.7" title="Modifier les crédits">✏️</button>
            </div>
            <div style="color:var(--gray-600)">Niv. Solo ${r[i.id]??1}</div>
          </td>
          <td style="font-size:12px">${i.wins}V / ${i.draws}N / ${i.losses}D</td>
          <td style="font-size:12px">🥇${i.trophies_top1} 🥈${i.trophies_top2} 🥉${i.trophies_top3}</td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:5px">
              <span style="font-size:16px">${u.emoji}</span>
              <span style="font-weight:700;color:${u.color}">${u.label}</span>
            </div>
            ${$?`<div style="font-size:10px;color:#e67e22">${l}/10 placement${l<10?` (${10-l} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${d}V ${p}N ${f}D${I!==null?` · ${I}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${c}</div>
            <div style="font-size:10px;color:${E}">RD ±${Math.round(a)}</div>
          </td>
          <td>
            ${i.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td>
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${i.id}" data-is-admin="${i.is_admin}">
              ${i.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll(".btn-edit-credits").forEach(i=>{i.addEventListener("click",async()=>{const c=i.dataset.user,a=Number(i.dataset.current)||0,l=prompt("Nouveau solde de crédits :",a);if(l===null)return;const u=parseInt(l.replace(/\s/g,""),10);if(isNaN(u)||u<0){t("Valeur invalide","error");return}const{data:d,error:f}=await _.rpc("admin_update_user_credits",{p_user_id:c,p_new_credits:u});if(f){t(f.message,"error");return}if(!(d!=null&&d.success)){t((d==null?void 0:d.error)||"Échec de la mise à jour","error");return}t("Crédits mis à jour ✅","success");const p=document.getElementById(`credits-display-${c}`);p&&(p.textContent=`${u.toLocaleString("fr")} cr.`),i.dataset.current=u})}),document.querySelectorAll("[data-toggle-admin]").forEach(i=>{i.addEventListener("click",async()=>{const c=i.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${c?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:a}=await _.from("users").update({is_admin:c}).eq("id",i.dataset.toggleAdmin);a?t(a.message,"error"):(t("Rôle mis à jour ✅","success"),ut(e,{toast:t}))})})}}const gn=[{value:"normal",label:"Normal",color:"#ccc"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function mt(e,t){var h;const{toast:n}=t,{data:o,error:s}=await _.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_real, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(s){e.innerHTML=`<p style="color:var(--danger)">${s.message}</p>`;return}const r=o||[],g=r.filter(i=>i.status==="active").length,b=r.filter(i=>i.status==="sold").length;e.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px">
      <button id="btn-price-grid" class="btn btn-primary">📊 Grille des prix</button>
      <div style="display:flex;gap:12px">
        <div class="card-panel" style="min-width:120px;text-align:center;padding:12px 20px">
          <div style="font-size:22px;font-weight:700;color:#1A6B3C">${g}</div>
          <div style="font-size:11px;color:var(--tile-fg-dim)">Annonces actives</div>
        </div>
        <div class="card-panel" style="min-width:120px;text-align:center;padding:12px 20px">
          <div style="font-size:22px;font-weight:700;color:#D4A017">${b}</div>
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
            ${r.map(i=>{var u,d,f,p;const c=(u=i.card)==null?void 0:u.player,a=c?`${c.firstname} ${c.surname_real}`:((d=i.card)==null?void 0:d.card_type)||"—",l={active:"#1A6B3C",sold:"#D4A017",cancelled:"#888"};return`<tr>
                <td><b>${a}</b>${c?`<div style="font-size:10px;color:var(--tile-fg-dim)">${c.rarity} · ${c.job}</div>`:""}</td>
                <td style="font-size:12px">${((f=i.seller)==null?void 0:f.pseudo)||"—"}</td>
                <td style="font-size:12px">${((p=i.buyer)==null?void 0:p.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(i.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${l[i.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
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
  `,document.querySelectorAll("[data-cancel]").forEach(i=>{i.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:c}=await _.from("market_listings").update({status:"cancelled"}).eq("id",i.dataset.cancel);c?n(c.message,"error"):(n("Annonce annulée","success"),mt(e,t))})}),(h=document.getElementById("btn-price-grid"))==null||h.addEventListener("click",()=>fn(t))}async function fn(e){await ve(e)}function yn(){const e=document.getElementById("modal-overlay");if(!e||e._pgBlocker)return;const t=n=>{n.target===n.currentTarget&&n.stopImmediatePropagation()};e.addEventListener("click",t,!0),e._pgBlocker=t}function fe(){const e=document.getElementById("modal-overlay");e!=null&&e._pgBlocker&&(e.removeEventListener("click",e._pgBlocker,!0),delete e._pgBlocker)}async function ve(e){var u,d;const{openModal:t,closeModal:n,toast:o}=e,{data:s,error:r}=await _.from("sell_price_configs").select("*").order("rarity").order("note_min");if(r){o(r.message,"error");return}const g=f=>gn.map(p=>`<option value="${p.value}" ${p.value===f?"selected":""}>${p.label}</option>`).join(""),b=f=>`
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
          ${(s||[]).map(b).join("")||'<tr><td colspan="6" style="text-align:center;color:#aaa;padding:20px">Aucune règle définie.</td></tr>'}
        </tbody>
      </table>
    </div>
  `;t("📊 Grille des prix — vente marché",h,`
    <button id="pg-add-row" class="btn btn-primary">+ Ajouter une ligne</button>
    <button id="pg-close" class="btn btn-ghost">Fermer</button>
  `),yn(),(u=document.getElementById("pg-close"))==null||u.addEventListener("click",()=>{fe(),n()});function c(f){const p=f.dataset.id,y=f.dataset.field,I=y==="rarity"?f.value:Number(f.value)||0;return a(p,{[y]:I},f)}async function a(f,p,y){const I=document.querySelector(`tr[data-row="${f}"]`),$=k=>I.querySelector(`[data-field="${k}"]`),E="note_min"in p?p.note_min:Number($("note_min").value),v="note_max"in p?p.note_max:Number($("note_max").value),m="price_min"in p?p.price_min:Number($("price_min").value),x="price_max"in p?p.price_max:Number($("price_max").value);if(E>v){o("Note min doit être ≤ note max","error");return}if(m>x){o("Prix min doit être ≤ prix max","error");return}const{error:w}=await _.from("sell_price_configs").update(p).eq("id",f);if(w){o(w.message,"error");return}y&&(y.style.transition="background .3s",y.style.background="#e8f8ee",setTimeout(()=>{y.style.background=""},500))}function l(){document.querySelectorAll("#pg-tbody [data-field]").forEach(f=>{f.addEventListener("change",()=>c(f))})}l(),document.querySelectorAll("[data-del-row]").forEach(f=>{f.addEventListener("click",async()=>{confirm("Supprimer cette ligne ?")&&(await _.from("sell_price_configs").delete().eq("id",f.dataset.delRow),o("Ligne supprimée","success"),fe(),ve(e))})}),(d=document.getElementById("pg-add-row"))==null||d.addEventListener("click",async()=>{var $;const f={rarity:"normal",note_min:0,note_max:20,price_min:2500,price_max:15e3},{data:p,error:y}=await _.from("sell_price_configs").insert(f).select().single();if(y){o(y.message,"error");return}const I=document.getElementById("pg-tbody");I.querySelector("td[colspan]")&&(I.innerHTML=""),I.insertAdjacentHTML("beforeend",b(p)),l(),($=document.querySelector(`[data-del-row="${p.id}"]`))==null||$.addEventListener("click",async function(){confirm("Supprimer cette ligne ?")&&(await _.from("sell_price_configs").delete().eq("id",p.id),o("Ligne supprimée","success"),fe(),ve(e))}),o("Ligne ajoutée — modifie les valeurs directement","success")})}async function bn(e,{toast:t}){e.innerHTML=`
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
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:n,error:o}=await _.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(o){t(o.message,"error");return}if(!n||n.length===0){t("Aucun club à exporter","info");return}let s=`real_name,encoded_name,country_code,logo_url
`;n.forEach(r=>{s+=[r.real_name,r.encoded_name,r.country_code,r.logo_url||""].map(Pe).join(",")+`
`}),oe("clubs_export.csv",s),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:o}=await _.from("players").select("firstname,surname_real,surname_real,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_real");if(o){t(o.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let s=`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(r=>{var g;s+=[r.firstname,r.surname_real,r.surname_real,r.country_code,((g=r.clubs)==null?void 0:g.encoded_name)||"",r.job,r.job2||"",r.note_g,r.note_d,r.note_m,r.note_a,r.rarity,r.note_min??"",r.note_max??"",r.skin,r.hair,r.hair_length,r.sell_price].map(Pe).join(",")+`
`}),oe("players_export.csv",s),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const o=n.target.files[0];if(!o)return;const s=document.getElementById("clubs-import-result");s.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const r=await o.text(),g=Fe(r);if(g.length===0){s.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let b=0,h=0;const i=[];for(const c of g){if(!c.real_name||!c.encoded_name||!c.country_code){h++,i.push(`Ligne ignorée (champs manquants): ${c.real_name||"?"}`);continue}const a={real_name:c.real_name,encoded_name:c.encoded_name.toUpperCase(),country_code:c.country_code.toUpperCase().slice(0,2),logo_url:c.logo_url||null},{error:l}=await _.from("clubs").upsert(a,{onConflict:"encoded_name"});l?(h++,i.push(`${c.encoded_name}: ${l.message}`)):b++}s.innerHTML=`<div style="color:var(--green)">✅ ${b} clubs importés</div>
        ${h>0?`<div style="color:#c0392b">❌ ${h} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${i.slice(0,10).join("<br>")}</div>`:""}`,t(`${b} clubs importés`,"success")}catch(r){s.innerHTML=`<span style="color:#c0392b">Erreur : ${r.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const o=n.target.files[0];if(!o)return;const s=document.getElementById("players-import-result");s.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const r=await o.text(),g=Fe(r);if(g.length===0){s.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:b}=await _.from("clubs").select("id,encoded_name"),h={};(b||[]).forEach(y=>{h[y.encoded_name.toUpperCase()]=y.id});let i=0,c=0;const a=[],l=["GK","DEF","MIL","ATT"],u=["normal","pepite","papyte","legende"],d=["blanc","metisse","typ","noir"],f=["blond","marron","noir","chauve"],p=["rase","court","milong","long"];for(const y of g){if(!y.firstname||!y.surname_real||!y.country_code||!y.job){c++,a.push(`Ligne ignorée (champs requis manquants): ${y.firstname||"?"}`);continue}if(!l.includes(y.job)){c++,a.push(`${y.firstname}: job invalide "${y.job}"`);continue}const I=y.club_encoded_name&&h[y.club_encoded_name.toUpperCase()]||null,$={firstname:y.firstname,surname_real:y.surname_real,surname_real:y.surname_real||ue(y.surname_real),country_code:y.country_code.toUpperCase().slice(0,2),club_id:I,job:y.job,job2:l.includes(y.job2)?y.job2:null,note_g:parseInt(y.note_g)||0,note_d:parseInt(y.note_d)||0,note_m:parseInt(y.note_m)||0,note_a:parseInt(y.note_a)||0,rarity:u.includes(y.rarity)?y.rarity:"normal",note_min:y.note_min!==""&&y.note_min!=null?parseInt(y.note_min):null,note_max:y.note_max!==""&&y.note_max!=null?parseInt(y.note_max):null,skin:d.includes(y.skin)?y.skin:"blanc",hair:f.includes(y.hair)?y.hair:"noir",hair_length:p.includes(y.hair_length)?y.hair_length:"court",sell_price:parseInt(y.sell_price)||0},{error:E}=await _.from("players").insert($);E?(c++,a.push(`${y.firstname} ${y.surname_real}: ${E.message}`)):i++}s.innerHTML=`<div style="color:var(--green)">✅ ${i} joueurs importés</div>
        ${c>0?`<div style="color:#c0392b">❌ ${c} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${a.slice(0,10).join("<br>")}</div>`:""}`,t(`${i} joueurs importés`,"success")}catch(r){s.innerHTML=`<span style="color:#c0392b">Erreur : ${r.message}</span>`}n.target.value=""})}function Pe(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function oe(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),o=URL.createObjectURL(n),s=document.createElement("a");s.href=o,s.download=e,s.click(),URL.revokeObjectURL(o)}function Fe(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(g=>g.trim());if(t.length<2)return[];const n=t[0],o=n.split(";").length>n.split(",").length?";":",",s=Oe(n,o).map(g=>g.trim().replace(/^\uFEFF/,"").toLowerCase()),r=[];for(let g=1;g<t.length;g++){if(!t[g].trim())continue;const b=Oe(t[g],o),h={};s.forEach((i,c)=>{h[i]=(b[c]||"").trim()}),!Object.values(h).every(i=>!i)&&r.push(h)}return r}function Oe(e,t=","){const n=[];let o="",s=!1;for(let r=0;r<e.length;r++){const g=e[r];s?g==='"'?e[r+1]==='"'?(o+='"',r++):s=!1:o+=g:g==='"'?s=!0:g===t?(n.push(o),o=""):o+=g}return n.push(o),n}const vn={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function xn(e,{toast:t}){const n=Object.keys(ge);let o=n[0];const{data:s}=await _.from("formation_links_overrides").select("formation, links"),r={};(s||[]).forEach(c=>{r[c.formation]=c.links});let g=new Set;function b(c,a){return[c,a].sort().join("-")}function h(c){const a=r[c]||ge[c]||[];g=new Set(a.map(([l,u])=>b(l,u)))}h(o),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${n.map(c=>`<option value="${c}" ${c===o?"selected":""}>${c}</option>`).join("")}
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
  `;function i(){const c=zt[o]||{},a=ze(o),l=320,u=400,d=22;function f(E){const v=c[E];return v?{x:v.x*l,y:v.y*u}:null}let p=`<svg width="${l}" height="${u}" viewBox="0 0 ${l} ${u}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;a.forEach(([E,v],m)=>{const x=f(E),w=f(v);if(!x||!w)return;const k=b(E,v),L=g.has(k),B=L?"#3b82f6":"#999",A=L?.95:.35,S=L?4:3;p+=`<line x1="${x.x}" y1="${x.y}" x2="${w.x}" y2="${w.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${k}" style="cursor:pointer"/>`,p+=`<line x1="${x.x}" y1="${x.y}" x2="${w.x}" y2="${w.y}"
        stroke="${B}" stroke-width="${S}" stroke-dasharray="${L?"none":"4,3"}"
        opacity="${A}" pointer-events="none" data-line-key="${k}"/>`});for(const E of Object.keys(c)){const v=f(E);if(!v)continue;const m=E.replace(/\d+/,""),x=vn[m]||"#555";p+=`<circle cx="${v.x}" cy="${v.y}" r="${d}" fill="${x}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,p+=`<text x="${v.x}" y="${v.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${E}</text>`}p+="</svg>",document.getElementById("field-wrap").innerHTML=p;const y=document.getElementById("links-list");y.innerHTML=a.map(([E,v])=>{const m=b(E,v),x=g.has(m);return`
        <button class="link-toggle" data-key="${m}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${x?"#3b82f6":"#ddd"};
          background:${x?"#eaf2ff":"#fafafa"};
          color:${x?"#1d4ed8":"#888"}">
          <span>${E} ↔ ${v}</span>
          <span>${x?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const I=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');I&&(I.textContent=`Liens (${g.size}/${a.length} actifs)`);function $(E){g.has(E)?g.delete(E):g.add(E),i()}e.querySelectorAll(".link-hit").forEach(E=>{E.addEventListener("click",()=>$(E.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(E=>{E.addEventListener("click",()=>$(E.dataset.key))})}i(),document.getElementById("formation-select").addEventListener("change",c=>{o=c.target.value,h(o),i()}),document.getElementById("reset-btn").addEventListener("click",()=>{const c=ge[o]||[];g=new Set(c.map(([a,l])=>b(a,l))),i(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const a=ze(o).filter(([u,d])=>g.has(b(u,d))),{error:l}=await _.from("formation_links_overrides").upsert({formation:o,links:a,updated_at:new Date().toISOString()});if(l){t(l.message,"error");return}r[o]=a,t(`Liens enregistrés pour ${o} (${a.length} actifs)`,"success")})}const hn=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],En=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],_n=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function wn(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await _.from("booster_configs").select("*").order("sort_order");let n=null,o=[],s=null;const r=()=>window.innerWidth<700;async function g(){if(!n){o=[];return}if(n!==s){const{data:a}=await _.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");o=a||[],s=n}}function b(){return`
    <div id="booster-list" style="background:#fff;${r()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
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
    </div>`}function h(){const a=n?(t||[]).find(d=>d.id===n):null;if(!a)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const l=o.reduce((d,f)=>d+Number(f.percentage||0),0),u=Math.abs(l-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${r()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

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
              ${_n.map(d=>`<option value="${d.value}" ${a.price_type===d.value?"selected":""}>${d.label}</option>`).join("")}
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
              Total : ${l.toFixed(1)}% ${u?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${o.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':o.map((d,f)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${f}">
            <select class="rate-type" data-idx="${f}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${hn.map(p=>`<option value="${p.value}" ${d.card_type===p.value?"selected":""}>${p.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${f}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${En.map(p=>`<option value="${p.value}" ${(d.rarity||"")===p.value?"selected":""}>${p.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${f}" type="number" min="0" max="20" value="${d.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${f}" type="number" min="0" max="20" value="${d.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${f}" type="number" min="0.1" max="100" step="0.1" value="${d.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${f}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function i(a=!1){a||await g();const l=!n&&r(),u=n&&r();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!r()||l||!n?b():""}
      ${!r()||u?h():""}
    </div>`,c()}function c(){var u,d,f,p,y,I,$;const a=E=>e.querySelector(E);e.querySelectorAll(".booster-row").forEach(E=>{E.addEventListener("click",v=>{v.target.closest(".btn-delete")||(n=E.dataset.id,s=null,i())})}),(u=a("#btn-back"))==null||u.addEventListener("click",()=>{n=null,i()}),(d=a("#btn-new"))==null||d.addEventListener("click",async()=>{const E=prompt("Nom du nouveau booster :");if(!(E!=null&&E.trim()))return;const{data:v,error:m}=await _.from("booster_configs").insert({name:E.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(m){alert(m.message);return}t.push(v),n=v.id,s=null,i()}),e.querySelectorAll(".btn-delete").forEach(E=>{E.addEventListener("click",async v=>{if(v.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await _.from("booster_configs").delete().eq("id",E.dataset.id);const m=t.findIndex(x=>x.id===E.dataset.id);m>-1&&t.splice(m,1),n===E.dataset.id&&(n=null,s=null),i()})}),(f=a("#btn-cancel"))==null||f.addEventListener("click",()=>{n=null,i()}),(p=a("#f-price-type"))==null||p.addEventListener("change",E=>{const v=a("#credits-field");v&&(v.style.opacity=E.target.value!=="credits"?"0.4":"1")}),(y=a("#btn-pick-icon"))==null||y.addEventListener("click",async()=>{var v;const E=a("#icon-picker-grid");if(E){if(E.style.display!=="none"){E.style.display="none";return}E.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',E.style.display="block";try{const x=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),w=Array.isArray(x)?x.filter(L=>L.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(L.name)):[];if(!w.length){E.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const k=((v=a("#f-image-url"))==null?void 0:v.value)||"";E.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${w.map(L=>`
          <div class="icon-pick-item" data-name="${L.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${L.name===k?"#1A6B3C":"#ddd"};background:${L.name===k?"#f0f7f0":"#fff"}">
            <img src="/icons/${L.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${L.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,E.querySelectorAll(".icon-pick-item").forEach(L=>{L.addEventListener("click",()=>{const B=a("#f-image-url");B&&(B.value=L.dataset.name),E.style.display="none"})})}catch(m){E.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${m.message}</div>`}}});function l(){e.querySelectorAll("[data-rate-idx]").forEach(E=>{var m,x,w,k,L;const v=Number(E.dataset.rateIdx);v>=0&&v<o.length&&(o[v].card_type=((m=E.querySelector(".rate-type"))==null?void 0:m.value)||"player",o[v].rarity=((x=E.querySelector(".rate-rarity"))==null?void 0:x.value)||null,o[v].note_min=Number((w=E.querySelector(".rate-note-min"))==null?void 0:w.value)||null,o[v].note_max=Number((k=E.querySelector(".rate-note-max"))==null?void 0:k.value)||null,o[v].percentage=Number((L=E.querySelector(".rate-pct"))==null?void 0:L.value)||0)})}(I=a("#btn-add-rate"))==null||I.addEventListener("click",()=>{l(),o.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:o.length}),i(!0)}),e.querySelectorAll(".btn-del-rate").forEach(E=>{E.addEventListener("click",()=>{l(),o.splice(Number(E.dataset.idx),1),i(!0)})}),($=a("#btn-save"))==null||$.addEventListener("click",async()=>{var k,L,B,A,S,C,M,F,O,U,N,j,ie;const E=(t||[]).find(T=>T.id===n);if(!E)return;const v=[];e.querySelectorAll("[data-rate-idx]").forEach(T=>{var Z,Q,X,ee,te;const V=Number(T.dataset.rateIdx);v.push({booster_id:n,card_type:((Z=T.querySelector(".rate-type"))==null?void 0:Z.value)||"player",rarity:((Q=T.querySelector(".rate-rarity"))==null?void 0:Q.value)||null,note_min:Number((X=T.querySelector(".rate-note-min"))==null?void 0:X.value)||null,note_max:Number((ee=T.querySelector(".rate-note-max"))==null?void 0:ee.value)||null,percentage:Number((te=T.querySelector(".rate-pct"))==null?void 0:te.value)||0,sort_order:V});const D=v[v.length-1];D.rarity||(D.rarity=null),D.note_min||(D.note_min=null),D.note_max||(D.note_max=null)});const m=v.reduce((T,V)=>T+V.percentage,0);if(v.length&&Math.abs(m-100)>.5){alert(`La somme doit faire 100% (actuellement ${m.toFixed(1)}%)`);return}const x={name:((L=(k=a("#f-name"))==null?void 0:k.value)==null?void 0:L.trim())||E.name,image_url:((A=(B=a("#f-image-url"))==null?void 0:B.value)==null?void 0:A.trim())||null,price_type:(S=a("#f-price-type"))==null?void 0:S.value,price_credits:Number((C=a("#f-price-credits"))==null?void 0:C.value)||0,card_count:Number((M=a("#f-card-count"))==null?void 0:M.value)||5,is_active:((F=a("#f-active"))==null?void 0:F.checked)??E.is_active,allow_duplicates:((O=a("#f-allow-dup"))==null?void 0:O.checked)??!0,sort_order:Number((U=a("#f-sort"))==null?void 0:U.value)||0,max_per_user:(N=a("#f-max-per-user"))!=null&&N.value?Number(a("#f-max-per-user").value):null,available_from:((j=a("#f-available-from"))==null?void 0:j.value)||null,available_until:((ie=a("#f-available-until"))==null?void 0:ie.value)||null},{error:w}=await _.from("booster_configs").update(x).eq("id",n);if(w){alert(w.message);return}if(Object.assign(E,x),await _.from("booster_drop_rates").delete().eq("booster_id",n),v.length){const{error:T}=await _.from("booster_drop_rates").insert(v);if(T){alert(T.message);return}}o=v,s=n,alert("✅ Booster enregistré !"),i(!0)})}i()}const gt=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function In(e){await ke(e)}async function ke(e){const{data:t,error:n}=await _.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
          ${(t||[]).map(o=>$n(o)).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>Ue(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>kn(e)),e.querySelectorAll("[data-edit]").forEach(o=>{const s=(t||[]).find(r=>r.id===o.dataset.edit);s&&o.addEventListener("click",()=>Ue(s))}),e.querySelectorAll("[data-delete]").forEach(o=>{o.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await _.from("sell_price_configs").delete().eq("id",o.dataset.delete),await ke(e))})})}function $n(e){const t=gt.find(n=>n.value===e.rarity);return`
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
    </tr>`}function Ue(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function kn(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,o=parseInt(document.getElementById("form-price").value)||0,s=parseInt(document.getElementById("form-note-min").value)||1,r=parseInt(document.getElementById("form-note-max").value)||10;if(s>r){alert("Note min doit être ≤ note max");return}const g={rarity:n,price:o,note_min:s,note_max:r,updated_at:new Date().toISOString()};let b;if(t?{error:b}=await _.from("sell_price_configs").update(g).eq("id",t):{error:b}=await _.from("sell_price_configs").insert(g),b){alert("Erreur : "+b.message);return}document.getElementById("config-form").style.display="none",await ke(e)}async function Ln(e){await Le(e)}async function Le(e){const{data:t}=await _.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Actualités</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(t||[]).map(n=>Bn(n)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>Ge(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Sn(e)),e.querySelectorAll("[data-edit-row]").forEach(n=>{const o=(t||[]).find(s=>s.id===n.dataset.editRow);o&&n.addEventListener("click",()=>Ge(o))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await _.from("patch_notes").delete().eq("id",n.dataset.delete),await Le(e))})})}function Bn(e){const t=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function Ge(e){const t=document.getElementById("article-form");t.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img-current").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-img-file").value="";const n=document.getElementById("form-art-img-preview");n.innerHTML=e!=null&&e.image_url?`<img src="${e.image_url}" style="width:100%;height:100%;object-fit:cover">`:'<span style="font-size:20px;opacity:.4">📰</span>',document.getElementById("form-art-img-file").onchange=r=>{var h;const g=(h=r.target.files)==null?void 0:h[0];if(!g)return;const b=new FileReader;b.onload=()=>{n.innerHTML=`<img src="${b.result}" style="width:100%;height:100%;object-fit:cover">`},b.readAsDataURL(g)},document.getElementById("form-art-pub").checked=e?e.is_published:!0;const o=new Date((e==null?void 0:e.published_at)||Date.now()),s=new Date(o.getTime()-o.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=s,t.scrollIntoView({behavior:"smooth"})}async function An(e){const t=(e.name.split(".").pop()||"png").toLowerCase(),n=`journal/${Date.now()}.${t}`,{error:o}=await _.storage.from("assets").upload(n,e,{upsert:!0,cacheControl:"3600"});if(o)throw o;const{data:s}=_.storage.from("assets").getPublicUrl(n);return s.publicUrl}async function Sn(e){var u;const t=document.getElementById("form-id").value,n=document.getElementById("form-art-title").value.trim(),o=document.getElementById("form-art-desc").value.trim(),s=((u=document.getElementById("form-art-img-file").files)==null?void 0:u[0])||null,r=document.getElementById("form-art-img-current").value||null,g=document.getElementById("form-art-pub").checked,b=document.getElementById("form-art-date").value,h=document.getElementById("form-save");if(!n){alert("Le titre est obligatoire.");return}if(!o){alert("La description est obligatoire.");return}let i=r;if(s)try{h&&(h.textContent="📤 Envoi de l'image…"),i=await An(s)}catch(d){alert("Erreur upload image : "+d.message),h&&(h.textContent="💾 Enregistrer");return}const c=b?new Date(b).toISOString():new Date().toISOString(),a={title:n,description:o,image_url:i,is_published:g,published_at:c};let l;if(t?{error:l}=await _.from("patch_notes").update(a).eq("id",t):{error:l}=await _.from("patch_notes").insert(a),l){alert("Erreur : "+l.message);return}document.getElementById("article-form").style.display="none",await Le(e)}async function Cn(e){await W(e)}async function W(e){var c,a,l,u,d,f,p,y,I,$,E,v;const{data:t}=await _.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([m,x,w])=>`<button type="button" data-cmd="${x}" title="${w}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${m}</button>`).join("")}
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
            </div>`:(t||[]).map(m=>Tn(m)).join("")}
        </div>
      </div><!-- /colonne droite -->
    </div>`,(c=document.getElementById("ts-add"))==null||c.addEventListener("click",()=>He(null,(t==null?void 0:t.length)||0)),(a=document.getElementById("ts-reset"))==null||a.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:m}=await _.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(m?"Erreur : "+m.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(l=document.getElementById("ts-cancel"))==null||l.addEventListener("click",ft),(u=document.getElementById("ts-save"))==null||u.addEventListener("click",()=>zn(e)),(d=document.getElementById("ts-preview-btn"))==null||d.addEventListener("click",Mn);const n=document.getElementById("ts-editor"),o=()=>{const m=document.getElementById("ts-content");m&&n&&(m.value=n.innerHTML)};n==null||n.addEventListener("input",o),n==null||n.addEventListener("blur",o);const s=()=>{document.activeElement!==n&&(n==null||n.focus())};(f=document.getElementById("ts-toolbar"))==null||f.querySelectorAll("[data-cmd]").forEach(m=>{m.addEventListener("mousedown",x=>{x.preventDefault(),s();const w=m.dataset.cmd;w.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,w.split(":")[1]):document.execCommand(w,!1,null),o()})}),(p=document.getElementById("ts-insert-color"))==null||p.addEventListener("mousedown",m=>{m.preventDefault(),s();const x=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");x&&(document.execCommand("foreColor",!1,x),o())}),(y=document.getElementById("ts-clear-format"))==null||y.addEventListener("mousedown",m=>{m.preventDefault(),s(),document.execCommand("removeFormat",!1,null),o()}),n==null||n.addEventListener("focus",()=>{n&&(n.style.borderColor="#1A6B3C")}),n==null||n.addEventListener("blur",()=>{n&&(n.style.borderColor="#ddd")});const r=document.getElementById("ts-image"),g=document.getElementById("ts-img-preview"),b=document.getElementById("ts-img-preview-el"),h=document.getElementById("ts-img-picker-grid"),i=()=>{var x;const m=(x=r==null?void 0:r.value)==null?void 0:x.trim();if(m){const w="/";b.src=`${w}icons/${m}`,g.style.display="block"}else g.style.display="none"};r==null||r.addEventListener("input",i),(I=document.getElementById("ts-img-clear"))==null||I.addEventListener("click",()=>{r&&(r.value=""),g.style.display="none",h.style.display="none"}),($=document.getElementById("ts-img-pick"))==null||$.addEventListener("click",async()=>{if(h.style.display!=="none"){h.style.display="none";return}h.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',h.style.display="block";try{const x=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),w=Array.isArray(x)?x.filter(L=>L.name.startsWith("tuto_")):[];if(!w.length){h.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const k="/";h.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+w.map(L=>`
          <div data-pick="${L.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${k}icons/${L.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${L.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",h.querySelectorAll("[data-pick]").forEach(L=>{L.addEventListener("click",()=>{r&&(r.value=L.dataset.pick),i(),h.style.display="none"})})}catch(m){h.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+m.message+"</div>"}}),(E=document.getElementById("ts-color"))==null||E.addEventListener("input",m=>{const x=document.getElementById("ts-color-hex");x&&(x.value=m.target.value)}),(v=document.getElementById("ts-color-hex"))==null||v.addEventListener("input",m=>{const x=m.target.value;if(/^#[0-9a-fA-F]{6}$/.test(x)){const w=document.getElementById("ts-color");w&&(w.value=x)}}),e.querySelectorAll("[data-edit-row]").forEach(m=>{const x=(t||[]).find(w=>w.id===m.dataset.editRow);x&&m.addEventListener("click",()=>He(x))}),e.querySelectorAll("[data-delete]").forEach(m=>{m.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await _.from("tutorial_steps").delete().eq("id",m.dataset.delete),W(e))})}),e.querySelectorAll("[data-toggle]").forEach(m=>{m.addEventListener("click",async()=>{const x=(t||[]).find(w=>w.id===m.dataset.toggle);x&&(await _.from("tutorial_steps").update({is_active:!x.is_active}).eq("id",x.id),W(e))})}),e.querySelectorAll("[data-up]").forEach(m=>{m.addEventListener("click",async()=>{const x=t||[],w=x.findIndex(k=>k.id===m.dataset.up);w<=0||(await Promise.all([_.from("tutorial_steps").update({step_order:x[w-1].step_order}).eq("id",x[w].id),_.from("tutorial_steps").update({step_order:x[w].step_order}).eq("id",x[w-1].id)]),W(e))})}),e.querySelectorAll("[data-down]").forEach(m=>{m.addEventListener("click",async()=>{const x=t||[],w=x.findIndex(k=>k.id===m.dataset.down);w<0||w>=x.length-1||(await Promise.all([_.from("tutorial_steps").update({step_order:x[w+1].step_order}).eq("id",x[w].id),_.from("tutorial_steps").update({step_order:x[w].step_order}).eq("id",x[w+1].id)]),W(e))})})}function Tn(e){return`
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
  </div>`}function He(e,t=0){document.getElementById("ts-form-empty").style.display="none",document.getElementById("ts-form-content").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const n=document.getElementById("ts-editor");n&&(n.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??t,document.getElementById("ts-active").checked=e?e.is_active:!0;const o=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=o,document.getElementById("ts-color-hex").value=o;const s=(e==null?void 0:e.image_url)||"",r=document.getElementById("ts-image");r&&(r.value=s);const g=document.getElementById("ts-img-preview"),b=document.getElementById("ts-img-preview-el");if(s&&g&&b){const h="/";b.src=`${h}icons/${s}`,g.style.display="block"}else g&&(g.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function ft(){document.getElementById("ts-form-content").style.display="none",document.getElementById("ts-form-empty").style.display="block",document.getElementById("ts-preview-area").innerHTML=""}function Mn(){var i,c;const e=document.getElementById("ts-emoji").value||"⚽",t=document.getElementById("ts-title").value||"Titre",n=document.getElementById("ts-editor"),o=n?n.innerHTML:document.getElementById("ts-content").value||"",s=document.getElementById("ts-color-hex").value||"#1A6B3C",r=(c=(i=document.getElementById("ts-image"))==null?void 0:i.value)==null?void 0:c.trim(),b=r?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${r}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",h=document.getElementById("ts-preview-area");h.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${s}"></div></div>
        <div style="padding:20px 20px 0;text-align:center">
          <div style="font-size:48px;margin-bottom:8px;line-height:1">${e}</div>
          <div style="font-size:17px;font-weight:900;color:#111;margin-bottom:4px">${t}</div>
          <div style="font-size:11px;color:#aaa">6 / 10</div>
        </div>
        ${b}
        <div style="padding:${r?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${o}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${s};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,h.querySelectorAll("ul,ol").forEach(a=>{a.style.paddingLeft="20px",a.style.margin="6px 0"}),h.querySelectorAll("li").forEach(a=>{a.style.marginBottom="4px"}),h.querySelectorAll("p").forEach(a=>{a.style.marginBottom="8px"})}async function zn(e){var a,l;const t=document.getElementById("ts-id").value,n=document.getElementById("ts-emoji").value.trim()||"⚽",o=document.getElementById("ts-title").value.trim(),s=document.getElementById("ts-editor"),r=(s?s.innerHTML:document.getElementById("ts-content").value).trim(),g=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",b=parseInt(document.getElementById("ts-order").value)||0,h=document.getElementById("ts-active").checked;if(!o||!r){alert("Titre et contenu sont obligatoires.");return}const i={emoji:n,title:o,content:r,color:g,step_order:b,is_active:h,image_url:((l=(a=document.getElementById("ts-image"))==null?void 0:a.value)==null?void 0:l.trim())||null};let c;if(t?{error:c}=await _.from("tutorial_steps").update(i).eq("id",t):{error:c}=await _.from("tutorial_steps").insert(i),c){alert("Erreur : "+c.message);return}ft(),W(e)}const yt="/",bt=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function Rn(e,t){await ce(e,t)}async function ce(e,t){var s,r;const[{data:n},{data:o}]=await Promise.all([_.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),_.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;gap:10px;flex-wrap:wrap">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">🏟️ Stades</h2>
        <div style="display:flex;gap:8px">
          <button id="st-gen-countries-btn" class="btn btn-ghost">🌍 Créer les stades Pays manquants</button>
          <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
        </div>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="st-list">
        ${(n||[]).length?(n||[]).map(g=>jn(g)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucun stade créé.</div>'}
      </div>
    </div>`,(s=document.getElementById("st-add-btn"))==null||s.addEventListener("click",()=>qe(null,o,e,t)),(r=document.getElementById("st-gen-countries-btn"))==null||r.addEventListener("click",async()=>{const{toast:g}=t,b=new Set((n||[]).filter(l=>!l.club_id&&l.country_code).map(l=>l.country_code)),h=bt.filter(([l])=>!b.has(l));if(!h.length){g("Tous les pays ont déjà un stade.","info");return}if(!confirm(`Créer ${h.length} stade(s) "Pays" manquant(s) ?`))return;const i=h.map(([l,u])=>({name:`Stade ${u}`,club_id:null,country_code:l})),{data:c,error:a}=await _.from("stadium_definitions").insert(i).select();if(a){g("Erreur : "+a.message,"error");return}c!=null&&c.length&&await _.from("cards").insert(c.map(l=>({card_type:"stadium",stadium_id:l.id}))),g(`${(c==null?void 0:c.length)||0} stade(s) Pays créé(s) ✅`,"success"),ce(e,t)}),e.querySelectorAll("[data-edit-stadium]").forEach(g=>{g.addEventListener("click",()=>{const b=(n||[]).find(h=>h.id===g.dataset.editStadium);b&&qe(b,o,e,t)})})}function jn(e){var s,r;let t=null;e.image_url?t=e.image_url.startsWith("http")?e.image_url:`${yt}icons/${e.image_url}`:(s=e.club)!=null&&s.logo_url?t=e.club.logo_url:e.country_code&&(t=`https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/64.png`);const n=((r=e.club)==null?void 0:r.encoded_name)||e.country_code||"—",o=Qe(e.name,t,`${n}<br>+10 ⭐`,{width:140});return`<div data-edit-stadium="${e.id}" style="cursor:pointer;transition:transform .15s" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
    ${o}
  </div>`}function qe(e,t,n,o){var c,a,l;const{openModal:s,closeModal:r,toast:g}=o,b=`
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
            ${bt.map(([u,d])=>`<option value="${u}" ${(e==null?void 0:e.country_code)===u?"selected":""}>${d} (${u})</option>`).join("")}
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
  `;s(e?`Modifier : ${e.name}`:"Nouveau stade",b,`
    <button id="st-cancel" class="btn btn-ghost">Annuler</button>
    <button id="st-save" class="btn btn-primary">Enregistrer</button>
  `);const i=()=>{var x,w,k,L,B,A,S;const u=((x=document.getElementById("st-name"))==null?void 0:x.value)||"NOM DU STADE",d=(k=(w=document.getElementById("st-image"))==null?void 0:w.value)==null?void 0:k.trim(),f=(B=(L=document.getElementById("st-country"))==null?void 0:L.value)==null?void 0:B.trim(),p=document.getElementById("st-club"),y=(p==null?void 0:p.selectedIndex)||0,I=p&&y>0?p.options[y].text:"",$=((S=(A=p==null?void 0:p.options[y])==null?void 0:A.getAttribute)==null?void 0:S.call(A,"data-logo"))||"";let E=null;d?E=d.startsWith("http")?d:`${yt}icons/${d}`:$?E=$:f&&(E=`https://flagsapi.com/${f.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`);const v=I||f||"—",m=document.getElementById("st-preview-card");m&&(m.innerHTML=Qe(u,E,`${v}<br>+10 ⭐`,{width:140}))};i(),["st-name","st-club","st-country","st-image"].forEach(u=>{var d,f;(d=document.getElementById(u))==null||d.addEventListener("input",i),(f=document.getElementById(u))==null||f.addEventListener("change",i)}),(c=document.getElementById("st-cancel"))==null||c.addEventListener("click",()=>r()),(a=document.getElementById("st-save"))==null||a.addEventListener("click",async()=>{const u=document.getElementById("st-name").value.trim(),d=document.getElementById("st-club").value||null,f=document.getElementById("st-country").value.trim().toUpperCase()||null,p=document.getElementById("st-image").value.trim()||null;if(!u){g("Le nom est obligatoire","error");return}const y={name:u,club_id:d,country_code:f,image_url:p},{error:I}=e?await _.from("stadium_definitions").update(y).eq("id",e.id):await _.from("stadium_definitions").insert(y);if(I){g("Erreur : "+I.message,"error");return}g(e?"Stade modifié ✅":"Stade créé ✅","success"),r(),ce(n,o)}),(l=document.getElementById("st-delete"))==null||l.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await _.from("stadium_definitions").delete().eq("id",e.id),g("Stade supprimé","success"),r(),ce(n,o))})}const H=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],Dn=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}],G=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],Ke=["GK","DEF","MIL","ATT"];async function Nn(e,t){await Be(e,t)}async function Be(e,t){var o;const{data:n}=await _.from("gc_definitions").select("*").order("sort_order").order("created_at");e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">⚡ Game Changers</h2>
        <button id="gc-add-btn" class="btn btn-primary">+ Nouvelle carte</button>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="gc-list">
        ${(n||[]).length?(n||[]).map(s=>Pn(s)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucune carte Game Changer.</div>'}
      </div>
    </div>`,(o=document.getElementById("gc-add-btn"))==null||o.addEventListener("click",()=>Je(null,e,t)),e.querySelectorAll("[data-edit-gc]").forEach(s=>{s.addEventListener("click",()=>{const r=(n||[]).find(g=>g.id===s.dataset.editGc);r&&Je(r,e,t)})}),e.querySelectorAll(".btn-del-gc").forEach(s=>{s.addEventListener("click",async r=>{r.stopPropagation(),confirm("Supprimer cette carte Game Changer ?")&&(await _.from("gc_definitions").delete().eq("id",s.dataset.del),Be(e,t))})})}function Pn(e){const t=H.find(s=>s.value===e.gc_type)||H[0],n=e.image_url?`/icons/${e.image_url}`:null,o=ye(e.name||"?",n,t.label.split(" ")[0],e.effect||"",{width:130});return`<div data-edit-gc="${e.id}" style="position:relative;cursor:pointer">
    ${o}
    <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
      <button class="btn-del-gc" data-del="${e.id}"
        style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0">✕</button>
    </div>
    ${e.is_active?"":'<div style="position:absolute;top:4px;right:4px;z-index:10;background:#555;color:#fff;font-size:9px;font-weight:700;padding:2px 6px;border-radius:8px">INACTIF</div>'}
  </div>`}function Je(e,t,n){var l,u,d,f;const{openModal:o,closeModal:s,toast:r}=n,g=!e,b=e||{name:"",gc_type:"game_changer",color:"purple",effect:"",image_url:"",sort_order:0,is_active:!0,effect_type:"BOOST_STAT",effect_params:{}},h=(()=>{const p=b.effect_params||{},y=G.find(I=>I.value===(b.effect_type||"BOOST_STAT"))||G[0];return`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${y.hasValue?`<div>
        <label>VALEUR (+N)</label>
        <input id="gc-p-value" type="number" min="1" max="5" value="${p.value||2}">
      </div>`:""}
      ${y.hasCount?`<div>
        <label>NB JOUEURS</label>
        <input id="gc-p-count" type="number" min="1" max="11" value="${p.count||1}">
      </div>`:""}
      ${y.hasTarget?`<div>
        <label>CIBLE</label>
        <select id="gc-p-target">
          <option value="home" ${(p.target||"home")==="home"?"selected":""}>Mon équipe</option>
          <option value="opponent" ${p.target==="opponent"?"selected":""}>Équipe adverse</option>
        </select>
      </div>`:""}
      ${y.hasRoles?`<div>
        <label>POSTES CIBLÉS</label>
        <div style="display:flex;gap:4px;flex-wrap:wrap">
          ${Ke.map(I=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555">
            <input type="checkbox" class="gc-p-role" value="${I}" ${!p.roles||p.roles.includes(I)?"checked":""}> ${I}
          </label>`).join("")}
        </div>
      </div>`:""}
    </div>`})(),i=`
    <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:#1a1a2e;border-radius:12px">
      <div id="gc-modal-preview">${ye(b.name||"?",b.image_url?`/icons/${b.image_url}`:null,(H.find(p=>p.value===b.gc_type)||H[0]).label.split(" ")[0],b.effect||"",{width:150})}</div>
    </div>

    <div style="display:flex;flex-direction:column;gap:12px">
      <div>
        <label>NOM</label>
        <input id="gc-name" value="${b.name}">
      </div>
      <div>
        <label>EFFET / DESCRIPTION</label>
        <textarea id="gc-effect" rows="3">${b.effect||""}</textarea>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label>TYPE</label>
          <select id="gc-type">
            ${H.map(p=>`<option value="${p.value}" ${b.gc_type===p.value?"selected":""}>${p.label}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>COULEUR</label>
          <select id="gc-color">
            ${Dn.map(p=>`<option value="${p.value}" ${b.color===p.value?"selected":""}>${p.label}</option>`).join("")}
          </select>
        </div>
      </div>
      <div>
        <label>IMAGE (public/icons/gamechanger-*)</label>
        <div style="display:flex;gap:8px;align-items:center">
          <input id="gc-image-url" value="${b.image_url||""}" placeholder="gamechanger-nom.png" style="flex:1">
          <button id="btn-pick-gc-icon" class="btn btn-primary btn-sm" style="white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
        </div>
        <div id="gc-icon-picker" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label>ORDRE</label>
          <input id="gc-sort" type="number" value="${b.sort_order||0}">
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding-top:20px">
          <input type="checkbox" id="gc-active" ${b.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
          <label for="gc-active" style="cursor:pointer;font-weight:600;text-transform:none">Actif</label>
        </div>
      </div>
      <div style="border-top:1px solid #eee;padding-top:12px;margin-top:4px">
        <label style="color:#7a28b8">EFFET EN JEU</label>
        <div>
          <label>TYPE D'EFFET</label>
          <select id="gc-effect-type" style="margin-bottom:10px">
            ${G.map(p=>`<option value="${p.value}" ${(b.effect_type||"BOOST_STAT")===p.value?"selected":""}>${p.label}</option>`).join("")}
          </select>
        </div>
        <div id="gc-params-wrap">${h}</div>
      </div>
    </div>
  `;o(g?"Nouvelle carte Game Changer":`Modifier : ${b.name}`,i,`
    <button id="gc-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gc-save" class="btn btn-primary">💾 Enregistrer</button>
  `);const a=()=>{var m,x,w,k,L;const p=((m=document.getElementById("gc-name"))==null?void 0:m.value)||"?",y=((x=document.getElementById("gc-effect"))==null?void 0:x.value)||"",I=((w=document.getElementById("gc-type"))==null?void 0:w.value)||"game_changer",$=(L=(k=document.getElementById("gc-image-url"))==null?void 0:k.value)==null?void 0:L.trim(),E=H.find(B=>B.value===I)||H[0],v=document.getElementById("gc-modal-preview");v&&(v.innerHTML=ye(p,$?`/icons/${$}`:null,E.label.split(" ")[0],y,{width:150}))};["gc-name","gc-effect","gc-type","gc-image-url"].forEach(p=>{var y,I;(y=document.getElementById(p))==null||y.addEventListener("input",a),(I=document.getElementById(p))==null||I.addEventListener("change",a)}),(l=document.getElementById("gc-effect-type"))==null||l.addEventListener("change",()=>{const p=document.getElementById("gc-effect-type").value,y=G.find($=>$.value===p)||G[0],I=document.getElementById("gc-params-wrap");I.innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${y.hasValue?'<div><label>VALEUR (+N)</label><input id="gc-p-value" type="number" min="1" max="5" value="2"></div>':""}
      ${y.hasCount?'<div><label>NB JOUEURS</label><input id="gc-p-count" type="number" min="1" max="11" value="1"></div>':""}
      ${y.hasTarget?'<div><label>CIBLE</label><select id="gc-p-target"><option value="home">Mon équipe</option><option value="opponent">Équipe adverse</option></select></div>':""}
      ${y.hasRoles?`<div><label>POSTES CIBLÉS</label><div style="display:flex;gap:4px;flex-wrap:wrap">${Ke.map($=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555"><input type="checkbox" class="gc-p-role" value="${$}" checked> ${$}</label>`).join("")}</div></div>`:""}
    </div>`}),(u=document.getElementById("btn-pick-gc-icon"))==null||u.addEventListener("click",async()=>{var y;const p=document.getElementById("gc-icon-picker");if(p){if(p.style.display!=="none"){p.style.display="none";return}p.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',p.style.display="block";try{const $=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),E=Array.isArray($)?$.filter(m=>m.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(m.name)):[];if(!E.length){p.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const v=((y=document.getElementById("gc-image-url"))==null?void 0:y.value)||"";p.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
        ${E.map(m=>`
        <div class="gc-icon-item" data-name="${m.name}"
          style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${m.name===v?"#7a28b8":"#ddd"};background:${m.name===v?"#f5f0ff":"#fff"}">
          <img src="/icons/${m.name}" style="height:44px;width:100%;object-fit:contain">
          <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${m.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
        </div>`).join("")}
      </div>`,p.querySelectorAll(".gc-icon-item").forEach(m=>{m.addEventListener("click",()=>{const x=document.getElementById("gc-image-url");x&&(x.value=m.dataset.name),p.style.display="none",a()})})}catch(I){p.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${I.message}</div>`}}}),(d=document.getElementById("gc-cancel"))==null||d.addEventListener("click",()=>s()),(f=document.getElementById("gc-save"))==null||f.addEventListener("click",async()=>{var v,m,x,w,k,L,B,A,S,C,M,F,O,U;const p=G.find(N=>{var j;return N.value===(((j=document.getElementById("gc-effect-type"))==null?void 0:j.value)||"BOOST_STAT")})||G[0],y=p.hasRoles?[...document.querySelectorAll(".gc-p-role:checked")].map(N=>N.value):null,I={...p.hasValue?{value:Number((v=document.getElementById("gc-p-value"))==null?void 0:v.value)||2}:{},...p.hasCount?{count:Number((m=document.getElementById("gc-p-count"))==null?void 0:m.value)||1}:{},...p.hasTarget?{target:((x=document.getElementById("gc-p-target"))==null?void 0:x.value)||"home"}:{},...p.hasRoles?{roles:y!=null&&y.length?y:null}:{}},$={name:((k=(w=document.getElementById("gc-name"))==null?void 0:w.value)==null?void 0:k.trim())||"",effect:((B=(L=document.getElementById("gc-effect"))==null?void 0:L.value)==null?void 0:B.trim())||null,image_url:((S=(A=document.getElementById("gc-image-url"))==null?void 0:A.value)==null?void 0:S.trim())||null,gc_type:((C=document.getElementById("gc-type"))==null?void 0:C.value)||"game_changer",color:((M=document.getElementById("gc-color"))==null?void 0:M.value)||"purple",sort_order:Number((F=document.getElementById("gc-sort"))==null?void 0:F.value)||0,is_active:((O=document.getElementById("gc-active"))==null?void 0:O.checked)??!0,effect_type:((U=document.getElementById("gc-effect-type"))==null?void 0:U.value)||"BOOST_STAT",effect_params:I};if(!$.name){r("Le nom est obligatoire","error");return}const{error:E}=g?await _.from("gc_definitions").insert($):await _.from("gc_definitions").update($).eq("id",b.id);if(E){r(E.message,"error");return}r(g?"Carte créée ✅":"Carte modifiée ✅","success"),s(),Be(t,n)})}async function Fn(e,{toast:t,openModal:n,closeModal:o}){await Y(e,{toast:t,openModal:n,closeModal:o})}async function Y(e,t){var E;const{toast:n,openModal:o,closeModal:s}=t,[{data:r,error:g},{data:b}]=await Promise.all([_.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),_.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1)]);if(g){e.innerHTML=`<p style="color:red">${g.message}</p>`;return}const h=r||[],i=h.find(v=>v.is_active),c=(b||[]).filter(v=>(v.placement_matches||0)>=1),a=c.filter(v=>(v.placement_matches||0)>=10),l=["bronze","silver","gold","platinum","diamond","master"],u={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},d={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},f={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},p={};l.forEach(v=>{p[v]=0}),a.forEach(v=>{const m=v.rank_tier||"bronze";p[m]!==void 0&&p[m]++});const y=a.length?Math.round(a.reduce((v,m)=>v+(m.mmr||1e3),0)/a.length):0;function I(v){return v?new Date(v).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function $(v){const m=new Date;return v.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(v.end_at)<m?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${i?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${i.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${c.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Joueurs ranked</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${a.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Classés (10+ matchs)</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${y}</div>
            <div style="font-size:11px;color:var(--gray-600)">MMR moyen</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(i.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${a.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${l.map(v=>{const m=p[v],x=a.length>0?Math.round(m/a.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${f[v]} ${u[v]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${x}%;background:${d[v]};border-radius:4px;transition:width 0.5s"></div>
                </div>
                <span style="width:40px;text-align:right;color:var(--gray-600)">${m} (${x}%)</span>
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
              ${h.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':h.map(v=>{const m=Math.round((new Date(v.end_at)-new Date(v.start_at))/864e5),x=new Date(v.end_at)<new Date&&!v.is_active;return`
                    <tr>
                      <td><b>${v.name}</b></td>
                      <td style="font-size:12px">${I(v.start_at)}</td>
                      <td style="font-size:12px">${I(v.end_at)}</td>
                      <td style="font-size:12px">${m} jours</td>
                      <td>${$(v)}</td>
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
    </div>`,(E=document.getElementById("create-season-btn"))==null||E.addEventListener("click",()=>{Ve(null,{toast:n,openModal:o,closeModal:s,reload:()=>Y(e,t)})}),e.querySelectorAll("[data-edit]").forEach(v=>{const m=h.find(x=>x.id==v.dataset.edit);v.addEventListener("click",()=>{Ve(m,{toast:n,openModal:o,closeModal:s,reload:()=>Y(e,t)})})}),e.querySelectorAll("[data-activate]").forEach(v=>{v.addEventListener("click",async()=>{const m=parseInt(v.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:x}=await _.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(x){n(x.message,"error");return}const{error:w}=await _.from("ranked_seasons").update({is_active:!0}).eq("id",m);if(w){n(w.message,"error");return}await _.from("users").update({current_season_id:m}).gt("placement_matches",0),n("Saison activée ✅","success"),Y(e,t)})}),e.querySelectorAll("[data-deactivate]").forEach(v=>{v.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:m}=await _.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(v.dataset.deactivate));if(m){n(m.message,"error");return}n("Saison désactivée","success"),Y(e,t)})}),e.querySelectorAll("[data-delete]").forEach(v=>{v.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:m}=await _.from("ranked_seasons").delete().eq("id",parseInt(v.dataset.delete));if(m){n(m.message,"error");return}n("Saison supprimée","success"),Y(e,t)})})}function Ve(e,{toast:t,openModal:n,closeModal:o,reload:s}){const r=!!e,g=new Date().toISOString().slice(0,16),b=new Date(Date.now()+90*864e5).toISOString().slice(0,16),h=e?new Date(e.start_at).toISOString().slice(0,16):g,i=e?new Date(e.end_at).toISOString().slice(0,16):b,c=(e==null?void 0:e.name)||"";n(r?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group">
        <label>Nom de la saison *</label>
        <input id="season-name" type="text" value="${c}" placeholder="ex: Saison 2 — Été 2026" style="width:100%">
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
      <button class="btn btn-primary" id="season-save-btn">${r?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function a(){var p,y;const l=(p=document.getElementById("season-start"))==null?void 0:p.value,u=(y=document.getElementById("season-end"))==null?void 0:y.value,d=document.getElementById("season-duration");if(!l||!u||!d)return;const f=Math.round((new Date(u)-new Date(l))/864e5);d.textContent=f>0?`Durée : ${f} jour${f>1?"s":""}`:"⚠️ La fin doit être après le début",d.style.color=f>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var l,u,d;(l=document.getElementById("season-start"))==null||l.addEventListener("input",a),(u=document.getElementById("season-end"))==null||u.addEventListener("input",a),a(),(d=document.getElementById("season-save-btn"))==null||d.addEventListener("click",async()=>{var m,x,w;const f=(m=document.getElementById("season-name"))==null?void 0:m.value.trim(),p=(x=document.getElementById("season-start"))==null?void 0:x.value,y=(w=document.getElementById("season-end"))==null?void 0:w.value,I=document.getElementById("season-error");if(!f){I.textContent="Le nom est requis.";return}if(!p){I.textContent="La date de début est requise.";return}if(!y){I.textContent="La date de fin est requise.";return}if(new Date(y)<=new Date(p)){I.textContent="La date de fin doit être après le début.";return}const $=document.getElementById("season-save-btn");$.disabled=!0,$.textContent="Enregistrement…";const E={name:f,start_at:new Date(p).toISOString(),end_at:new Date(y).toISOString()};let v;if(r?{error:v}=await _.from("ranked_seasons").update(E).eq("id",e.id):{error:v}=await _.from("ranked_seasons").insert({...E,is_active:!1}),v){I.textContent=v.message,$.disabled=!1,$.textContent=r?"💾 Enregistrer":"✅ Créer la saison";return}t(r?"Saison modifiée ✅":"Saison créée ✅","success"),o(),s()})},50)}async function xe(e,t){var h;const{toast:n}=t,{data:o,error:s}=await _.from("solo_levels").select("*").order("level_number");if(s){e.innerHTML=`<p style="color:var(--danger)">${s.message}</p>`;return}const r=i=>`
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
            ${(o||[]).map(r).join("")||'<tr><td colspan="8" style="text-align:center;color:#aaa;padding:20px">Aucun niveau défini.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;function g(){document.querySelectorAll("#solo-tbody [data-field]").forEach(i=>{i.addEventListener("change",()=>b(i))})}async function b(i){const c=i.dataset.id,a=i.dataset.field,l=a==="is_active"?i.checked:Number(i.value)||0,{error:u}=await _.from("solo_levels").update({[a]:l}).eq("id",c);if(u){n(u.message,"error");return}i.style.transition="background .3s",i.style.background="#e8f8ee",setTimeout(()=>{i.style.background=""},500)}g(),document.querySelectorAll("[data-del-row]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer ce niveau ? Les joueurs ayant progressé au-delà seront affectés.")&&(await _.from("solo_levels").delete().eq("id",i.dataset.delRow),n("Niveau supprimé","success"),xe(e,t))})}),(h=document.getElementById("solo-add-row"))==null||h.addEventListener("click",async()=>{const c={level_number:Math.max(0,...(o||[]).map(u=>u.level_number))+1,target_note_avg:10,nb_liens_jaune:2,nb_liens_vert:1,nb_joueurs_stade:2,reward_credits:500,is_active:!0},{data:a,error:l}=await _.from("solo_levels").insert(c).select().single();if(l){n(l.message,"error");return}n("Niveau ajouté — modifie les valeurs directement","success"),xe(e,t)})}Rt(Ze);function On(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function Un(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function he(){document.getElementById("modal-overlay").classList.add("hidden")}const Ye={dashboard:{title:"Dashboard",fn:jt},players:{title:"Joueurs & Cartes",fn:Ft},clubs:{title:"Clubs",fn:Qt},"card-builder":{title:"Card Builder",fn:dn},users:{title:"Managers",fn:ut},market:{title:"Mercato",fn:mt},"import-export":{title:"Import / Export CSV",fn:bn},formations:{title:"Formations & Liens",fn:xn},"boosters-config":{title:"Boosters",fn:wn},"sell-price":{title:"Prix vente directe",fn:In},journal:{title:"Actualités",fn:Ln},tutorial:{title:"Tutoriel",fn:Cn},stadiums:{title:"Stades",fn:Rn},"gc-cards":{title:"Game Changers",fn:Nn},"ranked-seasons":{title:"Saisons Ranked",fn:Fn},"solo-mode":{title:"Solo Mode",fn:xe}};async function pe(e){document.querySelectorAll(".admin-sidebar nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===e)});const t=document.getElementById("mobile-page-select");t&&(t.value=e);const n=Ye[e]||Ye.dashboard;document.getElementById("page-title").textContent=n.title;const o=document.getElementById("page-content");o.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(o,{toast:On,openModal:Un,closeModal:he,navigate:pe})}catch(s){o.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${s.message}</div>`,console.error(s)}}async function Gn(){var t;const{data:{session:e}}=await _.auth.getSession();e&&await We(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),o=document.getElementById("auth-password").value,s=document.getElementById("auth-error");if(s.textContent="",!n||!o){s.textContent="Remplissez tous les champs.";return}const{data:r,error:g}=await _.auth.signInWithPassword({email:n,password:o});if(g){s.textContent=g.message;return}await We(r.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await _.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",he),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&he()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",o=>{o.preventDefault(),pe(n.dataset.page)})}),(t=document.getElementById("mobile-page-select"))==null||t.addEventListener("change",n=>{pe(n.target.value)})}async function We(e){const{data:t,error:n}=await _.from("users").select("*").eq("id",e.id).single(),o=document.getElementById("auth-error");if(n||!t){o.textContent="Profil introuvable.";return}if(!t.is_admin){o.textContent="Accès refusé. Vous n'êtes pas administrateur.",await _.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,pe("dashboard")}Gn();
