-- migrations/migration_tutorial_v2_dim_overlay.sql
-- Ajoute une colonne dim_overlay (BOOLEAN) indépendante de highlight_type,
-- pour permettre de griser l'écran indépendamment du style d'anneau
-- (glow/pulse/highlight) appliqué à l'élément ciblé.

ALTER TABLE tutorial_steps_v2
  ADD COLUMN IF NOT EXISTS dim_overlay BOOLEAN DEFAULT false;

NOTIFY pgrst, 'reload schema';

SELECT 'Colonne dim_overlay ajoutée à tutorial_steps_v2' AS status;
