import { defineConfig } from 'vite'

// Format compact : 2026.06.21-1432 (année.mois.jour-heureMinute, heure de Paris)
// Utilisé pour afficher un numéro de version (build) visible uniquement
// par les admins sur la page d'accueil (voir home.js / APP_VERSION).
function buildTimeString() {
  const parts = new Intl.DateTimeFormat('fr-FR', {
    timeZone: 'Europe/Paris',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date())
  const get = (type) => parts.find(p => p.type === type)?.value || '00'
  return `${get('year')}.${get('month')}.${get('day')}-${get('hour')}${get('minute')}`
}

export default defineConfig({
  base: '/manager-wars/',
  define: {
    __BUILD_TIME__: JSON.stringify(buildTimeString()),
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        admin: 'admin.html'
      }
    }
  }
})
