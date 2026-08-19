# Rule — Maintien du sommaire `PROJECT_SUMMARY.md`

## Objectif

À chaque nouvelle fonctionnalité ou modification structurante du projet **Manager Wars**, le fichier `PROJECT_SUMMARY.md` (racine du repo, branche `preprod`) **doit être mis à jour** en même temps que le code.

---

## Quand mettre à jour le sommaire ?

Mettre à jour `PROJECT_SUMMARY.md` dès que l'une des situations suivantes se présente :

| Situation | Section(s) à mettre à jour |
|-----------|---------------------------|
| Nouvelle page / route SPA | §2.1 Table des pages |
| Nouveau fichier source significatif | §14 Arbre des fichiers clés |
| Nouvelle table Supabase | §11.1 Tables principales |
| Nouvelle migration SQL | §11.1 + §16 si fonctionnalité liée |
| Nouveau type de carte | §3.1 Types de cartes |
| Nouveau type de booster | §4.1 Types de boosters |
| Nouvelle page admin | §12.1 Pages admin |
| Nouvelle fonctionnalité de match (mode, phase, GC effect) | §5.x Système de match |
| Fonctionnalité "en cours" livrée | §16 Fonctionnalités → marquer comme terminé |
| Nouvelle fonctionnalité commencée | §16 Fonctionnalités → ajouter ligne |
| Changement de palette ou design system | §13 Palette de couleurs |
| Nouveau workflow de déploiement | §15 Workflows |

---

## Comment mettre à jour ?

### Workflow standard (GitHub API)

```bash
# 1. Fetch SHA du fichier courant sur preprod
SHA=$(curl -s -H "Authorization: token $TOKEN" \
  "https://api.github.com/repos/iamtsuba/manager-wars/contents/PROJECT_SUMMARY.md?ref=preprod" \
  | python3 -c "import json,sys; print(json.load(sys.stdin)['sha'])")

# 2. Modifier PROJECT_SUMMARY.md localement

# 3. Encoder en base64
B64=$(base64 -w0 PROJECT_SUMMARY.md)

# 4. Push
curl -s -X PUT \
  -H "Authorization: token $TOKEN" \
  -H "Content-Type: application/json" \
  "https://api.github.com/repos/iamtsuba/manager-wars/contents/PROJECT_SUMMARY.md" \
  -d "{\"message\": \"docs: mise à jour sommaire — [description courte]\", \"content\": \"$B64\", \"sha\": \"$SHA\", \"branch\": \"preprod\"}"
```

### Format du message de commit

```
docs: mise à jour sommaire — [nom de la fonctionnalité]
```

Exemples :
- `docs: mise à jour sommaire — ajout mini-ligues`
- `docs: mise à jour sommaire — GC_ENGINE PvP actif`
- `docs: mise à jour sommaire — nouvelle table stadiums`

---

## Règles de rédaction

1. **Concision** — chaque ligne de tableau doit tenir en moins de 80 caractères.
2. **Présent** — décrire l'état actuel, pas l'historique des changements.
3. **Date** — mettre à jour la ligne `Dernière mise à jour` en en-tête.
4. **Section §16** — toujours garder cette section à jour : c'est le radar des fonctionnalités en cours.
5. **Ne jamais supprimer** les sections existantes sans raison — ajouter ou modifier seulement.

---

## Rappel : règles du projet

- Toujours travailler sur `preprod` — **jamais** pousser sur `main` sans instruction explicite de Thomas.
- Valider JS avec `node --check` avant tout push.
- Ne jamais réutiliser un SHA fetchté dans un push précédent.
