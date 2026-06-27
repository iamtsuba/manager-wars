-- Ajouter last_seen_at sur users pour la présence en ligne
ALTER TABLE public.users
  ADD COLUMN IF NOT EXISTS last_seen_at TIMESTAMPTZ DEFAULT now();

-- Index pour les requêtes de présence
CREATE INDEX IF NOT EXISTS users_last_seen_idx ON public.users(last_seen_at);
