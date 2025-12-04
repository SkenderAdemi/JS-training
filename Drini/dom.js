const box = document.querySelector(".box");
const blue = document.querySelector("#blue");
const red = document.querySelector("#red");
const green = document.querySelector("#green");
const colorBtn = document.querySelector("#button");

blue.addEventListener("click", () => {
  box.style.backgroundColor = "blue";
});
red.addEventListener("click", () => {
  box.style.backgroundColor = "red";
});
green.addEventListener("click", () => {
  box.style.backgroundColor = "green";
});
button.addEventListener("click", () => {
  box.style.backgroundColor = "unset";
});

//2todo list

const input = document.querySelector("#input");
const inputBtn = document.querySelector("#submitBtn");
const list = document.querySelector(".list");
const newList = document.createElement("li");

inputBtn.addEventListener("click", () => {
  newList.innerHTML = input.value
  list.appendChild(newList);
    input.innerHTML = newList;
    input.value = ''
})
newList.addEventListener('click',()=>{
    newList.remove()
}
)
//3
const textArea = document.querySelector("#text");
const paragraphItem = document.querySelector("#paragraph");

textArea.addEventListener("input", () => {
//   console.log(`characters:${textArea.value.length}`);
  paragraphItem.innerHTML = 'characters:' + textArea.value.length 
});

//4

const simpleBtn = document.querySelector("#btn");
const simpleBtn2 = document.querySelector("#btn-2");
const text = document.querySelector("#h2");
let count = 0;
simpleBtn.addEventListener("click", () => {
  count = count + 1;
  text.innerHTML = count;
});

simpleBtn2.addEventListener("click", () => {
  if (count <= 0) {
    return;
  }
  count = count - 1;
  text.innerHTML = count;
});
