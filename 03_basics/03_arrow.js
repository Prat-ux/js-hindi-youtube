const user = {
    username: "divyansh",
    price: 150,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`); // this for inner context, meaning inside this scope
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "pratyush"
// user.price = 5000
// user.welcomeMessage()

// console.log(this);

/*
function chai(){
    let username = "ansh"
    console.log(this.username);
    
}
chai()

here this will work but it will show all the details of the computer(i think) as it isn't in an object
here this.username won't work because this.something works only in an object
*/



const chai = () => {
    let username = "ansh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2


// this is called implicit function where dont need return as it will assume one line statement and return itself

// const addTwo = (num1, num2) => (num1 + num2)

// when curly braces used you don't need return as well ***

// const addTwo = (num1, num2) => ({username: "pratyush"})
// paranthesis needed for object *
console.log(addTwo(3, 4))

