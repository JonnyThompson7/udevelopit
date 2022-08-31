const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Carmine37!',
    database: 'election'
  });


module.exports = db;