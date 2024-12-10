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