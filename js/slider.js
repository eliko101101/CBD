$('.prod-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
<<<<<<< HEAD
    arrows: false,
=======
    arrows: true,
>>>>>>> dd7a6e5b82577c3c98b96e791622498dc8f7449f
    autoplay: true,
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

$('.response-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 350,
  autoplay: true,
  arrows: false,
 
});