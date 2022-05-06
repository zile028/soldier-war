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
        }, 100);
      }, 200);
      setTimeout(() => {
        clearInterval(interval);
        let computerSoldierDiv = computer.holder.children[rand];
        computerSoldierDiv.classList.toggle("highlight");
        resolve({ computerSoldierDiv: computerSoldierDiv, computerId: rand });
      }, 5000);
    });
  }
  attack(humanSoldierDiv, humanId) {
    humanSoldierDiv.classList.add("highlight");
    this.getOpponentSoldier().then((res) => {
      console.log(res.computerSoldierDiv, res.computerId);
      ui.batlefieldBg();
      console.log(
        human.allSoldier[humanId],
        computer.allSoldier[res.computerId]
      );
    });
  }

  checkWinner() {}

  start() {}
}
let game = new Game();
