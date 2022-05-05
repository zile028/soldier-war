class Game {
  constructor() {}

  getOpponentSoldier() {
    return new Promise((resolve, reject) => {
      let rand = null;
      let interval = setInterval(() => {
        rand = Math.floor(Math.random() * computer.allSoldier.length);
        computer.holder.children[rand].classList.toggle("highlight");
        setTimeout(() => {
          computer.holder.children[rand].classList.toggle("highlight");
        }, 200);
      }, 300);
      setTimeout(() => {
        clearInterval(interval);
        computer.holder.children[rand].classList.toggle("highlight");
        resolve(computer.allSoldier[rand]);
      }, 5000);
    });
  }
  attack(soldier) {
    soldier.classList.add("highlight");
    this.getOpponentSoldier().then((res) => {
      // ??????
    });
  }
  start() {}
}
let game = new Game();
