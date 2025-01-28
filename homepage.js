// bottone - hamburger-menu'

const bottoneHamburger = document.querySelector("#bottone-hamburger");
const showTendina = document.querySelector(".tendina-container");

bottoneHamburger.addEventListener("click", function () {
  showTendina.classList.toggle("show-tendina");
});

document
  .querySelector(".tendina")
  .addEventListener("click", function (clickTendina) {
    if (clickTendina.target === this) {
      showTendina.classList.remove("show-tendina");
    }
  });

// script per chiudere la tendina hamburger menu' dalla x di dentro
const chiudiBtn = document.getElementById("chiudi-tendina-hamburger");

chiudiBtn.addEventListener("click", () => {
  showTendina.classList.remove("show-tendina");
});

// bottone - lingue
const bottoneLingue = document.querySelector(`.bottone-nav-lingua`);
const showTendinaLingue = document.querySelector(`.tendina-lingue-container`);

bottoneLingue.addEventListener(`click`, function () {
  showTendinaLingue.classList.toggle(`show-tendina-lingue`);
});

document.addEventListener("click", function (event) {
  // Controlla se il clic è avvenuto fuori dalla tendina e dal bottone
  if (
    !showTendinaLingue.contains(event.target) &&
    !bottoneLingue.contains(event.target)
  ) {
    showTendinaLingue.classList.remove("show-tendina-lingue");
  }
});

// tendine footer

const button = document.querySelector("#button-just-eat");
const links = document.querySelector(".tendina-just-eat");

button.addEventListener("click", function () {
  links.classList.toggle("tendina-just-eat");
});

const buttonInter = document.querySelector("#button-internazionale");
const linksInter = document.querySelector(".tendina-internazionale");

buttonInter.addEventListener("click", function () {
  linksInter.classList.toggle("tendina-internazionale");
});

const buttonCucine = document.querySelector("#button-cucine");
const linksCucine = document.querySelector(".tendina-cucine");

buttonCucine.addEventListener("click", function () {
  linksCucine.classList.toggle("tendina-cucine");
});

const buttonEsplora = document.querySelector("#button-esplora");
const linksEsplora = document.querySelector(".tendina-esplora");

buttonEsplora.addEventListener("click", function () {
  linksEsplora.classList.toggle("tendina-esplora");
});

const buttonCitta = document.querySelector("#button-citta");
const linksCitta = document.querySelector(".tendina-citta");

buttonCitta.addEventListener("click", function () {
  linksCitta.classList.toggle("tendina-citta");
});

const buttonCatene = document.querySelector("#button-catene");
const linksCatene = document.querySelector(".tendina-catene");

buttonCatene.addEventListener("click", function () {
  linksCatene.classList.toggle("tendina-catene");
});
