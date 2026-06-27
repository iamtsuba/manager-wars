-- Table pour les invitations de match entre amis
CREATE TABLE IF NOT EXISTS public.friend_match_invites (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  inviter_id   UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  invitee_id   UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  friend_id    UUID NOT NULL,  -- l'ami ciblé (= invitee_id, dénormalisé pour lisibilité)
  status       TEXT NOT NULL DEFAULT 'pending'
                 CHECK (status IN ('pending','accepted','declined','matched','expired')),
  match_id     UUID REFERENCES public.matches(id) ON DELETE SET NULL,
  inviter_deck_id UUID,
  invitee_deck_id UUID,
  inviter_ready   BOOLEAN DEFAULT false,
  invitee_ready   BOOLEAN DEFAULT false,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at   TIMESTAMPTZ NOT NULL DEFAULT (now() + INTERVAL '10 minutes')
);

CREATE INDEX IF NOT EXISTS fmi_invitee_idx ON public.friend_match_invites(invitee_id);
CREATE INDEX IF NOT EXISTS fmi_inviter_idx ON public.friend_match_invites(inviter_id);

ALTER TABLE public.friend_match_invites ENABLE ROW LEVEL SECURITY;

CREATE POLICY "fmi_select" ON public.friend_match_invites FOR SELECT
  USING (auth.uid() = inviter_id OR auth.uid() = invitee_id);
CREATE POLICY "fmi_insert" ON public.friend_match_invites FOR INSERT
  WITH CHECK (auth.uid() = inviter_id);
CREATE POLICY "fmi_update" ON public.friend_match_invites FOR UPDATE
  USING (auth.uid() = inviter_id OR auth.uid() = invitee_id);
CREATE POLICY "fmi_delete" ON public.friend_match_invites FOR DELETE
  USING (auth.uid() = inviter_id OR auth.uid() = invitee_id);
