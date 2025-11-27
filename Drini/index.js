  
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
//app
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


// function isUserValid(username, password) {

//   for (let i = 0;i < database.length; i++) {

//     if (database[i].username === username &&
//         database[i].password === password) {

//       console.log("U are in database");
//       console.log("Here is your newsfeed");
//       console.log(newsFeed);
//       return; 
//     }
//   }


//   console.log("U are not in database");
// }

// function signIn(username, password) {
//   isUserValid(username, password);
// }

// const userNamePrompt = prompt("Enter your usename");
// const passwordPrompt = prompt("Enter your password");

// signIn(userNamePrompt, passwordPrompt);


//e permirsuar

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


const isUserValid = (username, password) => {

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

const  signIn = (username, password) => {
  isUserValid(username, password);
}

const userNamePrompt = prompt("Enter your usename");
const passwordPrompt = prompt("Enter your password");

signIn(userNamePrompt, passwordPrompt);

//posti 

const newPost = {
  username: "arti", 
  timeline: "Learning JavaScript is fun! 😎" 
};


newsFeed.push(newPost);


console.log(newsFeed);






//detyra me loop 

//1

const numrat = [1,2,3,4,5]
for(let i = 0; i<=5 ; i++){
    console.log(numrat[i])
}

//2
const emrat = ['Drin','Edri','Leon']
for(let i = 0;i < emrat.length; i++){
    console.log(emrat[i])
}
//3
const frutat = [
    { name: "Banane", price: 2 }
]
for(let i = 0;i < frutat.lenght;i++){
    console.log(frutat[i].name,'kushton', frutat[i].price)
}

//4
const notat = [9,8,5,10]
let sum = 0
for(let i = 0; i < notat.length;i++){
    sum = sum + notat[i]
}
console.log(sum)
//5
const fjali = ['Si je ','Qa bane qysh kalove aje si je']
for(let i = 0;i < fjali.lenght;i++){
    if(fjali[i].length > 10){
        console.log(fjali[i])
    }
    
}

//while
//1
let i = 1
while(i<11){
    console.log(i)
    i++
}
//2
let a = 0
const frutat1 = ['banane','molla','portokalli']
while(a < frutat1.length){
    console.log(frutat1[a])
    a++
}
//3
let u = 0
let b = 0
const shuma = [3,7,1,4]
while(u < shuma.length){
    b = b + shuma[u]
   
    u++
}
//do while
//1
let nr = 1
do{
    console.log(nr)
    nr++
}while(nr<6)
   //2
   let o = 0
   const ngjyrat = ['kaltert', 'zez','kuqe']
   do{
    console.log(ngjyrat[o])
    o++
   }while(o < ngjyrat.length)


//detyra for each

const lista = [1,2,3,4,5]
lista.forEach(function(lista){
    console.log(lista)
    return
})
//2
const names = ['Drin','Edri']
names.forEach(function(names,index){
    
    console.log(index,names)
    return
})
//3
const obj =[ { name: "Laptop", price: 1000 }]
obj.forEach(function(obj){
    console.log(obj.name,'kushton',obj.price)
    return
})
//4
const grades = [9,8,5,10]
let sum1 = 0
grades.forEach(function(grade){
    sum += grade
    return
})
console.log(`Mesatarja eshte ${sum1 / grades.length}`)
//5
const fjalet = ['hey','nice','lets go']
fjalet.forEach(function(fjala){
    if(fjala.length > 4){
        console.log(fjala)
    }
    //return
})


//kalkulatori
const calculator = (x, y, operator, author) => {
    let result;
    switch(operator) {
        case '+':
            result = x + y;
            break;
            case '-':
            result = x - y;
            break;
            case '/':
            result = x / y;
            break;
            case '*':
            result = x * y;
            break;
            
    }
    console.log(`This function is created by ${author}
            and the result is ${result}`)
            return result
}
const calculations = [
    {x: 10, y: 5, operator: '+', author: 'Arti'},
    {x: 10, y: 5, operator: '-', author: 'Drini'},
    {x: 10, y: 5, operator: '*', author: 'Jeta'},
    {x: 10, y: 5, operator: '/', author: 'Arta'},
]

const results = []
for( const item of calculations){
    const rezi = calculator(item.x,item.y,item.operator,item.author)
    results.push(rezi)
}
calculator(2,3,'+','Drin')





