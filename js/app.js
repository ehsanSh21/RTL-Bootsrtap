const collapseIR = document.querySelector(".navbar-toggler");
collapseIR.addEventListener('click', myFunction);
const navDrop = document.getElementById("navbarNavDropdown");
function myFunction(){
    navDrop.classList.toggle="show";
}


const lastBef = document.querySelector("#headingOne");
let tag = lastBef.lastElementChild.firstElementChild.tagName;
console.log(tag);

/*******Qoute slider***********/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeS", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activeS";
}

/**********header on scroll*************/
const navHeader = document.querySelector('.header');
const navBrandImg = document.querySelector('#navImg');
const navLinks = document.querySelectorAll('#firstNav .nav-item .nav-link')
const homeLink = document.querySelector('#myHome');
window.addEventListener('scroll', function(e) {
  const lastPosition = window.scrollY;
  if (lastPosition > 50 ) {
    navHeader.classList.add('lightHeader');
    navBrandImg.src="logo.svg";
      const navLinks = document.getElementsByClassName('nav-link');
      for (let i = 0; i <= navLinks.length; i++){
          navLinks[i].classList.remove("whiteNav");
      };
      
  } else if (navHeader.classList.contains('lightHeader')) {
    navHeader.classList.remove('lightHeader');
      navBrandImg.src="photos/white-logo.svg";
      for (let i = 0; i <= navLinks.length; i++){
          navLinks[i].classList.add("whiteNav");
      };
    
  } else {
    navHeader.classList.remove('lightHeader');
      homeLink.classList.remove("active");
  }
});

var dropLink = document.getElementsByClassName("nav-link2");
for (var i = 0; i < dropLink.length; i++) {
    console.log(dropLink[i].classList);
  dropLink[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("activeDrop");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" activeDrop", "");
  }
  this.className += " activeDrop";
  });
}

const arrowID = document.getElementById("arrowID");
var myScrollFunc = function() {
  let y = window.onscroll;
  if (y > 900) {
    arrowID.className = "cTop hiden";
  } else {
    arrowID.className = "cTop shown";
  }
};

window.addEventListener("scroll", myScrollFunc);












