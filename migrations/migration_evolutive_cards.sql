-- S'assurer que current_note existe sur cards
ALTER TABLE public.cards
  ADD COLUMN IF NOT EXISTS current_note INT DEFAULT NULL;

-- Initialiser current_note à note_max pour les cartes pépite et papyte existantes
-- (sans note actuelle définie)
UPDATE public.cards c
SET current_note = p.note_max
FROM public.players p
WHERE c.player_id = p.id
  AND c.card_type = 'player'
  AND p.rarity IN ('pepite', 'papyte')
  AND p.note_max IS NOT NULL
  AND c.current_note IS NULL;
