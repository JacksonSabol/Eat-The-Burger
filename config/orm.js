// Import MySQL connection
var connection = require("./connection.js");

// Assign an object for all our SQL statement functions
var orm = {
    // Select all function
    selectAll: function (tableInput, cb) {
        // Assign a variable to hold the MySQL query to select all burgers from the table passed to the function (burgers table)
        var queryString = "SELECT * FROM ??"; // Prevent injection
        // Establish a connection to the SQL database with the query
        connection.query(queryString, [tableInput], function (err, result) {
            // Check for errors
            if (err) {
                throw err;
            }
            // If no errors, pass the result of the query to the callback function
            cb(result);
        });

    },
    // Insert one burger into database
    insertOne: function (table, cols, vals, cb) {
        // Assign a variable to hold the MySQL query to insert one new burger from the user input into the table passed to the function
        var queryString = "INSERT INTO ?? (??) VALUES (?)"; // Prevent injection
        // Establish a connection to the SQL database with the query
        connection.query(queryString, [table, cols, vals], function (err, result) {
            // Check for errors
            if (err) {
                throw err;
            }
            // If no errors, pass the result of the query to the callback function
            cb(result);
        });
    },
    // Update one burger by 'devouring' it
    updateOne: function (table, condition, ObjColVals, id, cb) {
        // Assign a variable to hold the MySQL query to update one existing burger to 'devoured' (condition: Boolean value of 1)
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        // Establish a connection to the SQL database with the query
        connection.query(queryString, [table, condition, ObjColVals, id], function (err, result) {
            // Check for errors
            if (err) {
                throw err;
            }
            // If no errors, pass the result of the query to the callback function
            cb(result);
        });
    }
};
// Export the orm object for the model (burger.js).
module.exports = orm;