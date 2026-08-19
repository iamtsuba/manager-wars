# Snippets d'intégration exact pour Tutorial Admin v2

## 1. À ajouter dans `src/admin/main.js`

### 1a. En haut du fichier (après les autres imports)

```javascript
// ── Ajouter cet import ──
import { renderTutorialAdminV2 } from './pages/tutorial-admin-v2.js'
```

### 1b. Dans le dictionnaire `PAGES` (avant la dernière accolade)

Trouver :
```javascript
const PAGES = {
  dashboard:    { title: 'Dashboard',          fn: pageDashboard },
  players:      { title: 'Joueurs & Cartes',   fn: pagePlayers },
  // ... autres ...
  'gc-cards':   { title: 'Game Changers',      fn: renderGCCards },
}
```

Remplacer par :
```javascript
const PAGES = {
  dashboard:    { title: 'Dashboard',          fn: pageDashboard },
  players:      { title: 'Joueurs & Cartes',   fn: pagePlayers },
  clubs:        { title: 'Clubs',              fn: pageClubs },
  'card-builder':{ title: 'Card Builder',      fn: pageCardBuilder },
  users:        { title: 'Managers',           fn: pageUsers },
  market:       { title: 'Marché des transferts', fn: pageMarket },
  'import-export': { title: 'Import / Export CSV', fn: pageImportExport },
  formations:          { title: 'Formations & Liens',  fn: pageFormations },
  'boosters-config': { title: 'Boosters',              fn: renderBoostersConfig },
  'gc-cards':         { title: 'Game Changers',        fn: renderGCCards },
  'tutorial-v2':      { title: '🎓 Tutoriel v2',      fn: renderTutorialAdminV2 },  // ← AJOUTER CETTE LIGNE
}
```

---

## 2. À ajouter dans `admin.html`

### 2a. Dans le sidebar (balise `<nav>`)

Trouver :
```html
<nav>
  <a href="#" data-page="dashboard"       class="active">📊 Dashboard</a>
  <a href="#" data-page="players">        🃏 Joueurs / Cartes</a>
  <!-- ... autres links ... -->
  <a href="#" data-page="gc-cards">⚡ Game Changers</a>
</nav>
```

Ajouter avant `</nav>` :
```html
      <a href="#" data-page="tutorial-v2">🎓 Tutoriel v2</a>
```

Résultat :
```html
<nav>
  <a href="#" data-page="dashboard"       class="active">📊 Dashboard</a>
  <a href="#" data-page="players">        🃏 Joueurs / Cartes</a>
  <a href="#" data-page="clubs">          🏟️ Clubs</a>
  <!-- ... autres ... -->
  <a href="#" data-page="gc-cards">⚡ Game Changers</a>
  <a href="#" data-page="tutorial-v2">🎓 Tutoriel v2</a>
</nav>
```

---

## 3. Fichiers à créer/copier

Copier ces deux fichiers :

**`src/admin/pages/tutorial-admin-v2.js`**
```
← Le fichier tutorial-admin-v2.js fourni
```

**`migrations/migration_tutorial_v2.sql`**
```
← Le fichier migration_tutorial_v2.sql fourni
```

---

## 4. Exécuter la migration

Via le dashboard Supabase :
1. Aller à **SQL Editor**
2. **Create a new query**
3. Copier-coller le contenu de `migrations/migration_tutorial_v2.sql`
4. Cliquer **Run**

Ou via CLI :
```bash
supabase db push migrations/migration_tutorial_v2.sql
```

---

## 5. Vérifier que tout fonctionne

```sql
-- Tester dans Supabase SQL Editor
SELECT * FROM tutorial_steps LIMIT 1;
SELECT * FROM tutorial_progress LIMIT 1;
```

Les deux requêtes doivent retourner des résultats vides (tables créées mais vides).

---

## 6. Tester sur le site admin

1. Accéder à `admin.html`
2. Se connecter avec compte admin
3. Cliquer sur **"🎓 Tutoriel v2"** dans le sidebar
4. Créer une étape de test :
   - N° : 1
   - Nom : test-step
   - Titre : Test Step
   - Texte : Ceci est un test
   - Cliquer **Créer**
5. L'étape doit apparaître dans la liste en dessous

---

## 7. Ordre recommandé de fusion

```
1. Push migration_tutorial_v2.sql → migrations/
2. Push tutorial-admin-v2.js → src/admin/pages/
3. Merge en preprod → Exécuter la migration
4. Modifier src/admin/main.js (import + PAGES dict)
5. Modifier admin.html (sidebar link)
6. Push les modifications
7. Tester sur admin.html
```

---

## Checklist pour Thomas

- [ ] Fichiers tutorial-admin-v2.js + migration créés
- [ ] Migration exécutée dans Supabase
- [ ] Import ajouté dans main.js
- [ ] Page ajoutée au dictionnaire PAGES
- [ ] Link ajouté au sidebar admin.html
- [ ] Push de main.js + admin.html vers preprod
- [ ] Test : création d'une étape via admin
- [ ] Test : édition d'une étape
- [ ] Test : suppression d'une étape
- [ ] Données initiales peuplées (38 étapes du TUTORIAL_STRUCTURE.md)
