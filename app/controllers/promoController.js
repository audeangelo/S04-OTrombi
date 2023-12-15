const { Client } = require('pg');

const client = new Client(process.env.DB_URL);

client.connect();

const promoController = {
  promosList: async (request, response) => {
    //* on a créer une fonction asynchrone en mettant async
    try {
      //* recupere la donnée grace à await sur la promesse
      const results = await client.query(`SELECT * FROM "promo"`);
      const promos = results.rows;
      response.render('promos.ejs', {
        promos,
      });
    } catch (error) {
      //* catch me permet de recuperer l'erreur de la traiter
      //* ca evite que le serveur crash
      console.log(error);
      response.status(500).send('Erreur de la base de donnée');
    }
  },
  promoDetail: async (request, response, next) => {
    const id = request.params.id;

    const sql = `SELECT * FROM "promo" WHERE id='${id}'`;

    try {
      const results = await client.query(sql);
      const promo = results.rows[0];
      if (promo) {
        response.render('promoDetail.ejs', {
          promo,
        });
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
      response.status(500).send('Erreur de la base de donnée');
    }
  },
};

module.exports = promoController;
