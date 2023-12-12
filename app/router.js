const express = require('express');

const router = express.Router();

const mainController = require('./controllers/mainController');
const promoController = require('./controllers/promoController');

router.get('/', mainController.homePage);

//* la route qui concerne les promos
//* affiche la liste des promos
router.get('/promos', promoController.promosList);

router.use(mainController.errorPage);

module.exports = router;
