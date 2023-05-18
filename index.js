// Variables



// Seleccionar los elementos necesarios
document.addEventListener("DOMContentLoaded", function(){
    iniciarApp();
});




// Funciones

function iniciarApp(){
    scrollNav();
};

function scrollNav(){
    const navPrimary = document.querySelector(".nav__primary");
    const navSecundary = document.querySelector(".nav__secundary");
    const ctaHero = document.querySelector(".cta--hero")
    // const body = document.querySelector('body');

    window.addEventListener('scroll', function() {

        if( ctaHero.getBoundingClientRect().top < 0){
            navPrimary.classList.add("nav--opacity");
            navSecundary.classList.add("nav--normal");
        } else{
            navPrimary.classList.remove("nav--opacity");
            navSecundary.classList.remove("nav--normal");
        }
    })
}
 
