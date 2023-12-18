const express = require('express');

const router = express.Router();

const mainController = require('./controllers/mainController');
const promoController = require('./controllers/promoController');
const studentController = require('./controllers/studentController');
const adminController = require('./controllers/adminController');
const authController = require('./controllers/authController');

const authentification = require('./middleware/authentification');

router.get('/', mainController.homePage);

router.get('/promos', promoController.promosList);
router.get('/promo/:id', promoController.promoDetail);

router.get('/promo/:promoId/students', studentController.studentListByPromo);

router.get(
  '/admin/addStudent',
  authentification.isAdmin,
  adminController.showAddStudent
);
router.post('/admin/addStudent', adminController.addStudent);

router.post('/login', authController.postLogin);

router.use(mainController.errorPage);

module.exports = router;
