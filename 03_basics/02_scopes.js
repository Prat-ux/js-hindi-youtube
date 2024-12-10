// var c = 300
let a =300
if(true){
    let a = 10
    const b = 20
   // console.log(`inner value ${a}`);
}


// console.log(a);
// console.log(b);
// console.log(c);
// node ke andar aur windows ke andar global scope different hoti hai *****


function one(){
    const username = "divyansh"
    
    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);
    two()
}

// one()

if(true) {
    const username = "divyansh"
    if (username === "divyansh") {
        const website = " youtube"
        // console.log(`${username}${website}`);
        
    }
    // console.log(website); wrong as outside scope
}
// console.log(username); wrong as outside scope


// ++++++++++++++ interesting ++++++++++++++++

console.log(addOne(5));

function addOne(num){
    return num + 1
}
// this type of declaration, output can be taken beforehand


const addTwo = function(num){
    return num + 2
}

addTwo(5)

// here you can't run beforehand it will show error