-- Permettre à tout utilisateur authentifié de mettre à jour le pot
-- d'une league en attente (nécessaire pour join/leave)
DROP POLICY IF EXISTS "ml_update" ON public.mini_leagues;

CREATE POLICY "ml_update" ON public.mini_leagues FOR UPDATE
  USING (
    -- Créateur : tous les champs
    auth.uid() = creator_id
    OR
    -- Membre existant : peut updater (leave = update pot avant delete)
    EXISTS (SELECT 1 FROM public.mini_league_members WHERE league_id = id AND user_id = auth.uid())
    OR
    -- Nouveau membre qui rejoint : peut updater le pot (status='waiting' seulement)
    (status = 'waiting' AND auth.uid() IS NOT NULL)
  );
