const box = document.querySelector('.box')

const blueColor = document.querySelector('#blue')
const redColor = document.querySelector('#red')
const greenColor = document.querySelector('#green')

const button = document.querySelector('button')



blueColor.addEventListener('click', () => {
  box.style.backgroundColor = 'blue'
})



redColor.addEventListener('click', () => {
  box.style.backgroundColor = 'red'
})



greenColor.addEventListener('click', () => {
  box.style.backgroundColor = 'green'
})



button.addEventListener('click', () => {
  box.style.backgroundColor = 'unset'
})





const input = document.querySelector('.inputTask')
const addBtn = document.querySelector('.add-btn')
const todoList = document.querySelector('.todo-list')


addBtn.addEventListener('click', () =>{
  const text = input.value.trim()

  if (text === ''){
    return
  }


  const li = document.createElement('li')
  li.textContent = text

   li.addEventListener('click', () => {
    li.remove()
  })

  
  todoList.appendChild(li)
  input.value = ''
})




const textBox = document.querySelector('#textBox') ;
const count1 = document.querySelector('#count');

textBox.addEventListener('input', () => {
  console.log(textBox.value.length)

  count1.textContent = `Characters: ${textBox.value.length}`
})






const minusButton=document.querySelector('#minusButton')
const plusButton=document.querySelector('#plusButton')
const nrButton=document.querySelector('#number')


let count = 0;
minusButton.addEventListener('click', () =>{
  if (count<=0){
    return
  
  }

  count = count - 1;
  nrButton.innerHTML = count;
})



plusButton.addEventListener('click', () =>{

  count = count + 1;
  nrButton.innerHTML = count;
})












const textInput = document.querySelector('.input')
const charCount = document.querySelector('.char-count')

textInput.addEventListener('input', () => {
  charCount.textContent = textInput.value.length
})






























































 
