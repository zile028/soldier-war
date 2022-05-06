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
      icon:
        "https://www.pngkey.com/png/full/152-1521231_knife-clipart-dagger-knife-png-black-and-white.png",
    };
  }
  gun() {
    return {
      name: "gun",
      damage: 35,
      img:
        "https://st2.depositphotos.com/1292351/5335/v/950/depositphotos_53352731-stock-illustration-cartoon-muscled-soldier-with-two.jpg",
      icon:
        "https://t4.ftcdn.net/jpg/01/30/70/77/360_F_130707755_AKJ1u4XzmxNklwB6MRIJPTpOQ9AUZOXZ.jpg",
    };
  }
  sniper() {
    return {
      name: "sniper",
      damage: 65,
      img:
        "https://cdn.shopify.com/s/files/1/2299/2295/products/custom-lego-german-sniper-minifigure_1400x.jpg",
      icon:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiO_NW3TBU88hlHXaEOlqJUNOy_zm6Zd_2VQ&usqp=CAU",
    };
  }
}

let weapon = new Weapon();
