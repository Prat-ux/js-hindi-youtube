// primitive

// 7 types : String, Number, bolean, null, undefined, Symbol,
// BigInt

/*
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = symbol('123')
const anotherId = symbol('123')

console.log(id === anotherId);
*/
// symbol showing error why????



// Reference (Non primitive)

// Array, Objects, Functions
/*
const heroes = ["shaktimaan", "naagraj", "doga"]
let myObj = {
    name: "pratyush",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
    
}
console.log(typeof myFunction);
*/

//****************************************

// Stack (primitive), Heap(Non-Primitive)
/*
let myYoutubename = "pratyushyadavdotcom"

let anothername = myYoutubename
anothername = "Chaiaurcode"
console.log(myYoutubename);
console.log(anothername);
*/
let userOne ={
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "change@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
