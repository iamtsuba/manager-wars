import{s as _,r as He,a as qe,A as st,l as dt,g as ct,b as Ke,K as $e,D as R,S as ut,c as D,H as pt,R as mt,e as ce,d as Je,f as gt,h as ft,E as bt,i as yt,N as vt,M as xt,B as ht,j as Et,F as ue,k as ke,m as _t,n as Ve,o as me,p as wt}from"./special-cards-CrbcHJPn.js";async function It(e){var h;const[{count:t},{count:n},{count:a},{count:d},{count:l},{data:b}]=await Promise.all([_.from("players").select("*",{count:"exact",head:!0}),_.from("clubs").select("*",{count:"exact",head:!0}),_.from("users").select("*",{count:"exact",head:!0}),_.from("stadium_definitions").select("*",{count:"exact",head:!0}),_.from("users").select("*",{count:"exact",head:!0}).gt("last_seen_at",new Date(Date.now()-18e4).toISOString()),_.rpc("get_signup_password")]),u=b||"";e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:24px">

      <!-- Managers -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">👥 Managers</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${a??"–"}</div>
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
        <input id="signup-pwd-input" type="text" value="${u.replace(/"/g,"&quot;")}" style="flex:1">
        <button id="signup-pwd-save" class="btn btn-primary">💾 Enregistrer</button>
      </div>
      <div id="signup-pwd-status" style="font-size:12px;margin-top:8px;min-height:16px"></div>
    </div>
  `,window.adminNav=i=>{var s;(s=document.querySelector(`[data-page="${i}"]`))==null||s.click()},(h=document.getElementById("signup-pwd-save"))==null||h.addEventListener("click",async()=>{const i=document.getElementById("signup-pwd-input").value.trim(),s=document.getElementById("signup-pwd-status");if(!i){s.textContent="Le code ne peut pas être vide.",s.style.color="#ff6b6b";return}const o=document.getElementById("signup-pwd-save");o.disabled=!0,o.textContent="⏳...";const{error:g}=await _.rpc("set_signup_password",{new_password:i});if(o.disabled=!1,o.textContent="💾 Enregistrer",g){s.textContent=g.message,s.style.color="#ff6b6b";return}s.textContent="✅ Code mis à jour.",s.style.color="#2ecc71"})}const Ye={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},$t={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function kt(){const e={};for(const t of st)e[t]=await dt(t);return e}async function Bt(e,t){const{toast:n}=t;if(!confirm(`Réattribuer une nouvelle photo à tous les joueurs ayant encore l'ancien format de chemin (public/faces/...) ?

Cette action est irréversible.`))return;const a=document.getElementById("fix-old-faces-btn");a&&(a.disabled=!0,a.textContent="⏳ En cours...");try{const{data:d,error:l}=await _.from("players").select("id, country_code, face").like("face","public/faces/%");if(l){n(l.message,"error");return}if(!(d!=null&&d.length)){n("Aucun joueur avec l'ancien format — rien à faire ✅","success");return}const{data:b}=await _.from("players").select("face").not("face","is",null),u=new Set((b||[]).map(s=>s.face).filter(s=>s&&!s.startsWith("public/faces/")));let h=0,i=0;for(const s of d){const o=await qe(s.country_code,u);if(!o){i++;continue}const{error:g}=await _.from("players").update({face:o}).eq("id",s.id);if(g){i++;continue}u.add(o),h++}n(`${h} photo(s) réattribuée(s)${i?`, ${i} échec(s)`:""} ✅`,i?"error":"success")}finally{a&&(a.disabled=!1,a.textContent="🖼️ Réattribuer anciennes photos")}}async function At(e,t){await le(e,t)}async function le(e,t,n=null){var i,s,o,g,p;const{toast:a}=t;n||(n={search:((i=document.getElementById("search-players"))==null?void 0:i.value)||"",job:((s=document.getElementById("filter-job"))==null?void 0:s.value)||"",rarity:((o=document.getElementById("filter-rarity"))==null?void 0:o.value)||"",club:((g=document.getElementById("filter-club"))==null?void 0:g.value)||"",country:((p=document.getElementById("filter-country"))==null?void 0:p.value)||""});const[{data:d,error:l},{data:b}]=await Promise.all([_.from("players").select("*, clubs(id,encoded_name,logo_url)"),_.from("clubs").select("id,encoded_name").order("encoded_name")]);if(l){e.innerHTML=`<p style="color:red">${l.message}</p>`;return}const u={GK:0,DEF:1,MIL:2,ATT:3},h=(d||[]).sort((r,E)=>{const f=(u[r.job]??4)-(u[E.job]??4);return f!==0?f:(r.surname_real||"").localeCompare(E.surname_real||"")});Lt(e,h,b||[],t,n)}function Lt(e,t,n,a,d=null){var s,o;const{toast:l}=a;if(e.innerHTML=`
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
          ${Object.entries(Ye).map(([g,p])=>`<option value="${g}">${p}</option>`).join("")}
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
    </div>`,d){const g=d,p=r=>document.getElementById(r);g.search&&p("search-players")&&(p("search-players").value=g.search),g.job&&p("filter-job")&&(p("filter-job").value=g.job),g.rarity&&p("filter-rarity")&&(p("filter-rarity").value=g.rarity),g.club&&p("filter-club")&&(p("filter-club").value=g.club),g.country&&p("filter-country")&&(p("filter-country").value=g.country)}if(d){const g=d,p=r=>document.getElementById(r);g.search&&p("search-players")&&(p("search-players").value=g.search),g.job&&p("filter-job")&&(p("filter-job").value=g.job),g.rarity&&p("filter-rarity")&&(p("filter-rarity").value=g.rarity),g.club&&p("filter-club")&&(p("filter-club").value=g.club),g.country&&p("filter-country")&&(p("filter-country").value=g.country)}function b(){const g=document.getElementById("search-players").value.toLowerCase(),p=document.getElementById("filter-job").value,r=document.getElementById("filter-rarity").value,E=document.getElementById("filter-club").value,f=document.getElementById("filter-country").value;return t.filter(v=>(!g||`${v.firstname} ${v.surname_real}`.toLowerCase().includes(g))&&(!p||v.job===p)&&(!r||v.rarity===r)&&(!E||v.club_id===E)&&(!f||v.country_code===f))}const u=new Set;function h(){const g=document.getElementById("bulk-bar"),p=document.getElementById("bulk-count");g&&(g.style.display=u.size>0?"flex":"none",p&&(p.textContent=`${u.size} joueur(s) sélectionné(s)`))}function i(){const g=b();document.getElementById("count-label").textContent=`${g.length} joueur(s)`;const p=document.getElementById("players-list");if(!g.length){p.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}p.innerHTML=g.map(r=>{const E={...r,clubs:r.clubs,face:r.face||null},f=He(E,{width:120});return`<div style="position:relative;cursor:pointer" data-edit="${r.id}">
        ${f}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${r.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),p.querySelectorAll("[data-edit]").forEach(r=>{r.addEventListener("click",()=>{const E=t.find(f=>f.id===r.dataset.edit);E&&Be(E,n,e,a)})}),p.querySelectorAll(".btn-del-player").forEach(r=>{r.addEventListener("click",async E=>{if(E.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:f}=await _.from("players").delete().eq("id",r.dataset.del);f?l(f.message,"error"):(l("Joueur supprimé ✅","success"),le(e,a))})})}i(),document.getElementById("search-players").addEventListener("input",i),document.getElementById("filter-job").addEventListener("change",i),document.getElementById("filter-rarity").addEventListener("change",i),document.getElementById("filter-club").addEventListener("change",i),document.getElementById("filter-country").addEventListener("change",i),(s=document.getElementById("bulk-cancel-btn"))==null||s.addEventListener("click",()=>{u.clear(),h(),i()}),(o=document.getElementById("bulk-delete-btn"))==null||o.addEventListener("click",async()=>{var E,f,v,$,I;if(!u.size||!confirm(`Supprimer ${u.size} joueur(s) ?`))return;const g=[...u],{error:p}=await _.from("players").delete().in("id",g);if(p){l(p.message,"error");return}l(`${g.length} joueur(s) supprimé(s) ✅`,"success"),u.clear();const r={search:((E=document.getElementById("search-players"))==null?void 0:E.value)||"",job:((f=document.getElementById("filter-job"))==null?void 0:f.value)||"",rarity:((v=document.getElementById("filter-rarity"))==null?void 0:v.value)||"",club:(($=document.getElementById("filter-club"))==null?void 0:$.value)||"",country:((I=document.getElementById("filter-country"))==null?void 0:I.value)||""};le(e,a,r)}),document.getElementById("add-player-btn").addEventListener("click",()=>Be(null,n,e,a)),document.getElementById("fix-old-faces-btn").addEventListener("click",()=>Bt(e,a))}async function Be(e,t,n,a){const{toast:d,openModal:l,closeModal:b}=a,u=!!e,h=await kt(),{data:i}=await _.from("players").select("face").not("face","is",null),s=new Set((i||[]).map(r=>r.face).filter(Boolean));e!=null&&e.face&&s.delete(e.face);const o='<option value="">— Club —</option>'+t.map(r=>`<option value="${r.id}" ${(e==null?void 0:e.club_id)===r.id?"selected":""}>${r.encoded_name}</option>`).join(""),g=e!=null&&e.face?e.face.split("/")[0]:"",p=Object.keys(h).map(r=>`<option value="${r}" ${g===r?"selected":""}>${r}</option>`).join("");l(u?`✏️ ${e.firstname} ${e.surname_real}`:"➕ Nouveau joueur",`<div style="display:flex;gap:20px;align-items:flex-start">

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
              ${["GK","DEF","MIL","ATT"].map(r=>`<option value="${r}" ${(e==null?void 0:e.job)===r?"selected":""}>${r}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Poste 2</label>
            <select id="pm-job2">
              <option value="">Aucun</option>
              ${["GK","DEF","MIL","ATT"].map(r=>`<option value="${r}" ${(e==null?void 0:e.job2)===r?"selected":""}>${r}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Rareté</label>
            <select id="pm-rarity">
              ${["normal","pepite","papyte","legende"].map(r=>`<option value="${r}" ${(e==null?void 0:e.rarity)===r?"selected":""}>${Ye[r]}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Pays</label>
            <select id="pm-country">
              ${["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"].map(r=>`<option value="${r}" ${((e==null?void 0:e.country_code)||"FR")===r?"selected":""}>${r}</option>`).join("")}
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
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([r,E,f])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${$t[r]};font-weight:700">${r}</label>
                <input id="${E}" type="number" min="0" max="20" value="${(e==null?void 0:e[f])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
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
          ${u?"💾 Enregistrer":"✅ Créer le joueur"}
        </button>
        </div>
      </div>
    </div>`),setTimeout(()=>{var I,y,m;let r=(e==null?void 0:e.face)||null;function E(){var K,O,Y,W,Z,X,Q,Ee,_e,we,Ie;const c=document.getElementById("card-preview");if(!c)return;const x=((K=document.getElementById("pm-fn"))==null?void 0:K.value)||"",w=(((O=document.getElementById("pm-real"))==null?void 0:O.value)||"").toUpperCase(),B=((Y=document.getElementById("pm-job"))==null?void 0:Y.value)||"ATT",k=((W=document.getElementById("pm-job2"))==null?void 0:W.value)||null,A=((Z=document.getElementById("pm-rarity"))==null?void 0:Z.value)||"normal",L=((X=document.getElementById("pm-country"))==null?void 0:X.value)||"FR",S=((Q=document.getElementById("pm-club"))==null?void 0:Q.value)||null,C=document.getElementById("pm-club"),T=C==null?void 0:C.options[C.selectedIndex];(T==null?void 0:T.text)!=="— Club —"&&(T==null||T.text);const z=parseInt((Ee=document.getElementById("pm-g"))==null?void 0:Ee.value)||0,j=parseInt((_e=document.getElementById("pm-d"))==null?void 0:_e.value)||0,N=parseInt((we=document.getElementById("pm-m"))==null?void 0:we.value)||0,F=parseInt((Ie=document.getElementById("pm-a"))==null?void 0:Ie.value)||0,P=t.find(lt=>lt.id===S),te={firstname:x||"Prénom",surname_real:w||"NOM",job:B,job2:k||null,rarity:A,country_code:L,club_id:S,note_g:z,note_d:j,note_m:N,note_a:F,face:r||null,clubs:P?{encoded_name:P.encoded_name,logo_url:P.logo_url}:null};c.innerHTML=He(te,{width:160});const M=document.getElementById("pm-minmax");M&&(M.style.display=["pepite","papyte"].includes(A)?"grid":"none")}function f(c){const x=document.getElementById("faces-grid"),w=document.getElementById("pm-face");if(!x||!w)return;const B=h[c]||[];if(console.log("[players] loadFacesGrid folder=",c,"files=",B.length,B.slice(0,5)),!B.length){w.innerHTML='<option value="">— Aucun visage disponible —</option>',x.innerHTML=`<p style="font-size:11px;color:#888;font-style:italic">Aucune image dans le dossier "${c}" du bucket Supabase.</p>`;return}const k=B.filter(A=>{const L=c+"/"+A;return L===r||!s.has(L)});w.innerHTML='<option value="">— Choisir un visage —</option>'+k.map(A=>{const L=c+"/"+A;return`<option value="${L}" ${r===L?"selected":""}>${A}</option>`}).join(""),x.innerHTML=k.map(A=>{const L=c+"/"+A,S=r===L,C=ct({face:L});return`<div data-face="${L}" style="cursor:pointer;border:2px solid ${S?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${C}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),x.querySelectorAll("[data-face]").forEach(A=>{A.addEventListener("click",()=>{r=A.dataset.face;const L=document.getElementById("pm-face");L&&(L.value=r),x.querySelectorAll("[data-face]").forEach(S=>{S.style.border=`2px solid ${S.dataset.face===r?"#4fc3f7":"transparent"}`}),E()})})}const v=e!=null&&e.face?e.face.split("/")[0]:"";v&&h[v]&&(document.getElementById("pm-folder").value=v,f(v)),(I=document.getElementById("pm-folder"))==null||I.addEventListener("change",c=>{f(c.target.value)}),(y=document.getElementById("pm-face"))==null||y.addEventListener("change",c=>{r=c.target.value||null,E()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach(c=>{var x,w;(x=document.getElementById(c))==null||x.addEventListener("input",E),(w=document.getElementById(c))==null||w.addEventListener("change",E)}),(m=document.getElementById("pm-save"))==null||m.addEventListener("click",()=>Ct(e,u,r,n,a)),E()},50)}function St(e){const t=n=>{var a;return(a=document.getElementById(n))==null?void 0:a.value};return{firstname:(t("pm-fn")||"").trim(),surname_real:(t("pm-real")||"").trim()||"JOUEUR",country_code:t("pm-country")||"FR",club_id:t("pm-club")||null,job:t("pm-job")||"ATT",job2:t("pm-job2")||null,rarity:t("pm-rarity")||"normal",note_g:parseInt(t("pm-g"))||0,note_d:parseInt(t("pm-d"))||0,note_m:parseInt(t("pm-m"))||0,note_a:parseInt(t("pm-a"))||0,note_min:parseInt(t("pm-nmin"))||null,note_max:parseInt(t("pm-nmax"))||null,sell_price:parseInt(t("pm-price"))||0,face:e||null,ethnie:t("pm-folder")||null,is_active:!0}}async function Ct(e,t,n,a,d){var p,r,E,f,v;const{toast:l,closeModal:b}=d,u=document.getElementById("pm-error"),h=document.getElementById("pm-save"),i=St(n);if(!i.firstname){u.textContent="Le prénom est requis.";return}if(!i.surname_real){u.textContent="Le nom est requis.";return}h.disabled=!0,h.textContent="Enregistrement…";const s=i,{error:o}=t?await _.from("players").update({...s,updated_at:new Date().toISOString()}).eq("id",e.id):await _.from("players").insert(s);if(o){u.textContent=o.message,h.disabled=!1,h.textContent=t?"💾 Enregistrer":"✅ Créer le joueur";return}l(t?"Joueur modifié ✅":"Joueur créé ✅","success"),b();const g={search:((p=document.getElementById("search-players"))==null?void 0:p.value)||"",job:((r=document.getElementById("filter-job"))==null?void 0:r.value)||"",rarity:((E=document.getElementById("filter-rarity"))==null?void 0:E.value)||"",club:((f=document.getElementById("filter-club"))==null?void 0:f.value)||"",country:((v=document.getElementById("filter-country"))==null?void 0:v.value)||""};le(a,d,g)}const Tt={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},Mt=["rase","court","milong","long"];function zt(e){const t=Ze(e);if(t==="noir")return"noir";if(t==="typ")return Math.random()<.9?"noir":"marron";if(t==="metisse")return Math.random()<.6?"noir":"marron";const n=Math.random();return n<.35?"blond":n<.75?"marron":"noir"}function Rt(e){return Math.random()<.05?"chauve":zt(e)}const We=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function Ze(e){return Tt[e]||"blanc"}function Dt(e){return Rt(e)}function ge(e,t){return Math.floor(Math.random()*(t-e+1))+e}function ie(e){return e[Math.floor(Math.random()*e.length)]}function jt(e){const t=We.filter(n=>n!==e);return ie(t)}function Ae(e){const t=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","GR","RO","BG","UA","RU"],n=["MA","DZ","TN","EG","LY"],a=["NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","TZ","UG","ET"],d=["JP","KR","CN","VN","TH","ID","PH","IN","PK","BD","SA","AE","IR"];return t.includes(e)||["AR","UY","CL","PE","EC","CO","MX","BR"].includes(e)?"Europeans":n.includes(e)?"North Africans":a.includes(e)?"Africans":d.includes(e)?"Asians":"Europeans"}const Nt=[{min:1,max:4,pct:55},{min:5,max:10,pct:20},{min:11,max:14,pct:10},{min:15,max:17,pct:10},{min:18,max:20,pct:5}];function Ft(){const e=Math.random()*100;let t=0;for(const n of Nt)if(t+=n.pct,e<t)return ge(n.min,n.max);return ge(1,4)}function Pt(){const e=Array.from({length:20},(t,n)=>n);return e.sort(()=>Math.random()-.5),new Set(e.slice(0,10))}let ae=null;function Ot(e,t){return e&&(ae||(ae=Pt()),ae.has(t))?ge(15,20):Ft()}function Ut(e,t,n=new Set,a=!1){const d={FR:{first:["Lucas","Tom","Hugo","Théo","Antoine","Kylian","Rayan","Axel","Paul","Enzo","Léo","Mathis","Nathan","Alexis","Ethan","Maxime","Julien","Baptiste","Nicolas","Pierre","Clément","Adrien","Valentin","Dylan","Loïc","Quentin","Florian","Kevin","Corentin","Raphaël"],last:["Martin","Bernard","Petit","Dupont","Moreau","Laurent","Robert","Michel","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard","Bonnet","Rousseau","Fontaine","Chevalier","Blanc","Garnier","Boyer","Gauthier","Garcia","Perrin","Robin","Clément","Morin","Nicolas","Henry","Lemaire","Noël","Dufour","Meunier","Brun","Blanchard","Giraud","Joly","Rivière","Brunet"]},ES:{first:["Carlos","Miguel","Javier","Alejandro","Sergio","David","Diego","Pablo","Álvaro","Marcos","Adrián","Rubén","Iker","Raúl","Fernando","Roberto","Víctor","Iván","Gonzalo","Antonio","Manuel","Jesús","Josué","Rodrigo","Cristian","Héctor","Óscar","Mario","Daniel","Jorge"],last:["García","Rodríguez","Martínez","López","Sánchez","González","Pérez","Hernández","Jiménez","Díaz","Torres","Ramírez","Flores","Rivera","Gómez","Morales","Álvarez","Romero","Herrera","Medina","Aguilar","Vargas","Guzmán","Muñoz","Salazar","Soto","Contreras","Rojas","Ramos","Ortiz"]},PT:{first:["João","Pedro","Diogo","Rúben","Bruno","Tiago","André","Ricardo","Luís","Gonçalo","Nuno","Mário","Fábio","Rui","Miguel","Sérgio","Hugo","Filipe","Paulo","Vítor"],last:["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Carvalho","Gomes","Ribeiro","Araújo","Barbosa","Cardoso","Correia","Teixeira","Machado","Vieira","Monteiro","Cunha","Pinto","Melo","Barros","Freitas","Fonseca","Andrade","Castro","Neves","Figueiredo","Duarte"]},BR:{first:["Gabriel","Lucas","Mateus","Gustavo","Felipe","Rodrigo","Thiago","Rafael","Bruno","Diego","Leonardo","Eduardo","Victor","Pedro","Carlos","Alexandre","André","Paulo","Danilo","Marcelo"],last:["Silva","Santos","Oliveira","Souza","Lima","Ferreira","Costa","Nascimento","Alves","Pereira","Rodrigues","Almeida","Nunes","Melo","Barbosa","Rocha","Brito","Castro","Carvalho","Gomes","Lopes","Ramos","Mendes","Cavalcanti","Batista","Azevedo","Campos","Freitas","Reis","Andrade"]},AR:{first:["Lionel","Sergio","Rodrigo","Nicolás","Ezequiel","Gonzalo","Federico","Mauro","Pablo","Diego","Lucas","Matías","Alejandro","Maximiliano","Emiliano","Marcos","Lautaro","Ángel","Leandro","Julián"],last:["González","Rodríguez","Martínez","García","López","Pérez","Sánchez","Romero","Torres","Flores","Díaz","Gómez","Alvarez","Ruiz","Castro","Herrera","Cabrera","Medina","Ferreyra","Suárez"]},IT:{first:["Marco","Luca","Alessandro","Matteo","Davide","Andrea","Francesco","Federico","Lorenzo","Riccardo","Stefano","Simone","Roberto","Nicola","Giovanni","Antonio","Emanuele","Daniele","Alberto","Giorgio"],last:["Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Ricci","Marino","Greco","Bruno","Gallo","Conti","De Luca","Mancini","Giordano","Rizzo","Lombardi","Moretti","Fontana","Rinaldi"]},DE:{first:["Lukas","Max","Jonas","Florian","Tobias","Stefan","Markus","Sebastian","Niklas","Leon","Tim","Felix","Alexander","Philipp","Christian","Thomas","Michael","Jan","Moritz","Fabian"],last:["Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Wolf","Schröder","Neumann","Schwarz","Zimmermann","Braun","Krüger","Hofmann","Wagner","Becker","Koch","Lehmann","Kaiser"]},GB:{first:["James","Harry","Oliver","Jack","George","Charlie","William","Thomas","Alfie","Edward","Ryan","Liam","Noah","Ethan","Kyle","Jordan","Callum","Aaron","Declan","Connor"],last:["Smith","Jones","Williams","Brown","Taylor","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Walker","Wright","Robinson","White","Thompson","Hughes","Edwards","Green","Hall"]},MA:{first:["Yassine","Karim","Mehdi","Amine","Hamza","Bilal","Soufiane","Rachid","Omar","Mohammed","Zakaria","Ilyas","Ayoub","Saad","Khalid","Adil","Tarik","Hicham","Reda","Nabil"],last:["Benali","Amrani","Bouazza","Cherif","Haddad","Meziane","Belkacem","Rahmani","Saidi","Zidane","Belhadj","Tazi","Idrissi","Alaoui","Bennani","Fassi","Lahlou","Naciri","Tahiri","Zniber"]},DZ:{first:["Yacine","Riyad","Sofiane","Haris","Adem","Islam","Bilal","Omar","Nassim","Mehdi","Ryad","Zinedine","Youssef","Farid","Karim","Mourad","Walid","Anes","Ferhat","Djamel"],last:["Amrouche","Boudiaf","Cherki","Guessab","Hamdi","Jaber","Lakhal","Mahjoub","Rezki","Sahnoun","Talbi","Zerrouki","Achour","Bakri","Chaouch","Djaballah","Ferhat","Gacem","Khaldi","Larbi"]},SN:{first:["Sadio","Ismaïla","Cheikhou","Gana","Famara","Mbaye","Pape","Aliou","Moussa","Sidy","Idrissa","Lamine","Bamba","Fallou","Abdou","Diallo","Mamadou","Souleymane","Oumar","Cheikh"],last:["Diallo","Traoré","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Ndiaye","Sow","Cissé","Fofana","Keita","Sylla","Kane","Diarra","Sanogo","Baldé","Kouyaté"]},CI:{first:["Didier","Wilfried","Serge","Jonathan","Franck","Maxwel","Salomon","Gervinho","Nicolas","Maxime","Ismael","Romaric","Abdul","Cheick","Arouna","Kolo","Yaya","Geoffroy","Siaka","Adama"],last:["Drogba","Zaha","Gnagnon","Koné","Touré","Bamba","Diomandé","Konaté","Coulibaly","Fofana","Traoré","Doumbia","Sanogo","Diabaté","Kalou","Bakayoko","Gradel","Seri","Aurier","Haller"]},CM:{first:["Samuel","Alex","Karl","Fabrice","Cédric","Nicolas","Georges","André","Joël","Roger","François","Jean","Patrick","Thierry","Eric","Benjamin","Aristide","Clinton","Clinton","Stéphane"],last:["Eto'o","Song","Choupo-Moting","Aboubakar","Bassogog","Kunde","Toko","Nkoudou","Ngadeu","Oyongo","Fai","Zambo","Mokoena","Ekambi","Tchamba","Mbida","Biya","Kameni","Meyong","Webo"]},NG:{first:["Kelechi","Ahmed","Victor","John","Emmanuel","Samuel","Moses","Ola","Chukwuemeka","Odion","Sunday","Chidi","Nnamdi","Chisom","Tunde","Emeka","Obinna","Uchenna","Ifeanyi","Segun"],last:["Osimhen","Iheanacho","Musa","Onyekuru","Iwobi","Ndidi","Nwankwo","Obi","Mikel","Martins","Okocha","Yekini","Amunike","Babangida","Fash","Lawal","Onuoha","Taiwo","Ayodele","Ameobi"]},JP:{first:["Ryota","Kenji","Hiroshi","Takumi","Yuto","Daichi","Shinji","Makoto","Koji","Naoki","Yuya","Shoya","Ryo","Shu","Atsuto","Masato","Hotaru","Genki","Ko","Ritsu"],last:["Nakamura","Tanaka","Suzuki","Sato","Yamamoto","Watanabe","Ito","Yamada","Saito","Matsumoto","Inoue","Kimura","Hayashi","Shimizu","Yamazaki","Mori","Abe","Ikeda","Kato","Honda"]},KR:{first:["Heung","Son","Ji","Sung","Jae","Young","Kang","Hyun","Woo","Tae","Seung","Min","Jun","Dong","Chang","Sang","Yo","Hee","Jin","Bum"],last:["Kim","Park","Lee","Choi","Jung","Kang","Cho","Yoon","Lim","Oh","Han","Seo","Kwon","Hwang","Ahn","Yang","Shin","Yoo","Jang","Song"]},MX:{first:["Carlos","Hirving","Andrés","Javier","Miguel","Raúl","Héctor","Diego","Jorge","Luis","Rodolfo","Erick","Jonathan","Néstor","Tecatito","Chicharito","Oswaldo","Oribe","Uriel","Giovanni"],last:["Hernández","Lozano","Guardado","Vela","Morales","Jiménez","Reyes","Corona","Herrera","Rodríguez","Ochoa","Chicharito","Flores","Domínguez","Araujo","Álvarez","Pineda","Sánchez","Antuna","Meza"]},_DEFAULT_EUROPE:{first:["Stefan","Ivan","Luca","Marco","Andrei","Cristian","Bogdan","Mircea","Adrian","Florin","Dušan","Aleksandar","Nikola","Nemanja","Marko","Filip","Milan","Branislav","Radomir","Dejan"],last:["Popescu","Ionescu","Stan","Marin","Stoica","Popa","Radu","Constantin","Barbu","Dobre","Petrović","Marković","Nikolić","Jovanović","Popović","Stanković","Đorđević","Lukić","Simić","Ilić"]},_DEFAULT_AFRIQUE:{first:["Mamadou","Ibrahima","Moussa","Seydou","Boubacar","Oumar","Modibo","Adama","Bakary","Abdoulaye","Lamine","Ousmane","Sekou","Demba","Tidiane","Amadou","Issiaka","Siaka","Fode","Samba"],last:["Diallo","Traoré","Coulibaly","Koné","Doumbia","Kouyaté","Bah","Konaté","Touré","Camara","Sylla","Keita","Diakité","Sangaré","Sanou","Sidibé","Bathily","Niakaté","Dioumassi","Sissoko"]},_DEFAULT_ASIE:{first:["Wei","Ming","Jae","Van","Duc","Sorn","Ali","Hassan","Reza","Arman","Yusuf","Tariq","Faris","Khalid","Saad","Rashid","Nasser","Walid","Ziad","Adel"],last:["Zhang","Wang","Liu","Chen","Yang","Huang","Zhou","Wu","Xu","Sun","Al-Rashidi","Al-Dosari","Al-Harthi","Al-Balushi","Al-Farsi","Al-Shamsi","Al-Neyadi","Al-Breiki","Al-Hammadi","Al-Mansouri"]},_DEFAULT_AMERIQUE:{first:["James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Marcus","Jordan","Andre","Devonte","Malik","Tyrone","Jamal","Darius","DeShawn","Brandon","Cody"],last:["Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Taylor","Anderson","Jackson","White","Harris","Clark","Lewis","Walker","Hall","Allen","Young","King"]}},l={FR:"FR",BE:"FR",CH:"FR",MC:"FR",LU:"FR",ES:"ES",MX:"MX",CO:"ES",VE:"ES",PE:"ES",CL:"ES",EC:"ES",UY:"ES",PY:"ES",BO:"ES",CR:"ES",PA:"ES",HN:"ES",GT:"ES",SV:"ES",NI:"ES",DO:"ES",CU:"ES",PT:"PT",AO:"PT",MZ:"PT",CV:"PT",BR:"BR",AR:"AR",IT:"IT",SM:"IT",DE:"DE",AT:"DE",GB:"GB",IE:"GB",AU:"GB",NZ:"GB",CA:"GB",MA:"MA",TN:"DZ",LY:"DZ",DZ:"DZ",SN:"SN",ML:"SN",GN:"SN",GW:"SN",GM:"SN",MR:"SN",CI:"CI",BF:"CI",TG:"CI",BJ:"CI",GH:"CI",CM:"CM",GA:"CM",CG:"CM",CD:"CM",NG:"NG",JP:"JP",KR:"KR",MX:"MX",PL:"_DEFAULT_EUROPE",CZ:"_DEFAULT_EUROPE",SK:"_DEFAULT_EUROPE",HU:"_DEFAULT_EUROPE",HR:"_DEFAULT_EUROPE",RS:"_DEFAULT_EUROPE",SI:"_DEFAULT_EUROPE",RO:"_DEFAULT_EUROPE",BG:"_DEFAULT_EUROPE",GR:"_DEFAULT_EUROPE",TR:"_DEFAULT_EUROPE",RU:"_DEFAULT_EUROPE",UA:"_DEFAULT_EUROPE",NL:"_DEFAULT_EUROPE",DK:"_DEFAULT_EUROPE",SE:"_DEFAULT_EUROPE",NO:"_DEFAULT_EUROPE",FI:"_DEFAULT_EUROPE",AL:"_DEFAULT_EUROPE",EG:"_DEFAULT_AFRIQUE",ZA:"_DEFAULT_AFRIQUE",KE:"_DEFAULT_AFRIQUE",ET:"_DEFAULT_AFRIQUE",TZ:"_DEFAULT_AFRIQUE",UG:"_DEFAULT_AFRIQUE",CN:"_DEFAULT_ASIE",VN:"_DEFAULT_ASIE",TH:"_DEFAULT_ASIE",ID:"_DEFAULT_ASIE",PH:"_DEFAULT_ASIE",IN:"_DEFAULT_ASIE",PK:"_DEFAULT_ASIE",BD:"_DEFAULT_ASIE",IR:"_DEFAULT_ASIE",SA:"_DEFAULT_ASIE",AE:"_DEFAULT_ASIE",QA:"_DEFAULT_ASIE",KW:"_DEFAULT_ASIE",IQ:"_DEFAULT_ASIE",SY:"_DEFAULT_ASIE",JO:"_DEFAULT_ASIE",US:"_DEFAULT_AMERIQUE"};function b(I){return l[I]||"_DEFAULT_EUROPE"}function u(I){const y=b(I),m=(d[y]||d._DEFAULT_EUROPE).first;return ie(m)}function h(I){const y=b(I);return(d[y]||d._DEFAULT_EUROPE).last}const i=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],s=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],o=new Set(s.sort(()=>Math.random()-.5).slice(0,4)),g=[...s].sort(()=>Math.random()-.5),p=new Set(g.slice(0,2)),r=new Set(g.slice(2,4)),E=10,f=i.map((I,y)=>y<E);for(let I=f.length-1;I>0;I--){const y=Math.floor(Math.random()*(I+1));[f[I],f[y]]=[f[y],f[I]]}const v=new Set;function $(I){const y=h(I),m=y.filter(B=>!v.has(B)&&!n.has(B)),c=m.length?m:y.filter(B=>!v.has(B)),x=c.length?c:y,w=ie(x);return v.add(w),w}return i.map((I,y)=>{const m=f[y]?t:jt(t),c=Ze(m),x=Dt(m),w=ie(Mt),B=Ot(a,y),k=o.has(y),A=k?Math.max(0,B-2):0;let L=0,S=0,C=0,T=0,z=null;I==="GK"?L=B:I==="DEF"?(S=B,k&&(C=A,z="MIL")):I==="ATT"?(T=B,k&&(C=A,z="MIL")):(C=B,k&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(S=A,z="DEF"):(T=A,z="ATT")));const j=p.has(y)?"pepite":r.has(y)?"papyte":"normal",N=$(m);return{job:I,job2:z,firstname:u(m),surname_real:N,country_code:m,club_id:e,note_g:L,note_d:S,note_m:C,note_a:T,skin:c,hair:x,hair_length:w,rarity:j,sell_price:0,ethnie:Ae(m),_ethnie:Ae(m)}})}async function Xe(e,t,n,a=!1){ae=null;const{data:d}=await _.from("players").select("surname_real").not("surname_real","is",null),l=new Set((d||[]).map(r=>r.surname_real).filter(Boolean)),b=Ut(e,t,l,a),{data:u}=await _.from("players").select("face").not("face","is",null),h=new Set((u||[]).map(r=>r.face).filter(Boolean)),i=new Set;for(const r of b){const E=await qe(r.country_code,new Set([...h,...i]));E&&(r.face=E,i.add(E)),delete r._ethnie}const{data:s,error:o}=await _.from("players").insert(b).select("id");if(o){console.error("[GenSquad] Erreur batch insert:",o.message,o.details),n("Erreur: "+o.message,"error");return}const g=(s||[]).map(r=>({card_type:"player",player_id:r.id}));if(g.length){const{error:r}=await _.from("cards").insert(g);r&&console.warn("[GenSquad] Erreur cartes:",r.message)}const p=(s==null?void 0:s.length)||0;console.log("[GenSquad] Créés:",p,"/",b.length),p>0?n(`${p} joueurs générés ✅`,"success"):n("Erreur génération joueurs","error")}function Qe(e){return{style:e.kit_style||R.style,color1:e.kit_color1||R.color1,color2:e.kit_color2||R.color2,color3:e.kit_color3||R.color3,shorts:e.kit_shorts||R.shorts,socks:e.kit_socks||R.socks}}let oe=[];async function Gt(e,t){await se(e,t)}async function se(e,t){const[{data:n,error:a},{data:d}]=await Promise.all([_.from("clubs").select("*").order("real_name"),_.from("players").select("club_id")]);if(a){e.innerHTML=`<p style="color:red">${a.message}</p>`;return}oe=n||[];const l={};(d||[]).forEach(b=>{l[b.club_id]=(l[b.club_id]||0)+1}),Ht(e,t,l)}function Ht(e,t,n={}){const{toast:a,openModal:d,closeModal:l}=t;e.innerHTML=`
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:14px">
      <input id="search-clubs" placeholder="🔍 Rechercher…" style="flex:1">
      <button class="btn btn-primary" id="add-club-btn" style="white-space:nowrap">+ Club</button>
    </div>
    <div id="clubs-list" style="display:flex;flex-direction:column;gap:8px"></div>`,b(oe),document.getElementById("search-clubs").addEventListener("input",u=>{const h=u.target.value.toLowerCase();b(oe.filter(i=>i.real_name.toLowerCase().includes(h)||i.encoded_name.toLowerCase().includes(h)))}),document.getElementById("add-club-btn").addEventListener("click",()=>Le(null,e,t));function b(u){const h=document.getElementById("clubs-list");if(!u.length){h.innerHTML='<p style="color:var(--gray-600);padding:20px">Aucun club.</p>';return}h.innerHTML=u.map(i=>{const s=Qe(i),o=Ke(s,i.id).replace("<svg ",'<svg style="width:40px;height:48px" '),g=i.logo_url?`<img src="${i.logo_url}" style="width:40px;height:40px;object-fit:contain;border-radius:8px">`:`<div style="width:40px;height:40px;background:linear-gradient(135deg,${s.color1},${s.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:900">${i.encoded_name.slice(0,3)}</div>`,p=n[i.id]||0;return`
        <div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,0.08)">
          ${g}
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:14px;color:#1a1a1a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.real_name}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
              <img src="https://flagsapi.com/${i.country_code}/flat/24.png" style="height:12px" onerror="this.style.display='none'">
              <span style="font-size:11px;color:var(--gray-600);font-family:monospace">${i.encoded_name} · ${i.country_code}</span>
            </div>
            <div style="font-size:11px;margin-top:2px;color:${p===0?"#e67e22":"var(--gray-600)"}">
              ${p===0?"⚠️ Aucun joueur":`👥 ${p} joueur${p>1?"s":""}`}
            </div>
          </div>
          ${o}
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            ${p===0?`<button class="btn btn-primary btn-sm" data-gen="${i.id}" data-cc="${i.country_code}" data-name="${i.real_name}" title="Générer joueurs">⚽</button>`:""}
            <button class="btn btn-ghost btn-sm" data-edit="${i.id}">✏️</button>
            <button class="btn btn-danger btn-sm" data-del="${i.id}">🗑️</button>
          </div>
        </div>`}).join(""),h.querySelectorAll("[data-gen]").forEach(i=>{i.addEventListener("click",()=>{const s=i.dataset.gen,o=i.dataset.name,g=i.dataset.cc;d(`⚽ Générer — ${o}`,`<div style="display:flex;flex-direction:column;gap:14px">
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
          </div>`),setTimeout(()=>{var p,r;(p=document.getElementById("qg-cancel"))==null||p.addEventListener("click",()=>l()),(r=document.getElementById("qg-ok"))==null||r.addEventListener("click",async()=>{var f;const E=((f=document.getElementById("qg-strong"))==null?void 0:f.checked)??!1;l(),i.disabled=!0,i.textContent="⏳",await Xe(s,g,a,E),se(e,t)})},50)})}),h.querySelectorAll("[data-edit]").forEach(i=>{const s=oe.find(o=>o.id===i.dataset.edit);i.addEventListener("click",()=>Le(s,e,t))}),h.querySelectorAll("[data-del]").forEach(i=>{i.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:s}=await _.from("clubs").delete().eq("id",i.dataset.del);s?a(s.message,"error"):(a("Club supprimé","success"),se(e,t))})})}}function Le(e,t,n){const{toast:a,openModal:d,closeModal:l}=n,b=!!e,u=e?Qe(e):{...R},h=Object.entries($e).map(([s,o])=>`<option value="${s}" ${u.style===s?"selected":""}>${o.label}</option>`).join(""),i=We.map(s=>`<option value="${s}" ${((e==null?void 0:e.country_code)||"FR")===s?"selected":""}>${s}</option>`).join("");d(b?`✏️ ${e.real_name}`:"➕ Nouveau club",`<div style="display:flex;flex-direction:column;gap:14px">

      <!-- Identité -->
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
            ${i}
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>Logo (URL)</label>
        <input id="m-logo" value="${(e==null?void 0:e.logo_url)||""}" placeholder="https://...">
      </div>

      <!-- Tenue -->
      <div style="border-top:1px solid var(--gray-200);padding-top:12px">
        <div style="font-weight:700;font-size:13px;margin-bottom:10px">👕 Tenue</div>
        <div style="display:flex;gap:12px;align-items:flex-start">
          <!-- Contrôles -->
          <div style="flex:1;display:flex;flex-direction:column;gap:8px">
            <div class="form-group">
              <label>Style</label>
              <select id="m-kit-style" style="width:100%">${h}</select>
            </div>
            ${[["Couleur 1","m-kit-color1",u.color1,!1],["Couleur 2","m-kit-color2",u.color2,!1],["Couleur 3","m-kit-color3",u.color3,!0],["Short","m-kit-shorts",u.shorts,!1],["Chaussettes","m-kit-socks",u.socks,!1]].map(([s,o,g,p])=>`
              <div class="form-group" id="wrap-${o}" ${p?'style="display:none"':""}>
                <label>${s}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${o}" value="${g||"#000000"}" style="width:38px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${o}-txt" value="${g||"#000000"}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>`).join("")}
          </div>
          <!-- Aperçu -->
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div id="kit-preview-wrap" style="background:#f0f0f0;border-radius:12px;padding:14px;border:1.5px solid var(--gray-200);min-width:60px;text-align:center"></div>
            <div style="font-size:10px;color:var(--gray-600)">Aperçu</div>
          </div>
        </div>
      </div>

      <!-- Génération auto (création uniquement) -->
      ${b?"":`
      <div style="border-top:1px solid var(--gray-200);padding-top:12px;display:flex;flex-direction:column;gap:8px">
        <div style="font-weight:700;font-size:13px;margin-bottom:2px">⚡ Génération automatique</div>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;padding:8px;background:rgba(26,107,60,0.06);border-radius:8px;border:1px solid rgba(26,107,60,0.2)">
          <input type="checkbox" id="m-gen-stadium" checked style="width:16px;height:16px">
          🏟️ Créer la carte Stade du club automatiquement
        </label>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;padding:8px;background:rgba(26,107,60,0.06);border-radius:8px;border:1px solid rgba(26,107,60,0.2)">
          <input type="checkbox" id="m-gen-squad" style="width:16px;height:16px">
          ⚽ Générer 20 joueurs (2 GK · 8 DEF · 6 MIL · 4 ATT)
        </label>
        <label id="m-gen-strong-label" style="display:none;align-items:center;gap:8px;font-size:13px;cursor:pointer;padding:8px;background:rgba(212,160,23,0.08);border-radius:8px;border:1px solid rgba(212,160,23,0.35);margin-left:12px">
          <input type="checkbox" id="m-gen-strong" style="width:16px;height:16px;accent-color:#D4A017">
          💪 Équipe Forte <span style="font-size:11px;color:#888;font-weight:400">(10 joueurs note 15–20 garantis)</span>
        </label>
        <div style="font-size:11px;color:var(--gray-600);padding-left:4px">Distribution : 55% note 1–4 · 20% note 5–10 · 10% note 11–14 · 10% note 15–17 · 5% note 18–20 · 2 pépites + 2 papytes</div>
      </div>`}

      <div id="m-error" style="color:#bb2020;font-size:13px;min-height:16px"></div>
      <button class="btn btn-primary" id="m-save" style="width:100%;padding:14px;font-size:15px">
        ${b?"💾 Enregistrer":"✅ Créer le club"}
      </button>
    </div>`),setTimeout(()=>{var v,$,I;ee();function s(){var x,w;const y=((x=document.getElementById("m-kit-style"))==null?void 0:x.value)||"uni",m=((w=$e[y])==null?void 0:w.colors)===3,c=document.getElementById("wrap-m-kit-color3");c&&(c.style.display=m?"":"none")}s(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(y=>{const m=document.getElementById(y),c=document.getElementById(y+"-txt");!m||!c||(m.addEventListener("input",()=>{c.value=m.value,ee()}),c.addEventListener("input",()=>{const x=c.value.trim();/^#[0-9a-fA-F]{6}$/.test(x)&&(m.value=x,ee())}),c.addEventListener("change",()=>{let x=c.value.trim();x.startsWith("#")||(x="#"+x),/^#[0-9a-fA-F]{6}$/.test(x)&&(m.value=x,c.value=x,ee())}))}),(v=document.getElementById("m-kit-style"))==null||v.addEventListener("change",()=>{s(),ee()});const o=document.getElementById("m-real"),g=document.getElementById("m-encoded");function p(){if(!o||!g||g.value)return;const y=o.value.trim().split(/\s+/),m=y.length===1?y[0].toUpperCase().slice(0,6):y.filter(c=>c.length>2).map(c=>c[0].toUpperCase()).join("")||y[0].toUpperCase().slice(0,4);g.value=m}o==null||o.addEventListener("input",p),($=document.getElementById("auto-encode-btn"))==null||$.addEventListener("click",()=>{g&&(g.value=""),p()}),(I=document.getElementById("m-save"))==null||I.addEventListener("click",()=>qt(e,b,t,n));const r=document.getElementById("m-gen-squad"),E=document.getElementById("m-gen-strong-label");function f(){if(E&&(E.style.display=r!=null&&r.checked?"flex":"none",!(r!=null&&r.checked))){const y=document.getElementById("m-gen-strong");y&&(y.checked=!1)}}r==null||r.addEventListener("change",f),f()},50)}function et(){var e,t,n,a,d,l;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((t=document.getElementById("m-kit-color1"))==null?void 0:t.value)||"#1A6B3C",color2:((n=document.getElementById("m-kit-color2"))==null?void 0:n.value)||"#ffffff",color3:((a=document.getElementById("m-kit-color3"))==null?void 0:a.value)||"#000000",shorts:((d=document.getElementById("m-kit-shorts"))==null?void 0:d.value)||"#111111",socks:((l=document.getElementById("m-kit-socks"))==null?void 0:l.value)||"#ffffff"}}function ee(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=Ke(et(),"modal"))}async function qt(e,t,n,a){var $,I,y,m,c,x,w;const{toast:d,closeModal:l}=a,b=document.getElementById("m-error"),u=document.getElementById("m-save"),h=($=document.getElementById("m-real"))==null?void 0:$.value.trim(),i=(I=document.getElementById("m-encoded"))==null?void 0:I.value.trim().toUpperCase(),s=(y=document.getElementById("m-country"))==null?void 0:y.value.trim().toUpperCase(),o=((m=document.getElementById("m-logo"))==null?void 0:m.value.trim())||null,g=((c=document.getElementById("m-gen-stadium"))==null?void 0:c.checked)??!1,p=((x=document.getElementById("m-gen-squad"))==null?void 0:x.checked)??!1,r=((w=document.getElementById("m-gen-strong"))==null?void 0:w.checked)??!1,E=et();if(!h){b.textContent="Le nom du club est requis.";return}if(!i){b.textContent="Le nom encodé est requis.";return}if(!s){b.textContent="Le pays est requis.";return}u.disabled=!0,u.textContent="Enregistrement…";const f={real_name:h,encoded_name:i,country_code:s,logo_url:o,kit_style:E.style,kit_color1:E.color1,kit_color2:E.color2,kit_color3:E.color3,kit_shorts:E.shorts,kit_socks:E.socks};let v=e==null?void 0:e.id;if(t){const{error:B}=await _.from("clubs").update(f).eq("id",v);if(B){b.textContent=B.message,u.disabled=!1,u.textContent="💾 Enregistrer";return}}else{const{data:B,error:k}=await _.from("clubs").insert(f).select().single();if(k){b.textContent=k.message,u.disabled=!1,u.textContent="✅ Créer le club";return}if(v=B.id,g){u.textContent="🏟️ Création du stade…";const{data:A,error:L}=await _.from("stadium_definitions").insert({name:`Stade de ${h}`,club_id:v,country_code:s}).select().single();L?console.warn("[Stadium] Erreur def stade:",L.message):A&&await _.from("cards").insert({card_type:"stadium",stadium_id:A.id})}p&&(u.textContent="⚽ Génération des joueurs…",await Xe(v,s,d,r))}d(t?"Club modifié ✅":"Club créé ✅","success"),l(),se(n,a)}const Kt=["normal","pepite","papyte","legende"],Se=["GK","DEF","MIL","ATT"],Jt=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let q={...D},re=[];async function Vt(e,{toast:t}){const{data:n}=await _.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");re=n||[],q={...D},e.innerHTML=Xt(re),Wt(e,re,t),U()}function Ce(){var n;const e=((n=document.getElementById("cb-surname-real"))==null?void 0:n.value)||"",t=document.getElementById("cb-surname-enc");t&&(t.value=ce(e))}function Yt(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=re.find(a=>String(a.id)===String(e));return t?{style:t.kit_style||R.style,color1:t.kit_color1||R.color1,color2:t.kit_color2||R.color2,shorts:t.kit_shorts||R.shorts,socks:t.kit_socks||R.socks}:{...R}}function U(){var g,p,r,E;const e=f=>{var v;return((v=document.getElementById(f))==null?void 0:v.value)||""},t={firstname:e("cb-firstname"),surname_real:e("cb-surname-enc")||ce(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((p=(g=document.getElementById("cb-club"))==null?void 0:g.selectedOptions[0])==null?void 0:p.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=Yt(),a=document.getElementById("cb-club"),d=((E=(r=a==null?void 0:a.selectedOptions[0])==null?void 0:r.dataset)==null?void 0:E.logo)||null,l=Je(q,n,120),b=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(l)}`,u=gt(t,{portraitUrl:b,clubLogoUrl:d,showNotes:!0}),h=document.getElementById("card-preview");h&&(h.innerHTML=u);const i=document.getElementById("avatar-preview-wrap");i&&(i.innerHTML=l);const s=e("cb-surname-real"),o=document.getElementById("encode-summary");o&&s&&(o.textContent=`${e("cb-firstname")} ${s} → ${e("cb-firstname")} ${t.surname_real}`)}function tt(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};q={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function Wt(e,t,n){var d,l,b,u,h;e.querySelectorAll("input,select").forEach(i=>{i.addEventListener("input",U),i.addEventListener("change",U)});const a=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];a.forEach(i=>{var s;(s=document.getElementById(i))==null||s.addEventListener("change",()=>{tt(),U()})}),(d=document.getElementById("cb-surname-real"))==null||d.addEventListener("input",()=>{Ce(),U()}),(l=document.getElementById("btn-encode"))==null||l.addEventListener("click",()=>{Ce(),U()}),(b=document.getElementById("cb-club"))==null||b.addEventListener("change",U),(u=document.getElementById("btn-save-player"))==null||u.addEventListener("click",()=>Zt(n)),(h=document.getElementById("btn-reset"))==null||h.addEventListener("click",()=>{e.querySelectorAll("input").forEach(i=>i.value=""),e.querySelectorAll("select").forEach(i=>i.selectedIndex=0),q={...D},a.forEach(i=>{const s=i.replace("av-",""),o=document.getElementById(i);o&&(o.value=D[s]||"")}),U()})}async function Zt(e){const t=b=>{var u;return((u=document.getElementById(b))==null?void 0:u.value)||""},n=t("cb-surname-real").trim(),a=t("cb-surname-enc").trim()||ce(n);if(!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}tt();const d={firstname:t("cb-firstname").trim(),surname_real:n,surname_real:a,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:q,skin:q.skin||"blanc",hair:q.hairColor||"marron",hair_length:"court"},{error:l}=await _.from("players").insert(d);if(l){e("Erreur: "+l.message,"error");return}e(`✅ Joueur "${d.firstname} ${d.surname_real}" enregistré !`,"success")}function Xt(e){const t=Jt.map(([i,s])=>`<option value="${i}">${s} (${i})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(i=>`<option value="${i.id}" data-logo="${i.logo_url||""}">${i.encoded_name}</option>`).join(""),a=Se.map(i=>`<option value="${i}">${i}</option>`).join(""),d='<option value="">Aucun</option>'+Se.map(i=>`<option value="${i}">${i}</option>`).join(""),l=Kt.map(i=>`<option value="${i}">${i.charAt(0).toUpperCase()+i.slice(1)}</option>`).join(""),b=(i,s,o)=>Object.entries(s).map(([g,p])=>`<option value="${g}" ${g===(o||"")?"selected":""}>${p.label}</option>`).join(""),u=Object.keys(ut).map(i=>`<option value="${i}" ${i===D.skin?"selected":""}>${i.charAt(0).toUpperCase()+i.slice(1)}</option>`).join(""),h=Object.keys(pt).map(i=>`<option value="${i}" ${i===D.hairColor?"selected":""}>${i.charAt(0).toUpperCase()+i.slice(1)}</option>`).join("");return`
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
          <div><label>Rareté</label><select id="cb-rarity">${l}</select></div>
          <div><label>Note min</label><input id="cb-note-min" type="number" min="0" max="10" placeholder="—"></div>
          <div><label>Note max</label><input id="cb-note-max" type="number" min="0" max="10" placeholder="—"></div>
        </div>
        <div style="margin-top:8px;display:flex;gap:8px">
          ${["normal","pepite","papyte","legende"].map(i=>`
            <div style="background:${mt[i]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
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
              <select id="av-skin">${u}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${b("av-hair",ft,D.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${h}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${b("av-eyebrows",bt,D.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${b("av-eyes",yt,D.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${b("av-nose",vt,D.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${b("av-mouth",xt,D.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${b("av-beard",ht,D.beard)}</select>
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
  `}async function nt(e,{toast:t}){const{data:n,error:a}=await _.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").order("created_at",{ascending:!1});if(a){e.innerHTML=`<p style="color:red">${a.message}</p>`;return}const d=n||[];e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <input id="search-users" placeholder="🔍 Rechercher un manager…" style="width:260px">
      <span style="font-size:13px;color:var(--gray-600)">${d.length} manager(s)</span>
    </div>
    <div class="card-panel" style="background:#fff;box-shadow:0 1px 4px rgba(0,0,0,0.08)">
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
  `,l(d),document.getElementById("search-users").addEventListener("input",b=>{const u=b.target.value.toLowerCase();l(d.filter(h=>{var i;return h.pseudo.toLowerCase().includes(u)||((i=h.club_name)==null?void 0:i.toLowerCase().includes(u))}))});function l(b){document.getElementById("users-tbody").innerHTML=b.map(u=>{const h=u.mmr??1e3,i=u.mmr_deviation??350,s=u.placement_matches??0,o=Et(h),g=u.ranked_wins??0,p=u.ranked_losses??0,r=u.ranked_draws??0,E=g+p+r,f=E>0?Math.round(g/E*100):null,v=s<10,$=i<80?"#1A6B3C":i<150?"#e67e22":"#bb2020";return`
        <tr>
          <td>
            <div style="font-weight:700">${u.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${u.club_name||"—"}</div>
          </td>
          <td style="font-size:12px">
            <div>${(u.credits||0).toLocaleString("fr")} cr.</div>
            <div style="color:var(--gray-600)">Niv. ${u.level}</div>
          </td>
          <td style="font-size:12px">${u.wins}V / ${u.draws}N / ${u.losses}D</td>
          <td style="font-size:12px">🥇${u.trophies_top1} 🥈${u.trophies_top2} 🥉${u.trophies_top3}</td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:5px">
              <span style="font-size:16px">${o.emoji}</span>
              <span style="font-weight:700;color:${o.color}">${o.label}</span>
            </div>
            ${v?`<div style="font-size:10px;color:#e67e22">${s}/10 placement${s<10?` (${10-s} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${g}V ${r}N ${p}D${f!==null?` · ${f}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${h}</div>
            <div style="font-size:10px;color:${$}">RD ±${Math.round(i)}</div>
          </td>
          <td>
            ${u.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td>
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${u.id}" data-is-admin="${u.is_admin}">
              ${u.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(u=>{u.addEventListener("click",async()=>{const h=u.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${h?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:i}=await _.from("users").update({is_admin:h}).eq("id",u.dataset.toggleAdmin);i?t(i.message,"error"):(t("Rôle mis à jour ✅","success"),nt(e,{toast:t}))})})}}const pe=[{value:"normal",label:"Normal",color:"#ccc"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function it(e,t){var h;const{toast:n}=t,{data:a,error:d}=await _.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_real, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(d){e.innerHTML=`<p style="color:var(--danger)">${d.message}</p>`;return}const l=a||[],b=l.filter(i=>i.status==="active").length,u=l.filter(i=>i.status==="sold").length;e.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px">
      <button id="btn-price-grid" class="btn btn-primary">📊 Grille des prix</button>
      <div style="display:flex;gap:12px">
        <div class="card-panel" style="min-width:120px;text-align:center;padding:12px 20px">
          <div style="font-size:22px;font-weight:700;color:#1A6B3C">${b}</div>
          <div style="font-size:11px;color:var(--tile-fg-dim)">Annonces actives</div>
        </div>
        <div class="card-panel" style="min-width:120px;text-align:center;padding:12px 20px">
          <div style="font-size:22px;font-weight:700;color:#D4A017">${u}</div>
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
            ${l.map(i=>{var p,r,E,f;const s=(p=i.card)==null?void 0:p.player,o=s?`${s.firstname} ${s.surname_real}`:((r=i.card)==null?void 0:r.card_type)||"—",g={active:"#1A6B3C",sold:"#D4A017",cancelled:"#888"};return`<tr>
                <td><b>${o}</b>${s?`<div style="font-size:10px;color:var(--tile-fg-dim)">${s.rarity} · ${s.job}</div>`:""}</td>
                <td style="font-size:12px">${((E=i.seller)==null?void 0:E.pseudo)||"—"}</td>
                <td style="font-size:12px">${((f=i.buyer)==null?void 0:f.pseudo)||"—"}</td>
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
  `,document.querySelectorAll("[data-cancel]").forEach(i=>{i.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:s}=await _.from("market_listings").update({status:"cancelled"}).eq("id",i.dataset.cancel);s?n(s.message,"error"):(n("Annonce annulée","success"),it(e,t))})}),(h=document.getElementById("btn-price-grid"))==null||h.addEventListener("click",()=>Qt(t))}async function Qt(e){const{openModal:t,closeModal:n,toast:a}=e;await fe(e)}async function fe(e){var i,s,o,g;const{openModal:t,closeModal:n,toast:a}=e,{data:d,error:l}=await _.from("sell_price_configs").select("*").order("rarity").order("note_min");if(l){a(l.message,"error");return}const b=p=>{const r=pe.find(E=>E.value===p.rarity)||pe[0];return`<tr data-row="${p.id}">
      <td><span style="color:${r.color};font-weight:700">${r.label}</span></td>
      <td style="text-align:center">${p.note_min}</td>
      <td style="text-align:center">${p.note_max}</td>
      <td style="text-align:right">${(p.price_min||0).toLocaleString("fr")} cr.</td>
      <td style="text-align:right">${(p.price_max||0).toLocaleString("fr")} cr.</td>
      <td style="text-align:center">
        <button class="btn btn-ghost btn-sm" data-edit-row="${p.id}">✏️</button>
        <button class="btn btn-danger btn-sm" data-del-row="${p.id}">🗑️</button>
      </td>
    </tr>`},u=`
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
          ${(d||[]).map(b).join("")||'<tr><td colspan="6" style="text-align:center;color:#aaa;padding:20px">Aucune règle définie.</td></tr>'}
        </tbody>
      </table>
    </div>

    <div id="pg-form" style="display:none;background:#f7f7f7;border-radius:10px;padding:14px;margin-top:10px">
      <input type="hidden" id="pg-id">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
        <div>
          <label>RARETÉ</label>
          <select id="pg-rarity">${pe.map(p=>`<option value="${p.value}">${p.label}</option>`).join("")}</select>
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
  `;t("📊 Grille des prix — vente marché",u,`
    <button id="pg-add-row" class="btn btn-primary">+ Ajouter une ligne</button>
    <button id="pg-close" class="btn btn-ghost">Fermer</button>
  `),(i=document.getElementById("pg-close"))==null||i.addEventListener("click",()=>n()),(s=document.getElementById("pg-add-row"))==null||s.addEventListener("click",()=>{document.getElementById("pg-form").style.display="block",document.getElementById("pg-id").value="",document.getElementById("pg-rarity").value="normal",document.getElementById("pg-note-min").value=0,document.getElementById("pg-note-max").value=20,document.getElementById("pg-price-min").value=2500,document.getElementById("pg-price-max").value=15e3}),document.querySelectorAll("[data-edit-row]").forEach(p=>{p.addEventListener("click",()=>{const r=(d||[]).find(E=>E.id===p.dataset.editRow);r&&(document.getElementById("pg-form").style.display="block",document.getElementById("pg-id").value=r.id,document.getElementById("pg-rarity").value=r.rarity,document.getElementById("pg-note-min").value=r.note_min,document.getElementById("pg-note-max").value=r.note_max,document.getElementById("pg-price-min").value=r.price_min,document.getElementById("pg-price-max").value=r.price_max)})}),document.querySelectorAll("[data-del-row]").forEach(p=>{p.addEventListener("click",async()=>{confirm("Supprimer cette ligne ?")&&(await _.from("sell_price_configs").delete().eq("id",p.dataset.delRow),a("Ligne supprimée","success"),fe(e))})}),(o=document.getElementById("pg-form-cancel"))==null||o.addEventListener("click",()=>{document.getElementById("pg-form").style.display="none"}),(g=document.getElementById("pg-form-save"))==null||g.addEventListener("click",async()=>{const p=document.getElementById("pg-id").value,r={rarity:document.getElementById("pg-rarity").value,note_min:Number(document.getElementById("pg-note-min").value)||0,note_max:Number(document.getElementById("pg-note-max").value)||0,price_min:Number(document.getElementById("pg-price-min").value)||0,price_max:Number(document.getElementById("pg-price-max").value)||0};if(r.price_min>r.price_max){a("Le prix min doit être ≤ prix max","error");return}if(r.note_min>r.note_max){a("La note min doit être ≤ note max","error");return}const{error:E}=p?await _.from("sell_price_configs").update(r).eq("id",p):await _.from("sell_price_configs").insert(r);if(E){a(E.message,"error");return}a("Règle enregistrée ✅","success"),fe(e)})}async function en(e,{toast:t}){e.innerHTML=`
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
  `,document.getElementById("export-clubs-template").addEventListener("click",()=>{ne("clubs_template.csv",`real_name,encoded_name,country_code,logo_url
Paris Saint-Germain,PARIS FC,FR,
Real Madrid,MADRID FC,ES,
`)}),document.getElementById("export-players-template").addEventListener("click",()=>{ne("players_template.csv",`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
Kylian,Mbappe,,FR,PARIS FC,ATT,,0,0,2,9,legende,,,blanc,noir,court,50000
Achraf,Hakimi,,MA,PARIS FC,DEF,MIL,0,7,5,3,pepite,5,9,metisse,noir,court,20000
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:n,error:a}=await _.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(a){t(a.message,"error");return}if(!n||n.length===0){t("Aucun club à exporter","info");return}let d=`real_name,encoded_name,country_code,logo_url
`;n.forEach(l=>{d+=[l.real_name,l.encoded_name,l.country_code,l.logo_url||""].map(Te).join(",")+`
`}),ne("clubs_export.csv",d),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:a}=await _.from("players").select("firstname,surname_real,surname_real,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_real");if(a){t(a.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let d=`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(l=>{var b;d+=[l.firstname,l.surname_real,l.surname_real,l.country_code,((b=l.clubs)==null?void 0:b.encoded_name)||"",l.job,l.job2||"",l.note_g,l.note_d,l.note_m,l.note_a,l.rarity,l.note_min??"",l.note_max??"",l.skin,l.hair,l.hair_length,l.sell_price].map(Te).join(",")+`
`}),ne("players_export.csv",d),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const a=n.target.files[0];if(!a)return;const d=document.getElementById("clubs-import-result");d.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const l=await a.text(),b=Me(l);if(b.length===0){d.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let u=0,h=0;const i=[];for(const s of b){if(!s.real_name||!s.encoded_name||!s.country_code){h++,i.push(`Ligne ignorée (champs manquants): ${s.real_name||"?"}`);continue}const o={real_name:s.real_name,encoded_name:s.encoded_name.toUpperCase(),country_code:s.country_code.toUpperCase().slice(0,2),logo_url:s.logo_url||null},{error:g}=await _.from("clubs").upsert(o,{onConflict:"encoded_name"});g?(h++,i.push(`${s.encoded_name}: ${g.message}`)):u++}d.innerHTML=`<div style="color:var(--green)">✅ ${u} clubs importés</div>
        ${h>0?`<div style="color:#c0392b">❌ ${h} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${i.slice(0,10).join("<br>")}</div>`:""}`,t(`${u} clubs importés`,"success")}catch(l){d.innerHTML=`<span style="color:#c0392b">Erreur : ${l.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const a=n.target.files[0];if(!a)return;const d=document.getElementById("players-import-result");d.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const l=await a.text(),b=Me(l);if(b.length===0){d.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:u}=await _.from("clubs").select("id,encoded_name"),h={};(u||[]).forEach(v=>{h[v.encoded_name.toUpperCase()]=v.id});let i=0,s=0;const o=[],g=["GK","DEF","MIL","ATT"],p=["normal","pepite","papyte","legende"],r=["blanc","metisse","typ","noir"],E=["blond","marron","noir","chauve"],f=["rase","court","milong","long"];for(const v of b){if(!v.firstname||!v.surname_real||!v.country_code||!v.job){s++,o.push(`Ligne ignorée (champs requis manquants): ${v.firstname||"?"}`);continue}if(!g.includes(v.job)){s++,o.push(`${v.firstname}: job invalide "${v.job}"`);continue}const $=v.club_encoded_name&&h[v.club_encoded_name.toUpperCase()]||null,I={firstname:v.firstname,surname_real:v.surname_real,surname_real:v.surname_real||ce(v.surname_real),country_code:v.country_code.toUpperCase().slice(0,2),club_id:$,job:v.job,job2:g.includes(v.job2)?v.job2:null,note_g:parseInt(v.note_g)||0,note_d:parseInt(v.note_d)||0,note_m:parseInt(v.note_m)||0,note_a:parseInt(v.note_a)||0,rarity:p.includes(v.rarity)?v.rarity:"normal",note_min:v.note_min!==""&&v.note_min!=null?parseInt(v.note_min):null,note_max:v.note_max!==""&&v.note_max!=null?parseInt(v.note_max):null,skin:r.includes(v.skin)?v.skin:"blanc",hair:E.includes(v.hair)?v.hair:"noir",hair_length:f.includes(v.hair_length)?v.hair_length:"court",sell_price:parseInt(v.sell_price)||0},{error:y}=await _.from("players").insert(I);y?(s++,o.push(`${v.firstname} ${v.surname_real}: ${y.message}`)):i++}d.innerHTML=`<div style="color:var(--green)">✅ ${i} joueurs importés</div>
        ${s>0?`<div style="color:#c0392b">❌ ${s} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${o.slice(0,10).join("<br>")}</div>`:""}`,t(`${i} joueurs importés`,"success")}catch(l){d.innerHTML=`<span style="color:#c0392b">Erreur : ${l.message}</span>`}n.target.value=""})}function Te(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function ne(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(n),d=document.createElement("a");d.href=a,d.download=e,d.click(),URL.revokeObjectURL(a)}function Me(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(b=>b.trim());if(t.length<2)return[];const n=t[0],a=n.split(";").length>n.split(",").length?";":",",d=ze(n,a).map(b=>b.trim().replace(/^\uFEFF/,"").toLowerCase()),l=[];for(let b=1;b<t.length;b++){if(!t[b].trim())continue;const u=ze(t[b],a),h={};d.forEach((i,s)=>{h[i]=(u[s]||"").trim()}),!Object.values(h).every(i=>!i)&&l.push(h)}return l}function ze(e,t=","){const n=[];let a="",d=!1;for(let l=0;l<e.length;l++){const b=e[l];d?b==='"'?e[l+1]==='"'?(a+='"',l++):d=!1:a+=b:b==='"'?d=!0:b===t?(n.push(a),a=""):a+=b}return n.push(a),n}const tn={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function nn(e,{toast:t}){const n=Object.keys(ue);let a=n[0];const{data:d}=await _.from("formation_links_overrides").select("formation, links"),l={};(d||[]).forEach(s=>{l[s.formation]=s.links});let b=new Set;function u(s,o){return[s,o].sort().join("-")}function h(s){const o=l[s]||ue[s]||[];b=new Set(o.map(([g,p])=>u(g,p)))}h(a),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${n.map(s=>`<option value="${s}" ${s===a?"selected":""}>${s}</option>`).join("")}
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
        <div style="font-weight:700;font-size:13px;margin-bottom:8px">Liens (${b.size}/? actifs)</div>
        <div id="links-list" style="display:flex;flex-direction:column;gap:4px;max-height:520px;overflow-y:auto"></div>
      </div>
    </div>
  `;function i(){const s=_t[a]||{},o=ke(a),g=320,p=400,r=22;function E(y){const m=s[y];return m?{x:m.x*g,y:m.y*p}:null}let f=`<svg width="${g}" height="${p}" viewBox="0 0 ${g} ${p}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;o.forEach(([y,m],c)=>{const x=E(y),w=E(m);if(!x||!w)return;const B=u(y,m),k=b.has(B),A=k?"#3b82f6":"#999",L=k?.95:.35,S=k?4:3;f+=`<line x1="${x.x}" y1="${x.y}" x2="${w.x}" y2="${w.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${B}" style="cursor:pointer"/>`,f+=`<line x1="${x.x}" y1="${x.y}" x2="${w.x}" y2="${w.y}"
        stroke="${A}" stroke-width="${S}" stroke-dasharray="${k?"none":"4,3"}"
        opacity="${L}" pointer-events="none" data-line-key="${B}"/>`});for(const y of Object.keys(s)){const m=E(y);if(!m)continue;const c=y.replace(/\d+/,""),x=tn[c]||"#555";f+=`<circle cx="${m.x}" cy="${m.y}" r="${r}" fill="${x}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,f+=`<text x="${m.x}" y="${m.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${y}</text>`}f+="</svg>",document.getElementById("field-wrap").innerHTML=f;const v=document.getElementById("links-list");v.innerHTML=o.map(([y,m])=>{const c=u(y,m),x=b.has(c);return`
        <button class="link-toggle" data-key="${c}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${x?"#3b82f6":"#ddd"};
          background:${x?"#eaf2ff":"#fafafa"};
          color:${x?"#1d4ed8":"#888"}">
          <span>${y} ↔ ${m}</span>
          <span>${x?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const $=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');$&&($.textContent=`Liens (${b.size}/${o.length} actifs)`);function I(y){b.has(y)?b.delete(y):b.add(y),i()}e.querySelectorAll(".link-hit").forEach(y=>{y.addEventListener("click",()=>I(y.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(y=>{y.addEventListener("click",()=>I(y.dataset.key))})}i(),document.getElementById("formation-select").addEventListener("change",s=>{a=s.target.value,h(a),i()}),document.getElementById("reset-btn").addEventListener("click",()=>{const s=ue[a]||[];b=new Set(s.map(([o,g])=>u(o,g))),i(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const o=ke(a).filter(([p,r])=>b.has(u(p,r))),{error:g}=await _.from("formation_links_overrides").upsert({formation:a,links:o,updated_at:new Date().toISOString()});if(g){t(g.message,"error");return}l[a]=o,t(`Liens enregistrés pour ${a} (${o.length} actifs)`,"success")})}const an=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],on=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],rn=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function ln(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await _.from("booster_configs").select("*").order("sort_order");let n=null,a=[],d=null;const l=()=>window.innerWidth<700;async function b(){if(!n){a=[];return}if(n!==d){const{data:o}=await _.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");a=o||[],d=n}}function u(){return`
    <div id="booster-list" style="background:#fff;${l()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
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
    </div>`}function h(){const o=n?(t||[]).find(r=>r.id===n):null;if(!o)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const g=a.reduce((r,E)=>r+Number(E.percentage||0),0),p=Math.abs(g-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${l()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

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
              ${rn.map(r=>`<option value="${r.value}" ${o.price_type===r.value?"selected":""}>${r.label}</option>`).join("")}
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
              Total : ${g.toFixed(1)}% ${p?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${a.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':a.map((r,E)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${E}">
            <select class="rate-type" data-idx="${E}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${an.map(f=>`<option value="${f.value}" ${r.card_type===f.value?"selected":""}>${f.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${E}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${on.map(f=>`<option value="${f.value}" ${(r.rarity||"")===f.value?"selected":""}>${f.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${E}" type="number" min="0" max="20" value="${r.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${E}" type="number" min="0" max="20" value="${r.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${E}" type="number" min="0.1" max="100" step="0.1" value="${r.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${E}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function i(o=!1){o||await b();const g=!n&&l(),p=n&&l();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!l()||g||!n?u():""}
      ${!l()||p?h():""}
    </div>`,s()}function s(){var p,r,E,f,v,$,I;const o=y=>e.querySelector(y);e.querySelectorAll(".booster-row").forEach(y=>{y.addEventListener("click",m=>{m.target.closest(".btn-delete")||(n=y.dataset.id,d=null,i())})}),(p=o("#btn-back"))==null||p.addEventListener("click",()=>{n=null,i()}),(r=o("#btn-new"))==null||r.addEventListener("click",async()=>{const y=prompt("Nom du nouveau booster :");if(!(y!=null&&y.trim()))return;const{data:m,error:c}=await _.from("booster_configs").insert({name:y.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(c){alert(c.message);return}t.push(m),n=m.id,d=null,i()}),e.querySelectorAll(".btn-delete").forEach(y=>{y.addEventListener("click",async m=>{if(m.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await _.from("booster_configs").delete().eq("id",y.dataset.id);const c=t.findIndex(x=>x.id===y.dataset.id);c>-1&&t.splice(c,1),n===y.dataset.id&&(n=null,d=null),i()})}),(E=o("#btn-cancel"))==null||E.addEventListener("click",()=>{n=null,i()}),(f=o("#f-price-type"))==null||f.addEventListener("change",y=>{const m=o("#credits-field");m&&(m.style.opacity=y.target.value!=="credits"?"0.4":"1")}),(v=o("#btn-pick-icon"))==null||v.addEventListener("click",async()=>{var m;const y=o("#icon-picker-grid");if(y){if(y.style.display!=="none"){y.style.display="none";return}y.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',y.style.display="block";try{const x=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),w=Array.isArray(x)?x.filter(k=>k.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(k.name)):[];if(!w.length){y.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const B=((m=o("#f-image-url"))==null?void 0:m.value)||"";y.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${w.map(k=>`
          <div class="icon-pick-item" data-name="${k.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${k.name===B?"#1A6B3C":"#ddd"};background:${k.name===B?"#f0f7f0":"#fff"}">
            <img src="/icons/${k.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${k.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,y.querySelectorAll(".icon-pick-item").forEach(k=>{k.addEventListener("click",()=>{const A=o("#f-image-url");A&&(A.value=k.dataset.name),y.style.display="none"})})}catch(c){y.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${c.message}</div>`}}});function g(){e.querySelectorAll("[data-rate-idx]").forEach(y=>{var c,x,w,B,k;const m=Number(y.dataset.rateIdx);m>=0&&m<a.length&&(a[m].card_type=((c=y.querySelector(".rate-type"))==null?void 0:c.value)||"player",a[m].rarity=((x=y.querySelector(".rate-rarity"))==null?void 0:x.value)||null,a[m].note_min=Number((w=y.querySelector(".rate-note-min"))==null?void 0:w.value)||null,a[m].note_max=Number((B=y.querySelector(".rate-note-max"))==null?void 0:B.value)||null,a[m].percentage=Number((k=y.querySelector(".rate-pct"))==null?void 0:k.value)||0)})}($=o("#btn-add-rate"))==null||$.addEventListener("click",()=>{g(),a.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:a.length}),i(!0)}),e.querySelectorAll(".btn-del-rate").forEach(y=>{y.addEventListener("click",()=>{g(),a.splice(Number(y.dataset.idx),1),i(!0)})}),(I=o("#btn-save"))==null||I.addEventListener("click",async()=>{var B,k,A,L,S,C,T,z,j,N,F,P,te;const y=(t||[]).find(M=>M.id===n);if(!y)return;const m=[];e.querySelectorAll("[data-rate-idx]").forEach(M=>{var Y,W,Z,X,Q;const K=Number(M.dataset.rateIdx);m.push({booster_id:n,card_type:((Y=M.querySelector(".rate-type"))==null?void 0:Y.value)||"player",rarity:((W=M.querySelector(".rate-rarity"))==null?void 0:W.value)||null,note_min:Number((Z=M.querySelector(".rate-note-min"))==null?void 0:Z.value)||null,note_max:Number((X=M.querySelector(".rate-note-max"))==null?void 0:X.value)||null,percentage:Number((Q=M.querySelector(".rate-pct"))==null?void 0:Q.value)||0,sort_order:K});const O=m[m.length-1];O.rarity||(O.rarity=null),O.note_min||(O.note_min=null),O.note_max||(O.note_max=null)});const c=m.reduce((M,K)=>M+K.percentage,0);if(m.length&&Math.abs(c-100)>.5){alert(`La somme doit faire 100% (actuellement ${c.toFixed(1)}%)`);return}const x={name:((k=(B=o("#f-name"))==null?void 0:B.value)==null?void 0:k.trim())||y.name,image_url:((L=(A=o("#f-image-url"))==null?void 0:A.value)==null?void 0:L.trim())||null,price_type:(S=o("#f-price-type"))==null?void 0:S.value,price_credits:Number((C=o("#f-price-credits"))==null?void 0:C.value)||0,card_count:Number((T=o("#f-card-count"))==null?void 0:T.value)||5,is_active:((z=o("#f-active"))==null?void 0:z.checked)??y.is_active,allow_duplicates:((j=o("#f-allow-dup"))==null?void 0:j.checked)??!0,sort_order:Number((N=o("#f-sort"))==null?void 0:N.value)||0,max_per_user:(F=o("#f-max-per-user"))!=null&&F.value?Number(o("#f-max-per-user").value):null,available_from:((P=o("#f-available-from"))==null?void 0:P.value)||null,available_until:((te=o("#f-available-until"))==null?void 0:te.value)||null},{error:w}=await _.from("booster_configs").update(x).eq("id",n);if(w){alert(w.message);return}if(Object.assign(y,x),await _.from("booster_drop_rates").delete().eq("booster_id",n),m.length){const{error:M}=await _.from("booster_drop_rates").insert(m);if(M){alert(M.message);return}}a=m,d=n,alert("✅ Booster enregistré !"),i(!0)})}i()}const at=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function sn(e){await ve(e)}async function ve(e){const{data:t,error:n}=await _.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
          ${(t||[]).map(a=>dn(a)).join("")}
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
              ${at.map(a=>`<option value="${a.value}">${a.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>Re(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>cn(e)),e.querySelectorAll("[data-edit]").forEach(a=>{const d=(t||[]).find(l=>l.id===a.dataset.edit);d&&a.addEventListener("click",()=>Re(d))}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await _.from("sell_price_configs").delete().eq("id",a.dataset.delete),await ve(e))})})}function dn(e){const t=at.find(n=>n.value===e.rarity);return`
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
    </tr>`}function Re(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function cn(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,a=parseInt(document.getElementById("form-price").value)||0,d=parseInt(document.getElementById("form-note-min").value)||1,l=parseInt(document.getElementById("form-note-max").value)||10;if(d>l){alert("Note min doit être ≤ note max");return}const b={rarity:n,price:a,note_min:d,note_max:l,updated_at:new Date().toISOString()};let u;if(t?{error:u}=await _.from("sell_price_configs").update(b).eq("id",t):{error:u}=await _.from("sell_price_configs").insert(b),u){alert("Erreur : "+u.message);return}document.getElementById("config-form").style.display="none",await ve(e)}async function un(e){await xe(e)}async function xe(e){const{data:t}=await _.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Journal des mises à jour</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(t||[]).map(n=>pn(n)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
            <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">URL IMAGE (optionnel)</label>
            <input id="form-art-img" placeholder="https://... ou chemin relatif" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:13px">
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>De(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>mn(e)),e.querySelectorAll("[data-edit]").forEach(n=>{const a=(t||[]).find(d=>d.id===n.dataset.edit);a&&n.addEventListener("click",()=>De(a))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await _.from("patch_notes").delete().eq("id",n.dataset.delete),await xe(e))})})}function pn(e){const t=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
    <div style="background:#fff;border-radius:10px;padding:14px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;gap:12px;align-items:flex-start">
      ${e.image_url?`<img src="${e.image_url}" style="width:60px;height:60px;object-fit:cover;border-radius:8px;flex-shrink:0">`:""}
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:2px">
          <span style="font-size:14px;font-weight:900">${e.title}</span>
          ${e.is_published?"":'<span style="font-size:10px;background:#f0f0f0;color:#888;padding:1px 6px;border-radius:6px;font-weight:700">BROUILLON</span>'}
        </div>
        <div style="font-size:11px;color:#999;margin-bottom:4px">${t}</div>
        <div style="font-size:12px;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e.description}</div>
      </div>
      <div style="display:flex;gap:6px;flex-shrink:0">
        <button data-edit="${e.id}" class="btn btn-ghost btn-sm">✏️</button>
        <button data-delete="${e.id}" class="btn btn-ghost btn-sm" style="color:#cc2222">🗑️</button>
      </div>
    </div>`}function De(e){const t=document.getElementById("article-form");t.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-pub").checked=e?e.is_published:!0;const n=new Date((e==null?void 0:e.published_at)||Date.now()),a=new Date(n.getTime()-n.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=a,t.scrollIntoView({behavior:"smooth"})}async function mn(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-art-title").value.trim(),a=document.getElementById("form-art-desc").value.trim(),d=document.getElementById("form-art-img").value.trim()||null,l=document.getElementById("form-art-pub").checked,b=document.getElementById("form-art-date").value;if(!n){alert("Le titre est obligatoire.");return}if(!a){alert("La description est obligatoire.");return}const u=b?new Date(b).toISOString():new Date().toISOString(),h={title:n,description:a,image_url:d,is_published:l,published_at:u};let i;if(t?{error:i}=await _.from("patch_notes").update(h).eq("id",t):{error:i}=await _.from("patch_notes").insert(h),i){alert("Erreur : "+i.message);return}document.getElementById("article-form").style.display="none",await xe(e)}async function gn(e){await V(e)}async function V(e){var s,o,g,p,r,E,f,v,$,I,y,m;const{data:t}=await _.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
    <div style="padding:20px;max-width:820px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <div>
          <h2 style="font-size:20px;font-weight:900">🎓 Tutoriel — Étapes</h2>
          <div style="font-size:12px;color:#888;margin-top:2px">Gérez les slides du tutoriel affiché aux nouveaux joueurs</div>
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
          </div>`:(t||[]).map(c=>fn(c)).join("")}
      </div>

      <!-- Formulaire -->
      <div id="ts-form" style="display:none;margin-top:24px;background:#fff;border-radius:12px;padding:20px;box-shadow:0 1px 8px rgba(0,0,0,0.1)">
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
      </div>
    </div>`,(s=document.getElementById("ts-add"))==null||s.addEventListener("click",()=>je(null,(t==null?void 0:t.length)||0)),(o=document.getElementById("ts-reset"))==null||o.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:c}=await _.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(c?"Erreur : "+c.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(g=document.getElementById("ts-cancel"))==null||g.addEventListener("click",ot),(p=document.getElementById("ts-save"))==null||p.addEventListener("click",()=>yn(e)),(r=document.getElementById("ts-preview-btn"))==null||r.addEventListener("click",bn);const n=document.getElementById("ts-editor"),a=()=>{const c=document.getElementById("ts-content");c&&n&&(c.value=n.innerHTML)};n==null||n.addEventListener("input",a),n==null||n.addEventListener("blur",a);const d=()=>{document.activeElement!==n&&(n==null||n.focus())};(E=document.getElementById("ts-toolbar"))==null||E.querySelectorAll("[data-cmd]").forEach(c=>{c.addEventListener("mousedown",x=>{x.preventDefault(),d();const w=c.dataset.cmd;w.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,w.split(":")[1]):document.execCommand(w,!1,null),a()})}),(f=document.getElementById("ts-insert-color"))==null||f.addEventListener("mousedown",c=>{c.preventDefault(),d();const x=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");x&&(document.execCommand("foreColor",!1,x),a())}),(v=document.getElementById("ts-clear-format"))==null||v.addEventListener("mousedown",c=>{c.preventDefault(),d(),document.execCommand("removeFormat",!1,null),a()}),n==null||n.addEventListener("focus",()=>{n&&(n.style.borderColor="#1A6B3C")}),n==null||n.addEventListener("blur",()=>{n&&(n.style.borderColor="#ddd")});const l=document.getElementById("ts-image"),b=document.getElementById("ts-img-preview"),u=document.getElementById("ts-img-preview-el"),h=document.getElementById("ts-img-picker-grid"),i=()=>{var x;const c=(x=l==null?void 0:l.value)==null?void 0:x.trim();if(c){const w="/";u.src=`${w}icons/${c}`,b.style.display="block"}else b.style.display="none"};l==null||l.addEventListener("input",i),($=document.getElementById("ts-img-clear"))==null||$.addEventListener("click",()=>{l&&(l.value=""),b.style.display="none",h.style.display="none"}),(I=document.getElementById("ts-img-pick"))==null||I.addEventListener("click",async()=>{if(h.style.display!=="none"){h.style.display="none";return}h.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',h.style.display="block";try{const x=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),w=Array.isArray(x)?x.filter(k=>k.name.startsWith("tuto_")):[];if(!w.length){h.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const B="/";h.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+w.map(k=>`
          <div data-pick="${k.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${B}icons/${k.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${k.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",h.querySelectorAll("[data-pick]").forEach(k=>{k.addEventListener("click",()=>{l&&(l.value=k.dataset.pick),i(),h.style.display="none"})})}catch(c){h.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+c.message+"</div>"}}),(y=document.getElementById("ts-color"))==null||y.addEventListener("input",c=>{const x=document.getElementById("ts-color-hex");x&&(x.value=c.target.value)}),(m=document.getElementById("ts-color-hex"))==null||m.addEventListener("input",c=>{const x=c.target.value;if(/^#[0-9a-fA-F]{6}$/.test(x)){const w=document.getElementById("ts-color");w&&(w.value=x)}}),e.querySelectorAll("[data-edit]").forEach(c=>{const x=(t||[]).find(w=>w.id===c.dataset.edit);x&&c.addEventListener("click",()=>je(x))}),e.querySelectorAll("[data-delete]").forEach(c=>{c.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await _.from("tutorial_steps").delete().eq("id",c.dataset.delete),V(e))})}),e.querySelectorAll("[data-toggle]").forEach(c=>{c.addEventListener("click",async()=>{const x=(t||[]).find(w=>w.id===c.dataset.toggle);x&&(await _.from("tutorial_steps").update({is_active:!x.is_active}).eq("id",x.id),V(e))})}),e.querySelectorAll("[data-up]").forEach(c=>{c.addEventListener("click",async()=>{const x=t||[],w=x.findIndex(B=>B.id===c.dataset.up);w<=0||(await Promise.all([_.from("tutorial_steps").update({step_order:x[w-1].step_order}).eq("id",x[w].id),_.from("tutorial_steps").update({step_order:x[w].step_order}).eq("id",x[w-1].id)]),V(e))})}),e.querySelectorAll("[data-down]").forEach(c=>{c.addEventListener("click",async()=>{const x=t||[],w=x.findIndex(B=>B.id===c.dataset.down);w<0||w>=x.length-1||(await Promise.all([_.from("tutorial_steps").update({step_order:x[w+1].step_order}).eq("id",x[w].id),_.from("tutorial_steps").update({step_order:x[w].step_order}).eq("id",x[w+1].id)]),V(e))})})}function fn(e){return`
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
  </div>`}function je(e,t=0){document.getElementById("ts-form").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const n=document.getElementById("ts-editor");n&&(n.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??t,document.getElementById("ts-active").checked=e?e.is_active:!0;const a=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=a,document.getElementById("ts-color-hex").value=a;const d=(e==null?void 0:e.image_url)||"",l=document.getElementById("ts-image");l&&(l.value=d);const b=document.getElementById("ts-img-preview"),u=document.getElementById("ts-img-preview-el");if(d&&b&&u){const h="/";u.src=`${h}icons/${d}`,b.style.display="block"}else b&&(b.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function ot(){document.getElementById("ts-form").style.display="none",document.getElementById("ts-preview-area").innerHTML=""}function bn(){var i,s;const e=document.getElementById("ts-emoji").value||"⚽",t=document.getElementById("ts-title").value||"Titre",n=document.getElementById("ts-editor"),a=n?n.innerHTML:document.getElementById("ts-content").value||"",d=document.getElementById("ts-color-hex").value||"#1A6B3C",l=(s=(i=document.getElementById("ts-image"))==null?void 0:i.value)==null?void 0:s.trim(),u=l?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${l}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",h=document.getElementById("ts-preview-area");h.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${d}"></div></div>
        <div style="padding:20px 20px 0;text-align:center">
          <div style="font-size:48px;margin-bottom:8px;line-height:1">${e}</div>
          <div style="font-size:17px;font-weight:900;color:#111;margin-bottom:4px">${t}</div>
          <div style="font-size:11px;color:#aaa">6 / 10</div>
        </div>
        ${u}
        <div style="padding:${l?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${a}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${d};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,h.querySelectorAll("ul,ol").forEach(o=>{o.style.paddingLeft="20px",o.style.margin="6px 0"}),h.querySelectorAll("li").forEach(o=>{o.style.marginBottom="4px"}),h.querySelectorAll("p").forEach(o=>{o.style.marginBottom="8px"})}async function yn(e){var o,g;const t=document.getElementById("ts-id").value,n=document.getElementById("ts-emoji").value.trim()||"⚽",a=document.getElementById("ts-title").value.trim(),d=document.getElementById("ts-editor"),l=(d?d.innerHTML:document.getElementById("ts-content").value).trim(),b=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",u=parseInt(document.getElementById("ts-order").value)||0,h=document.getElementById("ts-active").checked;if(!a||!l){alert("Titre et contenu sont obligatoires.");return}const i={emoji:n,title:a,content:l,color:b,step_order:u,is_active:h,image_url:((g=(o=document.getElementById("ts-image"))==null?void 0:o.value)==null?void 0:g.trim())||null};let s;if(t?{error:s}=await _.from("tutorial_steps").update(i).eq("id",t):{error:s}=await _.from("tutorial_steps").insert(i),s){alert("Erreur : "+s.message);return}ot(),V(e)}const rt="/",vn=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function xn(e,t){await be(e,t)}async function be(e,t){var d;const[{data:n},{data:a}]=await Promise.all([_.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),_.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">🏟️ Stades</h2>
        <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="st-list">
        ${(n||[]).length?(n||[]).map(l=>hn(l)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucun stade créé.</div>'}
      </div>
    </div>`,(d=document.getElementById("st-add-btn"))==null||d.addEventListener("click",()=>Ne(null,a,e,t)),e.querySelectorAll("[data-edit-stadium]").forEach(l=>{l.addEventListener("click",()=>{const b=(n||[]).find(u=>u.id===l.dataset.editStadium);b&&Ne(b,a,e,t)})})}function hn(e){var d,l;let t=null;e.image_url?t=e.image_url.startsWith("http")?e.image_url:`${rt}icons/${e.image_url}`:(d=e.club)!=null&&d.logo_url?t=e.club.logo_url:e.country_code&&(t=`https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/64.png`);const n=((l=e.club)==null?void 0:l.encoded_name)||e.country_code||"—",a=Ve(e.name,t,`${n}<br>+10 ⭐`,{width:140});return`<div data-edit-stadium="${e.id}" style="cursor:pointer;transition:transform .15s" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
    ${a}
  </div>`}function Ne(e,t,n,a){var s,o,g;const{openModal:d,closeModal:l,toast:b}=a,u=`
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
            ${vn.map(([p,r])=>`<option value="${p}" ${(e==null?void 0:e.country_code)===p?"selected":""}>${r} (${p})</option>`).join("")}
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
  `;d(e?`Modifier : ${e.name}`:"Nouveau stade",u,`
    <button id="st-cancel" class="btn btn-ghost">Annuler</button>
    <button id="st-save" class="btn btn-primary">Enregistrer</button>
  `);const i=()=>{var x,w,B,k,A,L,S;const p=((x=document.getElementById("st-name"))==null?void 0:x.value)||"NOM DU STADE",r=(B=(w=document.getElementById("st-image"))==null?void 0:w.value)==null?void 0:B.trim(),E=(A=(k=document.getElementById("st-country"))==null?void 0:k.value)==null?void 0:A.trim(),f=document.getElementById("st-club"),v=(f==null?void 0:f.selectedIndex)||0,$=f&&v>0?f.options[v].text:"",I=((S=(L=f==null?void 0:f.options[v])==null?void 0:L.getAttribute)==null?void 0:S.call(L,"data-logo"))||"";let y=null;r?y=r.startsWith("http")?r:`${rt}icons/${r}`:I?y=I:E&&(y=`https://flagsapi.com/${E.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`);const m=$||E||"—",c=document.getElementById("st-preview-card");c&&(c.innerHTML=Ve(p,y,`${m}<br>+10 ⭐`,{width:140}))};i(),["st-name","st-club","st-country","st-image"].forEach(p=>{var r,E;(r=document.getElementById(p))==null||r.addEventListener("input",i),(E=document.getElementById(p))==null||E.addEventListener("change",i)}),(s=document.getElementById("st-cancel"))==null||s.addEventListener("click",()=>l()),(o=document.getElementById("st-save"))==null||o.addEventListener("click",async()=>{const p=document.getElementById("st-name").value.trim(),r=document.getElementById("st-club").value||null,E=document.getElementById("st-country").value.trim().toUpperCase()||null,f=document.getElementById("st-image").value.trim()||null;if(!p){b("Le nom est obligatoire","error");return}const v={name:p,club_id:r,country_code:E,image_url:f},{error:$}=e?await _.from("stadium_definitions").update(v).eq("id",e.id):await _.from("stadium_definitions").insert(v);if($){b("Erreur : "+$.message,"error");return}b(e?"Stade modifié ✅":"Stade créé ✅","success"),l(),be(n,a)}),(g=document.getElementById("st-delete"))==null||g.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await _.from("stadium_definitions").delete().eq("id",e.id),b("Stade supprimé","success"),l(),be(n,a))})}const H=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],En=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}],G=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],Fe=["GK","DEF","MIL","ATT"];async function _n(e,t){await he(e,t)}async function he(e,t){var a;const{data:n}=await _.from("gc_definitions").select("*").order("sort_order").order("created_at");e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">⚡ Game Changers</h2>
        <button id="gc-add-btn" class="btn btn-primary">+ Nouvelle carte</button>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="gc-list">
        ${(n||[]).length?(n||[]).map(d=>wn(d)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucune carte Game Changer.</div>'}
      </div>
    </div>`,(a=document.getElementById("gc-add-btn"))==null||a.addEventListener("click",()=>Pe(null,e,t)),e.querySelectorAll("[data-edit-gc]").forEach(d=>{d.addEventListener("click",()=>{const l=(n||[]).find(b=>b.id===d.dataset.editGc);l&&Pe(l,e,t)})}),e.querySelectorAll(".btn-del-gc").forEach(d=>{d.addEventListener("click",async l=>{l.stopPropagation(),confirm("Supprimer cette carte Game Changer ?")&&(await _.from("gc_definitions").delete().eq("id",d.dataset.del),he(e,t))})})}function wn(e){const t=H.find(d=>d.value===e.gc_type)||H[0],n=e.image_url?`/icons/${e.image_url}`:null,a=me(e.name||"?",n,t.label.split(" ")[0],e.effect||"",{width:130});return`<div data-edit-gc="${e.id}" style="position:relative;cursor:pointer">
    ${a}
    <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
      <button class="btn-del-gc" data-del="${e.id}"
        style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0">✕</button>
    </div>
    ${e.is_active?"":'<div style="position:absolute;top:4px;right:4px;z-index:10;background:#555;color:#fff;font-size:9px;font-weight:700;padding:2px 6px;border-radius:8px">INACTIF</div>'}
  </div>`}function Pe(e,t,n){var g,p,r,E;const{openModal:a,closeModal:d,toast:l}=n,b=!e,u=e||{name:"",gc_type:"game_changer",color:"purple",effect:"",image_url:"",sort_order:0,is_active:!0,effect_type:"BOOST_STAT",effect_params:{}},h=(()=>{const f=u.effect_params||{},v=G.find($=>$.value===(u.effect_type||"BOOST_STAT"))||G[0];return`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${v.hasValue?`<div>
        <label>VALEUR (+N)</label>
        <input id="gc-p-value" type="number" min="1" max="5" value="${f.value||2}">
      </div>`:""}
      ${v.hasCount?`<div>
        <label>NB JOUEURS</label>
        <input id="gc-p-count" type="number" min="1" max="11" value="${f.count||1}">
      </div>`:""}
      ${v.hasTarget?`<div>
        <label>CIBLE</label>
        <select id="gc-p-target">
          <option value="home" ${(f.target||"home")==="home"?"selected":""}>Mon équipe</option>
          <option value="opponent" ${f.target==="opponent"?"selected":""}>Équipe adverse</option>
        </select>
      </div>`:""}
      ${v.hasRoles?`<div>
        <label>POSTES CIBLÉS</label>
        <div style="display:flex;gap:4px;flex-wrap:wrap">
          ${Fe.map($=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555">
            <input type="checkbox" class="gc-p-role" value="${$}" ${!f.roles||f.roles.includes($)?"checked":""}> ${$}
          </label>`).join("")}
        </div>
      </div>`:""}
    </div>`})(),i=`
    <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:#1a1a2e;border-radius:12px">
      <div id="gc-modal-preview">${me(u.name||"?",u.image_url?`/icons/${u.image_url}`:null,(H.find(f=>f.value===u.gc_type)||H[0]).label.split(" ")[0],u.effect||"",{width:150})}</div>
    </div>

    <div style="display:flex;flex-direction:column;gap:12px">
      <div>
        <label>NOM</label>
        <input id="gc-name" value="${u.name}">
      </div>
      <div>
        <label>EFFET / DESCRIPTION</label>
        <textarea id="gc-effect" rows="3">${u.effect||""}</textarea>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label>TYPE</label>
          <select id="gc-type">
            ${H.map(f=>`<option value="${f.value}" ${u.gc_type===f.value?"selected":""}>${f.label}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>COULEUR</label>
          <select id="gc-color">
            ${En.map(f=>`<option value="${f.value}" ${u.color===f.value?"selected":""}>${f.label}</option>`).join("")}
          </select>
        </div>
      </div>
      <div>
        <label>IMAGE (public/icons/gamechanger-*)</label>
        <div style="display:flex;gap:8px;align-items:center">
          <input id="gc-image-url" value="${u.image_url||""}" placeholder="gamechanger-nom.png" style="flex:1">
          <button id="btn-pick-gc-icon" class="btn btn-primary btn-sm" style="white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
        </div>
        <div id="gc-icon-picker" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label>ORDRE</label>
          <input id="gc-sort" type="number" value="${u.sort_order||0}">
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding-top:20px">
          <input type="checkbox" id="gc-active" ${u.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
          <label for="gc-active" style="cursor:pointer;font-weight:600;text-transform:none">Actif</label>
        </div>
      </div>
      <div style="border-top:1px solid #eee;padding-top:12px;margin-top:4px">
        <label style="color:#7a28b8">EFFET EN JEU</label>
        <div>
          <label>TYPE D'EFFET</label>
          <select id="gc-effect-type" style="margin-bottom:10px">
            ${G.map(f=>`<option value="${f.value}" ${(u.effect_type||"BOOST_STAT")===f.value?"selected":""}>${f.label}</option>`).join("")}
          </select>
        </div>
        <div id="gc-params-wrap">${h}</div>
      </div>
    </div>
  `;a(b?"Nouvelle carte Game Changer":`Modifier : ${u.name}`,i,`
    <button id="gc-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gc-save" class="btn btn-primary">💾 Enregistrer</button>
  `);const o=()=>{var c,x,w,B,k;const f=((c=document.getElementById("gc-name"))==null?void 0:c.value)||"?",v=((x=document.getElementById("gc-effect"))==null?void 0:x.value)||"",$=((w=document.getElementById("gc-type"))==null?void 0:w.value)||"game_changer",I=(k=(B=document.getElementById("gc-image-url"))==null?void 0:B.value)==null?void 0:k.trim(),y=H.find(A=>A.value===$)||H[0],m=document.getElementById("gc-modal-preview");m&&(m.innerHTML=me(f,I?`/icons/${I}`:null,y.label.split(" ")[0],v,{width:150}))};["gc-name","gc-effect","gc-type","gc-image-url"].forEach(f=>{var v,$;(v=document.getElementById(f))==null||v.addEventListener("input",o),($=document.getElementById(f))==null||$.addEventListener("change",o)}),(g=document.getElementById("gc-effect-type"))==null||g.addEventListener("change",()=>{const f=document.getElementById("gc-effect-type").value,v=G.find(I=>I.value===f)||G[0],$=document.getElementById("gc-params-wrap");$.innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${v.hasValue?'<div><label>VALEUR (+N)</label><input id="gc-p-value" type="number" min="1" max="5" value="2"></div>':""}
      ${v.hasCount?'<div><label>NB JOUEURS</label><input id="gc-p-count" type="number" min="1" max="11" value="1"></div>':""}
      ${v.hasTarget?'<div><label>CIBLE</label><select id="gc-p-target"><option value="home">Mon équipe</option><option value="opponent">Équipe adverse</option></select></div>':""}
      ${v.hasRoles?`<div><label>POSTES CIBLÉS</label><div style="display:flex;gap:4px;flex-wrap:wrap">${Fe.map(I=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555"><input type="checkbox" class="gc-p-role" value="${I}" checked> ${I}</label>`).join("")}</div></div>`:""}
    </div>`}),(p=document.getElementById("btn-pick-gc-icon"))==null||p.addEventListener("click",async()=>{var v;const f=document.getElementById("gc-icon-picker");if(f){if(f.style.display!=="none"){f.style.display="none";return}f.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',f.style.display="block";try{const I=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),y=Array.isArray(I)?I.filter(c=>c.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(c.name)):[];if(!y.length){f.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const m=((v=document.getElementById("gc-image-url"))==null?void 0:v.value)||"";f.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
        ${y.map(c=>`
        <div class="gc-icon-item" data-name="${c.name}"
          style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${c.name===m?"#7a28b8":"#ddd"};background:${c.name===m?"#f5f0ff":"#fff"}">
          <img src="/icons/${c.name}" style="height:44px;width:100%;object-fit:contain">
          <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
        </div>`).join("")}
      </div>`,f.querySelectorAll(".gc-icon-item").forEach(c=>{c.addEventListener("click",()=>{const x=document.getElementById("gc-image-url");x&&(x.value=c.dataset.name),f.style.display="none",o()})})}catch($){f.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${$.message}</div>`}}}),(r=document.getElementById("gc-cancel"))==null||r.addEventListener("click",()=>d()),(E=document.getElementById("gc-save"))==null||E.addEventListener("click",async()=>{var m,c,x,w,B,k,A,L,S,C,T,z,j,N;const f=G.find(F=>{var P;return F.value===(((P=document.getElementById("gc-effect-type"))==null?void 0:P.value)||"BOOST_STAT")})||G[0],v=f.hasRoles?[...document.querySelectorAll(".gc-p-role:checked")].map(F=>F.value):null,$={...f.hasValue?{value:Number((m=document.getElementById("gc-p-value"))==null?void 0:m.value)||2}:{},...f.hasCount?{count:Number((c=document.getElementById("gc-p-count"))==null?void 0:c.value)||1}:{},...f.hasTarget?{target:((x=document.getElementById("gc-p-target"))==null?void 0:x.value)||"home"}:{},...f.hasRoles?{roles:v!=null&&v.length?v:null}:{}},I={name:((B=(w=document.getElementById("gc-name"))==null?void 0:w.value)==null?void 0:B.trim())||"",effect:((A=(k=document.getElementById("gc-effect"))==null?void 0:k.value)==null?void 0:A.trim())||null,image_url:((S=(L=document.getElementById("gc-image-url"))==null?void 0:L.value)==null?void 0:S.trim())||null,gc_type:((C=document.getElementById("gc-type"))==null?void 0:C.value)||"game_changer",color:((T=document.getElementById("gc-color"))==null?void 0:T.value)||"purple",sort_order:Number((z=document.getElementById("gc-sort"))==null?void 0:z.value)||0,is_active:((j=document.getElementById("gc-active"))==null?void 0:j.checked)??!0,effect_type:((N=document.getElementById("gc-effect-type"))==null?void 0:N.value)||"BOOST_STAT",effect_params:$};if(!I.name){l("Le nom est obligatoire","error");return}const{error:y}=b?await _.from("gc_definitions").insert(I):await _.from("gc_definitions").update(I).eq("id",u.id);if(y){l(y.message,"error");return}l(b?"Carte créée ✅":"Carte modifiée ✅","success"),d(),he(t,n)})}async function In(e,{toast:t,openModal:n,closeModal:a}){await J(e,{toast:t,openModal:n,closeModal:a})}async function J(e,t){var y;const{toast:n,openModal:a,closeModal:d}=t,[{data:l,error:b},{data:u}]=await Promise.all([_.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),_.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1)]);if(b){e.innerHTML=`<p style="color:red">${b.message}</p>`;return}const h=l||[],i=h.find(m=>m.is_active),s=(u||[]).filter(m=>(m.placement_matches||0)>=1),o=s.filter(m=>(m.placement_matches||0)>=10),g=["bronze","silver","gold","platinum","diamond","master"],p={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},r={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},E={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},f={};g.forEach(m=>{f[m]=0}),o.forEach(m=>{const c=m.rank_tier||"bronze";f[c]!==void 0&&f[c]++});const v=o.length?Math.round(o.reduce((m,c)=>m+(c.mmr||1e3),0)/o.length):0;function $(m){return m?new Date(m).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function I(m){const c=new Date;return m.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(m.end_at)<c?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${i?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${i.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${s.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Joueurs ranked</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${o.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Classés (10+ matchs)</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${v}</div>
            <div style="font-size:11px;color:var(--gray-600)">MMR moyen</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(i.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${o.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${g.map(m=>{const c=f[m],x=o.length>0?Math.round(c/o.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${E[m]} ${p[m]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${x}%;background:${r[m]};border-radius:4px;transition:width 0.5s"></div>
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
              ${h.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':h.map(m=>{const c=Math.round((new Date(m.end_at)-new Date(m.start_at))/864e5),x=new Date(m.end_at)<new Date&&!m.is_active;return`
                    <tr>
                      <td><b>${m.name}</b></td>
                      <td style="font-size:12px">${$(m.start_at)}</td>
                      <td style="font-size:12px">${$(m.end_at)}</td>
                      <td style="font-size:12px">${c} jours</td>
                      <td>${I(m)}</td>
                      <td style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn btn-ghost btn-sm" data-edit="${m.id}">✏️ Modifier</button>
                        ${m.is_active?`<button class="btn btn-ghost btn-sm" data-deactivate="${m.id}" style="color:#e67e22">⏹ Désactiver</button>`:`<button class="btn btn-primary btn-sm" data-activate="${m.id}">▶ Activer</button>`}
                        ${x?`<button class="btn btn-danger btn-sm" data-delete="${m.id}">🗑</button>`:""}
                      </td>
                    </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>`,(y=document.getElementById("create-season-btn"))==null||y.addEventListener("click",()=>{Oe(null,{toast:n,openModal:a,closeModal:d,reload:()=>J(e,t)})}),e.querySelectorAll("[data-edit]").forEach(m=>{const c=h.find(x=>x.id==m.dataset.edit);m.addEventListener("click",()=>{Oe(c,{toast:n,openModal:a,closeModal:d,reload:()=>J(e,t)})})}),e.querySelectorAll("[data-activate]").forEach(m=>{m.addEventListener("click",async()=>{const c=parseInt(m.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:x}=await _.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(x){n(x.message,"error");return}const{error:w}=await _.from("ranked_seasons").update({is_active:!0}).eq("id",c);if(w){n(w.message,"error");return}await _.from("users").update({current_season_id:c}).gt("placement_matches",0),n("Saison activée ✅","success"),J(e,t)})}),e.querySelectorAll("[data-deactivate]").forEach(m=>{m.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:c}=await _.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(m.dataset.deactivate));if(c){n(c.message,"error");return}n("Saison désactivée","success"),J(e,t)})}),e.querySelectorAll("[data-delete]").forEach(m=>{m.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:c}=await _.from("ranked_seasons").delete().eq("id",parseInt(m.dataset.delete));if(c){n(c.message,"error");return}n("Saison supprimée","success"),J(e,t)})})}function Oe(e,{toast:t,openModal:n,closeModal:a,reload:d}){const l=!!e,b=new Date().toISOString().slice(0,16),u=new Date(Date.now()+90*864e5).toISOString().slice(0,16),h=e?new Date(e.start_at).toISOString().slice(0,16):b,i=e?new Date(e.end_at).toISOString().slice(0,16):u,s=(e==null?void 0:e.name)||"";n(l?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group">
        <label>Nom de la saison *</label>
        <input id="season-name" type="text" value="${s}" placeholder="ex: Saison 2 — Été 2026" style="width:100%">
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
      <button class="btn btn-primary" id="season-save-btn">${l?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function o(){var f,v;const g=(f=document.getElementById("season-start"))==null?void 0:f.value,p=(v=document.getElementById("season-end"))==null?void 0:v.value,r=document.getElementById("season-duration");if(!g||!p||!r)return;const E=Math.round((new Date(p)-new Date(g))/864e5);r.textContent=E>0?`Durée : ${E} jour${E>1?"s":""}`:"⚠️ La fin doit être après le début",r.style.color=E>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var g,p,r;(g=document.getElementById("season-start"))==null||g.addEventListener("input",o),(p=document.getElementById("season-end"))==null||p.addEventListener("input",o),o(),(r=document.getElementById("season-save-btn"))==null||r.addEventListener("click",async()=>{var c,x,w;const E=(c=document.getElementById("season-name"))==null?void 0:c.value.trim(),f=(x=document.getElementById("season-start"))==null?void 0:x.value,v=(w=document.getElementById("season-end"))==null?void 0:w.value,$=document.getElementById("season-error");if(!E){$.textContent="Le nom est requis.";return}if(!f){$.textContent="La date de début est requise.";return}if(!v){$.textContent="La date de fin est requise.";return}if(new Date(v)<=new Date(f)){$.textContent="La date de fin doit être après le début.";return}const I=document.getElementById("season-save-btn");I.disabled=!0,I.textContent="Enregistrement…";const y={name:E,start_at:new Date(f).toISOString(),end_at:new Date(v).toISOString()};let m;if(l?{error:m}=await _.from("ranked_seasons").update(y).eq("id",e.id):{error:m}=await _.from("ranked_seasons").insert({...y,is_active:!1}),m){$.textContent=m.message,I.disabled=!1,I.textContent=l?"💾 Enregistrer":"✅ Créer la saison";return}t(l?"Saison modifiée ✅":"Saison créée ✅","success"),a(),d()})},50)}wt(Je);function $n(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function kn(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function ye(){document.getElementById("modal-overlay").classList.add("hidden")}const Ue={dashboard:{title:"Dashboard",fn:It},players:{title:"Joueurs & Cartes",fn:At},clubs:{title:"Clubs",fn:Gt},"card-builder":{title:"Card Builder",fn:Vt},users:{title:"Managers",fn:nt},market:{title:"Marché des transferts",fn:it},"import-export":{title:"Import / Export CSV",fn:en},formations:{title:"Formations & Liens",fn:nn},"boosters-config":{title:"Boosters",fn:ln},"sell-price":{title:"Prix vente directe",fn:sn},journal:{title:"Journal",fn:un},tutorial:{title:"Tutoriel",fn:gn},stadiums:{title:"Stades",fn:xn},"gc-cards":{title:"Game Changers",fn:_n},"ranked-seasons":{title:"Saisons Ranked",fn:In}};async function de(e){document.querySelectorAll(".admin-sidebar nav a").forEach(d=>{d.classList.toggle("active",d.dataset.page===e)});const t=document.getElementById("mobile-page-select");t&&(t.value=e);const n=Ue[e]||Ue.dashboard;document.getElementById("page-title").textContent=n.title;const a=document.getElementById("page-content");a.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(a,{toast:$n,openModal:kn,closeModal:ye,navigate:de})}catch(d){a.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${d.message}</div>`,console.error(d)}}async function Bn(){var t;const{data:{session:e}}=await _.auth.getSession();e&&await Ge(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),a=document.getElementById("auth-password").value,d=document.getElementById("auth-error");if(d.textContent="",!n||!a){d.textContent="Remplissez tous les champs.";return}const{data:l,error:b}=await _.auth.signInWithPassword({email:n,password:a});if(b){d.textContent=b.message;return}await Ge(l.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await _.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",ye),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&ye()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",a=>{a.preventDefault(),de(n.dataset.page)})}),(t=document.getElementById("mobile-page-select"))==null||t.addEventListener("change",n=>{de(n.target.value)})}async function Ge(e){const{data:t,error:n}=await _.from("users").select("*").eq("id",e.id).single(),a=document.getElementById("auth-error");if(n||!t){a.textContent="Profil introuvable.";return}if(!t.is_admin){a.textContent="Accès refusé. Vous n'êtes pas administrateur.",await _.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,de("dashboard")}Bn();
