const { Pool } = require("pg");
require("dotenv").config();

// const client = new Client({
//   host: process.env.HOST,
//   port: process.env.POST,
//   database: process.env.DATABASE,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
// });
const poolConfig = {
  max: 5,
  min: 2,
  idleTimeoutMillis: 600000,
};

const Host = process.env.HOST;
const Port = process.env.POST;
const Database = process.env.DATABASE;
const Username = process.env.USER;
const Password = process.env.PASSWORD;

poolConfig.connectionString = `postgres://${Username}:${Password}@${Host}/${Database}`;

const client = new Pool(poolConfig);

module.exports = client;
