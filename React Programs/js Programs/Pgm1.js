const mysql = require('mysql');

// Create connection
const con = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '123'
});

// Connect to MySQL
con.connect((err) => {
  if (err) {
    console.error(' Error connecting:', err.stack);
    return;
  }
  console.log(' Connected to MySQL server');

  // Create a database if it doesn’t exist
  con.query('CREATE DATABASE IF NOT EXISTS T_db', (err, result) => {
    if (err) throw err;
    console.log(' Database "T_db" created or already exists.');

    // Close the connection
    con.end((err) => {
      if (err) console.error('Error closing connection:', err);
      else console.log(' Connection closed.');
    });
  });
});

module.exports = con;