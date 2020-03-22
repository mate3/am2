export class MobileMenu {
  constructor (
    headerElement = '.js-header',
    mobileTrigger = '.js-mobile-menu-trigger',
    mainMenu = '.js-header-menu',
  ) {
    this.headerElement = document.querySelector(headerElement);
    this.mobileTrigger = document.querySelector(mobileTrigger);
    this.mainMenu = this.headerElement.querySelector(mainMenu);
    this.body = document.querySelector('body');

    this.CLASS_ACTIVE = 'is-active';
    this.NO_SCROLL_CLASS = 'overflow-hidden';
    this.CLASS_DARK = 'dark';
    this.CLASS_HOME = 'home';
    this.CLASS_TOP = 'is-top';
    this.CLASS_OVERFLOW = 'no-scroll';

    this.CLASSES_FOR_DARK = [this.CLASS_DARK, this.CLASS_HOME]
  }

  openMenuCallback = (e) => {
    e.preventDefault();
    this.mainMenu.classList.toggle(this.CLASS_ACTIVE);
    this.mobileTrigger.classList.toggle(this.CLASS_ACTIVE);
    this.body.classList.toggle(this.CLASS_OVERFLOW);
  }
}
