// 1 returnOnlyOddPeople(people)

const people = [
    { id: 1, name: "Arta" },
    { id: 2, name: "Blerim" },
    { id: 3, name: "Doni" },
    { id: 4, name: "Elira" }
];

function returnOnlyOddPeople(people) {
    for (let person of people) {
        if (person.id % 2 == 0)
            console.log(`Person ID: ${person.id}, Name: ${person.name}`)
    }
}

returnOnlyOddPeople(people)

// 2 maxNr(a,b)

const maxNr = (a, b) => a > b ? a : b

console.log(maxNr(6, 22))

// 3 isLandscape(width, height)

const isLandscape = (width, height) => width > height ? true : false

console.log(isLandscape(23, 22))

//4 fizzBuzz(input)

function fizzBuzz(input) {
    if (input % 3 == 0 && input % 5 == 0) {
        return "FizzBuzz"
    }
    else if (input % 3 == 0) {
        return "Fizz"
    }
    else if (input % 5 == 0) {
        return "Buzz"
    }
    else if (typeof (input) != "number") {
        return "Not a number"
    }
    else return "Not divisable with 3 or 5"
}

console.log(fizzBuzz("15"))

// 5 checkSpeed(speed)

function checkSpeed(speed) {
    if (speed <= 70) {
        return "OK"
    }
    let piket = Math.floor((speed - 70) / 5)

    console.log(piket)

    if (piket > 12) {
        return "License Suspended"
    }
}

console.log(checkSpeed(85))

// 6 countTruthy(array)

let values = [0, null, undefined, 2, 3]

let count = 0

function countTruthy(array) {
    for (let value of array) {
        if (value) {
            count += 1
        }
    }

    return count
}

console.log(countTruthy(values))

// 7 sum(limit) 

const numbers2 = [1, 3, 5, 6, 7, 9, 10];

let count_sum = 0

function sum(limit) {
    for (let num of limit) {
        if (num % 3 == 0 || num % 5 == 0) {
            count_sum += num
        }
    }

    return count_sum
}

console.log(sum(numbers2))

// 8 showProperties(obj)

function showProperties(obj) {
    for (let property in obj) {
        if (typeof (obj[property]) == "string") {
            console.log(obj[property])
        }
    }
}

const animal = {
    name: "dog",
    id: 5,
    isCarnivore: true,
    size: "small"
}

showProperties(animal)


//9 showStarts(rows)

function showStarts(rows) {

    let stars = "*"

    for (i = 0; i < rows; i++) {
        console.log(stars)
        stars += "*"
    }


}

showStarts(5)
