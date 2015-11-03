//Load the express package and create our app
var express = require('express'),
    path = require('path');

var app = express();

//Send our index.html file to the user for the home page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//Start the server
app.listen(1337);
console.log("1337 is the magic port!");