class Computer {
  static allSoldier = [];
  holder;
  constructor(holder) {
    this.holder = holder;
  }
  makeSoldier(numSoldier) {
    this.allSoldier = new Soldier("Computer").makeSoldier(numSoldier);
  }
}
let computer = new Computer(document.querySelector(".computer"));
