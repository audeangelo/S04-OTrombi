const { Client } = require('pg');

const client = new Client(process.env.DB_URL);

client.connect();

const studentController = {
  studentListByPromo: async (request, response, next) => {
    //* j'ai besoin de faire 2 requetes pour envoyer :
    //* la promo trouvé : pour afficher son nom
    //* la liste des etudiants de la promo concerné

    try {
      const promoId = request.params.promoId;
      //* 1ere requete
      let sql = `SELECT * FROM "promo" WHERE "id"='${promoId}'`;
      const results = await client.query(sql);
      const promo = results.rows[0];
      //*---------

      //* 2eme requete
      let sqlStudents = `SELECT * FROM "student" WHERE "promo_id"='${promoId}'`;
      const studentResults = await client.query(sqlStudents);
      const studentsOfPromo = studentResults.rows;
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
