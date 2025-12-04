//1
const blueColor = document.querySelector('#blue');
const redColor = document.querySelector('#red');
const greenColor = document.querySelector('#green');
const colorBox = document.querySelector('.colorBox')
const reset = document.querySelector('#resetBtn')

blueColor.addEventListener('click', () => {
    colorBox.style.backgroundColor = 'blue'
})

redColor.addEventListener('click', () => {
    colorBox.style.backgroundColor = 'red'
})

greenColor.addEventListener('click', () => {
    colorBox.style.backgroundColor = 'green'
})

reset.addEventListener('click', () => {
    colorBox.style.backgroundColor = 'white'
})


//2
const tasksInput = document.querySelector('#toDoTask')
const saveButton = document.querySelector('#saveBtn')
const orderList = document.querySelector('#list')
const list = document.createElement('li')

saveButton.addEventListener('click', () => {
    list.innerHTML = tasksInput.value

    orderList.appendChild(list)
    tasksInput.value = ''
    
})
list.addEventListener('click', () => {
    list.remove()
})
//3
const texts = document.querySelector('#texts')
const characters = document.querySelector('#characterCount')

texts.addEventListener('input', () => {
    console.log(`Characters:${texts.value.length}`)
    characters.innerHTML = 'Characters:'+ texts.value.length
})

//4

const minBtn = document.querySelector('#minus')
const plusBtn = document.querySelector('#plus')
const number = document.querySelector('#count')
let count = 0
minBtn.addEventListener('click', () => {
   if(count <= 0){
    return
}  
count = count - 1
number.innerHTML = count
})

plusBtn.addEventListener('click', () => {
  
    count = count + 1
number.innerHTML = count
})