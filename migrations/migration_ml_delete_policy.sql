-- Permettre au créateur de supprimer sa mini league
CREATE POLICY "ml_delete" ON public.mini_leagues FOR DELETE
  USING (auth.uid() = creator_id);
