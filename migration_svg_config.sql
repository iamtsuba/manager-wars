-- Table de configuration SVG (lue par l'app au runtime)
CREATE TABLE IF NOT EXISTS svg_config (
  id          text PRIMARY KEY DEFAULT 'main',
  -- Taille des cartes
  cw_ratio        float8 DEFAULT 0.18,
  pad_ratio       float8 DEFAULT 0.70,
  pad_min         int    DEFAULT 80,
  mob_pad_ratio   float8 DEFAULT 0.55,
  -- Marges
  margin_pc       int    DEFAULT 30,
  margin_mob      int    DEFAULT 10,
  -- card_offset (top:Npx dans player-card)
  card_offset_pc  int    DEFAULT 30,
  card_offset_mob int    DEFAULT 10,
  -- Positions joueurs par formation : { "4-3-3": { "GK1": {x,y}, ... } }
  position_overrides jsonb DEFAULT '{}',
  -- Liens : épaisseur et opacité
  link_width_green  float8 DEFAULT 2.5,
  link_width_yellow float8 DEFAULT 2.0,
  link_width_red    float8 DEFAULT 1.5,
  link_opacity      float8 DEFAULT 0.85,
  -- Metadata
  updated_at  timestamptz DEFAULT now(),
  updated_by  text
);

-- Insérer les valeurs par défaut
INSERT INTO svg_config (id) VALUES ('main') ON CONFLICT (id) DO NOTHING;

-- RLS : lecture publique, écriture admin uniquement
ALTER TABLE svg_config ENABLE ROW LEVEL SECURITY;

CREATE POLICY "svg_config_read" ON svg_config FOR SELECT USING (true);
CREATE POLICY "svg_config_write" ON svg_config FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = true)
);

-- Notifier PostgREST
NOTIFY pgrst, 'reload schema';
