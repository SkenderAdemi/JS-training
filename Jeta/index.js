/*Funksion për rolin e përdoruesit

Detyra 1:
Krijo funksionin getUserAccess(user) që pranon një objekt me name dhe role.
Funksioni duhet të kthejë një tekst të ndryshëm varësisht rolit të përdoruesit.

Hint:
Përdor if/else. Shembull:
Nëse user.role === "admin" → kthe “Full access”. */


function getUserAccess(user)  {
  if (user.role === "admin") {
    return "Full access";
  } else {
    return "No access";
  }
}

const user={name:'Jeta', role:'editor'};
console.log(getUserAccess(user));



/*Moti në qytet

Detyra 2:
Krijo funksionin checkWeather(weather) që merr objekt me temperature dhe city, dhe kthen përshkrimin e motit.

Rregullat:
• 30 → nxehtë
• 20–30 → ngrohtë
• <20 → ftohtë

Hint:
Kontrollo temperaturën duke përdorur if, else if, else. */

function checkWeather(weather) {
    const objWeather = {temperature: 20, city: 'Prishtina'}
}

let weather=20;
if(weather>30) {
    console.log('Hot')
} else if(weather<=30 && weather>=20) {
    console.log('Warm')
} else {
    console.log('Cold')
}

/* Llogaritja e çmimit me switch

Detyra 3:
Krijo funksionin getPrice(productName) që përdor switch për të kthyer çmimin e produkteve si: milk, bread, eggs.

Hint:
Përdor strukturën switch (productName) { case "milk": ... }. */

function getPrice(productName) {
    switch(productName) {
    case "milk":
      return 1.5;
    case "bread":
      return 1.0;
    case "eggs":
      return 2.2;
    default:
      return "Product not found";
  }
}
console.log(getPrice("bread"));

/* Notat e studentëve

Detyra 4:
Krijo funksionin checkGrade(student) që merr një objekt me name dhe grade, dhe kthen vlerësimin sipas pikëve.

Hint:
Përdor disa else if për të ndarë notat:
(shkëlqyeshëm, shumë mirë, mirë, mjaftueshëm, dobët) */

function checkGrade(student) {
    if (student.grade===10) {
    console.log(`Shkelqyeshem`)
} else if (student.grade===9) {
    console.log('Shume mire')
} else if(student.grade===8) {
    console.log('Mire')
} else if(student.grade===7) {
    console.log('Mjaftueshem')
} else if(student.grade===6) {
    console.log('Dobet')
}

    
}
const studentInfo={
        name:"Jeta",
        grade: 8,
    }

console.log(checkGrade(studentInfo))



/*Kontrolli i makinës

Detyra:
Krijo funksionin checkCar(car) që merr objekt me brand dhe fuel.
Nëse makina është elektrike → printo “Eco friendly car”, ndryshe “Uses fuel”.

Hint:
Krahaso: car.fuel === "electric". */


function checkCar(car){
    if (car.fuel==="electric") {
    console.log('Eco-friendly car')
} else{
    console.log('Uses fuel')
}
}

const car1={brand: 'Tesla', fuel:'electric'}

const car2={brand:'BMW', fuel:'diesel'}

console.log(checkCar(car1));


 
