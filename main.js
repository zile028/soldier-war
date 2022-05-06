human.makeSoldier(game.numberSoldier);
computer.makeSoldier(game.numberSoldier);

displaySoldiers();

function displaySoldiers() {
  for (let i = 0; i < game.numberSoldier; i++) {
    let newHuman = document.createElement("div");
    let newComputer = document.createElement("div");

    // set human soldier
    newHuman.className = `soldier human ${human.allSoldier[i].weapon.name}`;
    newHuman.setAttribute("data-id", i);
    newHuman.addEventListener("mouseenter", () =>
      ui.showInfo(human.allSoldier[i])
    );
    // newHuman.addEventListener("click", () => attack(newHuman, i));
    newHuman.onclick = () =>
      game.attack({ soldierDiv: newHuman, soldierId: i });
    newHuman.addEventListener("mouseleave", () => ui.hideInfo());

    // set computer soldier
    newComputer.className = `soldier computer ${computer.allSoldier[i].weapon.name}`;
    newComputer.setAttribute("data-id", i);
    newComputer.addEventListener("mouseenter", () =>
      ui.showInfo(computer.allSoldier[i])
    );
    newComputer.addEventListener("mouseleave", () => ui.hideInfo());

    ui.humanDiv.appendChild(newHuman);
    ui.computerDiv.appendChild(newComputer);
  }
}

function attack(soldierDiv, soldierId) {
  game.attack({ soldierDiv: soldierDiv, soldierId: soldierId });
}
