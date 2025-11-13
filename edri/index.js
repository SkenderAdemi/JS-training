//1
function getUserAccess(user) {
  if (user.role === "admin") {
    return "Let full access";
  } else {
    return "You dont get access";
  }
}
const user = { name: "Edri", role: "admin" };
const Editoruser = { name: "Edri", role: "editor" };

getUserAccess("adminUser");

//2

function checkWeather(weather) {
  if (weather.temperatura == 30) {
    return "Nexhte";
  } else if (weather.temperatura >= 20 && weather.temperatura <= 29) {
    return "Ngrohte";
  } else {
    return "ftohte";
  }

}
const objWether = { temperatura: 20, city: "Prishtina" };
checkWeather()

//3

function getPrice(productName) {
  switch (productName) {
    case "milk":
      console.log("1");
      break;
    case "bread":
      console.log("1.44");
      break;
    case "egg":
      console.log("1.22");
      break;
  }
}
getPrice('bread')



//4


function checkGrade(student){
    if(student.grade = 5){
        return 'Shkelqyeshem'
    }else if(student.grade = 4){
        return 'Shume mire'
    }else if(student.grade = 3){
        return 'Mire'
    }else if(student.grade = 2){
        return 'Mjaftueshem'
    }else{
        return 'Dobet'
    }
}

const student ={name:'Edri',grade: 5}
checkGrade(student)

//5

function checkCar(car){
   if(car.fuel === 'electric'){
    return 'Eco friendly car'
   }else{
        return 'Uses fuel'
   }
}

const car1 = {brand: 'Tesla', fuel: 'electric'}
const car2 = {brand: 'BMW', fuel: 'diesel'}

checkCar(car1)
checkCar(car2)