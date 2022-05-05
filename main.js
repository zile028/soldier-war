let humanDiv = document.querySelector(".human");
let computerDiv = document.querySelector(".computer");
let infoDiv = document.querySelector(".info");

displaySoldiers();

function displaySoldiers() {
  allSoldiers.forEach((soldier) => {
    let newSoldier = document.createElement("div");
    newSoldier.className = `soldier ${soldier.weapon.name}`;
    newSoldier.addEventListener("mouseenter", () => displayInfo(soldier));
    humanDiv.appendChild(newSoldier);
  });
}

// function displayInfo(soldier) {
//   infoDiv.innerHTML = `
//     <h1>${soldier.name}</h1>
//     <p>Weapon: ${soldier.weapon.name}</p>
//     <p>Damage: ${soldier.weapon.damage}</p>
//     `;
// }

// let books = new Promise(function (resolve, reject) {
//   let xml = new XMLHttpRequest();
//   let url =
//     "https://mysafeinfo.com/api/data?list=bestnovels7&format=json&select=Rank,Title,Author,Published,Isbn13,ID&case=default";
//   xml.open("get", url);
//   xml.onreadystatechange = function () {
//     if (xml.readyState === 4 && xml.status === 200) {
//       resolve(JSON.parse(xml.responseText));
//     } else if (xml.status === 404) {
//       reject("Nema podataka");
//     }
//   };
//   xml.send();
// });

// books.then(
//   function (data) {
//     console.log(data);
//   },
//   function (err) {
//     console.log(err);
//   }
// );
