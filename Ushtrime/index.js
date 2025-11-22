
// for loop

for(let i=0; i< 5 ; i++) {
  console.log('My name is Jeta')

}

// Print numbers from 1 to 5

for(let i = 1; i <=5;i++) {
  console.log(`Number: ${i}`)
}
/*
rint every name in an array */

let names=['Drini', 'Edri', 'Leoni'];
/*
for( let i= 0; i< names.length; i++) { // e ndrrojm array
// names[i]=names[i] + '!'     // i osht dinamike dmth ndryshon 0,1,2 
}

console.log(names)  // Change elements inside an array: */


let images=['img1', 'img2','img3'];

for (let i=0; i< images.length; i++){
  images[i]=images[i] + '.jpg'
}

for(let i=0; i < names.length; i++){
//   console.log(names[i] [0])
console.log(names[i])
if (names[i][0]==='E'){
  names[i]=names[i] + '!'
}
}

console.log(names)

//Add "Verified" to the useer which has more than 5000 followers

let users=[
  {name:'Arti', followers: 1000},
  {name:'Artani', followers: 4000},
  {name:'Dea', followers: 6000},

]

for(let i=0;i < users.length; i++) {
  console.log(users[i].followers)

  if(users[i].followers > 5000){
   console.log(users[i])                        // veq me pa cka jena tu bo
   users[i].name = users[i].name + ' Verified'
  }
}

console.log(users)

let foods=['apple', 'pizza', 'banana', 'burger'];

//use for loop and add a text 'fresh' for fruits only

for (let i=0 ; i< foods.length; i++){
  if(foods[i] ==='apple' || foods[i]=== 'banana') {
    foods[i]=foods[i] + ' fresh'
  }

}

console.log(foods)

const numbers=[1,2,3,5];

let result = 0;

for(let i=0; i<numbers.length; i++){
 result = result + numbers[i]

}
console.log(result);