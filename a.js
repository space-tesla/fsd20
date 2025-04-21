const mysql = require('mysql');

// Connect to MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'mcs',       
  password: 'Mcs@12345' 
});

// Create Database
connection.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL!");

  connection.query("CREATE DATABASE IF NOT EXISTS college_db", (err, result) => {
    if (err) throw err;
    console.log("Database 'college_db' created or already exists.");

    // Switch to the new database
    connection.changeUser({ database: 'college_db' }, err => {
      if (err) throw err;

      const createTable = `
        CREATE TABLE IF NOT EXISTS students (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100),
          age INT,
          course VARCHAR(50)
        )
      `;
      connection.query(createTable, (err, result) => {
        if (err) throw err;
        console.log("Table 'students' created or already exists.");
        connection.end();
      });
    });
  });
});
