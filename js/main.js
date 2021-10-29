new WOW().init();

// library Swiper
var swiper_big = new Swiper('.big_slider', {
      pagination: {
            el: '.swiper-pagination',
            clickable: true,
      },
      loop: true,
      autoplay: {
            delay: 2500,
            disableOnInteraction: false
      },
      speed: 1000,
      effect: 'fade'
});

var swiper_small = new Swiper('.small_slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
      },
      autoplay: {
            delay: 3000,
            disableOnInteraction: false
      },
      speed: 1000,
      loop : true,
      breakpoints: {
            // when window width is >= 320px
            320: {
                  slidesPerView: 1,
                  spaceBetween: 10
            },
            // when window width is >= 767px
            767: {
                  slidesPerView: 1,
                  spaceBetween: 10
            },
            // when window width is >= 780px
            780: {
                  slidesPerView: 2,
                  spaceBetween: 20
            },
            // when window width is >= 1024px
            1024: {
                  slidesPerView: 3,
                  spaceBetween: 30
            }
      },
      
});