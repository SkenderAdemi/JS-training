//1

user = {
    "name": "Dior",
    "role": "admin"
}

function getUserAccess(user) {
    if (user.role === "admin") {
        return `Hi ${user.name}, you have Full access`
    }

    return `Hi ${user.name}, you are not an Admin`
}

console.log(getUserAccess(user))

//2

weather = {
    "city": "Peja",
    "temp": 31
}

function checkWeather(weather) {
    if (weather.temp > 30) {
        return `The weather today in ${weather.city} is ${weather.temp} degrees celcius, its very hot!!`
    }
    else if (weather.temp > 20) {
        return `The weather today in ${weather.city} is ${weather.temp} degrees celcius, its warm.`
    }

    return `The weather today in ${weather.city} is ${weather.temp} degrees celcius, its very cold!!`

}

console.log(checkWeather(weather))

//3

function getPrice(productName) {
    switch (productName) {
        case ("eggs"):
            console.log(`Price of ${productName} is 5 Euro per packet`)
            break;
        case ("milk"):
            console.log(`Price of ${productName} is 1.5 Euro`)
            break;
        case ("bread"):
            console.log(`Price of ${productName} is 0.8 Euro `)
            break;
        default:
            console.log("Not in the market")
    }
}

getPrice("milk")

//4

student = {
    "name": "Dior",
    "grade": 100
}

function checkGrade(student) {
    if (student.grade >= 90) {
        return `${student.name}, Excellent`
    }
    else if (student.grade >= 80) {
        return `${student.name}, Very Good`
    }
    else if (student.grade >= 70) {
        return `${student.name}, Good`
    }
    else if (student.grade >= 60) {
        return `${student.name}, Fine`
    }
    return `${student.name}, Fail`
}

console.log(checkGrade(student))

//5

car = {
    "brand": "Aston Martin",
    "fuel": true
}


function checkCar(car) {
    if (car.fuel) {
        return `${car.brand} uses fuel`
    }
    return `${car.brand} is Eco friendly`
}

console.log(checkCar(car))