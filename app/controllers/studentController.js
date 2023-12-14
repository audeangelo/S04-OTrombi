const {Client} = require('pg')

const client = new Client(process.env.DB_URL_VM)

client.connect()

const studentController = {
  studentListByPromo: (request, response, next) => {
    const promoId = request.params.promoId;

    let sql = `SELECT * FROM "promo" WHERE "id"='${promoId}'`
    client.query(sql).then((results) => {
      const promo = results.rows[0]
      sql = `SELECT * FROM "student" WHERE "promo_id"='${promoId}'`
      client.query(sql).then(studentResults => {
        const studentsOfPromo = studentResults.rows
        if (promo) {
          response.render('promoStudents', {
            foundPromo: promo,
            students: studentsOfPromo,
          });
        } else {
          next()
        }
      }).catch(error => {
        console.log(error);
        response.status(500).send('erreur de la base de donnée')
      })
    }).catch(error => {
      console.log(error);
      response.status(500).send('erreur de la base de donnée')
    })
  },
};

module.exports = studentController;
