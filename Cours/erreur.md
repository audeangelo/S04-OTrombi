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