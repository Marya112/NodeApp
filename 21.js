var http = require('http');
var fs = require('fs');

var server=http.createServer(function(req,res){
    console.log('req was made :' , req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200,{'content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }else if(req.url === '/contact'){
        res.writeHead(200,{'content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }else if(req.url === '/api'){
        res.writeHead(200,{'content-Type': 'application/json'});
        var myobj = [{name : 'marya' , age : 21} , {name : 'sara' , age : 19}];
        res.end(JSON.stringify(myobj));
    }else{
        res.writeHead(404,{'content-Type': 'text/plain'});
        res.end('ERROR 404');
    }
});

server.listen(3000);
console.log('you listen to port num 3000');