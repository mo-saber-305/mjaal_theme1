$(document).ready(function () {
    $('#home_page .partners .partners-box').owlCarousel({
        loop: false,
        margin: 30,
        rtl: true,
        responsiveClass: true,
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
});