// Import MySQL Node Module
var mysql = require("mysql");

// Create a connection to localhost and the MySQL database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});

connection.connect(function (err) {
    // Check for errors
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    // If no errors are thrown, log the connection id
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;