-- Salon d'attente pour les matchs entre amis
CREATE TABLE IF NOT EXISTS public.friend_match_lobbies (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  inviter_id      UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  invitee_id      UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  -- Deck + formation choisis par chacun (remplis après la sélection)
  inviter_deck_id UUID REFERENCES public.decks(id),
  invitee_deck_id UUID REFERENCES public.decks(id),
  inviter_ready   BOOLEAN NOT NULL DEFAULT false,
  invitee_ready   BOOLEAN NOT NULL DEFAULT false,
  -- Match créé une fois les 2 prêts
  match_id        UUID REFERENCES public.matches(id),
  status          TEXT NOT NULL DEFAULT 'waiting'
                    CHECK (status IN ('waiting','ready','started','cancelled')),
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS friend_lobbies_inviter_idx ON public.friend_match_lobbies(inviter_id);
CREATE INDEX IF NOT EXISTS friend_lobbies_invitee_idx ON public.friend_match_lobbies(invitee_id);

-- RLS
ALTER TABLE public.friend_match_lobbies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "lobby_select" ON public.friend_match_lobbies FOR SELECT
  USING (auth.uid() = inviter_id OR auth.uid() = invitee_id);
CREATE POLICY "lobby_insert" ON public.friend_match_lobbies FOR INSERT
  WITH CHECK (auth.uid() = inviter_id);
CREATE POLICY "lobby_update" ON public.friend_match_lobbies FOR UPDATE
  USING (auth.uid() = inviter_id OR auth.uid() = invitee_id);
CREATE POLICY "lobby_delete" ON public.friend_match_lobbies FOR DELETE
  USING (auth.uid() = inviter_id OR auth.uid() = invitee_id);
