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

//Apply the routes to our application
app.use('/admin', adminRouter);


//Start the server
app.listen(1337);
console.log("1337 is the magic port!");