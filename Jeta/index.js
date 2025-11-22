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

















 
