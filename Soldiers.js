let allSoldiers = [];
class Soldier {
  constructor(nameSoldier) {
    this.name = nameSoldier;
    this.weapon = weapon.getWeapon();
    this.health = 100;
  }
}

createSoldiers(100);

function createSoldiers(num) {
  for (let i = 0; i < num; i++) {
    allSoldiers.push(new Soldier("Human" + i));
  }
}
