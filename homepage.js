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

document
  .querySelector(".tendina-lingue")
  .addEventListener("click", function (clickTendina) {
    if (clickTendina.target === this) {
      showTendinaLingue.classList.remove("show-tendina-lingue");
    }
  });
