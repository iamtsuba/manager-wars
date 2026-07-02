ALTER TABLE public.tutorial_steps
  ADD COLUMN IF NOT EXISTS image_url TEXT DEFAULT NULL;
