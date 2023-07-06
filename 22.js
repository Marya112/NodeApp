const { profile } = require('console');
var expess = require('express');
var bodyParser = require('body-parser');

var fs = require('fs');
var app = expess();

app.set('view engine' , 'ejs');

// app.use('/assests' , function(req,res,next){
//     console.log(req.url);
//     next();
// });
app.use('/assests' , expess.static('assests'));

app.get('/home' , function(req,res){
    res.render('index');
    //res.sendFile(__dirname + '/index.html');
    // res.writeHead(200,{'content-Type': 'text/html'});
    // fs.createReadStream(__dirname + '/index.html').pipe(res);
});
app.get('/contact' , function(req,res){
    console.log(req.query);
    res.render('contact' ,{qs:req.query});
});
// app.get('/' , function(req,res){
//     res.send('Welcome');
// });
app.get('/profile/:name' , function(req,res){
    var data = {age : 21 , job : 'student' , hobbies :['Eating' , 'Fishing']};
    res.render('profile' , {person : req.params.name , data : data});
    //res.send('you request to see the profile of the id : ' + req.params.id);
});


app.listen(3001);