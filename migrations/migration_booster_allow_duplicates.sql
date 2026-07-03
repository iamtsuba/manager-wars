ALTER TABLE public.booster_configs
  ADD COLUMN IF NOT EXISTS allow_duplicates BOOLEAN NOT NULL DEFAULT true;
