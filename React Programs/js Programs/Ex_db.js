const mysql = require('mysql');

// Create connection to the specific database
const con = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '123',
  database: 'T_db'  // 👈 add this line
});

con.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL server and database T_db');
});

module.exports = con;
