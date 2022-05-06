class Computer {
  static allSoldier = [];
  constructor(name) {
    this.name = name;
    this.holder = ui.computerDiv;
    this.ripSoldier = [];
  }
  makeSoldier(numSoldier) {
    this.allSoldier = new Soldier("Computer").makeSoldier(numSoldier);
  }
}
let computer = new Computer("Computer");
