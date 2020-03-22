/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/navigation */ \"./src/js/navigation.js\");\n/* harmony import */ var _js_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/skip-link-focus-fix */ \"./src/js/skip-link-focus-fix.js\");\n/* harmony import */ var _js_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_header_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/header/index */ \"./src/js/header/index.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/MzcwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vanMvbmF2aWdhdGlvbic7XG5pbXBvcnQgJy4vanMvc2tpcC1saW5rLWZvY3VzLWZpeCc7XG5pbXBvcnQgJy4vanMvaGVhZGVyL2luZGV4JzsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/header/index.js":
/*!********************************!*\
  !*** ./src/js/header/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mobile_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile-menu.js */ \"./src/js/header/mobile-menu.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  //const header = new Header();\n  var mobileMenu = new _mobile_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"MobileMenu\"](); //header.init();\n\n  mobileMenu.mobileTrigger.addEventListener('click', mobileMenu.openMenuCallback);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaGVhZGVyL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlYWRlci9pbmRleC5qcz82MWU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vYmlsZU1lbnUgfSBmcm9tICcuL21vYmlsZS1tZW51LmpzJztcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gIC8vY29uc3QgaGVhZGVyID0gbmV3IEhlYWRlcigpO1xuICB2YXIgbW9iaWxlTWVudSA9IG5ldyBNb2JpbGVNZW51KCk7IC8vaGVhZGVyLmluaXQoKTtcblxuICBtb2JpbGVNZW51Lm1vYmlsZVRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb2JpbGVNZW51Lm9wZW5NZW51Q2FsbGJhY2spO1xufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/header/index.js\n");

/***/ }),

/***/ "./src/js/header/mobile-menu.js":
/*!**************************************!*\
  !*** ./src/js/header/mobile-menu.js ***!
  \**************************************/
/*! exports provided: MobileMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MobileMenu\", function() { return MobileMenu; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar MobileMenu = function MobileMenu() {\n  var _this = this;\n\n  var headerElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-header';\n  var mobileTrigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.js-mobile-menu-trigger';\n  var mainMenu = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.js-header-menu';\n\n  _classCallCheck(this, MobileMenu);\n\n  _defineProperty(this, \"openMenuCallback\", function (e) {\n    e.preventDefault();\n\n    _this.mainMenu.classList.toggle(_this.CLASS_ACTIVE);\n\n    _this.mobileTrigger.classList.toggle(_this.CLASS_ACTIVE);\n\n    _this.body.classList.toggle(_this.CLASS_OVERFLOW);\n  });\n\n  this.headerElement = document.querySelector(headerElement);\n  this.mobileTrigger = document.querySelector(mobileTrigger);\n  this.mainMenu = this.headerElement.querySelector(mainMenu);\n  this.body = document.querySelector('body');\n  this.CLASS_ACTIVE = 'is-active';\n  this.NO_SCROLL_CLASS = 'overflow-hidden';\n  this.CLASS_DARK = 'dark';\n  this.CLASS_HOME = 'home';\n  this.CLASS_TOP = 'is-top';\n  this.CLASS_OVERFLOW = 'no-scroll';\n  this.CLASSES_FOR_DARK = [this.CLASS_DARK, this.CLASS_HOME];\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaGVhZGVyL21vYmlsZS1tZW51LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlYWRlci9tb2JpbGUtbWVudS5qcz8wMjg2Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmV4cG9ydCB2YXIgTW9iaWxlTWVudSA9IGZ1bmN0aW9uIE1vYmlsZU1lbnUoKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIGhlYWRlckVsZW1lbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcuanMtaGVhZGVyJztcbiAgdmFyIG1vYmlsZVRyaWdnZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcuanMtbW9iaWxlLW1lbnUtdHJpZ2dlcic7XG4gIHZhciBtYWluTWVudSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJy5qcy1oZWFkZXItbWVudSc7XG5cbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vYmlsZU1lbnUpO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9wZW5NZW51Q2FsbGJhY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBfdGhpcy5tYWluTWVudS5jbGFzc0xpc3QudG9nZ2xlKF90aGlzLkNMQVNTX0FDVElWRSk7XG5cbiAgICBfdGhpcy5tb2JpbGVUcmlnZ2VyLmNsYXNzTGlzdC50b2dnbGUoX3RoaXMuQ0xBU1NfQUNUSVZFKTtcblxuICAgIF90aGlzLmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShfdGhpcy5DTEFTU19PVkVSRkxPVyk7XG4gIH0pO1xuXG4gIHRoaXMuaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaGVhZGVyRWxlbWVudCk7XG4gIHRoaXMubW9iaWxlVHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobW9iaWxlVHJpZ2dlcik7XG4gIHRoaXMubWFpbk1lbnUgPSB0aGlzLmhlYWRlckVsZW1lbnQucXVlcnlTZWxlY3RvcihtYWluTWVudSk7XG4gIHRoaXMuYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgdGhpcy5DTEFTU19BQ1RJVkUgPSAnaXMtYWN0aXZlJztcbiAgdGhpcy5OT19TQ1JPTExfQ0xBU1MgPSAnb3ZlcmZsb3ctaGlkZGVuJztcbiAgdGhpcy5DTEFTU19EQVJLID0gJ2RhcmsnO1xuICB0aGlzLkNMQVNTX0hPTUUgPSAnaG9tZSc7XG4gIHRoaXMuQ0xBU1NfVE9QID0gJ2lzLXRvcCc7XG4gIHRoaXMuQ0xBU1NfT1ZFUkZMT1cgPSAnbm8tc2Nyb2xsJztcbiAgdGhpcy5DTEFTU0VTX0ZPUl9EQVJLID0gW3RoaXMuQ0xBU1NfREFSSywgdGhpcy5DTEFTU19IT01FXTtcbn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/header/mobile-menu.js\n");

/***/ }),

/***/ "./src/js/navigation.js":
/*!******************************!*\
  !*** ./src/js/navigation.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * File navigation.js.\n *\n * Handles toggling the navigation menu for small screens and enables TAB key\n * navigation support for dropdown menus.\n */\n(function () {\n  var container, button, menu, links, i, len;\n  container = document.getElementById('site-navigation');\n\n  if (!container) {\n    return;\n  }\n\n  button = container.getElementsByTagName('button')[0];\n\n  if ('undefined' === typeof button) {\n    return;\n  }\n\n  menu = container.getElementsByTagName('ul')[0]; // Hide menu toggle button if menu is empty and return early.\n\n  if ('undefined' === typeof menu) {\n    button.style.display = 'none';\n    return;\n  }\n\n  menu.setAttribute('aria-expanded', 'false');\n\n  if (-1 === menu.className.indexOf('nav-menu')) {\n    menu.className += ' nav-menu';\n  }\n\n  button.onclick = function () {\n    if (-1 !== container.className.indexOf('toggled')) {\n      container.className = container.className.replace(' toggled', '');\n      button.setAttribute('aria-expanded', 'false');\n      menu.setAttribute('aria-expanded', 'false');\n    } else {\n      container.className += ' toggled';\n      button.setAttribute('aria-expanded', 'true');\n      menu.setAttribute('aria-expanded', 'true');\n    }\n  }; // Get all the link elements within the menu.\n\n\n  links = menu.getElementsByTagName('a'); // Each time a menu link is focused or blurred, toggle focus.\n\n  for (i = 0, len = links.length; i < len; i++) {\n    links[i].addEventListener('focus', toggleFocus, true);\n    links[i].addEventListener('blur', toggleFocus, true);\n  }\n  /**\n   * Sets or removes .focus class on an element.\n   */\n\n\n  function toggleFocus() {\n    var self = this; // Move up through the ancestors of the current link until we hit .nav-menu.\n\n    while (-1 === self.className.indexOf('nav-menu')) {\n      // On li elements toggle the class .focus.\n      if ('li' === self.tagName.toLowerCase()) {\n        if (-1 !== self.className.indexOf('focus')) {\n          self.className = self.className.replace(' focus', '');\n        } else {\n          self.className += ' focus';\n        }\n      }\n\n      self = self.parentElement;\n    }\n  }\n  /**\n   * Toggles `focus` class to allow submenu access on tablets.\n   */\n\n\n  (function (container) {\n    var touchStartFn,\n        i,\n        parentLink = container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');\n\n    if ('ontouchstart' in window) {\n      touchStartFn = function touchStartFn(e) {\n        var menuItem = this.parentNode,\n            i;\n\n        if (!menuItem.classList.contains('focus')) {\n          e.preventDefault();\n\n          for (i = 0; i < menuItem.parentNode.children.length; ++i) {\n            if (menuItem === menuItem.parentNode.children[i]) {\n              continue;\n            }\n\n            menuItem.parentNode.children[i].classList.remove('focus');\n          }\n\n          menuItem.classList.add('focus');\n        } else {\n          menuItem.classList.remove('focus');\n        }\n      };\n\n      for (i = 0; i < parentLink.length; ++i) {\n        parentLink[i].addEventListener('touchstart', touchStartFn, false);\n      }\n    }\n  })(container);\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbmF2aWdhdGlvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9uYXZpZ2F0aW9uLmpzPzIzNmIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGaWxlIG5hdmlnYXRpb24uanMuXG4gKlxuICogSGFuZGxlcyB0b2dnbGluZyB0aGUgbmF2aWdhdGlvbiBtZW51IGZvciBzbWFsbCBzY3JlZW5zIGFuZCBlbmFibGVzIFRBQiBrZXlcbiAqIG5hdmlnYXRpb24gc3VwcG9ydCBmb3IgZHJvcGRvd24gbWVudXMuXG4gKi9cbihmdW5jdGlvbiAoKSB7XG4gIHZhciBjb250YWluZXIsIGJ1dHRvbiwgbWVudSwgbGlua3MsIGksIGxlbjtcbiAgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtbmF2aWdhdGlvbicpO1xuXG4gIGlmICghY29udGFpbmVyKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYnV0dG9uID0gY29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdidXR0b24nKVswXTtcblxuICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBidXR0b24pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBtZW51ID0gY29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd1bCcpWzBdOyAvLyBIaWRlIG1lbnUgdG9nZ2xlIGJ1dHRvbiBpZiBtZW51IGlzIGVtcHR5IGFuZCByZXR1cm4gZWFybHkuXG5cbiAgaWYgKCd1bmRlZmluZWQnID09PSB0eXBlb2YgbWVudSkge1xuICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cbiAgaWYgKC0xID09PSBtZW51LmNsYXNzTmFtZS5pbmRleE9mKCduYXYtbWVudScpKSB7XG4gICAgbWVudS5jbGFzc05hbWUgKz0gJyBuYXYtbWVudSc7XG4gIH1cblxuICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoLTEgIT09IGNvbnRhaW5lci5jbGFzc05hbWUuaW5kZXhPZigndG9nZ2xlZCcpKSB7XG4gICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gY29udGFpbmVyLmNsYXNzTmFtZS5yZXBsYWNlKCcgdG9nZ2xlZCcsICcnKTtcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgKz0gJyB0b2dnbGVkJztcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgIH1cbiAgfTsgLy8gR2V0IGFsbCB0aGUgbGluayBlbGVtZW50cyB3aXRoaW4gdGhlIG1lbnUuXG5cblxuICBsaW5rcyA9IG1lbnUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKTsgLy8gRWFjaCB0aW1lIGEgbWVudSBsaW5rIGlzIGZvY3VzZWQgb3IgYmx1cnJlZCwgdG9nZ2xlIGZvY3VzLlxuXG4gIGZvciAoaSA9IDAsIGxlbiA9IGxpbmtzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgbGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0b2dnbGVGb2N1cywgdHJ1ZSk7XG4gICAgbGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRvZ2dsZUZvY3VzLCB0cnVlKTtcbiAgfVxuICAvKipcbiAgICogU2V0cyBvciByZW1vdmVzIC5mb2N1cyBjbGFzcyBvbiBhbiBlbGVtZW50LlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUZvY3VzKCkge1xuICAgIHZhciBzZWxmID0gdGhpczsgLy8gTW92ZSB1cCB0aHJvdWdoIHRoZSBhbmNlc3RvcnMgb2YgdGhlIGN1cnJlbnQgbGluayB1bnRpbCB3ZSBoaXQgLm5hdi1tZW51LlxuXG4gICAgd2hpbGUgKC0xID09PSBzZWxmLmNsYXNzTmFtZS5pbmRleE9mKCduYXYtbWVudScpKSB7XG4gICAgICAvLyBPbiBsaSBlbGVtZW50cyB0b2dnbGUgdGhlIGNsYXNzIC5mb2N1cy5cbiAgICAgIGlmICgnbGknID09PSBzZWxmLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBpZiAoLTEgIT09IHNlbGYuY2xhc3NOYW1lLmluZGV4T2YoJ2ZvY3VzJykpIHtcbiAgICAgICAgICBzZWxmLmNsYXNzTmFtZSA9IHNlbGYuY2xhc3NOYW1lLnJlcGxhY2UoJyBmb2N1cycsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLmNsYXNzTmFtZSArPSAnIGZvY3VzJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzZWxmID0gc2VsZi5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogVG9nZ2xlcyBgZm9jdXNgIGNsYXNzIHRvIGFsbG93IHN1Ym1lbnUgYWNjZXNzIG9uIHRhYmxldHMuXG4gICAqL1xuXG5cbiAgKGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICB2YXIgdG91Y2hTdGFydEZuLFxuICAgICAgICBpLFxuICAgICAgICBwYXJlbnRMaW5rID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYSwgLnBhZ2VfaXRlbV9oYXNfY2hpbGRyZW4gPiBhJyk7XG5cbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB7XG4gICAgICB0b3VjaFN0YXJ0Rm4gPSBmdW5jdGlvbiB0b3VjaFN0YXJ0Rm4oZSkge1xuICAgICAgICB2YXIgbWVudUl0ZW0gPSB0aGlzLnBhcmVudE5vZGUsXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIGlmICghbWVudUl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmb2N1cycpKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IG1lbnVJdGVtLnBhcmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChtZW51SXRlbSA9PT0gbWVudUl0ZW0ucGFyZW50Tm9kZS5jaGlsZHJlbltpXSkge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWVudUl0ZW0ucGFyZW50Tm9kZS5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IHBhcmVudExpbmsubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgcGFyZW50TGlua1tpXS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdG91Y2hTdGFydEZuLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9KShjb250YWluZXIpO1xufSkoKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/navigation.js\n");

/***/ }),

/***/ "./src/js/skip-link-focus-fix.js":
/*!***************************************!*\
  !*** ./src/js/skip-link-focus-fix.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * File skip-link-focus-fix.js.\n *\n * Helps with accessibility for keyboard only users.\n *\n * Learn more: https://git.io/vWdr2\n */\n(function () {\n  var isIe = /(trident|msie)/i.test(navigator.userAgent);\n\n  if (isIe && document.getElementById && window.addEventListener) {\n    window.addEventListener('hashchange', function () {\n      var id = location.hash.substring(1),\n          element;\n\n      if (!/^[A-z0-9_-]+$/.test(id)) {\n        return;\n      }\n\n      element = document.getElementById(id);\n\n      if (element) {\n        if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {\n          element.tabIndex = -1;\n        }\n\n        element.focus();\n      }\n    }, false);\n  }\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2tpcC1saW5rLWZvY3VzLWZpeC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9za2lwLWxpbmstZm9jdXMtZml4LmpzP2VjYjAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGaWxlIHNraXAtbGluay1mb2N1cy1maXguanMuXG4gKlxuICogSGVscHMgd2l0aCBhY2Nlc3NpYmlsaXR5IGZvciBrZXlib2FyZCBvbmx5IHVzZXJzLlxuICpcbiAqIExlYXJuIG1vcmU6IGh0dHBzOi8vZ2l0LmlvL3ZXZHIyXG4gKi9cbihmdW5jdGlvbiAoKSB7XG4gIHZhciBpc0llID0gLyh0cmlkZW50fG1zaWUpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICBpZiAoaXNJZSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlkID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSksXG4gICAgICAgICAgZWxlbWVudDtcblxuICAgICAgaWYgKCEvXltBLXowLTlfLV0rJC8udGVzdChpZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoIS9eKD86YXxzZWxlY3R8aW5wdXR8YnV0dG9ufHRleHRhcmVhKSQvaS50ZXN0KGVsZW1lbnQudGFnTmFtZSkpIHtcbiAgICAgICAgICBlbGVtZW50LnRhYkluZGV4ID0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSwgZmFsc2UpO1xuICB9XG59KSgpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/skip-link-focus-fix.js\n");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Fzcy9zdHlsZS5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz8zYWM0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sass/style.scss\n");

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/sass/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/sass/style.scss */"./src/sass/style.scss");


/***/ })

/******/ });