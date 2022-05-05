class Weapon {
  getWeapon() {
    let weapon = [new Gun(), new Sniper()];
    let rand = Math.floor(Math.random() * 2);
    return weapon[rand];
  }
}

let weapon = new Weapon();

function Gun() {
  this.name = "gun";
  this.damage = 35;
}

function Sniper() {
  this.name = "sniper";
  this.damage = 65;
}
