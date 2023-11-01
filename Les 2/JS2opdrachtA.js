// Moet ik op school zijn?

let huidigeTijd = new Date();


if (huidigeTijd.getHours()> 9 && huidigeTijd.getHours()< 16){ 
    console.log("Ik moet op school zijn");
} else {
    console.log("Ik ben waarschijnlijk thuis");    
}

// statische klok
// console.log(huidigeTijd.getHours(),":", huidigeTijd.getMinutes (),":", huidigeTijd.getSeconds());

/* 0 bij minuten kleiner dan 10

if (huidigeTijd.getMinutes() < 10){
    console.log(huidigeTijd.getMinutes());
} else{
    console.log(huidigeTijd.getMinutes());
}
*/