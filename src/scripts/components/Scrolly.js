export default class Scrolly {

  constructor(element) {
   
    this.element = element;
    this.options = {
      rootMargin: '0px',
      repeat: true,
    };

   
   
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
    if ('noRepeat' in this.element.dataset) {
      this.options.repeat = false;
    }else {
      this.options.repeat = true;
    }
  }

  watch(entries,observer) {
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const target = entry.target;
      
      
      if (entry.isIntersecting) {
        
        target.classList.add('is-active');
        if ('noRepeat' in target.dataset) {
          observer.unobserve(target);
        }
      } else {
        target.classList.remove('is-active');
      }
    }
  }
}