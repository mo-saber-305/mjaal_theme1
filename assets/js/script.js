$(document).ready(function () {
    $('header .hero .hero-box').owlCarousel({
        loop: false,
        rtl: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },

        }
    });

    let features_slider_owl = $('#home_page .features .slider-box .right-box .slider');
    features_slider_owl.owlCarousel({
        loop: true,
        rtl: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
        }
    });

    features_slider_owl.on('changed.owl.carousel', function (event) {
        const currentIndex = event.item.index - event.relatedTarget._clones.length / 2;
        const totalItems = event.item.count;
        const normalizedIndex = (currentIndex + totalItems) % totalItems;
        $('#home_page .features .slider-box .left-box .card .card-body .item').removeClass('active');
        $(`#home_page .features .slider-box .left-box .card .card-body .item[data-index="${normalizedIndex}"]`).addClass('active');
    });

    $('#home_page .features .slider-box .left-box .card .card-body .item').on('click', function () {
        const index = $(this).data('index');
        $(this).addClass('active').siblings().removeClass('active')
        features_slider_owl.trigger('to.owl.carousel', [index, 300]);
    });

    $('#home_page .partners .partners-box').owlCarousel({
        loop: true,
        margin: 30,
        rtl: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            380: {
                items: 2
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            },
            1200: {
                items: 7,
            }
        }
    });

    $('#home_page .website-control .website-control-box').owlCarousel({
        loop: true,
        rtl: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
        }
    })

    $('#home_page .testimonials .testimonials-box').owlCarousel({
        // stagePadding: 60,
        loop: true,
        margin: 30,
        rtl: true,
        nav: true,
        dots: true,
        navText: ['<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M9.5 4.96436L17 12.4644L9.5 19.9644" stroke="#363A3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>', '<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M15.5 19.9644L8 12.4644L15.5 4.96436" stroke="#363A3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        }
    })

    let donations_slider_owl = $('#home_page .donations .right-box .donations-box')

    donations_slider_owl.owlCarousel({
        loop: true,
        rtl: true,
        dots: false,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
        }
    })

    donations_slider_owl.on('changed.owl.carousel', function (event) {
        const currentIndex = event.item.index - event.relatedTarget._clones.length / 2;
        const totalItems = event.item.count;
        const normalizedIndex = (currentIndex + totalItems) % totalItems;
        $('#home_page .donations .left-box .item').removeClass('active');
        $(`#home_page .donations .left-box .item[data-index="${normalizedIndex}"]`).addClass('active');
    });

    $('#home_page .donations .left-box .item').on('click', function () {
        const index = $(this).data('index');
        $(this).addClass('active').closest('.item-box').siblings().find('.item').removeClass('active')
        donations_slider_owl.trigger('to.owl.carousel', [index, 300]);
    });
});