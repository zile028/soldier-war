class Soldier {
  constructor(nameSoldier) {
    this.name = nameSoldier;
    this.weapon = weapon.getWeapon();
    this.health = 100;
  }

  makeSoldier(num) {
    let soldiers = [];
    for (let i = 0; i < num; i++) {
      soldiers.push(new Soldier(this.name + i));
    }
    return soldiers;
  }
}
