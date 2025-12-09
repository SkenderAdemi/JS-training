General DOM Questions
1.Qka do te thote DOM ?
1.Dom-Document Object Model eshte nje strukture e nje web faqeje e cila eshte e perbere nga disa elemente ne menyre qe JavaScript mund ti ndryshoj.
2.Qfare forme ka Dom?
2.Dom ka nje form peme /
3.A mundet qe Javascript te ndryshoje HTML edhe pasi faqja eshte e ngarkuar ?
3.Po mundet me anen e domit .

Selecting Elements
1.Cili eshte dallimi mes querySelector() dhe querySelectorAll()?
1.querySelecor()- kthen elementin e pare dhe rezultati eshte aj i vetem kurse te querySelectorAll()-kthen te gjitha elementet dhe rezultati eshte nje nodelist .
2.Cila metode i gjen elementet ne klase/
2.Eshte metoda document.getElementsByClassName por mund te jete dhe querySelector().
3.Çka kthen document.getElementById('title')?
3.Nese ekziston kthen objektin e elementit , nese jo kthen null.

 Manipulating Elements 
1.Ndrysho tekstin e nje paragrafi "Hello Students" ?
1.<p id="txt">Teksti i vjetër</p>
document.getElementById("txt").innerText = "Hello Students!";
2.Bej nje heading qe te behet blu .
2.<h1 id="title">Ky është titulli</h1>
docment.getElementById("title").style.color="blue";
3.Shto klasën “active” tek një button.
3.<button id="myBtn>kliko</button>
document.getElementById("myBtn").classList.add("active");

Event Listeners
1.Shfaq nje alert kur klikohet nje button.
1.<button id="btn">Kliko</button>
document.getElementById("btn").addEventListener("click", function () {
    alert("Butoni u klikua!");
});
2.Ndrysho backgroundin kur mausi kalon mbi nje foto .
2.<img id="foto" src="image.jpg" width="200">
let img = document.getElementById("foto");
 Kur mausi shkon mbi foto
img.addEventListener("mouseover", function () {
    document.body.style.backgroundColor = "pink";
});
Kur mausi largohet prej fotos
img.addEventListener("mouseout", function () {
    document.body.style.backgroundColor = "white";
});

Forms 
1.Lexo vleren e inputit dhe shfaqe ate ne alert .
1.<input type="text" id="name">
<button id="showBtn">Shfaq</button>
document.getElementById("showBtn").addEventListener("click", function () {
    let value = document.getElementById("name").value;
    alert(value);
});
2.Kontrollo ne inputi eshte bosh?
2.document.getElementById("showBtn").addEventListener("click", function () {
    let value = document.getElementById("name").value;

    if (value === "") {
        alert("Input-i është bosh!");
    } else {
        alert("Vlera: " + value);
    }
});
3.Ndalo relaodin e faqes kur form dergohet 
3.<form id="myForm">
    <input type="text" id="username">
    <button type="submit">Dergo</button>
</form>

document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault(); // 

    alert("Forma u dergua pa reload!");
});

Creating & Removing Elements
1.Krij nje <li> te ri dhe shtoje ne list.
1.<ul id="lista">
    <li>Item 1</li>
    <li>Item 2</li>
</ul>

<button id="addBtn">Shto</button>
document.getElementById("addBtn").addEventListener("click", function () {
    let li = document.createElement("li");  
    li.innerText = "Item i ri";
    document.getElementById("lista").appendChild(li);
});

2.Button qe fshin nje paragraf .
2.<p id="texti">Ky paragraf do te fshihet.</p>
<button id="deleteBtn">Fshije</button>
document.getElementById("deleteBtn").addEventListener("click", function () {
    document.getElementById("texti").remove();
});

3.Krijo nje element vetem kur klikohet buttoni.
3.document.getElementById("createBtn").addEventListener("click", function () {
    let p = document.createElement("p");
    p.innerText = "Ky paragraf u krijua me klikim!";
    document.getElementById("container").appendChild(p);
});

 Traversing the DOM
 1.Gej prindin e paragrafit dhe ndrysho ngjyren.
 1.<div id="container">
    <p id="myPara">Ky eshte nje paragraf</p>
</div>
let para = document.getElementById("myPara");
let parent = para.parentElement;
parent.style.backgroundColor = "yellow";

2.Numero sa femije ka nje <ul>.
2.<ul id="lista">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
let ul = document.getElementById("lista");
let count = ul.children.length;
console.log("Numri i fëmijëve: " + count);

3.Shko te next sibling dhe ndrysho tekstin.
3.