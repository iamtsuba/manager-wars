-- migrations/migration_tutorial_v2_desktop_position.sql
-- Ajoute une position de popup dédiée au format desktop, indépendante de
-- celle du mobile (popup_position, déjà existante). Si non renseignée, le
-- runtime retombe sur popup_position pour le desktop aussi.

ALTER TABLE tutorial_steps_v2
  ADD COLUMN IF NOT EXISTS popup_position_desktop VARCHAR(20);

NOTIFY pgrst, 'reload schema';

SELECT 'Colonne popup_position_desktop ajoutée à tutorial_steps_v2' AS status;
