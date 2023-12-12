const promos = require('../../data/promos.json');
//* on require les fichiers données dont on a besoin

const promoController = {
  promosList: (request, response) => {
    //* je renvoie le tableau de toutes les promos en données
    response.render('promos.ejs', {
      promos,
    });
  },
  promoDetail: (request, response, next) => {
    //* je récupere l'id passé en parametre de l'url (route)
    const id = request.params.id;
    //* trouve la promo qui correspond à l'id passé dans la route
    //! ici id renvoie un string et non un number, donc on parseInt pour bien etre sur de comparer les bons types !
    const foundPromo = promos.find((promo) => {
      return promo.id === parseInt(id);
    });

    //* si tu trouves une promo, fait un render de la page "promoDetail" et envoie lui la donnée foundPromo
    //* soit la promo correspondante
    if (foundPromo) {
      response.render('promoDetail.ejs', {
        promo: foundPromo,
      });
    } else {
      //* si foundPromo est undefined, continue dans le router, donc arrivera à la page 404
      next();
    }
  },
};

module.exports = promoController;
