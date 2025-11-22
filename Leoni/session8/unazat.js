/*
// for loop
//print name 5 times
for(let i = 0; i < 5 ; i++){
   // console.log("leon")
}
// Print number from 0 to 4
for(let i = 1; i <= 5 ; i++ ){
  //  console.log('Number ${i}')
}
// Print every name in an array
let names = ['Drini','Edri'.'Leoni'];

for (let i = 0; i < names.length; i++){
    console.log('Student: ${names[i]}')
}
//Change elements inside arrays
for(let i = 0; i < names.length; i++){
    names(i) = names [i] + '!'
}
console.log(names)



let images = ["img1","Img2","Img3"]
for (let i = 0; i < images.length; i++){
    images[i] = images[i] + '.jpg'
}
console.log(images)
for(let i = 0; i < names.length; i++){
  //  console.log(names[i][0])
  if (names [i][0] == 'E'){
    names[i]= names[i] + "!"
  }
}

//ADD 'Verified' to the user
// which has more than 5000 followers
let users = [
    {name: 'Arti' , followers: 1000},
    {name: 'Artani' , followers: 4000},
    {name: 'DEA' , followers: 6000},
]
for (let i = 0; i < users.length; i++){
    if(users[i].followers > 5000 ){
    users[i].name = users[i].name + 'Verified'
        
    }
    console.log(users)
}


//use for loop and add text 
//"fresh "for fruits only

let foods = ["apple" , "pizza" , "banana" , "burger"];
for(let i = 0; i < foods.length; i++)
    if(foods[i] == "apple" || foods[i] == "banana"){
        foods[i] = foods[i] + "fresh"
    }
console.log(foods);


const numbers = [1, 2, 3, 5];
let result = 0;

for (let i = 0; i < numbers.length; i++){
    result = result + numbers[i]
}
console.log(result)


let classroom = [
{name:"Arta" , grade: 9},
{name:"Luan" , grade: 8},
{name:"Elena" , grade: 10}
];
let mesatarja = 0;
for( let i = 0 ; i < classroom.length; i++){
mesatarja = classroom.grade[i] + mesatarja;
}
console.log(mesatarja);
*/
const username = prompt("Username")
const pasword = prompt("Password")
const database = [
{ username: 'arti', password: '1234'},
{ username: 'arta', password: 'password' },
{ username: 'blerim', password: 'qwerty' }
];
const newsFeed = [
{ username: 'arti', timeline: 'Just learned JavaScript loops 😎' },
{ username: 'arta', timeline: 'Coffee + coding = perfect day ☕️💻' },
{ username: 'blerim', timeline: 'Working on my first frontend project! 🚀' }
];
function CheckUser(){
    if(username == database.username && pasword == newsFeed.password)
        console.log("You have access")
    else(
        console.log("access denied")
    )

}
CheckUser()

