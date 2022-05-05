class Weapon {
  getWeapon() {
    let weapon = [this.gun(), this.sniper()];
    let rand = Math.floor(Math.random() * 2);
    return weapon[rand];
  }
  gun() {
    return { name: "gun", damage: 35 };
  }
  sniper() {
    return { name: "sniper", damage: 65 };
  }
}

let weapon = new Weapon();
