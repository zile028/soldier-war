class Human {
  static allSoldier = [];
  constructor(name) {
    this.name = name;
    this.holder = ui.humanDiv;
    this.ripSoldier = [];
  }
  makeSoldier(numSoldier) {
    this.allSoldier = new Soldier("Human").makeSoldier(numSoldier);
  }
}
let human = new Human("Human");
