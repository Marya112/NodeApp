//normal function statement
function sayHi(){
    console.log('Hi');
}
sayHi();

//function expression
var sayBye=function(){
    console.log('Bye');
}
sayBye();

//callFunction
function callFunc(fun){
    fun();
}
callFunc(sayBye);
callFunc(sayHi);