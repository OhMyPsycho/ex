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
})