
export default class Header {
  constructor(element) {
    this.element = element;
    this.options = {
      threshold: 0.02,
      hide: true,
    };

    this.lastScrollPos = 0;
    this.scrollPos = 0;
    this.html = document.documentElement;

    this.init();
    this.initNavMobile();
  }

  init() {
 
    this.setOptions();
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll() {
    this.lastScrollPos = this.scrollPos;
    this.scrollPos = document.scrollingElement.scrollTop;

    this.setDirections();
    this.setHeaderState();
  }

  setHeaderState() {
    
    if (this.options.hide){
      if ( this.scrollPos >= document.scrollingElement.scrollHeight * this.options.threshold) {
        this.html.classList.add('header-is-hidden');
      } else if (this.scrollPos < this.lastScrollPos) {
        this.html.classList.remove('header-is-hidden');
      }
    }
   
  }

  setDirections() {
    if (this.scrollPos >= this.lastScrollPos) {
      this.html.classList.add('is-scrolling-down');
      this.html.classList.remove('is-scrolling-up');
      //going down
    } else {
      this.html.classList.remove('is-scrolling-down');
      this.html.classList.add('is-scrolling-up');
      //going up
    }
  }

  setOptions() {
    if ("threshold" in this.element.dataset){
      this.options.threshold = this.element.getAttribute("data-threshold");
    }
    if ("alwaysShow" in this.element.dataset){
      this.options.hide = false;
    }
  }
  initNavMobile() {
    const toggle = this.element.querySelector('.js-toggle');
    toggle.addEventListener('click', this.onToggleNav.bind(this));
  }

  onToggleNav() {
    this.html.classList.toggle('nav-is-active');
  }
}