var http = require('http');
var fs = require('fs');

var server= http.createServer(function(req, res){
    console.log('request was made : ' + req.url);
    res.writeHead(200 , {'content-Type' : 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html' );
    myReadStream.pipe(res);
});

server.listen(3000 , '127.0.0.1');
console.log('you listen to port num 3000');
