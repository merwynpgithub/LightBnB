require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
});

pool.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected Successfully");
  }
});

module.exports = pool;