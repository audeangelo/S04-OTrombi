const client = require('./db_client');

const dataMapper = {
  async findAllPromos() {
    const sql = `SELECT * FROM "promo"`;
    const results = await client.query(sql);
    return results.rows;
    //! ne pas mettre de try...catch dans le dataMapper
    //* parce que je n'ai pas accès à l'objet "response" donc je ne peux rien envoyer coté client / navigateur si il y a une erreur
  },
  async findOnePromo(promoId) {
    const sql = `SELECT * FROM "promo" WHERE id='${promoId}'`;
    const results = await client.query(sql);
    return results.rows[0];
  },
  async findStudentsByPromo(promoId) {
    const sql = `SELECT * FROM "student" WHERE "promo_id"='${promoId}'`;
    const results = await client.query(sql);
    return results.rows;
  },
};

module.exports = dataMapper;
