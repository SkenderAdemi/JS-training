//Detyra 1)Krijo funksionin getUserAcces që pranon një objekt me name dhe role
//Funksioni duhet të kthejë një tekst të ndryshëm varësisht rolit të përdoruesit.

function getUserAccess(user) {
  if (user.role === "admin") {
    return "Full access";
  } else if (user.role === "editor") {
    return "Edit access";
  } else {
    return "No defined access";
  }
}

const user1 = { name: "Harea", role: "admin" };
const user2 = { name: "Driton", role: "editor" };

console.log(getUserAccess(user1)); 
console.log(getUserAccess(user2));



//detyra 2 Krijo funksionin CheckWeather (weather )qe merr objekt me temperature dhe city dhe kthen 
//kthen pershkrimin e motit 

function checkWeather(weather) {
  if (weather.temperature > 30) {
    return "Në " + weather.city + " është shumë nxehtë";
  } else if (weather.temperature >= 20 && weather.temperature <= 30) {
    return "Në " + weather.city + " është ngrohtë";
  } else {
    return "Në " + weather.city + " është ftohtë";
  }
}
const today = { temperature: 20, city: "Prishtina" };
console.log(checkWeather(today));

//Detyra 3 rijo funksionin getPrice(productName) që përdor //
// switch për të kthyer çmimin e produkteve si: milk, bread, eggs.

function getPrice (productName){
    switch (productName){
        case "milk":
    return 1.5 ;
    case "bread":
    return 0.60 ;
    case "eggs":
    return 4 ;
    default :
    }
}
console.log(getPrice("milk"));
console.log(getPrice("bread"));
console.log(getPrice("eggs"));

//detyra 4 Krijo funksionin checkgrade(student)qe merr nje objekt me name dhe grade 
//dhe kthen vlersimin sipas pikeve 

function checkgrade(student){
if (student.grade >=90 ) {
    return student.name + "Ka noten 5 ";
} else if (student.grade >=80) {
    return student.name +"Ka noten 4";
} else if (student.grade >=70) {
    return student.name + "Ka noten 3";    
}else if (student.grade>=60){
    return student.name + "Ka noten 2";
}else {
    return student.name + "Ngelq";
}
}   
const harea = { name: "Harea", grade: 50 };
console.log(checkGrade(harea)); 


//Detyra 5 Krijo funksionin CheckCar qe merr objekt me brand dhe fuel 
//Nese eshte makina elektrike -> printo Eco friendly car , ndryshe uses fuel 
//hint krahaso car.fuel===electric

function checkCar(car) {
  if (car.fuel === "electric") {
    return "Eco friendly car";
  } else {
    return "Uses fuel";
  }
}
const car1 = { brand: "Tesla", fuel: "electric" };
const car2 = { brand: "Toyota", fuel: "gasoline" };

console.log(checkCar(car1)); 
console.log(checkCar(car2));



let classroom = [
  { name: "Arta", grade: 9 },
  { name: "Luan", grade: 8 },
  { name: "Elena", grade: 10 }
];

let totalGrade = 0;

const numberOfStudents = classroom.length;

for (let i = 0; i < numberOfStudents; i++) {
  totalGrade += classroom[i].grade;
}

const averageGrade = totalGrade / numberOfStudents;

console.log("Shuma Totale e Notave:", totalGrade);
console.log("Numri i Studentëve:", numberOfStudents);
console.log("Mesatarja e Klasës është:", averageGrade);
