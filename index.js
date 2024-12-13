const first__nameEL = document.querySelector(".first__name");
const last__nameEL = document.querySelector(".last__name");
const AgeEL = document.querySelector(".Age");
const genderEL = document.querySelector(".gender");
const btnEL = document.querySelector(".btn");
const btn1EL = document.querySelector(".btn1");
const infoEL = document.querySelector(".info");
const controlEL = document.querySelector(".control");

btnEL.addEventListener("click", () => {
  infoEL.style.top = "90%";
});

btn1EL.addEventListener("click", () => {
  const cardEL = document.createElement("div");
  cardEL.className = "card";
  cardEL.innerHTML = `
  <h2>${first__nameEL.value}</h2>
  <h2>${last__nameEL.value}</h2>
  <h2>${AgeEL.value}</h2>
  <h2>${genderEL.value}</h2>
  `;

  controlEL.appendChild(cardEL);
  infoEL.style.top = "-1000%";
});
