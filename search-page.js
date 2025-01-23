document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("addressRicerca");
  const container = document.getElementById("container-cards");

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
      consegna_gratuita: false,
      costo_consegna: "2,49€ Consegna",
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
      consegna_gratuita: false,
      costo_consegna: "1,5€ Consegna",
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
      consegna_gratuita: false,
      costo_consegna: "1,5€ Consegna",
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
      tipo_cucina: "Kebab, Pizza",
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
      tipo_cucina: "Panini, Italiano",
      tempo_consegna: "25-40 min",
      consegna_gratuita: false,
      minimo_spesa: "6,00€",
      costo_consegna: "1€ Consegna",
      link: "https://www.justeat.it/restaurants-pani-ca-meusa-porta-carbone-palermo-90133/menu",
      carta_fedelta: true,
    },
  ];

  function creaCard(ristorante) {
    const card = document.createElement("div");
    card.className = "ricerca-card-orizzontale";

    card.innerHTML = `
      <a class="ricerca-card-link" href="${ristorante.link}" title="${
      ristorante.nome
    }">
        <div class="ricerca-card-ristorante">
          <div class="immagine-card-loghi">
            <picture class="immagine-ricerca-ristorante">
              <img src="${ristorante.immagine}" alt="${ristorante.nome}" />
            </picture>
            <img class="logo-ricerca-ristorante" src="${
              ristorante.logo
            }" alt="Logo ${ristorante.nome}" />
            ${
              ristorante.carta_fedelta
                ? `
              <div class="fedeltà-ricerca-ristorante">
                <div class="carta-fedeltà-ristorante">Carta Fedeltà</div>
              </div>`
                : ""
            }
          </div>
          <div class="testo-info-ristoranti">
            <div class="testo-info-nome">${ristorante.nome}</div>
            <div class="testo-info-voti_tipo">
              <div class="testo-info-voti">
                <svg class="info-icona-stella" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                  <path d="m12.288 14.449-4.183-2.197a.219.219 0 0 0-.21 0L3.713 14.45 4.5 9.794a.254.254 0 0 0 0-.193L1.07 6.302l4.673-.682a.228.228 0 0 0 .166-.114L8 1.271l2.091 4.235a.227.227 0 0 0 .167.114l4.672.682-3.386 3.3a.254.254 0 0 0-.061.192l.805 4.655Z"></path>
                </svg>
                ${ristorante.valutazione}
                <div class="ristoranti-quantità-voti">(${
                  ristorante.numero_voti
                })</div>
              </div>
              <div class="testo-info-tipo">${ristorante.tipo_cucina}</div>
            </div>

            <div class="testo-info-opzioni_consegna">
              <div class="testo-info-consegna">
                <svg class="ricerca-icona-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                  <path d="M8 14.781A6.782 6.782 0 1 1 14.781 8 6.79 6.79 0 0 1 8 14.781Zm0-12.25A5.469 5.469 0 1 0 8 13.47 5.469 5.469 0 0 0 8 2.53Z"></path>
                  <path d="m10.284 10.31-2.94-1.759V4.5h1.312v3.308l2.31 1.382-.682 1.12Z"></path>
                </svg>
                ${ristorante.tempo_consegna}
              </div>
              
              ${
                ristorante.consegna_gratuita === true
                  ? `
                <div class="testo-info-gratuito">
                  <svg class="ricerca-icona-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                    <path d="M12.139 7.405 11 4.159a.218.218 0 0 1 0-.158.246.246 0 0 1 .158-.122l1.216-.447v-1.4l-1.627.613a1.514 1.514 0 0 0-.998 1.934l.359 1.015H9.75a2.433 2.433 0 0 0-1.925.962l-1.207 1.61-1.06-2.135h.692V4.72h-3.5V6.03h1.339l.726 1.461a2.87 2.87 0 0 0-.735-.105 2.826 2.826 0 1 0 2.826 2.818v-.201l1.969-2.66a1.111 1.111 0 0 1 .875-.438h.831l.254.718a2.844 2.844 0 1 0 1.313-.219h-.01ZM4.08 11.719a1.514 1.514 0 1 1 1.514-1.514 1.505 1.505 0 0 1-1.514 1.514Zm7.875 0a1.514 1.514 0 1 1 1.4-.933 1.505 1.505 0 0 1-1.4.933Z"></path>
                  </svg>
                  Consegna gratuita
                </div>`
                  : ristorante.consegna_gratuita === false &&
                    ristorante.costo_consegna
                  ? `
                <div class="ricerca-ristorante-card-info_consegna">
                  <svg class="ricerca-icona-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                    <path d="M12.139 7.405 11 4.159a.218.218 0 0 1 0-.158.246.246 0 0 1 .158-.122l1.216-.447v-1.4l-1.627.613a1.514 1.514 0 0 0-.998 1.934l.359 1.015H9.75a2.433 2.433 0 0 0-1.925.962l-1.207 1.61-1.06-2.135h.692V4.72h-3.5V6.03h1.339l.726 1.461a2.87 2.87 0 0 0-.735-.105 2.826 2.826 0 1 0 2.826 2.818v-.201l1.969-2.66a1.111 1.111 0 0 1 .875-.438h.831l.254.718a2.844 2.844 0 1 0 1.313-.219h-.01ZM4.08 11.719a1.514 1.514 0 1 1 1.514-1.514 1.505 1.505 0 0 1-1.514 1.514Zm7.875 0a1.514 1.514 0 1 1 1.4-.933 1.505 1.505 0 0 1-1.4.933Z"></path>
                  </svg>
                  ${ristorante.costo_consegna}
                </div>`
                  : ""
              }

              <div class="testo-info-consegna">
                <svg class="ricerca-icona-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                  <path d="M6.031 11.5 5.594 8h1.312l.438 3.5H6.03ZM9.094 8l-.438 3.5H9.97l.437-3.5H9.094ZM15 5.594v1.312h-.752l-.945 5.714a1.522 1.522 0 0 1-1.506 1.286H4.202a1.522 1.522 0 0 1-1.505-1.286l-.945-5.714H1V5.594h3.876L5.918 2.75h1.39L6.25 5.594h3.5L8.691 2.75h1.391l1.042 2.844H15Zm-2.082 1.312H3.082l.874 5.504a.219.219 0 0 0 .21.184h7.595a.219.219 0 0 0 .21-.184l.946-5.504Z"></path>
                </svg>
                Min. ${ristorante.minimo_spesa}
              </div>
            </div>
          </div>
        </div>
      </a>
    `;

    return card;
  }

  function mostraRistoranti(filtro) {
    container.innerHTML = "";
    const risultati = ristoranti.filter((ristorante) =>
      ristorante.nome.toLowerCase().includes(filtro.toLowerCase())
    );
    risultati.forEach((ristorante) => {
      container.appendChild(creaCard(ristorante));
    });
  }

  mostraRistoranti("");

  searchInput.addEventListener("input", (event) => {
    const filtro = event.target.value;
    mostraRistoranti(filtro);
  });
});

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
