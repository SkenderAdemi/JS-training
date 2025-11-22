/*Create FB app
2.Use prompt() to get the username and password

3.Create a function which checks if a user is in the database

4.Create a login function which will show the newsfeed if success

Bonus:

5.Create a post and add inside the newsFeed array
6.Create a list of friends for each of the users in db

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


        const userNamePrompt = prompt ("enter your username")
        const passwordPrompt = prompt ("enter your password")
        
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


        const friendsList = {
        arti: ["arta", "blerim"],
        arta: ["arti"],
        blerim: ["arti", "arta"]
        };


 

        //loops

        //while loop -> perseritet derisa kushti te jete true

        for (let i = 0; i < 4; i++) {
            console.log(i);
        }

       
        let a = 1;
        while (i < 5) {
            console.log('while loop', a);
            a++;
        }

            let password = ''

            while (password !== '1234') {
            password = prompt('shkruaje passwordin')
            }
            console.log('hyrja e lejuar')



            // do ... while loop -> e ekzekuton kodin te pakten njeher pastaj e kontrollon kushtin

            let count = 10;
            do {
                //ekzekutohet kodi
                console.log('inside')
            }while (count < 5 );


            
            
            let again;
            do {
                again = prompt('do you want to continue? (y/n)')
            } while (again === 'y');
             

            //foreach -> metode e array qe e ekzekuton nje funksion per cdo element te array
            //argumentet:item(vlera e elementit),index(pozicioni i elementit),array(vet lista)

            const students = ['Drini', 'Jeta', 'Leoni'];

            numbers.forEach(function(student, index, array){
                console.log('studenti', student)

                const next = array[index + 1]
                
                if (next === undefined) {
                    console.log('nuk ka pas tij')
                    return;
                }
                console.log('pas tij',array[index + 1])
            })
            

            const products = [
                { name: 'laptop', price: 1000 },
                { name: 'tv', price: 500 },
            ]
            products.forEach(function(product){
                console.log(product.name ,product.price)
            })

            */



           //detyra me for
            //Detyra 1
            const numbers = [3, 7, 10, 5, 9];
            for (let i = 0; i < numbers.length; i++) {
            console.log(numbers[i]);
            }

            //detyra 2
            const names = ["arti","jeta","leon",]
            for (let i = 0; names.length; i++)
                console.log('index[i],names[i]')

            //detyra 3
            const product = [
                {name: "banane",price: 2},
            ]
            for(let i = 0; i < product.length; i++)
                console.log ('products[i].name,price product[i].price')

            //detyra 4
            const grades = [9,8,5,10]
            let sum = 0;
            for (let i = 0; i < grades.length; i++){
                sum + grades[i]
            }
            console.log("shuma e notave:",sum)

            //detyra 5
            const sentences =["qweqweqwefff","ffqggggeqwe","qwee","qweqw",]
            for (let i = 0; i < sentences.length; i++){
                if(sentences[i].length > 10){
                    console.log(sentences[i])
                }
            }

            
            //detyra me while
            //detyra 1 
            let i = 1;
            while(i < 10){
                console.log(i)
                i++
            }

            //detyra 2
            const fruits = ["banane","molle","dredhza"]
            index = 0
            while (index < fruits.length) {
                console.log(fruits[index]);
                index ++;
            }

            //detyra 3
            const numbers = [3, 7, 1, 4];
            let total = 0;
            let i = 0;
            while (i < numbers.length){
                total += numbers[i];
                i++;
            }
            console.log("Shuma esht:", total);
            

            //detyra me do while
            //detyra 1
            let i = 1
            do
            {
                console.log(i)
                i++
            }
            while (i < 5)

            //detyra 2
            const colors = ["kalter","kuqe","gjelbert",]
            let i = 0
            do
            {
                console.log(colors[i])
                i++
            }
            while (i < colors.length)