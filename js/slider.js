$('.prod-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 300,
    arrows: true,
    responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ] 
});