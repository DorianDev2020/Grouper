﻿


// JavaScript For Slideshow

//script
    var slideIndex = 0;
    showSlides();
    
function showSlides(img) {
  var i;
    var slides = document.getElementsByClassName("images");
    var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds

    //<script src="https://apis.google.com/js/platform.js" async defer></script> //Google Log In Api
}
