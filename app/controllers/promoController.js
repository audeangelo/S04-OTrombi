const dataMapper = require('../dataMapper.js');

const promoController = {
  promosList: async (request, response) => {
    try {
      const promos = await dataMapper.findAllPromos();
      response.render('promos.ejs', {
        promos,
      });
    } catch (error) {
      console.log(error);
      response.status(500).send('Erreur de la base de donnée');
    }
  },
  promoDetail: async (request, response, next) => {
    const promoId = request.params.id;

    try {
      const promo = await dataMapper.findOnePromo(promoId);
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
