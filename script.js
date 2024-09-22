// Abrir modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
  document.body.style.overflow = "hidden";
  document.querySelector("header").style.position = "static";
}

// Cerrar modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.body.style.overflow = "";
  document.querySelector("header").style.position = "";
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controles
function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
  }



function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }  slides[slideIndex-1].style.display = "block";
}



