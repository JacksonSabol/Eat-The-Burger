// Import Express
var express = require("express");
// Create an Express router for the app
var router = express.Router();
// Import the model (burger.js) to use its database functions
var burger = require("../models/burger.js");



// Export the router variable (HTTP routes) for server.js to us
module.exports = router;