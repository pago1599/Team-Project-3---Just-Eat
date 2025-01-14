// bottone - hamburger-menu'

const bottoneHamburger = document.querySelector("#bottone-hamburger");
const body = document.querySelector("body");

bottoneHamburger.addEventListener("click", function () {
  body.classList.toggle("show-tendina");
});

document
  .querySelector(".tendina")
  .addEventListener("click", function (clickTendina) {
    if (clickTendina.target === this) {
      body.classList.remove("show-tendina");
    }
  });
