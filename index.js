const calculator =(x,y,operator,createdBy)=> {
    let result;
    switch (operator){
        case"+":
        result =x+y ;
        break;
       case"-":
       result =x-y ;
       break;
       case"*" :
       result =x*y;
       break;
       case"/":
       result=x/y;
       default:
        result = "Operator i vlefshem";
 }

console.log(`This function is createdBy ${createdBy} and the result is ${result}` )
return result;
}
const calculations = [
    { x: 10, y: 5, operator: "+", author: "Arti" },
    { x: 10, y: 5, operator: "-", author: "Drini" },
    { x: 10, y: 5, operator: "*", author: "Jeta" },
    { x: 10, y: 5, operator: "/", author: "Arta" }]

const results=[];
for (const item of calculations) {
    const result = calculator(item.x, item.y, item.operator, item.author);
    results.push(result); 
}

console.log("Te gjitha rezultatet", results);


///////////////perdor for of gjej rezultatet e secilit prej items 
//me listen calculations ,qdo rezultat ruaje ne nje list reslults 
