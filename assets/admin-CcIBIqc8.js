import{s as _,r as he,a as Ee,A as bt,l as vt,g as xt,K as Te,D as z,b as ht,S as Et,c as R,H as _t,R as wt,e as ce,d as We,f as It,h as $t,E as kt,i as Bt,N as Lt,M as At,B as St,j as Ct,F as pe,k as Me,m as Tt,n as Ze,o as ge,p as Mt}from"./special-cards-hvDhyFrj.js";async function zt(e){var h;const[{count:t},{count:n},{count:i},{count:s},{count:a},{data:m}]=await Promise.all([_.from("players").select("*",{count:"exact",head:!0}),_.from("clubs").select("*",{count:"exact",head:!0}),_.from("users").select("*",{count:"exact",head:!0}),_.from("stadium_definitions").select("*",{count:"exact",head:!0}),_.from("users").select("*",{count:"exact",head:!0}).gt("last_seen_at",new Date(Date.now()-18e4).toISOString()),_.rpc("get_signup_password")]),p=m||"";e.innerHTML=`
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
        <input id="signup-pwd-input" type="text" value="${p.replace(/"/g,"&quot;")}" style="flex:1">
        <button id="signup-pwd-save" class="btn btn-primary">💾 Enregistrer</button>
      </div>
      <div id="signup-pwd-status" style="font-size:12px;margin-top:8px;min-height:16px"></div>
    </div>
  `,window.adminNav=o=>{var c;(c=document.querySelector(`[data-page="${o}"]`))==null||c.click()},(h=document.getElementById("signup-pwd-save"))==null||h.addEventListener("click",async()=>{const o=document.getElementById("signup-pwd-input").value.trim(),c=document.getElementById("signup-pwd-status");if(!o){c.textContent="Le code ne peut pas être vide.",c.style.color="#ff6b6b";return}const r=document.getElementById("signup-pwd-save");r.disabled=!0,r.textContent="⏳...";const{error:g}=await _.rpc("set_signup_password",{new_password:o});if(r.disabled=!1,r.textContent="💾 Enregistrer",g){c.textContent=g.message,c.style.color="#ff6b6b";return}c.textContent="✅ Code mis à jour.",c.style.color="#2ecc71"})}const Xe={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},Rt={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Dt(){const e={};for(const t of bt)e[t]=await vt(t);return e}async function jt(e,t){const{toast:n}=t;if(!confirm(`Réattribuer une nouvelle photo à tous les joueurs ayant encore l'ancien format de chemin (public/faces/...) ?

Cette action est irréversible.`))return;const i=document.getElementById("fix-old-faces-btn");i&&(i.disabled=!0,i.textContent="⏳ En cours...");try{const{data:s,error:a}=await _.from("players").select("id, country_code, face").like("face","public/faces/%");if(a){n(a.message,"error");return}if(!(s!=null&&s.length)){n("Aucun joueur avec l'ancien format — rien à faire ✅","success");return}const{data:m}=await _.from("players").select("face").not("face","is",null),p=new Set((m||[]).map(c=>c.face).filter(c=>c&&!c.startsWith("public/faces/")));let h=0,o=0;for(const c of s){const r=await Ee(c.country_code,p);if(!r){o++;continue}const{error:g}=await _.from("players").update({face:r}).eq("id",c.id);if(g){o++;continue}p.add(r),h++}n(`${h} photo(s) réattribuée(s)${o?`, ${o} échec(s)`:""} ✅`,o?"error":"success")}finally{i&&(i.disabled=!1,i.textContent="🖼️ Réattribuer anciennes photos")}}async function Nt(e,t){await le(e,t)}async function le(e,t,n=null){var o,c,r,g,u;const{toast:i}=t;n||(n={search:((o=document.getElementById("search-players"))==null?void 0:o.value)||"",job:((c=document.getElementById("filter-job"))==null?void 0:c.value)||"",rarity:((r=document.getElementById("filter-rarity"))==null?void 0:r.value)||"",club:((g=document.getElementById("filter-club"))==null?void 0:g.value)||"",country:((u=document.getElementById("filter-country"))==null?void 0:u.value)||""});const[{data:s,error:a},{data:m}]=await Promise.all([_.from("players").select("*, clubs(id,encoded_name,logo_url)"),_.from("clubs").select("id,encoded_name").order("encoded_name")]);if(a){e.innerHTML=`<p style="color:red">${a.message}</p>`;return}const p={GK:0,DEF:1,MIL:2,ATT:3},h=(s||[]).sort((l,x)=>{const f=(p[l.job]??4)-(p[x.job]??4);return f!==0?f:(l.surname_real||"").localeCompare(x.surname_real||"")});Pt(e,h,m||[],t,n)}function Pt(e,t,n,i,s=null){var c,r;const{toast:a}=i;if(e.innerHTML=`
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
          ${Object.entries(Xe).map(([g,u])=>`<option value="${g}">${u}</option>`).join("")}
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
    </div>`,s){const g=s,u=l=>document.getElementById(l);g.search&&u("search-players")&&(u("search-players").value=g.search),g.job&&u("filter-job")&&(u("filter-job").value=g.job),g.rarity&&u("filter-rarity")&&(u("filter-rarity").value=g.rarity),g.club&&u("filter-club")&&(u("filter-club").value=g.club),g.country&&u("filter-country")&&(u("filter-country").value=g.country)}if(s){const g=s,u=l=>document.getElementById(l);g.search&&u("search-players")&&(u("search-players").value=g.search),g.job&&u("filter-job")&&(u("filter-job").value=g.job),g.rarity&&u("filter-rarity")&&(u("filter-rarity").value=g.rarity),g.club&&u("filter-club")&&(u("filter-club").value=g.club),g.country&&u("filter-country")&&(u("filter-country").value=g.country)}function m(){const g=document.getElementById("search-players").value.toLowerCase(),u=document.getElementById("filter-job").value,l=document.getElementById("filter-rarity").value,x=document.getElementById("filter-club").value,f=document.getElementById("filter-country").value;return t.filter(y=>(!g||`${y.firstname} ${y.surname_real}`.toLowerCase().includes(g))&&(!u||y.job===u)&&(!l||y.rarity===l)&&(!x||y.club_id===x)&&(!f||y.country_code===f))}const p=new Set;function h(){const g=document.getElementById("bulk-bar"),u=document.getElementById("bulk-count");g&&(g.style.display=p.size>0?"flex":"none",u&&(u.textContent=`${p.size} joueur(s) sélectionné(s)`))}function o(){const g=m();document.getElementById("count-label").textContent=`${g.length} joueur(s)`;const u=document.getElementById("players-list");if(!g.length){u.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}u.innerHTML=g.map(l=>{const x={...l,clubs:l.clubs,face:l.face||null},f=he(x,{width:120});return`<div style="position:relative;cursor:pointer" data-edit="${l.id}">
        ${f}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${l.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),u.querySelectorAll("[data-edit]").forEach(l=>{l.addEventListener("click",()=>{const x=t.find(f=>f.id===l.dataset.edit);x&&ze(x,n,e,i)})}),u.querySelectorAll(".btn-del-player").forEach(l=>{l.addEventListener("click",async x=>{if(x.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:f}=await _.from("players").delete().eq("id",l.dataset.del);f?a(f.message,"error"):(a("Joueur supprimé ✅","success"),le(e,i))})})}o(),document.getElementById("search-players").addEventListener("input",o),document.getElementById("filter-job").addEventListener("change",o),document.getElementById("filter-rarity").addEventListener("change",o),document.getElementById("filter-club").addEventListener("change",o),document.getElementById("filter-country").addEventListener("change",o),(c=document.getElementById("bulk-cancel-btn"))==null||c.addEventListener("click",()=>{p.clear(),h(),o()}),(r=document.getElementById("bulk-delete-btn"))==null||r.addEventListener("click",async()=>{var x,f,y,I,B;if(!p.size||!confirm(`Supprimer ${p.size} joueur(s) ?`))return;const g=[...p],{error:u}=await _.from("players").delete().in("id",g);if(u){a(u.message,"error");return}a(`${g.length} joueur(s) supprimé(s) ✅`,"success"),p.clear();const l={search:((x=document.getElementById("search-players"))==null?void 0:x.value)||"",job:((f=document.getElementById("filter-job"))==null?void 0:f.value)||"",rarity:((y=document.getElementById("filter-rarity"))==null?void 0:y.value)||"",club:((I=document.getElementById("filter-club"))==null?void 0:I.value)||"",country:((B=document.getElementById("filter-country"))==null?void 0:B.value)||""};le(e,i,l)}),document.getElementById("add-player-btn").addEventListener("click",()=>ze(null,n,e,i)),document.getElementById("fix-old-faces-btn").addEventListener("click",()=>jt(e,i))}async function ze(e,t,n,i){const{toast:s,openModal:a,closeModal:m}=i,p=!!e,h=await Dt(),{data:o}=await _.from("players").select("face").not("face","is",null),c=new Set((o||[]).map(l=>l.face).filter(Boolean));e!=null&&e.face&&c.delete(e.face);const r='<option value="">— Club —</option>'+t.map(l=>`<option value="${l.id}" ${(e==null?void 0:e.club_id)===l.id?"selected":""}>${l.encoded_name}</option>`).join(""),g=e!=null&&e.face?e.face.split("/")[0]:"",u=Object.keys(h).map(l=>`<option value="${l}" ${g===l?"selected":""}>${l}</option>`).join("");a(p?`✏️ ${e.firstname} ${e.surname_real}`:"➕ Nouveau joueur",`<div style="display:flex;gap:20px;align-items:flex-start">

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
              ${["GK","DEF","MIL","ATT"].map(l=>`<option value="${l}" ${(e==null?void 0:e.job)===l?"selected":""}>${l}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Poste 2</label>
            <select id="pm-job2">
              <option value="">Aucun</option>
              ${["GK","DEF","MIL","ATT"].map(l=>`<option value="${l}" ${(e==null?void 0:e.job2)===l?"selected":""}>${l}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Rareté</label>
            <select id="pm-rarity">
              ${["normal","pepite","papyte","legende"].map(l=>`<option value="${l}" ${(e==null?void 0:e.rarity)===l?"selected":""}>${Xe[l]}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Pays</label>
            <select id="pm-country">
              ${["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"].map(l=>`<option value="${l}" ${((e==null?void 0:e.country_code)||"FR")===l?"selected":""}>${l}</option>`).join("")}
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
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([l,x,f])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${Rt[l]};font-weight:700">${l}</label>
                <input id="${x}" type="number" min="0" max="20" value="${(e==null?void 0:e[f])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
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
          ${p?"💾 Enregistrer":"✅ Créer le joueur"}
        </button>
        </div>
      </div>
    </div>`),setTimeout(()=>{var B,E,b;let l=(e==null?void 0:e.face)||null;function x(){var J,j,W,Z,X,Q,ee,Le,Ae,Se,Ce;const d=document.getElementById("card-preview");if(!d)return;const v=((J=document.getElementById("pm-fn"))==null?void 0:J.value)||"",w=(((j=document.getElementById("pm-real"))==null?void 0:j.value)||"").toUpperCase(),$=((W=document.getElementById("pm-job"))==null?void 0:W.value)||"ATT",k=((Z=document.getElementById("pm-job2"))==null?void 0:Z.value)||null,L=((X=document.getElementById("pm-rarity"))==null?void 0:X.value)||"normal",A=((Q=document.getElementById("pm-country"))==null?void 0:Q.value)||"FR",S=((ee=document.getElementById("pm-club"))==null?void 0:ee.value)||null,C=document.getElementById("pm-club"),M=C==null?void 0:C.options[C.selectedIndex];(M==null?void 0:M.text)!=="— Club —"&&(M==null||M.text);const F=parseInt((Le=document.getElementById("pm-g"))==null?void 0:Le.value)||0,O=parseInt((Ae=document.getElementById("pm-d"))==null?void 0:Ae.value)||0,U=parseInt((Se=document.getElementById("pm-m"))==null?void 0:Se.value)||0,N=parseInt((Ce=document.getElementById("pm-a"))==null?void 0:Ce.value)||0,D=t.find(yt=>yt.id===S),ne={firstname:v||"Prénom",surname_real:w||"NOM",job:$,job2:k||null,rarity:L,country_code:A,club_id:S,note_g:F,note_d:O,note_m:U,note_a:N,face:l||null,clubs:D?{encoded_name:D.encoded_name,logo_url:D.logo_url}:null};d.innerHTML=he(ne,{width:160});const T=document.getElementById("pm-minmax");T&&(T.style.display=["pepite","papyte"].includes(L)?"grid":"none")}function f(d){const v=document.getElementById("faces-grid"),w=document.getElementById("pm-face");if(!v||!w)return;const $=h[d]||[];if(console.log("[players] loadFacesGrid folder=",d,"files=",$.length,$.slice(0,5)),!$.length){w.innerHTML='<option value="">— Aucun visage disponible —</option>',v.innerHTML=`<p style="font-size:11px;color:#888;font-style:italic">Aucune image dans le dossier "${d}" du bucket Supabase.</p>`;return}const k=$.filter(L=>{const A=d+"/"+L;return A===l||!c.has(A)});w.innerHTML='<option value="">— Choisir un visage —</option>'+k.map(L=>{const A=d+"/"+L;return`<option value="${A}" ${l===A?"selected":""}>${L}</option>`}).join(""),v.innerHTML=k.map(L=>{const A=d+"/"+L,S=l===A,C=xt({face:A});return`<div data-face="${A}" style="cursor:pointer;border:2px solid ${S?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${C}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),v.querySelectorAll("[data-face]").forEach(L=>{L.addEventListener("click",()=>{l=L.dataset.face;const A=document.getElementById("pm-face");A&&(A.value=l),v.querySelectorAll("[data-face]").forEach(S=>{S.style.border=`2px solid ${S.dataset.face===l?"#4fc3f7":"transparent"}`}),x()})})}const y=e!=null&&e.face?e.face.split("/")[0]:"";y&&h[y]&&(document.getElementById("pm-folder").value=y,f(y)),(B=document.getElementById("pm-folder"))==null||B.addEventListener("change",d=>{f(d.target.value)}),(E=document.getElementById("pm-face"))==null||E.addEventListener("change",d=>{l=d.target.value||null,x()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach(d=>{var v,w;(v=document.getElementById(d))==null||v.addEventListener("input",x),(w=document.getElementById(d))==null||w.addEventListener("change",x)}),(b=document.getElementById("pm-save"))==null||b.addEventListener("click",()=>Ot(e,p,l,n,i)),x()},50)}function Ft(e){const t=n=>{var i;return(i=document.getElementById(n))==null?void 0:i.value};return{firstname:(t("pm-fn")||"").trim(),surname_real:(t("pm-real")||"").trim()||"JOUEUR",country_code:t("pm-country")||"FR",club_id:t("pm-club")||null,job:t("pm-job")||"ATT",job2:t("pm-job2")||null,rarity:t("pm-rarity")||"normal",note_g:parseInt(t("pm-g"))||0,note_d:parseInt(t("pm-d"))||0,note_m:parseInt(t("pm-m"))||0,note_a:parseInt(t("pm-a"))||0,note_min:parseInt(t("pm-nmin"))||null,note_max:parseInt(t("pm-nmax"))||null,sell_price:parseInt(t("pm-price"))||0,face:e||null,ethnie:t("pm-folder")||null,is_active:!0}}async function Ot(e,t,n,i,s){var u,l,x,f,y;const{toast:a,closeModal:m}=s,p=document.getElementById("pm-error"),h=document.getElementById("pm-save"),o=Ft(n);if(!o.firstname){p.textContent="Le prénom est requis.";return}if(!o.surname_real){p.textContent="Le nom est requis.";return}h.disabled=!0,h.textContent="Enregistrement…";const c=o,{error:r}=t?await _.from("players").update({...c,updated_at:new Date().toISOString()}).eq("id",e.id):await _.from("players").insert(c);if(r){p.textContent=r.message,h.disabled=!1,h.textContent=t?"💾 Enregistrer":"✅ Créer le joueur";return}a(t?"Joueur modifié ✅":"Joueur créé ✅","success"),m();const g={search:((u=document.getElementById("search-players"))==null?void 0:u.value)||"",job:((l=document.getElementById("filter-job"))==null?void 0:l.value)||"",rarity:((x=document.getElementById("filter-rarity"))==null?void 0:x.value)||"",club:((f=document.getElementById("filter-club"))==null?void 0:f.value)||"",country:((y=document.getElementById("filter-country"))==null?void 0:y.value)||""};le(i,s,g)}const Ut={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},Qe=["rase","court","milong","long"];function Gt(e){const t=we(e);if(t==="noir")return"noir";if(t==="typ")return Math.random()<.9?"noir":"marron";if(t==="metisse")return Math.random()<.6?"noir":"marron";const n=Math.random();return n<.35?"blond":n<.75?"marron":"noir"}function Ht(e){return Math.random()<.05?"chauve":Gt(e)}const _e=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function we(e){return Ut[e]||"blanc"}function et(e){return Ht(e)}function fe(e,t){return Math.floor(Math.random()*(t-e+1))+e}function q(e){return e[Math.floor(Math.random()*e.length)]}function tt(e){const t=_e.filter(n=>n!==e);return q(t)}function ye(e){const t=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","GR","RO","BG","UA","RU"],n=["MA","DZ","TN","EG","LY"],i=["NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","TZ","UG","ET"],s=["JP","KR","CN","VN","TH","ID","PH","IN","PK","BD","SA","AE","IR"];return t.includes(e)||["AR","UY","CL","PE","EC","CO","MX","BR"].includes(e)?"Europeans":n.includes(e)?"North Africans":i.includes(e)?"Africans":s.includes(e)?"Asians":"Europeans"}const qt=[{min:1,max:4,pct:55},{min:5,max:10,pct:20},{min:11,max:14,pct:10},{min:15,max:17,pct:10},{min:18,max:20,pct:5}];function nt(){const e=Math.random()*100;let t=0;for(const n of qt)if(t+=n.pct,e<t)return fe(n.min,n.max);return fe(1,4)}function Kt(){const e=Array.from({length:20},(t,n)=>n);return e.sort(()=>Math.random()-.5),new Set(e.slice(0,10))}let oe=null;function Jt(e,t){return e&&(oe||(oe=Kt()),oe.has(t))?fe(15,20):nt()}const se={FR:{first:["Lucas","Tom","Hugo","Théo","Antoine","Kylian","Rayan","Axel","Paul","Enzo","Léo","Mathis","Nathan","Alexis","Ethan","Maxime","Julien","Baptiste","Nicolas","Pierre","Clément","Adrien","Valentin","Dylan","Loïc","Quentin","Florian","Kevin","Corentin","Raphaël"],last:["Martin","Bernard","Petit","Dupont","Moreau","Laurent","Robert","Michel","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard","Bonnet","Rousseau","Fontaine","Chevalier","Blanc","Garnier","Boyer","Gauthier","Garcia","Perrin","Robin","Clément","Morin","Nicolas","Henry","Lemaire","Noël","Dufour","Meunier","Brun","Blanchard","Giraud","Joly","Rivière","Brunet"]},ES:{first:["Carlos","Miguel","Javier","Alejandro","Sergio","David","Diego","Pablo","Álvaro","Marcos","Adrián","Rubén","Iker","Raúl","Fernando","Roberto","Víctor","Iván","Gonzalo","Antonio","Manuel","Jesús","Josué","Rodrigo","Cristian","Héctor","Óscar","Mario","Daniel","Jorge"],last:["García","Rodríguez","Martínez","López","Sánchez","González","Pérez","Hernández","Jiménez","Díaz","Torres","Ramírez","Flores","Rivera","Gómez","Morales","Álvarez","Romero","Herrera","Medina","Aguilar","Vargas","Guzmán","Muñoz","Salazar","Soto","Contreras","Rojas","Ramos","Ortiz"]},PT:{first:["João","Pedro","Diogo","Rúben","Bruno","Tiago","André","Ricardo","Luís","Gonçalo","Nuno","Mário","Fábio","Rui","Miguel","Sérgio","Hugo","Filipe","Paulo","Vítor"],last:["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Carvalho","Gomes","Ribeiro","Araújo","Barbosa","Cardoso","Correia","Teixeira","Machado","Vieira","Monteiro","Cunha","Pinto","Melo","Barros","Freitas","Fonseca","Andrade","Castro","Neves","Figueiredo","Duarte"]},BR:{first:["Gabriel","Lucas","Mateus","Gustavo","Felipe","Rodrigo","Thiago","Rafael","Bruno","Diego","Leonardo","Eduardo","Victor","Pedro","Carlos","Alexandre","André","Paulo","Danilo","Marcelo"],last:["Silva","Santos","Oliveira","Souza","Lima","Ferreira","Costa","Nascimento","Alves","Pereira","Rodrigues","Almeida","Nunes","Melo","Barbosa","Rocha","Brito","Castro","Carvalho","Gomes","Lopes","Ramos","Mendes","Cavalcanti","Batista","Azevedo","Campos","Freitas","Reis","Andrade"]},AR:{first:["Lionel","Sergio","Rodrigo","Nicolás","Ezequiel","Gonzalo","Federico","Mauro","Pablo","Diego","Lucas","Matías","Alejandro","Maximiliano","Emiliano","Marcos","Lautaro","Ángel","Leandro","Julián"],last:["González","Rodríguez","Martínez","García","López","Pérez","Sánchez","Romero","Torres","Flores","Díaz","Gómez","Alvarez","Ruiz","Castro","Herrera","Cabrera","Medina","Ferreyra","Suárez"]},IT:{first:["Marco","Luca","Alessandro","Matteo","Davide","Andrea","Francesco","Federico","Lorenzo","Riccardo","Stefano","Simone","Roberto","Nicola","Giovanni","Antonio","Emanuele","Daniele","Alberto","Giorgio"],last:["Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Ricci","Marino","Greco","Bruno","Gallo","Conti","De Luca","Mancini","Giordano","Rizzo","Lombardi","Moretti","Fontana","Rinaldi"]},DE:{first:["Lukas","Max","Jonas","Florian","Tobias","Stefan","Markus","Sebastian","Niklas","Leon","Tim","Felix","Alexander","Philipp","Christian","Thomas","Michael","Jan","Moritz","Fabian"],last:["Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Wolf","Schröder","Neumann","Schwarz","Zimmermann","Braun","Krüger","Hofmann","Wagner","Becker","Koch","Lehmann","Kaiser"]},GB:{first:["James","Harry","Oliver","Jack","George","Charlie","William","Thomas","Alfie","Edward","Ryan","Liam","Noah","Ethan","Kyle","Jordan","Callum","Aaron","Declan","Connor"],last:["Smith","Jones","Williams","Brown","Taylor","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Walker","Wright","Robinson","White","Thompson","Hughes","Edwards","Green","Hall"]},MA:{first:["Yassine","Karim","Mehdi","Amine","Hamza","Bilal","Soufiane","Rachid","Omar","Mohammed","Zakaria","Ilyas","Ayoub","Saad","Khalid","Adil","Tarik","Hicham","Reda","Nabil"],last:["Benali","Amrani","Bouazza","Cherif","Haddad","Meziane","Belkacem","Rahmani","Saidi","Zidane","Belhadj","Tazi","Idrissi","Alaoui","Bennani","Fassi","Lahlou","Naciri","Tahiri","Zniber"]},DZ:{first:["Yacine","Riyad","Sofiane","Haris","Adem","Islam","Bilal","Omar","Nassim","Mehdi","Ryad","Zinedine","Youssef","Farid","Karim","Mourad","Walid","Anes","Ferhat","Djamel"],last:["Amrouche","Boudiaf","Cherki","Guessab","Hamdi","Jaber","Lakhal","Mahjoub","Rezki","Sahnoun","Talbi","Zerrouki","Achour","Bakri","Chaouch","Djaballah","Ferhat","Gacem","Khaldi","Larbi"]},SN:{first:["Sadio","Ismaïla","Cheikhou","Gana","Famara","Mbaye","Pape","Aliou","Moussa","Sidy","Idrissa","Lamine","Bamba","Fallou","Abdou","Diallo","Mamadou","Souleymane","Oumar","Cheikh"],last:["Diallo","Traoré","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Ndiaye","Sow","Cissé","Fofana","Keita","Sylla","Kane","Diarra","Sanogo","Baldé","Kouyaté"]},CI:{first:["Didier","Wilfried","Serge","Jonathan","Franck","Maxwel","Salomon","Gervinho","Nicolas","Maxime","Ismael","Romaric","Abdul","Cheick","Arouna","Kolo","Yaya","Geoffroy","Siaka","Adama"],last:["Drogba","Zaha","Gnagnon","Koné","Touré","Bamba","Diomandé","Konaté","Coulibaly","Fofana","Traoré","Doumbia","Sanogo","Diabaté","Kalou","Bakayoko","Gradel","Seri","Aurier","Haller"]},CM:{first:["Samuel","Alex","Karl","Fabrice","Cédric","Nicolas","Georges","André","Joël","Roger","François","Jean","Patrick","Thierry","Eric","Benjamin","Aristide","Clinton","Clinton","Stéphane"],last:["Eto'o","Song","Choupo-Moting","Aboubakar","Bassogog","Kunde","Toko","Nkoudou","Ngadeu","Oyongo","Fai","Zambo","Mokoena","Ekambi","Tchamba","Mbida","Biya","Kameni","Meyong","Webo"]},NG:{first:["Kelechi","Ahmed","Victor","John","Emmanuel","Samuel","Moses","Ola","Chukwuemeka","Odion","Sunday","Chidi","Nnamdi","Chisom","Tunde","Emeka","Obinna","Uchenna","Ifeanyi","Segun"],last:["Osimhen","Iheanacho","Musa","Onyekuru","Iwobi","Ndidi","Nwankwo","Obi","Mikel","Martins","Okocha","Yekini","Amunike","Babangida","Fash","Lawal","Onuoha","Taiwo","Ayodele","Ameobi"]},JP:{first:["Ryota","Kenji","Hiroshi","Takumi","Yuto","Daichi","Shinji","Makoto","Koji","Naoki","Yuya","Shoya","Ryo","Shu","Atsuto","Masato","Hotaru","Genki","Ko","Ritsu"],last:["Nakamura","Tanaka","Suzuki","Sato","Yamamoto","Watanabe","Ito","Yamada","Saito","Matsumoto","Inoue","Kimura","Hayashi","Shimizu","Yamazaki","Mori","Abe","Ikeda","Kato","Honda"]},KR:{first:["Heung","Son","Ji","Sung","Jae","Young","Kang","Hyun","Woo","Tae","Seung","Min","Jun","Dong","Chang","Sang","Yo","Hee","Jin","Bum"],last:["Kim","Park","Lee","Choi","Jung","Kang","Cho","Yoon","Lim","Oh","Han","Seo","Kwon","Hwang","Ahn","Yang","Shin","Yoo","Jang","Song"]},MX:{first:["Carlos","Hirving","Andrés","Javier","Miguel","Raúl","Héctor","Diego","Jorge","Luis","Rodolfo","Erick","Jonathan","Néstor","Tecatito","Chicharito","Oswaldo","Oribe","Uriel","Giovanni"],last:["Hernández","Lozano","Guardado","Vela","Morales","Jiménez","Reyes","Corona","Herrera","Rodríguez","Ochoa","Chicharito","Flores","Domínguez","Araujo","Álvarez","Pineda","Sánchez","Antuna","Meza"]},_DEFAULT_EUROPE:{first:["Stefan","Ivan","Luca","Marco","Andrei","Cristian","Bogdan","Mircea","Adrian","Florin","Dušan","Aleksandar","Nikola","Nemanja","Marko","Filip","Milan","Branislav","Radomir","Dejan"],last:["Popescu","Ionescu","Stan","Marin","Stoica","Popa","Radu","Constantin","Barbu","Dobre","Petrović","Marković","Nikolić","Jovanović","Popović","Stanković","Đorđević","Lukić","Simić","Ilić"]},_DEFAULT_AFRIQUE:{first:["Mamadou","Ibrahima","Moussa","Seydou","Boubacar","Oumar","Modibo","Adama","Bakary","Abdoulaye","Lamine","Ousmane","Sekou","Demba","Tidiane","Amadou","Issiaka","Siaka","Fode","Samba"],last:["Diallo","Traoré","Coulibaly","Koné","Doumbia","Kouyaté","Bah","Konaté","Touré","Camara","Sylla","Keita","Diakité","Sangaré","Sanou","Sidibé","Bathily","Niakaté","Dioumassi","Sissoko"]},_DEFAULT_ASIE:{first:["Wei","Ming","Jae","Van","Duc","Sorn","Ali","Hassan","Reza","Arman","Yusuf","Tariq","Faris","Khalid","Saad","Rashid","Nasser","Walid","Ziad","Adel"],last:["Zhang","Wang","Liu","Chen","Yang","Huang","Zhou","Wu","Xu","Sun","Al-Rashidi","Al-Dosari","Al-Harthi","Al-Balushi","Al-Farsi","Al-Shamsi","Al-Neyadi","Al-Breiki","Al-Hammadi","Al-Mansouri"]},_DEFAULT_AMERIQUE:{first:["James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Marcus","Jordan","Andre","Devonte","Malik","Tyrone","Jamal","Darius","DeShawn","Brandon","Cody"],last:["Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Taylor","Anderson","Jackson","White","Harris","Clark","Lewis","Walker","Hall","Allen","Young","King"]}},Vt={FR:"FR",BE:"FR",CH:"FR",MC:"FR",LU:"FR",ES:"ES",MX:"MX",CO:"ES",VE:"ES",PE:"ES",CL:"ES",EC:"ES",UY:"ES",PY:"ES",BO:"ES",CR:"ES",PA:"ES",HN:"ES",GT:"ES",SV:"ES",NI:"ES",DO:"ES",CU:"ES",PT:"PT",AO:"PT",MZ:"PT",CV:"PT",BR:"BR",AR:"AR",IT:"IT",SM:"IT",DE:"DE",AT:"DE",GB:"GB",IE:"GB",AU:"GB",NZ:"GB",CA:"GB",MA:"MA",TN:"DZ",LY:"DZ",DZ:"DZ",SN:"SN",ML:"SN",GN:"SN",GW:"SN",GM:"SN",MR:"SN",CI:"CI",BF:"CI",TG:"CI",BJ:"CI",GH:"CI",CM:"CM",GA:"CM",CG:"CM",CD:"CM",NG:"NG",JP:"JP",KR:"KR",MX:"MX",PL:"_DEFAULT_EUROPE",CZ:"_DEFAULT_EUROPE",SK:"_DEFAULT_EUROPE",HU:"_DEFAULT_EUROPE",HR:"_DEFAULT_EUROPE",RS:"_DEFAULT_EUROPE",SI:"_DEFAULT_EUROPE",RO:"_DEFAULT_EUROPE",BG:"_DEFAULT_EUROPE",GR:"_DEFAULT_EUROPE",TR:"_DEFAULT_EUROPE",RU:"_DEFAULT_EUROPE",UA:"_DEFAULT_EUROPE",NL:"_DEFAULT_EUROPE",DK:"_DEFAULT_EUROPE",SE:"_DEFAULT_EUROPE",NO:"_DEFAULT_EUROPE",FI:"_DEFAULT_EUROPE",AL:"_DEFAULT_EUROPE",EG:"_DEFAULT_AFRIQUE",ZA:"_DEFAULT_AFRIQUE",KE:"_DEFAULT_AFRIQUE",ET:"_DEFAULT_AFRIQUE",TZ:"_DEFAULT_AFRIQUE",UG:"_DEFAULT_AFRIQUE",CN:"_DEFAULT_ASIE",VN:"_DEFAULT_ASIE",TH:"_DEFAULT_ASIE",ID:"_DEFAULT_ASIE",PH:"_DEFAULT_ASIE",IN:"_DEFAULT_ASIE",PK:"_DEFAULT_ASIE",BD:"_DEFAULT_ASIE",IR:"_DEFAULT_ASIE",SA:"_DEFAULT_ASIE",AE:"_DEFAULT_ASIE",QA:"_DEFAULT_ASIE",KW:"_DEFAULT_ASIE",IQ:"_DEFAULT_ASIE",SY:"_DEFAULT_ASIE",JO:"_DEFAULT_ASIE",US:"_DEFAULT_AMERIQUE"};function it(e){return Vt[e]||"_DEFAULT_EUROPE"}function ot(e){const t=it(e),n=(se[t]||se._DEFAULT_EUROPE).first;return q(n)}function at(e){const t=it(e);return(se[t]||se._DEFAULT_EUROPE).last}function Yt(e,t,n=new Set,i=!1){const s=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],a=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],m=new Set(a.sort(()=>Math.random()-.5).slice(0,4)),p=[...a].sort(()=>Math.random()-.5),h=new Set(p.slice(0,2)),o=new Set(p.slice(2,4)),c=10,r=s.map((l,x)=>x<c);for(let l=r.length-1;l>0;l--){const x=Math.floor(Math.random()*(l+1));[r[l],r[x]]=[r[x],r[l]]}const g=new Set;function u(l){const x=at(l),f=x.filter(E=>!g.has(E)&&!n.has(E)),y=f.length?f:x.filter(E=>!g.has(E)),I=y.length?y:x,B=q(I);return g.add(B),B}return s.map((l,x)=>{const f=r[x]?t:tt(t),y=we(f),I=et(f),B=q(Qe),E=Jt(i,x),b=m.has(x),d=b?Math.max(0,E-2):0;let v=0,w=0,$=0,k=0,L=null;l==="GK"?v=E:l==="DEF"?(w=E,b&&($=d,L="MIL")):l==="ATT"?(k=E,b&&($=d,L="MIL")):($=E,b&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(w=d,L="DEF"):(k=d,L="ATT")));const A=h.has(x)?"pepite":o.has(x)?"papyte":"normal",S=u(f);return{job:l,job2:L,firstname:ot(f),surname_real:S,country_code:f,club_id:e,note_g:v,note_d:w,note_m:$,note_a:k,skin:y,hair:I,hair_length:B,rarity:A,sell_price:0,ethnie:ye(f),_ethnie:ye(f)}})}async function rt(e,t,n,i=!1){oe=null;const{data:s}=await _.from("players").select("surname_real").not("surname_real","is",null),a=new Set((s||[]).map(l=>l.surname_real).filter(Boolean)),m=Yt(e,t,a,i),{data:p}=await _.from("players").select("face").not("face","is",null),h=new Set((p||[]).map(l=>l.face).filter(Boolean)),o=new Set;for(const l of m){const x=await Ee(l.country_code,new Set([...h,...o]));x&&(l.face=x,o.add(x)),delete l._ethnie}const{data:c,error:r}=await _.from("players").insert(m).select("id");if(r){console.error("[GenSquad] Erreur batch insert:",r.message,r.details),n("Erreur: "+r.message,"error");return}const g=(c||[]).map(l=>({card_type:"player",player_id:l.id}));if(g.length){const{error:l}=await _.from("cards").insert(g);l&&console.warn("[GenSquad] Erreur cartes:",l.message)}const u=(c==null?void 0:c.length)||0;console.log("[GenSquad] Créés:",u,"/",m.length),u>0?n(`${u} joueurs générés ✅`,"success"):n("Erreur génération joueurs","error")}function lt(e){return{style:e.kit_style||z.style,color1:e.kit_color1||z.color1,color2:e.kit_color2||z.color2,color3:e.kit_color3||z.color3,shorts:e.kit_shorts||z.shorts,socks:e.kit_socks||z.socks}}let ae=[];async function Wt(e,t){await ue(e,t)}async function ue(e,t){const[{data:n,error:i},{data:s}]=await Promise.all([_.from("clubs").select("*").order("real_name"),_.from("players").select("club_id")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}ae=n||[];const a={};(s||[]).forEach(m=>{a[m.club_id]=(a[m.club_id]||0)+1}),Zt(e,t,a)}function Zt(e,t,n={}){const{toast:i,openModal:s,closeModal:a}=t;e.innerHTML=`
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
    </div>`,m(ae),document.getElementById("search-clubs").addEventListener("input",p=>{const h=p.target.value.toLowerCase();m(ae.filter(o=>o.real_name.toLowerCase().includes(h)||o.encoded_name.toLowerCase().includes(h)))}),document.getElementById("add-club-btn").addEventListener("click",()=>Re(null,e,t));function m(p){const h=document.getElementById("clubs-list");if(!p.length){h.innerHTML='<p style="color:var(--tile-fg-dim);padding:20px;text-align:center">Aucun club.</p>';return}h.innerHTML=p.map(o=>{const c=lt(o),r=o.logo_url?`<img src="${o.logo_url}" style="width:36px;height:36px;object-fit:contain;border-radius:8px;flex-shrink:0">`:`<div style="width:36px;height:36px;background:linear-gradient(135deg,${c.color1},${c.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:900;flex-shrink:0">${o.encoded_name.slice(0,3)}</div>`,g=n[o.id]||0;return`
        <div class="club-row" data-club-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:10px;cursor:pointer;background:var(--tile-bg);border:1px solid var(--tile-border);transition:background .15s">
          ${r}
          <img src="https://flagsapi.com/${o.country_code}/flat/24.png" style="width:18px;height:13px;object-fit:cover;border-radius:2px;flex-shrink:0" onerror="this.style.display='none'">
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:12px;color:var(--tile-fg-on-page);font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o.encoded_name}</div>
            <div style="font-size:10px;color:${g===0?"#e67e22":"var(--tile-fg-dim)"}">${g===0?"⚠️ 0 joueur":`👥 ${g}`}</div>
          </div>
          <button class="btn-del-club" data-del="${o.id}"
            style="width:22px;height:22px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;flex-shrink:0"
            onclick="event.stopPropagation()">✕</button>
        </div>`}).join(""),h.querySelectorAll(".club-row").forEach(o=>{o.addEventListener("click",()=>{const c=ae.find(r=>r.id===o.dataset.clubId);c&&Re(c,e,t),h.querySelectorAll(".club-row").forEach(r=>r.style.background="var(--tile-bg)"),o.style.background="rgba(26,107,60,0.18)"})}),h.querySelectorAll(".btn-del-club").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:c}=await _.from("clubs").delete().eq("id",o.dataset.del);c?i(c.message,"error"):(i("Club supprimé","success"),ue(e,t))})})}}async function Re(e,t,n){var f,y,I,B,E,b;const{toast:i}=n,s=!!e,a=e?lt(e):{...z},m=document.getElementById("club-panel");if(!m)return;const p=Object.entries(Te).map(([d,v])=>`<option value="${d}" ${a.style===d?"selected":""}>${v.label}</option>`).join(""),h=_e.map(d=>`<option value="${d}" ${((e==null?void 0:e.country_code)||"FR")===d?"selected":""}>${d}</option>`).join("");m.style.display="block",m.style.alignItems="",m.style.justifyContent="",m.innerHTML=`
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
              <select id="m-kit-style" style="width:100%">${p}</select>
            </div>
            ${[["Couleur 1","m-kit-color1",a.color1,!1],["Couleur 2","m-kit-color2",a.color2,!1],["Couleur 3","m-kit-color3",a.color3,!0],["Short","m-kit-shorts",a.shorts,!1],["Chaussettes","m-kit-socks",a.socks,!1]].map(([d,v,w,$])=>`
              <div class="form-group" id="wrap-${v}" ${$?'style="display:none"':""}>
                <label>${d}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${v}" value="${w||"#000000"}" style="width:38px;height:32px;padding:2px;border:1px solid var(--tile-border);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${v}-txt" value="${w||"#000000"}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
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
  `,(f=document.getElementById("m-logo-file"))==null||f.addEventListener("change",d=>{var $;const v=($=d.target.files)==null?void 0:$[0];if(!v)return;const w=new FileReader;w.onload=()=>{document.getElementById("logo-preview").innerHTML=`<img src="${w.result}" style="width:100%;height:100%;object-fit:contain">`},w.readAsDataURL(v)}),te();function o(){var $,k;const d=(($=document.getElementById("m-kit-style"))==null?void 0:$.value)||"uni",v=((k=Te[d])==null?void 0:k.colors)===3,w=document.getElementById("wrap-m-kit-color3");w&&(w.style.display=v?"":"none")}o(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(d=>{const v=document.getElementById(d),w=document.getElementById(d+"-txt");!v||!w||(v.addEventListener("input",()=>{w.value=v.value,te()}),w.addEventListener("input",()=>{const $=w.value.trim();/^#[0-9a-fA-F]{6}$/.test($)&&(v.value=$,te())}),w.addEventListener("change",()=>{let $=w.value.trim();$.startsWith("#")||($="#"+$),/^#[0-9a-fA-F]{6}$/.test($)&&(v.value=$,w.value=$,te())}))}),(y=document.getElementById("m-kit-style"))==null||y.addEventListener("change",()=>{o(),te()});const c=document.getElementById("m-real"),r=document.getElementById("m-encoded");function g(){if(!c||!r||r.value)return;const d=c.value.trim().split(/\s+/),v=d.length===1?d[0].toUpperCase().slice(0,6):d.filter(w=>w.length>2).map(w=>w[0].toUpperCase()).join("")||d[0].toUpperCase().slice(0,4);r.value=v}c==null||c.addEventListener("input",g),(I=document.getElementById("auto-encode-btn"))==null||I.addEventListener("click",()=>{r&&(r.value=""),g()}),(B=document.getElementById("m-save"))==null||B.addEventListener("click",()=>on(e,s,t,n));const u=document.getElementById("m-gen-squad"),l=document.getElementById("m-gen-strong-label");function x(){if(l&&(l.style.display=u!=null&&u.checked?"flex":"none",!(u!=null&&u.checked))){const d=document.getElementById("m-gen-strong");d&&(d.checked=!1)}}u==null||u.addEventListener("change",x),x(),(E=document.getElementById("btn-gen-squad-panel"))==null||E.addEventListener("click",()=>{Xt(e,n,t)}),(b=document.getElementById("btn-gen-one-player"))==null||b.addEventListener("click",()=>{en(e,n)}),s&&Ie(e.id)}async function Ie(e){const{data:t}=await _.from("players").select("*, clubs(encoded_name, logo_url, kit_style, kit_color1, kit_color2, kit_color3, kit_shorts, kit_socks)").eq("club_id",e).order("surname_real"),n=document.getElementById("club-players-grid"),i=document.getElementById("club-players-count");if(i&&(i.textContent=(t||[]).length),!!n){if(!(t!=null&&t.length)){n.innerHTML='<div style="color:var(--tile-fg-dim);padding:20px;font-size:13px">Aucun joueur dans ce club.</div>';return}n.innerHTML=t.map(s=>he(s,{width:100})).join("")}}function Xt(e,t,n){const{openModal:i,closeModal:s,toast:a}=t;i(`⚽ Générer — ${e.real_name}`,`<div style="display:flex;flex-direction:column;gap:14px">
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
    </div>`),setTimeout(()=>{var m,p;(m=document.getElementById("qg-cancel"))==null||m.addEventListener("click",()=>s()),(p=document.getElementById("qg-ok"))==null||p.addEventListener("click",async()=>{var o;const h=((o=document.getElementById("qg-strong"))==null?void 0:o.checked)??!1;s(),a("Génération en cours…","info"),await rt(e.id,e.country_code,a,h),a("Effectif généré ✅","success"),Ie(e.id),ue(n,t)})},50)}const st=["GK","DEF","MIL","ATT"],Qt=[{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}];function en(e,t){const{openModal:n,closeModal:i,toast:s}=t,a=_e.map(o=>`<option value="${o}">${o}</option>`).join(""),m=o=>st.map(c=>`<option value="${c}" ${c===o?"selected":""}>${c}</option>`).join(""),p=`
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
              ${Qt.map(o=>`<option value="${o.value}">${o.label}</option>`).join("")}
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
  `),setTimeout(()=>{var o,c;document.querySelectorAll('input[name="gen-one-mode"]').forEach(r=>{r.addEventListener("change",()=>{document.getElementById("gen-one-custom-fields").style.display=r.value==="custom"&&r.checked?"flex":"none"})}),(o=document.getElementById("gen-one-cancel"))==null||o.addEventListener("click",()=>i()),(c=document.getElementById("gen-one-ok"))==null||c.addEventListener("click",async()=>{var l,x,f,y,I;const r=((l=document.querySelector('input[name="gen-one-mode"]:checked'))==null?void 0:l.value)||"random",g=document.getElementById("gen-one-ok");g.disabled=!0,g.textContent="⏳ Génération…";const u={};r==="custom"&&(u.job=((x=document.getElementById("gen-one-job1"))==null?void 0:x.value)||null,u.job2=((f=document.getElementById("gen-one-job2"))==null?void 0:f.value)||null,u.rarity=((y=document.getElementById("gen-one-rarity"))==null?void 0:y.value)||null,u.country=((I=document.getElementById("gen-one-country"))==null?void 0:I.value)||null);try{await tn(e,u),s("Joueur généré ✅","success"),i(),Ie(e.id)}catch(B){s("Erreur : "+B.message,"error"),g.disabled=!1,g.textContent="➕ Générer"}})},50)}async function tn(e,t={}){const n=t.country||(Math.random()<.5?e.country_code:tt(e.country_code)),i=t.job||q(st),s=t.job2||null,a=t.rarity||(()=>{const L=Math.random()*100;return L<1.5?"legende":L<3?"pepite":L<4.5?"papyte":"normal"})(),m=nt(),p=s?Math.max(0,m-2):0;let h=0,o=0,c=0,r=0;i==="GK"&&(h=m),i==="DEF"&&(o=m),i==="MIL"&&(c=m),i==="ATT"&&(r=m),s==="GK"&&(h=p),s==="DEF"&&(o=p),s==="MIL"&&(c=p),s==="ATT"&&(r=p);const g=we(n),u=et(n),l=q(Qe),{data:x}=await _.from("players").select("surname_real").not("surname_real","is",null),f=new Set((x||[]).map(L=>L.surname_real).filter(Boolean)),y=at(n),I=y.filter(L=>!f.has(L)),B=q(I.length?I:y),E={job:i,job2:s,firstname:ot(n),surname_real:B,country_code:n,club_id:e.id,note_g:h,note_d:o,note_m:c,note_a:r,skin:g,hair:u,hair_length:l,rarity:a,sell_price:0,ethnie:ye(n)},{data:b}=await _.from("players").select("face").not("face","is",null),d=new Set((b||[]).map(L=>L.face).filter(Boolean)),v=await Ee(n,d);v&&(E.face=v);const{data:w,error:$}=await _.from("players").insert(E).select("id").single();if($)throw $;const{error:k}=await _.from("cards").insert({card_type:"player",player_id:w.id});k&&console.warn("[GenOnePlayer] Erreur carte:",k.message)}function dt(){var e,t,n,i,s,a;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((t=document.getElementById("m-kit-color1"))==null?void 0:t.value)||"#1A6B3C",color2:((n=document.getElementById("m-kit-color2"))==null?void 0:n.value)||"#ffffff",color3:((i=document.getElementById("m-kit-color3"))==null?void 0:i.value)||"#000000",shorts:((s=document.getElementById("m-kit-shorts"))==null?void 0:s.value)||"#111111",socks:((a=document.getElementById("m-kit-socks"))==null?void 0:a.value)||"#ffffff"}}function te(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=ht(dt(),"panel"))}async function nn(e,t){const n=(e.name.split(".").pop()||"png").toLowerCase(),i=`clubs/${t||"new"}-${Date.now()}.${n}`,{error:s}=await _.storage.from("assets").upload(i,e,{upsert:!0,cacheControl:"3600"});if(s)throw s;const{data:a}=_.storage.from("assets").getPublicUrl(i);return a.publicUrl}async function on(e,t,n,i){var B,E,b,d,v,w,$,k,L;const{toast:s}=i,a=document.getElementById("m-error"),m=document.getElementById("m-save"),p=(B=document.getElementById("m-real"))==null?void 0:B.value.trim(),h=(E=document.getElementById("m-encoded"))==null?void 0:E.value.trim().toUpperCase(),o=(b=document.getElementById("m-country"))==null?void 0:b.value.trim().toUpperCase(),c=((v=(d=document.getElementById("m-logo-file"))==null?void 0:d.files)==null?void 0:v[0])||null,r=((w=document.getElementById("m-logo-url-current"))==null?void 0:w.value)||null,g=(($=document.getElementById("m-gen-stadium"))==null?void 0:$.checked)??!1,u=((k=document.getElementById("m-gen-squad"))==null?void 0:k.checked)??!1,l=((L=document.getElementById("m-gen-strong"))==null?void 0:L.checked)??!1,x=dt();if(!p){a.textContent="Le nom du club est requis.";return}if(!h){a.textContent="Le nom encodé est requis.";return}if(!o){a.textContent="Le pays est requis.";return}m.disabled=!0,m.textContent="Enregistrement…";let f=r;if(c)try{m.textContent="📤 Envoi du logo…",f=await nn(c,e==null?void 0:e.id)}catch(A){a.textContent="Erreur upload logo : "+A.message,m.disabled=!1,m.textContent=t?"💾 Enregistrer":"✅ Créer le club";return}const y={real_name:p,encoded_name:h,country_code:o,logo_url:f,kit_style:x.style,kit_color1:x.color1,kit_color2:x.color2,kit_color3:x.color3,kit_shorts:x.shorts,kit_socks:x.socks};let I=e==null?void 0:e.id;if(t){const{error:A}=await _.from("clubs").update(y).eq("id",I);if(A){a.textContent=A.message,m.disabled=!1,m.textContent="💾 Enregistrer";return}}else{const{data:A,error:S}=await _.from("clubs").insert(y).select().single();if(S){a.textContent=S.message,m.disabled=!1,m.textContent="✅ Créer le club";return}if(I=A.id,g){m.textContent="🏟️ Création du stade…";const{data:C,error:M}=await _.from("stadium_definitions").insert({name:`Stade de ${p}`,club_id:I,country_code:o}).select().single();M?console.warn("[Stadium] Erreur def stade:",M.message):C&&await _.from("cards").insert({card_type:"stadium",stadium_id:C.id})}u&&(m.textContent="⚽ Génération des joueurs…",await rt(I,o,s,l))}s(t?"Club modifié ✅":"Club créé ✅","success"),ue(n,i)}const an=["normal","pepite","papyte","legende"],De=["GK","DEF","MIL","ATT"],rn=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let K={...R},re=[];async function ln(e,{toast:t}){const{data:n}=await _.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");re=n||[],K={...R},e.innerHTML=un(re),dn(e,re,t),P()}function je(){var n;const e=((n=document.getElementById("cb-surname-real"))==null?void 0:n.value)||"",t=document.getElementById("cb-surname-enc");t&&(t.value=ce(e))}function sn(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=re.find(i=>String(i.id)===String(e));return t?{style:t.kit_style||z.style,color1:t.kit_color1||z.color1,color2:t.kit_color2||z.color2,shorts:t.kit_shorts||z.shorts,socks:t.kit_socks||z.socks}:{...z}}function P(){var g,u,l,x;const e=f=>{var y;return((y=document.getElementById(f))==null?void 0:y.value)||""},t={firstname:e("cb-firstname"),surname_real:e("cb-surname-enc")||ce(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((u=(g=document.getElementById("cb-club"))==null?void 0:g.selectedOptions[0])==null?void 0:u.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=sn(),i=document.getElementById("cb-club"),s=((x=(l=i==null?void 0:i.selectedOptions[0])==null?void 0:l.dataset)==null?void 0:x.logo)||null,a=We(K,n,120),m=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(a)}`,p=It(t,{portraitUrl:m,clubLogoUrl:s,showNotes:!0}),h=document.getElementById("card-preview");h&&(h.innerHTML=p);const o=document.getElementById("avatar-preview-wrap");o&&(o.innerHTML=a);const c=e("cb-surname-real"),r=document.getElementById("encode-summary");r&&c&&(r.textContent=`${e("cb-firstname")} ${c} → ${e("cb-firstname")} ${t.surname_real}`)}function ct(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};K={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function dn(e,t,n){var s,a,m,p,h;e.querySelectorAll("input,select").forEach(o=>{o.addEventListener("input",P),o.addEventListener("change",P)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(o=>{var c;(c=document.getElementById(o))==null||c.addEventListener("change",()=>{ct(),P()})}),(s=document.getElementById("cb-surname-real"))==null||s.addEventListener("input",()=>{je(),P()}),(a=document.getElementById("btn-encode"))==null||a.addEventListener("click",()=>{je(),P()}),(m=document.getElementById("cb-club"))==null||m.addEventListener("change",P),(p=document.getElementById("btn-save-player"))==null||p.addEventListener("click",()=>cn(n)),(h=document.getElementById("btn-reset"))==null||h.addEventListener("click",()=>{e.querySelectorAll("input").forEach(o=>o.value=""),e.querySelectorAll("select").forEach(o=>o.selectedIndex=0),K={...R},i.forEach(o=>{const c=o.replace("av-",""),r=document.getElementById(o);r&&(r.value=R[c]||"")}),P()})}async function cn(e){const t=m=>{var p;return((p=document.getElementById(m))==null?void 0:p.value)||""},n=t("cb-surname-real").trim(),i=t("cb-surname-enc").trim()||ce(n);if(!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}ct();const s={firstname:t("cb-firstname").trim(),surname_real:n,surname_real:i,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:K,skin:K.skin||"blanc",hair:K.hairColor||"marron",hair_length:"court"},{error:a}=await _.from("players").insert(s);if(a){e("Erreur: "+a.message,"error");return}e(`✅ Joueur "${s.firstname} ${s.surname_real}" enregistré !`,"success")}function un(e){const t=rn.map(([o,c])=>`<option value="${o}">${c} (${o})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(o=>`<option value="${o.id}" data-logo="${o.logo_url||""}">${o.encoded_name}</option>`).join(""),i=De.map(o=>`<option value="${o}">${o}</option>`).join(""),s='<option value="">Aucun</option>'+De.map(o=>`<option value="${o}">${o}</option>`).join(""),a=an.map(o=>`<option value="${o}">${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join(""),m=(o,c,r)=>Object.entries(c).map(([g,u])=>`<option value="${g}" ${g===(r||"")?"selected":""}>${u.label}</option>`).join(""),p=Object.keys(Et).map(o=>`<option value="${o}" ${o===R.skin?"selected":""}>${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join(""),h=Object.keys(_t).map(o=>`<option value="${o}" ${o===R.hairColor?"selected":""}>${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join("");return`
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
              <select id="av-hair">${m("av-hair",$t,R.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${h}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${m("av-eyebrows",kt,R.eyebrows)}</select>
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
  `}async function ut(e,{toast:t}){const{data:n,error:i}=await _.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").order("created_at",{ascending:!1});if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const s=n||[];e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <input id="search-users" placeholder="🔍 Rechercher un manager…" style="width:260px">
      <span style="font-size:13px;color:var(--gray-600)">${s.length} manager(s)</span>
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
  `,a(s),document.getElementById("search-users").addEventListener("input",m=>{const p=m.target.value.toLowerCase();a(s.filter(h=>{var o;return h.pseudo.toLowerCase().includes(p)||((o=h.club_name)==null?void 0:o.toLowerCase().includes(p))}))});function a(m){document.getElementById("users-tbody").innerHTML=m.map(p=>{const h=p.mmr??1e3,o=p.mmr_deviation??350,c=p.placement_matches??0,r=Ct(h),g=p.ranked_wins??0,u=p.ranked_losses??0,l=p.ranked_draws??0,x=g+u+l,f=x>0?Math.round(g/x*100):null,y=c<10,I=o<80?"#1A6B3C":o<150?"#e67e22":"#bb2020";return`
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
            ${y?`<div style="font-size:10px;color:#e67e22">${c}/10 placement${c<10?` (${10-c} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${g}V ${l}N ${u}D${f!==null?` · ${f}% WR`:""}</div>`}
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
        </tr>`}).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(p=>{p.addEventListener("click",async()=>{const h=p.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${h?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:o}=await _.from("users").update({is_admin:h}).eq("id",p.dataset.toggleAdmin);o?t(o.message,"error"):(t("Rôle mis à jour ✅","success"),ut(e,{toast:t}))})})}}const me=[{value:"normal",label:"Normal",color:"#ccc"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function pt(e,t){var h;const{toast:n}=t,{data:i,error:s}=await _.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_real, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(s){e.innerHTML=`<p style="color:var(--danger)">${s.message}</p>`;return}const a=i||[],m=a.filter(o=>o.status==="active").length,p=a.filter(o=>o.status==="sold").length;e.innerHTML=`
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
            ${a.map(o=>{var u,l,x,f;const c=(u=o.card)==null?void 0:u.player,r=c?`${c.firstname} ${c.surname_real}`:((l=o.card)==null?void 0:l.card_type)||"—",g={active:"#1A6B3C",sold:"#D4A017",cancelled:"#888"};return`<tr>
                <td><b>${r}</b>${c?`<div style="font-size:10px;color:var(--tile-fg-dim)">${c.rarity} · ${c.job}</div>`:""}</td>
                <td style="font-size:12px">${((x=o.seller)==null?void 0:x.pseudo)||"—"}</td>
                <td style="font-size:12px">${((f=o.buyer)==null?void 0:f.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(o.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${g[o.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
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
  `,document.querySelectorAll("[data-cancel]").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:c}=await _.from("market_listings").update({status:"cancelled"}).eq("id",o.dataset.cancel);c?n(c.message,"error"):(n("Annonce annulée","success"),pt(e,t))})}),(h=document.getElementById("btn-price-grid"))==null||h.addEventListener("click",()=>pn(t))}async function pn(e){const{openModal:t,closeModal:n,toast:i}=e;await be(e)}async function be(e){var o,c,r,g;const{openModal:t,closeModal:n,toast:i}=e,{data:s,error:a}=await _.from("sell_price_configs").select("*").order("rarity").order("note_min");if(a){i(a.message,"error");return}const m=u=>{const l=me.find(x=>x.value===u.rarity)||me[0];return`<tr data-row="${u.id}">
      <td><span style="color:${l.color};font-weight:700">${l.label}</span></td>
      <td style="text-align:center">${u.note_min}</td>
      <td style="text-align:center">${u.note_max}</td>
      <td style="text-align:right">${(u.price_min||0).toLocaleString("fr")} cr.</td>
      <td style="text-align:right">${(u.price_max||0).toLocaleString("fr")} cr.</td>
      <td style="text-align:center">
        <button class="btn btn-ghost btn-sm" data-edit-row="${u.id}">✏️</button>
        <button class="btn btn-danger btn-sm" data-del-row="${u.id}">🗑️</button>
      </td>
    </tr>`},p=`
    <p style="font-size:13px;color:#666;margin-bottom:14px">
      Définit la fourchette de prix autorisée à la vente sur le marché, selon la rareté et la note du joueur.
      Ex : Normal, note 1 à 5 → vendable entre 2 500 et 15 000 cr.
    </p>
    <div style="max-height:320px;overflow-y:auto;margin-bottom:14px">
      <table>
        <thead>
          <tr><th>Rareté</th><th style="text-align:center">Note min</th><th style="text-align:center">Note max</th><th style="text-align:right">Prix min</th><th style="text-align:right">Prix max</th><th style="text-align:center">Actions</th></tr>
        </thead>
        <tbody id="pg-tbody">
          ${(s||[]).map(m).join("")||'<tr><td colspan="6" style="text-align:center;color:#aaa;padding:20px">Aucune règle définie.</td></tr>'}
        </tbody>
      </table>
    </div>

    <div id="pg-form" style="display:none;background:#f7f7f7;border-radius:10px;padding:14px;margin-top:10px">
      <input type="hidden" id="pg-id">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
        <div>
          <label>RARETÉ</label>
          <select id="pg-rarity">${me.map(u=>`<option value="${u.value}">${u.label}</option>`).join("")}</select>
        </div>
        <div></div>
        <div>
          <label>NOTE MIN</label>
          <input id="pg-note-min" type="number" min="0" max="999" value="0">
        </div>
        <div>
          <label>NOTE MAX</label>
          <input id="pg-note-max" type="number" min="0" max="999" value="20">
        </div>
        <div>
          <label>PRIX MIN (cr.)</label>
          <input id="pg-price-min" type="number" min="0" value="2500">
        </div>
        <div>
          <label>PRIX MAX (cr.)</label>
          <input id="pg-price-max" type="number" min="0" value="15000">
        </div>
      </div>
      <div style="display:flex;gap:8px">
        <button id="pg-form-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
        <button id="pg-form-save" class="btn btn-primary" style="flex:1">Enregistrer la ligne</button>
      </div>
    </div>
  `;t("📊 Grille des prix — vente marché",p,`
    <button id="pg-add-row" class="btn btn-primary">+ Ajouter une ligne</button>
    <button id="pg-close" class="btn btn-ghost">Fermer</button>
  `),(o=document.getElementById("pg-close"))==null||o.addEventListener("click",()=>n()),(c=document.getElementById("pg-add-row"))==null||c.addEventListener("click",()=>{document.getElementById("pg-form").style.display="block",document.getElementById("pg-id").value="",document.getElementById("pg-rarity").value="normal",document.getElementById("pg-note-min").value=0,document.getElementById("pg-note-max").value=20,document.getElementById("pg-price-min").value=2500,document.getElementById("pg-price-max").value=15e3}),document.querySelectorAll("[data-edit-row]").forEach(u=>{u.addEventListener("click",()=>{const l=(s||[]).find(x=>x.id===u.dataset.editRow);l&&(document.getElementById("pg-form").style.display="block",document.getElementById("pg-id").value=l.id,document.getElementById("pg-rarity").value=l.rarity,document.getElementById("pg-note-min").value=l.note_min,document.getElementById("pg-note-max").value=l.note_max,document.getElementById("pg-price-min").value=l.price_min,document.getElementById("pg-price-max").value=l.price_max)})}),document.querySelectorAll("[data-del-row]").forEach(u=>{u.addEventListener("click",async()=>{confirm("Supprimer cette ligne ?")&&(await _.from("sell_price_configs").delete().eq("id",u.dataset.delRow),i("Ligne supprimée","success"),be(e))})}),(r=document.getElementById("pg-form-cancel"))==null||r.addEventListener("click",()=>{document.getElementById("pg-form").style.display="none"}),(g=document.getElementById("pg-form-save"))==null||g.addEventListener("click",async()=>{const u=document.getElementById("pg-id").value,l={rarity:document.getElementById("pg-rarity").value,note_min:Number(document.getElementById("pg-note-min").value)||0,note_max:Number(document.getElementById("pg-note-max").value)||0,price_min:Number(document.getElementById("pg-price-min").value)||0,price_max:Number(document.getElementById("pg-price-max").value)||0};if(l.price_min>l.price_max){i("Le prix min doit être ≤ prix max","error");return}if(l.note_min>l.note_max){i("La note min doit être ≤ note max","error");return}const{error:x}=u?await _.from("sell_price_configs").update(l).eq("id",u):await _.from("sell_price_configs").insert(l);if(x){i(x.message,"error");return}i("Règle enregistrée ✅","success"),be(e)})}async function mn(e,{toast:t}){e.innerHTML=`
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
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:n,error:i}=await _.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun club à exporter","info");return}let s=`real_name,encoded_name,country_code,logo_url
`;n.forEach(a=>{s+=[a.real_name,a.encoded_name,a.country_code,a.logo_url||""].map(Ne).join(",")+`
`}),ie("clubs_export.csv",s),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:i}=await _.from("players").select("firstname,surname_real,surname_real,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_real");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let s=`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(a=>{var m;s+=[a.firstname,a.surname_real,a.surname_real,a.country_code,((m=a.clubs)==null?void 0:m.encoded_name)||"",a.job,a.job2||"",a.note_g,a.note_d,a.note_m,a.note_a,a.rarity,a.note_min??"",a.note_max??"",a.skin,a.hair,a.hair_length,a.sell_price].map(Ne).join(",")+`
`}),ie("players_export.csv",s),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const s=document.getElementById("clubs-import-result");s.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const a=await i.text(),m=Pe(a);if(m.length===0){s.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let p=0,h=0;const o=[];for(const c of m){if(!c.real_name||!c.encoded_name||!c.country_code){h++,o.push(`Ligne ignorée (champs manquants): ${c.real_name||"?"}`);continue}const r={real_name:c.real_name,encoded_name:c.encoded_name.toUpperCase(),country_code:c.country_code.toUpperCase().slice(0,2),logo_url:c.logo_url||null},{error:g}=await _.from("clubs").upsert(r,{onConflict:"encoded_name"});g?(h++,o.push(`${c.encoded_name}: ${g.message}`)):p++}s.innerHTML=`<div style="color:var(--green)">✅ ${p} clubs importés</div>
        ${h>0?`<div style="color:#c0392b">❌ ${h} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${o.slice(0,10).join("<br>")}</div>`:""}`,t(`${p} clubs importés`,"success")}catch(a){s.innerHTML=`<span style="color:#c0392b">Erreur : ${a.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const s=document.getElementById("players-import-result");s.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const a=await i.text(),m=Pe(a);if(m.length===0){s.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:p}=await _.from("clubs").select("id,encoded_name"),h={};(p||[]).forEach(y=>{h[y.encoded_name.toUpperCase()]=y.id});let o=0,c=0;const r=[],g=["GK","DEF","MIL","ATT"],u=["normal","pepite","papyte","legende"],l=["blanc","metisse","typ","noir"],x=["blond","marron","noir","chauve"],f=["rase","court","milong","long"];for(const y of m){if(!y.firstname||!y.surname_real||!y.country_code||!y.job){c++,r.push(`Ligne ignorée (champs requis manquants): ${y.firstname||"?"}`);continue}if(!g.includes(y.job)){c++,r.push(`${y.firstname}: job invalide "${y.job}"`);continue}const I=y.club_encoded_name&&h[y.club_encoded_name.toUpperCase()]||null,B={firstname:y.firstname,surname_real:y.surname_real,surname_real:y.surname_real||ce(y.surname_real),country_code:y.country_code.toUpperCase().slice(0,2),club_id:I,job:y.job,job2:g.includes(y.job2)?y.job2:null,note_g:parseInt(y.note_g)||0,note_d:parseInt(y.note_d)||0,note_m:parseInt(y.note_m)||0,note_a:parseInt(y.note_a)||0,rarity:u.includes(y.rarity)?y.rarity:"normal",note_min:y.note_min!==""&&y.note_min!=null?parseInt(y.note_min):null,note_max:y.note_max!==""&&y.note_max!=null?parseInt(y.note_max):null,skin:l.includes(y.skin)?y.skin:"blanc",hair:x.includes(y.hair)?y.hair:"noir",hair_length:f.includes(y.hair_length)?y.hair_length:"court",sell_price:parseInt(y.sell_price)||0},{error:E}=await _.from("players").insert(B);E?(c++,r.push(`${y.firstname} ${y.surname_real}: ${E.message}`)):o++}s.innerHTML=`<div style="color:var(--green)">✅ ${o} joueurs importés</div>
        ${c>0?`<div style="color:#c0392b">❌ ${c} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${r.slice(0,10).join("<br>")}</div>`:""}`,t(`${o} joueurs importés`,"success")}catch(a){s.innerHTML=`<span style="color:#c0392b">Erreur : ${a.message}</span>`}n.target.value=""})}function Ne(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function ie(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(n),s=document.createElement("a");s.href=i,s.download=e,s.click(),URL.revokeObjectURL(i)}function Pe(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(m=>m.trim());if(t.length<2)return[];const n=t[0],i=n.split(";").length>n.split(",").length?";":",",s=Fe(n,i).map(m=>m.trim().replace(/^\uFEFF/,"").toLowerCase()),a=[];for(let m=1;m<t.length;m++){if(!t[m].trim())continue;const p=Fe(t[m],i),h={};s.forEach((o,c)=>{h[o]=(p[c]||"").trim()}),!Object.values(h).every(o=>!o)&&a.push(h)}return a}function Fe(e,t=","){const n=[];let i="",s=!1;for(let a=0;a<e.length;a++){const m=e[a];s?m==='"'?e[a+1]==='"'?(i+='"',a++):s=!1:i+=m:m==='"'?s=!0:m===t?(n.push(i),i=""):i+=m}return n.push(i),n}const gn={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function fn(e,{toast:t}){const n=Object.keys(pe);let i=n[0];const{data:s}=await _.from("formation_links_overrides").select("formation, links"),a={};(s||[]).forEach(c=>{a[c.formation]=c.links});let m=new Set;function p(c,r){return[c,r].sort().join("-")}function h(c){const r=a[c]||pe[c]||[];m=new Set(r.map(([g,u])=>p(g,u)))}h(i),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${n.map(c=>`<option value="${c}" ${c===i?"selected":""}>${c}</option>`).join("")}
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
  `;function o(){const c=Tt[i]||{},r=Me(i),g=320,u=400,l=22;function x(E){const b=c[E];return b?{x:b.x*g,y:b.y*u}:null}let f=`<svg width="${g}" height="${u}" viewBox="0 0 ${g} ${u}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;r.forEach(([E,b],d)=>{const v=x(E),w=x(b);if(!v||!w)return;const $=p(E,b),k=m.has($),L=k?"#3b82f6":"#999",A=k?.95:.35,S=k?4:3;f+=`<line x1="${v.x}" y1="${v.y}" x2="${w.x}" y2="${w.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${$}" style="cursor:pointer"/>`,f+=`<line x1="${v.x}" y1="${v.y}" x2="${w.x}" y2="${w.y}"
        stroke="${L}" stroke-width="${S}" stroke-dasharray="${k?"none":"4,3"}"
        opacity="${A}" pointer-events="none" data-line-key="${$}"/>`});for(const E of Object.keys(c)){const b=x(E);if(!b)continue;const d=E.replace(/\d+/,""),v=gn[d]||"#555";f+=`<circle cx="${b.x}" cy="${b.y}" r="${l}" fill="${v}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,f+=`<text x="${b.x}" y="${b.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${E}</text>`}f+="</svg>",document.getElementById("field-wrap").innerHTML=f;const y=document.getElementById("links-list");y.innerHTML=r.map(([E,b])=>{const d=p(E,b),v=m.has(d);return`
        <button class="link-toggle" data-key="${d}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${v?"#3b82f6":"#ddd"};
          background:${v?"#eaf2ff":"#fafafa"};
          color:${v?"#1d4ed8":"#888"}">
          <span>${E} ↔ ${b}</span>
          <span>${v?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const I=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');I&&(I.textContent=`Liens (${m.size}/${r.length} actifs)`);function B(E){m.has(E)?m.delete(E):m.add(E),o()}e.querySelectorAll(".link-hit").forEach(E=>{E.addEventListener("click",()=>B(E.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(E=>{E.addEventListener("click",()=>B(E.dataset.key))})}o(),document.getElementById("formation-select").addEventListener("change",c=>{i=c.target.value,h(i),o()}),document.getElementById("reset-btn").addEventListener("click",()=>{const c=pe[i]||[];m=new Set(c.map(([r,g])=>p(r,g))),o(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const r=Me(i).filter(([u,l])=>m.has(p(u,l))),{error:g}=await _.from("formation_links_overrides").upsert({formation:i,links:r,updated_at:new Date().toISOString()});if(g){t(g.message,"error");return}a[i]=r,t(`Liens enregistrés pour ${i} (${r.length} actifs)`,"success")})}const yn=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],bn=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],vn=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function xn(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await _.from("booster_configs").select("*").order("sort_order");let n=null,i=[],s=null;const a=()=>window.innerWidth<700;async function m(){if(!n){i=[];return}if(n!==s){const{data:r}=await _.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");i=r||[],s=n}}function p(){return`
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
    </div>`}function h(){const r=n?(t||[]).find(l=>l.id===n):null;if(!r)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const g=i.reduce((l,x)=>l+Number(x.percentage||0),0),u=Math.abs(g-100)<.1;return`
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
              ${vn.map(l=>`<option value="${l.value}" ${r.price_type===l.value?"selected":""}>${l.label}</option>`).join("")}
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
            <span style="margin-left:10px;font-size:12px;color:${u?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${g.toFixed(1)}% ${u?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((l,x)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${x}">
            <select class="rate-type" data-idx="${x}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${yn.map(f=>`<option value="${f.value}" ${l.card_type===f.value?"selected":""}>${f.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${x}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${bn.map(f=>`<option value="${f.value}" ${(l.rarity||"")===f.value?"selected":""}>${f.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${x}" type="number" min="0" max="20" value="${l.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${x}" type="number" min="0" max="20" value="${l.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${x}" type="number" min="0.1" max="100" step="0.1" value="${l.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${x}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function o(r=!1){r||await m();const g=!n&&a(),u=n&&a();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!a()||g||!n?p():""}
      ${!a()||u?h():""}
    </div>`,c()}function c(){var u,l,x,f,y,I,B;const r=E=>e.querySelector(E);e.querySelectorAll(".booster-row").forEach(E=>{E.addEventListener("click",b=>{b.target.closest(".btn-delete")||(n=E.dataset.id,s=null,o())})}),(u=r("#btn-back"))==null||u.addEventListener("click",()=>{n=null,o()}),(l=r("#btn-new"))==null||l.addEventListener("click",async()=>{const E=prompt("Nom du nouveau booster :");if(!(E!=null&&E.trim()))return;const{data:b,error:d}=await _.from("booster_configs").insert({name:E.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(d){alert(d.message);return}t.push(b),n=b.id,s=null,o()}),e.querySelectorAll(".btn-delete").forEach(E=>{E.addEventListener("click",async b=>{if(b.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await _.from("booster_configs").delete().eq("id",E.dataset.id);const d=t.findIndex(v=>v.id===E.dataset.id);d>-1&&t.splice(d,1),n===E.dataset.id&&(n=null,s=null),o()})}),(x=r("#btn-cancel"))==null||x.addEventListener("click",()=>{n=null,o()}),(f=r("#f-price-type"))==null||f.addEventListener("change",E=>{const b=r("#credits-field");b&&(b.style.opacity=E.target.value!=="credits"?"0.4":"1")}),(y=r("#btn-pick-icon"))==null||y.addEventListener("click",async()=>{var b;const E=r("#icon-picker-grid");if(E){if(E.style.display!=="none"){E.style.display="none";return}E.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',E.style.display="block";try{const v=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),w=Array.isArray(v)?v.filter(k=>k.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(k.name)):[];if(!w.length){E.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const $=((b=r("#f-image-url"))==null?void 0:b.value)||"";E.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${w.map(k=>`
          <div class="icon-pick-item" data-name="${k.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${k.name===$?"#1A6B3C":"#ddd"};background:${k.name===$?"#f0f7f0":"#fff"}">
            <img src="/icons/${k.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${k.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,E.querySelectorAll(".icon-pick-item").forEach(k=>{k.addEventListener("click",()=>{const L=r("#f-image-url");L&&(L.value=k.dataset.name),E.style.display="none"})})}catch(d){E.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${d.message}</div>`}}});function g(){e.querySelectorAll("[data-rate-idx]").forEach(E=>{var d,v,w,$,k;const b=Number(E.dataset.rateIdx);b>=0&&b<i.length&&(i[b].card_type=((d=E.querySelector(".rate-type"))==null?void 0:d.value)||"player",i[b].rarity=((v=E.querySelector(".rate-rarity"))==null?void 0:v.value)||null,i[b].note_min=Number((w=E.querySelector(".rate-note-min"))==null?void 0:w.value)||null,i[b].note_max=Number(($=E.querySelector(".rate-note-max"))==null?void 0:$.value)||null,i[b].percentage=Number((k=E.querySelector(".rate-pct"))==null?void 0:k.value)||0)})}(I=r("#btn-add-rate"))==null||I.addEventListener("click",()=>{g(),i.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),o(!0)}),e.querySelectorAll(".btn-del-rate").forEach(E=>{E.addEventListener("click",()=>{g(),i.splice(Number(E.dataset.idx),1),o(!0)})}),(B=r("#btn-save"))==null||B.addEventListener("click",async()=>{var $,k,L,A,S,C,M,F,O,U,N,D,ne;const E=(t||[]).find(T=>T.id===n);if(!E)return;const b=[];e.querySelectorAll("[data-rate-idx]").forEach(T=>{var W,Z,X,Q,ee;const J=Number(T.dataset.rateIdx);b.push({booster_id:n,card_type:((W=T.querySelector(".rate-type"))==null?void 0:W.value)||"player",rarity:((Z=T.querySelector(".rate-rarity"))==null?void 0:Z.value)||null,note_min:Number((X=T.querySelector(".rate-note-min"))==null?void 0:X.value)||null,note_max:Number((Q=T.querySelector(".rate-note-max"))==null?void 0:Q.value)||null,percentage:Number((ee=T.querySelector(".rate-pct"))==null?void 0:ee.value)||0,sort_order:J});const j=b[b.length-1];j.rarity||(j.rarity=null),j.note_min||(j.note_min=null),j.note_max||(j.note_max=null)});const d=b.reduce((T,J)=>T+J.percentage,0);if(b.length&&Math.abs(d-100)>.5){alert(`La somme doit faire 100% (actuellement ${d.toFixed(1)}%)`);return}const v={name:((k=($=r("#f-name"))==null?void 0:$.value)==null?void 0:k.trim())||E.name,image_url:((A=(L=r("#f-image-url"))==null?void 0:L.value)==null?void 0:A.trim())||null,price_type:(S=r("#f-price-type"))==null?void 0:S.value,price_credits:Number((C=r("#f-price-credits"))==null?void 0:C.value)||0,card_count:Number((M=r("#f-card-count"))==null?void 0:M.value)||5,is_active:((F=r("#f-active"))==null?void 0:F.checked)??E.is_active,allow_duplicates:((O=r("#f-allow-dup"))==null?void 0:O.checked)??!0,sort_order:Number((U=r("#f-sort"))==null?void 0:U.value)||0,max_per_user:(N=r("#f-max-per-user"))!=null&&N.value?Number(r("#f-max-per-user").value):null,available_from:((D=r("#f-available-from"))==null?void 0:D.value)||null,available_until:((ne=r("#f-available-until"))==null?void 0:ne.value)||null},{error:w}=await _.from("booster_configs").update(v).eq("id",n);if(w){alert(w.message);return}if(Object.assign(E,v),await _.from("booster_drop_rates").delete().eq("booster_id",n),b.length){const{error:T}=await _.from("booster_drop_rates").insert(b);if(T){alert(T.message);return}}i=b,s=n,alert("✅ Booster enregistré !"),o(!0)})}o()}const mt=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function hn(e){await $e(e)}async function $e(e){const{data:t,error:n}=await _.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
          ${(t||[]).map(i=>En(i)).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>Oe(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>_n(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const s=(t||[]).find(a=>a.id===i.dataset.edit);s&&i.addEventListener("click",()=>Oe(s))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await _.from("sell_price_configs").delete().eq("id",i.dataset.delete),await $e(e))})})}function En(e){const t=mt.find(n=>n.value===e.rarity);return`
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
    </tr>`}function Oe(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function _n(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,s=parseInt(document.getElementById("form-note-min").value)||1,a=parseInt(document.getElementById("form-note-max").value)||10;if(s>a){alert("Note min doit être ≤ note max");return}const m={rarity:n,price:i,note_min:s,note_max:a,updated_at:new Date().toISOString()};let p;if(t?{error:p}=await _.from("sell_price_configs").update(m).eq("id",t):{error:p}=await _.from("sell_price_configs").insert(m),p){alert("Erreur : "+p.message);return}document.getElementById("config-form").style.display="none",await $e(e)}async function wn(e){await ke(e)}async function ke(e){const{data:t}=await _.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Journal des mises à jour</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(t||[]).map(n=>In(n)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>Ue(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>kn(e)),e.querySelectorAll("[data-edit]").forEach(n=>{const i=(t||[]).find(s=>s.id===n.dataset.edit);i&&n.addEventListener("click",()=>Ue(i))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await _.from("patch_notes").delete().eq("id",n.dataset.delete),await ke(e))})})}function In(e){const t=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
    <div style="background:#fff;border-radius:10px;padding:14px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;gap:12px;align-items:flex-start">
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
        <button data-edit="${e.id}" class="btn btn-ghost btn-sm">✏️</button>
        <button data-delete="${e.id}" class="btn btn-ghost btn-sm" style="color:#cc2222">🗑️</button>
      </div>
    </div>`}function Ue(e){const t=document.getElementById("article-form");t.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img-current").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-img-file").value="";const n=document.getElementById("form-art-img-preview");n.innerHTML=e!=null&&e.image_url?`<img src="${e.image_url}" style="width:100%;height:100%;object-fit:cover">`:'<span style="font-size:20px;opacity:.4">📰</span>',document.getElementById("form-art-img-file").onchange=a=>{var h;const m=(h=a.target.files)==null?void 0:h[0];if(!m)return;const p=new FileReader;p.onload=()=>{n.innerHTML=`<img src="${p.result}" style="width:100%;height:100%;object-fit:cover">`},p.readAsDataURL(m)},document.getElementById("form-art-pub").checked=e?e.is_published:!0;const i=new Date((e==null?void 0:e.published_at)||Date.now()),s=new Date(i.getTime()-i.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=s,t.scrollIntoView({behavior:"smooth"})}async function $n(e){const t=(e.name.split(".").pop()||"png").toLowerCase(),n=`journal/${Date.now()}.${t}`,{error:i}=await _.storage.from("assets").upload(n,e,{upsert:!0,cacheControl:"3600"});if(i)throw i;const{data:s}=_.storage.from("assets").getPublicUrl(n);return s.publicUrl}async function kn(e){var u;const t=document.getElementById("form-id").value,n=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),s=((u=document.getElementById("form-art-img-file").files)==null?void 0:u[0])||null,a=document.getElementById("form-art-img-current").value||null,m=document.getElementById("form-art-pub").checked,p=document.getElementById("form-art-date").value,h=document.getElementById("form-save");if(!n){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}let o=a;if(s)try{h&&(h.textContent="📤 Envoi de l'image…"),o=await $n(s)}catch(l){alert("Erreur upload image : "+l.message),h&&(h.textContent="💾 Enregistrer");return}const c=p?new Date(p).toISOString():new Date().toISOString(),r={title:n,description:i,image_url:o,is_published:m,published_at:c};let g;if(t?{error:g}=await _.from("patch_notes").update(r).eq("id",t):{error:g}=await _.from("patch_notes").insert(r),g){alert("Erreur : "+g.message);return}document.getElementById("article-form").style.display="none",await ke(e)}async function Bn(e){await Y(e)}async function Y(e){var c,r,g,u,l,x,f,y,I,B,E,b;const{data:t}=await _.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([d,v,w])=>`<button type="button" data-cmd="${v}" title="${w}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${d}</button>`).join("")}
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
            </div>`:(t||[]).map(d=>Ln(d)).join("")}
        </div>
      </div><!-- /colonne droite -->
    </div>`,(c=document.getElementById("ts-add"))==null||c.addEventListener("click",()=>Ge(null,(t==null?void 0:t.length)||0)),(r=document.getElementById("ts-reset"))==null||r.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:d}=await _.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(d?"Erreur : "+d.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(g=document.getElementById("ts-cancel"))==null||g.addEventListener("click",gt),(u=document.getElementById("ts-save"))==null||u.addEventListener("click",()=>Sn(e)),(l=document.getElementById("ts-preview-btn"))==null||l.addEventListener("click",An);const n=document.getElementById("ts-editor"),i=()=>{const d=document.getElementById("ts-content");d&&n&&(d.value=n.innerHTML)};n==null||n.addEventListener("input",i),n==null||n.addEventListener("blur",i);const s=()=>{document.activeElement!==n&&(n==null||n.focus())};(x=document.getElementById("ts-toolbar"))==null||x.querySelectorAll("[data-cmd]").forEach(d=>{d.addEventListener("mousedown",v=>{v.preventDefault(),s();const w=d.dataset.cmd;w.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,w.split(":")[1]):document.execCommand(w,!1,null),i()})}),(f=document.getElementById("ts-insert-color"))==null||f.addEventListener("mousedown",d=>{d.preventDefault(),s();const v=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");v&&(document.execCommand("foreColor",!1,v),i())}),(y=document.getElementById("ts-clear-format"))==null||y.addEventListener("mousedown",d=>{d.preventDefault(),s(),document.execCommand("removeFormat",!1,null),i()}),n==null||n.addEventListener("focus",()=>{n&&(n.style.borderColor="#1A6B3C")}),n==null||n.addEventListener("blur",()=>{n&&(n.style.borderColor="#ddd")});const a=document.getElementById("ts-image"),m=document.getElementById("ts-img-preview"),p=document.getElementById("ts-img-preview-el"),h=document.getElementById("ts-img-picker-grid"),o=()=>{var v;const d=(v=a==null?void 0:a.value)==null?void 0:v.trim();if(d){const w="/";p.src=`${w}icons/${d}`,m.style.display="block"}else m.style.display="none"};a==null||a.addEventListener("input",o),(I=document.getElementById("ts-img-clear"))==null||I.addEventListener("click",()=>{a&&(a.value=""),m.style.display="none",h.style.display="none"}),(B=document.getElementById("ts-img-pick"))==null||B.addEventListener("click",async()=>{if(h.style.display!=="none"){h.style.display="none";return}h.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',h.style.display="block";try{const v=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),w=Array.isArray(v)?v.filter(k=>k.name.startsWith("tuto_")):[];if(!w.length){h.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const $="/";h.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+w.map(k=>`
          <div data-pick="${k.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${$}icons/${k.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${k.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",h.querySelectorAll("[data-pick]").forEach(k=>{k.addEventListener("click",()=>{a&&(a.value=k.dataset.pick),o(),h.style.display="none"})})}catch(d){h.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+d.message+"</div>"}}),(E=document.getElementById("ts-color"))==null||E.addEventListener("input",d=>{const v=document.getElementById("ts-color-hex");v&&(v.value=d.target.value)}),(b=document.getElementById("ts-color-hex"))==null||b.addEventListener("input",d=>{const v=d.target.value;if(/^#[0-9a-fA-F]{6}$/.test(v)){const w=document.getElementById("ts-color");w&&(w.value=v)}}),e.querySelectorAll("[data-edit]").forEach(d=>{const v=(t||[]).find(w=>w.id===d.dataset.edit);v&&d.addEventListener("click",()=>Ge(v))}),e.querySelectorAll("[data-delete]").forEach(d=>{d.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await _.from("tutorial_steps").delete().eq("id",d.dataset.delete),Y(e))})}),e.querySelectorAll("[data-toggle]").forEach(d=>{d.addEventListener("click",async()=>{const v=(t||[]).find(w=>w.id===d.dataset.toggle);v&&(await _.from("tutorial_steps").update({is_active:!v.is_active}).eq("id",v.id),Y(e))})}),e.querySelectorAll("[data-up]").forEach(d=>{d.addEventListener("click",async()=>{const v=t||[],w=v.findIndex($=>$.id===d.dataset.up);w<=0||(await Promise.all([_.from("tutorial_steps").update({step_order:v[w-1].step_order}).eq("id",v[w].id),_.from("tutorial_steps").update({step_order:v[w].step_order}).eq("id",v[w-1].id)]),Y(e))})}),e.querySelectorAll("[data-down]").forEach(d=>{d.addEventListener("click",async()=>{const v=t||[],w=v.findIndex($=>$.id===d.dataset.down);w<0||w>=v.length-1||(await Promise.all([_.from("tutorial_steps").update({step_order:v[w+1].step_order}).eq("id",v[w].id),_.from("tutorial_steps").update({step_order:v[w].step_order}).eq("id",v[w+1].id)]),Y(e))})})}function Ln(e){return`
  <div style="background:#fff;border-radius:10px;padding:12px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;align-items:center;gap:12px">
    <div style="font-size:28px;flex-shrink:0;width:40px;text-align:center">${e.emoji}</div>
    <div style="width:10px;height:36px;border-radius:4px;flex-shrink:0;background:${e.color}"></div>
    <div style="flex:1;min-width:0">
      <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e.title}</div>
      <div style="font-size:11px;color:#aaa;margin-top:2px">Ordre : ${e.step_order} · ${e.is_active?"🟢 Active":"🔴 Désactivée"}</div>
    </div>
    <div style="display:flex;gap:4px;flex-shrink:0;flex-wrap:wrap;justify-content:flex-end">
      <button data-up="${e.id}" class="btn btn-ghost btn-sm" title="Monter" style="padding:4px 8px">↑</button>
      <button data-down="${e.id}" class="btn btn-ghost btn-sm" title="Descendre" style="padding:4px 8px">↓</button>
      <button data-toggle="${e.id}" class="btn btn-ghost btn-sm" style="padding:4px 8px">${e.is_active?"🔴 Désactiver":"🟢 Activer"}</button>
      <button data-edit="${e.id}" class="btn btn-ghost btn-sm" style="padding:4px 8px">✏️</button>
      <button data-delete="${e.id}" class="btn btn-ghost btn-sm" style="color:#cc2222;padding:4px 8px">🗑️</button>
    </div>
  </div>`}function Ge(e,t=0){document.getElementById("ts-form-empty").style.display="none",document.getElementById("ts-form-content").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const n=document.getElementById("ts-editor");n&&(n.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??t,document.getElementById("ts-active").checked=e?e.is_active:!0;const i=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=i,document.getElementById("ts-color-hex").value=i;const s=(e==null?void 0:e.image_url)||"",a=document.getElementById("ts-image");a&&(a.value=s);const m=document.getElementById("ts-img-preview"),p=document.getElementById("ts-img-preview-el");if(s&&m&&p){const h="/";p.src=`${h}icons/${s}`,m.style.display="block"}else m&&(m.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function gt(){document.getElementById("ts-form-content").style.display="none",document.getElementById("ts-form-empty").style.display="block",document.getElementById("ts-preview-area").innerHTML=""}function An(){var o,c;const e=document.getElementById("ts-emoji").value||"⚽",t=document.getElementById("ts-title").value||"Titre",n=document.getElementById("ts-editor"),i=n?n.innerHTML:document.getElementById("ts-content").value||"",s=document.getElementById("ts-color-hex").value||"#1A6B3C",a=(c=(o=document.getElementById("ts-image"))==null?void 0:o.value)==null?void 0:c.trim(),p=a?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${a}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",h=document.getElementById("ts-preview-area");h.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${s}"></div></div>
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
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${s};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,h.querySelectorAll("ul,ol").forEach(r=>{r.style.paddingLeft="20px",r.style.margin="6px 0"}),h.querySelectorAll("li").forEach(r=>{r.style.marginBottom="4px"}),h.querySelectorAll("p").forEach(r=>{r.style.marginBottom="8px"})}async function Sn(e){var r,g;const t=document.getElementById("ts-id").value,n=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),s=document.getElementById("ts-editor"),a=(s?s.innerHTML:document.getElementById("ts-content").value).trim(),m=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",p=parseInt(document.getElementById("ts-order").value)||0,h=document.getElementById("ts-active").checked;if(!i||!a){alert("Titre et contenu sont obligatoires.");return}const o={emoji:n,title:i,content:a,color:m,step_order:p,is_active:h,image_url:((g=(r=document.getElementById("ts-image"))==null?void 0:r.value)==null?void 0:g.trim())||null};let c;if(t?{error:c}=await _.from("tutorial_steps").update(o).eq("id",t):{error:c}=await _.from("tutorial_steps").insert(o),c){alert("Erreur : "+c.message);return}gt(),Y(e)}const ft="/",Cn=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function Tn(e,t){await ve(e,t)}async function ve(e,t){var s;const[{data:n},{data:i}]=await Promise.all([_.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),_.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">🏟️ Stades</h2>
        <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="st-list">
        ${(n||[]).length?(n||[]).map(a=>Mn(a)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucun stade créé.</div>'}
      </div>
    </div>`,(s=document.getElementById("st-add-btn"))==null||s.addEventListener("click",()=>He(null,i,e,t)),e.querySelectorAll("[data-edit-stadium]").forEach(a=>{a.addEventListener("click",()=>{const m=(n||[]).find(p=>p.id===a.dataset.editStadium);m&&He(m,i,e,t)})})}function Mn(e){var s,a;let t=null;e.image_url?t=e.image_url.startsWith("http")?e.image_url:`${ft}icons/${e.image_url}`:(s=e.club)!=null&&s.logo_url?t=e.club.logo_url:e.country_code&&(t=`https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/64.png`);const n=((a=e.club)==null?void 0:a.encoded_name)||e.country_code||"—",i=Ze(e.name,t,`${n}<br>+10 ⭐`,{width:140});return`<div data-edit-stadium="${e.id}" style="cursor:pointer;transition:transform .15s" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
    ${i}
  </div>`}function He(e,t,n,i){var c,r,g;const{openModal:s,closeModal:a,toast:m}=i,p=`
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
            ${Cn.map(([u,l])=>`<option value="${u}" ${(e==null?void 0:e.country_code)===u?"selected":""}>${l} (${u})</option>`).join("")}
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
  `;s(e?`Modifier : ${e.name}`:"Nouveau stade",p,`
    <button id="st-cancel" class="btn btn-ghost">Annuler</button>
    <button id="st-save" class="btn btn-primary">Enregistrer</button>
  `);const o=()=>{var v,w,$,k,L,A,S;const u=((v=document.getElementById("st-name"))==null?void 0:v.value)||"NOM DU STADE",l=($=(w=document.getElementById("st-image"))==null?void 0:w.value)==null?void 0:$.trim(),x=(L=(k=document.getElementById("st-country"))==null?void 0:k.value)==null?void 0:L.trim(),f=document.getElementById("st-club"),y=(f==null?void 0:f.selectedIndex)||0,I=f&&y>0?f.options[y].text:"",B=((S=(A=f==null?void 0:f.options[y])==null?void 0:A.getAttribute)==null?void 0:S.call(A,"data-logo"))||"";let E=null;l?E=l.startsWith("http")?l:`${ft}icons/${l}`:B?E=B:x&&(E=`https://flagsapi.com/${x.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`);const b=I||x||"—",d=document.getElementById("st-preview-card");d&&(d.innerHTML=Ze(u,E,`${b}<br>+10 ⭐`,{width:140}))};o(),["st-name","st-club","st-country","st-image"].forEach(u=>{var l,x;(l=document.getElementById(u))==null||l.addEventListener("input",o),(x=document.getElementById(u))==null||x.addEventListener("change",o)}),(c=document.getElementById("st-cancel"))==null||c.addEventListener("click",()=>a()),(r=document.getElementById("st-save"))==null||r.addEventListener("click",async()=>{const u=document.getElementById("st-name").value.trim(),l=document.getElementById("st-club").value||null,x=document.getElementById("st-country").value.trim().toUpperCase()||null,f=document.getElementById("st-image").value.trim()||null;if(!u){m("Le nom est obligatoire","error");return}const y={name:u,club_id:l,country_code:x,image_url:f},{error:I}=e?await _.from("stadium_definitions").update(y).eq("id",e.id):await _.from("stadium_definitions").insert(y);if(I){m("Erreur : "+I.message,"error");return}m(e?"Stade modifié ✅":"Stade créé ✅","success"),a(),ve(n,i)}),(g=document.getElementById("st-delete"))==null||g.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await _.from("stadium_definitions").delete().eq("id",e.id),m("Stade supprimé","success"),a(),ve(n,i))})}const H=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],zn=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}],G=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],qe=["GK","DEF","MIL","ATT"];async function Rn(e,t){await Be(e,t)}async function Be(e,t){var i;const{data:n}=await _.from("gc_definitions").select("*").order("sort_order").order("created_at");e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">⚡ Game Changers</h2>
        <button id="gc-add-btn" class="btn btn-primary">+ Nouvelle carte</button>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="gc-list">
        ${(n||[]).length?(n||[]).map(s=>Dn(s)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucune carte Game Changer.</div>'}
      </div>
    </div>`,(i=document.getElementById("gc-add-btn"))==null||i.addEventListener("click",()=>Ke(null,e,t)),e.querySelectorAll("[data-edit-gc]").forEach(s=>{s.addEventListener("click",()=>{const a=(n||[]).find(m=>m.id===s.dataset.editGc);a&&Ke(a,e,t)})}),e.querySelectorAll(".btn-del-gc").forEach(s=>{s.addEventListener("click",async a=>{a.stopPropagation(),confirm("Supprimer cette carte Game Changer ?")&&(await _.from("gc_definitions").delete().eq("id",s.dataset.del),Be(e,t))})})}function Dn(e){const t=H.find(s=>s.value===e.gc_type)||H[0],n=e.image_url?`/icons/${e.image_url}`:null,i=ge(e.name||"?",n,t.label.split(" ")[0],e.effect||"",{width:130});return`<div data-edit-gc="${e.id}" style="position:relative;cursor:pointer">
    ${i}
    <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
      <button class="btn-del-gc" data-del="${e.id}"
        style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0">✕</button>
    </div>
    ${e.is_active?"":'<div style="position:absolute;top:4px;right:4px;z-index:10;background:#555;color:#fff;font-size:9px;font-weight:700;padding:2px 6px;border-radius:8px">INACTIF</div>'}
  </div>`}function Ke(e,t,n){var g,u,l,x;const{openModal:i,closeModal:s,toast:a}=n,m=!e,p=e||{name:"",gc_type:"game_changer",color:"purple",effect:"",image_url:"",sort_order:0,is_active:!0,effect_type:"BOOST_STAT",effect_params:{}},h=(()=>{const f=p.effect_params||{},y=G.find(I=>I.value===(p.effect_type||"BOOST_STAT"))||G[0];return`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${y.hasValue?`<div>
        <label>VALEUR (+N)</label>
        <input id="gc-p-value" type="number" min="1" max="5" value="${f.value||2}">
      </div>`:""}
      ${y.hasCount?`<div>
        <label>NB JOUEURS</label>
        <input id="gc-p-count" type="number" min="1" max="11" value="${f.count||1}">
      </div>`:""}
      ${y.hasTarget?`<div>
        <label>CIBLE</label>
        <select id="gc-p-target">
          <option value="home" ${(f.target||"home")==="home"?"selected":""}>Mon équipe</option>
          <option value="opponent" ${f.target==="opponent"?"selected":""}>Équipe adverse</option>
        </select>
      </div>`:""}
      ${y.hasRoles?`<div>
        <label>POSTES CIBLÉS</label>
        <div style="display:flex;gap:4px;flex-wrap:wrap">
          ${qe.map(I=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555">
            <input type="checkbox" class="gc-p-role" value="${I}" ${!f.roles||f.roles.includes(I)?"checked":""}> ${I}
          </label>`).join("")}
        </div>
      </div>`:""}
    </div>`})(),o=`
    <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:#1a1a2e;border-radius:12px">
      <div id="gc-modal-preview">${ge(p.name||"?",p.image_url?`/icons/${p.image_url}`:null,(H.find(f=>f.value===p.gc_type)||H[0]).label.split(" ")[0],p.effect||"",{width:150})}</div>
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
            ${H.map(f=>`<option value="${f.value}" ${p.gc_type===f.value?"selected":""}>${f.label}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>COULEUR</label>
          <select id="gc-color">
            ${zn.map(f=>`<option value="${f.value}" ${p.color===f.value?"selected":""}>${f.label}</option>`).join("")}
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
            ${G.map(f=>`<option value="${f.value}" ${(p.effect_type||"BOOST_STAT")===f.value?"selected":""}>${f.label}</option>`).join("")}
          </select>
        </div>
        <div id="gc-params-wrap">${h}</div>
      </div>
    </div>
  `;i(m?"Nouvelle carte Game Changer":`Modifier : ${p.name}`,o,`
    <button id="gc-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gc-save" class="btn btn-primary">💾 Enregistrer</button>
  `);const r=()=>{var d,v,w,$,k;const f=((d=document.getElementById("gc-name"))==null?void 0:d.value)||"?",y=((v=document.getElementById("gc-effect"))==null?void 0:v.value)||"",I=((w=document.getElementById("gc-type"))==null?void 0:w.value)||"game_changer",B=(k=($=document.getElementById("gc-image-url"))==null?void 0:$.value)==null?void 0:k.trim(),E=H.find(L=>L.value===I)||H[0],b=document.getElementById("gc-modal-preview");b&&(b.innerHTML=ge(f,B?`/icons/${B}`:null,E.label.split(" ")[0],y,{width:150}))};["gc-name","gc-effect","gc-type","gc-image-url"].forEach(f=>{var y,I;(y=document.getElementById(f))==null||y.addEventListener("input",r),(I=document.getElementById(f))==null||I.addEventListener("change",r)}),(g=document.getElementById("gc-effect-type"))==null||g.addEventListener("change",()=>{const f=document.getElementById("gc-effect-type").value,y=G.find(B=>B.value===f)||G[0],I=document.getElementById("gc-params-wrap");I.innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${y.hasValue?'<div><label>VALEUR (+N)</label><input id="gc-p-value" type="number" min="1" max="5" value="2"></div>':""}
      ${y.hasCount?'<div><label>NB JOUEURS</label><input id="gc-p-count" type="number" min="1" max="11" value="1"></div>':""}
      ${y.hasTarget?'<div><label>CIBLE</label><select id="gc-p-target"><option value="home">Mon équipe</option><option value="opponent">Équipe adverse</option></select></div>':""}
      ${y.hasRoles?`<div><label>POSTES CIBLÉS</label><div style="display:flex;gap:4px;flex-wrap:wrap">${qe.map(B=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555"><input type="checkbox" class="gc-p-role" value="${B}" checked> ${B}</label>`).join("")}</div></div>`:""}
    </div>`}),(u=document.getElementById("btn-pick-gc-icon"))==null||u.addEventListener("click",async()=>{var y;const f=document.getElementById("gc-icon-picker");if(f){if(f.style.display!=="none"){f.style.display="none";return}f.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',f.style.display="block";try{const B=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),E=Array.isArray(B)?B.filter(d=>d.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(d.name)):[];if(!E.length){f.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const b=((y=document.getElementById("gc-image-url"))==null?void 0:y.value)||"";f.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
        ${E.map(d=>`
        <div class="gc-icon-item" data-name="${d.name}"
          style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${d.name===b?"#7a28b8":"#ddd"};background:${d.name===b?"#f5f0ff":"#fff"}">
          <img src="/icons/${d.name}" style="height:44px;width:100%;object-fit:contain">
          <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${d.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
        </div>`).join("")}
      </div>`,f.querySelectorAll(".gc-icon-item").forEach(d=>{d.addEventListener("click",()=>{const v=document.getElementById("gc-image-url");v&&(v.value=d.dataset.name),f.style.display="none",r()})})}catch(I){f.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${I.message}</div>`}}}),(l=document.getElementById("gc-cancel"))==null||l.addEventListener("click",()=>s()),(x=document.getElementById("gc-save"))==null||x.addEventListener("click",async()=>{var b,d,v,w,$,k,L,A,S,C,M,F,O,U;const f=G.find(N=>{var D;return N.value===(((D=document.getElementById("gc-effect-type"))==null?void 0:D.value)||"BOOST_STAT")})||G[0],y=f.hasRoles?[...document.querySelectorAll(".gc-p-role:checked")].map(N=>N.value):null,I={...f.hasValue?{value:Number((b=document.getElementById("gc-p-value"))==null?void 0:b.value)||2}:{},...f.hasCount?{count:Number((d=document.getElementById("gc-p-count"))==null?void 0:d.value)||1}:{},...f.hasTarget?{target:((v=document.getElementById("gc-p-target"))==null?void 0:v.value)||"home"}:{},...f.hasRoles?{roles:y!=null&&y.length?y:null}:{}},B={name:(($=(w=document.getElementById("gc-name"))==null?void 0:w.value)==null?void 0:$.trim())||"",effect:((L=(k=document.getElementById("gc-effect"))==null?void 0:k.value)==null?void 0:L.trim())||null,image_url:((S=(A=document.getElementById("gc-image-url"))==null?void 0:A.value)==null?void 0:S.trim())||null,gc_type:((C=document.getElementById("gc-type"))==null?void 0:C.value)||"game_changer",color:((M=document.getElementById("gc-color"))==null?void 0:M.value)||"purple",sort_order:Number((F=document.getElementById("gc-sort"))==null?void 0:F.value)||0,is_active:((O=document.getElementById("gc-active"))==null?void 0:O.checked)??!0,effect_type:((U=document.getElementById("gc-effect-type"))==null?void 0:U.value)||"BOOST_STAT",effect_params:I};if(!B.name){a("Le nom est obligatoire","error");return}const{error:E}=m?await _.from("gc_definitions").insert(B):await _.from("gc_definitions").update(B).eq("id",p.id);if(E){a(E.message,"error");return}a(m?"Carte créée ✅":"Carte modifiée ✅","success"),s(),Be(t,n)})}async function jn(e,{toast:t,openModal:n,closeModal:i}){await V(e,{toast:t,openModal:n,closeModal:i})}async function V(e,t){var E;const{toast:n,openModal:i,closeModal:s}=t,[{data:a,error:m},{data:p}]=await Promise.all([_.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),_.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1)]);if(m){e.innerHTML=`<p style="color:red">${m.message}</p>`;return}const h=a||[],o=h.find(b=>b.is_active),c=(p||[]).filter(b=>(b.placement_matches||0)>=1),r=c.filter(b=>(b.placement_matches||0)>=10),g=["bronze","silver","gold","platinum","diamond","master"],u={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},l={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},x={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},f={};g.forEach(b=>{f[b]=0}),r.forEach(b=>{const d=b.rank_tier||"bronze";f[d]!==void 0&&f[d]++});const y=r.length?Math.round(r.reduce((b,d)=>b+(d.mmr||1e3),0)/r.length):0;function I(b){return b?new Date(b).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function B(b){const d=new Date;return b.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(b.end_at)<d?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${o?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${o.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${c.length}</div>
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
          ${g.map(b=>{const d=f[b],v=r.length>0?Math.round(d/r.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${x[b]} ${u[b]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${v}%;background:${l[b]};border-radius:4px;transition:width 0.5s"></div>
                </div>
                <span style="width:40px;text-align:right;color:var(--gray-600)">${d} (${v}%)</span>
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
              ${h.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':h.map(b=>{const d=Math.round((new Date(b.end_at)-new Date(b.start_at))/864e5),v=new Date(b.end_at)<new Date&&!b.is_active;return`
                    <tr>
                      <td><b>${b.name}</b></td>
                      <td style="font-size:12px">${I(b.start_at)}</td>
                      <td style="font-size:12px">${I(b.end_at)}</td>
                      <td style="font-size:12px">${d} jours</td>
                      <td>${B(b)}</td>
                      <td style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn btn-ghost btn-sm" data-edit="${b.id}">✏️ Modifier</button>
                        ${b.is_active?`<button class="btn btn-ghost btn-sm" data-deactivate="${b.id}" style="color:#e67e22">⏹ Désactiver</button>`:`<button class="btn btn-primary btn-sm" data-activate="${b.id}">▶ Activer</button>`}
                        ${v?`<button class="btn btn-danger btn-sm" data-delete="${b.id}">🗑</button>`:""}
                      </td>
                    </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>`,(E=document.getElementById("create-season-btn"))==null||E.addEventListener("click",()=>{Je(null,{toast:n,openModal:i,closeModal:s,reload:()=>V(e,t)})}),e.querySelectorAll("[data-edit]").forEach(b=>{const d=h.find(v=>v.id==b.dataset.edit);b.addEventListener("click",()=>{Je(d,{toast:n,openModal:i,closeModal:s,reload:()=>V(e,t)})})}),e.querySelectorAll("[data-activate]").forEach(b=>{b.addEventListener("click",async()=>{const d=parseInt(b.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:v}=await _.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(v){n(v.message,"error");return}const{error:w}=await _.from("ranked_seasons").update({is_active:!0}).eq("id",d);if(w){n(w.message,"error");return}await _.from("users").update({current_season_id:d}).gt("placement_matches",0),n("Saison activée ✅","success"),V(e,t)})}),e.querySelectorAll("[data-deactivate]").forEach(b=>{b.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:d}=await _.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(b.dataset.deactivate));if(d){n(d.message,"error");return}n("Saison désactivée","success"),V(e,t)})}),e.querySelectorAll("[data-delete]").forEach(b=>{b.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:d}=await _.from("ranked_seasons").delete().eq("id",parseInt(b.dataset.delete));if(d){n(d.message,"error");return}n("Saison supprimée","success"),V(e,t)})})}function Je(e,{toast:t,openModal:n,closeModal:i,reload:s}){const a=!!e,m=new Date().toISOString().slice(0,16),p=new Date(Date.now()+90*864e5).toISOString().slice(0,16),h=e?new Date(e.start_at).toISOString().slice(0,16):m,o=e?new Date(e.end_at).toISOString().slice(0,16):p,c=(e==null?void 0:e.name)||"";n(a?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
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
        <input id="season-end" type="datetime-local" value="${o}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${a?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function r(){var f,y;const g=(f=document.getElementById("season-start"))==null?void 0:f.value,u=(y=document.getElementById("season-end"))==null?void 0:y.value,l=document.getElementById("season-duration");if(!g||!u||!l)return;const x=Math.round((new Date(u)-new Date(g))/864e5);l.textContent=x>0?`Durée : ${x} jour${x>1?"s":""}`:"⚠️ La fin doit être après le début",l.style.color=x>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var g,u,l;(g=document.getElementById("season-start"))==null||g.addEventListener("input",r),(u=document.getElementById("season-end"))==null||u.addEventListener("input",r),r(),(l=document.getElementById("season-save-btn"))==null||l.addEventListener("click",async()=>{var d,v,w;const x=(d=document.getElementById("season-name"))==null?void 0:d.value.trim(),f=(v=document.getElementById("season-start"))==null?void 0:v.value,y=(w=document.getElementById("season-end"))==null?void 0:w.value,I=document.getElementById("season-error");if(!x){I.textContent="Le nom est requis.";return}if(!f){I.textContent="La date de début est requise.";return}if(!y){I.textContent="La date de fin est requise.";return}if(new Date(y)<=new Date(f)){I.textContent="La date de fin doit être après le début.";return}const B=document.getElementById("season-save-btn");B.disabled=!0,B.textContent="Enregistrement…";const E={name:x,start_at:new Date(f).toISOString(),end_at:new Date(y).toISOString()};let b;if(a?{error:b}=await _.from("ranked_seasons").update(E).eq("id",e.id):{error:b}=await _.from("ranked_seasons").insert({...E,is_active:!1}),b){I.textContent=b.message,B.disabled=!1,B.textContent=a?"💾 Enregistrer":"✅ Créer la saison";return}t(a?"Saison modifiée ✅":"Saison créée ✅","success"),i(),s()})},50)}Mt(We);function Nn(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function Pn(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function xe(){document.getElementById("modal-overlay").classList.add("hidden")}const Ve={dashboard:{title:"Dashboard",fn:zt},players:{title:"Joueurs & Cartes",fn:Nt},clubs:{title:"Clubs",fn:Wt},"card-builder":{title:"Card Builder",fn:ln},users:{title:"Managers",fn:ut},market:{title:"Marché des transferts",fn:pt},"import-export":{title:"Import / Export CSV",fn:mn},formations:{title:"Formations & Liens",fn},"boosters-config":{title:"Boosters",fn:xn},"sell-price":{title:"Prix vente directe",fn:hn},journal:{title:"Actualités",fn:wn},tutorial:{title:"Tutoriel",fn:Bn},stadiums:{title:"Stades",fn:Tn},"gc-cards":{title:"Game Changers",fn:Rn},"ranked-seasons":{title:"Saisons Ranked",fn:jn}};async function de(e){document.querySelectorAll(".admin-sidebar nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===e)});const t=document.getElementById("mobile-page-select");t&&(t.value=e);const n=Ve[e]||Ve.dashboard;document.getElementById("page-title").textContent=n.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(i,{toast:Nn,openModal:Pn,closeModal:xe,navigate:de})}catch(s){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${s.message}</div>`,console.error(s)}}async function Fn(){var t;const{data:{session:e}}=await _.auth.getSession();e&&await Ye(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,s=document.getElementById("auth-error");if(s.textContent="",!n||!i){s.textContent="Remplissez tous les champs.";return}const{data:a,error:m}=await _.auth.signInWithPassword({email:n,password:i});if(m){s.textContent=m.message;return}await Ye(a.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await _.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",xe),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&xe()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",i=>{i.preventDefault(),de(n.dataset.page)})}),(t=document.getElementById("mobile-page-select"))==null||t.addEventListener("change",n=>{de(n.target.value)})}async function Ye(e){const{data:t,error:n}=await _.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(n||!t){i.textContent="Profil introuvable.";return}if(!t.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await _.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,de("dashboard")}Fn();
