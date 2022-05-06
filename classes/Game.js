class Game {
  constructor() {
    this.numberSoldier = 50;
  }

  avalibleSoldier() {
    let avalible = [];
    computer.allSoldier.forEach((soldier, index) => {
      !soldier.isDead ? avalible.push(index) : "";
    });
    return avalible;
  }

  getOpponentSoldier() {
    return new Promise((resolve, reject) => {
      let rand = null;
      let interval = setInterval(() => {
        rand = this.avalibleSoldier()[
          Math.floor(Math.random() * this.avalibleSoldier().length)
        ];
        computer.holder.children[rand].classList.toggle("highlight");
        setTimeout(() => {
          computer.holder.children[rand].classList.toggle("highlight");
        }, 100);
      }, 200);
      setTimeout(() => {
        clearInterval(interval);
        let computerSoldierDiv = computer.holder.children[rand];
        computerSoldierDiv.classList.toggle("highlight");
        resolve({ soldierDiv: computerSoldierDiv, soldierId: rand });
      }, 2000);
    });
  }

  attack(hum) {
    hum.soldierDiv.classList.add("highlight");
    this.getOpponentSoldier().then((comp) => {
      ui.batlefieldBg(true);
      hum.soldierDiv.classList.remove("highlight");
      comp.soldierDiv.classList.remove("highlight");
      human.allSoldier[hum.soldierId].health =
        human.allSoldier[hum.soldierId].health -
        computer.allSoldier[comp.soldierId].weapon.damage;

      computer.allSoldier[comp.soldierId].health =
        computer.allSoldier[comp.soldierId].health -
        human.allSoldier[hum.soldierId].weapon.damage;

      this.checkRoundWinner(hum, comp);
    });
  }

  checkRoundWinner(hum, comp) {
    let humanSoldierImg = document.createElement("img");
    let computerSoldierImg = document.createElement("img");

    humanSoldierImg.setAttribute(
      "src",
      human.allSoldier[hum.soldierId].weapon.img
    );

    computerSoldierImg.setAttribute(
      "src",
      human.allSoldier[comp.soldierId].weapon.img
    );

    ui.humanDiv.appendChild(humanSoldierImg);
    ui.computerDiv.appendChild(computerSoldierImg);

    if (human.allSoldier[hum.soldierId].health <= 0) {
      human.allSoldier[hum.soldierId].isDead = true;
      human.ripSoldier.push(hum.soldierId);
      hum.soldierDiv.onclick = "";
      hum.soldierDiv.style.backgroundImage = `url(${ui.ripBg})`;
      hum.soldierDiv.classList.remove("highlight");
    }

    if (computer.allSoldier[comp.soldierId].health <= 0) {
      computer.allSoldier[comp.soldierId].isDead = true;
      computer.ripSoldier.push(comp.soldierId);
      comp.soldierDiv.style.backgroundImage = `url(${ui.ripBg})`;
      comp.soldierDiv.classList.remove("highlight");
    }

    setTimeout(() => {
      ui.batlefieldBg(false);
      humanSoldierImg.remove();
      computerSoldierImg.remove();
      this.checkWinner();
    }, 500);
  }

  checkWinner() {
    if (human.ripSoldier.length === game.numberSoldier) {
      ui.showWinner(computer);
    } else if (computer.ripSoldier.length === game.numberSoldier) {
      ui.showWinner(human);
    }
  }
  start() {}
}
let game = new Game();
