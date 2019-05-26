let nav = document.querySelector('nav'); // Identify target
let ul = document.getElementsByClassName('href');

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY <= 550) { 
        nav.style.zIndex=-10000;               
    } else {
        nav.style.backgroundColor = 'hsla(260,40%,5%,1)';
        nav.style.borderBottom='solid 4px #D81159';
        nav.style.zIndex=10000;
    }
});

