const promos = require('../../data/promos.json');

const promoController = {
  promosList: (request, response) => {
    response.render('promos.ejs', {
      promos, //* promos: promos
    });
  },
};

module.exports = promoController;
