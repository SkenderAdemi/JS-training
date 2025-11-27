const people = [
  { id: 1, name: "Arta" },
  { id: 2, name: "Blerim" },
  { id: 3, name: "Doni" },
  { id: 4, name: "Elira" },
];
oddNumber = people.id % 2 !== 0;

const person = () => {
  for (let person of people) {
    // console.log(person)
    // console.log(person.id % 2 !== 0)
    if (person.id % 2 !== 0) {
      console.log(person);
    } else {
    }
  }
};

person();

//2

const maxNr = (a, b) => {
  for (let i = a; i < b; i++) {
    console.log(i);
  }
};

maxNr(6, 8);

//3

let nr = 15;

const fizzBuzz = () => {
  switch (true) {
    case typeof nr !== "number":
      console.log("Nuk eshte numer");
      break;
    case nr % 3 === 0 && nr % 5 === 0:
      console.log("FizzBuzz");
      break;
    case nr % 3 === 0:
      console.log("Fizz");
      break;
    case nr % 5 === 0:
      console.log("Buzz");
      break;
    
  }
};

fizzBuzz();

//4
