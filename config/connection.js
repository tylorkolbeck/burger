var mysql = require("mysql")

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "password",
  database: "burgers_db",
})

connection.connect(function (err) {
  console.log(err || "Connected To Database.")
})

module.exports = connection
