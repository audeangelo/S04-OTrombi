const {Client} = require('pg')

const client = new Client(process.env.DB_URL_VM)

client.connect()

const promoController = {
  promosList: (request, response) => {
    client.query(`SELECT * FROM "promo"`).then((results) => {
      const promos = results.rows
      response.render('promos.ejs', {
        promos
      })
    }).catch((error) => {
      console.log(error);
      response.status(500).send('Erreur de la base de donnée')
    })
  },
  promoDetail: (request, response, next) => {
    const id = request.params.id;

    client.query(`SELECT * FROM "promo" WHERE id='${id}'`).then((results) => {
      const promo = results.rows[0]
      if (promo) {
        response.render('promoDetail.ejs', {
          promo
        });
      } else {
        next()
      }
    }).catch(error => {
      console.log(error);
      response.status(500).send('Erreur de la base de donnée')
    })
  },
};

module.exports = promoController;
