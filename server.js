var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var path = require("path");

var PORT = process.env.PORT || 8080;

var jsonParser = bodyParser.json()

app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json({ Type: 'application/** Json'}))

app.use(bodyParser.raw({ Type: 'application/vnd.custom-type'}))

app.use(bodyParser.text({ Type: 'text/html'}))

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on Port: " + PORT);

});
