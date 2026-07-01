CREATE TABLE IF NOT EXISTS public.tutorial_steps (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  step_order INT  NOT NULL DEFAULT 0,
  emoji      TEXT NOT NULL DEFAULT '⚽',
  title      TEXT NOT NULL,
  color      TEXT NOT NULL DEFAULT '#1A6B3C',
  content    TEXT NOT NULL DEFAULT '',
  is_active  BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.tutorial_steps ENABLE ROW LEVEL SECURITY;
CREATE POLICY "ts_select" ON public.tutorial_steps FOR SELECT USING (true);
CREATE POLICY "ts_admin"  ON public.tutorial_steps FOR ALL
  USING ((SELECT is_admin FROM public.users WHERE id = auth.uid()) = true);
