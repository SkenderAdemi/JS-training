//returnOnlyOddPeople(people)Shkruani një funksion që pranon një listë
// personash, ku secili person ka një ID, dhe kthen vetëm ata që kanë ID tek (odd number).
const returnOnlyOddPeople = people => people.filter(person => person.id % 2 !== 0);

const people = [
  { id: 1, name: "Arta" },
  { id: 2, name: "Blerim" },
  { id: 3, name: "Doni" },
  { id: 4, name: "Elira" }
];

const oddPeople = returnOnlyOddPeople(people);
console.log(oddPeople);


//2. maxNr(a, b)Shkruani një funksion maxNr(a, b) që kthen numrin më të madh mes dy numrave.
function maxNr(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(maxNr(2, 10)); 
console.log(maxNr(20, 15)); 
console.log(maxNr(5, 5));   

//3.isLandscape(width, height)
//Shkruani një funksion që kthen true nëse gjerësia është më e madhe se lartësia.
const isLandscape = (width, height) => width > height;
console.log(isLandscape(800, 500)); 
console.log(isLandscape(500, 800)); 
console.log(isLandscape(200, 200)); 

//4.fizzBuzz(input)Shkruani funksionin fizzBuzz që bën këto gjëra:
function fizzBuzz(input) {
    if (typeof input !== 'number') {
        return "not a number";
    }
    
    if (input % 3 === 0 && input % 5 === 0) {
        return "FizzBuzz";
    } else if (input % 3 === 0) {
        return "Fizz";
    } else if (input % 5 === 0) {
        return "Buzz";
    } else {
        return input;
    }
}
console.log(fizzBuzz(3));   
console.log(fizzBuzz(5));   
console.log(fizzBuzz(15));  
console.log(fizzBuzz(7));   
console.log(fizzBuzz("hi")); 

//5 checkSpeed(speed)
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
        return;
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) {
        console.log("License suspended");
    } else {
        console.log("Points: " + points);
    }
}
checkSpeed(65);  
checkSpeed(80); 
checkSpeed(135);

//6. countTruthy(array)
function countTruthy(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]) { 
            count++;
        }
    }
    return count;
}

const arr = [0, null, undefined, 2, 3];
console.log(countTruthy(arr)); 


//7 sum(limit)
const sum = numbers => {
    let total = 0;
    for (let n of numbers) {
        if (n % 3 === 0 || n % 5 === 0) total += n;
    }
    return total;
};

const numbers = [1, 3, 5, 6, 7, 9, 10];
console.log(sum(numbers)); 

//8


 //9. showStars(rows)
 function showStars(rows) {
  for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i));
  }
}
showStars(4);



























