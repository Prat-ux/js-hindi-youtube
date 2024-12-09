// arrays

const myArr = [0, 1, 2, 3, 4, 5]

// shallow copies* important topic
// arrays in javascript follow shallow copies
const myHeors = ['shaktiman', 'naagraj']
const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[0]);

// Array methods

//myArr.push(6)
//myArr.push(7)
//myArr.pop()

// myArr.unshift(0) // adds to starting of the array
// myArr.shift() // removes starting element of the array

// console.log(myArr.includes(9));

// console.log(myArr.indexOf(3));

const newArr = myArr.join() // converted to string

// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // all elements except last

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // takes the last element as well

//***** also in splice, it removes that part of the array, which slice doesn't**** important
console.log(myn2)
console.log("C ", myArr)
