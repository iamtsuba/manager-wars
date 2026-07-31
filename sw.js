// sw.js — Manager Wars
//
// IMPORTANT : ce fichier contenait auparavant un import vers un script tiers
// (réseau publicitaire "push notification", domaine 3nbf4.com), non lié à
// l'application et jamais enregistré volontairement dans le code source.
// Ce genre de Service Worker peut intercepter les requêtes réseau et servir
// des ressources depuis son propre cache indéfiniment, masquant ainsi tout
// nouveau déploiement (CSS/JS) tant qu'il reste actif sur l'appareil.
//
// Ce fichier le remplace par un Service Worker inoffensif qui :
//  1. Prend immédiatement le contrôle (skipWaiting + clients.claim)
//  2. Supprime tous les caches existants (y compris ceux du script tiers)
//  3. Se désenregistre lui-même
// Résultat : les appareils ayant déjà l'ancien SW installé le remplacent
// automatiquement par celui-ci au prochain chargement, qui nettoie tout
// puis disparaît — l'app repasse alors en chargement réseau normal.

self.addEventListener('install', (event) => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.map((key) => caches.delete(key)))
      await self.clients.claim()
      await self.registration.unregister()
      const clientsList = await self.clients.matchAll({ type: 'window' })
      clientsList.forEach((client) => client.navigate(client.url))
    })()
  )
})
