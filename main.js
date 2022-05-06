let humanDiv = human.holder;
let computerDiv = computer.holder;
let infoDiv = document.querySelector(".info");
let numSoldiers = 100;

human.makeSoldier(numSoldiers);
computer.makeSoldier(numSoldiers);

displaySoldiers();

function displaySoldiers() {
  for (let i = 0; i < numSoldiers; i++) {
    let newHuman = document.createElement("div");
    let newComputer = document.createElement("div");

    // set human soldier
    newHuman.className = `soldier human ${human.allSoldier[i].weapon.name}`;
    newHuman.setAttribute("data-id", i);
    newHuman.addEventListener("mouseenter", () =>
      ui.showInfo(computer.allSoldier[i])
    );
    newHuman.addEventListener("click", () => attack(newHuman, i));
    newHuman.addEventListener("mouseleave", () => ui.hideInfo());

    // set computer soldier
    newComputer.className = `soldier computer ${computer.allSoldier[i].weapon.name}`;
    newComputer.setAttribute("data-id", i);
    newComputer.addEventListener("mouseenter", () =>
      ui.showInfo(computer.allSoldier[i])
    );
    newComputer.addEventListener("mouseleave", () => ui.hideInfo());

    humanDiv.appendChild(newHuman);
    computerDiv.appendChild(newComputer);
  }
}

function attack(soldierDiv, soldierId) {
  game.attack(soldierDiv, soldierId);
}
