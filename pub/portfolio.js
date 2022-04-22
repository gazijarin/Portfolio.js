/* Portfolio */
"use strict";

(function(global, document, $) {
  function Portfolio() {}

  Portfolio.prototype = {
    createAbout: function(location) {
      const newAbout = new About(location);
      return newAbout;
    },
    createItemDisplay: function(location) {
      const newItemDisplay = new ItemDisplay(location);
      return newItemDisplay;
    },
    createExpDisplay: function(location) {
      const newExpDisplay = new ExpDisplay(location);
      return newExpDisplay;
    }
  };

  global.Portfolio = global.Portfolio || Portfolio;
})(window, window.document, $); // pass the global window object and jquery to the anonymous function. They will now be locally scoped inside of the function.
