-- ═══════════════════════════════════════════════════════════
-- RANKED SYSTEM — Glicko-2 + Ligues + Saisons
-- À exécuter dans Supabase SQL Editor
-- ═══════════════════════════════════════════════════════════

-- ── 1. Colonnes MMR sur la table users ──────────────────────
ALTER TABLE users
  ADD COLUMN IF NOT EXISTS mmr              INTEGER DEFAULT 1000,
  ADD COLUMN IF NOT EXISTS mmr_deviation    NUMERIC(8,4) DEFAULT 350,
  ADD COLUMN IF NOT EXISTS mmr_volatility   NUMERIC(8,6) DEFAULT 0.06,
  ADD COLUMN IF NOT EXISTS rank_tier        TEXT DEFAULT 'bronze',
  ADD COLUMN IF NOT EXISTS placement_matches INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS ranked_wins      INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS ranked_losses    INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS ranked_draws     INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS current_season_id INTEGER DEFAULT NULL;

-- ── 2. Table saisons ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS ranked_seasons (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  start_at    TIMESTAMPTZ NOT NULL,
  end_at      TIMESTAMPTZ NOT NULL,
  is_active   BOOLEAN DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Unicité : une seule saison active à la fois
CREATE UNIQUE INDEX IF NOT EXISTS ranked_seasons_active_unique
  ON ranked_seasons (is_active) WHERE is_active = TRUE;

-- ── 3. Snapshot stats par saison ────────────────────────────
CREATE TABLE IF NOT EXISTS ranked_season_stats (
  id          SERIAL PRIMARY KEY,
  user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  season_id   INTEGER NOT NULL REFERENCES ranked_seasons(id) ON DELETE CASCADE,
  final_mmr   INTEGER NOT NULL,
  final_tier  TEXT NOT NULL,
  wins        INTEGER DEFAULT 0,
  losses      INTEGER DEFAULT 0,
  draws       INTEGER DEFAULT 0,
  rank_position INTEGER DEFAULT NULL,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, season_id)
);

-- ── 4. Colonne mode sur matchmaking_queue ───────────────────
ALTER TABLE matchmaking_queue
  ADD COLUMN IF NOT EXISTS mode TEXT DEFAULT 'casual',
  ADD COLUMN IF NOT EXISTS mmr  INTEGER DEFAULT 1000;

-- ── 5. Colonnes ranked sur matches ──────────────────────────
ALTER TABLE matches
  ADD COLUMN IF NOT EXISTS is_ranked       BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS mmr_delta_home  INTEGER DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS mmr_delta_away  INTEGER DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS season_id       INTEGER DEFAULT NULL;

-- ── 6. RLS pour ranked_seasons ──────────────────────────────
ALTER TABLE ranked_seasons ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename='ranked_seasons' AND policyname='ranked_seasons_read'
  ) THEN
    CREATE POLICY ranked_seasons_read ON ranked_seasons FOR SELECT USING (TRUE);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename='ranked_seasons' AND policyname='ranked_seasons_admin_write'
  ) THEN
    CREATE POLICY ranked_seasons_admin_write ON ranked_seasons
      FOR ALL USING (
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = TRUE)
      );
  END IF;
END $$;

-- ── 7. RLS pour ranked_season_stats ─────────────────────────
ALTER TABLE ranked_season_stats ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename='ranked_season_stats' AND policyname='ranked_season_stats_read'
  ) THEN
    CREATE POLICY ranked_season_stats_read ON ranked_season_stats FOR SELECT USING (TRUE);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename='ranked_season_stats' AND policyname='ranked_season_stats_insert'
  ) THEN
    CREATE POLICY ranked_season_stats_insert ON ranked_season_stats FOR INSERT WITH CHECK (TRUE);
  END IF;
END $$;

-- ── 8. Fonction utilitaire : calcul du tier depuis le MMR ───
CREATE OR REPLACE FUNCTION mmr_to_tier(p_mmr INTEGER)
RETURNS TEXT LANGUAGE plpgsql AS $$
BEGIN
  IF p_mmr >= 2400 THEN RETURN 'master';
  ELSIF p_mmr >= 2100 THEN RETURN 'diamond';
  ELSIF p_mmr >= 1800 THEN RETURN 'platinum';
  ELSIF p_mmr >= 1500 THEN RETURN 'gold';
  ELSIF p_mmr >= 1200 THEN RETURN 'silver';
  ELSE RETURN 'bronze';
  END IF;
END;
$$;

-- ── 9. RPC principale : mise à jour MMR Glicko-2 après match ─
-- Calcul simplifié Glicko-2 : on utilise la déviation et volatilité
-- pour pondérer le gain/perte. La volatilité est gérée par le client JS
-- et passée en paramètre pour rester stateless côté SQL.
CREATE OR REPLACE FUNCTION update_mmr_after_ranked(
  p_match_id        UUID,
  p_winner_id       UUID,   -- NULL si nul
  p_home_id         UUID,
  p_away_id         UUID,
  p_home_delta      INTEGER,
  p_away_delta      INTEGER,
  p_home_new_rd     NUMERIC,
  p_away_new_rd     NUMERIC,
  p_home_new_vol    NUMERIC,
  p_away_new_vol    NUMERIC
)
RETURNS JSON LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  v_home    users%ROWTYPE;
  v_away    users%ROWTYPE;
  v_season  ranked_seasons%ROWTYPE;
  v_is_draw BOOLEAN := (p_winner_id IS NULL);
BEGIN
  SELECT * INTO v_home FROM users WHERE id = p_home_id;
  SELECT * INTO v_away FROM users WHERE id = p_away_id;
  SELECT * INTO v_season FROM ranked_seasons WHERE is_active = TRUE LIMIT 1;

  -- Mise à jour home
  UPDATE users SET
    mmr             = GREATEST(0, mmr + p_home_delta),
    mmr_deviation   = p_home_new_rd,
    mmr_volatility  = p_home_new_vol,
    rank_tier       = mmr_to_tier(GREATEST(0, mmr + p_home_delta)),
    placement_matches = CASE WHEN placement_matches < 10 THEN placement_matches + 1 ELSE placement_matches END,
    ranked_wins     = CASE WHEN p_winner_id = p_home_id THEN ranked_wins + 1 ELSE ranked_wins END,
    ranked_losses   = CASE WHEN p_winner_id = p_away_id THEN ranked_losses + 1 ELSE ranked_losses END,
    ranked_draws    = CASE WHEN v_is_draw THEN ranked_draws + 1 ELSE ranked_draws END,
    current_season_id = COALESCE(v_season.id, current_season_id)
  WHERE id = p_home_id;

  -- Mise à jour away
  UPDATE users SET
    mmr             = GREATEST(0, mmr + p_away_delta),
    mmr_deviation   = p_away_new_rd,
    mmr_volatility  = p_away_new_vol,
    rank_tier       = mmr_to_tier(GREATEST(0, mmr + p_away_delta)),
    placement_matches = CASE WHEN placement_matches < 10 THEN placement_matches + 1 ELSE placement_matches END,
    ranked_wins     = CASE WHEN p_winner_id = p_away_id THEN ranked_wins + 1 ELSE ranked_wins END,
    ranked_losses   = CASE WHEN p_winner_id = p_home_id THEN ranked_losses + 1 ELSE ranked_losses END,
    ranked_draws    = CASE WHEN v_is_draw THEN ranked_draws + 1 ELSE ranked_draws END,
    current_season_id = COALESCE(v_season.id, current_season_id)
  WHERE id = p_away_id;

  -- Stocker les deltas dans le match
  UPDATE matches SET
    mmr_delta_home = p_home_delta,
    mmr_delta_away = p_away_delta,
    season_id      = v_season.id
  WHERE id = p_match_id;

  RETURN json_build_object('success', TRUE);
END;
$$;

-- ── 10. RPC matchmaking ranked : try_matchmake_ranked ───────
-- Variante de try_matchmake avec filtre MMR progressif
CREATE OR REPLACE FUNCTION try_matchmake_ranked(
  p_user_id  UUID,
  p_deck_id  UUID,
  p_mmr      INTEGER,
  p_range    INTEGER   -- plage MMR actuelle (50, 100, 200, 400…)
)
RETURNS JSON LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  v_opponent  matchmaking_queue%ROWTYPE;
  v_match_id  UUID;
BEGIN
  -- Chercher un adversaire ranked dans la plage MMR
  SELECT * INTO v_opponent
  FROM matchmaking_queue
  WHERE user_id   <> p_user_id
    AND status    = 'waiting'
    AND mode      = 'ranked'
    AND ABS(mmr - p_mmr) <= p_range
  ORDER BY created_at ASC
  LIMIT 1
  FOR UPDATE SKIP LOCKED;

  IF NOT FOUND THEN
    -- Pas d'adversaire : s'inscrire en queue ranked (upsert)
    INSERT INTO matchmaking_queue (user_id, deck_id, status, mode, mmr)
    VALUES (p_user_id, p_deck_id, 'waiting', 'ranked', p_mmr)
    ON CONFLICT (user_id) DO UPDATE SET
      deck_id    = EXCLUDED.deck_id,
      status     = 'waiting',
      mode       = 'ranked',
      mmr        = EXCLUDED.mmr,
      created_at = NOW();

    RETURN json_build_object('success', TRUE, 'matched', FALSE);
  END IF;

  -- Créer le match
  INSERT INTO matches (home_id, away_id, home_deck_id, away_deck_id, status, mode, is_ranked)
  VALUES (v_opponent.user_id, p_user_id, v_opponent.deck_id, p_deck_id, 'in_progress', 'vs_random', TRUE)
  RETURNING id INTO v_match_id;

  -- Marquer l'adversaire comme matché
  UPDATE matchmaking_queue
  SET status = 'matched', match_id = v_match_id, matched_with = p_user_id
  WHERE user_id = v_opponent.user_id;

  -- Nettoyer le joueur actuel de la queue
  DELETE FROM matchmaking_queue WHERE user_id = p_user_id;

  RETURN json_build_object(
    'success', TRUE, 'matched', TRUE,
    'match_id', v_match_id, 'opponent_id', v_opponent.user_id
  );
END;
$$;

-- ── 11. Saison initiale ─────────────────────────────────────
INSERT INTO ranked_seasons (name, start_at, end_at, is_active)
VALUES ('Saison 1 — Lancement', NOW(), NOW() + INTERVAL '90 days', TRUE)
ON CONFLICT DO NOTHING;

-- ── 12. Reload PostgREST ────────────────────────────────────
NOTIFY pgrst, 'reload schema';
