const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  host: process.env.HOST,
  port: process.env.POST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

module.exports = client;
