// opdracht b
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const targetNumber = Math.floor(Math.random() * 101);

function guessNumber() {
  rl.question('Raad een getal tussen 0 en 100: ', (userInput) => {
    const userGuess = parseInt(userInput, 10);

    if (isNaN(userGuess) || userGuess < 0 || userGuess > 100) {
      console.log('Ongeldige invoer. Voer een getal tussen 0 en 100 in.');
    } else if (userGuess < targetNumber) {
      console.log('Het geraden getal is te laag.');
      guessNumber();
    } else if (userGuess > targetNumber) {
      console.log('Het geraden getal is te hoog.');
      guessNumber();
    } else {
      console.log(`Gefeliciteerd! Je hebt het juiste getal geraden: ${targetNumber}`);
      rl.close();
    }
  });
}
// opdracht c
for (let i = 1; i <= 50; i++) {
    for (let j = 1; j <= 50; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }