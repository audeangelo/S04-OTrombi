//* require('dotenv').config()

const {Client} = require('pg')

const client = new Client(process.env.DB_URL_VM)

client.connect()

const promoController = {
  promosList: (request, response) => {

    //* methode 1 avec la callback
    //* problemen la callback gere l'erreur et le resultat en meme temps
    /* client.query(`SELECT * FROM "promo"`, (error, results) => {
      if (error) {
        console.log(error);
        response.status(500).render('404')
      } else {
        const promos = results.rows
        response.render('promos.ejs', {
          promos
        });
      }
      // client.end()
    }) */
    //* methode 2 avec promesse then...catch
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

    /* const foundPromo = promos.find((promo) => {
      return promo.id === parseInt(id);
    });
    if (foundPromo) {
      response.render('promoDetail.ejs', {
        promo: foundPromo,
      });
    } else {
      next();
    } */
  },
};

module.exports = promoController;
