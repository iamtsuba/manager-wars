-- Ajoute les colonnes price_min / price_max à sell_price_configs
-- (remplace l'ancienne colonne unique "price" par une fourchette min/max)

ALTER TABLE sell_price_configs
  ADD COLUMN IF NOT EXISTS price_min INTEGER,
  ADD COLUMN IF NOT EXISTS price_max INTEGER;

-- Migre les données existantes : price devient à la fois min et max par défaut
UPDATE sell_price_configs
  SET price_min = COALESCE(price_min, price),
      price_max = COALESCE(price_max, price)
  WHERE price_min IS NULL OR price_max IS NULL;

NOTIFY pgrst, 'reload schema';
