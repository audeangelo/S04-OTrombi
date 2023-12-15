const { Client } = require('pg');

const client = new Client(process.env.DB_URL);
console.log(client.database);

client.connect();

module.exports = client;
