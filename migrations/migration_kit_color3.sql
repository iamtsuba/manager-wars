-- Ajout couleur 3 sur les tenues de club
ALTER TABLE clubs
  ADD COLUMN IF NOT EXISTS kit_color3 TEXT DEFAULT '#000000';

COMMENT ON COLUMN clubs.kit_color3 IS 'Troisième couleur maillot (hex) — utilisée pour les styles 3 couleurs';

NOTIFY pgrst, 'reload schema';
