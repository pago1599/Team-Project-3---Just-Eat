document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("address");

    const verticalCards = document.querySelectorAll(".ricerca-ristorante-card");
    const horizontalCards = document.querySelectorAll(".ricerca-card-orizzontale");

    function filterCards() {
      const searchQuery = searchInput.value.toLowerCase().trim();

      verticalCards.forEach(card => {
        const cardTitle = card.querySelector(".ricerca-ristorante-card-nome").textContent.toLowerCase();
        if (cardTitle.includes(searchQuery)) {
          card.style.display = "";
        } else {
          card.style.display = "none"; 
        }
      });
      horizontalCards.forEach(card => {
        const cardTitle = card.querySelector(".testo-info-nome").textContent.toLowerCase();
        if (cardTitle.includes(searchQuery)) {
          card.style.display = ""; 
        } else {
          card.style.display = "none"; 
        }
      });
    }
    searchInput.addEventListener("input", filterCards);
  });