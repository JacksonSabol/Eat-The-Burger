// Import Express
var express = require("express");
// Create an Express router for the app
var router = express.Router();
// Import 
var burger = require("../models/burger.js");



// Export the router variable (HTTP routes) for server.js to us
module.exports = router;