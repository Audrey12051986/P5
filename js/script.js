// Elements selection
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const dots = document.querySelectorAll(".dot");
const image = document.querySelector(".banner-img");
const tagLine = document.querySelector("p");
const slides = [
  {
    image: "images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let currentIndex = 0;

// gestion du bouton suivant
btnNext.addEventListener("click", () => {
  moveCurrentIndex(true);
  moveImage();
  moveTagLine();
  moveBullets();
});

// gestion du bouton précédent
btnPrev.addEventListener("click", () => {
  moveCurrentIndex(false);
  moveImage();
  moveTagLine();
  moveBullets();
});

// gestion des contraintes des flèches de direction
function moveCurrentIndex(isNext) {
  if (isNext === true) {
    currentIndex += 1;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
  } else {
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
  }
}

// gestion du flux d'images
function moveImage() {
  let img = slides[currentIndex];

  const imageCaroussel = document.getElementById("imageCaroussel");
  if (imageCaroussel) {
    imageCaroussel.src = img.image;
  }
}

// gestion du roulement des bullets
function moveBullets() {
  for (let compteur = 0; compteur < slides.length; compteur = compteur + 1) {
    dots[compteur].classList.remove("dot_selected");
  }
  dots[currentIndex].classList.add("dot_selected");
}

// gestion du texte
function moveTagLine() {
  let tag = slides[currentIndex].tagLine;
  tagLine.innerHTML = tag;
}
