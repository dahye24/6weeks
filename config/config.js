require('dotenv').config();

const development = {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DBNAME,
    "host": process.env.DB_ENDPOINT,
    "dialect": "mysql"
  }
  const test = {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

  const production = {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

<<<<<<< HEAD
  module.exports = {development, test, production}

=======
  module.exports = {development, test, production}
>>>>>>> 9b4b7c36aa5b9e26d59481020d04806aaf2e382d
