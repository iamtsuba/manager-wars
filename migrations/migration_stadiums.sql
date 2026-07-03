-- ═══════════════════════════════════════════════════════════
-- CARTES STADE
-- ═══════════════════════════════════════════════════════════

-- Définitions des stades (catalogue admin)
CREATE TABLE IF NOT EXISTS public.stadium_definitions (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name         TEXT NOT NULL,                      -- Nom du stade
  club_id      UUID REFERENCES public.clubs(id) ON DELETE SET NULL,
  country_code TEXT DEFAULT NULL,                  -- Si pas de club, bonus pays
  image_url    TEXT DEFAULT NULL,                  -- Icône visuelle
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.stadium_definitions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "stdef_select" ON public.stadium_definitions FOR SELECT USING (true);
CREATE POLICY "stdef_admin"  ON public.stadium_definitions FOR ALL
  USING ((SELECT is_admin FROM public.users WHERE id = auth.uid()) = true);

-- Référence du stade sur les cartes (card_type = 'stadium')
ALTER TABLE public.cards
  ADD COLUMN IF NOT EXISTS stadium_id UUID REFERENCES public.stadium_definitions(id) ON DELETE SET NULL;

-- Stade choisi dans un deck
ALTER TABLE public.decks
  ADD COLUMN IF NOT EXISTS stadium_card_id UUID REFERENCES public.cards(id) ON DELETE SET NULL;

-- Index pour performances
CREATE INDEX IF NOT EXISTS idx_cards_stadium ON public.cards(stadium_id) WHERE stadium_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_decks_stadium ON public.decks(stadium_card_id) WHERE stadium_card_id IS NOT NULL;
