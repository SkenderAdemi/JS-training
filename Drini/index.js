  
//1
function getUserAcces(user){
    if (user.role === 'Admin') {
        console.log( 'Full acces')
    } else {
        console.log (' NO ACCES')
    }
}



const adminUser = {
    
        name : 'Edri',
        role : 'Admin'
    
}
const editorUser = {
    
        name : 'Drin',
        role : 'Editor'
    
}
getUserAcces(adminUser);


//2


function checkWeather(weather){
    if(myWeather.temperature >= 30){
        console.log('Nxehte')
    }else if(myWeather.temperature >= 20 && myWeather.temperature<=30) {
        console.log('Ngrohte')
    }else{
        console.log('ftofte')
    }
}

 
const myWeather = {
    temperature:30,
    city : 'Prishtina'
}
checkWeather(myWeather)

//3
function getPrice(productName) {
    switch(productName){
        case ' Milk':
        console.log(1) 
        break;
        case 'Bread':
            console.log(2) 
            break;
            case 'Eggs':
            console.log(3) 
            break;
            
            
    }
}
 getPrice('Milk');



 //4
 function checkGrade(student){
    if(name.grade > 5){
        console.log('Shkelqyeshem')
    } else if (name.grade <= 5 ){
        console.log('Shume mire')
    }else if ( name.grade <= 3){
        console.log('Mire')
    }else if(name.grade < 2) {
        console.log('Mjafuteshem')
    }else{
        console.log('Dobet')
    }
 }
 const name = {
    name:'Drin',
    grade:10
 }
 checkGrade(name)
 //5

 function checkCar(car){
    if(car.fuel === 'Diesel'){
        console.log('uses fuel')
    }else{
        console.log('Electric')
    }
 }


 const car = {
    brand:'Audi',
    fuel:'Diesel'
 }
 const car1 = {
    brand:'Tesla',
    fuel:'Electricity'
 }
 checkCar(car1)