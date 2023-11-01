const readline =require("readline-sync");


function ShakeFunctie(woordDatGeschudtMoetWorden){

const characters = woordDatGeschudtMoetWorden.split('');
  for (let i = characters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [characters[i], characters[j]] = [characters[j], characters[i]];
  }
  const geschudWoord = characters.join('');
  return geschudWoord;
}


let woord1 = ShakeFunctie("Ziekenwagen");
console.log(woord1);

let woord2 = ShakeFunctie("Klimaatactivist");
console.log(woord2);

let woord3 = ShakeFunctie("Nieuwjaarsconfenrence");
console.log(woord3);
