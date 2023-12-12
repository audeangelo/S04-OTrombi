const express = require('express');

const router = express.Router();

const mainController = require('./controllers/mainController');
const promoController = require('./controllers/promoController');

router.get('/', mainController.homePage);

router.get('/promos', promoController.promosList);
router.get('/promo/:id', promoController.promoDetail);

router.use(mainController.errorPage);

module.exports = router;
