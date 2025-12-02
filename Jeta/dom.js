//1) What is DOM?

    // Document Object Model 
    // --> HTML --> Head && Body --> 


//2) Why DOM is useful?
   
  // reads html elements
  // changes elements
  // adds new elements
  // removes
  // react to user input 



// 3) Selecting elements:

// a) 
const mainTitle = document.getElementById("main");;

console.log(mainTitle)

// b)
const elements = document.getElementsByClassName('text-style')

console.log(elements)

// c)
const tagH1 = document.getElementsByTagName('h1')

console.log(tagH1)

// d) querySelector()
// finds the first element that  matches a CSS selector

const classQuery = document.querySelector('.text-style')
console.log(classQuery.innerHTML)

const idQuery = document.querySelector('#main')
console.log(idQuery.innerHTML)

const divQuery = document.querySelector('div > p')
console.log(divQuery.innerHTML)

// e) querySelectorAll() 
// finds all elements that match a CSS selector

const divQueryAll = document.querySelectorAll('div')

divQueryAll.forEach(items => {console.log(items)});



// 4) Manipulating elements

// 1) Change Text

const mainTxt = document.querySelector('#main')
mainTxt.textContent = 'Nothing'

// 2) Change HTML inside
mainTxt.innerHTML = "<em>Nothing</em>"

// 3) Modify elements style

mainTxt.style.fontSize = '60px';

// 4) Add / Remove / Toggle Classes
mainTxt.classList.add('dark-mode')
mainTxt.classList.remove('dark-mode')
mainTxt.classList.toggle('dark-mode')




// Manipulating Elements
// a) Ndrysho tekstin e h1 duke perdor textContent
// b) Vendos brenda tij nje HTML te ri  (innerHTML)
// c) Ndrysho stilin e elementit h1 duke bere: 
   // - text me ngjyre te kuqe, - fontsize me te madhe,
   // - background te zi
// d) perdor classList.add() per ti shtuar nje klase
// e) perdor classList.toggle() per te aktivizuar/deaktivizuar nje klase





// a)

const header = document.getElementById("main");
header.textContent = "New Main Title";


// b) 

header.innerHTML = "<em>Main Title Updated with HTML</em>"

// c) 
header.style.color = "red";     
header.style.fontSize = "40px";    
header.style.backgroundColor = "yellow"; 


// d) 
header.classList.add("highlight");


// e) 
 header.classList.toggle('highlight');
  header.classList.toggle('highlight');











































 
