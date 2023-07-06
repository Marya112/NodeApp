var adder= function(a,b){
    return `the sum of these 2 numbers is ${a+b}`;
};


var subtractor = function(a,b){
    return `the subtraction of these 2 numbers is ${a-b}`;
};

const pi = 3.14;

// module.exports.adder=adder;
// module.exports.subtractor=subtractor;
// module.exports.pi=pi;
//طريقه تانيه
module.exports={
    adder:adder ,
    subtractor:subtractor ,
    pi:pi
};
