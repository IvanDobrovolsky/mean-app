//Load the express package and create our app
var express = require('express'),
    path = require('path');

var app = express();

//Send our index.html file to the user for the home page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});



//Create routes for the admin section

//Get an instance of the router
var adminRouter = express.Router();

//Route Middleware that will happen on every request
adminRouter.use(function (req, res, next) {

    //Log each request to the console
    console.log(req.method, req.url);

    //Continue doing what we were doing and go to the router
    next();
});

//Admin main page. The dashboard (http://localhost:1337/admin)
adminRouter.get('/', function (req, res) {
    res.send("I am the dashboard!");
});

//Users page (http://localhost:1337/users)
adminRouter.get('/users', function (req, res) {
    res.send("I show all the users!");
});

//Posts page (http://localhost:1337/admin/posts)
adminRouter.get('/posts', function (req, res) {
    res.send("I show all the posts!")
});


//Route middleware to validate :name
adminRouter.param('name', function (req, res, next, name) {
    //Do validation on name here

    //validation

    //Log something so we know its working
    console.log("Doing name validation on " + name);

    //Once validation is done save the new item in the req
    req.name = name;

    //Go to the next thing
    next();
});

adminRouter.get('/users/:name', function (req, res) {
    res.send('Hello ' + req.params.name + '!');
});

//Apply the routes to our application
app.use('/admin', adminRouter);


//Login route
app.route('/login')
    //Show the form (GET http://localhost:1337/login)
    .get(function (req, res) {
        res.send("This is the login form");
    })

    //Process the form (POST http://localhost:1337)
    .post(function (req, res) {
        console.log("Processing...");
        res.send("Processing the login form!")
    });




//Working with a database
var mongoose = require('mongoose');

mongoose.connect('mongodb:l//localhost/db_name');




//Start the server
app.listen(1337);
console.log("1337 is the magic port!");