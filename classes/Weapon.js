class Weapon {
  getWeapon() {
    let weapon = [this.gun(), this.sniper(), this.knife()];
    let rand = Math.floor(Math.random() * weapon.length);
    return weapon[rand];
  }
  knife() {
    return { name: "knife", damage: 35 };
  }
  gun() {
    return { name: "gun", damage: 35 };
  }
  sniper() {
    return { name: "sniper", damage: 65 };
  }
}

let weapon = new Weapon();
