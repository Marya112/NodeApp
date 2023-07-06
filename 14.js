var fs = require('fs');

// fs.mkdir('stuff', function(){
//     fs.readFile('9.txt' , 'utf8' , function(err , data){
//         fs.writeFile('./stuff/writeMe', data, (err)=>{
//             if(err)
//             console.log(err);
//         });
//     });
// });

fs.unlink('./stuff/writeMe', function(){
    fs.rmdir('stuff' , (err)=>{
        if(err)
        console.log(err);
    });
});
