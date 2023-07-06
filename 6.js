var events = require ('events');

var myEmitter= new events.EventEmitter();

myEmitter.on('click' , function(mssg){
console.log(mssg);
});

myEmitter.on('add', function(a,b){
    console.log(`the sum is ${a+b}`);
});

myEmitter.emit('click' , 'hi');
myEmitter.emit('add', 10 , 3);

