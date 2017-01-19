'use strict';

(function(module) {
  const contactController = {};

  contactController.index = () => {
    $('#contact').show().siblings().hide(); // REVIEW: We have a slight refactor in selectors here, which has reduced the amount of code from the last lab.
  };

  module.contactController = contactController;
})(window);
