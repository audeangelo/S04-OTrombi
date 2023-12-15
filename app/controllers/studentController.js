const dataMapper = require('../dataMapper');

const studentController = {
  studentListByPromo: async (request, response, next) => {
    try {
      const promoId = request.params.promoId;
      //* 1ere requete
      const promo = await dataMapper.findOnePromo(promoId);
      //*---------

      //* 2eme requete
      const studentsOfPromo = await dataMapper.findStudentsByPromo(promoId);
      //*----------

      if (promo) {
        response.render('promoStudents.ejs', {
          foundPromo: promo,
          students: studentsOfPromo,
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

module.exports = studentController;
