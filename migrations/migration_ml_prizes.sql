-- Stocker la part de chaque gagnant pour réclamation manuelle
ALTER TABLE public.mini_league_members
  ADD COLUMN IF NOT EXISTS prize_amount INT NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS prize_claimed BOOLEAN NOT NULL DEFAULT false;
