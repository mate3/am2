!function(t){var i={};function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)c.d(t,i,function(e){return n[e]}.bind(null,i));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c(c.s=5)}({5:function(module,exports){eval("/**\n * File customizer.js.\n *\n * Theme Customizer enhancements for a better user experience.\n *\n * Contains handlers to make Theme Customizer preview reload changes asynchronously.\n */\n(function ($) {\n  // Site title and description.\n  wp.customize('blogname', function (value) {\n    value.bind(function (to) {\n      $('.site-title a').text(to);\n    });\n  });\n  wp.customize('blogdescription', function (value) {\n    value.bind(function (to) {\n      $('.site-description').text(to);\n    });\n  }); // Header text color.\n\n  wp.customize('header_textcolor', function (value) {\n    value.bind(function (to) {\n      if ('blank' === to) {\n        $('.site-title, .site-description').css({\n          clip: 'rect(1px, 1px, 1px, 1px)',\n          position: 'absolute'\n        });\n      } else {\n        $('.site-title, .site-description').css({\n          clip: 'auto',\n          position: 'relative'\n        });\n        $('.site-title a, .site-description').css({\n          color: to\n        });\n      }\n    });\n  });\n})(jQuery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jdXN0b21pemVyLmpzPzA2ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGaWxlIGN1c3RvbWl6ZXIuanMuXG4gKlxuICogVGhlbWUgQ3VzdG9taXplciBlbmhhbmNlbWVudHMgZm9yIGEgYmV0dGVyIHVzZXIgZXhwZXJpZW5jZS5cbiAqXG4gKiBDb250YWlucyBoYW5kbGVycyB0byBtYWtlIFRoZW1lIEN1c3RvbWl6ZXIgcHJldmlldyByZWxvYWQgY2hhbmdlcyBhc3luY2hyb25vdXNseS5cbiAqL1xuKGZ1bmN0aW9uICgkKSB7XG4gIC8vIFNpdGUgdGl0bGUgYW5kIGRlc2NyaXB0aW9uLlxuICB3cC5jdXN0b21pemUoJ2Jsb2duYW1lJywgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFsdWUuYmluZChmdW5jdGlvbiAodG8pIHtcbiAgICAgICQoJy5zaXRlLXRpdGxlIGEnKS50ZXh0KHRvKTtcbiAgICB9KTtcbiAgfSk7XG4gIHdwLmN1c3RvbWl6ZSgnYmxvZ2Rlc2NyaXB0aW9uJywgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFsdWUuYmluZChmdW5jdGlvbiAodG8pIHtcbiAgICAgICQoJy5zaXRlLWRlc2NyaXB0aW9uJykudGV4dCh0byk7XG4gICAgfSk7XG4gIH0pOyAvLyBIZWFkZXIgdGV4dCBjb2xvci5cblxuICB3cC5jdXN0b21pemUoJ2hlYWRlcl90ZXh0Y29sb3InLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YWx1ZS5iaW5kKGZ1bmN0aW9uICh0bykge1xuICAgICAgaWYgKCdibGFuaycgPT09IHRvKSB7XG4gICAgICAgICQoJy5zaXRlLXRpdGxlLCAuc2l0ZS1kZXNjcmlwdGlvbicpLmNzcyh7XG4gICAgICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCcuc2l0ZS10aXRsZSwgLnNpdGUtZGVzY3JpcHRpb24nKS5jc3Moe1xuICAgICAgICAgIGNsaXA6ICdhdXRvJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgICAgICB9KTtcbiAgICAgICAgJCgnLnNpdGUtdGl0bGUgYSwgLnNpdGUtZGVzY3JpcHRpb24nKS5jc3Moe1xuICAgICAgICAgIGNvbG9yOiB0b1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59KShqUXVlcnkpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n")}});