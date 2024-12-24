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

    $('.situations .situations-box .situation .shares-box, .donations .bottom-box .donation .shares-box, .gifts .bottom-box .gift .shares-box').owlCarousel({
        margin: 10,
        rtl: true,
        nav: true,
        dots: false,
        stagePadding: 15,
        responsiveClass: true,
        autoWidth: true,
        navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>',
        ],
    });

    $('.situations .situations-box .situation .content .shares-box .share').on('click', function () {
        $('.situations .situations-box .situation .content .shares-box .item').removeClass('active')
        var $button = $(this);
        var $value = $(this).data('value');
        $button.closest('.item').addClass('active').closest('.content').find('.number-input').val($value);

    });

    $('.donations .bottom-box .donation .content .shares-box .item .share').on('click', function () {
        $('.donations .bottom-box .donation .content .shares-box .item').removeClass('active')
        var $button = $(this);
        var $value = $(this).data('value');
        $button.closest('.item').addClass('active').closest('.content').find('.number-input').val($value);

    });

    $('.quick-donation .donation-box').owlCarousel({
        loop: true,
        margin: 20,
        rtl: true,
        nav: false,
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
            },
            575: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1200: {
                items: 4,
            }

        }
    });

    $('.auth-sec .right-sec .middle-box .otp-box .otp-input').on('input', function () {
        if ($(this).val().length === 1) {
            // Move to the next input if it exists
            $(this).next('.otp-input').focus();
        }
    });

    $('.auth-sec .right-sec .middle-box .otp-box .otp-input').on('keydown', function (e) {
        if (e.key === 'Backspace' && $(this).val() === '') {
            // Move to the previous input if it exists
            $(this).prev('.otp-input').focus();
        }
    });

    $('.donations .top-box .bottom .cats').owlCarousel({
        margin: 10,
        rtl: true,
        nav: false,
        dots: false,
        stagePadding: 15,
        responsiveClass: true,
        autoWidth: true,
    });

    function activateCarousel() {
        const screenWidth = $(window).width();
        const $carousel = $('.categories .categories-box');

        if (screenWidth <= 992) { // Tablets & Mobile
            if (!$carousel.hasClass('owl-carousel')) {
                $carousel.addClass('owl-carousel owl-theme').owlCarousel({
                    loop: true,
                    margin: 20,
                    rtl: true,
                    nav: false,
                    dots: false,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    responsiveClass: true,
                    stagePadding: 0,
                    responsive: {
                        0: {
                            items: 2
                        },
                        600: {
                            items: 3
                        }
                    }
                });
            }
        } else {
            if ($carousel.hasClass('owl-carousel')) {
                $carousel.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-theme');
                $carousel.find('.owl-stage-outer').children().unwrap();
            }
        }
    }

    $('.auth-sec .right-sec .middle-box .otp-box .otp-input').on('keydown', function (e) {
        if (e.key === 'Backspace' && $(this).val() === '') {
            // Move to the previous input if it exists
            $(this).prev('.otp-input').focus();
        }
    });

    $('.sms-donations .donations-box').owlCarousel({
        loop: true,
        margin: 0,
        rtl: true,
        nav: true,
        dots: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        stagePadding: 0,
        navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>',
        ],
        responsive: {
            0: {
                items: 3
            }
        }
    });

    $('.testimonials .testimonials-box').owlCarousel({
        loop: true,
        // margin: 30,
        rtl: true,
        nav: true,
        dots: true,
        center: true,
        // autoplay: true,
        // autoplayTimeout: 5000,
        // autoplayHoverPause: true,
        // responsiveClass: true,
        // autoWidth:true,

        // stagePadding: 200,
        navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>',
        ],
        responsive: {
            0: {
                items: 3
            }
        },
    });

    $('.videos-sec .videos-box').owlCarousel({
        loop: true,
        margin: 0,
        rtl: true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        stagePadding: 0,
        navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>',
        ],
        responsive: {
            0: {
                items: 1
            }
        }
    });
});