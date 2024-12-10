// for of
// ["", "", ""]
// [{}, {}, {}]


const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
    
}
const greetings = "Hello world!"
for(const greet of greetings){
    // console.log(`each character is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('US', "Unites States Of America")
map.set('FR', "France")
// values of map will be unique
// console.log(map);

for (const [key, value] of map) {
    console.log(key, ":= ", value);
    
}
// object is not iterable this way maps are iterable this way only

