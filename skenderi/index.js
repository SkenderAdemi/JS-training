
// for loop 

// Print my name 5 times
for(let i = 0; i < 5; i++) {
    // console.log(`My name is Skender`)
}

// Print numbers from 1 to 5
for(let i = 1; i <= 5; i++) {
    // console.log(`Number: ${i}`)
}

// Print every name in an array
let names = ['Drini', 'Edri', 'Leoni'];

for(let i = 0; i < names.length; i++) {
    // console.log(`Student: ${names[i]}`)
}

// Change elements inside an array:
for(let i = 0; i < names.length; i++) {
    // names[i] = names[i] + '!'
}

let images = ["img1", "img2", "img3"];
// .jpg
for(let i = 0; i < images.length; i++) {
    images[i] = images[i] + '.jpg'
}


// Check only the item which has the first letter 'E';
for(let i = 0; i < names.length; i++) {
    // console.log(names[i][0])
    if(names[i][0] == 'E') {
        names[i] = names[i] + '!'
    }
}



// Add "Verified" to the user 
// which has more than 5000 followers

let users = [
    {name: 'Arti', followers: 1000},
    {name: 'Artani', followers: 4000},
    {name: 'Dea', followers: 6000},
]

for(i = 0; i < users.length; i++) {

    if(users[i].followers > 5000) {
        users[i].name = users[i].name + ' verified'
    }
}



let foods = ["apple", "pizza", "banana", "burger"];

// use for loop and add a text 
// "fresh" for fruits only

for(let i = 0; i < foods.length; i++) {

    if(foods[i] == 'apple' || foods[i] == 'banana') {
        foods[i] = foods[i] + ' fresh'

    }

}

const numbers = [1, 2, 3, 5];

let result = 0;

for (let i = 0; i < numbers.length; i++) {
    result = result + numbers[i]
}






// Create FB app
// Use prompt() to get the username and password
// Create a function which checks if a user is in the database
// Create a login function which will show the newsfeed if success

const database = [
  { username: "arti", password: "1234" },
  { username: "arta", password: "password" },
  { username: "blerim", password: "qwerty" }
];

const newsFeed = [
  { username: "arti", timeline: "Just learned JavaScript loops 😎" },
  { username: "arta", timeline: "Coffee + coding = perfect day ☕️💻" },
  { username: "blerim", timeline: "Working on my first frontend project! 🚀" }
];



function createPost(username) {
    let newPost = prompt('Write your post')

    const newfeed = {
        username: username,
        newPost: newPost
    }

    newsFeed.push(newfeed);
}



// Loops 

// 1) While Loop -> perseritet derisa kushti te jete true

let a = 1;

while (a < 5) {
    // console.log('while loop',a)
    a++
}

let password = '';

// while(password !== '1234') {
//     password = prompt("Shkruaje passwordin")
// }



// 2) - Do... while ->
//  e ekzekuton kodin te pakten njehere, pastaj 
//  e kontrollon kushtin


let count = 10;

do {
    // console.log('Inside!')
} while (count < 5)


let again; 

do {
    // again = prompt('Do you want to continue (yes/no)');
} while(again === 'yes')


// forEach - metode e arrayit qe e ekzekuton nje funksion per secilin
// element te listes/arrayit

// Argumentet: 
// 1) item -> vlera e elementit
// 2) index -> pozita e elementit
// 3) array -> vet lista

const students_ = ['Drini', 'Jeta', 'Leoni'];

// for loop
for(let i = 0; i<students_.length; i++) {
    console.log('for loop',students_[i])
}

// forEach
students_.forEach(function(student) {
    console.log('for each', student)
})





// students_.forEach(function(student, index, array) {
//     console.log('studenti:', student)

//     const next = array[index + 1];

//     if(next) {
//         console.log('pas tij', array[index + 1])
//     }
// })


// const products = [
//     {name: 'laptop', price: 1000},
//     {name: 'tv', price: 500}
// ]

// products.forEach(function(product) {
//     console.log(product.name, product.price)
// }
// )













