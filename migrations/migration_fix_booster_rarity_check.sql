-- Migration : corriger la contrainte CHECK sur booster_drop_rates.rarity
-- Le panel admin envoie les raretés canoniques sans accent : normal, pepite, papyte, legende
-- (et NULL pour les types non-joueur comme formation / game_changer / game_helper).
-- L'ancienne contrainte rejetait certaines de ces valeurs (ex: 'papyte' ou NULL).

-- 1. Supprimer l'ancienne contrainte si elle existe
ALTER TABLE public.booster_drop_rates
  DROP CONSTRAINT IF EXISTS booster_drop_rates_rarity_check;

-- 2. Recréer la contrainte avec les valeurs canoniques + NULL autorisé
ALTER TABLE public.booster_drop_rates
  ADD CONSTRAINT booster_drop_rates_rarity_check
  CHECK (rarity IS NULL OR rarity IN ('normal', 'pepite', 'papyte', 'legende'));
