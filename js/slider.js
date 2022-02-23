// Swiper.use([Autoplay]);
// Swiper.use([Navigation]);
// Swiper.use([Pagination]);

const slider = () => {
   const swiper = new Swiper('.swiper', {
   loop: true,
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   },

   navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
   },

   pagination: {
      el: ".swiper-pagination",
   },
   });
}

slider();