var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
    console.log('req was made :' , req.url);
    res.writeHead(200,{'content-Type':'text/json'});
    var myobj = {
        name : 'marya' , 
        age : 21
    }
    res.end(JSON.stringify(myobj));
});

server.listen(3000 , '127.0.0.1');
console.log("you listen to port num 3000");

