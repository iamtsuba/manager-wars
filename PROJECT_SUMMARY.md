# Manager Wars — Sommaire Fonctionnel & Technique

> Fichier maintenu automatiquement. **Toute nouvelle fonctionnalité doit être reflétée ici.**
> Dernière mise à jour : 2026-08-19

---

## 1. Vue d'ensemble

**Manager Wars** (fmwar.com) est un jeu de stratégie de cartes footballistiques, free-to-play, mobile-first. Le joueur incarne un manager qui collecte des cartes joueurs, construit des decks, et affronte d'autres managers ou l'IA.

| Paramètre | Valeur |
|-----------|--------|
| Domaine production | fmwar.com (`main`) |
| Domaine préprod | Cloudflare Pages preview (`preprod`) |
| Repo | `iamtsuba/manager-wars` |
| Stack front | Vite + Vanilla JS |
| Backend / BDD | Supabase (PostgreSQL + RLS + Storage) |
| Hébergement | Cloudflare Pages |
| Référence design | GDD v1.0 (Juin 2026) |

---

## 2. Architecture front-end

### 2.1 SPA Router (`src/app.js`)

Application mono-page avec un shell rendu **une seule fois** (top-nav + bottom-nav), et un `#page-content` rechargé à chaque navigation via `navigate(page, params)`.

**Pages disponibles :**

| Route | Fichier | Description |
|-------|---------|-------------|
| `home` | `src/home/home.js` | Hub central — accès rapide à toutes les sections |
| `collection` | `src/collection/collection.js` | Galerie de toutes les cartes possédées |
| `decks` | `src/decks/decks.js` | Construction et gestion des decks |
| `boosters` | `src/boosters/boosters.js` | Achat et ouverture de boosters |
| `match` (IA) | `src/match/match-ia.js` | Match contre l'IA (4 difficultés) |
| `match` (random) | `src/match/match-random.js` | Match PvP en temps réel |
| `market` | `src/market/market.js` | Marché des transferts entre joueurs |
| `rankings` | `src/rankings/rankings.js` | Classements |
| `matches` | `src/matches/matches.js` | Historique des matchs |

### 2.2 Flux d'authentification

```
index.html
  └─ init() [app.js]
       ├─ Pas de session → renderAuth()      [src/auth/auth.js]
       ├─ Session sans profil → renderSetup() [src/auth/setup.js]
       └─ Session + profil → launchApp() → renderAppShell() + renderPage()
```

**Setup (3 étapes) :** Pseudo unique → Nom de club unique → Logo 2 couleurs + Récompenses de démarrage (20 cartes joueurs, 3 GC, 1 carte Formation, 10 000 crédits).

---

## 3. Système de cartes

### 3.1 Types de cartes

| Type | Description | Couleur/Style |
|------|-------------|---------------|
| **Joueur** | Carte principale du jeu | Bordure selon rareté |
| **Formation** | Schéma tactique (25 formations FUT17) | Vert terrain |
| **Game Changer (GC)** | Carte de pouvoir éphémère | Violet `#7a28b8` ou bleu `#00bcd4` |
| **Game Helper** | Aide de jeu (orange, éphémère) | Orange |

### 3.2 Raretés

| Rareté | Bordure | Règle d'attribution |
|--------|---------|---------------------|
| Normal | Blanc `#cccccc` | Défaut |
| Pépite (or) | `#D4A017` | Joueur < 18 ans |
| Papyte (argent) | `#909090` | Joueur > 35 ans |
| Légende | Violet `#7a28b8` | Attribution manuelle (admin) |

### 3.3 Postes et couleurs intérieures

| Poste | Couleur |
|-------|---------|
| GK | `#111111` (noir) |
| DEF | `#bb2020` (rouge) |
| MIL | `#D4A017` (jaune) |
| ATT | `#1A6B3C` (vert) |

### 3.4 Rendu des cartes

- **`src/lib/cardDesign.js`** — Chargement config depuis `card_design_components` + `card_design_visibility` (tables Supabase), accès synchrone avec préchargement fire-and-forget.
- **`src/components/card.js`** — Rendu HTML SVG d'une carte joueur (étoile note, couleurs poste, rareté).
- **`src/lib/portrait.js`** — Mapping pays → continent (66 pays), portraits depuis Supabase Storage `faces/`.
- Tête/portrait : convention `{peau}-{cheveux}-{longueur}.jpg`, chauve → `{peau}-chauve-rase.jpg`.

---

## 4. Système de boosters (`src/boosters/`)

### 4.1 Types de boosters (configurables via admin)

4 types principaux configurés dans `booster_configs` (Supabase) :
- **Joueurs** (payant crédits ou pub gratuite)
- **Game Changer**
- **Formation**
- **Mixte** (taux de drop par `booster_drop_rates`)

### 4.2 Moteur de tirage (`booster-engine.js`)

```
loadActiveBoosters() → booster_configs + booster_drop_rates
rollDropRate(rates)   → tirage pondéré selon %
drawCard()            → résolution en vraie carte Supabase
```

Probabilités natives (fallback si pas de taux DB) :
- 90% Normal (note 1-5) · 8% Normal (note 6-10) · 1.5% Pépite/Papyte · 0.5% Légende

### 4.3 Animation ouverture booster

Animation FIFA-style avec défilement des cartes, détection des doublons, et comptage des rarités.

---

## 5. Système de match

### 5.1 Match vs IA (`src/match/match-ia.js`)

4 niveaux de difficulté : Facile (500 cr.) / Moyen (1 000 cr.) / Difficile (1 500 cr.) / Club (2 500 cr.)

Flux :
1. Sélection deck + choix GC → `loadMatchSetup()` [match-shared.js]
2. Génération équipe IA selon difficulté
3. Phases de jeu : **milieu de terrain** → **attaque** ↔ **défense** (alternance)
4. Calcul via `calcMidfieldDuel`, `calcAttack`, `calcDefense` [game-logic.js]
5. Récompenses crédits en fin de match

### 5.2 Match PvP en temps réel (`src/match/match-random.js` + `match-pvp.js`)

- Matchmaking via RPC `try_matchmake` (Supabase)
- Synchronisation état via Realtime Postgres Changes (`matches.game_state`)
- Verrou d'initialisation : seul `p1` (home) écrit l'état initial, `p2` attend
- Sélection GC avant match (phase `gc-select`)
- Phases : `gc-select` → `reveal` → `midfield` → alternance attack/defense → `finished`

### 5.3 Logique de jeu (`src/match/game-logic.js`)

- Grille 3 colonnes × 4 lignes
- **Liens H** (même ligne, colonnes adjacentes) et **V** (même colonne, lignes adjacentes) → bonus +5 pts par lien actif
- Liens de club : +5 pts si 2+ joueurs du même club dans la sélection
- GC_ENGINE : effets BOOST_STAT, DEBUFF_STAT, GRAY_PLAYER, REVIVE_PLAYER, REMOVE_GOAL, ADD_GOAL_DRAW, ADD_SUB, CUSTOM

### 5.4 Formations (`src/match/formation-links.js`)

25 formations FUT17 intégrées (ex. `'4-3-3 (3)'`, `'4-1-2-1-2 (2)'`) avec :
- `FORMATION_LINKS` : liens entre positions par défaut
- `FORMATION_POSITIONS` : coordonnées terrain de chaque position
- Override possible via table `formation_links_overrides` (admin)

### 5.5 Match ami (`src/match/match-friend.js`)

Match en lobby privé entre amis (via `friend_match_invites`).

### 5.6 Mini-ligues (`src/match/match-minileague.js` + `src/mini-league/mini-league.js`)

Tournois en ligue fermée entre un groupe de managers.

---

## 6. Cartes évolutives (`src/match/evolutive-cards.js`)

Cartes joueurs pouvant évoluer selon les performances en match. Migration `migration_evolutive_cards.sql`.

---

## 7. Système de classement ranked (`src/ranked/`)

- **Glicko-2** (`glicko2.js`) : algorithme de rating probabiliste
- **`ranked.js`** : affichage du classement, saisons, tiers de récompenses
- Tables : `ranked_seasons`, `season_reward_tiers`, `pending_rewards`

---

## 8. Marché des transferts (`src/market/market.js`)

- Achat / vente de cartes entre joueurs
- Table `market_listings` (status: active / sold)
- Vente directe au prix fixe selon rareté : Normal 1 000 cr. / Pépite 5 000 cr. / Papyte 5 000 cr. / Légende 10 000 cr.

---

## 9. Amis & social (`src/friends/friends.js`)

- Système d'amitié (`friendships`)
- Invitations à des matchs amicaux (`friend_match_invites`)

---

## 10. Tutoriel interactif (`src/tutorial/`)

Système d'onboarding en plusieurs étapes avec compte démo partagé :
- UUID démo : `00000000-0000-4000-8000-000000000001`
- UUID deck démo : `00000000-0000-4000-8000-0000dec00000`
- Appelle les vraies fonctions de rendu (`renderCollection`, `openDeckBuilder`) pour une fidélité pixel-perfect
- Bloque les mutations sur le compte démo (capture phase click blocklist)
- Fichier actif : `tutorial-v3.js` (preprod)

**Onboarding "Premiers pas" :**
1. Bouton tutoriel (toujours actif, obligatoire en premier)
2. 4 boutons boosters numérotés (activés uniquement après `tutorial_done = true`)

---

## 11. Base de données Supabase

### 11.1 Tables principales

| Table | Rôle |
|-------|------|
| `users` | Profils managers (pseudo, club, crédits, niveau) |
| `players` | Référentiel joueurs (stats, rareté, poste) |
| `clubs` | Clubs de football |
| `cards` | Cartes possédées par les managers |
| `deck_cards` | Composition des decks |
| `matches` | Matchs joués (IA + PvP) avec `game_state` JSON |
| `market_listings` | Annonces du marché |
| `booster_configs` | Configuration des boosters |
| `booster_drop_rates` | Taux de drop par booster |
| `gc_definitions` | Définitions des cartes Game Changer |
| `formation_links_overrides` | Liens de formation personnalisés |
| `card_design_components` | Config visuelle des cartes (composants) |
| `card_design_visibility` | Visibilité des composants carte |
| `app_feature_flags` | Feature flags toggleables |
| `season_reward_tiers` | Paliers de récompenses par saison ranked |
| `pending_rewards` | Récompenses en attente de distribution |
| `mini_league_members` | Membres des mini-ligues |
| `matchmaking_queue` | File d'attente PvP |
| `friendships` | Relations d'amitié |
| `friend_match_invites` | Invitations matchs amicaux |
| `patch_notes` | Notes de mise à jour (affichées in-game) |

### 11.2 Règles RLS importantes

- `deck_cards` : RLS strict par owner → RPC `get_deck_for_match` (SECURITY DEFINER) pour accès cross-user en PvP
- `storage.objects` : politique SELECT requise pour que `.list()` retourne des résultats

### 11.3 Pièges connus

- `upsert()` → préférer `update()` ciblé (contrainte NOT NULL sur INSERT partiel)
- Après création table/RPC : `NOTIFY pgrst, 'reload schema'` obligatoire
- Variables PL/pgSQL : préfixer avec `v_` pour éviter ambiguïté colonne/variable
- `CREATE POLICY IF NOT EXISTS` invalide → utiliser bloc `DO $$`
- Encodage UTF-8 obligatoire (fichiers Python avec `encoding='utf-8', newline='\n'`)

---

## 12. Panel d'administration (`admin.html` + `src/admin/`)

### 12.1 Pages admin

| Page | Fichier | Fonction |
|------|---------|----------|
| Dashboard | `dashboard.js` | Stats globales (joueurs, clubs, managers, cartes, matchs) |
| Joueurs / Cartes | `players.js` | CRUD joueurs + encodage nom |
| Clubs | `clubs.js` | CRUD clubs |
| Card Builder | `card-builder.js` | Preview temps réel des cartes |
| Card Design Editor | `card-design-editor.js` | Config visuelle composants carte |
| Managers | `users.js` | Gestion utilisateurs + toggle admin |
| Marché | `market.js` | Surveillance annonces |
| Import/Export CSV | `import-export.js` | Import masse joueurs |
| Formations & Liens | `formations.js` | Config liens entre positions par formation |
| Boosters Config | `boosters-config.js` | Configuration boosters + taux de drop |
| Game Changers | `gc-cards.js` | CRUD cartes GC (effets, couleurs, images) |
| Stadiums | `stadiums.js` | Gestion des stades |
| Ranked Seasons | `ranked-seasons.js` | Gestion des saisons ranked |
| Sell Price Config | `sell-price-config.js` | Grille de prix de vente |
| Solo Mode | `solo-mode.js` | Configuration mode solo |
| Tutorial Admin | `tutorial-admin.js` | Gestion étapes tutoriel |
| Journal | `journal.js` | Patch notes |

---

## 13. Palette de couleurs & design system

| Token | Valeur | Usage |
|-------|--------|-------|
| Vert principal | `#1A6B3C` | Brand, ATT, nav active |
| Jaune / Or | `#D4A017` | Pépite, MIL, accents |
| Argent | `#909090` | Papyte |
| Violet | `#7a28b8` | Légende, GC purple |
| Bleu clair | `#00bcd4` | GC light_blue |
| Rouge | `#bb2020` | DEF |
| Noir | `#111111` | GK |

Thème clair/sombre toggleable (persisté en `localStorage` + colonne `users.theme`).

---

## 14. Fichiers clés

```
src/
├── app.js                    # Router SPA + state global
├── auth/
│   ├── auth.js               # Login / Register
│   └── setup.js              # Onboarding profil + récompenses démarrage
├── home/home.js              # Hub central
├── collection/collection.js  # Galerie cartes
├── decks/decks.js            # Deck builder (terrain SVG)
├── boosters/
│   ├── boosters.js           # UI + ouverture booster
│   └── booster-engine.js     # Moteur de tirage DB
├── match/
│   ├── game-logic.js         # Calculs (liens, attaque, défense, GC)
│   ├── formation-links.js    # 25 formations + positions
│   ├── match-shared.js       # Rendu commun IA+PvP (terrain SVG, GC, subs)
│   ├── match-ia.js           # Match vs IA
│   ├── match-pvp.js          # Match PvP (logique)
│   ├── match-random.js       # Match PvP (entry + matchmaking)
│   ├── match-friend.js       # Match ami
│   ├── match-minileague.js   # Match mini-ligue
│   ├── match-engine.js       # Moteur générique
│   └── evolutive-cards.js    # Cartes évolutives
├── market/market.js          # Marché des transferts
├── rankings/rankings.js      # Classements
├── ranked/
│   ├── glicko2.js            # Algorithme rating
│   └── ranked.js             # UI ranked
├── friends/friends.js        # Social / amis
├── mini-league/mini-league.js # Mini-ligues
├── tutorial/tutorial-v3.js   # Tutoriel interactif (actif)
├── settings/settings.js      # Paramètres utilisateur
├── lib/
│   ├── supabase.js           # Client Supabase
│   ├── cardDesign.js         # Config visuelle cartes (DB)
│   ├── portrait.js           # Système portraits (pays → continent)
│   ├── sound.js              # Sons du jeu
│   └── featureFlags.js       # Feature flags
└── components/
    ├── card.js               # Rendu HTML carte joueur
    ├── player-card.js        # Variante carte joueur
    ├── special-cards.js      # GC, Formation, Game Helper
    ├── avatar.js             # Avatar manager
    └── silhouette.js         # Silhouette joueur
```

---

## 15. Workflows de déploiement

```
Développement → push sur `preprod` → Cloudflare Pages preview
Production    → merge vers `main` (sur instruction explicite uniquement)
```

**Checklist avant chaque push GitHub API :**
1. Fetch SHA courant (`?ref=preprod`)
2. Patch fichier via Python `str.replace` (pas de heredoc bash)
3. Validation `node --check fichier.js`
4. Base64 `-w0`
5. PUT vers API GitHub

---

## 16. Fonctionnalités en cours / à venir

| Fonctionnalité | État |
|----------------|------|
| GC_ENGINE en PvP | `match-pvp.js` affiche les GC mais n'applique pas encore les effets réels |
| Upload portraits têtes | 52 PNGs en attente (Storage `assets/tetes/`) |
| AdSense | Rejeté (SPA non indexable) — approche redirect en cours |
| APK Android | WebView wrapper — en attente finalisation |
