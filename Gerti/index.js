/*Create FB app
2.Use prompt() to get the username and password

3.Create a function which checks if a user is in the database

4.Create a login function which will show the newsfeed if success

Bonus:

5.Create a post and add inside the newsFeed array
6.Create a list of friends for each of the users in db*/

        const database = [
            { username: "arti", username: "arti", password: "1234" },
            { username: "arta", password: "password" },
            { username: "blerim", password: "qwerty" }
        ];
        const newsFeed = [
            { username: "arti", timeline: "Just learned JavaScript loops 😎" },
            { username: "arta", timeline: "Coffee + coding = perfect day ☕️💻" },
            { username: "blerim", timeline: "Working on my first frontend project! 🚀" }
        ];
        
        function checkUser(username, password) {
            for (let i = 0; i < database.length; i++) {
                if (database[i].username === username && database[i].password === password) {
                    return true
                }
            }
            return false
        }
        
        function login(username, password) {
            if (checkUser(username, password)) {
                return true        
            }
            return false
        }

        function createPost(username, post) {
            newsFeed.push({ username, post })
        }

        createPost("arti", "Just learned JavaScript loops 😎")
        createPost("arta", "Coffee + coding = perfect day ☕️💻")
        createPost("blerim", "Working on my first frontend project! 🚀")

        console.log(newsFeed);


        

        
        