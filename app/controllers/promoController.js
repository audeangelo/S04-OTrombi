const promos = require('../../data/promos.json');

const promoController = {
  promosList: (request, response) => {
    response.render('promos.ejs', {
      promos,
    });
  },
  promoDetail: (request, response, next) => {
    const id = request.params.id;
    const foundPromo = promos.find((promo) => {
      return promo.id === parseInt(id);
    });

    if (foundPromo) {
      response.render('promoDetail.ejs', {
        promo: foundPromo,
      });
    } else {
      next();
    }
  },
};

module.exports = promoController;
