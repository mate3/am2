import { MobileMenu } from './mobile-menu.js';

document.addEventListener('DOMContentLoaded', function() {
  //const header = new Header();
  const mobileMenu = new MobileMenu();

  //header.init();

  mobileMenu.mobileTrigger.addEventListener('click', mobileMenu.openMenuCallback);

});
