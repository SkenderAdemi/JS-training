// //1
// function getUserAccess(user) {
//   if (user.role === "admin") {
//     return "Let full access";
//   } else {
//     return "You dont get access";
//   }
// }
// const user = { name: "Edri", role: "admin" };
// const Editoruser = { name: "Edri", role: "editor" };

// getUserAccess("adminUser");

// //2

// function checkWeather(weather) {
//   if (weather.temperatura == 30) {
//     return "Nexhte";
//   } else if (weather.temperatura >= 20 && weather.temperatura <= 29) {
//     return "Ngrohte";
//   } else {
//     return "ftohte";
//   }

// }
// const objWether = { temperatura: 20, city: "Prishtina" };
// checkWeather()

// //3      

// function getPrice(productName) {
//   switch (productName) {
//     case "milk":
//       console.log("1");
//       break;
//     case "bread":
//       console.log("1.44");
//       break;
//     case "egg":
//       console.log("1.22");
//       break;
//   }
// }
// getPrice('bread')



// //4


// function checkGrade(student){
//     if(student.grade = 5){
//         return 'Shkelqyeshem'
//     }else if(student.grade = 4){
//         return 'Shume mire'
//     }else if(student.grade = 3){
//         return 'Mire'
//     }else if(student.grade = 2){
//         return 'Mjaftueshem'
//     }else{
//         return 'Dobet'
//     }
// }

// const student ={name:'Edri',grade: 5}
// checkGrade(student)

// //5

// function checkCar(car){
//    if(car.fuel === 'electric'){
//     return 'Eco friendly car'
//    }else{
//         return 'Uses fuel'
//    }
// }

// const car1 = {brand: 'Tesla', fuel: 'electric'}
// const car2 = {brand: 'BMW', fuel: 'diesel'}

// checkCar(car1)
// checkCar(car2)




// gjetja e mesatares duke perdorur for loop

// let classroom = [
//     { name:'Arta', grade: 9},
//     { name:'Luan', grade: 8},
//     { name:'Elena', grade: 10},
// ]
// let result = 0

// for(let i = 0; i < classroom.length; i++){
//     result = result + classroom[i].grade
// }

// console.log(result)


//




// const username = prompt("Username")
// const password = prompt("Password")




// const database = [
// { username: 'arti', password: 1234 },
// { username: 'arta', password: 'password' },
// { username: 'blerim', password: 'qwerty' }
// ];
// const newsFeed = [
// { username: 'arti', timeline: 'Just learned JavaScript loops 😎' },
// { username: 'arta', timeline: 'Coffee + coding = perfect day ☕️💻' },
// { username: 'blerim', timeline: 'Working on my first frontend project! 🚀' }
// ];



// function checkUser(username, password){

//   for(let i = 0; i < database.length; i++){
//   if(database[i].username === username && database[i].password === password){
//     return true
//   }else{
//     return false
//   }
// }
// }



// function logIn(username, password){
//   for(let i = 0; i < database.length; i++){
//   if(checkUser(username, password)){
//     console.log(newsFeed)
//   }else{
//     alert('Wrong')
//   }
// }
// }

// logIn(username, password)




//1
// const numra = [1, 2, 3, 4, 5]

// for(let i = 0; i < 5; i++){
//   console.log(numra[i])

// }


// //2

// const emri = ['Edri', 'Drin', 'Leon']


// for(let i = 0; i< emri.length; i++){
//   console.log(emri[i])
// }

// //3


// const fruta = [
//   {name: 'banane', price:2},
//   {name: 'molle', price: 3}
// ]


// for(let i = 0; i< fruta.length; i++){
//   console.log(fruta[i].name + ' kushton',  fruta[i].price)
// }



// //4

// const nota = [9, 8, 5, 10]
// let sum = 0

// for(let i = 0; i< nota.length; i++){
//     sum += notat[i]
// }
// console.log(sum)

// //5


// const fjali = ['Une jam Edri', 'Ti luan']


// for(let i = 0; i< fjali.length; i++){
//   if(fjali[i].length > 10){
//     console.log(fjali)
//   }else{
    
//   }
// }




// //6


// let i = 1

// while(i<11){
//     console.log(i)
//     i++
// }


// //7

// const fruit = ['molle', 'mandarin', 'bostan']

// let a = 0

// while(a<fruit.length){
//   console.log(fruit[a])
//   a++
// }

// //8


// const shum = [3, 7, 1, 4]

// let shuma = 0
// let s = 0

// while(s<shum.length){
//   console.log(shum[0]+shum[1]+shum[2]+shum[3])
//     s++
// }


// //9

// let e  = 1
// do{
//   console.log(e)
//   e++
// }while(e<6)



// //10

// let o = 0
// const ngjyra = ['kuqe', 'kaltert', 'zez']

// do{
//   console.log(ngjyra[o])
//   o++
// }while(o < ngjyra.length)




// //11



// const numbers = [1, 2, 3, 4, 5]


// numbers.forEach(function(numbers){
//   console.log(numbers)
// })




// //12



// const studentet = ['Edri', 'Drin', 'Leon']


// studentet.forEach(function(studentet,index){
//   console.log(index, studentet)
// })




// //13



// const objekte= [
//   {name:'laptop', price:1000},
//   {name:'iphone', price:2000}

// ]


// objekte.forEach(function(objekte){
// console.log(objekte.name+ ' ' + 'kushton', objekte.price)

// })


// //app


// const database = [
//   { username: "arti", password: "1234" },
//   { username: "arta", password: "password" },
//   { username: "blerim", password: "qwerty" }
// ];

// const newsFeed = [
//   { username: "arti", timeline: "Just learned JavaScript loops 😎" },
//   { username: "arta", timeline: "Coffee + coding = perfect day ☕️💻" },
//   { username: "blerim", timeline: "Working on my first frontend project! 🚀" }
// ];


// const checkUser = (user, pass) => {
//     for (i = 0; i < database.length; i++) {
//         const dbUser = database[i].username;
//         const dbPassword = database[i].password;
//         return dbUser == user && dbPassword == pass 
//     }
// }

// const loginUser = () => checkUser(userName, password) ? newsFeed[i].timeline : 'Invalid username or password';

// const postNews = (user, post) => checkUser(userName, password) ?  newsFeed.push({ username: user, timeline: post }) : ''



//calculator




const calculatori = (x,y, operator, author) => {

    let result
    switch(operator){
      case '+':
       result = x + y 
        break;
        case '-':
          result = x - y 
          break
          case '*':
          result = x * y 
           break
          case '/':
          result = x / y 

    }
    console.log(`This function is created by ${createdBy} and the result is ${result}`)
    return result
}

const calculations = [
  {x: 10, y: 5, operator: "+", author:"Drini"},
  {x: 10, y: 5, operator: "-", author:"Edri"},
  {x: 10, y: 5, operator: "*", author:"Jeta"},
  {x: 10, y: 5, operator: "/", author:"Arta"}
]

let result = []

for(const calculation of calculations){
   

  const result = calculatori(x, y, operator, author) = calculation
  
  result.push(result)
}

console.log(result)
