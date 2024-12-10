// immediately invoked function expressions (IIFE)


(function chai(){
    // name iife
    console.log(`DB CONNECTED`);    
    
})();
//  here ; needed two tell computer to end iife
// very important as other iife won't run without it



// here just like we write chai() where () is calling the funciton
// we wrap function with () to make it act like chai
// ()() first one is function chai whole and second is calling
// global scope ke pollution ko hatane ke liye we use iife

((name) => {
    console.log(`db connected two ${name}`)
} )('pratyush')
