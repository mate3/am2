import Swiper from 'swiper';

export default class Slider { 
  constructor(sliderSelector = '.js-slider') {
    this.sliderSelector = sliderSelector;
  }

  init = () => {
    const swiper = new Swiper(this.sliderSelector, {
      speed: 200,
      init: true,
      loop: false,
      centeredSlides: true,
      breakpointsInverse: true,
      slidesPerView: 1,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      pagination: {
        el: '.swiper-pagination',
        bulletClass: 'slider__bullet',
        bulletActiveClass: 'slider__bullet--active',
        clickable: true
      },
    })
  }
}
