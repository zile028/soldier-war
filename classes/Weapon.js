class Weapon {
  getWeapon() {
    let weapon = [this.gun(), this.sniper(), this.knife()];
    let rand = Math.floor(Math.random() * weapon.length);
    return weapon[rand];
  }
  knife() {
    return {
      name: "knife",
      damage: 20,
      img:
        "https://st3.depositphotos.com/4841797/16030/v/950/depositphotos_160302528-stock-illustration-muscular-soldier-with-a-knife.jpg",
    };
  }
  gun() {
    return {
      name: "gun",
      damage: 35,
      img:
        "https://st2.depositphotos.com/1292351/5335/v/950/depositphotos_53352731-stock-illustration-cartoon-muscled-soldier-with-two.jpg",
    };
  }
  sniper() {
    return {
      name: "sniper",
      damage: 65,
      img:
        "https://cdn.shopify.com/s/files/1/2299/2295/products/custom-lego-german-sniper-minifigure_1400x.jpg",
    };
  }
}

let weapon = new Weapon();
