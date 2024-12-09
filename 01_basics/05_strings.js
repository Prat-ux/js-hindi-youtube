const name = "Pratyush"
const repoCount = 50

//console.log(name + repoCount + " values");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("pratyush-py-com")
/*
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
*/
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4) //substring doesnt take negative value starts from 0 instead
console.log(newString);
let anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "    hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://pratyush.com/pratyush%24yadav"
console.log(url.replace('%24', '-'))

console.log(url.includes('pratyush'))

console.log(gameName.split('-'));
