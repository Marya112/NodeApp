var fs = require ('fs');

//blocking code way

// // first way
// console.log(fs.readFileSync('9.txt' , 'utf8'));
// fs.writeFileSync('10.txt' ,fs.readFileSync('9.txt' , 'utf8'));

//second way
var readMe= fs.readFileSync('9.txt' , 'utf8');
console.log(readMe);
fs.writeFileSync('10.txt' , readMe);

// fs.unlinkSync('10.txt');
//code
console.log('blocking code way');