// Arrow functions 


// 1) Base rule: Remove function keyword, add =>
function add(a,b) {
    return a + b;
}

add = (a, b) => a + b;

// 2) function with 1 argument
let add2 = a => a + a;

console.log(add2(3))

// 3) function without arguments
let hello = () => "Hi";


// 4) function that returns an object
function getUser() {
    return {name: 'Arti', age: 20}
}

let getUser2 = () => ({name:'Arti', age: 20})


// 5) Function with multiple lines
function calc(a,b) {
    const t = a + b;
    return t * 2;
}

let calc2 = (a,b) => {
    const t = a + b;
    return t * 2
}


// 1)
function greet(n) {
    return "Hello" + n;
}


// 2)
function isAdult(a) {
    return a >= 18;
}

// 3)
function addObj(a,b) {
    return a + b;
}


// let userName = prompt("Enter Username: ")
// let password = prompt("Enter Password: ")
// let post = prompt("Add a post: ")

let userName;
let password;
let post;

const database = [
    { username: "arti", password: '1234' },
    { username: "arta", password: "password" },
    { username: "blerim", password: "qwerty" }
];

const newsFeed = [
    { username: "arti", timeline: "Just learned JavaScript loops 😎" },
    { username: "arta", timeline: "Coffee + coding = perfect day ☕️💻" },
    { username: "blerim", timeline: "Working on my first frontend project! 🚀" }
];

const checkUser = (user, pass) => {
    for (i = 0; i < database.length; i++) {
        const dbUser = database[i].username;
        const dbPassword = database[i].password;
        return dbUser == user && dbPassword == pass 
    }
}

const loginUser = () => checkUser(userName, password) ? newsFeed[i].timeline : 'Invalid username or password';


const postNews = (obj) => checkUser(obj.userName, password) ? 
 newsFeed.push({ username: user, timeline: obj.post }) : ''



const postObject = {
    userName: 'Arti',
    post: 30
}

postNews(postObject)

console.log(newsFeed)


// 2) Object Destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// a)
const getPerson = ({firstName, lastName}) => {
    console.log(firstName + " " + lastName)
}

getPerson(person)


// b)
const car = { model: 'Audi', year: 2023};

const { model } = car;

console.log(model)

// c) nested destructuring
const userInfo = {
    name: 'Arti', 
    address: {city: 'Prishtina', zip: 10000}
}


const {address: { city }} = userInfo

console.log(city)


// 3) Array Destructuring

let numbers = [10, 20, 30]; 

const [, ,third] = numbers;


console.log(third)


// 4) Spread Operator (...)

 numbers = [5, ...numbers, 40]


 const letters = ['a', 'b', 'c'];

 const lettersAndNumbers = [...letters, ...numbers]

 const [firstItem, ...rest] = lettersAndNumbers;


 // 5) for of loop -> new way of iterating array elements
for(let nr of numbers) {
    // console.log(nr)
}

const products2 = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 50 }
];


for(let product of products2) {
//   console.log(`${product.name} kushton ${product.price}€`);

}

for (let str of "Arti") {
    // console.log(str)
}

// 6) For .. in
const user = { name: 'Arti', age: 22, isStudent: false};

let isAbove20 = false;

for(let key in user) {
    if(user[key] > 20) {
        isAbove20 = true
    }
}



const calculator = (x, y, operator, author) => {
    let result;

    switch(operator) {
        case "+":
            result = x + y;
            break;

            // other cases
    }

    console.log(`This function is created by ${author}
            and the result is ${result}`)
}

const calculations = [
    {x: 10, y: 5, operator: "+", author: 'Arti'},
    {x: 10, y: 5, operator: "-", author: 'Drini'},
    {x: 10, y: 5, operator: "*", author: 'Jeta'},
    {x: 10, y: 5, operator: "/", author: 'Arta'},
]

// Perdor for of, dhe gjej resultatet e secilit prej items
// ne listen "calculations", cdo rezultat ruaje ne nje list results

calculator(2,3, '+', 'Kena')