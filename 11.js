var fs = require('fs');

//non blocking code way

fs.readFile('9.txt' , 'utf8' , function(err, data){
    console.log(data);
    fs.writeFile('12.txt' , data ,(err)=>{
        if(err)
        console.log(err)
        else
        console.log('file written successfully');
    } );
});

// fs.writeFile('12.txt' , 'hi' ,(err)=>{
//     if(err)
//     console.log(err)
//     else
//     console.log('file written successfully');
// } );

// fs.unlink('13.txt');
//code
console.log('non blocking code way');

