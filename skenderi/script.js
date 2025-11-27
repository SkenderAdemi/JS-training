// 1

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 2 

const names = ["Arta", "Beni", "Lira", "Doni"];

for (let i = 0; i < names.length; i++) {
  console.log("Index " + i + ": " + names[i]);
}


// 3

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
];

for (let i = 0; i < products.length; i++) {
  console.log(products[i].name + " kushton " + products[i].price + "€");
}

// 4 

const grades = [9, 8, 5, 10];
let sum = 0;

for (let i = 0; i < grades.length; i++) {
  sum += grades[i];
}

const average = sum / grades.length;
console.log("Mesatarja është: " + average);


// 5

const sentences = ["Pershendetje", "Hi", "JavaScript eshte i lehte", "Ok"];

for (let i = 0; i < sentences.length; i++) {
  if (sentences[i].length > 10) {
    console.log(sentences[i]);
  }
}

// --- WHILE ---

// 1
let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}


// 2 

const fruits = ["Molle", "Dardhe", "Banane", "Kivi"];
let index = 0;

while (index < fruits.length) {
  console.log(fruits[index]);
  index++;
}

// 3

const nums = [3, 7, 1, 4];
let sum2 = 0;
let x = 0;

while (x < nums.length) {
  sum2 += nums[x];
  x++;
}

console.log("Shuma është: " + sum2);

// -- DO while ---

// 1
let a = 1;

do {
  console.log(a);
  a++;
} while (a <= 5);


 // 2
const colors = ["E kuqe", "Blu", "E gjelbër"];
let c = 0;

do {
  console.log(colors[c]);
  c++;
} while (c < colors.length);



// FOR EACH
// 1

const names2 = ["Arti", "Drin", "Arta", "Berat"];
names.forEach((name, index) => {
  console.log(`Index ${index}: ${name}`);
});

// 3

const products2 = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 50 }
];

products2.forEach(item => {
  console.log(`${item.name} kushton ${item.price}€`);
});

// 5
const words = ["apple", "sun", "banana", "car", "orange"];
let count = 0;

words.forEach(word => {
  if (word.length > 4) count++;
});

console.log(`Fjalë me gjatësi > 4: ${count}`);
