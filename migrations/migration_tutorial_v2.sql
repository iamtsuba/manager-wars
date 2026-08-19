-- migrations/migration_tutorial_v2.sql
-- Tables pour le NOUVEAU tutoriel interactif (tutorial-v3.js)
-- ⚠️ NOMMÉES _v2 pour ne PAS entrer en conflit avec la table `tutorial_steps`
--    déjà utilisée par l'admin "Tutoriel" (v1, cartes de contenu statique).

-- 1. Table de configuration des étapes du tutoriel interactif
CREATE TABLE IF NOT EXISTS tutorial_steps_v2 (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  step_number INT NOT NULL UNIQUE,
  step_name VARCHAR(255) NOT NULL UNIQUE,
  page_route VARCHAR(50),
  dom_selector VARCHAR(500),
  popup_position VARCHAR(20),
  popup_title VARCHAR(150),
  popup_text TEXT,
  action_required VARCHAR(255),
  validator_logic VARCHAR(255),
  highlight_type VARCHAR(50),
  skip_allowed BOOLEAN DEFAULT true,
  display_duration_ms INT DEFAULT 0,
  is_mandatory BOOLEAN DEFAULT false,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Table de progression utilisateur du tutoriel interactif
CREATE TABLE IF NOT EXISTS tutorial_progress_v2 (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  current_step INT DEFAULT 1,
  completed_steps INT[] DEFAULT ARRAY[]::INT[],
  tutorial_done BOOLEAN DEFAULT false,
  tutorial_skipped BOOLEAN DEFAULT false,
  last_step_viewed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

-- 3. Indexes
CREATE INDEX IF NOT EXISTS idx_tutorial_steps_v2_step_number ON tutorial_steps_v2(step_number);
CREATE INDEX IF NOT EXISTS idx_tutorial_steps_v2_page_route ON tutorial_steps_v2(page_route);
CREATE INDEX IF NOT EXISTS idx_tutorial_progress_v2_user_id ON tutorial_progress_v2(user_id);
CREATE INDEX IF NOT EXISTS idx_tutorial_progress_v2_done ON tutorial_progress_v2(tutorial_done);

-- 4. RLS : tutorial_steps_v2
ALTER TABLE tutorial_steps_v2 ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "tutorial_steps_v2_select_public" ON tutorial_steps_v2;
CREATE POLICY "tutorial_steps_v2_select_public" ON tutorial_steps_v2
  FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "tutorial_steps_v2_admin_insert" ON tutorial_steps_v2;
CREATE POLICY "tutorial_steps_v2_admin_insert" ON tutorial_steps_v2
  FOR INSERT TO authenticated
  WITH CHECK ((SELECT is_admin FROM users WHERE id = auth.uid() LIMIT 1) = true);

DROP POLICY IF EXISTS "tutorial_steps_v2_admin_update" ON tutorial_steps_v2;
CREATE POLICY "tutorial_steps_v2_admin_update" ON tutorial_steps_v2
  FOR UPDATE TO authenticated
  USING ((SELECT is_admin FROM users WHERE id = auth.uid() LIMIT 1) = true)
  WITH CHECK ((SELECT is_admin FROM users WHERE id = auth.uid() LIMIT 1) = true);

DROP POLICY IF EXISTS "tutorial_steps_v2_admin_delete" ON tutorial_steps_v2;
CREATE POLICY "tutorial_steps_v2_admin_delete" ON tutorial_steps_v2
  FOR DELETE TO authenticated
  USING ((SELECT is_admin FROM users WHERE id = auth.uid() LIMIT 1) = true);

-- 5. RLS : tutorial_progress_v2
ALTER TABLE tutorial_progress_v2 ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "tutorial_progress_v2_select_own" ON tutorial_progress_v2;
CREATE POLICY "tutorial_progress_v2_select_own" ON tutorial_progress_v2
  FOR SELECT TO authenticated USING (user_id = auth.uid());

DROP POLICY IF EXISTS "tutorial_progress_v2_insert_own" ON tutorial_progress_v2;
CREATE POLICY "tutorial_progress_v2_insert_own" ON tutorial_progress_v2
  FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid());

DROP POLICY IF EXISTS "tutorial_progress_v2_update_own" ON tutorial_progress_v2;
CREATE POLICY "tutorial_progress_v2_update_own" ON tutorial_progress_v2
  FOR UPDATE TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

DROP POLICY IF EXISTS "tutorial_progress_v2_admin_select_all" ON tutorial_progress_v2;
CREATE POLICY "tutorial_progress_v2_admin_select_all" ON tutorial_progress_v2
  FOR SELECT TO authenticated
  USING ((SELECT is_admin FROM users WHERE id = auth.uid() LIMIT 1) = true);

-- 6. Notifier PostgREST du changement de schéma
NOTIFY pgrst, 'reload schema';

-- 7. Vérification
SELECT 'tutorial_steps_v2 et tutorial_progress_v2 prêtes !' AS status;
