// Elements selection
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const dots = document.querySelectorAll(".dot");
console.log(dots);
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

btnNext.addEventListener("click", function () {
  console.log(btnNext);
  moveCurrentIndex(true);
  moveImage();
  moveTagLine();
  moveBullets();
});

btnPrev.addEventListener("click", function () {
  console.log(btnPrev);
  moveCurrentIndex(false);
  moveImage();
  moveTagLine();
  moveBullets();
});

// 1 fonction Index
function moveCurrentIndex(isNext) {
  if (isNext === true) {
    currentIndex = currentIndex + 1;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
  } else {
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
  }

  console.log(currentIndex, isNext);
}

function moveImage() {
  let img = slides[currentIndex];
  console.log(document.getElementById("imageCaroussel").src);
  console.log(img.image);
  document.getElementById("imageCaroussel").src = img.image;
}

function moveBullets() {
  //
  for (let compteur = 0; compteur < 4; compteur = compteur + 1) {
    console.log(dots[compteur]);
    dots[compteur].classList.remove("dot_selected");
  }
  //
  dots[currentIndex].classList.add("dot_selected");
  console.log(dots[currentIndex]);
}

function moveTagLine() {
  let tag = slides[currentIndex].tagLine;
  tagLine.innerHTML = tag;
}
