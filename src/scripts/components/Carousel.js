import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(element) {
    this.element = element;
    this.options = {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
        type: 'bullets',
      },
      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
      breakpoints: {},
      autoplay: false,
      loop: false,
    };
    this.setOptions();
    this.init();
  }
  setOptions() {
    console.log('option');
    if ('split' in this.element.dataset) {
      console.log('slppit');
      this.options.breakpoint = {
        720: {
          slidesPerView: 2.5,
        },
      };
    }
    if ('autoplay' in this.element.dataset) {
      console.log('auto');
      this.options.autoplay = {
        delay: 3000,
        disableOnInteraction: true,
      };
    }
    if ('loop' in this.element.dataset) {
      console.log('loop');
      this.options.loop = this.element.dataset.loop;
    }
    if ('slidesperview' in this.element.dataset) {
      console.log('slidesperview');
      this.options.slidesPerView =
        parseFloat(this.element.dataset.slidesperview) ||
        this.options.slidesPerView;
    }
  }
  init() {
    new Swiper(this.element, this.options);
  }
}
