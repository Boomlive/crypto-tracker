const { Pool } = require("pg");
require("dotenv").config();

const client = new Pool({
  host: process.env.HOST,
  port: process.env.POST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
  connectionTimeoutMillis: 5000, // Adjust the timeout value as needed
  idleTimeoutMillis: 60000, // Timeout after which idle clients are closed
  max: 20, // Maximum number of clients in the pool
});

module.exports = client;
