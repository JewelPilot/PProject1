// Back to top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let topButton = document.getElementById("topBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Scroll-Reveal Script
ScrollReveal().reveal('#about-me-text', { 
  delay: 500, // delay of 500ms
  distance: '50px', // moves the element up by 50px
  origin: 'bottom', // animate from bottom
  reset: true // animates every time it's scrolled into view
});
