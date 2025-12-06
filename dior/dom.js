let box = document.querySelector(".box")

let red = document.querySelector("#redCircle")
let blue = document.querySelector("#blueCircle")
let green = document.querySelector("#greenCircle")

let button = document.querySelector("button")


red.addEventListener('click', () => {
    box.style.background = "red"
})

blue.addEventListener('click', () => {
    box.style.background = "blue"
})

green.addEventListener('click', () => {
    box.style.background = "green"
})


let textBox = document.querySelector("#textBox")
let char = document.querySelector("#lenChar")

textBox.addEventListener("input", () => {
    char.innerHTML = `Characters: ${textBox.value.length}`
})


let minus = document.querySelector("#minus")
let plus = document.querySelector("#plus")

let count = document.querySelector("#count")

let num = 0

minus.addEventListener("click", () => {
    if (num <= 0) {
        return
    }
    num--
    count.textContent = num
})

plus.addEventListener("click", () => {
    num++
    count.textContent = num
})


let todoList = document.querySelector("#todoList")
let list = document.querySelector("#list")
let addButton = document.querySelector("#addButton")


addButton.addEventListener("click", () => {
    if (todoList.value == "") {
        return
    }
    let li = document.createElement("li")
    li.textContent = todoList.value
    list.appendChild(li)

    todoList.value = "";
})












