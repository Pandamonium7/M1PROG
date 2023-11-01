// Hello You


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`- Wat is jou naam?\n Schrijf je naam op: `, name => {
    console.log(`- Hoi ${name}, aangenaam kennis te maken!`);
    readline.close();
  });
