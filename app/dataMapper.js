const client = require('./db_client');

const dataMapper = {
  async findAllPromos() {
    const sql = `SELECT * FROM "promo" ORDER BY "name" ASC`;
    const results = await client.query(sql);
    return results.rows;
  },
  async findOnePromo(promoId) {
    const sql = `SELECT * FROM "promo" WHERE id=$1`;
    const values = [promoId];
    const results = await client.query(sql, values);
    return results.rows[0];
  },
  async findStudentsByPromo(promoId) {
    const sql = `SELECT * FROM "student" WHERE "promo_id"=$1`;
    const values = [promoId];
    const results = await client.query(sql, values);
    return results.rows;
  },
  async addStudent(studentInfo) {
    const sql = `INSERT INTO "student"("first_name", "last_name", "github_username", "promo_id") VALUES ($1,$2,$3,$4)`;
    const values = [
      studentInfo.first_name,
      studentInfo.last_name,
      studentInfo.github_username,
      studentInfo.promo,
    ];
    const results = await client.query(sql, values);
    //* rowCount renvoie le nombre de ligne ou enregistrement qui sont affecté par une insertion, modification ou suppression
    return results.rowCount;
  },
};

module.exports = dataMapper;
