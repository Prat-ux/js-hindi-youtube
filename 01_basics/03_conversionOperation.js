let score = "true"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)  // capital N number for conversion type
console.log(valueInNumber); 



// "33" => 33
// "33abc" => NaN  not a number
// true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0=> false
// "" => false
// "pratyush" => true
// to convert to type capital starting of that type

let someNumber = 35
let someString = String(someNumber)
console.log(typeof someNumber);

console.log(typeof someString);
