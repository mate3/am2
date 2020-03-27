export class StickyHeader {
  constructor(
    headerElement = '.js-header',
    stickyHeaderElement = '.js-sticky-header'
  ) {
    this.headerElement = document.querySelector(headerElement);
    this.stickyHeaderElement = document.querySelector(stickyHeaderElement);
    this.CLASS_STICKY = 'is-sticky';
    this.headerElementOriginalPosition = this.headerElement.offsetTop;
  }

  stickHeader = (window, header) => {
    if (window > header) {
      this.stickyHeaderElement.classList.add(this.CLASS_STICKY);
      this.headerElement.classList.add(this.CLASS_STICKY);
    } else {
      this.stickyHeaderElement.classList.remove(this.CLASS_STICKY);
      this.headerElement.classList.remove(this.CLASS_STICKY);
    }
  }

  init = () => {
    window.addEventListener('scroll', () => {
      const windowScrollPosition = window.pageYOffset;
      const headerOriginalPosition = this.headerElement.offsetTop;
      
      this.stickHeader(windowScrollPosition, headerOriginalPosition);
    });
  }

}
