// library Swiper
var swiper = new Swiper('.big_slider', {
      pagination: {
            el: '.swiper-pagination',
      },
      autoplay: {
            delay: 3000
      },
      speed: 800
});
var swiper = new Swiper('.small_slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
      },
      autoplay: {
            delay: 3000
      },
      speed: 800
});