'use strict';
let express = require('express'),
    app = express(),
    path = require('path'),
    port = process.env.PORT || 8080;

//Configure public assets folder
app.use(express.static(__dirname + '/public'));

//Route to send index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

//Start the server
app.listen(port);
console.log('Magic happens on http://localhost:' + port);

