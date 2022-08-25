const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Carmine37!',
    database: 'election'
  },
  console.log('Connected to the eleciton database.')
);

db.query(`SELECT * FROM canidates`, (err, rows) => {
  console.log(rows);
});

// Not Found
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});