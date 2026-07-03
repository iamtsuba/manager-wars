-- Bonus d'évolution par carte (propre à chaque manager)
ALTER TABLE public.cards
  ADD COLUMN IF NOT EXISTS evolution_bonus INT NOT NULL DEFAULT 0;
