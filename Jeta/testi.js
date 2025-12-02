// Testi 1

// 1. returnOnlyOddPeople(people)



const people = [
  { id: 1, name: "Arta" },
  { id: 2, name: "Blerim" },
  { id: 3, name: "Doni" },
  { id: 4, name: "Elira" }
];

let result=[];
for(let person of people) {
  if(person.id % 2 ==! 0) {
    result.push (person);
  }
}

returnOnlyOddPeople(people);





//2. maxNr(a, b)

function maxNr(a,b) {
    if (a>b) {
        return a;
    } else {
        return b;
    }
}


console.log(maxNr(7,17));





//3. isLandscape(width, height)

const isLandscape =  (width, height) => width > height;

console.log(isLandscape(1230,1880));





//4. fizzBuzz(input)


const fizzBuzz = (c) => function fizzBuzz(c) {
    if (typeof c !== 'number') {
        return NaN;
    }

    if (c % 3 === 0 && c % 5 === 0) {
        return 'FizzBuzz';
    }

    if (c % 3 === 0) {
        return 'Fizz';
    }

    if (c % 5 === 0) {
        return 'Buzz';
    }

}
  

console.log(fizzBuzz(5));





// 5. checkSpeed(speed)

checkSpeed = (speed) => {
  const speedLimit = 70; // limiti i lejuar
  const kmPerPoint = 5; // per cdo 5km/h --> 1 pike

  if (speed <= speedLimit) {
    console.log('Ok');
    return;
  }

  const points = Math.floor( speed - speedLimit) / kmPerPoint;
  console.log(points)

  if(points >= 12) {
    console.log('License Suspended')
  }
}




// 6. countTruthy(array)


const countTruthy = (array) => {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {  
      count++;
    }
  }

  return count;
};

console.log(countTruthy([0, null, undefined, 2, 3]));






// 7. sum(limit)

const numbers = [1,2,3,4,5,6,7,8,9,10];
const sum = (numbers) => {
  let totali = 0;

  for (const number of numbers) {
    if (number % 3 === 0 || number % 5 === 0) {
      totali += number;
    }
  }

  return totali;
};

sum(numbers);





//8. showProperties(obj)


const student = {
    name:'Jeta',
    age: 17,
    birthday:'7th August 2008',
    grade: 12
};

const showProperties = (obj) => {
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      console.log(key, ":", obj[key]);
    }
  }

};
showProperties(student);



// 9. showStars(rows)


showStars = (rows) => {
  let stars = "";
   
  for (let i = 0; i< rows; i++) {
    stars = stars + '*'
    console.log[stars] // e thirrim mrena for loop-it qe me shku nqdo rresht, rreshti 1 - 1 yll ...
  }
}

showStars(5);
