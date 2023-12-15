# SQL Cheat Sheet

- [SQL Cheat Sheet](#sql-cheat-sheet)
  - [Postgres](#postgres)
    - [Se connecter](#se-connecter)
    - [Creation d'un utilisateur et d'une BDD](#creation-dun-utilisateur-et-dune-bdd)
    - [Supprimer un utilisateur ou une BDD](#supprimer-un-utilisateur-ou-une-bdd)
    - [Import Script `SQL`](#import-script-sql)
      - [Exécuter un script SQL](#exécuter-un-script-sql)
        - [Méthode 1 : depuis `psql`](#méthode-1--depuis-psql)
        - [Méthode 2 : depuis `bash`](#méthode-2--depuis-bash)
  - [Connection express: npm pg](#connection-express-npm-pg)
    - [Schéma classique pour les addresse de BDD :](#schéma-classique-pour-les-addresse-de-bdd-)
    - [avec un objet:](#avec-un-objet)
  - [SQL - Structured Query Langage](#sql---structured-query-langage)
  - [CRUD](#crud)
    - [Create - Créer des enregistrements](#create---créer-des-enregistrements)
    - [Read - Selection des enregistrements](#read---selection-des-enregistrements)
    - [Update - Modifier des enregistrements](#update---modifier-des-enregistrements)
    - [Delete - Supprimer des enregistrements](#delete---supprimer-des-enregistrements)
  - [Fonction préparée](#fonction-préparée)

## Postgres

Rappel comannde `\` :

- (MAC) : `OPT + MAJ + /`
- (PC) : `ALT GR + 8`

`flèche vers le haut` = liste l'historique des commandes précédentes
`click gauche` = pour coller du texte

`\q`: pour (END)
`\c + nomdelabase + nom user`: basculer d'un db à une autre
`\l`: List des databases
`\dt`: Listes des tables
`\d + nom`: Décrire une table
`\du`: Voir tous les utilisateurs

`q`: pour quitter une "liste" dans `psql` d'une table

`exit`: quitter psql
`CTRL + D` : quitter psql
`quit`: quitter psql

`postgres->` manque le ; pour finir la requete

### Se connecter

Se connecter à notre Postgres :

- ✅ sur Ubuntu `sudo -i -u postgres psql` + MDP de la VM
- ✅ sur windows : (`psql -U postgres -d postgres -h localhost -p 5432`) + MDP de postgres (défini lors de son install)

Vous devriez avoir un prompt qui ressemble à ça, signe que la connexio est faite !

[lien fiche recap kourou](https://kourou.oclock.io/ressources/fiche-recap/postgresql/)

```
postgres=#
```

Se connecter à une BDD en particulier (**une fois l'utilisateur et sa bdd créé**) :

- `psql -U USER -d DATABASE -h HOST -p PORT`
- ex: `psql -U trombi -d trombi -h localhost -p 5432`

**ON NE TRAVAILLERA PAS SUR LE PROFIL POSTGRES**

### Creation d'un utilisateur et d'une BDD

Créer un utilisateur :

- ✅ `CREATE ROLE trombi WITH LOGIN PASSWORD 'trombi';`
  - `\du` -> pour vérifier !

Créer la base de données :

- ✅ `CREATE DATABASE trombi WITH OWNER trombi;`
  - `\l` -> pour vérfier !

Se connecter à cette nouvelle base (depuis `psql`)

- ✅ `\c trombi trombi` : pour se connecter à la base `trombi` (base en premier) en tant qu'utilisateur `trombi` (user en premier)
  - si on demande le MDP, c'est celui qu'on a choisit pour l'utilisateur aux étapes précédentes
- `\conninfo` : donne des info sur la connexion actuelle

Alternativement, se connecter à cette nouvelle base (depuis `bash`, et non `psql`)

- ✅ `psql -U trombi -d trombi`
- Alternativement : `psql -U trombi -d trombi -h localhost` (astuce si `Peer authentication failed`)

### Supprimer un utilisateur ou une BDD

- `DROP DATABASE <nom_base>;`
- `DROP ROLE <nom_user>;`


### Import Script `SQL`

**Attention l'utilisateur doit etre le owner de la DB pour pouvoir faire l'importation**

#### Exécuter un script SQL

##### Méthode 1 : depuis `psql`

- S'assurer d'être sur la bonne base ET sur le bon utilisateur : `\c nomDb nomUser`

- ✅ `\i 'chemin_absolu_vers_le_fichier_sql_a_executer.sql'`

- Astuce: ***bien etre sur l'utilisateur qui sera `owner` lors de l'import*** 

- Astuce : drag&drop un fichier VSCode dans le terminal affiche son chemin absolu !

- Ex : `\i ./create_db.sql`

##### Méthode 2 : depuis `bash`

- ✅ `psql -U trombi -d trombi -f chemin_absolu_ou_relatif_du_fichier_a_executer.sql`

  - `f` comme `file`

- Ex : `psql -U trombi -d trombi -f ./data/create_db.sql`

## Connection express: npm pg

doc: https://node-postgres.com/

### Schéma classique pour les addresse de BDD : 

format: protocol://user:password@host:port/database_name

```js
const client = new Client(`postgres://etudiant:js4life@pg.oclock.lan:5432/trombi`);
```

### avec un objet:

```sql
const client = new Client({
  host: 'pg.oclock.lan',
  port: 5432,
  database: 'trombi',
  user: 'etudiant',
  password: 'js4life',
})
```

## SQL - Structured Query Langage

C'est un langage (universel dans le sens où il est utilisé par plusieurs SGBD diférent) pour requeter des données dans une BDD !

Si on cherche une commande particulière, [la documentation est votre amie](https://sql.sh/) !

Notre première requête SQL :

- `SELECT * FROM "student";`

Attention :

- ne pas oublier le `;`
- pour les **noms de table**, ajouter des guillemets double `"`
- pour les **noms de champs** (colonne), ajouter des guillemets double `"`
- pour les **valeurs** string, ajouter des guillemets simple `'`
- sensible à la case (`F ≠ f`)


## CRUD

Gestion du **contenu** de la table => ce qu'il y a DANS la table

### Create - Créer des enregistrements

Enregistrement = une ligne dans la table

```sql
-- Ajouter la promo Kimchi dans la table promo en vous servant de la documentation de SQL !

INSERT INTO "promo"
  ("id", "name", "github_organization") -- Recommandation : précisez les champs pour faciliter la maintenance
VALUES
  (1, 'Kimchi', 'https://github.com/orgs/O-clock-Kimchi')
;

-- Ou en une seule ligne
INSERT INTO "promo" ("id", "name", "github_organization") VALUES (1, 'Kimchi', 'https://github.com/orgs/O-clock-Kimchi');

-- Sans préciser les champs, il insert suivant l'ordre des commandes
INSERT INTO "promo" VALUES (1, 'Kimchi', 'https://github.com/orgs/O-clock-Kimchi');

-- Insertion de plusieurs enregistrements d'un seul coup
INSERT INTO "promo" VALUES
  (2, 'Mochi', 'https://github.com/orgs/O-clock-Mochi'),
  (3, 'Tartiflette', 'https://github.com/orgs/O-clock-Tartiflette')
;

-- Pour vérifier :
SELECT * FROM "promo";


-- Insérer un étudiant dans la table "student"
-- Pas d'ID -> le SERIAL prend le relais
-- L'ordre des propriété n'as pas d'importance
-- Certaines valeurs peuvent être null (pas de valeur)
INSERT INTO "student"
  ("last_name", "first_name", "github_username", "profile_picture_url")
VALUES
  ('Potter', 'Harry', 'hpotter7', NULL)
;
```

### Read - Selection des enregistrements

```sql
SELECT * FROM "promo";
```

### Update - Modifier des enregistrements

```sql
UPDATE "promo"
SET "github_organization" = 'https://github.com/orgs/O-clock-Tartif3000'
WHERE id = 3;
```

### Delete - Supprimer des enregistrements

Attention, ça supprime TOUS les enregistrements qui matchent

```sql
DELETE FROM "promo" WHERE id = 2; -- Supprime la promo dont l'ID est 2

DELETE FROM "student" WHERE first_name = 'Alex'; -- Supprime TOUS les students dont le prénom est alex

TRUNCATE TABLE "promo"; -- Vide complètement la table (mais garde la structure de la table)
```

## Fonction préparée

Dans PSQL, `$1` fait référence au 1er parametre passé dans la fonction ex: ici [id]. `$2` sera alors le 2eme argument...

Params, envoyer dans la fonction `client.query(sql,[id])`

```
const sql = 'SELECT * FROM "promo" WHERE "id"=$1';
const result = await client.query(sql,[id]);
```

équivalent à

```
const sql = `SELECT * FROM "promo" WHERE "id"=${id}`;
const result = await client.query(sql);
```

https://www.postgresql.org/docs/current/xfunc-sql.html#XFUNC-SQL-FUNCTION-ARGUMENTS
