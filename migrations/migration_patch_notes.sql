-- Table des articles du Journal (mises à jour)
CREATE TABLE IF NOT EXISTS public.patch_notes (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title       TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  image_url   TEXT DEFAULT NULL,
  published_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.patch_notes ENABLE ROW LEVEL SECURITY;

-- Lecture publique
CREATE POLICY "patch_notes_select" ON public.patch_notes FOR SELECT USING (true);
-- Écriture admin
CREATE POLICY "patch_notes_admin" ON public.patch_notes FOR ALL
  USING ((SELECT is_admin FROM public.users WHERE id = auth.uid()) = true);
