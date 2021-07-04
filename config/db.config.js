const { createPool} = require('mysql');

// Connection pool creation -START
const db = createPool({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'jobportal',
    connectionLimit: 10
});

// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'ritu_test'
// });

// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to MySQL Server!');
// });

module.exports = db;