$(document).on('ready', function() {
      $(".regular").slick({
        slidesToShow: 3,
        // initialSlide: 2,
        centerMode: true,
        centerPadding: "0",
        arrows: true,
        dots: false,
        infinite: true,
        cssEase: 'linear',
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    });