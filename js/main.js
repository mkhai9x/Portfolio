

jQuery(function ($) {

    // The speed of the scroll in milliseconds
    const speed = 700;

    // Find links that are #anchors and scroll to them
    $('a[href^="#"]')
        .not('.lp-pom-form .lp-pom-button')
        .unbind('click.smoothScroll')
        .bind('click.smoothScroll', function (event) {
            event.preventDefault();
            const href = $(this).attr('href').split('#');
            $('html, body').animate({ scrollTop: $(`#${href[1]}`).offset().top }, speed);
        });
});

//Owl-carousel
$('.site-main .about-area .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        544: {
            items: 2
        }
    }
})

//sticky navigation menu
let nav_offset_top = $('.header_area').height() + 50;
function navbarFixed() {
    if ($('.header_area').length) {
        $(window).scroll(function () {
            let scroll = $(window).scrollTop();
            if (scroll >= nav_offset_top) {
                $('.header_area .main-menu').addClass('navbar_fixed');
            } else {
                $('.header_area .main-menu').removeClass('navbar_fixed');
            }
        })
    }
}

navbarFixed();