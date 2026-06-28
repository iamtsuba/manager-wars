-- Table de configuration des prix de vente directe
-- Paramétrable depuis l'admin : par rareté + plage de notes
CREATE TABLE IF NOT EXISTS public.sell_price_configs (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rarity      TEXT NOT NULL CHECK (rarity IN ('normal','pepite','papyte','legende')),
  note_min    INT NOT NULL DEFAULT 1,
  note_max    INT NOT NULL DEFAULT 10,
  price       INT NOT NULL DEFAULT 1000,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Lecture publique (côté client pour calculer le prix)
ALTER TABLE public.sell_price_configs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "sell_price_select" ON public.sell_price_configs FOR SELECT USING (true);
-- Écriture admin uniquement
CREATE POLICY "sell_price_admin" ON public.sell_price_configs FOR ALL
  USING ((SELECT is_admin FROM public.users WHERE id = auth.uid()) = true);

-- Données initiales raisonnables
INSERT INTO public.sell_price_configs (rarity, note_min, note_max, price) VALUES
  ('normal',  1, 10,  500),
  ('pepite',  1, 10, 2000),
  ('papyte',  1, 10, 1000),
  ('legende', 1, 10, 5000)
ON CONFLICT DO NOTHING;
