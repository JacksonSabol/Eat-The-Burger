// Import Express
var express = require("express");
// Create an Express router for the app
var router = express.Router();
// Import the model (burger.js) to use its database functions
var burger = require("../models/burger.js");

// Create all the routes and set up logic within those routes where required
// Root route GET request
router.get("/", function (req, res) {
    // When the root route is hit (GET request made by the browser), invoke the selectAll function inside burger.js
    burger.selectAll(function (data) {
        // Assign a variable to point to object to hold the data from the SQL database
        var hbsObject = {
            burgers: data
        };
        // Log for testing
        console.log(hbsObject);
        // Render the new object to the 'index.handlebars' template
        res.render("index", hbsObject);
    });
});
// Root route POST request
router.post("/", function (req, res) {
    // When a POST request is made to the root route (a new burger is made), invoke the insertOne function inside burger.js
    // Pass the appropriate parameters: burger_name for field name to be targeted, the value inside the input field for the name of the new burger, and the callback function
    burger.insertOne("burger_name", req.body.name, function () {
        // Since the ORM adds the new burger object to the database, redirecting to the root route will trigger the selectAll function and display the new burger
        res.redirect("/");
    });
});
// PUT request - update burger as 'devoured' by SQL id
router.put("/:id", function (req, res) {
    // When a PUT request is made to the root route (update a burger), invoke the updateOne function in burger.js
    // Pass the appropriate parameters: field 'devoured', boolean condition value of true (1 in MySQL), 'id' of row (burger) to be updated, and callback function
    burger.updateOne("devoured", 1, req.params.id, function () {
        // Since the ORM updates the burger object to the database, redirecting to the root route will trigger the selectAll function and display the updated burger appropriately
        res.redirect("/");
    });
});

// Export the router variable (HTTP routes) for server.js to us
module.exports = router;