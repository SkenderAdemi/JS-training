// 13 Nentor

// //1

// let user1 = {
//     "name": "Dior",
//     "role": "admin"
// }

// let user2 = {
//     "name": "Skender",
//     "role": "Not Admin"
// }

// function getUserAccess(user) {
//     if (user.role === "admin") {
//         return `Hi ${user.name}, you have Full access`
//     }

//     return `Hi ${user.name}, you are not an Admin`
// }

// console.log(getUserAccess(user1))
// console.log(getUserAccess(user2))

// //2

// let weather1 = {
//     "city": "Peja",
//     "temp": 31
// }

// let weather2 = {
//     "city": "Prishtina",
//     "temp": 22
// }

// function checkWeather(weather) {
//     if (weather.temp > 30) {
//         return `The weather today in ${weather.city} is ${weather.temp} degrees celcius, its very hot!!`
//     }
//     else if (weather.temp > 20) {
//         return `The weather today in ${weather.city} is ${weather.temp} degrees celcius, its warm.`
//     }

//     return `The weather today in ${weather.city} is ${weather.temp} degrees celcius, its very cold!!`

// }

// console.log(checkWeather(weather1))
// console.log(checkWeather(weather2))

// //3

// function getPrice(productName) {
//     switch (productName) {
//         case ("eggs"):
//             console.log(`Price of ${productName} is 5 Euro per packet`)
//             break;
//         case ("milk"):
//             console.log(`Price of ${productName} is 1.5 Euro`)
//             break;
//         case ("bread"):
//             console.log(`Price of ${productName} is 0.8 Euro `)
//             break;
//         default:
//             console.log("Not in the market")
//     }
// }

// getPrice("milk")
// getPrice("eggs")
// getPrice("bread")
// getPrice("yogurt")

// //4

// let student1 = {
//     "name": "Dior",
//     "grade": 100
// }

// let student2 = {
//     "name": "Skender",
//     "grade": 78
// }

// function checkGrade(student) {
//     if (student.grade >= 90) {
//         return `${student.name}, Excellent`
//     }
//     else if (student.grade >= 80) {
//         return `${student.name}, Very Good`
//     }
//     else if (student.grade >= 70) {
//         return `${student.name}, Good`
//     }
//     else if (student.grade >= 60) {
//         return `${student.name}, Fine`
//     }
//     return `${student.name}, Fail`
// }

// console.log(checkGrade(student1))
// console.log(checkGrade(student2))

// //5

// let car1 = {
//     "brand": "Aston Martin",
//     "fuel": true
// }

// let car2 = {
//     "brand": "Tesla",
//     "fuel": false
// }


// function checkCar(car) {
//     if (car.fuel) {
//         return `${car.brand} uses fuel`
//     }
//     return `${car.brand} is Eco friendly`
// }

// console.log(checkCar(car1))
// console.log(checkCar(car2))

// 20 Nentor Exercise 1 

let classroom = [
    { name: "Arta", grade: 9 },
    { name: "Luan", grade: 8 },
    { name: "Elena", grade: 10 }
];

let grade = 0

for (i = 0; i < classroom.length; i++) {
    grade += classroom[i].grade
}

average = grade / 3
console.log(average)

// 20 Nentor Exercise 2

let userName = prompt("Enter Username: ")
let password = prompt("Enter Password: ")
let post = prompt("Add a post: ")

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

function checkUser(user, pass) {
    for (i = 0; i < database.length; i++) {
        if (user == database[i].username && pass == database[i].password) {
            return true
        }
    }

    return false
}

function loginUser() {
    if (checkUser(userName, password)) {
        return newsFeed[i].timeline
    }

    return "Invalid Username or Password"
}

function postNews(user, post) {
    if (checkUser(userName, password)) {
        newsFeed.push({ username: user, timeline: post })
    }
}

console.log(loginUser(userName, password))

postNews(userName, post)

console.log(newsFeed)

