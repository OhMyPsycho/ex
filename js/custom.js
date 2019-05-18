$(document).ready(function() {
    var altura = $('.navbar').offset().top;
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > altura) {
            $('.navbar').addClass('nav_fixed');
            $('.logo').addClass('logo_fixed');
        } else {
            
            $('.navbar').removeClass('nav_fixed');
            $('.logo').removeClass('logo_fixed');
        }
    });

    var pm = {
        zona: document.querySelector(".bg_lin2"),
        figuras: document.querySelectorAll(".bg_lin2 figure"),
        mouseX: 0,
        mouseY: 0 
    }

    var mm = {
        mouseInit: function() {
            pm.zona.addEventListener("mousemove", mm.movimientoMouse);
            for (let i = 0; i < pm.figuras.length; i++) {
                pm.figuras[i].innerHTML = '<img src="images/bg/linea fondo pag2.svg">';
                
            }
            
        },
        movimientoMouse: function(mouse) {
            // console.log(mouse.offsetX, mouse.offsetY)
            pm.mouseX = mouse.offsetX;
            pm.mouseY = mouse.offsetY;
            for (let i = 0; i < pm.figuras.length; i++) {
                pm.figuras[i].style.left = pm.mouseX/100+"%"
                pm.figuras[i].style.top = pm.mouseX / 100 + "%"

            }
        }
    }

var ps = {
    posicionScroll: 0,
    botonera: document.querySelectorAll('.navbar-nav .nav-item .nav-link'),
    ruta: null,
    intervalo: null,
    destinoScroll: 0
}

var ms = {
    scrollInit: function() {
        for (let i = 0; i < ps.botonera.length; i++) {
            ps.botonera[i].addEventListener('click', ms.desplazamiento)
            
        }
    },
    desplazamiento: function (ruta) {
        ruta.preventDefault();
        ps.ruta = ruta.target.getAttribute('href');
        ps.destinoScroll = document.querySelector(ps.ruta).offsetTop;
        ps.intervalo = setInterval(() => {
            if (ps.posicionScroll < ps.destinoScroll) {
                ps.posicionScroll += 100
                if(ps.posicionScroll >= ps.destinoScroll){
                    ps.posicionScroll = ps.destinoScroll
                    clearInterval(ps.intervalo);
                }
            } else {
                ps.posicionScroll -= 100
                if (ps.posicionScroll <= ps.destinoScroll) {
                    ps.posicionScroll = ps.destinoScroll
                    clearInterval(ps.intervalo);
                }
            }
            
            window.scrollTo(0, ps.posicionScroll);
        }, 50);
    }
}

// hover portafolio
var pop = {
    itemP: document.querySelector('.card_item_p'),
    overlayP: document.querySelector('.overlay_p'),
    state: false
}

// change image

    // document.querySelector('.img_tra').addEventListener('click', function(event) {
    //     console.log(event.x)
    // })

    function moverSlider(Obj) {
        console.log(Obj.getBoundingClientRect());
    }

mm.mouseInit();
ms.scrollInit();
});