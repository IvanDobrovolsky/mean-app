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
app.use(bodyParser.urlEncoded({extended: true}));
app.use(bodyParser.json());

//Configure our app to handle CORS requests

