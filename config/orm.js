// Import MySQL connection
var connection = require("./connection.js");

// Assign an object for all our SQL statement functions
var orm = {
    // Select all function
    selectAll: function (tableInput, cb) {
        // Assign a variable to hold the MySQL query to select all rows (burgers) from the table passed to the function (burgers table)
        var queryString = "SELECT * FROM ??"; // Prevent injection
        // Establish a connection to the SQL database with the query
        connection.query(queryString, [tableInput], function (err, result) {
            // Check for errors
            if (err) {
                throw err;
            }
            // If no errors, pass the result of the query to the callback function from burger.js model
            cb(result);
        });

    },
    // Insert one burger into database
    insertOne: function (table, cols, vals, cb) {
        // Assign a variable to hold the MySQL query to insert one new row (burger (vals parameter)) from the user input into the table and field (cols) passed to the function
        var queryString = "INSERT INTO ?? (??) VALUES (?)"; // Prevent injection
        // Establish a connection to the SQL database with the query
        connection.query(queryString, [table, cols, vals], function (err, result) {
            // Check for errors
            if (err) {
                throw err;
            }
            // If no errors, pass the result of the query to the callback function from burger.js model
            cb(result);
        });
    },
    // Update one burger by 'devouring' it
    updateOne: function (table, ObjColVals, condition, id, cb) {
        // Assign a variable to hold the MySQL query to update one existing row (burger (parameter ObjColVals)) to condition ('devoured': Boolean value of 1), at the id specified by the 'Devour" button clicked, which comes to this from burger.js model by way of burgers_controller (routing)
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        // Establish a connection to the SQL database with the query
        connection.query(queryString, [table, ObjColVals, condition, id], function (err, result) {
            // Check for errors
            if (err) {
                throw err;
            }
            // If no errors, pass the result of the query to the callback function from burger.js model
            cb(result);
        });
    }
};
// Export the orm object for the model (burger.js).
module.exports = orm;