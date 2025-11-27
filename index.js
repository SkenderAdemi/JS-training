//Krijo nje facebook app
const database =[
 {
    username: "arti",
    password: "1234",
    friends: ["arta", "blerim"]
  },
  {
    username: "arta",
    password: "password",
    friends: ["arti"]
  },
  {
    username: "blerim",
    password: "qwerty",
    friends: ["arti"]
  }
]

const newsFeed =[
  { username: "arti", timeline: "Just learned JavaScript loops 😎" },
  { username: "arta", timeline: "Coffee + coding = perfect day ☕️💻" },
  { username: "blerim", timeline: "Working on my first frontend project! 🚀" }
];

const usernamePrompt = prompt ("Enter you username");
const passwordPrompt = prompt ("Enter your password");

function isUserValid(username, password) {
  for (let i = 0; i < database.length; i++) {
    if (
      database[i].username === username && 
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
} 







