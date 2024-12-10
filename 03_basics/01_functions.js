function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName // reference
// sayMyName() // execution

function addTwoNumbers(number1, number2){
   // console.log(number1 + number2);
    return number1 + number2;
}
// return also follows c type return rules

addTwoNumbers(5, 6) 
const result = addTwoNumbers(5, "6") // converts both to strings
// console.log(result);



function loginUserMessage(username = "pre given atleast name here"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    else {
    return `${username} just logged in`
    }
}

// console.log(loginUserMessage())


function calculateCartPrice(val1, val2, ...num1){ // here ... is rest function, it takes all the values of input
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "piyush",
    price: 50
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
} // but here if object doesnt have exact spelling for example prices instead of price then error
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
