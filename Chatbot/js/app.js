// $(document).ready(function() {
//     $('.banner__home').slick({
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         fade: true,
//         cssEase: 'ease-in-out',
//         touchThreshold: 100,
//         prevArrow: '<div class="slick-arrow slick-prev"><i class="pe-7s-angle-left-circle" aria-hidden="true"></i></div>',
//         nextArrow: '<div class="slick-arrow slick-next"><i class="pe-7s-angle-right-circle" aria-hidden="true"></i></div>',
//         customPaging: function(slick, index) {
//             return "<span></span>";
//         }
//     });
//     //
//     $('.section__product').slick({
//         infinite: true,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         // autoplay: true,
//         // autoplaySpeed: 2000,
//         // fade: true,
//         // cssEase: 'ease-in-out',
//         // touchThreshold: 100,
//         prevArrow: '<div class="slick-arrow slick-prev"><i class="pe-7s-angle-left-circle" aria-hidden="true"></i></div>',
//         nextArrow: '<div class="slick-arrow slick-next"><i class="pe-7s-angle-right-circle" aria-hidden="true"></i></div>',
//         customPaging: function(slick, index) {
//             return "<span></span>";
//         }
//     });

//     $(window).scroll(function() {
//         const fromTop = $(this).scrollTop();
//         if (fromTop > 400) {
//             $('.header__top').addClass('scroll__active');
//         } else {
//             $('.header__top').removeClass('scroll__active');
//         }
//     });
(function($) {
    $('.pe-7s-search').click(function() {
        $('.search').toggleClass('active-search');
    });
    $('.mess__icon').click(function() {
        $('.mess__window').addClass('active-mess');
    });
    $('.pe-7s-close').click(function() {
        $('.mess__window').removeClass('active-mess');
    });
    !(function() {
        let e = document.createElement("script"),
            t = document.head || document.getElementsByTagName("head")[0];
        (e.src =
            "https://cdn.jsdelivr.net/npm/rasa-webchat/lib/index.js"),
        (e.async = !0),
        (e.onload = () => {
            window.WebChat.default({
                    customData: { language: "en" },
                    socketUrl: "http://localhost:5005",
                },
                null
            );
        }),
        t.insertBefore(e, t.firstChild);
    })();
})(jQuery);

// console.log("hihi")