//fonction menu déroulant
let open = document.querySelector('#open');
let close = document.querySelector('#close');
let menu = document.querySelector('#menu');

open.addEventListener('click', function () {
    menu.classList.add('menuAppears')
})

close.addEventListener('click', function () {
    menu.classList.remove('menuAppears')
})





// SCROLL TOP
let scrollTopBtn = document.querySelector('#scrollTopBtn');
let rootElement = document.documentElement;
let didScroll = false;


scrollTopBtn.addEventListener('click', function () {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

function goToTopVisibility() {
    let y = window.scrollY;

    if (y > 500) {
        scrollTopBtn.classList.add('btn__active')
    } else {
        scrollTopBtn.classList.remove('btn__active')
    }
}

function scrollTruth() {
    didScroll = true;
}

if (window.addEventListener) {
    window.addEventListener("scroll", scrollTruth, false);
} else if (window.attachEvent) {
    window.attachEvent('onscroll', scrollTruth)
}

setInterval(function () {
    if (didScroll) {
        didScroll = false;
        goToTopVisibility();
    }
}, 125);






//function responsive burger
if (window.matchMedia("(min-width:1024px)").matches) {
    $(document).ready(function ($) {
        $('.menu_item').hover(
            function () {
                $(this).find('> ul').fadeIn(200).css('display', 'flex');
            },
            function () {
                $(this).find('> ul').fadeOut(200)
            }
        )
    });
}
// nav tabs page avis
$('div.onglets').tabs();

$('div.cycle1').cycle(
    {
        fx: 'shuffle',
        easing: 'easeOutBack',
        delay: -1000
    }
);




// fonction pour logo anglais
document.getElementById('logo_ang').addEventListener('click', function () {
    alert('Site en cours de traduction');
});


//fonction pour bouton page reservation
document.getElementById('btn_panier1').addEventListener('click', function () {

    alert('Votre produit a été ajouter à votre panier');
});

document.getElementById('btn_panier2').addEventListener('click', function () {

    alert('Votre produit a été ajouter à votre panier');
});

document.getElementById('btn_panier3').addEventListener('click', function () {

    alert('Votre produit a été ajouter à votre panier');
});


document.getElementById('btn_avis').addEventListener('click', function () {

    alert('Votre commentaire sera prochainement visible');
});


















