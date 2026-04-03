let nav = document.querySelector('.navbar');

window.onscroll = function() {
    if(document.documentElement.scrollTop > 100){
nav.classList.add('header-scrolled');
    }else{
        nav.classList.remove('header-scrolled');
    }
}







let navLinks = document.querySelectorAll('.nav-link'); // returns a NodeList of all nav links
let navCollapse = document.querySelector('.navbar-collapse'); 

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navCollapse.classList.remove("show");
    });
});



const scrollContainer = document.getElementById('productScroll');
const card = scrollContainer.querySelector('.col-lg-3'); // first card

// Get computed style to include margins
const cardStyle = window.getComputedStyle(card);
const cardMarginRight = parseInt(cardStyle.marginRight);
const cardMarginLeft = parseInt(cardStyle.marginLeft);

// Exact card width including margins
const cardWidth = card.offsetWidth + cardMarginLeft + cardMarginRight;

document.getElementById('scrollLeft').addEventListener('click', () => {
  scrollContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

document.getElementById('scrollRight').addEventListener('click', () => {
  scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
});
