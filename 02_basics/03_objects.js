// singleton

// object literals
//Object.create

const mySym = Symbol("key1")
const JsUser = {
    name: "Pratyush",
    "full name": "Pratyush Yadav",
    [mySym]: "mykey1",
    age: 18,
    gender: "male",
    location: "Varanasi",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.location)
// console.log(JsUser["gender"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);
// typeof showing string even though we are using symbol   problem*****

JsUser.email = "helloworld@gmail.com"
// Object.freeze(JsUser) // cant change the value anymore
JsUser.email = "byeworld@gmail.com"  
// console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hello js user");
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello ${this["full name"]}`);
}

console.log(JsUser.greetingTwo());