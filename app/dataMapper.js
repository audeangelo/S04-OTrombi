const client = require('./db_client');

const dataMapper = {
  async findAllPromos() {
    const sql = `SELECT * FROM "promo"`;
    const results = await client.query(sql);
    return results.rows;
    //! ne pas mettre de try...catch dans le dataMapper
    //* parce que je n'ai pas accès à l'objet "response" donc je ne peux rien envoyer coté client / navigateur si il y a une erreur
  },
};

module.exports = dataMapper;
