// opgave 1A
function ShakeFunctie(woordDatGeschudtMoetWorden){

  const characters = woordDatGeschudtMoetWorden.split('');

  for (let i = characters.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [characters[i], characters[j]] = [characters[j], characters[i]];

  }

  const geschudWoord = characters.join('');

  return geschudWoord

}





var woord1 = ShakeFunctie("Boekenkast");

console.log(woord1);

var woord2 = ShakeFunctie("Spiderman");

console.log(woord2);

var woord3 = ShakeFunctie("Parasonic");

console.log(woord3);



// opgrave B

//Inhoud kubus

function berekenKubusInhoud(lengte, breedte, diepte) {

    var inhoud = lengte * breedte * diepte;

    return inhoud;

}

var lengte = 3;

var breedte = 2;

var diepte = 5;

var resultaat = berekenKubusInhoud(lengte, breedte, diepte);




console.log("De inhoud van de kubus is: " + resultaat);




//Cilinder berekenen

/*

function berekenCilinderInhoud(diameter, hoogte) {

    var inhoud = radius² * π * hoogte;

    return inhoud;

}

var hoogte = 6;

var radius² = 10;

var π = Math.PI

var resultaat = berekenCilinderInhoud(diameter, hoogte);




console.log("De inhoud van de cilinder is: " + resultaat);

*/







function berekenCilinderInhoud(diameter, hoogte) {

    var straal = diameter / 2;

    var inhoud = Math.PI * Math.pow(straal, 2) * hoogte;

    return inhoud;

}

var diameter = 6;

var hoogte = 10;

var resultaat = berekenCilinderInhoud(diameter, hoogte);




console.log("De inhoud van de cilinder is: " + resultaat);





//Zijden berekenen

function berekenLangeZijde(lengte, hoogte) {

    var korteZijde = Math.pow(lengte, 2);

    var hoogteZijde = Math.pow(hoogte, 2);

    var langeZijde = Math.sqrt(korteZijde + hoogteZijde);

    return langeZijde;

}




var lengte = 3;

var hoogte = 4;

var resultaat = berekenLangeZijde(lengte, hoogte);




console.log("De lengte van de lange zijde is: " + resultaat);




// Gemideld berekenen

function berekenGemiddelde(getal1, getal2, getal3, getal4, getal5, getal6, getal7) {

    var som = getal1 + getal2 + getal3 + getal4 + getal5 + getal6 + getal7;

    var gemiddelde = som / 7;

    return gemiddelde;

}




var getal1 = 1;

var getal2 = 2;

var getal3 = 3;

var getal4 = 4;

var getal5 = 5;

var getal6 = 6;

var getal7 = 7;

var resultaat = berekenGemiddelde(getal1, getal2, getal3, getal4, getal5, getal6, getal7);




console.log("Het gemiddelde van de 7 getallen is: " + resultaat);





// opgave 2



function generateFibonacci(limit) {

    let a = 0;

    let b = 1;



    console.log(a);

    console.log(b);



    while (true) {

      const next = a + b;

      if (next > limit) {

        break;

      }



      console.log(next);



      a = b;

      b = next;

    }

  }

  generateFibonacci(10000000);



// opgrave 3



const minNumber = 0;

const maxNumber = 100;

const secretNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;




const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,

  output: process.stdout

});




function guessNumber() {

  rl.question('Raad een getal tussen 0 en 100: ', (userInput) => {

    const userGuess = parseInt(userInput, 10);




    if (isNaN(userGuess)) {

      console.log('Dit is geen geldig getal. Probeer opnieuw.');

    } else if (userGuess < minNumber || userGuess > maxNumber) {

      console.log('Het getal moet tussen 0 en 100 liggen. Probeer opnieuw.');

    } else if (userGuess < secretNumber) {

      console.log('Het geraden getal is te laag. Probeer opnieuw.');

      guessNumber();

    } else if (userGuess > secretNumber) {

      console.log('Het geraden getal is te hoog. Probeer opnieuw.');

      guessNumber();

    } else {

      console.log(`Gefeliciteerd! Je hebt het juiste getal geraden: ${secretNumber}`);

      rl.close();

    }

  });

}




guessNumber();






 
