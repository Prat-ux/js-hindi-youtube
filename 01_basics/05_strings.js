const name = "Pratyush"
const repoCount = 50

//console.log(name + repoCount + " values");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("pratyush-py")
/*
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
*/
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);
let anotherString = gameName.slice(-8, 4);
console.log(newString);

