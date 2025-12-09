
const input = document.querySelector('#todoInput');
const button2 = document.querySelector('#addBtn');
const list = document.querySelector('#orderList');


const createTextFromInput = () => {
     const value = input.value;

        if(value === '') {return;}
        
        const li = document.createElement('li');  
        const span = document.createElement('span');
        
        span.innerHTML = ' X'
        span.style.color = 'red';
        span.style.cursor = 'pointer'
        
        li.innerHTML = value;

        li.appendChild(span)
        
        list.appendChild(li);
        
        input.value = ''

        span.addEventListener('click', () => {
            li.remove()
        })
}

button2.addEventListener('click', ()=> {
            createTextFromInput()

})

input.addEventListener('keydown', (event) => {
        if(event.key === 'Enter') {
            createTextFromInput()
        }
})