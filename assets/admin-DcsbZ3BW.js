import{s as _,r as ve,a as qe,A as st,l as dt,g as ct,K as ke,D as R,b as ut,S as pt,c as D,H as mt,R as gt,e as de,d as Ke,f as ft,h as bt,E as yt,i as vt,N as xt,M as ht,B as Et,j as _t,F as ue,k as Be,m as wt,n as Je,o as me,p as It}from"./special-cards-hvDhyFrj.js";async function $t(e){var h;const[{count:t},{count:n},{count:i},{count:r},{count:a},{data:g}]=await Promise.all([_.from("players").select("*",{count:"exact",head:!0}),_.from("clubs").select("*",{count:"exact",head:!0}),_.from("users").select("*",{count:"exact",head:!0}),_.from("stadium_definitions").select("*",{count:"exact",head:!0}),_.from("users").select("*",{count:"exact",head:!0}).gt("last_seen_at",new Date(Date.now()-18e4).toISOString()),_.rpc("get_signup_password")]),m=g||"";e.innerHTML=`
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
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${r??"–"}</div>
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
        <input id="signup-pwd-input" type="text" value="${m.replace(/"/g,"&quot;")}" style="flex:1">
        <button id="signup-pwd-save" class="btn btn-primary">💾 Enregistrer</button>
      </div>
      <div id="signup-pwd-status" style="font-size:12px;margin-top:8px;min-height:16px"></div>
    </div>
  `,window.adminNav=o=>{var u;(u=document.querySelector(`[data-page="${o}"]`))==null||u.click()},(h=document.getElementById("signup-pwd-save"))==null||h.addEventListener("click",async()=>{const o=document.getElementById("signup-pwd-input").value.trim(),u=document.getElementById("signup-pwd-status");if(!o){u.textContent="Le code ne peut pas être vide.",u.style.color="#ff6b6b";return}const l=document.getElementById("signup-pwd-save");l.disabled=!0,l.textContent="⏳...";const{error:f}=await _.rpc("set_signup_password",{new_password:o});if(l.disabled=!1,l.textContent="💾 Enregistrer",f){u.textContent=f.message,u.style.color="#ff6b6b";return}u.textContent="✅ Code mis à jour.",u.style.color="#2ecc71"})}const Ve={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},kt={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Bt(){const e={};for(const t of st)e[t]=await dt(t);return e}async function Lt(e,t){const{toast:n}=t;if(!confirm(`Réattribuer une nouvelle photo à tous les joueurs ayant encore l'ancien format de chemin (public/faces/...) ?

Cette action est irréversible.`))return;const i=document.getElementById("fix-old-faces-btn");i&&(i.disabled=!0,i.textContent="⏳ En cours...");try{const{data:r,error:a}=await _.from("players").select("id, country_code, face").like("face","public/faces/%");if(a){n(a.message,"error");return}if(!(r!=null&&r.length)){n("Aucun joueur avec l'ancien format — rien à faire ✅","success");return}const{data:g}=await _.from("players").select("face").not("face","is",null),m=new Set((g||[]).map(u=>u.face).filter(u=>u&&!u.startsWith("public/faces/")));let h=0,o=0;for(const u of r){const l=await qe(u.country_code,m);if(!l){o++;continue}const{error:f}=await _.from("players").update({face:l}).eq("id",u.id);if(f){o++;continue}m.add(l),h++}n(`${h} photo(s) réattribuée(s)${o?`, ${o} échec(s)`:""} ✅`,o?"error":"success")}finally{i&&(i.disabled=!1,i.textContent="🖼️ Réattribuer anciennes photos")}}async function At(e,t){await le(e,t)}async function le(e,t,n=null){var o,u,l,f,p;const{toast:i}=t;n||(n={search:((o=document.getElementById("search-players"))==null?void 0:o.value)||"",job:((u=document.getElementById("filter-job"))==null?void 0:u.value)||"",rarity:((l=document.getElementById("filter-rarity"))==null?void 0:l.value)||"",club:((f=document.getElementById("filter-club"))==null?void 0:f.value)||"",country:((p=document.getElementById("filter-country"))==null?void 0:p.value)||""});const[{data:r,error:a},{data:g}]=await Promise.all([_.from("players").select("*, clubs(id,encoded_name,logo_url)"),_.from("clubs").select("id,encoded_name").order("encoded_name")]);if(a){e.innerHTML=`<p style="color:red">${a.message}</p>`;return}const m={GK:0,DEF:1,MIL:2,ATT:3},h=(r||[]).sort((s,E)=>{const b=(m[s.job]??4)-(m[E.job]??4);return b!==0?b:(s.surname_real||"").localeCompare(E.surname_real||"")});St(e,h,g||[],t,n)}function St(e,t,n,i,r=null){var u,l;const{toast:a}=i;if(e.innerHTML=`
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
          ${Object.entries(Ve).map(([f,p])=>`<option value="${f}">${p}</option>`).join("")}
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
    </div>`,r){const f=r,p=s=>document.getElementById(s);f.search&&p("search-players")&&(p("search-players").value=f.search),f.job&&p("filter-job")&&(p("filter-job").value=f.job),f.rarity&&p("filter-rarity")&&(p("filter-rarity").value=f.rarity),f.club&&p("filter-club")&&(p("filter-club").value=f.club),f.country&&p("filter-country")&&(p("filter-country").value=f.country)}if(r){const f=r,p=s=>document.getElementById(s);f.search&&p("search-players")&&(p("search-players").value=f.search),f.job&&p("filter-job")&&(p("filter-job").value=f.job),f.rarity&&p("filter-rarity")&&(p("filter-rarity").value=f.rarity),f.club&&p("filter-club")&&(p("filter-club").value=f.club),f.country&&p("filter-country")&&(p("filter-country").value=f.country)}function g(){const f=document.getElementById("search-players").value.toLowerCase(),p=document.getElementById("filter-job").value,s=document.getElementById("filter-rarity").value,E=document.getElementById("filter-club").value,b=document.getElementById("filter-country").value;return t.filter(v=>(!f||`${v.firstname} ${v.surname_real}`.toLowerCase().includes(f))&&(!p||v.job===p)&&(!s||v.rarity===s)&&(!E||v.club_id===E)&&(!b||v.country_code===b))}const m=new Set;function h(){const f=document.getElementById("bulk-bar"),p=document.getElementById("bulk-count");f&&(f.style.display=m.size>0?"flex":"none",p&&(p.textContent=`${m.size} joueur(s) sélectionné(s)`))}function o(){const f=g();document.getElementById("count-label").textContent=`${f.length} joueur(s)`;const p=document.getElementById("players-list");if(!f.length){p.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}p.innerHTML=f.map(s=>{const E={...s,clubs:s.clubs,face:s.face||null},b=ve(E,{width:120});return`<div style="position:relative;cursor:pointer" data-edit="${s.id}">
        ${b}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${s.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),p.querySelectorAll("[data-edit]").forEach(s=>{s.addEventListener("click",()=>{const E=t.find(b=>b.id===s.dataset.edit);E&&Le(E,n,e,i)})}),p.querySelectorAll(".btn-del-player").forEach(s=>{s.addEventListener("click",async E=>{if(E.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:b}=await _.from("players").delete().eq("id",s.dataset.del);b?a(b.message,"error"):(a("Joueur supprimé ✅","success"),le(e,i))})})}o(),document.getElementById("search-players").addEventListener("input",o),document.getElementById("filter-job").addEventListener("change",o),document.getElementById("filter-rarity").addEventListener("change",o),document.getElementById("filter-club").addEventListener("change",o),document.getElementById("filter-country").addEventListener("change",o),(u=document.getElementById("bulk-cancel-btn"))==null||u.addEventListener("click",()=>{m.clear(),h(),o()}),(l=document.getElementById("bulk-delete-btn"))==null||l.addEventListener("click",async()=>{var E,b,v,$,I;if(!m.size||!confirm(`Supprimer ${m.size} joueur(s) ?`))return;const f=[...m],{error:p}=await _.from("players").delete().in("id",f);if(p){a(p.message,"error");return}a(`${f.length} joueur(s) supprimé(s) ✅`,"success"),m.clear();const s={search:((E=document.getElementById("search-players"))==null?void 0:E.value)||"",job:((b=document.getElementById("filter-job"))==null?void 0:b.value)||"",rarity:((v=document.getElementById("filter-rarity"))==null?void 0:v.value)||"",club:(($=document.getElementById("filter-club"))==null?void 0:$.value)||"",country:((I=document.getElementById("filter-country"))==null?void 0:I.value)||""};le(e,i,s)}),document.getElementById("add-player-btn").addEventListener("click",()=>Le(null,n,e,i)),document.getElementById("fix-old-faces-btn").addEventListener("click",()=>Lt(e,i))}async function Le(e,t,n,i){const{toast:r,openModal:a,closeModal:g}=i,m=!!e,h=await Bt(),{data:o}=await _.from("players").select("face").not("face","is",null),u=new Set((o||[]).map(s=>s.face).filter(Boolean));e!=null&&e.face&&u.delete(e.face);const l='<option value="">— Club —</option>'+t.map(s=>`<option value="${s.id}" ${(e==null?void 0:e.club_id)===s.id?"selected":""}>${s.encoded_name}</option>`).join(""),f=e!=null&&e.face?e.face.split("/")[0]:"",p=Object.keys(h).map(s=>`<option value="${s}" ${f===s?"selected":""}>${s}</option>`).join("");a(m?`✏️ ${e.firstname} ${e.surname_real}`:"➕ Nouveau joueur",`<div style="display:flex;gap:20px;align-items:flex-start">

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
              ${["normal","pepite","papyte","legende"].map(s=>`<option value="${s}" ${(e==null?void 0:e.rarity)===s?"selected":""}>${Ve[s]}</option>`).join("")}
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
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([s,E,b])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${kt[s]};font-weight:700">${s}</label>
                <input id="${E}" type="number" min="0" max="20" value="${(e==null?void 0:e[b])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
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
          ${m?"💾 Enregistrer":"✅ Créer le joueur"}
        </button>
        </div>
      </div>
    </div>`),setTimeout(()=>{var I,x,d;let s=(e==null?void 0:e.face)||null;function E(){var K,U,Y,W,Z,X,Q,_e,we,Ie,$e;const c=document.getElementById("card-preview");if(!c)return;const y=((K=document.getElementById("pm-fn"))==null?void 0:K.value)||"",w=(((U=document.getElementById("pm-real"))==null?void 0:U.value)||"").toUpperCase(),B=((Y=document.getElementById("pm-job"))==null?void 0:Y.value)||"ATT",k=((W=document.getElementById("pm-job2"))==null?void 0:W.value)||null,A=((Z=document.getElementById("pm-rarity"))==null?void 0:Z.value)||"normal",L=((X=document.getElementById("pm-country"))==null?void 0:X.value)||"FR",S=((Q=document.getElementById("pm-club"))==null?void 0:Q.value)||null,C=document.getElementById("pm-club"),T=C==null?void 0:C.options[C.selectedIndex];(T==null?void 0:T.text)!=="— Club —"&&(T==null||T.text);const z=parseInt((_e=document.getElementById("pm-g"))==null?void 0:_e.value)||0,j=parseInt((we=document.getElementById("pm-d"))==null?void 0:we.value)||0,N=parseInt((Ie=document.getElementById("pm-m"))==null?void 0:Ie.value)||0,P=parseInt(($e=document.getElementById("pm-a"))==null?void 0:$e.value)||0,F=t.find(lt=>lt.id===S),te={firstname:y||"Prénom",surname_real:w||"NOM",job:B,job2:k||null,rarity:A,country_code:L,club_id:S,note_g:z,note_d:j,note_m:N,note_a:P,face:s||null,clubs:F?{encoded_name:F.encoded_name,logo_url:F.logo_url}:null};c.innerHTML=ve(te,{width:160});const M=document.getElementById("pm-minmax");M&&(M.style.display=["pepite","papyte"].includes(A)?"grid":"none")}function b(c){const y=document.getElementById("faces-grid"),w=document.getElementById("pm-face");if(!y||!w)return;const B=h[c]||[];if(console.log("[players] loadFacesGrid folder=",c,"files=",B.length,B.slice(0,5)),!B.length){w.innerHTML='<option value="">— Aucun visage disponible —</option>',y.innerHTML=`<p style="font-size:11px;color:#888;font-style:italic">Aucune image dans le dossier "${c}" du bucket Supabase.</p>`;return}const k=B.filter(A=>{const L=c+"/"+A;return L===s||!u.has(L)});w.innerHTML='<option value="">— Choisir un visage —</option>'+k.map(A=>{const L=c+"/"+A;return`<option value="${L}" ${s===L?"selected":""}>${A}</option>`}).join(""),y.innerHTML=k.map(A=>{const L=c+"/"+A,S=s===L,C=ct({face:L});return`<div data-face="${L}" style="cursor:pointer;border:2px solid ${S?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${C}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),y.querySelectorAll("[data-face]").forEach(A=>{A.addEventListener("click",()=>{s=A.dataset.face;const L=document.getElementById("pm-face");L&&(L.value=s),y.querySelectorAll("[data-face]").forEach(S=>{S.style.border=`2px solid ${S.dataset.face===s?"#4fc3f7":"transparent"}`}),E()})})}const v=e!=null&&e.face?e.face.split("/")[0]:"";v&&h[v]&&(document.getElementById("pm-folder").value=v,b(v)),(I=document.getElementById("pm-folder"))==null||I.addEventListener("change",c=>{b(c.target.value)}),(x=document.getElementById("pm-face"))==null||x.addEventListener("change",c=>{s=c.target.value||null,E()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach(c=>{var y,w;(y=document.getElementById(c))==null||y.addEventListener("input",E),(w=document.getElementById(c))==null||w.addEventListener("change",E)}),(d=document.getElementById("pm-save"))==null||d.addEventListener("click",()=>Tt(e,m,s,n,i)),E()},50)}function Ct(e){const t=n=>{var i;return(i=document.getElementById(n))==null?void 0:i.value};return{firstname:(t("pm-fn")||"").trim(),surname_real:(t("pm-real")||"").trim()||"JOUEUR",country_code:t("pm-country")||"FR",club_id:t("pm-club")||null,job:t("pm-job")||"ATT",job2:t("pm-job2")||null,rarity:t("pm-rarity")||"normal",note_g:parseInt(t("pm-g"))||0,note_d:parseInt(t("pm-d"))||0,note_m:parseInt(t("pm-m"))||0,note_a:parseInt(t("pm-a"))||0,note_min:parseInt(t("pm-nmin"))||null,note_max:parseInt(t("pm-nmax"))||null,sell_price:parseInt(t("pm-price"))||0,face:e||null,ethnie:t("pm-folder")||null,is_active:!0}}async function Tt(e,t,n,i,r){var p,s,E,b,v;const{toast:a,closeModal:g}=r,m=document.getElementById("pm-error"),h=document.getElementById("pm-save"),o=Ct(n);if(!o.firstname){m.textContent="Le prénom est requis.";return}if(!o.surname_real){m.textContent="Le nom est requis.";return}h.disabled=!0,h.textContent="Enregistrement…";const u=o,{error:l}=t?await _.from("players").update({...u,updated_at:new Date().toISOString()}).eq("id",e.id):await _.from("players").insert(u);if(l){m.textContent=l.message,h.disabled=!1,h.textContent=t?"💾 Enregistrer":"✅ Créer le joueur";return}a(t?"Joueur modifié ✅":"Joueur créé ✅","success"),g();const f={search:((p=document.getElementById("search-players"))==null?void 0:p.value)||"",job:((s=document.getElementById("filter-job"))==null?void 0:s.value)||"",rarity:((E=document.getElementById("filter-rarity"))==null?void 0:E.value)||"",club:((b=document.getElementById("filter-club"))==null?void 0:b.value)||"",country:((v=document.getElementById("filter-country"))==null?void 0:v.value)||""};le(i,r,f)}const Mt={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},zt=["rase","court","milong","long"];function Rt(e){const t=We(e);if(t==="noir")return"noir";if(t==="typ")return Math.random()<.9?"noir":"marron";if(t==="metisse")return Math.random()<.6?"noir":"marron";const n=Math.random();return n<.35?"blond":n<.75?"marron":"noir"}function Dt(e){return Math.random()<.05?"chauve":Rt(e)}const Ye=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function We(e){return Mt[e]||"blanc"}function jt(e){return Dt(e)}function ge(e,t){return Math.floor(Math.random()*(t-e+1))+e}function ie(e){return e[Math.floor(Math.random()*e.length)]}function Nt(e){const t=Ye.filter(n=>n!==e);return ie(t)}function Ae(e){const t=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","GR","RO","BG","UA","RU"],n=["MA","DZ","TN","EG","LY"],i=["NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","TZ","UG","ET"],r=["JP","KR","CN","VN","TH","ID","PH","IN","PK","BD","SA","AE","IR"];return t.includes(e)||["AR","UY","CL","PE","EC","CO","MX","BR"].includes(e)?"Europeans":n.includes(e)?"North Africans":i.includes(e)?"Africans":r.includes(e)?"Asians":"Europeans"}const Pt=[{min:1,max:4,pct:55},{min:5,max:10,pct:20},{min:11,max:14,pct:10},{min:15,max:17,pct:10},{min:18,max:20,pct:5}];function Ft(){const e=Math.random()*100;let t=0;for(const n of Pt)if(t+=n.pct,e<t)return ge(n.min,n.max);return ge(1,4)}function Ut(){const e=Array.from({length:20},(t,n)=>n);return e.sort(()=>Math.random()-.5),new Set(e.slice(0,10))}let oe=null;function Ot(e,t){return e&&(oe||(oe=Ut()),oe.has(t))?ge(15,20):Ft()}function Gt(e,t,n=new Set,i=!1){const r={FR:{first:["Lucas","Tom","Hugo","Théo","Antoine","Kylian","Rayan","Axel","Paul","Enzo","Léo","Mathis","Nathan","Alexis","Ethan","Maxime","Julien","Baptiste","Nicolas","Pierre","Clément","Adrien","Valentin","Dylan","Loïc","Quentin","Florian","Kevin","Corentin","Raphaël"],last:["Martin","Bernard","Petit","Dupont","Moreau","Laurent","Robert","Michel","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard","Bonnet","Rousseau","Fontaine","Chevalier","Blanc","Garnier","Boyer","Gauthier","Garcia","Perrin","Robin","Clément","Morin","Nicolas","Henry","Lemaire","Noël","Dufour","Meunier","Brun","Blanchard","Giraud","Joly","Rivière","Brunet"]},ES:{first:["Carlos","Miguel","Javier","Alejandro","Sergio","David","Diego","Pablo","Álvaro","Marcos","Adrián","Rubén","Iker","Raúl","Fernando","Roberto","Víctor","Iván","Gonzalo","Antonio","Manuel","Jesús","Josué","Rodrigo","Cristian","Héctor","Óscar","Mario","Daniel","Jorge"],last:["García","Rodríguez","Martínez","López","Sánchez","González","Pérez","Hernández","Jiménez","Díaz","Torres","Ramírez","Flores","Rivera","Gómez","Morales","Álvarez","Romero","Herrera","Medina","Aguilar","Vargas","Guzmán","Muñoz","Salazar","Soto","Contreras","Rojas","Ramos","Ortiz"]},PT:{first:["João","Pedro","Diogo","Rúben","Bruno","Tiago","André","Ricardo","Luís","Gonçalo","Nuno","Mário","Fábio","Rui","Miguel","Sérgio","Hugo","Filipe","Paulo","Vítor"],last:["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Carvalho","Gomes","Ribeiro","Araújo","Barbosa","Cardoso","Correia","Teixeira","Machado","Vieira","Monteiro","Cunha","Pinto","Melo","Barros","Freitas","Fonseca","Andrade","Castro","Neves","Figueiredo","Duarte"]},BR:{first:["Gabriel","Lucas","Mateus","Gustavo","Felipe","Rodrigo","Thiago","Rafael","Bruno","Diego","Leonardo","Eduardo","Victor","Pedro","Carlos","Alexandre","André","Paulo","Danilo","Marcelo"],last:["Silva","Santos","Oliveira","Souza","Lima","Ferreira","Costa","Nascimento","Alves","Pereira","Rodrigues","Almeida","Nunes","Melo","Barbosa","Rocha","Brito","Castro","Carvalho","Gomes","Lopes","Ramos","Mendes","Cavalcanti","Batista","Azevedo","Campos","Freitas","Reis","Andrade"]},AR:{first:["Lionel","Sergio","Rodrigo","Nicolás","Ezequiel","Gonzalo","Federico","Mauro","Pablo","Diego","Lucas","Matías","Alejandro","Maximiliano","Emiliano","Marcos","Lautaro","Ángel","Leandro","Julián"],last:["González","Rodríguez","Martínez","García","López","Pérez","Sánchez","Romero","Torres","Flores","Díaz","Gómez","Alvarez","Ruiz","Castro","Herrera","Cabrera","Medina","Ferreyra","Suárez"]},IT:{first:["Marco","Luca","Alessandro","Matteo","Davide","Andrea","Francesco","Federico","Lorenzo","Riccardo","Stefano","Simone","Roberto","Nicola","Giovanni","Antonio","Emanuele","Daniele","Alberto","Giorgio"],last:["Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Ricci","Marino","Greco","Bruno","Gallo","Conti","De Luca","Mancini","Giordano","Rizzo","Lombardi","Moretti","Fontana","Rinaldi"]},DE:{first:["Lukas","Max","Jonas","Florian","Tobias","Stefan","Markus","Sebastian","Niklas","Leon","Tim","Felix","Alexander","Philipp","Christian","Thomas","Michael","Jan","Moritz","Fabian"],last:["Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Wolf","Schröder","Neumann","Schwarz","Zimmermann","Braun","Krüger","Hofmann","Wagner","Becker","Koch","Lehmann","Kaiser"]},GB:{first:["James","Harry","Oliver","Jack","George","Charlie","William","Thomas","Alfie","Edward","Ryan","Liam","Noah","Ethan","Kyle","Jordan","Callum","Aaron","Declan","Connor"],last:["Smith","Jones","Williams","Brown","Taylor","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Walker","Wright","Robinson","White","Thompson","Hughes","Edwards","Green","Hall"]},MA:{first:["Yassine","Karim","Mehdi","Amine","Hamza","Bilal","Soufiane","Rachid","Omar","Mohammed","Zakaria","Ilyas","Ayoub","Saad","Khalid","Adil","Tarik","Hicham","Reda","Nabil"],last:["Benali","Amrani","Bouazza","Cherif","Haddad","Meziane","Belkacem","Rahmani","Saidi","Zidane","Belhadj","Tazi","Idrissi","Alaoui","Bennani","Fassi","Lahlou","Naciri","Tahiri","Zniber"]},DZ:{first:["Yacine","Riyad","Sofiane","Haris","Adem","Islam","Bilal","Omar","Nassim","Mehdi","Ryad","Zinedine","Youssef","Farid","Karim","Mourad","Walid","Anes","Ferhat","Djamel"],last:["Amrouche","Boudiaf","Cherki","Guessab","Hamdi","Jaber","Lakhal","Mahjoub","Rezki","Sahnoun","Talbi","Zerrouki","Achour","Bakri","Chaouch","Djaballah","Ferhat","Gacem","Khaldi","Larbi"]},SN:{first:["Sadio","Ismaïla","Cheikhou","Gana","Famara","Mbaye","Pape","Aliou","Moussa","Sidy","Idrissa","Lamine","Bamba","Fallou","Abdou","Diallo","Mamadou","Souleymane","Oumar","Cheikh"],last:["Diallo","Traoré","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Ndiaye","Sow","Cissé","Fofana","Keita","Sylla","Kane","Diarra","Sanogo","Baldé","Kouyaté"]},CI:{first:["Didier","Wilfried","Serge","Jonathan","Franck","Maxwel","Salomon","Gervinho","Nicolas","Maxime","Ismael","Romaric","Abdul","Cheick","Arouna","Kolo","Yaya","Geoffroy","Siaka","Adama"],last:["Drogba","Zaha","Gnagnon","Koné","Touré","Bamba","Diomandé","Konaté","Coulibaly","Fofana","Traoré","Doumbia","Sanogo","Diabaté","Kalou","Bakayoko","Gradel","Seri","Aurier","Haller"]},CM:{first:["Samuel","Alex","Karl","Fabrice","Cédric","Nicolas","Georges","André","Joël","Roger","François","Jean","Patrick","Thierry","Eric","Benjamin","Aristide","Clinton","Clinton","Stéphane"],last:["Eto'o","Song","Choupo-Moting","Aboubakar","Bassogog","Kunde","Toko","Nkoudou","Ngadeu","Oyongo","Fai","Zambo","Mokoena","Ekambi","Tchamba","Mbida","Biya","Kameni","Meyong","Webo"]},NG:{first:["Kelechi","Ahmed","Victor","John","Emmanuel","Samuel","Moses","Ola","Chukwuemeka","Odion","Sunday","Chidi","Nnamdi","Chisom","Tunde","Emeka","Obinna","Uchenna","Ifeanyi","Segun"],last:["Osimhen","Iheanacho","Musa","Onyekuru","Iwobi","Ndidi","Nwankwo","Obi","Mikel","Martins","Okocha","Yekini","Amunike","Babangida","Fash","Lawal","Onuoha","Taiwo","Ayodele","Ameobi"]},JP:{first:["Ryota","Kenji","Hiroshi","Takumi","Yuto","Daichi","Shinji","Makoto","Koji","Naoki","Yuya","Shoya","Ryo","Shu","Atsuto","Masato","Hotaru","Genki","Ko","Ritsu"],last:["Nakamura","Tanaka","Suzuki","Sato","Yamamoto","Watanabe","Ito","Yamada","Saito","Matsumoto","Inoue","Kimura","Hayashi","Shimizu","Yamazaki","Mori","Abe","Ikeda","Kato","Honda"]},KR:{first:["Heung","Son","Ji","Sung","Jae","Young","Kang","Hyun","Woo","Tae","Seung","Min","Jun","Dong","Chang","Sang","Yo","Hee","Jin","Bum"],last:["Kim","Park","Lee","Choi","Jung","Kang","Cho","Yoon","Lim","Oh","Han","Seo","Kwon","Hwang","Ahn","Yang","Shin","Yoo","Jang","Song"]},MX:{first:["Carlos","Hirving","Andrés","Javier","Miguel","Raúl","Héctor","Diego","Jorge","Luis","Rodolfo","Erick","Jonathan","Néstor","Tecatito","Chicharito","Oswaldo","Oribe","Uriel","Giovanni"],last:["Hernández","Lozano","Guardado","Vela","Morales","Jiménez","Reyes","Corona","Herrera","Rodríguez","Ochoa","Chicharito","Flores","Domínguez","Araujo","Álvarez","Pineda","Sánchez","Antuna","Meza"]},_DEFAULT_EUROPE:{first:["Stefan","Ivan","Luca","Marco","Andrei","Cristian","Bogdan","Mircea","Adrian","Florin","Dušan","Aleksandar","Nikola","Nemanja","Marko","Filip","Milan","Branislav","Radomir","Dejan"],last:["Popescu","Ionescu","Stan","Marin","Stoica","Popa","Radu","Constantin","Barbu","Dobre","Petrović","Marković","Nikolić","Jovanović","Popović","Stanković","Đorđević","Lukić","Simić","Ilić"]},_DEFAULT_AFRIQUE:{first:["Mamadou","Ibrahima","Moussa","Seydou","Boubacar","Oumar","Modibo","Adama","Bakary","Abdoulaye","Lamine","Ousmane","Sekou","Demba","Tidiane","Amadou","Issiaka","Siaka","Fode","Samba"],last:["Diallo","Traoré","Coulibaly","Koné","Doumbia","Kouyaté","Bah","Konaté","Touré","Camara","Sylla","Keita","Diakité","Sangaré","Sanou","Sidibé","Bathily","Niakaté","Dioumassi","Sissoko"]},_DEFAULT_ASIE:{first:["Wei","Ming","Jae","Van","Duc","Sorn","Ali","Hassan","Reza","Arman","Yusuf","Tariq","Faris","Khalid","Saad","Rashid","Nasser","Walid","Ziad","Adel"],last:["Zhang","Wang","Liu","Chen","Yang","Huang","Zhou","Wu","Xu","Sun","Al-Rashidi","Al-Dosari","Al-Harthi","Al-Balushi","Al-Farsi","Al-Shamsi","Al-Neyadi","Al-Breiki","Al-Hammadi","Al-Mansouri"]},_DEFAULT_AMERIQUE:{first:["James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Marcus","Jordan","Andre","Devonte","Malik","Tyrone","Jamal","Darius","DeShawn","Brandon","Cody"],last:["Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Taylor","Anderson","Jackson","White","Harris","Clark","Lewis","Walker","Hall","Allen","Young","King"]}},a={FR:"FR",BE:"FR",CH:"FR",MC:"FR",LU:"FR",ES:"ES",MX:"MX",CO:"ES",VE:"ES",PE:"ES",CL:"ES",EC:"ES",UY:"ES",PY:"ES",BO:"ES",CR:"ES",PA:"ES",HN:"ES",GT:"ES",SV:"ES",NI:"ES",DO:"ES",CU:"ES",PT:"PT",AO:"PT",MZ:"PT",CV:"PT",BR:"BR",AR:"AR",IT:"IT",SM:"IT",DE:"DE",AT:"DE",GB:"GB",IE:"GB",AU:"GB",NZ:"GB",CA:"GB",MA:"MA",TN:"DZ",LY:"DZ",DZ:"DZ",SN:"SN",ML:"SN",GN:"SN",GW:"SN",GM:"SN",MR:"SN",CI:"CI",BF:"CI",TG:"CI",BJ:"CI",GH:"CI",CM:"CM",GA:"CM",CG:"CM",CD:"CM",NG:"NG",JP:"JP",KR:"KR",MX:"MX",PL:"_DEFAULT_EUROPE",CZ:"_DEFAULT_EUROPE",SK:"_DEFAULT_EUROPE",HU:"_DEFAULT_EUROPE",HR:"_DEFAULT_EUROPE",RS:"_DEFAULT_EUROPE",SI:"_DEFAULT_EUROPE",RO:"_DEFAULT_EUROPE",BG:"_DEFAULT_EUROPE",GR:"_DEFAULT_EUROPE",TR:"_DEFAULT_EUROPE",RU:"_DEFAULT_EUROPE",UA:"_DEFAULT_EUROPE",NL:"_DEFAULT_EUROPE",DK:"_DEFAULT_EUROPE",SE:"_DEFAULT_EUROPE",NO:"_DEFAULT_EUROPE",FI:"_DEFAULT_EUROPE",AL:"_DEFAULT_EUROPE",EG:"_DEFAULT_AFRIQUE",ZA:"_DEFAULT_AFRIQUE",KE:"_DEFAULT_AFRIQUE",ET:"_DEFAULT_AFRIQUE",TZ:"_DEFAULT_AFRIQUE",UG:"_DEFAULT_AFRIQUE",CN:"_DEFAULT_ASIE",VN:"_DEFAULT_ASIE",TH:"_DEFAULT_ASIE",ID:"_DEFAULT_ASIE",PH:"_DEFAULT_ASIE",IN:"_DEFAULT_ASIE",PK:"_DEFAULT_ASIE",BD:"_DEFAULT_ASIE",IR:"_DEFAULT_ASIE",SA:"_DEFAULT_ASIE",AE:"_DEFAULT_ASIE",QA:"_DEFAULT_ASIE",KW:"_DEFAULT_ASIE",IQ:"_DEFAULT_ASIE",SY:"_DEFAULT_ASIE",JO:"_DEFAULT_ASIE",US:"_DEFAULT_AMERIQUE"};function g(I){return a[I]||"_DEFAULT_EUROPE"}function m(I){const x=g(I),d=(r[x]||r._DEFAULT_EUROPE).first;return ie(d)}function h(I){const x=g(I);return(r[x]||r._DEFAULT_EUROPE).last}const o=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],u=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],l=new Set(u.sort(()=>Math.random()-.5).slice(0,4)),f=[...u].sort(()=>Math.random()-.5),p=new Set(f.slice(0,2)),s=new Set(f.slice(2,4)),E=10,b=o.map((I,x)=>x<E);for(let I=b.length-1;I>0;I--){const x=Math.floor(Math.random()*(I+1));[b[I],b[x]]=[b[x],b[I]]}const v=new Set;function $(I){const x=h(I),d=x.filter(B=>!v.has(B)&&!n.has(B)),c=d.length?d:x.filter(B=>!v.has(B)),y=c.length?c:x,w=ie(y);return v.add(w),w}return o.map((I,x)=>{const d=b[x]?t:Nt(t),c=We(d),y=jt(d),w=ie(zt),B=Ot(i,x),k=l.has(x),A=k?Math.max(0,B-2):0;let L=0,S=0,C=0,T=0,z=null;I==="GK"?L=B:I==="DEF"?(S=B,k&&(C=A,z="MIL")):I==="ATT"?(T=B,k&&(C=A,z="MIL")):(C=B,k&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(S=A,z="DEF"):(T=A,z="ATT")));const j=p.has(x)?"pepite":s.has(x)?"papyte":"normal",N=$(d);return{job:I,job2:z,firstname:m(d),surname_real:N,country_code:d,club_id:e,note_g:L,note_d:S,note_m:C,note_a:T,skin:c,hair:y,hair_length:w,rarity:j,sell_price:0,ethnie:Ae(d),_ethnie:Ae(d)}})}async function Ze(e,t,n,i=!1){oe=null;const{data:r}=await _.from("players").select("surname_real").not("surname_real","is",null),a=new Set((r||[]).map(s=>s.surname_real).filter(Boolean)),g=Gt(e,t,a,i),{data:m}=await _.from("players").select("face").not("face","is",null),h=new Set((m||[]).map(s=>s.face).filter(Boolean)),o=new Set;for(const s of g){const E=await qe(s.country_code,new Set([...h,...o]));E&&(s.face=E,o.add(E)),delete s._ethnie}const{data:u,error:l}=await _.from("players").insert(g).select("id");if(l){console.error("[GenSquad] Erreur batch insert:",l.message,l.details),n("Erreur: "+l.message,"error");return}const f=(u||[]).map(s=>({card_type:"player",player_id:s.id}));if(f.length){const{error:s}=await _.from("cards").insert(f);s&&console.warn("[GenSquad] Erreur cartes:",s.message)}const p=(u==null?void 0:u.length)||0;console.log("[GenSquad] Créés:",p,"/",g.length),p>0?n(`${p} joueurs générés ✅`,"success"):n("Erreur génération joueurs","error")}function Xe(e){return{style:e.kit_style||R.style,color1:e.kit_color1||R.color1,color2:e.kit_color2||R.color2,color3:e.kit_color3||R.color3,shorts:e.kit_shorts||R.shorts,socks:e.kit_socks||R.socks}}let ae=[];async function Ht(e,t){await ce(e,t)}async function ce(e,t){const[{data:n,error:i},{data:r}]=await Promise.all([_.from("clubs").select("*").order("real_name"),_.from("players").select("club_id")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}ae=n||[];const a={};(r||[]).forEach(g=>{a[g.club_id]=(a[g.club_id]||0)+1}),qt(e,t,a)}function qt(e,t,n={}){const{toast:i,openModal:r,closeModal:a}=t;e.innerHTML=`
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
    </div>`,g(ae),document.getElementById("search-clubs").addEventListener("input",m=>{const h=m.target.value.toLowerCase();g(ae.filter(o=>o.real_name.toLowerCase().includes(h)||o.encoded_name.toLowerCase().includes(h)))}),document.getElementById("add-club-btn").addEventListener("click",()=>Se(null,e,t));function g(m){const h=document.getElementById("clubs-list");if(!m.length){h.innerHTML='<p style="color:var(--tile-fg-dim);padding:20px;text-align:center">Aucun club.</p>';return}h.innerHTML=m.map(o=>{const u=Xe(o),l=o.logo_url?`<img src="${o.logo_url}" style="width:36px;height:36px;object-fit:contain;border-radius:8px;flex-shrink:0">`:`<div style="width:36px;height:36px;background:linear-gradient(135deg,${u.color1},${u.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:900;flex-shrink:0">${o.encoded_name.slice(0,3)}</div>`,f=n[o.id]||0;return`
        <div class="club-row" data-club-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:10px;cursor:pointer;background:var(--tile-bg);border:1px solid var(--tile-border);transition:background .15s">
          ${l}
          <img src="https://flagsapi.com/${o.country_code}/flat/24.png" style="width:18px;height:13px;object-fit:cover;border-radius:2px;flex-shrink:0" onerror="this.style.display='none'">
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:12px;color:var(--tile-fg-on-page);font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o.encoded_name}</div>
            <div style="font-size:10px;color:${f===0?"#e67e22":"var(--tile-fg-dim)"}">${f===0?"⚠️ 0 joueur":`👥 ${f}`}</div>
          </div>
          <button class="btn-del-club" data-del="${o.id}"
            style="width:22px;height:22px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;flex-shrink:0"
            onclick="event.stopPropagation()">✕</button>
        </div>`}).join(""),h.querySelectorAll(".club-row").forEach(o=>{o.addEventListener("click",()=>{const u=ae.find(l=>l.id===o.dataset.clubId);u&&Se(u,e,t),h.querySelectorAll(".club-row").forEach(l=>l.style.background="var(--tile-bg)"),o.style.background="rgba(26,107,60,0.18)"})}),h.querySelectorAll(".btn-del-club").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:u}=await _.from("clubs").delete().eq("id",o.dataset.del);u?i(u.message,"error"):(i("Club supprimé","success"),ce(e,t))})})}}async function Se(e,t,n){var b,v,$,I,x;const{toast:i}=n,r=!!e,a=e?Xe(e):{...R},g=document.getElementById("club-panel");if(!g)return;const m=Object.entries(ke).map(([d,c])=>`<option value="${d}" ${a.style===d?"selected":""}>${c.label}</option>`).join(""),h=Ye.map(d=>`<option value="${d}" ${((e==null?void 0:e.country_code)||"FR")===d?"selected":""}>${d}</option>`).join("");g.style.display="block",g.style.alignItems="",g.style.justifyContent="",g.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <h3 style="font-size:17px;font-weight:900;color:var(--tile-fg-on-page)">${r?`✏️ ${e.real_name}`:"➕ Nouveau club"}</h3>
      ${r?'<button id="btn-gen-squad-panel" class="btn btn-primary btn-sm">⚽ Générer joueurs</button>':""}
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
              <select id="m-kit-style" style="width:100%">${m}</select>
            </div>
            ${[["Couleur 1","m-kit-color1",a.color1,!1],["Couleur 2","m-kit-color2",a.color2,!1],["Couleur 3","m-kit-color3",a.color3,!0],["Short","m-kit-shorts",a.shorts,!1],["Chaussettes","m-kit-socks",a.socks,!1]].map(([d,c,y,w])=>`
              <div class="form-group" id="wrap-${c}" ${w?'style="display:none"':""}>
                <label>${d}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${c}" value="${y||"#000000"}" style="width:38px;height:32px;padding:2px;border:1px solid var(--tile-border);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${c}-txt" value="${y||"#000000"}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>`).join("")}
          </div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div id="kit-preview-wrap" style="background:#f0f0f0;border-radius:12px;padding:14px;border:1.5px solid var(--tile-border);min-width:60px;text-align:center"></div>
            <div style="font-size:10px;color:var(--tile-fg-dim)">Aperçu</div>
          </div>
        </div>
      </div>

      ${r?"":`
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
        ${r?"💾 Enregistrer":"✅ Créer le club"}
      </button>
    </div>

    ${r?`
    <div style="border-top:1px solid var(--tile-border);margin-top:24px;padding-top:20px">
      <h4 style="font-size:14px;font-weight:900;margin-bottom:12px;color:var(--tile-fg-on-page)">🃏 Joueurs du club (<span id="club-players-count">…</span>)</h4>
      <div id="club-players-grid" style="display:flex;flex-wrap:wrap;gap:10px"></div>
    </div>`:""}
  `,(b=document.getElementById("m-logo-file"))==null||b.addEventListener("change",d=>{var w;const c=(w=d.target.files)==null?void 0:w[0];if(!c)return;const y=new FileReader;y.onload=()=>{document.getElementById("logo-preview").innerHTML=`<img src="${y.result}" style="width:100%;height:100%;object-fit:contain">`},y.readAsDataURL(c)}),ee();function o(){var w,B;const d=((w=document.getElementById("m-kit-style"))==null?void 0:w.value)||"uni",c=((B=ke[d])==null?void 0:B.colors)===3,y=document.getElementById("wrap-m-kit-color3");y&&(y.style.display=c?"":"none")}o(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(d=>{const c=document.getElementById(d),y=document.getElementById(d+"-txt");!c||!y||(c.addEventListener("input",()=>{y.value=c.value,ee()}),y.addEventListener("input",()=>{const w=y.value.trim();/^#[0-9a-fA-F]{6}$/.test(w)&&(c.value=w,ee())}),y.addEventListener("change",()=>{let w=y.value.trim();w.startsWith("#")||(w="#"+w),/^#[0-9a-fA-F]{6}$/.test(w)&&(c.value=w,y.value=w,ee())}))}),(v=document.getElementById("m-kit-style"))==null||v.addEventListener("change",()=>{o(),ee()});const u=document.getElementById("m-real"),l=document.getElementById("m-encoded");function f(){if(!u||!l||l.value)return;const d=u.value.trim().split(/\s+/),c=d.length===1?d[0].toUpperCase().slice(0,6):d.filter(y=>y.length>2).map(y=>y[0].toUpperCase()).join("")||d[0].toUpperCase().slice(0,4);l.value=c}u==null||u.addEventListener("input",f),($=document.getElementById("auto-encode-btn"))==null||$.addEventListener("click",()=>{l&&(l.value=""),f()}),(I=document.getElementById("m-save"))==null||I.addEventListener("click",()=>Vt(e,r,t,n));const p=document.getElementById("m-gen-squad"),s=document.getElementById("m-gen-strong-label");function E(){if(s&&(s.style.display=p!=null&&p.checked?"flex":"none",!(p!=null&&p.checked))){const d=document.getElementById("m-gen-strong");d&&(d.checked=!1)}}p==null||p.addEventListener("change",E),E(),(x=document.getElementById("btn-gen-squad-panel"))==null||x.addEventListener("click",()=>{Kt(e,n,t)}),r&&Qe(e.id)}async function Qe(e){const{data:t}=await _.from("players").select("*, clubs(encoded_name, logo_url, kit_style, kit_color1, kit_color2, kit_color3, kit_shorts, kit_socks)").eq("club_id",e).order("surname_real"),n=document.getElementById("club-players-grid"),i=document.getElementById("club-players-count");if(i&&(i.textContent=(t||[]).length),!!n){if(!(t!=null&&t.length)){n.innerHTML='<div style="color:var(--tile-fg-dim);padding:20px;font-size:13px">Aucun joueur dans ce club.</div>';return}n.innerHTML=t.map(r=>ve(r,{width:100})).join("")}}function Kt(e,t,n){const{openModal:i,closeModal:r,toast:a}=t;i(`⚽ Générer — ${e.real_name}`,`<div style="display:flex;flex-direction:column;gap:14px">
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
    </div>`),setTimeout(()=>{var g,m;(g=document.getElementById("qg-cancel"))==null||g.addEventListener("click",()=>r()),(m=document.getElementById("qg-ok"))==null||m.addEventListener("click",async()=>{var o;const h=((o=document.getElementById("qg-strong"))==null?void 0:o.checked)??!1;r(),a("Génération en cours…","info"),await Ze(e.id,e.country_code,a,h),a("Effectif généré ✅","success"),Qe(e.id),ce(n,t)})},50)}function et(){var e,t,n,i,r,a;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((t=document.getElementById("m-kit-color1"))==null?void 0:t.value)||"#1A6B3C",color2:((n=document.getElementById("m-kit-color2"))==null?void 0:n.value)||"#ffffff",color3:((i=document.getElementById("m-kit-color3"))==null?void 0:i.value)||"#000000",shorts:((r=document.getElementById("m-kit-shorts"))==null?void 0:r.value)||"#111111",socks:((a=document.getElementById("m-kit-socks"))==null?void 0:a.value)||"#ffffff"}}function ee(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=ut(et(),"panel"))}async function Jt(e,t){const n=(e.name.split(".").pop()||"png").toLowerCase(),i=`clubs/${t||"new"}-${Date.now()}.${n}`,{error:r}=await _.storage.from("assets").upload(i,e,{upsert:!0,cacheControl:"3600"});if(r)throw r;const{data:a}=_.storage.from("assets").getPublicUrl(i);return a.publicUrl}async function Vt(e,t,n,i){var I,x,d,c,y,w,B,k,A;const{toast:r}=i,a=document.getElementById("m-error"),g=document.getElementById("m-save"),m=(I=document.getElementById("m-real"))==null?void 0:I.value.trim(),h=(x=document.getElementById("m-encoded"))==null?void 0:x.value.trim().toUpperCase(),o=(d=document.getElementById("m-country"))==null?void 0:d.value.trim().toUpperCase(),u=((y=(c=document.getElementById("m-logo-file"))==null?void 0:c.files)==null?void 0:y[0])||null,l=((w=document.getElementById("m-logo-url-current"))==null?void 0:w.value)||null,f=((B=document.getElementById("m-gen-stadium"))==null?void 0:B.checked)??!1,p=((k=document.getElementById("m-gen-squad"))==null?void 0:k.checked)??!1,s=((A=document.getElementById("m-gen-strong"))==null?void 0:A.checked)??!1,E=et();if(!m){a.textContent="Le nom du club est requis.";return}if(!h){a.textContent="Le nom encodé est requis.";return}if(!o){a.textContent="Le pays est requis.";return}g.disabled=!0,g.textContent="Enregistrement…";let b=l;if(u)try{g.textContent="📤 Envoi du logo…",b=await Jt(u,e==null?void 0:e.id)}catch(L){a.textContent="Erreur upload logo : "+L.message,g.disabled=!1,g.textContent=t?"💾 Enregistrer":"✅ Créer le club";return}const v={real_name:m,encoded_name:h,country_code:o,logo_url:b,kit_style:E.style,kit_color1:E.color1,kit_color2:E.color2,kit_color3:E.color3,kit_shorts:E.shorts,kit_socks:E.socks};let $=e==null?void 0:e.id;if(t){const{error:L}=await _.from("clubs").update(v).eq("id",$);if(L){a.textContent=L.message,g.disabled=!1,g.textContent="💾 Enregistrer";return}}else{const{data:L,error:S}=await _.from("clubs").insert(v).select().single();if(S){a.textContent=S.message,g.disabled=!1,g.textContent="✅ Créer le club";return}if($=L.id,f){g.textContent="🏟️ Création du stade…";const{data:C,error:T}=await _.from("stadium_definitions").insert({name:`Stade de ${m}`,club_id:$,country_code:o}).select().single();T?console.warn("[Stadium] Erreur def stade:",T.message):C&&await _.from("cards").insert({card_type:"stadium",stadium_id:C.id})}p&&(g.textContent="⚽ Génération des joueurs…",await Ze($,o,r,s))}r(t?"Club modifié ✅":"Club créé ✅","success"),ce(n,i)}const Yt=["normal","pepite","papyte","legende"],Ce=["GK","DEF","MIL","ATT"],Wt=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let q={...D},re=[];async function Zt(e,{toast:t}){const{data:n}=await _.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");re=n||[],q={...D},e.innerHTML=tn(re),Qt(e,re,t),O()}function Te(){var n;const e=((n=document.getElementById("cb-surname-real"))==null?void 0:n.value)||"",t=document.getElementById("cb-surname-enc");t&&(t.value=de(e))}function Xt(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=re.find(i=>String(i.id)===String(e));return t?{style:t.kit_style||R.style,color1:t.kit_color1||R.color1,color2:t.kit_color2||R.color2,shorts:t.kit_shorts||R.shorts,socks:t.kit_socks||R.socks}:{...R}}function O(){var f,p,s,E;const e=b=>{var v;return((v=document.getElementById(b))==null?void 0:v.value)||""},t={firstname:e("cb-firstname"),surname_real:e("cb-surname-enc")||de(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((p=(f=document.getElementById("cb-club"))==null?void 0:f.selectedOptions[0])==null?void 0:p.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=Xt(),i=document.getElementById("cb-club"),r=((E=(s=i==null?void 0:i.selectedOptions[0])==null?void 0:s.dataset)==null?void 0:E.logo)||null,a=Ke(q,n,120),g=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(a)}`,m=ft(t,{portraitUrl:g,clubLogoUrl:r,showNotes:!0}),h=document.getElementById("card-preview");h&&(h.innerHTML=m);const o=document.getElementById("avatar-preview-wrap");o&&(o.innerHTML=a);const u=e("cb-surname-real"),l=document.getElementById("encode-summary");l&&u&&(l.textContent=`${e("cb-firstname")} ${u} → ${e("cb-firstname")} ${t.surname_real}`)}function tt(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};q={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function Qt(e,t,n){var r,a,g,m,h;e.querySelectorAll("input,select").forEach(o=>{o.addEventListener("input",O),o.addEventListener("change",O)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(o=>{var u;(u=document.getElementById(o))==null||u.addEventListener("change",()=>{tt(),O()})}),(r=document.getElementById("cb-surname-real"))==null||r.addEventListener("input",()=>{Te(),O()}),(a=document.getElementById("btn-encode"))==null||a.addEventListener("click",()=>{Te(),O()}),(g=document.getElementById("cb-club"))==null||g.addEventListener("change",O),(m=document.getElementById("btn-save-player"))==null||m.addEventListener("click",()=>en(n)),(h=document.getElementById("btn-reset"))==null||h.addEventListener("click",()=>{e.querySelectorAll("input").forEach(o=>o.value=""),e.querySelectorAll("select").forEach(o=>o.selectedIndex=0),q={...D},i.forEach(o=>{const u=o.replace("av-",""),l=document.getElementById(o);l&&(l.value=D[u]||"")}),O()})}async function en(e){const t=g=>{var m;return((m=document.getElementById(g))==null?void 0:m.value)||""},n=t("cb-surname-real").trim(),i=t("cb-surname-enc").trim()||de(n);if(!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}tt();const r={firstname:t("cb-firstname").trim(),surname_real:n,surname_real:i,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:q,skin:q.skin||"blanc",hair:q.hairColor||"marron",hair_length:"court"},{error:a}=await _.from("players").insert(r);if(a){e("Erreur: "+a.message,"error");return}e(`✅ Joueur "${r.firstname} ${r.surname_real}" enregistré !`,"success")}function tn(e){const t=Wt.map(([o,u])=>`<option value="${o}">${u} (${o})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(o=>`<option value="${o.id}" data-logo="${o.logo_url||""}">${o.encoded_name}</option>`).join(""),i=Ce.map(o=>`<option value="${o}">${o}</option>`).join(""),r='<option value="">Aucun</option>'+Ce.map(o=>`<option value="${o}">${o}</option>`).join(""),a=Yt.map(o=>`<option value="${o}">${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join(""),g=(o,u,l)=>Object.entries(u).map(([f,p])=>`<option value="${f}" ${f===(l||"")?"selected":""}>${p.label}</option>`).join(""),m=Object.keys(pt).map(o=>`<option value="${o}" ${o===D.skin?"selected":""}>${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join(""),h=Object.keys(mt).map(o=>`<option value="${o}" ${o===D.hairColor?"selected":""}>${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join("");return`
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
          <div><label>Poste secondaire</label><select id="cb-job2">${r}</select></div>
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
            <div style="background:${gt[o]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
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
              <select id="av-skin">${m}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${g("av-hair",bt,D.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${h}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${g("av-eyebrows",yt,D.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${g("av-eyes",vt,D.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${g("av-nose",xt,D.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${g("av-mouth",ht,D.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${g("av-beard",Et,D.beard)}</select>
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
  `}async function nt(e,{toast:t}){const{data:n,error:i}=await _.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").order("created_at",{ascending:!1});if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const r=n||[];e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <input id="search-users" placeholder="🔍 Rechercher un manager…" style="width:260px">
      <span style="font-size:13px;color:var(--gray-600)">${r.length} manager(s)</span>
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
  `,a(r),document.getElementById("search-users").addEventListener("input",g=>{const m=g.target.value.toLowerCase();a(r.filter(h=>{var o;return h.pseudo.toLowerCase().includes(m)||((o=h.club_name)==null?void 0:o.toLowerCase().includes(m))}))});function a(g){document.getElementById("users-tbody").innerHTML=g.map(m=>{const h=m.mmr??1e3,o=m.mmr_deviation??350,u=m.placement_matches??0,l=_t(h),f=m.ranked_wins??0,p=m.ranked_losses??0,s=m.ranked_draws??0,E=f+p+s,b=E>0?Math.round(f/E*100):null,v=u<10,$=o<80?"#1A6B3C":o<150?"#e67e22":"#bb2020";return`
        <tr>
          <td>
            <div style="font-weight:700">${m.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${m.club_name||"—"}</div>
          </td>
          <td style="font-size:12px">
            <div>${(m.credits||0).toLocaleString("fr")} cr.</div>
            <div style="color:var(--gray-600)">Niv. ${m.level}</div>
          </td>
          <td style="font-size:12px">${m.wins}V / ${m.draws}N / ${m.losses}D</td>
          <td style="font-size:12px">🥇${m.trophies_top1} 🥈${m.trophies_top2} 🥉${m.trophies_top3}</td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:5px">
              <span style="font-size:16px">${l.emoji}</span>
              <span style="font-weight:700;color:${l.color}">${l.label}</span>
            </div>
            ${v?`<div style="font-size:10px;color:#e67e22">${u}/10 placement${u<10?` (${10-u} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${f}V ${s}N ${p}D${b!==null?` · ${b}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${h}</div>
            <div style="font-size:10px;color:${$}">RD ±${Math.round(o)}</div>
          </td>
          <td>
            ${m.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td>
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${m.id}" data-is-admin="${m.is_admin}">
              ${m.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(m=>{m.addEventListener("click",async()=>{const h=m.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${h?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:o}=await _.from("users").update({is_admin:h}).eq("id",m.dataset.toggleAdmin);o?t(o.message,"error"):(t("Rôle mis à jour ✅","success"),nt(e,{toast:t}))})})}}const pe=[{value:"normal",label:"Normal",color:"#ccc"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function it(e,t){var h;const{toast:n}=t,{data:i,error:r}=await _.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_real, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(r){e.innerHTML=`<p style="color:var(--danger)">${r.message}</p>`;return}const a=i||[],g=a.filter(o=>o.status==="active").length,m=a.filter(o=>o.status==="sold").length;e.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px">
      <button id="btn-price-grid" class="btn btn-primary">📊 Grille des prix</button>
      <div style="display:flex;gap:12px">
        <div class="card-panel" style="min-width:120px;text-align:center;padding:12px 20px">
          <div style="font-size:22px;font-weight:700;color:#1A6B3C">${g}</div>
          <div style="font-size:11px;color:var(--tile-fg-dim)">Annonces actives</div>
        </div>
        <div class="card-panel" style="min-width:120px;text-align:center;padding:12px 20px">
          <div style="font-size:22px;font-weight:700;color:#D4A017">${m}</div>
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
            ${a.map(o=>{var p,s,E,b;const u=(p=o.card)==null?void 0:p.player,l=u?`${u.firstname} ${u.surname_real}`:((s=o.card)==null?void 0:s.card_type)||"—",f={active:"#1A6B3C",sold:"#D4A017",cancelled:"#888"};return`<tr>
                <td><b>${l}</b>${u?`<div style="font-size:10px;color:var(--tile-fg-dim)">${u.rarity} · ${u.job}</div>`:""}</td>
                <td style="font-size:12px">${((E=o.seller)==null?void 0:E.pseudo)||"—"}</td>
                <td style="font-size:12px">${((b=o.buyer)==null?void 0:b.pseudo)||"—"}</td>
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
  `,document.querySelectorAll("[data-cancel]").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:u}=await _.from("market_listings").update({status:"cancelled"}).eq("id",o.dataset.cancel);u?n(u.message,"error"):(n("Annonce annulée","success"),it(e,t))})}),(h=document.getElementById("btn-price-grid"))==null||h.addEventListener("click",()=>nn(t))}async function nn(e){const{openModal:t,closeModal:n,toast:i}=e;await fe(e)}async function fe(e){var o,u,l,f;const{openModal:t,closeModal:n,toast:i}=e,{data:r,error:a}=await _.from("sell_price_configs").select("*").order("rarity").order("note_min");if(a){i(a.message,"error");return}const g=p=>{const s=pe.find(E=>E.value===p.rarity)||pe[0];return`<tr data-row="${p.id}">
      <td><span style="color:${s.color};font-weight:700">${s.label}</span></td>
      <td style="text-align:center">${p.note_min}</td>
      <td style="text-align:center">${p.note_max}</td>
      <td style="text-align:right">${(p.price_min||0).toLocaleString("fr")} cr.</td>
      <td style="text-align:right">${(p.price_max||0).toLocaleString("fr")} cr.</td>
      <td style="text-align:center">
        <button class="btn btn-ghost btn-sm" data-edit-row="${p.id}">✏️</button>
        <button class="btn btn-danger btn-sm" data-del-row="${p.id}">🗑️</button>
      </td>
    </tr>`},m=`
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
          ${(r||[]).map(g).join("")||'<tr><td colspan="6" style="text-align:center;color:#aaa;padding:20px">Aucune règle définie.</td></tr>'}
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
  `;t("📊 Grille des prix — vente marché",m,`
    <button id="pg-add-row" class="btn btn-primary">+ Ajouter une ligne</button>
    <button id="pg-close" class="btn btn-ghost">Fermer</button>
  `),(o=document.getElementById("pg-close"))==null||o.addEventListener("click",()=>n()),(u=document.getElementById("pg-add-row"))==null||u.addEventListener("click",()=>{document.getElementById("pg-form").style.display="block",document.getElementById("pg-id").value="",document.getElementById("pg-rarity").value="normal",document.getElementById("pg-note-min").value=0,document.getElementById("pg-note-max").value=20,document.getElementById("pg-price-min").value=2500,document.getElementById("pg-price-max").value=15e3}),document.querySelectorAll("[data-edit-row]").forEach(p=>{p.addEventListener("click",()=>{const s=(r||[]).find(E=>E.id===p.dataset.editRow);s&&(document.getElementById("pg-form").style.display="block",document.getElementById("pg-id").value=s.id,document.getElementById("pg-rarity").value=s.rarity,document.getElementById("pg-note-min").value=s.note_min,document.getElementById("pg-note-max").value=s.note_max,document.getElementById("pg-price-min").value=s.price_min,document.getElementById("pg-price-max").value=s.price_max)})}),document.querySelectorAll("[data-del-row]").forEach(p=>{p.addEventListener("click",async()=>{confirm("Supprimer cette ligne ?")&&(await _.from("sell_price_configs").delete().eq("id",p.dataset.delRow),i("Ligne supprimée","success"),fe(e))})}),(l=document.getElementById("pg-form-cancel"))==null||l.addEventListener("click",()=>{document.getElementById("pg-form").style.display="none"}),(f=document.getElementById("pg-form-save"))==null||f.addEventListener("click",async()=>{const p=document.getElementById("pg-id").value,s={rarity:document.getElementById("pg-rarity").value,note_min:Number(document.getElementById("pg-note-min").value)||0,note_max:Number(document.getElementById("pg-note-max").value)||0,price_min:Number(document.getElementById("pg-price-min").value)||0,price_max:Number(document.getElementById("pg-price-max").value)||0};if(s.price_min>s.price_max){i("Le prix min doit être ≤ prix max","error");return}if(s.note_min>s.note_max){i("La note min doit être ≤ note max","error");return}const{error:E}=p?await _.from("sell_price_configs").update(s).eq("id",p):await _.from("sell_price_configs").insert(s);if(E){i(E.message,"error");return}i("Règle enregistrée ✅","success"),fe(e)})}async function on(e,{toast:t}){e.innerHTML=`
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
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:n,error:i}=await _.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun club à exporter","info");return}let r=`real_name,encoded_name,country_code,logo_url
`;n.forEach(a=>{r+=[a.real_name,a.encoded_name,a.country_code,a.logo_url||""].map(Me).join(",")+`
`}),ne("clubs_export.csv",r),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:i}=await _.from("players").select("firstname,surname_real,surname_real,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_real");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let r=`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(a=>{var g;r+=[a.firstname,a.surname_real,a.surname_real,a.country_code,((g=a.clubs)==null?void 0:g.encoded_name)||"",a.job,a.job2||"",a.note_g,a.note_d,a.note_m,a.note_a,a.rarity,a.note_min??"",a.note_max??"",a.skin,a.hair,a.hair_length,a.sell_price].map(Me).join(",")+`
`}),ne("players_export.csv",r),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const r=document.getElementById("clubs-import-result");r.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const a=await i.text(),g=ze(a);if(g.length===0){r.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let m=0,h=0;const o=[];for(const u of g){if(!u.real_name||!u.encoded_name||!u.country_code){h++,o.push(`Ligne ignorée (champs manquants): ${u.real_name||"?"}`);continue}const l={real_name:u.real_name,encoded_name:u.encoded_name.toUpperCase(),country_code:u.country_code.toUpperCase().slice(0,2),logo_url:u.logo_url||null},{error:f}=await _.from("clubs").upsert(l,{onConflict:"encoded_name"});f?(h++,o.push(`${u.encoded_name}: ${f.message}`)):m++}r.innerHTML=`<div style="color:var(--green)">✅ ${m} clubs importés</div>
        ${h>0?`<div style="color:#c0392b">❌ ${h} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${o.slice(0,10).join("<br>")}</div>`:""}`,t(`${m} clubs importés`,"success")}catch(a){r.innerHTML=`<span style="color:#c0392b">Erreur : ${a.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const r=document.getElementById("players-import-result");r.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const a=await i.text(),g=ze(a);if(g.length===0){r.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:m}=await _.from("clubs").select("id,encoded_name"),h={};(m||[]).forEach(v=>{h[v.encoded_name.toUpperCase()]=v.id});let o=0,u=0;const l=[],f=["GK","DEF","MIL","ATT"],p=["normal","pepite","papyte","legende"],s=["blanc","metisse","typ","noir"],E=["blond","marron","noir","chauve"],b=["rase","court","milong","long"];for(const v of g){if(!v.firstname||!v.surname_real||!v.country_code||!v.job){u++,l.push(`Ligne ignorée (champs requis manquants): ${v.firstname||"?"}`);continue}if(!f.includes(v.job)){u++,l.push(`${v.firstname}: job invalide "${v.job}"`);continue}const $=v.club_encoded_name&&h[v.club_encoded_name.toUpperCase()]||null,I={firstname:v.firstname,surname_real:v.surname_real,surname_real:v.surname_real||de(v.surname_real),country_code:v.country_code.toUpperCase().slice(0,2),club_id:$,job:v.job,job2:f.includes(v.job2)?v.job2:null,note_g:parseInt(v.note_g)||0,note_d:parseInt(v.note_d)||0,note_m:parseInt(v.note_m)||0,note_a:parseInt(v.note_a)||0,rarity:p.includes(v.rarity)?v.rarity:"normal",note_min:v.note_min!==""&&v.note_min!=null?parseInt(v.note_min):null,note_max:v.note_max!==""&&v.note_max!=null?parseInt(v.note_max):null,skin:s.includes(v.skin)?v.skin:"blanc",hair:E.includes(v.hair)?v.hair:"noir",hair_length:b.includes(v.hair_length)?v.hair_length:"court",sell_price:parseInt(v.sell_price)||0},{error:x}=await _.from("players").insert(I);x?(u++,l.push(`${v.firstname} ${v.surname_real}: ${x.message}`)):o++}r.innerHTML=`<div style="color:var(--green)">✅ ${o} joueurs importés</div>
        ${u>0?`<div style="color:#c0392b">❌ ${u} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${l.slice(0,10).join("<br>")}</div>`:""}`,t(`${o} joueurs importés`,"success")}catch(a){r.innerHTML=`<span style="color:#c0392b">Erreur : ${a.message}</span>`}n.target.value=""})}function Me(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function ne(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(n),r=document.createElement("a");r.href=i,r.download=e,r.click(),URL.revokeObjectURL(i)}function ze(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(g=>g.trim());if(t.length<2)return[];const n=t[0],i=n.split(";").length>n.split(",").length?";":",",r=Re(n,i).map(g=>g.trim().replace(/^\uFEFF/,"").toLowerCase()),a=[];for(let g=1;g<t.length;g++){if(!t[g].trim())continue;const m=Re(t[g],i),h={};r.forEach((o,u)=>{h[o]=(m[u]||"").trim()}),!Object.values(h).every(o=>!o)&&a.push(h)}return a}function Re(e,t=","){const n=[];let i="",r=!1;for(let a=0;a<e.length;a++){const g=e[a];r?g==='"'?e[a+1]==='"'?(i+='"',a++):r=!1:i+=g:g==='"'?r=!0:g===t?(n.push(i),i=""):i+=g}return n.push(i),n}const an={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function rn(e,{toast:t}){const n=Object.keys(ue);let i=n[0];const{data:r}=await _.from("formation_links_overrides").select("formation, links"),a={};(r||[]).forEach(u=>{a[u.formation]=u.links});let g=new Set;function m(u,l){return[u,l].sort().join("-")}function h(u){const l=a[u]||ue[u]||[];g=new Set(l.map(([f,p])=>m(f,p)))}h(i),e.innerHTML=`
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
        <div style="font-weight:700;font-size:13px;margin-bottom:8px">Liens (${g.size}/? actifs)</div>
        <div id="links-list" style="display:flex;flex-direction:column;gap:4px;max-height:520px;overflow-y:auto"></div>
      </div>
    </div>
  `;function o(){const u=wt[i]||{},l=Be(i),f=320,p=400,s=22;function E(x){const d=u[x];return d?{x:d.x*f,y:d.y*p}:null}let b=`<svg width="${f}" height="${p}" viewBox="0 0 ${f} ${p}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;l.forEach(([x,d],c)=>{const y=E(x),w=E(d);if(!y||!w)return;const B=m(x,d),k=g.has(B),A=k?"#3b82f6":"#999",L=k?.95:.35,S=k?4:3;b+=`<line x1="${y.x}" y1="${y.y}" x2="${w.x}" y2="${w.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${B}" style="cursor:pointer"/>`,b+=`<line x1="${y.x}" y1="${y.y}" x2="${w.x}" y2="${w.y}"
        stroke="${A}" stroke-width="${S}" stroke-dasharray="${k?"none":"4,3"}"
        opacity="${L}" pointer-events="none" data-line-key="${B}"/>`});for(const x of Object.keys(u)){const d=E(x);if(!d)continue;const c=x.replace(/\d+/,""),y=an[c]||"#555";b+=`<circle cx="${d.x}" cy="${d.y}" r="${s}" fill="${y}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,b+=`<text x="${d.x}" y="${d.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${x}</text>`}b+="</svg>",document.getElementById("field-wrap").innerHTML=b;const v=document.getElementById("links-list");v.innerHTML=l.map(([x,d])=>{const c=m(x,d),y=g.has(c);return`
        <button class="link-toggle" data-key="${c}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${y?"#3b82f6":"#ddd"};
          background:${y?"#eaf2ff":"#fafafa"};
          color:${y?"#1d4ed8":"#888"}">
          <span>${x} ↔ ${d}</span>
          <span>${y?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const $=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');$&&($.textContent=`Liens (${g.size}/${l.length} actifs)`);function I(x){g.has(x)?g.delete(x):g.add(x),o()}e.querySelectorAll(".link-hit").forEach(x=>{x.addEventListener("click",()=>I(x.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(x=>{x.addEventListener("click",()=>I(x.dataset.key))})}o(),document.getElementById("formation-select").addEventListener("change",u=>{i=u.target.value,h(i),o()}),document.getElementById("reset-btn").addEventListener("click",()=>{const u=ue[i]||[];g=new Set(u.map(([l,f])=>m(l,f))),o(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const l=Be(i).filter(([p,s])=>g.has(m(p,s))),{error:f}=await _.from("formation_links_overrides").upsert({formation:i,links:l,updated_at:new Date().toISOString()});if(f){t(f.message,"error");return}a[i]=l,t(`Liens enregistrés pour ${i} (${l.length} actifs)`,"success")})}const ln=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],sn=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],dn=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function cn(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await _.from("booster_configs").select("*").order("sort_order");let n=null,i=[],r=null;const a=()=>window.innerWidth<700;async function g(){if(!n){i=[];return}if(n!==r){const{data:l}=await _.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");i=l||[],r=n}}function m(){return`
    <div id="booster-list" style="background:#fff;${a()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
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
    </div>`}function h(){const l=n?(t||[]).find(s=>s.id===n):null;if(!l)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const f=i.reduce((s,E)=>s+Number(E.percentage||0),0),p=Math.abs(f-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${a()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

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
              ${dn.map(s=>`<option value="${s.value}" ${l.price_type===s.value?"selected":""}>${s.label}</option>`).join("")}
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
            <span style="margin-left:10px;font-size:12px;color:${p?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${f.toFixed(1)}% ${p?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((s,E)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${E}">
            <select class="rate-type" data-idx="${E}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${ln.map(b=>`<option value="${b.value}" ${s.card_type===b.value?"selected":""}>${b.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${E}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${sn.map(b=>`<option value="${b.value}" ${(s.rarity||"")===b.value?"selected":""}>${b.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${E}" type="number" min="0" max="20" value="${s.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${E}" type="number" min="0" max="20" value="${s.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${E}" type="number" min="0.1" max="100" step="0.1" value="${s.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${E}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function o(l=!1){l||await g();const f=!n&&a(),p=n&&a();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!a()||f||!n?m():""}
      ${!a()||p?h():""}
    </div>`,u()}function u(){var p,s,E,b,v,$,I;const l=x=>e.querySelector(x);e.querySelectorAll(".booster-row").forEach(x=>{x.addEventListener("click",d=>{d.target.closest(".btn-delete")||(n=x.dataset.id,r=null,o())})}),(p=l("#btn-back"))==null||p.addEventListener("click",()=>{n=null,o()}),(s=l("#btn-new"))==null||s.addEventListener("click",async()=>{const x=prompt("Nom du nouveau booster :");if(!(x!=null&&x.trim()))return;const{data:d,error:c}=await _.from("booster_configs").insert({name:x.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(c){alert(c.message);return}t.push(d),n=d.id,r=null,o()}),e.querySelectorAll(".btn-delete").forEach(x=>{x.addEventListener("click",async d=>{if(d.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await _.from("booster_configs").delete().eq("id",x.dataset.id);const c=t.findIndex(y=>y.id===x.dataset.id);c>-1&&t.splice(c,1),n===x.dataset.id&&(n=null,r=null),o()})}),(E=l("#btn-cancel"))==null||E.addEventListener("click",()=>{n=null,o()}),(b=l("#f-price-type"))==null||b.addEventListener("change",x=>{const d=l("#credits-field");d&&(d.style.opacity=x.target.value!=="credits"?"0.4":"1")}),(v=l("#btn-pick-icon"))==null||v.addEventListener("click",async()=>{var d;const x=l("#icon-picker-grid");if(x){if(x.style.display!=="none"){x.style.display="none";return}x.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',x.style.display="block";try{const y=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),w=Array.isArray(y)?y.filter(k=>k.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(k.name)):[];if(!w.length){x.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const B=((d=l("#f-image-url"))==null?void 0:d.value)||"";x.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${w.map(k=>`
          <div class="icon-pick-item" data-name="${k.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${k.name===B?"#1A6B3C":"#ddd"};background:${k.name===B?"#f0f7f0":"#fff"}">
            <img src="/icons/${k.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${k.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,x.querySelectorAll(".icon-pick-item").forEach(k=>{k.addEventListener("click",()=>{const A=l("#f-image-url");A&&(A.value=k.dataset.name),x.style.display="none"})})}catch(c){x.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${c.message}</div>`}}});function f(){e.querySelectorAll("[data-rate-idx]").forEach(x=>{var c,y,w,B,k;const d=Number(x.dataset.rateIdx);d>=0&&d<i.length&&(i[d].card_type=((c=x.querySelector(".rate-type"))==null?void 0:c.value)||"player",i[d].rarity=((y=x.querySelector(".rate-rarity"))==null?void 0:y.value)||null,i[d].note_min=Number((w=x.querySelector(".rate-note-min"))==null?void 0:w.value)||null,i[d].note_max=Number((B=x.querySelector(".rate-note-max"))==null?void 0:B.value)||null,i[d].percentage=Number((k=x.querySelector(".rate-pct"))==null?void 0:k.value)||0)})}($=l("#btn-add-rate"))==null||$.addEventListener("click",()=>{f(),i.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),o(!0)}),e.querySelectorAll(".btn-del-rate").forEach(x=>{x.addEventListener("click",()=>{f(),i.splice(Number(x.dataset.idx),1),o(!0)})}),(I=l("#btn-save"))==null||I.addEventListener("click",async()=>{var B,k,A,L,S,C,T,z,j,N,P,F,te;const x=(t||[]).find(M=>M.id===n);if(!x)return;const d=[];e.querySelectorAll("[data-rate-idx]").forEach(M=>{var Y,W,Z,X,Q;const K=Number(M.dataset.rateIdx);d.push({booster_id:n,card_type:((Y=M.querySelector(".rate-type"))==null?void 0:Y.value)||"player",rarity:((W=M.querySelector(".rate-rarity"))==null?void 0:W.value)||null,note_min:Number((Z=M.querySelector(".rate-note-min"))==null?void 0:Z.value)||null,note_max:Number((X=M.querySelector(".rate-note-max"))==null?void 0:X.value)||null,percentage:Number((Q=M.querySelector(".rate-pct"))==null?void 0:Q.value)||0,sort_order:K});const U=d[d.length-1];U.rarity||(U.rarity=null),U.note_min||(U.note_min=null),U.note_max||(U.note_max=null)});const c=d.reduce((M,K)=>M+K.percentage,0);if(d.length&&Math.abs(c-100)>.5){alert(`La somme doit faire 100% (actuellement ${c.toFixed(1)}%)`);return}const y={name:((k=(B=l("#f-name"))==null?void 0:B.value)==null?void 0:k.trim())||x.name,image_url:((L=(A=l("#f-image-url"))==null?void 0:A.value)==null?void 0:L.trim())||null,price_type:(S=l("#f-price-type"))==null?void 0:S.value,price_credits:Number((C=l("#f-price-credits"))==null?void 0:C.value)||0,card_count:Number((T=l("#f-card-count"))==null?void 0:T.value)||5,is_active:((z=l("#f-active"))==null?void 0:z.checked)??x.is_active,allow_duplicates:((j=l("#f-allow-dup"))==null?void 0:j.checked)??!0,sort_order:Number((N=l("#f-sort"))==null?void 0:N.value)||0,max_per_user:(P=l("#f-max-per-user"))!=null&&P.value?Number(l("#f-max-per-user").value):null,available_from:((F=l("#f-available-from"))==null?void 0:F.value)||null,available_until:((te=l("#f-available-until"))==null?void 0:te.value)||null},{error:w}=await _.from("booster_configs").update(y).eq("id",n);if(w){alert(w.message);return}if(Object.assign(x,y),await _.from("booster_drop_rates").delete().eq("booster_id",n),d.length){const{error:M}=await _.from("booster_drop_rates").insert(d);if(M){alert(M.message);return}}i=d,r=n,alert("✅ Booster enregistré !"),o(!0)})}o()}const ot=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function un(e){await xe(e)}async function xe(e){const{data:t,error:n}=await _.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
          ${(t||[]).map(i=>pn(i)).join("")}
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
              ${ot.map(i=>`<option value="${i.value}">${i.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>De(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>mn(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const r=(t||[]).find(a=>a.id===i.dataset.edit);r&&i.addEventListener("click",()=>De(r))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await _.from("sell_price_configs").delete().eq("id",i.dataset.delete),await xe(e))})})}function pn(e){const t=ot.find(n=>n.value===e.rarity);return`
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
    </tr>`}function De(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function mn(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,r=parseInt(document.getElementById("form-note-min").value)||1,a=parseInt(document.getElementById("form-note-max").value)||10;if(r>a){alert("Note min doit être ≤ note max");return}const g={rarity:n,price:i,note_min:r,note_max:a,updated_at:new Date().toISOString()};let m;if(t?{error:m}=await _.from("sell_price_configs").update(g).eq("id",t):{error:m}=await _.from("sell_price_configs").insert(g),m){alert("Erreur : "+m.message);return}document.getElementById("config-form").style.display="none",await xe(e)}async function gn(e){await he(e)}async function he(e){const{data:t}=await _.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Journal des mises à jour</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(t||[]).map(n=>fn(n)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>je(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>yn(e)),e.querySelectorAll("[data-edit]").forEach(n=>{const i=(t||[]).find(r=>r.id===n.dataset.edit);i&&n.addEventListener("click",()=>je(i))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await _.from("patch_notes").delete().eq("id",n.dataset.delete),await he(e))})})}function fn(e){const t=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function je(e){const t=document.getElementById("article-form");t.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img-current").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-img-file").value="";const n=document.getElementById("form-art-img-preview");n.innerHTML=e!=null&&e.image_url?`<img src="${e.image_url}" style="width:100%;height:100%;object-fit:cover">`:'<span style="font-size:20px;opacity:.4">📰</span>',document.getElementById("form-art-img-file").onchange=a=>{var h;const g=(h=a.target.files)==null?void 0:h[0];if(!g)return;const m=new FileReader;m.onload=()=>{n.innerHTML=`<img src="${m.result}" style="width:100%;height:100%;object-fit:cover">`},m.readAsDataURL(g)},document.getElementById("form-art-pub").checked=e?e.is_published:!0;const i=new Date((e==null?void 0:e.published_at)||Date.now()),r=new Date(i.getTime()-i.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=r,t.scrollIntoView({behavior:"smooth"})}async function bn(e){const t=(e.name.split(".").pop()||"png").toLowerCase(),n=`journal/${Date.now()}.${t}`,{error:i}=await _.storage.from("assets").upload(n,e,{upsert:!0,cacheControl:"3600"});if(i)throw i;const{data:r}=_.storage.from("assets").getPublicUrl(n);return r.publicUrl}async function yn(e){var p;const t=document.getElementById("form-id").value,n=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),r=((p=document.getElementById("form-art-img-file").files)==null?void 0:p[0])||null,a=document.getElementById("form-art-img-current").value||null,g=document.getElementById("form-art-pub").checked,m=document.getElementById("form-art-date").value,h=document.getElementById("form-save");if(!n){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}let o=a;if(r)try{h&&(h.textContent="📤 Envoi de l'image…"),o=await bn(r)}catch(s){alert("Erreur upload image : "+s.message),h&&(h.textContent="💾 Enregistrer");return}const u=m?new Date(m).toISOString():new Date().toISOString(),l={title:n,description:i,image_url:o,is_published:g,published_at:u};let f;if(t?{error:f}=await _.from("patch_notes").update(l).eq("id",t):{error:f}=await _.from("patch_notes").insert(l),f){alert("Erreur : "+f.message);return}document.getElementById("article-form").style.display="none",await he(e)}async function vn(e){await V(e)}async function V(e){var u,l,f,p,s,E,b,v,$,I,x,d;const{data:t}=await _.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
          </div>`:(t||[]).map(c=>xn(c)).join("")}
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([c,y,w])=>`<button type="button" data-cmd="${y}" title="${w}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${c}</button>`).join("")}
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
    </div>`,(u=document.getElementById("ts-add"))==null||u.addEventListener("click",()=>Ne(null,(t==null?void 0:t.length)||0)),(l=document.getElementById("ts-reset"))==null||l.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:c}=await _.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(c?"Erreur : "+c.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(f=document.getElementById("ts-cancel"))==null||f.addEventListener("click",at),(p=document.getElementById("ts-save"))==null||p.addEventListener("click",()=>En(e)),(s=document.getElementById("ts-preview-btn"))==null||s.addEventListener("click",hn);const n=document.getElementById("ts-editor"),i=()=>{const c=document.getElementById("ts-content");c&&n&&(c.value=n.innerHTML)};n==null||n.addEventListener("input",i),n==null||n.addEventListener("blur",i);const r=()=>{document.activeElement!==n&&(n==null||n.focus())};(E=document.getElementById("ts-toolbar"))==null||E.querySelectorAll("[data-cmd]").forEach(c=>{c.addEventListener("mousedown",y=>{y.preventDefault(),r();const w=c.dataset.cmd;w.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,w.split(":")[1]):document.execCommand(w,!1,null),i()})}),(b=document.getElementById("ts-insert-color"))==null||b.addEventListener("mousedown",c=>{c.preventDefault(),r();const y=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");y&&(document.execCommand("foreColor",!1,y),i())}),(v=document.getElementById("ts-clear-format"))==null||v.addEventListener("mousedown",c=>{c.preventDefault(),r(),document.execCommand("removeFormat",!1,null),i()}),n==null||n.addEventListener("focus",()=>{n&&(n.style.borderColor="#1A6B3C")}),n==null||n.addEventListener("blur",()=>{n&&(n.style.borderColor="#ddd")});const a=document.getElementById("ts-image"),g=document.getElementById("ts-img-preview"),m=document.getElementById("ts-img-preview-el"),h=document.getElementById("ts-img-picker-grid"),o=()=>{var y;const c=(y=a==null?void 0:a.value)==null?void 0:y.trim();if(c){const w="/";m.src=`${w}icons/${c}`,g.style.display="block"}else g.style.display="none"};a==null||a.addEventListener("input",o),($=document.getElementById("ts-img-clear"))==null||$.addEventListener("click",()=>{a&&(a.value=""),g.style.display="none",h.style.display="none"}),(I=document.getElementById("ts-img-pick"))==null||I.addEventListener("click",async()=>{if(h.style.display!=="none"){h.style.display="none";return}h.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',h.style.display="block";try{const y=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),w=Array.isArray(y)?y.filter(k=>k.name.startsWith("tuto_")):[];if(!w.length){h.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const B="/";h.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+w.map(k=>`
          <div data-pick="${k.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${B}icons/${k.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${k.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",h.querySelectorAll("[data-pick]").forEach(k=>{k.addEventListener("click",()=>{a&&(a.value=k.dataset.pick),o(),h.style.display="none"})})}catch(c){h.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+c.message+"</div>"}}),(x=document.getElementById("ts-color"))==null||x.addEventListener("input",c=>{const y=document.getElementById("ts-color-hex");y&&(y.value=c.target.value)}),(d=document.getElementById("ts-color-hex"))==null||d.addEventListener("input",c=>{const y=c.target.value;if(/^#[0-9a-fA-F]{6}$/.test(y)){const w=document.getElementById("ts-color");w&&(w.value=y)}}),e.querySelectorAll("[data-edit]").forEach(c=>{const y=(t||[]).find(w=>w.id===c.dataset.edit);y&&c.addEventListener("click",()=>Ne(y))}),e.querySelectorAll("[data-delete]").forEach(c=>{c.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await _.from("tutorial_steps").delete().eq("id",c.dataset.delete),V(e))})}),e.querySelectorAll("[data-toggle]").forEach(c=>{c.addEventListener("click",async()=>{const y=(t||[]).find(w=>w.id===c.dataset.toggle);y&&(await _.from("tutorial_steps").update({is_active:!y.is_active}).eq("id",y.id),V(e))})}),e.querySelectorAll("[data-up]").forEach(c=>{c.addEventListener("click",async()=>{const y=t||[],w=y.findIndex(B=>B.id===c.dataset.up);w<=0||(await Promise.all([_.from("tutorial_steps").update({step_order:y[w-1].step_order}).eq("id",y[w].id),_.from("tutorial_steps").update({step_order:y[w].step_order}).eq("id",y[w-1].id)]),V(e))})}),e.querySelectorAll("[data-down]").forEach(c=>{c.addEventListener("click",async()=>{const y=t||[],w=y.findIndex(B=>B.id===c.dataset.down);w<0||w>=y.length-1||(await Promise.all([_.from("tutorial_steps").update({step_order:y[w+1].step_order}).eq("id",y[w].id),_.from("tutorial_steps").update({step_order:y[w].step_order}).eq("id",y[w+1].id)]),V(e))})})}function xn(e){return`
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
  </div>`}function Ne(e,t=0){document.getElementById("ts-form").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const n=document.getElementById("ts-editor");n&&(n.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??t,document.getElementById("ts-active").checked=e?e.is_active:!0;const i=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=i,document.getElementById("ts-color-hex").value=i;const r=(e==null?void 0:e.image_url)||"",a=document.getElementById("ts-image");a&&(a.value=r);const g=document.getElementById("ts-img-preview"),m=document.getElementById("ts-img-preview-el");if(r&&g&&m){const h="/";m.src=`${h}icons/${r}`,g.style.display="block"}else g&&(g.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function at(){document.getElementById("ts-form").style.display="none",document.getElementById("ts-preview-area").innerHTML=""}function hn(){var o,u;const e=document.getElementById("ts-emoji").value||"⚽",t=document.getElementById("ts-title").value||"Titre",n=document.getElementById("ts-editor"),i=n?n.innerHTML:document.getElementById("ts-content").value||"",r=document.getElementById("ts-color-hex").value||"#1A6B3C",a=(u=(o=document.getElementById("ts-image"))==null?void 0:o.value)==null?void 0:u.trim(),m=a?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${a}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",h=document.getElementById("ts-preview-area");h.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${r}"></div></div>
        <div style="padding:20px 20px 0;text-align:center">
          <div style="font-size:48px;margin-bottom:8px;line-height:1">${e}</div>
          <div style="font-size:17px;font-weight:900;color:#111;margin-bottom:4px">${t}</div>
          <div style="font-size:11px;color:#aaa">6 / 10</div>
        </div>
        ${m}
        <div style="padding:${a?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${i}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${r};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,h.querySelectorAll("ul,ol").forEach(l=>{l.style.paddingLeft="20px",l.style.margin="6px 0"}),h.querySelectorAll("li").forEach(l=>{l.style.marginBottom="4px"}),h.querySelectorAll("p").forEach(l=>{l.style.marginBottom="8px"})}async function En(e){var l,f;const t=document.getElementById("ts-id").value,n=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),r=document.getElementById("ts-editor"),a=(r?r.innerHTML:document.getElementById("ts-content").value).trim(),g=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",m=parseInt(document.getElementById("ts-order").value)||0,h=document.getElementById("ts-active").checked;if(!i||!a){alert("Titre et contenu sont obligatoires.");return}const o={emoji:n,title:i,content:a,color:g,step_order:m,is_active:h,image_url:((f=(l=document.getElementById("ts-image"))==null?void 0:l.value)==null?void 0:f.trim())||null};let u;if(t?{error:u}=await _.from("tutorial_steps").update(o).eq("id",t):{error:u}=await _.from("tutorial_steps").insert(o),u){alert("Erreur : "+u.message);return}at(),V(e)}const rt="/",_n=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function wn(e,t){await be(e,t)}async function be(e,t){var r;const[{data:n},{data:i}]=await Promise.all([_.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),_.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">🏟️ Stades</h2>
        <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="st-list">
        ${(n||[]).length?(n||[]).map(a=>In(a)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucun stade créé.</div>'}
      </div>
    </div>`,(r=document.getElementById("st-add-btn"))==null||r.addEventListener("click",()=>Pe(null,i,e,t)),e.querySelectorAll("[data-edit-stadium]").forEach(a=>{a.addEventListener("click",()=>{const g=(n||[]).find(m=>m.id===a.dataset.editStadium);g&&Pe(g,i,e,t)})})}function In(e){var r,a;let t=null;e.image_url?t=e.image_url.startsWith("http")?e.image_url:`${rt}icons/${e.image_url}`:(r=e.club)!=null&&r.logo_url?t=e.club.logo_url:e.country_code&&(t=`https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/64.png`);const n=((a=e.club)==null?void 0:a.encoded_name)||e.country_code||"—",i=Je(e.name,t,`${n}<br>+10 ⭐`,{width:140});return`<div data-edit-stadium="${e.id}" style="cursor:pointer;transition:transform .15s" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
    ${i}
  </div>`}function Pe(e,t,n,i){var u,l,f;const{openModal:r,closeModal:a,toast:g}=i,m=`
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
            ${_n.map(([p,s])=>`<option value="${p}" ${(e==null?void 0:e.country_code)===p?"selected":""}>${s} (${p})</option>`).join("")}
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
  `;r(e?`Modifier : ${e.name}`:"Nouveau stade",m,`
    <button id="st-cancel" class="btn btn-ghost">Annuler</button>
    <button id="st-save" class="btn btn-primary">Enregistrer</button>
  `);const o=()=>{var y,w,B,k,A,L,S;const p=((y=document.getElementById("st-name"))==null?void 0:y.value)||"NOM DU STADE",s=(B=(w=document.getElementById("st-image"))==null?void 0:w.value)==null?void 0:B.trim(),E=(A=(k=document.getElementById("st-country"))==null?void 0:k.value)==null?void 0:A.trim(),b=document.getElementById("st-club"),v=(b==null?void 0:b.selectedIndex)||0,$=b&&v>0?b.options[v].text:"",I=((S=(L=b==null?void 0:b.options[v])==null?void 0:L.getAttribute)==null?void 0:S.call(L,"data-logo"))||"";let x=null;s?x=s.startsWith("http")?s:`${rt}icons/${s}`:I?x=I:E&&(x=`https://flagsapi.com/${E.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`);const d=$||E||"—",c=document.getElementById("st-preview-card");c&&(c.innerHTML=Je(p,x,`${d}<br>+10 ⭐`,{width:140}))};o(),["st-name","st-club","st-country","st-image"].forEach(p=>{var s,E;(s=document.getElementById(p))==null||s.addEventListener("input",o),(E=document.getElementById(p))==null||E.addEventListener("change",o)}),(u=document.getElementById("st-cancel"))==null||u.addEventListener("click",()=>a()),(l=document.getElementById("st-save"))==null||l.addEventListener("click",async()=>{const p=document.getElementById("st-name").value.trim(),s=document.getElementById("st-club").value||null,E=document.getElementById("st-country").value.trim().toUpperCase()||null,b=document.getElementById("st-image").value.trim()||null;if(!p){g("Le nom est obligatoire","error");return}const v={name:p,club_id:s,country_code:E,image_url:b},{error:$}=e?await _.from("stadium_definitions").update(v).eq("id",e.id):await _.from("stadium_definitions").insert(v);if($){g("Erreur : "+$.message,"error");return}g(e?"Stade modifié ✅":"Stade créé ✅","success"),a(),be(n,i)}),(f=document.getElementById("st-delete"))==null||f.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await _.from("stadium_definitions").delete().eq("id",e.id),g("Stade supprimé","success"),a(),be(n,i))})}const H=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],$n=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}],G=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],Fe=["GK","DEF","MIL","ATT"];async function kn(e,t){await Ee(e,t)}async function Ee(e,t){var i;const{data:n}=await _.from("gc_definitions").select("*").order("sort_order").order("created_at");e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">⚡ Game Changers</h2>
        <button id="gc-add-btn" class="btn btn-primary">+ Nouvelle carte</button>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="gc-list">
        ${(n||[]).length?(n||[]).map(r=>Bn(r)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucune carte Game Changer.</div>'}
      </div>
    </div>`,(i=document.getElementById("gc-add-btn"))==null||i.addEventListener("click",()=>Ue(null,e,t)),e.querySelectorAll("[data-edit-gc]").forEach(r=>{r.addEventListener("click",()=>{const a=(n||[]).find(g=>g.id===r.dataset.editGc);a&&Ue(a,e,t)})}),e.querySelectorAll(".btn-del-gc").forEach(r=>{r.addEventListener("click",async a=>{a.stopPropagation(),confirm("Supprimer cette carte Game Changer ?")&&(await _.from("gc_definitions").delete().eq("id",r.dataset.del),Ee(e,t))})})}function Bn(e){const t=H.find(r=>r.value===e.gc_type)||H[0],n=e.image_url?`/icons/${e.image_url}`:null,i=me(e.name||"?",n,t.label.split(" ")[0],e.effect||"",{width:130});return`<div data-edit-gc="${e.id}" style="position:relative;cursor:pointer">
    ${i}
    <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
      <button class="btn-del-gc" data-del="${e.id}"
        style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0">✕</button>
    </div>
    ${e.is_active?"":'<div style="position:absolute;top:4px;right:4px;z-index:10;background:#555;color:#fff;font-size:9px;font-weight:700;padding:2px 6px;border-radius:8px">INACTIF</div>'}
  </div>`}function Ue(e,t,n){var f,p,s,E;const{openModal:i,closeModal:r,toast:a}=n,g=!e,m=e||{name:"",gc_type:"game_changer",color:"purple",effect:"",image_url:"",sort_order:0,is_active:!0,effect_type:"BOOST_STAT",effect_params:{}},h=(()=>{const b=m.effect_params||{},v=G.find($=>$.value===(m.effect_type||"BOOST_STAT"))||G[0];return`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${v.hasValue?`<div>
        <label>VALEUR (+N)</label>
        <input id="gc-p-value" type="number" min="1" max="5" value="${b.value||2}">
      </div>`:""}
      ${v.hasCount?`<div>
        <label>NB JOUEURS</label>
        <input id="gc-p-count" type="number" min="1" max="11" value="${b.count||1}">
      </div>`:""}
      ${v.hasTarget?`<div>
        <label>CIBLE</label>
        <select id="gc-p-target">
          <option value="home" ${(b.target||"home")==="home"?"selected":""}>Mon équipe</option>
          <option value="opponent" ${b.target==="opponent"?"selected":""}>Équipe adverse</option>
        </select>
      </div>`:""}
      ${v.hasRoles?`<div>
        <label>POSTES CIBLÉS</label>
        <div style="display:flex;gap:4px;flex-wrap:wrap">
          ${Fe.map($=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555">
            <input type="checkbox" class="gc-p-role" value="${$}" ${!b.roles||b.roles.includes($)?"checked":""}> ${$}
          </label>`).join("")}
        </div>
      </div>`:""}
    </div>`})(),o=`
    <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:#1a1a2e;border-radius:12px">
      <div id="gc-modal-preview">${me(m.name||"?",m.image_url?`/icons/${m.image_url}`:null,(H.find(b=>b.value===m.gc_type)||H[0]).label.split(" ")[0],m.effect||"",{width:150})}</div>
    </div>

    <div style="display:flex;flex-direction:column;gap:12px">
      <div>
        <label>NOM</label>
        <input id="gc-name" value="${m.name}">
      </div>
      <div>
        <label>EFFET / DESCRIPTION</label>
        <textarea id="gc-effect" rows="3">${m.effect||""}</textarea>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label>TYPE</label>
          <select id="gc-type">
            ${H.map(b=>`<option value="${b.value}" ${m.gc_type===b.value?"selected":""}>${b.label}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>COULEUR</label>
          <select id="gc-color">
            ${$n.map(b=>`<option value="${b.value}" ${m.color===b.value?"selected":""}>${b.label}</option>`).join("")}
          </select>
        </div>
      </div>
      <div>
        <label>IMAGE (public/icons/gamechanger-*)</label>
        <div style="display:flex;gap:8px;align-items:center">
          <input id="gc-image-url" value="${m.image_url||""}" placeholder="gamechanger-nom.png" style="flex:1">
          <button id="btn-pick-gc-icon" class="btn btn-primary btn-sm" style="white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
        </div>
        <div id="gc-icon-picker" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label>ORDRE</label>
          <input id="gc-sort" type="number" value="${m.sort_order||0}">
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding-top:20px">
          <input type="checkbox" id="gc-active" ${m.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
          <label for="gc-active" style="cursor:pointer;font-weight:600;text-transform:none">Actif</label>
        </div>
      </div>
      <div style="border-top:1px solid #eee;padding-top:12px;margin-top:4px">
        <label style="color:#7a28b8">EFFET EN JEU</label>
        <div>
          <label>TYPE D'EFFET</label>
          <select id="gc-effect-type" style="margin-bottom:10px">
            ${G.map(b=>`<option value="${b.value}" ${(m.effect_type||"BOOST_STAT")===b.value?"selected":""}>${b.label}</option>`).join("")}
          </select>
        </div>
        <div id="gc-params-wrap">${h}</div>
      </div>
    </div>
  `;i(g?"Nouvelle carte Game Changer":`Modifier : ${m.name}`,o,`
    <button id="gc-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gc-save" class="btn btn-primary">💾 Enregistrer</button>
  `);const l=()=>{var c,y,w,B,k;const b=((c=document.getElementById("gc-name"))==null?void 0:c.value)||"?",v=((y=document.getElementById("gc-effect"))==null?void 0:y.value)||"",$=((w=document.getElementById("gc-type"))==null?void 0:w.value)||"game_changer",I=(k=(B=document.getElementById("gc-image-url"))==null?void 0:B.value)==null?void 0:k.trim(),x=H.find(A=>A.value===$)||H[0],d=document.getElementById("gc-modal-preview");d&&(d.innerHTML=me(b,I?`/icons/${I}`:null,x.label.split(" ")[0],v,{width:150}))};["gc-name","gc-effect","gc-type","gc-image-url"].forEach(b=>{var v,$;(v=document.getElementById(b))==null||v.addEventListener("input",l),($=document.getElementById(b))==null||$.addEventListener("change",l)}),(f=document.getElementById("gc-effect-type"))==null||f.addEventListener("change",()=>{const b=document.getElementById("gc-effect-type").value,v=G.find(I=>I.value===b)||G[0],$=document.getElementById("gc-params-wrap");$.innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${v.hasValue?'<div><label>VALEUR (+N)</label><input id="gc-p-value" type="number" min="1" max="5" value="2"></div>':""}
      ${v.hasCount?'<div><label>NB JOUEURS</label><input id="gc-p-count" type="number" min="1" max="11" value="1"></div>':""}
      ${v.hasTarget?'<div><label>CIBLE</label><select id="gc-p-target"><option value="home">Mon équipe</option><option value="opponent">Équipe adverse</option></select></div>':""}
      ${v.hasRoles?`<div><label>POSTES CIBLÉS</label><div style="display:flex;gap:4px;flex-wrap:wrap">${Fe.map(I=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555"><input type="checkbox" class="gc-p-role" value="${I}" checked> ${I}</label>`).join("")}</div></div>`:""}
    </div>`}),(p=document.getElementById("btn-pick-gc-icon"))==null||p.addEventListener("click",async()=>{var v;const b=document.getElementById("gc-icon-picker");if(b){if(b.style.display!=="none"){b.style.display="none";return}b.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',b.style.display="block";try{const I=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),x=Array.isArray(I)?I.filter(c=>c.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(c.name)):[];if(!x.length){b.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const d=((v=document.getElementById("gc-image-url"))==null?void 0:v.value)||"";b.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
        ${x.map(c=>`
        <div class="gc-icon-item" data-name="${c.name}"
          style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${c.name===d?"#7a28b8":"#ddd"};background:${c.name===d?"#f5f0ff":"#fff"}">
          <img src="/icons/${c.name}" style="height:44px;width:100%;object-fit:contain">
          <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
        </div>`).join("")}
      </div>`,b.querySelectorAll(".gc-icon-item").forEach(c=>{c.addEventListener("click",()=>{const y=document.getElementById("gc-image-url");y&&(y.value=c.dataset.name),b.style.display="none",l()})})}catch($){b.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${$.message}</div>`}}}),(s=document.getElementById("gc-cancel"))==null||s.addEventListener("click",()=>r()),(E=document.getElementById("gc-save"))==null||E.addEventListener("click",async()=>{var d,c,y,w,B,k,A,L,S,C,T,z,j,N;const b=G.find(P=>{var F;return P.value===(((F=document.getElementById("gc-effect-type"))==null?void 0:F.value)||"BOOST_STAT")})||G[0],v=b.hasRoles?[...document.querySelectorAll(".gc-p-role:checked")].map(P=>P.value):null,$={...b.hasValue?{value:Number((d=document.getElementById("gc-p-value"))==null?void 0:d.value)||2}:{},...b.hasCount?{count:Number((c=document.getElementById("gc-p-count"))==null?void 0:c.value)||1}:{},...b.hasTarget?{target:((y=document.getElementById("gc-p-target"))==null?void 0:y.value)||"home"}:{},...b.hasRoles?{roles:v!=null&&v.length?v:null}:{}},I={name:((B=(w=document.getElementById("gc-name"))==null?void 0:w.value)==null?void 0:B.trim())||"",effect:((A=(k=document.getElementById("gc-effect"))==null?void 0:k.value)==null?void 0:A.trim())||null,image_url:((S=(L=document.getElementById("gc-image-url"))==null?void 0:L.value)==null?void 0:S.trim())||null,gc_type:((C=document.getElementById("gc-type"))==null?void 0:C.value)||"game_changer",color:((T=document.getElementById("gc-color"))==null?void 0:T.value)||"purple",sort_order:Number((z=document.getElementById("gc-sort"))==null?void 0:z.value)||0,is_active:((j=document.getElementById("gc-active"))==null?void 0:j.checked)??!0,effect_type:((N=document.getElementById("gc-effect-type"))==null?void 0:N.value)||"BOOST_STAT",effect_params:$};if(!I.name){a("Le nom est obligatoire","error");return}const{error:x}=g?await _.from("gc_definitions").insert(I):await _.from("gc_definitions").update(I).eq("id",m.id);if(x){a(x.message,"error");return}a(g?"Carte créée ✅":"Carte modifiée ✅","success"),r(),Ee(t,n)})}async function Ln(e,{toast:t,openModal:n,closeModal:i}){await J(e,{toast:t,openModal:n,closeModal:i})}async function J(e,t){var x;const{toast:n,openModal:i,closeModal:r}=t,[{data:a,error:g},{data:m}]=await Promise.all([_.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),_.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1)]);if(g){e.innerHTML=`<p style="color:red">${g.message}</p>`;return}const h=a||[],o=h.find(d=>d.is_active),u=(m||[]).filter(d=>(d.placement_matches||0)>=1),l=u.filter(d=>(d.placement_matches||0)>=10),f=["bronze","silver","gold","platinum","diamond","master"],p={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},s={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},E={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},b={};f.forEach(d=>{b[d]=0}),l.forEach(d=>{const c=d.rank_tier||"bronze";b[c]!==void 0&&b[c]++});const v=l.length?Math.round(l.reduce((d,c)=>d+(c.mmr||1e3),0)/l.length):0;function $(d){return d?new Date(d).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function I(d){const c=new Date;return d.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(d.end_at)<c?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
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
            <div style="font-size:22px;font-weight:900">${l.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Classés (10+ matchs)</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${v}</div>
            <div style="font-size:11px;color:var(--gray-600)">MMR moyen</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(o.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${l.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${f.map(d=>{const c=b[d],y=l.length>0?Math.round(c/l.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${E[d]} ${p[d]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${y}%;background:${s[d]};border-radius:4px;transition:width 0.5s"></div>
                </div>
                <span style="width:40px;text-align:right;color:var(--gray-600)">${c} (${y}%)</span>
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
              ${h.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':h.map(d=>{const c=Math.round((new Date(d.end_at)-new Date(d.start_at))/864e5),y=new Date(d.end_at)<new Date&&!d.is_active;return`
                    <tr>
                      <td><b>${d.name}</b></td>
                      <td style="font-size:12px">${$(d.start_at)}</td>
                      <td style="font-size:12px">${$(d.end_at)}</td>
                      <td style="font-size:12px">${c} jours</td>
                      <td>${I(d)}</td>
                      <td style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn btn-ghost btn-sm" data-edit="${d.id}">✏️ Modifier</button>
                        ${d.is_active?`<button class="btn btn-ghost btn-sm" data-deactivate="${d.id}" style="color:#e67e22">⏹ Désactiver</button>`:`<button class="btn btn-primary btn-sm" data-activate="${d.id}">▶ Activer</button>`}
                        ${y?`<button class="btn btn-danger btn-sm" data-delete="${d.id}">🗑</button>`:""}
                      </td>
                    </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>`,(x=document.getElementById("create-season-btn"))==null||x.addEventListener("click",()=>{Oe(null,{toast:n,openModal:i,closeModal:r,reload:()=>J(e,t)})}),e.querySelectorAll("[data-edit]").forEach(d=>{const c=h.find(y=>y.id==d.dataset.edit);d.addEventListener("click",()=>{Oe(c,{toast:n,openModal:i,closeModal:r,reload:()=>J(e,t)})})}),e.querySelectorAll("[data-activate]").forEach(d=>{d.addEventListener("click",async()=>{const c=parseInt(d.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:y}=await _.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(y){n(y.message,"error");return}const{error:w}=await _.from("ranked_seasons").update({is_active:!0}).eq("id",c);if(w){n(w.message,"error");return}await _.from("users").update({current_season_id:c}).gt("placement_matches",0),n("Saison activée ✅","success"),J(e,t)})}),e.querySelectorAll("[data-deactivate]").forEach(d=>{d.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:c}=await _.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(d.dataset.deactivate));if(c){n(c.message,"error");return}n("Saison désactivée","success"),J(e,t)})}),e.querySelectorAll("[data-delete]").forEach(d=>{d.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:c}=await _.from("ranked_seasons").delete().eq("id",parseInt(d.dataset.delete));if(c){n(c.message,"error");return}n("Saison supprimée","success"),J(e,t)})})}function Oe(e,{toast:t,openModal:n,closeModal:i,reload:r}){const a=!!e,g=new Date().toISOString().slice(0,16),m=new Date(Date.now()+90*864e5).toISOString().slice(0,16),h=e?new Date(e.start_at).toISOString().slice(0,16):g,o=e?new Date(e.end_at).toISOString().slice(0,16):m,u=(e==null?void 0:e.name)||"";n(a?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
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
    </div>`);function l(){var b,v;const f=(b=document.getElementById("season-start"))==null?void 0:b.value,p=(v=document.getElementById("season-end"))==null?void 0:v.value,s=document.getElementById("season-duration");if(!f||!p||!s)return;const E=Math.round((new Date(p)-new Date(f))/864e5);s.textContent=E>0?`Durée : ${E} jour${E>1?"s":""}`:"⚠️ La fin doit être après le début",s.style.color=E>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var f,p,s;(f=document.getElementById("season-start"))==null||f.addEventListener("input",l),(p=document.getElementById("season-end"))==null||p.addEventListener("input",l),l(),(s=document.getElementById("season-save-btn"))==null||s.addEventListener("click",async()=>{var c,y,w;const E=(c=document.getElementById("season-name"))==null?void 0:c.value.trim(),b=(y=document.getElementById("season-start"))==null?void 0:y.value,v=(w=document.getElementById("season-end"))==null?void 0:w.value,$=document.getElementById("season-error");if(!E){$.textContent="Le nom est requis.";return}if(!b){$.textContent="La date de début est requise.";return}if(!v){$.textContent="La date de fin est requise.";return}if(new Date(v)<=new Date(b)){$.textContent="La date de fin doit être après le début.";return}const I=document.getElementById("season-save-btn");I.disabled=!0,I.textContent="Enregistrement…";const x={name:E,start_at:new Date(b).toISOString(),end_at:new Date(v).toISOString()};let d;if(a?{error:d}=await _.from("ranked_seasons").update(x).eq("id",e.id):{error:d}=await _.from("ranked_seasons").insert({...x,is_active:!1}),d){$.textContent=d.message,I.disabled=!1,I.textContent=a?"💾 Enregistrer":"✅ Créer la saison";return}t(a?"Saison modifiée ✅":"Saison créée ✅","success"),i(),r()})},50)}It(Ke);function An(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function Sn(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function ye(){document.getElementById("modal-overlay").classList.add("hidden")}const Ge={dashboard:{title:"Dashboard",fn:$t},players:{title:"Joueurs & Cartes",fn:At},clubs:{title:"Clubs",fn:Ht},"card-builder":{title:"Card Builder",fn:Zt},users:{title:"Managers",fn:nt},market:{title:"Marché des transferts",fn:it},"import-export":{title:"Import / Export CSV",fn:on},formations:{title:"Formations & Liens",fn:rn},"boosters-config":{title:"Boosters",fn:cn},"sell-price":{title:"Prix vente directe",fn:un},journal:{title:"Journal",fn:gn},tutorial:{title:"Tutoriel",fn:vn},stadiums:{title:"Stades",fn:wn},"gc-cards":{title:"Game Changers",fn:kn},"ranked-seasons":{title:"Saisons Ranked",fn:Ln}};async function se(e){document.querySelectorAll(".admin-sidebar nav a").forEach(r=>{r.classList.toggle("active",r.dataset.page===e)});const t=document.getElementById("mobile-page-select");t&&(t.value=e);const n=Ge[e]||Ge.dashboard;document.getElementById("page-title").textContent=n.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(i,{toast:An,openModal:Sn,closeModal:ye,navigate:se})}catch(r){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${r.message}</div>`,console.error(r)}}async function Cn(){var t;const{data:{session:e}}=await _.auth.getSession();e&&await He(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,r=document.getElementById("auth-error");if(r.textContent="",!n||!i){r.textContent="Remplissez tous les champs.";return}const{data:a,error:g}=await _.auth.signInWithPassword({email:n,password:i});if(g){r.textContent=g.message;return}await He(a.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await _.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",ye),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&ye()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",i=>{i.preventDefault(),se(n.dataset.page)})}),(t=document.getElementById("mobile-page-select"))==null||t.addEventListener("change",n=>{se(n.target.value)})}async function He(e){const{data:t,error:n}=await _.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(n||!t){i.textContent="Profil introuvable.";return}if(!t.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await _.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,se("dashboard")}Cn();
