/* eslint-disable no-undef */
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
  },
});
