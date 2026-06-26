-- Migration : boosters de démarrage à ouvrir lors de la première connexion
-- Stocke une file de boosters non ouverts (JSONB) sur le profil utilisateur.
-- Chaque entrée : { "type": "player"|"formation", "count": 5 }

ALTER TABLE public.users
  ADD COLUMN IF NOT EXISTS pending_boosters JSONB DEFAULT '[]'::jsonb;

-- Optionnel : flag indiquant que l'onboarding (ouverture des boosters offerts) est terminé
ALTER TABLE public.users
  ADD COLUMN IF NOT EXISTS onboarding_done BOOLEAN DEFAULT false;
