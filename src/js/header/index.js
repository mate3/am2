import { MobileMenu } from './mobile-menu.js';
import { StickyHeader } from './sticky-header';

document.addEventListener('DOMContentLoaded', function() {
  const stickyHeader = new StickyHeader();
  const mobileMenu = new MobileMenu();

  stickyHeader.init();

  mobileMenu.mobileTrigger.addEventListener('click', mobileMenu.openMenuCallback);

});
