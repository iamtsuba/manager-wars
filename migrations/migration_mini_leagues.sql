-- ══════════════════════════════════════════════════════════
-- MINI LEAGUES
-- ══════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS public.mini_leagues (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name         TEXT NOT NULL,
  creator_id   UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  type         TEXT NOT NULL DEFAULT 'public' CHECK (type IN ('public','private')),
  password     TEXT DEFAULT NULL,          -- null si public
  mode         TEXT NOT NULL DEFAULT 'aller' CHECK (mode IN ('aller','aller-retour')),
  max_players  INT  NOT NULL DEFAULT 6 CHECK (max_players BETWEEN 3 AND 8),
  status       TEXT NOT NULL DEFAULT 'waiting' CHECK (status IN ('waiting','active','finished')),
  current_day  INT  NOT NULL DEFAULT 0,    -- journée en cours (0 = pas encore démarré)
  total_days   INT  NOT NULL DEFAULT 0,    -- total journées (calculé au lancement)
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.mini_league_members (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  league_id  UUID NOT NULL REFERENCES public.mini_leagues(id) ON DELETE CASCADE,
  user_id    UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  deck_id    UUID REFERENCES public.decks(id) ON DELETE SET NULL,
  joined_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (league_id, user_id)
);

CREATE TABLE IF NOT EXISTS public.mini_league_matches (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  league_id   UUID NOT NULL REFERENCES public.mini_leagues(id) ON DELETE CASCADE,
  matchday    INT  NOT NULL,               -- journée (1-based)
  home_id     UUID REFERENCES public.users(id) ON DELETE SET NULL,
  away_id     UUID REFERENCES public.users(id) ON DELETE SET NULL,
  is_bye      BOOLEAN NOT NULL DEFAULT false, -- équipe exemptée (true = home_id est exempt)
  match_id    UUID REFERENCES public.matches(id) ON DELETE SET NULL, -- lien au vrai match
  home_score  INT DEFAULT NULL,
  away_score  INT DEFAULT NULL,
  status      TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','playing','finished','bye')),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- RLS
ALTER TABLE public.mini_leagues        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mini_league_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mini_league_matches ENABLE ROW LEVEL SECURITY;

-- mini_leagues : lecture publique, écriture pour les membres
CREATE POLICY "ml_select"  ON public.mini_leagues FOR SELECT USING (true);
CREATE POLICY "ml_insert"  ON public.mini_leagues FOR INSERT WITH CHECK (auth.uid() = creator_id);
CREATE POLICY "ml_update"  ON public.mini_leagues FOR UPDATE USING (
  auth.uid() = creator_id OR
  EXISTS (SELECT 1 FROM public.mini_league_members WHERE league_id = id AND user_id = auth.uid())
);

-- members
CREATE POLICY "mlm_select" ON public.mini_league_members FOR SELECT USING (true);
CREATE POLICY "mlm_insert" ON public.mini_league_members FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "mlm_delete" ON public.mini_league_members FOR DELETE USING (auth.uid() = user_id);

-- matches
CREATE POLICY "mlmatch_select" ON public.mini_league_matches FOR SELECT USING (true);
CREATE POLICY "mlmatch_update" ON public.mini_league_matches FOR UPDATE
  USING (auth.uid() = home_id OR auth.uid() = away_id OR
    EXISTS (SELECT 1 FROM public.mini_leagues WHERE id = league_id AND creator_id = auth.uid()));
CREATE POLICY "mlmatch_insert" ON public.mini_league_matches FOR INSERT
  WITH CHECK (EXISTS (SELECT 1 FROM public.mini_leagues WHERE id = league_id AND creator_id = auth.uid()));

-- Ajouter mode mini_league dans matches
ALTER TABLE public.matches DROP CONSTRAINT IF EXISTS matches_mode_check;
ALTER TABLE public.matches ADD CONSTRAINT matches_mode_check
  CHECK (mode IN ('random','friend','vs_ai_easy','vs_ai_medium','vs_ai_hard','mini_league'));
