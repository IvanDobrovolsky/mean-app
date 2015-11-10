//BASE SETUP
//=========================================

var config = require('./config'),
    path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose');

//Initialize the app
var app = express();


//APP CONFIGURATION
//=========================================
//Use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//Configure our js to handle CORS requests
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Methods", 'GET, POST');
    res.setHeader("Access-Control-Allow-Headers", 'X-Requested-With, content-type, \Authorization');
    next();
});

//Log all requests to the console
app.use(morgan('dev'));

//Connect to our database (hosted on modulus.io)
mongoose.connect(config.database);

//Set static files location
//Used for requests that our frontend will make
app.use(express.static(__dirname + '/public'));


// ROUTES FOR OUR API =================
// ====================================

// API ROUTES ------------------------
var apiRoutes = require('./app/routes/api')(app, express);
app.use('/api', apiRoutes);


// MAIN CATCHALL ROUTE ---------------
// SEND USERS TO FRONTEND ------------
// has to be registered after API ROUTES
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});



//START THE SERVER
//================
app.listen(config.port);
console.log('Magic happens on port: ' + config.port);