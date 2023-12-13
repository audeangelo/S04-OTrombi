const promos = require('../../data/promos.json');
const students = require('../../data/students.json');

const studentController = {
  studentListByPromo: (request, response, next) => {
    const promoId = request.params.promoId;

    const foundPromo = promos.find((promo) => {
      return promo.id === parseInt(promoId);
    });

    if (foundPromo) {
      const studentsOfPromo = students.filter((student) => {
        return student.promo === parseInt(promoId);
      });

      response.render('promoStudents', {
        foundPromo,
        students: studentsOfPromo,
      });
    } else {
      //   response.status(404).render('404.ejs');
      next();
    }
  },
};

module.exports = studentController;
