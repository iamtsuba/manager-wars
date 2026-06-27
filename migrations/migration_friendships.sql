-- ── Amis & Stats entre amis ───────────────────────────────────────────────
-- friendships : demandes d'amitié (pending → accepted | declined)
CREATE TABLE IF NOT EXISTS public.friendships (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  requester_id  UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  addressee_id  UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  status        TEXT NOT NULL DEFAULT 'pending'
                  CHECK (status IN ('pending','accepted','declined')),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (requester_id, addressee_id)
);

-- Index pour retrouver rapidement toutes les demandes concernant un utilisateur
CREATE INDEX IF NOT EXISTS friendships_addressee_idx ON public.friendships(addressee_id);
CREATE INDEX IF NOT EXISTS friendships_requester_idx ON public.friendships(requester_id);

-- friend_match_stats : stats agrégées entre 2 amis (mis à jour à chaque match)
-- player1_id < player2_id pour éviter les doublons de paires
CREATE TABLE IF NOT EXISTS public.friend_match_stats (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  player1_id    UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  player2_id    UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  wins_p1       INT NOT NULL DEFAULT 0,
  wins_p2       INT NOT NULL DEFAULT 0,
  draws         INT NOT NULL DEFAULT 0,
  goals_p1      INT NOT NULL DEFAULT 0,
  goals_p2      INT NOT NULL DEFAULT 0,
  gc_used_p1    INT NOT NULL DEFAULT 0,
  gc_used_p2    INT NOT NULL DEFAULT 0,
  matches_total INT NOT NULL DEFAULT 0,
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (player1_id, player2_id),
  CHECK (player1_id < player2_id)
);

-- RLS : chaque utilisateur ne voit que ses propres demandes/amis
ALTER TABLE public.friendships ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.friend_match_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "friendships_select" ON public.friendships FOR SELECT
  USING (auth.uid() = requester_id OR auth.uid() = addressee_id);
CREATE POLICY "friendships_insert" ON public.friendships FOR INSERT
  WITH CHECK (auth.uid() = requester_id);
CREATE POLICY "friendships_update" ON public.friendships FOR UPDATE
  USING (auth.uid() = addressee_id); -- seul l'addressee accepte/refuse

CREATE POLICY "friend_stats_select" ON public.friend_match_stats FOR SELECT
  USING (auth.uid() = player1_id OR auth.uid() = player2_id);
CREATE POLICY "friend_stats_upsert" ON public.friend_match_stats FOR ALL
  USING (auth.uid() = player1_id OR auth.uid() = player2_id);
