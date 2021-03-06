// Set up MySQL connection.
const mysql = require("mysql");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

let connection;
//Defines connection environment based on server location
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
   connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
  });
}
// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
