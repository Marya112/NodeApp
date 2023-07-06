var events =require ('events');
var util =require ('util'); //util to do inherits
var myEmitter=new events.EventEmitter();

//object
var person = function(name){
    this.name=name;
}
//object inherits eventemitter
util.inherits(person , events.EventEmitter);

//instances of the object
var marya =new person('marya');
var lina =new person('lina');
var hajar =new person('hajar');
var zeze =new person('zeze');

//puts instances in array
var students=[marya , lina , hajar , zeze];

//لف علي كل عناصر الاراي
students.forEach(function(person){
    //events fire function
    person.on('speak', function(mssg){
        console.log(person.name + ' said ' + mssg);
    });
});

students.forEach(function(person){
    person.on('add', function(a,b){
        console.log(person.name + ` adds  ${a+b}`);
    });
});

//emit event to fire fun
marya.emit('speak' , 'my name is marya');
lina.emit('add' , 20 , 4);

