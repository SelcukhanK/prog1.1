const readline = require('readline-sync');

class Character {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  attack() {
    return Math.floor(Math.random() * 5) + 3;
  }
}

class Monster {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  attack() {
    return Math.floor(Math.random() * 4) + 1;
  }
}

function main() {
  console.log('Welkom bij het monsterjachtspel!');
  const playerName = readline.question('Geef je held een naam: ');
  const player = new Character(playerName, 10);
  const monster = new Monster('Monster', 15);

  console.log(`${player.name} begint met ${player.health} gezondheid.`);
  console.log(`${monster.name} begint met ${monster.health} gezondheid.`);

  while (player.health > 0 && monster.health > 0) {
    const playerDamage = player.attack();
    const monsterDamage = monster.attack();

    console.log(`${player.name} valt aan en doet ${playerDamage} schade!`);
    console.log(`${monster.name} valt aan en doet ${monsterDamage} schade!`);

    player.health -= monsterDamage;
    monster.health -= playerDamage;

    console.log(`${player.name} heeft nu ${player.health} gezondheid.`);
    console.log(`${monster.name} heeft nu ${monster.health} gezondheid.`);
  }

  if (player.health <= 0) {
    console.log('Helaas, je held heeft verloren tegen het monster.');
  } else {
    console.log('Gefeliciteerd, je held heeft het monster verslagen!');
  }
}

main();