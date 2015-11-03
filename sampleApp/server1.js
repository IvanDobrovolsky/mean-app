//Pure node implementation

//Get the http and filesystem modules
var http = require('http'),
    fs = require('fs');

//Create our server using the http module
http.createServer(function (req, res) {

    //Write to our server. Set configuration for the response
    res.writeHead(200, {
        'Content-type': 'text/html',
        'Access-Control-Allow-Origin': '*'
    });

    //Grab the index.html file using fs
    var readStrem = fs.createReadStream(__dirname + '/index.html');

    //Send the index.html file to our user
    readStrem.pipe(res);


}).listen(1337);

//Tell ourselves what's happening
console.log('Visit me at http://localhost:1337');
