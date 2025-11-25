/*
let classroom = [
  {name:'Arta', grade:9},
  {name:'Luan', grade: 8 },
  {name:'Elena', grade: 10}

];

let sum= 0 ;

for(let i = 0; i< classroom.length; i++){
 sum = sum + classroom[i].grade;
}

let average=sum / 3

console.log(average)


// FB Page


const database=[
  {username:'Arti', password: '1234'},
  {username:'Arta', password: 'password'},
  {username:'Blerim', password: 'qwerty'}
];

const newsFeed = [
  { username: 'Arti', timeline:'Just learned JavaScript loops'},
  {username: 'Arta', timeline:'Coffee + coding = perfect day!'},
  {username:'Blerim', timeline: 'Working on my first frontend project!'},

];

const username =prompt('Please type in your username');
const password = prompt('Please type in your password');

  function checkUser(username, password) {
    for (let i=0 ;  i<database.length ; i++){
      if(database[i].username===username && database[i].password===password){
        return true
      } 

    }
    return false;
  }

function signIn(username, password) {
  if (checkUser(username, password)) {
    console.log(newsFeed);
    createPost(username); // post only after login
    console.log("Updated NewsFeed:", newsFeed);
  } else {
    alert('Wrong username or password!');
  }
}

signIn(username, password);

// BONUS
function createPost(username) {
  let newPost = prompt('Write your post:');

  const newFeedObject = {
    username: username,
    timeline: newPost
  };

  newsFeed.push(newFeedObject);
}


// Loops

//1.  While Loop --> perseritet derisa kushti te jete true

let a=0;
while(a<4) {  // condition
  console.log('While loop', a)  // logic  infinite loop snalet
  a++             // increment
}


let password1='';

while (password1 !== '1234') {
  password1= prompt('Shkruaje passwordin')
}

console.log('Hyrja e lejuar')  // sheket prompt derisa te jepim kodin 1234


// 2. Do... while --> niher e ekzekuton kodin tani e kqyr kushtin(edhe nese splotsohet)
// seka variablen mrena i

let count= 10;
do {
  console.log('Inside!')      // ekzekutohet kodi
} while (count<5)            // kushti


let again;

do {
  again = prompt('Do you want to continue (Yes/No)')
} while (again === 'yes')



// 3. ForEach --> metode e array qe e ekzekuton nje funksion per secilin element
// te listes apo array-it

// Argumentet qe pranon: 
// 1. Item - vlera e elementit
// 2. Index - pozita e elementit
// 3. Array - vet lista

const students1 = ['Drini','Jeta','Leoni'];

students1.forEach(function(student, index, array) {
 // console.log('studenti', student)

  const next= array (index+1);
  if (next){
    console.log('pas tij', array(index + 1))
  }

})

const products = [
  {name:'laptop', price: 1000},
  {name:'tv', price:500}
]

products.forEach(function(product) {
  console.log (product.name, product.price)
}) */





// Detyra me loops

// DETYRA ME FOR

// 1.Krijo një listë me 5 numra dhe printoji duke përdorur for.

const numbers=[1,2,3,4,5]

for(let i = 1; i <=5;i++) {
  console.log(numbers[i]) }

// 2. Krijo një listë me emra dhe printo çdo emër me formatin: Index 0: Emri…

const emra =['Jeta','Harea','Partina'];

for(let i=0; i<emra.length; i++) {
  console.log('Index ' + [i] + ' ' + emra[i]);
}


/* 3. Krijo një array objektesh të formës:
{ name: "Banane", price: 2 }
Dhe printo:
Banane kushton 2€ */

const fruits = [
  {name:'Banane', price: 2},
  {name:'Molla', price: 3},
]

for (let i=0; i<fruits.length ; i++){
  console.log(fruits[i].name + ' kushton ' + fruits[i].price)
}

// 4. Krijo një listë notash [9, 8, 5, 10] dhe gjej shumën duke përdorur for.


const grades=[9,8,5,10];
let sum= 0;

for( let i=0; i<grades.length; i++){
  sum += grades[i]
}
console.log(sum)

// 5. Krijo një array me fjali. Printo vetëm fjalitë që kanë më shumë se 10 karaktere.

const fjalite =['Mua me pelqen JavaScript','Une quhem Jeta','Hello','Goodbye']

for (let i=0; i<fjalite.length; i++){
  if(fjalite[i].length>10) {
    console.log(fjalite[i])
  } }



// DETYRA ME WHILE

// 1. Printo numrat 1 deri në 10 me while.

let c = 1;

while (c <= 10) {
  console.log(c);
  c++;
}

// 2. Krijo një array me fruta dhe printoji të gjitha duke përdorur while.

const fruits1 = ["apple", "banana", "orange",];

let a = 0;

while (a < fruits1.length) {
  console.log(fruits1[a]);
  a++;
}

// 3. Llogarit shumën e numrave [3, 7, 1, 4] me while.


const numrat = [3, 7, 1, 4];
let shuma = 0;
let b = 0;

while (b < numrat.length) {
  shuma += numrat[b];
  b++;
}

console.log("Shuma e numrave eshte:", shuma);


 //DETYRAT ME DO…WHILE


//1. Printo numrat nga 1 deri në 5 duke përdorur do…while.

let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);


//2. Krijo një listë me ngjyra dhe printoji të gjitha me do…while.

const colors = ["red", "blue", "green"];
let j = 0;

do {
  console.log(colors[j]);
  j++;
} while (j < colors.length);
















 
