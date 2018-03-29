// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


// Initialize Express
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// changes methods in forms from posts to puts
app.use(methodOverride('_method'));

// Set up a static folder (public) for our web app
app.use(express.static('./public'));
var routing = require('./routes/routes.js');
app.use(routing);
var db = require('./connection.js');

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
