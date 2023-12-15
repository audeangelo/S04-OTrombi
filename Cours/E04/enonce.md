## Exo 1: find One Promo

- créer une méthode `findOnePromo` dans le datamapper
- elle doit etre asynchrone et prendre un parametre qui est `id` de la promo
- mettre la requete sql dans une variable = `recupere la promo dont l'id est egale au params de la fonction` 
- créer une constante `result` qui recupere le `await` de `client.query(sql)` qe l'on doit `return` 
- `require` la methode `findOnePromo` du dataMapper et l'utiliser dans la methode `promoDetails` du controller `promoController`
- lui envoyer un params l'id de la promo