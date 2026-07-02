-- S'assurer que la policy SELECT existe pour tous les utilisateurs
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename='tutorial_steps' AND policyname='ts_select'
  ) THEN
    EXECUTE 'CREATE POLICY "ts_select" ON public.tutorial_steps FOR SELECT USING (true)';
    RAISE NOTICE 'Policy ts_select créée';
  ELSE
    RAISE NOTICE 'Policy ts_select existe déjà';
  END IF;
END $$;

-- RPC publique pour lire les étapes de tuto sans dépendre des policies
CREATE OR REPLACE FUNCTION get_tutorial_steps()
RETURNS TABLE(
  id UUID, step_order INT, emoji TEXT, title TEXT,
  color TEXT, content TEXT, image_url TEXT, is_active BOOLEAN
)
LANGUAGE sql SECURITY DEFINER AS $$
  SELECT id, step_order, emoji, title, color, content, image_url, is_active
  FROM public.tutorial_steps
  WHERE is_active = true
  ORDER BY step_order;
$$;
