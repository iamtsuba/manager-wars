# Tutoriel Manager Wars — Tableau de Structure

> Structure complète des étapes du tutoriel interactif
> Basée sur PROJECT_SUMMARY.md § 10

---

## Conventions

| Colonne | Description |
|---------|-------------|
| **N°** | Numéro séquentiel de l'étape |
| **Nom étape** | Identifiant court (ex: `home-nav`) |
| **Page/Section** | Route SPA cible (ex: `home`, `collection`, `decks`) |
| **Élément ciblé** | Sélecteur DOM à mettre en évidence (ex: `[data-page="collection"]`) |
| **Position popup** | Où afficher le popup (ex: `top-left`, `center`, `bottom-right`) |
| **Titre popup** | Titre de la boîte de dialogue |
| **Texte popup** | Contenu explicatif (texte brut, max 200 caractères) |
| **Action utilisateur** | Ce qu'on demande au joueur (ex: `Clic sur Collection` / `Ouvrir 1 booster`) |
| **Validateur** | Condition de passage à l'étape suivante (ex: `user_id.cards.count > 0`) |
| **Mise en évidence** | Style d'highlight (ex: `glow`, `dim-overlay`, `pulse`) |
| **Skip possible** | Peut-on sauter cette étape ? (bool) |
| **Durée affichage** | Durée avant timeout/auto-skip (ms, 0 = infini) |

---

## Étapes du tutoriel

### Phase 1 : Découverte du hub (Home)

| N° | Nom | Page | Élément ciblé | Position | Titre | Texte | Action | Validateur | Highlight | Skip |
|----|------|------|---------------|----------|-------|-------|--------|-----------|-----------|-----|
| 1 | `home-welcome` | `home` | `#app` | center | 👋 Bienvenue dans Manager Wars ! | Tu as reçu 20 cartes, 3 Game Changers, 1 Formation et 10 000 crédits pour démarrer. | Explore ton app | page = `home` | none | ✗ |
| 2 | `home-nav-collection` | `home` | `[data-page="collection"]` | top | 🃏 Ta Collection | Accède ici à toutes tes cartes. Tu peux les vendre, les ajouter à tes decks, ou voir leurs stats. | Clique sur Collection | click detected | glow | ✓ |
| 3 | `home-nav-decks` | `home` | `[data-page="decks"]` | top | ⚽ Tes Decks | Construis jusqu'à 3 decks différents (11 joueurs chacun). | Clique sur Decks | click detected | glow | ✓ |
| 4 | `home-nav-boosters` | `home` | `[data-page="boosters"]` | top | 📦 Boosters | Ouvre des boosters pour obtenir de nouvelles cartes. Gratuit, payant crédits ou pub. | Clique sur Boosters | click detected | glow | ✓ |
| 5 | `home-play-buttons` | `home` | `.play-card` | center | 🎮 Modes de jeu | Lance un match contre l'IA ou un autre joueur. | Voir les modes | hover | dim-overlay | ✓ |

### Phase 2 : Collection & Gestion des cartes

| N° | Nom | Page | Élément ciblé | Position | Titre | Texte | Action | Validateur | Highlight | Skip |
|----|------|------|---------------|----------|-------|-------|--------|-----------|-----------|-----|
| 6 | `collection-intro` | `collection` | `#page-content` | center | 🃏 Ta Collection | Ici tu vois toutes tes cartes. Clique sur une carte pour voir ses stats et l'ajouter à un deck. | Explore tes cartes | page = `collection` | none | ✗ |
| 7 | `collection-filter` | `collection` | `[data-filter="job"]` | top-left | 🔍 Filtres | Tu peux filtrer par poste (GK/DEF/MIL/ATT) ou rareté. | Essaie un filtre | filter applied | pulse | ✓ |
| 8 | `collection-card-detail` | `collection` | `[data-card-id]` | center | 📊 Détails carte | Clique sur une carte pour voir ses stats, rareté, club et poste. | Clique sur une carte | detail opened | glow | ✓ |
| 9 | `collection-sell` | `collection` | `[data-action="sell"]` | bottom-right | 💰 Vendre une carte | Vends tes doublons pour des crédits. Prix selon rareté : Normal 1 000, Pépite 5 000, etc. | Clique Vendre | card sold | highlight | ✓ |

### Phase 3 : Construction des Decks

| N° | Nom | Page | Élément ciblé | Position | Titre | Texte | Action | Validateur | Highlight | Skip |
|----|------|------|---------------|----------|-------|-------|--------|-----------|-----------|-----|
| 10 | `decks-intro` | `decks` | `#page-content` | center | 📋 Construis un Deck | Crée jusqu'à 3 decks (11 joueurs + 1 formation). | Clique "Nouveau Deck" | deck created | none | ✗ |
| 11 | `decks-formation-select` | `decks` | `[data-action="select-formation"]` | top | ⚽ Choisis une Formation | Sélectionne parmi 25 formations (4-3-3, 4-4-2, 3-5-2, etc.). | Clique sur une formation | formation selected | glow | ✓ |
| 12 | `decks-pitch-drag` | `decks` | `.formation-pitch` | center | 🎯 Place tes joueurs | Glisse tes cartes joueurs sur le terrain selon la formation. Les liens (H/V) activent des bonus. | Place au moins 8 joueurs | 8 players placed | dim-overlay | ✓ |
| 13 | `decks-links` | `decks` | `.link-svg-line` | center | 🔗 Les Liens | Deux joueurs adjacents (même ligne/colonne) gagnent +5 pts. Deux joueurs du même club aussi ! | Voir les liens brillés | links visible | pulse | ✓ |
| 14 | `decks-bench` | `decks` | `.bench-row` | bottom | 🔄 Remplaçants | Ajoute des remplaçants (max 6). Tu peux les sortir pendant le match. | Glisse un remplaçant | sub added | highlight | ✓ |
| 15 | `decks-validate` | `decks` | `#validate-deck` | bottom-right | ✅ Valide le deck | Complète avec au moins 11 joueurs et valide. Tu pourras le modifier après. | Clique Valider | deck valid | glow | ✓ |

### Phase 4 : Boosters & Cartes

| N° | Nom | Page | Élément ciblé | Position | Titre | Texte | Action | Validateur | Highlight | Skip |
|----|------|------|---------------|----------|-------|-------|--------|-----------|-----------|-----|
| 16 | `boosters-intro` | `boosters` | `#page-content` | center | 📦 Tes Boosters | Ouvre des boosters pour obtenir de nouvelles cartes. Plus de cartes = plus de choix ! | Voir les boosters | page = `boosters` | none | ✗ |
| 17 | `boosters-players` | `boosters` | `[data-booster="players"]` | top-left | 🃏 Booster Joueurs | Le booster Joueurs te donne 4 cartes aléatoires. Gratuit : 1 par jour. | Ouvre un booster | booster opened | glow | ✓ |
| 18 | `boosters-rarity` | `boosters` | `.booster-animation` | center | ⭐ Rarités | Normal (blanc) → Pépite (or) → Papyte (argent) → Légende (violet). Plus rare = plus fort ! | Regarde l'animation | animation done | pulse | ✓ |
| 19 | `boosters-gc` | `boosters` | `[data-booster="game_changer"]` | top-left | ⚡ Game Changers | Les GC sont des pouvoirs uniques : Ressusciter, Double Attaque, Bouclier, etc. | Voir un GC | card shown | highlight | ✓ |

### Phase 5 : Les matchs

#### 5A : Match vs IA

| N° | Nom | Page | Élément ciblé | Position | Titre | Texte | Action | Validateur | Highlight | Skip |
|----|------|------|---------------|----------|-------|-------|--------|-----------|-----------|-----|
| 20 | `match-mode-select` | `home` | `[data-action="match-ai"]` | center | ⚽ Joue contre l'IA | Lance un match contre l'IA pour tester ton deck. 4 difficultés = 4 récompenses. | Clique "IA Facile" | match started | glow | ✗ |
| 21 | `match-deck-select` | `match` | `#deck-swipe-zone` | top | 🃏 Sélectionne ton deck | Choisis le deck que tu veux utiliser. Previsualize son terrain avant de valider. | Valide un deck | deck selected | dim-overlay | ✓ |
| 22 | `match-gc-select` | `match` | `#gc-grid` | center | ⚡ Game Changers en match | Sélectionne jusqu'à 3 GC à utiliser pendant le match. | Sélectionne 1 GC | gc selected | glow | ✓ |
| 23 | `match-terrain` | `match` | `#match-terrain-wrap` | center | 🎯 Le terrain | Ton équipe (haut) vs l'IA (bas). Les joueurs en couleur sont actifs pour cette phase. | Regarde le terrain | rendered | pulse | ✓ |
| 24 | `match-midfield` | `match` | `.match-phase-label` | top | ⚔️ Phase 1 : Milieu de terrain | Les 2 équipes s'affrontent au milieu. Le gagnant attaque. | Regarde le résultat | phase done | none | ✓ |
| 25 | `match-attack` | `match` | `#btn-action` | bottom-right | 🔥 Ton attaque | Sélectionne 3 joueurs pour attaquer. Leurs notes + les liens = ta force d'attaque. | Sélectionne 3 joueurs | attack sent | glow | ✓ |
| 26 | `match-defense` | `match` | `#btn-action` | bottom-right | 🛡️ Défense adverse | L'IA attaque. À toi de défendre avec 3 joueurs. | Sélectionne 3 joueurs | defense sent | glow | ✓ |
| 27 | `match-gc-use` | `match` | `.gc-mini` | center | ⚡ Utilise un GC | Clique sur un GC pour l'utiliser pendant une phase d'attaque/défense. | Utilise 1 GC | gc used | highlight | ✓ |
| 28 | `match-score` | `match` | `.note-display` | top | 📊 Le score | Chaque but = un point. Gagne 3-0 ou dépasse l'IA. | Remporte le match | match won | pulse | ✓ |
| 29 | `match-rewards` | `match` | `#rewards-panel` | center | 🏆 Récompenses ! | Tu as remporté des crédits ! Utilise-les pour acheter des boosters ou vendre des cartes. | Clique "OK" | accepted | glow | ✓ |

#### 5B : Match PvP (optionnel, avancé)

| N° | Nom | Page | Élément ciblé | Position | Titre | Texte | Action | Validateur | Highlight | Skip |
|----|------|------|---------------|----------|-------|-------|--------|-----------|-----------|-----|
| 30 | `match-pvp-intro` | `home` | `[data-action="match-random"]` | center | 👥 Joue contre d'autres joueurs ! | Trouve un adversaire en temps réel. Matchmaking automatique. | Clique "Match Aléatoire" | pvp started | glow | ✓ |
| 31 | `match-pvp-queue` | `match` | `#matchmaking-status` | center | ⏳ Recherche d'adversaire | En attente d'un autre joueur... Cela peut prendre 10-30 sec. | Attends l'adversaire | matched | pulse | ✓ |
| 32 | `match-pvp-sync` | `match` | `#sync-indicator` | top | 🔄 Synchronisation | Les deux joueurs se préparent. Chacun choisit ses GC indépendamment. | Attends la synchro | synced | dim-overlay | ✓ |

### Phase 6 : Marché & Social (optionnel)

| N° | Nom | Page | Élément ciblé | Position | Titre | Texte | Action | Validateur | Highlight | Skip |
|----|------|------|---------------|----------|-------|-------|--------|-----------|-----------|-----|
| 33 | `market-intro` | `market` | `#page-content` | center | 🛒 Le Marché des transferts | Achète des cartes d'autres joueurs. Vends tes doublons pour des crédits. | Explore le marché | page = `market` | none | ✓ |
| 34 | `market-buy` | `market` | `.market-listing` | top | 💳 Achète une carte | Clique sur une carte en vente pour l'acheter avec tes crédits. | Achète 1 carte | card bought | glow | ✓ |
| 35 | `market-sell` | `market` | `.mkt-tab[data-tab="mine"]` | top | 📤 Vends tes cartes | Mets en vente tes doublons pour que d'autres joueurs les achètent. | Liste 1 carte | listing created | glow | ✓ |

### Phase 7 : Classements & Stats (optionnel)

| N° | Nom | Page | Élément ciblé | Position | Titre | Texte | Action | Validateur | Highlight | Skip |
|----|------|------|---------------|----------|-------|-------|--------|-----------|-----------|-----|
| 36 | `rankings-intro` | `rankings` | `#page-content` | center | 🏆 Les Classements | Vois ton rang et celui des autres managers. Plus tu joues, plus tu montes ! | Explore les classements | page = `rankings` | none | ✓ |
| 37 | `rankings-glicko` | `rankings` | `.ranking-entry` | top | ⭐ Système de rating | Ton rating augmente si tu gagnes, baisse si tu perds. Plus tu joues, plus c'est stable. | Voir ton rating | rating visible | pulse | ✓ |

### Phase 8 : Tutoriel terminé

| N° | Nom | Page | Élément ciblé | Position | Titre | Texte | Action | Validateur | Highlight | Skip |
|----|------|------|---------------|----------|-------|-------|--------|-----------|-----------|-----|
| 38 | `tutorial-complete` | `home` | `#page-content` | center | 🎉 Tutoriel terminé ! | Tu maîtrises les bases. Continue à jouer, collectionner et monter en classement. | Clique "Commencer" | tutorial_done = true | glow | ✗ |

---

## Regroupement par type

### Mandatory (Ne pas skip)
- Steps 1, 6, 10, 16, 20, 38 (intros majeures de chaque section)

### Strongly Recommended (Skip difficile)
- Steps 2-5, 7-9, 11-15, 21-29 (mécaniques principales du jeu)

### Nice to Have (Skip facile)
- Steps 30-37 (PvP, marché, classement = contenus avancés)

---

## Données de configuration pour BDD

```sql
-- Table proposition : app.tutorial_steps
CREATE TABLE tutorial_steps (
  id SERIAL PRIMARY KEY,
  step_number INT NOT NULL,
  step_name VARCHAR(255) NOT NULL UNIQUE,
  page_route VARCHAR(50),
  dom_selector VARCHAR(255),
  popup_position VARCHAR(20),
  popup_title VARCHAR(100),
  popup_text TEXT,
  action_required VARCHAR(255),
  validator_logic VARCHAR(255),
  highlight_type VARCHAR(20),
  skip_allowed BOOLEAN DEFAULT true,
  display_duration_ms INT DEFAULT 0,
  is_mandatory BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Table proposition : user.tutorial_progress
CREATE TABLE tutorial_progress (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  current_step INT,
  completed_steps INT[] DEFAULT ARRAY[]::INT[],
  tutorial_done BOOLEAN DEFAULT false,
  last_updated_at TIMESTAMP DEFAULT NOW()
);
```

---

## Notes d'implémentation

### ✅ Déjà en place (tutorial-v3.js)
- Click blocklist pour compte démo
- Rendus réels (pas de mocks)
- Hardcoded UUIDs démo avec bypass RLS

### 🔧 À adapter
- Mapping steps 1-38 vers les appels `renderCollection()`, `openDeckBuilder()`, etc.
- Validators JS basés sur DOM ou state global
- Position des popups responsive (mobile vs desktop)

### 📱 Mobile first
- Popups centrés par défaut
- Avoid `top-left` / `top-right` sur petit écran
- Dim-overlay pour éviter accès boutons en arrière-plan

---

## Flux de skip

```
tutorial_done = false
  ├─ Si step mandatory → force affichage
  └─ Si step optional + user.skip_clicked → saute à step suivante

À terminer : user.tutorial_done = true
→ affiche message "Terminé !" + masque tutoriel
→ réactive les 4 boutons de booster (onboarding)
```
