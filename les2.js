// opdracht A
let huidigeTijd = new Date();
console.log(huidigeTijd.getHours());

if(huidigeTijd.getHours() > 12){
    console.log("Je hebt les maat!");
}

//opdracht B
const readline = require('readline-sync').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('whats ur name?', name => {
  console.log(`Can I c ur ID ${name}?`);
  readline.close();
});

function calculateAge (jaar,maand,dag){
  console.log("hi");
  let now = new Date();
  let birtdate = new Date(jaar,maand,dag);
  let diff =  now - birtDate;
  console.log(diff/1000*60*60*24*365);
}

calculateAge (1979,11,26);
