import { defineConfig } from 'vite'

// Format compact : 2026.06.21-1432 (année.mois.jour-heureMinute, UTC)
// Utilisé pour afficher un numéro de version (build) visible uniquement
// par les admins sur la page d'accueil (voir home.js / APP_VERSION).
function buildTimeString() {
  const d = new Date()
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getUTCFullYear()}.${pad(d.getUTCMonth()+1)}.${pad(d.getUTCDate())}-${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}`
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
