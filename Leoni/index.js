//5
function checkCar(car){
    if(car.fuel === 'electrict'){
        return "Eco Friendly Car"}
    else  { return 'uses fuel'}

}
const car1 = {brand : 'tesla' , fuel :'electric'}
const car2 = {brand : 'bmw' , fuel :'diesel'}
checkCar(car1)
console.log(checkCar(car2))
//4


function checkGrade(student){
    if(student.grade === 5){
        return 'shkelqyeshem'
    }
    
    else if(student.grade === 4){
        return 'shume mire'
    }
    
    else if(student.grade === 3){
        return 'mire'
    }
  
    else if(student.grade === 2){
        return 'mjaftueshem'
    }
    
   else  if(student.grade === 1){
        return 'dobet'
    }

}
const student = {name : 'leon' , grade :'5'}
const grade = checkGrade(student)
console.log(grade);
//3
function getPrice(productName){
    let price;

    switch (productName){
        case "Milk":
        price = 1.5;
        break;

         case "Bread":
        price = 1;
        break;
        

         case "Eggs":
        price = 2;
        break;

        default :
        price ="Produkti nuk u gjet"
    }
    return price;
}
//2
 function checkWeather(weather) {
  const temperature = weather.temperature;
  const city = weather.city;
  let description;

  if (temperature === 30) {
    description = "nxehtë";
  } else if (temperature > 20 && temperature < 30) {
    description = "ngrohtë";
  } else if (temperature < 20) {
    description = "ftohtë";
  } else {
    description = "temperaturë e panjohur";
  }

  return `Në qytetin ${city} është ${description}.`;
}
console.log(checkWeather({temperature: 29  , city:"Prishtina"}))
//1
function getUserAccess(user) {
  if (user.role === "admin") {
    return "Full access";
  } else if (user.role === "editor") {
    return "Edit access";
  } else if (user.role === "viewer") {
    return "Read-only access";
  } else {
    return "Unknown role";
  }
}
console.log(getUserAccess({name:'Leon', role : 'admin'}))


