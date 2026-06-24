-- Migration : ajout tenue club + avatar_config joueur
-- Manager Wars — Juin 2026
-- À exécuter manuellement dans Supabase SQL Editor

-- 1. Colonnes tenue sur la table clubs
ALTER TABLE clubs
  ADD COLUMN IF NOT EXISTS kit_style   TEXT    DEFAULT 'uni',
  ADD COLUMN IF NOT EXISTS kit_color1  TEXT    DEFAULT '#1A6B3C',
  ADD COLUMN IF NOT EXISTS kit_color2  TEXT    DEFAULT '#ffffff',
  ADD COLUMN IF NOT EXISTS kit_shorts  TEXT    DEFAULT '#111111',
  ADD COLUMN IF NOT EXISTS kit_socks   TEXT    DEFAULT '#ffffff';

-- 2. Colonne avatar_config sur la table players
ALTER TABLE players
  ADD COLUMN IF NOT EXISTS avatar_config JSONB DEFAULT NULL;

-- Commentaires
COMMENT ON COLUMN clubs.kit_style   IS 'Style tenue : uni | rayures_v | rayures_h | degrade | epaules | bandes | diagonal | hoops';
COMMENT ON COLUMN clubs.kit_color1  IS 'Couleur principale maillot (hex)';
COMMENT ON COLUMN clubs.kit_color2  IS 'Couleur secondaire maillot (hex)';
COMMENT ON COLUMN clubs.kit_shorts  IS 'Couleur short (hex)';
COMMENT ON COLUMN clubs.kit_socks   IS 'Couleur chaussettes (hex)';
COMMENT ON COLUMN players.avatar_config IS 'Config avatar SVG : { skin, hair, hairColor, eyes, nose, mouth, eyebrows, beard }';
