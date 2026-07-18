/**
 * cookie-consent.js — Bandeau de consentement cookies (RGPD).
 * Réutilisable sur toutes les pages publiques + l'app.
 * Doit être chargé APRÈS le stub gtag('consent','default',...) présent
 * dans le <head> de chaque page (avant le script AdSense).
 */
(function () {
  var KEY = 'mw_cookie_consent'

  function getStored () {
    try { return JSON.parse(localStorage.getItem(KEY)) } catch (e) { return null }
  }

  function applyConsent (payload) {
    if (typeof gtag !== 'function') return
    var granted = payload.mode === 'all'
    var analytics = payload.mode === 'custom' ? !!payload.analytics : granted
    var ads = payload.mode === 'custom' ? !!payload.ads : granted
    gtag('consent', 'update', {
      ad_storage: ads ? 'granted' : 'denied',
      ad_user_data: ads ? 'granted' : 'denied',
      ad_personalization: ads ? 'granted' : 'denied',
      analytics_storage: analytics ? 'granted' : 'denied'
    })
  }

  var existing = getStored()
  if (existing) { applyConsent(existing); return }

  function injectBanner () {
    var wrap = document.createElement('div')
    wrap.id = 'mw-cookie-banner'
    wrap.innerHTML =
      '<style>' +
      '#mw-cookie-banner{position:fixed;left:16px;right:16px;bottom:16px;max-width:640px;margin:0 auto;' +
        'background:#fff;color:#1a1a1a;border-radius:16px;box-shadow:0 12px 40px rgba(0,0,0,0.28);' +
        'padding:18px 20px;font-family:\'Inter\',system-ui,sans-serif;z-index:99999;display:flex;gap:14px;align-items:flex-start}' +
      '#mw-cookie-banner .mw-ico{font-size:22px;flex-shrink:0;line-height:1}' +
      '#mw-cookie-banner h3{font-size:15px;font-weight:800;margin:0 0 4px}' +
      '#mw-cookie-banner p{font-size:13px;line-height:1.5;color:#555;margin:0 0 12px}' +
      '#mw-cookie-banner a{color:#1A6B3C;text-decoration:underline}' +
      '#mw-cookie-banner .mw-btns{display:flex;gap:10px;flex-wrap:wrap;align-items:center}' +
      '#mw-cookie-banner button{cursor:pointer;font-family:inherit;font-size:13px;font-weight:700;border-radius:10px;padding:9px 16px;border:none}' +
      '#mw-cookie-banner .mw-accept{background:#0d3d1e;color:#fff}' +
      '#mw-cookie-banner .mw-essential{background:#fff;color:#1a1a1a;border:1px solid #ddd}' +
      '#mw-cookie-banner .mw-custom{background:none;color:#555;text-decoration:underline;padding:9px 4px}' +
      '#mw-custom-panel{display:none;margin-top:14px;border-top:1px solid #eee;padding-top:14px}' +
      '#mw-custom-panel .mw-row{display:flex;align-items:center;justify-content:space-between;padding:8px 0;gap:12px}' +
      '#mw-custom-panel .mw-row .mw-row-label{font-size:13px;font-weight:600}' +
      '#mw-custom-panel .mw-row small{display:block;color:#888;font-size:11px;font-weight:400;margin-top:2px}' +
      '@media (max-width:600px){ #mw-cookie-banner{flex-direction:column;bottom:0;left:0;right:0;border-radius:16px 16px 0 0;max-width:none} }' +
      '</style>' +
      '<div class="mw-ico">🍪</div>' +
      '<div style="flex:1;min-width:0">' +
        '<h3>Nous utilisons des cookies</h3>' +
        '<p>Les cookies essentiels sont nécessaires au fonctionnement du site (authentification, session). Avec votre accord, nous utilisons aussi des cookies publicitaires et analytiques pour améliorer votre expérience. <a href="/confidentialite.html">En savoir plus</a></p>' +
        '<div class="mw-btns">' +
          '<button class="mw-accept" id="mw-accept-all">Tout accepter</button>' +
          '<button class="mw-essential" id="mw-essential-only">Essentiels uniquement</button>' +
          '<button class="mw-custom" id="mw-customize">Personnaliser</button>' +
        '</div>' +
        '<div id="mw-custom-panel">' +
          '<div class="mw-row"><div class="mw-row-label">Essentiels<small>Toujours actifs — nécessaires au site</small></div><input type="checkbox" checked disabled></div>' +
          '<div class="mw-row"><div class="mw-row-label">Analytiques<small>Mesure d\'audience anonymisée</small></div><input type="checkbox" id="mw-cb-analytics" checked></div>' +
          '<div class="mw-row"><div class="mw-row-label">Publicité<small>Annonces personnalisées (Google AdSense)</small></div><input type="checkbox" id="mw-cb-ads" checked></div>' +
          '<div class="mw-btns" style="margin-top:8px"><button class="mw-accept" id="mw-save-custom">Enregistrer mes choix</button></div>' +
        '</div>' +
      '</div>'
    document.body.appendChild(wrap)

    function save (payload) {
      localStorage.setItem(KEY, JSON.stringify(payload))
      applyConsent(payload)
      wrap.remove()
    }
    document.getElementById('mw-accept-all').addEventListener('click', function () { save({ mode: 'all' }) })
    document.getElementById('mw-essential-only').addEventListener('click', function () { save({ mode: 'essential' }) })
    document.getElementById('mw-customize').addEventListener('click', function () {
      document.getElementById('mw-custom-panel').style.display = 'block'
    })
    document.getElementById('mw-save-custom').addEventListener('click', function () {
      save({
        mode: 'custom',
        analytics: document.getElementById('mw-cb-analytics').checked,
        ads: document.getElementById('mw-cb-ads').checked
      })
    })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectBanner)
  } else {
    injectBanner()
  }
})()
