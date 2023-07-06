console.log('Hi');
//بتنفذ الفنكشن بعد وقت معين
setTimeout(function(){
    console.log('2 seconds have passed');
}, 2000);
// بتنفذ الفنكشن مره كل ما يعدي الوقت
var t=0;
var timer =setInterval(function(){
    t+=2;
    console.log(t +' seconds passed');
    if(t>6){
        clearInterval(timer);
    }
}, 2000);
console.log(__dirname);