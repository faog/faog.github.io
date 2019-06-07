// 1. Permite que el nav aparesca después del inicio
let nav = document.querySelector('nav'); // Identify target
let ul = document.getElementsByClassName('href');

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();
    if (window.scrollY <= 500) { 
        nav.style.zIndex=-10000; 
        nav.style.backgroundColor = 'hsla(260,40%,5%,1)';
        nav.style.borderBottom='solid 4px #D81159';              
    } else {
        nav.style.backgroundColor = 'hsla(260,40%,5%,1)';
        nav.style.borderBottom='solid 4px #D81159';
        nav.style.zIndex=10000;
    }

});

// 2. Jquery materialize para desplegar el nav en modo celular

    /*JQuery elementos Materialize*/ 
    $(document).ready(function(){
        //Navbar
        $('.sidenav').sidenav(); 
    });

//

ScrollReveal().reveal('.effect-project')

var options = {
    animateThreshold: 100,
    scrollPollInterval: 20
}
$('.aniview').AniView(options);

