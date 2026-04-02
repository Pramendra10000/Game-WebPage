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
