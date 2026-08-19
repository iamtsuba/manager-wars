-- migrations/migration_tutorial_v2_interaction.sql
-- Ajoute deux colonnes pour rendre le tutoriel v2 vraiment jouable :
--   allow_interaction : si false, tous les clics du joueur sont bloqués
--                        pendant cette étape (sauf les boutons du popup) ;
--                        si true, le joueur peut cliquer sur le vrai bouton
--                        ciblé (dom_selector) et le reste de l'app.
--   show_next_button  : si true, un bouton "Suivant →" apparaît dans le
--                        popup pour avancer manuellement ; si false, l'étape
--                        avance automatiquement quand le joueur clique sur
--                        l'élément ciblé (dom_selector).

ALTER TABLE tutorial_steps_v2
  ADD COLUMN IF NOT EXISTS allow_interaction BOOLEAN DEFAULT false;

ALTER TABLE tutorial_steps_v2
  ADD COLUMN IF NOT EXISTS show_next_button BOOLEAN DEFAULT true;

NOTIFY pgrst, 'reload schema';

SELECT 'Colonnes allow_interaction et show_next_button ajoutées à tutorial_steps_v2' AS status;
