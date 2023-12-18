const dataMapper = require('../dataMapper');

const adminController = {
  async showAddStudent(request, response) {
    try {
      const promos = await dataMapper.findAllPromos();
      response.render('add_student.ejs', {
        promos,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send(error.message);
    }
  },
  async addStudent(request, response) {
    try {
      const studentInfo = request.body;
      const rowCount = await dataMapper.addStudent(studentInfo);
      if (rowCount !== 1) {
        response.status(500).send('Aucun enregistrement créé');
      } else {
        response.redirect(`/promo/${studentInfo.promo}/students`);
      }
    } catch (error) {
      console.log(error.message);
      response.status(500).send(error.message);
    }
  },
};

module.exports = adminController;
