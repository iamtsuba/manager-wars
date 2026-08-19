# Intégration Tutorial Admin v2

## Étape 1 : Mettre à jour `src/admin/main.js`

Ajouter l'import en haut du fichier :

```javascript
import { renderTutorialAdminV2 } from './pages/tutorial-admin-v2.js'
```

Dans le dictionnaire `PAGES`, ajouter :

```javascript
const PAGES = {
  // ... autres pages ...
  'tutorial-v2': { 
    title: 'Tutoriel v2', 
    fn: renderTutorialAdminV2 
  },
}
```

Dans `admin.html`, ajouter le lien dans le sidebar (avant `<div class="logout">`) :

```html
<a href="#" data-page="tutorial-v2">🎓 Tutoriel v2</a>
```

---

## Étape 2 : Exécuter la migration SQL

Copier le contenu de `migration_tutorial_v2.sql` et l'exécuter dans Supabase SQL Editor.

Ou via la CLI Supabase :
```bash
supabase db push migration_tutorial_v2.sql
```

Après exécution, notifier Supabase du changement :
```bash
# Dans Supabase dashboard
SELECT * FROM tutorial_steps LIMIT 1;  -- Test que la table existe
```

---

## Étape 3 : Peupler les données initiales (optionnel)

Tu peux charger les 38 étapes du TUTORIAL_STRUCTURE.md via cette requête SQL ou l'UI admin :

```sql
INSERT INTO tutorial_steps (
  step_number, step_name, page_route, dom_selector, popup_position,
  popup_title, popup_text, action_required, validator_logic,
  highlight_type, skip_allowed, is_mandatory, sort_order
) VALUES
  (1, 'home-welcome', 'home', '#app', 'center', 
   '👋 Bienvenue dans Manager Wars !', 
   'Tu as reçu 20 cartes, 3 Game Changers, 1 Formation et 10 000 crédits pour démarrer.',
   'Explore ton app', 'page_loaded', 'none', true, true, 1),
   
  (2, 'home-nav-collection', 'home', '[data-page="collection"]', 'top',
   '🃏 Ta Collection',
   'Accède ici à toutes tes cartes. Tu peux les vendre, les ajouter à tes decks, ou voir leurs stats.',
   'Clique sur Collection', 'click_detected', 'glow', true, false, 2),
   
  -- ... autres 36 étapes ...
;
```

---

## Étape 4 : Tester l'interface

1. Aller sur `admin.html` → onglet "Tutoriel v2"
2. Créer une nouvelle étape (remplir les champs)
3. Cliquer "Créer"
4. Vérifier que l'étape apparaît dans la liste
5. Cliquer "Éditer" pour modifier
6. Tester le formulaire avec plusieurs combinaisons

---

## Notes de développement

### Champs requis
- **step_number** (unique) : 1-100
- **step_name** (unique) : identifiant court
- **popup_title** : max 150 caractères
- **popup_text** : max 500 caractères

### Listes déroulantes disponibles

**PAGE_ROUTES:**
```
home, collection, decks, boosters, match, market, rankings, matches, settings
```

**POPUP_POSITIONS:**
```
center, top, top-left, top-right, bottom, bottom-left, bottom-right
```

**HIGHLIGHT_TYPES:**
```
none, glow, pulse, dim-overlay, highlight
```

**VALIDATORS:**
```
none, page_loaded, click_detected, card_shown, booster_opened, card_bought, 
card_sold, deck_created, formation_selected, 8_players_placed, links_visible, 
sub_added, deck_valid, filter_applied, match_started, deck_selected, gc_selected, 
rendered, phase_done, attack_sent, defense_sent, gc_used, match_won, accepted,
pvp_started, matched, synced, tutorial_done
```

---

## Prochaines étapes

1. ✅ Créer la page admin (tutorial-admin-v2.js)
2. ✅ Créer la migration SQL
3. ⏭️ Intégrer dans main.js + admin.html (manuel)
4. ⏭️ Adapter tutorial-v3.js pour lire depuis `tutorial_steps` (au lieu du hardcode)
5. ⏭️ Implémenter les validateurs dynamiques
6. ⏭️ Tester sur live site

---

## Fichiers à pousser

```
migrations/migration_tutorial_v2.sql
src/admin/pages/tutorial-admin-v2.js
```

Modification requise dans :
```
src/admin/main.js     (+ import + PAGES dict)
admin.html            (+ lien sidebar)
```
