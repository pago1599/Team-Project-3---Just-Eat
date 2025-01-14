// bottone - hamburger-menu'

const bottoneHamburger = document.querySelector("#bottone-hamburger");
const showTendina = document.querySelector(".show-tendina");

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

const bottoneLingue = document.querySelector(`.bottone-nav-lingua`);
const showTendinaLingue = document.querySelector(`.show-tendina-lingue`);

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
