const client = require('./db_client');

const dataMapper = {
  async findAllPromos() {
    const sql = `SELECT * FROM "promo"`;
    const results = await client.query(sql);
    return results.rows;
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
