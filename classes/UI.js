"use strict";
class UI {
  constructor() {
    this.humanDiv = document.querySelector(".human");
    this.computerDiv = document.querySelector(".computer");
    this.infoDiv = document.querySelector(".info");
    this.batlefieldDiv = document.querySelector(".batelfield");
    this.backgroud = [
      "https://i.pinimg.com/originals/c4/89/95/c48995d3ab901620066cd03b1fe41ae7.gif",
      "https://i.pinimg.com/originals/c4/2a/71/c42a71a91826839fef7355c5d3098ed6.gif",
      "https://c.tenor.com/SkiVPGC4rT4AAAAC/soldier-yes-sir.gif",
    ];
    this.ripBg =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Oh54onrOrPLNnOacB-ZGHQjUzVmqYPUZgA&usqp=CAU";
  }

  displaySoldier(numSoldier, hum, comp) {
    for (let i = 0; i < numSoldier; i++) {
      let newHuman = document.createElement("div");
      let newComputer = document.createElement("div");

      // set human soldier
      newHuman.className = `soldier human`;
      newHuman.style.backgroundImage = `url(${hum.allSoldier[i].weapon.icon})`;
      newHuman.addEventListener("mouseenter", () =>
        ui.showInfo(hum.allSoldier[i])
      );
      // newHuman.addEventListener("click", () => attack(newHuman, i));
      newHuman.onclick = () =>
        game.attack({ soldierDiv: newHuman, soldierId: i });
      newHuman.addEventListener("mouseleave", () => ui.hideInfo());

      // set computer soldier
      newComputer.className = `soldier computer`;
      newComputer.style.backgroundImage = `url(${comp.allSoldier[i].weapon.icon})`;
      newComputer.setAttribute("data-id", i);
      newComputer.addEventListener("mouseenter", () =>
        ui.showInfo(comp.allSoldier[i])
      );
      newComputer.addEventListener("mouseleave", () => ui.hideInfo());

      ui.humanDiv.appendChild(newHuman);
      ui.computerDiv.appendChild(newComputer);
    }
  }

  batlefieldBg(visible) {
    if (visible) {
      this.batlefieldDiv.style.backgroundImage =
        "url(" +
        this.backgroud[Math.floor(Math.random() * this.backgroud.length)] +
        ")";
    } else {
      this.batlefieldDiv.style.backgroundImage = "url()";
    }
  }
  showInfo(soldier) {
    this.infoDiv.style.display = "block";
    this.infoDiv.innerHTML = `
      <h1>${soldier.name}</h1>
      <p>Weapon: ${soldier.weapon.name}</p>
      <p>Damage: ${soldier.weapon.damage}</p>
      <p>Health: ${soldier.health}</p>
      `;
  }
  hideInfo() {
    this.infoDiv.style.display = "none";
  }
  showWinner(winner) {
    let winnerDiv = document.createElement("div");
    let startBtn = document.createElement("button");
    winnerDiv.innerHTML = `<h2>Winner is ${winner.name}</h2>`;
    startBtn.onclick = game.start;
    startBtn.innerText = "START NEW GAME";
    winnerDiv.appendChild(startBtn);
    ui.batlefieldDiv.appendChild(winnerDiv);
  }
  hideWinner() {
    ui.batlefieldDiv.innerHTML = "";
  }

  startUp() {
    let startDiv = document.createElement("div");
    let startBtn = document.createElement("button");
    startDiv.innerHTML = `<h2>Welcome to soldier war</h2>`;
    startBtn.onclick = game.start;
    startBtn.innerText = "START NEW GAME";
    startDiv.appendChild(startBtn);
    ui.batlefieldDiv.appendChild(startDiv);
  }
}

let ui = new UI();
