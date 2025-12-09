General DOM Questions — Pyetje & Përgjigje në Shqip

1. DOM - Document Object Model
2. Ka formen e nje peme qe permban objekte.
3. Po mundet.



Selecting Elements — Pyetje & Përgjigje

1. QuerySelector - kthen elementin e pare qe i pershtatet nje CSS selector.
   QuerySelectorAll - kthen te gjitha elementet qe pershtaten, jo vetem te paren.
2. getElementsByClassName
3. Kthen elementin ne HTML me id='title'.



Manipulating Elements — Ushtrime të Zgjidhura

4. document.querySelector("p").textContent = "Hello Students!";
5. document.querySelector("h2").style.color = "blue";
6. document.querySelector("button").classList.add("active");



Event Listeners — Ushtrime të Zgjidhura

1. const button = document.querySelector('button')
    button.addEventListener('click, () => {
            alert('The button was clicked!')
    })
2. const image = document.querySelector('image')
    image.addEventListener('mouseover', () => {
            document.body.style.background = 'green'
    })



Forms — Ushtrime të Zgjidhura

1. var value = document.getElementById("myText").value;
    alert(value)
2. const input = document.querySelector('input')
        if (input.value==='')
    alert('Please write something!')
3. document.getElementById("myAnswerSheet").addEventListener("click", function(event){
  event.preventDefault()
});



Creating & Removing Elements — Ushtrime të Zgjidhura

1. let li = document.createElement("li");
    li.textContent = "Element i ri";
    document.querySelector("ul").appendChild(li);
2. <p id="teksti">Ky paragraf do të fshihet.</p>
<button id="deleteBtn">Fshi paragrafin</button>
 document.getElementById("deleteBtn").addEventListener("click",() => {
    document.getElementById("teksti").remove();
});
3. <button id="createBtn">Krijo element</button>
document.getElementById("createBtn").addEventListener("click", () => {
    let div = document.createElement("div");
    div.textContent = "Element i krijuar";
    document.body.appendChild(div);
});



Traversing the DOM — Ushtrime të Zgjidhura

1. document.querySelector("p").parentElement.style.color = "yellow";
2. let numb = document.getElementById("ul").children.length;
3. document.querySelector("ul").nextElementSibling.textContent = "E re!";



Final Quiz — Pyetje & Përgjigje

1. innerHTML punon drejtperdrejte me sintaksen HTML kurse textContent kthen permbajtjen e elementeve te HTML si tekste te thjeshta.
2. InputEvent
3. const btn = document.createElement("button");