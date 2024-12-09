const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)  // pushes adds the other array as a single elements in the array
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const all_heros = marvel_heros.concat(dc_heros)  // concat adds the elements of the other array normally
// console.log(all_heros);
 
// concat adds to a new array whereas push modifies the previous array

const all_new_heros = [ ...marvel_heros, ...dc_heros] // this is called spreading, ... seperates all the elements
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(2)
//console.log(real_another_array);




console.log(Array.isArray("Pratyush"))
console.log(Array.from("Pratyush")) // creates an array from iterable object
console.log(Array.from({name: "Pratyush"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));

// isArray  from   of learn more about it