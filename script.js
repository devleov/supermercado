const box = document.querySelector(".container")
const imagens = document.querySelectorAll(".container .oferta")

let contador = 0;

function slider() {
    contador++;

    if (contador > imagens.length - 1) {
        contador = 0;
    }

    box.style.transform = `translateX(${-contador * 300}px)`
}

setInterval(slider, 9000)

const menu_hamburguer = document.querySelector(".box-mobile-menu-item")
const menu_items = document.querySelector(".box-menu-items")

function animar() {
    menu_items.classList.toggle("box-menu-links-show")
    menu_items.classList.toggle("ativar")
    menu_hamburguer.classList.toggle("ativar")
}

function clicknoLink() {
    menu_items.classList.remove("box-menu-links-show")
    menu_items.classList.remove("ativar")
    menu_hamburguer.classList.remove("ativar")
}


let element_telephone = document.getElementById("box-telephone")
let contato = document.getElementById("contato")
let footer = document.getElementById("footer")
var msgCookies = document.getElementById("cookies-msg")


/* OBJETIVO: RESOLVER PROBLEMA DO SUPORTE WHATSAPP DO LADO INFERIOR DIREITO EM DISPLAYS */
/* IDENTIFICAR A PARTIR DE QUAL MOMENTO O PROBLEMA COMEÇA A APARECER */
/* ACHAR FERRAMENTAS POSSIVEIS E FORMAS PARA SOLUÇÃO */

document.addEventListener("scroll", function () { /* QUANDO OCORRE SCROLL ATIVA O EVENTO */
    if (footer.getBoundingClientRect().y >= 550) {
        element_telephone.style.opacity = 1;
        msgCookies.style.opacity = 1;
    } else {
        element_telephone.style.opacity = 0;
        msgCookies.style.opacity = 0;
    }
})


/* COOKIE */

function aceitoCookie() {
    localStorage.setItem("image_1", "img/BvMercado/boas-vindas-mercado-grande.png")
    localStorage.setItem("image_2", "img/BvMercado/boas-vindas-mercado-pequeno.png")
    localStorage.setItem("image_3", "img/BvMercado/boas-vindas-mercado-celulares.png")
    localStorage.setItem("image_4", "img/BvMercado/boas-vindas-mercado-medio.png")

    element_telephone.classList.add("mostrar")
    msgCookies.classList.remove("mostrar")
}

function naoAceitoCookie() {
    element_telephone.classList.add("mostrar")
    msgCookies.classList.remove("mostrar")
}


if (localStorage.image_1 == "img/BvMercado/boas-vindas-mercado-grande.png" && localStorage.image_2 == "img/BvMercado/boas-vindas-mercado-pequeno.png" && localStorage.image_3 == "img/BvMercado/boas-vindas-mercado-celulares.png" && localStorage.image_4 == "img/BvMercado/boas-vindas-mercado-medio.png") { // quando estiver funcionando os cookies
    
    
    msgCookies.classList.remove("mostrar")
    element_telephone.classList.add("mostrar")


    var displaysGrande = document.getElementById("displaysGrande")
    var displaysPequeno = document.getElementById("displaysPequeno")
    var displaysCelulares = document.getElementById("displaysCelulares")
    var displaysMedio = document.getElementById("displaysMedio")

    var imgGrande = localStorage.getItem("image_1") 
    var imgPequeno = localStorage.getItem("image_2")
    var imgCelulares = localStorage.getItem("image_3")
    var imgMedio = localStorage.getItem("image_4")

    displaysGrande.style.backgroundImage = `url(${imgGrande})`
    displaysPequeno.style.backgroundImage = `url(${imgPequeno})`
    displaysCelulares.style.backgroundImage = `url(${imgCelulares})`
    displaysMedio.style.backgroundImage = `url(${imgMedio})`


} else { // quando não estiver funcionando
    msgCookies.classList.add("mostrar")
    element_telephone.classList.remove("mostrar")
}