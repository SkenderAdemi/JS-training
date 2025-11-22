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

// 

// 22 Nentor - Detyra me loops

//1 

let numbers = [1, 2, 3, 4, 5]

for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

//2 

let names = ["dior", "skender", "drin"]

names.forEach(function (item, index) {
    console.log(`Index: ${index}, Emri: ${item}`)
})


//3

let fruits = [{ name: "Banana", price: 2 }, { name: "Apple", price: 4 }, { name: "Kiwi", price: 5 }]

fruits.forEach(function (item) {
    console.log(`${item.name} kushton ${item.price} Euro`)
})

//4

grades = [9, 8, 5, 10]

let sum = 0

for (i = 0; i < grades.length; i++) {
    sum += grades[i]
}

console.log(sum)

//5 

sentences = ["Programming is fun", "JS is fun"]

for (i = 0; i < sentences.length; i++) {
    if (sentences[i].length > 10) {
        console.log(sentences[i])
    }
}

// Detyrat me While

//1

let a = 1

while (a <= 10) {
    console.log(a)
    a++
}

//2 

let fruits2 = ["banana", "apple", "kiwi"]
let j = 0
while (j < fruits2.length) {
    console.log(fruits2[j])
    j++
}

//3

let numbers2 = [3, 7, 1, 4]
let sum2 = 0
k = 0

while (k < numbers2.length) {
    sum2 += numbers2[k]
    k++
}

console.log(sum2)

// Detyrat me do While

//1

let num3 = 1

do {
    console.log(num3)
    num3++
} while (num3 <= 5)

//2

let colors = ["red", "blue", "green"]

b = 0

do {
    console.log(colors[b])
    b++
} while (b < colors.length)


