## Exo 1: find One Promo

- créer une méthode `findOnePromo` dans le datamapper
- elle doit etre asynchrone et prendre un parametre qui est `id` de la promo
- mettre la requete sql dans une variable = `recupere la promo dont l'id est egale au params de la fonction` 
- créer une constante `result` qui recupere le `await` de `client.query(sql)` qe l'on doit `return` 
- `require` la methode `findOnePromo` du dataMapper et l'utiliser dans la methode `promoDetails` du controller `promoController`
- lui envoyer un params l'id de la promo

## Exo 2: studentsOfPromo

Pour le controller `studentListByPromo`, j'ai besoin de la promo puis de la liste des étudiants à envoyer dans la views EJS
Donc 2 appels à la DB

```js
res.render('promoStudents',{
                    promo,
                    students: studentsOfPromo
                });
```

- créer une méthode `findStudentsByPromo` dans le datamapper
- elle doit etre asynchrone et prendre un parametre qui est `id` de la promo
- mettre le requete sql dans une variable = `recupere tous les étudiants qui ont le promo_id est egale à params de la fonction` 
- créer une constante `result` qui recupere le `await` de `client.query(sql)` et return result
- dans le controller `studentController`
- recupere la promo correspondante : 
  - `require` la methode `findOnePromo` du dataMapper 
  - l'utiliser avec `await` dans la methode `studentListByPromo async` que l'on mets dans une const `promo`
- recupere les etudiants de la promo correspondante :
  - `require` la methode `findStudentsByPromo` du dataMapper 
  - l'utiliser avec `await` dans la methode `studentListByPromo async` que l'on mets dans une const `studentsOfPromo`

Envoie promo et studentsOfPromo, dans le render de la views promoStudents.ejs