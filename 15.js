var http = require('http');

var server = http.createServer(function(req , res){
    console.log('request was made : ' + req.url);
    res.writeHead(200, {'content-Type' : 'text/plain'});
    res.end('Hello');
});

server.listen(3000 , '127.0.0.1');

console.log('you listen to port number 3000');                           















