// Button previous
const btnPrev = document.getElementById("prev");
btnPrev.addEventListener("click", function () {
  console.log(btnPrev);
});

// Button next
const btnNext = document.getElementById("next");
btnNext.addEventListener("click", function () {
  console.log(btnNext);
});

const dots = document.querySelectorAll(".dot");
const image = document.querySelector(`.banner-img`);
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
