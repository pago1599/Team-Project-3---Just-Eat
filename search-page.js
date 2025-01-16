document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("addressRicerca");

  const ristoranti = [
    {
      nome: "Macelleria Sparacello Francesco Paolo e Figli",
      link: "https://www.justeat.it/restaurants-macelleria-sparacello-francesco-paolo-e--figli/menu",
      immagine:
        "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/d_it:cuisines:carne-0.jpg/v1/it/restaurants/204190.jpg",
      logo: "https://d2egcvq7li5bpq.cloudfront.net/it/images/restaurants/204190.gif",
      valutazione: 4.6,
      numero_voti: 200,
      tipo_cucina: "Specialità Carne, Hamburger",
      tempo_consegna: "10-25 min",
      consegna_gratuita: true,
      minimo_spesa: "15,00€",
      carta_fedelta: true,
    },
    {
      nome: "Poke House - Palermo Forum",
      link: "https://www.justeat.it/restaurants-poke-house---palermo-forum-palermo/menu",
      immagine:
        "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/d_it:cuisines:poke-0.jpg/v1/it/restaurants/271690.jpg",
      logo: "https://d2egcvq7li5bpq.cloudfront.net/it/images/restaurants/271690.gif",
      valutazione: 4.9,
      numero_voti: 11,
      tipo_cucina: "Poke, Healthy",
      tempo_consegna: "25-40 min",
      consegna_gratuita: true,
      minimo_spesa: "5,00€",
      carta_fedelta: true,
    },
    {
      nome: "McDonald's - Forum",
      link: "https://www.justeat.it/restaurants-mcdonalds---forum-palermo/menu",
      valutazione: 3.9,
      numero_voti: 91,
      tipo_cucina: "Hamburger, Americano",
      tempo_consegna: "30-45 min",
      consegna_gratuita: true,
      minimo_spesa: "5,00€",
      immagine:
        "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/d_it:cuisines:hamburger-3.jpg/v1/it/restaurants/270043.jpg",
      logo: "https://d2egcvq7li5bpq.cloudfront.net/it/images/restaurants/270043.gif",
    },
    {
      nome: "Antica Hamburgeria Del Mare",
      link: "https://www.justeat.it/restaurants-antica-hamburgeria-e-gelateria-del-mare-90123/menu",
      valutazione: 3.7,
      numero_voti: 33,
      tipo_cucina: "Hamburger, Fritti",
      tempo_consegna: "30-45 min",
      consegna_gratuita: true,
      minimo_spesa: "5,00€",
      immagine:
        "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/d_it:cuisines:hamburger-5.jpg/v1/it/restaurants/252105.jpg",
      logo: "https://d2egcvq7li5bpq.cloudfront.net/it/images/restaurants/252105.gif",
      carta_fedelta: true,
    },
    {
      nome: "Iam Pizza",
      link: "https://www.justeat.it/restaurants-iam-pizza-palermo/menu",
      valutazione: 3.4,
      numero_voti: 18,
      tipo_cucina: "Pizza, Panini",
      tempo_consegna: "25-40 min",
      consegna_gratuita: true,
      minimo_spesa: "8,00€",
      immagine:
        "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/d_it:cuisines:pizza-1.jpg/v1/it/restaurants/249931.jpg",
      logo: "https://d2egcvq7li5bpq.cloudfront.net/it/images/restaurants/249931.gif",
      carta_fedelta: true,
    },
    {
      nome: "Panificio Mangione",
      link: "https://www.justeat.it/restaurants-panificio-mangione-palermo/menu",
      immagine:
        "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/d_it:cuisines:pizza-8.jpg/v1/it/restaurants/231318.jpg",
      logo: "https://d2egcvq7li5bpq.cloudfront.net/it/images/restaurants/231318.gif",
      valutazione: 4.2,
      numero_voti: 91,
      tipo_cucina: "Pizza, Gastronomia",
      tempo_consegna: "30-45 min",
      consegna_gratuita: 1.5,
      minimo_spesa: "10,00€",
      carta_fedelta: true,
    },
    {
      nome: "Panineria Ballotta",
      link: "https://www.justeat.it/restaurants-panineria-ballotta-palermo-90125/menu",
      immagine:
        "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/d_it:cuisines:panini-5.jpg/v1/it/restaurants/279155.jpg",
      logo: "https://d2egcvq7li5bpq.cloudfront.net/it/images/restaurants/279155.gif",
      valutazione: 4.7,
      numero_voti: 28,
      tipo_cucina: "Panini, Hamburger",
      tempo_consegna: "20-35 min",
      consegna_gratuita: 1.5,
      minimo_spesa: "12,00€",
      carta_fedelta: false,
    },
    {
      nome: "Doppio Malto",
      link: "https://www.justeat.it/restaurants-doppio-malto---forum-palermo/menu",
      immagine:
        "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/d_it:cuisines:hamburger-5.jpg/v1/it/restaurants/269985.jpg",
      logo: "https://d2egcvq7li5bpq.cloudfront.net/it/images/restaurants/269985.gif",
      valutazione: 4.9,
      numero_voti: 8,
      tipo_cucina: "Hamburger, Italiano",
      tempo_consegna: "25-40 min",
      consegna_gratuita: true,
      minimo_spesa: "5,00€",
      carta_fedelta: true,
    },
    {
      nome: "Kotubia Kebab",
      immagine:
        "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/d_it:cuisines:kebab-8.jpg/v1/it/restaurants/252698.jpg",
      logo: "https://d2egcvq7li5bpq.cloudfront.net/it/images/restaurants/252698.gif",
      valutazione: 4.6,
      numero_voti: 200,
      tipo_cucina: ["Kebab", "Pizza"],
      tempo_consegna: "25-40 min",
      consegna_gratuita: true,
      minimo_spesa: "5,00€",
      link: "https://www.justeat.it/restaurants-kotubia-kebab-palermo/menu",
    },
    {
      nome: "Porta Carbone",
      immagine:
        "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/d_it:cuisines:panini-1.jpg/v1/it/restaurants/269661.jpg",
      logo: "https://d2egcvq7li5bpq.cloudfront.net/it/images/restaurants/269661.gif",
      valutazione: 4.6,
      numero_voti: 49,
      tipo_cucina: ["Panini", "Italiano"],
      tempo_consegna: "25-40 min",
      consegna_gratuita: false,
      minimo_spesa: "6,00€",
      costo_consegna: "1€",
      link: "https://www.justeat.it/restaurants-pani-ca-meusa-porta-carbone-palermo-90133/menu",
      carta_fedelta: true,
    },
  ];

  const horizontalCards = document.querySelectorAll(
    ".ricerca-card-orizzontale"
  );

  function filterCards() {
    const RicercaCard = searchInput.value.toLowerCase();

    horizontalCards.forEach((card) => {
      const cardTitle = card
        .querySelector(".testo-info-nome")
        .textContent.toLowerCase();
      if (cardTitle.includes(RicercaCard)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  }

  searchInput.addEventListener("input", filterCards);
});
