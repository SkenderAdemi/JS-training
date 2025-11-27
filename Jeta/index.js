
const createdBy = 'Jeta'
const calculator = (x, y, operator, createdBy) => {
   let result;

   switch(operator) {
    case "+":
      result = x +y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = x /y
   }

  console.log(`This function is created by ${createdBy} and the result is ${result}`)

}

const calculations = [
  {x: 10, y: 5, operator: '+', author:'Arti'},
  {x: 10, y: 5, operator: '-', author:'Drini'},
  {x: 10, y: 5, operator: '*', author:'Jeta'},
  {x: 10, y: 5, operator: '/', author:'Arta'},


]

const results=[]

for (const item of calculations) {
  const result= calculator(item.x, item.y, item.operator, item.createdBy);
  results.push(result); 
}
console.log(results);



































 
