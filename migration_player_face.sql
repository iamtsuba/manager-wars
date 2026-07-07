-- Migration : champ face sur players
ALTER TABLE players ADD COLUMN IF NOT EXISTS face text DEFAULT NULL;
-- Exemple de valeur : 'Europeans/euro1162.png' ou 'Oceanians/oc207.png'
-- L'URL complète sera : BASE_URL + 'faces/' + face
NOTIFY pgrst, 'reload schema';
