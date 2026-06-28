-- Cartes évolutives : current_note sur cards
ALTER TABLE public.cards ADD COLUMN IF NOT EXISTS current_note INT DEFAULT NULL;

-- Papyte : démarre à note_max (haut, descend en cas de défaite)
UPDATE public.cards c SET current_note = p.note_max
FROM public.players p
WHERE c.player_id = p.id AND c.card_type = 'player'
  AND p.rarity = 'papyte' AND p.note_max IS NOT NULL AND c.current_note IS NULL;

-- Pépite : démarre à note_min (bas, monte en cas de victoire)
UPDATE public.cards c SET current_note = p.note_min
FROM public.players p
WHERE c.player_id = p.id AND c.card_type = 'player'
  AND p.rarity = 'pepite' AND p.note_min IS NOT NULL AND c.current_note IS NULL;
