const box = document.querySelector('.box');
const colorButton = document.getElementById('color-button');
const resetButton = document.getElementById('reset-button');

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