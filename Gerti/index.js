


/*

const box = document.querySelector('.box');
const colorButton = document.getElementById('color-button');
const resetButton = document.getElementById('reset-button');



const createTextFromInput = () => {
    const value = InputDeviceInfo.value;
























colorButton.addEventListener('click', () => {
    box.style.backgroundColor = 'blue';
});

resetButton.addEventListener('click', () => {
    box.style.backgroundColor = 'white';
});

//2.todo list 
const todoInput = document.getElementById('todoInput');
const todoButton = document.getElementById('todo-button');
const todoList = document.getElementById('todoList');

todoButton.addEventListener('click', () => {
    const todoText = todoInput.value;
    const li = document.createElement('li');
    li.textContent = todoText;
    todoList.appendChild(li);
});

//.3live character counter
  
const textbox = document.getElementById('textbox');
const count = document.getElementById('count');
const resetTextButton = document.getElementById('reset-text-button');

textbox.addEventListener('input', () => {
    count.textContent = `characters: ${textbox.value.length}`;
});

resetTextButton.addEventListener('click', () => {
    textbox.value = '';
    count.textContent = 'characters: 0';
});


//4.simple counter
const number = document.getElementById('number');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');

minus.addEventListener('click', () => {
    number.textContent = parseInt(number.textContent) - 1;
});

plus.addEventListener('click', () => {
    number.textContent = parseInt(number.textContent) + 1;
});







const numbers = [1,2,3,4];

//for each

numbers.forEach((nr) => console.log(nr));

//filter -> it gives you a filtered array based on a condition

const filteredNumbers = numbers.filter(nr => nr * 2 === 0);
console.log('filteredNumbers', filteredNumbers);

const users = [
    {name: 'arti', active: true},
    {name: 'sara', active: false},
    {name: 'drini', active: true},
];

const activeUsers = users.filter((user) => user.active).map((user) => user.name);

console.log('activeUsers', activeUsers);


//map

const numbersTimesTwo = numbers.map(nr => nr * 2);

const numbersTimesTwo = numbers.map(function(number){
    return number * 2;
});


//filter and ma  
// */





/*Event Listeners — Solved Exercises

1.Show an alert when a button is clicked
2.Change the background when the mouse hovers over an image
🧩 Forms — Solved Exercises

3.Read the value of an input and display it in an alert
4.Check if the input is empty.
5.Stop reloading the page when the form is submitted
🧩 Creating & Removing Elements — Solved Exercises

6.Create a new one and add it to the list
7.Button that deletes a paragraph
8.Create an element only when the button is clicked
🧩 Traversing the DOM — Solved Exercises

9.Find the parent of a paragraph and change the color
10.Count how many children a has
11.Go to the next sibling and change the text*/


//1
const button = document.getElementById('button');
button.addEventListener('click', () => {
    alert('Button clicked');
});

//2
const image = document.getElementById('image');
image.addEventListener('mouseover', () => {
    image.style.backgroundColor = 'red';
});

//3
const input = document.getElementById('input');
input.addEventListener('input', () => {
    alert(input.value);
});         

//4
const input = document.getElementById('input');
input.addEventListener('input', () => {
    if (input.value === '') {
        alert('Input is empty');
    }
});

//5
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
});

//6
const newItem = document.createElement('li');
newItem.textContent = 'New item';
document.getElementById('list').appendChild(newItem);

//7
const deleteButton = document.getElementById('delete-button');
deleteButton.addEventListener('click', () => {
    const paragraph = document.getElementById('paragraph');         
    paragraph.remove();
});

//8
const createButton = document.getElementById('create-button');
createButton.addEventListener('click', () => {
    const newElement = document.createElement('div');
    newElement.textContent = 'New element';
    document.body.appendChild(newElement);
});

//9
const paragraph = document.getElementById('paragraph');
const parent = paragraph.parentElement;
parent.style.backgroundColor = 'red';

//10
const children = paragraph.children;
console.log(children.length);

//11
const nextSibling = paragraph.nextSibling;
nextSibling.textContent = 'Changed text';

