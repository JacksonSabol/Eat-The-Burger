// Import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

// Create the burger model
var burger = {
    // Select all burgers function - parameter 'cb' is a callback function from the the burgers_controller
    selectAll: function (cb) {
        // Invoke the ORM's selectAll function to query the SQL database with the tableInput as "burgers"
        orm.selectAll("burgers", function (res) {
            // Pass the results of the SQL database query to the callback function passed by burgers_controller once the results are received
            cb(res);
        });
    },
    // Insert one burger function - cols parameter is key sent from burgers_controller, vals is the value, and cb is the callback
    insertOne: function (cols, vals, cb) {
        // Invoke the ORM's insertOne function to query the SQL database to insert one into the table of "burgers", the field of "cols" (burger_name from burgers_controller), with the value of vals (user inputted burger name)
        orm.insertOne("burgers", cols, vals, function (res) {
            // Pass the results of the SQL database query to the callback function passed by burgers_controller once the results are received
            cb(res);
        });
    },
    // Update one burger function (i.e. devour one burger) - objColValues parameter is key from burgers_controller (devoured), condition is boolean value (of 1 for true), id is the id of the row (burger) to be updated as 'devoured', and cb is the callback function to return the data to burgers_controller
    updateOne: function (objColValues, condition, id, cb) {
        // Invoke the ORM's updateOne function to query the SQL database to update one row (burger) in the table of "burgers": update the field of "objColValues" (devoured from burgers_controller) to the condition (1 for true from burgers_controller), at the id specified by the 'Devour" button clicked which also comes to this from burgers_controller (routing)
        orm.updateOne("burgers", objColValues, condition, id, function (res) {
            // Pass the results of the SQL database query to the callback function passed by burgers_controller once the results are received
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgers_controller.js)
module.exports = burger;