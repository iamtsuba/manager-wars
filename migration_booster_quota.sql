-- Migration : quota booster par utilisateur + période de disponibilité
-- À exécuter dans Supabase SQL Editor

-- 1. Colonnes sur booster_configs
ALTER TABLE booster_configs
  ADD COLUMN IF NOT EXISTS max_per_user   integer DEFAULT NULL,   -- null = illimité
  ADD COLUMN IF NOT EXISTS available_from date    DEFAULT NULL,   -- null = pas de limite début
  ADD COLUMN IF NOT EXISTS available_until date   DEFAULT NULL;   -- null = pas de limite fin

-- 2. Table de claims
CREATE TABLE IF NOT EXISTS booster_claims (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  booster_id uuid NOT NULL REFERENCES booster_configs(id) ON DELETE CASCADE,
  claimed_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_booster_claims_user_booster ON booster_claims(user_id, booster_id);

-- 3. RLS
ALTER TABLE booster_claims ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename='booster_claims' AND policyname='Users read own claims'
  ) THEN
    CREATE POLICY "Users read own claims" ON booster_claims
      FOR SELECT USING (auth.uid() = user_id);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename='booster_claims' AND policyname='Users insert own claims'
  ) THEN
    CREATE POLICY "Users insert own claims" ON booster_claims
      FOR INSERT WITH CHECK (auth.uid() = user_id);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename='booster_claims' AND policyname='Admins manage claims'
  ) THEN
    CREATE POLICY "Admins manage claims" ON booster_claims
      FOR ALL USING (
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = true)
      );
  END IF;
END $$;

-- Recharger le schéma PostgREST
NOTIFY pgrst, 'reload schema';
