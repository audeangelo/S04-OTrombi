INSERT INTO "student"("first_name", "last_name", "promo_id") VALUES ('Chuck', 'Noris', '5');

INSERT INTO "promo" ("id", "name") VALUES ('734', 'Cesar');
--ERREUR:  une valeur NULL viole la contrainte NOT NULL de la colonne « id » dans la relation « promo »
--DETAIL:  La ligne en échec contient (null, Cesar, null).

-- ERREUR:  la valeur d'une clé dupliquée rompt la contrainte unique « promo_pkey »

UPDATE "promo" SET "name"='Cleo' WHERE "id"=5; 

DELETE FROM "promo" WHERE "id"=123;
--ERREUR:  UPDATE ou DELETE sur la table « promo » viole la contrainte de clé étrangère « student_promo_id_fkey » de la table « student »