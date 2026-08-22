-- migrations/migration_admin_add_card.sql
-- RPC permettant à un admin d'ajouter une carte joueur au compte d'un
-- manager choisi. RLS bloque normalement tout INSERT dans `cards` où
-- owner_id ≠ auth.uid() (un joueur ne peut créer que ses propres cartes).
-- Cette fonction SECURITY DEFINER contourne cette contrainte UNIQUEMENT
-- pour les comptes admin (vérifié explicitement dans le corps de la
-- fonction, pas juste par la définition SECURITY DEFINER).

CREATE OR REPLACE FUNCTION admin_add_player_card(
  p_target_user_id UUID,
  p_player_id UUID
)
RETURNS TABLE (id UUID, card_type TEXT, player_id UUID, owner_id UUID)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_is_admin BOOLEAN;
  v_card_id UUID;
BEGIN
  -- Vérifie que l'appelant est bien un admin
  SELECT is_admin INTO v_is_admin FROM users WHERE id = auth.uid();
  IF v_is_admin IS NOT TRUE THEN
    RAISE EXCEPTION 'Accès refusé : réservé aux administrateurs';
  END IF;

  -- Vérifie que le manager cible et le joueur existent
  IF NOT EXISTS (SELECT 1 FROM users WHERE id = p_target_user_id) THEN
    RAISE EXCEPTION 'Manager introuvable';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM players WHERE id = p_player_id) THEN
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

SELECT 'Fonction admin_add_player_card créée' AS status;
