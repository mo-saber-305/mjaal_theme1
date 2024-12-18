$(document).ready(function () {
    $('header .hero .hero-box').owlCarousel({
        loop: true,
        rtl: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>',
        ],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
            },
            575.98: {
                items: 1,
            }

        }
    });


});