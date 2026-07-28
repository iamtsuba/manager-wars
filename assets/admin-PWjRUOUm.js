import{s as _,r as Ee,a as _e,A as ht,l as Et,g as _t,K as Me,D as z,b as wt,S as It,c as R,H as $t,R as kt,e as ue,d as Qe,f as Lt,h as At,E as Bt,i as St,N as Tt,M as Ct,B as Mt,j as zt,F as ge,k as ze,m as Rt,n as Xe,o as ye,p as jt}from"./special-cards-yI9ueqAE.js";async function Dt(e){var x;const[{count:t},{count:n},{count:a},{count:d},{count:r},{data:g}]=await Promise.all([_.from("players").select("*",{count:"exact",head:!0}),_.from("clubs").select("*",{count:"exact",head:!0}),_.from("users").select("*",{count:"exact",head:!0}),_.from("stadium_definitions").select("*",{count:"exact",head:!0}),_.from("users").select("*",{count:"exact",head:!0}).gt("last_seen_at",new Date(Date.now()-18e4).toISOString()),_.rpc("get_signup_password")]),v=g||"";e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:24px">

      <!-- Managers -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">👥 Managers</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${a??"–"}</div>
        <div style="display:flex;align-items:center;gap:6px;margin-top:10px;font-size:12px;color:var(--tile-fg-dim)">
          <span style="width:8px;height:8px;border-radius:50%;background:#2ecc71;display:inline-block;box-shadow:0 0 6px #2ecc71"></span>
          ${r??0} joueurs connectés
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
        <input id="signup-pwd-input" type="text" value="${v.replace(/"/g,"&quot;")}" style="flex:1">
        <button id="signup-pwd-save" class="btn btn-primary">💾 Enregistrer</button>
      </div>
      <div id="signup-pwd-status" style="font-size:12px;margin-top:8px;min-height:16px"></div>
    </div>
  `,window.adminNav=i=>{var u;(u=document.querySelector(`[data-page="${i}"]`))==null||u.click()},(x=document.getElementById("signup-pwd-save"))==null||x.addEventListener("click",async()=>{const i=document.getElementById("signup-pwd-input").value.trim(),u=document.getElementById("signup-pwd-status");if(!i){u.textContent="Le code ne peut pas être vide.",u.style.color="#ff6b6b";return}const o=document.getElementById("signup-pwd-save");o.disabled=!0,o.textContent="⏳...";const{error:l}=await _.rpc("set_signup_password",{new_password:i});if(o.disabled=!1,o.textContent="💾 Enregistrer",l){u.textContent=l.message,u.style.color="#ff6b6b";return}u.textContent="✅ Code mis à jour.",u.style.color="#2ecc71"})}const et={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},Pt={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Nt(){const e={};for(const t of ht)e[t]=await Et(t);return e}async function Ft(e,t){const{toast:n}=t;if(!confirm(`Réattribuer une nouvelle photo à tous les joueurs ayant encore l'ancien format de chemin (public/faces/...) ?

Cette action est irréversible.`))return;const a=document.getElementById("fix-old-faces-btn");a&&(a.disabled=!0,a.textContent="⏳ En cours...");try{const{data:d,error:r}=await _.from("players").select("id, country_code, face").like("face","public/faces/%");if(r){n(r.message,"error");return}if(!(d!=null&&d.length)){n("Aucun joueur avec l'ancien format — rien à faire ✅","success");return}const{data:g}=await _.from("players").select("face").not("face","is",null),v=new Set((g||[]).map(u=>u.face).filter(u=>u&&!u.startsWith("public/faces/")));let x=0,i=0;for(const u of d){const o=await _e(u.country_code,v);if(!o){i++;continue}const{error:l}=await _.from("players").update({face:o}).eq("id",u.id);if(l){i++;continue}v.add(o),x++}n(`${x} photo(s) réattribuée(s)${i?`, ${i} échec(s)`:""} ✅`,i?"error":"success")}finally{a&&(a.disabled=!1,a.textContent="🖼️ Réattribuer anciennes photos")}}async function Ot(e,t){await se(e,t)}async function se(e,t,n=null){var i,u,o,l,p;const{toast:a}=t;n||(n={search:((i=document.getElementById("search-players"))==null?void 0:i.value)||"",job:((u=document.getElementById("filter-job"))==null?void 0:u.value)||"",rarity:((o=document.getElementById("filter-rarity"))==null?void 0:o.value)||"",club:((l=document.getElementById("filter-club"))==null?void 0:l.value)||"",country:((p=document.getElementById("filter-country"))==null?void 0:p.value)||""});const[{data:d,error:r},{data:g}]=await Promise.all([_.from("players").select("*, clubs(id,encoded_name,logo_url)"),_.from("clubs").select("id,encoded_name").order("encoded_name")]);if(r){e.innerHTML=`<p style="color:red">${r.message}</p>`;return}const v={GK:0,DEF:1,MIL:2,ATT:3},x=(d||[]).sort((c,y)=>{const m=(v[c.job]??4)-(v[y.job]??4);return m!==0?m:(c.surname_real||"").localeCompare(y.surname_real||"")});Ut(e,x,g||[],t,n)}function Ut(e,t,n,a,d=null){var u,o;const{toast:r}=a;if(e.innerHTML=`
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
          ${Object.entries(et).map(([l,p])=>`<option value="${l}">${p}</option>`).join("")}
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
    </div>`,d){const l=d,p=c=>document.getElementById(c);l.search&&p("search-players")&&(p("search-players").value=l.search),l.job&&p("filter-job")&&(p("filter-job").value=l.job),l.rarity&&p("filter-rarity")&&(p("filter-rarity").value=l.rarity),l.club&&p("filter-club")&&(p("filter-club").value=l.club),l.country&&p("filter-country")&&(p("filter-country").value=l.country)}if(d){const l=d,p=c=>document.getElementById(c);l.search&&p("search-players")&&(p("search-players").value=l.search),l.job&&p("filter-job")&&(p("filter-job").value=l.job),l.rarity&&p("filter-rarity")&&(p("filter-rarity").value=l.rarity),l.club&&p("filter-club")&&(p("filter-club").value=l.club),l.country&&p("filter-country")&&(p("filter-country").value=l.country)}function g(){const l=document.getElementById("search-players").value.toLowerCase(),p=document.getElementById("filter-job").value,c=document.getElementById("filter-rarity").value,y=document.getElementById("filter-club").value,m=document.getElementById("filter-country").value;return t.filter(f=>(!l||`${f.firstname} ${f.surname_real}`.toLowerCase().includes(l))&&(!p||f.job===p)&&(!c||f.rarity===c)&&(!y||f.club_id===y)&&(!m||f.country_code===m))}const v=new Set;function x(){const l=document.getElementById("bulk-bar"),p=document.getElementById("bulk-count");l&&(l.style.display=v.size>0?"flex":"none",p&&(p.textContent=`${v.size} joueur(s) sélectionné(s)`))}function i(){const l=g();document.getElementById("count-label").textContent=`${l.length} joueur(s)`;const p=document.getElementById("players-list");if(!l.length){p.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}p.innerHTML=l.map(c=>{const y={...c,clubs:c.clubs,face:c.face||null},m=Ee(y,{width:120});return`<div style="position:relative;cursor:pointer" data-edit="${c.id}">
        ${m}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${c.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),p.querySelectorAll("[data-edit]").forEach(c=>{c.addEventListener("click",()=>{const y=t.find(m=>m.id===c.dataset.edit);y&&Re(y,n,e,a)})}),p.querySelectorAll(".btn-del-player").forEach(c=>{c.addEventListener("click",async y=>{if(y.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:m}=await _.from("players").delete().eq("id",c.dataset.del);m?r(m.message,"error"):(r("Joueur supprimé ✅","success"),se(e,a))})})}i(),document.getElementById("search-players").addEventListener("input",i),document.getElementById("filter-job").addEventListener("change",i),document.getElementById("filter-rarity").addEventListener("change",i),document.getElementById("filter-club").addEventListener("change",i),document.getElementById("filter-country").addEventListener("change",i),(u=document.getElementById("bulk-cancel-btn"))==null||u.addEventListener("click",()=>{v.clear(),x(),i()}),(o=document.getElementById("bulk-delete-btn"))==null||o.addEventListener("click",async()=>{var y,m,f,I,L;if(!v.size||!confirm(`Supprimer ${v.size} joueur(s) ?`))return;const l=[...v],{error:p}=await _.from("players").delete().in("id",l);if(p){r(p.message,"error");return}r(`${l.length} joueur(s) supprimé(s) ✅`,"success"),v.clear();const c={search:((y=document.getElementById("search-players"))==null?void 0:y.value)||"",job:((m=document.getElementById("filter-job"))==null?void 0:m.value)||"",rarity:((f=document.getElementById("filter-rarity"))==null?void 0:f.value)||"",club:((I=document.getElementById("filter-club"))==null?void 0:I.value)||"",country:((L=document.getElementById("filter-country"))==null?void 0:L.value)||""};se(e,a,c)}),document.getElementById("add-player-btn").addEventListener("click",()=>Re(null,n,e,a)),document.getElementById("fix-old-faces-btn").addEventListener("click",()=>Ft(e,a))}async function Re(e,t,n,a){const{toast:d,openModal:r,closeModal:g}=a,v=!!e,x=await Nt(),{data:i}=await _.from("players").select("face").not("face","is",null),u=new Set((i||[]).map(c=>c.face).filter(Boolean));e!=null&&e.face&&u.delete(e.face);const o='<option value="">— Club —</option>'+t.map(c=>`<option value="${c.id}" ${(e==null?void 0:e.club_id)===c.id?"selected":""}>${c.encoded_name}</option>`).join(""),l=e!=null&&e.face?e.face.split("/")[0]:"",p=Object.keys(x).map(c=>`<option value="${c}" ${l===c?"selected":""}>${c}</option>`).join("");r(v?`✏️ ${e.firstname} ${e.surname_real}`:"➕ Nouveau joueur",`<div style="display:flex;gap:20px;align-items:flex-start">

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
              ${["normal","pepite","papyte","legende"].map(c=>`<option value="${c}" ${(e==null?void 0:e.rarity)===c?"selected":""}>${et[c]}</option>`).join("")}
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
            <select id="pm-club">${o}</select>
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
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([c,y,m])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${Pt[c]};font-weight:700">${c}</label>
                <input id="${y}" type="number" min="0" max="20" value="${(e==null?void 0:e[m])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
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
    </div>`),setTimeout(()=>{var L,h,$;let c=(e==null?void 0:e.face)||null;function y(){var Y,P,Z,Q,X,ee,te,Be,Se,Te,Ce;const b=document.getElementById("card-preview");if(!b)return;const E=((Y=document.getElementById("pm-fn"))==null?void 0:Y.value)||"",s=(((P=document.getElementById("pm-real"))==null?void 0:P.value)||"").toUpperCase(),w=((Z=document.getElementById("pm-job"))==null?void 0:Z.value)||"ATT",k=((Q=document.getElementById("pm-job2"))==null?void 0:Q.value)||null,A=((X=document.getElementById("pm-rarity"))==null?void 0:X.value)||"normal",B=((ee=document.getElementById("pm-country"))==null?void 0:ee.value)||"FR",S=((te=document.getElementById("pm-club"))==null?void 0:te.value)||null,T=document.getElementById("pm-club"),M=T==null?void 0:T.options[T.selectedIndex];(M==null?void 0:M.text)!=="— Club —"&&(M==null||M.text);const O=parseInt((Be=document.getElementById("pm-g"))==null?void 0:Be.value)||0,U=parseInt((Se=document.getElementById("pm-d"))==null?void 0:Se.value)||0,G=parseInt((Te=document.getElementById("pm-m"))==null?void 0:Te.value)||0,N=parseInt((Ce=document.getElementById("pm-a"))==null?void 0:Ce.value)||0,D=t.find(xt=>xt.id===S),ie={firstname:E||"Prénom",surname_real:s||"NOM",job:w,job2:k||null,rarity:A,country_code:B,club_id:S,note_g:O,note_d:U,note_m:G,note_a:N,face:c||null,clubs:D?{encoded_name:D.encoded_name,logo_url:D.logo_url}:null};b.innerHTML=Ee(ie,{width:160});const C=document.getElementById("pm-minmax");C&&(C.style.display=["pepite","papyte"].includes(A)?"grid":"none")}function m(b){const E=document.getElementById("faces-grid"),s=document.getElementById("pm-face");if(!E||!s)return;const w=x[b]||[];if(console.log("[players] loadFacesGrid folder=",b,"files=",w.length,w.slice(0,5)),!w.length){s.innerHTML='<option value="">— Aucun visage disponible —</option>',E.innerHTML=`<p style="font-size:11px;color:#888;font-style:italic">Aucune image dans le dossier "${b}" du bucket Supabase.</p>`;return}const k=w.filter(A=>{const B=b+"/"+A;return B===c||!u.has(B)});s.innerHTML='<option value="">— Choisir un visage —</option>'+k.map(A=>{const B=b+"/"+A;return`<option value="${B}" ${c===B?"selected":""}>${A}</option>`}).join(""),E.innerHTML=k.map(A=>{const B=b+"/"+A,S=c===B,T=_t({face:B});return`<div data-face="${B}" style="cursor:pointer;border:2px solid ${S?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${T}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),E.querySelectorAll("[data-face]").forEach(A=>{A.addEventListener("click",()=>{c=A.dataset.face;const B=document.getElementById("pm-face");B&&(B.value=c),E.querySelectorAll("[data-face]").forEach(S=>{S.style.border=`2px solid ${S.dataset.face===c?"#4fc3f7":"transparent"}`}),y()})})}const f=e!=null&&e.face?e.face.split("/")[0]:"";f&&x[f]&&(document.getElementById("pm-folder").value=f,m(f)),(L=document.getElementById("pm-folder"))==null||L.addEventListener("change",b=>{m(b.target.value)}),(h=document.getElementById("pm-face"))==null||h.addEventListener("change",b=>{c=b.target.value||null,y()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach(b=>{var E,s;(E=document.getElementById(b))==null||E.addEventListener("input",y),(s=document.getElementById(b))==null||s.addEventListener("change",y)}),($=document.getElementById("pm-save"))==null||$.addEventListener("click",()=>Ht(e,v,c,n,a)),y()},50)}function Gt(e){const t=n=>{var a;return(a=document.getElementById(n))==null?void 0:a.value};return{firstname:(t("pm-fn")||"").trim(),surname_real:(t("pm-real")||"").trim()||"JOUEUR",country_code:t("pm-country")||"FR",club_id:t("pm-club")||null,job:t("pm-job")||"ATT",job2:t("pm-job2")||null,rarity:t("pm-rarity")||"normal",note_g:parseInt(t("pm-g"))||0,note_d:parseInt(t("pm-d"))||0,note_m:parseInt(t("pm-m"))||0,note_a:parseInt(t("pm-a"))||0,note_min:parseInt(t("pm-nmin"))||null,note_max:parseInt(t("pm-nmax"))||null,sell_price:parseInt(t("pm-price"))||0,face:e||null,ethnie:t("pm-folder")||null,is_active:!0}}async function Ht(e,t,n,a,d){var p,c,y,m,f;const{toast:r,closeModal:g}=d,v=document.getElementById("pm-error"),x=document.getElementById("pm-save"),i=Gt(n);if(!i.firstname){v.textContent="Le prénom est requis.";return}if(!i.surname_real){v.textContent="Le nom est requis.";return}x.disabled=!0,x.textContent="Enregistrement…";const u=i,{error:o}=t?await _.from("players").update({...u,updated_at:new Date().toISOString()}).eq("id",e.id):await _.from("players").insert(u);if(o){v.textContent=o.message,x.disabled=!1,x.textContent=t?"💾 Enregistrer":"✅ Créer le joueur";return}r(t?"Joueur modifié ✅":"Joueur créé ✅","success"),g();const l={search:((p=document.getElementById("search-players"))==null?void 0:p.value)||"",job:((c=document.getElementById("filter-job"))==null?void 0:c.value)||"",rarity:((y=document.getElementById("filter-rarity"))==null?void 0:y.value)||"",club:((m=document.getElementById("filter-club"))==null?void 0:m.value)||"",country:((f=document.getElementById("filter-country"))==null?void 0:f.value)||""};se(a,d,l)}const qt={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},tt=["rase","court","milong","long"];function Kt(e){const t=Ie(e);if(t==="noir")return"noir";if(t==="typ")return Math.random()<.9?"noir":"marron";if(t==="metisse")return Math.random()<.6?"noir":"marron";const n=Math.random();return n<.35?"blond":n<.75?"marron":"noir"}function Jt(e){return Math.random()<.05?"chauve":Kt(e)}const we=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function Ie(e){return qt[e]||"blanc"}function nt(e){return Jt(e)}function V(e,t){return Math.floor(Math.random()*(t-e+1))+e}function K(e){return e[Math.floor(Math.random()*e.length)]}function it(e){const t=we.filter(n=>n!==e);return K(t)}function be(e){const t=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","GR","RO","BG","UA","RU"],n=["MA","DZ","TN","EG","LY"],a=["NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","TZ","UG","ET"],d=["JP","KR","CN","VN","TH","ID","PH","IN","PK","BD","SA","AE","IR"];return t.includes(e)||["AR","UY","CL","PE","EC","CO","MX","BR"].includes(e)?"Europeans":n.includes(e)?"North Africans":a.includes(e)?"Africans":d.includes(e)?"Asians":"Europeans"}const Vt=[{min:1,max:4,pct:55},{min:5,max:10,pct:20},{min:11,max:14,pct:10},{min:15,max:17,pct:10},{min:18,max:20,pct:5}];function at(){const e=Math.random()*100;let t=0;for(const n of Vt)if(t+=n.pct,e<t)return V(n.min,n.max);return V(1,4)}function Yt(){const e=Array.from({length:20},(t,n)=>n);return e.sort(()=>Math.random()-.5),new Set(e.slice(0,10))}let oe=null;function Wt(e,t){return e&&(oe||(oe=Yt()),oe.has(t))?V(15,20):at()}const de={FR:{first:["Lucas","Tom","Hugo","Théo","Antoine","Kylian","Rayan","Axel","Paul","Enzo","Léo","Mathis","Nathan","Alexis","Ethan","Maxime","Julien","Baptiste","Nicolas","Pierre","Clément","Adrien","Valentin","Dylan","Loïc","Quentin","Florian","Kevin","Corentin","Raphaël"],last:["Martin","Bernard","Petit","Dupont","Moreau","Laurent","Robert","Michel","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard","Bonnet","Rousseau","Fontaine","Chevalier","Blanc","Garnier","Boyer","Gauthier","Garcia","Perrin","Robin","Clément","Morin","Nicolas","Henry","Lemaire","Noël","Dufour","Meunier","Brun","Blanchard","Giraud","Joly","Rivière","Brunet"]},ES:{first:["Carlos","Miguel","Javier","Alejandro","Sergio","David","Diego","Pablo","Álvaro","Marcos","Adrián","Rubén","Iker","Raúl","Fernando","Roberto","Víctor","Iván","Gonzalo","Antonio","Manuel","Jesús","Josué","Rodrigo","Cristian","Héctor","Óscar","Mario","Daniel","Jorge"],last:["García","Rodríguez","Martínez","López","Sánchez","González","Pérez","Hernández","Jiménez","Díaz","Torres","Ramírez","Flores","Rivera","Gómez","Morales","Álvarez","Romero","Herrera","Medina","Aguilar","Vargas","Guzmán","Muñoz","Salazar","Soto","Contreras","Rojas","Ramos","Ortiz"]},PT:{first:["João","Pedro","Diogo","Rúben","Bruno","Tiago","André","Ricardo","Luís","Gonçalo","Nuno","Mário","Fábio","Rui","Miguel","Sérgio","Hugo","Filipe","Paulo","Vítor"],last:["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Carvalho","Gomes","Ribeiro","Araújo","Barbosa","Cardoso","Correia","Teixeira","Machado","Vieira","Monteiro","Cunha","Pinto","Melo","Barros","Freitas","Fonseca","Andrade","Castro","Neves","Figueiredo","Duarte"]},BR:{first:["Gabriel","Lucas","Mateus","Gustavo","Felipe","Rodrigo","Thiago","Rafael","Bruno","Diego","Leonardo","Eduardo","Victor","Pedro","Carlos","Alexandre","André","Paulo","Danilo","Marcelo"],last:["Silva","Santos","Oliveira","Souza","Lima","Ferreira","Costa","Nascimento","Alves","Pereira","Rodrigues","Almeida","Nunes","Melo","Barbosa","Rocha","Brito","Castro","Carvalho","Gomes","Lopes","Ramos","Mendes","Cavalcanti","Batista","Azevedo","Campos","Freitas","Reis","Andrade"]},AR:{first:["Lionel","Sergio","Rodrigo","Nicolás","Ezequiel","Gonzalo","Federico","Mauro","Pablo","Diego","Lucas","Matías","Alejandro","Maximiliano","Emiliano","Marcos","Lautaro","Ángel","Leandro","Julián"],last:["González","Rodríguez","Martínez","García","López","Pérez","Sánchez","Romero","Torres","Flores","Díaz","Gómez","Alvarez","Ruiz","Castro","Herrera","Cabrera","Medina","Ferreyra","Suárez"]},IT:{first:["Marco","Luca","Alessandro","Matteo","Davide","Andrea","Francesco","Federico","Lorenzo","Riccardo","Stefano","Simone","Roberto","Nicola","Giovanni","Antonio","Emanuele","Daniele","Alberto","Giorgio"],last:["Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Ricci","Marino","Greco","Bruno","Gallo","Conti","De Luca","Mancini","Giordano","Rizzo","Lombardi","Moretti","Fontana","Rinaldi"]},DE:{first:["Lukas","Max","Jonas","Florian","Tobias","Stefan","Markus","Sebastian","Niklas","Leon","Tim","Felix","Alexander","Philipp","Christian","Thomas","Michael","Jan","Moritz","Fabian"],last:["Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Wolf","Schröder","Neumann","Schwarz","Zimmermann","Braun","Krüger","Hofmann","Wagner","Becker","Koch","Lehmann","Kaiser"]},GB:{first:["James","Harry","Oliver","Jack","George","Charlie","William","Thomas","Alfie","Edward","Ryan","Liam","Noah","Ethan","Kyle","Jordan","Callum","Aaron","Declan","Connor"],last:["Smith","Jones","Williams","Brown","Taylor","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Walker","Wright","Robinson","White","Thompson","Hughes","Edwards","Green","Hall"]},MA:{first:["Yassine","Karim","Mehdi","Amine","Hamza","Bilal","Soufiane","Rachid","Omar","Mohammed","Zakaria","Ilyas","Ayoub","Saad","Khalid","Adil","Tarik","Hicham","Reda","Nabil"],last:["Benali","Amrani","Bouazza","Cherif","Haddad","Meziane","Belkacem","Rahmani","Saidi","Zidane","Belhadj","Tazi","Idrissi","Alaoui","Bennani","Fassi","Lahlou","Naciri","Tahiri","Zniber"]},DZ:{first:["Yacine","Riyad","Sofiane","Haris","Adem","Islam","Bilal","Omar","Nassim","Mehdi","Ryad","Zinedine","Youssef","Farid","Karim","Mourad","Walid","Anes","Ferhat","Djamel"],last:["Amrouche","Boudiaf","Cherki","Guessab","Hamdi","Jaber","Lakhal","Mahjoub","Rezki","Sahnoun","Talbi","Zerrouki","Achour","Bakri","Chaouch","Djaballah","Ferhat","Gacem","Khaldi","Larbi"]},SN:{first:["Sadio","Ismaïla","Cheikhou","Gana","Famara","Mbaye","Pape","Aliou","Moussa","Sidy","Idrissa","Lamine","Bamba","Fallou","Abdou","Diallo","Mamadou","Souleymane","Oumar","Cheikh"],last:["Diallo","Traoré","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Ndiaye","Sow","Cissé","Fofana","Keita","Sylla","Kane","Diarra","Sanogo","Baldé","Kouyaté"]},CI:{first:["Didier","Wilfried","Serge","Jonathan","Franck","Maxwel","Salomon","Gervinho","Nicolas","Maxime","Ismael","Romaric","Abdul","Cheick","Arouna","Kolo","Yaya","Geoffroy","Siaka","Adama"],last:["Drogba","Zaha","Gnagnon","Koné","Touré","Bamba","Diomandé","Konaté","Coulibaly","Fofana","Traoré","Doumbia","Sanogo","Diabaté","Kalou","Bakayoko","Gradel","Seri","Aurier","Haller"]},CM:{first:["Samuel","Alex","Karl","Fabrice","Cédric","Nicolas","Georges","André","Joël","Roger","François","Jean","Patrick","Thierry","Eric","Benjamin","Aristide","Clinton","Clinton","Stéphane"],last:["Eto'o","Song","Choupo-Moting","Aboubakar","Bassogog","Kunde","Toko","Nkoudou","Ngadeu","Oyongo","Fai","Zambo","Mokoena","Ekambi","Tchamba","Mbida","Biya","Kameni","Meyong","Webo"]},NG:{first:["Kelechi","Ahmed","Victor","John","Emmanuel","Samuel","Moses","Ola","Chukwuemeka","Odion","Sunday","Chidi","Nnamdi","Chisom","Tunde","Emeka","Obinna","Uchenna","Ifeanyi","Segun"],last:["Osimhen","Iheanacho","Musa","Onyekuru","Iwobi","Ndidi","Nwankwo","Obi","Mikel","Martins","Okocha","Yekini","Amunike","Babangida","Fash","Lawal","Onuoha","Taiwo","Ayodele","Ameobi"]},JP:{first:["Ryota","Kenji","Hiroshi","Takumi","Yuto","Daichi","Shinji","Makoto","Koji","Naoki","Yuya","Shoya","Ryo","Shu","Atsuto","Masato","Hotaru","Genki","Ko","Ritsu"],last:["Nakamura","Tanaka","Suzuki","Sato","Yamamoto","Watanabe","Ito","Yamada","Saito","Matsumoto","Inoue","Kimura","Hayashi","Shimizu","Yamazaki","Mori","Abe","Ikeda","Kato","Honda"]},KR:{first:["Heung","Son","Ji","Sung","Jae","Young","Kang","Hyun","Woo","Tae","Seung","Min","Jun","Dong","Chang","Sang","Yo","Hee","Jin","Bum"],last:["Kim","Park","Lee","Choi","Jung","Kang","Cho","Yoon","Lim","Oh","Han","Seo","Kwon","Hwang","Ahn","Yang","Shin","Yoo","Jang","Song"]},MX:{first:["Carlos","Hirving","Andrés","Javier","Miguel","Raúl","Héctor","Diego","Jorge","Luis","Rodolfo","Erick","Jonathan","Néstor","Tecatito","Chicharito","Oswaldo","Oribe","Uriel","Giovanni"],last:["Hernández","Lozano","Guardado","Vela","Morales","Jiménez","Reyes","Corona","Herrera","Rodríguez","Ochoa","Chicharito","Flores","Domínguez","Araujo","Álvarez","Pineda","Sánchez","Antuna","Meza"]},_DEFAULT_EUROPE:{first:["Stefan","Ivan","Luca","Marco","Andrei","Cristian","Bogdan","Mircea","Adrian","Florin","Dušan","Aleksandar","Nikola","Nemanja","Marko","Filip","Milan","Branislav","Radomir","Dejan"],last:["Popescu","Ionescu","Stan","Marin","Stoica","Popa","Radu","Constantin","Barbu","Dobre","Petrović","Marković","Nikolić","Jovanović","Popović","Stanković","Đorđević","Lukić","Simić","Ilić"]},_DEFAULT_AFRIQUE:{first:["Mamadou","Ibrahima","Moussa","Seydou","Boubacar","Oumar","Modibo","Adama","Bakary","Abdoulaye","Lamine","Ousmane","Sekou","Demba","Tidiane","Amadou","Issiaka","Siaka","Fode","Samba"],last:["Diallo","Traoré","Coulibaly","Koné","Doumbia","Kouyaté","Bah","Konaté","Touré","Camara","Sylla","Keita","Diakité","Sangaré","Sanou","Sidibé","Bathily","Niakaté","Dioumassi","Sissoko"]},_DEFAULT_ASIE:{first:["Wei","Ming","Jae","Van","Duc","Sorn","Ali","Hassan","Reza","Arman","Yusuf","Tariq","Faris","Khalid","Saad","Rashid","Nasser","Walid","Ziad","Adel"],last:["Zhang","Wang","Liu","Chen","Yang","Huang","Zhou","Wu","Xu","Sun","Al-Rashidi","Al-Dosari","Al-Harthi","Al-Balushi","Al-Farsi","Al-Shamsi","Al-Neyadi","Al-Breiki","Al-Hammadi","Al-Mansouri"]},_DEFAULT_AMERIQUE:{first:["James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Marcus","Jordan","Andre","Devonte","Malik","Tyrone","Jamal","Darius","DeShawn","Brandon","Cody"],last:["Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Taylor","Anderson","Jackson","White","Harris","Clark","Lewis","Walker","Hall","Allen","Young","King"]}},Zt={FR:"FR",BE:"FR",CH:"FR",MC:"FR",LU:"FR",ES:"ES",MX:"MX",CO:"ES",VE:"ES",PE:"ES",CL:"ES",EC:"ES",UY:"ES",PY:"ES",BO:"ES",CR:"ES",PA:"ES",HN:"ES",GT:"ES",SV:"ES",NI:"ES",DO:"ES",CU:"ES",PT:"PT",AO:"PT",MZ:"PT",CV:"PT",BR:"BR",AR:"AR",IT:"IT",SM:"IT",DE:"DE",AT:"DE",GB:"GB",IE:"GB",AU:"GB",NZ:"GB",CA:"GB",MA:"MA",TN:"DZ",LY:"DZ",DZ:"DZ",SN:"SN",ML:"SN",GN:"SN",GW:"SN",GM:"SN",MR:"SN",CI:"CI",BF:"CI",TG:"CI",BJ:"CI",GH:"CI",CM:"CM",GA:"CM",CG:"CM",CD:"CM",NG:"NG",JP:"JP",KR:"KR",MX:"MX",PL:"_DEFAULT_EUROPE",CZ:"_DEFAULT_EUROPE",SK:"_DEFAULT_EUROPE",HU:"_DEFAULT_EUROPE",HR:"_DEFAULT_EUROPE",RS:"_DEFAULT_EUROPE",SI:"_DEFAULT_EUROPE",RO:"_DEFAULT_EUROPE",BG:"_DEFAULT_EUROPE",GR:"_DEFAULT_EUROPE",TR:"_DEFAULT_EUROPE",RU:"_DEFAULT_EUROPE",UA:"_DEFAULT_EUROPE",NL:"_DEFAULT_EUROPE",DK:"_DEFAULT_EUROPE",SE:"_DEFAULT_EUROPE",NO:"_DEFAULT_EUROPE",FI:"_DEFAULT_EUROPE",AL:"_DEFAULT_EUROPE",EG:"_DEFAULT_AFRIQUE",ZA:"_DEFAULT_AFRIQUE",KE:"_DEFAULT_AFRIQUE",ET:"_DEFAULT_AFRIQUE",TZ:"_DEFAULT_AFRIQUE",UG:"_DEFAULT_AFRIQUE",CN:"_DEFAULT_ASIE",VN:"_DEFAULT_ASIE",TH:"_DEFAULT_ASIE",ID:"_DEFAULT_ASIE",PH:"_DEFAULT_ASIE",IN:"_DEFAULT_ASIE",PK:"_DEFAULT_ASIE",BD:"_DEFAULT_ASIE",IR:"_DEFAULT_ASIE",SA:"_DEFAULT_ASIE",AE:"_DEFAULT_ASIE",QA:"_DEFAULT_ASIE",KW:"_DEFAULT_ASIE",IQ:"_DEFAULT_ASIE",SY:"_DEFAULT_ASIE",JO:"_DEFAULT_ASIE",US:"_DEFAULT_AMERIQUE"};function ot(e){return Zt[e]||"_DEFAULT_EUROPE"}function rt(e){const t=ot(e),n=(de[t]||de._DEFAULT_EUROPE).first;return K(n)}function lt(e){const t=ot(e);return(de[t]||de._DEFAULT_EUROPE).last}function Qt(e,t,n=new Set,a=!1){const d=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],r=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],g=new Set(r.sort(()=>Math.random()-.5).slice(0,4)),v=[...r].sort(()=>Math.random()-.5),x=new Set(v.slice(0,2)),i=new Set(v.slice(2,4)),u=10,o=d.map((c,y)=>y<u);for(let c=o.length-1;c>0;c--){const y=Math.floor(Math.random()*(c+1));[o[c],o[y]]=[o[y],o[c]]}const l=new Set;function p(c){const y=lt(c),m=y.filter(h=>!l.has(h)&&!n.has(h)),f=m.length?m:y.filter(h=>!l.has(h)),I=f.length?f:y,L=K(I);return l.add(L),L}return d.map((c,y)=>{const m=o[y]?t:it(t),f=Ie(m),I=nt(m),L=K(tt),h=x.has(y)?"pepite":i.has(y)?"papyte":"normal",$=h==="pepite"?V(10,15):h==="papyte"?V(15,20):Wt(a,y),b=g.has(y),E=b?Math.max(0,$-2):0;let s=0,w=0,k=0,A=0,B=null;c==="GK"?s=$:c==="DEF"?(w=$,b&&(k=E,B="MIL")):c==="ATT"?(A=$,b&&(k=E,B="MIL")):(k=$,b&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(w=E,B="DEF"):(A=E,B="ATT")));const S=p(m);return{job:c,job2:B,firstname:rt(m),surname_real:S,country_code:m,club_id:e,note_g:s,note_d:w,note_m:k,note_a:A,skin:f,hair:I,hair_length:L,rarity:h,sell_price:0,ethnie:be(m),_ethnie:be(m)}})}async function st(e,t,n,a=!1){oe=null;const{data:d}=await _.from("players").select("surname_real").not("surname_real","is",null),r=new Set((d||[]).map(c=>c.surname_real).filter(Boolean)),g=Qt(e,t,r,a),{data:v}=await _.from("players").select("face").not("face","is",null),x=new Set((v||[]).map(c=>c.face).filter(Boolean)),i=new Set;for(const c of g){const y=await _e(c.country_code,new Set([...x,...i]));y&&(c.face=y,i.add(y)),delete c._ethnie}const{data:u,error:o}=await _.from("players").insert(g).select("id");if(o){console.error("[GenSquad] Erreur batch insert:",o.message,o.details),n("Erreur: "+o.message,"error");return}const l=(u||[]).map(c=>({card_type:"player",player_id:c.id}));if(l.length){const{error:c}=await _.from("cards").insert(l);c&&console.warn("[GenSquad] Erreur cartes:",c.message)}const p=(u==null?void 0:u.length)||0;console.log("[GenSquad] Créés:",p,"/",g.length),p>0?n(`${p} joueurs générés ✅`,"success"):n("Erreur génération joueurs","error")}function dt(e){return{style:e.kit_style||z.style,color1:e.kit_color1||z.color1,color2:e.kit_color2||z.color2,color3:e.kit_color3||z.color3,shorts:e.kit_shorts||z.shorts,socks:e.kit_socks||z.socks}}let re=[];async function Xt(e,t){await me(e,t)}async function me(e,t){const[{data:n,error:a},{data:d}]=await Promise.all([_.from("clubs").select("*").order("real_name"),_.from("players").select("club_id")]);if(a){e.innerHTML=`<p style="color:red">${a.message}</p>`;return}re=n||[];const r={};(d||[]).forEach(g=>{r[g.club_id]=(r[g.club_id]||0)+1}),en(e,t,r)}function en(e,t,n={}){const{toast:a,openModal:d,closeModal:r}=t;e.innerHTML=`
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
    </div>`,g(re),document.getElementById("search-clubs").addEventListener("input",v=>{const x=v.target.value.toLowerCase();g(re.filter(i=>i.real_name.toLowerCase().includes(x)||i.encoded_name.toLowerCase().includes(x)))}),document.getElementById("add-club-btn").addEventListener("click",()=>je(null,e,t));function g(v){const x=document.getElementById("clubs-list");if(!v.length){x.innerHTML='<p style="color:var(--tile-fg-dim);padding:20px;text-align:center">Aucun club.</p>';return}const i={};v.forEach(l=>{const p=l.country_code||"—";i[p]||(i[p]=[]),i[p].push(l)});const u=Object.keys(i).sort(),o=l=>{const p=dt(l),c=l.logo_url?`<img src="${l.logo_url}" style="width:36px;height:36px;object-fit:contain;border-radius:8px;flex-shrink:0">`:`<div style="width:36px;height:36px;background:linear-gradient(135deg,${p.color1},${p.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:900;flex-shrink:0">${l.encoded_name.slice(0,3)}</div>`,y=n[l.id]||0;return`
        <div class="club-row" data-club-id="${l.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:10px;cursor:pointer;background:var(--tile-bg);border:1px solid var(--tile-border);transition:background .15s">
          ${c}
          <img src="https://flagsapi.com/${l.country_code}/flat/24.png" style="width:18px;height:13px;object-fit:cover;border-radius:2px;flex-shrink:0" onerror="this.style.display='none'">
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:12px;color:var(--tile-fg-on-page);font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l.encoded_name}</div>
            <div style="font-size:10px;color:${y===0?"#e67e22":"var(--tile-fg-dim)"}">${y===0?"⚠️ 0 joueur":`👥 ${y}`}</div>
          </div>
          <button class="btn-del-club" data-del="${l.id}"
            style="width:22px;height:22px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;flex-shrink:0"
            onclick="event.stopPropagation()">✕</button>
        </div>`};x.innerHTML=u.map(l=>`
      <div style="display:flex;align-items:center;gap:8px;padding:8px 4px 4px;margin-top:6px">
        ${l!=="—"?`<img src="https://flagsapi.com/${l}/flat/24.png" style="width:20px;height:15px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">`:'<span style="font-size:14px">🌍</span>'}
        <span style="font-size:11px;font-weight:900;color:var(--tile-fg-dim);letter-spacing:1px">${l}</span>
        <span style="font-size:11px;color:var(--tile-fg-dim);background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:10px;padding:1px 8px">${i[l].length}</span>
        <div style="flex:1;height:1px;background:var(--tile-border)"></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:4px">
        ${i[l].map(o).join("")}
      </div>
    `).join(""),x.querySelectorAll(".club-row").forEach(l=>{l.addEventListener("click",()=>{const p=re.find(c=>c.id===l.dataset.clubId);p&&je(p,e,t),x.querySelectorAll(".club-row").forEach(c=>c.style.background="var(--tile-bg)"),l.style.background="rgba(26,107,60,0.18)"})}),x.querySelectorAll(".btn-del-club").forEach(l=>{l.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:p}=await _.from("clubs").delete().eq("id",l.dataset.del);p?a(p.message,"error"):(a("Club supprimé","success"),me(e,t))})})}}async function je(e,t,n){var m,f,I,L,h,$;const{toast:a}=n,d=!!e,r=e?dt(e):{...z},g=document.getElementById("club-panel");if(!g)return;const v=Object.entries(Me).map(([b,E])=>`<option value="${b}" ${r.style===b?"selected":""}>${E.label}</option>`).join(""),x=we.map(b=>`<option value="${b}" ${((e==null?void 0:e.country_code)||"FR")===b?"selected":""}>${b}</option>`).join("");g.style.display="block",g.style.alignItems="",g.style.justifyContent="",g.innerHTML=`
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
            ${x}
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
              <select id="m-kit-style" style="width:100%">${v}</select>
            </div>
            ${[["Couleur 1","m-kit-color1",r.color1,!1],["Couleur 2","m-kit-color2",r.color2,!1],["Couleur 3","m-kit-color3",r.color3,!0],["Short","m-kit-shorts",r.shorts,!1],["Chaussettes","m-kit-socks",r.socks,!1]].map(([b,E,s,w])=>`
              <div class="form-group" id="wrap-${E}" ${w?'style="display:none"':""}>
                <label>${b}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${E}" value="${s||"#000000"}" style="width:38px;height:32px;padding:2px;border:1px solid var(--tile-border);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${E}-txt" value="${s||"#000000"}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
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
  `,(m=document.getElementById("m-logo-file"))==null||m.addEventListener("change",b=>{var w;const E=(w=b.target.files)==null?void 0:w[0];if(!E)return;const s=new FileReader;s.onload=()=>{document.getElementById("logo-preview").innerHTML=`<img src="${s.result}" style="width:100%;height:100%;object-fit:contain">`},s.readAsDataURL(E)}),ne();function i(){var w,k;const b=((w=document.getElementById("m-kit-style"))==null?void 0:w.value)||"uni",E=((k=Me[b])==null?void 0:k.colors)===3,s=document.getElementById("wrap-m-kit-color3");s&&(s.style.display=E?"":"none")}i(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(b=>{const E=document.getElementById(b),s=document.getElementById(b+"-txt");!E||!s||(E.addEventListener("input",()=>{s.value=E.value,ne()}),s.addEventListener("input",()=>{const w=s.value.trim();/^#[0-9a-fA-F]{6}$/.test(w)&&(E.value=w,ne())}),s.addEventListener("change",()=>{let w=s.value.trim();w.startsWith("#")||(w="#"+w),/^#[0-9a-fA-F]{6}$/.test(w)&&(E.value=w,s.value=w,ne())}))}),(f=document.getElementById("m-kit-style"))==null||f.addEventListener("change",()=>{i(),ne()});const u=document.getElementById("m-real"),o=document.getElementById("m-encoded");function l(){if(!u||!o||o.value)return;const b=u.value.trim().split(/\s+/),E=b.length===1?b[0].toUpperCase().slice(0,6):b.filter(s=>s.length>2).map(s=>s[0].toUpperCase()).join("")||b[0].toUpperCase().slice(0,4);o.value=E}u==null||u.addEventListener("input",l),(I=document.getElementById("auto-encode-btn"))==null||I.addEventListener("click",()=>{o&&(o.value=""),l()}),(L=document.getElementById("m-save"))==null||L.addEventListener("click",()=>ln(e,d,t,n));const p=document.getElementById("m-gen-squad"),c=document.getElementById("m-gen-strong-label");function y(){if(c&&(c.style.display=p!=null&&p.checked?"flex":"none",!(p!=null&&p.checked))){const b=document.getElementById("m-gen-strong");b&&(b.checked=!1)}}p==null||p.addEventListener("change",y),y(),(h=document.getElementById("btn-gen-squad-panel"))==null||h.addEventListener("click",()=>{tn(e,n,t)}),($=document.getElementById("btn-gen-one-player"))==null||$.addEventListener("click",()=>{an(e,n)}),d&&$e(e.id)}async function $e(e){const{data:t}=await _.from("players").select("*, clubs(encoded_name, logo_url, kit_style, kit_color1, kit_color2, kit_color3, kit_shorts, kit_socks)").eq("club_id",e).order("surname_real"),n=document.getElementById("club-players-grid"),a=document.getElementById("club-players-count");if(a&&(a.textContent=(t||[]).length),!!n){if(!(t!=null&&t.length)){n.innerHTML='<div style="color:var(--tile-fg-dim);padding:20px;font-size:13px">Aucun joueur dans ce club.</div>';return}n.innerHTML=t.map(d=>Ee(d,{width:100})).join("")}}function tn(e,t,n){const{openModal:a,closeModal:d,toast:r}=t;a(`⚽ Générer — ${e.real_name}`,`<div style="display:flex;flex-direction:column;gap:14px">
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
    </div>`),setTimeout(()=>{var g,v;(g=document.getElementById("qg-cancel"))==null||g.addEventListener("click",()=>d()),(v=document.getElementById("qg-ok"))==null||v.addEventListener("click",async()=>{var i;const x=((i=document.getElementById("qg-strong"))==null?void 0:i.checked)??!1;d(),r("Génération en cours…","info"),await st(e.id,e.country_code,r,x),r("Effectif généré ✅","success"),$e(e.id),me(n,t)})},50)}const ct=["GK","DEF","MIL","ATT"],nn=[{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}];function an(e,t){const{openModal:n,closeModal:a,toast:d}=t,r=we.map(i=>`<option value="${i}">${i}</option>`).join(""),g=i=>ct.map(u=>`<option value="${u}" ${u===i?"selected":""}>${u}</option>`).join(""),v=`
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
              ${nn.map(i=>`<option value="${i.value}">${i.label}</option>`).join("")}
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
  `;n(`➕ Générer un joueur — ${e.real_name}`,v,`
    <button id="gen-one-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gen-one-ok" class="btn btn-primary">➕ Générer</button>
  `),setTimeout(()=>{var i,u;document.querySelectorAll('input[name="gen-one-mode"]').forEach(o=>{o.addEventListener("change",()=>{document.getElementById("gen-one-custom-fields").style.display=o.value==="custom"&&o.checked?"flex":"none"})}),(i=document.getElementById("gen-one-cancel"))==null||i.addEventListener("click",()=>a()),(u=document.getElementById("gen-one-ok"))==null||u.addEventListener("click",async()=>{var c,y,m,f,I;const o=((c=document.querySelector('input[name="gen-one-mode"]:checked'))==null?void 0:c.value)||"random",l=document.getElementById("gen-one-ok");l.disabled=!0,l.textContent="⏳ Génération…";const p={};o==="custom"&&(p.job=((y=document.getElementById("gen-one-job1"))==null?void 0:y.value)||null,p.job2=((m=document.getElementById("gen-one-job2"))==null?void 0:m.value)||null,p.rarity=((f=document.getElementById("gen-one-rarity"))==null?void 0:f.value)||null,p.country=((I=document.getElementById("gen-one-country"))==null?void 0:I.value)||null);try{await on(e,p),d("Joueur généré ✅","success"),a(),$e(e.id)}catch(L){d("Erreur : "+L.message,"error"),l.disabled=!1,l.textContent="➕ Générer"}})},50)}async function on(e,t={}){const n=t.country||(Math.random()<.5?e.country_code:it(e.country_code)),a=t.job||K(ct),d=t.job2||null,r=t.rarity||(()=>{const A=Math.random()*100;return A<1.5?"legende":A<3?"pepite":A<4.5?"papyte":"normal"})(),g=r==="pepite"?V(10,15):r==="papyte"?V(15,20):at(),v=d?Math.max(0,g-2):0;let x=0,i=0,u=0,o=0;a==="GK"&&(x=g),a==="DEF"&&(i=g),a==="MIL"&&(u=g),a==="ATT"&&(o=g),d==="GK"&&(x=v),d==="DEF"&&(i=v),d==="MIL"&&(u=v),d==="ATT"&&(o=v);const l=Ie(n),p=nt(n),c=K(tt),{data:y}=await _.from("players").select("surname_real").not("surname_real","is",null),m=new Set((y||[]).map(A=>A.surname_real).filter(Boolean)),f=lt(n),I=f.filter(A=>!m.has(A)),L=K(I.length?I:f),h={job:a,job2:d,firstname:rt(n),surname_real:L,country_code:n,club_id:e.id,note_g:x,note_d:i,note_m:u,note_a:o,skin:l,hair:p,hair_length:c,rarity:r,sell_price:0,ethnie:be(n)},{data:$}=await _.from("players").select("face").not("face","is",null),b=new Set(($||[]).map(A=>A.face).filter(Boolean)),E=await _e(n,b);E&&(h.face=E);const{data:s,error:w}=await _.from("players").insert(h).select("id").single();if(w)throw w;const{error:k}=await _.from("cards").insert({card_type:"player",player_id:s.id});k&&console.warn("[GenOnePlayer] Erreur carte:",k.message)}function pt(){var e,t,n,a,d,r;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((t=document.getElementById("m-kit-color1"))==null?void 0:t.value)||"#1A6B3C",color2:((n=document.getElementById("m-kit-color2"))==null?void 0:n.value)||"#ffffff",color3:((a=document.getElementById("m-kit-color3"))==null?void 0:a.value)||"#000000",shorts:((d=document.getElementById("m-kit-shorts"))==null?void 0:d.value)||"#111111",socks:((r=document.getElementById("m-kit-socks"))==null?void 0:r.value)||"#ffffff"}}function ne(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=wt(pt(),"panel"))}async function rn(e,t){const n=(e.name.split(".").pop()||"png").toLowerCase(),a=`clubs/${t||"new"}-${Date.now()}.${n}`,{error:d}=await _.storage.from("assets").upload(a,e,{upsert:!0,cacheControl:"3600"});if(d)throw d;const{data:r}=_.storage.from("assets").getPublicUrl(a);return r.publicUrl}async function ln(e,t,n,a){var L,h,$,b,E,s,w,k,A;const{toast:d}=a,r=document.getElementById("m-error"),g=document.getElementById("m-save"),v=(L=document.getElementById("m-real"))==null?void 0:L.value.trim(),x=(h=document.getElementById("m-encoded"))==null?void 0:h.value.trim().toUpperCase(),i=($=document.getElementById("m-country"))==null?void 0:$.value.trim().toUpperCase(),u=((E=(b=document.getElementById("m-logo-file"))==null?void 0:b.files)==null?void 0:E[0])||null,o=((s=document.getElementById("m-logo-url-current"))==null?void 0:s.value)||null,l=((w=document.getElementById("m-gen-stadium"))==null?void 0:w.checked)??!1,p=((k=document.getElementById("m-gen-squad"))==null?void 0:k.checked)??!1,c=((A=document.getElementById("m-gen-strong"))==null?void 0:A.checked)??!1,y=pt();if(!v){r.textContent="Le nom du club est requis.";return}if(!x){r.textContent="Le nom encodé est requis.";return}if(!i){r.textContent="Le pays est requis.";return}g.disabled=!0,g.textContent="Enregistrement…";let m=o;if(u)try{g.textContent="📤 Envoi du logo…",m=await rn(u,e==null?void 0:e.id)}catch(B){r.textContent="Erreur upload logo : "+B.message,g.disabled=!1,g.textContent=t?"💾 Enregistrer":"✅ Créer le club";return}const f={real_name:v,encoded_name:x,country_code:i,logo_url:m,kit_style:y.style,kit_color1:y.color1,kit_color2:y.color2,kit_color3:y.color3,kit_shorts:y.shorts,kit_socks:y.socks};let I=e==null?void 0:e.id;if(t){const{error:B}=await _.from("clubs").update(f).eq("id",I);if(B){r.textContent=B.message,g.disabled=!1,g.textContent="💾 Enregistrer";return}}else{const{data:B,error:S}=await _.from("clubs").insert(f).select().single();if(S){r.textContent=S.message,g.disabled=!1,g.textContent="✅ Créer le club";return}if(I=B.id,l){g.textContent="🏟️ Création du stade…";const{data:T,error:M}=await _.from("stadium_definitions").insert({name:`Stade de ${v}`,club_id:I,country_code:null}).select().single();M?console.warn("[Stadium] Erreur def stade:",M.message):T&&await _.from("cards").insert({card_type:"stadium",stadium_id:T.id})}p&&(g.textContent="⚽ Génération des joueurs…",await st(I,i,d,c))}d(t?"Club modifié ✅":"Club créé ✅","success"),me(n,a)}const sn=["normal","pepite","papyte","legende"],De=["GK","DEF","MIL","ATT"],dn=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let J={...R},le=[];async function cn(e,{toast:t}){const{data:n}=await _.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");le=n||[],J={...R},e.innerHTML=gn(le),un(e,le,t),F()}function Pe(){var n;const e=((n=document.getElementById("cb-surname-real"))==null?void 0:n.value)||"",t=document.getElementById("cb-surname-enc");t&&(t.value=ue(e))}function pn(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=le.find(a=>String(a.id)===String(e));return t?{style:t.kit_style||z.style,color1:t.kit_color1||z.color1,color2:t.kit_color2||z.color2,shorts:t.kit_shorts||z.shorts,socks:t.kit_socks||z.socks}:{...z}}function F(){var l,p,c,y;const e=m=>{var f;return((f=document.getElementById(m))==null?void 0:f.value)||""},t={firstname:e("cb-firstname"),surname_real:e("cb-surname-enc")||ue(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((p=(l=document.getElementById("cb-club"))==null?void 0:l.selectedOptions[0])==null?void 0:p.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=pn(),a=document.getElementById("cb-club"),d=((y=(c=a==null?void 0:a.selectedOptions[0])==null?void 0:c.dataset)==null?void 0:y.logo)||null,r=Qe(J,n,120),g=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(r)}`,v=Lt(t,{portraitUrl:g,clubLogoUrl:d,showNotes:!0}),x=document.getElementById("card-preview");x&&(x.innerHTML=v);const i=document.getElementById("avatar-preview-wrap");i&&(i.innerHTML=r);const u=e("cb-surname-real"),o=document.getElementById("encode-summary");o&&u&&(o.textContent=`${e("cb-firstname")} ${u} → ${e("cb-firstname")} ${t.surname_real}`)}function ut(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};J={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function un(e,t,n){var d,r,g,v,x;e.querySelectorAll("input,select").forEach(i=>{i.addEventListener("input",F),i.addEventListener("change",F)});const a=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];a.forEach(i=>{var u;(u=document.getElementById(i))==null||u.addEventListener("change",()=>{ut(),F()})}),(d=document.getElementById("cb-surname-real"))==null||d.addEventListener("input",()=>{Pe(),F()}),(r=document.getElementById("btn-encode"))==null||r.addEventListener("click",()=>{Pe(),F()}),(g=document.getElementById("cb-club"))==null||g.addEventListener("change",F),(v=document.getElementById("btn-save-player"))==null||v.addEventListener("click",()=>mn(n)),(x=document.getElementById("btn-reset"))==null||x.addEventListener("click",()=>{e.querySelectorAll("input").forEach(i=>i.value=""),e.querySelectorAll("select").forEach(i=>i.selectedIndex=0),J={...R},a.forEach(i=>{const u=i.replace("av-",""),o=document.getElementById(i);o&&(o.value=R[u]||"")}),F()})}async function mn(e){const t=g=>{var v;return((v=document.getElementById(g))==null?void 0:v.value)||""},n=t("cb-surname-real").trim(),a=t("cb-surname-enc").trim()||ue(n);if(!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}ut();const d={firstname:t("cb-firstname").trim(),surname_real:n,surname_real:a,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:J,skin:J.skin||"blanc",hair:J.hairColor||"marron",hair_length:"court"},{error:r}=await _.from("players").insert(d);if(r){e("Erreur: "+r.message,"error");return}e(`✅ Joueur "${d.firstname} ${d.surname_real}" enregistré !`,"success")}function gn(e){const t=dn.map(([i,u])=>`<option value="${i}">${u} (${i})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(i=>`<option value="${i.id}" data-logo="${i.logo_url||""}">${i.encoded_name}</option>`).join(""),a=De.map(i=>`<option value="${i}">${i}</option>`).join(""),d='<option value="">Aucun</option>'+De.map(i=>`<option value="${i}">${i}</option>`).join(""),r=sn.map(i=>`<option value="${i}">${i.charAt(0).toUpperCase()+i.slice(1)}</option>`).join(""),g=(i,u,o)=>Object.entries(u).map(([l,p])=>`<option value="${l}" ${l===(o||"")?"selected":""}>${p.label}</option>`).join(""),v=Object.keys(It).map(i=>`<option value="${i}" ${i===R.skin?"selected":""}>${i.charAt(0).toUpperCase()+i.slice(1)}</option>`).join(""),x=Object.keys($t).map(i=>`<option value="${i}" ${i===R.hairColor?"selected":""}>${i.charAt(0).toUpperCase()+i.slice(1)}</option>`).join("");return`
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
          <div><label>Rareté</label><select id="cb-rarity">${r}</select></div>
          <div><label>Note min</label><input id="cb-note-min" type="number" min="0" max="10" placeholder="—"></div>
          <div><label>Note max</label><input id="cb-note-max" type="number" min="0" max="10" placeholder="—"></div>
        </div>
        <div style="margin-top:8px;display:flex;gap:8px">
          ${["normal","pepite","papyte","legende"].map(i=>`
            <div style="background:${kt[i]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
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
              <select id="av-skin">${v}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${g("av-hair",At,R.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${x}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${g("av-eyebrows",Bt,R.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${g("av-eyes",St,R.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${g("av-nose",Tt,R.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${g("av-mouth",Ct,R.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${g("av-beard",Mt,R.beard)}</select>
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
  `}async function mt(e,{toast:t}){const[{data:n,error:a},{data:d}]=await Promise.all([_.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").order("created_at",{ascending:!1}),_.from("user_solo_progress").select("user_id, unlocked_level")]);if(a){e.innerHTML=`<p style="color:red">${a.message}</p>`;return}const r={};(d||[]).forEach(x=>{r[x.user_id]=x.unlocked_level});const g=n||[];e.innerHTML=`
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
  `,v(g),document.getElementById("search-users").addEventListener("input",x=>{const i=x.target.value.toLowerCase();v(g.filter(u=>{var o;return u.pseudo.toLowerCase().includes(i)||((o=u.club_name)==null?void 0:o.toLowerCase().includes(i))}))});function v(x){document.getElementById("users-tbody").innerHTML=x.map(i=>{const u=i.mmr??1e3,o=i.mmr_deviation??350,l=i.placement_matches??0,p=zt(u),c=i.ranked_wins??0,y=i.ranked_losses??0,m=i.ranked_draws??0,f=c+y+m,I=f>0?Math.round(c/f*100):null,L=l<10,h=o<80?"#1A6B3C":o<150?"#e67e22":"#bb2020";return`
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
              <span style="font-size:16px">${p.emoji}</span>
              <span style="font-weight:700;color:${p.color}">${p.label}</span>
            </div>
            ${L?`<div style="font-size:10px;color:#e67e22">${l}/10 placement${l<10?` (${10-l} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${c}V ${m}N ${y}D${I!==null?` · ${I}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${u}</div>
            <div style="font-size:10px;color:${h}">RD ±${Math.round(o)}</div>
          </td>
          <td>
            ${i.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td>
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${i.id}" data-is-admin="${i.is_admin}">
              ${i.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll(".btn-edit-credits").forEach(i=>{i.addEventListener("click",async()=>{const u=i.dataset.user,o=Number(i.dataset.current)||0,l=prompt("Nouveau solde de crédits :",o);if(l===null)return;const p=parseInt(l.replace(/\s/g,""),10);if(isNaN(p)||p<0){t("Valeur invalide","error");return}const{data:c,error:y}=await _.rpc("admin_update_user_credits",{p_user_id:u,p_new_credits:p});if(y){t(y.message,"error");return}if(!(c!=null&&c.success)){t((c==null?void 0:c.error)||"Échec de la mise à jour","error");return}t("Crédits mis à jour ✅","success");const m=document.getElementById(`credits-display-${u}`);m&&(m.textContent=`${p.toLocaleString("fr")} cr.`),i.dataset.current=p})}),document.querySelectorAll("[data-toggle-admin]").forEach(i=>{i.addEventListener("click",async()=>{const u=i.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${u?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:o}=await _.from("users").update({is_admin:u}).eq("id",i.dataset.toggleAdmin);o?t(o.message,"error"):(t("Rôle mis à jour ✅","success"),mt(e,{toast:t}))})})}}const fn=[{value:"normal",label:"Normal",color:"#ccc"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function gt(e,t){var x;const{toast:n}=t,{data:a,error:d}=await _.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_real, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(d){e.innerHTML=`<p style="color:var(--danger)">${d.message}</p>`;return}const r=a||[],g=r.filter(i=>i.status==="active").length,v=r.filter(i=>i.status==="sold").length;e.innerHTML=`
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
            ${r.map(i=>{var p,c,y,m;const u=(p=i.card)==null?void 0:p.player,o=u?`${u.firstname} ${u.surname_real}`:((c=i.card)==null?void 0:c.card_type)||"—",l={active:"#1A6B3C",sold:"#D4A017",cancelled:"#888"};return`<tr>
                <td><b>${o}</b>${u?`<div style="font-size:10px;color:var(--tile-fg-dim)">${u.rarity} · ${u.job}</div>`:""}</td>
                <td style="font-size:12px">${((y=i.seller)==null?void 0:y.pseudo)||"—"}</td>
                <td style="font-size:12px">${((m=i.buyer)==null?void 0:m.pseudo)||"—"}</td>
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
  `,document.querySelectorAll("[data-cancel]").forEach(i=>{i.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:u}=await _.from("market_listings").update({status:"cancelled"}).eq("id",i.dataset.cancel);u?n(u.message,"error"):(n("Annonce annulée","success"),gt(e,t))})}),(x=document.getElementById("btn-price-grid"))==null||x.addEventListener("click",()=>yn(t))}async function yn(e){await ve(e)}function bn(){const e=document.getElementById("modal-overlay");if(!e||e._pgBlocker)return;const t=n=>{n.target===n.currentTarget&&n.stopImmediatePropagation()};e.addEventListener("click",t,!0),e._pgBlocker=t}function fe(){const e=document.getElementById("modal-overlay");e!=null&&e._pgBlocker&&(e.removeEventListener("click",e._pgBlocker,!0),delete e._pgBlocker)}async function ve(e){var p,c;const{openModal:t,closeModal:n,toast:a}=e,{data:d,error:r}=await _.from("sell_price_configs").select("*").order("rarity").order("note_min");if(r){a(r.message,"error");return}const g=y=>fn.map(m=>`<option value="${m.value}" ${m.value===y?"selected":""}>${m.label}</option>`).join(""),v=y=>`
    <tr data-row="${y.id}">
      <td style="padding:4px 8px">
        <select data-field="rarity" data-id="${y.id}" style="width:100%;padding:6px;font-size:13px">${g(y.rarity)}</select>
      </td>
      <td style="padding:4px 8px">
        <input data-field="note_min" data-id="${y.id}" type="number" min="0" max="999" value="${y.note_min}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="note_max" data-id="${y.id}" type="number" min="0" max="999" value="${y.note_max}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="price_min" data-id="${y.id}" type="number" min="0" value="${y.price_min}" style="width:100%;padding:6px;text-align:right;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="price_max" data-id="${y.id}" type="number" min="0" value="${y.price_max}" style="width:100%;padding:6px;text-align:right;font-size:13px">
      </td>
      <td style="text-align:center;padding:4px 8px">
        <button class="btn btn-danger btn-sm" data-del-row="${y.id}">🗑️</button>
      </td>
    </tr>`,x=`
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
          ${(d||[]).map(v).join("")||'<tr><td colspan="6" style="text-align:center;color:#aaa;padding:20px">Aucune règle définie.</td></tr>'}
        </tbody>
      </table>
    </div>
  `;t("📊 Grille des prix — vente marché",x,`
    <button id="pg-add-row" class="btn btn-primary">+ Ajouter une ligne</button>
    <button id="pg-close" class="btn btn-ghost">Fermer</button>
  `),bn(),(p=document.getElementById("pg-close"))==null||p.addEventListener("click",()=>{fe(),n()});function u(y){const m=y.dataset.id,f=y.dataset.field,I=f==="rarity"?y.value:Number(y.value)||0;return o(m,{[f]:I},y)}async function o(y,m,f){const I=document.querySelector(`tr[data-row="${y}"]`),L=w=>I.querySelector(`[data-field="${w}"]`),h="note_min"in m?m.note_min:Number(L("note_min").value),$="note_max"in m?m.note_max:Number(L("note_max").value),b="price_min"in m?m.price_min:Number(L("price_min").value),E="price_max"in m?m.price_max:Number(L("price_max").value);if(h>$){a("Note min doit être ≤ note max","error");return}if(b>E){a("Prix min doit être ≤ prix max","error");return}const{error:s}=await _.from("sell_price_configs").update(m).eq("id",y);if(s){a(s.message,"error");return}f&&(f.style.transition="background .3s",f.style.background="#e8f8ee",setTimeout(()=>{f.style.background=""},500))}function l(){document.querySelectorAll("#pg-tbody [data-field]").forEach(y=>{y.addEventListener("change",()=>u(y))})}l(),document.querySelectorAll("[data-del-row]").forEach(y=>{y.addEventListener("click",async()=>{confirm("Supprimer cette ligne ?")&&(await _.from("sell_price_configs").delete().eq("id",y.dataset.delRow),a("Ligne supprimée","success"),fe(),ve(e))})}),(c=document.getElementById("pg-add-row"))==null||c.addEventListener("click",async()=>{var L;const y={rarity:"normal",note_min:0,note_max:20,price_min:2500,price_max:15e3},{data:m,error:f}=await _.from("sell_price_configs").insert(y).select().single();if(f){a(f.message,"error");return}const I=document.getElementById("pg-tbody");I.querySelector("td[colspan]")&&(I.innerHTML=""),I.insertAdjacentHTML("beforeend",v(m)),l(),(L=document.querySelector(`[data-del-row="${m.id}"]`))==null||L.addEventListener("click",async function(){confirm("Supprimer cette ligne ?")&&(await _.from("sell_price_configs").delete().eq("id",m.id),a("Ligne supprimée","success"),fe(),ve(e))}),a("Ligne ajoutée — modifie les valeurs directement","success")})}async function vn(e,{toast:t}){e.innerHTML=`
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
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:n,error:a}=await _.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(a){t(a.message,"error");return}if(!n||n.length===0){t("Aucun club à exporter","info");return}let d=`real_name,encoded_name,country_code,logo_url
`;n.forEach(r=>{d+=[r.real_name,r.encoded_name,r.country_code,r.logo_url||""].map(Ne).join(",")+`
`}),ae("clubs_export.csv",d),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:a}=await _.from("players").select("firstname,surname_real,surname_real,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_real");if(a){t(a.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let d=`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(r=>{var g;d+=[r.firstname,r.surname_real,r.surname_real,r.country_code,((g=r.clubs)==null?void 0:g.encoded_name)||"",r.job,r.job2||"",r.note_g,r.note_d,r.note_m,r.note_a,r.rarity,r.note_min??"",r.note_max??"",r.skin,r.hair,r.hair_length,r.sell_price].map(Ne).join(",")+`
`}),ae("players_export.csv",d),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const a=n.target.files[0];if(!a)return;const d=document.getElementById("clubs-import-result");d.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const r=await a.text(),g=Fe(r);if(g.length===0){d.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let v=0,x=0;const i=[];for(const u of g){if(!u.real_name||!u.encoded_name||!u.country_code){x++,i.push(`Ligne ignorée (champs manquants): ${u.real_name||"?"}`);continue}const o={real_name:u.real_name,encoded_name:u.encoded_name.toUpperCase(),country_code:u.country_code.toUpperCase().slice(0,2),logo_url:u.logo_url||null},{error:l}=await _.from("clubs").upsert(o,{onConflict:"encoded_name"});l?(x++,i.push(`${u.encoded_name}: ${l.message}`)):v++}d.innerHTML=`<div style="color:var(--green)">✅ ${v} clubs importés</div>
        ${x>0?`<div style="color:#c0392b">❌ ${x} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${i.slice(0,10).join("<br>")}</div>`:""}`,t(`${v} clubs importés`,"success")}catch(r){d.innerHTML=`<span style="color:#c0392b">Erreur : ${r.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const a=n.target.files[0];if(!a)return;const d=document.getElementById("players-import-result");d.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const r=await a.text(),g=Fe(r);if(g.length===0){d.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:v}=await _.from("clubs").select("id,encoded_name"),x={};(v||[]).forEach(f=>{x[f.encoded_name.toUpperCase()]=f.id});let i=0,u=0;const o=[],l=["GK","DEF","MIL","ATT"],p=["normal","pepite","papyte","legende"],c=["blanc","metisse","typ","noir"],y=["blond","marron","noir","chauve"],m=["rase","court","milong","long"];for(const f of g){if(!f.firstname||!f.surname_real||!f.country_code||!f.job){u++,o.push(`Ligne ignorée (champs requis manquants): ${f.firstname||"?"}`);continue}if(!l.includes(f.job)){u++,o.push(`${f.firstname}: job invalide "${f.job}"`);continue}const I=f.club_encoded_name&&x[f.club_encoded_name.toUpperCase()]||null,L={firstname:f.firstname,surname_real:f.surname_real,surname_real:f.surname_real||ue(f.surname_real),country_code:f.country_code.toUpperCase().slice(0,2),club_id:I,job:f.job,job2:l.includes(f.job2)?f.job2:null,note_g:parseInt(f.note_g)||0,note_d:parseInt(f.note_d)||0,note_m:parseInt(f.note_m)||0,note_a:parseInt(f.note_a)||0,rarity:p.includes(f.rarity)?f.rarity:"normal",note_min:f.note_min!==""&&f.note_min!=null?parseInt(f.note_min):null,note_max:f.note_max!==""&&f.note_max!=null?parseInt(f.note_max):null,skin:c.includes(f.skin)?f.skin:"blanc",hair:y.includes(f.hair)?f.hair:"noir",hair_length:m.includes(f.hair_length)?f.hair_length:"court",sell_price:parseInt(f.sell_price)||0},{error:h}=await _.from("players").insert(L);h?(u++,o.push(`${f.firstname} ${f.surname_real}: ${h.message}`)):i++}d.innerHTML=`<div style="color:var(--green)">✅ ${i} joueurs importés</div>
        ${u>0?`<div style="color:#c0392b">❌ ${u} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${o.slice(0,10).join("<br>")}</div>`:""}`,t(`${i} joueurs importés`,"success")}catch(r){d.innerHTML=`<span style="color:#c0392b">Erreur : ${r.message}</span>`}n.target.value=""})}function Ne(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function ae(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(n),d=document.createElement("a");d.href=a,d.download=e,d.click(),URL.revokeObjectURL(a)}function Fe(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(g=>g.trim());if(t.length<2)return[];const n=t[0],a=n.split(";").length>n.split(",").length?";":",",d=Oe(n,a).map(g=>g.trim().replace(/^\uFEFF/,"").toLowerCase()),r=[];for(let g=1;g<t.length;g++){if(!t[g].trim())continue;const v=Oe(t[g],a),x={};d.forEach((i,u)=>{x[i]=(v[u]||"").trim()}),!Object.values(x).every(i=>!i)&&r.push(x)}return r}function Oe(e,t=","){const n=[];let a="",d=!1;for(let r=0;r<e.length;r++){const g=e[r];d?g==='"'?e[r+1]==='"'?(a+='"',r++):d=!1:a+=g:g==='"'?d=!0:g===t?(n.push(a),a=""):a+=g}return n.push(a),n}const xn={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function hn(e,{toast:t}){const n=Object.keys(ge);let a=n[0];const{data:d}=await _.from("formation_links_overrides").select("formation, links"),r={};(d||[]).forEach(u=>{r[u.formation]=u.links});let g=new Set;function v(u,o){return[u,o].sort().join("-")}function x(u){const o=r[u]||ge[u]||[];g=new Set(o.map(([l,p])=>v(l,p)))}x(a),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${n.map(u=>`<option value="${u}" ${u===a?"selected":""}>${u}</option>`).join("")}
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
  `;function i(){const u=Rt[a]||{},o=ze(a),l=320,p=400,c=22;function y(h){const $=u[h];return $?{x:$.x*l,y:$.y*p}:null}let m=`<svg width="${l}" height="${p}" viewBox="0 0 ${l} ${p}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;o.forEach(([h,$],b)=>{const E=y(h),s=y($);if(!E||!s)return;const w=v(h,$),k=g.has(w),A=k?"#3b82f6":"#999",B=k?.95:.35,S=k?4:3;m+=`<line x1="${E.x}" y1="${E.y}" x2="${s.x}" y2="${s.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${w}" style="cursor:pointer"/>`,m+=`<line x1="${E.x}" y1="${E.y}" x2="${s.x}" y2="${s.y}"
        stroke="${A}" stroke-width="${S}" stroke-dasharray="${k?"none":"4,3"}"
        opacity="${B}" pointer-events="none" data-line-key="${w}"/>`});for(const h of Object.keys(u)){const $=y(h);if(!$)continue;const b=h.replace(/\d+/,""),E=xn[b]||"#555";m+=`<circle cx="${$.x}" cy="${$.y}" r="${c}" fill="${E}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,m+=`<text x="${$.x}" y="${$.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${h}</text>`}m+="</svg>",document.getElementById("field-wrap").innerHTML=m;const f=document.getElementById("links-list");f.innerHTML=o.map(([h,$])=>{const b=v(h,$),E=g.has(b);return`
        <button class="link-toggle" data-key="${b}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${E?"#3b82f6":"#ddd"};
          background:${E?"#eaf2ff":"#fafafa"};
          color:${E?"#1d4ed8":"#888"}">
          <span>${h} ↔ ${$}</span>
          <span>${E?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const I=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');I&&(I.textContent=`Liens (${g.size}/${o.length} actifs)`);function L(h){g.has(h)?g.delete(h):g.add(h),i()}e.querySelectorAll(".link-hit").forEach(h=>{h.addEventListener("click",()=>L(h.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(h=>{h.addEventListener("click",()=>L(h.dataset.key))})}i(),document.getElementById("formation-select").addEventListener("change",u=>{a=u.target.value,x(a),i()}),document.getElementById("reset-btn").addEventListener("click",()=>{const u=ge[a]||[];g=new Set(u.map(([o,l])=>v(o,l))),i(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const o=ze(a).filter(([p,c])=>g.has(v(p,c))),{error:l}=await _.from("formation_links_overrides").upsert({formation:a,links:o,updated_at:new Date().toISOString()});if(l){t(l.message,"error");return}r[a]=o,t(`Liens enregistrés pour ${a} (${o.length} actifs)`,"success")})}const En=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],_n=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],wn=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function In(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await _.from("booster_configs").select("*").order("sort_order");let n=null,a=[],d=null;const r=()=>window.innerWidth<700;async function g(){if(!n){a=[];return}if(n!==d){const{data:o}=await _.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");a=o||[],d=n}}function v(){return`
    <div id="booster-list" style="background:#fff;${r()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(t||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(o=>`
      <div class="booster-row" data-id="${o.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${o.id===n?"#f0f7f0":"#fff"}">
        ${o.image_url?`<img src="/icons/${o.image_url}" style="width:36px;height:36px;object-fit:contain;border-radius:6px;background:#f5f5f5;padding:2px">`:'<div style="width:36px;height:36px;background:#eee;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:20px">📦</div>'}
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o.name}</div>
          <div style="font-size:11px;color:#888">
            ${o.price_type==="credits"?(o.price_credits||0)+" cr.":o.price_type==="pub"?"Pub":"Gratuit"}
            · ${o.card_count||5} cartes · ${o.is_active?"✅":"⛔"}
          </div>
        </div>
        <button class="btn-delete" data-id="${o.id}" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:18px;padding:4px;flex-shrink:0">🗑️</button>
      </div>`).join("")}
      ${(t||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>'}
    </div>`}function x(){const o=n?(t||[]).find(c=>c.id===n):null;if(!o)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const l=a.reduce((c,y)=>c+Number(y.percentage||0),0),p=Math.abs(l-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${r()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <h3 style="margin:0 0 14px;font-size:16px">${o.name}</h3>

      <!-- Infos de base -->
      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="f-name" value="${o.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="f-image-url" value="${o.image_url||""}" placeholder="ex: booster-players.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          ${o.image_url?`<img src="/icons/${o.image_url}" style="height:44px;margin-top:8px;border-radius:6px;object-fit:contain;background:#f0f0f0;padding:4px">`:""}
          <div id="icon-picker-grid" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE DE PRIX</label>
            <select id="f-price-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${wn.map(c=>`<option value="${c.value}" ${o.price_type===c.value?"selected":""}>${c.label}</option>`).join("")}
            </select>
          </div>
          <div id="credits-field">
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">CRÉDITS</label>
            <input id="f-price-credits" type="number" min="0" value="${o.price_credits||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NB CARTES</label>
            <input id="f-card-count" type="number" min="1" max="10" value="${o.card_count||5}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="f-sort" type="number" value="${o.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:flex;align-items:center;gap:10px">
          <input type="checkbox" id="f-active" ${o.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
          <label for="f-active" style="font-size:13px;cursor:pointer;font-weight:600">Booster actif (visible dans la boutique)</label>
        </div>
        <div style="display:flex;align-items:center;gap:10px;margin-top:10px">
          <input type="checkbox" id="f-allow-dup" ${o.allow_duplicates!==!1?"checked":""} style="width:18px;height:18px;cursor:pointer">
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
              <input id="f-max-per-user" type="number" min="1" value="${o.max_per_user||""}" placeholder="ex: 1"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible à partir du</label>
              <input id="f-available-from" type="date" value="${o.available_from||""}"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible jusqu'au</label>
              <input id="f-available-until" type="date" value="${o.available_until||""}"
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
              Total : ${l.toFixed(1)}% ${p?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${a.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':a.map((c,y)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${y}">
            <select class="rate-type" data-idx="${y}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${En.map(m=>`<option value="${m.value}" ${c.card_type===m.value?"selected":""}>${m.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${y}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${_n.map(m=>`<option value="${m.value}" ${(c.rarity||"")===m.value?"selected":""}>${m.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${y}" type="number" min="0" max="20" value="${c.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${y}" type="number" min="0" max="20" value="${c.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${y}" type="number" min="0.1" max="100" step="0.1" value="${c.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${y}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function i(o=!1){o||await g();const l=!n&&r(),p=n&&r();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!r()||l||!n?v():""}
      ${!r()||p?x():""}
    </div>`,u()}function u(){var p,c,y,m,f,I,L;const o=h=>e.querySelector(h);e.querySelectorAll(".booster-row").forEach(h=>{h.addEventListener("click",$=>{$.target.closest(".btn-delete")||(n=h.dataset.id,d=null,i())})}),(p=o("#btn-back"))==null||p.addEventListener("click",()=>{n=null,i()}),(c=o("#btn-new"))==null||c.addEventListener("click",async()=>{const h=prompt("Nom du nouveau booster :");if(!(h!=null&&h.trim()))return;const{data:$,error:b}=await _.from("booster_configs").insert({name:h.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(b){alert(b.message);return}t.push($),n=$.id,d=null,i()}),e.querySelectorAll(".btn-delete").forEach(h=>{h.addEventListener("click",async $=>{if($.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await _.from("booster_configs").delete().eq("id",h.dataset.id);const b=t.findIndex(E=>E.id===h.dataset.id);b>-1&&t.splice(b,1),n===h.dataset.id&&(n=null,d=null),i()})}),(y=o("#btn-cancel"))==null||y.addEventListener("click",()=>{n=null,i()}),(m=o("#f-price-type"))==null||m.addEventListener("change",h=>{const $=o("#credits-field");$&&($.style.opacity=h.target.value!=="credits"?"0.4":"1")}),(f=o("#btn-pick-icon"))==null||f.addEventListener("click",async()=>{var $;const h=o("#icon-picker-grid");if(h){if(h.style.display!=="none"){h.style.display="none";return}h.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',h.style.display="block";try{const E=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),s=Array.isArray(E)?E.filter(k=>k.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(k.name)):[];if(!s.length){h.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const w=(($=o("#f-image-url"))==null?void 0:$.value)||"";h.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${s.map(k=>`
          <div class="icon-pick-item" data-name="${k.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${k.name===w?"#1A6B3C":"#ddd"};background:${k.name===w?"#f0f7f0":"#fff"}">
            <img src="/icons/${k.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${k.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,h.querySelectorAll(".icon-pick-item").forEach(k=>{k.addEventListener("click",()=>{const A=o("#f-image-url");A&&(A.value=k.dataset.name),h.style.display="none"})})}catch(b){h.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${b.message}</div>`}}});function l(){e.querySelectorAll("[data-rate-idx]").forEach(h=>{var b,E,s,w,k;const $=Number(h.dataset.rateIdx);$>=0&&$<a.length&&(a[$].card_type=((b=h.querySelector(".rate-type"))==null?void 0:b.value)||"player",a[$].rarity=((E=h.querySelector(".rate-rarity"))==null?void 0:E.value)||null,a[$].note_min=Number((s=h.querySelector(".rate-note-min"))==null?void 0:s.value)||null,a[$].note_max=Number((w=h.querySelector(".rate-note-max"))==null?void 0:w.value)||null,a[$].percentage=Number((k=h.querySelector(".rate-pct"))==null?void 0:k.value)||0)})}(I=o("#btn-add-rate"))==null||I.addEventListener("click",()=>{l(),a.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:a.length}),i(!0)}),e.querySelectorAll(".btn-del-rate").forEach(h=>{h.addEventListener("click",()=>{l(),a.splice(Number(h.dataset.idx),1),i(!0)})}),(L=o("#btn-save"))==null||L.addEventListener("click",async()=>{var w,k,A,B,S,T,M,O,U,G,N,D,ie;const h=(t||[]).find(C=>C.id===n);if(!h)return;const $=[];e.querySelectorAll("[data-rate-idx]").forEach(C=>{var Z,Q,X,ee,te;const Y=Number(C.dataset.rateIdx);$.push({booster_id:n,card_type:((Z=C.querySelector(".rate-type"))==null?void 0:Z.value)||"player",rarity:((Q=C.querySelector(".rate-rarity"))==null?void 0:Q.value)||null,note_min:Number((X=C.querySelector(".rate-note-min"))==null?void 0:X.value)||null,note_max:Number((ee=C.querySelector(".rate-note-max"))==null?void 0:ee.value)||null,percentage:Number((te=C.querySelector(".rate-pct"))==null?void 0:te.value)||0,sort_order:Y});const P=$[$.length-1];P.rarity||(P.rarity=null),P.note_min||(P.note_min=null),P.note_max||(P.note_max=null)});const b=$.reduce((C,Y)=>C+Y.percentage,0);if($.length&&Math.abs(b-100)>.5){alert(`La somme doit faire 100% (actuellement ${b.toFixed(1)}%)`);return}const E={name:((k=(w=o("#f-name"))==null?void 0:w.value)==null?void 0:k.trim())||h.name,image_url:((B=(A=o("#f-image-url"))==null?void 0:A.value)==null?void 0:B.trim())||null,price_type:(S=o("#f-price-type"))==null?void 0:S.value,price_credits:Number((T=o("#f-price-credits"))==null?void 0:T.value)||0,card_count:Number((M=o("#f-card-count"))==null?void 0:M.value)||5,is_active:((O=o("#f-active"))==null?void 0:O.checked)??h.is_active,allow_duplicates:((U=o("#f-allow-dup"))==null?void 0:U.checked)??!0,sort_order:Number((G=o("#f-sort"))==null?void 0:G.value)||0,max_per_user:(N=o("#f-max-per-user"))!=null&&N.value?Number(o("#f-max-per-user").value):null,available_from:((D=o("#f-available-from"))==null?void 0:D.value)||null,available_until:((ie=o("#f-available-until"))==null?void 0:ie.value)||null},{error:s}=await _.from("booster_configs").update(E).eq("id",n);if(s){alert(s.message);return}if(Object.assign(h,E),await _.from("booster_drop_rates").delete().eq("booster_id",n),$.length){const{error:C}=await _.from("booster_drop_rates").insert($);if(C){alert(C.message);return}}a=$,d=n,alert("✅ Booster enregistré !"),i(!0)})}i()}const ft=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function $n(e){await ke(e)}async function ke(e){const{data:t,error:n}=await _.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
          ${(t||[]).map(a=>kn(a)).join("")}
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
              ${ft.map(a=>`<option value="${a.value}">${a.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>Ue(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Ln(e)),e.querySelectorAll("[data-edit]").forEach(a=>{const d=(t||[]).find(r=>r.id===a.dataset.edit);d&&a.addEventListener("click",()=>Ue(d))}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await _.from("sell_price_configs").delete().eq("id",a.dataset.delete),await ke(e))})})}function kn(e){const t=ft.find(n=>n.value===e.rarity);return`
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
    </tr>`}function Ue(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function Ln(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,a=parseInt(document.getElementById("form-price").value)||0,d=parseInt(document.getElementById("form-note-min").value)||1,r=parseInt(document.getElementById("form-note-max").value)||10;if(d>r){alert("Note min doit être ≤ note max");return}const g={rarity:n,price:a,note_min:d,note_max:r,updated_at:new Date().toISOString()};let v;if(t?{error:v}=await _.from("sell_price_configs").update(g).eq("id",t):{error:v}=await _.from("sell_price_configs").insert(g),v){alert("Erreur : "+v.message);return}document.getElementById("config-form").style.display="none",await ke(e)}async function An(e){await Le(e)}async function Le(e){const{data:t}=await _.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>Ge(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Tn(e)),e.querySelectorAll("[data-edit-row]").forEach(n=>{const a=(t||[]).find(d=>d.id===n.dataset.editRow);a&&n.addEventListener("click",()=>Ge(a))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await _.from("patch_notes").delete().eq("id",n.dataset.delete),await Le(e))})})}function Bn(e){const t=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function Ge(e){const t=document.getElementById("article-form");t.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img-current").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-img-file").value="";const n=document.getElementById("form-art-img-preview");n.innerHTML=e!=null&&e.image_url?`<img src="${e.image_url}" style="width:100%;height:100%;object-fit:cover">`:'<span style="font-size:20px;opacity:.4">📰</span>',document.getElementById("form-art-img-file").onchange=r=>{var x;const g=(x=r.target.files)==null?void 0:x[0];if(!g)return;const v=new FileReader;v.onload=()=>{n.innerHTML=`<img src="${v.result}" style="width:100%;height:100%;object-fit:cover">`},v.readAsDataURL(g)},document.getElementById("form-art-pub").checked=e?e.is_published:!0;const a=new Date((e==null?void 0:e.published_at)||Date.now()),d=new Date(a.getTime()-a.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=d,t.scrollIntoView({behavior:"smooth"})}async function Sn(e){const t=(e.name.split(".").pop()||"png").toLowerCase(),n=`journal/${Date.now()}.${t}`,{error:a}=await _.storage.from("assets").upload(n,e,{upsert:!0,cacheControl:"3600"});if(a)throw a;const{data:d}=_.storage.from("assets").getPublicUrl(n);return d.publicUrl}async function Tn(e){var p;const t=document.getElementById("form-id").value,n=document.getElementById("form-art-title").value.trim(),a=document.getElementById("form-art-desc").value.trim(),d=((p=document.getElementById("form-art-img-file").files)==null?void 0:p[0])||null,r=document.getElementById("form-art-img-current").value||null,g=document.getElementById("form-art-pub").checked,v=document.getElementById("form-art-date").value,x=document.getElementById("form-save");if(!n){alert("Le titre est obligatoire.");return}if(!a){alert("La description est obligatoire.");return}let i=r;if(d)try{x&&(x.textContent="📤 Envoi de l'image…"),i=await Sn(d)}catch(c){alert("Erreur upload image : "+c.message),x&&(x.textContent="💾 Enregistrer");return}const u=v?new Date(v).toISOString():new Date().toISOString(),o={title:n,description:a,image_url:i,is_published:g,published_at:u};let l;if(t?{error:l}=await _.from("patch_notes").update(o).eq("id",t):{error:l}=await _.from("patch_notes").insert(o),l){alert("Erreur : "+l.message);return}document.getElementById("article-form").style.display="none",await Le(e)}async function Cn(e){await W(e)}async function W(e){var u,o,l,p,c,y,m,f,I,L,h,$;const{data:t}=await _.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([b,E,s])=>`<button type="button" data-cmd="${E}" title="${s}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${b}</button>`).join("")}
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
            </div>`:(t||[]).map(b=>Mn(b)).join("")}
        </div>
      </div><!-- /colonne droite -->
    </div>`,(u=document.getElementById("ts-add"))==null||u.addEventListener("click",()=>He(null,(t==null?void 0:t.length)||0)),(o=document.getElementById("ts-reset"))==null||o.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:b}=await _.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(b?"Erreur : "+b.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(l=document.getElementById("ts-cancel"))==null||l.addEventListener("click",yt),(p=document.getElementById("ts-save"))==null||p.addEventListener("click",()=>Rn(e)),(c=document.getElementById("ts-preview-btn"))==null||c.addEventListener("click",zn);const n=document.getElementById("ts-editor"),a=()=>{const b=document.getElementById("ts-content");b&&n&&(b.value=n.innerHTML)};n==null||n.addEventListener("input",a),n==null||n.addEventListener("blur",a);const d=()=>{document.activeElement!==n&&(n==null||n.focus())};(y=document.getElementById("ts-toolbar"))==null||y.querySelectorAll("[data-cmd]").forEach(b=>{b.addEventListener("mousedown",E=>{E.preventDefault(),d();const s=b.dataset.cmd;s.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,s.split(":")[1]):document.execCommand(s,!1,null),a()})}),(m=document.getElementById("ts-insert-color"))==null||m.addEventListener("mousedown",b=>{b.preventDefault(),d();const E=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");E&&(document.execCommand("foreColor",!1,E),a())}),(f=document.getElementById("ts-clear-format"))==null||f.addEventListener("mousedown",b=>{b.preventDefault(),d(),document.execCommand("removeFormat",!1,null),a()}),n==null||n.addEventListener("focus",()=>{n&&(n.style.borderColor="#1A6B3C")}),n==null||n.addEventListener("blur",()=>{n&&(n.style.borderColor="#ddd")});const r=document.getElementById("ts-image"),g=document.getElementById("ts-img-preview"),v=document.getElementById("ts-img-preview-el"),x=document.getElementById("ts-img-picker-grid"),i=()=>{var E;const b=(E=r==null?void 0:r.value)==null?void 0:E.trim();if(b){const s="/";v.src=`${s}icons/${b}`,g.style.display="block"}else g.style.display="none"};r==null||r.addEventListener("input",i),(I=document.getElementById("ts-img-clear"))==null||I.addEventListener("click",()=>{r&&(r.value=""),g.style.display="none",x.style.display="none"}),(L=document.getElementById("ts-img-pick"))==null||L.addEventListener("click",async()=>{if(x.style.display!=="none"){x.style.display="none";return}x.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',x.style.display="block";try{const E=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),s=Array.isArray(E)?E.filter(k=>k.name.startsWith("tuto_")):[];if(!s.length){x.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const w="/";x.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+s.map(k=>`
          <div data-pick="${k.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${w}icons/${k.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${k.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",x.querySelectorAll("[data-pick]").forEach(k=>{k.addEventListener("click",()=>{r&&(r.value=k.dataset.pick),i(),x.style.display="none"})})}catch(b){x.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+b.message+"</div>"}}),(h=document.getElementById("ts-color"))==null||h.addEventListener("input",b=>{const E=document.getElementById("ts-color-hex");E&&(E.value=b.target.value)}),($=document.getElementById("ts-color-hex"))==null||$.addEventListener("input",b=>{const E=b.target.value;if(/^#[0-9a-fA-F]{6}$/.test(E)){const s=document.getElementById("ts-color");s&&(s.value=E)}}),e.querySelectorAll("[data-edit-row]").forEach(b=>{const E=(t||[]).find(s=>s.id===b.dataset.editRow);E&&b.addEventListener("click",()=>He(E))}),e.querySelectorAll("[data-delete]").forEach(b=>{b.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await _.from("tutorial_steps").delete().eq("id",b.dataset.delete),W(e))})}),e.querySelectorAll("[data-toggle]").forEach(b=>{b.addEventListener("click",async()=>{const E=(t||[]).find(s=>s.id===b.dataset.toggle);E&&(await _.from("tutorial_steps").update({is_active:!E.is_active}).eq("id",E.id),W(e))})}),e.querySelectorAll("[data-up]").forEach(b=>{b.addEventListener("click",async()=>{const E=t||[],s=E.findIndex(w=>w.id===b.dataset.up);s<=0||(await Promise.all([_.from("tutorial_steps").update({step_order:E[s-1].step_order}).eq("id",E[s].id),_.from("tutorial_steps").update({step_order:E[s].step_order}).eq("id",E[s-1].id)]),W(e))})}),e.querySelectorAll("[data-down]").forEach(b=>{b.addEventListener("click",async()=>{const E=t||[],s=E.findIndex(w=>w.id===b.dataset.down);s<0||s>=E.length-1||(await Promise.all([_.from("tutorial_steps").update({step_order:E[s+1].step_order}).eq("id",E[s].id),_.from("tutorial_steps").update({step_order:E[s].step_order}).eq("id",E[s+1].id)]),W(e))})})}function Mn(e){return`
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
  </div>`}function He(e,t=0){document.getElementById("ts-form-empty").style.display="none",document.getElementById("ts-form-content").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const n=document.getElementById("ts-editor");n&&(n.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??t,document.getElementById("ts-active").checked=e?e.is_active:!0;const a=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=a,document.getElementById("ts-color-hex").value=a;const d=(e==null?void 0:e.image_url)||"",r=document.getElementById("ts-image");r&&(r.value=d);const g=document.getElementById("ts-img-preview"),v=document.getElementById("ts-img-preview-el");if(d&&g&&v){const x="/";v.src=`${x}icons/${d}`,g.style.display="block"}else g&&(g.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function yt(){document.getElementById("ts-form-content").style.display="none",document.getElementById("ts-form-empty").style.display="block",document.getElementById("ts-preview-area").innerHTML=""}function zn(){var i,u;const e=document.getElementById("ts-emoji").value||"⚽",t=document.getElementById("ts-title").value||"Titre",n=document.getElementById("ts-editor"),a=n?n.innerHTML:document.getElementById("ts-content").value||"",d=document.getElementById("ts-color-hex").value||"#1A6B3C",r=(u=(i=document.getElementById("ts-image"))==null?void 0:i.value)==null?void 0:u.trim(),v=r?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${r}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",x=document.getElementById("ts-preview-area");x.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${d}"></div></div>
        <div style="padding:20px 20px 0;text-align:center">
          <div style="font-size:48px;margin-bottom:8px;line-height:1">${e}</div>
          <div style="font-size:17px;font-weight:900;color:#111;margin-bottom:4px">${t}</div>
          <div style="font-size:11px;color:#aaa">6 / 10</div>
        </div>
        ${v}
        <div style="padding:${r?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${a}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${d};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,x.querySelectorAll("ul,ol").forEach(o=>{o.style.paddingLeft="20px",o.style.margin="6px 0"}),x.querySelectorAll("li").forEach(o=>{o.style.marginBottom="4px"}),x.querySelectorAll("p").forEach(o=>{o.style.marginBottom="8px"})}async function Rn(e){var o,l;const t=document.getElementById("ts-id").value,n=document.getElementById("ts-emoji").value.trim()||"⚽",a=document.getElementById("ts-title").value.trim(),d=document.getElementById("ts-editor"),r=(d?d.innerHTML:document.getElementById("ts-content").value).trim(),g=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",v=parseInt(document.getElementById("ts-order").value)||0,x=document.getElementById("ts-active").checked;if(!a||!r){alert("Titre et contenu sont obligatoires.");return}const i={emoji:n,title:a,content:r,color:g,step_order:v,is_active:x,image_url:((l=(o=document.getElementById("ts-image"))==null?void 0:o.value)==null?void 0:l.trim())||null};let u;if(t?{error:u}=await _.from("tutorial_steps").update(i).eq("id",t):{error:u}=await _.from("tutorial_steps").insert(i),u){alert("Erreur : "+u.message);return}yt(),W(e)}const bt="/",vt=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function jn(e,t){await ce(e,t)}async function ce(e,t){var d,r;const[{data:n},{data:a}]=await Promise.all([_.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),_.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;gap:10px;flex-wrap:wrap">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">🏟️ Stades</h2>
        <div style="display:flex;gap:8px">
          <button id="st-gen-countries-btn" class="btn btn-ghost">🌍 Créer les stades Pays manquants</button>
          <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
        </div>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="st-list">
        ${(n||[]).length?(n||[]).map(g=>Dn(g)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucun stade créé.</div>'}
      </div>
    </div>`,(d=document.getElementById("st-add-btn"))==null||d.addEventListener("click",()=>qe(null,a,e,t)),(r=document.getElementById("st-gen-countries-btn"))==null||r.addEventListener("click",async()=>{const{toast:g}=t,v=new Set((n||[]).filter(l=>!l.club_id&&l.country_code).map(l=>l.country_code)),x=vt.filter(([l])=>!v.has(l));if(!x.length){g("Tous les pays ont déjà un stade.","info");return}if(!confirm(`Créer ${x.length} stade(s) "Pays" manquant(s) ?`))return;const i=x.map(([l,p])=>({name:`Stade ${p}`,club_id:null,country_code:l})),{data:u,error:o}=await _.from("stadium_definitions").insert(i).select();if(o){g("Erreur : "+o.message,"error");return}u!=null&&u.length&&await _.from("cards").insert(u.map(l=>({card_type:"stadium",stadium_id:l.id}))),g(`${(u==null?void 0:u.length)||0} stade(s) Pays créé(s) ✅`,"success"),ce(e,t)}),e.querySelectorAll("[data-edit-stadium]").forEach(g=>{g.addEventListener("click",()=>{const v=(n||[]).find(x=>x.id===g.dataset.editStadium);v&&qe(v,a,e,t)})})}function Dn(e){var d,r;let t=null;e.image_url?t=e.image_url.startsWith("http")?e.image_url:`${bt}icons/${e.image_url}`:(d=e.club)!=null&&d.logo_url?t=e.club.logo_url:e.country_code&&(t=`https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/64.png`);const n=((r=e.club)==null?void 0:r.encoded_name)||e.country_code||"—",a=Xe(e.name,t,`${n}<br>+10 ⭐`,{width:140});return`<div data-edit-stadium="${e.id}" style="cursor:pointer;transition:transform .15s" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
    ${a}
  </div>`}function qe(e,t,n,a){var u,o,l;const{openModal:d,closeModal:r,toast:g}=a,v=`
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
            ${vt.map(([p,c])=>`<option value="${p}" ${(e==null?void 0:e.country_code)===p?"selected":""}>${c} (${p})</option>`).join("")}
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
  `;d(e?`Modifier : ${e.name}`:"Nouveau stade",v,`
    <button id="st-cancel" class="btn btn-ghost">Annuler</button>
    <button id="st-save" class="btn btn-primary">Enregistrer</button>
  `);const i=()=>{var E,s,w,k,A,B,S;const p=((E=document.getElementById("st-name"))==null?void 0:E.value)||"NOM DU STADE",c=(w=(s=document.getElementById("st-image"))==null?void 0:s.value)==null?void 0:w.trim(),y=(A=(k=document.getElementById("st-country"))==null?void 0:k.value)==null?void 0:A.trim(),m=document.getElementById("st-club"),f=(m==null?void 0:m.selectedIndex)||0,I=m&&f>0?m.options[f].text:"",L=((S=(B=m==null?void 0:m.options[f])==null?void 0:B.getAttribute)==null?void 0:S.call(B,"data-logo"))||"";let h=null;c?h=c.startsWith("http")?c:`${bt}icons/${c}`:L?h=L:y&&(h=`https://flagsapi.com/${y.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`);const $=I||y||"—",b=document.getElementById("st-preview-card");b&&(b.innerHTML=Xe(p,h,`${$}<br>+10 ⭐`,{width:140}))};i(),["st-name","st-club","st-country","st-image"].forEach(p=>{var c,y;(c=document.getElementById(p))==null||c.addEventListener("input",i),(y=document.getElementById(p))==null||y.addEventListener("change",i)}),(u=document.getElementById("st-cancel"))==null||u.addEventListener("click",()=>r()),(o=document.getElementById("st-save"))==null||o.addEventListener("click",async()=>{const p=document.getElementById("st-name").value.trim(),c=document.getElementById("st-club").value||null,y=document.getElementById("st-country").value.trim().toUpperCase()||null,m=document.getElementById("st-image").value.trim()||null;if(!p){g("Le nom est obligatoire","error");return}const f={name:p,club_id:c,country_code:y,image_url:m},{error:I}=e?await _.from("stadium_definitions").update(f).eq("id",e.id):await _.from("stadium_definitions").insert(f);if(I){g("Erreur : "+I.message,"error");return}g(e?"Stade modifié ✅":"Stade créé ✅","success"),r(),ce(n,a)}),(l=document.getElementById("st-delete"))==null||l.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await _.from("stadium_definitions").delete().eq("id",e.id),g("Stade supprimé","success"),r(),ce(n,a))})}const q=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],Pn=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}],H=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],Ke=["GK","DEF","MIL","ATT"];async function Nn(e,t){await Ae(e,t)}async function Ae(e,t){var a;const{data:n}=await _.from("gc_definitions").select("*").order("sort_order").order("created_at");e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">⚡ Game Changers</h2>
        <button id="gc-add-btn" class="btn btn-primary">+ Nouvelle carte</button>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="gc-list">
        ${(n||[]).length?(n||[]).map(d=>Fn(d)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucune carte Game Changer.</div>'}
      </div>
    </div>`,(a=document.getElementById("gc-add-btn"))==null||a.addEventListener("click",()=>Je(null,e,t)),e.querySelectorAll("[data-edit-gc]").forEach(d=>{d.addEventListener("click",()=>{const r=(n||[]).find(g=>g.id===d.dataset.editGc);r&&Je(r,e,t)})}),e.querySelectorAll(".btn-del-gc").forEach(d=>{d.addEventListener("click",async r=>{r.stopPropagation(),confirm("Supprimer cette carte Game Changer ?")&&(await _.from("gc_definitions").delete().eq("id",d.dataset.del),Ae(e,t))})})}function Fn(e){const t=q.find(d=>d.value===e.gc_type)||q[0],n=e.image_url?`/icons/${e.image_url}`:null,a=ye(e.name||"?",n,t.label.split(" ")[0],e.effect||"",{width:130});return`<div data-edit-gc="${e.id}" style="position:relative;cursor:pointer">
    ${a}
    <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
      <button class="btn-del-gc" data-del="${e.id}"
        style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0">✕</button>
    </div>
    ${e.is_active?"":'<div style="position:absolute;top:4px;right:4px;z-index:10;background:#555;color:#fff;font-size:9px;font-weight:700;padding:2px 6px;border-radius:8px">INACTIF</div>'}
  </div>`}function Je(e,t,n){var l,p,c,y;const{openModal:a,closeModal:d,toast:r}=n,g=!e,v=e||{name:"",gc_type:"game_changer",color:"purple",effect:"",image_url:"",sort_order:0,is_active:!0,effect_type:"BOOST_STAT",effect_params:{}},x=(()=>{const m=v.effect_params||{},f=H.find(I=>I.value===(v.effect_type||"BOOST_STAT"))||H[0];return`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${f.hasValue?`<div>
        <label>VALEUR (+N)</label>
        <input id="gc-p-value" type="number" min="1" max="5" value="${m.value||2}">
      </div>`:""}
      ${f.hasCount?`<div>
        <label>NB JOUEURS</label>
        <input id="gc-p-count" type="number" min="1" max="11" value="${m.count||1}">
      </div>`:""}
      ${f.hasTarget?`<div>
        <label>CIBLE</label>
        <select id="gc-p-target">
          <option value="home" ${(m.target||"home")==="home"?"selected":""}>Mon équipe</option>
          <option value="opponent" ${m.target==="opponent"?"selected":""}>Équipe adverse</option>
        </select>
      </div>`:""}
      ${f.hasRoles?`<div>
        <label>POSTES CIBLÉS</label>
        <div style="display:flex;gap:4px;flex-wrap:wrap">
          ${Ke.map(I=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555">
            <input type="checkbox" class="gc-p-role" value="${I}" ${!m.roles||m.roles.includes(I)?"checked":""}> ${I}
          </label>`).join("")}
        </div>
      </div>`:""}
    </div>`})(),i=`
    <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:#1a1a2e;border-radius:12px">
      <div id="gc-modal-preview">${ye(v.name||"?",v.image_url?`/icons/${v.image_url}`:null,(q.find(m=>m.value===v.gc_type)||q[0]).label.split(" ")[0],v.effect||"",{width:150})}</div>
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
            ${q.map(m=>`<option value="${m.value}" ${v.gc_type===m.value?"selected":""}>${m.label}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>COULEUR</label>
          <select id="gc-color">
            ${Pn.map(m=>`<option value="${m.value}" ${v.color===m.value?"selected":""}>${m.label}</option>`).join("")}
          </select>
        </div>
      </div>
      <div>
        <label>IMAGE (public/icons/gamechanger-*)</label>
        <div style="display:flex;gap:8px;align-items:center">
          <input id="gc-image-url" value="${v.image_url||""}" placeholder="gamechanger-nom.png" style="flex:1">
          <button id="btn-pick-gc-icon" class="btn btn-primary btn-sm" style="white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
        </div>
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
            ${H.map(m=>`<option value="${m.value}" ${(v.effect_type||"BOOST_STAT")===m.value?"selected":""}>${m.label}</option>`).join("")}
          </select>
        </div>
        <div id="gc-params-wrap">${x}</div>
      </div>
    </div>
  `;a(g?"Nouvelle carte Game Changer":`Modifier : ${v.name}`,i,`
    <button id="gc-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gc-save" class="btn btn-primary">💾 Enregistrer</button>
  `);const o=()=>{var b,E,s,w,k;const m=((b=document.getElementById("gc-name"))==null?void 0:b.value)||"?",f=((E=document.getElementById("gc-effect"))==null?void 0:E.value)||"",I=((s=document.getElementById("gc-type"))==null?void 0:s.value)||"game_changer",L=(k=(w=document.getElementById("gc-image-url"))==null?void 0:w.value)==null?void 0:k.trim(),h=q.find(A=>A.value===I)||q[0],$=document.getElementById("gc-modal-preview");$&&($.innerHTML=ye(m,L?`/icons/${L}`:null,h.label.split(" ")[0],f,{width:150}))};["gc-name","gc-effect","gc-type","gc-image-url"].forEach(m=>{var f,I;(f=document.getElementById(m))==null||f.addEventListener("input",o),(I=document.getElementById(m))==null||I.addEventListener("change",o)}),(l=document.getElementById("gc-effect-type"))==null||l.addEventListener("change",()=>{const m=document.getElementById("gc-effect-type").value,f=H.find(L=>L.value===m)||H[0],I=document.getElementById("gc-params-wrap");I.innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${f.hasValue?'<div><label>VALEUR (+N)</label><input id="gc-p-value" type="number" min="1" max="5" value="2"></div>':""}
      ${f.hasCount?'<div><label>NB JOUEURS</label><input id="gc-p-count" type="number" min="1" max="11" value="1"></div>':""}
      ${f.hasTarget?'<div><label>CIBLE</label><select id="gc-p-target"><option value="home">Mon équipe</option><option value="opponent">Équipe adverse</option></select></div>':""}
      ${f.hasRoles?`<div><label>POSTES CIBLÉS</label><div style="display:flex;gap:4px;flex-wrap:wrap">${Ke.map(L=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555"><input type="checkbox" class="gc-p-role" value="${L}" checked> ${L}</label>`).join("")}</div></div>`:""}
    </div>`}),(p=document.getElementById("btn-pick-gc-icon"))==null||p.addEventListener("click",async()=>{var f;const m=document.getElementById("gc-icon-picker");if(m){if(m.style.display!=="none"){m.style.display="none";return}m.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',m.style.display="block";try{const L=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),h=Array.isArray(L)?L.filter(b=>b.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(b.name)):[];if(!h.length){m.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const $=((f=document.getElementById("gc-image-url"))==null?void 0:f.value)||"";m.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
        ${h.map(b=>`
        <div class="gc-icon-item" data-name="${b.name}"
          style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${b.name===$?"#7a28b8":"#ddd"};background:${b.name===$?"#f5f0ff":"#fff"}">
          <img src="/icons/${b.name}" style="height:44px;width:100%;object-fit:contain">
          <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
        </div>`).join("")}
      </div>`,m.querySelectorAll(".gc-icon-item").forEach(b=>{b.addEventListener("click",()=>{const E=document.getElementById("gc-image-url");E&&(E.value=b.dataset.name),m.style.display="none",o()})})}catch(I){m.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${I.message}</div>`}}}),(c=document.getElementById("gc-cancel"))==null||c.addEventListener("click",()=>d()),(y=document.getElementById("gc-save"))==null||y.addEventListener("click",async()=>{var $,b,E,s,w,k,A,B,S,T,M,O,U,G;const m=H.find(N=>{var D;return N.value===(((D=document.getElementById("gc-effect-type"))==null?void 0:D.value)||"BOOST_STAT")})||H[0],f=m.hasRoles?[...document.querySelectorAll(".gc-p-role:checked")].map(N=>N.value):null,I={...m.hasValue?{value:Number(($=document.getElementById("gc-p-value"))==null?void 0:$.value)||2}:{},...m.hasCount?{count:Number((b=document.getElementById("gc-p-count"))==null?void 0:b.value)||1}:{},...m.hasTarget?{target:((E=document.getElementById("gc-p-target"))==null?void 0:E.value)||"home"}:{},...m.hasRoles?{roles:f!=null&&f.length?f:null}:{}},L={name:((w=(s=document.getElementById("gc-name"))==null?void 0:s.value)==null?void 0:w.trim())||"",effect:((A=(k=document.getElementById("gc-effect"))==null?void 0:k.value)==null?void 0:A.trim())||null,image_url:((S=(B=document.getElementById("gc-image-url"))==null?void 0:B.value)==null?void 0:S.trim())||null,gc_type:((T=document.getElementById("gc-type"))==null?void 0:T.value)||"game_changer",color:((M=document.getElementById("gc-color"))==null?void 0:M.value)||"purple",sort_order:Number((O=document.getElementById("gc-sort"))==null?void 0:O.value)||0,is_active:((U=document.getElementById("gc-active"))==null?void 0:U.checked)??!0,effect_type:((G=document.getElementById("gc-effect-type"))==null?void 0:G.value)||"BOOST_STAT",effect_params:I};if(!L.name){r("Le nom est obligatoire","error");return}const{error:h}=g?await _.from("gc_definitions").insert(L):await _.from("gc_definitions").update(L).eq("id",v.id);if(h){r(h.message,"error");return}r(g?"Carte créée ✅":"Carte modifiée ✅","success"),d(),Ae(t,n)})}async function On(e,{toast:t,openModal:n,closeModal:a}){await j(e,{toast:t,openModal:n,closeModal:a})}async function j(e,t){var b,E;const{toast:n,openModal:a,closeModal:d}=t,[{data:r,error:g},{data:v},{data:x},{data:i}]=await Promise.all([_.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),_.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1),_.from("season_reward_tiers").select("*").order("rank_min"),_.from("booster_configs").select("id,name").order("sort_order")]);if(g){e.innerHTML=`<p style="color:red">${g.message}</p>`;return}const u=r||[],o=u.find(s=>s.is_active),l=(v||[]).filter(s=>(s.placement_matches||0)>=1),p=l.filter(s=>(s.placement_matches||0)>=10),c=["bronze","silver","gold","platinum","diamond","master"],y={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},m={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},f={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},I={};c.forEach(s=>{I[s]=0}),p.forEach(s=>{const w=s.rank_tier||"bronze";I[w]!==void 0&&I[w]++});const L=p.length?Math.round(p.reduce((s,w)=>s+(w.mmr||1e3),0)/p.length):0;function h(s){return s?new Date(s).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function $(s){const w=new Date;return s.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(s.end_at)<w?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${o?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${o.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${l.length}</div>
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
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(o.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${p.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${c.map(s=>{const w=I[s],k=p.length>0?Math.round(w/p.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${f[s]} ${y[s]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${k}%;background:${m[s]};border-radius:4px;transition:width 0.5s"></div>
                </div>
                <span style="width:40px;text-align:right;color:var(--gray-600)">${w} (${k}%)</span>
              </div>`}).join("")}
        </div>`:`<div style="font-size:12px;color:var(--gray-600)">Aucun joueur classé pour l'instant.</div>`}
      </div>`:`
      <div class="card-panel" style="background:rgba(230,120,34,0.08);border:1.5px solid #e67e22">
        <div style="font-weight:700;color:#e67e22">⚠️ Aucune saison active</div>
        <div style="font-size:13px;color:var(--gray-600);margin-top:4px">Le mode Ranked est désactivé jusqu'à l'activation d'une saison.</div>
      </div>`}

      <!-- Header + bouton créer -->
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div style="font-weight:700;font-size:14px">Toutes les saisons (${u.length})</div>
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
              ${u.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':u.map(s=>{const w=Math.round((new Date(s.end_at)-new Date(s.start_at))/864e5),k=new Date(s.end_at)<new Date&&!s.is_active;return`
                    <tr>
                      <td><b>${s.name}</b></td>
                      <td style="font-size:12px">${h(s.start_at)}</td>
                      <td style="font-size:12px">${h(s.end_at)}</td>
                      <td style="font-size:12px">${w} jours</td>
                      <td>${$(s)}</td>
                      <td style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn btn-ghost btn-sm" data-edit="${s.id}">✏️ Modifier</button>
                        ${s.is_active?`<button class="btn btn-ghost btn-sm" data-deactivate="${s.id}" style="color:#e67e22">⏹ Désactiver</button>`:`<button class="btn btn-primary btn-sm" data-activate="${s.id}">▶ Activer</button>`}
                        ${k?`<button class="btn btn-danger btn-sm" data-delete="${s.id}">🗑</button>`:""}
                      </td>
                    </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Récompenses de saison par palier de classement -->
      <div class="card-panel">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;flex-wrap:wrap;gap:8px">
          <div style="font-weight:700;font-size:14px">🏆 Récompenses de saison ${o?`— ${o.name}`:""}</div>
          <button id="add-reward-tier-btn" class="btn btn-primary btn-sm" ${o?"":'disabled title="Aucune saison active"'}>+ Ajouter un palier</button>
        </div>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:12px">
          Paliers de classement (TOP 1, TOP 3, TOP 10...) pour la saison actuellement active. Chaque palier peut donner des crédits,
          des cartes joueur spécifiques et/ou des boosters, à partir d'une date d'activation optionnelle.
        </div>
        ${o?`
        <div class="table-wrap">
          <table>
            <thead>
              <tr><th>Palier</th><th>Classement</th><th style="text-align:right">Crédits</th><th style="text-align:center">Cartes</th><th style="text-align:center">Boosters</th><th>Activation</th><th>Statut</th><th>Actions</th></tr>
            </thead>
            <tbody>
              ${(x||[]).filter(s=>s.season_id===o.id).map(s=>{const w=!s.activate_at||new Date(s.activate_at)<=new Date;return`<tr>
                  <td><b>${s.label}</b></td>
                  <td>${s.rank_min===s.rank_max?`#${s.rank_min}`:`#${s.rank_min}–${s.rank_max}`}</td>
                  <td style="text-align:right">${(s.credits||0).toLocaleString("fr")}</td>
                  <td style="text-align:center">${(s.player_ids||[]).length}</td>
                  <td style="text-align:center">${(s.booster_config_ids||[]).length}</td>
                  <td style="font-size:12px">${s.activate_at?h(s.activate_at):"Immédiat"}</td>
                  <td>
                    ${s.distributed_at?`<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Distribué le ${h(s.distributed_at)}</span>`:w?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">● Prêt</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">⏳ Programmé</span>'}
                  </td>
                  <td style="white-space:nowrap">
                    <button class="btn btn-ghost btn-sm" data-edit-tier="${s.id}">✏️</button>
                    <button class="btn btn-primary btn-sm" data-distribute-tier="${s.id}" ${w?"":"disabled"}>🎁 Distribuer</button>
                    <button class="btn btn-danger btn-sm" data-delete-tier="${s.id}">🗑️</button>
                  </td>
                </tr>`}).join("")||'<tr><td colspan="8" style="text-align:center;color:var(--tile-fg-dim);padding:16px">Aucun palier configuré.</td></tr>'}
            </tbody>
          </table>
        </div>`:'<div style="color:var(--tile-fg-dim);font-size:13px;padding:10px">Active une saison pour configurer ses récompenses.</div>'}
      </div>
    </div>`,(b=document.getElementById("create-season-btn"))==null||b.addEventListener("click",()=>{Ye(null,{toast:n,openModal:a,closeModal:d,reload:()=>j(e,t)})}),e.querySelectorAll("[data-edit]").forEach(s=>{const w=u.find(k=>k.id==s.dataset.edit);s.addEventListener("click",()=>{Ye(w,{toast:n,openModal:a,closeModal:d,reload:()=>j(e,t)})})}),e.querySelectorAll("[data-activate]").forEach(s=>{s.addEventListener("click",async()=>{const w=parseInt(s.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:k}=await _.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(k){n(k.message,"error");return}const{error:A}=await _.from("ranked_seasons").update({is_active:!0}).eq("id",w);if(A){n(A.message,"error");return}await _.from("users").update({current_season_id:w}).gt("placement_matches",0),n("Saison activée ✅","success"),j(e,t)})}),e.querySelectorAll("[data-deactivate]").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:w}=await _.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(s.dataset.deactivate));if(w){n(w.message,"error");return}n("Saison désactivée","success"),j(e,t)})}),e.querySelectorAll("[data-delete]").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:w}=await _.from("ranked_seasons").delete().eq("id",parseInt(s.dataset.delete));if(w){n(w.message,"error");return}n("Saison supprimée","success"),j(e,t)})}),(E=document.getElementById("add-reward-tier-btn"))==null||E.addEventListener("click",()=>{Ve(null,o,i||[],{toast:n,openModal:a,closeModal:d,reload:()=>j(e,t)})}),e.querySelectorAll("[data-edit-tier]").forEach(s=>{const w=(x||[]).find(k=>k.id===s.dataset.editTier);s.addEventListener("click",()=>{Ve(w,o,i||[],{toast:n,openModal:a,closeModal:d,reload:()=>j(e,t)})})}),e.querySelectorAll("[data-distribute-tier]").forEach(s=>{s.addEventListener("click",async()=>{const w=(x||[]).find(B=>B.id===s.dataset.distributeTier);if(!confirm(`Distribuer les récompenses du palier "${w==null?void 0:w.label}" à tous les joueurs concernés ?`))return;s.disabled=!0,s.textContent="⏳...";const{data:k,error:A}=await _.rpc("admin_distribute_season_reward",{p_tier_id:s.dataset.distributeTier});if(A){n(A.message,"error"),s.disabled=!1,s.textContent="🎁 Distribuer";return}if(!(k!=null&&k.success)){n((k==null?void 0:k.error)||"Échec de la distribution","error"),s.disabled=!1,s.textContent="🎁 Distribuer";return}n(`Récompenses distribuées à ${k.rewarded} joueur(s) ✅`,"success"),j(e,t)})}),e.querySelectorAll("[data-delete-tier]").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm("Supprimer ce palier de récompense ?"))return;const{error:w}=await _.from("season_reward_tiers").delete().eq("id",s.dataset.deleteTier);if(w){n(w.message,"error");return}n("Palier supprimé","success"),j(e,t)})})}function Ve(e,t,n,{toast:a,openModal:d,closeModal:r,reload:g}){var p,c,y,m;const v=!!e;let x=[];const i=f=>{if(!f)return"";const I=new Date(f);return new Date(I.getTime()-I.getTimezoneOffset()*6e4).toISOString().slice(0,16)},u=`
    <div style="display:flex;flex-direction:column;gap:12px">
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
          ${n.length?n.map(f=>`
            <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;color:#333">
              <input type="checkbox" class="rt-booster-cb" value="${f.id}" ${((e==null?void 0:e.booster_config_ids)||[]).includes(f.id)?"checked":""}>
              ${f.name}
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
  `;d(v?`Modifier : ${e.label}`:"Nouveau palier de récompense",u,`
    <button id="rt-cancel" class="btn btn-ghost">Annuler</button>
    <button id="rt-save" class="btn btn-primary">💾 Enregistrer</button>
  `);function l(){const f=document.getElementById("rt-player-chips");f&&(f.innerHTML=x.map(I=>`
      <span style="display:inline-flex;align-items:center;gap:6px;background:#1A6B3C;color:#fff;font-size:12px;font-weight:700;padding:4px 8px;border-radius:14px">
        ${I.label}
        <button data-remove-player="${I.id}" style="background:none;border:none;color:#fff;cursor:pointer;font-size:12px;padding:0">✕</button>
      </span>`).join(""),f.querySelectorAll("[data-remove-player]").forEach(I=>{I.addEventListener("click",()=>{x=x.filter(L=>L.id!==I.dataset.removePlayer),l()})}))}(p=e==null?void 0:e.player_ids)!=null&&p.length&&_.from("players").select("id,firstname,surname_real").in("id",e.player_ids).then(({data:f})=>{x=(f||[]).map(I=>({id:I.id,label:`${I.firstname} ${I.surname_real}`})),l()}),(c=document.getElementById("rt-player-search-btn"))==null||c.addEventListener("click",async()=>{const f=document.getElementById("rt-player-search").value.trim();if(f.length<2)return;const{data:I}=await _.from("players").select("id,firstname,surname_real,rarity").or(`firstname.ilike.%${f}%,surname_real.ilike.%${f}%`).limit(10),L=document.getElementById("rt-player-results");if(!(I!=null&&I.length)){L.style.display="flex",L.innerHTML='<div style="color:#999;font-size:12px;padding:4px">Aucun résultat.</div>';return}L.style.display="flex",L.innerHTML=I.map(h=>`
      <div data-add-player="${h.id}" data-label="${h.firstname} ${h.surname_real}" style="cursor:pointer;padding:6px 8px;border-radius:6px;font-size:13px;color:#333" onmouseover="this.style.background='#eee'" onmouseout="this.style.background=''">
        ${h.firstname} ${h.surname_real} <span style="color:#999;font-size:11px">(${h.rarity})</span>
      </div>`).join(""),L.querySelectorAll("[data-add-player]").forEach(h=>{h.addEventListener("click",()=>{const $=h.dataset.addPlayer;x.some(b=>b.id===$)||x.push({id:$,label:h.dataset.label}),l(),L.style.display="none",document.getElementById("rt-player-search").value=""})})}),(y=document.getElementById("rt-cancel"))==null||y.addEventListener("click",()=>r()),(m=document.getElementById("rt-save"))==null||m.addEventListener("click",async()=>{const f=document.getElementById("rt-error"),I=document.getElementById("rt-label").value.trim(),L=parseInt(document.getElementById("rt-rank-min").value)||1,h=parseInt(document.getElementById("rt-rank-max").value)||1,$=parseInt(document.getElementById("rt-credits").value)||0,b=document.getElementById("rt-activate-at").value,E=b?new Date(b).toISOString():null,s=[...document.querySelectorAll(".rt-booster-cb:checked")].map(A=>A.value);if(!I){f.textContent="Le libellé est obligatoire.";return}if(L>h){f.textContent="Le classement min doit être ≤ au max.";return}const w={season_id:t.id,label:I,rank_min:L,rank_max:h,credits:$,booster_config_ids:s,player_ids:x.map(A=>A.id),activate_at:E},{error:k}=v?await _.from("season_reward_tiers").update(w).eq("id",e.id):await _.from("season_reward_tiers").insert(w);if(k){f.textContent=k.message;return}a(v?"Palier modifié ✅":"Palier créé ✅","success"),r(),g()})}function Ye(e,{toast:t,openModal:n,closeModal:a,reload:d}){const r=!!e,g=new Date().toISOString().slice(0,16),v=new Date(Date.now()+90*864e5).toISOString().slice(0,16),x=e?new Date(e.start_at).toISOString().slice(0,16):g,i=e?new Date(e.end_at).toISOString().slice(0,16):v,u=(e==null?void 0:e.name)||"";n(r?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group">
        <label>Nom de la saison *</label>
        <input id="season-name" type="text" value="${u}" placeholder="ex: Saison 2 — Été 2026" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de début *</label>
        <input id="season-start" type="datetime-local" value="${x}" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de fin *</label>
        <input id="season-end" type="datetime-local" value="${i}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${r?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function o(){var m,f;const l=(m=document.getElementById("season-start"))==null?void 0:m.value,p=(f=document.getElementById("season-end"))==null?void 0:f.value,c=document.getElementById("season-duration");if(!l||!p||!c)return;const y=Math.round((new Date(p)-new Date(l))/864e5);c.textContent=y>0?`Durée : ${y} jour${y>1?"s":""}`:"⚠️ La fin doit être après le début",c.style.color=y>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var l,p,c;(l=document.getElementById("season-start"))==null||l.addEventListener("input",o),(p=document.getElementById("season-end"))==null||p.addEventListener("input",o),o(),(c=document.getElementById("season-save-btn"))==null||c.addEventListener("click",async()=>{var b,E,s;const y=(b=document.getElementById("season-name"))==null?void 0:b.value.trim(),m=(E=document.getElementById("season-start"))==null?void 0:E.value,f=(s=document.getElementById("season-end"))==null?void 0:s.value,I=document.getElementById("season-error");if(!y){I.textContent="Le nom est requis.";return}if(!m){I.textContent="La date de début est requise.";return}if(!f){I.textContent="La date de fin est requise.";return}if(new Date(f)<=new Date(m)){I.textContent="La date de fin doit être après le début.";return}const L=document.getElementById("season-save-btn");L.disabled=!0,L.textContent="Enregistrement…";const h={name:y,start_at:new Date(m).toISOString(),end_at:new Date(f).toISOString()};let $;if(r?{error:$}=await _.from("ranked_seasons").update(h).eq("id",e.id):{error:$}=await _.from("ranked_seasons").insert({...h,is_active:!1}),$){I.textContent=$.message,L.disabled=!1,L.textContent=r?"💾 Enregistrer":"✅ Créer la saison";return}t(r?"Saison modifiée ✅":"Saison créée ✅","success"),a(),d()})},50)}async function xe(e,t){var x;const{toast:n}=t,{data:a,error:d}=await _.from("solo_levels").select("*").order("level_number");if(d){e.innerHTML=`<p style="color:var(--danger)">${d.message}</p>`;return}const r=i=>`
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
            ${(a||[]).map(r).join("")||'<tr><td colspan="8" style="text-align:center;color:#aaa;padding:20px">Aucun niveau défini.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;function g(){document.querySelectorAll("#solo-tbody [data-field]").forEach(i=>{i.addEventListener("change",()=>v(i))})}async function v(i){const u=i.dataset.id,o=i.dataset.field,l=o==="is_active"?i.checked:Number(i.value)||0,{error:p}=await _.from("solo_levels").update({[o]:l}).eq("id",u);if(p){n(p.message,"error");return}i.style.transition="background .3s",i.style.background="#e8f8ee",setTimeout(()=>{i.style.background=""},500)}g(),document.querySelectorAll("[data-del-row]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer ce niveau ? Les joueurs ayant progressé au-delà seront affectés.")&&(await _.from("solo_levels").delete().eq("id",i.dataset.delRow),n("Niveau supprimé","success"),xe(e,t))})}),(x=document.getElementById("solo-add-row"))==null||x.addEventListener("click",async()=>{const u={level_number:Math.max(0,...(a||[]).map(p=>p.level_number))+1,target_note_avg:10,nb_liens_jaune:2,nb_liens_vert:1,nb_joueurs_stade:2,reward_credits:500,is_active:!0},{data:o,error:l}=await _.from("solo_levels").insert(u).select().single();if(l){n(l.message,"error");return}n("Niveau ajouté — modifie les valeurs directement","success"),xe(e,t)})}jt(Qe);function Un(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function Gn(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function he(){document.getElementById("modal-overlay").classList.add("hidden")}const We={dashboard:{title:"Dashboard",fn:Dt},players:{title:"Joueurs & Cartes",fn:Ot},clubs:{title:"Clubs",fn:Xt},"card-builder":{title:"Card Builder",fn:cn},users:{title:"Managers",fn:mt},market:{title:"Mercato",fn:gt},"import-export":{title:"Import / Export CSV",fn:vn},formations:{title:"Formations & Liens",fn:hn},"boosters-config":{title:"Boosters",fn:In},"sell-price":{title:"Prix vente directe",fn:$n},journal:{title:"Actualités",fn:An},tutorial:{title:"Tutoriel",fn:Cn},stadiums:{title:"Stades",fn:jn},"gc-cards":{title:"Game Changers",fn:Nn},"ranked-seasons":{title:"Saisons Ranked",fn:On},"solo-mode":{title:"Solo Mode",fn:xe}};async function pe(e){document.querySelectorAll(".admin-sidebar nav a").forEach(d=>{d.classList.toggle("active",d.dataset.page===e)});const t=document.getElementById("mobile-page-select");t&&(t.value=e);const n=We[e]||We.dashboard;document.getElementById("page-title").textContent=n.title;const a=document.getElementById("page-content");a.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(a,{toast:Un,openModal:Gn,closeModal:he,navigate:pe})}catch(d){a.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${d.message}</div>`,console.error(d)}}async function Hn(){var t;const{data:{session:e}}=await _.auth.getSession();e&&await Ze(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),a=document.getElementById("auth-password").value,d=document.getElementById("auth-error");if(d.textContent="",!n||!a){d.textContent="Remplissez tous les champs.";return}const{data:r,error:g}=await _.auth.signInWithPassword({email:n,password:a});if(g){d.textContent=g.message;return}await Ze(r.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await _.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",he),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&he()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",a=>{a.preventDefault(),pe(n.dataset.page)})}),(t=document.getElementById("mobile-page-select"))==null||t.addEventListener("change",n=>{pe(n.target.value)})}async function Ze(e){const{data:t,error:n}=await _.from("users").select("*").eq("id",e.id).single(),a=document.getElementById("auth-error");if(n||!t){a.textContent="Profil introuvable.";return}if(!t.is_admin){a.textContent="Accès refusé. Vous n'êtes pas administrateur.",await _.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,pe("dashboard")}Hn();
