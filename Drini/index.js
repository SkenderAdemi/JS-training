  
//1
function getUserAcces(user){
    if (user.role === 'Admin') {
        console.log( 'Full acces')
    } else {
        console.log (' NO ACCES')
    }
}



const adminUser = {
    
        name : 'Edri',
        role : 'Admin'
    
}
const editorUser = {
    
        name : 'Drin',
        role : 'Editor'
    
}
getUserAcces(adminUser);


//2


function checkWeather(weather){
    if(myWeather.temperature >= 30){
        console.log('Nxehte')
    }else if(myWeather.temperature >= 20 && myWeather.temperature<=30) {
        console.log('Ngrohte')
    }else{
        console.log('ftofte')
    }
}

 
const myWeather = {
    temperature:30,
    city : 'Prishtina'
}
checkWeather(myWeather)

//3
function getPrice(productName) {
    switch(productName){
        case ' Milk':
        console.log(1) 
        break;
        case 'Bread':
            console.log(2) 
            break;
            case 'Eggs':
            console.log(3) 
            break;
            
            
    }
}
 getPrice('Milk');



 //4
 function checkGrade(student){
    if(name.grade > 5){
        console.log('Shkelqyeshem')
    } else if (name.grade <= 5 ){
        console.log('Shume mire')
    }else if ( name.grade <= 3){
        console.log('Mire')
    }else if(name.grade < 2) {
        console.log('Mjafuteshem')
    }else{
        console.log('Dobet')
    }
 }
 const name = {
    name:'Drin',
    grade:10
 }
 checkGrade(name)
 //5

 function checkCar(car){
    if(car.fuel === 'Diesel'){
        console.log('uses fuel')
    }else{
        console.log('Electric')
    }
 }


 const car = {
    brand:'Audi',
    fuel:'Diesel'
 }
 const car1 = {
    brand:'Tesla',
    fuel:'Electricity'
 }
 checkCar(car1)




 //forlopp 

 let classroom = [
    {name:'Drin',grade: 9},
    {name:'Edri',grade: 8},
    {name:'Ols',grade: 10}
    
    
]
let rez = 0
for(let i=0; i < classroom.length; i++){
    rez = rez + classroom[i].grade / 3
}
console.log(rez)


//detyra fb ap


const database = [
  { username: "arti", password: "1234" },
  { username: "arta", password: "password" },
  { username: "blerim", password: "qwerty" }
];

const newsFeed = [
  { username: "arti", timeline: "Just learned JavaScript loops 😎" },
  { username: "arta", timeline: "Coffee + coding = perfect day ☕️💻" },
  { username: "blerim", timeline: "Working on my first frontend project! 🚀" }
];


function isUserValid(username, password) {

  for (let i = 0;i < database.length; i++) {

    if (database[i].username === username &&
        database[i].password === password) {

      console.log("U are in database");
      console.log("Here is your newsfeed");
      console.log(newsFeed);
      return; 
    }
  }

  
  console.log("U are not in database");
}

function signIn(username, password) {
  isUserValid(username, password);
}

const userNamePrompt = prompt("Enter your usename");
const passwordPrompt = prompt("Enter your password");

signIn(userNamePrompt, passwordPrompt);

