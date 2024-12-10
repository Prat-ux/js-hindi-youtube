// const tinderUser = new Object()  // singleton object
const tinderUser = {}  // non single term object 
tinderUser.id = "123abc"

tinderUser.name = "pratyush"
tinderUser.isLoggenIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname : {
            firstname: "pratyush",
            lastname: "yadav",
        }
    }
}
// console.log(regularUser.fullname?.userfullname.lastname); // question mark for when fullname doesnt exist

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);




const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
    {
        id: 4,
        email: "d@gmail.com"
    },
]
// console.log(tinderUser);

// console.log(users[0].email)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);

/*
const navbar = (props.company) => {

}

navbar(company = "hitest")
propscompany baar baar nahi likhna chahe ga koyi (this is react)
therefore we use 

const navbar = ({company}) => {
    
}
navbar(company = "hitesh")
*/
/*
{
    "name": "pratyush",
    "coursename": "js in hindi",
    "price": "free"
}
*/

[
    {},
    {}
]