const userEmail = "p@gmail.com"

if (userEmail) {
    // console.log("got user email");
    
} else{

    // console.log("don't have user email");
    
}
// empty anything consider false and anything consider true
/*
falsy values
 false, 0, -0, BigInt 0n, "", null, undefined, NaN

 truthy values
 "0", "false", " ", [], {}, function(){}
 */
/*
array is truthy value
to check array follow this
let array = []
if(array.length === 0){
    console.log("array is empty");
    
*/
/*
to check Object
const emptyobj = {}
if(Object.keys(emptyobj).length === 0){
    console.log("object is empty");
    
}
*/


// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val = undefined ?? 10
console.log(val1);

// Terniary Operator

// condition ? true : false