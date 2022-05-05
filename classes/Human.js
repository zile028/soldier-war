class Human {
  static allSoldier = [];
  holder;
  constructor(holder) {
    this.holder = holder;
  }
  makeSoldier(numSoldier) {
    this.allSoldier = new Soldier("Human").makeSoldier(numSoldier);
  }
}
let human = new Human(document.querySelector(".human"));
