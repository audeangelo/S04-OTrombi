-- Selectionner tous les champs de la table student
SELECT * FROM "student";

-- Selectionner uniquement les prénoms des students
SELECT "first_name" FROM "student";

-- Selectionner uniquement les prénoms et les noms des students
SELECT "first_name", "last_name" FROM "student";

-- Selectionner la promotion dont le nom est Kimchi
SELECT * FROM "promo" WHERE "name"='Kimchi';

-- 722
SELECT * FROM "promo" WHERE "id"='722';

-- Selectionner un étudiant dont le prénom est Alex et le nom de famille est Keebler
SELECT * FROM "student" WHERE "first_name"='Alex' AND "last_name"='Keebler';

SELECT * FROM "student" WHERE "first_name"='Alex' OR "first_name"='Lesly';

-- Selectionner les élèves dont le prénom commence par un A
-- % s'appelle un wildcard (sorte d'expression réguliere) = n'importe quel caractère
SELECT * FROM "student" WHERE "first_name" LIKE 'A%';

SELECT * FROM "student" WHERE "first_name" ILIKE 'al%'; -- insensible à la casse (majuscule/minuscule)

-- Selectionner toutes les promos dont le dernier caractère est 'e'
SELECT * FROM "student" WHERE "first_name" LIKE '%e';

SELECT * FROM "student" WHERE "first_name" ILIKE '%le%'; -- insensible à la casse (majuscule/minuscule)

-- Limiter
SELECT * FROM "student" LIMIT 10;

-- Trier
SELECT * FROM "student" ORDER BY "first_name" ASC LIMIT 10; -- Ordre croissant (alphabétique)
SELECT * FROM "student" ORDER BY "first_name" DESC LIMIT 10;  -- Ordre décroissant (alphabétique)

-- selectionner les 3 ere promo dont le nom commence par un 'a' trier le nom par ordre decroissant 
SELECT * FROM "promo" WHERE "name" ILIKE 'a%' ORDER BY "name" DESC LIMIT 3;
