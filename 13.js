var fs = require('fs');

//blocking code way
fs.mkdirSync('stuff');
fs.rmdirSync('stuff');

//code
console.log('blocking code way');

// //non blocking code way
fs.mkdir('stuff' , function(){
    console.log('dir done');
});
fs.rmdir('stuff' , function(){
    console.log('dir removed');
});

//code
console.log('non blocking code way');


