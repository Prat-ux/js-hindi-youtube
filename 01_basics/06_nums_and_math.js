const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);

//console.log(balance.toFixed(2));

const otherNumber = 23.89488

//console.log(otherNumber.toPrecision(3));
//console.log(otherNumber.toPrecision(3));
//console.log(otherNumber.toPrecision(1)); // turns to the power for keeping significant numbers in check

const hundreds = 1000000
//console.log(hundreds.toLocaleString()); // adds comma to value
//console.log(hundreds.toLocaleString('en-IN')); // to indian comma system

// ++++++++++++++++++ maths ++++++++++++++++++++++++++++

//console.log(Math);
//console.log(Math.abs(-4));
//console.log(Math.round(4.6));
//console.log(Math.ceil(4.6));
//console.log(Math.floor(4.6));
//console.log(Math.max(4, 3, 5, 8, 19));
//console.log(Math.random());
console.log((Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))