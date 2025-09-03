export default class Scrolly {

  constructor(element) {
   
    this.element = element;
    this.options = {
      rootMargin: '0px',
      repeat: true,
    };
    this.delay = 0;
   
   
    this.init();
  }
  init() {
     this.setOptions();
   
    const observer = new IntersectionObserver(
      this.watch.bind(this), 
      this.options
    );
   
    
    const targets = this.element.querySelectorAll('[data-scrolly]');
    for (let index = 0; index < targets.length; index++) {
      const target = targets[index];
      observer.observe(target,observer.options);
    }
  }

  setOptions() {
    console.log('ask prof for help for scrollydelay')
    if ('noRepeat' in this.element.dataset) {
      this.options.repeat = false;
    }else {
      this.options.repeat = true;
    }
    
    if ('scrollyDelay' in this.element.dataset) {
      this.delay = this.element.getAttribute("scrolly-delay");
    }
  }

  watch(entries,observer) {
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const target = entry.target;
      
      
      if (entry.isIntersecting) {
        setTimeout(function(){
          if ('noRepeat' in target.dataset) {
          observer.unobserve(target);
          }else {
            target.classList.remove('is-active');
          }
        },this.delay * 1000)
        target.classList.add('is-active');
      }
    }
  }
}