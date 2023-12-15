# Erreurs classiques

## Serveur

- `address already in use :::3000` : vous avez lancé deux fois le même serveur ! Il faut le kill !

- `[nodemon] app crashed - waiting for file changes before starting...` : erreur de syntaxe qqpart, lorsqu'on teste la requête on arrive sur un bout de code pété, regarder l'ERROR plus haut dans le terminal

- Pensez à relancer les serveurs régulièrement, ça arrive que ça pète !

  - Si jamais un serveur à du mal à se quitter :
  - MACOS / linux: `killall node` => termine tous les processus Node
  - windows : `taskkill /f /im node.exe`

- Est-ce que mon serveur est lancé ? Et pas crashé

- Est-ce que j'accède au bon port

- `Cannot find module` : vous ne lancez pas le bon fichier ou pas au bon endroit

## EJS

- `Error: Could not find matching close tag for "<%=".` : oublie de fermeture d'une balise

- `SyntaxError: Unexpected token '{'` : oublie d'un character avant '{' par exemple

- `includ is not defined`: la variable n'existe pas dans .locals (vérifier sa présence ou le nom de la variable)

## SQL

`FATAL:  authentification par mot de passe échouée pour l'utilisateur  « trombi »` : mauvais MDP
`Trombi pas =>` oubli du ;
`ERREUR:  la colonne « Kimchi » n'existe pas LINE 1: select * from promo where name="Kimchi";` => "" au lieu des ''
`error near ` => caractere manquant `,` ou en trop

- `NOT NULL` : impossible de laisser le champ vide
  - ` une valeur NULL viole la contrainte NOT NULL de la colonne « id » dans la relation « promo »`
- `UNIQUE` : Ce champs sera unique par ligne
  - `-- ERREUR:  la valeur d'une clé dupliquée rompt la contrainte unique « promo_pkey »`

- `REFERENCES( "table"."prop" )` : impossible d'avoir un enregistrement dont la valeur n'existe pas dans l'autre table
`ERREUR:  UPDATE ou DELETE sur la table « promo » viole la contrainte de clé étrangère « student_promo_id_fkey » de la table « student » DETAIL:  La clé (id)=(123) est toujours référencée à partir de la table « student ».`