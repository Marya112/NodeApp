var fs= require('fs');
//Readable streams
var myReadStream =fs.createReadStream(__dirname + '/17.txt' , 'utf8' );
var myWriteStream = fs.createWriteStream(__dirname + '/18.txt')

myReadStream.pipe(myWriteStream);

myReadStream.on('data' , function(chunk){
    console.log('new chunk is recieved : ');
    // console.log(chunk);
    // myWriteStream.write(chunk);
});