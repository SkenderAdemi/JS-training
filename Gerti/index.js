//1️⃣ Funksion për rolin e përdoruesit

//Detyra:
//Krijo funksionin getUserAccess(user) që pranon një objekt me name dhe role.
//Funksioni duhet të kthejë një tekst të ndryshëm varësisht rolit të përdoruesit.

//Hint:
//Përdor if/else. Shembull:
//Nëse user.role === "admin" → kthe “Full access”.


function getUserAccess(user)
{
    if (user.role === "admin")
    {
        return "Full access";
    }
}

const adminUser ={name:"Gerti" role:"admin"}
const adminUser ={name:"Islami" role:"editor"}


//2️⃣ Moti në qytet

//Detyra:
//Krijo funksionin checkWeather(weather) që merr objekt me temperature dhe city, dhe kthen përshkrimin e motit.

//Rregullat:
//• 30 → nxehtë
//• 20–30 → ngrohtë
//• <20 → ftohtë

//Hint:
//Kontrollo temperaturën duke përdorur if, else if, else.

function checkWeather(weather)
{
    if (weather.temperature > 30)
    {
        return 'nxehte'
    }
    else if ( weather.temperature >= 20 && weather.temperature <= 30)
    {
        return 'ngrohte'
    }
    else
    {
        return 'ftohte'
    }
}



/*
3️⃣ Llogaritja e çmimit me switch

Detyra:
Krijo funksionin getPrice(productName) që përdor switch për të kthyer çmimin e produkteve si: milk, bread, eggs.

Hint:
Përdor strukturën switch (productName) { case "milk": ... }.*/

function getPrice(productName)
{
    switch (productName)
    {
        case "milk":
            return 1; 
        case "bread":
            return 2;
        case "eggs":
            return 3; 
        default:
            return "not found";
    }   
}


/*
4️⃣ Notat e studentëve

Detyra:
Krijo funksionin checkGrade(student) që merr një objekt me name dhe grade, dhe kthen vlerësimin sipas pikëve.

Hint:
Përdor disa else if për të ndarë notat:
(shkëlqyeshëm, shumë mirë, mirë, mjaftueshëm, dobët).*/

function checkGrade(student)
{
    if ( student.grade >= 90)
    {
        return "shkelqyeshem";
    }
    else if ( student.grade >= 80)
    {
        return "shumë mir";
    }
    else if (student.grade >= 70)
    {
        return "mire"
    }
    else if (student.grade >=60)
    {
        return "mjaftueshem"
    }
    else if (student.grade >= 50)
    {    
        return "dobet"
    }    
}

/*5️⃣ Kontrolli i makinës

Detyra:
Krijo funksionin checkCar(car) që merr objekt me brand dhe fuel.
Nëse makina është elektrike → printo “Eco friendly car”, ndryshe “Uses fuel”.

Hint:
Krahaso: car.fuel === "electric".*/


function checkCar (car)
{
    if (car.fuel === "electric")
    {
        return "eco friendly car "
    }
    else 
    {
        return "user fuel"
    }
}
