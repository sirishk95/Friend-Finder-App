var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false})

app.use(bodyParser.json({ Type: 'application/** Json'}))

app.use(bodyParser.raw({ Type: 'application/vnd.custom-type'}))

app.use(bodyParser.text({ Type: 'text/html'}))

app.listen(PORT, function() {
    console.log("App listening on Port: " + PORT);

});
