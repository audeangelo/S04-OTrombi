SELECT * FROM "promo" ORDER BY "name" ASC;

SELECT * FROM "student" ORDER BY "last_name" ASC;

SELECT * FROM "student" WHERE "promo_id"='135';
SELECT * FROM "student" WHERE "promo_id"=135;

SELECT * FROM "student" WHERE "last_name" ILIKE '%max%' OR "first_name" ILIKE '%max%';

-- AS permet de renommer le champs juste pour la requete
SELECT "id", "name" AS nom_promo  FROM "promo" WHERE id=135;