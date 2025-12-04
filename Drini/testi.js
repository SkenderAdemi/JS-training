//1. returnOnlyOddPeople(people)

// let oddNumber = people.id % 2 !== 0
const people = [
  { id: 1, name: "Arta" },
  { id: 2, name: "Blerim" },
  { id: 3, name: "Doni" },
  { id: 4, name: "Elira" },
];

oddNumber = people.id % 2 !== 0;
const person = () => {
  for (let person of people) {
    if (person.id % 2 !== 0) {
      console.log(person);
    }
  }
};
person();

//2maxNr(a, b)

const maxNr = (a, b) => {
  // if(a > b) return a;
  // else return b
  return a > b ? a : b;
};

maxNr(4, 9);

//3 isLandscape(width, height)
const isLandscape = (width, height) => {
  return width > height ? width : height;
};

const rez = isLandscape(14, 10);
console.log(rez);
//4.fizzBuzz(input)

const fizzBuzz = (input) => {
  let mbetja = 0;
  if (input / 3) {
    console.log("Fizz");
  }
  if (input / 5) {
    console.log("Buzz");
  }
  if (input / 3 && input / 5) {
    console.log("Fizzbuzz");
  } else {
    console.log("Not a number");
  }
  return;
};
fizzBuzz(15);

// 5. checkSpeed(speed)
const checkSpeed = (speed) => {
  for (let i = 0; i < checkSpeed; i++) {
    let piket = 0;
    if (speed <= 70) {
      console.log("OK");
    }
    if (speed + 5 > 70) {
      console.log(piket + 1);
    }
    if (piket >= 12) {
      console.log("Licence Suspendedd");
    }
  }
  return;
};
checkSpeed(70); //
//6.countTruthy(array)
const countTruthy = (array) => {
  const test = [0, null, undefined, 2, 3];
  if (test[3] == true) {
    console.log(true);
  }
  return;
};
countTruthy();
//7.sum(limit)
const sum = (limit) => {
  const numbers = [1, 3, 5, 6, 7, 9, 10];
  let numriCift = numbers % 2 !== 0;
  if ((numbers == numriCift && numbers / 3) || numbers / 5) {
    console.log(numriCift);
  }
};
sum();

//8.showProperties(obj)

const showProperties = (obj) => {
  if (obj == typeof a) {
    console.log(obj);
  }
};
console.log(showProperties("String"));

//9
const showStars = (rows) => {
  for (let row = 1; row < rows; row++) {
    let stars = "";
    for (let i = 0; i < rows; i++) {
      stars = stars = "*";
    }
    console.log(stars);
  }
};
showStars(5);
