// May I come in?


let readline = require('readline-sync');

let leeftijd = readline.question("- Goedenavond, hoe oud bent u?\nTyp je leeftijd in: ");

if ( leeftijd < 18 ){
    console.log('- Sorry, je mag niet naar binnen. Je moet ouder zijn dan 18.');
} else (leeftijd >= 18)
{
    let ID = readline.question("- Mag ik je ID zien?\nTyp Ja/Nee: ");
        if(ID == 'ja'|'Ja'){
            console.log('- Welkom binnen');
        } else {
            console.log('- Wegwezen');
        }
}
 


/* else if (ID == "nee"||"Nee"){
    console.log('Je mag niet naar binnen als je geen ID laat zien.');
} else if(ID == "ja"||"Ja"){
    console.log('Kom naar binnen.');
} else {
    console.log('Je moet tussen Ja of Nee bepalen, anders kan je niet naar binnen');
}
*/


/* Prompt-sync
const prompt = require('prompt-sync')();

const name = prompt('What is your name?');


console.log(`Hey there ${name}`);
*/

//console.log("- Hoi " + name + ", leuk je te ontmoeten.");
//console.log("- Hoi " + name + " " + lastName + ", leuk je te ontmoeten.");

// var name = readlineSync.question('May I have your name? ');
// var loc = readlineSync.question('Hi ' + $name + '! Where do you live? ');

/*
let legaalLeeftijd = 18;
const leeftijd = prompt('- Wat is je leeftijd?');

console.log(leeftijd);


/*
if( leeftijd > legaalLeeftijd ){
    console.log('- Proficiat, je mag naar binnen.')
} else {
    console.log('- Je mag niet naar binnen, wegwezen.')
}

*/
