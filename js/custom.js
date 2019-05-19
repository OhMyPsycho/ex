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



    // scroll footer
    var pm = {
        zona: document.querySelector(".bg_lin1"),
        figuras: document.querySelectorAll(".bg_lin1 figure"),
        mouseX: 0,
        mouseY: 0 
    }

    var mm = {
        mouseInit: function() {
            pm.zona.addEventListener("mousemove", mm.movimientoMouse);
            for (let i = 0; i < pm.figuras.length; i++) {
                pm.figuras[i].innerHTML = '<img src="images/ex/footer00'+i+'.png">';
                // pm.figuras[i].style.zIndex = -i
            }

            // setTimeout(function () {
            //     console.log(pm.figuras[0].childNodes[0].height)
            //     pm.zona.style.height = pm.figuras[0].childNodes[0].height;
            // }, 100);
        },
        movimientoMouse: function(mouse) {
            // console.log(mouse.offsetX, mouse.offsetY)
            pm.mouseX = mouse.offsetX;
            pm.mouseY = mouse.offsetY;
            for (let i = 0; i < pm.figuras.length; i++) {
                pm.figuras[i].style.left = pm.mouseX/(i*100+100)+"%";
                // pm.figuras[i].style.top = pm.mouseX / 100 + "%"
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
                    ps.posicionScroll = ps.destinoScroll-60
                    clearInterval(ps.intervalo);
                }
            } else {
                ps.posicionScroll -= 100
                if (ps.posicionScroll <= ps.destinoScroll) {
                    ps.posicionScroll = ps.destinoScroll-60
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

    var alturaImg = $('.section_2').offset().top;
    $(window).on('scroll', function () {
        var barra = $(window).scrollTop();
        if ($(window).scrollTop() > alturaImg-120) {
            $('.bg_lin2').css('top', barra / 10 - 100 + '%')
            // console.log(barra / 10 - 100)
        }
    });

// enviar email
$('#send_contact span').css('display', 'none')
// $('.toast').toast('show');
$('#formContact').on('submit', function() {
    var dataForm = $(this).serialize();
    $.ajax({
        type: 'post',
        url: '../mail.php',
        data: dataForm,
        beforeSend: function() {
            $('#send_contact').html('<span class="spinner-border spinner-border-sm" role="status"></span>Espere');
            $('#send_contact span').css('display', 'inline-block')
        },
        success: function(data) {
            $('.spinner-border').css('display', 'none');
            $('#resAjax').text(data);
            $('.toast').toast('show');
            setTimeout(() => {
                $('.toast').toast('hide');
            }, 5000);
        }
    })
    return false;
})

    // var videoh = document.querySelector('.video_tab video');
    // var imgv = document.querySelector('.video_tab img');
    // imgv.style.width = videoh.offsetWidth + 100+ 'px';
    // imgv.style.height = videoh.offsetHeight + 'px';
    // window.addEventListener('resize', function() {
    //     imgv.style.height = videoh.offsetHeight + 'px';
    //     imgv.style.height = videoh.offsetHeight+'px';
    // })
    // console.log(videoh.offsetHeight);

mm.mouseInit();
ms.scrollInit();
});