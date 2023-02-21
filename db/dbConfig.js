const pgp = require("pg-promise")();
require("dotenv").config();

const { DATABASE_URL, PG_PORT, PG_HOST, PG_DATABASE, PG_USER } = process.env;

const cn = DATABASE_URL
  ? {
      connectionString: DATABASE_URL,
      max: 30,
      ssl: false,
    }
  : {
      host: PG_HOST,
      port: PG_PORT,
      database: PG_DATABASE,
      user: PG_USER,
    };

// alt from express docs
// var db = pgp('postgres://username:password@host:port/database')

const db = pgp(cn);

module.exports = db;
