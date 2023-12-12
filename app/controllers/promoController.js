const promos = require('../../data/promos.json');

const promoController = {
  promosList: (request, response) => {
    response.render('promos.ejs', {
      promos, //* promos: promos
    });
  },
  promoDetail: (request, response) => {
    const id = request.params.id;

    console.log(id);
    response.render('promoDetail.ejs');
  },
};

module.exports = promoController;
