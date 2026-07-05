-- Mise à jour de get_deck_for_match pour inclure stadium_def
CREATE OR REPLACE FUNCTION get_deck_for_match(p_deck_id UUID)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  result JSON;
BEGIN
  SELECT json_build_object(
    'formation', d.formation,
    'stadium_def', (
      SELECT json_build_object(
        'id',           sd.id,
        'name',         sd.name,
        'club_id',      sd.club_id,
        'country_code', sd.country_code
      )
      FROM cards sc
      JOIN stadium_definitions sd ON sd.id = sc.stadium_id
      WHERE sc.id = d.stadium_card_id
        AND sc.stadium_id IS NOT NULL
      LIMIT 1
    ),
    'starters', COALESCE((
      SELECT json_agg(json_build_object(
        'card_id',           c.id,
        'position',          dc.position,
        'id',                p.id,
        'firstname',         p.firstname,
        'surname_encoded',   p.surname_encoded,
        'country_code',      p.country_code,
        'club_id',           p.club_id,
        'job',               p.job,
        'job2',              p.job2,
        'note_g',            p.note_g,
        'note_d',            p.note_d,
        'note_m',            p.note_m,
        'note_a',            p.note_a,
        'rarity',            p.rarity,
        'skin',              p.skin,
        'hair',              p.hair,
        'hair_length',       p.hair_length,
        'evolution_bonus',   COALESCE(c.evolution_bonus, 0),
        'club_encoded_name', cl.encoded_name,
        'club_logo_url',     cl.logo_url
      ))
      FROM deck_cards dc
      JOIN cards c ON c.id = dc.card_id
      JOIN players p ON p.id = c.player_id
      LEFT JOIN clubs cl ON cl.id = p.club_id
      WHERE dc.deck_id = p_deck_id AND dc.is_starter = true
    ), '[]'::json),
    'subs', COALESCE((
      SELECT json_agg(json_build_object(
        'card_id',           c.id,
        'position',          dc.position,
        'id',                p.id,
        'firstname',         p.firstname,
        'surname_encoded',   p.surname_encoded,
        'country_code',      p.country_code,
        'club_id',           p.club_id,
        'job',               p.job,
        'job2',              p.job2,
        'note_g',            p.note_g,
        'note_d',            p.note_d,
        'note_m',            p.note_m,
        'note_a',            p.note_a,
        'rarity',            p.rarity,
        'skin',              p.skin,
        'hair',              p.hair,
        'hair_length',       p.hair_length,
        'evolution_bonus',   COALESCE(c.evolution_bonus, 0),
        'club_encoded_name', cl.encoded_name,
        'club_logo_url',     cl.logo_url
      ))
      FROM deck_cards dc
      JOIN cards c ON c.id = dc.card_id
      JOIN players p ON p.id = c.player_id
      LEFT JOIN clubs cl ON cl.id = p.club_id
      WHERE dc.deck_id = p_deck_id AND dc.is_starter = false
    ), '[]'::json)
  )
  INTO result
  FROM decks d
  WHERE d.id = p_deck_id;

  RETURN result;
END;
$$;
