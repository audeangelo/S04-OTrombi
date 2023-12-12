const express = require('express');

const router = express.Router();

const mainController = require('./controllers/mainController');
const promoController = require('./controllers/promoController');

router.get('/', mainController.homePage);

//* la route qui concerne les promos
//* affiche la liste des promos
router.get('/promos', promoController.promosList);
//* ajouter la route dynamique /promo/:id
//* mettre la methode dans le fichier promoController qui fait un render de la vue promoDetail.ejs
router.get('/promo/:id', promoController.promoDetail);

router.use(mainController.errorPage);

module.exports = router;
