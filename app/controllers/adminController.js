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
};

module.exports = adminController;
