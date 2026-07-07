import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'

// Génère public/faces-manifest.json avant chaque build
function generateFacesManifest() {
  const facesDir = path.resolve(__dirname, 'public/faces')
  const manifest = {}
  if (fs.existsSync(facesDir)) {
    for (const folder of fs.readdirSync(facesDir).sort()) {
      const folderPath = path.join(facesDir, folder)
      if (fs.statSync(folderPath).isDirectory()) {
        manifest[folder] = fs.readdirSync(folderPath)
          .filter(f => f.endsWith('.png'))
          .sort()
      }
    }
  }
  fs.writeFileSync(
    path.resolve(__dirname, 'public/faces-manifest.json'),
    JSON.stringify(manifest, null, 2)
  )
  const total = Object.values(manifest).reduce((s, v) => s + v.length, 0)
  console.log(`✓ faces-manifest.json généré : ${total} fichiers`)
}

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
  plugins: [
    {
      name: 'generate-faces-manifest',
      buildStart() { generateFacesManifest() },
    }
  ],
  base: '/',
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
