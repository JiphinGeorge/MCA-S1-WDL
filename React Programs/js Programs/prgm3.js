const con = require('./Ex_db.js');

const sql = "INSERT INTO students (rollno, name) VALUES (6, 'Rahul')";

con.query(sql, (err, result) => {
  if (err) throw err;
  console.log('Record inserted successfully!');
  con.end();
});
