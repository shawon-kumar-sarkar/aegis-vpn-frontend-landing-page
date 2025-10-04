/* eslint-disable no-undef */
const slider = new KeenSlider("#my-keen-slider", {
  slides: {
    perView: 2,
    spacing: 30,
  },
  breakpoints: {
    "(max-width: 640px)": {
      slides: {
        perView: 1,
        spacing: 20,
      },
    },
  },
});
