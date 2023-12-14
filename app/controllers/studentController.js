const {Client} = require('pg')

const client = new Client(process.env.DB_URL_VM)

client.connect()

const studentController = {
  studentListByPromo: (request, response, next) => {
    const promoId = request.params.promoId;

    let sql = `SELECT * FROM "promo" WHERE "id"='${promoId}'`
    //* la 1ere requete récupére la promo concerné
    //* j'en ai besoin parce que je dois renvoyer dans le response.render, la donnée promo 
    //* pour notamment afficher le titre de la promo
    client.query(sql).then((results) => {
      const promo = results.rows[0]
      //* une fois la promo récupérer je fais une 2eme requete, pour cette fois
      //* récupérer tous les étudiants appartenant à la promo concerné
      
      client.query(`SELECT * FROM "student" WHERE "promo_id"='${promoId}'`).then(studentResults => {
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

    /* const foundPromo = promos.find((promo) => {
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
    } */
  },
};

module.exports = studentController;
