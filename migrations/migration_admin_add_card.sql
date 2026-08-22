-- Exécute ce bloc COMPLET dans Supabase SQL Editor (remplace l'ancienne version)

-- Obligatoire : on change les noms des colonnes de sortie, CREATE OR REPLACE
-- refuse ce type de changement de signature sans DROP préalable.
DROP FUNCTION IF EXISTS admin_add_player_card(UUID, UUID);

CREATE OR REPLACE FUNCTION admin_add_player_card(
  p_target_user_id UUID,
  p_player_id UUID
)
RETURNS TABLE (out_id UUID, out_card_type TEXT, out_player_id UUID, out_owner_id UUID)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_is_admin BOOLEAN;
  v_card_id UUID;
BEGIN
  -- Vérifie que l'appelant est bien un admin
  SELECT users.is_admin INTO v_is_admin FROM users WHERE users.id = auth.uid();
  IF v_is_admin IS NOT TRUE THEN
    RAISE EXCEPTION 'Accès refusé : réservé aux administrateurs';
  END IF;

  -- Vérifie que le manager cible et le joueur existent
  IF NOT EXISTS (SELECT 1 FROM users WHERE users.id = p_target_user_id) THEN
    RAISE EXCEPTION 'Manager introuvable';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM players WHERE players.id = p_player_id) THEN
    RAISE EXCEPTION 'Joueur introuvable';
  END IF;

  INSERT INTO cards (owner_id, card_type, player_id)
  VALUES (p_target_user_id, 'player', p_player_id)
  RETURNING cards.id INTO v_card_id;

  RETURN QUERY
  SELECT cards.id, cards.card_type, cards.player_id, cards.owner_id
  FROM cards WHERE cards.id = v_card_id;
END;
$$;

GRANT EXECUTE ON FUNCTION admin_add_player_card(UUID, UUID) TO authenticated;

NOTIFY pgrst, 'reload schema';

-- Vérification
SELECT proname, pronargs FROM pg_proc WHERE proname = 'admin_add_player_card';
