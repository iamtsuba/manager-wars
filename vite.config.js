import { defineConfig } from 'vite'
// ═══════════════════════════════════════════════════════════
// Extrait à ajouter dans vite.config.js pour injecter la date/heure
// réelle du build dans __BUILD_TIME__ (utilisé par home.js pour le
// numéro de version visible uniquement par les admins).
// ═══════════════════════════════════════════════════════════

import { defineConfig } from 'vite'

// Format compact : 2026.06.21-1432 (année.mois.jour-heureMinute, UTC)
function buildTimeString() {
  const d = new Date()
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getUTCFullYear()}.${pad(d.getUTCMonth()+1)}.${pad(d.getUTCDate())}-${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}`
}

export default defineConfig({
  // ... ta config existante (plugins, base, etc.) reste inchangée ...

  define: {
    __BUILD_TIME__: JSON.stringify(buildTimeString()),
  },
})

export default defineConfig({
  base: '/manager-wars/',
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
