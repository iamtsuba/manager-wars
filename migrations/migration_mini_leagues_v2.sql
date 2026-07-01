-- Mini League v2 : mise en jeu de crédits + pot + archive
ALTER TABLE public.mini_leagues
  ADD COLUMN IF NOT EXISTS entry_fee  INT  NOT NULL DEFAULT 100,
  ADD COLUMN IF NOT EXISTS pot        INT  NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS is_archived BOOLEAN NOT NULL DEFAULT false;
