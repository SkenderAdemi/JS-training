const box = document.querySelector('.box');

const pinkColor = document.querySelector('#pink');
const redColor = document.querySelector('#red');
const greenColor = document.querySelector('#green');

const button = document.querySelector('.circle');

pinkColor.addEventListener('click', () => {
    box.style.backgroundColor = 'pink';
});

redColor.addEventListener('click', () => {
    box.style.backgroundColor = 'red';
});

greenColor.addEventListener('click', () => {
    box.style.backgroundColor = 'green';
});

button.addEventListener('click', () => {
    box.style.backgroundColor = 'unset';
});

//to do list 
const input = document.querySelector(".taskInput");
const taskButton = document.querySelector(".addBtn");
const output = document.querySelector(".output");

button.addEventListener('click', () => {
    const text = input.value.trim();
    if (text === '') return;

    const li = document.createElement('li');
    li.textContent = text;

    li.addEventListener('click', () => {
        li.remove();
    });

    output.appendChild(li);
    input.value = '';
});


//live
const textBox = document.querySelector('#myText');
const numCount = document.querySelector('#Count');

textBox.addEventListener('input', () => {
    count.textContent = `Characters: ${textBox.value.length}`;
});


//
const minusButton = document.querySelector('#minusButton');
const plusButton = document.querySelector('#plusButton');
const nrButton = document.querySelector('#number');

let count = 0;

nrButton.textContent = count;

minusButton.addEventListener('click', () => {
  if(count <= 0) return;
  count = count - 1;
  nrButton.textContent = count; 
});

plusButton.addEventListener('click', () => {
  count = count + 1;
  nrButton.textContent = count; 
});







