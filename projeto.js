let contat;
let yCont;


window.addEventListener("load", function () {
    contat = document.querySelector(".contato");
    yCont = contat.offsetTop;
    yCont -= 50;
});



window.addEventListener("scroll", function () {

    let navBar = document.querySelector(".cabecalho__nav-bar");
    navBar.classList.toggle("indica_quem-somos", window.scrollY > 550 && window.scrollY < 1200);

    navBar.classList.toggle("indica_servicos", window.scrollY > 1200 && window.scrollY < 1800);

    navBar.classList.toggle("indica_contato", window.scrollY > 1800 && window.scrollY < yCont);
});

// -------------------------- FORMULÁRIO ----------------------