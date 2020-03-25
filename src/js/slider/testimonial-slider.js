import Swiper from 'swiper';

export default class TestimonialSlider { 
  constructor(sliderSelector = '.js-testimonial-slider') {
    this.sliderSelector = sliderSelector;
  }

  init = () => {
    const swiper = new Swiper(this.sliderSelector, {
      fadeEffect: { crossFade: true },
      virtualTranslate: true,
      //autoHeight: true,
      speed: 1500,
      init: true,
      loop: true,
      slidesPerView: 1,
      effect: "fade",
      pagination: {
        el: '.swiper-pagination',
        bulletClass: 'testimonials__bullet',
        bulletActiveClass: 'testimonials__bullet--active',
        clickable: true
      },
    })
  }
}
