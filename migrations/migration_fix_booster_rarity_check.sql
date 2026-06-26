-- Migration : corriger la contrainte CHECK sur booster_drop_rates.rarity
-- Le panel admin envoie les raretés canoniques sans accent : normal, pepite, papyte, legende
-- (et NULL pour les types non-joueur). Des lignes existantes peuvent contenir des valeurs
-- accentuées ('légende','pépite') ou vides qui violent la nouvelle contrainte.

-- 1. Supprimer l'ancienne contrainte
ALTER TABLE public.booster_drop_rates
  DROP CONSTRAINT IF EXISTS booster_drop_rates_rarity_check;

-- 2. Normaliser les valeurs existantes
UPDATE public.booster_drop_rates SET rarity = 'legende' WHERE rarity IN ('légende', 'Légende', 'legend');
UPDATE public.booster_drop_rates SET rarity = 'pepite'  WHERE rarity IN ('pépite', 'Pépite', 'pépites');
UPDATE public.booster_drop_rates SET rarity = 'papyte'  WHERE rarity IN ('Papyte');
UPDATE public.booster_drop_rates SET rarity = 'normal'  WHERE rarity IN ('Normal');
-- Filet de sécurité : toute valeur restante non conforme → NULL
UPDATE public.booster_drop_rates SET rarity = NULL
  WHERE rarity = '' OR rarity NOT IN ('normal','pepite','papyte','legende');

-- 3. Recréer la contrainte
ALTER TABLE public.booster_drop_rates
  ADD CONSTRAINT booster_drop_rates_rarity_check
  CHECK (rarity IS NULL OR rarity IN ('normal', 'pepite', 'papyte', 'legende'));
