// $(document).ready(function () {

//     $('.slider').slick({
//         dots: true,
//         arrows: true,
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000
//     });

// });

$(document).ready(function () {

    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        infinite: true,
        cssEase: 'linear',

    });

});

$('.testimonial-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,

        centerMode: true,
        centerPadding: '220px',

        infinite: true,

        arrows: true,
        dots: true,

        autoplay: true,
      
});