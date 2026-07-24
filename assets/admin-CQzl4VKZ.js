import{s as w,r as he,a as Ee,A as bt,l as vt,g as xt,K as Te,D as z,b as ht,S as Et,c as R,H as _t,R as wt,e as ce,d as We,f as It,h as kt,E as $t,i as Bt,N as Lt,M as At,B as St,j as Ct,F as pe,k as Me,m as Tt,n as Ze,o as ge,p as Mt}from"./special-cards-lEGt-tGs.js";async function zt(e){var h;const[{count:t},{count:n},{count:i},{count:l},{count:a},{data:m}]=await Promise.all([w.from("players").select("*",{count:"exact",head:!0}),w.from("clubs").select("*",{count:"exact",head:!0}),w.from("users").select("*",{count:"exact",head:!0}),w.from("stadium_definitions").select("*",{count:"exact",head:!0}),w.from("users").select("*",{count:"exact",head:!0}).gt("last_seen_at",new Date(Date.now()-18e4).toISOString()),w.rpc("get_signup_password")]),p=m||"";e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:24px">

      <!-- Managers -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">👥 Managers</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${i??"–"}</div>
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
  `,window.adminNav=o=>{var u;(u=document.querySelector(`[data-page="${o}"]`))==null||u.click()},(h=document.getElementById("signup-pwd-save"))==null||h.addEventListener("click",async()=>{const o=document.getElementById("signup-pwd-input").value.trim(),u=document.getElementById("signup-pwd-status");if(!o){u.textContent="Le code ne peut pas être vide.",u.style.color="#ff6b6b";return}const r=document.getElementById("signup-pwd-save");r.disabled=!0,r.textContent="⏳...";const{error:f}=await w.rpc("set_signup_password",{new_password:o});if(r.disabled=!1,r.textContent="💾 Enregistrer",f){u.textContent=f.message,u.style.color="#ff6b6b";return}u.textContent="✅ Code mis à jour.",u.style.color="#2ecc71"})}const Qe={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},Rt={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Dt(){const e={};for(const t of bt)e[t]=await vt(t);return e}async function jt(e,t){const{toast:n}=t;if(!confirm(`Réattribuer une nouvelle photo à tous les joueurs ayant encore l'ancien format de chemin (public/faces/...) ?

Cette action est irréversible.`))return;const i=document.getElementById("fix-old-faces-btn");i&&(i.disabled=!0,i.textContent="⏳ En cours...");try{const{data:l,error:a}=await w.from("players").select("id, country_code, face").like("face","public/faces/%");if(a){n(a.message,"error");return}if(!(l!=null&&l.length)){n("Aucun joueur avec l'ancien format — rien à faire ✅","success");return}const{data:m}=await w.from("players").select("face").not("face","is",null),p=new Set((m||[]).map(u=>u.face).filter(u=>u&&!u.startsWith("public/faces/")));let h=0,o=0;for(const u of l){const r=await Ee(u.country_code,p);if(!r){o++;continue}const{error:f}=await w.from("players").update({face:r}).eq("id",u.id);if(f){o++;continue}p.add(r),h++}n(`${h} photo(s) réattribuée(s)${o?`, ${o} échec(s)`:""} ✅`,o?"error":"success")}finally{i&&(i.disabled=!1,i.textContent="🖼️ Réattribuer anciennes photos")}}async function Pt(e,t){await le(e,t)}async function le(e,t,n=null){var o,u,r,f,b;const{toast:i}=t;n||(n={search:((o=document.getElementById("search-players"))==null?void 0:o.value)||"",job:((u=document.getElementById("filter-job"))==null?void 0:u.value)||"",rarity:((r=document.getElementById("filter-rarity"))==null?void 0:r.value)||"",club:((f=document.getElementById("filter-club"))==null?void 0:f.value)||"",country:((b=document.getElementById("filter-country"))==null?void 0:b.value)||""});const[{data:l,error:a},{data:m}]=await Promise.all([w.from("players").select("*, clubs(id,encoded_name,logo_url)"),w.from("clubs").select("id,encoded_name").order("encoded_name")]);if(a){e.innerHTML=`<p style="color:red">${a.message}</p>`;return}const p={GK:0,DEF:1,MIL:2,ATT:3},h=(l||[]).sort((s,g)=>{const d=(p[s.job]??4)-(p[g.job]??4);return d!==0?d:(s.surname_real||"").localeCompare(g.surname_real||"")});Nt(e,h,m||[],t,n)}function Nt(e,t,n,i,l=null){var u,r;const{toast:a}=i;if(e.innerHTML=`
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
          ${Object.entries(Qe).map(([f,b])=>`<option value="${f}">${b}</option>`).join("")}
        </select>
        <button class="btn btn-primary" id="add-player-btn" style="white-space:nowrap">+ Joueur</button>
        <button class="btn btn-ghost" id="fix-old-faces-btn" style="white-space:nowrap">🖼️ Réattribuer anciennes photos</button>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <select id="filter-club" style="flex:1;min-width:140px">
          <option value="">Tous les clubs</option>
          ${n.map(f=>`<option value="${f.id}">${f.encoded_name}</option>`).join("")}
        </select>
        <select id="filter-country" style="flex:1;min-width:120px">
          <option value="">Tous les pays</option>
          ${[...new Set(t.map(f=>f.country_code).filter(Boolean))].sort().map(f=>`<option value="${f}">${f}</option>`).join("")}
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
    </div>`,l){const f=l,b=s=>document.getElementById(s);f.search&&b("search-players")&&(b("search-players").value=f.search),f.job&&b("filter-job")&&(b("filter-job").value=f.job),f.rarity&&b("filter-rarity")&&(b("filter-rarity").value=f.rarity),f.club&&b("filter-club")&&(b("filter-club").value=f.club),f.country&&b("filter-country")&&(b("filter-country").value=f.country)}if(l){const f=l,b=s=>document.getElementById(s);f.search&&b("search-players")&&(b("search-players").value=f.search),f.job&&b("filter-job")&&(b("filter-job").value=f.job),f.rarity&&b("filter-rarity")&&(b("filter-rarity").value=f.rarity),f.club&&b("filter-club")&&(b("filter-club").value=f.club),f.country&&b("filter-country")&&(b("filter-country").value=f.country)}function m(){const f=document.getElementById("search-players").value.toLowerCase(),b=document.getElementById("filter-job").value,s=document.getElementById("filter-rarity").value,g=document.getElementById("filter-club").value,d=document.getElementById("filter-country").value;return t.filter(y=>(!f||`${y.firstname} ${y.surname_real}`.toLowerCase().includes(f))&&(!b||y.job===b)&&(!s||y.rarity===s)&&(!g||y.club_id===g)&&(!d||y.country_code===d))}const p=new Set;function h(){const f=document.getElementById("bulk-bar"),b=document.getElementById("bulk-count");f&&(f.style.display=p.size>0?"flex":"none",b&&(b.textContent=`${p.size} joueur(s) sélectionné(s)`))}function o(){const f=m();document.getElementById("count-label").textContent=`${f.length} joueur(s)`;const b=document.getElementById("players-list");if(!f.length){b.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}b.innerHTML=f.map(s=>{const g={...s,clubs:s.clubs,face:s.face||null},d=he(g,{width:120});return`<div style="position:relative;cursor:pointer" data-edit="${s.id}">
        ${d}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${s.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),b.querySelectorAll("[data-edit]").forEach(s=>{s.addEventListener("click",()=>{const g=t.find(d=>d.id===s.dataset.edit);g&&ze(g,n,e,i)})}),b.querySelectorAll(".btn-del-player").forEach(s=>{s.addEventListener("click",async g=>{if(g.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:d}=await w.from("players").delete().eq("id",s.dataset.del);d?a(d.message,"error"):(a("Joueur supprimé ✅","success"),le(e,i))})})}o(),document.getElementById("search-players").addEventListener("input",o),document.getElementById("filter-job").addEventListener("change",o),document.getElementById("filter-rarity").addEventListener("change",o),document.getElementById("filter-club").addEventListener("change",o),document.getElementById("filter-country").addEventListener("change",o),(u=document.getElementById("bulk-cancel-btn"))==null||u.addEventListener("click",()=>{p.clear(),h(),o()}),(r=document.getElementById("bulk-delete-btn"))==null||r.addEventListener("click",async()=>{var g,d,y,I,$;if(!p.size||!confirm(`Supprimer ${p.size} joueur(s) ?`))return;const f=[...p],{error:b}=await w.from("players").delete().in("id",f);if(b){a(b.message,"error");return}a(`${f.length} joueur(s) supprimé(s) ✅`,"success"),p.clear();const s={search:((g=document.getElementById("search-players"))==null?void 0:g.value)||"",job:((d=document.getElementById("filter-job"))==null?void 0:d.value)||"",rarity:((y=document.getElementById("filter-rarity"))==null?void 0:y.value)||"",club:((I=document.getElementById("filter-club"))==null?void 0:I.value)||"",country:(($=document.getElementById("filter-country"))==null?void 0:$.value)||""};le(e,i,s)}),document.getElementById("add-player-btn").addEventListener("click",()=>ze(null,n,e,i)),document.getElementById("fix-old-faces-btn").addEventListener("click",()=>jt(e,i))}async function ze(e,t,n,i){const{toast:l,openModal:a,closeModal:m}=i,p=!!e,h=await Dt(),{data:o}=await w.from("players").select("face").not("face","is",null),u=new Set((o||[]).map(s=>s.face).filter(Boolean));e!=null&&e.face&&u.delete(e.face);const r='<option value="">— Club —</option>'+t.map(s=>`<option value="${s.id}" ${(e==null?void 0:e.club_id)===s.id?"selected":""}>${s.encoded_name}</option>`).join(""),f=e!=null&&e.face?e.face.split("/")[0]:"",b=Object.keys(h).map(s=>`<option value="${s}" ${f===s?"selected":""}>${s}</option>`).join("");a(p?`✏️ ${e.firstname} ${e.surname_real}`:"➕ Nouveau joueur",`<div style="display:flex;gap:20px;align-items:flex-start">

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
              ${["normal","pepite","papyte","legende"].map(s=>`<option value="${s}" ${(e==null?void 0:e.rarity)===s?"selected":""}>${Qe[s]}</option>`).join("")}
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
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([s,g,d])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${Rt[s]};font-weight:700">${s}</label>
                <input id="${g}" type="number" min="0" max="20" value="${(e==null?void 0:e[d])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
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
                ${b}
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
    </div>`),setTimeout(()=>{var $,E,v;let s=(e==null?void 0:e.face)||null;function g(){var J,j,W,Z,Q,X,ee,Le,Ae,Se,Ce;const c=document.getElementById("card-preview");if(!c)return;const x=((J=document.getElementById("pm-fn"))==null?void 0:J.value)||"",_=(((j=document.getElementById("pm-real"))==null?void 0:j.value)||"").toUpperCase(),k=((W=document.getElementById("pm-job"))==null?void 0:W.value)||"ATT",B=((Z=document.getElementById("pm-job2"))==null?void 0:Z.value)||null,L=((Q=document.getElementById("pm-rarity"))==null?void 0:Q.value)||"normal",A=((X=document.getElementById("pm-country"))==null?void 0:X.value)||"FR",S=((ee=document.getElementById("pm-club"))==null?void 0:ee.value)||null,C=document.getElementById("pm-club"),M=C==null?void 0:C.options[C.selectedIndex];(M==null?void 0:M.text)!=="— Club —"&&(M==null||M.text);const F=parseInt((Le=document.getElementById("pm-g"))==null?void 0:Le.value)||0,O=parseInt((Ae=document.getElementById("pm-d"))==null?void 0:Ae.value)||0,U=parseInt((Se=document.getElementById("pm-m"))==null?void 0:Se.value)||0,P=parseInt((Ce=document.getElementById("pm-a"))==null?void 0:Ce.value)||0,D=t.find(yt=>yt.id===S),ne={firstname:x||"Prénom",surname_real:_||"NOM",job:k,job2:B||null,rarity:L,country_code:A,club_id:S,note_g:F,note_d:O,note_m:U,note_a:P,face:s||null,clubs:D?{encoded_name:D.encoded_name,logo_url:D.logo_url}:null};c.innerHTML=he(ne,{width:160});const T=document.getElementById("pm-minmax");T&&(T.style.display=["pepite","papyte"].includes(L)?"grid":"none")}function d(c){const x=document.getElementById("faces-grid"),_=document.getElementById("pm-face");if(!x||!_)return;const k=h[c]||[];if(console.log("[players] loadFacesGrid folder=",c,"files=",k.length,k.slice(0,5)),!k.length){_.innerHTML='<option value="">— Aucun visage disponible —</option>',x.innerHTML=`<p style="font-size:11px;color:#888;font-style:italic">Aucune image dans le dossier "${c}" du bucket Supabase.</p>`;return}const B=k.filter(L=>{const A=c+"/"+L;return A===s||!u.has(A)});_.innerHTML='<option value="">— Choisir un visage —</option>'+B.map(L=>{const A=c+"/"+L;return`<option value="${A}" ${s===A?"selected":""}>${L}</option>`}).join(""),x.innerHTML=B.map(L=>{const A=c+"/"+L,S=s===A,C=xt({face:A});return`<div data-face="${A}" style="cursor:pointer;border:2px solid ${S?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${C}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),x.querySelectorAll("[data-face]").forEach(L=>{L.addEventListener("click",()=>{s=L.dataset.face;const A=document.getElementById("pm-face");A&&(A.value=s),x.querySelectorAll("[data-face]").forEach(S=>{S.style.border=`2px solid ${S.dataset.face===s?"#4fc3f7":"transparent"}`}),g()})})}const y=e!=null&&e.face?e.face.split("/")[0]:"";y&&h[y]&&(document.getElementById("pm-folder").value=y,d(y)),($=document.getElementById("pm-folder"))==null||$.addEventListener("change",c=>{d(c.target.value)}),(E=document.getElementById("pm-face"))==null||E.addEventListener("change",c=>{s=c.target.value||null,g()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach(c=>{var x,_;(x=document.getElementById(c))==null||x.addEventListener("input",g),(_=document.getElementById(c))==null||_.addEventListener("change",g)}),(v=document.getElementById("pm-save"))==null||v.addEventListener("click",()=>Ot(e,p,s,n,i)),g()},50)}function Ft(e){const t=n=>{var i;return(i=document.getElementById(n))==null?void 0:i.value};return{firstname:(t("pm-fn")||"").trim(),surname_real:(t("pm-real")||"").trim()||"JOUEUR",country_code:t("pm-country")||"FR",club_id:t("pm-club")||null,job:t("pm-job")||"ATT",job2:t("pm-job2")||null,rarity:t("pm-rarity")||"normal",note_g:parseInt(t("pm-g"))||0,note_d:parseInt(t("pm-d"))||0,note_m:parseInt(t("pm-m"))||0,note_a:parseInt(t("pm-a"))||0,note_min:parseInt(t("pm-nmin"))||null,note_max:parseInt(t("pm-nmax"))||null,sell_price:parseInt(t("pm-price"))||0,face:e||null,ethnie:t("pm-folder")||null,is_active:!0}}async function Ot(e,t,n,i,l){var b,s,g,d,y;const{toast:a,closeModal:m}=l,p=document.getElementById("pm-error"),h=document.getElementById("pm-save"),o=Ft(n);if(!o.firstname){p.textContent="Le prénom est requis.";return}if(!o.surname_real){p.textContent="Le nom est requis.";return}h.disabled=!0,h.textContent="Enregistrement…";const u=o,{error:r}=t?await w.from("players").update({...u,updated_at:new Date().toISOString()}).eq("id",e.id):await w.from("players").insert(u);if(r){p.textContent=r.message,h.disabled=!1,h.textContent=t?"💾 Enregistrer":"✅ Créer le joueur";return}a(t?"Joueur modifié ✅":"Joueur créé ✅","success"),m();const f={search:((b=document.getElementById("search-players"))==null?void 0:b.value)||"",job:((s=document.getElementById("filter-job"))==null?void 0:s.value)||"",rarity:((g=document.getElementById("filter-rarity"))==null?void 0:g.value)||"",club:((d=document.getElementById("filter-club"))==null?void 0:d.value)||"",country:((y=document.getElementById("filter-country"))==null?void 0:y.value)||""};le(i,l,f)}const Ut={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},Xe=["rase","court","milong","long"];function Gt(e){const t=we(e);if(t==="noir")return"noir";if(t==="typ")return Math.random()<.9?"noir":"marron";if(t==="metisse")return Math.random()<.6?"noir":"marron";const n=Math.random();return n<.35?"blond":n<.75?"marron":"noir"}function Ht(e){return Math.random()<.05?"chauve":Gt(e)}const _e=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function we(e){return Ut[e]||"blanc"}function et(e){return Ht(e)}function fe(e,t){return Math.floor(Math.random()*(t-e+1))+e}function q(e){return e[Math.floor(Math.random()*e.length)]}function tt(e){const t=_e.filter(n=>n!==e);return q(t)}function ye(e){const t=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","GR","RO","BG","UA","RU"],n=["MA","DZ","TN","EG","LY"],i=["NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","TZ","UG","ET"],l=["JP","KR","CN","VN","TH","ID","PH","IN","PK","BD","SA","AE","IR"];return t.includes(e)||["AR","UY","CL","PE","EC","CO","MX","BR"].includes(e)?"Europeans":n.includes(e)?"North Africans":i.includes(e)?"Africans":l.includes(e)?"Asians":"Europeans"}const qt=[{min:1,max:4,pct:55},{min:5,max:10,pct:20},{min:11,max:14,pct:10},{min:15,max:17,pct:10},{min:18,max:20,pct:5}];function nt(){const e=Math.random()*100;let t=0;for(const n of qt)if(t+=n.pct,e<t)return fe(n.min,n.max);return fe(1,4)}function Kt(){const e=Array.from({length:20},(t,n)=>n);return e.sort(()=>Math.random()-.5),new Set(e.slice(0,10))}let oe=null;function Jt(e,t){return e&&(oe||(oe=Kt()),oe.has(t))?fe(15,20):nt()}const se={FR:{first:["Lucas","Tom","Hugo","Théo","Antoine","Kylian","Rayan","Axel","Paul","Enzo","Léo","Mathis","Nathan","Alexis","Ethan","Maxime","Julien","Baptiste","Nicolas","Pierre","Clément","Adrien","Valentin","Dylan","Loïc","Quentin","Florian","Kevin","Corentin","Raphaël"],last:["Martin","Bernard","Petit","Dupont","Moreau","Laurent","Robert","Michel","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard","Bonnet","Rousseau","Fontaine","Chevalier","Blanc","Garnier","Boyer","Gauthier","Garcia","Perrin","Robin","Clément","Morin","Nicolas","Henry","Lemaire","Noël","Dufour","Meunier","Brun","Blanchard","Giraud","Joly","Rivière","Brunet"]},ES:{first:["Carlos","Miguel","Javier","Alejandro","Sergio","David","Diego","Pablo","Álvaro","Marcos","Adrián","Rubén","Iker","Raúl","Fernando","Roberto","Víctor","Iván","Gonzalo","Antonio","Manuel","Jesús","Josué","Rodrigo","Cristian","Héctor","Óscar","Mario","Daniel","Jorge"],last:["García","Rodríguez","Martínez","López","Sánchez","González","Pérez","Hernández","Jiménez","Díaz","Torres","Ramírez","Flores","Rivera","Gómez","Morales","Álvarez","Romero","Herrera","Medina","Aguilar","Vargas","Guzmán","Muñoz","Salazar","Soto","Contreras","Rojas","Ramos","Ortiz"]},PT:{first:["João","Pedro","Diogo","Rúben","Bruno","Tiago","André","Ricardo","Luís","Gonçalo","Nuno","Mário","Fábio","Rui","Miguel","Sérgio","Hugo","Filipe","Paulo","Vítor"],last:["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Carvalho","Gomes","Ribeiro","Araújo","Barbosa","Cardoso","Correia","Teixeira","Machado","Vieira","Monteiro","Cunha","Pinto","Melo","Barros","Freitas","Fonseca","Andrade","Castro","Neves","Figueiredo","Duarte"]},BR:{first:["Gabriel","Lucas","Mateus","Gustavo","Felipe","Rodrigo","Thiago","Rafael","Bruno","Diego","Leonardo","Eduardo","Victor","Pedro","Carlos","Alexandre","André","Paulo","Danilo","Marcelo"],last:["Silva","Santos","Oliveira","Souza","Lima","Ferreira","Costa","Nascimento","Alves","Pereira","Rodrigues","Almeida","Nunes","Melo","Barbosa","Rocha","Brito","Castro","Carvalho","Gomes","Lopes","Ramos","Mendes","Cavalcanti","Batista","Azevedo","Campos","Freitas","Reis","Andrade"]},AR:{first:["Lionel","Sergio","Rodrigo","Nicolás","Ezequiel","Gonzalo","Federico","Mauro","Pablo","Diego","Lucas","Matías","Alejandro","Maximiliano","Emiliano","Marcos","Lautaro","Ángel","Leandro","Julián"],last:["González","Rodríguez","Martínez","García","López","Pérez","Sánchez","Romero","Torres","Flores","Díaz","Gómez","Alvarez","Ruiz","Castro","Herrera","Cabrera","Medina","Ferreyra","Suárez"]},IT:{first:["Marco","Luca","Alessandro","Matteo","Davide","Andrea","Francesco","Federico","Lorenzo","Riccardo","Stefano","Simone","Roberto","Nicola","Giovanni","Antonio","Emanuele","Daniele","Alberto","Giorgio"],last:["Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Ricci","Marino","Greco","Bruno","Gallo","Conti","De Luca","Mancini","Giordano","Rizzo","Lombardi","Moretti","Fontana","Rinaldi"]},DE:{first:["Lukas","Max","Jonas","Florian","Tobias","Stefan","Markus","Sebastian","Niklas","Leon","Tim","Felix","Alexander","Philipp","Christian","Thomas","Michael","Jan","Moritz","Fabian"],last:["Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Wolf","Schröder","Neumann","Schwarz","Zimmermann","Braun","Krüger","Hofmann","Wagner","Becker","Koch","Lehmann","Kaiser"]},GB:{first:["James","Harry","Oliver","Jack","George","Charlie","William","Thomas","Alfie","Edward","Ryan","Liam","Noah","Ethan","Kyle","Jordan","Callum","Aaron","Declan","Connor"],last:["Smith","Jones","Williams","Brown","Taylor","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Walker","Wright","Robinson","White","Thompson","Hughes","Edwards","Green","Hall"]},MA:{first:["Yassine","Karim","Mehdi","Amine","Hamza","Bilal","Soufiane","Rachid","Omar","Mohammed","Zakaria","Ilyas","Ayoub","Saad","Khalid","Adil","Tarik","Hicham","Reda","Nabil"],last:["Benali","Amrani","Bouazza","Cherif","Haddad","Meziane","Belkacem","Rahmani","Saidi","Zidane","Belhadj","Tazi","Idrissi","Alaoui","Bennani","Fassi","Lahlou","Naciri","Tahiri","Zniber"]},DZ:{first:["Yacine","Riyad","Sofiane","Haris","Adem","Islam","Bilal","Omar","Nassim","Mehdi","Ryad","Zinedine","Youssef","Farid","Karim","Mourad","Walid","Anes","Ferhat","Djamel"],last:["Amrouche","Boudiaf","Cherki","Guessab","Hamdi","Jaber","Lakhal","Mahjoub","Rezki","Sahnoun","Talbi","Zerrouki","Achour","Bakri","Chaouch","Djaballah","Ferhat","Gacem","Khaldi","Larbi"]},SN:{first:["Sadio","Ismaïla","Cheikhou","Gana","Famara","Mbaye","Pape","Aliou","Moussa","Sidy","Idrissa","Lamine","Bamba","Fallou","Abdou","Diallo","Mamadou","Souleymane","Oumar","Cheikh"],last:["Diallo","Traoré","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Ndiaye","Sow","Cissé","Fofana","Keita","Sylla","Kane","Diarra","Sanogo","Baldé","Kouyaté"]},CI:{first:["Didier","Wilfried","Serge","Jonathan","Franck","Maxwel","Salomon","Gervinho","Nicolas","Maxime","Ismael","Romaric","Abdul","Cheick","Arouna","Kolo","Yaya","Geoffroy","Siaka","Adama"],last:["Drogba","Zaha","Gnagnon","Koné","Touré","Bamba","Diomandé","Konaté","Coulibaly","Fofana","Traoré","Doumbia","Sanogo","Diabaté","Kalou","Bakayoko","Gradel","Seri","Aurier","Haller"]},CM:{first:["Samuel","Alex","Karl","Fabrice","Cédric","Nicolas","Georges","André","Joël","Roger","François","Jean","Patrick","Thierry","Eric","Benjamin","Aristide","Clinton","Clinton","Stéphane"],last:["Eto'o","Song","Choupo-Moting","Aboubakar","Bassogog","Kunde","Toko","Nkoudou","Ngadeu","Oyongo","Fai","Zambo","Mokoena","Ekambi","Tchamba","Mbida","Biya","Kameni","Meyong","Webo"]},NG:{first:["Kelechi","Ahmed","Victor","John","Emmanuel","Samuel","Moses","Ola","Chukwuemeka","Odion","Sunday","Chidi","Nnamdi","Chisom","Tunde","Emeka","Obinna","Uchenna","Ifeanyi","Segun"],last:["Osimhen","Iheanacho","Musa","Onyekuru","Iwobi","Ndidi","Nwankwo","Obi","Mikel","Martins","Okocha","Yekini","Amunike","Babangida","Fash","Lawal","Onuoha","Taiwo","Ayodele","Ameobi"]},JP:{first:["Ryota","Kenji","Hiroshi","Takumi","Yuto","Daichi","Shinji","Makoto","Koji","Naoki","Yuya","Shoya","Ryo","Shu","Atsuto","Masato","Hotaru","Genki","Ko","Ritsu"],last:["Nakamura","Tanaka","Suzuki","Sato","Yamamoto","Watanabe","Ito","Yamada","Saito","Matsumoto","Inoue","Kimura","Hayashi","Shimizu","Yamazaki","Mori","Abe","Ikeda","Kato","Honda"]},KR:{first:["Heung","Son","Ji","Sung","Jae","Young","Kang","Hyun","Woo","Tae","Seung","Min","Jun","Dong","Chang","Sang","Yo","Hee","Jin","Bum"],last:["Kim","Park","Lee","Choi","Jung","Kang","Cho","Yoon","Lim","Oh","Han","Seo","Kwon","Hwang","Ahn","Yang","Shin","Yoo","Jang","Song"]},MX:{first:["Carlos","Hirving","Andrés","Javier","Miguel","Raúl","Héctor","Diego","Jorge","Luis","Rodolfo","Erick","Jonathan","Néstor","Tecatito","Chicharito","Oswaldo","Oribe","Uriel","Giovanni"],last:["Hernández","Lozano","Guardado","Vela","Morales","Jiménez","Reyes","Corona","Herrera","Rodríguez","Ochoa","Chicharito","Flores","Domínguez","Araujo","Álvarez","Pineda","Sánchez","Antuna","Meza"]},_DEFAULT_EUROPE:{first:["Stefan","Ivan","Luca","Marco","Andrei","Cristian","Bogdan","Mircea","Adrian","Florin","Dušan","Aleksandar","Nikola","Nemanja","Marko","Filip","Milan","Branislav","Radomir","Dejan"],last:["Popescu","Ionescu","Stan","Marin","Stoica","Popa","Radu","Constantin","Barbu","Dobre","Petrović","Marković","Nikolić","Jovanović","Popović","Stanković","Đorđević","Lukić","Simić","Ilić"]},_DEFAULT_AFRIQUE:{first:["Mamadou","Ibrahima","Moussa","Seydou","Boubacar","Oumar","Modibo","Adama","Bakary","Abdoulaye","Lamine","Ousmane","Sekou","Demba","Tidiane","Amadou","Issiaka","Siaka","Fode","Samba"],last:["Diallo","Traoré","Coulibaly","Koné","Doumbia","Kouyaté","Bah","Konaté","Touré","Camara","Sylla","Keita","Diakité","Sangaré","Sanou","Sidibé","Bathily","Niakaté","Dioumassi","Sissoko"]},_DEFAULT_ASIE:{first:["Wei","Ming","Jae","Van","Duc","Sorn","Ali","Hassan","Reza","Arman","Yusuf","Tariq","Faris","Khalid","Saad","Rashid","Nasser","Walid","Ziad","Adel"],last:["Zhang","Wang","Liu","Chen","Yang","Huang","Zhou","Wu","Xu","Sun","Al-Rashidi","Al-Dosari","Al-Harthi","Al-Balushi","Al-Farsi","Al-Shamsi","Al-Neyadi","Al-Breiki","Al-Hammadi","Al-Mansouri"]},_DEFAULT_AMERIQUE:{first:["James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Marcus","Jordan","Andre","Devonte","Malik","Tyrone","Jamal","Darius","DeShawn","Brandon","Cody"],last:["Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Taylor","Anderson","Jackson","White","Harris","Clark","Lewis","Walker","Hall","Allen","Young","King"]}},Vt={FR:"FR",BE:"FR",CH:"FR",MC:"FR",LU:"FR",ES:"ES",MX:"MX",CO:"ES",VE:"ES",PE:"ES",CL:"ES",EC:"ES",UY:"ES",PY:"ES",BO:"ES",CR:"ES",PA:"ES",HN:"ES",GT:"ES",SV:"ES",NI:"ES",DO:"ES",CU:"ES",PT:"PT",AO:"PT",MZ:"PT",CV:"PT",BR:"BR",AR:"AR",IT:"IT",SM:"IT",DE:"DE",AT:"DE",GB:"GB",IE:"GB",AU:"GB",NZ:"GB",CA:"GB",MA:"MA",TN:"DZ",LY:"DZ",DZ:"DZ",SN:"SN",ML:"SN",GN:"SN",GW:"SN",GM:"SN",MR:"SN",CI:"CI",BF:"CI",TG:"CI",BJ:"CI",GH:"CI",CM:"CM",GA:"CM",CG:"CM",CD:"CM",NG:"NG",JP:"JP",KR:"KR",MX:"MX",PL:"_DEFAULT_EUROPE",CZ:"_DEFAULT_EUROPE",SK:"_DEFAULT_EUROPE",HU:"_DEFAULT_EUROPE",HR:"_DEFAULT_EUROPE",RS:"_DEFAULT_EUROPE",SI:"_DEFAULT_EUROPE",RO:"_DEFAULT_EUROPE",BG:"_DEFAULT_EUROPE",GR:"_DEFAULT_EUROPE",TR:"_DEFAULT_EUROPE",RU:"_DEFAULT_EUROPE",UA:"_DEFAULT_EUROPE",NL:"_DEFAULT_EUROPE",DK:"_DEFAULT_EUROPE",SE:"_DEFAULT_EUROPE",NO:"_DEFAULT_EUROPE",FI:"_DEFAULT_EUROPE",AL:"_DEFAULT_EUROPE",EG:"_DEFAULT_AFRIQUE",ZA:"_DEFAULT_AFRIQUE",KE:"_DEFAULT_AFRIQUE",ET:"_DEFAULT_AFRIQUE",TZ:"_DEFAULT_AFRIQUE",UG:"_DEFAULT_AFRIQUE",CN:"_DEFAULT_ASIE",VN:"_DEFAULT_ASIE",TH:"_DEFAULT_ASIE",ID:"_DEFAULT_ASIE",PH:"_DEFAULT_ASIE",IN:"_DEFAULT_ASIE",PK:"_DEFAULT_ASIE",BD:"_DEFAULT_ASIE",IR:"_DEFAULT_ASIE",SA:"_DEFAULT_ASIE",AE:"_DEFAULT_ASIE",QA:"_DEFAULT_ASIE",KW:"_DEFAULT_ASIE",IQ:"_DEFAULT_ASIE",SY:"_DEFAULT_ASIE",JO:"_DEFAULT_ASIE",US:"_DEFAULT_AMERIQUE"};function it(e){return Vt[e]||"_DEFAULT_EUROPE"}function ot(e){const t=it(e),n=(se[t]||se._DEFAULT_EUROPE).first;return q(n)}function at(e){const t=it(e);return(se[t]||se._DEFAULT_EUROPE).last}function Yt(e,t,n=new Set,i=!1){const l=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],a=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],m=new Set(a.sort(()=>Math.random()-.5).slice(0,4)),p=[...a].sort(()=>Math.random()-.5),h=new Set(p.slice(0,2)),o=new Set(p.slice(2,4)),u=10,r=l.map((s,g)=>g<u);for(let s=r.length-1;s>0;s--){const g=Math.floor(Math.random()*(s+1));[r[s],r[g]]=[r[g],r[s]]}const f=new Set;function b(s){const g=at(s),d=g.filter(E=>!f.has(E)&&!n.has(E)),y=d.length?d:g.filter(E=>!f.has(E)),I=y.length?y:g,$=q(I);return f.add($),$}return l.map((s,g)=>{const d=r[g]?t:tt(t),y=we(d),I=et(d),$=q(Xe),E=Jt(i,g),v=m.has(g),c=v?Math.max(0,E-2):0;let x=0,_=0,k=0,B=0,L=null;s==="GK"?x=E:s==="DEF"?(_=E,v&&(k=c,L="MIL")):s==="ATT"?(B=E,v&&(k=c,L="MIL")):(k=E,v&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(_=c,L="DEF"):(B=c,L="ATT")));const A=h.has(g)?"pepite":o.has(g)?"papyte":"normal",S=b(d);return{job:s,job2:L,firstname:ot(d),surname_real:S,country_code:d,club_id:e,note_g:x,note_d:_,note_m:k,note_a:B,skin:y,hair:I,hair_length:$,rarity:A,sell_price:0,ethnie:ye(d),_ethnie:ye(d)}})}async function rt(e,t,n,i=!1){oe=null;const{data:l}=await w.from("players").select("surname_real").not("surname_real","is",null),a=new Set((l||[]).map(s=>s.surname_real).filter(Boolean)),m=Yt(e,t,a,i),{data:p}=await w.from("players").select("face").not("face","is",null),h=new Set((p||[]).map(s=>s.face).filter(Boolean)),o=new Set;for(const s of m){const g=await Ee(s.country_code,new Set([...h,...o]));g&&(s.face=g,o.add(g)),delete s._ethnie}const{data:u,error:r}=await w.from("players").insert(m).select("id");if(r){console.error("[GenSquad] Erreur batch insert:",r.message,r.details),n("Erreur: "+r.message,"error");return}const f=(u||[]).map(s=>({card_type:"player",player_id:s.id}));if(f.length){const{error:s}=await w.from("cards").insert(f);s&&console.warn("[GenSquad] Erreur cartes:",s.message)}const b=(u==null?void 0:u.length)||0;console.log("[GenSquad] Créés:",b,"/",m.length),b>0?n(`${b} joueurs générés ✅`,"success"):n("Erreur génération joueurs","error")}function lt(e){return{style:e.kit_style||z.style,color1:e.kit_color1||z.color1,color2:e.kit_color2||z.color2,color3:e.kit_color3||z.color3,shorts:e.kit_shorts||z.shorts,socks:e.kit_socks||z.socks}}let ae=[];async function Wt(e,t){await ue(e,t)}async function ue(e,t){const[{data:n,error:i},{data:l}]=await Promise.all([w.from("clubs").select("*").order("real_name"),w.from("players").select("club_id")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}ae=n||[];const a={};(l||[]).forEach(m=>{a[m.club_id]=(a[m.club_id]||0)+1}),Zt(e,t,a)}function Zt(e,t,n={}){const{toast:i,openModal:l,closeModal:a}=t;e.innerHTML=`
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
    </div>`,m(ae),document.getElementById("search-clubs").addEventListener("input",p=>{const h=p.target.value.toLowerCase();m(ae.filter(o=>o.real_name.toLowerCase().includes(h)||o.encoded_name.toLowerCase().includes(h)))}),document.getElementById("add-club-btn").addEventListener("click",()=>Re(null,e,t));function m(p){const h=document.getElementById("clubs-list");if(!p.length){h.innerHTML='<p style="color:var(--tile-fg-dim);padding:20px;text-align:center">Aucun club.</p>';return}h.innerHTML=p.map(o=>{const u=lt(o),r=o.logo_url?`<img src="${o.logo_url}" style="width:36px;height:36px;object-fit:contain;border-radius:8px;flex-shrink:0">`:`<div style="width:36px;height:36px;background:linear-gradient(135deg,${u.color1},${u.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:900;flex-shrink:0">${o.encoded_name.slice(0,3)}</div>`,f=n[o.id]||0;return`
        <div class="club-row" data-club-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:10px;cursor:pointer;background:var(--tile-bg);border:1px solid var(--tile-border);transition:background .15s">
          ${r}
          <img src="https://flagsapi.com/${o.country_code}/flat/24.png" style="width:18px;height:13px;object-fit:cover;border-radius:2px;flex-shrink:0" onerror="this.style.display='none'">
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:12px;color:var(--tile-fg-on-page);font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o.encoded_name}</div>
            <div style="font-size:10px;color:${f===0?"#e67e22":"var(--tile-fg-dim)"}">${f===0?"⚠️ 0 joueur":`👥 ${f}`}</div>
          </div>
          <button class="btn-del-club" data-del="${o.id}"
            style="width:22px;height:22px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;flex-shrink:0"
            onclick="event.stopPropagation()">✕</button>
        </div>`}).join(""),h.querySelectorAll(".club-row").forEach(o=>{o.addEventListener("click",()=>{const u=ae.find(r=>r.id===o.dataset.clubId);u&&Re(u,e,t),h.querySelectorAll(".club-row").forEach(r=>r.style.background="var(--tile-bg)"),o.style.background="rgba(26,107,60,0.18)"})}),h.querySelectorAll(".btn-del-club").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:u}=await w.from("clubs").delete().eq("id",o.dataset.del);u?i(u.message,"error"):(i("Club supprimé","success"),ue(e,t))})})}}async function Re(e,t,n){var d,y,I,$,E,v;const{toast:i}=n,l=!!e,a=e?lt(e):{...z},m=document.getElementById("club-panel");if(!m)return;const p=Object.entries(Te).map(([c,x])=>`<option value="${c}" ${a.style===c?"selected":""}>${x.label}</option>`).join(""),h=_e.map(c=>`<option value="${c}" ${((e==null?void 0:e.country_code)||"FR")===c?"selected":""}>${c}</option>`).join("");m.style.display="block",m.style.alignItems="",m.style.justifyContent="",m.innerHTML=`
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
            ${[["Couleur 1","m-kit-color1",a.color1,!1],["Couleur 2","m-kit-color2",a.color2,!1],["Couleur 3","m-kit-color3",a.color3,!0],["Short","m-kit-shorts",a.shorts,!1],["Chaussettes","m-kit-socks",a.socks,!1]].map(([c,x,_,k])=>`
              <div class="form-group" id="wrap-${x}" ${k?'style="display:none"':""}>
                <label>${c}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${x}" value="${_||"#000000"}" style="width:38px;height:32px;padding:2px;border:1px solid var(--tile-border);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${x}-txt" value="${_||"#000000"}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
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
  `,(d=document.getElementById("m-logo-file"))==null||d.addEventListener("change",c=>{var k;const x=(k=c.target.files)==null?void 0:k[0];if(!x)return;const _=new FileReader;_.onload=()=>{document.getElementById("logo-preview").innerHTML=`<img src="${_.result}" style="width:100%;height:100%;object-fit:contain">`},_.readAsDataURL(x)}),te();function o(){var k,B;const c=((k=document.getElementById("m-kit-style"))==null?void 0:k.value)||"uni",x=((B=Te[c])==null?void 0:B.colors)===3,_=document.getElementById("wrap-m-kit-color3");_&&(_.style.display=x?"":"none")}o(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(c=>{const x=document.getElementById(c),_=document.getElementById(c+"-txt");!x||!_||(x.addEventListener("input",()=>{_.value=x.value,te()}),_.addEventListener("input",()=>{const k=_.value.trim();/^#[0-9a-fA-F]{6}$/.test(k)&&(x.value=k,te())}),_.addEventListener("change",()=>{let k=_.value.trim();k.startsWith("#")||(k="#"+k),/^#[0-9a-fA-F]{6}$/.test(k)&&(x.value=k,_.value=k,te())}))}),(y=document.getElementById("m-kit-style"))==null||y.addEventListener("change",()=>{o(),te()});const u=document.getElementById("m-real"),r=document.getElementById("m-encoded");function f(){if(!u||!r||r.value)return;const c=u.value.trim().split(/\s+/),x=c.length===1?c[0].toUpperCase().slice(0,6):c.filter(_=>_.length>2).map(_=>_[0].toUpperCase()).join("")||c[0].toUpperCase().slice(0,4);r.value=x}u==null||u.addEventListener("input",f),(I=document.getElementById("auto-encode-btn"))==null||I.addEventListener("click",()=>{r&&(r.value=""),f()}),($=document.getElementById("m-save"))==null||$.addEventListener("click",()=>on(e,l,t,n));const b=document.getElementById("m-gen-squad"),s=document.getElementById("m-gen-strong-label");function g(){if(s&&(s.style.display=b!=null&&b.checked?"flex":"none",!(b!=null&&b.checked))){const c=document.getElementById("m-gen-strong");c&&(c.checked=!1)}}b==null||b.addEventListener("change",g),g(),(E=document.getElementById("btn-gen-squad-panel"))==null||E.addEventListener("click",()=>{Qt(e,n,t)}),(v=document.getElementById("btn-gen-one-player"))==null||v.addEventListener("click",()=>{en(e,n)}),l&&Ie(e.id)}async function Ie(e){const{data:t}=await w.from("players").select("*, clubs(encoded_name, logo_url, kit_style, kit_color1, kit_color2, kit_color3, kit_shorts, kit_socks)").eq("club_id",e).order("surname_real"),n=document.getElementById("club-players-grid"),i=document.getElementById("club-players-count");if(i&&(i.textContent=(t||[]).length),!!n){if(!(t!=null&&t.length)){n.innerHTML='<div style="color:var(--tile-fg-dim);padding:20px;font-size:13px">Aucun joueur dans ce club.</div>';return}n.innerHTML=t.map(l=>he(l,{width:100})).join("")}}function Qt(e,t,n){const{openModal:i,closeModal:l,toast:a}=t;i(`⚽ Générer — ${e.real_name}`,`<div style="display:flex;flex-direction:column;gap:14px">
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
    </div>`),setTimeout(()=>{var m,p;(m=document.getElementById("qg-cancel"))==null||m.addEventListener("click",()=>l()),(p=document.getElementById("qg-ok"))==null||p.addEventListener("click",async()=>{var o;const h=((o=document.getElementById("qg-strong"))==null?void 0:o.checked)??!1;l(),a("Génération en cours…","info"),await rt(e.id,e.country_code,a,h),a("Effectif généré ✅","success"),Ie(e.id),ue(n,t)})},50)}const st=["GK","DEF","MIL","ATT"],Xt=[{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}];function en(e,t){const{openModal:n,closeModal:i,toast:l}=t,a=_e.map(o=>`<option value="${o}">${o}</option>`).join(""),m=o=>st.map(u=>`<option value="${u}" ${u===o?"selected":""}>${u}</option>`).join(""),p=`
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
              ${Xt.map(o=>`<option value="${o.value}">${o.label}</option>`).join("")}
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
  `),setTimeout(()=>{var o,u;document.querySelectorAll('input[name="gen-one-mode"]').forEach(r=>{r.addEventListener("change",()=>{document.getElementById("gen-one-custom-fields").style.display=r.value==="custom"&&r.checked?"flex":"none"})}),(o=document.getElementById("gen-one-cancel"))==null||o.addEventListener("click",()=>i()),(u=document.getElementById("gen-one-ok"))==null||u.addEventListener("click",async()=>{var s,g,d,y,I;const r=((s=document.querySelector('input[name="gen-one-mode"]:checked'))==null?void 0:s.value)||"random",f=document.getElementById("gen-one-ok");f.disabled=!0,f.textContent="⏳ Génération…";const b={};r==="custom"&&(b.job=((g=document.getElementById("gen-one-job1"))==null?void 0:g.value)||null,b.job2=((d=document.getElementById("gen-one-job2"))==null?void 0:d.value)||null,b.rarity=((y=document.getElementById("gen-one-rarity"))==null?void 0:y.value)||null,b.country=((I=document.getElementById("gen-one-country"))==null?void 0:I.value)||null);try{await tn(e,b),l("Joueur généré ✅","success"),i(),Ie(e.id)}catch($){l("Erreur : "+$.message,"error"),f.disabled=!1,f.textContent="➕ Générer"}})},50)}async function tn(e,t={}){const n=t.country||(Math.random()<.5?e.country_code:tt(e.country_code)),i=t.job||q(st),l=t.job2||null,a=t.rarity||(()=>{const L=Math.random()*100;return L<1.5?"legende":L<3?"pepite":L<4.5?"papyte":"normal"})(),m=nt(),p=l?Math.max(0,m-2):0;let h=0,o=0,u=0,r=0;i==="GK"&&(h=m),i==="DEF"&&(o=m),i==="MIL"&&(u=m),i==="ATT"&&(r=m),l==="GK"&&(h=p),l==="DEF"&&(o=p),l==="MIL"&&(u=p),l==="ATT"&&(r=p);const f=we(n),b=et(n),s=q(Xe),{data:g}=await w.from("players").select("surname_real").not("surname_real","is",null),d=new Set((g||[]).map(L=>L.surname_real).filter(Boolean)),y=at(n),I=y.filter(L=>!d.has(L)),$=q(I.length?I:y),E={job:i,job2:l,firstname:ot(n),surname_real:$,country_code:n,club_id:e.id,note_g:h,note_d:o,note_m:u,note_a:r,skin:f,hair:b,hair_length:s,rarity:a,sell_price:0,ethnie:ye(n)},{data:v}=await w.from("players").select("face").not("face","is",null),c=new Set((v||[]).map(L=>L.face).filter(Boolean)),x=await Ee(n,c);x&&(E.face=x);const{data:_,error:k}=await w.from("players").insert(E).select("id").single();if(k)throw k;const{error:B}=await w.from("cards").insert({card_type:"player",player_id:_.id});B&&console.warn("[GenOnePlayer] Erreur carte:",B.message)}function dt(){var e,t,n,i,l,a;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((t=document.getElementById("m-kit-color1"))==null?void 0:t.value)||"#1A6B3C",color2:((n=document.getElementById("m-kit-color2"))==null?void 0:n.value)||"#ffffff",color3:((i=document.getElementById("m-kit-color3"))==null?void 0:i.value)||"#000000",shorts:((l=document.getElementById("m-kit-shorts"))==null?void 0:l.value)||"#111111",socks:((a=document.getElementById("m-kit-socks"))==null?void 0:a.value)||"#ffffff"}}function te(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=ht(dt(),"panel"))}async function nn(e,t){const n=(e.name.split(".").pop()||"png").toLowerCase(),i=`clubs/${t||"new"}-${Date.now()}.${n}`,{error:l}=await w.storage.from("assets").upload(i,e,{upsert:!0,cacheControl:"3600"});if(l)throw l;const{data:a}=w.storage.from("assets").getPublicUrl(i);return a.publicUrl}async function on(e,t,n,i){var $,E,v,c,x,_,k,B,L;const{toast:l}=i,a=document.getElementById("m-error"),m=document.getElementById("m-save"),p=($=document.getElementById("m-real"))==null?void 0:$.value.trim(),h=(E=document.getElementById("m-encoded"))==null?void 0:E.value.trim().toUpperCase(),o=(v=document.getElementById("m-country"))==null?void 0:v.value.trim().toUpperCase(),u=((x=(c=document.getElementById("m-logo-file"))==null?void 0:c.files)==null?void 0:x[0])||null,r=((_=document.getElementById("m-logo-url-current"))==null?void 0:_.value)||null,f=((k=document.getElementById("m-gen-stadium"))==null?void 0:k.checked)??!1,b=((B=document.getElementById("m-gen-squad"))==null?void 0:B.checked)??!1,s=((L=document.getElementById("m-gen-strong"))==null?void 0:L.checked)??!1,g=dt();if(!p){a.textContent="Le nom du club est requis.";return}if(!h){a.textContent="Le nom encodé est requis.";return}if(!o){a.textContent="Le pays est requis.";return}m.disabled=!0,m.textContent="Enregistrement…";let d=r;if(u)try{m.textContent="📤 Envoi du logo…",d=await nn(u,e==null?void 0:e.id)}catch(A){a.textContent="Erreur upload logo : "+A.message,m.disabled=!1,m.textContent=t?"💾 Enregistrer":"✅ Créer le club";return}const y={real_name:p,encoded_name:h,country_code:o,logo_url:d,kit_style:g.style,kit_color1:g.color1,kit_color2:g.color2,kit_color3:g.color3,kit_shorts:g.shorts,kit_socks:g.socks};let I=e==null?void 0:e.id;if(t){const{error:A}=await w.from("clubs").update(y).eq("id",I);if(A){a.textContent=A.message,m.disabled=!1,m.textContent="💾 Enregistrer";return}}else{const{data:A,error:S}=await w.from("clubs").insert(y).select().single();if(S){a.textContent=S.message,m.disabled=!1,m.textContent="✅ Créer le club";return}if(I=A.id,f){m.textContent="🏟️ Création du stade…";const{data:C,error:M}=await w.from("stadium_definitions").insert({name:`Stade de ${p}`,club_id:I,country_code:o}).select().single();M?console.warn("[Stadium] Erreur def stade:",M.message):C&&await w.from("cards").insert({card_type:"stadium",stadium_id:C.id})}b&&(m.textContent="⚽ Génération des joueurs…",await rt(I,o,l,s))}l(t?"Club modifié ✅":"Club créé ✅","success"),ue(n,i)}const an=["normal","pepite","papyte","legende"],De=["GK","DEF","MIL","ATT"],rn=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let K={...R},re=[];async function ln(e,{toast:t}){const{data:n}=await w.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");re=n||[],K={...R},e.innerHTML=un(re),dn(e,re,t),N()}function je(){var n;const e=((n=document.getElementById("cb-surname-real"))==null?void 0:n.value)||"",t=document.getElementById("cb-surname-enc");t&&(t.value=ce(e))}function sn(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=re.find(i=>String(i.id)===String(e));return t?{style:t.kit_style||z.style,color1:t.kit_color1||z.color1,color2:t.kit_color2||z.color2,shorts:t.kit_shorts||z.shorts,socks:t.kit_socks||z.socks}:{...z}}function N(){var f,b,s,g;const e=d=>{var y;return((y=document.getElementById(d))==null?void 0:y.value)||""},t={firstname:e("cb-firstname"),surname_real:e("cb-surname-enc")||ce(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((b=(f=document.getElementById("cb-club"))==null?void 0:f.selectedOptions[0])==null?void 0:b.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=sn(),i=document.getElementById("cb-club"),l=((g=(s=i==null?void 0:i.selectedOptions[0])==null?void 0:s.dataset)==null?void 0:g.logo)||null,a=We(K,n,120),m=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(a)}`,p=It(t,{portraitUrl:m,clubLogoUrl:l,showNotes:!0}),h=document.getElementById("card-preview");h&&(h.innerHTML=p);const o=document.getElementById("avatar-preview-wrap");o&&(o.innerHTML=a);const u=e("cb-surname-real"),r=document.getElementById("encode-summary");r&&u&&(r.textContent=`${e("cb-firstname")} ${u} → ${e("cb-firstname")} ${t.surname_real}`)}function ct(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};K={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function dn(e,t,n){var l,a,m,p,h;e.querySelectorAll("input,select").forEach(o=>{o.addEventListener("input",N),o.addEventListener("change",N)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(o=>{var u;(u=document.getElementById(o))==null||u.addEventListener("change",()=>{ct(),N()})}),(l=document.getElementById("cb-surname-real"))==null||l.addEventListener("input",()=>{je(),N()}),(a=document.getElementById("btn-encode"))==null||a.addEventListener("click",()=>{je(),N()}),(m=document.getElementById("cb-club"))==null||m.addEventListener("change",N),(p=document.getElementById("btn-save-player"))==null||p.addEventListener("click",()=>cn(n)),(h=document.getElementById("btn-reset"))==null||h.addEventListener("click",()=>{e.querySelectorAll("input").forEach(o=>o.value=""),e.querySelectorAll("select").forEach(o=>o.selectedIndex=0),K={...R},i.forEach(o=>{const u=o.replace("av-",""),r=document.getElementById(o);r&&(r.value=R[u]||"")}),N()})}async function cn(e){const t=m=>{var p;return((p=document.getElementById(m))==null?void 0:p.value)||""},n=t("cb-surname-real").trim(),i=t("cb-surname-enc").trim()||ce(n);if(!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}ct();const l={firstname:t("cb-firstname").trim(),surname_real:n,surname_real:i,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:K,skin:K.skin||"blanc",hair:K.hairColor||"marron",hair_length:"court"},{error:a}=await w.from("players").insert(l);if(a){e("Erreur: "+a.message,"error");return}e(`✅ Joueur "${l.firstname} ${l.surname_real}" enregistré !`,"success")}function un(e){const t=rn.map(([o,u])=>`<option value="${o}">${u} (${o})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(o=>`<option value="${o.id}" data-logo="${o.logo_url||""}">${o.encoded_name}</option>`).join(""),i=De.map(o=>`<option value="${o}">${o}</option>`).join(""),l='<option value="">Aucun</option>'+De.map(o=>`<option value="${o}">${o}</option>`).join(""),a=an.map(o=>`<option value="${o}">${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join(""),m=(o,u,r)=>Object.entries(u).map(([f,b])=>`<option value="${f}" ${f===(r||"")?"selected":""}>${b.label}</option>`).join(""),p=Object.keys(Et).map(o=>`<option value="${o}" ${o===R.skin?"selected":""}>${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join(""),h=Object.keys(_t).map(o=>`<option value="${o}" ${o===R.hairColor?"selected":""}>${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join("");return`
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
          ${["normal","pepite","papyte","legende"].map(o=>`
            <div style="background:${wt[o]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
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
              <select id="av-eyebrows">${m("av-eyebrows",$t,R.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${m("av-eyes",Bt,R.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${m("av-nose",Lt,R.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${m("av-mouth",At,R.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${m("av-beard",St,R.beard)}</select>
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
  `}async function ut(e,{toast:t}){const{data:n,error:i}=await w.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").order("created_at",{ascending:!1});if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const l=n||[];e.innerHTML=`
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
  `,a(l),document.getElementById("search-users").addEventListener("input",m=>{const p=m.target.value.toLowerCase();a(l.filter(h=>{var o;return h.pseudo.toLowerCase().includes(p)||((o=h.club_name)==null?void 0:o.toLowerCase().includes(p))}))});function a(m){document.getElementById("users-tbody").innerHTML=m.map(p=>{const h=p.mmr??1e3,o=p.mmr_deviation??350,u=p.placement_matches??0,r=Ct(h),f=p.ranked_wins??0,b=p.ranked_losses??0,s=p.ranked_draws??0,g=f+b+s,d=g>0?Math.round(f/g*100):null,y=u<10,I=o<80?"#1A6B3C":o<150?"#e67e22":"#bb2020";return`
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
            ${y?`<div style="font-size:10px;color:#e67e22">${u}/10 placement${u<10?` (${10-u} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${f}V ${s}N ${b}D${d!==null?` · ${d}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${h}</div>
            <div style="font-size:10px;color:${I}">RD ±${Math.round(o)}</div>
          </td>
          <td>
            ${p.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td>
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${p.id}" data-is-admin="${p.is_admin}">
              ${p.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(p=>{p.addEventListener("click",async()=>{const h=p.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${h?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:o}=await w.from("users").update({is_admin:h}).eq("id",p.dataset.toggleAdmin);o?t(o.message,"error"):(t("Rôle mis à jour ✅","success"),ut(e,{toast:t}))})})}}const pn=[{value:"normal",label:"Normal",color:"#ccc"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function pt(e,t){var h;const{toast:n}=t,{data:i,error:l}=await w.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_real, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(l){e.innerHTML=`<p style="color:var(--danger)">${l.message}</p>`;return}const a=i||[],m=a.filter(o=>o.status==="active").length,p=a.filter(o=>o.status==="sold").length;e.innerHTML=`
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
            ${a.map(o=>{var b,s,g,d;const u=(b=o.card)==null?void 0:b.player,r=u?`${u.firstname} ${u.surname_real}`:((s=o.card)==null?void 0:s.card_type)||"—",f={active:"#1A6B3C",sold:"#D4A017",cancelled:"#888"};return`<tr>
                <td><b>${r}</b>${u?`<div style="font-size:10px;color:var(--tile-fg-dim)">${u.rarity} · ${u.job}</div>`:""}</td>
                <td style="font-size:12px">${((g=o.seller)==null?void 0:g.pseudo)||"—"}</td>
                <td style="font-size:12px">${((d=o.buyer)==null?void 0:d.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(o.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${f[o.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
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
  `,document.querySelectorAll("[data-cancel]").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:u}=await w.from("market_listings").update({status:"cancelled"}).eq("id",o.dataset.cancel);u?n(u.message,"error"):(n("Annonce annulée","success"),pt(e,t))})}),(h=document.getElementById("btn-price-grid"))==null||h.addEventListener("click",()=>mn(t))}async function mn(e){await be(e)}function gn(){const e=document.getElementById("modal-overlay");if(!e||e._pgBlocker)return;const t=n=>{n.target===n.currentTarget&&n.stopImmediatePropagation()};e.addEventListener("click",t,!0),e._pgBlocker=t}function me(){const e=document.getElementById("modal-overlay");e!=null&&e._pgBlocker&&(e.removeEventListener("click",e._pgBlocker,!0),delete e._pgBlocker)}async function be(e){var b,s;const{openModal:t,closeModal:n,toast:i}=e,{data:l,error:a}=await w.from("sell_price_configs").select("*").order("rarity").order("note_min");if(a){i(a.message,"error");return}const m=g=>pn.map(d=>`<option value="${d.value}" ${d.value===g?"selected":""}>${d.label}</option>`).join(""),p=g=>`
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
  `),gn(),(b=document.getElementById("pg-close"))==null||b.addEventListener("click",()=>{me(),n()});function u(g){const d=g.dataset.id,y=g.dataset.field,I=y==="rarity"?g.value:Number(g.value)||0;return r(d,{[y]:I},g)}async function r(g,d,y){const I=document.querySelector(`tr[data-row="${g}"]`),$=k=>I.querySelector(`[data-field="${k}"]`),E="note_min"in d?d.note_min:Number($("note_min").value),v="note_max"in d?d.note_max:Number($("note_max").value),c="price_min"in d?d.price_min:Number($("price_min").value),x="price_max"in d?d.price_max:Number($("price_max").value);if(E>v){i("Note min doit être ≤ note max","error");return}if(c>x){i("Prix min doit être ≤ prix max","error");return}const{error:_}=await w.from("sell_price_configs").update(d).eq("id",g);if(_){i(_.message,"error");return}y&&(y.style.transition="background .3s",y.style.background="#e8f8ee",setTimeout(()=>{y.style.background=""},500))}function f(){document.querySelectorAll("#pg-tbody [data-field]").forEach(g=>{g.addEventListener("change",()=>u(g))})}f(),document.querySelectorAll("[data-del-row]").forEach(g=>{g.addEventListener("click",async()=>{confirm("Supprimer cette ligne ?")&&(await w.from("sell_price_configs").delete().eq("id",g.dataset.delRow),i("Ligne supprimée","success"),me(),be(e))})}),(s=document.getElementById("pg-add-row"))==null||s.addEventListener("click",async()=>{var $;const g={rarity:"normal",note_min:0,note_max:20,price_min:2500,price_max:15e3},{data:d,error:y}=await w.from("sell_price_configs").insert(g).select().single();if(y){i(y.message,"error");return}const I=document.getElementById("pg-tbody");I.querySelector("td[colspan]")&&(I.innerHTML=""),I.insertAdjacentHTML("beforeend",p(d)),f(),($=document.querySelector(`[data-del-row="${d.id}"]`))==null||$.addEventListener("click",async function(){confirm("Supprimer cette ligne ?")&&(await w.from("sell_price_configs").delete().eq("id",d.id),i("Ligne supprimée","success"),me(),be(e))}),i("Ligne ajoutée — modifie les valeurs directement","success")})}async function fn(e,{toast:t}){e.innerHTML=`
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
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:n,error:i}=await w.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun club à exporter","info");return}let l=`real_name,encoded_name,country_code,logo_url
`;n.forEach(a=>{l+=[a.real_name,a.encoded_name,a.country_code,a.logo_url||""].map(Pe).join(",")+`
`}),ie("clubs_export.csv",l),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:i}=await w.from("players").select("firstname,surname_real,surname_real,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_real");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let l=`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(a=>{var m;l+=[a.firstname,a.surname_real,a.surname_real,a.country_code,((m=a.clubs)==null?void 0:m.encoded_name)||"",a.job,a.job2||"",a.note_g,a.note_d,a.note_m,a.note_a,a.rarity,a.note_min??"",a.note_max??"",a.skin,a.hair,a.hair_length,a.sell_price].map(Pe).join(",")+`
`}),ie("players_export.csv",l),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const l=document.getElementById("clubs-import-result");l.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const a=await i.text(),m=Ne(a);if(m.length===0){l.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let p=0,h=0;const o=[];for(const u of m){if(!u.real_name||!u.encoded_name||!u.country_code){h++,o.push(`Ligne ignorée (champs manquants): ${u.real_name||"?"}`);continue}const r={real_name:u.real_name,encoded_name:u.encoded_name.toUpperCase(),country_code:u.country_code.toUpperCase().slice(0,2),logo_url:u.logo_url||null},{error:f}=await w.from("clubs").upsert(r,{onConflict:"encoded_name"});f?(h++,o.push(`${u.encoded_name}: ${f.message}`)):p++}l.innerHTML=`<div style="color:var(--green)">✅ ${p} clubs importés</div>
        ${h>0?`<div style="color:#c0392b">❌ ${h} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${o.slice(0,10).join("<br>")}</div>`:""}`,t(`${p} clubs importés`,"success")}catch(a){l.innerHTML=`<span style="color:#c0392b">Erreur : ${a.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const l=document.getElementById("players-import-result");l.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const a=await i.text(),m=Ne(a);if(m.length===0){l.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:p}=await w.from("clubs").select("id,encoded_name"),h={};(p||[]).forEach(y=>{h[y.encoded_name.toUpperCase()]=y.id});let o=0,u=0;const r=[],f=["GK","DEF","MIL","ATT"],b=["normal","pepite","papyte","legende"],s=["blanc","metisse","typ","noir"],g=["blond","marron","noir","chauve"],d=["rase","court","milong","long"];for(const y of m){if(!y.firstname||!y.surname_real||!y.country_code||!y.job){u++,r.push(`Ligne ignorée (champs requis manquants): ${y.firstname||"?"}`);continue}if(!f.includes(y.job)){u++,r.push(`${y.firstname}: job invalide "${y.job}"`);continue}const I=y.club_encoded_name&&h[y.club_encoded_name.toUpperCase()]||null,$={firstname:y.firstname,surname_real:y.surname_real,surname_real:y.surname_real||ce(y.surname_real),country_code:y.country_code.toUpperCase().slice(0,2),club_id:I,job:y.job,job2:f.includes(y.job2)?y.job2:null,note_g:parseInt(y.note_g)||0,note_d:parseInt(y.note_d)||0,note_m:parseInt(y.note_m)||0,note_a:parseInt(y.note_a)||0,rarity:b.includes(y.rarity)?y.rarity:"normal",note_min:y.note_min!==""&&y.note_min!=null?parseInt(y.note_min):null,note_max:y.note_max!==""&&y.note_max!=null?parseInt(y.note_max):null,skin:s.includes(y.skin)?y.skin:"blanc",hair:g.includes(y.hair)?y.hair:"noir",hair_length:d.includes(y.hair_length)?y.hair_length:"court",sell_price:parseInt(y.sell_price)||0},{error:E}=await w.from("players").insert($);E?(u++,r.push(`${y.firstname} ${y.surname_real}: ${E.message}`)):o++}l.innerHTML=`<div style="color:var(--green)">✅ ${o} joueurs importés</div>
        ${u>0?`<div style="color:#c0392b">❌ ${u} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${r.slice(0,10).join("<br>")}</div>`:""}`,t(`${o} joueurs importés`,"success")}catch(a){l.innerHTML=`<span style="color:#c0392b">Erreur : ${a.message}</span>`}n.target.value=""})}function Pe(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function ie(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(n),l=document.createElement("a");l.href=i,l.download=e,l.click(),URL.revokeObjectURL(i)}function Ne(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(m=>m.trim());if(t.length<2)return[];const n=t[0],i=n.split(";").length>n.split(",").length?";":",",l=Fe(n,i).map(m=>m.trim().replace(/^\uFEFF/,"").toLowerCase()),a=[];for(let m=1;m<t.length;m++){if(!t[m].trim())continue;const p=Fe(t[m],i),h={};l.forEach((o,u)=>{h[o]=(p[u]||"").trim()}),!Object.values(h).every(o=>!o)&&a.push(h)}return a}function Fe(e,t=","){const n=[];let i="",l=!1;for(let a=0;a<e.length;a++){const m=e[a];l?m==='"'?e[a+1]==='"'?(i+='"',a++):l=!1:i+=m:m==='"'?l=!0:m===t?(n.push(i),i=""):i+=m}return n.push(i),n}const yn={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function bn(e,{toast:t}){const n=Object.keys(pe);let i=n[0];const{data:l}=await w.from("formation_links_overrides").select("formation, links"),a={};(l||[]).forEach(u=>{a[u.formation]=u.links});let m=new Set;function p(u,r){return[u,r].sort().join("-")}function h(u){const r=a[u]||pe[u]||[];m=new Set(r.map(([f,b])=>p(f,b)))}h(i),e.innerHTML=`
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
        <div style="font-weight:700;font-size:13px;margin-bottom:8px">Liens (${m.size}/? actifs)</div>
        <div id="links-list" style="display:flex;flex-direction:column;gap:4px;max-height:520px;overflow-y:auto"></div>
      </div>
    </div>
  `;function o(){const u=Tt[i]||{},r=Me(i),f=320,b=400,s=22;function g(E){const v=u[E];return v?{x:v.x*f,y:v.y*b}:null}let d=`<svg width="${f}" height="${b}" viewBox="0 0 ${f} ${b}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;r.forEach(([E,v],c)=>{const x=g(E),_=g(v);if(!x||!_)return;const k=p(E,v),B=m.has(k),L=B?"#3b82f6":"#999",A=B?.95:.35,S=B?4:3;d+=`<line x1="${x.x}" y1="${x.y}" x2="${_.x}" y2="${_.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${k}" style="cursor:pointer"/>`,d+=`<line x1="${x.x}" y1="${x.y}" x2="${_.x}" y2="${_.y}"
        stroke="${L}" stroke-width="${S}" stroke-dasharray="${B?"none":"4,3"}"
        opacity="${A}" pointer-events="none" data-line-key="${k}"/>`});for(const E of Object.keys(u)){const v=g(E);if(!v)continue;const c=E.replace(/\d+/,""),x=yn[c]||"#555";d+=`<circle cx="${v.x}" cy="${v.y}" r="${s}" fill="${x}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,d+=`<text x="${v.x}" y="${v.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${E}</text>`}d+="</svg>",document.getElementById("field-wrap").innerHTML=d;const y=document.getElementById("links-list");y.innerHTML=r.map(([E,v])=>{const c=p(E,v),x=m.has(c);return`
        <button class="link-toggle" data-key="${c}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${x?"#3b82f6":"#ddd"};
          background:${x?"#eaf2ff":"#fafafa"};
          color:${x?"#1d4ed8":"#888"}">
          <span>${E} ↔ ${v}</span>
          <span>${x?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const I=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');I&&(I.textContent=`Liens (${m.size}/${r.length} actifs)`);function $(E){m.has(E)?m.delete(E):m.add(E),o()}e.querySelectorAll(".link-hit").forEach(E=>{E.addEventListener("click",()=>$(E.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(E=>{E.addEventListener("click",()=>$(E.dataset.key))})}o(),document.getElementById("formation-select").addEventListener("change",u=>{i=u.target.value,h(i),o()}),document.getElementById("reset-btn").addEventListener("click",()=>{const u=pe[i]||[];m=new Set(u.map(([r,f])=>p(r,f))),o(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const r=Me(i).filter(([b,s])=>m.has(p(b,s))),{error:f}=await w.from("formation_links_overrides").upsert({formation:i,links:r,updated_at:new Date().toISOString()});if(f){t(f.message,"error");return}a[i]=r,t(`Liens enregistrés pour ${i} (${r.length} actifs)`,"success")})}const vn=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],xn=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],hn=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function En(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await w.from("booster_configs").select("*").order("sort_order");let n=null,i=[],l=null;const a=()=>window.innerWidth<700;async function m(){if(!n){i=[];return}if(n!==l){const{data:r}=await w.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");i=r||[],l=n}}function p(){return`
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
    </div>`;const f=i.reduce((s,g)=>s+Number(g.percentage||0),0),b=Math.abs(f-100)<.1;return`
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
              ${hn.map(s=>`<option value="${s.value}" ${r.price_type===s.value?"selected":""}>${s.label}</option>`).join("")}
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
            <span style="margin-left:10px;font-size:12px;color:${b?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${f.toFixed(1)}% ${b?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((s,g)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${g}">
            <select class="rate-type" data-idx="${g}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${vn.map(d=>`<option value="${d.value}" ${s.card_type===d.value?"selected":""}>${d.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${g}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${xn.map(d=>`<option value="${d.value}" ${(s.rarity||"")===d.value?"selected":""}>${d.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${g}" type="number" min="0" max="20" value="${s.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${g}" type="number" min="0" max="20" value="${s.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${g}" type="number" min="0.1" max="100" step="0.1" value="${s.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${g}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function o(r=!1){r||await m();const f=!n&&a(),b=n&&a();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!a()||f||!n?p():""}
      ${!a()||b?h():""}
    </div>`,u()}function u(){var b,s,g,d,y,I,$;const r=E=>e.querySelector(E);e.querySelectorAll(".booster-row").forEach(E=>{E.addEventListener("click",v=>{v.target.closest(".btn-delete")||(n=E.dataset.id,l=null,o())})}),(b=r("#btn-back"))==null||b.addEventListener("click",()=>{n=null,o()}),(s=r("#btn-new"))==null||s.addEventListener("click",async()=>{const E=prompt("Nom du nouveau booster :");if(!(E!=null&&E.trim()))return;const{data:v,error:c}=await w.from("booster_configs").insert({name:E.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(c){alert(c.message);return}t.push(v),n=v.id,l=null,o()}),e.querySelectorAll(".btn-delete").forEach(E=>{E.addEventListener("click",async v=>{if(v.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await w.from("booster_configs").delete().eq("id",E.dataset.id);const c=t.findIndex(x=>x.id===E.dataset.id);c>-1&&t.splice(c,1),n===E.dataset.id&&(n=null,l=null),o()})}),(g=r("#btn-cancel"))==null||g.addEventListener("click",()=>{n=null,o()}),(d=r("#f-price-type"))==null||d.addEventListener("change",E=>{const v=r("#credits-field");v&&(v.style.opacity=E.target.value!=="credits"?"0.4":"1")}),(y=r("#btn-pick-icon"))==null||y.addEventListener("click",async()=>{var v;const E=r("#icon-picker-grid");if(E){if(E.style.display!=="none"){E.style.display="none";return}E.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',E.style.display="block";try{const x=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),_=Array.isArray(x)?x.filter(B=>B.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(B.name)):[];if(!_.length){E.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const k=((v=r("#f-image-url"))==null?void 0:v.value)||"";E.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${_.map(B=>`
          <div class="icon-pick-item" data-name="${B.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${B.name===k?"#1A6B3C":"#ddd"};background:${B.name===k?"#f0f7f0":"#fff"}">
            <img src="/icons/${B.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${B.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,E.querySelectorAll(".icon-pick-item").forEach(B=>{B.addEventListener("click",()=>{const L=r("#f-image-url");L&&(L.value=B.dataset.name),E.style.display="none"})})}catch(c){E.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${c.message}</div>`}}});function f(){e.querySelectorAll("[data-rate-idx]").forEach(E=>{var c,x,_,k,B;const v=Number(E.dataset.rateIdx);v>=0&&v<i.length&&(i[v].card_type=((c=E.querySelector(".rate-type"))==null?void 0:c.value)||"player",i[v].rarity=((x=E.querySelector(".rate-rarity"))==null?void 0:x.value)||null,i[v].note_min=Number((_=E.querySelector(".rate-note-min"))==null?void 0:_.value)||null,i[v].note_max=Number((k=E.querySelector(".rate-note-max"))==null?void 0:k.value)||null,i[v].percentage=Number((B=E.querySelector(".rate-pct"))==null?void 0:B.value)||0)})}(I=r("#btn-add-rate"))==null||I.addEventListener("click",()=>{f(),i.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),o(!0)}),e.querySelectorAll(".btn-del-rate").forEach(E=>{E.addEventListener("click",()=>{f(),i.splice(Number(E.dataset.idx),1),o(!0)})}),($=r("#btn-save"))==null||$.addEventListener("click",async()=>{var k,B,L,A,S,C,M,F,O,U,P,D,ne;const E=(t||[]).find(T=>T.id===n);if(!E)return;const v=[];e.querySelectorAll("[data-rate-idx]").forEach(T=>{var W,Z,Q,X,ee;const J=Number(T.dataset.rateIdx);v.push({booster_id:n,card_type:((W=T.querySelector(".rate-type"))==null?void 0:W.value)||"player",rarity:((Z=T.querySelector(".rate-rarity"))==null?void 0:Z.value)||null,note_min:Number((Q=T.querySelector(".rate-note-min"))==null?void 0:Q.value)||null,note_max:Number((X=T.querySelector(".rate-note-max"))==null?void 0:X.value)||null,percentage:Number((ee=T.querySelector(".rate-pct"))==null?void 0:ee.value)||0,sort_order:J});const j=v[v.length-1];j.rarity||(j.rarity=null),j.note_min||(j.note_min=null),j.note_max||(j.note_max=null)});const c=v.reduce((T,J)=>T+J.percentage,0);if(v.length&&Math.abs(c-100)>.5){alert(`La somme doit faire 100% (actuellement ${c.toFixed(1)}%)`);return}const x={name:((B=(k=r("#f-name"))==null?void 0:k.value)==null?void 0:B.trim())||E.name,image_url:((A=(L=r("#f-image-url"))==null?void 0:L.value)==null?void 0:A.trim())||null,price_type:(S=r("#f-price-type"))==null?void 0:S.value,price_credits:Number((C=r("#f-price-credits"))==null?void 0:C.value)||0,card_count:Number((M=r("#f-card-count"))==null?void 0:M.value)||5,is_active:((F=r("#f-active"))==null?void 0:F.checked)??E.is_active,allow_duplicates:((O=r("#f-allow-dup"))==null?void 0:O.checked)??!0,sort_order:Number((U=r("#f-sort"))==null?void 0:U.value)||0,max_per_user:(P=r("#f-max-per-user"))!=null&&P.value?Number(r("#f-max-per-user").value):null,available_from:((D=r("#f-available-from"))==null?void 0:D.value)||null,available_until:((ne=r("#f-available-until"))==null?void 0:ne.value)||null},{error:_}=await w.from("booster_configs").update(x).eq("id",n);if(_){alert(_.message);return}if(Object.assign(E,x),await w.from("booster_drop_rates").delete().eq("booster_id",n),v.length){const{error:T}=await w.from("booster_drop_rates").insert(v);if(T){alert(T.message);return}}i=v,l=n,alert("✅ Booster enregistré !"),o(!0)})}o()}const mt=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function _n(e){await ke(e)}async function ke(e){const{data:t,error:n}=await w.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
          ${(t||[]).map(i=>wn(i)).join("")}
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
              ${mt.map(i=>`<option value="${i.value}">${i.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>Oe(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>In(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const l=(t||[]).find(a=>a.id===i.dataset.edit);l&&i.addEventListener("click",()=>Oe(l))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await w.from("sell_price_configs").delete().eq("id",i.dataset.delete),await ke(e))})})}function wn(e){const t=mt.find(n=>n.value===e.rarity);return`
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
    </tr>`}function Oe(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function In(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,l=parseInt(document.getElementById("form-note-min").value)||1,a=parseInt(document.getElementById("form-note-max").value)||10;if(l>a){alert("Note min doit être ≤ note max");return}const m={rarity:n,price:i,note_min:l,note_max:a,updated_at:new Date().toISOString()};let p;if(t?{error:p}=await w.from("sell_price_configs").update(m).eq("id",t):{error:p}=await w.from("sell_price_configs").insert(m),p){alert("Erreur : "+p.message);return}document.getElementById("config-form").style.display="none",await ke(e)}async function kn(e){await $e(e)}async function $e(e){const{data:t}=await w.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Actualités</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(t||[]).map(n=>$n(n)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>Ue(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Ln(e)),e.querySelectorAll("[data-edit-row]").forEach(n=>{const i=(t||[]).find(l=>l.id===n.dataset.editRow);i&&n.addEventListener("click",()=>Ue(i))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await w.from("patch_notes").delete().eq("id",n.dataset.delete),await $e(e))})})}function $n(e){const t=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function Ue(e){const t=document.getElementById("article-form");t.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img-current").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-img-file").value="";const n=document.getElementById("form-art-img-preview");n.innerHTML=e!=null&&e.image_url?`<img src="${e.image_url}" style="width:100%;height:100%;object-fit:cover">`:'<span style="font-size:20px;opacity:.4">📰</span>',document.getElementById("form-art-img-file").onchange=a=>{var h;const m=(h=a.target.files)==null?void 0:h[0];if(!m)return;const p=new FileReader;p.onload=()=>{n.innerHTML=`<img src="${p.result}" style="width:100%;height:100%;object-fit:cover">`},p.readAsDataURL(m)},document.getElementById("form-art-pub").checked=e?e.is_published:!0;const i=new Date((e==null?void 0:e.published_at)||Date.now()),l=new Date(i.getTime()-i.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=l,t.scrollIntoView({behavior:"smooth"})}async function Bn(e){const t=(e.name.split(".").pop()||"png").toLowerCase(),n=`journal/${Date.now()}.${t}`,{error:i}=await w.storage.from("assets").upload(n,e,{upsert:!0,cacheControl:"3600"});if(i)throw i;const{data:l}=w.storage.from("assets").getPublicUrl(n);return l.publicUrl}async function Ln(e){var b;const t=document.getElementById("form-id").value,n=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),l=((b=document.getElementById("form-art-img-file").files)==null?void 0:b[0])||null,a=document.getElementById("form-art-img-current").value||null,m=document.getElementById("form-art-pub").checked,p=document.getElementById("form-art-date").value,h=document.getElementById("form-save");if(!n){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}let o=a;if(l)try{h&&(h.textContent="📤 Envoi de l'image…"),o=await Bn(l)}catch(s){alert("Erreur upload image : "+s.message),h&&(h.textContent="💾 Enregistrer");return}const u=p?new Date(p).toISOString():new Date().toISOString(),r={title:n,description:i,image_url:o,is_published:m,published_at:u};let f;if(t?{error:f}=await w.from("patch_notes").update(r).eq("id",t):{error:f}=await w.from("patch_notes").insert(r),f){alert("Erreur : "+f.message);return}document.getElementById("article-form").style.display="none",await $e(e)}async function An(e){await Y(e)}async function Y(e){var u,r,f,b,s,g,d,y,I,$,E,v;const{data:t}=await w.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([c,x,_])=>`<button type="button" data-cmd="${x}" title="${_}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${c}</button>`).join("")}
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
            </div>`:(t||[]).map(c=>Sn(c)).join("")}
        </div>
      </div><!-- /colonne droite -->
    </div>`,(u=document.getElementById("ts-add"))==null||u.addEventListener("click",()=>Ge(null,(t==null?void 0:t.length)||0)),(r=document.getElementById("ts-reset"))==null||r.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:c}=await w.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(c?"Erreur : "+c.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(f=document.getElementById("ts-cancel"))==null||f.addEventListener("click",gt),(b=document.getElementById("ts-save"))==null||b.addEventListener("click",()=>Tn(e)),(s=document.getElementById("ts-preview-btn"))==null||s.addEventListener("click",Cn);const n=document.getElementById("ts-editor"),i=()=>{const c=document.getElementById("ts-content");c&&n&&(c.value=n.innerHTML)};n==null||n.addEventListener("input",i),n==null||n.addEventListener("blur",i);const l=()=>{document.activeElement!==n&&(n==null||n.focus())};(g=document.getElementById("ts-toolbar"))==null||g.querySelectorAll("[data-cmd]").forEach(c=>{c.addEventListener("mousedown",x=>{x.preventDefault(),l();const _=c.dataset.cmd;_.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,_.split(":")[1]):document.execCommand(_,!1,null),i()})}),(d=document.getElementById("ts-insert-color"))==null||d.addEventListener("mousedown",c=>{c.preventDefault(),l();const x=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");x&&(document.execCommand("foreColor",!1,x),i())}),(y=document.getElementById("ts-clear-format"))==null||y.addEventListener("mousedown",c=>{c.preventDefault(),l(),document.execCommand("removeFormat",!1,null),i()}),n==null||n.addEventListener("focus",()=>{n&&(n.style.borderColor="#1A6B3C")}),n==null||n.addEventListener("blur",()=>{n&&(n.style.borderColor="#ddd")});const a=document.getElementById("ts-image"),m=document.getElementById("ts-img-preview"),p=document.getElementById("ts-img-preview-el"),h=document.getElementById("ts-img-picker-grid"),o=()=>{var x;const c=(x=a==null?void 0:a.value)==null?void 0:x.trim();if(c){const _="/";p.src=`${_}icons/${c}`,m.style.display="block"}else m.style.display="none"};a==null||a.addEventListener("input",o),(I=document.getElementById("ts-img-clear"))==null||I.addEventListener("click",()=>{a&&(a.value=""),m.style.display="none",h.style.display="none"}),($=document.getElementById("ts-img-pick"))==null||$.addEventListener("click",async()=>{if(h.style.display!=="none"){h.style.display="none";return}h.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',h.style.display="block";try{const x=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),_=Array.isArray(x)?x.filter(B=>B.name.startsWith("tuto_")):[];if(!_.length){h.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const k="/";h.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+_.map(B=>`
          <div data-pick="${B.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${k}icons/${B.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${B.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",h.querySelectorAll("[data-pick]").forEach(B=>{B.addEventListener("click",()=>{a&&(a.value=B.dataset.pick),o(),h.style.display="none"})})}catch(c){h.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+c.message+"</div>"}}),(E=document.getElementById("ts-color"))==null||E.addEventListener("input",c=>{const x=document.getElementById("ts-color-hex");x&&(x.value=c.target.value)}),(v=document.getElementById("ts-color-hex"))==null||v.addEventListener("input",c=>{const x=c.target.value;if(/^#[0-9a-fA-F]{6}$/.test(x)){const _=document.getElementById("ts-color");_&&(_.value=x)}}),e.querySelectorAll("[data-edit-row]").forEach(c=>{const x=(t||[]).find(_=>_.id===c.dataset.editRow);x&&c.addEventListener("click",()=>Ge(x))}),e.querySelectorAll("[data-delete]").forEach(c=>{c.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await w.from("tutorial_steps").delete().eq("id",c.dataset.delete),Y(e))})}),e.querySelectorAll("[data-toggle]").forEach(c=>{c.addEventListener("click",async()=>{const x=(t||[]).find(_=>_.id===c.dataset.toggle);x&&(await w.from("tutorial_steps").update({is_active:!x.is_active}).eq("id",x.id),Y(e))})}),e.querySelectorAll("[data-up]").forEach(c=>{c.addEventListener("click",async()=>{const x=t||[],_=x.findIndex(k=>k.id===c.dataset.up);_<=0||(await Promise.all([w.from("tutorial_steps").update({step_order:x[_-1].step_order}).eq("id",x[_].id),w.from("tutorial_steps").update({step_order:x[_].step_order}).eq("id",x[_-1].id)]),Y(e))})}),e.querySelectorAll("[data-down]").forEach(c=>{c.addEventListener("click",async()=>{const x=t||[],_=x.findIndex(k=>k.id===c.dataset.down);_<0||_>=x.length-1||(await Promise.all([w.from("tutorial_steps").update({step_order:x[_+1].step_order}).eq("id",x[_].id),w.from("tutorial_steps").update({step_order:x[_].step_order}).eq("id",x[_+1].id)]),Y(e))})})}function Sn(e){return`
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
  </div>`}function Ge(e,t=0){document.getElementById("ts-form-empty").style.display="none",document.getElementById("ts-form-content").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const n=document.getElementById("ts-editor");n&&(n.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??t,document.getElementById("ts-active").checked=e?e.is_active:!0;const i=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=i,document.getElementById("ts-color-hex").value=i;const l=(e==null?void 0:e.image_url)||"",a=document.getElementById("ts-image");a&&(a.value=l);const m=document.getElementById("ts-img-preview"),p=document.getElementById("ts-img-preview-el");if(l&&m&&p){const h="/";p.src=`${h}icons/${l}`,m.style.display="block"}else m&&(m.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function gt(){document.getElementById("ts-form-content").style.display="none",document.getElementById("ts-form-empty").style.display="block",document.getElementById("ts-preview-area").innerHTML=""}function Cn(){var o,u;const e=document.getElementById("ts-emoji").value||"⚽",t=document.getElementById("ts-title").value||"Titre",n=document.getElementById("ts-editor"),i=n?n.innerHTML:document.getElementById("ts-content").value||"",l=document.getElementById("ts-color-hex").value||"#1A6B3C",a=(u=(o=document.getElementById("ts-image"))==null?void 0:o.value)==null?void 0:u.trim(),p=a?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${a}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",h=document.getElementById("ts-preview-area");h.innerHTML=`
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
        <div style="padding:${a?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${i}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${l};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,h.querySelectorAll("ul,ol").forEach(r=>{r.style.paddingLeft="20px",r.style.margin="6px 0"}),h.querySelectorAll("li").forEach(r=>{r.style.marginBottom="4px"}),h.querySelectorAll("p").forEach(r=>{r.style.marginBottom="8px"})}async function Tn(e){var r,f;const t=document.getElementById("ts-id").value,n=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),l=document.getElementById("ts-editor"),a=(l?l.innerHTML:document.getElementById("ts-content").value).trim(),m=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",p=parseInt(document.getElementById("ts-order").value)||0,h=document.getElementById("ts-active").checked;if(!i||!a){alert("Titre et contenu sont obligatoires.");return}const o={emoji:n,title:i,content:a,color:m,step_order:p,is_active:h,image_url:((f=(r=document.getElementById("ts-image"))==null?void 0:r.value)==null?void 0:f.trim())||null};let u;if(t?{error:u}=await w.from("tutorial_steps").update(o).eq("id",t):{error:u}=await w.from("tutorial_steps").insert(o),u){alert("Erreur : "+u.message);return}gt(),Y(e)}const ft="/",Mn=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function zn(e,t){await ve(e,t)}async function ve(e,t){var l;const[{data:n},{data:i}]=await Promise.all([w.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),w.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">🏟️ Stades</h2>
        <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="st-list">
        ${(n||[]).length?(n||[]).map(a=>Rn(a)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucun stade créé.</div>'}
      </div>
    </div>`,(l=document.getElementById("st-add-btn"))==null||l.addEventListener("click",()=>He(null,i,e,t)),e.querySelectorAll("[data-edit-stadium]").forEach(a=>{a.addEventListener("click",()=>{const m=(n||[]).find(p=>p.id===a.dataset.editStadium);m&&He(m,i,e,t)})})}function Rn(e){var l,a;let t=null;e.image_url?t=e.image_url.startsWith("http")?e.image_url:`${ft}icons/${e.image_url}`:(l=e.club)!=null&&l.logo_url?t=e.club.logo_url:e.country_code&&(t=`https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/64.png`);const n=((a=e.club)==null?void 0:a.encoded_name)||e.country_code||"—",i=Ze(e.name,t,`${n}<br>+10 ⭐`,{width:140});return`<div data-edit-stadium="${e.id}" style="cursor:pointer;transition:transform .15s" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
    ${i}
  </div>`}function He(e,t,n,i){var u,r,f;const{openModal:l,closeModal:a,toast:m}=i,p=`
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
            ${(t||[]).map(b=>`<option value="${b.id}" data-logo="${b.logo_url||""}" ${(e==null?void 0:e.club_id)===b.id?"selected":""}>${b.encoded_name}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>PAYS (si pas de club)</label>
          <select id="st-country">
            <option value="">— Aucun pays —</option>
            ${Mn.map(([b,s])=>`<option value="${b}" ${(e==null?void 0:e.country_code)===b?"selected":""}>${s} (${b})</option>`).join("")}
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
  `);const o=()=>{var x,_,k,B,L,A,S;const b=((x=document.getElementById("st-name"))==null?void 0:x.value)||"NOM DU STADE",s=(k=(_=document.getElementById("st-image"))==null?void 0:_.value)==null?void 0:k.trim(),g=(L=(B=document.getElementById("st-country"))==null?void 0:B.value)==null?void 0:L.trim(),d=document.getElementById("st-club"),y=(d==null?void 0:d.selectedIndex)||0,I=d&&y>0?d.options[y].text:"",$=((S=(A=d==null?void 0:d.options[y])==null?void 0:A.getAttribute)==null?void 0:S.call(A,"data-logo"))||"";let E=null;s?E=s.startsWith("http")?s:`${ft}icons/${s}`:$?E=$:g&&(E=`https://flagsapi.com/${g.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`);const v=I||g||"—",c=document.getElementById("st-preview-card");c&&(c.innerHTML=Ze(b,E,`${v}<br>+10 ⭐`,{width:140}))};o(),["st-name","st-club","st-country","st-image"].forEach(b=>{var s,g;(s=document.getElementById(b))==null||s.addEventListener("input",o),(g=document.getElementById(b))==null||g.addEventListener("change",o)}),(u=document.getElementById("st-cancel"))==null||u.addEventListener("click",()=>a()),(r=document.getElementById("st-save"))==null||r.addEventListener("click",async()=>{const b=document.getElementById("st-name").value.trim(),s=document.getElementById("st-club").value||null,g=document.getElementById("st-country").value.trim().toUpperCase()||null,d=document.getElementById("st-image").value.trim()||null;if(!b){m("Le nom est obligatoire","error");return}const y={name:b,club_id:s,country_code:g,image_url:d},{error:I}=e?await w.from("stadium_definitions").update(y).eq("id",e.id):await w.from("stadium_definitions").insert(y);if(I){m("Erreur : "+I.message,"error");return}m(e?"Stade modifié ✅":"Stade créé ✅","success"),a(),ve(n,i)}),(f=document.getElementById("st-delete"))==null||f.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await w.from("stadium_definitions").delete().eq("id",e.id),m("Stade supprimé","success"),a(),ve(n,i))})}const H=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],Dn=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}],G=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],qe=["GK","DEF","MIL","ATT"];async function jn(e,t){await Be(e,t)}async function Be(e,t){var i;const{data:n}=await w.from("gc_definitions").select("*").order("sort_order").order("created_at");e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">⚡ Game Changers</h2>
        <button id="gc-add-btn" class="btn btn-primary">+ Nouvelle carte</button>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="gc-list">
        ${(n||[]).length?(n||[]).map(l=>Pn(l)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucune carte Game Changer.</div>'}
      </div>
    </div>`,(i=document.getElementById("gc-add-btn"))==null||i.addEventListener("click",()=>Ke(null,e,t)),e.querySelectorAll("[data-edit-gc]").forEach(l=>{l.addEventListener("click",()=>{const a=(n||[]).find(m=>m.id===l.dataset.editGc);a&&Ke(a,e,t)})}),e.querySelectorAll(".btn-del-gc").forEach(l=>{l.addEventListener("click",async a=>{a.stopPropagation(),confirm("Supprimer cette carte Game Changer ?")&&(await w.from("gc_definitions").delete().eq("id",l.dataset.del),Be(e,t))})})}function Pn(e){const t=H.find(l=>l.value===e.gc_type)||H[0],n=e.image_url?`/icons/${e.image_url}`:null,i=ge(e.name||"?",n,t.label.split(" ")[0],e.effect||"",{width:130});return`<div data-edit-gc="${e.id}" style="position:relative;cursor:pointer">
    ${i}
    <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
      <button class="btn-del-gc" data-del="${e.id}"
        style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0">✕</button>
    </div>
    ${e.is_active?"":'<div style="position:absolute;top:4px;right:4px;z-index:10;background:#555;color:#fff;font-size:9px;font-weight:700;padding:2px 6px;border-radius:8px">INACTIF</div>'}
  </div>`}function Ke(e,t,n){var f,b,s,g;const{openModal:i,closeModal:l,toast:a}=n,m=!e,p=e||{name:"",gc_type:"game_changer",color:"purple",effect:"",image_url:"",sort_order:0,is_active:!0,effect_type:"BOOST_STAT",effect_params:{}},h=(()=>{const d=p.effect_params||{},y=G.find(I=>I.value===(p.effect_type||"BOOST_STAT"))||G[0];return`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${y.hasValue?`<div>
        <label>VALEUR (+N)</label>
        <input id="gc-p-value" type="number" min="1" max="5" value="${d.value||2}">
      </div>`:""}
      ${y.hasCount?`<div>
        <label>NB JOUEURS</label>
        <input id="gc-p-count" type="number" min="1" max="11" value="${d.count||1}">
      </div>`:""}
      ${y.hasTarget?`<div>
        <label>CIBLE</label>
        <select id="gc-p-target">
          <option value="home" ${(d.target||"home")==="home"?"selected":""}>Mon équipe</option>
          <option value="opponent" ${d.target==="opponent"?"selected":""}>Équipe adverse</option>
        </select>
      </div>`:""}
      ${y.hasRoles?`<div>
        <label>POSTES CIBLÉS</label>
        <div style="display:flex;gap:4px;flex-wrap:wrap">
          ${qe.map(I=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555">
            <input type="checkbox" class="gc-p-role" value="${I}" ${!d.roles||d.roles.includes(I)?"checked":""}> ${I}
          </label>`).join("")}
        </div>
      </div>`:""}
    </div>`})(),o=`
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
  `;i(m?"Nouvelle carte Game Changer":`Modifier : ${p.name}`,o,`
    <button id="gc-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gc-save" class="btn btn-primary">💾 Enregistrer</button>
  `);const r=()=>{var c,x,_,k,B;const d=((c=document.getElementById("gc-name"))==null?void 0:c.value)||"?",y=((x=document.getElementById("gc-effect"))==null?void 0:x.value)||"",I=((_=document.getElementById("gc-type"))==null?void 0:_.value)||"game_changer",$=(B=(k=document.getElementById("gc-image-url"))==null?void 0:k.value)==null?void 0:B.trim(),E=H.find(L=>L.value===I)||H[0],v=document.getElementById("gc-modal-preview");v&&(v.innerHTML=ge(d,$?`/icons/${$}`:null,E.label.split(" ")[0],y,{width:150}))};["gc-name","gc-effect","gc-type","gc-image-url"].forEach(d=>{var y,I;(y=document.getElementById(d))==null||y.addEventListener("input",r),(I=document.getElementById(d))==null||I.addEventListener("change",r)}),(f=document.getElementById("gc-effect-type"))==null||f.addEventListener("change",()=>{const d=document.getElementById("gc-effect-type").value,y=G.find($=>$.value===d)||G[0],I=document.getElementById("gc-params-wrap");I.innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${y.hasValue?'<div><label>VALEUR (+N)</label><input id="gc-p-value" type="number" min="1" max="5" value="2"></div>':""}
      ${y.hasCount?'<div><label>NB JOUEURS</label><input id="gc-p-count" type="number" min="1" max="11" value="1"></div>':""}
      ${y.hasTarget?'<div><label>CIBLE</label><select id="gc-p-target"><option value="home">Mon équipe</option><option value="opponent">Équipe adverse</option></select></div>':""}
      ${y.hasRoles?`<div><label>POSTES CIBLÉS</label><div style="display:flex;gap:4px;flex-wrap:wrap">${qe.map($=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555"><input type="checkbox" class="gc-p-role" value="${$}" checked> ${$}</label>`).join("")}</div></div>`:""}
    </div>`}),(b=document.getElementById("btn-pick-gc-icon"))==null||b.addEventListener("click",async()=>{var y;const d=document.getElementById("gc-icon-picker");if(d){if(d.style.display!=="none"){d.style.display="none";return}d.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',d.style.display="block";try{const $=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),E=Array.isArray($)?$.filter(c=>c.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(c.name)):[];if(!E.length){d.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const v=((y=document.getElementById("gc-image-url"))==null?void 0:y.value)||"";d.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
        ${E.map(c=>`
        <div class="gc-icon-item" data-name="${c.name}"
          style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${c.name===v?"#7a28b8":"#ddd"};background:${c.name===v?"#f5f0ff":"#fff"}">
          <img src="/icons/${c.name}" style="height:44px;width:100%;object-fit:contain">
          <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
        </div>`).join("")}
      </div>`,d.querySelectorAll(".gc-icon-item").forEach(c=>{c.addEventListener("click",()=>{const x=document.getElementById("gc-image-url");x&&(x.value=c.dataset.name),d.style.display="none",r()})})}catch(I){d.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${I.message}</div>`}}}),(s=document.getElementById("gc-cancel"))==null||s.addEventListener("click",()=>l()),(g=document.getElementById("gc-save"))==null||g.addEventListener("click",async()=>{var v,c,x,_,k,B,L,A,S,C,M,F,O,U;const d=G.find(P=>{var D;return P.value===(((D=document.getElementById("gc-effect-type"))==null?void 0:D.value)||"BOOST_STAT")})||G[0],y=d.hasRoles?[...document.querySelectorAll(".gc-p-role:checked")].map(P=>P.value):null,I={...d.hasValue?{value:Number((v=document.getElementById("gc-p-value"))==null?void 0:v.value)||2}:{},...d.hasCount?{count:Number((c=document.getElementById("gc-p-count"))==null?void 0:c.value)||1}:{},...d.hasTarget?{target:((x=document.getElementById("gc-p-target"))==null?void 0:x.value)||"home"}:{},...d.hasRoles?{roles:y!=null&&y.length?y:null}:{}},$={name:((k=(_=document.getElementById("gc-name"))==null?void 0:_.value)==null?void 0:k.trim())||"",effect:((L=(B=document.getElementById("gc-effect"))==null?void 0:B.value)==null?void 0:L.trim())||null,image_url:((S=(A=document.getElementById("gc-image-url"))==null?void 0:A.value)==null?void 0:S.trim())||null,gc_type:((C=document.getElementById("gc-type"))==null?void 0:C.value)||"game_changer",color:((M=document.getElementById("gc-color"))==null?void 0:M.value)||"purple",sort_order:Number((F=document.getElementById("gc-sort"))==null?void 0:F.value)||0,is_active:((O=document.getElementById("gc-active"))==null?void 0:O.checked)??!0,effect_type:((U=document.getElementById("gc-effect-type"))==null?void 0:U.value)||"BOOST_STAT",effect_params:I};if(!$.name){a("Le nom est obligatoire","error");return}const{error:E}=m?await w.from("gc_definitions").insert($):await w.from("gc_definitions").update($).eq("id",p.id);if(E){a(E.message,"error");return}a(m?"Carte créée ✅":"Carte modifiée ✅","success"),l(),Be(t,n)})}async function Nn(e,{toast:t,openModal:n,closeModal:i}){await V(e,{toast:t,openModal:n,closeModal:i})}async function V(e,t){var E;const{toast:n,openModal:i,closeModal:l}=t,[{data:a,error:m},{data:p}]=await Promise.all([w.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),w.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1)]);if(m){e.innerHTML=`<p style="color:red">${m.message}</p>`;return}const h=a||[],o=h.find(v=>v.is_active),u=(p||[]).filter(v=>(v.placement_matches||0)>=1),r=u.filter(v=>(v.placement_matches||0)>=10),f=["bronze","silver","gold","platinum","diamond","master"],b={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},s={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},g={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},d={};f.forEach(v=>{d[v]=0}),r.forEach(v=>{const c=v.rank_tier||"bronze";d[c]!==void 0&&d[c]++});const y=r.length?Math.round(r.reduce((v,c)=>v+(c.mmr||1e3),0)/r.length):0;function I(v){return v?new Date(v).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function $(v){const c=new Date;return v.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(v.end_at)<c?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${o?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${o.name}</div>
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
            <div style="font-size:22px;font-weight:900">${y}</div>
            <div style="font-size:11px;color:var(--gray-600)">MMR moyen</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(o.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${r.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${f.map(v=>{const c=d[v],x=r.length>0?Math.round(c/r.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${g[v]} ${b[v]}</span>
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
    </div>`,(E=document.getElementById("create-season-btn"))==null||E.addEventListener("click",()=>{Je(null,{toast:n,openModal:i,closeModal:l,reload:()=>V(e,t)})}),e.querySelectorAll("[data-edit]").forEach(v=>{const c=h.find(x=>x.id==v.dataset.edit);v.addEventListener("click",()=>{Je(c,{toast:n,openModal:i,closeModal:l,reload:()=>V(e,t)})})}),e.querySelectorAll("[data-activate]").forEach(v=>{v.addEventListener("click",async()=>{const c=parseInt(v.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:x}=await w.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(x){n(x.message,"error");return}const{error:_}=await w.from("ranked_seasons").update({is_active:!0}).eq("id",c);if(_){n(_.message,"error");return}await w.from("users").update({current_season_id:c}).gt("placement_matches",0),n("Saison activée ✅","success"),V(e,t)})}),e.querySelectorAll("[data-deactivate]").forEach(v=>{v.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:c}=await w.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(v.dataset.deactivate));if(c){n(c.message,"error");return}n("Saison désactivée","success"),V(e,t)})}),e.querySelectorAll("[data-delete]").forEach(v=>{v.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:c}=await w.from("ranked_seasons").delete().eq("id",parseInt(v.dataset.delete));if(c){n(c.message,"error");return}n("Saison supprimée","success"),V(e,t)})})}function Je(e,{toast:t,openModal:n,closeModal:i,reload:l}){const a=!!e,m=new Date().toISOString().slice(0,16),p=new Date(Date.now()+90*864e5).toISOString().slice(0,16),h=e?new Date(e.start_at).toISOString().slice(0,16):m,o=e?new Date(e.end_at).toISOString().slice(0,16):p,u=(e==null?void 0:e.name)||"";n(a?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
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
        <input id="season-end" type="datetime-local" value="${o}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${a?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function r(){var d,y;const f=(d=document.getElementById("season-start"))==null?void 0:d.value,b=(y=document.getElementById("season-end"))==null?void 0:y.value,s=document.getElementById("season-duration");if(!f||!b||!s)return;const g=Math.round((new Date(b)-new Date(f))/864e5);s.textContent=g>0?`Durée : ${g} jour${g>1?"s":""}`:"⚠️ La fin doit être après le début",s.style.color=g>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var f,b,s;(f=document.getElementById("season-start"))==null||f.addEventListener("input",r),(b=document.getElementById("season-end"))==null||b.addEventListener("input",r),r(),(s=document.getElementById("season-save-btn"))==null||s.addEventListener("click",async()=>{var c,x,_;const g=(c=document.getElementById("season-name"))==null?void 0:c.value.trim(),d=(x=document.getElementById("season-start"))==null?void 0:x.value,y=(_=document.getElementById("season-end"))==null?void 0:_.value,I=document.getElementById("season-error");if(!g){I.textContent="Le nom est requis.";return}if(!d){I.textContent="La date de début est requise.";return}if(!y){I.textContent="La date de fin est requise.";return}if(new Date(y)<=new Date(d)){I.textContent="La date de fin doit être après le début.";return}const $=document.getElementById("season-save-btn");$.disabled=!0,$.textContent="Enregistrement…";const E={name:g,start_at:new Date(d).toISOString(),end_at:new Date(y).toISOString()};let v;if(a?{error:v}=await w.from("ranked_seasons").update(E).eq("id",e.id):{error:v}=await w.from("ranked_seasons").insert({...E,is_active:!1}),v){I.textContent=v.message,$.disabled=!1,$.textContent=a?"💾 Enregistrer":"✅ Créer la saison";return}t(a?"Saison modifiée ✅":"Saison créée ✅","success"),i(),l()})},50)}Mt(We);function Fn(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function On(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function xe(){document.getElementById("modal-overlay").classList.add("hidden")}const Ve={dashboard:{title:"Dashboard",fn:zt},players:{title:"Joueurs & Cartes",fn:Pt},clubs:{title:"Clubs",fn:Wt},"card-builder":{title:"Card Builder",fn:ln},users:{title:"Managers",fn:ut},market:{title:"Mercato",fn:pt},"import-export":{title:"Import / Export CSV",fn},formations:{title:"Formations & Liens",fn:bn},"boosters-config":{title:"Boosters",fn:En},"sell-price":{title:"Prix vente directe",fn:_n},journal:{title:"Actualités",fn:kn},tutorial:{title:"Tutoriel",fn:An},stadiums:{title:"Stades",fn:zn},"gc-cards":{title:"Game Changers",fn:jn},"ranked-seasons":{title:"Saisons Ranked",fn:Nn}};async function de(e){document.querySelectorAll(".admin-sidebar nav a").forEach(l=>{l.classList.toggle("active",l.dataset.page===e)});const t=document.getElementById("mobile-page-select");t&&(t.value=e);const n=Ve[e]||Ve.dashboard;document.getElementById("page-title").textContent=n.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(i,{toast:Fn,openModal:On,closeModal:xe,navigate:de})}catch(l){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${l.message}</div>`,console.error(l)}}async function Un(){var t;const{data:{session:e}}=await w.auth.getSession();e&&await Ye(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,l=document.getElementById("auth-error");if(l.textContent="",!n||!i){l.textContent="Remplissez tous les champs.";return}const{data:a,error:m}=await w.auth.signInWithPassword({email:n,password:i});if(m){l.textContent=m.message;return}await Ye(a.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await w.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",xe),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&xe()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",i=>{i.preventDefault(),de(n.dataset.page)})}),(t=document.getElementById("mobile-page-select"))==null||t.addEventListener("change",n=>{de(n.target.value)})}async function Ye(e){const{data:t,error:n}=await w.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(n||!t){i.textContent="Profil introuvable.";return}if(!t.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await w.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,de("dashboard")}Un();
