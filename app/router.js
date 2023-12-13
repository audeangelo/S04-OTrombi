const express = require('express');

const router = express.Router();

//* le controller correpond à la callback de la route
//* donc il a les meme parametre (request, response, next)
//* sépare les controllers par la spécificité des routes (promo = 1 controller .js / main ou global = 1 controller .js)
const mainController = require('./controllers/mainController');
const promoController = require('./controllers/promoController');
const studentController = require('./controllers/studentController');

router.get('/', mainController.homePage);

//* la route qui renvoie la listes des promos
router.get('/promos', promoController.promosList);
//* la route qui va nous renvoyer une seule promo dont l'id est un parametre
router.get('/promo/:id', promoController.promoDetail);

router.get('/promo/:promoId/students', studentController.studentListByPromo);

//* un controller spécifique pour la page error que je mets dans le main controller (controller globale)
router.use(mainController.errorPage);

module.exports = router;
