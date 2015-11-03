//BASE SETUP
//==================

//CALL THE PACKAGES --------------------------------
var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose');

//Initialize the app and a port to be running at
var app = express(), port = process.env.PORT || 8080;


//APP CONFIGURATION ---------------------------------
//Use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Configure our app to handle CORS requests
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Methods", 'GET, POST');
    res.setHeader("Access-Control-Allow-Headers", 'X-Requested-With, content-type, \Authorization');
    next();
});

//Log all requests
app.use(morgan('dev'));


//ROUTES FOR OUR API
//===================================================

//Basic route for the home page
app.get('/', function (req, res) {
    res.send('Welcome to the home page!');
});

//Get instance of the express router
var apiRouter = express.Router();

//Test route to make sure everything is working
//accessed at GET http://localhost:8080/api
apiRouter.get('/', function (req, res) {
    res.json({message: 'Hooray! Welcome to our API!'});
});


//More routes for our API will happen here

//REGISTER OUR ROUTES ---------------------------------
//All of our routes will be prefixed with /api
app.use('/api', apiRouter);



//START THE SERVER
//======================================================

app.listen(port);
console.log('Magic happens on port ' + port);
