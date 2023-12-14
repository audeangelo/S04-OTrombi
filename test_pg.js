const { Client } = require('pg');

//* postgres://USERNAME:MDP@HOST:PORT/DATABASE

require('dotenv').config();

const client = new Client(process.env.DB_URL);

//* On connecte le client -> créer un tunnel entre notre machine et la BDD
client.connect();

let id = 722;
//* `SELECT * from "promo" WHERE "id"='${id}'`

let sql = `SELECT * FROM "student" LIMIT 10`;

//* Methode 1: callback
client.query(sql, (error, result) => {
  if (error) {
    console.log(error);
  } else {
    //* on affiche simplement le résulat et on peut ensuite faire pleins de trucs
    //* avec ce tableau de resultats (filter, find), response.render
    //*result.rows renverra toujours un array
    console.table(result.rows);
  }
  client.end();
});

//* Methode 2: via la promesse (then...catch)

/* const resultat = client.query('SELECT * from "promo"')

console.log(resultat); */
