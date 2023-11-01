const readline =require('readline-sync');

// Wiskunde opgave 1 - Kubus


function berekenInhoudKubus(lengte,breedte,hoogte){
    let volume = lengte * breedte * hoogte;
    return volume;
}

let kubusVolume = berekenInhoudKubus(10,10,10);

console.log(kubusVolume);


// Wiskunde opgave 2 - Cylinder

function berekenInhoudCylinder(diameter, hoogte){
 return (Math.PI * diameter ** 2 * hoogte);
}
let cylinderVolume = berekenInhoudCylinder(20, 100);

console.log(cylinderVolume);

// Wiskunde opgave 3 - Piramide

function berekenPiramide(lengte,hoogte){
    return (lengte ** 2 * hoogte ** 2);
}
let langsteZijdePyramide = berekenPiramide(10, 10);

console.log(langsteZijdePyramide);

// Wiskunde opgave 4 - Gemiddelde

function gemiddelde(a,b,c,d,e,f,g){
    opsom = a+b+c+d+e+f+g;
    return (opsom/7);
}
let median = gemiddelde(7,6,7,6,7,6,7);

console.log(median);
