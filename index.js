//Detyrat me forEach
//1)Krijo një listë me 5 numra dhe printoji me forEach.

const numrat = [10, 20, 30, 40, 50];

numrat.forEach(function(numrat) {
    console.log(numrat);
});

//2)Krijo një listë me emra dhe printo çdo emër me formatin:index0 emri,...


let emrat = ["Ana", "Driton", "Fatmir"];
emrat.forEach(function(emri, index) {
    console.log("index" + index  + emri);
});

//3)Krijo një listë objektesh të formës:

const items=[
  { name: "Laptop", price: 1000 },
  { name: "Telefon", price: 1500 },
];

for (let i = 0; i < items.length; i++) {
  console.log(`${items[i].name} kushton ${items[i].price}`);
}

//4Krijo një listë notash [9, 8, 5, 10] dhe gjej mesataren duke përdorur forEach.

const notat = [9, 8, 5, 10];
let shuma = 0;
notat.forEach(function(notat) {
  shuma += notat;
});
const mesatarja = shuma / notat.length;
console.log("Mesatarja e notave është:", mesatarja);

//5)Krijo një array me fjalë dhe llogarit sa fjalë kanë gjatësi më të madhe se 4.
let fjalet = ["shkollë","liber","fletore"];
let numriFjaleveTeGjata = 0;
for (let i = 0; i < fjalet.length; i++) {
    if (fjalet[i].length > 4) {
        numriFjaleveTeGjata++;
    }
}

console.log("Numri i fjalëve me gjatësi më të madhe se 4 është:", numriFjaleveTeGjata);


//////////////Detyrat me For LOOP//////////////////////////////////////
//1)Krijo një listë me 5 numra dhe printoji duke përdorur for.

let numri = [10, 20, 30, 40, 50];

for (let i = 0; i < numri.length; i++) {
    console.log(numri[i]);
}

//2)Krijo një listë me emra dhe printo çdo emër me formatin:

const emri = [ "Lira", "Anjeza", "Joni"];
for (let i = 0; i < emri.length; i++) {
    console.log("index " + i  + emri[i]);
}


//3)Krijo një array objektesh të formës:{name:"Banane",price:2}Dhe printo:Banane kushton 2
let frutat = [
    { name: "Dardha", price: 1.5 },
    { name: "Portokall", price: 3 }
];
for (let i = 0; i < frutat.length; i++) {
    console.log(frutat[i].name + " kushton " + frutat[i].price );
}

//4)Krijo një listë notash [9, 8, 5, 10] dhe gjej shumën duke përdorur for.
let nota = [9, 8, 5, 10];
let shumat =0
for (let i = 0; i < nota.length; i++) {
    shuma += nota[i];
}
console.log("Shuma e notave është: " + shumat);

//5)Krijo një array me fjali. Printo vetëm fjalitë që kanë më shumë se 10 karaktere.
let fjalia = ["blablablabla","Une jam Harea","prsh"];
for (let i = 0; i < fjalia.length; i++) {
    if (fjalia[i].length > 10) {
        console.log(fjalia[i]);
    }
}

/////////////////////Detyra me while//////////////////////////////////////////////
//1)Printo numrat 1 deri në 10 me while.
let numrin = 1;
while (numrin <= 10) {
    console.log(numrin);
    numrin++;
}

//2)Krijo një array me fruta dhe printoji të gjitha duke përdorur while.
let fruta = ["Banane", "Molle", "Dredheza", "Kivi"];
let i = 0;
while (i < fruta.length) {
    console.log(fruta[i]);
    i++; 
}

//3)Llogarit shumën e numrave [3, 7, 1, 4] me while.
const numra = [3, 7, 1, 4];
let a=0;
let shumen=0;
while (a < numra.length) {
    shumen += numra[a]; 
    a++; 
}
console.log("Shuma e numrave është: " + shumen);


/////DO while////////////////////////////////////
//1)Printo numrat nga 1 deri në 5 duke përdorur do…while.
let b = 1;
do {
    console.log(b); 
    b++;            
} while (b <= 5);


//2)Krijo një listë me ngjyra dhe printoji të gjitha me do…while.
const ngjyrat = ["Kuqe", "Pink", "Bardh", "Hint"];
let c = 0; 
do {
    if (c < ngjyrat.length) {
        console.log(ngjyrat[c]); 
    }
    c++;
} while (c < ngjyrat.length); 



