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
      displayInfo(human.allSoldier[i])
    );
    newHuman.addEventListener("click", attack);
    newHuman.addEventListener("mouseleave", () =>
      hideInfo(human.allSoldier[i])
    );

    // set computer soldier
    newComputer.className = `soldier computer ${computer.allSoldier[i].weapon.name}`;
    newComputer.setAttribute("data-id", i);
    newComputer.addEventListener("mouseenter", () =>
      displayInfo(computer.allSoldier[i])
    );
    newComputer.addEventListener("mouseleave", () =>
      hideInfo(computer.allSoldier[i])
    );

    humanDiv.appendChild(newHuman);
    computerDiv.appendChild(newComputer);
  }
}

function attack() {
  game.attack(this);
  // console.log(this);
}

function displayInfo(soldier) {
  infoDiv.style.display = "block";
  infoDiv.innerHTML = `
    <h1>${soldier.name}</h1>
    <p>Weapon: ${soldier.weapon.name}</p>
    <p>Damage: ${soldier.weapon.damage}</p>
    `;
}
function hideInfo() {
  infoDiv.style.display = "none";
}
